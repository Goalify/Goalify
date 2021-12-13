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
exports.login = exports.register = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        if (!(email && password && username)) {
            res.status(400).send("All input is required");
            return;
        }
        const oldUser = yield user_1.UserModel.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        const encryptedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield user_1.UserModel.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword
        });
        const token = jsonwebtoken_1.default.sign({ user_id: newUser._id, username }, process.env.TOKEN_KEY, {
            expiresIn: "2h",
        });
        newUser.token = token;
        res.status(200).json(newUser);
    }
    catch (e) {
        // tslint:disable-next-line:no-console
        console.log(e);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).send("All input is required");
            return;
        }
        const user = yield user_1.UserModel.findOne({ username });
        if (user && (yield bcrypt_1.default.compare(password, user.password))) {
            const token = jsonwebtoken_1.default.sign({ user_id: user._id, username }, process.env.TOKEN_KEY, {
                expiresIn: "2h",
            });
            user.token = token;
            res.status(200).json(user);
            return;
        }
        res.status(400).send("Invalid Credentials");
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err);
    }
});
exports.login = login;
//# sourceMappingURL=userController.js.map