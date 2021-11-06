import {
  GET_CAT_CATEGORIES,
  GET_CAT_CATEGORY_IMAGES
} from '../types/cat.type'

const initialState = {category: null, categories: [], categoryImages: [], getCategoryImagesSuccess: null}

const categoryReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_CAT_CATEGORIES:
      return {...state, categories: action.payload};
    case GET_CAT_CATEGORY_IMAGES:
      return {...state,
        category: action.payload.category,
        categoryImages: action.payload.categoryImages,
        getCategoryImagesSuccess: action.payload.categoryImages.length ? true : false};
    default: return state;
  }
}

export default categoryReducer