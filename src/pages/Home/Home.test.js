import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Life from './Life';
import LatesCollection from './LatesCollection';
import Policy from './Policy';
import BestSeller from './BestSeller';
import TwentyYears from './TwentyYears';

test('renders Life heading', () => {
  render(<Life />);
  const keyword1 = screen.queryByText(/life/i );
  const keyword2 = screen.queryByText(/not a game/i );
  const keyword3 = screen.queryByText(/time travel/i );
  expect(keyword1).toBeInTheDocument();
  expect(keyword2).toBeInTheDocument();
  expect(keyword3).toBeInTheDocument();
});

test('video tag exists', () => {
  const { container } = render(<Life />);
  const video = container.getElementsByTagName("video")[0];
  expect(video).toBeInTheDocument();
});

test('when video is played, the src is not empty', async () => {
    const { container } = render(<Life />);
    waitFor(() => {
        const button = container.getElementsByClassName("videoPlayer_playBtnHolder")[0];
        const video = container.getElementsByTagName("video");
        fireEvent.click(button);
        expect(video).toHaveAttribute('src');
        expect(video.getAttribute('src')).not.toBe('');
    })
  });


test('renders section latest collection', async () => {
  const { container } = render(<LatesCollection />);
  const keyword1 = screen.queryByText(/latest/i);
  const keyword2 = screen.queryByText(/collection/i);
  expect(keyword1).toBeInTheDocument();
  expect(keyword2).toBeInTheDocument();
  
  waitFor(() => {
      const productslist = [...container.getElementsByClassName("productCard")];
      expect(productslist).toHaveLength(15);
  })
});

test('policy section', () => {
    const { container } = render(<Policy />);
    const policyItems = [...container.getElementsByClassName("policyItem")];
    
    const keyword1 = screen.queryByText(/Easy Exchange Policy/i);
    const keyword2 = screen.queryByText(/Best Customer Support/i);
    const keyword3 = screen.queryByText(/7 Days Return Policy/i);
    expect(keyword1).toBeInTheDocument();
    expect(keyword2).toBeInTheDocument();
    expect(keyword3).toBeInTheDocument();
    expect(policyItems).toHaveLength(3);
});

test('20 years of experience', () => {
    render(<TwentyYears />);
    const keyword1 = screen.queryByText(/YEARS/i);
    const keyword2 = screen.queryByText(/EXPERIENCE/i);
    const keyword3 = screen.queryByText(/best collectors/i);
    expect(keyword1).toBeInTheDocument();
    expect(keyword2).toBeInTheDocument();
    expect(keyword3).toBeInTheDocument();
});


  test('renders section best seller collection', async () => {
    const { container } = render(<BestSeller />);
    const keyword1 = screen.queryByText(/best/i);
    const keyword2 = screen.queryByText(/seller/i);
    expect(keyword1).toBeInTheDocument();
    expect(keyword2).toBeInTheDocument();
    
    waitFor(() => {
        const productslist = [...container.getElementsByClassName("productCard")];
        expect(productslist).not.toHaveLength(0);
    })
  });