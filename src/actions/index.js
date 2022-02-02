

export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

export const errorMsg = (message) => {
    return({type: ERROR, payload: message})
}

export const success = (message) => {
    return({type:SUCCESS, payload: message})
}