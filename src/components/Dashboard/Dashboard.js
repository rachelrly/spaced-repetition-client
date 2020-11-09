import React, { useContext, useEffect, Fragment } from 'react'
import LangApiService from '../../services/lang-api-service';
import UserContext from '../../contexts/UserContext';
import '../../css/Dashboard.css';
import WordList from './WordList';
import UserScore from './UserScore';

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

                <UserScore />
            </div>
            <WordList />
        </Fragment>
    )
}

export default Dashboard
