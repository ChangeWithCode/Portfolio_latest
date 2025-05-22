import React from 'react';

const projectsData = [
  { id: 1, name: 'Project Alpha', description: 'A cool web application built with React and Node.js. It solves a real-world problem by doing X, Y, and Z.', technologies: ['React', 'Node.js', 'Express', 'MongoDB'], link: '#' },
  { id: 2, name: 'Project Beta', description: 'A mobile app developed using React Native for cross-platform compatibility. Features include A, B, C.', technologies: ['React Native', 'Firebase', 'JavaScript'], link: '#' },
  { id: 3, name: 'Project Gamma', description: 'An open-source library for data visualization. It helps users to create interactive charts easily.', technologies: ['D3.js', 'TypeScript', 'SVG'], link: '#' },
];

// Basic styling for the projects section
const projectSectionStyle: React.CSSProperties = {
  // textAlign: 'left', // Text alignment for section can be inherited or set in App.css
};

const projectCardStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  margin: '1em auto', // Centering cards if parent is wider, and providing vertical space
  padding: '1.5em',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  backgroundColor: '#f9f9f9', // Slightly off-white background for cards
  maxWidth: '700px', // Max width for project cards for better readability
  textAlign: 'left', // Ensure text within card is left-aligned
};

const projectLinkStyle: React.CSSProperties = {
  display: 'inline-block',
  marginTop: '1em',
  padding: '0.5em 1em',
  backgroundColor: '#007bff', // Example primary button color
  color: 'white',
  textDecoration: 'none',
  borderRadius: '4px',
  fontWeight: 'bold',
};

const projectLinkHoverStyle: React.CSSProperties = {
  backgroundColor: '#0056b3', // Darker shade on hover
};

const Projects: React.FC = () => {
  // Simple state for hover effect on links (optional, CSS :hover is simpler)
  // const [hoveredLinks, setHoveredLinks] = React.useState<Record<number, boolean>>({});

  return (
    <section id="projects" style={projectSectionStyle}>
      <h2>Projects</h2>
      <div>
        {projectsData.map(project => (
          <div key={project.id} style={projectCardStyle}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={projectLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = projectLinkHoverStyle.backgroundColor!)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = projectLinkStyle.backgroundColor!)}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
