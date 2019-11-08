import React,{Component} from 'react';
import WallPosts from './WallPosts';
import WallInput from './WallInput';


export default class WallTimeline extends Component{
	render(){
		return(
		  <div>
        <WallInput placeholder={"What's on your mind today?"}  />
        <WallPosts />
        <WallPosts />
        <WallPosts />
        <WallPosts />
      </div>
		)
	}
}