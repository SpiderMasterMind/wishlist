import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <li>{JSON.stringify(this.props)}</li>
    )
  }
}

export default Item
