import React from "react";
import "./Error.css";
import {connect} from "react-redux";
import {thunkAppError} from "../../redux/thunks/app";

const Error = ({msg, appError}) => {
    return (
        <div className="error">
            <h3>{msg}</h3>
            <button onClick={() => appError(null)}>X</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        appError: (error) => dispatch(thunkAppError(error))
    }
}

export default connect(null, mapDispatchToProps)(Error);