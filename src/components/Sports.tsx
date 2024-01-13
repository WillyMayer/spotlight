import { useEffect, useState } from "react";
import NewsList from "./Newslist";

const Sports = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=ede83083587041e086318882d4c217e0"
    )
      .then((res) => {
        return res.json(); //Transfor json data into javascript object
      })
      .then((data) => {
        setNews(data);
      });
  }, []);
  return <div>{news && <NewsList news={news} />}</div>;
};

export default Sports;
