import React from "react";
import "./Category.css"
import {connect} from "react-redux";

const Category = ({categoryImages, loading}) => {

  return (
    <div className="category-container">
      <div className="category-images-container">
          {categoryImages.map(image => {
          return (
            <div key={JSON.stringify(image)} className="category-image-container">
              <img src={image.url} alt="Cat image"/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        loading: state.app.loading
    }
}

export default connect(mapStateToProps)(Category)