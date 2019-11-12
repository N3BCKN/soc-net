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
	      <a href='' className="btn btn-outline-success btn-rounded ">Sign up!</a>
	    </li>
  	</ul>

  	<hr/>

    <ul className="list-unstyled list-inline text-center">
      <li className="list-inline-item">
        <a href='' className="btn-floating btn-fb mx-1">
          <i className="fa fa-lg fa-facebook-f"> </i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href='' className="btn-floating btn-tw mx-1">
          <i className="fa fa-lg fa-twitter"> </i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href='' className="btn-floating btn-gplus mx-1">
          <i className="fa fa-lg fa-instagram"> </i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href='' className="btn-floating btn-li mx-1">
          <i className="fa fa-lg fa-linkedin"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href='' className="btn-floating btn-dribbble mx-1">
          <i className="fa fa-lg fa-dribbble"> </i>
        </a>
      </li>
    </ul>
  

  </div>



  <Link to="/main" className="footer-copyright text-center py-3">© 2019 CopyLeft:
    <p> Soc-Net.doc</p>
  </Link>


</footer>

	)
} 