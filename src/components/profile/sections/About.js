import React from 'react';

export default function About(props){
	return(
		 <div className="tab-pane py-3 fade" id="home" role="tabpanel" aria-labelledby="home-tab">
             <h6 className="text-uppercase font-weight-light text-secondary">
                 Contact Information
             </h6>
             <dl className="row mt-4 mb-4 pb-3">
                 <dt className="col-sm-3">Phone</dt>
                 <dd className="col-sm-9">+1 123 456 78900</dd>
                 
                 <dt className="col-sm-3">Home address</dt>
                 <dd className="col-sm-9">
                     <address className="mb-0">
                         2983 Heavner Court<br/>
                         Garden City, NY 11530
                     </address>
                 </dd>
                            
                 <dt className="col-sm-3">Email address</dt>
                 <dd className="col-sm-9">
                     <a href="mailto:aang.is.kefy@gmail.com">aang.is.kefy@gmail.com</a>
                 </dd>
             </dl>
                        
             <h6 className="text-uppercase font-weight-light text-secondary">
                 Basic Information
             </h6>
             <dl className="row mt-4 mb-4 pb-3">
                 <dt className="col-sm-3">Birthday</dt>
                 <dd className="col-sm-9">January 21, 1991</dd>
                            
                 <dt className="col-sm-3">Gender</dt>
                 <dd className="col-sm-9">Male</dd>
             </dl>
        </div>
	)
}