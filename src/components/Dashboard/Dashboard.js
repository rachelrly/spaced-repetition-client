import React, { useContext, useEffect, Fragment } from 'react'
import LangApiService from '../../services/lang-api-service';
import UserContext from '../../contexts/UserContext';
import '../../css/Dashboard.css';
import WordList from './WordList';

function Dashboard() {
    const user = useContext(UserContext)

    useEffect(() => {
        LangApiService.getLang()
            .then(lang => {
                user.setWords(lang.words)
                user.setLang(lang.language)
            })

            .catch(err => console.log(err, err.message))
    }, [])


    return (
        <Fragment>
            <div className='dash_container'>
                <h2>{user.lang.name}</h2>

                <div className='score'>
                    <p>Total correct answers: {user.lang.total_score}</p>
                </div>
            </div>
            <WordList />
        </Fragment>
    )
}

export default Dashboard
