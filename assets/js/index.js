
//search results for music
function displayResults(){
    const searchValue = document.getElementById('search').value;

const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchValue}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ec95bfc04mshe7d551cc8a1dbfbp1f9ca8jsn529e2325804e',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

    fetch(url,options)
    .then(res => res.json())
    .then(data => {
             console.log("Data:", data);
        //        const results = JSON.parse(JSON.stringify(data));
        let resultsList = document.querySelector('.container');
        resultsList.innerHTML = '';

        data.data.map((dataItems) => {
             resultsList.innerHTML += `<aside>`;
             resultsList.innerHTML += `<div><img src=${dataItems.artist.picture_big}> <h3>${dataItems.title}</h3> <p>${dataItems.artist.name}<p></div></aside>`;
        })
        
        
    })
}

//darkmode toggle
const darkMode = document.getElementById('dark');
const body =  document.querySelector('body');

darkMode.addEventListener('click',() =>{
    body.classList.toggle('darkMode');
})