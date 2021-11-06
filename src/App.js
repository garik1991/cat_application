import './App.css';
import React, { useEffect }          from 'react'
import { thunkGetCategories } from './redux/thunks/category.thunk'
import {connect}              from 'react-redux'
import useRoutes              from './useRoutes'



function App({getCategories}) {
  const routes = useRoutes()

  useEffect(() => {
    getCategories()
  }, [getCategories])

  return routes;
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => {
      dispatch(thunkGetCategories())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
