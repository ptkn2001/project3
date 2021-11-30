import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CATEGORY, UPDATE_CATEGORY } from '../utils/mutations';
import {QUERY_CATEGORY} from '../utils/queries';
import Modal from '../components/Modal';

function Categories(props) {
  const [category, setCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();
  
  const [addCategory, { error }] = useMutation(ADD_CATEGORY);
  const [updateCategory, { error: updateError }] = useMutation(UPDATE_CATEGORY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addCategory({
        variables: { "name": category },
        refetchQueries: [{query: QUERY_CATEGORY }],
      });

      setCategory('');

      // window.location.reload();

    } catch (err) {
      console.error(err);
    }
  };

  const editCategory = async (event) => {
    setSelectedId(event.target.parentElement.parentElement.id);
    setIsOpen(true);
  };

  const executeUpdateCategory = async (newName) => {
    try {
      const data = await updateCategory({
        variables: {
                     "categoryId": selectedId ,
                    "name": newName
                   },
                   refetchQueries: [{query: QUERY_CATEGORY }],    
      });

    } catch (err) {
      console.error(err);
    }
  };

  const handleOnClose = () => {
    setIsOpen(false);
  }

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
        <div className="mt-5">
        <table>
                <tr>
                  <th>Category</th>
                </tr>
          {
            props.categories.map((category) => (
            <tr key={category._id} id={category._id}>
              <td>{category.name}</td>
              <td> <button className="btn btn-info" onClick={editCategory}>Edit</button> </td>
            </tr>
            ))}       
        </table>
        {updateError && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {updateError.message}
            </div>
             )}
        <Modal open={isOpen} onClose={handleOnClose} updateCategory={executeUpdateCategory}/> 
        </div>
    </div>
  );
}

export default Categories;
