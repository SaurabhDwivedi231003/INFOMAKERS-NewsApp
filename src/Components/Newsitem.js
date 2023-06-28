import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageurl , newsUrl , author , date , source} = props;

    return (
      <div className="my-3">
        <div className="card" > 
          <div style={{display : 'flex' , justifyContent : 'flex-end' , position: 'absolute' , right: '0'}} >
        <span className=" badge rounded-pill bg-danger" >  {source} </span>
          </div>
        
          <img src={!imageurl?"https://cdn.mos.cms.futurecdn.net/8CcjvEC3tfMRDn4upTxeuk-1200-80.jpg" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{!description?"This news is intresting" : description}</p>
            <p className="card-text"> <small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small> </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn" style={{ color : '#EDF5F9', backgroundColor : '#1280C0'}}>
              Read More
            </a> 
          </div>
        </div>  
      </div>  
    );
  } 


export default NewsItem;

//{!imageurl?"https://cdn.mos.cms.futurecdn.net/8CcjvEC3tfMRDn4upTxeuk-1200-80.jpg" : imageurl}
// jab jab NOT of Null ho tab tab ye image show
// mtlb json me null mila toh ye image dedo
// {!description?"This news is intresting" : description}
// khali {description} bhi kaam kr rha tha but humne null wali condition yha bhi daal di.

// <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
// use  rel="noreferrer" for removing an error 

//  <p className="card-text"> <small className="text-muted">By {!author?"Unknown":author} on {date} </small> </p>
// above line is for showig author and date published , author function is written using ternary operator show condition that if author not found then return unknown
// date is written like this {new Date(date).toGMTString()} to make it in GMT format

//ADDING BADGE FROM BOOTSTRAP 
// <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 99+ 
  //          <span class="visually-hidden">Undread messages </span>
    //        </span>   //NOT USING HERE 

    //BUT we are just using         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">  {source} </span>

            
