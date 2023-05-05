//creating the pagination bullets
let imgNumber = document.querySelectorAll("img");
let myUl = document.querySelector(".pagination");
for (let i = 0; i < imgNumber.length; i++) {
  let myli = document.createElement("li");
  if (imgNumber[i].classList.contains("active")) {
    myli.classList.add("active");
  }

  myli.innerText = i + 1;
  myUl.appendChild(myli);
}
window.addEventListener("load", () => {
  if (window.localStorage.getItem("currentElement")) {
    removeAllActive();
    currentEllement = window.localStorage.getItem("currentElement");
    imgNumber[currentEllement - 1].classList.add("active");
    myLi[currentEllement - 1].classList.add("active");
    check.innerHTML = `${currentEllement}/${imgNumber.length}`;
  }
});
//building the checker function
let myLi = document.querySelectorAll("li");
let check = document.querySelector(".imgNumber");
let currentEllement = document.querySelector("li.active").innerHTML;
function checker() {
  removeAllActive();

  imgNumber[currentEllement - 1].classList.add("active");
  myLi[currentEllement - 1].classList.add("active");
  check.innerHTML = `${currentEllement}/${imgNumber.length}`;
}
checker();

//remove all active class function

function removeAllActive() {
  myLi.forEach((element) => {
    element.classList.remove("active");
  });
  imgNumber.forEach((element) => {
    element.classList.remove("active");
  });
}
//next img events
let next = document.querySelector(".angle-right");
function nextItem() {
  currentEllement++;
  if (currentEllement > imgNumber.length) {
    currentEllement = 1;
  }

  checker();
  window.localStorage.setItem("currentElement", currentEllement);
}
next.addEventListener("click", nextItem);
//prev function
let previous = document.querySelector(".angle-left");
function previousItem() {
  currentEllement--;
  if (currentEllement === 0) {
    currentEllement = imgNumber.length;
  }
  checker();
  window.localStorage.setItem("currentElement", currentEllement);
}
previous.addEventListener("click", previousItem);
//paginations bullets event
for (let i = 0; i < myLi.length; i++) {
  myLi[i].addEventListener("click", function (e) {
    currentEllement = e.target.innerHTML;
    checker();
    window.localStorage.setItem("currentElement", currentEllement);
  });
}
// adding the like and dislike button and it's effect
// -----------------------like---------------------
const likeBtn = document.querySelector(".like");
likeBtn.addEventListener("click", function (e) {
  for (let i = 0; i < 20; i++) {
    let myrandom = Math.floor(Math.random() * 70);
    let hart = document.createElement("span");
    hart.classList.add("likeeffect");
    hart.style.width = `${myrandom}px`;
    hart.style.height = `${myrandom}px`;
    hart.style.transform = `translate(${myrandom}px,50%)`;

    document.querySelector(".imgContainer").appendChild(hart);
    setTimeout(() => {
      hart.remove();
    }, 5000);
  }
});
// -----------------------dislike---------------------
const dislikeBtn = document.querySelector(".dislike");
dislikeBtn.addEventListener("click", function (e) {
  for (let i = 0; i < 20; i++) {
    let myrandom = Math.floor(Math.random() * 70);
    let hart = document.createElement("span");
    hart.classList.add("dislikeeffect");
    hart.style.width = `${myrandom}px`;
    hart.style.height = `${myrandom}px`;
    hart.style.transform = `translate(${myrandom}px,50%)`;

    document.querySelector(".imgContainer").appendChild(hart);
    setTimeout(() => {
      hart.remove();
    }, 5000);
  }
});
