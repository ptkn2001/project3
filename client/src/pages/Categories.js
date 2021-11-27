import React from 'react';

function Categories(props) {

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {props.categories.map((category) => <li key={category._id}> {category.name} </li>
        )}
      </ul>
    </div>
  );
}

export default Categories;
