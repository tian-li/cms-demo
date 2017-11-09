var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var AdminUser = require('../models/adminUser');

router.post('/signup', function (req, res, next) {
    var adminUser = new AdminUser({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    adminUser.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        let token = jwt.sign({ adminUser: adminUser}, 'secret', {expiresIn: 7200});
        res.status(201).json({
            message: 'User created',
            obj: result,
            token: token
        });
    });
});

router.post('/signin', (req, res, next) => {
    AdminUser.findOne({ username: req.body.username }, (err, admin) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!admin) {
            return res.status(401).json({
                title: 'Login failed',
                error: { message: 'Invalid login credentials' }
            });
        }
        if (!bcrypt.compareSync(req.body.password, admin.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: { message: 'Invalid login credentials' }
            });
        }
        var token = jwt.sign({ admin: admin }, 'secret', { expiresIn: 7200 });
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            adminId: admin._id
        });
    });
});

module.exports = router;
