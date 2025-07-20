import React from 'react'
import Life from './Life'
import LatesCollection from './LatesCollection'
import BestSeller from './BestSeller'
import Policy from './Policy'
import Subscribe from '../../components/Subscribe'
import TwentyYears from './TwentyYears'
import Container from '../../components/Container'


function Home() {
  return (
    <div className='mt-2'>
      <Container>
        <Life />
        <LatesCollection />
        <Policy />
        <TwentyYears />
        <BestSeller />
      </Container>
      <Subscribe />
    </div>
  )
}

export default Home