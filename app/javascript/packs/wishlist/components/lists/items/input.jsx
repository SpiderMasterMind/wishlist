import React from 'react';

const Input = (props) => {
  return (
    <div className="form-group">
      <label
        htmlFor={props.listId}
        className="form-label"
      >{props.name}</label>
      <input
        className="form-input"
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={e => props.onChange(e)}
      />
    </div>
  )
}
export default Input
