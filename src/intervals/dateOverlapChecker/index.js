// C# Activities exam black belt feature is a date conflict check

/* 
  In this example, a meetup is an object that represents
  an event, like a group hike, which has a start and
  end datetime.

  Make a function that takes an array of meetups that
  a user is signed up for and a new meetup that the user
  is trying to sign up for. If the new meetup time doesn't
  conflict with any existing meetups, return true and add it
  to the array of joined meetups, otherwise return false and
  don't add it to the array.

  We will use integers with few digits to represent
  a datetime to make these examples easier to read and
  make comparisons simple, rather than using milliseconds
  since 1970/01/01 (epoch) to represent a datetime because 
  that is difficult to read.
*/

const joinedMeetups = [
  {
    description: "Look at your phone with strangers",
    start: 10,
    end: 15,
  },
  {
    description: "Point fans at hurricane together to blow it away",
    start: 17,
    end: 19,
  },
  {
    description: "Petting doggos",
    start: 30,
    end: 100,
  },
];

// example1 is false, overlaps with "Petting doggos"
const example1 = joinMeetup(
  {
    description: "Debug code",
    start: 25,
    end: 300,
  },
  joinedMeetups
);

// exampl2 is true, does not overlap with any
const example2 = joinMeetup(
  {
    description: "Help fellow coders",
    start: 5,
    end: 9,
  },
  joinedMeetups
);

// example3 is false, overlaps with "Petting doggos"
const example3 = joinMeetup(
  {
    description: "Say yikes 10000 times with strangers",
    start: 50,
    end: 80,
  },
  joinedMeetups
);

// example4 is true, end time matches the start time of
// "Petting doggos", but doesn't technically overlap
const example4 = joinMeetup(
  {
    description: "Throw rocks at bigfoot",
    start: 20,
    end: 30,
  },
  joinedMeetups
);

// example5 is false, conflicts with "Petting doggos"
const example5 = joinMeetup(
  {
    description: "Do nothing with nobody all alone by yourself",
    start: 18,
    end: 29,
  },
  joinedMeetups
);

function joinMeetup(newMeet, joinedMeetups) {
  for (const joinedMeetup of joinedMeetups) {
    const newMeetStartsAfter = newMeet.start >= joinedMeetup.end;

    const newMeetEndsBefore = newMeet.end <= joinedMeetup.start;

    // no conflict
    // if written so that you check the else
    // condition first, no continue is needed
    // but it's a little easier to read this way
    if (newMeetStartsAfter || newMeetEndsBefore) {
      continue;
    } else {
      return false;
    }
  }
  // made it through loop with no conflicts
  joinedMeetups.push(newMeet);
  return true;
}

module.exports = { joinMeetup };
