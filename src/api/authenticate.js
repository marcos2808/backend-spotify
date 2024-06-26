import axios from "axios";
import { authUrl } from "./url.js";

const clientId = '07ef288afade491db9f20b58d12e6e25';
const clientSecret = '643e1e120e144d24b6a3644be1fa5dc0';

const body = 'grant_type=client_credentials';

export const getAccessToken = async () => {
    const response = await axios.post(authUrl, body, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        }
    })
    return response.data.access_token
}

