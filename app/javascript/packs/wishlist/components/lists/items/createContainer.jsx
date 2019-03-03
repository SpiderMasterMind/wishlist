import React from 'react';
import Input from './input.jsx';
import axios from 'axios';
// import TextArea from './textArea';

class CreateContainer extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = this.initialState()
  }

  initialState() {
    if (this.props.containerType === 'create') {
      return this.createInitialState()
    } else if (this.props.containerType === 'update') {
      return this.updateInitialState()
    }
  }

  updateInitialState() {
    // the right props are getting through to here.
    return {
      list_id: this.props.listId,
      name: this.props.itemName,
      description: this.props.itemDescription,
      url: this.props.itemUrl
    }
  }

  createInitialState() {
    return {
      list_id: this.props.listId,
      name: '',
      description: '',
      url: ''
    }
  }

  handleCreateSubmit(event) {
    event.preventDefault()
    axios.post('/api/v1/items.json', {
      item: this.state
    }).then(response => {
      this.props.onCreate(response)
    }).catch(response => {
      this.props.onCreate(response)
    })
  }

  handleUpdateSubmit(event) {
    event.preventDefault()
    alert('updating in Container component')
    // differnt REST request etc.
  }

  handleSubmit(event) {
    if (this.props.containerType === 'create') {
      this.handleCreateSubmit(event)
    } else if (this.props.containerType === 'update') {
      this.handleUpdateSubmit(event)
    }
  }

  handleChange(event) {
    const name = event.target.name

    this.setState({ 
      [name]: event.target.value
    })
  }

  render() {
    // listId no passed on update action
    return(
      <form className="container" onSubmit={this.handleSubmit}>
        <Input 
          type={'text'}
          placeholder={'name'}
          value={this.state.name}
          name={'name'}
          onChange={this.handleChange}
        />
        <Input 
          type={'text'}
          placeholder={'description'}
          value={this.state.description}
          name={'description'}
          onChange={this.handleChange}
        />
         <Input 
          type={'text'}
          placeholder={'URL'}
          value={this.state.url}
          name={'url'}
          onChange={this.handleChange}
        />
        <button type='submit'>OK</button>
     </form>
    )
  }
}

export default CreateContainer
