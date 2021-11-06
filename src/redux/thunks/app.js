import {APP_ERROR} from "../types/app.type";

export const thunkAppError = (error) => {
    return (dispatch) => dispatch({
        type: APP_ERROR,
        payload: error
    })
}