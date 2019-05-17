import React, { Component } from 'react';
import {connect} from 'react-redux'

class EditForm extends Component {
  constructor(props){
    super(props)
    this.state={
      gtitle:"", // Khai báo các default state
      gcode:"",
      gtime:"",
      gdate:"",
      groom:"",
      gkey:""

    }
  }
  componentWillMount(){ // Sử dụng componentWillMount để load giá trị defaul cho các state
    if(this.props.dataFromStore){
      this.setState({
        gtitle:this.props.dataFromStore.title,
        gcode:this.props.dataFromStore.code,
        gtime:this.props.dataFromStore.time,
        gdate:this.props.dataFromStore.date,
        groom:this.props.dataFromStore.room,
        gkey:this.props.dataFromStore.key
      })
    }
  }
  isChange = (event) =>{
    const getName = event.target.name
    const getValue = event.target.value
    this.setState({
      [getName]:getValue
    })
  }
  getData = () =>{ // lấy dữ liệu và gửi lên store
    var dataItemToStore = {}
    dataItemToStore.title = this.state.gtitle
    dataItemToStore.code = this.state.gcode
    dataItemToStore.time = this.state.gtime
    dataItemToStore.date = this.state.gdate
    dataItemToStore.room = this.state.groom
    dataItemToStore.key = this.state.gkey
    this.props.DataFromEditFormToStore(dataItemToStore)
    this.props.ClickToChangeStatusEdit()
    alert("Edit Success !!!")
  }
    render() {
      // console.log("Subject: "+ this.state.gtitle +" || Code: "+ this.state.gcode +" || Time: "+ this.state.gtime +" || Date: "+ this.state.gdate +" || Room: "+ this.state.groom)
        return (
            <div className="leftContent col mt-3">
  <div id="accordion" role="tablist" aria-multiselectable="true">
    <div className="card">
      <div className="card-header" role="tab" id="headingOne" style={{backgroundColor: 'white'}}>
        <h4 className="card-title" style={{textAlign: 'center'}}>
          <a data-toggle="collapse" data-parent="#accordion" href="#ids" aria-expanded="true" aria-controls="collapseOne" style={{textDecoration: 'none'    }}>
          <input className="noforcus" name="gtitle" defaultValue={this.props.dataFromStore.title} type="text" placeholder="Edit Subject Here..." style={{border: 'none',textAlign:'center'}} onChange={(event) => this.isChange(event)}/>
          </a>  
        </h4>
      </div>
      
        <table className="table table-bordered">
          <thead>
            <tr>
              <th colSpan={2} style={{backgroundColor: '#4CAF50', textAlign: 'center', fontSize: '30px', fontWeight: 'lighter'}}>Information</th>
            </tr>
          </thead>
          <tbody style={{textAlign: 'center'}}>
            <tr>
              <td>Code</td>
              <td><input className="noforcus" name="gcode" defaultValue={this.props.dataFromStore.code} type="text" placeholder="Edit Code Here..." style={{border: 'none'}} onChange={(event) => this.isChange(event)}/></td>
            </tr>
            <tr>
              <td>Time</td>
              <td><input className="noforcus" name="gtime" defaultValue={this.props.dataFromStore.time} type="text" placeholder="Edit Time Here..." style={{border: 'none'}} onChange={(event) => this.isChange(event)}/></td>
            </tr>
            <tr>
              <td>Date</td>
              <td><input className="noforcus" name="gdate" defaultValue={this.props.dataFromStore.date} type="text" placeholder="Edit Date Here..." style={{border: 'none'}} onChange={(event) => this.isChange(event)}/></td>
            </tr>
            <tr>
              <td>Room</td>
              <td><input className="noforcus" name="groom" defaultValue={this.props.dataFromStore.room} type="text" placeholder="Edit Room Here..." style={{border: 'none'}} onChange={(event) => this.isChange(event)}/></td>
            </tr>
            <tr>
              <td className="btnSpecial btn-success" onClick={()=> this.getData()}>Save</td>
              <td className="btnSpecial btn-danger" onClick={()=> this.props.ClickToChangeStatusEdit()}>Cancel</td>
            </tr>
          </tbody>
        </table>
     
    </div>
  </div>
  <br/>
  <br/>
  <br/>
</div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        stateForEdit: state.stateForEdit,
        dataFromStore: state.dataFromNoteList
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ClickToChangeStatusEdit: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        },
        DataFromEditFormToStore: (dataItemToStore) => {
            dispatch({type:"EDIT_DATA",dataItemToStore})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditForm)