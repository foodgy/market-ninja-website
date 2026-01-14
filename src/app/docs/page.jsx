import Link from 'next/link';

import classNames from 'classnames';

import CustomLink from '@/components/shared/CustomLink';
import { MDXContent } from '@/components/shared/MDXContent';
import MobileNav from '@/components/shared/MobileNav';
import SidebarNav from '@/components/shared/SidebarNav';
import { LINKS } from '@/constants';
import { getAllDocs, groupDocsByCategory } from '@/lib/docs';
import { generateBreadcrumbsJsonLd } from '@/lib/json-ld';
import { slugify } from '@/utils/slugify';

export const metadata = {
	title: 'Документация',
	description: 'Полное руководство пользователя Market Ninja.',
};

export default async function Docs() {
	const breadcrumbs = [
		{ name: 'Главная', item: LINKS.SITE_URL },
		{ name: '🚀 Бесплатный парсинг', item: `${LINKS.SITE_URL}/#` },
		{ name: 'Документация', item: `${LINKS.SITE_URL}/docs` }
	];

	const docs = await getAllDocs();
	const menuGroups = groupDocsByCategory(docs);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generateBreadcrumbsJsonLd(breadcrumbs)),
				}}
			/>

			<div className="bg-white min-h-screen pt-20 pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

					<MobileNav menuGroups={menuGroups} />

					<div className="flex flex-col md:flex-row gap-12 py-6 md:py-10">

						<aside className="hidden md:block w-64 shrink-0">
							<div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar">
								<SidebarNav menuGroups={menuGroups} />
							</div>
						</aside>

						<main className="flex-1 min-w-0">
							<div className="hidden md:block mb-8 text-sm text-gray-500">
								<Link href="/" className="hover:text-blue-600">Главная</Link>
								<span className="mx-2 text-gray-400">/</span>
								<span className="text-gray-900">Документация</span>
							</div>

							<div className="mb-12 border-b border-gray-200 pb-8">
								<h1 className="text-4xl font-extrabold text-gray-900 mb-4">Документация</h1>
								<p className="text-xl text-gray-600">
									Руководство по расширению Market Ninja.
								</p>
							</div>

							<div className="space-y-24">
								{docs.map((item) => (
									<article
										key={item.slug}
										id={item.slug}
										className="scroll-mt-28 border-b border-gray-100 pb-16 last:border-0"
									>
										<div className="mb-8">
											<div className="flex items-center gap-3 text-blue-600 mb-3">
												<span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-md">
													{item.category}
												</span>
											</div>
											<h2 className="group relative text-2xl font-semibold text-gray-900">
												{item.title}
												<CustomLink
													href={`#${slugify(item.title)}`}
													className={classNames(
														'absolute -left-6 top-0 opacity-0 transition-opacity',
														'text-slate-400 no-underline px-1',
														'group-hover:opacity-100 not-prose',
													)}
													aria-label="Ссылка на этот раздел"
												>
													#
												</CustomLink>
											</h2>
										</div>

										<div className="prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-a:text-blue-600 prose-img:rounded-xl">
											<MDXContent
												source={item.content}
												variant="default"
												idPrefix={item.slug}
											/>
										</div>
									</article>
								))}
							</div>
						</main>

					</div>
				</div>
			</div>
		</>
	);
}