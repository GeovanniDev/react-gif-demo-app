import React, { useState } from 'react';
import PropTypes from 'prop-types'

function AddCategory({setCategories}) {
    // states
    const [inputValue, setInputValue] = useState('');
    // handlers
    const handleInputChange = ( e ) => setInputValue(e.target.value);
    const handleOnSubmit = ( e ) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => {
                if (!Array.from(categories).find(f => f === inputValue)) {
                    return [inputValue, ...categories]
                } else {
                    return [...categories];
                }
            })
            setInputValue('');
        }
    };

  return <form onSubmit={ handleOnSubmit }>
      <input
          type="text"
          value={ inputValue }
          onChange= { handleInputChange }
      />
  </form>;
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
