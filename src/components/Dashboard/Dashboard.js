import React, { useContext, useEffect, Fragment } from 'react'
import LangApiService from '../../services/lang-api-service';
import UserContext from '../../contexts/UserContext';

import WordList from './WordList';

function Dashboard() {
    const user = useContext(UserContext)

    useEffect(() => {
        LangApiService.getLang()
            .then(words => user.setWords(words.words))
            .catch(err => console.log(err, err.message))
    }, [])


    return (
        <Fragment>
            <h2>Latin</h2>


            <WordList />
        </Fragment>
    )
}

export default Dashboard
