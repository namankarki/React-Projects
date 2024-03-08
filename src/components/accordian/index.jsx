//Single selection
//multiple selection
import data from "./data.js";
import './style.css';
import { useState } from "react";
export default function Accordian(){

    const [selected, setSelected]=useState(null);
    const [enableMultiSelection,setEnableMultiSelection]=useState(false);
    const[multiple,setMultiple]=useState([]);

    function handleSingleSelection(getCurrentID){
        setSelected(getCurrentID===selected ? null : getCurrentID);

    }

    function handleMultipleSelection(getCurrentID){
       let cpyMultiple =[...multiple];
       const findIndexOfCuurentId=cpyMultiple.indexOf(getCurrentID);

       if(findIndexOfCuurentId===-1) cpyMultiple.push(getCurrentID);
       else cpyMultiple.splice(findIndexOfCuurentId, 1);

       setMultiple(cpyMultiple);
    }
    return(
        <div className="wrapper">
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selecetion</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                    data.map(dataItem=> 
                    <div className="item">
                        <div onClick={enableMultiSelection ? ()=>handleMultipleSelection(dataItem.id) : ()=>handleSingleSelection(dataItem.id)}
                         className="title">
                          <h3>{dataItem.question}</h3>
                          <span>+</span>
                        </div>
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id)!==-1 ? 
                            <div className="content">{dataItem.answer}</div> 
                            : null }
                    </div>)
                    :<div>No data found</div>
                }
            </div>
        </div>
    )}