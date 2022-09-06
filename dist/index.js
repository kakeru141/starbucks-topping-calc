"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var next_1 = __importDefault(require("next"));
var router_1 = require("./api/router");
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
var dev = process.env.NODE_ENV === 'development';
var port = process.env.PORT;
var app = (0, next_1.default)({ dev: dev });
var handle = app.getRequestHandler();
app.prepare()
    .then(function () {
    var server = (0, express_1.default)();
    server.use(function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTION");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        next();
    });
    server.use(body_parser_1.default.json());
    server.use(express_1.default.json());
    server.use('/test', router_1.router);
    mongoose_1.default.connect(process.env.DB_URL || '')
        .catch(function (err) { return console.error(err); });
    server.all('*', function (req, res) {
        return handle(req, res);
    });
    server.listen(port, function () {
        console.log("server running is ".concat(port));
    });
})
    .catch(function (err) { return console.error(err); });
