import React from 'react';
import axios from 'axios';
import '../assets/stylesheets/wishlist/list'
import List from './lists/list.jsx'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {lists: [], isLoading: true}
  }

  componentDidMount() {
    axios
      .get('api/v1/lists.json')
      .then(response => {
        this.setState({lists: response.data, isLoading: false})
      })
      .catch(error => console.log(error))
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading..</div>
    } else {
      return(
        <div>
          {
            this.state.lists.map(list =>
            <List 
              key={list.id}
              listTitle={list.title}
              listDescription={list.description}
            />
            )
          }
        </div>
      )
    }
  }
}

export default LandingPage
