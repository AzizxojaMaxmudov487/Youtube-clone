import React , {useState} from 'react';
import logo from './images/logo1.png';
import functions from './images/functions.png';

const Search = ({ onSubmit }) => {
     const [searchTerm, setSearchTerm] = useState("");
     const handleChange = (event) => setSearchTerm(event.target.value);

     const onkeyPress = (event) => {
          if (event.key === "Enter") {
               onSubmit(searchTerm);
          }
     }

     return (
          <>
               <div className="header">
                    <a href="/" className="brand">
                         <img src={logo} alt="logo" className="logoBrand" />
                    </a>
                    <input 
                         type="text"
                         fullWidth
                         placeholder="Search.."
                         value={searchTerm}
                         onChange={handleChange}
                         onKeyPress={onkeyPress}
                    />
                    <div className="icons">
                         <img 
                              src={functions} 
                              alt="functions" 
                              className="functions"
                         />
                    </div>
               </div>
          </>
     );
};

export default Search;