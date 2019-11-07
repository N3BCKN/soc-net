import React from 'react';

export default function Header(){
	return(
		<nav class="navbar navbar-expand-lg navbar-light">
		  <a class="navbar-brand" href="#">Soc-Net</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <form class="form-inline my-2 my-lg-0">
		      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
		      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		  </form>

		   <ul class="navbar-nav ml-auto nav-flex-icons">
		   	   <li class="nav-item notification">
		        <a class="nav-link waves-effect waves-light">0 &nbsp;
		          <i class="fa fa-lg fa-bell"></i>
		        </a>
		      </li>
		      <li class="nav-item notification">
		        <a class="nav-link waves-effect waves-light">0 &nbsp;
		          <i class="fa fa-lg fa-envelope"></i>
		        </a>
		      </li>
		      <li class="nav-item avatar dropdown">
		        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
		          aria-haspopup="true" aria-expanded="false">
		          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="rounded-circle z-depth-0"
		            alt="avatar image" height={40} width={40}/>
		        </a>
		        <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
		          aria-labelledby="navbarDropdownMenuLink-55">
		          <a class="dropdown-item" href="#">Action</a>
		          <a class="dropdown-item" href="#">Another action</a>
		          <a class="dropdown-item" href="#">Something else here</a>
		        </div>
		      </li>
		    </ul>
		</nav>
	)
}