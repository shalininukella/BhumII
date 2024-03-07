import React, {Fragment} from 'react';
<<<<<<< HEAD
=======
//import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css';
>>>>>>> 6b6ba34f73aa11bc780e33be435105ce1d99b890
import "../styles/Scheme.css";
import {cards} from '../constants'
import { Card , Button } from 'antd';
import logo from '../images/team1.jpg'
import {Link} from 'react-router-dom'
import Navbar from "./Navbar";
import Footer from "./Footer";
const { Meta } = Card;
const   Schemes= () => {
    return (
      <>
      <Navbar/>
            <section className='schemes-container'>
              <div className='schemes-head'> 
              <div className='schemes-head-img'>
              {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {
                  cards.map((item) => (
                    <SwiperSlide className='swiper-div'><img src={item.icon} alt={item.name} className='swiper-img' /></SwiperSlide>
                    
                    ))
                }
              </Swiper> */}
              </div>
              </div>
                <div className="row">
                <div className="column">
                <div className="about-img"></div>
                <div className="volunteer-img"></div>
                <div className="other-img"></div>
                </div>
                <div className="column">
                    <div className="tabs">
                        <div className="single-tab">
                            <h2>Volunteering</h2>
                        </div>
                    </div>
                   <div className ="tab-content"> 
                   {/*Volunteering main contnent*/}
                   <div className="content">
                   <h2>To a new journey.</h2>
                   <p>Volunteering with us allows you to bring about change at the grassroots level. We welcome volunteers from all walks of life. Whatever your interest: be it education, environment, animal welfare or something else, there’s an opportunity to match.

                     Being a volunteer allows you to elevate your work to an adventure, a journey to a better tomorrow. So, where do you want to go?</p>
                   </div>

                   {/*Volunteering for ngo contnent*/}
                   <div className="content">
                   <h2>Volunteering for NGO</h2>
                       <p>Volunteer with NGO dedicated to transforming the education of underprivileged children to make a difference in the community. Go beyond monetary assistance and into their lives, bringing change with your own hands and experiencing the fulfillment of your commitment to society.

                        At Bhumi, we urge everyone to volunteer and make the change they wish to see in the world. You may achieve change at the grassroots level by volunteering for NGO like us. We urge people from all walks of life to volunteer in NGO based on their interests, whether it is education, the environment, or animal welfare since we have opportunities in these areas available for them.</p>
                   </div>

{/*Other main contnent*/}
                    <div className="content">
                   <h2>Make a Change</h2>
                       <p>At Bhumi, we urge everyone to volunteer and make the change they wish to see in the world. You may achieve change at the grassroots level by volunteering for NGO like us. We urge people from all walks of life to volunteer in NGO based on their interests, whether it is education, the environment, or animal welfare since we have opportunities in these areas available for them.</p>
                   </div>
                   </div> 
                   <div>
                    </div>
                </div>
                </div>
                <hr />
                <div className='donate-cards'>
          {
            cards.map((item) =>(
              <Card
              hoverable
              style={{ width: 300 ,}}
              cover={<img alt={item.name} src={item.icon} className='donate-card-img' />}
                actions={[
                  <Button className='donate-button'><><Link to ="/form">Volunteer</Link></></Button>
                ]
                }
              >
                <Meta title="" description={item.cause} />
              </Card>
            ))
          }
       </div>
            </section> 
            <Footer/>   
      </>
    );
}
export default Schemes;
