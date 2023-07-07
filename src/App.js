import './App.css';
import AddNew from './AddNew.js';
import ProjectCard from './ProjectCard.js';
import { useState } from 'react';

function App() {
  const [projectName, setProjectName] = useState("");

  const handleProjectNameChange = (name) => {
    setProjectName(name);
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className="row">
        <div className="col-9">
      </div>
      <div className="col-3 mt-4">
      <AddNew onProjectNameChange={handleProjectNameChange} />
      </div>
      </div>
      </header>
      <ProjectCard name = {projectName}/>
    </div>
  );
}
export default App;
