import './style.css'
import './App.css';
import Style from './custom.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='primary'>Style in react</h1>
      <h1 style={{ backgroundColor: "grey", font: 'initial', color: 'red' }}>Style in react</h1>
      <h1 className={Style.success}>Style in react</h1>
    </div>
  );
}

export default App;
