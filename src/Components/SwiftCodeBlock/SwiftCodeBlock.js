import React from 'react';
import './SwiftCodeBlock.css'

const SwiftCodeBlock = (props) => {
    return(
        <div className = "SwiftCodeBlock">
        <p className = "Header">Swift Code:</p>
            <code>
                <p>{props.children}</p>
            </code>
        </div>
    )
}

export default SwiftCodeBlock;