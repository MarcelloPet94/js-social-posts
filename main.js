/*
Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.


*/
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
                "name": "Phil Mangione",
                "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": {
                "year":'2021',
                "month":'06',
                "day":'25'
        },
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": {
                "year":'2021',
                "month":'09',
                "day":'03'
        },
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": {
                "year":'2021',
                "month":'05',
                "day":'15'
        },
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": {
                "year":'2021',
                "month":'04',
                "day":'03'
        },
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": {
                "year":'2021',
                "month":'05',
                "day":'03'
        },
    }
];

// elementi DOM
const container = document.getElementById("container");

// faccio uscire i dati nella pagina
for (let i = 0; i < posts.length; i++)
{
    creaPost(i);
} 

function creaPost(n)
{

    let date2 = posts[n].created.month + '-' + posts[n].created.day + '-' + posts[n].created.year;
    container.innerHTML +=
    `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${posts[n].author.image}" alt="">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts[n].author.name}</div>
                    <div class="post-meta__time">${date2}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${posts[n].content}</div>
        <div class="post__image">
            <img src="${posts[n].media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#!" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${posts[n].id}" class="js-likes-counter">${posts[n].likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `   
}

let likeButton = document.getElementsByClassName('like-button');
let jsLikesCounter = document.getElementsByClassName('js-likes-counter');
let dataLike = [];

for (let c = 0; c < posts.length; c++)
{
    likeButton[c].addEventListener('click' , function()
    {

        let idLike = posts[c].id;
        let like = posts[c].likes;

        jsLikesCounter[c].innerHTML = like + 1;  
        dataLike.push(idLike);
        console.log(dataLike)      
        likeButton[c].classList.add('like-button--liked');
    });
}



/*
const container = document.getElementById("container");

for (let i = 0; i < 3; i++)
{
	getDiv(i);
}

function getDiv(n)
{
  var para = document.createElement("div");
  para.setAttribute("class" , "creata");
  container.appendChild(para);

  var interno = document.createElement("div");
  interno.setAttribute("class" , "interna");
  interno.innerHTML = "div numero: " + n;
  para.appendChild(interno);
}
*/