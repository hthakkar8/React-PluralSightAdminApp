import React from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <h2>404</h2>
        <p>Page not found</p>
        <Link to="/">Back to Home</Link>
      </>
    );
  }
}

export default NotFoundPage;
