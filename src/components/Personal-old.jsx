import React from "react";
import { useState } from "react";
import TextField from "./TextField.jsx";
import '../styles/general.css';
import '../styles/personal.css';

    // no state here. TextField has setstate and hardcoded onChange.
    // https://www.w3schools.com/tags/att_input_value.asp
    // Value attribute: For "text", "password", and "hidden" - it defines the initial (default) value of the input field

    // defaultValue doesn't get stored with state:
    // https://stackoverflow.com/questions/30146105/react-input-defaultvalue-doesnt-update-with-state

    // Good controlled inputs talk:
    // https://youtu.be/r5ombQn3fHY?si=_Ef9RXXqh3NGq3pn&t=707

export default function Personal({ data, onChange }) {

    let storagePersonal = localStorage.getItem("personal")
    let objPersonal = JSON.parse(storagePersonal)

    return (           
            <>
                {
                    <div className="block personal">
                        data.map((element) => 
                            <div>
                                <label htmlFor="name">Name</label>     
                                <input name="name" className="text-personal" type="text" label="name"  onChange={onChange}  />
                            </div>
                            
                            <div>
                                <label htmlFor="address">Address</label>
                                <input name="address" className="text-personal" type="text" label="address" onChange={onChange}  />
                            </div>
                            
                            <div>
                                <label htmlFor="email">Email</label>
                                <input name="email" className="text-personal" type="email" label="email" onChange={onChange}  />
                            </div>
                            
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input name="phone" className="text-personal" type="number" label="phone" onChange={onChange}  />       
                            </div>
                        )
                    </div>
                }
            </>   
    )
}



