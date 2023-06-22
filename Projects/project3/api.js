import fetch from'node-fetch';
import { readFile, writeFile }from './fileHandler.js';

async function fetchMovieData() {
  try {
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f84b6ef6');
    const data = await response.json();
    const movie = {title:data.Title,year: data.Year, director:data.Director, genre:data.Genre };
    return movie;
  } catch (err) {
    console.error('Error fetching movie data:', err);
    return null;
  }
}

async function fetchAndStoreMovieData() {
  try {
    const data = await fetchMovieData();
    if (data) {
      const movies = await readFile();
      movies.push(data);
      await writeFile(movies);
      console.log('Movie data fetched and stored successfully.');
    } else {
      console.error('Movie data not available.');
    }
  } catch (err) {
    console.error('Error fetching and storing movie data:', err);
  }
}

export { fetchMovieData, fetchAndStoreMovieData };
