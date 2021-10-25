import axios, { AxiosResponse } from "axios";

interface APIResponse {
    mealServiceDietInfo: Array<{
        head: Array<{
            list_total_count?: number
            RESULT: {CODE: string, MESSAGE: string}
        }>
        row: Array<{
            ATPT_OFCDC_SC_CODE: string, //school zip code
            ATPT_OFCDC_SC_NM: string, // studycenter name
            SD_SCHUL_CODE: string, // school code
            SCHUL_NM: string, // school name
            MMEAL_SC_CODE: number, // ?? (2)
            MMEAL_SC_NM: string, // time
            MLSV_YMD: number, // date YYYMMDD
            MLSV_FGR: number, // ?? (530)
            DDISH_NM: string, // dish list
            ORPLC_INFO: string, // info
            CAL_INFO: string, // KAL
            NTR_INFO: string, // ?
            MLSV_FROM_YMD: number, // date YYYYMMDD
            MLSV_TO_YMD: number // date YYYYMMDD
          }>
    }>
}

// const RecentMeal = {
//     time: 
// }

export default {
    GetLunch: (time: string): Promise<string> => {
        return new Promise(async (resolve, reject) => {
            try {
                let result: AxiosResponse<APIResponse> = await axios.post(`https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7531328&MLSV_YMD=${time}&Type=json`);
        
                if (!result.data.mealServiceDietInfo.length) return reject("조회된 급식이 없습니다.");
                else return resolve(result.data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/(\d+\.)*<br\/>/g, '. '));
            } catch (err) {
                console.log(err);
                return reject("급식 정보를 받아오는데 실패했습니다.");
            }
        })
    }
}
