import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <>
      <br/>
      <p>Choose a Category:</p>
      <br/>
      <div className="row">
          <div className="col s4">
            <a onClick={() => {
                handleClick()}}>
            ALL
            </a>
          </div>
        {categories.map(item => (
          <div className="col s4" key={item._id}>
            <a
              key={item._id}
              onClick={() => {
                handleClick(item._id);
              }}
            >
              {item.name}
          </a>
          </div>
        ))}
      </div> 
    </>

  );
}

export default CategoryMenu;
