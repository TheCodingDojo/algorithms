# Riot Walk Method

- For algorithm interviews.

## Repeat

Repeat the question / requirements to verify to yourself and to the interviewer that you understand them.

Use this time to clarify any ambiguity / confusion. Don’t assume, ask for clarification / desired behavior.

## Input

Write out some example inputs if none are provided.

## Output

Write out what the output should be for each input and get confirmation from the interviewer that this is what they are looking for. This also helps verify you understand the problem before you start going down the wrong path while writing a solution

## Test Cases

Related to input / output, but with some focus on edge cases, bad inputs, and very large inputs.

Do you need to worry about bad inputs? Ask and you may be told to assume the input will be valid or always structured a certain way.

"Are you going to want this code to be compiled (if compiled language) and ran with test cases?" Clarify this so you know if your code needs to work exactly or if the general idea of the solution and some pseudocode may be acceptable.

## Walk

Before you start writing, walk through your initial thought process (out loud) on how to approach the problem and comment the high-level idea you have. Check to see how the interviewer reacts to your thought process, they want to see how you think and communicate code concepts and approaches, but they also might reveal a facial expression that alerts you that your approach has a problem or is going down a completely wrong path.

Then walk through your solution with test cases when finished.

You can also ask if they want you to optimize for time or for space, but if it's a hard problem it could be better to just get any solution down then discuss optimization later.

## Code Solution

KEEP walking through your thought process out loud every step of the way and comment your code along the way for some concise documentation.

Start with some commented pseudo code to get the most important logic down before you get bogged down in small details if it's a complex problem, e.g., just writing out `iterate(list)` instead of writing out a full loop then write indented comments below for what you want to do in the loop until you have a basic outline down that you can fill in with the fine details.

If you pseudo-code the correct logic, they may be happy with that and not want you to spend the time to write out the actual code.

Asterisk any code you aren't sure works or if unsure of the syntax to make sure the interviewer knows you are aware of potential issues.

You can also double check with the interviewer on some syntax or what order the arguments go in if you forget, they will often help because they'd rather see you focus on the meat of the problem than get bogged down by small syntax details.

Leave a lot of space between lines to make it easy to edit on the whiteboard.

You can draw vertical lines for indentation to help you stay organized and remember to close brackets / braces / parenthesis.

Walk through how your solution runs with test cases.

Use a T diagram of the variables if necessary.

## Walk Through A List of Tools Internally

Ask yourself from a list of useful tools you’ve learned if each of them could help you solve the algorithm more easily or with better Big O complexity. You may not know, but having them fresh in your mind makes it much more likely that you will realize one of them could help as you work on the algo.

Could using _(Hash table / frequency table / seen table (dictionary), Stack, Queue, Heap, recursion, two pointers / index vars, divide and conquer, Linked List, etc.)_ be helpful?

## Optimization

Discuss the time / space complexity of your solution using [Big O notation](https://cooervo.github.io/Algorithms-DataStructures-BigONotation/big-O-notation.html) and any ideas you have to further optimize it for either time or space to see if they want you to optimize it more.

Often the interviewer will throw in some extra requirements after you solve it to see if you can adapt. Sometimes you can alter your solution to work for that, but sometimes trying to stick to your current approach too much is harder than re-thinking the approach for the new requirements.

## Calculating Big O Example

Calculate the Big O of each line then add up the terms (multiply for terms nested in a loop).
Don't forget that many built in methods require a loop, such as `.slice`, `.splice`. The way you calculate Big O Space Complexity is the same but focusing on usage of data structures that take up space based on the length of the input.

```js
/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 *
 * Terms: n = songDurations.length.
 * O(1) = 'constant', one operation, no loop, doesn't change if n changes.
 * O(2) = 'constant', 2 operations, ...
 * O(n) = 'linear', same # of operations as songDurations.length.
 *
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function amazonMusicRuntime(busDuration, songDurations) {
  // O(1)
  let songPair = [-1, -1];
  // O(1)
  const targetDuration = busDuration - 30;

  // O(n)
  for (let i = 0; i < songDurations.length; i++) {
    // O(1)
    const songA = songDurations[i];

    // This line isn't exactly O(n) because i + 1, but the worst case is n - 1
    // so we focus on the worst case which is close enough to call it O(n).
    for (let j = i + 1; j < songDurations.length; j++) {
      // O(1)
      const songB = songDurations[j];

      // O(1)
      if (songA + songB === targetDuration) {
        // O(1)
        if (songPair[0] > -1) {
          // O(4). max has to check all 4.
          const max = Math.max(
            songA,
            songB,
            songDurations[songPair[0]],
            songDurations[songPair[1]]
          );

          // O(1)
          if (max === songA || max === songB) {
            // O(1)
            songPair = [i, j];
          }
        } else {
          // O(1)
          songPair = [i, j];
        }
      }
    }
  }
  // O(1)
  return songPair;
}
```

- Add up the above terms, but ignore all the constants. All that's left is an `O(n)` loop nested inside an `O(n)` loop, so we multiply them together because something in a loop is multiplied by the number of iterations of the loop it's inside.

  - `O(n) * O(n)`
  - Simplify: `O(n * n)` -> `O(n^2)` quadratic.

---

```js
function amazonMusicRuntime2(busDuration, songDurations) {
  let songPair = [-1, -1];
  const targetPairDuration = busDuration - 30;
  const songTable = {};

  // O(n)
  for (let i = 0; i < songDurations.length; i++) {
    songTable[songDurations[i]] = i;
  }

  // O(n)
  for (let songAIdx = 0; songAIdx < songDurations.length; songAIdx++) {
    const songA = songDurations[songAIdx];
    const targetSongDuration = targetPairDuration - songA;

    // O(1). As a rule, dictionary key lookup is O(1).
    if (targetSongDuration in songTable) {
      const songBIdx = songTable[targetSongDuration];
      const songB = songDurations[songBIdx];

      if (songPair[0] === -1) {
        songPair = [songAIdx, songBIdx];
        continue;
      }

      const max = Math.max(
        songA,
        songB,
        songDurations[songPair[0]],
        songDurations[songPair[1]]
      );

      if (max === songA || max === songB) {
        songPair = [songAIdx, songBIdx];
      }
    }
  }
  return songPair;
}
```

- After ignoring constants, all we have are two `O(n)` loops, but they are not nested, so we add them together.
- `O(n) + O(n)`.
- Simplify: `O(2n)`.
- Drop the constant: `O(n)` linear.

---

```js
function amazonMusicRuntime3(busDuration, songDurations) {
  let songPair = [-1, -1];
  const targetPairDuration = busDuration - 30;
  const songTable = {};

  // O(n).
  for (let songAIdx = 0; songAIdx < songDurations.length; songAIdx++) {
    songTable[songDurations[songAIdx]] = songAIdx;

    const songA = songDurations[songAIdx];
    const targetSongDuration = targetPairDuration - songA;

    if (targetSongDuration in songTable) {
      const songBIdx = songTable[targetSongDuration];
      const songB = songDurations[songBIdx];

      if (songPair[0] === -1) {
        songPair = [songAIdx, songBIdx];
        continue;
      }

      const max = Math.max(
        songA,
        songB,
        songDurations[songPair[0]],
        songDurations[songPair[1]]
      );

      if (max === songA || max === songB) {
        songPair = [songAIdx, songBIdx];
      }
    }
  }
  return songPair;
}
```

- Calculating space complexity follows the same principles except focusing on any new data that is created in the function and checking seeing if it's constant size or if the size of the new data grows in relation to the size of the inputs. E.g., copying an array input of size `n` requires a new array be created of size `n` so it is `O(n)` size complexity. Or when filtering an array, the worst case is no items happen to be removed based on the condition that removes them, so it's `O(n)` space complexity.
