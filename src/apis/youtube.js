import axios from 'axios';

const KEY = 'AIzaSyCRzLoqqQL0UKux7j_GmwrsTj94gTEwWwQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});