import React from 'react'
import HeroSection from '../../components/HeroSection'
import PerksBanner from '../../components/PerksBanner'
import PreviouslyWatchedSection from '../../components/PreviouslyWatchedSection'
import PromotionSection from '../../components/PromotionSection'
import ProposedProductsSection from '../../components/ProposedProductsSection'
import TopSection from '../../components/TopSection'

export default function Home() {
    return (
        <>
            <TopSection />
            <PromotionSection />
            <HeroSection />
            <ProposedProductsSection />
            <PromotionSection />
            <PreviouslyWatchedSection />
            <PerksBanner />
        </>
    )
}
