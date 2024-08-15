
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// import Main from './components/Main';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="grid-container">
     
     <Header />
     <SideBar/>
     <Home/>
    
    </div>
  );
}

export default App;
