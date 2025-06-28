import Image from "next/image";
import Link from "next/link";
import Menu from '@/assets/img/icon-hamburger.svg'
import Hero from '@/assets/img/hero.jpg'
import Logo from '@/assets/img/logo.png'
import Start from '@/assets/img/stat.jpg'
import Bootsrap from '@/assets/img/bootstrap.png'
import Person from '@/assets/img/person1.jpg'
import Footer from '@/assets/img/footer.png'

export default function HomePage() {
return (
  <body className="">
      <nav>
        <div className="px-6 max-w-6xl mx-auto flex items-center justify-between py-5">
          <a href="" className="w-32"><Image src={Logo} alt="logo" /></a>
          <div className="hidden md:inline space-x-6 font-semibold">
            <a className="hover:text-red-500" href="">Pricing</a>
            <a className="hover:text-red-500" href="">Product</a>
            <a className="hover:text-red-500" href="">About Us</a>
            <a className="hover:text-red-500" href="">Career</a>
            <a className="hover:text-red-500" href="">Community</a>
          </div>
          <button className="hidden md:inline bg-red-500 text-white px-4 py-2 rounded-3xl">Create Account</button>
          <Image src={Menu} alt="menu" className="hamburger md:hidden" />
        </div>
        <div className="md:hidden">
          <div className="menu absolute top-16 max-w-6xl hidden flex-col bg-white shadow-md inset-x-0 mx-auto px-6 py-5">
            <a className="hover:text-red-500" href="">Pricing</a>
            <a className="hover:text-red-500" href="">Product</a>
            <a className="hover:text-red-500" href="">About Us</a>
            <a className="hover:text-red-500" href="">Career</a>
            <a className="hover:text-red-500" href="">Community</a>
            <a className="hover:text-red-500" href="">Create Account</a>
          </div>
        </div>
      </nav>

      <section className="px-6 max-w-6xl mx-auto md:flex md:justify-between items-center my-6 space-x-6">
        <div className="md:w-3/6 text-center md:text-left">
          <h4 className="text-xl font-bold">New Feature</h4>
          <h3 className="text-5xl font-bold mb-5">Coming Up With Fresh Ideas</h3>
          <p className="text-gray-500 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam facere ea totam labore vitae autem.</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-3xl">Create Account</button>
        </div>
        <Image src={Hero} alt="hero" className="md:w-3/6" />
      </section>

      <section className="bg-gray-100 p-10 my-5">
        <div className="container mx-auto grid grid-cols-2 gap-5 justify-items-center md:flex md:justify-around items-center max-w-5xl">
          <Image className="w-32" src={Bootsrap} alt="" />
          <Image className="w-32" src={Bootsrap} alt="" />
          <Image className="w-32" src={Bootsrap} alt="" />
          <Image className="w-32" src={Bootsrap} alt="" />
          <Image className="w-32" src={Bootsrap} alt="" />
        </div>
      </section>

      <section className="container mx-auto space-x-6 md:flex md:justify-between items-center">
        <Image src={Start} alt="start" className="w-3/4 md:w-3/6 mx-auto" />
        <div className="md:w-3/6 text-center md:text-left">
          <h4 className="text-xl font-bold">Statistic</h4>
          <h3 className="text-3xl font-bold mb-5">What We Can Do For You</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel alias cupiditate, dolores sunt similique expedita atque consequuntur obcaecati aspernatur est?</p>
          <div className="flex justify-between py-6 max-w-80 mx-auto">
            
            <div className="text-center text-gray-500">
              <h4 className="text-2xl font-bold text-gray-900">20+</h4>
              <p>Portfolios</p>
            </div>
            <div className="text-center text-gray-500">
              <h4 className="text-2xl font-bold text-gray-900">100+</h4>
              <p>Clients</p>
            </div>
            <div className="text-center text-gray-500">
              <h4 className="text-2xl font-bold text-gray-900">4.8</h4>
              <p>Rating</p>
            </div>
          </div>
          <p className="text-gray-500 mb-4"><span className="font-bold">info</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatibus?</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-3xl">Detail</button>
        </div>
      </section>

      <section className="container mx-auto p-10 my-5 text-center">
        <h4 className="text-xl font-bold">Testimonies</h4>
        <h3 className="text-3xl font-bold mb-5">What They Say About Us</h3>
        <div className="md:flex md:justify-between mt-16 space-x-8">
      
          <div className="bg-gray-100 md:w-1/3 rounded-md border border-gray-200">
            <Image className="w-16 rounded-full mx-auto -mt-8" src={Person} alt="" />
            <h5 className="font-bold pt-5">John Saleh</h5>
            <p className="p-5 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, odio.</p>
          </div>
          
          <div className="hidden md:inline bg-gray-100 w-1/3 rounded-md border border-gray-200">
            <Image className="w-16 rounded-full mx-auto -mt-8" src={Person} alt="" />
            <h5 className="font-bold pt-5">Bob Smith</h5>
            <p className="p-5 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, odio.</p>
          </div>
         
          <div className="hidden md:inline bg-gray-100 w-1/3 rounded-md border border-gray-200">
            <Image className="w-16 rounded-full mx-auto -mt-8" src={Person} alt="" />
            <h5 className="font-bold pt-5">Alex White</h5>
            <p className="p-5 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, odio.</p>
          </div>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-3xl mt-6">See All Testimonies</button>
      </section>
      <section
          className="px-6 container mx-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between bg-top bg-no-repeat pb-10 text-gray-500"
          style={{ backgroundImage: `url(${Footer.src})` }}
        >
        <div className="mb-4">
          <Image src={Logo} alt="logo" className="w-32" />
          <p className="mt-5">halo@flare.com<br />(0274)433221</p>
        </div>
        <div className="mb-4">
          <h4 className="font-bold text-xl mb-4">About Us</h4>
          <ul className="space-y-2">
            <li><a href="">Support Center</a></li>
            <li><a href="">Customer Support</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">History</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-bold text-xl mb-4">Resource</h4>
          <ul className="space-y-2">
            <li><a href="">Support Center</a></li>
            <li><a href="">Customer Support</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">History</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-bold text-xl mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="">Support Center</a></li>
            <li><a href="">Customer Support</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">History</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-bold text-xl mb-4">Privacy Policy</h4>
          <ul className="space-y-2">
            <li><a href="">Support Center</a></li>
            <li><a href="">Customer Support</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">History</a></li>
          </ul>
        </div>
      </section>
  </body>
  );
}