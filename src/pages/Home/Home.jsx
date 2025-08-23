import React from 'react'
import Life from './Life'
import LatesCollection from './LatesCollection'
import BestSeller from './BestSeller'
import Policy from './Policy'
import Subscribe from '../../components/Subscribe'
import TwentyYears from './TwentyYears'
import Container from '../../components/Container'
import ComplexParallax from './ComplexParallax'
import Parallax from './Parallax'


function Home() {
  return (
    <div className='mt-2'>
      <Container>
        <Life />
        <LatesCollection />
        <TwentyYears />
        <Policy />
      </Container>

      <Parallax />
      <ComplexParallax />

      <Container>
        <div className="mt-20">
          <BestSeller />
        </div>
      </Container>
      
      <Subscribe />
    </div>
  )
}

export default Home