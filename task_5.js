console.log("Приклад: 2020 рік 2 місяць")
function date (year,month) {
    if (year % 4 === 0)
        console.log("Високосний рік")
    else
        console.log("Не високосний рік")
    if (month ===9 || month ===11 || month===4|| month===6 && month !==2 )
        console.log("30 днів")
    else if (month !== 2)
        console.log("31 день")
    if (year % 4 === 0 && month === 2)
        console.log("29 днів")
    else if (year % 4 !== 0 && month === 2)
        console.log("28 днів")
}
date(2020,2)