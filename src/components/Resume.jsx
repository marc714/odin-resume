import React from "react";
import { useState } from "react";
import Personal from "./Personal.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import '../styles/resume.css';
import AddButton from "./AddButton.jsx";
import { nanoid } from "nanoid";
import SubmitButton from "./SubmitButton.jsx";
import InfoPersonal from "./cv/InfoPersonal.jsx";
import InfoExperience from "./cv/InfoExperience.jsx";
import InfoEducation from "./cv/InfoEducation.jsx";
import Sample from "./Sample.jsx";
import Clear from "./Clear.jsx";


function Resume() {
    // load blanks into localStorage so Education.jsx and Experience.jsx loads empty fields on Left column becuase they use map.
    let tempEdu = JSON.parse(localStorage.getItem('education'))
    let tempExp = JSON.parse(localStorage.getItem('experience'))
    let tempPersonal = JSON.parse(localStorage.getItem('personal'))

    if(tempEdu.length === 0) {
        let temp = [{id: 0, school:"", major:"", year:""}]
        localStorage.setItem("education", JSON.stringify(temp))
    }

    if(tempExp.length === 0) {
        let temp = [{id: 0, company:"", position:"", date:""}]
        localStorage.setItem("experience", JSON.stringify(temp))
    }

    if(tempPersonal.length === 0) {
        let temp = [{id: 0, name:"", address:"", email:"", phone:""}]
        localStorage.setItem("personal", JSON.stringify(temp))
    }

    // you want all the states here in Resume so that you can edit/push to actual?
    // const [personal, setPersonal] = useState([{name:"", address:"", email:"", phone:""}])
    const [personal, setPersonal] = useState(JSON.parse(localStorage.getItem('personal')))
    // const [education, setEducation] = useState([{id: 0, school:"", major:"", year:""}])
    const [education, setEducation] = useState(JSON.parse(localStorage.getItem('education')))
    // const [experience, setExperience] = useState([{id: 0, company:"", position:"", date:""}])
    const [experience, setExperience] = useState(JSON.parse(localStorage.getItem('experience')))
    
    const handleChangePersonal=(e)=>{
        const {name, value} = e.target;
        const onChangeValue = [...personal];
        onChangeValue[0][name] = value;  // since useState default is in array, added index [0] to make it work.
        setPersonal(onChangeValue);
    }

    const handleChangeEdu=(e)=>{
        const {name, value} = e.target // destructured
        const eduBlockElement = e.target.closest("[data-id]");
        const dataId = eduBlockElement.getAttribute("data-id");
        console.log(dataId)
        const onChangeValue = [...education]
        let eduBlockElementIDindex = onChangeValue.findIndex(obj => obj.id == dataId); /// don't use === here        
        onChangeValue[eduBlockElementIDindex][name] = value;
        setEducation(onChangeValue);
    }

    const handleChangeExp=(e)=>{
        const {name, value} = e.target;
        const expBlockElement = e.target.closest("[data-id]");
        const dataId = expBlockElement.getAttribute("data-id");
        const onChangeValue = [...experience]
        let expBlockElementIDindex = onChangeValue.findIndex(obj => obj.id == dataId);
        onChangeValue[expBlockElementIDindex][name] = value;
        setExperience(onChangeValue);
    }

    const handleAddEdu=()=>{
        let newID = nanoid();
        setEducation([...education, {id:newID, school:"", major:"", year:""}])
    }

    const handleAddExp=()=>{
        let newID = nanoid();
        setExperience([...experience, {id:newID, company:"", position:"", date:""}])
    }

    // https://stackoverflow.com/questions/11258077/how-to-find-index-of-an-object-by-key-and-value-in-an-javascript-array
    const handleDeleteEdu=(elementID)=>{
        const newEduInput = [...education]
        let i = newEduInput.findIndex(p => p.id == elementID)
        console.log("deleting element.id " + elementID)
        newEduInput.splice(i, 1);
        setEducation(newEduInput);
    }

    const handleDeleteExp=(elementID)=>{
        const newExpInput = [...experience]
        let i = newExpInput.findIndex(p => p.id == elementID)
        console.log("deleting element.id " + elementID)
        newExpInput.splice(i, 1);
        setExperience(newExpInput);
    }

    // let submitData = [education, experience]
    // passing the state as a prop
    let submitData = {personal, education, experience}

    return (
        <>
            <div className="container">
                <div className="left">
                    {/* <Menu /> */}

                    <form id="main-form">
                        <Personal data={personal} onChange={handleChangePersonal} />  {/* Personal uses TextField component for input fields. TextField uses hardcoded onChange, so not passing props */}

                        <div className="education-container">
                            <h2>Education</h2>
                            <Education data={education} onChange={handleChangeEdu} onDelete={handleDeleteEdu} />
                            <AddButton onClick={handleAddEdu} text="Add Education" />  
                        </div>
                        

                        <div className="experience-container">
                            <h2>Experience</h2>
                            <Experience data={experience} onChange={handleChangeExp} onDelete={handleDeleteExp} />
                            <AddButton onClick={handleAddExp} text="Add Experience" />
                        </div>
                        
                        {/* <button id="form-submit" type="submit" onClick={submitForm}>Submit Form</button> */}
                        <SubmitButton data={submitData} />
                    </form>
                    <div className="menu-bottom">
                        <Sample personalState={setPersonal} educationState={setEducation} experienceState={setExperience} />
                        <Clear personalState={setPersonal} educationState={setEducation} experienceState={setExperience} />
                    </div>
                    
                </div>


                <div className="right">
                    <div id="resume">
                        <h1>Resume</h1>
                        {/* Component that pulls from local storage to display Resume - if empty, then displays empty */}
                        <InfoPersonal />
                        <InfoExperience />
                        <InfoEducation />
                        
                    </div>

                </div>
            </div>
        </>
    )
}


export { Resume }


