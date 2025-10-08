import HomeImage from '../assets/portfolioHome.png';
import BlubImage from '../assets/BlubScreenshot.png';
import CartImage from '../assets/CartScreenshot.png';
import ReuzeImage from '../assets/ReuzeScreenshot.png';

export function HomePage() {
  return (
    <div>
      <section className="relative w-full overflow-hidden h-[260px] sm:h-[360px] md:h-[420px]">
        <img
          src={HomeImage}
          alt="Green leafs on an offwhite background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-6 px-6 pl-5 md:pl-10">
          <h1 className="font-large bg-black/60 text-white text-xl md:text-3xl font-medium px-5 md:px-10 py-3 rounded-sm shadow ml-1 2xl:ml-30">
            My Portfolio
          </h1>
          <h1 className="font-large bg-black/60 text-white text-xl md:text-3xl font-medium px-5 md:px-10 py-3 rounded-sm shadow ml-2 2xl:ml-35">
            Check out my projects!
          </h1>
        </div>
      </section>
      <section className="pb-5">
        <h2 className="font-medium font-medium-small text-dark text-2xl pl-14 pt-8">
          Highlighted Assignments
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-[95%] mx-auto pt-5">
          <div className="rounded-md border border-dark/40 p-5">
            <img
              src={BlubImage}
              alt="Screenshot of BLUB project, a social post webpage"
            />
            <h3 className="font-medium-small text-dark text-xl py-2">
              BLUB Project
            </h3>
            <p className="font-text text-black/70 text-sm">
              A social media front-end app enhanced with Tailwind CSS for a
              clean, responsive, and accessible design. Users can register,
              create posts, search, and manage their profiles while enjoying a
              consistent and user-friendly interface.
            </p>
          </div>
          <div className="rounded-md border border-dark/40 p-5">
            <img
              src={ReuzeImage}
              alt="Screenshot of ReUze project, an auction webpage"
            />
            <h3 className="font-medium-small text-dark text-xl py-2">
              ReUze Project
            </h3>
            <p className="font-text text-black/70 text-sm">
              A responsive auction platform for buying and selling second-hand
              items. Users can browse listings, place bids, and manage profiles,
              all while promoting sustainability and reuse. Built with HTML,
              CSS, and JavaScript and integrated with a real API.
            </p>
          </div>
          <div className="rounded-md border border-dark/40 p-5">
            <img src={CartImage} alt="Screenshot of CART project, a webshop" />
            <h3 className="font-medium-small text-dark text-xl py-2">
              CART Project
            </h3>
            <p className="font-text text-black/70 text-sm">
              A dynamic e-commerce store built with React, Vite, and Tailwind
              CSS. Users can browse products, manage a shopping cart, complete
              checkout, and submit a contact form. Features include global state
              management with Zustand and full API integration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
