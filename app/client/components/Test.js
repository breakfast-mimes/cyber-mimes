import React from 'react';
import { Link } from 'react-router';

const Test = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>HAHAHAHAH</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Test;