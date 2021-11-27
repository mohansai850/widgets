import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Convert = ({lang, text}) => {

    const[translated, setTranslated] = useState('')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params: {
                q: text,
                target: lang.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        }).then(
            res => {
                // console.log(res)
                setTranslated(res.data.data.translations[0].translatedText)
            }
        )   
    },1000)
    return () => {
        clearTimeout(timeoutId);
    }
    }, [lang, text])
        

    return(
        <div>
            <h1 className="ui header">
                {translated}
            </h1>
        </div>
    )
}

export default Convert;
