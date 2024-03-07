// Import the functions you need from the SDKs you need
import {app, auth, db} from "./firebase";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, addDoc, collection, getDoc, doc, increment, setDoc, updateDoc } from "firebase/firestore";
import { Home, Contact, Donate, Stats, ThankYou, Schemes } from './components';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from './components/Admin'
import Donator from "./components/Donator";
import Login from './components/Login'
import Form from './components/Form'
import Chat from './components/Chat.js'


import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

signInAnonymously(auth)
  .then(() => {
    console.log('Anonymous authentication successful');
  })
  .catch((error) => {
    console.error('Error signing in anonymously: ', error);
  });


    

  
        

function App() {
  const location = useLocation();
    const [startTime, setStartTime] = useState(0);
  
    useEffect(() => {
      // Track page entry
      setStartTime(Date.now());
  
  
      // Update page visits count
      const updatePageVisits = async () => {
        try {
          const pageVisitsRef = doc(db, "page_visits", location.pathname);
          await updateDoc(pageVisitsRef, {
            count: increment(1),
          });
        } catch (error) {
          console.error("Error updating page visits: ", error);
        }
      };
  
      updatePageVisits();
    }, [location.pathname]);
  
    useEffect(() => {
      return async () => {
        // Track page exit
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds
  
        // Get the page visits count
        let pageVisitsCount = 0;
        try {
          const pageVisitsRef = doc(db, "page_visits", location.pathname);
          const pageVisitsSnapshot = await getDoc(pageVisitsRef);
          if (pageVisitsSnapshot.exists()) {
            const pageVisitsData = pageVisitsSnapshot.data();
            pageVisitsCount = pageVisitsData.count || 0;
          }
        } catch (error) {
          console.error("Error retrieving page visits count: ", error);
        }
  
        // Update average time spent on the page
        const updateAverageTimeSpent = async () => {
          try {
            const averageTimeSpentRef = doc(db, "average_time_spent", location.pathname);
            await updateDoc(averageTimeSpentRef, {
              total: increment(elapsedTime),
              average: elapsedTime / (pageVisitsCount + 1) // Calculate the actual average
            });
          } catch (error) {
            console.error("Error updating average time spent: ", error);
          }
        };
  
        updateAverageTimeSpent();
      }
    }, [location.pathname]);
  
    useEffect(() => {
      return () => {
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000;
  
        const updateAverageTimeSpent = async () => {
          try {
            const averageTimeSpentRef = doc(db, "average_time_spent", location.pathname);
            await updateDoc(averageTimeSpentRef, {
              total: increment(elapsedTime)
            });
          } catch (error) {
            console.error("Error updating average time spent: ", error);
          }
        };
  
        updateAverageTimeSpent();
      };
    }, [location.pathname, startTime]);
  return <div className="App">
    <Routes>
      <Route path="/">
        <Route path="/Admin" element ={<Admin/>}/>
        <Route path="/Admin" element ={<Form/>}/>
        <Route path="/Home" element ={<Home/>}/>
        <Route index element ={<Donator/>}/>
        <Route path="/Login" element ={<Login/>}/>
        <Route path="/DLogin" element ={<Login/>}/>
        <Route path="/contact" element ={ <Contact/>}/>
        <Route path="/donate" element ={ <Donate/>}/>
        <Route path="/volunteer" element ={ <Schemes/>}/>
        <Route path="/form" element ={ <Form/>}/>
        <Route path="/stats" element ={ <Stats/>}/>
        <Route path="/thank-you" component={<ThankYou/>} />
      </Route>
    </Routes>
 

  </div>;
}

export default App;