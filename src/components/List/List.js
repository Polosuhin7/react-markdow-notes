import React from 'react';
import classes from "./List.module.css";
import Item from '../Item/Item';

const List = props => (
  <div className={ classes.List }>
      { props.records.map( record => (
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

export default List;