import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import { LocaleProvider } from 'antd';
import createHistory from "history/createBrowserHistory";
import arEG from 'antd/lib/locale-provider/ar_EG';
import { getRouterData } from '../common/router';

const history = createHistory();

class App extends React.Component {

  render() {
    const routerData = getRouterData();
    return (
      <LocaleProvider locale={arEG}>
        <div>
          <Router history={history}>
            <Switch>
              {Object.keys(routerData).map(path => {
                const route = routerData[path];
                const { component: RouteComponent, exact = false, routes = [] } = route;
                return (
                  <Route
                    key={path}
                    path={path}
                    exact={exact}
                    render={props => <RouteComponent {...props} routes={routes} />}
                  />
                );
              })}
              <Redirect to="/auth/login" />
            </Switch>
          </Router>
        </div>
      </LocaleProvider>
    )
  }
}

export default App;
