"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discover = exports.editMilestone = exports.editGoal = exports.removeMilestone = exports.removeGoal = exports.addMilestone = exports.addGoal = exports.getGoals = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const node_fetch_1 = __importDefault(require("node-fetch"));
dotenv_1.default.config();
const config = process.env;
const getGoals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.query.token;
        const decoded = jsonwebtoken_1.default.verify(token, config.TOKEN_KEY);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: decoded.user_id
            })
        };
        (0, node_fetch_1.default)(`http://localhost:${config.BACKEND_PORT}/get-goals`, requestOptions)
            .then(response => response.json())
            .then((data) => res.status(200).json(data));
        res.status(400).send("invalid token");
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    }
});
exports.getGoals = getGoals;
const addGoal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, goal } = req.body;
        const decoded = jsonwebtoken_1.default.verify(token, config.TOKEN_KEY);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.assign({ user_id: decoded.user_id }, goal))
        };
        (0, node_fetch_1.default)(`http://localhost:${config.BACKEND_PORT}/add-goal`, requestOptions)
            .then(response => response.json())
            .then((data) => res.status(200).json(data));
        res.status(400).send("invalid token");
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    }
});
exports.addGoal = addGoal;
const addMilestone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, milestone } = req.body;
        const decoded = jsonwebtoken_1.default.verify(token, config.TOKEN_KEY);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.assign({ user_id: decoded.user_id }, milestone))
        };
        (0, node_fetch_1.default)(`http://localhost:${config.BACKEND_PORT}/add-milestone`, requestOptions)
            .then(response => response.json())
            .then((data) => res.status(200).json(data));
        res.status(400).send("invalid token");
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    }
});
exports.addMilestone = addMilestone;
const removeGoal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, goalId } = req.body;
        const decoded = jsonwebtoken_1.default.verify(token, config.TOKEN_KEY);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: decoded.user_id,
                goalId
            })
        };
        (0, node_fetch_1.default)(`http://localhost:${config.BACKEND_PORT}/remove-goal`, requestOptions)
            .then(response => response.json())
            .then((data) => res.status(200).json(data));
        res.status(400).send("invalid token");
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    }
});
exports.removeGoal = removeGoal;
const removeMilestone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, milestoneId } = req.body;
        const decoded = jsonwebtoken_1.default.verify(token, config.TOKEN_KEY);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: decoded.user_id,
                milestoneId
            })
        };
        (0, node_fetch_1.default)(`http://localhost:${config.BACKEND_PORT}/remove-milestone`, requestOptions)
            .then(response => response.json())
            .then((data) => res.status(200).json(data));
        res.status(400).send("invalid token");
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    }
});
exports.removeMilestone = removeMilestone;
const editGoal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, goalId, goal } = req.body;
        const decoded = jsonwebtoken_1.default.verify(token, config.TOKEN_KEY);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.assign({ user_id: decoded.user_id, goalId }, goal))
        };
        (0, node_fetch_1.default)(`http://localhost:${config.BACKEND_PORT}/edit-goal`, requestOptions)
            .then(response => response.json())
            .then((data) => res.status(200).json(data));
        res.status(400).send("invalid token");
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    }
});
exports.editGoal = editGoal;
const editMilestone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, milestoneId, milestone } = req.body;
        const decoded = jsonwebtoken_1.default.verify(token, config.TOKEN_KEY);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.assign({ user_id: decoded.user_id, milestoneId }, milestone))
        };
        (0, node_fetch_1.default)(`http://localhost:${config.BACKEND_PORT}/edit-milestone`, requestOptions)
            .then(response => response.json())
            .then((data) => res.status(200).json(data));
        res.status(400).send("invalid token");
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    }
});
exports.editMilestone = editMilestone;
const discover = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, numRows } = req.body;
        const decoded = jsonwebtoken_1.default.verify(token, config.TOKEN_KEY);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: decoded.user_id,
                numRows
            })
        };
        (0, node_fetch_1.default)(`http://localhost:${config.BACKEND_PORT}/discover`, requestOptions)
            .then(response => response.json())
            .then((data) => res.status(200).json(data));
        res.status(400).send("invalid token");
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    }
});
exports.discover = discover;
//# sourceMappingURL=goalsController.js.map