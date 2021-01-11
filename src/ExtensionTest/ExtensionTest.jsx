import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ExtensionTest.styles';

class ExtensionTest extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('ExtensionTest will mount');
  }

  componentDidMount = () => {
    console.log('ExtensionTest mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ExtensionTest will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ExtensionTest will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ExtensionTest did update');
  }

  componentWillUnmount = () => {
    console.log('ExtensionTest will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ExtensionTestWrapper">
        Test content
      </div>
    );
  }
}

ExtensionTest.propTypes = {
  // bla: PropTypes.string,
};

ExtensionTest.defaultProps = {
  // bla: 'test',
};

export default ExtensionTest;
