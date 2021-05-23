import React, {useState, useEffect} from 'react'
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import  MyCard  from "./MyCard";
import Loader from './Loader';
import "../App.css"
import Scroll from './Scroll';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

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
            if(res.data.message && res.data.images.length<12) setBack(false)
            setImages([...images, ...res.data.images]);  
            console.log(res.data, page)
            setPage(page+1)            
        })    
    }
    const deleteImage = (id) => { 
        console.log(id)
        axios.
            delete(`http://localhost:3001/images`,{id})
            .then((res)=>{
                console.log(res.data)
                if(res.data.image){
                    setImages( images.filter(Im=>Im.id!==id))   
                    console.log("borrado", images)   
                    if(!images.length) setBack(false)
                }
            })
            store.addNotification({
                //title: 'Dropbox',
                message: 'Image Deleted!',
                type: 'default',                         // 'default', 'success', 'info', 'warning'
                container: 'top-left',                // where to position the notifications
                animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                dismiss: {
                  duration: 2000
                }
              })        
    }
    console.log("images",images)
    
    return (
        <div style={{minHeight:"60rem"}}>     
        <Scroll showBelow={250}/>        
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                loader={back?(<Loader />):(<div/>)}
            >
                {images.length?(<div className="page-content " >                    
                    {images.map(image => (
                        <MyCard background_image={image.url} id={image.id} key={image.id} supr={deleteImage} />
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
