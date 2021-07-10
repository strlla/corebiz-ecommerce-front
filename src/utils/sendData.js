import axios from 'axios';

export const sendData = async (data) => {
    try {
        const res = await axios({
            method: 'post',
            url: 'https://corebiz-test.herokuapp.com/api/v1/newsletter',
            data: data
        });
        return res;
    } catch (e) {
        console.log(e);
    }
}