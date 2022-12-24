import './App.css';
import Cards from './components/Appearance';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="app-body">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div>
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
}

export default App;
