
const ConvertObjToParamsQueryUrl = (obj) => {

    const result = {}
    for( let i in obj ){
        if(obj[i].length >= 1){
            const querystring = obj[i].join(" ")
            result[i] = querystring
        }else{
            result[i] = []
        }
    }

    return result
}

export const ConvertParamsQueryUrlToObj = (paramsquery) => {
    const result = {}
    
    for( let i = 0 ; i < paramsquery.length ; i++){
        result[paramsquery[i][0]] = paramsquery[i][1].split(" ")
    }

    return result

}
 export default ConvertObjToParamsQueryUrl