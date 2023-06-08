import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    let { title, description, imageurl , newsUrl} = this.props;

    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageurl?"https://cdn.mos.cms.futurecdn.net/8CcjvEC3tfMRDn4upTxeuk-1200-80.jpg" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{!description?"This news is intresting" : description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a> 
          </div>
        </div>  
      </div>
    );
  } 
}  

export default NewsItem;

//{!imageurl?"https://cdn.mos.cms.futurecdn.net/8CcjvEC3tfMRDn4upTxeuk-1200-80.jpg" : imageurl}
// jab jab NOT of Null ho tab tab ye image show
// mtlb json me null mila toh ye image dedo
// {!description?"This news is intresting" : description}
// khali {description} bhi kaam kr rha tha but humne null wali condition yha bhi daal di.

// <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
// use  rel="noreferrer" for removing an error 