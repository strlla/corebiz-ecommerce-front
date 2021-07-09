import axios from 'axios';

export const getProducts = async () => {
    try {
        const res = await axios.get('https://corebiz-test.herokuapp.com/api/v1/products');
        return res.data;
    }catch(e){
        console.log(e);
    }
}