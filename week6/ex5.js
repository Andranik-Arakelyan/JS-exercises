// Exercise 5
// Given a Date() object, return the date from three days prior as a string: "2016-01-19".
// Examples:
// threeDaysAgo(new Date(2018, 0, 1)) ➞ "2017-12-29"
// threeDaysAgo(new Date(2015, 5, 17)) ➞ "2015-06-14"
// threeDaysAgo(new Date(1965, 3, 15))➞ "1965-04-12"
// Notes:
// ● Your function must work in the past, present and future.
// ● JavaScript months are zero based.
// ● Your output should NOT be zero based: 2016, 0, 19 == "2016-01-19".


function threeDaysAgo(date) {
    let dateStr;
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (day < 4) {
        if (month === 0) {
            dateStr = `${year - 1}-12-${31 - (3 - day)}`;
        } else {
            let priorMonthDays = new Date(year, month, 0).getDate();

            if (month < 10) {
                month = "0" + month;
            }
            dateStr = `${year}-${month}-${priorMonthDays - (3 - day)}`;
        }    
    } else {
        month++;

        if(month < 10) {
            month = "0" + month ;
        }
        dateStr = `${year}-${month}-${day - 3}`;
    }

    return dateStr;
}


console.log(threeDaysAgo(new Date(2018, 0, 1)));
console.log(threeDaysAgo(new Date(2015, 5, 17)));
console.log(threeDaysAgo(new Date(1965, 3, 15)));