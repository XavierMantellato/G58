export async function GetRequest(url, headers, params) {
    var request = url;
    if (params != ""){
        request = request.concat('?' + new URLSearchParams(params))
    }
    const response = await fetch(request, {
        method: "GET",
        headers : headers
    })
    const data = await response.json();

    return data;
}