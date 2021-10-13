import axios, { AxiosResponse } from 'axios';
import express from 'express';
import API from './API';


const app = express();

function Nor(num: number): string {
    return (num < 10)? `0${num}`:`${num}`;
}

app.post('/Today', async (req, res) => {
    let Day = new Date();
    // let Today = Day.getFullYear().toString() + ((Day.getMonth()+1 < 10)? "0"+(Day.getMonth()+1):Day.getMonth()+1).toString() + ((Day.getDay() < 10)? "0"+Day.getDay():Day.getDay()).toString();
    let Today = `${Day.getFullYear()}${Nor(Day.getMonth()+1)}${Nor(Day.getDate())}`;
    

    res.send(await API.GetLunch(Today));
});

app.post('/Tomorrow', async (req, res) => {
    let Day = new Date();
    Day.setDate(Day.getDate()+1);
    let Tomorrow = `${Day.getFullYear()}${Nor(Day.getMonth()+1)}${Nor(Day.getDate())}`;

    res.send(await API.GetLunch(Tomorrow));
});

app.listen(9997, () => {
    console.log("급식 서버 is on");
});