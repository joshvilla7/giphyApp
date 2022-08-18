const searchInput = document.querySelector('#search-input');
const imgContainer = document.querySelector('#img-container');
// const submit = document.querySelector('#search');

//Make an async-await function and check if API works, include try catch to throw error 
//if searchInput.value can't be found
async function getGif() {
   try {
    let searchTerm = searchInput.value
    const response = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=v5ATjtht3sVSHXyOfo1Y5j6aM2isSx58', {params: {q: searchTerm}});

//Create an img element and append to imgContainer, also set img element src to data.images
    const newImg = document.createElement('img');
    newImg.src = `${response.data.data[Math.floor(Math.random() * 50)].images.original.url}`;
    imgContainer.append(newImg);
    
 
 }  catch(error) {
    alert('Please enter a different search item');
 }
 //Clear search input
    searchInput.value = '';
}

//When submit btn is clicked getGif and prevent refresh
addEventListener('submit', function(e) {
    e.preventDefault();

    getGif();
});

//Create remove btn to remove all images
const remove = document.querySelector('#remove');
remove.addEventListener('click', function() {
    imgContainer.innerHTML = '';
});

