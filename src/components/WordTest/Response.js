import React, { Fragment } from 'react'

function Response(props) {
    console.log(props)
    return (
        <div>
            <h2>{props.word.nextWord}</h2>
            {props.bool === true
                ? <Fragment>
                    <p>That's correct</p>
                    <p>The translation of {props.word.nextWord} is {props.correct}</p>
                </Fragment>
                : <Fragment>
                    <p>That is the wrong answer.</p>
                    <p>The correct answer is {props.correct}</p>
                </Fragment>}

            <button onClick={() => {
                props.setAnswer(null)
                props.getWord()
            }}>Next</button>
        </div>
    )
}

export default Response
