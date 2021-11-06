import { Fragment, useEffect } from 'react'
import {connect}               from 'react-redux'
import Category                   from '../Category/Category'
import { thunkGetCategoryImages } from '../../redux/thunks/category.thunk'
import "./DisplayImages.css"

const DisplayImages = ({categoryId, categoryImages, onLoadCategoryImages, categories, getCategoryImagesSuccess}) => {
  useEffect(() => {
    if(categoryId){
      onLoadCategoryImages(categoryId)
    }
  }, [onLoadCategoryImages, categoryId])

  if(categoryId && getCategoryImagesSuccess === null){
    return <></>
  }

  return (
    <div className="main-display-container">
      {!categoryId && <h3>No images yet, click on a category to see the awesome cat images!</h3>}
      {getCategoryImagesSuccess === false && <h3>Invalid category</h3>}

      {<Fragment>
        <Category categoryImages={categoryImages}/>
        {getCategoryImagesSuccess && <div className="load-more">
          <button onClick={() => onLoadCategoryImages(categoryId, '+10')}>More</button>
        </div>}
      </Fragment>}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categoryImages: state.category.categoryImages,
    getCategoryImagesSuccess: state.category.getCategoryImagesSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadCategoryImages: (categoryId, limit) => {
      dispatch(thunkGetCategoryImages(categoryId, limit))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayImages)