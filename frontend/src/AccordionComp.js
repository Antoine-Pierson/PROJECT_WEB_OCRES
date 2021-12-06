import React, {useState, useEffect, useRef} from 'react';
import "./AccordionComp.css";
import Chevron from './chevron.svg';

export default function Accordion(props) {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, [])

    const toggleState = () => {
        setToggle(!toggle);
    }

    return (
        <div className="accordion">

            <button 
            onClick={toggleState}
            className="accordion-visible" style={{background: props.bg === true ? "#239632" : "#962323"}}>
                <span>Table 1</span>
                <img 
                className={toggle && "active"}
                src={Chevron} />
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${heightEl}` : "0rem"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    12:30 - PIERSON - 3 personnes
                </p>
            </div>
            
        </div>
    )
}