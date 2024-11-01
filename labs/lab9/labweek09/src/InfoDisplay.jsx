import logo from './logo.svg';
import { useState } from 'react';
import "./styles/InfoDisplay.css"

const InfoDisplay = ({studentID, studentName, college, location, docHeader, subHeader}) => {

    // sets the default state to the one passed in props
    const [ currentStudentID, setCurrentStudentID ] = useState(studentID)

    // displays a change in state and the rerendering of the student ID
    const updateId = () => {
        const input = document.getElementById("change-id").value
        setCurrentStudentID(input)
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />

            <h1>{docHeader}</h1>
            <h2>{subHeader}</h2>
            <h3>{currentStudentID}</h3> 
            <p>{studentName}</p>
            <p>{college}, {location}</p>

            <div id="update-id-section">
                <label htmlFor='change-id'>Change Student ID</label>
                <input type='text' id='change-id' name='change-id'/>
                <button onClick={updateId}>Update ID</button>
            </div>


        </div>

    )
}

export default InfoDisplay