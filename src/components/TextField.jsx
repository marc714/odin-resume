import React from "react";
import { useState } from "react";

export default function TextField({ className, type, label }) {
    // instead of using the builtin Form Input, we can use React for state:
    const [value, setValue] = useState("");

    return (
        <div className={`text-field ${className}`}>
            <label>{label} : </label>
            <input
                type={type}
                value={value}
                // onChange = use 'setValue' function to update the variable 'value' with 'e.target.value' 
                onChange={(e) => setValue(e.target.value)} 
            />
        </div>
    )
}



// dont even use this. We want the state to be on the main Resume.js page since all the data is there.
