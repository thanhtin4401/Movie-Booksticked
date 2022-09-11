import React from 'react'
import Banner from '../../Components/Banner/Banner'
import TabMovie from '../../Components/TabMovie/TabMovie'
import TrailerModal from '../../Components/TrailerModal/TrailerModal'
import ListMovie from './ListMovie'

export default function HomePage() {
  return (
    <div className=''>
        <Banner/>
        <ListMovie/>
        <TabMovie/>
    </div>
  )
}
