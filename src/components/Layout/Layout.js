import React  from 'react';
import Toolbar from '../Toolbar/Toolbar';
import List from '../List/List';
import Editor from '../Editor/Editor';
import CompileItem from '../CompileItem/CompileItem';

import classes from './Layout.module.css';

const Layout = (props) => {
  let edit =  props.editItem && props.currentRecord;
  return (
    <div className={ classes.Layout } >
      <div className={ classes.Toolbar }>
        <Toolbar { ...props } />
      </div>
      <div className={ classes.List } >
        <List { ...props } />
      </div>
      <div className={ classes.Content }>
        { edit ?  <Editor {...props} /> : <CompileItem {...props} /> }
      </div>
    </div>
  )
}

export default Layout;