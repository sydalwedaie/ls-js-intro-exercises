let num = 4936
let ones = num % 10
console.log('ones: ', ones) // 6

num = (num - ones) / 10 // 493

let tens = num % 10
console.log('tens: ', tens) // 3

num = (num - tens) / 10 // 49

let hundreds = num % 10
console.log('hundreds: ', hundreds) // 9

let thousands = (num - hundreds) / 10 // 4
console.log('thousands: ', thousands) // 4
