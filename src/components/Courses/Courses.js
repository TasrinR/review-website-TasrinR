import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses]= useState([]);
    const [displayCourses, setDisplayCourses]=useState([]);
    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            setDisplayCourses(data)})
    },[])
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedCourses = courses.filter(course => course.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayCourses(matchedCourses);
    }
    return (
        <>
        <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search course" />
        </div>
        <div className="course-container">
            {displayCourses.map(course => <Course
                key={course.id}
                course={course}
            ></Course>)}
        </div></>
    );
};

export default Courses;