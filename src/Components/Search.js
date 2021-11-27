import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {

    const [term, setTerm] = useState('programming')
    const [results, setResults] = useState([])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(term) {
                axios.get('https://en.wikipedia.org/w/api.php',
                {
                    params:{
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                }).then(response => {
                    setResults(response.data.query.search)
                })
            }
        },1000);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [term]);

    const renderedResults = results.map(result => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}} />
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input onChange={e => setTerm(e.target.value)} value={term} className="input" />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;