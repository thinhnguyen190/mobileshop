


const CheckValueOfKeysObj = (obj) => {
    let count = 0
    for( let key in obj){
        if(obj[key].length > 0){
            count++
        }
    }
    return count
}

export default CheckValueOfKeysObj