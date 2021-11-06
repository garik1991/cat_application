import { APP_ERROR, APP_LOADING } from '../types/app.type'

export const appLoading = (loading) => {
  return {
    type: APP_LOADING,
    payload: loading
  }
}

export const appError = (error) => {
  return {
    type: APP_ERROR,
    payload: error
  }
}