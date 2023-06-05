const baseUrl = 'https://pset-api.connect.trimble.com/v1/';

export async function psetGetRequest(endpointUrl, accessToken)
{
    const result = await fetch(baseUrl.concat(endpointUrl), {
        method: 'GET',
        headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${accessToken}`
        }
     });

     return result;
}