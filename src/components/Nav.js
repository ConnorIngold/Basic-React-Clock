import React from "react";

const Nav = () => {
 return (
   <nav className="header navbar navbar-dark bg-dark">
     <div className="container">
       <div className="row m-auto">
         <i className="fa fa fa-clock-o fa-4x text-white"></i>
         <i className="far fa-clock"></i>
         <div className="h1 ml-3 my-auto text-light" href="/">
           React Clock
         </div>
       </div>
     </div>
   </nav>
 );
}

export default Nav