/**
 * @file app.js
 * @description This file contains the JavaScript for our movie app.
 * It contains the movieList instance, the event functions and UI code.
 * cspell: ignore Amberle Seidl tabcontent tablinks Shawshank Krull Starfighter
 * @author Amberle Seidl
 * @version 3.1.0
 * @since v3
 * getData()
 * onUpIndexChange()
 * confirm code in the deleteClick()
 * Bound checking for getData() and deleteClick()
 */

/**
 * @global
 * @description The initial list of movies for our app.
 */

let initialMovies = [
  {title: "The Shawshank Redemption", year: 1994 },
  {title: "The Godfather", year: 1972 },
  {title: "The GodFather: Part II", year: 1974 },
  {title: "The Dark Night", year: 2008 },
  {title: "Krull", year: 1983 },
  {title: "The Last Starfighter", year: 1981 }
];

/**
 * @memberof MovieList
 * @instance movieList
 * @param {string} - The id of the element we want to have our movieList appear in
 * @param {Array} initialMovies - The array of movies in our movieList
 * @global
 * @description The movieList instance to keep track of our list of movies in the app
 */

let movieList = new MovieList('list', initialMovies);

// Getting all the buttons from our application
const searchBtn = document.getElementById('searchBtn');
const sortA2ZBtn = document.getElementById('sortA2ZBtn');
const sortZ2ABtn = document.getElementById('sortZ2ABtn');
const addSubmit = document.getElementById('addSubmit');
const updateSubmit = document.getElementById('updateSubmit');
const deleteSubmit = document.getElementById('deleteSubmit');

// Add event handlers
searchBtn.addEventListener('click', searchClick);
sortA2ZBtn.addEventListener('click', a2zClick);
sortZ2ABtn.addEventListener('click', z2aClick);
addSubmit.addEventListener('click', addClick);
updateSubmit.addEventListener('click', updateClick);
deleteSubmit.addEventListener('click', deleteClick);

/** 
 * Search for a movie by partial title
 * @event Click#searchBtn
 * @function searchClick
 */
function searchClick(){
  // get the text from the DOM
  let formElements = document.getElementById("form-list-control").elements;
  // get the text from the input field
  let text = formElements["search-string"].value;
  // run the search method
  movieList.search(text);
}

/**
 * Sort the movieList in ascending order
 * @event Click#a2zButton
 * @function a2zClick
 */
function a2zClick(){
  movieList.sortA2Z();
}

/**
 * Sort the movieList in descending order
 * @event Click#z2aButton
 * @function z2aClick
 */
function z2aClick(){
  movieList.sortZ2A();
}

// UI Javascript
/**
 * JavaScript function for opening the forms
 * @function openForm
 * @param {object} evt - the event object.
 * @param {string} action - The name of the action being used.
 */
function openForm(evt, action){
  // declare variables
  let i, tabContent, tabLinks;
  // Get All elements that have the classname of tabcontent
  tabContent = document.getElementsByClassName('tabcontent');
  for( i =0; i < tabContent.length; i++){
    // set the display to none for all elements with this class name
    tabContent[i].style.display = 'none';
  }
  // get all elements that have the classname of tablinks
  tabLinks = document.getElementsByClassName('tablinks');
  for(i = 0; i < tabLinks.length; i++){
    // change the classlist to remove the active class
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }
  // Show the current tab and add the active class to the button that opened the tab
  document.getElementById(action).style.display = "block";
  evt.currentTarget.className += " active"
}
// End of openForm()

// Open a tab by default(
document.getElementById('defaultOpen').click();

/**
 * @function showMessage
 * @param {string} message - the message to display
 * @param {string} colour - the colour of the message box background
 * @param {string} text - the colour of the text in the message box
 */
function showMessage(message, colour, text){
  const msg = document.getElementById('msg');
  msg.style.display = "block";
  msg.textContent = message;
  msg.style.backgroundColor = colour;
  msg.style.color = text;
}

