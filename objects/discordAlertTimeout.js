/* 
This algo is from a discord bot that sends a message notification to a channel
that only staff can see when a member joins a voice channel so the staff can
quickly respond to the voice channel help request without having to stare at
the voice channels to see if someone has joined.

Some people accidentally joined and left the same channel too rapidly causing
excessive notifications, so a 1 minute timeout was implemented, however, for
ease of testing a 5 second timeout will be used.
*/

const { strictEqual } = require("assert");

/**
 * @typedef {Object} Member
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {Object} VoiceChannel
 * @property {number} id
 * @property {string} name
 */

const members = ["Tony", "Neil", "Json"].map((name, i) => ({ id: i, name }));
const voiceChannels = ["TA help", "Instructor Help", "Code Review"].map(
  (name, i) => ({ id: i, name })
);

console.log(members);
console.log(voiceChannels);

const alertMsg = (member, channel, timedOut = false) =>
  timedOut
    ? `Member ${member.name} is on timeout for VoiceChannel ${channel.name}.`
    : `Member ${member.name} joined VoiceChannel ${channel.name}`;

/**
 * @type {Map<Member.id, Set<Channel.id>>}
 */
const visitedLog = new Map();

/**
 * Returns a notification message that the member joined the voice channel.
 * @param {Member} member
 * @param {VoiceChannel} channel
 * @returns {string} One of two strings should be returned:
 *    - "Member {name} joined VoiceChannel {name}."
 *    - Alert timed out for the specific channel & member b/c they joined too
 *      recently (within 5 seconds):
 *      "Member {name} is on timeout for VoiceChannel {name}".
 */
function notifyOnChannelJoin(member, channel) {
  let timeout = false;

  if (!visitedLog.has(member.id)) {
    visitedLog.set(member.id, new Set());
  }

  const visitedChannels = visitedLog.get(member.id);

  if (visitedChannels.has(channel.id)) {
    timeout = true;
  }

  visitedChannels.add(channel.id);

  setTimeout(() => {
    visitedChannels.delete(channel.id);
    // Not needed but this prevents the Map from growing with inactive members.

    !visitedChannels.size && visitedLog.delete(member.id);
  }, 5000);

  return alertMsg(member, channel, timeout);
}

/*****************************************************************************/

[
  {
    arguments: [members[0], voiceChannels[0]],
    expected() {
      return alertMsg(...this.arguments);
    },
  },
  {
    arguments: [members[0], voiceChannels[1]],
    expected() {
      return alertMsg(...this.arguments);
    },
  },
  {
    arguments: [members[1], voiceChannels[0]],
    expected() {
      return alertMsg(...this.arguments);
    },
  },
  {
    arguments: [members[0], voiceChannels[1]],
    expected() {
      return alertMsg(...this.arguments, true);
    },
  },
  {
    arguments: [members[2], voiceChannels[1]],
    expected() {
      return alertMsg(...this.arguments);
    },
  },
  {
    arguments: [members[1], voiceChannels[0]],
    expected() {
      return alertMsg(...this.arguments, true);
    },
  },
].forEach((test, i) =>
  setTimeout(() => {
    strictEqual(
      notifyOnChannelJoin(...test.arguments),
      test.expected(),
      `Case ${i} failed with args: ${JSON.stringify(test.arguments)}`
    );
  }, 1500)
);
