const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Gyanu2608',
  title: 'GS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gyaneshwar Singh',
  role: 'Full Stack Developer',
  // picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'I’m a Full Stack Developer and Problem Solver passionate about building scalable web applications and crafting efficient solutions. I specialize in the MERN stack, API integration, and creating seamless user experiences with clean, maintainable code.',
    resume: 'https://drive.google.com/file/d/1dlnZ3i1AOpJKKxPPxYOajP7OzL7zzwCT/view?usp=sharing',
    social: {
    linkedin: 'http://www.linkedin.com/in/gyanu07',
    github: 'https://github.com/Gyanu2608',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Quick AI',
    description:
      'Quick AI — an intelligent tool that creates text, code, and visuals in seconds using advanced AI models from OpenAI and Hugging Face.',
    stack: ['SASS', 'Express', 'React'],
    sourceCode: 'https://github.com/Gyanu2608/QuickAI',
    livePreview: 'https://quick-ai-delta-olive.vercel.app',
    image: 'image.png',
  },
  {
    name: 'Doctor Appointment System',
    description:
      'A web-based Doctor Appointment System that allows patients to book, manage, and track appointments with doctors easily, while providing doctors with an organized dashboard to manage their schedules efficiently.',
    stack: ['SASS', 'Express', 'React'],
    sourceCode: 'https://github.com/Gyanu2608/DoctorAppointmentSystem',
    livePreview: 'https://prescripto-frontend-eosin.vercel.app/',
    image: 'Doctor.png',
  },
  {
    name: 'ThirtySixStudio Clone',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'Three.js', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'Thirty.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  // 'CI/CD',
  // 'Jest',
  // 'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gyaneshwarsingh8986@gmail.com',
  // Add modern contact methods (all optional)
  phone: '+91 6209438448', // WhatsApp number with country code
  twitter: 'https://x.com/Gyaneshwar2608',
  instagram: 'https://www.instagram.com/rextarzgyanu_2608/',
}

export { header, about, projects, skills, contact }
