import React, { useEffect, useState } from "react";
import RightAside from "../Components/Home/RightAside";
import Header from "../Components/Header";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useParams } from "react-router";
// import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
    const {id} = useParams();
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(res => res.json())
        .then(data => setNews(data.data))
    }, [id])
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          {
            news.map(news => <NewsDetailsCard key={news._id} news={news}></NewsDetailsCard>)
          }
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
