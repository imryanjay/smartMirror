var day = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
var month = new Array('january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'december');

function clock() {
  var d = new Date();
  var nday = d.getDay(),
      nmonth = d.getMonth(),
      ndate = d.getDate();
      nyear = d.getFullYear();
  var nhour = d.getHours(),
      nmin = d.getMinutes(),
      ap;
  // Setting am or pm
  if( nhour == 0 ) {
    ap = ' am';
    nhour = 12;
  }
  else if (nhour < 12) {
    ap = ' am';
  }
  else if (nhour == 12) {
    ap = ' pm';
  }
  else if (nhour > 12) {
    ap = ' pm';
    nhour -= 12;
  }
  // Adding 0 to hour
  if(nhour <= 9) nhour = '0' + nhour;
  // Adding 0 to minutes
  if(nmin <= 9) nmin = '0' + nmin;
  // Adding 0 to date
  if(ndate <= 9) ndate = '0' + ndate;
  // Writing function
  $('.dateTime').html('<div class="time">'+nhour+':'+nmin+'</div><div class="date">'+day[nday]+'<br> '+month[nmonth]+' '+ndate+', '+nyear+'</div>');
}

window.onload = function () {
  clock();
  setInterval(clock, 1000);
}
