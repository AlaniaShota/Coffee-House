import React from 'react'

function Button({button, filter}) {
    return (
        <div className="buttons">
            {
                button.map((country, id)=>{
                    return <button type="button" onClick={()=> filter(country)} className="btn" key={id}>{country}</button>
                })
            }
        </div>
    )
}

export default Button;