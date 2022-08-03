const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');
const Quizes = require("../models/quizes");
const userRouter = express.Router();
userRouter.use(bodyParser.json());
userRouter.route('/login')
    .get((req, res, next) => {
        Quizes.find({isEnabled : true})
            .then((quizes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                var text = "";
                res.json(quizes);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser, (req, res, next) => {
        Quizes.create(req.body)
            .then((quiz) => {
                console.log('Quiz Created: ', quiz);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(quiz);
            }, (err) => next(err)).catch((err) => next(err));
    })