import "./card.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Card({  background_image,  id }) {  

    const handleSave =()=>{
        axios.
            post(`http://localhost:3001/images/`,{url:background_image})
            .then((res)=>{
                console.log(res.data)
            })
    }
    
    return (
        <div class="">
        <div class="news-card">
            {/* <a href="" class="news-card__card-lin"></a> */}
            <img src={background_image} alt="" class="news-card__image" />
            <div class="news-card__text-wrapper">          
            <div class="news-card__details-wrapper">           
                
                <button  class="news-card__read-more btn" style={{textDecoration:"none"}} onClick={handleSave}>
                    Save Image {/* <i class="fas fa-long-arrow-alt-right"></i> */}
                </button>
                
            </div>
            </div>
        </div>
        </div>
    );
}