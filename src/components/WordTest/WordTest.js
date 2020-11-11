import React, { useEffect, Fragment, useState } from 'react'
import LangApiService from '../../services/lang-api-service';
import UserContext from '../../contexts/UserContext';
import '../../css/Word.css'


function WordTest(props) {
    const [word, setWord] = useState({})

    useEffect(() => {
        LangApiService.getHead()
            .then(lang => setWord(lang))
            .catch(err => console.log(err, err.message))
    }, [])
    console.log(word)
    return (
        <Fragment>
            <div className='word_header'>
                <div className='word_header_title'>
                    <h2>Translate the word:</h2>
                    <span className='word'>{word.nextWord}</span>
                </div>
                <div className='word_header_score'>
                    <p>Your total score is: {word.totalScore}</p>
                    <p>You have answered this word correctly {word.wordCorrectCount} times.</p>
                    <p>You have answered this word incorrectly {word.wordIncorrectCount} times.</p>
                </div>
            </div>
            <form className='word_wrapper'>
                <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
                <input autoComplete='off' required id='learn-guess-input' type='text' />
                <button type='submit'>Submit your answer</button>
            </form>
        </Fragment>
    )
}

export default WordTest
