const galleryBadgeSize = '30';
const farcebookBadgeSize = '30';
const knotBadgeSize = '35';

export const projectData = [
  {
    // LUPO
    id: '1',
    name: 'London Underground Phony Orchestra',
    navName: 'LUPO',
    panelName: 'LUPO',
    img: 'lupo-screen-small.png',
    url: 'https://lupo.onrender.com/',
    apiWakeUpUrl: null,
    repo: 'https://github.com/pablisch/lupo',
    summary:
      'An audio/visual generative music app based on real-time arrivals of trains on the London Underground network using data from the TFL Unified API.',
    buttonText: (
      <>
        This app is partially responsive.{' '}
        <span className='bold'>Click this button</span> to open the app in its
        own window.
      </>
    ),
    heading: 'London Underground Phony Orchestra',
    subheading: 'The sonification of the London Underground',
    descriptionText: (
      <>
        <p className='project-text'>
          <span className='emphasise'>Description:</span> A generative music app
          based on real-time arrivals of trains on the London Underground
          network using data from the TFL Unified API.
        </p>
        <p className='project-text'>
          Each tube line is assigned an instrument and each station assigned a
          different note. LUPO is the outcome of my final group engineering
          project on the Makers Software Development bootcamp.
        </p>
        <p className='project-text'>
          The app was conceived, researched, planned, designed, coded and
          deployed entirely from scratch as a group collaboration project in
          just eight days by five students.
        </p>
      </>
    ),
    technologiesText: (
      <>
        <p className='project-text sm'>
          <span className='emphasise'>Technologies:</span> This app is primarily
          built in JavaScript using the React.js library. We planned to use a
          Node and Express backend but as all API calls were made without using
          an API key we decided to make all requests on the client side allowing
          us to deploy the entire app as a static site on Render.com.
        </p>
        <p className='project-text sm'>
          We relied heavily on tone.js for the audio side of things which was
          new to all in the group. This meant considerable time was spent on
          researching and learning to use the library but was well worth the
          effort.
        </p>
        <p className='project-text sm'>
          I also learnt chart.js when we discovered an urgent need to visualise
          TFL&apos;s dubious data. Being able to instantly visualise and share
          the live streams of data was essential to the project&apos;s success,
          allowing us to make informed decisions on how to proceed.
        </p>
      </>
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
    apiWakeUpUrl:
      'https://gallery-backend-n3lo.onrender.com/api/v1.0/health/server',
    repo: 'https://github.com/pablisch/gallery',
    summary:
      'A MERN stack image sharing app using a responsive Masonry layout and Cloudinary. An exploration of image layout and React.js.',
    buttonText: (
      <>
        This app is mostly responsive.{' '}
        <span className='bold'>Click this button</span> to open the app in its
        own window.
      </>
    ),
    heading: 'Gallery App',
    subheading: 'A MERN stack image app',
    descriptionText: (
      <>
        <p className='project-text'>
          <span className='emphasise'>Description:</span>{' '}
          <span className='emphasise'>Gallery</span> is a MERN stack image
          sharing app using a Masonry grid layout to produce an image feed
          similar to Pinterest.
        </p>
        <p className='project-text'>
          Images are uploaded using Cloudinary and URLs are stored in the
          MongoDB Atlas database. Fronted image processing ensures that image
          uploads are reduced to the maximum resolution required, i.e. avatars
          have a maximum height of 40px. Feed images are dynamically reduced to
          a maximum width of 400px suitable for the column display width.
        </p>
        <p className='project-text'>
          Logged in users are able to upload their own images, make comments,
          like photos and delete their own photos.
        </p>
      </>
    ),
    technologiesText: (
      <>
        <p className='project-text sm'>
          <span className='emphasise'>Technologies:</span> The app is built from
          scratch employing the MERN stack. The core of the app is a Vite React
          frontend and calls to the MongoDB database are made through the custom
          API using Node.js and Express.
        </p>
        <p className='project-text sm'>
          The app also uses JWT token for session authentication and all
          passwords are salted and hashed using BCrypt before being stored in
          the MongoDB Atlass database.
        </p>
        <p className='project-text sm'>
          There is an addional test suite for this app in a separate repo with a
          comprehensive set of end to end tests in Java & Selenium using a Page
          Object Model with highly modular functions.
        </p>
      </>
    ),
    techBadges: (
      <>
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
          alt='javascript'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
          alt='nodejs'
          className='left-space-1'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg'
          alt='npm'
          className='left-space-2'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg'
          alt='express'
          className='left-space-2'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
          alt='mongodb'
          className='left-right-space-minus'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
          alt='react'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
          alt='html5'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
          alt='css3'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg'
          alt='jest'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
          alt='git'
          className='left-space-2'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
          alt='github'
          className='left-space-2'
          width={galleryBadgeSize}
          height={galleryBadgeSize}
        />
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
    apiWakeUpUrl: 'https://farcebook-backend.onrender.com/health',
    repo: 'https://github.com/pablisch/farce-book',
    summary:
      'A Facebook clone group engineering project. This was an immersive introduction to all of the MERN stack technologies.',
    buttonText: (
      <>
        This app is partially responsive.{' '}
        <span className='bold'>Click this button</span> to open the app in its
        own window.
      </>
    ),
    heading: 'FarceBook',
    subheading: 'A Facebook clone using the MERN stack',
    descriptionText: (
      <>
        <p className='project-text'>
          <span className='emphasise'>Description:</span> This Facebook clone
          app was the second group engineering project on the Makers Software
          Develpment Bootcamp and was completed in eight days.
        </p>
        <p className='project-text'>
          This was an introduction to the MERN stack with no prior knowledge
          of any of the technologies. This approach may not be an ideal way to
          learn but does provide an excellent example of working
          under pressure with a non-negotiable deadline.
        </p>
        <p className='project-text'>
          We were supplied with an existing codebase consisting of an Express
          backend API with minimal endpoints and the default React app with a
          few base components and had free direction from that point.
        </p>
      </>
    ),
    technologiesText: (
      <>
        <p className='project-text'>
          <span className='emphasise'>Technologies:</span> The app is built on a
          seed MERN stack codebase. As the entire group were new to the
          technologies, we spent the first couple of days exploring the codebase
          and the technologies used inlcuding JWT web tokens which was used for
          authentication and authorization.
        </p>
        <p className='project-text'>
          Developing working as a team using Agile practices was a focus for
          this project being only the second group project. We used Git and
          GitHub for version control and collaboration with PR reviews and used
          main branch protection. We used Postman for manual testing the backend
          API.
        </p>
        <p className='project-text'>
        For the purposes of trying out this app, you may create a new user or use the following credentials: Username: portfolio-user, Username: portfolio-user.
        </p>
        <p className='project-text sm'>
        <span className='emphasise'>Username:</span> portfolio-user
        </p>
        <p className='project-text'>
        <span className='emphasise'>Password:</span> verysecureA1
        </p>
        <p className='project-text'>
        Logging in is a basic requirement of the app in order to see the message feed. My personal preference would be to have open access to a public feed but was happy to go with the group decision on this matter. The project was about learning rather than producing a final product.
        </p>
        <p className='project-text'>
        <span className='emphasise'>Known Issues:</span> The original app used a local instance of MongoDB and user avatars were stored locally. For deployement purposes, the database was migrated to MongoDB Atlas but avatar has not been updated to reflect this change. The original avatar images remain but new avatars are not persistent. As a legacy app, it is likely that this issue will not be resolved.
        </p>
      </>
    ),
    techBadges: (
      <>
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
          alt='javascript'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
          alt='nodejs'
          className='left-space-1'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg'
          alt='npm'
          className='left-space-2'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg'
          alt='express'
          className='left-space-2'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
          alt='mongodb'
          className='left-right-space-minus'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
          alt='react'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
          alt='html5'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
          alt='css3'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg'
          alt='jest'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
          alt='git'
          className='left-space-2'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
          alt='github'
          className='left-space-2'
          width={farcebookBadgeSize}
          height={farcebookBadgeSize}
        />
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
    apiWakeUpUrl: null,
    repo: 'https://github.com/pablisch/knot-very-useful',
    summary:
      'A practical educational app for learning knots and hitches for Forest School built as an early exploration of vanilla JavaScript and CSS.',
    buttonText: (
      <>
        This app is responsive. <span className='bold'>Click this button</span>{' '}
        to open the app in its own window.
      </>
    ),
    heading: 'Knot Very Useful',
    subheading: 'An educational app for learning knots and hitches',
    descriptionText: (
      <>
        <p className='project-text'>
          <span className='emphasise'>Description:</span> This is one of my
          favourite projects as it combines a challenging, playful exploration
          of code from early independent learning and a solid real-world use
          that fulfils a genuine need.
        </p>
        <p className='project-text'>
          As part of my Forest School Leader training, I had already made an
          ugly Google Sites app but was not happy with it. After independent
          code exploration and application, I took some of the skills I had
          gathered and rebuilt the app from scratch. It required a lot of extra
          learning, resilience and experimentation to get it to work.
        </p>
        <p className='project-text'>
          I am proud of the result and have used it in the wild to teach how to
          tie knots and hitches.
        </p>
      </>
    ),
    technologiesText: (
      <>
        <p className='project-text sm'>
          <span className='emphasise'>Technologies:</span> This app was made six
          months before the Makers Software Development Bootcamp using vanilla
          JavaScript, HTML and CSS, and no a whiff of AI in sight.
        </p>
        <p className='project-text sm'>
          It was a real challenge at this early stage of learning to
          successfully combine all my new knowledge in a way that worked
          including making it fully responsive to be coherent on different
          screen sizes and orientations making it possible to use in the wild.
        </p>
      </>
    ),
    techBadges: (
      <>
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
          alt='javascript'
          width={knotBadgeSize}
          height={knotBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
          alt='html5'
          className='left-space-2'
          width={knotBadgeSize}
          height={knotBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
          alt='css3'
          className='left-space-1'
          width={knotBadgeSize}
          height={knotBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
          alt='git'
          className='left-space-2'
          width={knotBadgeSize}
          height={knotBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
          alt='github'
          className='left-space-2'
          width={knotBadgeSize}
          height={knotBadgeSize}
        />
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
    apiWakeUpUrl: null,
    repo: 'https://github.com/pablisch/picture-pad-flex-morph',
    summary:
      'A playful, early exploration of displaying images using vanilla JavaScript and Flexbox to create a new way of viewing photo collections.',
    buttonText: (
      <>
        This app is partially responsive.{' '}
        <span className='bold'>Click this button</span> to open the app in its
        own window.
      </>
    ),
    heading: 'Picture Pad Flex Morph',
    subheading: 'A playful exploration of how to display your holiday photos',
    descriptionText: (
      <>
        <span className='emphasise'>Description:</span> This project is a
        playful exploration of coding as well as visualising images in a fun,
        novel way. Its primary drive was not to create a useful app but an
        aspirational &apos;how can I do this?&apos; approach. This represents
        the second adaptationa and extension from Brad Traversy&apos;s{' '}
        <a
          href='https://pablisch.github.io/expanding-cards-layout/'
          rel='noreferrer'
          target='_blank'>
          Expanding Cards
        </a>{' '}
        tutorial after the even more impractical{' '}
        <a
          href='https://pablisch.github.io/nonsense-pad-sampler/'
          rel='noreferrer'
          target='_blank'>
          Nonsense Pad Sampler
        </a>{' '}
        project. It took considerable experimentation and learning to get the
        images to display in the way I wanted them to and still have unresolved
        issues with picture quality and image size while retaining a good user
        experience on some devices. I also experimented with using Grid rather
        than Flexbox but found that Flexbox was entirely better suited to this
        project.
      </>
    ),
    technologiesText: (
      <>
        <span className='emphasise'>Technologies:</span> This app was made using
        vanilla JavaScript, HTML and CSS. It was a playful, early exploration of
        code and represented a real challenge at that time. Technically
        speaking, it was primarily an exploration of layout, Flexbox, Grid and
        DOM manipulation but it was also a lot of fun
      </>
    ),
    techBadges: (
      <>
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
          alt='javascript'
          width={knotBadgeSize}
          height={knotBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
          alt='html5'
          className='left-space-2'
          width={knotBadgeSize}
          height={knotBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
          alt='css3'
          className='left-space-1'
          width={knotBadgeSize}
          height={knotBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
          alt='git'
          className='left-space-2'
          width={knotBadgeSize}
          height={knotBadgeSize}
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
          alt='github'
          className='left-space-2'
          width={knotBadgeSize}
          height={knotBadgeSize}
        />
      </>
    ),
  },
  {
    // Eclipse
    id: '6',
    name: 'Eclipse Battle Calculator',
    // navName: 'Eclipse Layout',
    img: 'eclipse-combat-small.png',
    url: 'https://eclipse-battle-calculator.onrender.com/',
    apiWakeUpUrl: null,
    repo: 'https://github.com/pablisch/eclipse-layout-react',
    summary:
      'A companion to the board game, Eclipse, A new Dawn for the Galaxy, which calculates combat odds for different ship configuarations.',
    buttonText: (
      <>
        This app is not responsive.{' '}
        <span className='bold'>Click this button</span> to open the app in its
        own window.
      </>
    ),
    heading: 'Eclipse Battle Calculator',
    subheading:
      'A companion to the board game, Eclipse, A new Dawn for the Galaxy',
    descriptionText: (
      <>
        <span className='emphasise'>Description:</span> This Eclipse Layout
        Generator App started off as a simple Vanilla JavaScript project before
        I had any formal programming training at the Makers boot camp. After
        completing my studies I decided to upgrade the app using the React
        library. The initial inspiration for the app came from the complex game
        setup when there were four or five players and order mattered including
        the locations of empty spaces. After the first React iteration I kept
        adding more functionality to add new players and allow for any valid
        number of players . Please note that this app does not fit well inside
        this app&apos;s iframe. Please{' '}
        <a
          href='https://eclipse-generator.onrender.com/'
          rel='noreferrer'
          target='_blank'>
          open in a new window
        </a>{' '}
        for full functionality.
      </>
    ),
    technologiesText: (
      <>
        <span className='emphasise'>Technologies:</span> This app is written in
        is JavaScript using the React.js library. Despite the simplicity of the
        app, small design choices such as having the{' '}
        <span className='emphasise'>Generate</span> button in the navbar rather
        than the player form added a surprising amount of complexity to state
        management.
      </>
    ),
    techBadges: (
      <>
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
          alt='javascript'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
          alt='nodejs'
          className='left-space-1'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg'
          alt='npm'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
          alt='html5'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
          alt='css3'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
          alt='git'
          className='left-space-2'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
          alt='github'
          className='left-space-2'
          width='40'
          height='40'
        />
      </>
    ),
  },
  {
    // Alternative Routes
    id: '7',
    name: 'Alternative Routes',
    navName: 'Alter Native Routes',
    img: 'alternativeRoutes-small.png',
    apiWakeUpUrl: 'https://alternative-routes-backend.onrender.com/lines',
    repo: 'https://github.com/pablisch/eclipse-layout-react',
    summary:
      'A playful app that generates alternative station names for the London Underground based on user themes using the GPT-3 API.',
    buttonText: (
      <>
        This app is very poorly responsive.{' '}
        <span className='bold'>Click this button</span> to open the app in its
        own window.
      </>
    ),
    url: 'https://alternative-routes.onrender.com/',
    heading: 'Eclipse Layout Generator',
    subheading: 'LLM generated alternative station names for London tube lines',
    descriptionText: (
      <>
        <p className='para'>
          <span className='emphasise'>Description:</span> This playful app began
          as an experimental companion app to the London Underground Phony
          Orchestra (LUPO) app with the intention of possible integration to
          allow the renaming of all stations within LUPO. It is proof of concept
          for when time is available to integrate it into LUPO.
        </p>
        <p className='para'>
          <span className='bold'>Alternative Routes</span> was my first
          experimentation utilising the GPT-3 API, which was fun and far simpler
          tham had anticipated. The app generates alternative station names for
          the London Underground based on user themes. Themes and generated
          names are stored in a MongoDB Atlas database where data is not linked
          to any user so any user of the app sees the collective result of all
          users.
        </p>
        <p className='para'>
          Mainly to expand the technical reach of this simple app, I added an
          &apos;About&apos; page and a &apos;Contact Us&apos; page. The
          &apos;Contact Us&apos; page uses an additonal MongoDB Atlas collection
          to store messages and whether or not they have subscribed to the
          newsletter in additon to emailing me the message
        </p>
        <span className='emphasise'>Description:</span> This Eclipse Layout
        Generator App started off as a simple Vanilla JavaScript project before
        I had any formal programming training at the Makers boot camp. After
        completing my studies I decided to upgrade the app using the React
        library. The initial inspiration for the app came from the complex game
        setup when there were four or five players and order mattered including
        the locations of empty spaces. After the first React iteration I kept
        adding more functionality to add new players and allow for any valid
        number of players . Please note that this app does not fit well inside
        this app&apos;s iframe. Please{' '}
        <a
          href='https://eclipse-generator.onrender.com/'
          rel='noreferrer'
          target='_blank'>
          open in a new window
        </a>{' '}
        for full functionality.
      </>
    ),
    techBadges: (
      <>
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
          alt='javascript'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
          alt='nodejs'
          className='left-space-1'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg'
          alt='npm'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
          alt='html5'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
          alt='css3'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
          alt='git'
          className='left-space-2'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
          alt='github'
          className='left-space-2'
          width='40'
          height='40'
        />
      </>
    ),
    technologiesText: (
      <>
        <span className='emphasise'>Technologies:</span> This app is written in
        is JavaScript using the React.js library. Despite the simplicity of the
        app, small design choices such as having the{' '}
        <span className='emphasise'>Generate</span> button in the navbar rather
        than the player form added a surprising amount of complexity to state
        management.
      </>
    ),
  },
  {
    // Lair BnB
    id: '8',
    name: 'Lair BnB',
    navName: 'Lair BnB',
    img: 'lair-bnb-screen-small.png',
    url: 'https://pablisch.github.io/lair-bnb/',
    apiWakeUpUrl: null,
    repo: 'https://github.com/pablisch/lair-bnb',
    buttonText: (
      <>
        This app is not responsive.{' '}
        <span className='bold'>Click this button</span> to open the app in its
        own window.
      </>
    ),
    heading: 'Lair BnB',
    subheading: 'An Air BnB clone with a Lord of The Rings theme',
    descriptionText: (
      <>
        <span className='emphasise'>Description:</span> This Air BnB clone was
        the first group engineering project on the Makers Software Development
        Bootcamp and was completed in four and a half days. A huge focus of this
        project was on learning to work as a team using Agile methodologies and
        XP values. We established a group charter with our core values, used
        daily standups and retros, two-day sprints, pair-programming and PR
        reviews. We also used Trello for project management and GitHub for
        version control and collaboration. The project was built using Ruby and
        Sinatra from scratch based on a set of user stories.
      </>
    ),
    technologiesText: (
      <>
        <span className='emphasise'>Technologies:</span> The app is built from
        scratch in Ruby and ERB, using Sinatra for routing with the Rack web
        server interface. We used PostgreSQL relational database with three
        tables and one-to-many relationships. Apart from being our first group
        project, for much of the group it was a first venture into CSS which was
        not taught by Makers. We used RSpec for testing and achieved 100%
        coverage over 50 unit and integration tests. We used Git and GitHub for
        version control and Postman API testing.
      </>
    ),
    techBadges: (
      <>
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg'
          alt='ruby'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg'
          alt='postgresql'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
          alt='html5'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
          alt='css3'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/rspec/rspec-original.svg'
          alt='rspec'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'
          alt='git'
          width='40'
          height='40'
        />
        <img
          src='https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg'
          alt='github'
          width='40'
          height='40'
        />
      </>
    ),
  },
];
