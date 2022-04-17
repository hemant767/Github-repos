import axios from "axios";
import { useState, useEffect } from "react";


import "./Card.css";
const Card = ({ title, av, des, nameURL, forkCount, language, stars }) => {
  const [data, setData] = useState();
  const callName = async () => {
    const options = {
      url: nameURL,
      method: "GET"
    };
    let info = await axios.request(options);
    // console.log(info);
    setData(info.data.name);
  };

  useEffect(() => {
    callName();
  }, []);

  return (
    <div className = "card">
      <div className = "card-left">
        <img src={av} alt=" " />
      </div>
      <div className = "card-right">

        <span className="card-title">{title}</span>
        <span className= "card-des">{des}</span>
        <span className ="card-cnt">{forkCount}</span>
        <span className="lang-chip">{language}</span>
        <span>{stars}</span>
      </div>
    </div>
  );
};

export default Card;
