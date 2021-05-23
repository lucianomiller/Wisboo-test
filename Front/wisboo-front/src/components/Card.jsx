import "./card.css";
import axios from "axios";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export default function Card({  background_image,  id }) {  

    const handleSave =()=>{
        axios.
            post(`http://localhost:3001/images/`,{url:background_image, id})
            .then((res)=>{
                //console.log(res.data)
                
            })
            
          store.addNotification({
            //title: 'Dropbox',
            message: 'Image Saved!',
            type: 'default',                         // 'default', 'success', 'info', 'warning'
            container: 'top-left',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration: 2000
            }
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