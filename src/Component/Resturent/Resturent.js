import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

import './Resturent.css'

const Resturent = () => {
    const [SerchText,setSerchText]=useState('')
    const [meal,setmeal]=useState([])
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${SerchText}`
     fetch(url)
      .then(res=>res.json())
      .then(data=>setmeal(data.meals))
    },[SerchText])
    const serchText=(e)=>{
        setSerchText(e.target.value)
    }

    return (
        <Container>
        <div className="text-center " >
           <Row lg={12} className="justify-content-lg-center" > 
            <h1 style={{color:"cadetblue"}}>MEAL-BD API</h1>
           </Row>
            <input className='input' onChange={serchText}  type="text" name="" id="" />
             
        
        
         <div className='div-Container '>
          
               
                <Row xs={1} md={2} lg={3}  className="g-4">
      {
          meal.map(singelMeal=><Meal
          key={singelMeal.idMeal}
            singelMeal={singelMeal}
          ></Meal>)
      }
          
 
           </Row> 
           
          </div>
        </div>
        </Container>
    );
};

export default Resturent;