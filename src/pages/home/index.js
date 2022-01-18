import React from 'react'
import Advertisement from '../../components/advertisement/Advertisement'
import PerksBanner from '../../components/advertisement/PerksBanner'
import SlickCarouselSection from '../../components/slick/SlickCarouselSection'
import ReviewCarouselSection from "../../components/slick/ReviewCarouselSection"
import MasonrySection from '../../components/MasonrySection'
import CarouselSection from '../../components/carousel/SliderSection'

export default function Home() {
    return (
        <>
            <CarouselSection />
            <SlickCarouselSection api="https://jsonplaceholder.typicode.com/users" title="PROMOTIES VAN DE WEEK" />
            <Advertisement />
            <MasonrySection api="https://jsonplaceholder.typicode.com/users" />
            <SlickCarouselSection api="https://jsonplaceholder.typicode.com/comments" title="PROMOTIES VAN DE WEEK" />
            <ReviewCarouselSection title="EERDER BEKEKEN DOOR JOU" api="https://jsonplaceholder.typicode.com/users" />
            <PerksBanner />
        </>
    )
}
