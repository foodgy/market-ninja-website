import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { LINKS } from '@/constants';

const REVIEWS = [
    {
        id: 1,
        author: 'Ansordzr',
        role: 'Селлер на WB',
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
        role: 'E-commerce Manager',
        text: 'Отличный инструмент для сбора данных с маркетплейсов, очень быстрый и простой в использовании. За секунды забирает данные даже с больших категорий, очень помогает в прайс мониторинге, контроле партнеров и анализе конкурентов и категорий. Большое спасибо разработчикам.',
        avatar: {
            type: 'image',
            src: '/images/reviews/veronica.jpg'
        }
    },
    {
        id: 3,
        author: 'Denis V.',
        role: 'Analyst',
        text: 'Использую для мониторинга цен конкурентов на Ozon. Расширение простое, не грузит браузер и делает ровно то, что заявлено.',
        avatar: {
            type: 'initial',
            symbol: 'D',
            color: 'from-violet-400 to-violet-600'
        }
    }
];

export default function Reviews() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Что говорят пользователи</h2>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="flex text-amber-400 text-lg">
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span className="text-slate-600 font-medium">5.0 из 5 в Chrome Web Store</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
                            <p className="text-slate-700 mb-6 italic">
                                &ldquo;{review.text}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                                {review.avatar.type === 'image' ? (
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-100 shrink-0">
                                        <Image
                                            src={review.avatar.src}
                                            alt={review.author}
                                            fill
                                            className="object-cover"
                                            sizes="40px"
                                        />
                                    </div>
                                ) : (
                                    <div className={`w-10 h-10 rounded-full bg-linear-to-br ${review.avatar.color} text-white flex items-center justify-center font-bold shrink-0`}>
                                        {review.avatar.symbol}
                                    </div>
                                )}

                                <div>
                                    <div className="text-sm font-bold text-slate-900">{review.author}</div>
                                    <div className="text-xs text-slate-500">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a href={`${LINKS.CHROME_STORE}/reviews`} target="_blank" className="text-blue-600 font-medium hover:underline" rel="noopener noreferrer">
                        Читать все отзывы в магазине <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs ml-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}