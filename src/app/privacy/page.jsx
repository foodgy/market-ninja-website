import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

import remarkGfm from 'remark-gfm';

import Wrapper from '@/components/privacy/Wrapper';
import { MdxComponents } from '@/components/shared/Mdx';
import { LINKS } from '@/constants'; 
import { generateBreadcrumbsJsonLd } from '@/lib/json-ld';
import { getPrivacyContent } from '@/lib/privacy';

export const metadata = {
    title: 'Политика конфиденциальности',
    description: 'Политика конфиденциальности Market Ninja.',
};

export default async function Privacy() {
    const ruData = await getPrivacyContent('ru');
    const enData = await getPrivacyContent('en');

    const breadcrumbs = [
        { name: 'Главная', item: LINKS.SITE_URL },
        { name: 'Политика конфиденциальности', item: `${LINKS.SITE_URL}/privacy` }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbsJsonLd(breadcrumbs)),
                }}
            />

            <div className="bg-white min-h-screen pt-20 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-8 text-sm text-gray-500">
                        <Link href="/" className="hover:text-blue-600">Главная</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-900">Политика конфиденциальности</span>
                    </div>

                    <Wrapper
                        metaRu={ruData.meta}
                        metaEn={enData.meta}
                        childrenRu={
                            <MDXRemote
                                source={ruData.content}
                                components={MdxComponents}
                                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                            />
                        }
                        childrenEn={
                            <MDXRemote
                                source={enData.content}
                                components={MdxComponents}
                                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                            />
                        }
                    />

                </div>
            </div>
        </>
    );
}