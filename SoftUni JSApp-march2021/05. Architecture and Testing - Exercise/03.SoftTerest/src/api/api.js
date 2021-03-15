export const settings = {
    host: ''
};

async function request(url, options) {
    let response = await fetch(url, options);

    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    try {
        return await response.json();
    } catch (err) {
        return response;
    }
};

function createOptions(method = 'get', data) {
    const result = {
        method,
        headers: {}
    };

    if (data) {
        result.headers['Content-Type'] = 'application/json';
        result.body = JSON.stringify(data);
    }

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        result.headers['X-Authorization'] = token;
    }

    return result;
};

async function get(url) {
    return request(url, createOptions());
};

async function post(url, data) {
    return request(url, createOptions('post', data));
};

async function put(url, data) {
    return request(url, createOptions('put', data));
};

async function del(url) {
    return request(url, createOptions('delete'))
};

async function login(email, password) {
    const response = await post(settings.host + '/users/login', { email, password });

    sessionStorage.setItem('authToken', response.accessToken);
    sessionStorage.setItem('email', response.email);
    sessionStorage.setItem('userId', response._id);

    return response;
}

async function register(email, password) {
    const response = await post(settings.host + '/users/register', { email, password });

    sessionStorage.setItem('userToken', response.accessToken);
    sessionStorage.setItem('email', response.email);
    sessionStorage.setItem('userId', response._id);

    return response;
}

async function logout() {
    const response = await get(settings.host + '/users/logout');
    
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userId');
    return response;
}