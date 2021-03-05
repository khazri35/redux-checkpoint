import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import {Button} from 'react-bootstrap';

const ListTasks = () => {

  const [status, setStatus] = useState("all")
  const listtasks = useSelector((state) => state.task.listTasks);

    return (
      <div>
      <Button variant="primary" onClick={() => setStatus("all")}>All</Button>
      <Button variant="primary"onClick={() => setStatus("done")}>Done</Button>
      <Button variant="primary"onClick={() => setStatus("undone")}>Undone</Button>
      {status === "done" ? listtasks.filter((el) => el.isDone === true).map((el) => <Task task={el} key={el.id} />)
        : status === "undone"
        ? listtasks.filter((el) => el.isDone === false).map((el) => <Task task={el} key={el.id} />)
        : listtasks.map((el) => <Task task={el} key={el.id} />)}
     {listtasks.map(el=>(<Task task={el} key={el.id}/>))}
      </div>
    )
}

export default ListTasks
