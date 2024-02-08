import React from "react";
import { useState } from "react";
import TextField from "./TextField.jsx";
import '../styles/general.css';
import '../styles/education.css';

export default function Education({ data, onChange, onDelete }) {
    
    return (
        <div>          
            {
                data.map((element) => 
                        <div className="eduBlock" key={element.id} data-id={element.id} >
                            {/* <Education school={element.school} major={element.major} year={element.year} onChange={(e)=> setEducation(e.target.value)} /> */}
                            <div>
                                <label htmlFor="input-school">School</label>
                                <input id="input-school" name="school" value={element.school} onChange={onChange} />
                            </div>

                            <div>
                                <label htmlFor="input-major">Major</label>
                                <input id="input-major" name="major" value={element.major} onChange={onChange} />
                            </div>

                            <div>
                                <label htmlFor="input-year">Year</label>
                                {/* <input id="input-year" name="year" value={element.year} onChange={(e)=>{handleChange(e,index)}} /> */}
                                <input id="input-year" name="year" value={element.year} onChange={onChange} />
                            </div>

                            <button onClick={()=>{onDelete(element.id)}}>Delete</button>
                        {/* <button onClick={handleDelete(e, i)}>Delete</button>  doesn't work. 'e' not defined. */} 
                        {/* <span className="uniqueID">element.id: {element.id}, index: {index}</span> */}
                        </div>
                )
                
            }
        </div>  
    )
}