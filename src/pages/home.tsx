import { useState, useEffect } from "react";
import { getArticles } from "../services/article.service";
import ArticleCard from "../components/article.card";
import { ArticleType } from "../types/article.type";
import Loading from "../components/loading";
import Pagination from "../components/pagination";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articlesPerPage] = useState<number>(12);

  useEffect(() => {
    getArticles().then((res) => setData(res?.result));
  }, []);

  if (data.length === 0) {
    return <Loading />;
  }

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid min-vh-100 bg-dark  text-white p-3">
      {/* <Navbar />
      <Outlet /> */}
      <div className="row h-25">
        {currentArticles?.map((item: ArticleType) => (
          <div
            className="col-3 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3"
            key={item.id}
          >
            <ArticleCard data={item} />
          </div>
        ))}
        <div className="mt-3">
          <Pagination
            articlesPerPage={articlesPerPage}
            totalArticles={data?.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
