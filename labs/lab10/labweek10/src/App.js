import './App.css'
import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';
import { useState } from "react"

function App() {

const [ userInfo, setUserinfo ] = useState(null)


  if (userInfo === null) {
    return (
      <div className="App">
        <FormComponent setUserinfo={setUserinfo}/> 
      </div>
    );
  }

  else {
    return (
      <div className="App">
        <FormComponent setUserinfo={setUserinfo}/> 
        <TableComponent userInformation={userInfo} />
      </div>
    );
  }

}

export default App;
