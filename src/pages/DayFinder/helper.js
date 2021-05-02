import moment from 'moment'

const DAYS = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}


export const findDay = (dateObject) => {
    const date = moment(dateObject, "DD/MM/YYYY")
    const dayOfMonth = date.date()
    const year = date.year().toString()
    const month = date.month() + 1
    let lastTwoDigitOfYear = parseInt(year[year.length - 2] + year[year.length - 1])
    const firstTwoDigitOfYear = parseInt(year[0] + year[1])
    let monthNumber = month - 2
    if (monthNumber <= 0) {
        monthNumber = monthNumber === 0 ? 12 : 11
        lastTwoDigitOfYear--
    }


    const resIndex = dayOfMonth + parseInt(parseInt(13 * monthNumber - 1) / 5) + lastTwoDigitOfYear + parseInt(lastTwoDigitOfYear / 4) + parseInt(firstTwoDigitOfYear / 4) - 2 * firstTwoDigitOfYear
    const offset = resIndex % 7
    return DAYS[offset]

}