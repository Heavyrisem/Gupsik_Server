"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = {
    GetLunch: (time) => {
        return new Promise(async (resolve, reject) => {
            let result = await axios_1.default.post(`https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7531328&MLSV_YMD=${time}&Type=json`);
            if (!result.data.mealServiceDietInfo.length)
                return reject("조회된 급식이 없습니다.");
            else
                return resolve(result.data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/(\d+\.)*<br\/>/g, '. '));
        });
    }
};
