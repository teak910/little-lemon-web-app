import React from 'react';

const BookingForm = () => {
    return (
      <header>
        <section>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label>Choose Date</label>
                <input id='book-date' type='date' required/>
              </div>
              <div>
              <label>Choose Time</label>
              <select id='book-time'>
                <option value="">Select a Time</option>
                </select>
              </div>
              <div>
              <label>Number of Guests</label>
              <input id='book-guests'/>
              </div>
              <div>
              <label>Occasion</label>
              <select id='book-occasion'>
                <option>Birthday</option>
                <option>Anniversary</option>
               </select>
              </div>
              <div className='btnReceive'>
                <input type='submit'/>
              </div>
            </fieldset>
          </form>
        </section>
      </header>
    );
  };

export default BookingForm;
