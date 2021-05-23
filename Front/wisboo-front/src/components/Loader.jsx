import React from 'react'
import "./loader.css"

function Loader() {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <div class="lds-ripple"><div></div><div></div></div>
        </div>
    )
}

export default Loader
