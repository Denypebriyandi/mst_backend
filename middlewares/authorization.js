exports.basicAuth = (request, response, next) => {
    const authorization = request.headers.authorization;
    if(authorization === undefined) {
        const data = {
            'status': 401,
            'message': 'No Auth'
        }
        response.status(401);
        response.end(response.json(data));
    } else {
        const username = 'mst';
        const password = '0987654321';
        const basicAuth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
        if(authorization === basicAuth) {
            next()
        } else {
            const data = {
                'status': 401,
                'message': 'Authority is wrong'
            }
            response.status(401);
            response.end(response.json(data));
        }
    }
}