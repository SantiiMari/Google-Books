import React from "react";
import BookResult from "./BookResults";
import ResultsContainer from './ResultsContainer';

function ResultsContainer(props) {
if (props.path === '/'){
return(
<div class="jumbotron">

  <h2 class="display-4">Results</h2>
  <p class="lead">Info below</p>
  <hr class="my-4"/>
  <div id='resultsContainer'>
  {props.bookData.map((book) => {
    const bookInfo = book.volumeInfo;
                 return <BookResult
                 title={bookInfo.title}
                 authors={bookInfo.authors}
                 description={bookInfo.description}
                 link={bookInfo.canonicalVolumeLink}
                 path={props.path}
                 key={book.id}/>
  })}
  </div>
  );
} else if(props.path === "/saved") {
         if (props.savedBooks.length > 0) {
             return(
                 <div id="resultsContainer">
                     <h3>Saved Books</h3>
                     {props.savedBooks.map((book) => {
                         return <BookResult
                         title={book.title}
                         authors={book.authors}
                         description={book.description}
                         link={book.link}
                         id={book._id}
                         path={props.path}
                         key={book._id}/>
                     })}
                 </div>
             );
         } else {
             return (
                 <div id="resultsContainer">
                     <h3>Saved Books!</h3>
                     <p>Nothing yet....</p>
                 </div>
             );
</div>
)
         }
}


export default ResultsContainer;
