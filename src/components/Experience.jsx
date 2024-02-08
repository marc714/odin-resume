import React from "react";
import { useState } from "react";
import TextField from "./TextField.jsx";
import '../styles/general.css';
import '../styles/experience.css';

export default function Experience({ data, onChange, onDelete }) {
    // map returns something, in this case, an empty array (if there's nothing in state). If there's something in the localStorage, then the input fields will have them shown because we did value={element.XXXXX}
    // remember, State gets updated as soon as we type anything since we used onChange. The Submit button just stores the current State data into localStorage - so that it can be shown in real-time in the left column with value={element.xxxx}
    
    return (
        <div>          
            {
                data.map((element) => 
                        <div className="expBlock" key={element.id} data-id={element.id} >
                            {/* <Education school={element.school} major={element.major} year={element.year} onChange={(e)=> setEducation(e.target.value)} /> */}
                            
                            <div>
                                <label htmlFor="input-company">Company</label>
                                <input id="input-company" name="company" value={element.company} onChange={onChange} />
                            </div>

                            <div>
                                <label htmlFor="input-position">Position</label>
                                <input id="input-position" name="position" value={element.position} onChange={onChange} />
                            </div>

                            <div>
                                <label htmlFor="input-date">Date</label>
                                {/* <input id="input-year" name="year" value={element.year} onChange={(e)=>{handleChange(e,index)}} /> */}
                                <input id="input-date" name="date" value={element.date} onChange={onChange} />
                            </div>

                            <div>
                                <label htmlFor="input-summary">Summary</label>
                                {/* <input id="input-year" name="year" value={element.year} onChange={(e)=>{handleChange(e,index)}} /> */}
                                <textarea id="input-summary" name="summary" value={element.summary} onChange={onChange} />
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