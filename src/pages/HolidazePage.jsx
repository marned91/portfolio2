import HolidazeImage from '../assets/holidaze-screenshot.jpg';
import ProjectPage from '../components/ProjectPage';

export function HolidazePage() {
  return (
    <ProjectPage
      title="Holidaze"
      githubLink="https://github.com/marned91/Holidaze-PE2"
      liveLink="https://holidaze-pe2-mn.netlify.app/"
      projectHash="Holidaze"
      imageAlt="Holidaze booking app homepage with venue search and accommodation listings"
      images={[HolidazeImage]}
      overview="Holidaze is a responsive accommodation booking application built as my Noroff final project. Guests can discover venues, check availability, and manage bookings, while venue managers can manage their listings and reservations."
      features={[
        'Browse, search, filter, and sort accommodation venues',
        'View venue details, facilities, pricing, and availability',
        'Register and sign in as a customer or venue manager',
        'Create and manage customer bookings and profiles',
        'Create, edit, and manage venues and bookings as a venue manager',
        'Use responsive layouts, keyboard navigation, and accessible feedback',
      ]}
      technologies={[
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'React Router',
        'Noroff API',
        'React Hook Form',
        'Yup',
      ]}
    />
  );
}
