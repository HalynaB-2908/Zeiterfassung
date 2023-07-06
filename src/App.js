import './App.css';
import Timer from './Timer.js';
import AddNew from './AddNew.js';
import ProjectCard from './ProjectCard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="row">
        <div className="col-9">
      <Timer/>
      </div>
      <div className="col-3 mt-4">
      <AddNew/>
      </div>
      </div>
      </header>
      <ProjectCard/>
    </div>
  );
}
export default App;
