import React, {Component} from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'; //impt for proptypes

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
            page: 1
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
            articles: parsedData.articles, totalArticles: parsedData.totalResults, // ye parsedData k sth jo articles , totalResults sab json file ya jo api k andar h wahi naam h apne se nahi liye , aur jiske equal bnaya h wo apni mrxi ka h
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
                {this.state.loading && <Spinner/>}
                <div className="row">
                { /* Neeche ye krne ka mtlb jitne baar har baar ek naya article ayega click bgerh krne pe ye ek state h*/}
                {!this.state.loading && this.state.articles.map((element)=>{     
                 return <div className="col-md-4" key={element.url}  >
                <Newsitem  title={element.title ? element.title: ""} description={element.description ? element.description: ""} imageurl={element.urlToImage} newsUrl= {element.url} author={element.author} date={element.publishedAt}  source={element.source.name}/>  
                {/* we used a state taki hum har news ko dikha ske aur element k sath jo b lga h wo json wali file me array k naam h dhyaan rkhna example : urlToimage*/}
                {/* title , decription , imageurl , newsUrl ye sab wo state hain jo Newsitem me pass ki hain aur idhar use kr rhe */}
                {/* title , decription , urlToimage , url ,author , ublishedAt ye sab JSON k andar k array element hai jo hum use kr rhe*/}
                </div> 
                })} 
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

/* title={element.title.slice(0,46)} slice is used to show number words u want */
/* <Newsitem  title={element.title?element.title.slice(0,46):""} description={element.description?element.description.slice(0,70):""} imageurl={element.urlToImage} newsUrl= {element.url}/> */
// element.title? , :"" element.description? , :""  ye issliye diya h kuuki maan
// lo jo json file di h udhar title , descrption kuch b null h toh kya krege?
// usme problem na aye issiliye likha h Next button me
// onClick={this.handlePreviousClick} ye add krne se hum dusre page pe phuchege
// but iska function bhi bnanan hoga sath me ' this.' issiliye use kr rhe kuuki
// hum class me kaam kr rhe previous button me : disabled={this.state.page<=1}
// ye krne se agr phle hi page pe ho toh inactive ho jyega kuuki active rhne ka
// koi sense nahi h News api walon ne &pageSize naam ka function de rkha h mtlb
// , hum agr ye dekh le ki total article kitne hain supporse 32 , aur page size
// = 2 set krden mtlb har page me 2 article , toh iska mtlb total 19 pages
// banege. <Spinner/>  : khali ye likhte hain but yha pe hume condtion rkhni
// pdegi ki kb ye loading dikhe aur kb nahi issiliye state ki help lege
// {this.state.loading && <Spinner/>} loading k case me 2 cheez humne use ki 1:
// this.setState({loading:true});  mtlb condition true hogi jab load ho rha ho ,
// 2:   loading : false  , jab loading nahi rhi hogi we have commented content
// of handlePrevious / next function because we do that by making another
// function that is updateNews. initially it was handlePreviousClick = async ()
// => { neeche ka content cdm se uthaya h bass url ko backtick lgaye hain kuuki
// andr js logic likhna tha page next krn k liye let url =
// `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=733ef8b9aa1245a69a7f4c1c0d28ba78&page=${this.state.page
// - 1}&pageSize=${this.props.pageSize}`; this.setState({loading:true}); let
// data = await fetch(url);  /* promise return krega kuuki humne async use kiya
// h , mtlb iske execute hone ka wait krega */ let parsedData = await
// data.json(); data ko readale banane k liye k parse kro
// console.log(parsedData); this.setState({     page : this.state.page-1,   page
// ko ek se peeche le jane k liye     articles: parsedData.articles,     loading
// : false }) }   same for next also just +1 on next step. Also async
// componentDidMount() {   let url =
// `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=733ef8b9aa1245a69a7f4c1c0d28ba78&page=1&pageSize=${this.props.pageSize}`
// ;   pageSize=20 or this.props.pageSize mtlb ek page me keval 20 articles hi
// honge   this.setState({loading:true});   let data = await fetch(url);  /*
// promise return krega kuuki humne async use kiya h , mtlb iske execute hone ka
// wait krega */   let parsedData = await data.json(); data ko readale banane k
// liye k parse kro   console.log(parsedData);   this.setState({articles:
// parsedData.articles ,        totalArticles: parsedData.totalResults,      ye
// parsedData k sth jo articles , totalResults sab json file ya jo api k andar h
// wahi naam h apne se nahi liye , aur jiske equal bnaya h wo apni mrxi ka h
// loading : false       }); }
