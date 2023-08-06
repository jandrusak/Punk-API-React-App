import React from 'react'

function BeerComponent(props){
    return (
        <li style={{ listStyle: "none"}}>
            <img alt={props.name} style={{ height: "200px"}}src={props.image_url}></img>
            {props.name}</li>
    )
}

export default BeerComponent;