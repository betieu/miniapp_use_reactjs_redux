import React, { Component } from 'react';
import { connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return { // nhận giá trị this.props.dataConnect
    dataProps: state.dataConnect
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {// khai báo hàm addDataConnect nhận vào giá trị item của FormAdd truyền cho Store
    addDataConnect: (dataFromFormAdd) => {
      dispatch({type:"ADD_DATA",dataFromFormAdd})
    }
  }
}
class FormAdd extends Component {
    constructor(props){
        super(props)
        this.state={
            gtitle:"",
            gcode:"",
            gtime:"",
            gdate:"",
            groom:""
        }
    } 
    isChange = (event) => {
        const getName = event.target.name
        const getValue = event.target.value
        this.setState({
            [getName]:getValue
        })
    }
    isClick = (title,code,time,date,room) => {
        var item = {}
        item.title = title
        item.code = code            // gom dữ liệu lại thành 1 obj để gửi cho App
        item.time = time            //
        item.date = date            //
        item.room = room            //
        
        if(item.title == "" || item.code == "" || item.time == "" || item.date == "" || item.room == "" ){
          alert("Oops ! Not Enough Information :(")
        }
        else{
          this.props.addDataConnect(item) 
        }
        
    }
    render() {
        return (
            <div className="rightContent col mt-3">
    <div className="container" style={{border: '1px solid gray', textAlign: 'center', borderRadius: '4px'}}>
    <br/>
    <form className="form-group">
      <h3 className="cc" disabled>New Note</h3>
      <hr/>
      <input type="text" className="form-control" placeholder="Add Subject Here..." name="gtitle" onChange ={(event) => this.isChange(event)} />
      <hr />
      <input type="text" className="form-control" placeholder="Add Code Here..."  name="gcode" onChange ={(event) => this.isChange(event)} />
      <hr />
      {/* <input type="text" className="form-control" placeholder="Add Time Here ..." name="gtime" onChange ={(event) => this.isChange(event)}/> */}
        <select className="form-control" name="gtime" onChange ={(event) => this.isChange(event)} >
          <option value="">---:---</option>
          <option value="14:00">14:00</option>
          <option value="08:00">08:00</option>
        </select>
      <hr />
      <input type="text" className="form-control" placeholder="Add Date Here..." name="gdate" onChange ={(event) => this.isChange(event)} />
      <hr />
      <input type="text" className="form-control" placeholder="Add Room Here..." name="groom" onChange ={(event) => this.isChange(event)} />
      <hr />
      <button type="reset" className="btn btn-block btn-info" onClick = {(a,b,c,d,e) => this.isClick(this.state.gtitle,this.state.gcode,this.state.gtime,this.state.gdate,this.state.groom)}> Save</button>
    {/* </form>	                                                                    // truyền  giá trị vào trong hàm isClick để gom lại thành 1 obj gửi cho AppJS */}
    </form>
  </div>
</div>  
        );
    }
}// this.props.dataProps

export default connect(mapStateToProps,mapDispatchToProps)(FormAdd);