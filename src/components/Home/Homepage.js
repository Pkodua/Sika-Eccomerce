import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import '../Home/Homepage.scss'
import Slide1 from '../../assests/photos/home4.jpeg';
import Slide2 from '../../assests/photos/home2.jpeg';
import Slide3 from '../../assests/photos/home3.webp';
import Shop1 from '../../assests/photos/braccelets.jpeg';
import Shop2 from '../../assests/photos/necklace.jpeg';
import Shop3 from '../../assests/photos/earring2.jpeg';
import Vid  from "../../assests/videos/homeVid.mp4"
import global from '../../assests/icons/global.png';
import Return from '../../assests/icons/return.png';
import secure from '../../assests/icons/secure.png';
import ReactPlayer from 'react-player/lazy'
export default function Homepage() {
    const images = [
        { url: Slide1,
          button:"Shop Now"
         },
        { url: Slide3,

         },
        { url: Slide2,
           title:"70% off now"
         }

    ];

    return (
        <section className='home'>
            <SimpleImageSlider className='home__slider' images={images} autoPlay={true} showBullets={true} width={490} height={500} style={{ marginTop: '.9%' }} />
            <div >
                <div className='home__title'>
                    <p className='home__subtitle1'>WE'VE GOT YOU COVERED</p>
                    <h3 className='home__subtitle2'>Explore the Range</h3>
                </div>
                <div className='home__container'>

                    <div className='home__container2'>
                        <img className='home__shop' src={Shop1}></img>
                        <button className='home__button'>Shop Bracelets</button>
                    </div>
                    <div className='home__container2'>
                        <img className='home__shop' src={Shop2}></img>
                        <button className='home__button'>Shop Necklace</button>
                    </div>
                    <div className='home__container2'>
                        <img className='home__shop' src={Shop3}></img>
                        <button className='home__button'>Shop Earrings</button>
                    </div>

                </div>

            </div>
            <div className='home__video'>
                <ReactPlayer url={Vid} playing={true} fallback={null} loop={true} width={490} height={800} ></ReactPlayer>
                <div className='home__video--button'>
                    <h2 className='home__video--title'>Experience Luxury</h2>
                    <button className='home__button'>Discover Now</button>
                </div>
            </div>
            <div className='home__features'>
                <div className='home__feature'>
                    <img src={global} author='alkahalifi design'></img>
                    <h5>SHIPPING WORLDWIDE</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>


                </div>
                <div className='home__feature'>
                    <img src={Return} author='freepik'></img>
                    <h5>14 DAY RETURN</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className='home__feature' >
                    <img src={secure} author='freepik'></img>
                    <h5>SECURITY PAYMENT</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                </div>
            </div>

        </section>

    )
}
