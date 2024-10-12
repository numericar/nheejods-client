import apiCondig from "../configs/apiConfig";

async function getFinanceBoxs(start, end) {
    try {
        if (typeof start != 'string' || typeof end != 'string') {
            throw new Error('Start and End should be string formar like YYYY-MM');
        }

        const response = await fetch(`${apiCondig.basePath}${apiCondig.routes.financeBoxs}?start=${start}&end=${end}`, {
            method: 'get',
            credentials: 'include'
        });

        if (response.status === 401) {
            window.location.href = '/signin';
            return;
        }
 
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

export default {
    getFinanceBoxs
}