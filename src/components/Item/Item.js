import React from 'react';
import classes from "./Item.module.css"

const Item = props => {
  const { name, createdAt, changeAt, id } = props.record;
  let classItem = classes.Item;
  if( id == props.currentRecord.id ) {
    classItem += ' ' + classes.ItemActive;
  }
  return (
    <div 
      className={ classItem }
      onClick={ () => props.handleChangeCurrentRecord(props.record) }
      onDoubleClick={ (record) => props.handleEditCompileItem(props.currentRecord) }
    >
      <div className={ classes.Title }>
        { name }
      </div>
      <div className={ classes.Date } >
        { createdAt }
      </div>
    </div>
  )
}

export default Item;