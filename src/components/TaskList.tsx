
import React, { FunctionComponent } from 'react';

import { Task } from '../models/task';
import { TaskListItem } from '../components/TaskListItem';

interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
  onTaskClick: (task: Task) => void;
  onCheckboxClick: (task: Task) => void;
}

export const TaskList: FunctionComponent<Props> = ({
  tasks,
  onDelete,
  onTaskClick,
  onCheckboxClick
}) => (
    <ul>
      { tasks.map(task => (
        <TaskListItem
          key={ task.id }
          task={ task }
          onDelete={ onDelete }
          onClick={ onTaskClick }
          onCheck={ onCheckboxClick } />
      ))}
    </ul>
);
