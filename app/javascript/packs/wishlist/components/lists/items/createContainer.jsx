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
      return this.createTypeInitialState()
    } else if (this.props.containerType === 'update') {
      return this.updateTypeInitialState()
    }
  }

  updateTypeInitialState() {
    return {
      list_id: this.props.listId,
      name: 'EGG',
      description: 'UPDATING',
      url: '',
    }
  }

  createTypeInitialState() {
    return {
      list_id: this.props.listId,
      name: '',
      description: '',
      url: '',
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
    alert('updating')
    // differnt REST request etc.
  }

  handleSubmit(event) {
    if (this.props.containerType === 'create') {
      handleCreateSubmit(event)
    } else if (this.props.containerType === 'update') {
      handleUpdateSubmit(event)
    }
  }

  handleChange(event) {
    const name = event.target.name

    this.setState({ 
      [name]: event.target.value
    })
  }

  render() {
    return(
      <form className="container" onSubmit={this.handleSubmit}>
        <Input 
          type={'text'}
          placeholder={'Item Name'}
          name={'name'}
          onChange={this.handleChange}
        />
        <Input 
          type={'text'}
          placeholder={'Item Description'}
          name={'description'}
          onChange={this.handleChange}
        />
         <Input 
          type={'text'}
          placeholder={'url'}
          name={'url'}
          onChange={this.handleChange}
        />
        <button type='submit'>OK</button>
     </form>
    )
  }
}

export default CreateContainer
