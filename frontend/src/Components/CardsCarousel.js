import React from "react";
import { renderCards } from "./renderCards";

//let's assume FIDM members array of objects gets passed in as props
// { img, name, role, bio, links }
const members = [
   {
      id: 1,
      img: "https://robohash.org/coder",
      name: "Ronald McDonald",
      role: "Master Coder",
      bio: "I was born at a very young age.",
      link: "https://octonation.com/",
      linkType: "Portfolio",
   },
   {
      id: 2,
      img: "https://robohash.org/sandwich",
      name: "Michael Bolt-on",
      role: "Master Coder",
      bio: "Just because you're paranoid....",
      link: "https://octonation.com/",
      linkType: "Github",
   },
   {
      id: 3,
      img: "https://robohash.org/coffee",
      name: "Pina Colada",
      role: "Master Coder",
      bio: "Habia una pina colada. Y la sacaron de la fila.",
      link: "https://octonation.com/",
      linkType: "LinkedIn",
   },
];

const CardsCarousel = () => {
   const renderedCards = renderCards(members);
   return (
      <div
         style={{width: "20rem", margin: "0 auto"}}
         id="carouselExampleSlidesOnly"
         class="carousel slide carousel-fade"
         data-bs-interval="2000"
         data-bs-ride="carousel"
         
      >
         <div class="carousel-inner">{renderedCards}</div>
      </div>
   );
};

export default CardsCarousel;
