import { Link } from "react-router-dom";
import "./404.css";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Error" />
        <title>ERROR</title>
      </Helmet>

      <div className="error-page__container">
        <div className="error-page__content">
          <h1 className="error-page__title">Something is gone wrong</h1>
          <Link to="/" className="home-page">
            Back to home page
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
