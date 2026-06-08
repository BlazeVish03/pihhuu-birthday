const song =
document.getElementById("birthdaySong");

const openBtn =
document.getElementById("openBtn");

const page1 =
document.getElementById("page1");

const page2 =
document.getElementById("page2");

openBtn.addEventListener("click",()=>{

page1.style.display="none";

page2.style.display="flex";

song.play();

});

document
.getElementById("nextPage")
.addEventListener("click",()=>{

alert(
"PAGE 3 (Photo Gallery) Next 💖"
);

});

const page3 =
document.getElementById("page3");

document
.getElementById("nextPage")
.addEventListener("click",()=>{

page2.style.display="none";

page3.style.display="flex";

});

const photos = [

"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg"

];

let currentPhoto = 0;

setInterval(()=>{

currentPhoto++;

if(currentPhoto >= photos.length){

currentPhoto = 0;

}

document
.getElementById("sliderImage")
.src = photos[currentPhoto];

},2500);

document
.getElementById("galleryNext")
.addEventListener("click",()=>{

alert(
"PAGE 4 (Gift Box Section) Next 🎁"
);

});

const page4 =
document.getElementById("page4");

document
.getElementById("galleryNext")
.addEventListener("click",()=>{

page3.style.display="none";

page4.style.display="flex";

});

function openGift(num){

const box =
document.getElementById("giftMessage");

const gifts = {

1:"🌸 Thank you for always being there.",

2:"💖 You make every difficult day easier.",

3:"🎂 May all your dreams come true.",

4:"✨ Stay happy, healthy and smiling.",

5:"🎈 You are truly special.",

6:"🌷 Happy Birthday Pihhuu 💖"

};

box.innerHTML = gifts[num];

}

document
.getElementById("giftNext")
.addEventListener("click",()=>{

alert(
"PAGE 5 (Birthday Cake) Next 🎂"
);

});

const page5 =
document.getElementById("page5");

const page6 =
document.getElementById("page6");

document
.getElementById("giftNext")
.addEventListener("click",()=>{

page4.style.display="none";

page5.style.display="flex";

});

document
.getElementById("cakeNext")
.addEventListener("click",()=>{

page5.style.display="none";

page6.style.display="flex";

});

document
.getElementById("restartBtn")
.addEventListener("click",()=>{

location.reload();

});

document
.getElementById("musicBtn")
.addEventListener("click",()=>{

if(song.paused){

song.play();

}else{

song.pause();

}

});