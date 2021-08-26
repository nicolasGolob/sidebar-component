import './App.css';
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div className="App">
    <Sidebar width={300} height={"100vh"}>
          <h1>Home</h1>
          <h1>Story</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </Sidebar>
    </div>
  );
}
export default App;
