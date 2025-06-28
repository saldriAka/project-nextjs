import Link from "next/link";

export function Footer() {
  return (
    <>
      <section className="closing mx-auto py-12 max-w-7xl bg-white p-14 rounded-3xl z-20 relative mt-10">
        <div className="grid grid-cols-2 gap-x-10 items-center">
          <div className="flex flex-col gap-y-10">
            <div className="w-fit small-badge flex flex-row bg-white rounded-full px-3 py-2 gap-x-2">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#080C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.99998 3.5H8.99998C7.04998 9.34 7.04998 15.66 8.99998 21.5H7.99998" stroke="#080C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3.5C16.95 9.34 16.95 15.66 15 21.5" stroke="#080C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 16.5V15.5C8.84 17.45 15.16 17.45 21 15.5V16.5" stroke="#080C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 9.50001C8.84 7.55001 15.16 7.55001 21 9.50001" stroke="#080C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-base text-indigo-950 font-semibold">
                Kami mengelola lebih dari 120.000 situs web
              </p>
            </div>
            <div className="flex gap-y-2 flex-col">
              <h1 className="text-indigo-950 font-['Clash_Display'] text-5xl">
                Mulai Bertumbuh
              </h1>
              <p className="text-base leading-loose text-indigo-950">
                Kami menyediakan berbagai server untuk memudahkan akuisisi pengguna dan meningkatkan penjualan.
              </p>
            </div>
            <div className="flex flex-row gap-x-4 items-center">
              <Link href={'/login'} className="text-lg bg-[#080C2E] text-white px-8 py-4 rounded-full font-semibold text-base">Selengkapnya</Link>
              <Link href="" className="flex gap-x-2 text-white font-semibold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15002C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 5.25V9.15002C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15002V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.40002 22H14.6" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 18.3999V21.9999" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.4955 7.25H18.5045" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.6957 7.25H15.7047" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.8954 7.25H12.9044" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                Schedule a Demo
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-5 gap-y-5">
            <div className="relative group transition-all ease-in-out duration-500 closing-card-feature gap-y-5 justify-center flex flex-col items-center bg-white p-5 rounded-2xl min-h-[160px]">
              
              <div className="z-10 flex flex-col gap-y-5 justify-center items-center">
                

                <svg className=" block" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.25 42.1666H28.75C38.3334 42.1666 42.1667 38.3333 42.1667 28.7499V17.2499C42.1667 7.66659 38.3334 3.83325 28.75 3.83325H17.25C7.66671 3.83325 3.83337 7.66659 3.83337 17.2499V28.7499C3.83337 38.3333 7.66671 42.1666 17.25 42.1666Z" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.3999 17.1924L13.6274 21.9649C13.0716 22.5207 13.0716 23.4599 13.6274 24.0157L18.3999 28.7882" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.6 17.1924L32.3725 21.9649C32.9283 22.5207 32.9283 23.4599 32.3725 24.0157L27.6 28.7882" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.25 42.1666H28.75C38.3334 42.1666 42.1667 38.3333 42.1667 28.7499V17.2499C42.1667 7.66659 38.3334 3.83325 28.75 3.83325H17.25C7.66671 3.83325 3.83337 7.66659 3.83337 17.2499V28.7499C3.83337 38.3333 7.66671 42.1666 17.25 42.1666Z" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.3999 17.1924L13.6274 21.9649C13.0716 22.5207 13.0716 23.4599 13.6274 24.0157L18.3999 28.7882" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.6 17.1924L32.3725 21.9649C32.9283 22.5207 32.9283 23.4599 32.3725 24.0157L27.6 28.7882" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.25 42.1666H28.75C38.3334 42.1666 42.1667 38.3333 42.1667 28.7499V17.2499C42.1667 7.66659 38.3334 3.83325 28.75 3.83325H17.25C7.66671 3.83325 3.83337 7.66659 3.83337 17.2499V28.7499C3.83337 38.3333 7.66671 42.1666 17.25 42.1666Z" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.3999 17.1924L13.6274 21.9649C13.0716 22.5207 13.0716 23.4599 13.6274 24.0157L18.3999 28.7882" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.6 17.1924L32.3725 21.9649C32.9283 22.5207 32.9283 23.4599 32.3725 24.0157L27.6 28.7882" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <div className="flex flex-col gap-y-0 items-center">
                  <h3 className="font-bold text-lg text-indigo-950">
                    Web Crawl
                  </h3>
                  {/* <a href="#" className="text-base text-gray-500">  
                    Selengkapnya
                  </a> */}
                </div>
              </div>
            </div>
            <div className="relative group  transition-all ease-in-out duration-500 closing-card-feature gap-y-5 justify-center flex flex-col items-center bg-white p-5 rounded-2xl min-h-[160px]">
              
              <div className="z-10 flex flex-col gap-y-5 justify-center items-center">
               

                <svg className="" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4001 38.3334H27.6001C35.2667 38.3334 38.3334 35.2667 38.3334 27.6001V18.4001C38.3334 10.7334 35.2667 7.66675 27.6001 7.66675H18.4001C10.7334 7.66675 7.66675 10.7334 7.66675 18.4001V27.6001C7.66675 35.2667 10.7334 38.3334 18.4001 38.3334Z" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.1251 32.5834H25.8751C30.6667 32.5834 32.5834 30.6667 32.5834 25.8751V20.1251C32.5834 15.3334 30.6667 13.4167 25.8751 13.4167H20.1251C15.3334 13.4167 13.4167 15.3334 13.4167 20.1251V25.8751C13.4167 30.6667 15.3334 32.5834 20.1251 32.5834Z" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.3525 7.66659V3.83325" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 7.66659V3.83325" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30.6667 7.66659V3.83325" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M38.3333 15.3333H42.1666" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M38.3333 23H42.1666" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M38.3333 30.6667H42.1666" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30.6667 38.3333V42.1666" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.0193 38.3333V42.1666" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.3525 38.3333V42.1666" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.83325 15.3333H7.66659" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.83325 23H7.66659" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.83325 30.6667H7.66659" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 18.5916L21.1984 21.7349C20.7959 22.4249 21.1217 22.9999 21.9267 22.9999H24.0734C24.8784 22.9999 25.2042 23.5749 24.8017 24.2649L23 27.4082" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex flex-col gap-y-0 items-center">
                  <h3 className="font-bold text-lg text-indigo-950">
                    Fast Report
                  </h3>
                </div>
              </div>
              
            </div>
            <div className="relative group  transition-all ease-in-out duration-500 closing-card-feature gap-y-5 justify-center flex flex-col items-center bg-white p-5 rounded-2xl min-h-[160px]">
              
              <div className="z-10 flex flex-col gap-y-5 justify-center items-center">
               

                <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1059 5.02424L10.5417 8.6084C8.33755 9.43256 6.53589 12.0392 6.53589 14.3967V28.6375C6.53589 30.8992 8.03091 33.87 9.85174 35.2309L18.0934 41.3834C20.7959 43.4151 25.2425 43.4151 27.945 41.3834L36.1867 35.2309C38.0076 33.87 39.5025 30.8992 39.5025 28.6375V14.3967C39.5025 12.0392 37.7009 9.43256 35.4967 8.6084L25.9325 5.02424C24.3034 4.43007 21.6967 4.43007 20.1059 5.02424Z" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.0001 21.6801C22.9234 21.6801 22.8276 21.6801 22.7509 21.6801C20.9492 21.6226 19.5117 20.1275 19.5117 18.3067C19.5117 16.4475 21.0259 14.9333 22.8851 14.9333C24.7442 14.9333 26.2584 16.4475 26.2584 18.3067C26.2393 20.1467 24.8017 21.6226 23.0001 21.6801Z" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.1859 27.0467C17.3459 28.2734 17.3459 30.2858 19.1859 31.5125C21.2751 32.9117 24.7059 32.9117 26.7951 31.5125C28.6351 30.2858 28.6351 28.2734 26.7951 27.0467C24.7251 25.6475 21.2942 25.6475 19.1859 27.0467Z" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


                <div className="flex flex-col gap-y-0 items-center">
                  <h3 className="font-bold text-lg text-indigo-950">
                    Anti-DDos
                  </h3>
                </div>
              </div>
              
            </div>
            <div className="relative group  transition-all ease-in-out duration-500 closing-card-feature gap-y-5 justify-center flex flex-col items-center bg-white p-5 rounded-2xl min-h-[160px]">
              
              <div className="z-10 flex flex-col gap-y-5 justify-center items-center">
                

                <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1866 35.2876V31.3201" stroke="#640EF1" strokeWidth="3" strokeLinecap="round"/>
                <path d="M23 35.2875V27.3525" stroke="#640EF1" strokeWidth="3" strokeLinecap="round"/>
                <path d="M32.8134 35.2874V23.3657" stroke="#640EF1" strokeWidth="3" strokeLinecap="round"/>
                <path d="M32.8133 11.7124L31.9316 12.7474C27.0441 18.4591 20.4891 22.5032 13.1866 24.3241" stroke="#640EF1" strokeWidth="3" strokeLinecap="round"/>
                <path d="M27.1975 11.7124H32.8133V17.3091" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.25 42.6666H28.75C38.3334 42.6666 42.1667 38.8333 42.1667 29.2499V17.7499C42.1667 8.16659 38.3334 4.33325 28.75 4.33325H17.25C7.66671 4.33325 3.83337 8.16659 3.83337 17.7499V29.2499C3.83337 38.8333 7.66671 42.6666 17.25 42.6666Z" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <div className="flex flex-col gap-y-0 items-center">
                  <h3 className="font-bold text-lg text-indigo-950">
                    Auto-Scale
                  </h3>
                </div>
              </div>
              
            </div>
            <div className="relative group  transition-all ease-in-out duration-500 closing-card-feature gap-y-5 justify-center flex flex-col items-center bg-white p-5 rounded-2xl min-h-[160px]">
              
              <div className="z-10 flex flex-col gap-y-5 justify-center items-center">
                
              

                <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4583 42.6667V29.25" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.4583 10.0833V4.33325" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M33.5417 42.6667V36.9167" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M33.5417 17.7499V4.33325" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.2083 13.9166V25.4166C18.2083 27.5249 17.2499 29.2499 14.3749 29.2499H10.5416C7.66659 29.2499 6.70825 27.5249 6.70825 25.4166V13.9166C6.70825 11.8083 7.66659 10.0833 10.5416 10.0833H14.3749C17.2499 10.0833 18.2083 11.8083 18.2083 13.9166Z" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M39.2917 21.5833V33.0833C39.2917 35.1917 38.3334 36.9167 35.4584 36.9167H31.6251C28.7501 36.9167 27.7917 35.1917 27.7917 33.0833V21.5833C27.7917 19.475 28.7501 17.75 31.6251 17.75H35.4584C38.3334 17.75 39.2917 19.475 39.2917 21.5833Z" stroke="#640EF1" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


                <div className="flex flex-col gap-y-0 items-center">
                  <h3 className=" font-bold text-lg text-indigo-950">
                    AI Perform
                  </h3>
                </div>
              </div>
              
            </div>
            <div className="relative group  transition-all ease-in-out duration-500 closing-card-feature gap-y-5 justify-center flex flex-col items-center bg-white p-5 rounded-2xl min-h-[160px]">
              
              <div className="z-10 flex flex-col gap-y-5 justify-center items-center">
                
              

                <svg  width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.0082 36.8784H13.9916C13.1866 36.8784 12.2857 36.2459 12.0174 35.4793L4.08239 13.2843C2.95156 10.1026 4.27406 9.1251 6.99573 11.0801L14.4707 16.4276C15.7166 17.2901 17.1349 16.8493 17.6716 15.4501L21.0449 6.46094C22.1182 3.58594 23.9007 3.58594 24.9741 6.46094L28.3474 15.4501C28.8841 16.8493 30.3024 17.2901 31.5291 16.4276L38.5441 11.4251C41.5341 9.27844 42.9716 10.3709 41.7449 13.8401L34.0016 35.5176C33.7141 36.2459 32.8132 36.8784 32.0082 36.8784Z" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.4583 42.6667H33.5416" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.2083 27.3333H27.7916" stroke="#640EF1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <div className="flex flex-col gap-y-0 items-center">
                  <h3 className="font-bold text-lg text-indigo-950">
                    Anti-DDos
                  </h3> 
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="footer w-screen -mt-[230px] bg-[#070C29] -z-10 ">
        <div className="max-w-6xl mx-auto py-6 grid grid-cols-5 pt-[330px] gap-x-10">
            <div className="company col-span-2 flex flex-col gap-y-7"> 
              <svg width="175" height="42" viewBox="0 0 175 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0246 33.1115C22.0605 29.4401 21.1297 26.4545 19.9457 26.4429C18.7616 26.4314 17.7727 29.3983 17.7368 33.0696C17.7009 36.7411 18.6317 39.7267 19.8157 39.7383C20.9998 39.7499 21.9888 36.783 22.0246 33.1115Z" fill="#640EF1"/>
                <path d="M15.1576 32.2777C17.1728 29.2086 18.0041 26.1937 17.0144 25.5438C16.0245 24.8939 13.5884 26.855 11.5732 29.9241C9.55797 32.9933 8.72669 36.0081 9.71645 36.6581C10.7063 37.308 13.1423 35.3469 15.1576 32.2777Z" fill="#640EF1"/>
                <path d="M9.82334 27.8744C13.1781 26.3822 15.5074 24.2955 15.0261 23.2136C14.5449 22.1316 11.4353 22.4643 8.08062 23.9565C4.72593 25.4487 2.39655 27.5354 2.87779 28.6173C3.35902 29.6992 6.46865 29.3666 9.82334 27.8744Z" fill="#640EF1"/>
                <path d="M14.6236 20.1795C14.8037 19.0092 12.008 17.6076 8.37917 17.0491C4.75028 16.4905 1.66249 16.9865 1.48236 18.1568C1.30223 19.3272 4.09797 20.7286 7.72684 21.2872C11.3557 21.8457 14.4435 21.3497 14.6236 20.1795Z" fill="#640EF1"/>
                <path d="M15.9265 17.3917C16.7106 16.5045 15.1161 13.8142 12.3649 11.3827C9.61381 8.9513 6.74791 7.6995 5.96376 8.58674C5.17962 9.47401 6.77418 12.1643 9.52533 14.5958C12.2765 17.0272 15.1424 18.279 15.9265 17.3917Z" fill="#640EF1"/>
                <path d="M18.5211 15.7623C19.6605 15.4399 19.7737 12.3146 18.774 8.7817C17.7743 5.24883 16.0402 2.64624 14.9009 2.96865C13.7615 3.29106 13.6483 6.41637 14.648 9.94927C15.6477 13.4821 17.3818 16.0847 18.5211 15.7623Z" fill="#640EF1"/>
                <path d="M25.5668 10.0592C26.636 6.54673 26.5845 3.41979 25.4517 3.07498C24.3189 2.73017 22.5338 5.29805 21.4646 8.81053C20.3955 12.323 20.447 15.4499 21.5798 15.7947C22.7126 16.1395 24.4977 13.5717 25.5668 10.0592Z" fill="#640EF1"/>
                <path d="M30.6011 14.8053C33.3993 12.4281 35.0461 9.76948 34.2794 8.8671C33.5128 7.9647 30.6229 9.16028 27.8249 11.5374C25.0267 13.9146 23.3799 16.5732 24.1465 17.4756C24.9132 18.378 27.803 17.1825 30.6011 14.8053Z" fill="#640EF1"/>
                <path d="M32.2657 21.5215C35.9049 21.0347 38.7277 19.6886 38.5707 18.5149C38.4137 17.3413 35.3363 16.7846 31.6971 17.2714C28.058 17.7583 25.2351 19.1043 25.3921 20.278C25.5492 21.4516 28.6265 22.0084 32.2657 21.5215Z" fill="#640EF1"/>
                <path d="M36.9603 28.9528C37.4628 27.8806 35.175 25.7484 31.8504 24.1903C28.5258 22.6322 25.4234 22.2384 24.9209 23.3105C24.4184 24.3828 26.7062 26.515 30.0308 28.0731C33.3554 29.6311 36.4579 30.025 36.9603 28.9528Z" fill="#640EF1"/>
                <path d="M29.9671 36.864C30.9695 36.2338 30.1978 33.203 28.2435 30.0948C26.2892 26.9866 23.8922 24.9778 22.8898 25.6081C21.8874 26.2383 22.6591 29.269 24.6134 32.3773C26.5678 35.4855 28.9647 37.4943 29.9671 36.864Z" fill="#640EF1"/>
                <path d="M70.5 15.376L66.496 31H61.148L58.32 20.528L55.464 31H50.116L46.112 15.376H50.9L52.972 26.632L55.884 15.376H60.98L63.976 26.66L66.048 15.376H70.5ZM87.074 22.768C87.074 23.16 87.0274 23.5893 86.934 24.056H76.098C76.154 25.232 76.4527 26.0813 76.994 26.604C77.5354 27.108 78.226 27.36 79.066 27.36C79.7754 27.36 80.3634 27.1827 80.83 26.828C81.2967 26.4733 81.6047 26.016 81.754 25.456H86.822C86.6167 26.5573 86.1687 27.5467 85.478 28.424C84.7874 29.2827 83.91 29.964 82.846 30.468C81.782 30.9533 80.5967 31.196 79.29 31.196C77.7594 31.196 76.3967 30.8787 75.202 30.244C74.026 29.5907 73.102 28.6573 72.43 27.444C71.758 26.2307 71.422 24.812 71.422 23.188C71.422 21.5453 71.7487 20.1267 72.402 18.932C73.074 17.7187 74.0074 16.7947 75.202 16.16C76.3967 15.5067 77.7594 15.18 79.29 15.18C80.8394 15.18 82.202 15.4973 83.378 16.132C84.554 16.7667 85.4594 17.6627 86.094 18.82C86.7474 19.9587 87.074 21.2747 87.074 22.768ZM82.23 22.04C82.2487 21.0133 81.9687 20.248 81.39 19.744C80.83 19.2213 80.13 18.96 79.29 18.96C78.4127 18.96 77.6847 19.2213 77.106 19.744C76.5274 20.2667 76.2007 21.032 76.126 22.04H82.23ZM95.254 15.18C97.2326 15.18 98.81 15.6747 99.986 16.664C101.181 17.6533 101.927 18.96 102.226 20.584H97.746C97.6153 19.9493 97.3166 19.4547 96.85 19.1C96.402 18.7267 95.8326 18.54 95.142 18.54C94.6006 18.54 94.19 18.6613 93.91 18.904C93.63 19.128 93.49 19.4547 93.49 19.884C93.49 20.3693 93.742 20.7333 94.246 20.976C94.7686 21.2187 95.5806 21.4613 96.682 21.704C97.8766 21.984 98.8566 22.2733 99.622 22.572C100.387 22.852 101.05 23.3187 101.61 23.972C102.17 24.6253 102.45 25.5027 102.45 26.604C102.45 27.5 102.207 28.2933 101.722 28.984C101.237 29.6747 100.537 30.216 99.622 30.608C98.7073 31 97.6246 31.196 96.374 31.196C94.2646 31.196 92.5753 30.7293 91.306 29.796C90.0366 28.8627 89.262 27.528 88.982 25.792H93.602C93.6766 26.464 93.9566 26.9773 94.442 27.332C94.946 27.6867 95.59 27.864 96.374 27.864C96.9153 27.864 97.326 27.7427 97.606 27.5C97.886 27.2387 98.026 26.9027 98.026 26.492C98.026 25.9507 97.7646 25.568 97.242 25.344C96.738 25.1013 95.9073 24.8493 94.75 24.588C93.5926 24.3453 92.6406 24.084 91.894 23.804C91.1473 23.524 90.5033 23.076 89.962 22.46C89.4206 21.8253 89.15 20.9667 89.15 19.884C89.15 18.484 89.682 17.3547 90.746 16.496C91.81 15.6187 93.3126 15.18 95.254 15.18ZM119.941 22.768C119.941 23.16 119.895 23.5893 119.801 24.056H108.965C109.021 25.232 109.32 26.0813 109.861 26.604C110.403 27.108 111.093 27.36 111.933 27.36C112.643 27.36 113.231 27.1827 113.697 26.828C114.164 26.4733 114.472 26.016 114.621 25.456H119.689C119.484 26.5573 119.036 27.5467 118.345 28.424C117.655 29.2827 116.777 29.964 115.713 30.468C114.649 30.9533 113.464 31.196 112.157 31.196C110.627 31.196 109.264 30.8787 108.069 30.244C106.893 29.5907 105.969 28.6573 105.297 27.444C104.625 26.2307 104.289 24.812 104.289 23.188C104.289 21.5453 104.616 20.1267 105.269 18.932C105.941 17.7187 106.875 16.7947 108.069 16.16C109.264 15.5067 110.627 15.18 112.157 15.18C113.707 15.18 115.069 15.4973 116.245 16.132C117.421 16.7667 118.327 17.6627 118.961 18.82C119.615 19.9587 119.941 21.2747 119.941 22.768ZM115.097 22.04C115.116 21.0133 114.836 20.248 114.257 19.744C113.697 19.2213 112.997 18.96 112.157 18.96C111.28 18.96 110.552 19.2213 109.973 19.744C109.395 20.2667 109.068 21.032 108.993 22.04H115.097ZM127.225 18.316C127.822 17.364 128.588 16.608 129.521 16.048C130.473 15.488 131.5 15.208 132.601 15.208V20.332H131.229C129.96 20.332 128.97 20.6027 128.261 21.144C127.57 21.6853 127.225 22.6 127.225 23.888V31H122.437V15.376H127.225V18.316ZM141.829 26.324L145.217 15.376H150.313L144.769 31H138.833L133.289 15.376H138.385L141.829 26.324ZM167.137 22.768C167.137 23.16 167.09 23.5893 166.997 24.056H156.161C156.217 25.232 156.515 26.0813 157.057 26.604C157.598 27.108 158.289 27.36 159.129 27.36C159.838 27.36 160.426 27.1827 160.893 26.828C161.359 26.4733 161.667 26.016 161.817 25.456H166.885C166.679 26.5573 166.231 27.5467 165.541 28.424C164.85 29.2827 163.973 29.964 162.909 30.468C161.845 30.9533 160.659 31.196 159.353 31.196C157.822 31.196 156.459 30.8787 155.265 30.244C154.089 29.5907 153.165 28.6573 152.493 27.444C151.821 26.2307 151.485 24.812 151.485 23.188C151.485 21.5453 151.811 20.1267 152.465 18.932C153.137 17.7187 154.07 16.7947 155.265 16.16C156.459 15.5067 157.822 15.18 159.353 15.18C160.902 15.18 162.265 15.4973 163.441 16.132C164.617 16.7667 165.522 17.6627 166.157 18.82C166.81 19.9587 167.137 21.2747 167.137 22.768ZM162.293 22.04C162.311 21.0133 162.031 20.248 161.453 19.744C160.893 19.2213 160.193 18.96 159.353 18.96C158.475 18.96 157.747 19.2213 157.169 19.744C156.59 20.2667 156.263 21.032 156.189 22.04H162.293ZM173.748 26.212V31H168.792V26.212H173.748Z" fill="white"/>
              </svg>
              <p className="text-base leading-loose text-gray-500">
                We host your empire business today <br/> using the latest technologies.
              </p>
              <div className="flex flex-row gap-x-3">
                <div className="bg-white rounded-full flex p-[12px] items-center"> 
                  <Link href={'/register'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#640EF1" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#640EF1" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <div className="bg-white rounded-full flex p-[12px] items-center"> 
                  <Link href={'/register'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <div className="bg-white rounded-full flex p-[12px] items-center"> 
                  <Link href={'/register'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#640EF1" strokeWidth="2" strokeMiterlimit="10"/>
                    </svg>
                  </Link>
                </div>
                <div className="bg-white rounded-full flex p-[12px] items-center"> 
                  <Link href={'/register'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.52002 7.11011H21.48" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.52002 2.11011V6.97011" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.48 2.11011V6.52011" stroke="#640EF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.75 14.4501V13.2501C9.75 11.7101 10.84 11.0801 12.17 11.8501L13.21 12.4501L14.25 13.0501C15.58 13.8201 15.58 15.0801 14.25 15.8501L13.21 16.4501L12.17 17.0501C10.84 17.8201 9.75 17.1901 9.75 15.6501V14.4501V14.4501Z" stroke="#640EF1" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                
              </div>
            </div>  
            
            <div className="sitemap flex flex-col gap-y-7">
              <h3 className="text-white font-bold text-lg">Products</h3>
              <ul className="flex flex-col gap-y-4">
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Powerful Report</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Blockchain</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Auto-Backup</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Data Science</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Auto-Scaling Up</Link>
                </li>
              </ul>
            </div>

            <div className="sitemap flex flex-col gap-y-7">
              <h3 className="text-white font-bold text-lg">Products</h3>
              <ul className="flex flex-col gap-y-4">
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Powerful Report</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Blockchain</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Auto-Backup</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Data Science</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Auto-Scaling Up</Link>
                </li>
              </ul>
            </div>

            <div className="sitemap flex flex-col gap-y-7">
              <h3 className="text-white font-bold text-lg">Products</h3>
              <ul className="flex flex-col gap-y-4">
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Powerful Report</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Blockchain</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Auto-Backup</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Data Science</Link>
                </li>
                <li>
                  <Link href={'/weserve'} className="text-base text-gray-500 hover:text-violet-700">Auto-Scaling Up</Link>
                </li>
              </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto py-6 pb-10 text-center">
            <p className="text-base leading-loose text-gray-500">
                All Rights Reserved • Copyright Weserve by BuildWithAngga 2024 in Bandung
            </p>
        </div>
      </section>
    </>
  )
}