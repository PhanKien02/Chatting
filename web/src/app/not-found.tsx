import Link from "next/link";
import Image from "next/image";

const Shape = () => {
    return (
        <svg className='absolute top-0 right-0 hidden sm:block -z-[1]' width='544' height='495' viewBox='0 0 544 495' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='336.426' y='-167.539' width='175' height='526' rx='87.5' transform='rotate(39.7614 336.426 -167.539)' fill='#FFC107' />
            <rect x='523.426' y='-89.5391' width='175' height='526' rx='87.5' transform='rotate(39.7614 523.426 -89.5391)' fill='#2F80ED' />
            <rect x='721.426' y='-21.5391' width='175' height='526' rx='87.5' transform='rotate(39.7614 721.426 -21.5391)' fill='#FF774D' />
        </svg>
    );
};
export default function NotFound() {
    return (
        <section className='h-screen bg-white dark:bg-[#0b1727] text-[#04004d] dark:text-white relative overflow-hidden z-[1]'>
            <Shape />
            <div className='mt-48'>
                <div className='flex justify-center items-end gap-6 flex-wrap'>
                    <div className='md:mb-36'>
                        <h2 className='text-[80px] leading-none font-bold md:text-[100px] mb-6'>404</h2>
                        <p className='text-xl leading-none opacity-80 md:text-[28px]'>Something Missing ,Page not found!</p>
                        <div className='mt-10'>
                            <Link type='button' className='py-3 px-9 text-lg font-medium bg-blue-600 hover:bg-opacity-90 duration-300 rounded text-white mt-20' href='/'>
                                Trang chủ
                            </Link>
                        </div>
                    </div>
                    <Image src='https://cdn.easyfrontend.com/pictures/httpcodes/four.png' alt='image' width={300} height={200} className='max-w-full h-auto' unoptimized />
                </div>
            </div>
        </section>
    );
}
