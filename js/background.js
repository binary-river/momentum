
// const bgImage = document.createElement("img");
// bgImage.src = "img/" + Math.floor(Math.random()*4) + ".png";

const bgImageUrl = `img/${Math.floor(Math.random()*4)}.png`

document.body.style.backgroundImage = `url('${bgImageUrl}')`