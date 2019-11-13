import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer(){
	return(

<footer className="page-footer font-small special-color-dark pt-4">


  <div className="container">

  	<ul className="list-unstyled list-inline text-center py-2">
	    <li className="list-inline-item">
	      <h5 className="mb-1">Register for free</h5>
	    </li>
	    <li className="list-inline-item">
	      <Link to="/" className="btn btn-outline-success btn-rounded ">Sign up!</Link>
	    </li>
  	</ul>

  	<hr/>

    <ul className="list-unstyled list-inline text-center">
      <li className="list-inline-item">
        <Link to="/" className="btn-floating btn-fb mx-1">
          <i className="fa fa-lg fa-facebook-f"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to="/" className="btn-floating btn-tw mx-1">
          <i className="fa fa-lg fa-twitter"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to="/" className="btn-floating btn-gplus mx-1">
          <i className="fa fa-lg fa-instagram"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to="/" className="btn-floating btn-li mx-1">
          <i className="fa fa-lg fa-linkedin"></i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to="/" className="btn-floating btn-dribbble mx-1">
          <i className="fa fa-lg fa-dribbble"> </i>
        </Link>
      </li>
    </ul>
  

  </div>



  <div  className="footer-copyright text-center py-3">© 2019 CopyLeft:
    <Link to="/"> MDBootstrap.com</Link>
  </div>


</footer>

	)
} 