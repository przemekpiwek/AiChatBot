const jerrySrc = "/assets/jerry.jpg";
const elaineSrc = "/assets/elaine.jpg";
const georgeSrc = "/assets/george.png";

export const users = {
  elaine: {
    username: "Elaine",
    avatar: elaineSrc,
  },
  george: {
    username: "George",
    avatar: georgeSrc,
  },
  jerry: {
    username: "Jerry",
    avatar: jerrySrc,
  },
};

export default {
  currentUser: users.elaine,
  conversation: {
    participants: [users.elaine, users.george, users.jerry],
    messages: [
      {
        id: "a",
        user: users.elaine,
        body: "How about you bring me back something?",
        timestamp: "11:38",
      },
      {
        id: "b",
        user: users.george,
        body: "Sure, alright",
        timestamp: "11:39",
      },
      {
        id: "c",
        user: users.george,
        body: "What do you want?",
        timestamp: "11:39",
      },
      {
        id: "d",
        user: users.elaine,
        body: "Hm... get me a big salad 😋",
        timestamp: "11:42",
      },
      {
        id: "e",
        user: users.george,
        body: "What big salad? I'm going to the coffee shop.",
        timestamp: "11:44",
      },
      {
        id: "f",
        user: users.elaine,
        body: "They have big salads",
        timestamp: "11:45",
      },
      {
        id: "g",
        user: users.george,
        body: "🤔 I've never seen a big salad",
        timestamp: "11:45",
      },
      {
        id: "h",
        user: users.elaine,
        body: "They have a big salad",
        timestamp: "11:45",
      },
      {
        id: "i",
        user: users.george,
        body: "Is that what I ask for? The _big_ salad? 🤨",
        timestamp: "11:46",
      },
      {
        id: "j",
        user: users.elaine,
        body: "you know what nevermind",
        timestamp: "11:50",
      },
      {
        id: "k",
        user: users.george,
        body: "No hey I'll get it! What's in the _big_ salad?",
        timestamp: "11:51",
      },
      {
        id: "l",
        user: users.jerry,
        body: "Big lettuce",
        timestamp: "11:52",
      },
      {
        id: "m",
        user: users.jerry,
        body: "Big carrots",
        timestamp: "11:52",
      },
      {
        id: "n",
        user: users.jerry,
        body: "Tomatoes like volleyballs 🍅",
        timestamp: "11:52",
      },
    ],
  },
};
