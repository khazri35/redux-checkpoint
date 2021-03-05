import React from 'react';
import { Button, Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import { addTask } from '../../JS/Actions/listTasks';


const AddTask = () => {

    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const handleAdd = (e) =>{
      e.preventDefault()
             if (text){
            dispatch(addTask({id: Math.random(), text: text, isDone: false})) 
            setText("")
            }
        else{
           alert('yabta chwaya')
        }
    }

    return (

        <Form onSubmit={handleAdd}>
            <Form.Control type="text" placeholder="Task title"
           onChange= {(e)=>setText(e.target.value)} value={text}
           />
           <Button onClick= {handleAdd}
           variant="info">Add</Button>  
           </Form>
   )
}

export default AddTask;