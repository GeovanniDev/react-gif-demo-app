import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Components
import AddCategory from './components/AddCategory';
import GridGif from './components/GridGif';

const GifExpertApp = props => {
    const [categories, setCategories] = useState(['Anime']);
    // const handleAddCategory = () => { setCategories( [...categories, `New item => ${ categories.length + 1 }`] ) };
  return <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={ setCategories } />
    
    <hr />
    <ol>{ categories.map(category => <GridGif key={ category } category={ category } />) }</ol>
  </>
};

GifExpertApp.propTypes = {}

export default GifExpertApp