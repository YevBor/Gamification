
export const BASE_URL = 'https://api.nomoreparties.co';

export const register = (username: string, password:string, email: string) => {
    return fetch(`${BASE_URL}/auth/local/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password, email})
    })
    .then((response) => {
        console.log('2')
        return response.json();
    })
    .then((res) => {
        return res;
        console.log('2')
    })
    .catch((err) => console.log(err));
}