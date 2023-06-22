import readline from 'readline';
import { displayCatalog, addMovie, updateMovie, deleteMovie } from'./movieManager.js';
import { fetchAndStoreMovieData }  from './api.js';

// import prompt from 'prompt-sync' ;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const  inputt = prompt() ; 
function displayMenu() {
    console.log('Movie Catalog CLI Application');
    console.log('1. Display Movie Catalog');
    console.log('2. Add New Movie');
    console.log('3. Update Movie Details');
    console.log('4. Delete Movie');
    console.log('5. Fetch Movie Data from API');
    console.log('6. Search Movies');
    console.log('7. Filter Movies by Genre');
    console.log('8. Filter Movies by Release Year');
    console.log('9. Exit');
    
}

function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}


async function handleMenuChoice(choice) {
  switch (choice) {
    case '1':
      await displayCatalog();
      break;
    case '2':
      const title = await promptUser('Enter movie title: ');
      const director = await promptUser('Enter movie director: ');
      const releaseYear = await promptUser('Enter release year: ');
      const genre = await promptUser('Enter movie genre: ');
      const movie = { title, director, releaseYear, genre };
      await addMovie(movie);
      break;
    case '3':
      const index = parseInt(await promptUser('Enter movie index to update: '));
      const updatedTitle = await promptUser('Enter updated movie title: ');
      const updatedDirector = await promptUser('Enter updated movie director: ');
      const updatedReleaseYear = await promptUser('Enter updated release year: ');
      const updatedGenre = await promptUser('Enter updated movie genre: ');
      const updatedMovie = { title: updatedTitle, director: updatedDirector, releaseYear: updatedReleaseYear, genre: updatedGenre };
      await updateMovie(index - 1, updatedMovie);
      break;
    case '4':
      const deleteIndex = parseInt(await promptUser('Enter movie index to delete: '));
      await deleteMovie(deleteIndex - 1);
      break;
    case '5':
      await fetchAndStoreMovieData();
      await displayCatalog();
      break;
      case '7':
        const searchTerm = await promptUser('Enter search term: ');
        const filteredMovies = await searchMovies(searchTerm);
        await displayCatalog(filteredMovies);
        break;
      case '8':
        const filterByGenre = await promptUser('Enter genre to filter by: ');
        const filteredByGenre = movies.filter((movie) => movie.genre.toLowerCase() === filterByGenre.toLowerCase());
        await displayCatalog(filteredByGenre);
        break;
      case '9':
        const filterByYear = parseInt(await promptUser('Enter release year to filter by: '));
        const filteredByYear = movies.filter((movie) => movie.releaseYear === filterByYear);
        await displayCatalog(filteredByYear);
        break;
      
  }
  console.log('\n');
  displayMenu();
  const newChoice = await promptUser('Enter your choice: ');
  await handleMenuChoice(newChoice);
}

function startApp() {
  displayMenu();
  promptUser('Enter your choice: ')
    .then(handleMenuChoice)
    .catch((err) => console.error('Error occurred:', err))
    .finally(() => {
      rl.close();
      console.log('Exiting Movie Catalog CLI Application.');
    });
}

startApp();
