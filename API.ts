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