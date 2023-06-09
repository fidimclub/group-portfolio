import React from "react";
import "./renderCards.css";

export const renderCards = (members) => {
   const renderedMembers = members.map((member, index) => {
      return (
         <div key={member.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="card" style={{ maxWidth: "18rem",  }}>
               <img src={member.img} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text"style={{height: "2rem"}} >{member.bio}</p>
                  <a href={member.link} className="card-link">
                     {member.linkType}
                  </a>
               </div>
            </div>
         </div>
    
      );
   });
   return renderedMembers;
};

