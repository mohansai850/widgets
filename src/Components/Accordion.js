import React, { useState } from "react";

const Accordion = ({items}) => {

    const [activeId, setActiveId] = useState(null);

    const onTitleClick = (id) => {
        setActiveId(id)
    }

    const renderedItems = items.map((item) => {

        return (
            <React.Fragment key={item.id}>
                <div className={`title ${item.id === activeId ? 'active' : ''}`} onClick={() => onTitleClick(item.id)}>
                    <i className="dropdown icon"></i>
                    {item.question}
                </div>
                <div className={`content ${item.id === activeId ? 'active' : ''}`}>
                    <p>{item.answer}</p>
                </div>
            </React.Fragment>
        )
    })

    return(
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion;