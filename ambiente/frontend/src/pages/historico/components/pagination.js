import React from 'react';
import './styles.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className='pagination'>
        {pageNumbers.map(number => (
          <p key={number} className='page-item' onClick={() => paginate(number)} >
            <a className='page-link'>
              <b>{number}</b>
            </a>
          </p>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;