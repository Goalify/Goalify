"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const auth_1 = require("./middlewares/auth");
const cors_1 = __importDefault(require("cors"));
const userController = __importStar(require("./controllers/userController"));
const goalsController = __importStar(require("./controllers/goalsController"));
const app = (0, express_1.default)();
(0, database_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/register", userController.register);
app.post("/login", userController.login);
app.get("/get-goals", auth_1.auth, goalsController.getGoals);
app.post("/add-goal", auth_1.auth, goalsController.addGoal);
app.post("/add-milestone", auth_1.auth, goalsController.addMilestone);
app.post("/remove-goal", auth_1.auth, goalsController.removeGoal);
app.post("/remove-milestone", auth_1.auth, goalsController.removeMilestone);
app.post("/edit-goal", auth_1.auth, goalsController.editGoal);
app.post("/edit_milstone", auth_1.auth, goalsController.editMilestone);
app.post("/discover", auth_1.auth, goalsController.discover);
app.post("/test", auth_1.auth, (req, res) => {
    res.status(200).send('test passed');
});
exports.default = app;
//# sourceMappingURL=app.js.map