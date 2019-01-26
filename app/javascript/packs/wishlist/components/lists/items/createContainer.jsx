import React from 'react';
import Input from './input.jsx';
import axios from 'axios';
// import TextArea from './textArea';

class CreateContainer extends React.Component {
  constructor (props) {
    super(props)
    // this.props.listId
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      list_id: this.props.listId,
      name: '',
      description: '',
      url: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/v1/items', {
      item: this.state
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })
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
