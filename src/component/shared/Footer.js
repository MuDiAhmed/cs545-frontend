import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export default function Footer() {
    return (
       <div>
         <Navbar className="AdminFooterPanel">
        <Container>
             <Navbar.Brand style={{color:"white"}}>All rights Reserved - Follow us on: </Navbar.Brand>
             <Navbar.Toggle />
       </Container>
       
       </Navbar>
       <div>
      <div class="container text-center" >
        <div class="row row-cols-3">
          <div class="col">
            <div >
            </div >
            <div class="h5 ">Get to Know Us</div>
            <div>careers</div> 
            <div>About Zillow </div> 
            <div>Press Center</div> 
            </div>
          <div class="col">
            <div class="h5 ">Make Money With Us</div>
          <div>careers</div> 
            <div>About Zillow </div> 
            <div>Press Center</div> 
          
          </div>
          <div class="col">
            <div class="h5 ">Let us Help You</div>
          <div>careers</div> 
            <div>About Zillow </div> 
            <div>Press Center</div> </div>
         
        </div>
      </div>
    </div>
       </div>
    );
}