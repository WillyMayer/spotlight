import { useEffect, useState } from "react";
import NewsList from "./Newslist";

const Technology = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=ede83083587041e086318882d4c217e0"
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

export default Technology;
