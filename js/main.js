let usersImg = [
  "https://www.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg",
  "https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.webp?b=1&s=170667a&w=0&k=20&c=XocBdVosckQdKjxF2aKNbSWhK9GkX0JrykqAOU5KnbY=",
  "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713744000&semt=sph",
  "https://www.shutterstock.com/shutterstock/photos/2179380689/display_1500/stock-photo-happy-young-asian-saleswoman-looking-at-camera-welcoming-client-smiling-woman-executive-manager-2179380689.jpg",
  "https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg",
  "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
  "https://plus.unsplash.com/premium_photo-1661627681947-4431c8c97659?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZHNvbWUlMjBndXl8ZW58MHx8MHx8fDA%3D",
  "https://www.shutterstock.com/image-photo/smiling-confident-business-leader-looking-600nw-2155229343.jpg",
  "https://media.istockphoto.com/id/1568051602/photo/smiling-businesswoman-posing-in-modern-office.webp?b=1&s=170667a&w=0&k=20&c=yNo1AOJXuezZuBwys0GiKjbdyPinZPbkXI1imoPzc6M=",
  "https://i.pinimg.com/736x/72/d2/cd/72d2cd86ee9a62e0c903e249857370a0.jpg",
  "https://media.gettyimages.com/id/1250238624/photo/handsome-young-adult-businessman-with-stubble.jpg?s=612x612&w=gi&k=20&c=H2upefy-mU5MNlNhuXDyTboEmTMycZM-FcK4jYXx2TU=",
];

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchData(API) {
  let data = await fetch(API);
  data.json().then((res) => mapData(res));
}

fetchData(API_URL);

let placeholder = document.querySelector(".placeholder");
let placeholderCards = document.querySelector(".placeholder__cards");

function mapData(placeholder) {
  plsAdd = "";

  placeholder.forEach((info) => {
    plsAdd += `
    <div class="placeholder__card">
                <div class="placeholder__card__img">
                    <img src="${usersImg[info.id - 1]}" alt="" />
                </div>
                <div class="placeholder__card__info">
                    <h3 class="placeholder__card__info__title">Name: <span>${
                      info.name
                    }</span></h3>
                    <p class="placeholder__card__info__username">username: <span>${
                      info.username
                    }</span></p>
                    <a class="placeholder__card__info__email" target="_blank" href="#">email: <span>${
                      info.email
                    }</span></a>
                    <p class="placeholder__card__info__phone">phone: <a href="tel: ${
                      info.phone
                    }"><span>${info.phone}</span></a></p>
                    <a class="placeholder__card__info__website" target="_blank" href="#">website: <span>${
                      info.website
                    }</span></a>
                </div>
            </div>
    `;
    placeholderCards.innerHTML = plsAdd;
  });
}
