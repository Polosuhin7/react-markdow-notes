import uuid from 'uuid/v1';

import { TEST_HANDLE } from '../actions/testHandle';
import { LOAD_FROM_STORAGE } from '../actions/loadStateFromLocalStorage';
import { CREATE_RECORD } from '../actions/createRecord';
import { EDIT_RECORD } from '../actions/editRecord';
import { EDIT_COMPILE_ITEM } from '../actions/editCompileItem';
import { CHANGE_CURRENT_RECORD } from '../actions/changeCurrentRecord';
import { SAVE_TO_LOCAL_STORAGE } from '../actions/saveToLocalStorage';
import { DELETE_ITEM } from '../actions/deleteItem';

const APP_NAME = "DIARY";

const INITIAL_STATE = {
  records: [],
  editItem: true
}

export function diaryReducer( state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOAD_FROM_STORAGE: {
      const  fromStorage = JSON.parse(localStorage.getItem(APP_NAME));
      if (fromStorage) {
        return {
          ...state,
          ...fromStorage
          
        }  
      }
    }
    case SAVE_TO_LOCAL_STORAGE: {
      localStorage.setItem(APP_NAME, JSON.stringify(state))
      return {
        ...state
      }
    }
    
    case  CHANGE_CURRENT_RECORD: {
      return {
        ...state,
        currentRecord: {...action.record}
      }
    }

    case CREATE_RECORD: {
      const id = uuid();
      const newRecord = { id, 
        name: "", 
        content: "",
        createdAt: "",
        changeAt: "",
        compileItem: "" };
      let date = new Date();
      const createdAt = date.toLocaleDateString() + " " + date.getHours() + ":"+ date.getMinutes();
      newRecord.createdAt = createdAt;
      return {
        ...state,
        records: [...state.records, newRecord],
        currentRecord: newRecord,
        editItem: true,
      }
    }
    case EDIT_COMPILE_ITEM: {
      return {
        ...state,
        editItem: true,
      }
    }

    case EDIT_RECORD: {
      const record = action.record;
      const { recordId } = record;
      const _records = state.records;
      let editRecord = _records.find( ({ id }) => id === state.currentRecord.id );
      Object.assign(editRecord, record);
      return {
        ...state,
        records: [..._records],
        currentRecord: {...editRecord},
        editItem: false

      }
    }
    case DELETE_ITEM: {
      let _records = [...state.records];
      const deletedIndex = _records.findIndex( ({id}) => id === action.id );
      _records.splice( deletedIndex, 1);
      return {
        ...state,
        records: [..._records],
        currentRecord: _records[deletedIndex - 1]
      }

    }
    default: {
      return state
    }
  }
} 