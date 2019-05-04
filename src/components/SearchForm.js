// import React, {Component} from 'react';


// export default class SearchForm extends Component{
//     render(){
//         return(
//             <div id='search'>
//                 <form id='myform'>
//                     <div classname='input-field'>
//                         <input type='search' id='books'></input>
//                         <label for='search'><h2>Type in a Book Above</h2></label>
//                     </div>
//                 <button class='btn red'>Search Books!</button>
//                 </form>
//                 <div classname='results'/>
//             </div>
            

//         )
//     }

// }

    
import React from "react";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3>Book Search</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter a book:</label>
                <br></br>
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title" required/>
                <br></br>
                <button className="btn red" type="submit" onClick={(e) => props.handleSearchClick(e)}>Search Books</button>
            </form>
        </div>
    );
}

export default SearchForm;

