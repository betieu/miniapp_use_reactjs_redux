import {data} from './firebaseConnect'

var redux = require('redux');
const noteInitialState = {
    dataConnect:"Done",
    stateForEdit:true,
    dataFromNoteList:{},
    stateRenderPage:true,
    stateCatalog:1
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
        // console.log("Add Success !!: "+ action.dataFromFormAdd)   
        data.push(action.dataFromFormAdd)
        alert("Add Success !!!")
        return state
        
        case "CHANGE_EDIT_STATUS":
        return {...state,stateForEdit:!state.stateForEdit}

        case "GET_DATA_FROM_NOTELIST_WHEN_CLICK":
        return {...state,dataFromNoteList:action.getdataFromNoteList}

        case "EDIT_DATA":
        data.child(action.dataItemToStore.key).update({
            title:action.dataItemToStore.title,
            code:action.dataItemToStore.code,
            time:action.dataItemToStore.time,
            date:action.dataItemToStore.date,
            room:action.dataItemToStore.room
        })
        return state
        
        case "REMOVE_DATA":
        data.child(action.getDataToRemove.key).remove()
        return state

        case "RENDER_HOME":
        return {...state,stateRenderPage:true}

        case "RENDER_ABOUT":
        return {...state,stateRenderPage:false}

        case "CATALOG_ABOUT":
        return {...state,stateCatalog:1}

        case "CATALOG_SKILL":
        return {...state,stateCatalog:0}

        case "CATALOG_CONTACT":
        return {...state,stateCatalog:-1}

        default:
        return state
    }
}

var store = redux.createStore(allReducer);
export default store;