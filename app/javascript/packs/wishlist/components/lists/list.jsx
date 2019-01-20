import React from 'react';
import Item from './items/item.jsx';

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={'list container border border-primary'}>
        <h2 className="title">Title: {this.props.listTitle}</h2>
        <h4 className="description">Description: {this.props.listDescription}</h4>
          {
            this.props.listItems.map(item =>
              <Item
                key={item.item_id}
                itemName={item.name}
                itemDescription={item.description}
                itemUrl={item.url}
              />
            )
          }
      </div>
    )
  }
}

export default List
