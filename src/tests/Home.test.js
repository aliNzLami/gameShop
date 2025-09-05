// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import Home from '../pages/Home/Home';

// test('renders Life heading', () => {
//   render(<Home />);
//   const keyword1 = screen.queryByText(/life/i );
//   const keyword2 = screen.queryByText(/not a game/i );
//   const keyword3 = screen.queryByText(/time travel/i );
//   expect(keyword1).toBeInTheDocument();
//   expect(keyword2).toBeInTheDocument();
//   expect(keyword3).toBeInTheDocument();
// });

// test('video and button exist', async () => {
//     const { container } = render(<Home />);
//     await waitFor(() => {
//         const button = container.getElementsByClassName("videoPlayer_playBtnHolder")[0];
//         const video = container.getElementsByTagName("video")[0];
//         expect(button).toBeInTheDocument();
//         expect(video).toBeInTheDocument();
//     })
//   });

// test('policy section', () => {
//     const { container } = render(<Home />);
//     const policyItems = [...container.getElementsByClassName("policyItem")];
    
//     const keyword1 = screen.queryByText(/Easy Exchange Policy/i);
//     const keyword2 = screen.queryByText(/Best Customer Support/i);
//     const keyword3 = screen.queryByText(/7 Days Return Policy/i);
//     expect(keyword1).toBeInTheDocument();
//     expect(keyword2).toBeInTheDocument();
//     expect(keyword3).toBeInTheDocument();
//     expect(policyItems).toHaveLength(3);
// });

// test('20 years of experience', () => {
//     render(<Home />);
//     const keyword1 = screen.queryByText(/YEARS/i);
//     const keyword2 = screen.queryByText(/EXPERIENCE/i);
//     const keyword3 = screen.queryByText(/best collectors/i);
//     expect(keyword1).toBeInTheDocument();
//     expect(keyword2).toBeInTheDocument();
//     expect(keyword3).toBeInTheDocument();
// });