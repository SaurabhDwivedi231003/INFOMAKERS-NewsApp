================================NEWS.JS==============================================


title={element.title.slice(0,46)} slice is used to show number words u want */
 <Newsitem  title={element.title?element.title.slice(0,46):""} description={element.description?element.description.slice(0,70):""} imageurl={element.urlToImage} newsUrl= {element.url}/> */
 element.title? , :"" element.description? , :""  ye issliye diya h kuuki maan lo jo json file di h udhar title , descrption kuch b null h toh kya krege  usme problem na aye issiliye likha h Next button me
 onClick={this.handlePreviousClick} ye add krne se hum dusre page pe phuchege but iska function bhi bnanan hoga sath me ' this.' issiliye use kr rhe kuuk
 hum class me kaam kr rhe previous button me : disabled={this.state.page<=1} ye krne se agr phle hi page pe ho toh inactive ho jyega kuuki active rhne ka koi sense nahi h News api walon ne &pageSize naam ka function de rkha h mtlb
 , hum agr ye dekh le ki total article kitne hain supporse 32 , aur page size = 2 set krden mtlb har page me 2 article , toh iska mtlb total 19 pages banege.

 <Spinner/>  : khali ye likhte hain but yha pe hume condtion rkhni  pdegi ki kb ye loading dikhe aur kb nahi issiliye state ki help lege
 {this.state.loading && <Spinner/>} loading k case me 2 cheez humne use ki 1:
 this.setState({loading:true});  mtlb condition true hogi jab load ho rha ho ,
 2:   loading : false  , jab loading nahi rhi hogi we have commented content
 of handlePrevious / next function because we do that by making another
 function that is updateNews. initially it was handlePreviousClick = async ()
 => { neeche ka content cdm se uthaya h bass url ko backtick lgaye hain kuuki
 andr js logic likhna tha page next krn k liye let url =
 `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=733ef8b9aa1245a69a7f4c1c0d28ba78&page=${this.state.page
 - 1}&pageSize=${this.props.pageSize}`; this.setState({loading:true}); let
 data = await fetch(url);  /* promise return krega kuuki humne async use kiya
 h , mtlb iske execute hone ka wait krega */ let parsedData = await
 data.json(); data ko readale banane k liye k parse kro
 console.log(parsedData); this.setState({     page : this.state.page-1,   page
 ko ek se peeche le jane k liye     articles: parsedData.articles,     loading
 : false }) }   same for next also just +1 on next step. Also async
 componentDidMount() {   let url =
 `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=733ef8b9aa1245a69a7f4c1c0d28ba78&page=1&pageSize=${this.props.pageSize}`
 ;   pageSize=20 or this.props.pageSize mtlb ek page me keval 20 articles hi
 honge   this.setState({loading:true});   let data = await fetch(url); promise return krega kuuki humne async use kiya h , mtlb iske execute hone ka wait krega */   let parsedData = await data.json(); data ko readale banane k liye k parse kro  console.log(parsedData);   this.setState({articles:
 parsedData.articles ,        totalArticles: parsedData.totalResults,      ye
 parsedData k sth jo articles , totalResults sab json file ya jo api k andar h
 wahi naam h apne se nahi liye , aur jiske equal bnaya h wo apni mrxi ka h
 loading : false       }); 





=========================================================NEWSITEM.JS================================================================
{!imageurl?"https://cdn.mos.cms.futurecdn.net/8CcjvEC3tfMRDn4upTxeuk-1200-80.jpg" : imageurl}
jab jab NOT of Null ho tab tab ye image show
mtlb json me null mila toh ye image dedo
{!description?"This news is intresting" : description}
khali {description} bhi kaam kr rha tha but humne null wali condition yha bhi daal di.

<a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
use  rel="noreferrer" for removing an error 

 <p className="card-text"> <small className="text-muted">By {!author?"Unknown":author} on {date} </small> </p>
above line is for showig author and date published , author function is written using ternary operator show condition that if author not found then return unknown
date is written like this {new Date(date).toGMTString()} to make it in GMT format

ADDING BADGE FROM BOOTSTRAP 
<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 99+ 
           <span class="visually-hidden">Undread messages </span>
           </span>   //NOT USING HERE 

    BUT we are just using         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">  {source} </span>







 -----------------------------------------ADDING INFINITE SCROLL-----------------------------------------------------------------------------
 when we started adding infinite scroll , we removed SPINNER COMPONENET
 install npm package search on google , for knowing the name check the JSON file.


 -----------------------------------------ADDING TOP LOADING BAR-----------------------------------------------------------------------------
 npm i react-top-loading-bar
https://www.npmjs.com/package/react-top-loading-bar


 ---------------------------------------------ADDED CUSTOM ENVIRONMENT VARIABLE-----------------------------------------------------------------------------
 https://create-react-app.dev/docs/adding-custom-environment-variables/

 //API KEY HIDE KRNE K LIYE 
  sabse phle .env.local naam ki file bnao jo ki news app k andar hogi componenet bgerh k andr mt rkhna 
  --> iss file ko ko .gitignore already ignored rkhta h
  --> Issi file k andr ek variable bna lo kisi b naam se jaise idhr bnaya h : REACT_APP_NEWS_API 
  --> fir APP.js me jaake ek variable bna lo :  apiKey = process.env.REACT_APP_NEWS_API
  --> aur inhi ko as a prop pass krdo inside route component :  apiKey={this.apiKey} 
  --> fir News.js me jaha jaha apiKey h wha wha ${this.props.apiKey} bass kaam ho jyega

  NOTE : yha pr abi ye cheez kaam ni kr rhi h pta nahi kuu issilye sab as it is hi h bass App.js me 
    apiKey variable me  : apiKey = "733ef8b9aa1245a69a7f4c1c0d28ba78"   krdiya h mtlb as a prop paas krdiya h 
    future me chnge krdege.



















=========================WITHIN VIDEO 35 (News.js)===============================================================


import React, {Component} from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'; //impt for proptypes
import InfiniteScroll from 'react-infinite-scroll-component';

// Now we will use proptypes inside class , check documentation or do google
export class News extends Component {
    // we will make static variable to write prop types

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string

    };

     capitalizeFirstLetter = (string)=> {
            return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1 ,
            totalResults : 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;  
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=733ef8b9aa1245a69a7f4c1c0d28ba78&page=1&pageSize=${this.props.pageSize}`; //pageSize=20 or this.props.pageSize mtlb ek page me keval 20 articles hi honge
        this.setState({loading: true});
        let data = await fetch(url);/*  promise return krega kuuki humne async use kiya h , mtlb iske execute hone ka wait krega */
        let parsedData = await data.json(); //data ko readale banane k liye k parse kro
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, 
            totalArticles: parsedData.totalResults, // ye parsedData k sth jo articles , totalResults sab json file ya jo api k andar h wahi naam h apne se nahi liye , aur jiske equal bnaya h wo apni mrxi ka h
            loading: false 
        });
    }

    async componentDidMount() {
        //read comment at bottom to know the actual working
        this.updateNews();
    }

    /* componentDidMount() : hamesha render() k baad execute hoga*/

    handlePreviousClick = async () => {
        //read comment at bottom to know the actual working
        this.setState({
            page: this.state.page - 1
        });
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews();
    }
    render() {
        return (
            <div className="container my-3"> 
                <h1 className="text-center"  style={{margin : '35px 0px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {/* {this.state.loading && <Spinner/>} */}
              
                <InfiniteScroll dataLength={this.state.items.length} next={this.fetchMoreData} hasMore={this.state.articles.lehgth !== this.state.totalResult} loader={ <Spinner/>}>
              
                <div className="row">
                { /* Neeche ye krne ka mtlb jitne baar har baar ek naya article ayega click bgerh krne pe ye ek state h*/}
               
                {this.state.articles.map((element)=>{      
                 return <div className="col-md-4" key={element.url}  >
                <Newsitem  title={element.title ? element.title: ""} description={element.description ? element.description: ""} imageurl={element.urlToImage} newsUrl= {element.url} author={element.author} date={element.publishedAt}  source={element.source.name}/>  
                {/* we used a state taki hum har news ko dikha ske aur element k sath jo b lga h wo json wali file me array k naam h dhyaan rkhna example : urlToimage*/}
                {/* title , decription , imageurl , newsUrl ye sab wo state hain jo Newsitem me pass ki hain aur idhar use kr rhe */}
                {/* title , decription , urlToimage , url ,author , ublishedAt ye sab JSON k andar k array element hai jo hum use kr rhe*/}
                </div> 
                })} 

               <InfiniteScroll/>

                </div>

                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
                <button disabled={(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &raquo;</button>
                </div>
            </div>
        );
    }
}

export default News;

