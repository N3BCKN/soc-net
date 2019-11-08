import React,{Component} from 'react';

export default class WallInput extends Component{
	render(){
    const placeholder = this.props.placeholder;
		return(
		 <div className="panel profile-info">
          <form>
              <textarea className="form-control p-text-area" rows="3" placeholder={placeholder}></textarea>
          </form>
          <footer className="panel-footer">
              <button type="button" className="btn btn-info pull-right btn-panel">
              	<span className="panel-btn-text">Post</span>
              </button>
              <ul className="nav nav-pills">
                  <li className="p-3"><a href="#"><i className="fa fa-map-marker"></i></a></li>
                  <li className="p-3"><a href="#"><i className="fa fa-camera"></i></a></li>
                  <li className="p-3"><a href="#"><i className=" fa fa-film"></i></a></li>
                  <li className="p-3"><a href="#"><i className="fa fa-microphone"></i></a></li>
              </ul>
          </footer>
      </div>
		)
	}
}