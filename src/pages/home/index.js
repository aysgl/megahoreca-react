import React from 'react'
import HeroSection from '../../components/Advertisement'
import PerksBanner from '../../components/PerksBanner'
import SlickCarouselSection from '../../components/slick/SlickCarouselSection'
import MasonrySection from '../../components/MasonrySection'
import CarouselSection from '../../components/carousel/SliderSection'

export default function Home() {
    return (
        <>
            <CarouselSection />
            <SlickCarouselSection title="PROMOTIES VAN DE WEEK" />
            <HeroSection />
            <MasonrySection />
            <SlickCarouselSection title="PROMOTIES VAN DE WEEK" />
            <SlickCarouselSection title="EERDER BEKEKEN DOOR JOU" card="small gelecek" />
            <PerksBanner />
        </>
    )
}
