import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CATEGORY, UPDATE_CATEGORY } from '../utils/mutations';


function Categories(props) {

  const [category, setCategory] = useState('');
  const [addCategory, { error }] = useMutation(ADD_CATEGORY);
  const [updateCategory, { errorUpdate }] = useMutation(UPDATE_CATEGORY);

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
  const editHandler = async (event) => {
    event.preventDefault();
    
    // console.log(event.target.parentElement.key) ;
    console.log(event.target.parentElement.id);
    
    console.log(event);
    try {
      const data = await updateCategory({
        variables: {
                     "categoryId":event.target.parentElement.id ,
                    "name": "test2"
                   },
      });

      console.log(data);

    } catch (err) {
      // console.errorUpdate(err);
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
        {props.categories.map((category) => <li key={category._id} id={category._id}> {category.name}
          <button className="" onClick={editHandler}> Edit </button>
        </li>
        
        )}
      </ul>
    </div>
  );
}

export default Categories;
