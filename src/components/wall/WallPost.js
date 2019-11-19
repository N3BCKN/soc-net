import React,{Component} from 'react';
import WallResponses from './WallResponses';
import {Link} from 'react-router-dom';
import moment from 'moment';
import * as actions from '../../actions';

export default class WallPost extends Component{

  constructor(props) {
    super()

    this.state = {
      isEdited: false,
      editContent: '',
      contentAftedEdition: ''
    };

    this.handleEditChange = this.handleEditChange.bind(this);
    this.submitEdition    = this.submitEdition.bind(this);
  }

  editPost(){
    this.setState({editContent: this.props.post.content, isEdited: !this.state.isEdited});
  }

  handleEditChange(val){
    this.setState({...this.state, editContent: val.target.value});
  }

  submitEdition(){
    const currentUser = this.props.currentUser;
    const content     = this.state.editContent;
    const id          = this.props.post.id;

    actions.editPost(content, currentUser, id)
    .then(response => {
      this.setState({...this.state, contentAftedEdition: this.state.editContent, isEdited: false});
    })
    .catch(err => console.log(err));
  }

	render(){
    const {id, content, created_at, user_id, username, avatar} = this.props.post;
    const currentUser = this.props.currentUser;
    const contentAftedEdition = this.state.contentAftedEdition;

		return(
			<div className="panel pt-4">
        <div className="p-2 panel-body">
          <div className="panel-message">
          <div className="panel-message-header pt-1 pl-3">

            {(user_id == currentUser) &&
              <React.Fragment>
              <button className="btn btn-danger btn-sm pull-right m-1" onClick={() => this.props.handleDelete(id)}>DELETE</button>
              <button className="btn btn-danger btn-sm pull-right m-1" onClick={() => this.editPost()}>EDIT</button>
              </React.Fragment>
            }

            <div className="panel-user-thumb pull-left">
                  <img src={avatar} className="pull-left rounded-circle z-depth-0"
                alt="user avatar" height={55} width={55}/>
              </div>
              <div className="panel-user-details">
                  <h4><Link to={`profile/${user_id}`}>&nbsp; {username}</Link>
                  <br/>
                 <Link to={`/post/${id}`}> <span className="panel-date pl-3">{moment(created_at).fromNow()}</span></Link>
                 <span className="panel-date">&nbsp; near Alaska, USA</span>
                  </h4>

                  <br />
                  
              </div>
          </div>
          { 
            !this.state.isEdited 
            ? <div className="panel-message-content px-2">{contentAftedEdition === '' ? content : contentAftedEdition}</div>
            :  <div><textarea 
            name="editedContent" 
            className="form-control p-text-area" 
            rows="3" 
            value={this.state.editContent}
            onChange={this.handleEditChange}> </textarea>
            <button className="btn btn-success btn-md" onClick={this.submitEdition}> Submit Edition</button>
            </div>
          }

          </div>
          <hr />
          <div className="panel-likes px-3">
          <p><Link to="/">Like</Link>&nbsp;&nbsp;&nbsp;<Link to="/">Response</Link></p>
          <hr />
            <div className="fb-time-action like-info">
                      <Link to="/profile/234">Jhon Due, </Link>
                      <Link to="/profile/234"> Danieal Kalion </Link>
                      <span>&nbsp; and &nbsp;</span>
                      <Link to="/">40 more</Link>
                      <span>&nbsp;like this post &nbsp;</span>
            </div>
          </div>
          <hr />
          {/*RESPONSES*/}
          <WallResponses />
        </div>
    </div>
		)
	}
}