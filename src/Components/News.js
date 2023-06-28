import React, {useEffect , useState} from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const[articles , setArticles] = useState([]);
    const[loading , setLoading] = useState(true);
    const[totalResults , setTotalResults] = useState(0);
    const[page , setPage] = useState(1);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


 const updateNews = async() => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(35);
        let parsedData = await data.json()
        props.setProgress(550);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);

    }

    useEffect(()=>{
      updateNews();
      document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

    } ,[])
    /* componentDidMount() : hamesha render() k baad execute hoga*/

  // const handlePreviousClick = async () => {
  //  setPage(page-1);
  //   updateNews();
  // };
  
  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   updateNews();
  // }; 

    const fetchMoreData = async () => {  
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
      };

    return (
      <>
        <h1 className="text-center" style={{ margin: '35px 0px' , marginTop: '90px' }}>
          NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner/>}
    
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner />}>
        
        <div className="container">
             <div className="row">
                {articles.map((element) => {
                return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title ? element.title : ''} description={element.description ? element.description : ''} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  {/* we used a state taki hum har news ko dikha ske aur element k sath jo b lga h wo json wali file me array k naam h dhyaan rkhna example : urlToimage*/}
                  {/* title , decription , imageurl , newsUrl ye sab wo state hain jo Newsitem me pass ki hain aur idhar use kr rhe */}
                  {/* title , decription , urlToimage , url ,author , ublishedAt ye sab JSON k andar k array element hai jo hum use kr rhe*/}
               
            </div>
          );
         })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    );
  }


News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
  
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

export default News;


