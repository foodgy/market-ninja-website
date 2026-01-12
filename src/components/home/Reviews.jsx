import classNames from 'classnames';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { LINKS } from '@/constants';

const REVIEWS = [
    {
        id: 1,
        author: 'Ansordzr',
        rating: 5,
        heading: 'Легкое, быстрое, удобное',
        text: 'Огромное спасибо за расширение. Очень помогает. Легкое, быстрое, данные легко перекинуть для анализа.',
        link: 'https://chromewebstore.google.com/reviews/eacab541-810a-4e4a-bcd6-8cb9bf5a56be',
        avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKoHbA-MIQuoCxYiAci77OX9Fq8rZMKnYJc9jA2p2ISvl9EXg=s96-w96-h96',
    },
    {
        id: 2,
        author: 'Veronica Järvinen',
        rating: 5,
        heading: 'Быстрый и простой',
        link: 'https://chromewebstore.google.com/reviews/c0e2fa1c-acec-4d33-ab9a-af31c2602d46',
        text: 'За секунды забирает данные даже с больших категорий, очень помогает в прайс мониторинге, контроле партнеров и анализе конкурентов и категорий.',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWn3IGNYheMGosP3JFS3gr1Cv_tiS-bxN_7fMEKLyCDdtaGxTPs=s96-w96-h96',
    },
    {
        id: 3,
        author: 'Дмитрий Новиков',
        rating: 5,
        heading: 'Отлично собирает данные',
        text: 'Прекрасно работает. Собрал данных для обучения в разработке своего каталога.',
        link: 'https://chromewebstore.google.com/reviews/51ba8e57-f59e-435a-8ecd-b25a46930ec4',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV-cuOgvmWsv1_yDbzHgZDz7UAj4pLos39UjsPi7-Wh0VQe6dw=s96-w96-h96',
    }
];

export default function Reviews() {
    const Stars = ({ count = 5, className = '' }) => {
        return (
            <div className={className}>
                {Array.from({ length: count }).map((_, i) => (
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className='text-yellow-400'
                    />
                ))}
            </div>
        )
    }

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-slate-900">Что пишут пользователи</h2>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">Реальные отзывы из <a href={`${LINKS.CHROME_STORE}/reviews`} target="_blank" rel="noopener noreferrer" className="border-b border-gray-600 hover:text-blue-600 hover:border-0">Chrome Web Store</a></p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <a
                            key={review.id}
                            href={review.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classNames(
                                'flex flex-col space-y-3 bg-slate-50 p-8',
                                'border border-slate-200 rounded-2xl',
                                'hover:bg-slate-100 transition-all',
                            )}
                        >
                            <div className="flex flex-row gap-2 mb-4 items-center">
                                <div className="relative w-7 h-7">
                                    <Image
                                        src="/images/reviews/cws-logo.png"
                                        alt="Chrome Web Store"
                                        className="object-cover"
                                        width={28}
                                        height={28}
                                    />
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className="text-xs font-medium text-gray-500">Chrome Web Store</div>
                                    <div className="flex flex-row justify-between items-center">
                                        <Stars count={review.rating} className="flex flex-row gap-1 text-[11px]" />
                                    </div>
                                </div>
                            </div>
                            {review.heading && (
                                <div className="flex-1">
                                    <h3 className="font-semibold text-base text-slate-900">
                                        {review.heading}
                                    </h3>
                                </div>
                            )}
                            <blockquote className="flex-1 text-sm text-slate-700 leading-relaxed mb-6">
                                &ldquo;{review.text}&rdquo;
                            </blockquote>
                            <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-100 shrink-0">
                                    <Image
                                        src={review.avatar}
                                        alt={review.author}
                                        className="object-cover"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">{review.author}</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}