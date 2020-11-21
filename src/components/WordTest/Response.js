import React, { Fragment } from 'react'

function Response(props) {
    console.log(props)
    return (
        <div>
            {props.isCorrect
                ? <Fragment>
                    <h2>That's right</h2>
                    <p>The correct translation is {props.answer}</p>
                </Fragment>
                : <Fragment>
                    <h2>Not quite</h2>
                    <p>The correct answer is {props.answer}</p>
                </Fragment>}

            <button onClick={() => {
                props.setAnswer(null)
            }}>Next</button>
        </div>
    )
}

export default Response
