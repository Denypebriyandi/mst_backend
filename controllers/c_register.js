const query = require('../querys/q_register');

exports.postRegister = async (request, response) => {
    if (request.body.username.length < 6) {
        const data = {
            'status': 400,
            'message': 'Username minimal 6 karakter'
        }
        response.status(400);
        response.end(response.json(data));
    } else {
        if (request.body.password.length < 6) {
            const data = {
                'status': 400,
                'message': 'Password minimal 6 karakter'
            }
            response.status(400);
            response.end(response.json(data));
        } else {
            try {
                const cekUsername = await query.cekUsername(request.body.username);
                if (cekUsername.length === 0) {
                    const hashPassword = await query.hashPassword(request.body.password);
                    const insert = await query.insert({username: request.body.username, password: hashPassword});
                    const data = {
                        'status': 201,
                        'message': 'Register berhasil, silahkan Login kembali'
                    }
                    response.status(201);
                    response.end(response.json(data));
                } else {
                    const data = {
                        'status': 400,
                        'message': 'Username '+request.body.username+' sudah terdaftar'
                    }
                    response.status(400);
                    response.end(response.json(data));         
                }
            } catch (error) {
                const data = {
                    'status': 500,
                    'message': error
                }
                response.status(500);
                response.end(response.json(data));
            }
            
        }
    }
}