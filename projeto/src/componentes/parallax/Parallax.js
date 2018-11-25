import React from 'react' 
import './Parallax.css'


function Parallax(props) {

    return (
        <section className={props.className}>
            <h1>{props.titulo}</h1>
            {props.children}
        </section>
    )
}

export default Parallax