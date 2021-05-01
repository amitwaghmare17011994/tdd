export const findBMI = (weight, height) => {
    const res =  ((weight) / (height * height))*10000
    return res
}