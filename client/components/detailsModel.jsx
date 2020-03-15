import React from "react";

const InfoCard = ({
  type,
  title,
  description,
  views,
  start_date,
  end_date,
  creator,
  show
}) => {

  if(!show){
    return null;
  }

  if (type == "Manga"){
    return (
      <div className="modal">
        <ul className="modalList">
          <li className="modalDetail">Title: {title}</li>
          <li className="modalDetail">Chapters: {views}</li>
          <li className="modalDetail">Start_date: {start_date}</li>
          <li className="modalDetail">End_date: {end_date}</li>
          <li className="modalDetail">Author(s): {creator}</li>
        </ul>
        <div>
          <h1>Description</h1>
          <div>{description}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal">
        <ul className="modalList">
          <li className="modalDetail">Title: {title}</li>
          <li className="modalDetail">Episodes: {views}</li>
          <li className="modalDetail">Start_date: {start_date}</li>
          <li className="modalDetail">End_date: {end_date}</li>
          <li className="modalDetail">Studio: {creator}</li>
        </ul>
        <div>
          <h1>Description</h1>
          <div>{description}</div>
        </div>
      </div>
    );
  }
};

export default InfoCard;
