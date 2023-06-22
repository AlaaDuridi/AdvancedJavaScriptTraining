import { readFile, writeFile } from './fileHandler.js';

async function displayCatalog() {
  try {
    const movies = await readFile();
    console.log('Movie Catalog:');
    movies.forEach((movie, index) => {
      console.log(`\n#############  ${index+1}  #############
      \nTitle: ${movie.title},\nYear: ${movie.releaseYear},\nDirector:  ${movie.director},\nGenre: ${movie.genre}`);
    });
  } catch (err) {
    console.error('Error reading movie catalog:', err);
  }
}

async function addMovie(movie) {
  try {
    const movies = await readFile();
    movies.push(movie);
    await writeFile(movies);
    console.log('Movie added successfully.');
  } catch (err) {
    console.error('Error adding movie:', err);
  }
}

async function updateMovie(index, updatedMovie) {
  try {
    const movies = await readFile();
    if (index >= 0 && index < movies.length) {
      movies[index] = updatedMovie;
      await writeFile(movies);
      console.log('Movie updated successfully.');
    } else {
      console.error('Invalid movie index.');
    }
  } catch (err) {
    console.error('Error updating movie:', err);
  }
}

async function deleteMovie(index) {
  try {
    const movies = await readFile();
    if (index >= 0 && index < movies.length) {
      movies.splice(index, 1);
      await writeFile(movies);
      console.log('Movie deleted successfully.');
    } else {
      console.error('Invalid movie index.');
    }
  } catch (err) {
    console.error('Error deleting movie:', err);
  }
}
async function searchMovies(searchTerm) {
    try {
      const movies = await readFile();
      const filteredMovies = movies.filter((movie) => {
        const { title, director, genre } = movie;
        const normalizedSearchTerm = searchTerm.toLowerCase();
        return (
          title.toLowerCase().includes(normalizedSearchTerm) ||
          director.toLowerCase().includes(normalizedSearchTerm) ||
          genre.toLowerCase().includes(normalizedSearchTerm)
        );
      });
      return filteredMovies;
    } catch (err) {
      console.error('Error searching movies:', err);
      return [];
    }
  }
  
  

export { displayCatalog, addMovie, updateMovie, deleteMovie,searchMovies};

// displayCatalog() ;