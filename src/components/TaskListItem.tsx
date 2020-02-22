
import React, { FunctionComponent } from 'react';

import { Task } from '../models/task';

interface Props {
  onDelete: (task: Task) => void;
  task: Task;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  }

  return (
    <li>
      { task.name } <button onClick={onClick}>X</button>
    </li>
  );
};
