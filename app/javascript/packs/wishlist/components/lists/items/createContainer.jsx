import React from 'react';
import Input from './input.jsx';
// import TextArea from './textArea';

class CreateContainer extends React.Component {
  constructor (props) {
    super(props)
    // this.props.listId
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      newItem: {
        name: '',
        description: '',
        url: '',
      }
    }
  }

  handleSubmit() {
  }

  handleClear() {
  }


  handleChange(event) {
    this.setState({ 
      newItem: {
        name: event.target.value
      }
    })
  }

  render() {
    return(
      <form className="container" onSubmit={this.handleSubmit}>
        <Input 
          type={'text'}
          placeholder={'placeholder'}
          value={''}
          name={'name'}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default CreateContainer