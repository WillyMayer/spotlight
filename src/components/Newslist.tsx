//api key= https://newsapi.org/v2/top-headlines?country=us&apiKey=ede83083587041e086318882d4c217e0
import {v4 as uuidv4} from 'uuid';

const NewsList = (props:any) => {
  const news = props.news;
  const articles = props.news.articles;
  const heroArticle = news.articles[0];
  return (
    <div className="news-list p-6">
      <div className="news-msg">
      <div className="div-article-item border-2 border-gray-200 p-4 h-auto shadow-2xl">
                <img
                  src={heroArticle.urlToImage}
                  alt={heroArticle.description}
                  className="border-2 border-gray-300 w-full"
                />
                <h2 className="text-3xl font-bold font my-3">
                  {heroArticle.title}
                </h2>
                <h3 className="italic">{heroArticle.source.name}</h3>
                <p>{heroArticle.description}</p>
                <a href={heroArticle.url} className="text-blue-400 font-bold ">
                  More Info
                </a>
              </div>
      </div>
      <div className="news-articles flex flex-wrap place-content-center ">
        <ul className="flex flex-wrap justify-center">
          {articles.slice(1).map((article:any) => (
            <li key={uuidv4()} className="article-item list-none md:w-4/5 lg:w-6/12">
              <div className="div-article-item border-2 border-gray-200 p-4 h-auto mx-8 my-8 shadow-2xl">
                <img
                  src={article.urlToImage}
                  alt={article.description}
                  className="border-2 border-gray-300"
                />
                <h2 className="text-3xl font-bold font my-3">
                  {article.title}
                </h2>
                <h3 className="italic">{article.source.name}</h3>
                <p>{article.description}</p>
                <a href={article.url} className="text-blue-400 font-bold ">
                  More Info
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsList;