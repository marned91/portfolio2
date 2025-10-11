import ReuzeImage1 from '../assets/reuzeScreenshot.png';
import ReuzeImage2 from '../assets/reuzeProfile.png';
import ReuzeImage3 from '../assets/reuzeCategories.png';
import ReuzeImage4 from '../assets/reuzeViewItem.png';
import ProjectPage from '../components/ProjectPage';

/**
 * Sp2Page component
 *
 * Wrapper page for the Semester Project 2 (ReUze).
 * Uses ProjectPage to render:
 * - Image gallery of project screenshots
 * - Project title, GitHub link, live site link, and copy-link button
 * - Overview, feature list, and technologies tags
 *
 * @returns {JSX.Element} Fully styled project page for the ReUze project.
 */

export function Sp2Page() {
  return (
    <ProjectPage
      title="Semester Project 2"
      githubLink="https://github.com/marned91/ReUze-SP2/blob/main/README.md"
      liveLink="https://reuze.netlify.app/"
      projectHash="ReUze"
      images={[ReuzeImage1, ReuzeImage2, ReuzeImage3, ReuzeImage4]}
      overview="ReUze is a responsive front-end auction platform where users can browse listings, place bids, and manage their profiles. The site promotes reuse and second-hand items, providing a clean, user-friendly interface."
      features={[
        'Browse and view auction listings',
        'Register, log in, and manage user profile',
        'Create and manage item listings with images and deadlines',
        'Place bids on items (registered users only)',
        'Category pages and search functionality',
        'Fully responsive interface',
      ]}
      technologies={[
        'HTML',
        'Tailwind',
        'JavaScript',
        'Vite',
        'API integration',
      ]}
    />
  );
}
