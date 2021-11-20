/*
Write a short program that, when given a date, calculates the age between the current date and the given date. 

An example of an input and output might look like this: 

1990-01-01 should return 31

1972-12-04 should return 48 (this is the date format required to use Date.parse())


Hints: you’ll likely need to use the JavaScript Date object. Some helpful links can be found here:

Official Date documentation	

W3Schools Date documentation
*/

const ageCalculator = function (date) {
    let inputDate = new Date(date)
    let currentDate = new Date
    let elapsed = currentDate - inputDate // elapsed time in millliseconds
    let years = elapsed / 1000 / 3600 / 24 / 365
    console.log(`Total years elapsed since ${date}: ${Math.floor(years)}`)
}


ageCalculator('1990-01-01')
ageCalculator('1972-12-04')