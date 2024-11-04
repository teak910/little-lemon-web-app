/*to fixed issues of props in Booking.js file*/
import React from 'react';
import BookingForm from './BookingForm';

const Booking = (props) => {
  return (
   <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
  );
}
export default Booking;