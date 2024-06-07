import { useState, useEffect } from "react";
import ArticleList from "@/components/ArticleList";
import axios from "@/lib/axios";

export default function Boards() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const res = await axios.get(`/articles`);
    const nextArticles = res.data.list;
    setArticles(nextArticles);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}
