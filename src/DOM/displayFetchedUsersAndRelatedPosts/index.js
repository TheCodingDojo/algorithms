/* 
Using this API https://jsonplaceholder.typicode.com/
and ONLY vanilla js

Fetch the users with the following ids: 2, 5, 7
Fetch each of the above users posts

Display the fetched users in the div#users-container with each user in a column
with their posts in the column under the user info.

You can use use the below HTML & CSS for display purposes

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .row {
    display: flex;
    margin: 10px;
  }

  .user-card {
    border-radius: 5px;
    padding: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    margin: 10px;
  }

  .user-posts-container {
    border-top: 1px solid black;
    padding-top: 1.5rem;
  }

  .post {
    padding: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 5px;
    margin-bottom: 0.75rem;
  }

  .mb-sm {
    margin-bottom: 5px;
  }
</style>

<div id="users-container">
  <div class="row">
    
    <div class="user-card">
      <h2 class="mb-sm">user.name</h2>
      <p>user address on one line</p>
      <div class="user-posts-container">
        <h3 class="mb-sm">Posts</h3>
        <div class="post">
          <h4>post.title</h4>
          <p>post.body</p>
        </div>
      </div>
    </div>

    <div class="user-card">
      <h2 class="mb-sm">user.name</h2>
      <p>user address on one line</p>
      <div class="user-posts-container">
        <h3 class="mb-sm">Posts</h3>
        <div class="post">
          <h4>post.title</h4>
          <p>post.body</p>
        </div>
      </div>
    </div>

  </div>
</div>
*/

/*****************************************************************************/

/* 
Plan of attack:

A.
  1. fetch users
  2. fetch posts for each user
  3. Add users posts into user object
  2. render data
    - test in steps:
      - render 1 user without posts
      - render multiple users without posts
      - render multiple users with their posts

B.
  1. render mock data to test that you can successfully render
    - Don't spend too long creating mock data for testing, the interviewer
      might get impatient.
    - test in steps:
      - render 1 user without posts
      - render multiple users without posts
      - render multiple users with their posts
  2. fetch the real data to render it

Fetching the data and dealing with the asynchronous code is likely the hardest
part, so it can make sense to do that last and make sure you can even
successfully render fake data, because if you can't figure out how to render
fake data, fetching the data isn't that useful.

Starting with B first means you may be more likely to follow good separation
of concerns unless you already had the right idea about that from the start.

The code that renders should be separate from code that fetches (decoupled).
Once you know your rendering functions work and are standalone functions, it's
easier to avoid getting tangled up when you start working on the fetching logic,
because you can focus on that alone knowing rendering is as easy as passing the
fetched data to your render functions.
*/

/*
Fetching data & asynchronous considerations

Typically when trying to fetch multiple entities with a list of their ids, you
should look for an endpoint that accepts multiple ids and returns each entity
to minimize the number of requests that need to be made and to fetch only the
data you want.

In this case, with the test API, there is no endpoint that accepts multiple
user ids, so we have two options
  1. Fetch all users then filter them down to just the ones we want
    - pro: we only have to handle one request to get all users, which is easier
      than having to handle multiple asynchronous requests.
    - con: fetch a lot of extra data we don't need
    - con: if the request fails we don't get any data
  2. Make a request to fetch each user we want
    - pro: we don't transfer extra data that's unneeded
    - pro: we can use Promise.allSettled which means if 1 request fails we
        can still make use of the other successful requests.
    - con: we make multiple requests
      - handling multiple requests that are each asynchronous is more
        challenging
      - the API has to receive more requests, during high traffic times this
        could be worse
      - more requests could be a limiting factor if the API limits the # of
        requests you can make
*/

const apiBaseUrl = "https://jsonplaceholder.typicode.com";

const mockUsers = [
  {
    id: 1,
    name: "first user",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    posts: [
      {
        userId: 1,
        id: 1,
        title: "first post",
        body: "first body",
      },
      {
        userId: 1,
        id: 2,
        title: "second post",
        body: "second body",
      },
    ],
  },
  {
    id: 2,
    name: "second user",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
    },
    posts: [
      {
        userId: 2,
        id: 1,
        title: "first post",
        body: "first body",
      },
      {
        userId: 2,
        id: 2,
        title: "second post",
        body: "second body",
      },
    ],
  },
  {
    id: 3,
    name: "user with no posts",
    address: {
      street: "street",
      suite: "suite",
      city: "city",
      zipcode: "92998",
    },
  },
];

const formatAddressOneLine = ({ suite, street, city, zipcode }) =>
  `${suite} ${street}, ${city} ${zipcode}`;

function makePostNode(post) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  const postHeading = document.createElement("h4");
  postHeading.innerText = post.title;

  const postParagraph = document.createElement("p");
  postParagraph.innerText = post.body;

  postDiv.appendChild(postHeading);
  postDiv.appendChild(postParagraph);

  return postDiv;
}

function makeUserNode(user) {
  const userDiv = document.createElement("div");
  userDiv.id = `user-id-${user.id}`;
  userDiv.classList.add("user-card");

  const nameHeading = document.createElement("h2");
  nameHeading.classList.add("mb-sm");
  nameHeading.innerText = user.name;

  const addressParagraph = document.createElement("p");
  addressParagraph.innerText = formatAddressOneLine(user.address);

  userDiv.appendChild(nameHeading);
  userDiv.appendChild(addressParagraph);

  if (user?.posts?.length > 0) {
    const postsContainer = document.createElement("div");
    postsContainer.classList.add("user-posts-container");

    for (const post of user.posts) {
      const postNode = makePostNode(post);
      postsContainer.appendChild(postNode);
    }

    userDiv.appendChild(postsContainer);
  }

  return userDiv;
}

/**
 * Adds the users to the DOM.
 * @param {object[]} users
 * @param {HTMLElement} parentNode The node to append the row of users into.
 */
function renderUsers(users = [], parentNode) {
  const usersRow = document.createElement("div");
  usersRow.classList.add("row");

  for (const user of users) {
    const userNode = makeUserNode(user);
    usersRow.appendChild(userNode);
  }

  // replace children so we can re-render with updated users that will replace
  // the old user data.
  parentNode.replaceChildren(usersRow);
}

/* Test render with mock data */
// renderUsers(mockUsers, document.getElementById("users-container"));

async function fetchUser(userId) {
  const url = `${apiBaseUrl}/users/${userId}`;

  try {
    const res = await fetch(url);
    const user = await res.json();
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function fetchUsers(userIds = []) {
  const userFetchPromises = userIds.map((id) => fetchUser(id));
  return await Promise.allSettled(userFetchPromises);
}

// Endpoint found in the docs click on 'guide'
// https://jsonplaceholder.typicode.com/guide/
async function fetchPostsByUser(userId) {
  const url = `${apiBaseUrl}/users/${userId}/posts`;

  try {
    const res = await fetch(url);
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Gets all posts for each user so that when we loop over users later we don't
 * have to delay each iteration by awaiting inside a loop to get their posts.
 */
async function fetchPostsForEachUser(users = []) {
  const userPostsPromises = users.map((u) => fetchPostsByUser(u.id));
  // These are in the same order as the users array so we can match then
  // back to their user easily by index instead of having to find the user
  // in the array by matching id or use a hash table.
  const settledUserPosts = await Promise.allSettled(userPostsPromises);

  // Replace users with a new user object that has the posts added to it.
  const usersWithPosts = users.map((user, i) => {
    const relatedSettledPosts = settledUserPosts[i];

    if (relatedSettledPosts.status === "rejected") {
      // Nothing to add.
      return user;
    }

    // We can mutate the user by reference or make a copy like so to avoid
    // mutation. If objects are frequently being mutated it can become
    // confusing and hard to track down bugs.
    return {
      // copy all user kvps
      ...user,
      // add another kvp
      posts: relatedSettledPosts.value,
    };
  });

  return usersWithPosts;
}

// Purpose of this function: Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
async function main() {
  const settledUsers = await fetchUsers([2, 5, 7]);
  console.log("settledUsers:", settledUsers);

  // Remove any rejected promises and extract the retrieved users from the
  // settled promise structure that comes from Promise.allSettled.
  const users = settledUsers
    .filter((settledPromise) => settledPromise.status === "fulfilled")
    .map((fulfilledPromise) => fulfilledPromise.value);

  const usersContainer = document.getElementById("users-container");

  /* 
  The posts haven't been fetched yet, but we can render the users now so at
  least the user data is displayed while we wait for the posts.

  Depending on how long it takes, it could be preferable to render only after
  everything is fetched, but often the viewer of a website will leave if data
  doesn't appear quickly so often you want to get some data on the screen asap
  while you wait for other data.

  https://smartbear.com/blog/5-10-15-seconds-how-long-will-you-wait-for-a-web-p/#:~:text=And%20the%20most%20recent%20study,a%20retail%20or%20travel%20site.
  */
  renderUsers(users, usersContainer);

  const usersWithPosts = await fetchPostsForEachUser(users);
  console.log("usersWithPosts:", usersWithPosts);
  renderUsers(usersWithPosts, usersContainer);

  // To simulate a long delay, put the previous render in a timeout.
  // setTimeout(() => {
  //   renderUsers(usersWithPosts, usersContainer);
  // }, 1500);
}

main();

/* 
Closing thoughts:

await Promise.allSettled is as fast as the slowest promise, since it awaits all
to finish. However, it is way better than a waterfall where each promise is
waited on before the next request even starts, so we've already avoided that
which happens if you await inside of a loop. It doesn't happen if you use .then
inside of a loop though.

Alternatively, it's possible to render each user in the order that the requests
fulfill and to then render each user's posts in the order that those fulfill so
that the fastest requests get on the page while the others are loading.

It would be easier to do this with .then instead of await but it's easy to
get it tangled up and since this is a vanilla js only challenge, you aren't
typically expected to do everything as efficiently as react, as long as you
don't create a big problem like the above described waterfall request pattern.

The downside of rendering everything in the order that each request finishes is
that it makes the page a bit chaotic, with elements rendering in random order
and sizes of elements changing as items are appended which 
*/
