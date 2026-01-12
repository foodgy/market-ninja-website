import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { LINKS } from '@/constants';

const REVIEWS = [
    {
        id: 1,
        author: 'Ansordzr',
        text: 'Огромное спасибо за расширение. Очень помогает. Легкое, быстрое, данные легко перекинуть для анализа.',
        avatar: {
            type: 'initial',
            symbol: 'A',
            color: 'from-blue-400 to-blue-600'
        }
    },
    {
        id: 2,
        author: 'Veronica Järvinen',
        text: 'Отличный инструмент для сбора данных с маркетплейсов, очень быстрый и простой в использовании. За секунды забирает данные даже с больших категорий, очень помогает в прайс мониторинге, контроле партнеров и анализе конкурентов и категорий. Большое спасибо разработчикам.',
        avatar: {
            type: 'image',
            src: '/images/reviews/veronica.jpg'
        }
    },
    {
        id: 3,
        author: 'Denis V.',
        text: 'Использую для мониторинга цен конкурентов на Ozon. Расширение простое, не грузит браузер и делает ровно то, что заявлено.',
        avatar: {
            type: 'initial',
            symbol: 'D',
            color: 'from-violet-400 to-violet-600'
        }
    }
];

export default function Reviews() {
    const Stars = ({ count = 5, className = "" }) => {
        return (
            <div className={`flex items-center ${className}`}>
                {Array.from({ length: count }).map((_, i) => (
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="w-5 h-5 text-amber-400"
                    />
                ))}
            </div>
        )
    }
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-slate-900">Что говорят пользователи</h2>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">Реальные отзывы из <a href={`${LINKS.CHROME_STORE}/reviews`} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Chrome Web Store</a></p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="flex flex-col bg-white p-8 rounded-2xl border border-slate-200">
                            <div className="flex mb-4">
                                <Stars count={5} className="mb-4" />
                            </div>
                            <blockquote className="grow text-sm text-slate-700 leading-relaxed mb-6">
                                &ldquo;{review.text}&rdquo;
                            </blockquote>

                            <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                                {review.avatar.type === 'image' ? (
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-100 shrink-0">
                                        <Image
                                            src={review.avatar.src}
                                            alt={review.author}
                                            fill
                                            className="object-cover"
                                            sizes={40}
                                        />
                                    </div>
                                ) : (
                                    <div className={`w-10 h-10 rounded-full bg-linear-to-br ${review.avatar.color} text-white flex items-center justify-center font-semibold shrink-0`}>
                                        {review.avatar.symbol}
                                    </div>
                                )}

                                <div>
                                    <div className="text-sm font-semibold text-slate-900">{review.author}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}