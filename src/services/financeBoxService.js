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

async function getFinanceBoxById(boxId) {
    try {
        if (typeof boxId != 'string' && typeof boxId != 'number') {
            throw new Error('Finance box id is invalid type');
        }

        const response = await fetch(`${apiCondig.basePath}${apiCondig.routes.financeBoxs}/${boxId}`, {
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

async function updateFinanceBoxById(boxId, appends, updates, removes) {
    try {
        if (typeof boxId != 'string' && typeof boxId != 'number') {
            throw new Error('Finance box id is invalid type');
        }

        const response = await fetch(`${apiCondig.basePath}${apiCondig.routes.financeBoxs}/${boxId}/items`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                appends: appends,
                updates: updates,
                removes: removes
            })
        });

        console.log(response);

        return await response.json();
    } catch (err) {
        console.log(err.message);
    }
}

export default {
    getFinanceBoxs,
    getFinanceBoxById,
    updateFinanceBoxById
}