/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.

Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.

return an array of the song indexes or [-1, -1] if no pair is found.

If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function amazonMusicRuntime(busDuration, songDurations) {}

module.exports = { amazonMusicRuntime };

/*****************************************************************************/

/**
 * Space optimized solution.
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(n^2) quadratic.
 * - Space: O(1) constant.
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function amazonMusicRuntime(busDuration, songDurations) {
  let songPair = [-1, -1];
  const targetDuration = busDuration - 30;

  for (let i = 0; i < songDurations.length; i++) {
    const songA = songDurations[i];

    for (let j = i + 1; j < songDurations.length; j++) {
      const songB = songDurations[j];

      if (songA + songB === targetDuration) {
        // Existing found pair. Only update if this pair has a longer song.
        if (songPair[0] > -1) {
          const max = Math.max(
            songA,
            songB,
            songDurations[songPair[0]],
            songDurations[songPair[1]]
          );

          if (max === songA || max === songB) {
            songPair = [i, j];
          }
        } else {
          songPair = [i, j];
        }
      }
    }
  }
  return songPair;
}

/**
 * Time optimized solution.
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(2n) -> O(n) linear.
 * - Space: O(n) linear.
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function amazonMusicRuntime2(busDuration, songDurations) {
  let songPair = [-1, -1];
  const targetPairDuration = busDuration - 30;
  const songTable = {};

  for (let i = 0; i < songDurations.length; i++) {
    // In the case of dupe durations this would overwrite. If that was a
    // problem, we could store an array of indexes at this key.
    songTable[songDurations[i]] = i;
  }

  for (let i = 0; i < songDurations.length; i++) {
    const songA = songDurations[i];
    const targetSongDuration = targetPairDuration - songA;

    if (targetSongDuration in songTable) {
      const songBIdx = songTable[targetSongDuration];
      const songB = songDurations[songBIdx];

      // Same logic as other solution written slightly different.
      // No existing song pair.
      if (songPair[0] < 0) {
        songPair = [i, songBIdx];
        continue;
      }

      // Pair exists, only update if new pair has longer song.
      const max = Math.max(
        songA,
        songB,
        songDurations[songPair[0]],
        songDurations[songPair[1]]
      );

      if (max === songA || max === songB) {
        songPair = [i, songBIdx];
      }
    }
  }
  return songPair;
}
