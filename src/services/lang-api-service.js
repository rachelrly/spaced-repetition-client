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
    }
}


export default LangApiService;