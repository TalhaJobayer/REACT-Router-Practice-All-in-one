import React from 'react';
import {Button, Card, CardImg, Col} from 'react-bootstrap';
import './Meal.css'

const Meal = ({singelMeal}) => {
    
    return (
      
      <Col>
      <Card>
        <CardImg variant="top" src={singelMeal.strMealThumb} />
        <Card.Body>
          <Card.Title>{singelMeal.strMeal}</Card.Title>
          <Card.Text>
          {singelMeal.idMeal}
          
          </Card.Text>
          <Card.Text>
          {singelMeal.strInstructions.slice(0,100)}

          </Card.Text>
          <Button variant='primary'>Meal Deatails</Button>
        </Card.Body>
      </Card>
    </Col>
    //  ========
      
//           <Card className='card'>
//   <CardImg   style={{width:"100%",paddingTop: "5px"}} />
//   <Card.Body>
  
//     <Card.Title> </Card.Title>
//     <Card.Text>
//     {singelMeal.idMeal} 
//    </Card.Text>
//     <Card.Text>
   
//     
//     </Card.Text>
//     <Button variant="primary" className='buttonDetails'>Meal details</Button>
   
//   </Card.Body>
// </Card>

         
           
       
       
    );
};

export default Meal;