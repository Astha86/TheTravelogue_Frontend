import React from 'react';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours'
import { Button, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const FeaturedToursList = () => {
  // const { data: featuredTours, loading } = useFetch(`tours/featured`);
  
  

  return (
    <>
      {
          tourData.map(tour => (
              <Col lg='3'className='mb-4' key={tour.id}>
                  <TourCard tour={tour} />
              </Col>
          ))
      }

      <div className="viall__btn">
        <NavLink to={"/tours"}>
          <Button className='btn primary__btn'>View All Tours</Button>
        </NavLink>
      </div>
    </>
  );
};

export default FeaturedToursList;