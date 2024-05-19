const jokeContainer  = document.querySelector('#joke')
const btn = document.querySelector('#btn')
const url = 'https://api.breakingbadquotes.xyz/v1/quotes'
const img = document.querySelector('img')

// let getJoke = () =>{
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         if (data.length > 0){
//             const quote = data[0];
//             if (quote.author === 'Walter White'){
//                 img.src = "./Images/walter_white.webp"
//             } else if (quote.author === 'Jesse Pinkman'){
//                 img.src = "./Images/jesse.webp"
//             } else if (quote.author === 'Mike Ehrmantraut'){
//                 img.src = './Images/mike.webp'
//             } else if (quote.author === "Hank Schrader"){
//                 img.src = './Images/hank.webp'
//             }
//             jokeContainer.innerHTML = `${quote.quote} <br> <strong>${quote.author}</strong>`
//         } else {
//             jokeContainer.innerText = "No quotes found."
//         }
//     }
//     )}

let getJoke = () =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0){
            const quote = data[0];
            let name = quote.author.split(' ')
            img.src = `./Images/${name[0]}.webp`
            jokeContainer.innerHTML = `${quote.quote} <br> <strong>${quote.author}</strong>`
        } else {
            jokeContainer.innerText = "No quotes found."
        }
    }
    )}

btn.addEventListener('click', ()=>{
    getJoke()
})
getJoke()