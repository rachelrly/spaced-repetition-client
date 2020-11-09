import React, { Fragment, useContext } from 'react'
import UserContext from '../../contexts/UserContext';

function WordList() {
    const user = useContext(UserContext)

    return (
        <Fragment>
            <h3>Words to practice</h3>
            <div className='list_wrapper'>
                <div className='list'>
                    <p className='word_stat list_latin_word'>Word</p>
                    <p className='word_stat count correct_count'>Correct</p>
                    <p className='word_stat count correct_count'>Incorrect</p>
                </div>
                {user.words.map(w => (<div className='list' key={w.id}>
                    <p className='word_stat list_latin_word'>{w.original}</p>
                    <p className='word_stat count correct_count'>{w.correct_count}</p>
                    <p className='word_stat count incorrect_count'>{w.incorrect_count}</p>
                </div>))}
            </div>
        </Fragment>
    )
}

export default WordList
