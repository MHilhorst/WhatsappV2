import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
  }
  componentDidMount() {}
  render() {
    const { component: Component, ...rest } = this.props;
    const { layout: Layout } = this.props;
    const { loaded } = this.state;
    if (!loaded) return null;
    return (
      <Route
        {...rest}
        render={props => {
          return this.props.session ? (
            <Layout {...props}>
              <Component {...props} session={this.props.session} />
            </Layout>
          ) : (
            <Redirect
              to={{
                pathname: '/auth'
              }}
            />
          );
        }}
      />
    );
  }
}

export default withRouter(PrivateRoute);
