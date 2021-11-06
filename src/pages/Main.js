import { useEffect }          from 'react'
import { useParams }          from 'react-router-dom'
import DisplayImages          from '../components/DisplayImages/DisplayImages'
import Sidebar                from '../components/Sidebar/Sidebar'
import { thunkGetCategories } from '../redux/thunks/category.thunk'
import {connect}              from 'react-redux'
import "./Main.css"

const Main = ({getCategories, categories}) => {
  const {id} = useParams()

  useEffect(() => {
    getCategories()
  }, [getCategories])

  return (
    <div className="main-container">
      <Sidebar categories={categories}/>
      <DisplayImages categoryId={id} categories={categories}/>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)