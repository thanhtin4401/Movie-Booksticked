import React from 'react'
import Banner from '../../Components/Banner/Banner'
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel'
import TabMovie from '../../Components/TabMovie/TabMovie'
import CommingSoonMovie from './CommingSoonMovie'
import IntroductMovie from './IntroductMovie'
import ListMovie from './ListMovie'

export default function HomePage() {
  return (
    <div className=''>
      <BannerCarousel/>
        {/* <Banner/> */}
        <ListMovie/>
        <CommingSoonMovie/>
        <TabMovie/>
        <IntroductMovie/>
    </div>
  )
}
