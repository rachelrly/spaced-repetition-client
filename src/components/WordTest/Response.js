import React, { Fragment } from 'react'

function Response(props) {
    return (
        <div>
            <h2>RESPONSE PAGE</h2>
            {props.bool === true
                ? <p>That is the right answer</p>
                : <Fragment>
                    <p>That is the wrong answer.</p>
                    <p>The correct answer is {props.correct}</p>
                </Fragment>}

            <button onClick={() => props.setAnswer(' ')}>Back to question</button>
        </div>
    )
}

export default Response
