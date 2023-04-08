// // //import { render, screen } from '@testing-library/react';
// // const {Login} = require('./appLogin');
// // import Login from './appLogin';

// // test('user', () => {
// //   expect(add (user)).toBeInTheDocument();
// // });
// import React from 'react';
// import Login from './client/src/Pages/login';

// describe('when valid email was filled', () => {
//   beforeEach(() => {
//     subscribe = jest.fn();
//     wrapper = mount(<Login subscribe={subscribe}/>);
//   });

//   describe('and when form was submitted', () => {
//     beforeEach(() => {
//       wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'root@email.com'}});
//       wrapper.find('#submit').simulate('submit');
//     });

//     it('should subscribe to the news with correct email', () => {
//       expect(subscribe).toHaveBeenCalledWith({email: 'root@email.com'});
//     });
//   });
// });


const {Login} = require ('./Login')

test('submitting the form calls onSubmit with username and password', () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Login onSubmit={onSubmit} />);

  fireEvent.change(getByLabelText(/username/i), { target: { value: 'chuck' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'norris' } });
  fireEvent.click(getByText(/submit/i));

  expect(onSubmit).toHaveBeenCalledWith({
    username: 'chuck',
    password: 'norris',
  });
});