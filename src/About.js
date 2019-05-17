import React, { Component } from 'react';
import {connect} from 'react-redux';

class About extends Component {
  checkRender = () =>{
    if(this.props.stateCatalog == 1){
      return (
        <div className="right container">
      <div className="name">
        <h2>TRINH NGOC HUY</h2>
        <h4 className="title">Web Designer / Web Developer</h4>
      </div>
      <div className="aboutcontent container">
        <div className="icons" />
        <div className="space" />
        <h6>ABOUT ME</h6>
      </div>
      <div className="paraghrap">
        <p>I'm student. I'm studing Information Technology in University of Enginerring and Technology (UET), VietNam National University</p>
      </div>
      <div className="aboutcontent container">
        <div className="icons" />
        <div className="space" />
        <h6>PERSONAL INFO</h6>
      </div>
      <div className="equipment">
        <div className="circle">
        </div>
        <div className="line">
        </div>
      </div>
      <table className="tableinabout">
        <tbody><tr>
            <th />
            <th />
          </tr>
          <tr>
            <td>Name</td>
            <td>Trinh Ngoc Huy</td>
          </tr>
          <tr>
            <td>Birthday</td>
            <td>1998.10.30</td>
          </tr>
          <tr>
            <td>PlaceOfBirth</td>
            <td>Thanh Hoa</td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td>Viet Nam</td>
          </tr>
        </tbody></table>
      <div className="shape">
        <div className="shape1" />
        <div className="shape2" />
      </div>		
    </div>
      )
    }
    if(this.props.stateCatalog==0){
      return (
        <div className="right container">
        <div style={{marginTop: '100px'}}>	
  <h2 style={{textDecoration: 'underline', textAlign: 'left'}}>My Skill:</h2>
  <br />
  <ul style={{textAlign: 'left'}}>
    <li>Basic knowledge about algorithms, database</li>
    <li>
      <p>Basic knowledge about Web</p>
      <ul style={{textDecoration: 'none'}}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>BootStrap</li>
        <li>React/Redux</li>
      </ul>
    </li>
    <li>
      <p>My Product</p>
      <ul>
        <li>Todo-App with functions to add, edit, delete content associated with Firebase database using React/Redux</li>
      </ul>
    </li>
  </ul>
</div>
</div>
      )
    }
    if(this.props.stateCatalog==-1){
      return (
        <div className="right container">
        <div className="container" style={{position: 'relative', top: '100px', left: '-30px'}}>
  <img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/40272872_2103110566620901_5248821825261010944_n.jpg?_nc_cat=107&_nc_oc=AQklqIK9Nu7qm090t4FNHEXqsIa6nXC7K2VlLZqAU1GzO0FQ0nsbAqZedutoJ4X4yTI&_nc_ht=scontent.fhan2-3.fna&oh=65e44df829896a6d985d8bcfe3e3c541&oe=5D61CABD" alt="myprofile" style={{width: '200px', height: '200px', borderRadius: '100px'}} />
  <table className="tableinabout" style={{position: 'relative', top: '30px', left: '30px'}}>
    <tbody><tr>
        <td style={{marginRight:20}}><i className="fab fa-facebook" style={{fontSize: '30px'}} /></td>
        <td>fb.com/netmana.tnh</td>
      </tr>
      <tr>
        <td style={{marginRight:20}}><i className="fas fa-envelope" style={{fontSize: '30px', position: 'relative', top: '5px'}} /></td>
        <td>netmana.tnh@gmail.com</td>
      </tr>
      <tr>
        <td style={{marginRight:20}}><i className="fas fa-mobile-alt" style={{fontSize: '30px', position: 'relative', left: '-7px', top: '5px'}} /></td>
        <td>032.556.0666</td>
      </tr>
    </tbody></table>
</div>
</div>

      )
    }
  }
    render() {
        return (
          <div className="page container">
  <div className="page2 ">
    <div className="left">
      <div className="about" style={{backgroundColor: 'orange'}}> 
      <h6 className="btn btn-block" onClick={() => this.props.renderAbout()}><a href="#" style={{color: 'black'}}>ABOUT</a></h6>
      </div>
      <div className="skill">
        <h6 className="btn btn-block" onClick={() => this.props.renderSkill()}><a href="#" style={{color: 'black'}}>SKILL</a></h6>
      </div>
      <div className="contact">
      <h6 className="btn btn-block" onClick={() => this.props.renderContact()}><a href="#" style={{color: 'black'}}>CONTACT</a></h6>
      </div>
    </div>
    {/* between left and right colum */}
          {this.checkRender()}
    {/* State1ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
  </div>
</div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stateCatalog: state.stateCatalog
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    renderAbout: () => {
      dispatch({type:"CATALOG_ABOUT"})
    },
    renderSkill: () => {
      dispatch({type:"CATALOG_SKILL"})
    },
    renderContact: () => {
      dispatch({type:"CATALOG_CONTACT"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(About)