function leapYear (year){
    let answer = '';
    if(year % 4 == 0){
        answer = 'yes';
    } else if(year % 400 == 0){
        answer = 'yes';
    } else {
        answer = 'no';
    }
    if(year % 100 == 0 && year % 400 != 0){
        answer = 'no';
    }
    console.log(answer);
}
leapYear(1999);
leapYear(1900);
leapYear(2000);
leapYear(2016);