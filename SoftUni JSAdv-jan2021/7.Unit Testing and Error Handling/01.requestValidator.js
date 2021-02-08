function solve(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegEx = /^([a-z\.0-9]+)$|\*/gm;
    const messageRegEx = /^([\w+-][^<>\\&'"]+)|&/g;
    const invalidChars = ['<','>','\\', '&', ,'"'];
    let isValid = true;
    if (!validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!uriRegEx.test(obj.uri) || !obj.uri) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!validVersions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    if (obj.message == undefined || (!obj.message == '' && obj.message.length > 0)) {
        throw new Error("Invalid request header: Invalid Message");
    }
    for (const char of invalidChars) {
        if(obj.message.includes(char)){
            throw new Error("Invalid request header: Invalid Message");
        }
    }
    return obj;
}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
));