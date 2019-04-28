import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './App.module.css';
import Layout from '../components/Layout/Layout';
import { loadStateFromLocalStorage } from '../actions/loadStateFromLocalStorage';
import { testHandle } from '../actions/testHandle';
import { createRecord } from '../actions/createRecord';
import { editRecord } from '../actions/editRecord';
import { editCompileItem } from '../actions/editCompileItem';
import { changeCurrentRecord } from '../actions/changeCurrentRecord';
import { saveToLocalStorage } from '../actions/saveToLocalStorage';
import { deleteItem } from '../actions/deleteItem';
import { searchItem } from '../actions/searchItem';

class App extends Component {
  componentDidMount() {
    this.props.handleLoadStateFromLocalStorage();
  }
  componentDidUpdate() {
    this.props.handleSaveToLocalStorage();
  }

  handleCreateRecord = () => this.props.handleCreateRecord();
  handleEditRecord = record => this.props.handleEditRecord(record);
  handleEditCompileItem = record => this.props.handleEditCompileItem(record);
  handleChangeCurrentRecord = record => this.props.handleChangeCurrentRecord(record);
  handleDeleteItem = id =>  id && (this.props.handleDeleteItem(id));
  handleSearchItemChange = value => this.props.handleSearchItemChange(value);
  


  render = () => <Layout { ...this.props } />
}

const mapStateToProps = state => ({
  records: state.diary.records,
  editingRecords: state.diary.editingRecords,
  currentRecord: state.diary.currentRecord,
  editItem: state.diary.editItem,
  searchItem: state.diary.searchItem
})

const mapDispatchToProps = {
  handleLoadStateFromLocalStorage: loadStateFromLocalStorage,
  handleCreateRecord: createRecord,
  handleEditRecord: editRecord,
  handleEditCompileItem: editCompileItem,
  handleChangeCurrentRecord: changeCurrentRecord,
  handleSaveToLocalStorage: saveToLocalStorage,
  handleDeleteItem: deleteItem,
  handleSearchItemChange: searchItem
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
