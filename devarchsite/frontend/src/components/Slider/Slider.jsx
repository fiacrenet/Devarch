import React from 'react'
import { Carousel} from 'react-responsive-carousel'
import { assets } from '../../assets/assets'

const Slider = () => {
  return (
    <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
        <div>
            <img src={assets.devarch_header_slide_1}  alt=''/>
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={assets.devarch_header_slide_2} alt=''/>
             <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={assets.devarch_header_slide_1}  alt=''/>
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>      
  )
}
export default Slider
