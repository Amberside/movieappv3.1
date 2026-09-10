/**
 * @file movie-list.js
 * @description This file holds the class definition of our MovieList class
 * cSpell: ignore Amberle Seidl
 * @author Amberle Seidl
 * @version 2.0.0
 * @since v2
 * getRow()
 */

/**
 * MovieList Class
 * This class has 2 properties and numerous methods
 * Look at the Readme.md file for a fill list of methods
 * @class MovieList
 * @property {string} rootId - This is the id of the HTML element where the list is to be displayed
 * @property {Array} movieList - The array of movies to be displayed (and stored)
 * @property {function} refresh - The method to remove all current movies from the HTML document and display the current movieList.
 */

class MovieList{
  constructor(rootId, movies){
    this.rootId = rootId; // The HTML id where the list is going
    this.movieList = movies  // The array of movies to be displayed
    this.refresh();
  }
  // Methods

  /**
   * Generate one row of the movieList for display
   * It will create the necessary HTML elements fro displaying a single movie to the UI
   * @function movieRow
   * @param {string} title - The title of the movie
   * @param {number} year - The year the movie was released
   */
  movieRow(title, year){
    // Get the parent element
    const rootElement = document.getElementById(this.rootId);
    // Create a new li
    const row = document.createElement('li');
    // Add the class of row to the li we just created
    row.classList.add('row');
    row.textContent = `${title} (${year})`;
    // Add the li to the list
    rootElement.appendChild(row);
  }

  /**
   * Generate all rows in our movieList (Read)
   * This method will call movieRow for each element in our movieList.
   * This will create all movies for our UI to display
   * @function genMovieList
   */ 
  genMovieList(){
    // Loop through the movieList
    for(let i = 0; this.movieList.length; i++){
      let movie = this.movieList[i];
      // call the movieRow method.
      this.movieRow(movie.title, movie.year);
    }
  }

  /**
   * @function genMovieSearchList
   */
   /**
    * Remove all list elements for the DOM
    * This allows a new list to be displayed
   * @function removeElements
   */
  removeElements(){
    // Getting the root ID
    const rootElement = document.getElementById(this.rootId);
    // Get all the elements with the class name of row.
    const childNodes = document.getElementsByClassName('row');
    // childNodes[0,1,2,3,4,5,6,7,8]
    // How many children do we have?
    const len = childNodes.length - 1;
    for(let i = len; i >=0; i--){
      // pull out the list child
      const child = childNodes[i];
      // Remove this child from the DOM
      rootElement.removeChild(child);
    }
  }
   /**
   * @function getRow
   */
   /**
    * Call the removeElements() method and 
    * Call genMovieList() to add in the new list
   * @function refresh
   */
  refresh(){
    this.removeElements();
    this.genMovieList();
  }
   /**
   * @function add
   */
   /**
   * @function update
   */
   /**
   * @function delete
   */
   /**
   * @function sortA2Z
   */
   /**
   * @function sortZ2A
   */
   /**
   * @function search
   */
}