import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>PluralSight Administration</h1>
      <p>Ultra Responsive Web Apps.</p>
      <Link to="/about" className="button button-primary">
        About Page
      </Link>
    </div>
  );
}

export default HomePage;
