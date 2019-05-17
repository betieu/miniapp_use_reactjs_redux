import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteList extends Component {
  constructor(props){
    super(props)
  }
  getInfoWhenClickToEdit = () =>{
    this.props.ClickToChangeStatusEdit()
    this.props.GetdataFromNoteToStore(this.props.noteInfo)
  
  }
  getInfoWhenClickToRemove = () =>{
    var confirmDelete = window.confirm("Delete Note ???");
      if(confirmDelete == true){
        this.props.GetdataToRemove(this.props.noteInfo)
      }
      else{
        return null
      }
  }
    render() {
        return (
<div className="leftContent col mt-3">
  <div id="accordion" role="tablist" aria-multiselectable="true">
    <div className="card">
      <div className="card-header" role="tab" id="headingOne">
        <h4 className="card-title" style={{textAlign: 'center'}}>
          <a data-toggle="collapse" data-parent="#accordion" href={"#id"+this.props.nodeNumber} aria-expanded="true" aria-controls="collapseOne" style={{textDecoration: 'none'}}>
            {this.props.subject} 
          </a>  
        </h4>
      </div>
      <div id={"id"+this.props.nodeNumber} className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th colSpan={2} style={{backgroundColor: '#4CAF50', textAlign: 'center', fontSize: '30px', fontWeight: 'lighter'}}>   Information</th>
            </tr>
          </thead>
          <tbody style={{textAlign: 'center'}}>
          <div> 
          </div>
            <tr>
              <td>Code</td>
              <td>{this.props.code}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>{this.props.time}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{this.props.date}</td>
            </tr>
            <tr>
              <td>Room</td>
              <td>{this.props.room}</td>
            </tr>
            <tr>
              <td className="btnSpecial btn-warning" onClick={()=>this.getInfoWhenClickToEdit()}>Edit</td>
              <td className="btnSpecial btn-danger" onClick={() => this.getInfoWhenClickToRemove()}>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stateForEdit: state.stateForEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ClickToChangeStatusEdit: () => {
      dispatch({type:"CHANGE_EDIT_STATUS",})
    },
    GetdataFromNoteToStore: (getdataFromNoteList) =>{
      dispatch({type:"GET_DATA_FROM_NOTELIST_WHEN_CLICK",getdataFromNoteList})
    },
    GetdataToRemove: (getDataToRemove) => {
      dispatch({type:"REMOVE_DATA",getDataToRemove})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
