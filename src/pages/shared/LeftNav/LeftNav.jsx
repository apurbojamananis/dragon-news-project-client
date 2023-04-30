// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://news-dragon-server-apurbojamananis.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4>All Categories</h4>
      <div className="">
        {categories.map((category) => (
          <p key={category.id} className="text-danger ps-4 py-2 rounded">
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-secondary"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
