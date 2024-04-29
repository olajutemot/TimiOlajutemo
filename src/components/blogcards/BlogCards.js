import React, { useState } from "react";
import styles from "./blogCards.module.css";

const BlogCards = ({ blogs }) => {
  const [blogupdatedat, setBlogupdatedat] = useState("");

  // console.log(blogs);
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
  const formattedDate = formatDate(blogs.updatedAt);
  setBlogupdatedat(formattedDate);

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
            {/* <h2>{blog.title}</h2>
            <p>{blog.description}</p> */}
            <p>Last Updated: {blogupdatedat} </p>
            {/* </div> */}
          </section>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
