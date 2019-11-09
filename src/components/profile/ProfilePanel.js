import React, {Component} from 'react';
import WallTimeline from '../wall/WallTimeline';

//SECTIONS
import About from './sections/About';
import Profile from './sections/Profile';
import Projects from './sections/Projects';
import Groups from './sections/Groups';
import Friends from './sections/Friends';

export default class ProfilePanel extends Component{
	render(){
		return(
<div className="container">
<div className="parallax"><h2 className="text-white pt-5 text-center">Harry J. Hamilton</h2></div>
<div className="container py-4 my-2 profile">
    <div className="row">
        <div className="col-md-4 pr-md-5">
            <img className="w-100 rounded-circle border" src="https://cdn.bootstrapsnippet.net/assets/image/dummy-avatar.jpg" />
            <div className="pt-4 mt-2">
                <section className="mb-4 pb-1">
                    <h3 className="h6 font-weight-light text-secondary text-uppercase">Work Experiences</h3>
                    <div className="work-experience pt-2">
                        <div className="work mb-4">
                            <strong className="h5 d-block text-secondary font-weight-bold mb-1">Prodesign Inc</strong>
                            <strong className="h6 d-block text-warning mb-1">Front End Developer</strong>
                            <p className="text-secondary">Southern Street Floral Park, NY 11001</p>
                        </div>
                        <div className="work mb-4">
                            <strong className="h5 d-block text-secondary font-weight-bold mb-1">Blue Tech</strong>
                            <strong className="h6 d-block text-warning mb-1">Senior Programmer</strong>
                            <p className="text-secondary">George Avenue Mobile, AL 36608</p>
                        </div>
                    </div>    
                </section>
            </div>
        </div>
        <div className="col-md-8">
            <div className="d-flex align-items-center">
                <h2 className="font-weight-bold m-0">
                    Harry J. Hamilton
                </h2>
                <address className="m-0 pt-2 pl-0 pl-md-4 font-weight-light text-secondary">
                    <i className="fa fa-map-marker"></i>
                    Garden City, NY
                </address>
            </div>
            <p className="h5 text-primary mt-2 d-block font-weight-light">
                Full-Stack Programmer
            </p>
            <p className="lead mt-4">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            <section className="d-flex mt-5">
                <button className="btn btn-light mr-3 mb-3">
                    <i className="fa fa-comments"></i>
                    Private Message
                </button>
                <button className="btn btn-success mr-3 mb-3">
                    <i className="fa fa-warning"></i>
                    Report User
                </button>
                <button className="btn btn-primary mb-3">
                    <i className="fa fa-check"></i>
                    Add to friends
                </button>
            </section>
            <section className="mt-4">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                     <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#wall" role="tab" aria-controls="home" aria-selected="true">
                            Wall
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                            Reviews    
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                            Recent Projects
                        </a>
                    </li>
                     <li className="nav-item">
                        <a className="nav-link" id="groups-tab" data-toggle="tab" href="#groups" role="tab" aria-controls="groups" aria-selected="false">
                            Groups
                        </a>
                    </li>
                     <li className="nav-item">
                        <a className="nav-link" id="friends-tab" data-toggle="tab" href="#friends" role="tab" aria-controls="friends" aria-selected="false">
                            Friends
                        </a>
                    </li>
                </ul>
                <div className="tab-content py-4" id="myTabContent">
                    {/*PROFILE TABS*/}
                    <div className="tab-pane fade show active" id="wall" role="tabpanel" aria-labelledby="wall-tab">
                        <WallTimeline />
                    </div>
                    <About />
                    <Profile />
                    <Projects />
                    <Groups />
                    <Friends/>
                </div>
            </section>
        </div>
    </div>
    </div>
    </div>
		)
	}
}