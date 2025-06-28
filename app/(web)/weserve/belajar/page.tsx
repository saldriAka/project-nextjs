import Link from "next/link";
import Image1 from '@/assets/image.png'
import Image from "next/image";

export default function HomePage() {
return (
  <body className="bg-[#F1F4F5] font-['Poppins']">
    
    <section className="max-w-7xl mx-auto py-8">  
      <div className="flex flex-row items-center gap-x-10 justify-center">
        <div className="bg-amber-200">  
          Belajar TailwindCSS
        </div>
        <div className="bg-amber-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. totam molestias dolorum in ratione!
        </div>
      </div>
      <div className="grid gap-y-5">
        <div className="bg-amber-200">  
          Grid 1
        </div>
        <div className="bg-amber-400">
          Grid 2
        </div>
      </div>
      <h3 className="text-5xl text-indigo-950 font-['Clash_Display'] text-center my-8 "> Your Best Choice</h3>
      <div className="grid grid-cols-4 gap-x-8 mt-10">
        <div className="flex flex-col bg-white rounded-2xl py-8 px-5 gap-y-8">
          <div>ICON 1</div>
          {/* gap hanya bisa di pake pada class yang ada grid/flex umunya di gunakan di flex */}
          <div className="flex flex-col gap-y-2"> 
            <h3 className="font-bold text-xl text-indigo-950">
              Extra Layers
            </h3>
            <p className="text-base leading-relaxed text-gray-500">
              Making your project more secure avoiding DDoS
            </p>
          </div>
          <Link href="" className="font-semibold">
            Learn More
          </Link>
        </div>

        <div className="my-card flex flex-col gap-y-8 bg-white rounded-2xl py-8 px-5">
          <div>ICON 2</div>
          <div className="flex flex-col gap-y-2">
            <h3 className="font-bold text-xl text-indigo-950">
              Customizable
            </h3>
            <p className="text-base leading-relaxed text-gray-500">
              Only install what your business needs to grow
            </p>
          </div>
          <Link href="" className="text-violet-700 font-semibold">
            Learn More
          </Link>
        </div>

        <div className="my-card flex flex-col gap-y-8 rounded-2xl bg-[#080c2E] py-8 px-5">
          <div className="text-white">ICON 3</div>
          <div className="flex flex-col gap-y-2">
            <h3 className="font-bold text-xl text-white">
              AI Automation
            </h3>
            <p className="text-base leading-relaxed text-[#8D90A8]">
              Decide the business flow based on latest reports
            </p>
          </div>
          <Link href="" className="text-violet-700 font-semibold text-white">
            Learn More
          </Link>
        </div>

        <div className="my-card flex flex-col gap-y-8 bg-white rounded-2xl py-8 px-5">
          <div>ICON 4</div>
          <div className="flex flex-col gap-y-2">
            <h3 className="font-bold text-xl text-indigo-950">
              Auto-Scaling
            </h3>
            <p className="text-base leading-relaxed text-gray-500">
              Have a long weekend without worrying any loss
            </p>
          </div>
          <Link href="" className="text-violet-700 font-semibold">
            Learn More
          </Link>
        </div>
          
      </div>
    </section>
    <section className="max-w-7xl mx-auto py-12">
      
      {/* items-center (vertical child) dan justify-center (hrozintal) hanya bisa di pake pada class flex */}
      <div className="flex flex-row items-center justify-center gap-x-50">
        <div className="flex flex-row items-center gap-x-3">
          Ini Bisa Untuk Banner / Or whatever
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="flex gap-y-2 flex-col">
            <h1 className="text-indigo-950 font-['Clash_Display'] text-5xl leading-tight">
                We Have Very <br/> Strong Ecosystem
            </h1>
            <p className="text-base leading-loose text-gray-500">
              We provide a variety of servers to grow your users <br/>
              acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="card-benefit flex flex-row bg-white rounded-2xl p-5 items-center gap-x-3">
              <div>Icon</div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl text-indigo-950">
                  $880 Mio
                </h3>
                <p className="text-base leading-relaxed text-gray-500">
                  Company budget saved
                </p>
              </div>
            </div>
            <div className="card-benefit flex flex-row bg-white rounded-2xl p-5 items-center gap-x-3">
              <div>Icon</div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl text-indigo-950">
                  $880 Mio
                </h3>
                <p className="text-base leading-relaxed text-gray-500">
                  Company budget saved
                </p>
              </div>
            </div>
            <div className="card-benefit flex flex-row bg-white rounded-2xl p-5 items-center gap-x-3">
              <div>Icon</div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl text-indigo-950">
                  $880 Mio
                </h3>
                <p className="text-base leading-relaxed text-gray-500">
                  Company budget saved
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 items-center">
            <Link href={'/login'} className="text-lg bg-violet-700 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-indigo-950">Explore More</Link>
            <Link href="" className="flex gap-x-2 text-violet-700 font-semibold">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-2 items-center justify-center h-64 bg-gray-100">
        <div className="bg-blue-300">Item 1</div>
        <div className="bg-green-300">Item 2</div>
      </div>
      <div className="grid place-items-center h-screen bg-blue-200">
        <div className="bg-red-300 p-4">Centered</div>
      </div>
    </section>


    <section className="max-w-7xl mx-auto py-12">
      <div className="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 p-8">
        <div className="relative columns-2 gap-4 *:mb-4 sm:-mb-8 sm:columns-3 sm:gap-8 sm:*:mb-8">
          <img
            className="aspect-[3/2] rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
            alt="Image 1"
          />
          <img
            className="aspect-square rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2902&q=80"
            alt="Image 2"
          />
          <img
            className="aspect-square rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
            alt="Image 3"
          />
          <img
            className="aspect-square rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://images.unsplash.com/photo-1463288889890-a56b2853c40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"
            alt="Image 4"
          />
          <img
            className="aspect-[3/2] rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://images.unsplash.com/photo-1611605645802-c21be743c321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="Image 5"
          />
          <img
            className="aspect-square rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://images.unsplash.com/photo-1498603993951-8a027a8a8f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2936&q=80"
            alt="Image 6"
          />
          <img
            className="aspect-square rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://images.unsplash.com/photo-1526400473556-aac12354f3db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="Image 7"
          />
          <img
            className="aspect-square rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            alt="Image 8"
          />
          <img
            className="aspect-[3/2] rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0"
            src="https://images.unsplash.com/photo-1518892096458-a169843d7f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="Image 9"
          />
        </div>


        <div className="mx-auto max-w-lg  px-4 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7 dark:text-gray-300 mt-10">
          When controlling the flow of text, using the CSS property{" "}
          <span className="inline rounded bg-sky-100 font-mono text-sm font-bold text-gray-900 dark:bg-white/15 dark:text-gray-200">
            display: inline
          </span>{" "}
          will cause the text inside the element to wrap normally.
          <br />
          <br />
          While using the property{" "}
          <span className="inline-block rounded bg-sky-100 font-mono text-sm font-bold text-gray-900 dark:bg-white/15 dark:text-gray-200">
            display: inline-block
          </span>{" "}
          will wrap the element to prevent the text inside from extending beyond its parent.
          <br />
          <br />
          Lastly, using the property{" "}
          <span className="block rounded bg-sky-100 font-mono text-sm font-bold text-gray-900 dark:bg-white/15 dark:text-gray-200">
            display: block
          </span>{" "}
          will put the element on its own line and fill its parent.
        </div>

        <div className="flex items-center gap-4 p-4 shadow-2xl mx-auto max-w-lg justify-center mt-10">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            alt="Andrew Alfred"
          />
          <div className="flex flex-col">
            <strong className="font-medium text-gray-900 dark:text-gray-200">
              Andrew Alfred
            </strong>
            <span className="font-medium text-gray-500 dark:text-gray-400">
              Technical advisor
            </span>
          </div>
        </div>

        <p className="mx-auto max-w-lg p-4 text-sm leading-6 text-gray-500 sm:text-base/7 dark:text-gray-300 mt-10 shadow-2xl mt-10">
          Today I spent most of the day researching ways to take advantage of the fact
          that bottles can be returned for 10 cents in Michigan, but only 5 cents here.
          <span className="ml-1 inline-flex items-baseline">
            <img
              alt=""
              className="mr-1 size-5 self-center rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            />
            <span className="font-medium text-gray-900 dark:text-gray-100">Kramer</span>
          </span>{" "}
          keeps telling me there is no way to make it work, that he has run the numbers
          on every possible approach, but I just have to believe there's a way to make
          it work, there's simply too much opportunity here.
        </p>
          


        {/* Use the float-right utility to float an element to the right of its container */}
        <div
          className="mt-10 p-8 @container relative overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 dark:inset-ring dark:inset-ring-white/5 group-data-dragging:before:absolute group-data-dragging:before:inset-0"
          style={{ marginRight: 0 }}
        >
          <img
            className="float-right ml-6 aspect-16/9 w-2/5 rounded-lg object-cover outline -outline-offset-1 outline-black/10"
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90"
            alt="Library"
          />
          <p className="text-justify">
            Maybe we can live without libraries, people like you and me. Maybe. Sure,
            we're too old to change the world, but what about that kid, sitting down,
            opening a book, right now, in a branch at the local library and finding
            drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese
            Brothers? Doesn't HE deserve better? Look. If you think this is about
            overdue fines and missing books, you'd better think again. This is about that
            kid's right to read a book without getting his mind warped! Or: maybe that
            turns you on, Seinfeld; maybe that's how y'get your kicks. You and your
            good-time buddies.
          </p>
        </div>

        {/* Use the object-cover,object-fit, object-contain utility to resize an element's content to cover its container: */}
        <img
          className="mx-auto h-48 w-96 rounded-lg object-cover mt-10"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90"
          alt="Decorative"
        />


        {/* Use utilities like object-left and object-bottom-right to specify how a replaced element's content should be positioned within its container: */}
        <div className="flex snap-x scroll-p-4 items-end overflow-x-scroll overflow-y-hidden p-8 pt-16 sm:grid sm:grid-cols-3 sm:gap-16">
          {[
            { label: "object-top-left", bg: "bg-top-left", imgPos: "top-0 left-0" },
            { label: "object-top", bg: "bg-top", imgPos: "top-0 -left-6" },
            { label: "object-top-right", bg: "bg-top-right", imgPos: "top-0 right-0" },
            { label: "object-left", bg: "bg-left", imgPos: "-top-6 left-0" },
            { label: "object-center", bg: "bg-center", imgPos: "-top-6 -left-6" },
            { label: "object-right", bg: "bg-right", imgPos: "-top-6 right-0" },
            { label: "object-bottom-left", bg: "bg-bottom-left", imgPos: "-top-12 left-0" },
            { label: "object-bottom", bg: "bg-bottom", imgPos: "-top-12 -left-6" },
            { label: "object-bottom-right", bg: "bg-bottom-right", imgPos: "-top-12 right-0" },
          ].map(({ label, bg, imgPos }, index) => (
            <div
              key={label}
              className={`relative ${label === "object-bottom-right" ? "-mx-8 w-56" : "w-40"} shrink-0 snap-start snap-always sm:w-auto`}
            >
              <p className="absolute inset-x-0 top-0 mb-3 -translate-y-8 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400">
                {label}
              </p>
              <div className="group relative mx-auto size-20 rounded-lg">
                <div
                  className={`relative z-10 h-full w-full rounded-md bg-[url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)] bg-[size:8rem] ${bg} ring-1 ring-black/10 ring-inset`}
                ></div>
                <img
                  className={`absolute ${imgPos} size-32 max-w-none overflow-hidden rounded-md opacity-0 transition duration-100 sm:group-hover:opacity-25`}
                  src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90"
                  alt={label}
                />
              </div>
            </div>
          ))}
        </div>
      
        <div className="relative mx-auto flex max-w-sm items-center gap-6 overflow-visible rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800">
          <img
            className="absolute -left-6 h-24 w-24 rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            alt="Andrew Alfred"
          />
          <div className="flex flex-col py-5 pl-24">
            <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">
              Andrew Alfred
            </strong>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Technical advisor
            </span>
          </div>
        </div>

        <div className=" overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 p-8">
          <div className="relative mx-auto flex max-w-sm items-center gap-6 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800">
            <img
              className="absolute -left-6 h-24 w-24 rounded-full shadow-lg"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt="Andrew Alfred"
            />
            <div className="flex flex-col py-5 pl-24">
              <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">
                Andrew Alfred
              </strong>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Technical advisor
              </span>
            </div>
          </div>

          <div className="relative mx-auto flex h-72 max-w-sm flex-col divide-y divide-gray-200 overflow-auto rounded-xl bg-white shadow-lg ring-1 ring-black/5 dark:divide-gray-200/5 dark:bg-gray-800 mt-10">
            <div className="flex items-center gap-4 p-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                alt="Andrew Alfred"
              />
              <div className="flex flex-col">
                <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Andrew Alfred</strong>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Technical advisor</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                alt="Debra Houston"
              />
              <div className="flex flex-col">
                <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Debra Houston</strong>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Analyst</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                alt="Jane White"
              />
              <div className="flex flex-col">
                <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Jane White</strong>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Director, Marketing</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                alt="Ray Flint"
              />
              <div className="flex flex-col">
                <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Ray Flint</strong>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Technical Advisor</span>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-md min-w-0 bg-white shadow-xl dark:bg-gray-800 mt-10">
            <div className="flex overflow-x-auto">
              <div className="flex-none px-3 py-6 first:pl-6 last:pr-6">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    className="h-18 w-18 rounded-full"
                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                    alt="Andrew"
                  />
                  <strong className="text-xs font-medium text-gray-900 dark:text-gray-200">Andrew</strong>
                </div>
              </div>
              <div className="flex-none px-3 py-6 first:pl-6 last:pr-6">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    className="h-18 w-18 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                    alt="Emily"
                  />
                  <strong className="text-xs font-medium text-gray-900 dark:text-gray-200">Emily</strong>
                </div>
              </div>
              <div className="flex-none px-3 py-6 first:pl-6 last:pr-6">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    className="h-18 w-18 rounded-full"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                    alt="Whitney"
                  />
                  <strong className="text-xs font-medium text-gray-900 dark:text-gray-200">Whitney</strong>
                </div>
              </div>
              <div className="flex-none px-3 py-6 first:pl-6 last:pr-6">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    className="h-18 w-18 rounded-full"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                    alt="David"
                  />
                  <strong className="text-xs font-medium text-gray-900 dark:text-gray-200">David</strong>
                </div>
              </div>
              <div className="flex-none px-3 py-6 first:pl-6 last:pr-6">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    className="h-18 w-18 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                    alt="Kristin"
                  />
                  <strong className="text-xs font-medium text-gray-900 dark:text-gray-200">Kristin</strong>
                </div>
              </div>
              <div className="flex-none px-3 py-6 first:pl-6 last:pr-6">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    className="h-18 w-18 rounded-full"
                    src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                    alt="Sarah"
                  />
                  <strong className="text-xs font-medium text-gray-900 dark:text-gray-200">Sarah</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="relative text-sm leading-6 font-medium">
          <div className="rounded-lg border border-sky-700/10 bg-sky-400/20 p-4 dark:border-0 dark:bg-blue-900/70">
            <div className="relative h-32 border border-sky-700/10 bg-sky-400/20 p-4 dark:border-0 dark:bg-blue-400/20">
              <p className="text-sky-700 dark:text-white">Relative parent</p>
              <div className="absolute bottom-0 left-0 rounded-lg bg-sky-500 p-4 text-white shadow-lg dark:bg-blue-500">
                <p>Absolute child</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="mb-4 text-sm font-medium text-gray-500">With static positioning</p>
            <div className="relative text-sm leading-6 font-medium">
              <div className="relative rounded-lg border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0 dark:bg-indigo-900/80">
                <p className="-mt-2 mb-2 text-indigo-700 dark:text-indigo-200">Relative parent</p>
                <div className="static flex h-32 flex-col justify-between border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0">
                  <p className="text-indigo-700 dark:text-indigo-200">Static parent</p>
                  <div className="flex gap-4">
                    <div className="bottom-0 left-0 rounded-lg bg-indigo-500 p-4 text-white shadow-lg">
                      <p>Static child?</p>
                    </div>
                    <div className="rounded-lg bg-indigo-100 p-4 text-indigo-600 shadow-lg">
                      <p>Static sibling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-medium text-gray-500">With absolute positioning</p>
            <div className="relative text-sm leading-6 font-medium">
              <div className="relative rounded-lg border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0 dark:bg-indigo-900/80">
                <p className="-mt-2 mb-2 text-indigo-700 dark:text-indigo-200">Relative parent</p>
                <div className="static flex h-32 flex-col justify-between border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0">
                  <p className="text-indigo-700 dark:text-indigo-200">Static parent</p>
                  <div className="flex gap-4">
                    <div className="absolute top-0 right-0 rounded-lg bg-indigo-500 p-4 text-white shadow-lg">
                      <p>Absolute child</p>
                    </div>
                    <div className="rounded-lg bg-indigo-100 p-4 text-indigo-600 shadow-lg">
                      <p>Static sibling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Use top-<number>, right-<number>, bottom-<number>, left-<number>, and inset-<number> utilities like top-0 and bottom-4 to 
        set the horizontal or vertical position of a positioned element: */}
        <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-4 font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="relative size-18 rounded-lg sm:size-32">
            <div className="absolute inset-0">
              <div className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]" />
            </div>
            <div className="absolute top-0 left-0 flex size-16 items-center justify-center rounded-lg bg-purple-500 p-4">01</div>
          </div>
          <div className="relative size-18 rounded-lg sm:size-32">
            <div className="absolute inset-0">
              <div className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]" />
            </div>
            <div className="absolute inset-x-0 top-0 flex h-16 items-center justify-center rounded-lg bg-purple-500 p-4">02</div>
          </div>
          <div className="relative size-18 rounded-lg sm:size-32">
            <div className="absolute inset-0">
              <div className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]" />
            </div>
            <div className="absolute top-0 right-0 flex size-16 items-center justify-center rounded-lg bg-purple-500 p-4">03</div>
          </div>
          <div className="relative size-18 rounded-lg sm:size-32">
            <div className="absolute inset-0">
              <div className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]" />
            </div>
            <div className="absolute inset-y-0 left-0 flex w-16 items-center justify-center rounded-lg bg-purple-500 p-4">04</div>
          </div>
          <div className="relative size-18 rounded-lg sm:size-32">
            <div className="absolute inset-0">
              <div className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-purple-500 p-4">05</div>
          </div>
          <div className="relative size-18 rounded-lg sm:size-32">
            <div className="absolute inset-0">
              <div className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]" />
            </div>
            <div className="absolute inset-y-0 right-0 flex w-16 items-center justify-center rounded-lg bg-purple-500 p-4">06</div>
          </div>
          <div className="relative size-18 rounded-lg sm:size-32">
            <div className="absolute inset-0">
              <div className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]" />
            </div>
            <div className="absolute bottom-0 left-0 flex size-16 items-center justify-center rounded-lg bg-purple-500 p-4">07</div>
          </div>
          <div className="relative size-18 rounded-lg sm:size-32">
            <div className="absolute inset-0">
              <div className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex h-16 items-center justify-center rounded-lg bg-purple-500 p-4">08</div>
          </div>
          <div className="relative size-18 rounded-lg sm:size-32">
            <div className="absolute inset-0">
              <div className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]" />
            </div>
            <div className="absolute right-0 bottom-0 flex size-16 items-center justify-center rounded-lg bg-purple-500 p-4">09</div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-10">
          <div className="col-start-1 row-start-1 rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
          <div className="col-start-1 row-start-1 grid grid-cols-3 gap-4 font-mono text-sm leading-6 font-bold text-white">
            <div className="flex items-center justify-center rounded-lg bg-cyan-500 p-4">01</div>
            <div className="invisible flex items-center justify-center rounded-lg bg-cyan-500 p-4">02</div>
            <div className="flex items-center justify-center rounded-lg bg-cyan-500 p-4">03</div>
          </div>
        </div>

        <div className="isolate flex justify-center -space-x-3 font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="flex size-16 items-center justify-center rounded-full bg-fuchsia-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]">01</div>
          <div className="flex size-16 items-center justify-center rounded-full bg-fuchsia-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]">02</div>
          <div className="-z-10 flex size-16 items-center justify-center rounded-full bg-fuchsia-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]">03</div>
          <div className="z-10 flex size-16 items-center justify-center rounded-full bg-fuchsia-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]">04</div>
          <div className="flex size-16 items-center justify-center rounded-full bg-fuchsia-500 shadow-lg outline-2 outline-white dark:outline-[#11121E]">05</div>
        </div>
     
        <div className="flex flex-row gap-x-4 font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="h-14 w-14 items-center justify-center rounded-lg bg-fuchsia-500">01</div>
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-fuchsia-500">02</div>
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-fuchsia-500">03</div>
        </div>

        <div className="flex flex-row-reverse gap-x-4 space-x-reverse font-mono text-sm leading-6 font-bold text-white">
          <div className="h-14 w-14 items-center justify-center rounded-lg bg-blue-500">01</div>
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500">02</div>
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500">03</div>
        </div>

        <div className="mx-auto flex max-w-xs flex-col space-y-4 font-mono text-sm leading-6 font-bold text-white">
          <div className=" rounded-lg bg-indigo-500 p-4">01</div>
          <div className="flex items-center justify-center rounded-lg bg-indigo-500 p-4">02</div>
          <div className="flex items-center justify-center rounded-lg bg-indigo-500 p-4">03</div>
        </div>

        <div className="mx-auto flex max-w-xs flex-wrap space-y-4 font-mono text-sm leading-6 font-bold text-white mt-10 gap-x-6">
          <div className="flex w-2/5 items-center justify-center rounded-lg bg-indigo-500 p-4">01</div>
          <div className="flex w-2/5 items-center justify-center rounded-lg bg-indigo-500 p-4">02</div>
          <div className="flex w-2/5 items-center justify-center rounded-lg bg-indigo-500 p-4">03</div>
        </div>

        <div className="col-start-1 row-start-1 flex gap-4 rounded-lg font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-pink-300 p-4 dark:bg-pink-800 dark:text-pink-400">01</div>
          <div className="flex w-64 flex-1 items-center justify-center rounded-lg bg-pink-500 p-4">02</div>
          <div className="flex w-32 flex-1 items-center justify-center rounded-lg bg-pink-500 p-4">03</div>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="rounded-lg bg-fuchsia-500 p-4">01</div>
          <div className="rounded-lg bg-fuchsia-500 p-4">02</div>
          <div className="rounded-lg bg-fuchsia-500 p-4">03</div>
          <div className="rounded-lg bg-fuchsia-500 p-4">04</div>

          <div className="rounded-lg bg-fuchsia-500 p-4">05</div>
          <div className="rounded-lg bg-fuchsia-500 p-4">06</div>
          <div className="rounded-lg bg-fuchsia-500 p-4">07</div>
          <div className="rounded-lg bg-fuchsia-500 p-4">08</div>

          <div className="rounded-lg bg-fuchsia-500 p-4">09</div>
        </div>

        <div className="col-start-1 row-start-1 grid grid-cols-3 gap-4 text-center font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="rounded-lg bg-indigo-500 p-4">01</div>
          <div className="rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">02</div>
          <div className="rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">03</div>
          <div className="col-span-2 rounded-lg bg-indigo-500 p-4">04</div>
          <div className="rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">05</div>
          <div className="rounded-lg bg-indigo-300 p-4 dark:bg-indigo-800 dark:text-indigo-400">06</div>
          <div className="col-span-2 rounded-lg bg-indigo-500 p-4">07</div>
        </div>

        <div className="grid grid-cols-6 gap-4 text-center font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="rounded-lg p-4 border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
          <div className="col-span-4 col-start-2 rounded-lg bg-sky-500 p-4">01</div>
          <div className="rounded-lg p-4 border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>

          <div className="col-start-1 col-end-3 rounded-lg bg-sky-500 p-4">02</div>
          <div className="rounded-lg p-4 border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
          <div className="rounded-lg p-4 border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
          <div className="col-span-2 col-end-7 rounded-lg bg-sky-500 p-4">03</div>

          <div className="col-start-1 col-end-7 rounded-lg bg-sky-500 p-4">04</div>
        </div>

        <div className="grid grid-flow-col grid-rows-4 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="rounded-lg bg-pink-500 p-4">01</div>
          <div className="rounded-lg bg-pink-500 p-4">02</div>
          <div className="rounded-lg bg-pink-500 p-4">03</div>
          <div className="rounded-lg bg-pink-500 p-4">04</div>
          <div className="rounded-lg bg-pink-500 p-4">05</div>
          <div className="rounded-lg bg-pink-500 p-4">06</div>
          <div className="rounded-lg bg-pink-500 p-4">07</div>
          <div className="rounded-lg bg-pink-500 p-4">08</div>
          <div className="rounded-lg bg-pink-500 p-4">09</div>
        </div>

        <div className="grid grid-flow-col grid-rows-3 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="row-span-3 grid place-content-center rounded-lg bg-fuchsia-500 p-4">01</div>
          <div className="col-span-2 grid place-content-center rounded-lg bg-fuchsia-300 p-4 dark:bg-fuchsia-800 dark:text-fuchsia-400">02</div>
          <div className="col-span-2 row-span-2 grid place-content-center rounded-lg bg-fuchsia-500 p-4">03</div>
        </div>

        <div className="grid grid-cols-1 mt-10">
          <div className="rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
          
          <div className="grid grid-flow-col grid-rows-3 gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white ">
            <div className="row-span-2 row-start-2 grid place-content-center rounded-lg bg-blue-500 p-4 sm:p-12">01</div>
            <div className="row-span-2 row-end-3 grid place-content-center rounded-lg bg-blue-500 p-4 sm:p-12">02</div>
            <div className="row-start-1 row-end-4 grid place-content-center rounded-lg bg-blue-500 p-4 sm:p-12">03</div>
          </div>
        </div>
        

        <div className="flex justify-start space-x-4 rounded-lg font-mono text-sm leading-6 font-bold text-white  mt-10">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500">01</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500">02</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500">03</div>
        </div>

        <div className="flex justify-center space-x-4 overflow-hidden rounded-lg font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-blue-500">01</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-blue-500">02</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-blue-500">03</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-blue-500">04</div>
        </div>

        <div className="flex justify-end space-x-4 overflow-hidden rounded-lg font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-pink-500">01</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-pink-500">02</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-pink-500">03</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-pink-500">04</div>
        </div>

        <div className="flex justify-between space-x-4 rounded-lg font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-cyan-500">01</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-cyan-500">02</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-cyan-500">03</div>
        </div>

        <div className="flex justify-around space-x-4 rounded-lg font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-purple-500">01</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-purple-500">02</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-purple-500">03</div>
        </div>

        <div className="flex justify-evenly space-x-4 rounded-lg font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-indigo-500">01</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-indigo-500">02</div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-indigo-500">03</div>
        </div>



        <div className="grid grid-cols-3 gap-4 font-mono text-sm leading-6 font-bold text-white mt-10">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="grid rounded-lg relative">
              <div className="col-start-1 row-start-1 rounded-lg border text-black/10 dark:text-white/12.5
                bg-[size:8px_8px] bg-top-left
                bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
                {/* justify-self-start , justify-self-end  */}
              <div className="col-start-1 row-start-1 flex size-14 items-center justify-center justify-self-start rounded-lg bg-sky-500">
                {num.toString().padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10">
          <div>
            <p className="text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400">
              justify-items-center
            </p>
            <div className="mt-4 grid auto-rows-fr grid-cols-3 justify-items-stretch gap-10 text-center font-mono text-sm leading-6 font-bold text-white">
              <div className="grid grid-cols-1 justify-items-center relative">
                <div className="col-start-1 row-start-1 justify-self-stretch rounded-lg border text-black/10 dark:text-white/12.5
                  bg-[size:8px_8px] bg-top-left
                  bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
                <div className="col-start-1 row-start-1 size-14 rounded-lg bg-indigo-500 p-4">01</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center relative">
                <div className="col-start-1 row-start-1 justify-self-stretch rounded-lg border text-black/10 dark:text-white/12.5
                  bg-[size:8px_8px] bg-top-left
                  bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
                <div className="col-start-1 row-start-1 size-14 rounded-lg bg-indigo-500 p-4">02</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center relative">
                <div className="col-start-1 row-start-1 justify-self-stretch rounded-lg border text-black/10 dark:text-white/12.5
                  bg-[size:8px_8px] bg-top-left
                  bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
                <div className="col-start-1 row-start-1 size-14 rounded-lg bg-indigo-500 p-4">03</div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400">
              justify-items-center-safe
            </p>
            <div className="mt-4 grid auto-rows-fr grid-cols-3 justify-items-stretch gap-10 text-center font-mono text-sm leading-6 font-bold text-white">
              <div className="grid grid-cols-1 justify-items-center-safe relative">
                <div className="col-start-1 row-start-1 justify-self-stretch rounded-lg border text-black/10 dark:text-white/12.5
                  bg-[size:8px_8px] bg-top-left
                  bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
                <div className="col-start-1 row-start-1 size-14 rounded-lg bg-fuchsia-500 p-4">01</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center-safe relative">
                <div className="col-start-1 row-start-1 justify-self-stretch rounded-lg border text-black/10 dark:text-white/12.5
                  bg-[size:8px_8px] bg-top-left
                  bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
                <div className="col-start-1 row-start-1 size-14 rounded-lg bg-fuchsia-500 p-4">02</div>
              </div>
              <div className="grid grid-cols-1 justify-items-center-safe relative">
                <div className="col-start-1 row-start-1 justify-self-stretch rounded-lg border text-black/10 dark:text-white/12.5
                  bg-[size:8px_8px] bg-top-left
                  bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
                <div className="col-start-1 row-start-1 size-14 rounded-lg bg-fuchsia-500 p-4">03</div>
              </div>
            </div>
          </div>
        </div>
        


        {/* Use content-center/start/end/beetwen/around/stretch/normal to pack rows in a container in the center of the cross axis */}
        <div className="grid h-56 grid-cols-1 mt-10">
          <div className="col-start-1 row-start-1 rounded-lg border text-black/10 dark:text-white/12.5
            bg-[size:8px_8px] bg-top-left
            bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]">
          </div>
          <div className="col-start-1 row-start-1 grid h-56 w-full grid-cols-3 content-center gap-4 rounded-lg
            text-center font-mono text-sm leading-6 font-bold text-white">
            <div className="rounded-lg bg-sky-500 p-4">01</div>
            <div className="rounded-lg bg-sky-500 p-4">02</div>
            <div className="rounded-lg bg-sky-500 p-4">03</div>
            <div className="rounded-lg bg-sky-500 p-4">04</div>
            <div className="rounded-lg bg-sky-500 p-4">05</div>
          </div>
        </div>

        {/* Use the items-stretch/start/center/end/baseline utility to stretch items to fill the container's cross axis: */}
        <div className="grid grid-cols-1">
          <div className="col-start-1 row-start-1 rounded-lg border text-black/10 dark:text-white/12.5
            bg-[size:8px_8px] bg-top-left
            bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]">
          </div>
          <div className="col-start-1 row-start-1 flex w-full items-center gap-4 rounded-lg text-center font-mono text-sm leading-6 font-bold text-white">
            <div className="flex flex-1 items-center justify-center rounded-lg bg-violet-500 py-4">01</div>
            <div className="flex flex-1 items-center justify-center rounded-lg bg-violet-500 py-12">02</div>
            <div className="flex flex-1 items-center justify-center rounded-lg bg-violet-500 py-8">03</div>
          </div>
        </div>
        

        {/* Use the self-auto/start/center/end/stretch utility to align an item based on the value of the container's align-items property */}
        <div className="grid grid-cols-1 mt-10">
          <div className="col-start-1 row-start-1 rounded-lg border text-black/10 dark:text-white/12.5
            bg-[size:8px_8px] bg-top-left
            bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]">
          </div>
          <div className="col-start-1 row-start-1 flex h-24 w-full items-stretch gap-4 rounded-lg font-mono text-sm leading-6 font-bold text-white">
            <div className="flex flex-1 items-center justify-center rounded-lg bg-purple-300 p-4 dark:bg-purple-800 dark:text-purple-400">01</div>
            <div className="flex flex-1 items-center justify-center self-center rounded-lg bg-purple-500 p-4">02</div>
            <div className="flex flex-1 items-center justify-center rounded-lg bg-purple-300 p-4 dark:bg-purple-800 dark:text-purple-400">03</div>
          </div>
        </div>
        

        {/* Use place-content-center/start/end/beetwen/around/evenly/stretch to pack items in the center of the block ax */}
        <div className="grid grid-cols-1 mt-10">
          <div className="col-start-1 row-start-1 rounded-lg border text-black/10 dark:text-white/12.5
            bg-[size:8px_8px] bg-top-left
            bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]">
          </div>
          <div className="col-start-1 row-start-1 grid h-56 grid-cols-[repeat(2,56px)] place-content-center gap-4 rounded-lg font-mono text-sm leading-6 font-bold text-white">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-500 p-4">01</div>
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-500 p-4">02</div>
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-500 p-4">03</div>
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-500 p-4">04</div>
          </div>
        </div>
        

        {/* Use place-items-start/end/end-safe/center/center-safe/baseline/stretch to place grid items on the start of their grid areas on both axes */}
        <div className="grid h-56 grid-cols-3 gap-4 mt-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="grid grid-cols-1">
              <div className="col-start-1 row-start-1 rounded-lg border text-black/10 dark:text-white/12.5
                bg-[size:8px_8px] bg-top-left
                bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]">
              </div>
              <div className="col-start-1 row-start-1 flex size-14 items-center justify-center place-self-start rounded-lg bg-cyan-500 p-4 text-white">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
        
          {/* Use place-self-start/auto/end/end-safe/center/center-safe/stertch to align an item to the start on both axes: */}
        <div className="grid grid-cols-3 place-items-stretch gap-4 font-mono text-sm leading-6 font-bold text-white mt-10">
          <div className="flex items-center justify-center rounded-lg bg-purple-300 p-8 dark:bg-purple-800 dark:text-purple-400">01</div>
          <div className="grid grid-cols-1">
            <div className="col-start-1 row-start-1 rounded-lg border text-black/10 dark:text-white/12.5
              bg-[size:8px_8px] bg-top-left
              bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]">
            </div>
            <div className="col-start-1 row-start-1 flex size-14 items-center justify-center place-self-start rounded-lg bg-purple-500">
              02
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-purple-300 p-8 dark:bg-purple-800 dark:text-purple-400">03</div>
          <div className="flex items-center justify-center rounded-lg bg-purple-300 p-8 dark:bg-purple-800 dark:text-purple-400">04</div>
          <div className="flex items-center justify-center rounded-lg bg-purple-300 p-8 dark:bg-purple-800 dark:text-purple-400">05</div>
          <div className="flex items-center justify-center rounded-lg bg-purple-300 p-8 dark:bg-purple-800 dark:text-purple-400">06</div>
        </div>



      </div>
    </section>

  </body>
  );
}