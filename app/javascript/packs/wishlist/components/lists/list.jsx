import React from 'react';
import Item from './items/item.jsx';

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render(props) {
    return(
      <div className={'list container border border-primary'}>
        <h2 className="title">Wishlist X</h2>
        <h4>Created: then</h4>
        <h4>Last updated: now</h4>
        <ul>
          <Item />
        </ul>
      </div>
    )
  }
}

export default List
