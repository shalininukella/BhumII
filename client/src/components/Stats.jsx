import React, { useEffect, useState } from 'react';
import {app, auth, db} from "../firebase";

import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, addDoc, collection, getDoc, getDocs, doc, increment, setDoc, updateDoc } from "firebase/firestore";
import "../styles/Stats.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import ButtonStats from './ButtonStats';

class PageVisit {
    constructor(page, visits) {
      this.page = page;
      this.visits = visits;
    }
  }

const Stats = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch average time spent data
        const averageTimeSpentSnapshot = await getDocs(collection(db, "average_time_spent"));
        const averageTimeSpentData = averageTimeSpentSnapshot.docs.map((doc) => ({
          page: doc.id,
          average: Number(doc.data().average.toFixed(2))
        }));
        const sortedAverageTimeSpentData = averageTimeSpentData.sort((a, b) => b.average - a.average);
        // Fetch page visits data
        const pageVisitsData = await Promise.all([
          getDoc(doc(db, "page_visits", "contact")),
          getDoc(doc(db, "page_visits", "donate"))
        ]);

        const pageVisits = pageVisitsData.map((doc) => {
          const data = doc.data();
          return new PageVisit(doc.id, data.count);
        });

        // Combine the data for contact and donate pages
        const combinedData = [
          ...pageVisits,
          {
            page: 'home',
            visits: pageVisits.reduce((sum, data) => sum + data.visits, 0)
          }
        ];

        setData({
          averageTimeSpent: sortedAverageTimeSpentData,
          pageVisits: combinedData
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
    
  const COLORS = ['#FF4500', '#FFA500', '#FFFF00'];
  
  return (
    <div className="stats-container">
      <h2 className="stats-heading">ANALYTICS</h2>
      {data.averageTimeSpent && data.pageVisits ? (
      <div className="row">
        <div className="col-md-6">
          <div className="card stats-card">
            <div className="card-body">
              <h2 className="stats-card-title">Average Time Spent</h2>
              <div className="stats-chart-container">
                <PieChart width={400} height={300}>
                  <Pie
                    data={data.averageTimeSpent}
                    dataKey="average"
                    nameKey="page"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {data.averageTimeSpent.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  
        <Legend align="center" iconType="circle" layout="horizontal" verticalAlign="bottom" />
                </PieChart>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card stats-card"> {/* Apply the 'stats-card' class */}
            <div className="card-body">
              <h2 className="stats-card-title">Page Visits</h2> {/* Apply the 'stats-card-title' class */}
              <div className="stats-chart-container"> {/* Apply the 'stats-chart-container' class */}
                <BarChart width={400} height={300} data={data.pageVisits}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="page" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="visits" fill="#8884d8" />
                </BarChart>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          <div className="card stats-card">
            <div className="card-body">
              <h2 className="stats-card-title">Causes of Donation</h2>
              <div className="stats-chart-container">
              <ButtonStats />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      ) : (
        <p>Loading...</p>
      )}
      
      
    </div>
  );
};

export default Stats;