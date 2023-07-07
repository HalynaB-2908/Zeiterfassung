import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Timer from './Timer.js';
import { useState } from 'react';

export default function ProjectCard(props) {
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