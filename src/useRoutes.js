import React, {Fragment} from "react";
import { Switch, Route } from "react-router-dom"
import Main                        from './pages/Main'
import {useSelector} from "react-redux";
import Error from "./components/Error/Error";


const useRoutes = () => {
    const error = useSelector(state => state.app.error)
  return (
      <Fragment>
          {error && <Error msg={error} />}
          <Switch>
              <Route path="/:id?"><Main /></Route>
          </Switch>
      </Fragment>
  )
}

export default useRoutes