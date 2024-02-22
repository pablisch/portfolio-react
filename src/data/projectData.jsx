export const projectData = [
  {
    // LUPO
    id: '1',
    name: 'The London Underground Phony Orchestra',
    navName: 'LUPO',
    panelName: 'LUPO',
    img: 'lupo-screen-small.png',
    url: 'https://lupo.onrender.com/',
    repo: 'https://github.com/pablisch/lupo',
    description:
      'An audio/visual generative music app based on real-time arrivals of trains on the London Underground network using data from the TFL Unified API.',
    note: 'Click on the <span className="bold">TO TRAINS</span> icon to go to the main page, then <span className="bold">tap in</span> to start your journey.',
    heading: 'London Underground Phony Orchestra',
    subheading:
      'The sonification and visualisation of the London Underground Tube network',
    para1: (
      <div className='para'>
        <span className='bold'>Description:</span> A generative music app based
        on real-time arrivals of trains on the London Underground network using
        data from the TFL Unified API. Each tube line is assigned an instrument
        and each station assigned a different note. LUPO is the outcome of my
        final group engineering project on the Makers Software Development
        bootcamp. The app was designed and coded entirely from scratch as a
        group collaboration. It was designed and built in eight days by five
        students.
      </div>
    ),
    para2: (
      <div className='para'>
        <span className='bold'>Technologies:</span> The app is primarily built
        in JavaScript using the React.js library. We relied heavily on tone.js
        for the audio side of things which was new to all in the group. We also
        learnt chart.js when we discovered an urgent need to visualise
        TFL&apos;s dubious data. We, of course used Git and GitHub throughout as
        well as Postman.
      </div>
    ),
    techBadges: (
      <>
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
          alt='javascript'
          width='35'
          height='35'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
          alt='nodejs'
          className='left-space-1'
          width='35'
          height='35'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg'
          alt='npm'
          width='35'
          height='35'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
          alt='react'
          className='left-space-1'
          width='35'
          height='35'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
          alt='html5'
          width='35'
          height='35'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
          alt='css3'
          width='35'
          height='35'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg'
          alt='jest'
          width='35'
          height='35'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
          alt='git'
          className='left-space-2'
          width='35'
          height='35'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
          alt='github'
          className='left-space-2'
          width='35'
          height='35'
        />
      </>
    ),
  },
  {
    // Gallery
    id: '2',
    name: 'Gallery App',
    // navName: 'Gallery App',
    img: 'gallery-app-thumb.png',
    url: 'https://gallery-58b4.onrender.com/',
    repo: 'https://github.com/pablisch/gallery',
    description:
      'A MERN stack image sharing app using a responsive Masonry layout and Cloudinary. An exploration of image layout and React.js.',
    note: "As this is hosted on a free tier of <span className='bold'>Render</span>, the backend may take up to 60 seconds to spin up. The app will not work until the backend is running. Please be patient",
    heading: 'Gallery App',
    subheading: 'A MERN stack image app',
    para1: (
      <div className='para'>
        <span className='bold'>Description:</span>{' '}
        <span className='bold'>Gallery</span> is a MERN stack image sharing app
        using a Masonry grid layout to produce an image feed similar to
        Pinterest. It uses Cloudinary in a very rudimentary way to upload images
        whose URLs are stored in the MongoDB Atlas database. Fronted image
        processing is used to ensure that any image upload to Cloudinary is at
        the maximum resolution that the image might be needed, i.e. avatar
        images have a maximum height of 40px. Feed images are dynamically
        reduced to a maximum intrinsic width of 400px suitable for the dynamic
        column width used. Logged in users are able to upload their own images,
        make comments, like photos and delete their own photos.
      </div>
    ),
    para2: (
      <div className='para'>
        <span className='bold'>Technologies:</span> The app is built from
        scratch employing the MERN stack. The core of the app is a Vite React
        frontend and calls to the MongoDB database are made through the custom
        API using Node.js and Express. The app also uses JWT token for sessions
        and all passwords are salted and hashed using BCrypt. There is an
        addional test suite for this app with a comprehensive set of end to end
        tests in Java & Selenium using a Page Object Model with highly modular
        functions
      </div>
    ),
    techBadges: (
      <>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" className="left-space-1" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" className="left-space-2" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="express" className="left-space-2" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" className="left-right-space-minus" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="jest" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" className="left-space-2" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" className="left-space-2" width="30" height="30"/>
      </>
    ),
  },
  {
    // FarceBook
    id: '3',
    name: 'FarceBook',
    navName: 'Farce Book',
    panelName: 'FarceBook',
    img: 'farcebook.png',
    url: 'https://farcebook-9uwa.onrender.com/',
    repo: 'https://github.com/pablisch/farce-book',
    description:
      'A Facebook clone group engineering project. This was an immersive introduction to all of the MERN stack technologies.',
    note: "As this is hosted on a free tier of <span className='bold'>Render</span>, the backend may take up to 60 seconds to spin up. The app will not work until the backend is running. Please be patient",
    heading: 'FarceBook',
    subheading: 'A Facebook clone using the MERN stack',
    para1: (
      <div className='para'>
        <span className='bold'>Description:</span> This Facebook clone app was
        the second group engineering project on the Makers Software Develpment
        Bootcamp and was completed in eight days. It was a first introduction to
        the MERN stack with no prior knowledge of any of the technologies except
        for nine days of having used Node.js as a runtime for vanilla JavaScript
        fundamentals. We were supplied with an existing codebase consisting of a
        basic backend server and the default React app with a few base
        components. We spent the the first couple of days reading through the
        codebase and exploring the new technologies.
      </div>
    ),
    para2: (
      <div className='para'>
        <span className='bold'>Technologies:</span> The app is built on a seed
        MERN stack codebase. It uses JWT web tokens for authentication and
        authorization. The backend is built in Node.js using Express.js and
        MongoDB. The frontend is built in React.js. We used Jest for testing the
        backend and Cypress for testing the frontend using both component and
        end-to-end testing. We used Git and GitHub for version control and
        collaboration with PR reviews and main branch protection. We used
        Postman for testing the backend API.
      </div>
    ),
    techBadges: (
      <>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" className="left-space-1" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" className="left-space-2" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="express" className="left-space-2" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" className="left-right-space-minus" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="jest" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" className="left-space-2" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" className="left-space-2" width="30" height="30"/>
      </>
    ),
  },
  {
    // Knot Very Useful
    id: '4',
    name: 'Knot Very Useful',
    // navName: 'Knot Very Useful',
    img: 'knot-very-useful-small.png',
    url: 'https://pablisch.github.io/knot-very-useful/',
    repo: 'https://github.com/pablisch/knot-very-useful',
    description:
      'A practical educational app for learning knots and hitches for Forest School. This is an early exploration of vanilla JavaScript.',
    note: 'Hover over a knot panel of navbar link to see details. Click on either to see a video of that knot or hitch.',
    heading: 'Knot Very Useful',
    subheading: 'An educational app for learning knots and hitches',
    para1: (
      <div className='para'>
        <span className='bold'>Description:</span> This is one of my favourite
        projects of all as it combines a challenging, playful exploration of
        code at an early stage of my independent learning and a solid real-world
        use that fulfils a genuine need. As part of my Forest School Leader
        training, I had already made an ugly app with the same purpose using
        Google Sites but I was not happy with it. Following a spree of
        independent code exploration and extension, I took some of the skills I
        had gathered and decided to rebuild the app from scratch but it required
        a lot of extra learning and experimentation to get it to work. I am
        proud of the result and have used it in the wild to teach how to tie
        knots and hitches.
      </div>
    ),
    para2: (
      <div className='para'>
        <span className='bold'>Technologies:</span> This app was made six months
        before the Makers Software Development Bootcamp using vanilla
        JavaScript, HTML and CSS. It was a real challenge in learning new code
        techniques and combining them in a way that worked including making it
        fully responsive to be coherent on different screen sizes and
        orientations making it possible to use in the wild.
      </div>
    ),
    techBadges: (
      <>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="45" height="45" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" className="left-space-2" width="45" height="45"/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" className="left-space-1" width="45" height="45" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" className="left-space-2" width="45" height="45" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" className="left-space-2" width="45" height="45" />
      </>
    ),
  },
  {
    // Picture Pad
    id: '5',
    name: 'Picture Pad',
    // navName: 'Picture Pad',
    img: 'picture-pad-small.png',
    url: 'https://pablisch.github.io/picture-pad-flex-morph/',
    repo: 'https://github.com/pablisch/picture-pad-flex-morph',
    description:
      'A playful, early exploration of displaying images using vanilla JavaScript and Flexbox to create a new way of viewing photo collections.',
    note: 'Click on compressed image panels to expand them',
    heading: 'Picture Pad Flex Morph',
    subheading: 'A playful exploration of how to display your holiday photos',
    para1: (
      <div className='para'>
        <span className='bold'>Description:</span> This project is a playful
        exploration of coding as well as visualising images in a fun, novel way.
        Its primary drive was not to create a useful app but an aspirational
        &apos;how can I do this?&apos; approach. This represents the second adaptationa
        and extension from Brad Traversy&apos;s{' '}
        <a
          href='https://pablisch.github.io/expanding-cards-layout/' rel="noreferrer"
          target='_blank'>
          Expanding Cards
        </a>{' '}
        tutorial after the even more impractical{' '}
        <a
          href='https://pablisch.github.io/nonsense-pad-sampler/' rel="noreferrer"
          target='_blank'>
          Nonsense Pad Sampler
        </a>{' '}
        project. It took considerable experimentation and learning to get the
        images to display in the way I wanted them to and still have unresolved
        issues with picture quality and image size while retaining a good user
        experience on some devices. I also experimented with using Grid rather
        than Flexbox but found that Flexbox was entirely better suited to this
        project.
      </div>
    ),
    para2: (
      <div className='para'>
        <span className='bold'>Technologies:</span> This app was made using
        vanilla JavaScript, HTML and CSS. It was a playful, early exploration of
        code and represented a real challenge at that time. Technically
        speaking, it was primarily an exploration of layout, Flexbox, Grid and
        DOM manipulation but it was also a lot of fun
      </div>
    ),
    techBadges: (
      <>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="45" height="45" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" className="left-space-2" width="45" height="45"/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" className="left-space-1" width="45" height="45"/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" className="left-space-2" width="45" height="45" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" className="left-space-2" width="45" height="45" />
      </>
    ),
  },
  {
    // Eclipse
    id: '6',
    name: 'Eclipse Layout',
    // navName: 'Eclipse Layout',
    img: 'eclipse-layout-image.png',
    url: 'https://eclipse-generator.onrender.com/',
    repo: 'https://github.com/pablisch/eclipse-layout-react',
    description:
      'A companion to the board game, Eclipse, A new Dawn for the Galaxy, which automates the complex game setup.',
    note: "Select or deselect names from the player form and click the <span className='bold'>GENERATE</span> button to generate the starting game layout.",
    heading: 'Eclipse Layout Generator',
    subheading:
      'A companion to the board game, Eclipse, A new Dawn for the Galaxy',
    para1: (
      <div className='para'>
        <span className='bold'>Description:</span> This Eclipse Layout Generator
        App started off as a simple Vanilla JavaScript project before I had any
        formal programming training at the Makers boot camp. After completing my
        studies I decided to upgrade the app using the React library. The
        initial inspiration for the app came from the complex game setup when
        there were four or five players and order mattered including the
        locations of empty spaces. After the first React iteration I kept adding
        more functionality to add new players and allow for any valid number of
        players . Please note that this app does not fit well inside this app&apos;s
        iframe. Please{' '}
        <a href='https://eclipse-generator.onrender.com/' rel="noreferrer" target='_blank'>
          open in a new window
        </a>{' '}
        for full functionality.
      </div>
    ),
    para2: (
      <div className='para'>
        <span className='bold'>Technologies:</span> This app is written in is
        JavaScript using the React.js library. Despite the simplicity of the
        app, small design choices such as having the{' '}
        <span className='bold'>Generate</span> button in the navbar rather than
        the player form added a surprising amount of complexity to state
        management.
      </div>
    ),
    techBadges: (
      <>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" className="left-space-1" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" className="left-space-2" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" className="left-space-2" width="40" height="40" />
      </>
    ),
  },
  {
    // Alternative Routes
    id: '7',
    name: 'Alternative Routes',
    navName: 'Alter Native Routes',
    img: 'alternativeRoutes-small.png',
    repo: 'https://github.com/pablisch/eclipse-layout-react',
    description:
      'A playful app that generates alternative station names for the London Underground based on user themes using the GPT-3 API.',
    note: "Select or deselect names from the player form and click the <span className='bold'>GENERATE</span> button to generate the starting game layout.",
    url: 'https://eclipse-generator.onrender.com/',
    heading: 'Eclipse Layout Generator',
    subheading:
      'A companion to the board game, Eclipse, A new Dawn for the Galaxy',
    para1: (
      <div className='para'>
        <span className='bold'>Description:</span> This Eclipse Layout Generator
        App started off as a simple Vanilla JavaScript project before I had any
        formal programming training at the Makers boot camp. After completing my
        studies I decided to upgrade the app using the React library. The
        initial inspiration for the app came from the complex game setup when
        there were four or five players and order mattered including the
        locations of empty spaces. After the first React iteration I kept adding
        more functionality to add new players and allow for any valid number of
        players . Please note that this app does not fit well inside this app&apos;s
        iframe. Please{' '}
        <a href='https://eclipse-generator.onrender.com/' rel="noreferrer" target='_blank'>
          open in a new window
        </a>{' '}
        for full functionality.
      </div>
    ),
    techBadges: (
      <>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" className="left-space-1" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" className="left-space-2" width="40" height="40" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" className="left-space-2" width="40" height="40" /></>),
    para2: (
      <div className='para'>
        <span className='bold'>Technologies:</span> This app is written in is
        JavaScript using the React.js library. Despite the simplicity of the
        app, small design choices such as having the{' '}
        <span className='bold'>Generate</span> button in the navbar rather than
        the player form added a surprising amount of complexity to state
        management.
      </div>
    ),
  },
  // {
  //   // Lair BnB
  //   id: '7',
  //   name: 'Lair BnB',
  //   url: 'https://pablisch.github.io/lair-bnb/',
  //   repo: 'https://github.com/pablisch/lair-bnb',
  //   note:
  //     '<span className="bold">Lair BnB</span> is <span className="bold">NOT</span> currently deployed online. Please see the <span className="bold">README</span> for instructions on how to run it locally.',
  //   heading: 'Lair BnB',
  //   subheading: 'An Air BnB clone with a Lord of The Rings theme',
  //   para1:
  //     (<div className='para'><span className='bold'>Description:</span> This Air BnB clone was the first group engineering project on the Makers Software Development Bootcamp and was completed in four and a half days. A huge focus of this project was on learning to work as a team using Agile methodologies and XP values. We established a group charter with our core values, used daily standups and retros, two-day sprints, pair-programming and PR reviews. We also used Trello for project management and GitHub for version control and collaboration. The project was built using Ruby and Sinatra from scratch based on a set of user stories.</div>),
  //   para2:
  //     (<div className='para'><span className='bold'>Technologies:</span> The app is built from scratch in Ruby and ERB, using Sinatra for routing with the Rack web server interface. We used PostgreSQL relational database with three tables and one-to-many relationships. Apart from being our first group project, for much of the group it was a first venture into CSS which was not taught by Makers. We used RSpec for testing and achieved 100% coverage over 50 unit and integration tests. We used Git and GitHub for version control and Postman API testing.</div>),
  //   techBadges: (<>
  //     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="ruby" width="40" height="40" />
  //     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="postgresql" width="40" height="40" />
  //     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40" />
  //     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="40" height="40" />
  //     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rspec/rspec-original.svg" alt="rspec" width="40" height="40" />
  //     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="40" height="40" />
  //     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="40" height="40" />
  //     </>
  //   ),
  // },
];
