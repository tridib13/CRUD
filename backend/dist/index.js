"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (_, res) => {
    res.json({
        user: 1,
        password: 'password'
    });
});
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});
//# sourceMappingURL=index.js.map