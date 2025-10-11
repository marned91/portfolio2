import BlubImage1 from '../assets/blubScreenshot.png';
import BlubImage2 from '../assets/blubFeed.png';
import BlubImage3 from '../assets/blubLogin.png';
import BlubImage4 from '../assets/blubReadPost.png';
import ProjectPage from '../components/ProjectPage';

export function CssFrameWorksPage() {
  const images = [BlubImage1, BlubImage2, BlubImage3, BlubImage4];

  return (
    <ProjectPage
      title="CSS Frameworks Project"
      githubLink="https://github.com/marned91/CSS-Frameworks/blob/main/README.md"
      liveLink="https://css-frameworks-mn.netlify.app/"
      projectHash="BLUB"
      images={images}
      overview="BLUB is a front-end social media application originally developed for the JavaScript 2 course. This version has been fully restyled using Tailwind CSS to demonstrate CSS framework integration, responsive design, and improved user experience."
      features={[
        'Register, log in, and manage profile',
        'Create, edit, and delete posts',
        'Paginated feed with search functionality',
        'Dynamic navigation based on authentication state',
        'Fully responsive for mobile, tablet, and desktop',
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
