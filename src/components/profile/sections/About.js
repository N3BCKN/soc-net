import React from 'react';

export default function About(props){
	return(
		 <div class="tab-pane py-3 fade" id="home" role="tabpanel" aria-labelledby="home-tab">
             <h6 class="text-uppercase font-weight-light text-secondary">
                 Contact Information
             </h6>
             <dl class="row mt-4 mb-4 pb-3">
                 <dt class="col-sm-3">Phone</dt>
                 <dd class="col-sm-9">+1 123 456 78900</dd>
                 
                 <dt class="col-sm-3">Home address</dt>
                 <dd class="col-sm-9">
                     <address class="mb-0">
                         2983 Heavner Court<br/>
                         Garden City, NY 11530
                     </address>
                 </dd>
                            
                 <dt class="col-sm-3">Email address</dt>
                 <dd class="col-sm-9">
                     <a href="mailto:aang.is.kefy@gmail.com">aang.is.kefy@gmail.com</a>
                 </dd>
             </dl>
                        
             <h6 class="text-uppercase font-weight-light text-secondary">
                 Basic Information
             </h6>
             <dl class="row mt-4 mb-4 pb-3">
                 <dt class="col-sm-3">Birthday</dt>
                 <dd class="col-sm-9">January 21, 1991</dd>
                            
                 <dt class="col-sm-3">Gender</dt>
                 <dd class="col-sm-9">Male</dd>
             </dl>
        </div>
	)
}