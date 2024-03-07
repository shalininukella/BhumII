import React, { useState } from 'react';
import { Card, Modal, Input } from 'antd';
import '../styles/donate.css';
import { db } from "../firebase";
import { doc, increment, updateDoc } from 'firebase/firestore';
import { cards } from '../constants';
import logo2 from '../Bhumi.png';
import logo from '../images/volunteer.jpg';
import { Button } from 'antd';
import IndiaCanvas from './canvas/India';
import { BiDonateHeart } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
<<<<<<< HEAD
import Navbar from "./Navbar";
import Footer from "./Footer";
=======
>>>>>>> 6b6ba34f73aa11bc780e33be435105ce1d99b890
import ThankYou from './ThankYou';

const { Meta } = Card;

const Donate = () => {
  const [active, setActive] = useState(true);
  const [funds, setFund] = useState(0);
  const [volunteer, setVolunteer] = useState(35000);
  const [donators, setDonators] = useState([{ name: "Donator", amout: "3500" }]);
  const [showModal, setShowModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationComplete, setDonationComplete] = useState(false);

  const handleButtonClick = async (buttonName) => {
    try {
      const buttonDocRef = doc(db, 'button_clicks', buttonName);
      await updateDoc(buttonDocRef, { count: increment(1) });
      console.log(`Button "${buttonName}" clicked successfully.`);
      setShowModal(true);
    } catch (error) {
      console.error('Error updating button click count:', error);
    }
  };

  const handlePayment = () => {
    // Perform payment logic here
    setDonationComplete(true);
  };

  const handleAmountChange = (e) => {
    setDonationAmount(Number(e.target.value));
  };

  if (donationComplete) {
    return <ThankYou />;
  }

  return (
    <>
   <Navbar/>
    <div className='donate-container'>
      <div className='donate-head'>
        <div className='donate-head-img'>
          <img src={logo} width={600} className='donate-img' />
        </div>
        <div className='donate-head-text'>
          <p>{volunteer}+ Volunteers</p>

        </div>
      </div>
      <hr />
      <div className='donate-cards'>
        {cards.map((item) => (
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt={item.name} src={item.icon} className='donate-card-img' />}
            actions={[
              <Button className='donate-button' onClick={() => handleButtonClick(item.cause)}>
                Donate
              </Button>
            ]}
          >
            <Meta title={`Funds Raised - ${funds}`} description={item.cause} />
          </Card>
        ))}
      </div>
      <div className='geaneral-donation'>
        <div className='general-button'>
          <div className='general-icon'>
            <BiDonateHeart />
          </div>
          <div className='general-text'>Make General Donations</div>
        </div>
      </div>
      <div className='donate-about'>
        <div className='about-section'>
          <div className='about-buttons'>
            <button onClick={() => setActive(true)}>About</button>
            <button onClick={() => setActive(false)}>FAQ's</button>
          </div>
          {active ? (
            <div>
              <p>Bhumi was founded on August 15, 2006...</p>
              <h2>Programs</h2>
              {/* Programs content */}
            </div>
          ) : (
            <div>
              <h1>Frequently Asked Questions</h1>
            </div>
          )}
        </div>
        <div className='donate-users'>
          <p style={{ fontSize: "24px" }}>Donations</p>
          <div className='donations'>
            {donators.map((item) => (
              <div className='donator-info'>
                <BsFillPersonFill className='donator-icon' />
                <div className='donator-info-text'>
                  <h3>
                    {item.name} <br />
                    <span>${item.amout}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <Modal
        visible={showModal}
        title="Make a Donation"
        okText="Pay"
        onCancel={() => setShowModal(false)}
        onOk={handlePayment}
      >
        <Input type="number" value={donationAmount} onChange={handleAmountChange} />
      </Modal>

      
    </div>
<<<<<<< HEAD
    <Footer/>
    </>
=======
>>>>>>> 6b6ba34f73aa11bc780e33be435105ce1d99b890
  );
};

export default Donate;