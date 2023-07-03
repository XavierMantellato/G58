export async function GetRequest(url, headers, params) {
    var request = url;
    if (params != ""){
        request = request.concat('?' + new URLSearchParams(params))
    }
    var response = await fetch(request, {
        method: "GET",
        headers : headers
    })
    var data = await response.json();

    return data;
}