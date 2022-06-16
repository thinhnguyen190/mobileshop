export const CheckCreateTimeOfComment = (time) => {
    const result = new Date(time)
    return result.toLocaleString()
}


export const CreateAvatarComment = (name) => {
    const arr = name.split(" ")
    let result = ""
    for( let i = 0 ; i < arr.length ; i++ ){
        result = result + arr[i][0].toUpperCase()
    }
    return result
}