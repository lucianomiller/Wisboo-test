import "./card.css";

export default function MyCard({  background_image, id, supr }) {      
    
    return (
        <div class="">
        <div class="news-card">            
            <img src={background_image} alt="" class="news-card__image" />    
            <div class="news-card__text-wrapper">          
            <div class="news-card__details-wrapper">           
                
                <button  class="news-card__read-more btn" style={{textDecoration:"none"}} onClick={()=>supr(id)}>
                    Delete {/* <i class="fas fa-long-arrow-alt-right"></i> */}
                </button>
                
            </div>
            </div>        
        </div>
        </div>
    );
}