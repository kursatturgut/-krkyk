import React from 'react'

import { TabMenu } from './tabmenu'
import "./navbar.css"

export const Navbar = () => {
  return (
   /*  <!-- Navbar Start --> */
   <>
    <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
            <a href="" class="navbar-brand font-weight-bold text-secondary" style={{fontSize: 50}}>
                <i class="flaticon-043-teddy-bear"></i>
                <span className="text-primary">ŞÜKRÜ KÜYÜK</span>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-space-around " id="navbarCollapse">
               
              
            <TabMenu/>
               
                
                <a href="" class="btn btn-primary px-4">Join Class</a>
            </div>
        </nav>
    </div>
   
   




   


   
     
    </>
  )
}
