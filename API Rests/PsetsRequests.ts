const baseUrl = 'https://pset-api.connect.trimble.com/v1/';

function PsetGetRequest(endpointUrl: string, accessToken: string)
{
    return fetch(baseUrl.concat(endpointUrl), {
        method: 'GET',
        headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${accessToken}`
        }
     });
}