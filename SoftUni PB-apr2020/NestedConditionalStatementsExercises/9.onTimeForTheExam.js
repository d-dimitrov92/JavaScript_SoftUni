function onTimeForTheExam(arg1,arg2,arg3,arg4) {
  let startHoursExam = Number(arg1);
  let startMinutesExam = Number(arg2);
  let arriveHours = Number(arg3);
  let arriveMinutes = Number(arg4);
 
  let examTimeInMinutes = startHoursExam * 60 + startMinutesExam;
  let studentTimeInMinutes = arriveHours * 60 + arriveMinutes;
 
  let differenceTime = examTimeInMinutes - studentTimeInMinutes;
  let positiveDifference = Math.abs(differenceTime);
 
  let hours = Math.floor(positiveDifference / 60);
  let minutes = positiveDifference % 60;
 
  if (differenceTime < 0) {
    console.log("Late");
    if (hours == 0) {
      console.log(`${minutes} minutes after the start`);
    } else {
      if (minutes < 10) {
        console.log(`${hours}:0${minutes} hours after the start`);
      } else {
        console.log(`${hours}:${minutes} hours after the start`);
      }
    }
  } else if (differenceTime <= 30) {
    console.log("On time");
    if (minutes !== 0) {
      console.log(`${minutes} minutes before the start`)
    }
  } else {
    console.log("Early");
    if (hours === 0) {
      console.log(`${minutes} minutes before the start`);
    } else {
      if (minutes < 10) {
        console.log(`${hours}:0${minutes} hours before the start`);
      } else {
        console.log(`${hours}:${minutes} hours before the start`);
      }
    }
  }
}

onTime("16", "00", "15", "00")

































// function onTime(arg1, arg2, arg3, arg4) {
//     let examHour = Number(arg1);
//     let examMinutes = Number(arg2);
//     let arriveHour = Number(arg3);
//     let arriveMinutes = Number(arg4);
//     let hourDiff = Math.abs(examHour - arriveHour);
//     let minDiff = Math.abs(examMinutes - arriveMinutes);

//     if (examHour != arriveHour && examMinutes < arriveMinutes) {
//         minDiff = Math.abs(60 - minDiff);
//     }

//     if (examHour === arriveHour) {
//         if (examMinutes === arriveMinutes) {
//             console.log("On time");
//         } else if (examMinutes > arriveMinutes) {
//             minDiff = Math.abs(examMinutes - arriveMinutes);
//             if (minDiff > 30) {
//                 console.log("Early")
//                 console.log(`${minDiff} minutes before the start`)
//             } else {
//                 console.log("On time")
//                 console.log(`${minDiff} minutes before the start`)
//             }
//         } else if (examMinutes < arriveMinutes) {
//             console.log("Late")
//             console.log(`${minDiff} minutes after the start`)
//         }
//     } else if (examHour > arriveHour) {
//         if (minDiff <= 30 && minDiff != 0 && hourDiff < 2) {
//             console.log("On time")
//             console.log(`${minDiff} minutes before the start`);
//         } else if (minDiff > 30) {
//             console.log("Early");
//             console.log(`${minDiff} minutes before the start`);
//         }
//         else if (minDiff == 0) {
//             console.log("Early")
//             console.log(`${hourDiff}:00 hours before the start`);
//         } else if (hourDiff > 1) {
//             console.log("Early")
//             console.log(`${hourDiff}:${minDiff} hours before the start`);
//         }
//     } else if (examHour < arriveHour) {
//         if (minDiff < 30) {
//             console.log("Late");
//             console.log(`${60 - minDiff} minutes after the start`);
//         } else {
//             console.log("Late");
//             console.log(`${hourDiff}:${minDiff} hours after the start`);
//         }
//     }
// }

// onTime(
//     "9", "00", "10", "30"
// )