

// export const CreateStringQueryForCheckBox = ( data ) => {
//     let query = `$or: [`
//     for(let i = 0 ; i < data.length ; i++){
//         if(i===0){
//             query = query + `{tag:{ $regex: '.*' + "${data[i]}" + '.*', $options: 'i' }}`
//         }else{
//             query = query + "," + `{tag: { $regex: '.*' + "${data[i]}" + '.*', $options: 'i' }}`
//         }
//     }
//     return query + `]`
// }

// export const CreateStringQueryForCheckBox = (listArray) => {
//     const query = {}
//     for (let obj in listArray) {

//         const arrCheck = ConvertArrayToString(listArray[obj])
//         if(arrCheck === "[]"){
//             continue
//         }else{
//             query["tag"] = query + `${obj}: { $in: ${arrCheck}}` + ","
//         }
            
       
        
        
//     }

//     return query 
// }

// const ConvertArrayToString= (arr) => {
//     let result = "["
//     if(Array.isArray(arr)){
//         for(let i = 0 ; i < arr.length ; i++){
//             if(i === 0){
//                 result = result + `"${arr[i]}"`
//             }else{
//                 result = result + "," + `"${arr[i]}"`              
//             }
//         }
//     }else{
//         result = result + `"${arr}"`
//     }
    
//     return result + "]"
// }
