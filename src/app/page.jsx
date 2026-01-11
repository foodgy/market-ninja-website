import Hero from '@/components/home/Hero';
import Platforms from '@/components/home/Platforms';
import Features from '@/components/home/Features';
import DataPoints from '@/components/home/DataPoints';
import Reviews from '@/components/home/Reviews';
import { generateHomepageJsonLd } from '@/lib/json-ld';

export default function Home() {
    const jsonLd = generateHomepageJsonLd();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
                }}
            />

            <Hero />
            <Platforms />
            <Features />
            <DataPoints />
            <Reviews />
        </>
    );
}