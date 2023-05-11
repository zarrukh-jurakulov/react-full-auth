import { useState, useEffect } from "react";
import { getArticlesById } from "../services/article.service";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ArticleDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getArticlesById(id).then((res: any) => setData(res?.data));
  }, []);

  console.log("data", data);

  return (
    <div className="container-fluid min-vh-100 bg-dark  text-white p-3 d-flex align-items-center justify-content-center flex-column">
      <img
        src="https://cdn.pixabay.com/photo/2016/07/23/12/54/box-1536798_960_720.png"
        alt="Empty box"
        style={{
          width: 400,
        }}
      />
      <h1 className="text-white text-center bs-warning mt-3">
        Empty Content !
      </h1>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-primary mt-3 d-flex align-items-center justify-centent-center"
      >
        <IoIosArrowBack />
        Go Back
      </button>
    </div>
  );
};

export default ArticleDetail;
