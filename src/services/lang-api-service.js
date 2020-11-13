import TokenService from './token-service';
import config from '../config';

const LangApiService = {
    getLang() {
        return fetch(`${config.API_ENDPOINT}/language`, {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json();
            })
    },

    getHead() {
        return fetch(`${config.API_ENDPOINT}/language/head`, {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json();
            })
    },

    postAnswer(answer) {

        return fetch(`${config.API_ENDPOINT}/language/guess`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({ guess: answer })
        })
            .then(res => res)
            .catch(err => console.log(err))
    }
}


export default LangApiService;