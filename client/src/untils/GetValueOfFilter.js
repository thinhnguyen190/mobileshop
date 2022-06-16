export const GetValueOfFilter = (filter) => {
    const arr = []
    for(let obj in filter){
        for( let i = 0 ; i < filter[obj].length ; i ++){
            arr.push([obj,filter[obj][i]])
        }
    }
    return arr
} 