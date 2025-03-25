import React from "react"
import { useState } from "react";

export default function App7(){
    return(
        <div>
        <h3>This is App7</h3>
        <p><input type="number" onChange={(e)=>SetA(e.target.value)}></input></p>
        <p><input type="number" onChange={(e)=>SetB(e.target.value)}></input></p>
        <button>Submit</button>
        <p>{result}</p>
        </div>
    );
}