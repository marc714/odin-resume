import React from "react";
import { useState } from "react";
import TextField from "./TextField.jsx";
import '../styles/general.css';
import '../styles/experience.css';

export default function Personal({ data, onChange, onDelete }) {
    
    return (
        <div className="block personal">
            <h2>Personal</h2>        
            {
                data.map((element) => 
                        <div className="personal-block" key="0">                            
                            <div>
                                <label htmlFor="input-name">Name</label>
                                <input id="input-name" name="name" value={element.name} onChange={onChange} />
                            </div>

                            <div>
                                <label htmlFor="input-address">Address</label>
                                <input id="input-address" name="address" value={element.address} onChange={onChange} />
                            </div>

                            <div>
                                <label htmlFor="input-email">Email</label>
                                {/* <input id="input-year" name="year" value={element.year} onChange={(e)=>{handleChange(e,index)}} /> */}
                                <input id="input-email" name="email" value={element.email} onChange={onChange} />
                            </div>

                            <div>
                                <label htmlFor="input-phone">Phone</label>
                                {/* <input id="input-year" name="year" value={element.year} onChange={(e)=>{handleChange(e,index)}} /> */}
                                <input id="input-phone" name="phone" value={element.phone} onChange={onChange} />
                            </div>
                        </div>
                )
            }
        </div>  
    )
}
