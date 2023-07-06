import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

let projects = [
    {
        "name" : "first",
        "in process" : true,
        "time" : "0 h, 0 min"
    },
    {
        "name" : "second",
        "in process" : false,
        "time" : "0 h, 0 min"
    },
]

let project = {
        "name" : "third",
        "in process" : false,
        "time" : "0 h, 0 min"
}
projects.push(project);

export default function ProjectCard() {
    return (
        <>
            {projects.map(item => (
                <Card className="m-3">
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>Tasks</Card.Title>
                        <Button variant="outline-danger">Del</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
  }