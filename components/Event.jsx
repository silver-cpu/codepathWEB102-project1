import React from "react";
const Event = (props) => {
    return (
        <div className={'Event ' + props.color}>
            {props.event}
            </div>
        
        /*<td className={'Event ' + props.color}>
            <h5>{props.event}</h5>
        </td>*/
    )
}
export default Event;
