import { GET_CAT_CATEGORIES, GET_CAT_CATEGORY_IMAGES } from '../types/cat.type'



export const getCatCategories = (allCategories) => {
  return {
    type: GET_CAT_CATEGORIES,
    payload: allCategories
  }
}

export const getCatCategoryImages = (category, categoryImages) => {
  return {
    type: GET_CAT_CATEGORY_IMAGES,
    payload: { category, categoryImages }
  }
}