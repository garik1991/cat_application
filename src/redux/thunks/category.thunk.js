import axios                    from 'axios'
import { appError, appLoading }                   from '../selectors/app.selector'
import { getCatCategories, getCatCategoryImages } from '../selectors/cat.selector'



export const thunkGetCategories = () => {
  return async(dispatch) => {
    try{
      dispatch(appLoading(true))
      dispatch(appLoading(false))
      const res = await axios.get("https://api.thecatapi.com/v1/categories ")
      dispatch(getCatCategories(res.data))
      dispatch(appError(null))
    }catch(err){
      dispatch(appLoading(false))
      dispatch(appError(err.message))
    }
  }
}

export const thunkGetCategoryImages = (categoryId, limit = 10) => {
  return async(dispatch, getState) => {
    if(limit === "+10"){
      limit = getState().category.categoryImages.length + 10
    }

    try{
      dispatch(appLoading(true))
      dispatch(appLoading(false))
      const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${categoryId} `)
      dispatch(getCatCategoryImages(categoryId, res.data))
      dispatch(appError(null))
    }catch(err){
      dispatch(appLoading(false))
      dispatch(appError(err.message))
    }
  }
}