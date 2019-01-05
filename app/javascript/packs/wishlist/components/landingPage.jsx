import React from 'react';
import axios from 'axios';
import '../assets/stylesheets/wishlist/list'
import List from './lists/list.jsx'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    axios
      .get('api/v1/lists.json')
      .then(response => {
        this.setState(response.data)
      })
      .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        {this.state.lists.map(list =>
          <List 
            key={list.id}
            listData={list.data}
          />
        )}
      </div>
    )
  }
}

export default LandingPage
