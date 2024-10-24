import request from "../../utils/request.ts";
import {HospitalLevelAndRegionResponseData, HospitalResponseData} from "./type.ts";

enum HOSPITAL_ENUM {
    //获取已有医院数据的接口地址
    HOSPITAL_URL = '/hosp/hospital/',
    //获取医院的等级与地区的接口
    HOSPITAL_LEVELANDREGION_URL = '/cmn/dict/findByDictCode/',
    //根据关键字医院的名字获取数据
    HOSPITAL_INFO_URL = '/hosp/hospital/findByHosname/'
}

/**
 * 获取医院信息
 * @param page
 * @param limit
 */
export const reqHospital =
    (page:number, limit:number, hostype='',districtCode='') =>
        request.get<any,HospitalResponseData>(HOSPITAL_ENUM.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
//获取医院等级和地区的数据
export const reqHospitalLevelAndRegion =
    (dictCode: string) =>
        request.get<any, HospitalLevelAndRegionResponseData>(HOSPITAL_ENUM.HOSPITAL_LEVELANDREGION_URL + dictCode);
