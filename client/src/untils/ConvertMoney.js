
export const ConvertMoneyToString = (money) => {
    const stringMoney = money.toString();
    const arr = [...stringMoney]
    const newarr = []
    let count = 0;
    for(let i = arr.length - 1; i >= 0 ; i--){
        count++
        newarr.unshift(arr[i])
        if(count % 3 === 0 && i !== 0){
            newarr.unshift(".")
        }
    }
    return newarr.join('');
}

export const MathSaleMoney = (price,salePrice) => {
    return ConvertMoneyToString(price - salePrice);
}

export const MathPercentSale = (price,salePrice) => {
    return (salePrice/price)*100
}