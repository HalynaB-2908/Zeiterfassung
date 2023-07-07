import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Timer from './Timer.js';

export default function AddNew({onProjectNameChange}) {
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState(
    [
        {
            "name" : "first",
            "in process" : true,
            "time" : "0 h, 0 min",
            "id" : 1,
        },
        {
            "name" : "second",
            "in process" : false,
            "time" : "0 h, 0 min",
            "id" : 2,
        },
        {
            "name" : "third",
            "in process" : false,
            "time" : "0 h, 0 min",
            "id" : 3,
    }
    ]
);
const deleteProject = (id) => {
  setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
};
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addProjectName = (event) => {
    setProjectName(event.target.value);
  }
  const i = 0;
  const addCard = (id) => {
    let project = {
      "name" : {projectName},
      "in process" : false,
      "time" : "0 h, 0 min",
      "id" : i+1,

    }
    projects.push(project);
    return (
      <>
      <Card className="m-3">
      <Card.Header>{projectName}</Card.Header>
      <Card.Body>
      <div className="row">
      <div className="col-6">
          <Card.Title>Tasks</Card.Title>               
          <Button variant="outline-danger" onClick={() => deleteProject(id)}>Del</Button>
          </div>
          <div className="col-6">
          <Timer/>
          </div>
          </div>
      </Card.Body>
  </Card>
  </>
    )
  }
  return (
    <>
      <Button variant="outline-secondary add-button" onClick={handleShow}>
        Add new Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let's add new Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type project name</Form.Label>
              <Form.Control
                type="text" onInput={addProjectName}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

