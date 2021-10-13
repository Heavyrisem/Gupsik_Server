"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const API_1 = __importDefault(require("./API"));
const app = (0, express_1.default)();
function Nor(num) {
    return (num < 10) ? `0${num}` : `${num}`;
}
app.post('/Today', async (req, res) => {
    let Day = new Date();
    // let Today = Day.getFullYear().toString() + ((Day.getMonth()+1 < 10)? "0"+(Day.getMonth()+1):Day.getMonth()+1).toString() + ((Day.getDay() < 10)? "0"+Day.getDay():Day.getDay()).toString();
    let Today = `${Day.getFullYear()}${Nor(Day.getMonth() + 1)}${Nor(Day.getDate())}`;
    res.send(await API_1.default.GetLunch(Today));
});
app.post('/Tomorrow', async (req, res) => {
    let Day = new Date();
    Day.setDate(Day.getDate() + 1);
    let Tomorrow = `${Day.getFullYear()}${Nor(Day.getMonth() + 1)}${Nor(Day.getDate())}`;
    res.send(await API_1.default.GetLunch(Tomorrow));
});
app.listen(9997, () => {
    console.log("급식 서버 is on");
});
