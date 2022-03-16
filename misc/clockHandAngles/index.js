// For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs."
clockHandAngles(3600);

// For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.

// "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs."
clockHandAngles(119730);

function clockHandAngles(sec) {
  var h = 0.0;
  var m = 0.0;
  while (sec >= 3600) {
    if (h >= 24) {
      h = 0;
    }
    h++;
    sec -= 3600;
  }
  while (sec >= 60) {
    if (m >= 60) {
      m = 0;
    }
    m++;
    sec -= 60;
  }

  sd = sec * 6;
  md = m * 6 + sec / 10;
  hd = h * 30 + md / 12;

  return `Hour hand: ${hd} degrees, minute hand: ${md} degrees, second hand: ${sd} degrees.`;
}
