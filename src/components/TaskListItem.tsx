
import React, { FunctionComponent } from 'react';

import { Task } from '../models/task';

interface Props {
  onDelete: (task: Task) => void;
  // onCheck: React.ChangeEventHandler<HTMLInputElement>;
  onCheck: (task: Task) => void;
  onClick: (task: Task) => void;
  task: Task;
}

export const TaskListItem: FunctionComponent<Props> = ({
  task,
  onDelete,
  onCheck,
  onClick
}) => {
  const onDeleteClick = () => {
    onDelete(task);
  }

  const onTaskTitleClick = () => {
    onClick(task);
  }

  const onTaskChecked = () => {
    onCheck(task);
  }

  return (
    <li>
      <input type="checkbox" onChange={ onTaskChecked } />
      <span
        className={ task.completed ? 'complete' : undefined }
        onClick={ onTaskTitleClick }>
        { task.name }
      </span>
      <button onClick={ onDeleteClick }>X</button>
    </li>
  );
};
