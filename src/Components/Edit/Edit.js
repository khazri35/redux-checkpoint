import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {editTask} from '../../JS/Actions/listTasks';

    const Edit=({task})=> {

        const [show, setShow] = useState(false);
        const [newtext, setNewtext] = useState(task.text);
        const dispatch= useDispatch()
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

       const handleSave=()=>{
      
        dispatch(editTask(task.id, newtext));
        handleClose();

       }

      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Task</Modal.Title>
              </Modal.Header>
              <Modal.Body><input value={newtext} onChange={(e)=>setNewtext(e.target.value)} /></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    }
    

export default Edit
