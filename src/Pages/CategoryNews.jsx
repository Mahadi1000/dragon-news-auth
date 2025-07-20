import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data.data));
  }, [id]);

  console.log(news);
  return (
    <div>
      <h2 className="text-2xl font-bold">Total Category News {news.length}</h2>
      {news.map((news) => (
        <NewsCard key={news.id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryNews;
