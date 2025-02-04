// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           Recipe App
//         </Link>
//         <div className="navbar-nav">
//           <Link className="nav-link" to="/add">
//             Add Recipe
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from 'react';
import { Form } from 'react-bootstrap'; // Import Form component

function SearchBar({ setSearchTerm }) {
  return (
    <Form.Control  // Use Form.Control for a styled input
      type="text"
      placeholder="Search by title or ingredient"
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mb-3" // Add some bottom margin for spacing
    />
  );
}

export default SearchBar;