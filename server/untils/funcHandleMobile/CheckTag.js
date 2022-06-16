
export const checkInputSearchMobile = (input,defaultInput) => {
    if(input){
        if(typeof(input) === "string"){
            return [ input ]
        }else{
            return input
        }
    }else{
        return defaultInput
    }
}

export const CheckTagPrice = (price) => {

    let tag = ""

    



    switch(true){
           
            case (price > 13000000):
                tag = "Trên-13-triệu"
                break

            case 7000000 < price < 13000000:
                tag = "Từ-7-13-triệu"
                break

            case 4000000 < price < 7000000:
                tag = "Từ-4-7-triệu"
                break
                
            case 2000000 < price < 4000000:
                tag =  "Từ-2-4-triệu"
                break
            
            case price < 2000000:
                tag = "Dưới-2-triệu"
                break
            default: 
                tag = ""
        }
    return tag

}

export const CheckTagPin = (pin) => {

    const pinC = +pin.substring(0,4)

    console.log(typeof(pinC))

    let tag = ""


    switch(true){
           
        case pinC > 4000 :
            tag = "Trên-4000-mah"
            break

        case 3000 < pinC < 4000 :
            tag = "Từ-3000-4000-mah"
            break

        case pinC < 3000 :
            tag = "Dưới-3000-mah"
            break
            
        default: 
            tag = ""
    }

    return tag
}

export const getAllTagMobile = (name, brand, price, pin) => {
    const priceN = CheckTagPrice(price)
    const pinN = CheckTagPin(pin)
    const tag = [name, brand, priceN, pinN]
    return tag
}