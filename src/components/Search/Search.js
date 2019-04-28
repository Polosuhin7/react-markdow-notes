import React, { Component } from 'react';

import classes from './Search.module.css'

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchValue: '',
    }
  }
  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    })
  }
  handleClear = e => {
    this.setState({
      searchValue: ''
    })
    this.props.handleSearchItemChange('')
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearchItemChange(this.state.searchValue)
  }
  render() {
    return (
      <form
        className={ classes.Form }
        onSubmit={ this.handleSubmit }
      >
        <div className={ classes.InputWrapper }>
          <button
            className={ classes.Submit }
            onClick={ this.handleSubmit }
            type="submit"
          >
            <span className="icon-search" />
          </button>
          
          <input 
          placeholder="Поиск"
          type="text"
          className={ classes.Input }
          value={ this.state.searchValue }
          onChange={ this.handleChange } />
          
          { this.state.searchValue ? 
          (<button
            className={ classes.Clear }
            type="button"
            onClick={ this.handleClear }
          >
            <span className="icon-clear" />
          </button>) 
          : null
        }
        </div>
      </form>
    )
  }
}

export default Search