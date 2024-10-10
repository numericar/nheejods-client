import apiCondig from "../configs/apiConfig";

async function getFinanceBoxs(start, end) {
    try {
        if (typeof start != 'string' || typeof end != 'string') {
            throw new Error('Start and End should be string formar like YYYY-MM');
        }

        const response = await fetch(`http://localhost:3000/api/finance-boxs?start=${start}&end=${end}`, {
            method: 'get',
            credentials: 'include'
        });
 
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

export default {
    getFinanceBoxs
}