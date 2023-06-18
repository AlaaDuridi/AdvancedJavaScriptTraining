function isValidDate(date) {
 
    // Date format: YYYY-MM-DD
    var datePattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    // Check if the date string format is a match
    var matchArray = date.match(datePattern);
    if (matchArray == null) {
        return false;
    }
    // Remove any non digit characters
    var dateArr = date.split('-'); 
    // Parse integer values from the date string
    var year = parseInt(dateArr[0]);
    var month = parseInt(dateArr[1]);
    var day = parseInt(dateArr[2]);
    // console.log(`year : ${year} , month: ${month} , day: ${day}`)
    // Define the number of days per month
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        daysInMonth[1] = 29;
    }
    if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
        return false;
    }
    return true;
}

// console.log(isValidDate('2022-05-14'))
export default isValidDate ;
