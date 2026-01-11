import classNames from 'classnames';
import Image from 'next/image';

export default function Platforms() {
    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div
                className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
                    Работает на ведущих маркетплейсах
                </p>

                <div
                    className={classNames(
                        'flex flex-wrap justify-center items-center gap-10 md:gap-16',
                        'grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200'
                    )}
                >
                    <Image
                        src="/images/home/wb.png"
                        width={960}
                        height={145}
                        alt="Wildberries"
                        className="h-8 md:h-8 w-auto"
                    />
                    <Image
                        src="/images/home/ozon.png"
                        width={500}
                        height={110}
                        alt="Ozon"
                        className="h-7 md:h-7 w-auto"
                    />
                    <Image
                        src="/images/home/lamoda.png"
                        width={500}
                        height={110}
                        alt="Lamoda"
                        className="h-8 md:h-8 w-auto opacity-80"
                    />
                </div>
            </div>
        </section >
    );
}