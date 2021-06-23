import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let myData = axios.get('https://api.github.com/users/rick-blaque')
myData.then((futureData) => {
   let newData = futureData.data
   card(newData)
})


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

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

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
 function card(obj) {
    let div = document.createElement('div')
     div.classList.add('card')

     let img = document.createElement('img')
    // div.setAttribute()


    let divInfo = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let a = document.createElement('a')
    let p4 = document.createElement('p')
    let p5 = document.createElement('p')
    let p6 = document.createElement('p')
   

    console.log(cards);
    cards.appendChild(div)
    div.append(img)
    div.append(divInfo)
    divInfo.append(h3)
    divInfo.append(p)
    p.innerText = 'talk'
    divInfo.append(p2)
    divInfo.append(p3)
    p3.append(a)
    divInfo.append(p4)
    divInfo.append(p5)
    divInfo.append(p6)

    divInfo.className = 'card-info'
    h3.className = 'name'
    p.className = 'username'

    img.src = obj.avatar_url
    console.log(obj.avatar_url)
    img.style.width = '20em'
    h3.textContent = obj.login
    p.innerText = obj.login
    p2.textContent = `Location ${obj.location}`
    p3.textContent = 'Profile'
    a.href = obj.url
    a.innerHTML = obj.url
    p4.innerHTML = `Followers: ${obj.followers}`
    p5.innerHTML = `Following: ${obj.following}`
    p6.innerHTML = `Bio: ${obj.bio}`


    return div



 }
 let cards = document.querySelector('.cards')

 
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
