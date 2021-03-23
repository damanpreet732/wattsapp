import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'

function App() {
  return (
    <div className="app">
      {/* <h1> Let's build an wattsapp clone !</h1> */}
      <div className="app_body">
        {/* Slidbar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
      </div>
    </div>

  );
}

export default App;
