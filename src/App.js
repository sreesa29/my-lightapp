import './App.css';
import Button from './components/button';
import React,{ useState} from 'react';
function App() {
  const[value1,setValue1] = useState("OFF");
  const[value2,setValue2] = useState("OFF");
  return (
    <div className="app">
      <div className = "border">
       <Button value = {value1} changeValue = {() =>setValue1(value1==="OFF"?"ON":"OFF")} />
      </div>
      <div className = "border">
       <Button value = {value2} changeValue = {() =>setValue2(value2==="OFF"?"ON":"OFF")} />
      </div>
    </div>
  );
}

export default App;
