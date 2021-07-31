const query = require('../querys/q_login');
const jwt = require('jsonwebtoken');

exports.postLogin = async (request, response) => {
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
                if (cekUsername.length > 0) {
                    const hashPassword = await query.hashPassword(request.body.password,cekUsername[0].password);
                    const jwtoken = await jwt.sign({data: cekUsername}, 'secret', { expiresIn: '8h' });
                    const data = {
                        'status': 200,
                        'message': 'Anda berhasil Login',
                        'token': jwtoken
                    }
                    response.status(200);
                    response.end(response.json(data));
                } else {
                    const data = {
                        'status': 400,
                        'message': 'Username atau password yang anda masukan salah'
                    }
                    response.status(400);
                    response.end(response.json(data));         
                }
            } catch (error) {
                if (error === "password_salah") {
                    const data = {
                        'status': 400,
                        'message': 'Username atau password yang anda masukan salah'
                    }
                    response.status(400);
                    response.end(response.json(data));
                } else {
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
}

exports.forgotPassword = async (request, response) => {
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
            if (request.body.password2.length < 6) {
                const data = {
                    'status': 400,
                    'message': 'Password minimal 6 karakter'
                }
                response.status(400);
                response.end(response.json(data));
            } else {
                try {
                    const cekUsername = await query.cekUsername(request.body.username);
                    if (cekUsername.length > 0) {
                        if (request.body.password === request.body.password2) {
                            const hashPassword = await query.hashPassword2(request.body.password);
                            const update = await query.update(hashPassword,cekUsername[0].id);
                            const data = {
                                'status': 200,
                                'message': 'Password berhasil dirubah, silahkan Login kembali'
                            }
                            response.status(200);
                            response.end(response.json(data));
                        } else {
                            const data = {
                                'status': 400,
                                'message': 'Password baru harus sama dengan ulangi password'
                            }
                            response.status(400);
                            response.end(response.json(data));         
                        }
                    } else {
                        const data = {
                            'status': 400,
                            'message': 'Username yang anda masukan tidak terdaftar'
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
}