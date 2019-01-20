import React from 'react';

class CreateItem extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return(
      <h2>{this.props.listId}</h2>
    )
  }
}

export default CreateItem
