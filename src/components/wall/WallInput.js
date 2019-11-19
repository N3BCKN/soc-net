import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class WallInput extends Component{
	render(){
    const placeholder = this.props.placeholder;
    console.log(this.props.inputValue);
		return(
		 <div className="panel profile-info">
          <form onSubmit={this.props.newPost}>
              <textarea 
               defaultValue={this.props.inputValue}
               name="content"
               onChange={this.props.onChangeValue}
               className="form-control p-text-area" 
               rows="3" 
               placeholder={placeholder}></textarea>
          <footer className="panel-footer">
              <button type="submit" className="btn btn-info pull-right btn-panel">
              	<span className="panel-btn-text">Post</span>
              </button>
              <ul className="nav nav-pills">
                  <li className="p-3"><Link to="/"><i className="fa fa-map-marker"></i></Link></li>
                  <li className="p-3"><Link to="/"><i className="fa fa-camera"></i></Link></li>
                  <li className="p-3"><Link to="/"><i className=" fa fa-film"></i></Link></li>
                  <li className="p-3"><Link to="/"><i className="fa fa-microphone"></i></Link></li>
              </ul>
          </footer>
         </form>
      </div>
		)
	}
}