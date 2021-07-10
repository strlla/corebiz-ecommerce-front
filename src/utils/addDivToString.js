export const addDivToString = (number = 0, div='.') => {
    return number.toString().substring(0, number.toString().length-2)+ div +number.toString().substring(number.toString().length-2)
}