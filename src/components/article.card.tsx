import { Link } from "react-router-dom";
import { ArticleType } from "../types/article.type";

interface Type {
  data: ArticleType;
}

const ArticleCard = ({ data }: Type): JSX.Element => {
  return (
    <div
      className="card"
      style={{
        height: 350,
      }}
    >
      <img
        src={
          "https://cdn.pixabay.com/photo/2020/03/14/05/20/businessman-4929680_960_720.jpg"
        }
        className="card-img-top"
        alt={data.picture}
      />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">
          {data?.body.length > 100
            ? `${data.body.slice(0, 100)}...`
            : data.body}
        </p>
        <Link to={`/article-detail/${data.id}`} className="btn btn-primary">
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
