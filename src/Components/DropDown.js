import React, { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";

const DropDown = ({options, selected, onDdChange, label}) => {

    const [open, setOpen] = useState(false);
    useEffect(() => {
        document.body.addEventListener('click',e => {
            if(ref.current.contains(e.target)){
                return;
            }
            setOpen(false)
        }, {capture: true})
    },[])
    const ref = useRef()

    const renderedOptions = options.map(option => {

        if(option.value === selected.value){
            return null;
        }
        return(
            <div onClick={() => onDdChange(option)} key={option.id} className="item">
                {option.label}
            </div>
        )
    })

    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Please select a {label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            <div style={{color: selected.value}}>
                You have selected {selected.value} {label}!
            </div>
        </div>
    )
}

export default DropDown;
