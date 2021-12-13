"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const user_1 = require("../../models/user");
const console_1 = require("console");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
describe('userController', () => {
    describe('register', () => {
        jest.spyOn(user_1.UserModel, 'findOne')
            .mockReturnValue(Promise.resolve(null));
        jest.spyOn(user_1.UserModel, 'create')
            .mockImplementationOnce(() => Promise.resolve({
            _id: 'some-id',
            username: 'test-username',
            email: 'test-email',
            password: 'test-password'
        }));
        jest.spyOn(jsonwebtoken_1.default, 'sign').mockImplementation(() => 'sometoken');
        it('registers a user', (done) => {
            (0, supertest_1.default)(app_1.default)
                .post('/register')
                .send({
                "username": "test-username",
                "email": "test@test-mail.com",
                "password": "test-password"
            })
                .expect(200)
                .then(response => {
                (0, console_1.assert)(response.body, {
                    "username": "test-username",
                    "email": "test-email",
                    "password": "test-password",
                    "_id": "some-id",
                    "__v": 0,
                    "token": "sometoken"
                });
            });
        });
    });
});
//# sourceMappingURL=userController.test.js.map