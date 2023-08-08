// https://login.codingdojo.com/m/667/15334/111786

function distanceBetweenTwoPoints(pointA, pointB) {
  const firstDistance = Math.abs(pointA[0] - pointB[0]);
  const secondDistance = Math.abs(pointA[1] - pointB[1]);
  return firstDistance + secondDistance;
}

/**
 *
 */
function findOptimalTruckLocation(customerLocations = []) {
  let shortestAverageDistance = 0;
  let locationWithShortestAverageDistance = null;

  // For each point
  for (let i = 0; i < customerLocations.length; i++) {
    let totalDistance = 0;

    // Find it's distance to every other point
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      totalDistance += distanceBetweenTwoPoints(
        customerLocations[i],
        customerLocations[j]
      );
    }

    // To get an average distance
    let averageDistance = totalDistance / (customerLocations.length - 1);

    if (averageDistance < shortestAverageDistance) {
      shortestAverageDistance = averageDistance;
      locationWithShortestAverageDistance = customerLocations[i];
    }

    console.log(averageDistance);
  }
}
