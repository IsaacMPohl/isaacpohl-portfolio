export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: 'Built Work' | 'Internship Work' | 'Student Team Project' | 'Coursework';
  category: 'Agriculture Database' | 'Data Discovery & AI' | 'Mobile & Backend' | 'C# & .NET' | 'Coursework';
  summary: string;
  role: string;
  status: string;
  technologies: string[];
  problem: string;
  contribution: string;
  practicalResult: string;
  lessons: string;
  isFeatured: boolean;
}

export interface ResearchInterest {
  id: string;
  title: string;
  summary: string;
  focusAreas: string[];
}

export interface ExperienceDetail {
  id: string;
  role: string;
  subtitle?: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  category: 'Internship' | 'Fieldwork & Agronomy' | 'Small Business' | 'Campus & Operations';
  summary: string;
  responsibilities: string[];
  technologies: string[];
  isFeatured: boolean;
}

export interface LeadershipRole {
  organization: string;
  roles: string[];
  timeline: string;
  focus: string;
}

export interface ServiceInitiative {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
  metrics?: string;
  category: 'Youth STEM' | 'Community Hunger & Service' | 'Faith & Brotherhood' | 'Campus Leadership';
  isFeatured?: boolean;
}

export interface HonorItem {
  title: string;
  issuer: string;
  year?: string;
  description: string;
  category: 'FFA' | 'Academics' | 'Athletics & Leadership';
}

export interface InspirationalQuote {
  id: string;
  quote: string;
  author: string;
  sourceCredit: string;
  contextNote: string;
  isFeaturedOnLanding?: boolean;
}

export interface SupportedSkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Isaac Pohl',
    heroTitle: "Hi, I’m Isaac Pohl.",
    heroTagline: 'Helping agriculture make better use of technology.',
    heroBio: 'I’m a junior at Murray State University studying Computer Science and Agriculture–Agriscience Technology. Through agronomy fieldwork, software development, and AI-assisted data discovery, I’m learning how to build tools around the questions people actually need to answer.',
    statusLine: 'Interested in 2027 internships and applied research in agricultural technology.',
    locationLine: 'Based in Murray, Kentucky; from southwestern Indiana',

    // Standard professional contacts
    email: 'isaacpohl0@gmail.com',
    linkedin: 'https://www.linkedin.com/in/isaac-pohl/',
    linkedinHandle: 'isaac-pohl',
    resumePdfUrl: `${import.meta.env.BASE_URL}assets/aistudio/Isaac_Pohl_-_Resume_5fa38e69.pdf`,

    // Academic baseline
    university: 'Murray State University',
    academicStanding: 'Junior',
    major: 'Computer Science and Agriculture–Agriscience Technology (Dual Major)',
    graduationDate: 'Expected May 2028',
    locationForResume: 'Haubstadt / Princeton, IN & Murray, KY',

    // Approved About Narrative
    aboutIntro: 'My main motivation is to help advance agriculture through technology. I care about understanding the grower, agronomist, researcher, or other person who will use a tool, then making information easier to work with. My agriculture and computer science classes, fieldwork, software internships, greenhouse experience, and service work contribute different parts of that perspective.',
    aboutAgService: 'At Pohl Ag Service, I collect soil and leaf samples and assist with precision-agriculture fieldwork. In a separate effort, I built a Microsoft Access database that connects leaf-sample results to fields and trials. Working with an agronomist on the comparison graphs helped me see how useful software starts with understanding the questions someone needs to answer.',
    aboutGreenhouse: 'Running Pohl’s Greenhouse gave me another perspective on that connection. I managed plants, customers, records, and equipment, and used lighting and watering technology to support the operation. At Murray State, I am building on those experiences through computer science and agriculture coursework, with a growing interest in AI, data analysis, and precision agriculture.',

    // Clean recruiter quick-fill summary
    quickFillSummary: "Junior at Murray State University dual-majoring in Computer Science and Agriculture–Agriscience Technology (expected May 2028). Background includes agronomy fieldwork and Microsoft Access database development at Pohl Ag Service, AI-assisted metadata discovery at OneMain Financial, software development at Parrish Consulting Services, and former small greenhouse management (Pohl's Greenhouse). Interested in 2027 internships and applied research in agricultural technology."
  },

  education: [
    {
      institution: 'Murray State University',
      degree: 'Computer Science and Agriculture–Agriscience Technology (Dual Major)',
      standing: 'Junior',
      period: 'Expected May 2028',
      location: 'Murray, Kentucky',
      highlights: [
        'Junior dual-majoring in Computer Science and Agriculture–Agriscience Technology.',
        'Direction: Emerging agricultural technology, data analysis, and software development.',
        'Omicron Delta Kappa (ODK) National Leadership Honor Society (President 2026–2027, Treasurer 2025–2026).',
        'Alpha Tau Omega Fraternity — Zeta Lambda Chapter (Chaplain 2026–2027, Social Service Coordinator 2025–2026).',
        'Murray State Agronomy Club (Treasurer 2026–2027).'
      ]
    },
    {
      institution: 'Gibson Southern High School',
      degree: 'High School Diploma — Salutatorian',
      standing: 'Alumnus',
      period: 'Graduated May 2024',
      location: 'Fort Branch, Indiana',
      highlights: [
        'Graduated Salutatorian (May 2024).',
        'Balanced varsity athletics, FFA leadership, 4-H projects, and small business ownership.'
      ]
    },
    {
      institution: 'Southern Indiana Career & Technical Center',
      degree: 'Computer Science & Software Development Coursework',
      standing: 'Alumnus',
      period: 'Completed May 2024',
      location: 'Evansville, Indiana',
      highlights: [
        'Led student team project developing LunchBox point-of-sale register application.'
      ]
    }
  ],

  // Research Interests and Future Concepts
  researchInterests: [
    {
      id: 'res-digital-twins',
      title: 'Agricultural Digital Twins & Open-Source AI',
      summary: 'I’m applying for research funding at Murray State to explore agricultural digital twins and how soil, weather, crop, and management data could help compare agricultural decisions. If funded, this would give me an opportunity to learn more about digital-twin development, open-source AI tools, data analysis, and visualization while working toward practical applications in agriculture.',
      focusAreas: ['Digital Twins Concept', 'Decision Simulation', 'Open-Source AI Tools', 'Data Visualization']
    },
    {
      id: 'res-ag-dashboard',
      title: 'Precision Agriculture Intelligence & Field Dashboard Concept',
      summary: 'An applied interest in developing unified farm dashboards that connect soil sensor readings, weather station trends, and multi-year trial results to help farmers and agronomists evaluate management scenarios.',
      focusAreas: ['Sensor Integration', 'Weather Data', 'Trial Analytics', 'Agronomic Decision Support']
    }
  ] as ResearchInterest[],

  // Featured and Comprehensive Projects
  projects: [
    {
      id: 'proj-leaf-db',
      title: 'Pohl Ag Service Leaf-Sample Database',
      subtitle: 'Microsoft Access database connecting tissue test results to fields and trials',
      type: 'Built Work',
      category: 'Agriculture Database',
      summary: 'Built a Microsoft Access database that imports leaf-sample results, connects them to fields and trials, and generates adjustable comparison graphs for an agronomist.',
      role: 'Junior Assistant & Database Developer',
      status: 'Completed & in practical use',
      technologies: ['Microsoft Access', 'Relational SQL', 'Comparison Graphs', 'Agronomy Workflows'],
      problem: 'An agronomist at Pohl Ag Service needed an efficient way to evaluate leaf tissue test results across various fields, crop trials, and fertility treatments rather than inspecting separate spreadsheets or laboratory report pages.',
      contribution: 'Structured relational tables in Microsoft Access linking sample batches to specific grower fields and trials. Built automated import routines for lab results, set up baseline queries, and created form-based charting controls that allow the agronomist to select treatments and view adjustable comparison graphs without manual graphing.',
      practicalResult: 'Provided the agronomist a structured tool to review nutrient absorption trends and compare trial treatments across fields.',
      lessons: 'Demonstrated firsthand that useful agricultural software begins by understanding the exact questions an agronomist or grower needs to answer, rather than adding complex, unneeded features.',
      isFeatured: true
    },
    {
      id: 'proj-onemain-ai',
      title: 'OneMain Financial Data Discovery Workflow',
      subtitle: 'AI-assisted metadata exploration and analytical planning workflow',
      type: 'Internship Work',
      category: 'Data Discovery & AI',
      summary: 'Helped develop and apply an AI-assisted workflow for understanding application and database metadata, reviewing findings with technical and business stakeholders, and documenting information for enterprise data discovery and analytical planning.',
      role: 'Summer Technology Intern',
      status: 'Completed project & presented to CTO and senior leaders',
      technologies: ['Language Models', 'SQL Server / SSMS', 'Metadata Discovery', 'Stakeholder Review', 'Dimensional Model Planning'],
      problem: 'Enterprise database environments hold extensive, dense table metadata across multiple systems. Mapping table relationships and identifying key entities for analytical planning required substantial manual discovery time.',
      contribution: 'Helped develop and evaluate prompt and context workflows using existing language models to assist in deciphering database schemas and metadata definitions. Conducted evidence reviews alongside data engineers and business stakeholders to validate findings, and documented schemas to support candidate dimensional-model planning.',
      practicalResult: 'Delivered verified metadata documentation and presented evaluation findings and process lessons to the CTO and senior technology and business leaders, highlighting where language models aid discovery and where human review remains essential.',
      lessons: 'Learned the critical importance of keeping human review and validation at the center of AI-assisted data discovery workflows, distinguishing between helpful discovery aids and production systems.',
      isFeatured: true
    },
    {
      id: 'proj-lunchbox',
      title: 'LunchBox Restaurant Point-of-Sale Application',
      subtitle: 'Tablet register system for a student-run culinary arts restaurant',
      type: 'Student Team Project',
      category: 'Mobile & Backend',
      summary: 'Led a student team developing a tablet cash-register application for the student-run restaurant at Southern Indiana Career & Technical Center, featuring a Python Flask API on a Raspberry Pi.',
      role: 'Team Lead & Backend/API Developer',
      status: 'Completed student team project; used by restaurant',
      technologies: ['Java / Android Studio', 'Python / Flask', 'Raspberry Pi', 'REST APIs', 'Requirements Gathering'],
      problem: 'The student-operated restaurant at Southern Indiana Career & Technical Center needed an easy-to-use digital order and register system tailored specifically to their dining-room ticketing and menu workflow.',
      contribution: 'Led a student development team through requirements discussions with the culinary arts chef and instructor. Designed the ordering workflow, built the backend REST API using Python Flask hosted on an on-premise Raspberry Pi, and coordinated data exchange with the student-developed Java/Android tablet register.',
      practicalResult: 'Successfully deployed in the culinary arts dining room for student meal service, allowing student servers to enter orders and handle dining-room tickets.',
      lessons: 'Gained valuable early experience translating customer operational needs into clear software requirements, managing team milestones, and integrating physical local hardware with mobile client interfaces.',
      isFeatured: true
    },
    {
      id: 'proj-parrish',
      title: 'Parrish Application & Connection Monitoring',
      subtitle: 'Internal tools and server connection monitoring across .NET environments',
      type: 'Internship Work',
      category: 'C# & .NET',
      summary: 'Developed and tested internal and client applications using C#, Blazor, ASP.NET Core, WPF, SQL Server, and APIs, while contributing to server and data-connection monitoring workflows.',
      role: 'Software Development Intern',
      status: 'Completed internship work',
      technologies: ['C#', 'Blazor', 'ASP.NET Core', 'WPF', 'SQL Server', 'REST APIs', 'Connection Monitoring'],
      problem: 'Client systems and internal business tools required ongoing application updates, interface testing, and reliable connection monitoring.',
      contribution: 'Contributed to internal and client software development across Blazor and WPF. Built and tested SQL Server database queries, tested API endpoints, and assisted with server monitoring and installation workflows while learning unfamiliar toolchains.',
      practicalResult: 'Provided tested application updates and assisted monitoring workflows that helped ensure stable data connections for client installations.',
      lessons: 'Developed versatility and rapid-learning habits by picking up new C# and .NET frameworks quickly within a professional software consulting environment.',
      isFeatured: true
    },
    // Academic Coursework Projects
    {
      id: 'proj-csc425-web',
      title: 'Web Applications & Services (CSC425)',
      subtitle: 'Murray State Computer Science Coursework',
      type: 'Coursework',
      category: 'Coursework',
      summary: 'Coursework developing full-stack web applications using React/Vite, Node.js/Express, and PostgreSQL, focusing on API requests, component state, form validation, and web accessibility.',
      role: 'Student Developer',
      status: 'Coursework Project',
      technologies: ['React / Vite', 'Node.js / Express', 'PostgreSQL', 'API Requests', 'Web Accessibility'],
      problem: 'Developing responsive web interfaces that handle asynchronous data requests, state validation, and error states reliably.',
      contribution: 'Implemented dynamic component state, accessible interactive forms, and API integration. Developed TranscriptCard coursework retrieving academic data and displaying nested semesters and courses with loading, error, and validation states.',
      practicalResult: 'Solidified modern full-stack development, asynchronous request handling, and accessible UI patterns.',
      lessons: 'Reinforced the importance of robust error boundaries, structured API contracts, and keyboard accessibility in modern web applications.',
      isFeatured: false
    },
    {
      id: 'proj-cis407-db',
      title: 'Advanced Database Systems (CIS407)',
      subtitle: 'Relational Schema Design & SQL Coursework',
      type: 'Coursework',
      category: 'Coursework',
      summary: 'Advanced database coursework covering entity-relationship modeling (ERD), third-normal-form relational normalization, and complex SQL data manipulation.',
      role: 'Student Developer',
      status: 'Coursework Project',
      technologies: ['Relational Database Design', 'SQL', 'ERD Modeling', 'Data Normalization'],
      problem: 'Modeling complex real-world data structures into efficient, normalized relational database schemas with high integrity constraints.',
      contribution: 'Designed conceptual and logical ERDs, performed table normalization, and authored structured SQL queries for multi-table datasets.',
      practicalResult: 'Deepened practical knowledge of schema constraints, indexing concepts, and relational integrity.',
      lessons: 'Strengthened analytical foundation for understanding enterprise databases and schema discovery.',
      isFeatured: false
    },
    {
      id: 'proj-csc345-solitaire',
      title: 'Solitaire Lite (CSC345)',
      subtitle: 'Object-Oriented Software Engineering Coursework',
      type: 'Coursework',
      category: 'Coursework',
      summary: 'Desktop card game implementation in Java demonstrating object-oriented architecture, state pattern modeling, and clean graphical user interface event handling.',
      role: 'Student Developer',
      status: 'Coursework Project',
      technologies: ['Java', 'Object-Oriented Design', 'State Modeling', 'GUI Events'],
      problem: 'Computer science coursework focusing on state encapsulation, event handling, and clean object-oriented architecture.',
      contribution: 'Built game board state logic, deck shuffling and draw algorithms, card placement rules, and user interaction handling in Java.',
      practicalResult: 'Delivered a fully playable card application meeting course specifications.',
      lessons: 'Deepened understanding of separation of concerns between game logic and interface presentation.',
      isFeatured: false
    },
    {
      id: 'proj-t50-drone',
      title: 'DJI Agras T50 Agricultural Drone Capability Analysis',
      subtitle: 'Agriculture Coursework Research & Technical Presentation',
      type: 'Coursework',
      category: 'Coursework',
      summary: 'Technical research analysis and class presentation examining agricultural drone capabilities, payload capacity, spray atomization, and precision application economics.',
      role: 'Researcher & Presenter',
      status: 'Coursework Research Presentation',
      technologies: ['Precision Agriculture', 'Agricultural Drone Technology', 'Spray Economics', 'Technical Presentation'],
      problem: 'Agricultural systems coursework exploring emerging aerial application technology and how modern spray drones compare with ground equipment.',
      contribution: 'Researched and presented an analysis of the DJI Agras T50’s spray atomization, centrifugal nozzles, obstacle avoidance radar, battery recharge logistics, and practical application limitations in commercial farming.',
      practicalResult: 'Delivered an in-depth technical presentation for peers and faculty on the operational feasibility and cost dynamics of agricultural drone applications.',
      lessons: 'Clarified the distinction between manufacturer specifications and realistic field operating conditions in precision agriculture.',
      isFeatured: false
    }
  ] as Project[],

  // Professional Experience
  experiences: [
    {
      id: 'exp-onemain',
      role: 'Summer Technology Intern',
      company: 'OneMain Financial',
      location: 'Evansville, Indiana',
      period: 'June–August 2026',
      isCurrent: false,
      category: 'Internship',
      isFeatured: true,
      summary: 'Helped develop and apply an AI-assisted workflow for understanding application and database metadata, reviewing findings with technical and business stakeholders, and documenting information for enterprise data discovery and analytical planning.',
      responsibilities: [
        'Helped develop and evaluate prompt and context workflows using existing language models to assist in understanding application and database metadata.',
        'Conducted evidence reviews and validated metadata findings alongside technical and business stakeholders.',
        'Documented schema and table relationships to support enterprise data discovery and candidate dimensional-model planning.',
        'Presented project findings and evaluation lessons to the CTO and senior technology and business leaders.'
      ],
      technologies: ['Language Models', 'SQL Server / SSMS', 'Metadata Discovery', 'Stakeholder Review', 'Dimensional Model Planning']
    },
    {
      id: 'exp-pohl-ag',
      role: 'Junior Assistant',
      subtitle: 'Agronomy Fieldwork & Database Development',
      company: 'Pohl Ag Service',
      location: 'Princeton, Indiana',
      period: 'May 2020–Present',
      isCurrent: true,
      category: 'Fieldwork & Agronomy',
      isFeatured: true,
      summary: 'Collect soil, crop, and leaf samples across regional grower fields to support agronomic recommendations, and assist with precision-agriculture fieldwork (drones, mapping, moisture probes). In a separate effort, built a Microsoft Access database connecting leaf-sample results to fields and trials with comparison graphs for an agronomist.',
      responsibilities: [
        'Collect soil, crop, and leaf tissue samples across regional grower fields to support agronomic recommendations.',
        'Built and maintain a Microsoft Access database that imports leaf-sample results, relates them to fields and trials, and generates comparison graphs for an agronomist.',
        'Assist with precision-agriculture fieldwork involving drone aerial observation, GPS field mapping, and soil moisture probe readings.',
        'Support field trial layout and data collection for fertility and crop-management evaluations.'
      ],
      technologies: ['Microsoft Access', 'Relational SQL', 'Leaf & Soil Sampling', 'Field Trials', 'GPS Mapping', 'Moisture Probes']
    },
    {
      id: 'exp-parrish',
      role: 'Software Development Intern',
      company: 'Parrish Consulting Services',
      location: 'Princeton, Indiana',
      period: 'January–August 2024',
      isCurrent: false,
      category: 'Internship',
      isFeatured: true,
      summary: 'Developed and tested internal and client applications using C#, Blazor, ASP.NET Core, WPF, SQL Server, and APIs, while contributing to server and data-connection monitoring workflows.',
      responsibilities: [
        'Developed and tested internal and client application components across C#, Blazor, ASP.NET Core, and WPF.',
        'Contributed to server and data-connection monitoring and installation workflows while learning unfamiliar tools quickly.',
        'Integrated relational SQL Server queries and assisted in debugging and testing API endpoints.',
        'Participated in hardware setups, system monitoring, and technical troubleshooting.'
      ],
      technologies: ['C#', 'Blazor', 'ASP.NET Core', 'WPF', 'SQL Server', 'REST APIs', 'Server Monitoring']
    },
    {
      id: 'exp-purdue-ext',
      role: 'Vanderburgh County 4-H Youth Development Intern',
      company: 'Purdue Extension',
      location: 'Evansville, Indiana',
      period: 'May–August 2025',
      isCurrent: false,
      category: 'Internship',
      isFeatured: true,
      summary: 'Designed and facilitated youth programs, supported workshops and fair activities, handled participant communications and logistics, and co-developed a data-informed program-growth analysis.',
      responsibilities: [
        'Designed and facilitated interactive youth programs and community educational workshops.',
        'Supported county fair operations, livestock shows, participant communications, and day-to-day logistics.',
        'Co-developed a program-growth analysis utilizing participant surveys, community feedback, and comparative research of regional Extension models.',
        'Authored process documentation and repeatable guides to support future Extension staff and volunteer leaders.'
      ],
      technologies: ['Youth Program Design', 'Survey Analysis', 'Process Guides', 'Event Operations', 'Community Communication']
    },
    {
      id: 'exp-pohl-greenhouse',
      role: 'Owner',
      company: "Pohl's Greenhouse",
      location: 'Haubstadt, Indiana',
      period: 'January 2020–May 2025',
      isCurrent: false,
      category: 'Small Business',
      isFeatured: true,
      summary: 'Owned a small greenhouse business, managed plant production, inventory, finances, marketing, and sales, and used FFA grants to add lighting, timers, automatic watering, and environmental controls.',
      responsibilities: [
        'Managed all operational aspects of a small greenhouse business: seed propagation, plant care, customer sales, and finances.',
        'Used FFA grants to add grow lights, timers, automatic watering, and environmental controls.',
        'Kept crop calendars, germination logs, bloom records, and customer sales data to continuously improve planning.',
        'Recognized as a 2023 National FFA Nursery Operations Proficiency Award finalist (top 4 nationally) and Indiana State Star Farmer finalist.'
      ],
      technologies: ['Small Business Ownership', 'Horticulture & Propagation', 'Automatic Watering', 'Crop Records', 'Customer Service']
    },
    // Expanded Background for Detailed View
    {
      id: 'exp-wellness-center',
      role: 'Student Front Desk Staff',
      company: 'Murray State University Wellness Center',
      location: 'Murray, Kentucky',
      period: 'Campus Employment',
      isCurrent: true,
      category: 'Campus & Operations',
      isFeatured: false,
      summary: 'Public-facing campus employment focused on customer service, facility access control, member check-in accuracy, and keeping front-desk operations organized.',
      responsibilities: [
        'Provided welcoming customer service to university students, faculty, and community patrons.',
        'Maintained facility access control, verifying student credentials and check-in records accurately.',
        'Assisted members with check-in questions, general facility information, and front-desk organization.'
      ],
      technologies: ['Customer Service', 'Access Verification', 'Facility Operations']
    },
    {
      id: 'exp-pohl-pumpkins',
      role: 'Owner & Co-Founder',
      company: "Pohl's Pumpkin Stand / Patch",
      location: 'Haubstadt, Indiana',
      period: '2015–2022',
      isCurrent: false,
      category: 'Small Business',
      isFeatured: false,
      summary: 'Grew and sold pumpkins, Indian corn, and gourds across 3 total acres and 3 sales locations in Gibson County, with a later partnership with a cousin managing marketing and customer sales.',
      responsibilities: [
        'Managed planting, field care, harvesting, and roadside distribution for 3 total acres of fall crops.',
        'Coordinated sales operations across 3 retail stand locations in Gibson County.',
        'Built local customer awareness through roadside promotion and local outreach.'
      ],
      technologies: ['Agricultural Production', 'Retail Sales', 'Direct Marketing', 'Partner Collaboration']
    },
    {
      id: 'exp-steve-pohl-farms',
      role: 'Farmhand',
      company: "Steve Pohl Farms / Pohl's Farms",
      location: 'Haubstadt, Indiana',
      period: '2019–2023',
      isCurrent: false,
      category: 'Fieldwork & Agronomy',
      isFeatured: false,
      summary: 'Assisted with commercial wheat and corn harvests, machinery operation, grain-cart support, fieldwork, and grain-bin maintenance.',
      responsibilities: [
        'Operated tractors and grain carts during peak summer wheat and fall corn harvests.',
        'Assisted with equipment maintenance, tillage, and grain-bin loading and unloading.',
        'Gained hands-on understanding of row-crop production cycles and logistical field constraints.'
      ],
      technologies: ['Tractor & Grain Cart Operation', 'Harvest Logistics', 'Fieldwork', 'Equipment Maintenance']
    },
    {
      id: 'exp-kuester',
      role: 'Landscaping Assistant',
      company: 'Kuester Landscaping',
      location: 'Fort Branch, Indiana',
      period: 'April–September 2020',
      isCurrent: false,
      category: 'Fieldwork & Agronomy',
      isFeatured: false,
      summary: 'Assisted residential and commercial landscaping crews with planting, sod installation, pruning, mulching, and customer service.',
      responsibilities: [
        'Installed shrubs, perennial beds, sod, and mulch on customer job sites.',
        'Maintained clean, professional grounds and answered customer care questions on plant maintenance.'
      ],
      technologies: ['Planting & Sod', 'Mulching', 'Customer Care']
    },
    {
      id: 'exp-conservation',
      role: 'Field Observer',
      company: 'Conservation Field Observations',
      location: 'Southern Indiana',
      period: 'Spring 2025 & Spring 2026',
      isCurrent: false,
      category: 'Fieldwork & Agronomy',
      isFeatured: false,
      summary: 'Conducted field observations, photo documentation, residue and cover-crop assessments, and uploaded observational records to a government conservation database.',
      responsibilities: [
        'Walked seasonal crop fields to observe and photograph no-till residue coverage and cover-crop stands.',
        'Recorded standardized ground-cover observations according to conservation assessment guidelines.',
        'Uploaded observational field records and photo documentation to the designated database system.'
      ],
      technologies: ['Field Observation', 'Residue & Cover-Crop Assessment', 'Data Entry', 'Photo Documentation']
    }
  ] as ExperienceDetail[],

  // Documented Leadership Roles
  leadershipRoles: [
    {
      organization: 'Omicron Delta Kappa (ODK) National Leadership Honor Society',
      roles: ['President, 2026–2027', 'Treasurer, 2025–2026'],
      timeline: '2025–2027',
      focus: 'Leading chapter operations, managing organization finances, gathering member input, and planning practical cross-disciplinary service initiatives.'
    },
    {
      organization: 'Alpha Tau Omega (ATO) Fraternity — Zeta Lambda Chapter',
      roles: ['Chaplain, 2026–2027', 'Social Service Coordinator, 2025–2026'],
      timeline: '2024–Present',
      focus: 'Leading weekly fraternity Bible studies, organizing semesterly All-Campus Bible Studies, offering peer support and brotherhood encouragement, and coordinating community service drives.'
    },
    {
      organization: 'Murray State Agronomy Club',
      roles: ['Treasurer, 2026–2027'],
      timeline: '2026–2027',
      focus: 'Managing organizational funds, club budget records, and supporting student agronomy activities.'
    }
  ] as LeadershipRole[],

  // Campus clubs compact list
  campusClubs: [
    'Collegiate 4-H',
    'Murray State Drone Club',
    'Running Club',
    'Pickleball Club'
  ],

  // Service Initiatives
  serviceInitiatives: [
    {
      id: 'serv-aerial-innovators',
      title: '4-H Aerial Ag Innovators',
      role: 'Indiana Youth State Leader',
      organization: 'National 4-H Council & Purdue Extension',
      period: 'State Youth Leader',
      summary: 'Selected as one of three Indiana youth state leaders to receive specialized training at Ohio State University and help teach more than 500 youth about drones, robotics, sensors, and precision agriculture.',
      highlights: [
        'Selected as one of three youth leaders representing Indiana.',
        'Attended intensive precision-agriculture and drone training at Ohio State University.',
        'Helped teach more than 500 youth through hands-on workshops introducing flight physics, remote sensing, and agricultural technology.'
      ],
      metrics: 'Helped teach 500+ youth across Indiana',
      category: 'Youth STEM',
      isFeatured: true
    },
    {
      id: 'serv-world-hunger',
      title: 'World Hunger Advocate Group',
      role: 'Founder & Team Lead',
      organization: 'Youth Food Security Team (Supported by National 4-H & Corteva)',
      period: 'Team Lead',
      summary: 'I founded the Vanderburgh County 4-H World Hunger Advocate Group, led a five-person youth team, secured approximately $5,000 in combined National 4-H and Corteva support, and organized food-security and agricultural education using activities such as microgreen growing reaching at least 1,500 people with roughly 500–600 direct participants. I’m also applying for additional funding to continue the group’s food-security and agricultural education work and help train more youth leaders to carry it forward.',
      highlights: [
        'Founded and led a 5-person youth team focused on food security and agricultural education.',
        'Secured ~$5,000 in combined National 4-H and Corteva grant support to fund education kits and community gardens.',
        'Organized microgreen kits and food-security presentations reaching at least 1,500 people (500–600 direct hands-on workshop participants).',
        'Participated in an Appalachia community service trip to David, Kentucky, building raised garden beds and supporting local food pantries.',
        'Applying for additional funding to continue food-security education and train more youth leaders.'
      ],
      metrics: '~$5,000 in grants secured; 1,500+ community reach; applying for additional funding',
      category: 'Community Hunger & Service',
      isFeatured: true
    },
    {
      id: 'serv-ato-faith-service',
      title: 'Faith, Bible Study Leadership & Brotherhood',
      role: 'Chaplain & Former Social Service Coordinator',
      organization: 'Alpha Tau Omega Fraternity — Zeta Lambda Chapter',
      period: '2024–Present',
      summary: 'Attended the Winter 2026 ATO Chicago retreat to learn how to lead Bible studies and grow in faith; led weekly fraternity Bible studies, growing participation from 3 people to over 15; organized an All-Campus Bible Study once a semester; and coordinated community service drives.',
      highlights: [
        'Attended the Alpha Tau Omega Chicago leadership retreat in Winter 2026 to learn how to facilitate Bible studies and deepen spiritual grounding.',
        'Led weekly chapter Bible studies, intentionally fostering an open, welcoming environment that grew active brotherhood attendance from 3 to over 15 members.',
        'Organized and put on an All-Campus Bible Study once a semester, uniting students across campus for fellowship, worship, and Scripture discussion.',
        'Provided peer support, brotherhood encouragement, and chapter devotionals.',
        'As Social Service Coordinator, coordinated chapter participation in Sleep in Heavenly Peace bed builds, highway cleanups, and local community service drives.'
      ],
      metrics: 'Grew weekly study from 3 to 15+ members; hosted semesterly all-campus studies',
      category: 'Faith & Brotherhood',
      isFeatured: true
    },
    {
      id: 'serv-stock-trailer',
      title: 'Stock the Trailer Collaborative Food Drive',
      role: 'Founding Co-Leader',
      organization: 'County Fair & Regional Food Bank Initiative',
      period: 'Collaborative Community Effort',
      summary: 'Helped establish and lead a collaborative county food drive, collecting 3,550 pounds of food in the first year and 6,126 pounds in the second, totaling 9,676 pounds for local families in need.',
      highlights: [
        'Collaborated with youth leaders and fair organizers to launch the regional food drive initiative.',
        'Coordinated collection logistics, volunteer shifts, and drop-off coordination with local food bank partners.',
        'Delivered a collaborative two-year total of 9,676 lbs of non-perishable food (3,550 lbs year 1, 6,126 lbs year 2).'
      ],
      metrics: '9,676 lbs of food collected over two years collaboratively',
      category: 'Community Hunger & Service',
      isFeatured: false
    },
    {
      id: 'serv-community-causes',
      title: 'Civic, Disaster Relief & Youth Volunteering',
      role: 'Volunteer Participant',
      organization: 'Regional Non-Profits & Community Outreach',
      period: 'Ongoing Volunteer Involvement',
      summary: 'Regular volunteer involvement including Sleep in Heavenly Peace bed builds, local animal shelter support, Need Line food pantry assistance, school-supply backpack drives, Mayfield tornado relief cleanup, and packing meals with a volunteer group at Feed My Starving Children.',
      highlights: [
        'Built and delivered beds for children in need through Sleep in Heavenly Peace.',
        'Packed school-supply backpacks for local students and supported Boys & Girls Club programs.',
        'Participated in community cleanup following the Mayfield tornado.',
        'Volunteered with a group effort packaging meals at Feed My Starving Children.'
      ],
      category: 'Community Hunger & Service',
      isFeatured: false
    }
  ] as ServiceInitiative[],

  // Selected Honors & Recognition
  honors: [
    {
      title: 'National FFA Nursery Operations Proficiency Award Finalist',
      issuer: 'National FFA Organization',
      year: '2023',
      description: 'Selected as one of four national finalists across the United States in recognition of entrepreneurial small-business ownership, plant production, and nursery management at Pohl’s Greenhouse.',
      category: 'FFA'
    },
    {
      title: 'Indiana State Star Farmer Finalist',
      issuer: 'Indiana FFA Association',
      description: 'Recognized as a state finalist for agricultural production, business records, and practical enterprise management.',
      category: 'FFA'
    },
    {
      title: 'American FFA Degree',
      issuer: 'National FFA Organization',
      description: 'Earned the highest degree achievable in the National FFA Organization, representing extensive supervised agricultural experience and community leadership.',
      category: 'FFA'
    },
    {
      title: 'Two Bob Evans FFA SAE Grants',
      issuer: 'Bob Evans & National FFA Foundation',
      description: 'Competitively awarded agricultural entrepreneurship grants used to purchase supplemental grow lights, environmental timers, and automatic watering systems for Pohl’s Greenhouse.',
      category: 'FFA'
    },
    {
      title: 'High School Salutatorian',
      issuer: 'Gibson Southern High School',
      year: 'May 2024',
      description: 'Graduated second in class, maintaining academic excellence alongside varsity athletics, 4-H leadership, and greenhouse ownership.',
      category: 'Academics'
    },
    {
      title: 'Business Professionals of America (BPA) Recognition & State Placement',
      issuer: 'Business Professionals of America — Indiana',
      description: 'Recognized for computer science and programming knowledge at the regional level and achieved state competitive placement.',
      category: 'Academics'
    },
    {
      title: 'Cross-Country & Track Academic All-State Recognition',
      issuer: 'IHSAA / Academic All-State',
      description: 'Recognized for balancing competitive distance running and varsity athletics with high academic marks.',
      category: 'Athletics & Leadership'
    }
  ] as HonorItem[],

  // Outside of Work & Personal Pursuits
  personalSection: {
    stJudeMarathon: {
      title: 'Winter 2026 Marathon Training — St. Jude Memphis Marathon (December 5, 2026)',
      season: 'Winter 2026 Marathon',
      location: 'Memphis, Tennessee',
      date: 'December 5, 2026',
      status: 'Current Training Goal (Not a completed race)',
      postText: `Hey everyone, I’m training to run the St. Jude Marathon in Memphis on December 5. I want those 26.2 miles to challenge me and give me a way to be part of something bigger than myself.

“Don’t tell me the sky is the limit when there are footprints on the moon.”

That quote in St. Jude patient Kane’s artwork makes me think about the limits we put on ourselves. I have goals for this race, and I may not reach every one, but I don’t want to decide what I’m capable of before giving myself a chance to try. I want to approach more of life that way, and I hope this encourages someone else to do the same.

Those footprints also took a lot of people working toward something they believed was possible. Helen Keller’s words, “Alone we can do so little; together we can do so much,” fit that idea. We each have something to contribute, and encouraging each other can help us take on things we might otherwise keep putting off.

I’m putting together a team, and I’d really love to have some of you join me. St. Jude offers a virtual 5K, so you can walk or run 3.1 miles in your neighborhood, at a park, or wherever works for you during the virtual race window. Maybe my part is 26.2 miles and yours is 3.1, but we’re supporting the same cause and giving each other something to work toward.

If you’re interested in joining the team, just message me! Once it’s set up, I’ll send you my team’s signup link and instructions and help you get registered.

Kahlil Gibran wrote, “It is when you give of yourself that you truly give.” With so much competing for our attention today, I think choosing to spend some of our time helping others matters. You don’t have to donate to make a difference. Training for this race, taking time to walk or run, and sharing why we’re participating are ways to raise awareness for St. Jude. Inviting a friend or encouraging someone along the way can help that effort reach further.

That brings me back to those footprints on the moon and the people who gave their time to make something bigger possible. I’d love for us to bring that same willingness to this, each doing our part and seeing what we can accomplish together.

Thank you,
Isaac Pohl`,
      artworkSrc: `${import.meta.env.BASE_URL}assets/aistudio/patient-kane-quote-1x1-social_a04c5213.jpg`,
      artworkCredit: 'Artwork by St. Jude Patient Kane with quotation appearing in the artwork: "Don\'t tell me the sky is the limit when there are footprints on the moon."',
      officialEventUrl: 'https://www.stjude.org/get-involved/fitness-fundraisers/memphis-marathon/event-information.html'
    },

    hobbies: [
      {
        title: 'Long-Distance Running & Marathon Training',
        description: 'Currently logging miles training for the December 5, 2026 St. Jude Marathon in Memphis. Endurance training reinforces steady cadence and discipline.'
      },
      {
        title: 'Pickleball',
        description: 'Enjoying fast-paced games on campus courts, intramural leagues, and staying active with friends and peers.'
      },
      {
        title: 'Plant Care & Propagation',
        description: 'A lasting appreciation for horticulture from running the greenhouse. Regularly propagating cuttings and observing plant growth.'
      },
      {
        title: 'Restoring an International Scout 80',
        description: 'An ongoing hands-on mechanical project restoring a vintage International Scout 80, learning automotive mechanics, bodywork, and patient troubleshooting.'
      },
      {
        title: 'Camping & Backpacking',
        description: 'Getting out into the woods for trail time, campfire cooking, and disconnecting from screens.'
      },
      {
        title: 'Homemade Ice Cream & Reviews',
        description: 'Experimenting with homemade ice cream recipes and enjoying trying and reviewing local ice cream shops.'
      }
    ],

    guidingQuotes: [
      {
        id: 'quote-kane',
        quote: "Don't tell me the sky is the limit when there are footprints on the moon.",
        author: 'Quotation appearing in artwork by St. Jude patient Kane',
        sourceCredit: 'St. Jude Patient Artwork',
        contextNote: 'A reminder not to decide what I am capable of before giving myself a chance to try, and that breakthroughs happen when people work together toward something they believed was possible.',
        isFeaturedOnLanding: true
      },
      {
        id: 'quote-keller',
        quote: 'Alone we can do so little; together we can do so much.',
        author: 'Helen Keller',
        sourceCredit: 'Supported by the American Foundation for the Blind archive',
        contextNote: 'Whether training 26.2 miles, organizing a virtual 5K, or tackling complex data challenges, real impact is always collaborative.',
        isFeaturedOnLanding: true
      },
      {
        id: 'quote-gibran',
        quote: 'It is when you give of yourself that you truly give.',
        author: 'Kahlil Gibran',
        sourceCredit: 'The Prophet (1923)',
        contextNote: 'Giving is not just financial; it is about offering your time, energy, and genuine presence to help others.',
        isFeaturedOnLanding: false
      },
      {
        id: 'quote-warren',
        quote: "When you give someone your time, you are giving them a portion of your life that you'll never get back. Your time is your life. That is why the greatest gift you can give someone is your time.",
        author: 'Rick Warren',
        sourceCredit: 'The Purpose Driven Life',
        contextNote: 'Time is the one resource you can never recover. Choosing to invest time in mentoring, brotherhood, or community drives is an authentic gift.',
        isFeaturedOnLanding: false
      },
      {
        id: 'quote-kirk',
        quote: "I don't know what I'm supposed to do, all I know is what I can do.",
        author: 'Captain James T. Kirk',
        sourceCredit: 'Star Trek',
        contextNote: 'When faced with unfamiliar challenges, focus on what is within your power to do right now, take initiative, and move forward.',
        isFeaturedOnLanding: false
      },
      {
        id: 'quote-shedd',
        quote: 'A ship in harbor is safe, but that is not what ships are built for.',
        author: 'John A. Shedd',
        sourceCredit: 'Salt from My Attic (1928)',
        contextNote: 'Growth and purpose come from venturing out of comfortable harbors—whether running a business during school or pursuing dual disciplines.',
        isFeaturedOnLanding: false
      }
    ] as InspirationalQuote[]
  },

  // Skills Grouped by Context
  supportedSkills: [
    {
      category: 'Software & Databases',
      description: 'Languages, frameworks, databases, and development tools used in internships and practical projects.',
      skills: [
        { name: 'C# / .NET & Blazor', context: 'Used at Parrish Consulting Services developing desktop and web client applications' },
        { name: 'ASP.NET Core & WPF', context: 'Built and tested application components, services, and desktop interfaces at Parrish' },
        { name: 'Python & Flask', context: 'Developed backend REST API on Raspberry Pi for the LunchBox student register' },
        { name: 'Java / Android', context: 'Developed student point-of-sale register UI and computer science coursework' },
        { name: 'SQL Server & SSMS', context: 'Database discovery at OneMain Financial; queries and testing at Parrish' },
        { name: 'Microsoft Access & SQL', context: 'Built relational leaf-sample database and comparison charting for Pohl Ag Service' },
        { name: 'React & Node.js', context: 'Web Applications & Services coursework (CSC425) exploring component state and accessibility' },
        { name: 'Git & GitHub', context: 'Version control and source code management' }
      ]
    },
    {
      category: 'AI-Assisted Discovery & Analysis',
      description: 'Workflow exploration, prompt and context development, and metadata analysis.',
      skills: [
        { name: 'Prompt & Context Development', context: 'Designed structured prompts to assist in analyzing database and application metadata' },
        { name: 'AI-Assisted Metadata Discovery', context: 'Evaluated existing language models for database exploration at OneMain Financial' },
        { name: 'Human-in-the-Loop Validation', context: 'Conducted rigorous evidence reviews to ensure model outputs matched technical schemas' },
        { name: 'Candidate Dimensional Modeling', context: 'Documented relational schemas and business entities to support analytical planning' },
        { name: 'Data Visualization & Charting', context: 'Created comparison graphs for agronomic leaf test analysis' }
      ]
    },
    {
      category: 'Agriculture & Fieldwork',
      description: 'Hands-on fieldwork, crop trial support, precision equipment, and greenhouse plant production.',
      skills: [
        { name: 'Soil & Leaf Tissue Sampling', context: 'Collected field soil cores and crop leaf tissue samples across regional trial plots' },
        { name: 'Crop Trial & Fertility Support', context: 'Supported field trials evaluating fertilizer treatments and crop responses' },
        { name: 'Precision Agriculture Tools', context: 'Assisted with drone aerial observation, GPS field mapping, and soil moisture probes' },
        { name: 'Conservation Field Observations', context: 'Conducted spring residue, no-till, and cover-crop assessments for government records' },
        { name: 'Greenhouse Plant Production', context: '5 years running Pohl’s Greenhouse; managed propagation, watering, lighting, and sales' },
        { name: 'Agronomic Communication', context: 'Translating farmer and agronomist questions into clear comparison charts and data views' }
      ]
    }
  ] as SupportedSkillGroup[]
};

export const PROFILE_DATA = PORTFOLIO_DATA.profile;
