import React from 'react';
import Item from './items/item.jsx';
import CreateItem from './items/createContainer.jsx';

class List extends React.Component {
  constructor(props) {
    super(props)
    this.handleCreateItem = this.handleCreateItem.bind(this)

    this.state = {
      listItems: this.props.listItems
    }

  }

  handleCreateItem(response) {
    this.setState((prevState, props) => {
      return { listItems: prevState.listItems.concat(response.data) }
    })
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
              onCreate={this.handleCreateItem}
            />
          }
        </div>
        <div className={'items'}>
          {
            this.state.listItems.map(item =>
              <Item
                key={item.id}
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
