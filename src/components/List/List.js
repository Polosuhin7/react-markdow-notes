import React from 'react';
import classes from "./List.module.css";
import Item from '../Item/Item';

const List = props => {
  let listItems = [...props.records].filter(({ compileItem }) => compileItem.includes(props.searchItem) )
  return (
    <div className={ classes.List }>
        { listItems.map( record => (
          <Item
            key={ record.id }
            record={ record }
            currentRecord={ props.currentRecord }
            handleChangeCurrentRecord={ props.handleChangeCurrentRecord }
            handleEditCompileItem={ props.handleEditCompileItem }
          />
        )) }
    </div>
  );
}

export default List;