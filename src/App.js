import React , {Component} from 'react';
import './App.css';
import {data} from './firebaseConnect' // import thông tin về dữ liệu của firebase đang xét
import  data_firebase from 'firebase' 
import NoteList from './NoteList';
import FormAdd from './FormAdd';
import Navbar from './Navbar'
import EditForm from './EditForm';
import {connect} from 'react-redux'
import Footer from './Footer';
import About from './About';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      dataForNoteList:[],
      positionItem:true,
    }
  }
  componentWillMount(){   // SỬ DỤNG COMPONENTWILLMOUNT ĐỂ LẤY KẾT QUẢ STATE ĐẦU TIÊN TRƯỚC KHI RENDER()
    data.on('value',(dataFromFirebase)=> {// lấy giá trị từ đường dẫn data truyền vào 1 arrF
      var arrayStoreValue = []            // Khai báo 1 array rỗng để lưu giá trị
     dataFromFirebase.forEach(elements => {// (vì dataFromFirebase 1 obj với 2 phần là key và val() nên k dùng map())
       const key = elements.key            // duyệt dataFromFirebase và gán giá trị cho các phần tử của mảng
       const title = elements.val().title
       const time = elements.val().time
       const date = elements.val().date
       const code = elements.val().code
       const room = elements.val().room
       arrayStoreValue.push({             
         key:key,                       // đẩy các giá trị vào trong array Rỗng
         title:title,
         time:time,
         date:date,
         code:code,
         room:room
       }) 
     })
     this.setState({
       dataForNoteList:arrayStoreValue  // sau đó gán cho state
     })
    })
  }
  getDataFromFirebase = () => { // Xuất dữ liệu ra NodeList
      return this.state.dataForNoteList.map((value,key) => {
              return (
                <NoteList 
                key={key}
                nodeNumber={key}
                subject={value.title}
                code={value.code}
                time={value.time}
                date={value.date}
                room={value.room}
                noteInfo={value}
                
                />
              )
    })
  } 
resizeItem = () => {
  this.setState({
    positionItem:!this.state.positionItem
  })
}
renderLayout = () =>{
  if(this.state.positionItem == true){
    return (
      <div >
      <Navbar/>
      <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-3" style={{textAlign: 'center'}}>Semester Exam Schedule</h1>
    </div>
  </div>
      <div className ="container" >
        <div className = "row">
        <div className="col-12">
          {this.getDataFromFirebase()}
        </div>
        </div>
      </div>
      <div className="container">  
      </div>
      <img className="Add1"src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/add-circle-green-512.png" onClick={() =>this.resizeItem()}/>
      <br/>
        <hr/>
        <br/>
      <Footer/>
    </div>
    )
  }
  else {
    return (
      <div >
        <Navbar/>
        <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-3" style={{textAlign: 'center'}}>Semester Exam Schedule</h1>
    </div>
  </div>
        <div className ="container" >
          <div className = "row">
          <div className="col-8">
            {this.getDataFromFirebase()}
          </div>
            <FormAdd/>  
          </div>
        </div>
        <img className="Add2"src="https://cdn1.iconfinder.com/data/icons/toolbar-signs/512/cancel-512.png" onClick={() =>this.resizeItem()}/>
        <div className="container">  
        </div>
        <br/>
        <hr/>
        <br/>
        <Footer/>
      </div>

    )}
}
renderFormEdit = () =>{
  if(this.props.stateForEdit==false){
    return (
      <div >
        <Navbar/>
        <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-3" style={{textAlign: 'center'}}>Semester Exam Schedule</h1>
    </div>
  </div>
        <div className ="container" >
          <div className = "row">
          <div className="col-12">
          <EditForm/>
          </div> 
          </div>
          </div>
          </div>
      )
  }
  else return this.renderLayout()
}

renderPage = () =>{
  if(this.props.stateRenderPage == true){
    return this.renderFormEdit()
  }
  else return (
    <div className="aboutme">
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  )
}
  render() {
    return (
        <div>
          {this.renderPage()}
        </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { //this.props.stateForEdit
    stateForEdit:state.stateForEdit,
    stateRenderPage:state.stateRenderPage
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch({type:"CHANGE_EDIT_STATUS"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

