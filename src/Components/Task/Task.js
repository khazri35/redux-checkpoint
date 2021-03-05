import React from 'react';
import {Button} from 'react-bootstrap';
import './Task.css';
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask } from '../../JS/Actions/listTasks';
import Edit from '../Edit/Edit';

const Task = ({task}) => {
  const dispatch= useDispatch()
    return (
        <div>
          <span className={task.isDone ? "done": null}>
          {task.text}
          </span>
          <Edit task={task}/>
          <Button variant="info"
          onClick={()=>dispatch(deleteTask(task.id))}> Delete 
          </Button>
          <Button variant="info" 
          onClick={()=>dispatch(doneTask(task.id))}> {task.isDone ? "Done": "Undone"} 
          </Button> 
        </div>
    )
}

export default Task
