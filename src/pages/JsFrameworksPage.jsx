import CartImage1 from '../assets/cartScreenshot.png';
import CartImage2 from '../assets/cartViewProduct.png';
import CartImage3 from '../assets/cartCheckout.png';
import CartImage4 from '../assets/cartCart.png';
import ProjectPage from '../components/ProjectPage';

/**
 * JsFrameworksPage component
 *
 * Wrapper page for the JS Frameworks project (CART).
 * Uses ProjectPage to render:
 * - Image gallery of project screenshots
 * - Project title, GitHub link, live site link, and copy-link button
 * - Overview, feature list, and technologies tags
 *
 * @returns {JSX.Element} Fully styled project page for the CART project.
 */

export function JsFrameworksPage() {
  const images = [CartImage1, CartImage2, CartImage3, CartImage4];

  return (
    <ProjectPage
      title="JS Framework Project"
      githubLink="https://github.com/marned91/javascript-framework-ca/blob/main/README.md"
      liveLink="https://cart-js-framework.netlify.app/"
      projectHash="CART"
      images={images}
      overview="CART is a responsive e-commerce store built with React and TypeScript. Users can browse products, manage a shopping cart, complete checkout, and submit a contact form. Zustand handles global cart state, and Tailwind CSS ensures a clean, accessible design."
      features={[
        'Live product search and filtering',
        'Dynamic product pages with reviews and discounts',
        'Cart with add/remove and live item count',
        'Checkout with unique order confirmation',
        'Contact form with validation',
        'Fully responsive and reusable components',
      ]}
      technologies={[
        'React',
        'TypeScript',
        'Vite',
        'Tailwind',
        'Zustand',
        'API integration',
      ]}
    />
  );
}
