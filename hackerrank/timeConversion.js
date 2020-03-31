function timeConversion(s) {

  let dateSplit;
  let type;
  if(s.indexOf('AM') > -1) {
    dateSplit = s.split('AM')
    type = 'AM'
  } else if(s.indexOf('PM') > -1) {
    dateSplit = s.split('PM')
    type = 'PM'
  }

  let time = dateSplit[0].split(':')
  let date = new Date();

  let hour = parseInt(time[0]);

  if((type === 'PM' && hour < 12) || (type === 'AM' && hour === 12)) {
    date.setHours(hour + 12);
  } else {
    date.setHours(hour);
  }

  date.setMinutes(parseInt(time[1]));
  date.setSeconds(parseInt(time[2]));

  let dateString = date.toTimeString().split(' ');
  dateString = dateString[0];

  console.log(dateString);

  return dateString

}

function l(...params)  {
  console.log(params);
}

let s = '12:45:54PM';
timeConversion(s);