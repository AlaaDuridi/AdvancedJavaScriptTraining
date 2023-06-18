const searchInput = document.getElementById('myInput');
const quoteList = document.getElementById('quoteList');
let arr;
fetch('https://dummyjson.com/quotes',{method:"GET"})
.then(async res => { 
  if(res.ok) {
    const data = await res.json();
    console.log(data.quotes) ;
     arr = data.quotes ; 

    displayAllQueotes(arr);
    //searchInput.addEventListener('input',()=>filterQuotes(arr))  ;

  }
  else {
    console.log(res.status) ;
  }
})
  .catch(error => {
    console.error('Error fetching quote data:', error);
    quoteList.innerHTML = 'Failed to fetch quote data. Please try again later.';
  })
.finally (()=> {
    console.log("Anyways") ; 
});

function displayAllQueotes(arr){
  document.querySelector('ul').innerHTML=''
  arr.forEach(element => {
    const markup = `<li>${element.quote}</li>`; 
    // console.log(markup) ;
    document.querySelector('ul').insertAdjacentHTML('beforeend',markup) ;
  });
}
function activateFilter(){
    filterQuotes(arr) ;
}
function filterQuotes(arr) {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredQuotes = arr.filter(element => element.quote.toLowerCase().includes(searchTerm));
  displayAllQueotes(filteredQuotes);
}
