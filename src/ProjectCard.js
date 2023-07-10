import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Timer from './Timer.js';
import { useState } from 'react';

export default function ProjectCard(props) {
    const [projects, setProjects] = useState(
        props.projects
    );
    const deleteProject = (id) => {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
    };
    if(!props.projects) {
        return (<></>) 
    }
    else {
    return (
        <>
       
            {projects.map(item => (
                <Card className="m-3">
                    <Card.Header>{props.name}</Card.Header>
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
  }