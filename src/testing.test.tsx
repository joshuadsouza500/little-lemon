import React from 'react' 
import { render, screen } from "@testing-library/react";
import { BookingForm } from "./components/BookingForm";

import '@testing-library/jest-dom';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={undefined} updateTimes={undefined}/>);
    const headingElement = screen.getByText("Book A Table");
    expect(headingElement).toBeInTheDocument()
})


describe('initializeTimes function', () => {
    test('should return the correct expected value', () => {
      const initialState = {
        times: [] // Your initial state for times
      };
  
      const expectedState = {
        times: ['10:00 AM', '12:00 PM',"1:00 PM","2:00 PM","4:00 PM","5:00 PM","7:00 PM" ] // Your expected result after initialization
      };
  
      const newState = initializeTimes(initialState);
  
      expect(newState).toEqual(expectedState);
    });
  });


  describe('updateTimes function', () => {
  test('should return the same value provided in the state', () => {
    const initialState = {
      times: ['10:00 AM', '12:00 PM',"1:00 PM","2:00 PM","4:00 PM","5:00 PM","7:00 PM",] // Your initial state for times
    };

    const updatedState = {
      times: ['10:00 AM', '12:00 PM',"1:00 PM","2:00 PM","4:00 PM","5:00 PM","7:00 PM",] // The same value as initialState
    };

    const newState = updateTimes(initialState);

    expect(newState).toEqual(updatedState);
  });
});

function updateTimes(initialState: {
    times: string[]; // Your initial state for times
}) {
    throw new Error('Function not implemented.');
}


function initializeTimes(initialState: {
    times: never[]; // Your initial state for times
}) {
    throw new Error('Function not implemented.');
}

