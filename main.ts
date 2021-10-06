import axios, { AxiosResponse } from 'axios';
import express from 'express';


const app = express();

function Nor(num: number): string {
    return (num < 10)? `0${num}`:`${num}`;
}

app.post('/Today', async (req, res) => {
    let Day = new Date();
    // let Today = Day.getFullYear().toString() + ((Day.getMonth()+1 < 10)? "0"+(Day.getMonth()+1):Day.getMonth()+1).toString() + ((Day.getDay() < 10)? "0"+Day.getDay():Day.getDay()).toString();
    let Today = `${Day.getFullYear()}${Nor(Day.getMonth()+1)}${Nor(Day.getDate())}`;
    console.log(Today)
    let result: AxiosResponse<APIResponse> = await axios.post(`https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7531328&MLSV_YMD=${Today}&Type=json`)
    
    console.log(result.data)
    if (!result.data.mealServiceDietInfo) return res.send({data: null})
    if (!result.data.mealServiceDietInfo.length) return res.send({data: null})

    res.send(result.data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/(\d+\.)*<br\/>/g, '. '));
})


app.listen(9997, () => {
    console.log("급식 서버 is on");
});