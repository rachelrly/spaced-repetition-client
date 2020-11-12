import React, { useEffect, Fragment, useState } from 'react'
import LangApiService from '../../services/lang-api-service';
import UserContext from '../../contexts/UserContext';
import Response from './Response';
import '../../css/Word.css'


function WordTest(props) {
    const [word, setWord] = useState({})
    const [answer, setAnswer] = useState('')
    const [input, setInput] = useState('')

    useEffect(() => {
        getWord()
    }, [])

    function getWord() {
        return LangApiService.getHead()
            .then(lang => setWord(lang))
            .catch(err => console.log(err, err.message))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const regex = /^[A-Za-z]+$/
        if (!regex.test(e.target.value)) {
            return null
        }
        LangApiService.postAnswer(input.trim().toLowerCase()).then((r) => setAnswer(r.answer))
    }

    return (
        <Fragment>
            {answer === true || answer === false
                ? <Response correct={word.answer} bool={answer} setAnswer={(m) => setAnswer(m)} getWord={() => getWord()} />
                : <Fragment>
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
                    <form className='word_wrapper' onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
                        <input autoComplete='off'
                            required id='learn-guess-input'
                            type='text'
                            value={input}
                            onChange={(e) => setInput(e.target.value)} />
                        <button type='submit'>Submit your answer</button>
                    </form>
                </Fragment>
            }
        </Fragment>
    )
}

export default WordTest
