const ProjectInfo = [
  {
    title: 'Mouton Catwalk',
    tech: 'JavaScript | React | Express | Jest | Enzyme | Sass',
    gitLink: 'https://github.com/GeekBoyChan/MoutonCatwalk',
    description:
      'Front-end focused web application for an ecommerce website that displayed product information',
    points: [
      'Designed a product card carousel using React and a RESTful API backend to display relevant product information to the user while having the front end clearly communicate interactions based on user actions',
      'Implemented a Features Comparison modal with the use of React Portals to render this component outside of its parent component DOM hierarchy to avoid CSS conflicts',
      'Utilized local storage properties to ensure persistence of the “Saved Outfit” feature, to allow the user to save favorited items without the use of a database',
    ],
    picture: 'images/label.png',
  },
  {
    title: 'Rust API',
    tech: 'JavaScript | Node.js | Express | PostgreSQL | AWS',
    gitLink: 'https://github.com/GeekBoyChan/RustAPI_Reviews',
    description:
      'A revamped legacy API for an ecommerce website optimized and scaled to increase response times and performance',
    points: [
      'Enhanced query performance with PostgreSQL unions and aggregate functions, reducing queries needed to one, thus lightening database load',
      'Identified a 600 rps system bottleneck with Loader.io to increase robustness and availability of the server',
      'Utilized NGINX load balancers to horizontally scale the backend, increasing rps by 33%',
    ],
    picture: 'images/database.png',
  },
  {
    title: 'Pacific Microphone',
    tech: 'JavaScript | Node.js | React | Express | MongoDB',
    gitLink: 'https://github.com/GeekBoyChan/Blue_Ocean_Pacific',
    description:
      'Full-Stack web application that provided practice tools for actors with the use of IBM Watson API',
    points: [
      'Implemented user access to IBM Watson API generated audio files by writing them within the server’s public directory and returning the file path of each audio file to use as a source for front-end audio constructors',
      'Collaborated with six other software engineers using agile practices in order to gauge team progress, maximize team proficiency and to ensure a smooth workflow',
      'Conducted several client meetings to certify that specified needs were being met, while honing in on overall project scope',
    ],
    picture: 'images/microphone.png',
    projectLink: 'https://pacificmicroph.one',
  },
];

export default ProjectInfo;
