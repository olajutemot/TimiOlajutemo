import React, { useState, useEffect } from "react";
import styles from "./blogCards.module.css";

const BlogCards = ({ blogs }) => {
  const [blogupdatedat, setBlogupdatedat] = useState("");

  useEffect(() => {
    // Update the date when the component mounts or when the blogs prop changes
    if (blogs.length > 0) {
      const formattedDate = formatDate(blogs[0].updatedAt);
      setBlogupdatedat(formattedDate);
    }
  }, [blogs]);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
  };

  return (
    <div className={styles.blogcardContainer}>
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className={styles.blogCards}
          onClick={() => {
            window.location.href = `/blogpage?blogid=${blog._id}`;
          }}
        >
          <section className={styles.blogCard}>
            {/* <div> */}
            <img src={blog.imageUrl} alt="" />
            <a href="/">{blog.category}</a>
            <div>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
            <p>Last Updated: {blogupdatedat} </p>
            {/* </div> */}
          </section>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
