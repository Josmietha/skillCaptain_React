import React from 'react';
function Greeting(props){
    return(
        <div>
            <h2>Welcome to React, {props.name}! </h2>
            <p>We are excited to have you on board.</p>
        </div>
    );
}
export default Greeting;