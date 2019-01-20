import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ul>
        <li>{this.props.itemName}</li>
        <li>{this.props.itemDescription}</li>
        <li>{this.props.itemUrl}</li>
      </ul>
    )
  }
}

export default Item
