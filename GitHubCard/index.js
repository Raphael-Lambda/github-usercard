/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/RaphaelHebert")
  
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
  .then(item => document.querySelector(".cards").appendChild(gitCardCreator(item.data)))
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(user => {
  axios
  .get(`https://api.github.com/users/${user}`)
  .then(item => document.querySelector(".cards").appendChild(gitCardCreator(item.data)))
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitCardCreator({ avatar_url,  name,  login,  loc, url, followers, following}){
  // create the elements
  const card = document.createElement("div");
  const pict = document.createElement("img");
  const info = document.createElement("div");
  const title = document.createElement("h3");
  const text = document.createElement("p");
  const loc1 = document.createElement("p");
  const profile = document.createElement("p");
  const fing = document.createElement("p");
  const fers = document.createElement("p");
  const bio = document.createElement("p");
  const page = document.createElement("a");
  // organize the elts
  card.appendChild(pict);
  card.appendChild(info);
  info.appendChild(title);
  info.appendChild(text);
  info.appendChild(loc1);
  info.appendChild(profile);
  profile.appendChild(page);
  info.appendChild(fers);
  info.appendChild(fing);
  info.appendChild(bio);
  // add style
  card.classList.add("card");
  info.classList.add("card-info");
  title.classList.add("name");
  text.classList.add("username");
  // add content
  pict.src = avatar_url
  pict.alt = "user's profile"
  title.textContent = name
  loc1.textContent = loc
  text.textContent = login
  fers.textContent = followers
  fing.textContent = following

  // return the elt
  return card
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
