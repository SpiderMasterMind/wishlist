import React from 'react';
import Item from './items/item.jsx';
import CreateItem from './items/create.jsx';

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={'list container border border-primary'}>
        <h2 className="title">Title: {this.props.listTitle}</h2>
        <h4 className="description">Description: {this.props.listDescription}</h4>
        <div className={'createModal'}>
          {
            <CreateItem
              listId={this.props.listId}
            />
          }
        </div>
        <div className={'items'}>
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
      </div>
    )
  }
}

export default List
