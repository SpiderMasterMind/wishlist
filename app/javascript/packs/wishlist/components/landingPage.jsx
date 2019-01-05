import React from 'react';
import '../assets/stylesheets/list/list'

class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <h1>Landing Page</h1>
        <div className="list">
          <h2>My Wishlist</h2>
          <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
            <li>Thing 4</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default LandingPage
