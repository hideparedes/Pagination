import React from "react";

export default function Pagination({ postsPerPage, totaltPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totaltPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => {
            return (
              <li key={number} className="page-item">
                <a
                  href="!#"
                  onClick={() => {
                    paginate(number);
                  }}
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
