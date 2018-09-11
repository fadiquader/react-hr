import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

class Public extends React.Component {

  render() {
    return (
      <div className="mvh-100">
        <div className="public-layout">
          <Switch>
            {this.props.routes.map(item => (
              <Route
                key={item.key} path={item.path}
                component={item.component}
                exact={item.exact}
              />
            ))}
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Public;
