import axios from 'axios';
const instance=axios.create({
    baseURL:'https://tinderbackend1008.herokuapp.com/'

});

export default instance;