import React from "react";
import { useState } from "react";

// on submit, save to local storage

export default function SubmitButton({ data }) {
        const setLocal=(e)=>{
            //e.preventDefault();

            let personal = JSON.stringify(data.personal)
            localStorage.setItem("personal", personal)
            //console.log(personal)

            let education = JSON.stringify(data.education)
            localStorage.setItem("education", education)

            let experience = JSON.stringify(data.experience)
            localStorage.setItem("experience", experience)
            
            
        }

        return (
            // <button onClick={()=>console.log("hello")}>Submit</button>
            <button className="submit-btn" onClick={setLocal}>Submit</button>
        )
}