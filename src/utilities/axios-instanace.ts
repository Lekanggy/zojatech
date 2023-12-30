import axios from 'axios';



export const client =  (token?: null | string) => {
    // console.log('inside client',token)
    const defaultOptions = {
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : '',
        },
    };

    return {
        get: async (url:string, options = {}) => await axios.get(url, { ...defaultOptions, ...options }),
        post: async (url:string, data={}, options = {}) => await axios.post(url, data, { ...defaultOptions, ...options }),
        put: async (url: string, data={}, options = {}) => await axios.put(url, data, { ...defaultOptions, ...options }),
        delete: async (url: string, options = {}) => await axios.delete(url, { ...defaultOptions, ...options }),
        patch: async (url:string, data={}, options = {}) => await axios.patch(url, data, { ...defaultOptions, ...options })
    };
};
