import axios from 'axios';
import * as api from './../constants/Config';

function Config(method = 'GET', endpoint, data) {
    return axios({
        method: method,
        url: `${api.NODE_API}${endpoint}`,
        data: data
    })
}

export default Config;