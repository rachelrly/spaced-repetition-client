import React, { Fragment } from 'react'

function Response(props) {
    console.log(props)
    return (
        <div>
            <div className='DisplayScore'>
                <p>Your total score is: {props.totalScore}</p>
            </div>
            {props.isCorrect
                ? <h2>You were correct! :D</h2>
                : <h2>Good try, but not quite right :(</h2>
            }
            <div className='DisplayFeedback'>
                <p>The correct translation for {props.original} was {props.translation} and you chose {props.input}!</p>
            </div>

            <button onClick={() => {
                props.setAnswer(null)
            }}>Try another word!</button>
        </div>
    )
}

export default Response



