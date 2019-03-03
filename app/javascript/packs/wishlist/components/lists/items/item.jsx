import React from 'react';
import CreateContainer from './createContainer.jsx';

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <ul>
          <li>{this.props.itemName}</li>
          <li>{this.props.itemDescription}</li>
          <li>{this.props.itemUrl}</li>
        </ul>
        <CreateContainer
          containerType='update'
          listId={this.props.key}
          itemName={this.props.itemName}
          itemDescription={this.props.itemDescription}
          itemUrl={this.props.itemUurl}
          onUpdate={this.props.onUpdate}
        />
      </div>
    )
  }
}

export default Item
