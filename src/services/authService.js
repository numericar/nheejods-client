import apiCondig from '../configs/apiConfig';

async function login(email, password) {
    try {
        const response = await fetch(`${apiCondig.basePath}${apiCondig.routes.auths}login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
            credentials: 'include'
        });

        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

async function register(email, password) {
    try {
        const response = await fetch(`${apiCondig.basePath}${apiCondig.routes.auths}register`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

export default {
    login,
    register
}