import React, { Component } from 'react';
import Newsitem from './Newsitem';


export class News extends Component {
    constructor(props) {
        super(props);
        console.log("Hello, I am a constructor from News Componenet");
        this.state = {
            articles : [] ,
            loading : false,
            page:1
        }

    }
    async componentDidMount() { 
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=733ef8b9aa1245a69a7f4c1c0d28ba78&page=1&pageSize=20"   //pageSize=20 mtlb ek page me keval 20 articles hi honge
        let data = await fetch(url);  /* promise return krega kuuki humne async use kiya h , mtlb iske execute hone ka wait krega */
        let parsedData = await data.json(); //data ko readale banane k liye k parse kro
        console.log(parsedData);
        this.setState({articles: parsedData.articles ,
             totalArticles: parsedData.totalResults});  // ye parsedData k sth jo articles , totalResults sab json file ya jo api k andar h wahi naam h apne se nahi liye , aur jiske equal bnaya h wo apni mrxi ka h
    }
 
    /* componentDidMount() : hamesha render() k baad execute hoga*/ 
    
    handlePreviousClick = async () => {

        //neeche ka content cdm se uthaya h bass url ko backtick lgaye hain kuuki andr js logic likhna tha page next krn k liye 
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=733ef8b9aa1245a69a7f4c1c0d28ba78&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);  /* promise return krega kuuki humne async use kiya h , mtlb iske execute hone ka wait krega */
        let parsedData = await data.json(); //data ko readale banane k liye k parse kro
        console.log(parsedData);

        this.setState({
            page : this.state.page-1,   //page ko ek se peeche le jane k liye
            articles: parsedData.articles
        })
        
    }
    handleNextClick = async () => {
        if(this.state.page + 1 >Math.ceil(this.state.totalResults/20)){

         }
        else{ 
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=733ef8b9aa1245a69a7f4c1c0d28ba78&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);  /* promise return krega kuuki humne async use kiya h , mtlb iske execute hone ka wait krega */
        let parsedData = await data.json(); //data ko readale banane k liye k parse kro
        console.log(parsedData);
        this.setState({
            page : this.state.page+1,
            articles: parsedData.articles
        })  
    }
    }

 
    render() {
        console.log('render');
        return (
            <div className="container my-3">
                <h1>NewsMonkey - Top Headlines</h1>
                <div className="row">
                { /* Neeche ye krne ka mtlb jitne baar har baar ek naya article ayega click bgerh krne pe ye ek state h*/}
                {this.state.articles.map((element)=>{    
                 return <div className="col-md-4" key={element.url}  >
                <Newsitem  title={element.title ? element.title: ""} description={element.description ? element.description: ""} imageurl={element.urlToImage} newsUrl= {element.url}/>  
                {/* we used a state taki hum har news ko dikha ske aur element k sath jo b lga h wo json wali file me array k naam h dhyaan rkhna example : urlToimage*/}
                {/* title , decription , imageurl , newsUrl ye sab wo state hain jo Newsitem me pass ki hain aur isdhar use kr rhe */}
                {/* title , decription , urlToimage , url ye sab JSON k anar k array element hai jo hum use kr rhe*/}
                </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
                <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &raquo;</button>
                </div>
            </div>
        );
    }
}

export default News;

/*title={element.title.slice(0,46)} slice is used to show number words u want */
/* <Newsitem  title={element.title?element.title.slice(0,46):""} description={element.description?element.description.slice(0,70):""} imageurl={element.urlToImage} newsUrl= {element.url}/> */
// element.title? , :"" element.description? , :""  ye issliye diya h kuuki maan lo jo json file di h udhar title , descrption kuch b null h toh kya krege? usme problem na aye issiliye likha h

// Next button me onClick={this.handlePreviousClick} ye add krne se hum dusre page pe phuchege but iska function bhi bnanan hoga
// sath me ' this.' issiliye use kr rhe kuuki hum class me kaam kr rhe

//previous button me : disabled={this.state.page<=1} ye krne se agr phle hi page pe ho toh inactive ho jyega kuuki active rhne ka koi sense nahi h


//News api walon ne &pageSize naam ka function de rkha h mtlb , hum agr ye dekh le ki total article kitne hain supporse 32 , aur page size = 2 set krden mtlb har page me 2 article , toh iska mtlb total 19 pages banege.