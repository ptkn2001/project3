import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CATEGORY } from '../utils/mutations';

function Categories(props) {

  const [category, setCategory] = useState('');
  const [addCategory, { error }] = useMutation(ADD_CATEGORY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addCategory({
        variables: { "name": category },
      });

      console.log(data);

      setCategory('');

    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div>
      <h1>Categories</h1>
      <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Add Category..."
              value={category}
              className="form-input w-100"
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Add Category
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      <ul>
        {props.categories.map((category) => <li key={category._id}> {category.name} </li>
        )}
      </ul>
    </div>
  );
}

export default Categories;
