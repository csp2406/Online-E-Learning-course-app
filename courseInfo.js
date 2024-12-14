import React from 'react';
import { useState } from 'react';
import './Course.css'
import fakeData from '../fakeData';
import Course from './Course';
import Cart from './Cart';

const CourseInfo = () => {
    const courses = [...fakeData]
    // console.log(courses)
    const [course] = useState(courses);
    const [cart, setCart] = useState([]);

    const addToCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Cart cart={cart} key={cart.id}></Cart>
                </div>
                <div className="col-md-8 course">
                    {
                        course.map(course => <Course course={course} addToCart={addToCart} key={course.id}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;
