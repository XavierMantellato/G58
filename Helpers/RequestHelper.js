async function GetRequest(url, params) {

    const response = await fetch(url + '?' + new URLSearchParams(params))
    const data = await response.json()

    return data
}