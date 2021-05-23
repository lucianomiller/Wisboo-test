import React, {useState, useEffect} from 'react'
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import  Card  from "./Card";
import Loader from './Loader';
import "../App.css"
function Images() {

    const [images, setImages] = useState([]);
    const [page,setPage] = useState (1)
    const [search, setSearch] = useState ("")
    const [query, setQuery] = useState("random")

    useEffect(() => {   
        axios
        .get(`http://localhost:3001/images/search?query=random&page=1&size=12`)
        .then(res => {
             setImages([...images, ...res.data.images.results]); 
            console.log(res.data)
            setPage(page+1)
        })                 
    }, [])
    const fetchImages = () => {    
        axios
        .get(`http://localhost:3001/images/search?query=${query}&page=${page}&size=12`)
        .then(res => {
             setImages([...images, ...res.data.images.results]); 
            console.log(res.data)
            setPage(page+1)
        })    
    }
    const handleaOnChange = (e) => {
        
        setSearch(e.target.value);
        console.log(search)
    };      
    const handleSubmit = (e)=>{
        e.preventDefault()         
        setQuery(search)
        console.log(search)        
        axios
        .get(`http://localhost:3001/images/search?query=${search}&page=${1}&size=12`)
        .then(res => {
             setImages([ ...res.data.images.results]); 
             setPage(2)
        })
    }
    
    return (
        <div>
            <div class="container-fluid mt-3" style={{maxWidth:"50% "}} >
                <form class="d-flex" onSubmit={handleSubmit}>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search" onChange={handleaOnChange} value={search}/>
                <button class="btn " style={{backgroundColor:"#a23bad"}} type="submit">Search</button>
                </form>
            </div>
                <InfiniteScroll
                    dataLength={images.length}
                    next={fetchImages}
                    hasMore={true}
                    loader={images.length?(<Loader />):(<div/>)}
                    >
            {images.length?(<div className="page-content ">                    
                    {images.map(image => (
                        <Card background_image={image.urls.small} id={image.id} key={image.id}/>
                        ))}                    
             </div>):(
                 <div style={{height:"100rem"}}>                        
                    <Loader />
                </div>
             )}
                </InfiniteScroll>
        </div>
    )
}

export default Images
