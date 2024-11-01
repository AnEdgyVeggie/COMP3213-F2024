import './App.css';
import InfoDisplay from './InfoDisplay';

function App() {
  const studentID = "101479568"
  const studentName = "Ethan Sylvester"
  const college = "George Brown College"
  const location = "Toronto"
  const docHeader = "Welcome to Fullstack Development I"
  const subHeader = "React JS Programming Week09 Lab Exercise"



  return (
    <InfoDisplay studentID={studentID} studentName={studentName} college={college} 
    location={location} docHeader={docHeader} subHeader={subHeader}/>
  );
}

export default App;
