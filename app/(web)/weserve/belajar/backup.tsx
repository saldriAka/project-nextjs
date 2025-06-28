import Image from "next/image";
import Link from "next/link";
import ImageBanner from '@/assets/illustration.png'
import ImageBanner2 from '@/assets/illustration_2.png'
import Image1 from '@/assets/image.png'


export default function HomePage() {
return (
  <body className="bg-[#F1F4F5] font-['Poppins']">
    <section className="hero max-w-7xl mx-auto py-12 px-5">
      <div className="flex flex-col gap-y-10 md:flex-row  items-center justify-between">
        <div className="flex flex-col gap-y-10 md:basis-2/4 lg:basis-3/6">
          <div className="w-fit small-badge flex flex-row items-center bg-white rounded-full px-3 py-2 gap-x-2">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#080C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.99998 3.5H8.99998C7.04998 9.34 7.04998 15.66 8.99998 21.5H7.99998" stroke="#080C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 3.5C16.95 9.34 16.95 15.66 15 21.5" stroke="#080C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 16.5V15.5C8.84 17.45 15.16 17.45 21 15.5V16.5" stroke="#080C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 9.50001C8.84 7.55001 15.16 7.55001 21 9.50001" stroke="#080C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm text-indigo-950 font-semibold">
              We host more than 120,000 websites 
            </p>
          </div>
          <div className="flex gap-y-2 flex-col">
            <h1 className="text-indigo-950 font-['Clash_Display'] lg:text-[70px] text-4xl leading-none">
                Grow Online <br className="lg:block hidden"/> Business Faster.
            </h1>
            <p className="text-base leading-loose text-gray-500">
              We provide a variety of servers to grow your users <br className="lg:block hidden"/>
              acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-4 gap-y-8 items-center">
            <Link href={'/login'} className="w-full text-center lg:w-fit text-lg bg-violet-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-950">Try Free Trial</Link>
            <Link href="" className="flex gap-x-2 text-violet-700 font-semibold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15002C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z" stroke="#640EF1" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 5.25V9.15002C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15002V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z" stroke="#640EF1" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.40002 22H14.6" stroke="#640EF1" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 18.4V22" stroke="#640EF1" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.4955 7.25H18.5045" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.6957 7.25H15.7047" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.8954 7.25H12.9044" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Schedule a Demo
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-3">
          <Image src={ImageBanner} width={500} height={500} alt="hero" className="h-[397px] lg:h-[550px] md:basis-2/4" />
        </div>
      </div>
    </section>  
  </body>
  );
}