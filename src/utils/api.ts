import { BASE_URL } from "../constants";

export const API = {
    get: async (url: string, headers = {}) => {
        return fetch(BASE_URL+url, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers
            }
        }).then(async (response) => {
            return response.json()
                .then(data => {
                    const result = {
                        status: response.status,
                        data: data,
                        message: data.message,
                    };
                    return result;
                });
        }).catch((err) => {
            return Promise.reject(err);
        });
    },
    post: async (url: string, body = {}, headers = {}) => {
        return fetch(BASE_URL+url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        }).then(async (response) => {
            return response.json()
                .then(data => {
                    const result = {
                        status: response.status,
                        data: data,
                        message: data.message,
                    };
                    return result;
                });
        }).catch((err) => {
            return Promise.reject(err);
        });
    },
    put: async (url: string, body = {}, headers = {}) => {
        return fetch(BASE_URL+url, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers  
            },
            body: JSON.stringify(body)
        }).then(async (response) => {
            return response.json()
                .then(data => {
                    const result = {
                        status: response.status,
                        data: data,
                        message: data.message,
                    };
                    return result;
                });
        }).catch((err) => {
            return Promise.reject(err);
        });
    },
    downloadFile: async (url: string,name:string, headers = {}) => {
        return fetch(BASE_URL+url, {
            method: 'get',
            headers: {
                'Content-Type':'text/csv',
                ...headers
            }
        }).then(async (response) => {
            if (response.status === 200) {
                const res = await response.blob()
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(res);
                link.download = name;
                link.target='_self';
                link.click();
                return Promise.resolve()
            }
            else{
                return Promise.reject(response)
            }
        }).catch((err) => {
            return Promise.reject(err)
        });
    },
}
