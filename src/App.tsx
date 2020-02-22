
import React, { Component } from 'react';
import './App.css';
import { Task } from './models/task';
import { NewTaskForm } from './components/NewTaskForm';


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
          <p>Hello REACT TS</p>
          <NewTaskForm
            task={ this.state.newTask }
            onAdd={ this.addTask }
            onChange={ this.handleTaskChange }
          />
        </header>
      </div>
    );
  }

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ''
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));

    console.log(this.state.newTask);
    console.log(this.state.tasks);
  };

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  };

}
