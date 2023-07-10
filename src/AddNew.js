import { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Timer from './Timer.js';

function ProjectCard(props) {
  const deleteProject = (id) => {
      props.setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
  };
  if(!props.projects) {
      return null;
  }
  return (
      <>
          {props.projects.map(item => (
              <Card key={item.id} className="m-3">
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Body>
                  <div className="row">
                  <div className="col-6">
                      <Card.Title>Tasks</Card.Title>               
                      <Button variant="outline-danger" onClick={() => deleteProject(item.id)}>Del</Button>
                      </div>
                      <div className="col-6">
                      <Timer/>
                      </div>
                      </div>
                  </Card.Body>
              </Card>
          ))}
      </>
  );
          
}

export default function AddNew() {
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
    if(savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addProjectName = (event) => {
    setProjectName(event.target.value);
  }
  const addProject = () => {
    const id = projects.length + 1;
    const newProject = {
      name: projectName,
      "in process": false,
      time: "0 h, 0 min",
      id: id,
    };
    setProjects(prevProjects => [...prevProjects, newProject]);
    setShow(false);
    setProjectName("");
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
                  type="text"
                  value={projectName}
                  onChange={addProjectName}
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
          <Button variant="secondary" onClick={addProject}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
      <ProjectCard projects = {projects} setProjects={setProjects}/>
    </>
  );
}

