import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50'
        },
        headers: {
        'X-RapidAPI-Key': 'c16b5cd883mshe7e1e454dd5a687p129dd8jsn855669911089',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };



export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options )
        return response.data
    },
}