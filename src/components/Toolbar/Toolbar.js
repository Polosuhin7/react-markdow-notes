import React, { Fragment } from 'react';

import classes from './Toolbar.module.css';

const canEditButtonGroup = props => (
  <Fragment>
    <button className={ classes.Button } onClick={ props.handleEditCompileItem }>
        <div className={ classes.ButtonInner }>
          <span className="icon-edit" />
        </div>
      </button>
      <button className={ classes.Button } onClick={ () => props.handleDeleteItem(props.currentRecord.id) }>
        <div className={ classes.ButtonInner }>
          <span className="icon-trash" />
        </div> 
      </button>
    </Fragment>
)

const Toolbar = (props) => (
  <div className={ classes.Toolbar }>
    <button className={ classes.Button } onClick={ props.handleCreateRecord }>
      <div className={ classes.ButtonInner }>
          <span className="icon-text" />
      </div>
    </button>
    { props.currentRecord ? canEditButtonGroup(props) : null }
    
  </div>
)

export default Toolbar;
