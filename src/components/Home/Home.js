import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Home.css'


const Home = () => {
    const [courses , setCourses]= useState([])
    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <><div className="home-container">
            <div className="home-top">
                <div className="home-details"><h2>Get the courses you want to learn</h2></div>
                <div className="home-image"><img src="https://cdn.britannica.com/30/199930-131-B3D1D347/computer.jpg" alt="" /></div>
            </div>
        </div>
        <div><h1 style={{color: 'rgb(27, 24, 24)', marginBottom: '20px'}}>Our Courses</h1></div>
        <div className="home-course">
            {
                courses.slice(0,4).map(course => <Course key={course.id} course={course}></Course>)
            }
        </div></>
        
    );
};

export default Home;