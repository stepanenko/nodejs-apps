
import React, { Component } from 'react';
import './App.css';

import { Task } from './models/task';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskList } from './components/TaskList';


interface State {
  newTask: Task;
  tasks: Task[];
}

export default class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ''
    },
    tasks: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>REACT TS TODO LIST</p>
          <NewTaskForm
            task={ this.state.newTask }
            onAdd={ this.addTask }
            onChange={ this.handleTaskChange }
          />
          <TaskList tasks={ this.state.tasks } onDelete={ this.deleteTask } />
        </header>
      </div>
    );
  }

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.newTask.name) {
      this.setState(previousState => ({
        newTask: {
          id: previousState.newTask.id + 1,
          name: ''
        },
        tasks: [...previousState.tasks, previousState.newTask]
      }));
    } else {
      return;
    }
  };

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  };

  private deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };

}
