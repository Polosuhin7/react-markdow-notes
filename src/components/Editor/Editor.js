import React, { Component, Fragment } from 'react';
import marked from 'marked';

import classes from './Editor.module.css'

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.currentRecord.content,
      changeAt: this.props.currentRecord.changeAt,

    }
  }
  handleChange = (e) => {
    let date = new Date();
    let changeAt = date.toLocaleDateString() + " " + date.getHours() + ":" + date.getMinutes();
    this.setState({
      content: e.target.value,
      changeAt
    });
  }
  handleBlur = () => {
    const { content, changeAt } = this.state;
    let name = content.replace(/[#*]|(-{3})|(__)|(___)/g, '').split('');
    if(name.length > 20) {
      name.length = 20;
      name = name.join('');
      name += "..."
    }
    else {
      name = name.join('');
    }
    this.props.handleEditRecord({
      name,
      compileItem: marked(content),
      content,
      changeAt
    });
  }
  
  render() {
    return (
      <Fragment>
        <textarea
          className={classes.Editor}
          autoFocus
          placeholder={ this.props.currentRecord.content }
          value={ this.state.content }
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
        />
      </Fragment>
    )
  }
}

export default Editor;