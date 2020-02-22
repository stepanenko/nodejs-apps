
import React, { Component } from 'react';
import './App.css';
import uuidv4 from 'uuid';

import { Task } from './models/task';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskList } from './components/TaskList';


interface State {
  newTask: Task;
  tasks: Task[];
}

export default class App extends Component<{}, State> {
  tasksArray: Task[] = [
    {
      id: uuidv4(),
      name: 'Task One',
      completed: false
    },
    {
      id: uuidv4(),
      name: 'Task Two',
      completed: false
    },
    {
      id: uuidv4(),
      name: 'Task Three',
      completed: false
    },
  ];

  state = {
    newTask: {
      id: uuidv4(),
      name: '',
      completed: false
    },
    tasks: this.tasksArray
  };

  render() {
    return (
      <div>
        <header className="app-container">
          <p>REACT TS TODO LIST</p>
          <NewTaskForm
            task={ this.state.newTask }
            onAdd={ this.addTask }
            onChange={ this.handleTaskChange }
          />
          <TaskList
            tasks={ this.state.tasks }
            onDelete={ this.deleteTask }
            onTaskClick={ this.taskClicked }
            onCheckboxClick={ this.onCheckboxClick } />
        </header>
      </div>
    );
  }

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.newTask.name) {
      this.setState(previousState => ({
        newTask: {
          id: uuidv4(),
          name: '',
          completed: false
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

  private taskClicked = (task: Task) => {
    console.log('task clicked:', task)
  }

  private onCheckboxClick = (taskToComplete: Task) => {
    const newTasksState = [...this.state.tasks];

    const taskToChange = this.state.tasks
      .find(task => task.id === taskToComplete.id);

    if (taskToChange !== undefined) {
      // taskToChange!.completed = !taskToChange!.completed;   // if no if-else
      taskToChange.completed = !taskToChange.completed;
    } else {
      throw new Error('Task not found');
    }

    this.setState({
      tasks: newTasksState
    });
  }

}
