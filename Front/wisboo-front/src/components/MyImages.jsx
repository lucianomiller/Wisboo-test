import React, {useState, useEffect} from 'react'
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import  MyCard  from "./MyCard";
import Loader from './Loader';
import "../App.css"
function MyImages() {

    const [images, setImages] = useState([]);
    const [page,setPage] = useState (1)
    const [back,setBack] = useState(true)   

    useEffect(() => {   
        fetchImages();              
    }, [])
    const fetchImages = () => {    
        axios
        .get(`http://localhost:3001/images?page=${page}&size=12`)
        .then(res => {
            if(res.data.message && !res.data.images.length) setBack(false)
            setImages([...images, ...res.data.images]);  
            console.log(res.data, page)
            setPage(page+1)
        })    
    }
    console.log(images)   
    
    return (
        <div>            
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                loader={images.length?(<Loader />):(<div/>)}
            >
                {images.length?(<div className="page-content ">                    
                    {images.map(image => (
                        <MyCard background_image={image.url} id={image._id} key={image._id}/>
                        ))}                    
                </div>):(
                    back?(<div style={{height:"100rem"}}>                        
                        <Loader />
                    </div>):(
                        <h3 style={{ textAlign: "center", margin: "20px 0" , height:"100rem",marginTop:"20%"}}>
                            There are no images saved yet!
                        </h3>
                ))}
             </InfiniteScroll>
        </div>
    )
}

export default MyImages
