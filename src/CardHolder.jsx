import axios from "axios";
import Card from "./Card";
import { useState, useEffect } from "react";

import "./Card.css";

import { LangBtn, NameBtn, StarBtn, NameSortBtn,OrderSort } from "./SearchFilter";
import Search from "./Search";

export const CardHolder = () => {
  const [lang , setLang] = useState("Javascript")
  
  
  const [data, setData] = useState([]);
  const call = async () => {
    const options = {
      url:
        `https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc&page=1&per_page=10`,
      method: "GET"
    };
    let info = await axios.request(options);
    // console.log(info)
    setData(info.data.items);
  };

  useEffect(() => {
    call();
  }, [lang]);
  return (
    <>
    
      <Search setLang={setLang}/>
      <LangBtn />
      <NameBtn />
      
      <NameSortBtn />
      <StarBtn />
      <div className="card-holder">
      {data
        ? data.map((e) => {
          return (
            <a href={e.html_url} style={{"text-decoration":"none", "color":"black"}}>

              
              <Card
                title={e.name}
                av={e.owner.avatar_url}
                des={e.description}
                nameURL={e.owner.url}
                forkCount={e.forks}
                language={e.language}
                stars={e.watchers_count}
                />
              </a>
            );
          })
        : null}
      </div>
    </>
  );
};
