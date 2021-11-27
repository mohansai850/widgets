import React from "react";
import { useState } from "react/cjs/react.development";
import { langs } from "../util";
import Convert from "./Convert";
import DropDown from "./DropDown";

const Translate = () => {

    const [lang, setLang] = useState(langs[2]);
    const [text, setText] = useState('Hello');

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <DropDown options={langs} selected={lang} onDdChange={setLang} label="language"/>
            <hr />
            <h3 className="ui header">Converted Text:</h3>
            <Convert lang={lang} text={text}/>
        </div>
    )
}

export default Translate;
