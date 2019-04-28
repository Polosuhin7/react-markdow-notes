import React from 'react';

import classes from './CompileItem.module.css'
const CompileItem = props => (
  props.currentRecord ? (
  <div className={ classes.CompileItem } >
    { props.currentRecord.changeAt ?
      (<div  className={ classes.Date }>изменено: { props.currentRecord.changeAt }</div>) 
      : null 
    }
    <div 
      className={ classes.Content }
      dangerouslySetInnerHTML={ { __html: props.currentRecord.compileItem } } 
      onDoubleClick={ (record) => props.handleEditCompileItem(props.currentRecord) } />
  </div>
  )
    : null
)

export default CompileItem