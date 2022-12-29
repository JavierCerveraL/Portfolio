import React, { Component } from 'react';

import Typed from 'react-typed';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <Typed strings={['Welcome, click anywhere']} typeSpeed={60} />
        <br />

        <Typed
          strings={['Web Development', 'Web Design', 'Food', 'Music']}
          startDelay={3500}
          shuffle={true}
          typeSpeed={40}
          backSpeed={80}
          loop
        >
          <input
            className="bg-transparent text-center	text-red-500"
            type="text"
          />
        </Typed>
      </div>
    );
  }
}

export default MyComponent;
