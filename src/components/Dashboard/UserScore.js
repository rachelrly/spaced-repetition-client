import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext';
function UserScore() {
    const user = useContext(UserContext)
    console.log(user.lang)
    return (

        < div className='score_wrapper' >
            <h3>Total Score</h3>
            <div className='score'>
                <p>Correct :</p>
                <p>{user.lang.total_score}</p>
            </div>
        </div >
    )
}

export default UserScore
