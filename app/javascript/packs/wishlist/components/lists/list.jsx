import React from 'react';
import Item from './items/item.jsx';

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={'list container border border-primary'}>
        <h2 className="title">{this.props.listTitle}</h2>
        <ul>
          <li>
            <Item
              itemDescription = {this.props.listDescription}
            />
          </li>
        </ul>
      </div>
    )
  }
}

export default List
