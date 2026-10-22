export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: 'Built Work' | 'Internship Work' | 'Student Team Project' | 'Coursework' | 'Concept & Planning';
  category: 'Agriculture Database' | 'Data Discovery & AI' | 'Mobile & Backend' | 'C# & .NET' | 'Coursework' | 'Future Concept';
  summary: string;
  role: string;
  status: string;
  technologies: string[];
  problem: string;
  contribution: string;
  practicalResult: string;
  lessons: string;
  isFeatured: boolean;
  link?: string;
  linkLabel?: string;
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
  category: 'Youth STEM' | 'Community Hunger & Service' | 'Faith & Chaplaincy' | 'Campus Leadership';
}

export interface HonorItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
  category: 'FFA' | 'Academics' | 'Athletics & Leadership';
}

export interface InspirationalQuote {
  id: string;
  quote: string;
  author: string;
  sourceCredit: string;
  contextNote: string;
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
    heroTitle: "Hi, I'm Isaac Pohl.",
    heroTagline: 'Agriculture, computer science, and work that connects the two.',
    heroBio: "I'm a junior at Murray State University studying Computer Science and Agriculture–Agriscience Technology. My experience includes agronomy fieldwork, software development, and AI-assisted database discovery. I want to use that background to help build practical technology for agriculture.",
    statusLine: 'Interested in 2027 internships and applied research in agricultural technology.',
    
    // Standard professional contacts
    email: 'isaacpohl0@gmail.com',
    linkedin: 'https://www.linkedin.com/in/isaac-pohl/',
    linkedinHandle: 'isaac-pohl',
    
    // Academic baseline
    university: 'Murray State University',
    academicStanding: 'Junior',
    major: 'Computer Science and Agriculture–Agriscience Technology (Dual Major)',
    graduationDate: 'Expected May 2028',
    locationForResume: 'Haubstadt / Princeton, Indiana & Murray, Kentucky',
    
    // Approved About Copy
    aboutIntro: "My main motivation is to help advance agriculture through technology. I care about understanding the grower, agronomist, researcher, or other person who will use a tool, then making information easier to work with. My agriculture and computer science classes, fieldwork, software internships, greenhouse experience, and service work contribute different parts of that perspective.",
    aboutAgService: "At Pohl Ag Service, I have collected soil and leaf samples and built a Microsoft Access database that connects leaf-sample results to fields and trials. Working with an agronomist on the comparison graphs helped me see how useful software starts with understanding the questions someone needs to answer.",
    aboutGreenhouse: "Running Pohl's Greenhouse gave me another perspective on that connection. I managed plants, customers, records, and equipment, and used lighting and watering technology to support the operation. At Murray State, I am building on those experiences through computer science and agriculture coursework, with a growing interest in AI, data analysis, and precision agriculture.",
    
    // Clean recruiter quick-fill summary
    quickFillSummary: "Junior at Murray State University dual-majoring in Computer Science and Agriculture–Agriscience Technology (expected May 2028). Experience includes agronomy fieldwork and Microsoft Access database development at Pohl Ag Service, AI-assisted metadata discovery at OneMain Financial, software development at Parrish Consulting Services, and former small greenhouse management (Pohl's Greenhouse). Seeking 2027 internships and applied research in agricultural technology."
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
        'Omicron Delta Kappa (ODK) National Leadership Honor Society (President 2026–2027, Treasurer 2025–2026).',
        'Alpha Tau Omega Fraternity — Zeta Lambda Chapter (Chaplain 2026–2027, Social Service Coordinator 2025–2026).',
        'Murray State Agronomy Club (Treasurer 2026–2027).',
        'Involvement in Collegiate 4-H, Drone Club, Running Club, and Pickleball Club.'
      ]
    }
  ],

  // 1. Featured and Comprehensive Experience
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
        'Helped develop and evaluate workflows using existing language models to assist in understanding application and database metadata.',
        'Conducted evidence reviews and validated metadata findings alongside technical and business stakeholders.',
        'Documented schema and table relationships to support enterprise data discovery and candidate dimensional-model planning.',
        'Presented the AI-assisted metadata project, findings, and evaluation lessons to senior technology and business leaders.'
      ],
      technologies: ['Existing Language Models', 'SQL Server / SSMS', 'Metadata Discovery', 'Stakeholder Review', 'Technical Documentation']
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
      summary: 'Designed and facilitated youth programs, supported workshops and fair events, handled participant communications and logistics, and co-developed a data-informed program-growth analysis.',
      responsibilities: [
        'Designed and facilitated interactive youth programs and community educational workshops.',
        'Supported county fair operations, livestock shows, participant communications, and day-to-day logistics.',
        'Co-developed a program-growth analysis utilizing participant surveys, community feedback, and comparative research of regional Extension models.',
        'Authored process documentation and repeatable guides to support future Extension staff and volunteer leaders.'
      ],
      technologies: ['Youth Program Design', 'Survey Analysis', 'Process Guides', 'Event Operations', 'Community Communication']
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
        'Developed and tested internal and client applications across C#, Blazor, ASP.NET Core, and WPF.',
        'Contributed to server and data-connection monitoring and installation workflows while learning unfamiliar tools quickly.',
        'Integrated relational SQL Server queries and assisted in debugging and testing API endpoints.',
        'Participated in application deployment, hardware setups, and technical troubleshooting.'
      ],
      technologies: ['C#', 'Blazor', 'ASP.NET Core', 'WPF', 'SQL Server', 'REST APIs', 'Server Monitoring']
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
      summary: 'Collect soil, crop, and leaf samples, support fertility and crop-management trials, and assist with precision-agriculture fieldwork (drones, mapping, moisture probes). Built a Microsoft Access database that imports leaf-sample results and generates comparison graphs for an agronomist.',
      responsibilities: [
        'Collect soil, crop, and leaf tissue samples across regional grower fields to support agronomic recommendations.',
        'Built and maintain a Microsoft Access database that imports leaf-sample results, relates them to fields and trials, and generates adjustable comparison graphs for an agronomist.',
        'Assist with precision-agriculture fieldwork involving drone aerial observation, GPS field mapping, and soil moisture probe readings.',
        'Support field trial layout and data collection for fertilizer, herbicide, and crop-management evaluations.'
      ],
      technologies: ['Microsoft Access', 'VBA / SQL', 'Leaf & Soil Sampling', 'Field Trials', 'GPS Mapping', 'Moisture Probes']
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
      summary: "Owned a small greenhouse and nursery business, managing plant production, inventory, purchasing, finances, marketing, and sales. Integrated grant-funded lighting, timers, and automatic watering.",
      responsibilities: [
        'Managed all operational aspects of a small greenhouse business: seed propagation, plant care, customer sales, and finances.',
        'Used FFA grants to add grow lights, timers, automatic watering, and basic environmental controls.',
        'Kept crop calendars, germination logs, bloom records, and customer sales data to continuously improve planning.',
        'Recognized as a 2023 National FFA Nursery Operations Proficiency Award finalist (one of four national finalists), Indiana State Star Farmer finalist, and recipient of two Bob Evans FFA SAE grants.'
      ],
      technologies: ['Small Business Ownership', 'Horticulture & Propagation', 'Automatic Watering', 'Crop Records', 'Customer Service']
    },
    // Expanded Background for CV / Detailed View
    {
      id: 'exp-wellness-center',
      role: 'Student Front Desk Staff',
      company: 'Murray State University Wellness Center',
      location: 'Murray, Kentucky',
      period: 'Campus Employment',
      isCurrent: true,
      category: 'Campus & Operations',
      isFeatured: false,
      summary: 'Public-facing campus employment focused on customer service, facility access control, member check-in accuracy, and equipment management.',
      responsibilities: [
        'Provided welcoming customer service to university students, faculty, and community members.',
        'Maintained facility access control, verifying student credentials and check-in records accurately.',
        'Handled equipment checkouts, safety monitoring, and member inquiries.'
      ],
      technologies: ['Customer Service', 'Access Control', 'Facility Operations']
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
      summary: 'Partnered with a cousin to grow and sell pumpkins, Indian corn, and gourds across 3 total acres and 3 local sales locations, managing local marketing and website promotion.',
      responsibilities: [
        'Managed planting, field maintenance, harvesting, and roadside distribution for 3 total acres of fall crops.',
        'Coordinated sales operations across 3 retail stand locations in Gibson County.',
        'Built local customer awareness through roadside promotion, website updates, and social media.'
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
        'Assisted with preventative equipment maintenance, tillage, and grain-bin loading and unloading.',
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
      company: 'Conservation Fieldwork Assessment',
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

  // 2. Focused, Credible Projects
  projects: [
    {
      id: 'proj-leaf-db',
      title: 'Pohl Ag Service Leaf-Sample Database',
      subtitle: 'Microsoft Access Database for Agronomic Nutrient Comparison',
      type: 'Built Work',
      category: 'Agriculture Database',
      summary: 'Built a Microsoft Access database that imports lab leaf-sample results, connects them to fields and trials, and generates adjustable comparison graphs for an agronomist.',
      role: 'Database Developer & Junior Assistant',
      status: 'Completed & in practical use',
      technologies: ['Microsoft Access', 'VBA', 'Relational SQL', 'Lab Imports', 'Data Visualization'],
      problem: "An agronomist at Pohl Ag Service needed an efficient way to evaluate leaf tissue test results across various fields, crop trials, and fertility treatments. Working in disconnected spreadsheets made it cumbersome to track multi-year trends or generate consistent side-by-side comparison charts for growers.",
      contribution: "Designed relational tables in Microsoft Access linking sample batches to specific grower fields and trial treatments. Built automated import routines for laboratory test results, wrote SQL queries to calculate baseline nutrient relationships, and created form-based charting controls that allow the agronomist to select treatments and view adjustable comparison graphs.",
      practicalResult: "Gave the agronomist a structured tool to review crop nutrient absorption trends and compare trial treatments across different fields without tedious manual graphing.",
      lessons: "Demonstrated firsthand that useful agricultural software begins by understanding the exact questions an agronomist or grower needs to answer, rather than adding complex, unneeded features.",
      isFeatured: true
    },
    {
      id: 'proj-onemain-ai',
      title: 'OneMain Financial AI-Assisted Data Discovery',
      subtitle: 'Internship Discovery & Analytical Planning Workflow',
      type: 'Internship Work',
      category: 'Data Discovery & AI',
      summary: 'Helped develop and apply an AI-assisted workflow for understanding application and database metadata, reviewing findings with technical stakeholders, and documenting information for enterprise data discovery.',
      role: 'Summer Technology Intern',
      status: 'Completed project & presented to senior leadership',
      technologies: ['Language Models', 'SQL Server / SSMS', 'Metadata Analysis', 'Stakeholder Validation', 'Technical Documentation'],
      problem: "Enterprise database environments often contain extensive, dense table metadata across multiple legacy and modern systems. Mapping table relationships and identifying key entities for analytical planning required substantial manual discovery time.",
      contribution: "Helped develop and evaluate prompt and context workflows using existing language models to assist in deciphering database schemas and metadata definitions. Conducted evidence reviews alongside data engineers and business stakeholders to validate findings, and documented schemas to support candidate dimensional-model planning.",
      practicalResult: "Delivered verified metadata documentation and presented evaluation findings and process lessons to senior technology and business leaders, highlighting where language models aid discovery and where human review remains essential.",
      lessons: "Learned the critical importance of keeping human review and validation at the center of AI-assisted data discovery workflows, distinguishing between helpful discovery aids and production systems.",
      isFeatured: true
    },
    {
      id: 'proj-lunchbox',
      title: 'LunchBox Restaurant Point-of-Sale Application',
      subtitle: 'Tablet Cash-Register & Order System for Culinary Arts Restaurant',
      type: 'Student Team Project',
      category: 'Mobile & Backend',
      summary: 'Led a student team developing a tablet cash-register application for the student-run restaurant at Southern Indiana Career & Technical Center, featuring a Python Flask API on a Raspberry Pi.',
      role: 'Team Lead & Backend/API Developer',
      status: 'Completed student team project',
      technologies: ['Python', 'Flask', 'Raspberry Pi', 'Java', 'Android Studio', 'REST APIs'],
      problem: "The student-operated restaurant at Southern Indiana Career & Technical Center needed an easy-to-use digital order and register system tailored specifically to their kitchen ticketing and front-of-house workflow.",
      contribution: "Led a student development team through requirements discussions with the culinary arts chef and instructor. Designed the ordering workflow, built the backend REST API using Python Flask hosted on an on-premise Raspberry Pi, and coordinated data exchange with the student-developed Java/Android tablet register.",
      practicalResult: "Successfully deployed in the culinary arts dining room for student meal service, allowing student servers to submit orders directly to the kitchen display.",
      lessons: "Gained valuable experience translating customer operational needs into clear software requirements, managing team milestones, and integrating physical local hardware with mobile client interfaces.",
      isFeatured: true
    },
    {
      id: 'proj-parrish',
      title: 'Parrish Consulting Services Application & Server Monitoring',
      subtitle: 'C# / .NET Software Development & Infrastructure Monitoring',
      type: 'Internship Work',
      category: 'C# & .NET',
      summary: 'Contributed to internal and client applications and server/data-connection monitoring workflows using C#, Blazor, ASP.NET Core, WPF, SQL Server, and APIs.',
      role: 'Software Development Intern',
      status: 'Completed internship work',
      technologies: ['C#', 'Blazor', 'ASP.NET Core', 'WPF', 'SQL Server', 'REST APIs'],
      problem: "Client systems required ongoing application maintenance, interface testing, and reliable connection monitoring across on-premise and remote servers.",
      contribution: "Contributed to internal and client software development across Blazor and WPF. Built and tested SQL Server database connections, helped write and inspect API endpoints, and assisted with server monitoring and installation workflows while learning unfamiliar toolchains.",
      practicalResult: "Provided tested application updates and assisted monitoring workflows that helped ensure stable data connections for client installations.",
      lessons: "Developed versatility and rapid-learning habits by picking up new C# and .NET frameworks quickly within a professional software consulting environment.",
      isFeatured: true
    },
    // Academic Coursework Projects
    {
      id: 'proj-csc425-school',
      title: 'School-Management System & TranscriptCard (CSC425)',
      subtitle: 'Murray State Computer Science Database Coursework',
      type: 'Coursework',
      category: 'Coursework',
      summary: 'Course project implementing student records management, course enrollments, and academic transcript calculations using relational schema design and SQL.',
      role: 'Student Developer',
      status: 'Coursework Project',
      technologies: ['Relational Database Design', 'SQL', 'ERD Modeling', 'Data Validation'],
      problem: "Academic database course assignment requiring complete relational schema normalization, entity-relationship modeling, and query logic for student transcripts.",
      contribution: "Designed third-normal-form relational tables for courses, students, and enrollments, and wrote SQL procedures and queries to compute GPA and output transcript summaries.",
      practicalResult: "Demonstrated strong relational modeling principles and structured query design.",
      lessons: "Solidified database design fundamentals and query integrity constraints.",
      isFeatured: false
    },
    {
      id: 'proj-csc345-solitaire',
      title: 'Solitaire Lite (CSC345)',
      subtitle: 'Object-Oriented Software Engineering Coursework',
      type: 'Coursework',
      category: 'Coursework',
      summary: 'Desktop card game implementation in Java demonstrating object-oriented architecture, state pattern modeling, and clean user interface event handling.',
      role: 'Student Developer',
      status: 'Coursework Project',
      technologies: ['Java', 'Object-Oriented Design', 'State Modeling', 'GUI Events'],
      problem: "Computer science coursework focusing on state encapsulation, event handling, and clean object-oriented architecture.",
      contribution: "Built game board state logic, deck shuffling and draw algorithms, card placement validation rules, and move history undo handling.",
      practicalResult: "Delivered a fully playable card application meeting all course specifications.",
      lessons: "Deepened understanding of separation of concerns between game logic and interface state.",
      isFeatured: false
    },
    {
      id: 'proj-t50-drone',
      title: 'DJI Agras T50 Agricultural Drone Capability Analysis',
      subtitle: 'Agriculture Coursework Research & Technical Presentation',
      type: 'Coursework',
      category: 'Coursework',
      summary: 'Technical research analysis and class presentation examining agricultural drone capabilities, payload capacity, spray coverage, and precision application economics.',
      role: 'Researcher & Presenter',
      status: 'Coursework Research Presentation',
      technologies: ['Precision Agriculture', 'Agricultural Drone Technology', 'Spray Economics', 'Technical Presentation'],
      problem: "Agricultural systems coursework exploring emerging aerial application technology and how modern spray drones compare with ground equipment.",
      contribution: "Researched and presented an analysis of the DJI Agras T50's spray atomization, centrifugal nozzles, obstacle avoidance radar, battery recharge logistics, and practical application limitations in commercial farming.",
      practicalResult: "Delivered an in-depth technical analysis for peers and faculty on the operational feasibility and cost dynamics of agricultural drone applications.",
      lessons: "Clarified the difference between manufacturer specifications and realistic field operating conditions in precision agriculture.",
      isFeatured: false
    },
    // Future Concepts & Research Interests
    {
      id: 'proj-ag-intel-concept',
      title: 'Pohl Ag Service Agricultural Intelligence Concept',
      subtitle: 'Documented Concept & Showcase Planning for Agronomy Attention Lists',
      type: 'Concept & Planning',
      category: 'Future Concept',
      summary: 'A documented concept and showcase plan for bringing weather, soil moisture, drone imagery, field operations, and trial observations into a unified agronomist attention list and field view.',
      role: 'Concept Designer',
      status: 'Concept & Showcase Planning (Not a deployed client platform)',
      technologies: ['Concept Architecture', 'Data Integration Planning', 'Field Attention Views', 'Agronomic Workflows'],
      problem: "Agronomists currently juggle disparate platforms—weather stations, moisture probe graphs, aerial drone photos, and harvest maps—making it hard to prioritize which fields need attention on a given morning.",
      contribution: "Created a concept architecture outlining how multi-source field data could be aggregated into an attention-driven dashboard, prioritizing stressed fields and tracking trial responses over the growing season.",
      practicalResult: "Serves as an active conceptual framework and showcase plan for future applied research in precision agriculture software.",
      lessons: "Highlighting how thoughtful user-interface design can help agricultural practitioners cut through overwhelming data noise to find actionable insights.",
      isFeatured: false
    }
  ] as Project[],

  // 3. Documented Leadership Roles
  leadershipRoles: [
    {
      organization: 'Omicron Delta Kappa (ODK) National Leadership Honor Society',
      roles: ['President, 2026–2027', 'Treasurer, 2025–2026'],
      timeline: '2025–2027',
      focus: 'Leading chapter operations, managing annual organization finances, gathering member input, and planning practical cross-disciplinary service initiatives.'
    },
    {
      organization: 'Alpha Tau Omega (ATO) Fraternity — Zeta Lambda Chapter',
      roles: ['Chaplain, 2026–2027', 'Social Service Coordinator, 2025–2026'],
      timeline: '2025–2027',
      focus: 'Providing chaplaincy pastoral care, leading weekly fraternity Bible studies, organizing semesterly All-Campus Bible Studies, and coordinating community service drives.'
    },
    {
      organization: 'Murray State Agronomy Club',
      roles: ['Treasurer, 2026–2027'],
      timeline: '2026–2027',
      focus: 'Managing organizational funds, budgeting for student travel to agronomy conferences, and coordinating guest speaker seminars.'
    },
    {
      organization: 'Campus Clubs & Student Organizations',
      roles: ['Active Member'],
      timeline: 'Current Involvement',
      focus: 'Active participant in Collegiate 4-H, Murray State Drone Club, Running Club, and Pickleball Club.'
    }
  ] as LeadershipRole[],

  // 4. Grounded Community Service Initiatives
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
      category: 'Youth STEM'
    },
    {
      id: 'serv-world-hunger',
      title: 'World Hunger Advocate Group & Appalachia Service',
      role: 'Founder & Team Lead',
      organization: 'Youth Food Security Team (Supported by National 4-H & Corteva)',
      period: 'Team Lead',
      summary: 'Founded and led a 5-person youth team, secured ~$5,000 in combined National 4-H and Corteva grant support, and organized microgreen and food-security education and service reaching over 1,500 people with 500–600 direct participants.',
      highlights: [
        'Founded and led a dedicated 5-person youth team focused on food security and agricultural education.',
        'Secured approximately $5,000 in combined National 4-H and Corteva grant support to fund education kits and community gardens.',
        'Organized microgreen kits and food-security presentations reaching at least 1,500 people, including 500–600 direct hands-on workshop participants.',
        'Participated in an Appalachia community service trip to David, Kentucky, building raised garden beds and supporting local food pantries.'
      ],
      metrics: '~$5,000 in grants secured; 1,500+ community reach (500–600 direct participants)',
      category: 'Community Hunger & Service'
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
        'Collected 3,550 lbs in year 1 and 6,126 lbs in year 2, delivering a two-year collaborative total of 9,676 lbs of non-perishable food.'
      ],
      metrics: '9,676 lbs of food collected over two years collaboratively',
      category: 'Community Hunger & Service'
    },
    {
      id: 'serv-ato-chaplaincy',
      title: 'Bible Study Leadership & ATO Chaplaincy',
      role: 'Chaplain & Bible Study Leader (2026–2027) • Former Social Service Coordinator (2025–2026)',
      organization: 'Alpha Tau Omega Fraternity — Zeta Lambda Chapter',
      period: '2025–2027',
      summary: 'Attended the Bible study conference in Winter 2026 at the Alpha Tau Omega Chicago retreat to learn how to lead Bible studies and learn more about the Lord; led weekly fraternity Bible studies, growing attendance from 3 people to over 15 people; and put on an All-Campus Bible Study once a semester.',
      highlights: [
        'Attended the Winter 2026 Bible study conference at the Alpha Tau Omega Chicago retreat to learn how to facilitate Bible studies and grow in faith.',
        'Led weekly chapter Bible studies, intentionally creating a welcoming space that grew regular participation from 3 people to over 15 brothers.',
        'Organized and put on an All-Campus Bible Study once a semester, uniting students across campus for fellowship, worship, and Scripture discussion.',
        'Carried out chaplaincy responsibilities including brotherhood pastoral care, spiritual encouragement, and coordinating devotionals.',
        'As Social Service Coordinator, organized chapter participation in Sleep in Heavenly Peace bed builds and deliveries, highway and campus cleanups, and local community service drives.'
      ],
      metrics: 'Grew weekly study from 3 to 15+ members; organized semesterly all-campus studies',
      category: 'Faith & Chaplaincy'
    },
    {
      id: 'serv-community-causes',
      title: 'Civic, Disaster Relief & Youth Volunteering',
      role: 'Volunteer Participant',
      organization: 'Regional Non-Profits & Community Outreach',
      period: 'Ongoing Volunteer Involvement',
      summary: 'Regular volunteer involvement including Sleep in Heavenly Peace bed builds, local animal shelter support, Need Line food pantry assistance, school-supply backpack drives (~100 backpacks), Mayfield tornado relief cleanup, and packing 32,400 meals with a volunteer group at Feed My Starving Children.',
      highlights: [
        'Built and delivered beds for children in need through Sleep in Heavenly Peace.',
        'Packed school-supply backpacks (~100 backpacks) for local students and supported Boys & Girls Club programs.',
        'Participated in community disaster cleanup following the Mayfield tornado.',
        'Volunteered with a group effort packaging 32,400 meals at Feed My Starving Children.'
      ],
      metrics: '~100 backpacks distributed; group effort packaging 32,400 meals',
      category: 'Community Hunger & Service'
    }
  ] as ServiceInitiative[],

  // 5. Selected Honors & Recognition
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
      year: '2023',
      description: 'Recognized as a state finalist for agricultural production, business records, and practical enterprise management.',
      category: 'FFA'
    },
    {
      title: 'American FFA Degree',
      issuer: 'National FFA Organization',
      year: '2024',
      description: 'Earned the highest degree achievable in the National FFA Organization, representing extensive supervised agricultural experience and community leadership.',
      category: 'FFA'
    },
    {
      title: 'Two Bob Evans FFA SAE Grants',
      issuer: 'Bob Evans & National FFA Foundation',
      year: '2021 & 2022',
      description: 'Competitively awarded agricultural entrepreneurship grants used to purchase supplemental grow lights, environmental timers, and automatic watering systems for Pohl’s Greenhouse.',
      category: 'FFA'
    },
    {
      title: 'High School Salutatorian',
      issuer: 'Gibson Southern High School',
      year: '2023',
      description: 'Graduated second in class, maintaining academic excellence alongside varsity athletics, 4-H leadership, and greenhouse ownership.',
      category: 'Academics'
    },
    {
      title: 'Business Professionals of America (BPA) Regional Recognition & State Placement',
      issuer: 'Business Professionals of America — Indiana',
      year: '2022',
      description: 'Recognized for computer science and programming knowledge at the regional level and achieved state competitive placement.',
      category: 'Academics'
    },
    {
      title: 'Cross-Country & Track Academic Recognition',
      issuer: 'IHSAA / Academic All-State',
      year: '2021–2023',
      description: 'Recognized for balancing competitive distance running and varsity athletics with high academic marks.',
      category: 'Athletics & Leadership'
    }
  ] as HonorItem[],

  // 6. Outside of Work & Personal Motivations
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
      officialEventUrl: 'https://www.stjude.org/get-involved/fitness-events/st-jude-memphis-marathon.html'
    },

    hobbies: [
      {
        title: 'Long-Distance Running & Training',
        description: 'Currently logging miles for the December 5, 2026 St. Jude Marathon in Memphis. Endurance training reinforces the discipline of steady progress, cadence on cold mornings, and testing limits.'
      },
      {
        title: 'Pickleball',
        description: 'Enjoying fast-paced games on campus courts, intramural leagues, and getting active outside with friends and peers.'
      },
      {
        title: 'Plant Propagation & Living Systems',
        description: 'A lasting appreciation for horticulture from running the greenhouse. Regularly propagating cuttings, testing seed germination, and observing plant growth.'
      },
      {
        title: 'Learning from Conversations',
        description: 'Asking agronomists, farmers, software engineers, and researchers about the problems they encounter daily; finding that the most useful software ideas come from listening to real workflows.'
      },
      {
        title: 'Camping & Backpacking',
        description: 'Getting into the woods for quiet trail time, campfire cooking, and disconnecting from screens.'
      },
      {
        title: 'International Scout Restoration',
        description: 'An ongoing personal project working on an International Scout, learning hands-on mechanical repair, bodywork, and patient troubleshooting.'
      },
      {
        title: 'Homemade Ice Cream & Reviews',
        description: 'Experimenting with homemade ice cream recipes and enjoying sampling and reviewing local ice cream shops.'
      }
    ],

    guidingQuotes: [
      {
        id: 'quote-kane',
        quote: "Don't tell me the sky is the limit when there are footprints on the moon.",
        author: 'Quotation appearing in artwork by St. Jude patient Kane',
        sourceCredit: 'St. Jude Patient Artwork',
        contextNote: 'A reminder not to decide what I am capable of before giving myself a chance to try, and that breakthroughs happen when people work together toward something they believe is possible.'
      },
      {
        id: 'quote-keller',
        quote: 'Alone we can do so little; together we can do so much.',
        author: 'Helen Keller',
        sourceCredit: 'Supported by the American Foundation for the Blind archive',
        contextNote: 'Whether running 26.2 miles, organizing a virtual 5K walk, or tackling complex data challenges, real impact is always collaborative.'
      },
      {
        id: 'quote-gibran',
        quote: 'It is when you give of yourself that you truly give.',
        author: 'Kahlil Gibran',
        sourceCredit: 'The Prophet (1923)',
        contextNote: 'Giving is not just about financial checks; it is about offering your time, energy, and genuine presence to help others.'
      },
      {
        id: 'quote-warren',
        quote: "When you give someone your time, you are giving them a portion of your life that you'll never get back. Your time is your life. That is why the greatest gift you can give someone is your time.",
        author: 'Rick Warren',
        sourceCredit: 'The Purpose Driven Life',
        contextNote: 'Time is the one resource you can never recover. Choosing to invest time in youth mentoring, chapter brotherhood, or community drives is the most authentic gift you can share.'
      },
      {
        id: 'quote-kirk',
        quote: "I don't know what I'm supposed to do, all I know is what I can do.",
        author: 'Captain James T. Kirk',
        sourceCredit: 'Star Trek (Favorite personal quote on initiative)',
        contextNote: 'When faced with unfamiliar challenges or unexpected conditions, focus on what is within your power to do right now, take initiative, and move forward.'
      },
      {
        id: 'quote-shedd',
        quote: 'A ship in harbor is safe, but that is not what ships are built for.',
        author: 'John A. Shedd',
        sourceCredit: 'Salt from My Attic (1928)',
        contextNote: 'Growth and purpose come from venturing out of comfortable harbors—whether running a small business in school, tackling dual disciplines, or taking on 26.2 miles.'
      }
    ] as InspirationalQuote[]
  },

  // 7. Supported Skills Grouped by Context
  supportedSkills: [
    {
      category: 'Professional & Project Experience',
      description: 'Languages, frameworks, databases, and practices used in internships, consulting work, and production tools.',
      skills: [
        { name: 'C# / .NET', context: 'Used at Parrish Consulting Services developing desktop and web client applications' },
        { name: 'Blazor & ASP.NET Core', context: 'Built and tested application components and service layers at Parrish' },
        { name: 'WPF', context: 'Maintained and tested desktop interfaces and connection tools' },
        { name: 'Python & Flask', context: 'Developed backend REST API on Raspberry Pi for the LunchBox student register' },
        { name: 'Java / Android', context: 'Tablet UI development and class coursework' },
        { name: 'SQL Server & SSMS', context: 'Metadata investigation at OneMain Financial; database connections at Parrish' },
        { name: 'Microsoft Access & VBA', context: 'Built relational leaf-sample database and custom comparison charting for Pohl Ag Service' },
        { name: 'REST APIs & JSON', context: 'Designed endpoint contracts and testing workflows with Postman' },
        { name: 'Git & GitHub', context: 'Version control, branch management, and collaborative code reviews' },
        { name: 'HTML, CSS & JavaScript', context: 'Web interface layouts, responsive styles, and interactive logic' },
        { name: 'Stakeholder Review & Documentation', context: 'Reviewing findings with business and technical leads at OneMain and agronomists at Pohl Ag Service' }
      ]
    },
    {
      category: 'AI & Data Analysis Experience',
      description: 'Hands-on discovery, prompt/context workflows, and metadata analysis.',
      skills: [
        { name: 'Prompt & Context Development', context: 'Designed structured prompts to assist in analyzing database and application metadata' },
        { name: 'AI-Assisted Metadata Discovery', context: 'Evaluated existing language models for database exploration at OneMain Financial' },
        { name: 'Human-in-the-Loop Validation', context: 'Conducted rigorous evidence reviews to ensure model outputs matched actual technical schemas' },
        { name: 'Candidate Dimensional Modeling', context: 'Documented relational schemas and business entities to support analytical planning' },
        { name: 'Data Visualization & Charting', context: 'Created interactive comparison graphs for agronomic leaf test analysis' }
      ]
    },
    {
      category: 'Current Coursework (Murray State)',
      description: 'Academic foundations, software engineering concepts, and ongoing coursework projects.',
      skills: [
        { name: 'Relational Database Design', context: 'Advanced ERD modeling, 3NF normalization, and complex SQL procedures (CSC425)' },
        { name: 'Object-Oriented Design', context: 'Design patterns, state modeling, and algorithmic problem-solving in Java (CSC345)' },
        { name: 'Web Development & Vite/React', context: 'Coursework exercises exploring component state, accessibility, and modern front-end builds' },
        { name: 'PostgreSQL & Express Basics', context: 'Academic laboratory exercises in full-stack backend development and API routing' }
      ]
    },
    {
      category: 'Agriculture & Agronomy Fieldwork',
      description: 'Hands-on field experience, crop care, precision equipment, and agricultural business operations.',
      skills: [
        { name: 'Soil & Leaf Sampling', context: 'Collected field soil cores and crop leaf tissue samples across multi-field trial plots' },
        { name: 'Fertility & Trial Evaluation', context: 'Supported field trials comparing fertilizer treatments, foliar applications, and crop responses' },
        { name: 'Precision Agriculture Tools', context: 'Assisted with drone aerial mapping, GPS boundary collection, and soil moisture probe readings' },
        { name: 'Conservation Field Observations', context: 'Conducted spring residue, no-till, and cover-crop assessments uploaded to government database' },
        { name: 'Greenhouse Plant Production', context: '5 years running Pohl’s Greenhouse; managed propagation, watering, lighting, and crop health' },
        { name: 'Agronomic Communication', context: 'Translating farmer and agronomist questions into clear comparison graphs and data reports' }
      ]
    }
  ] as SupportedSkillGroup[],

  // 8. Future Research & Applied Interests
  futureInterests: [
    {
      title: 'Agricultural Decision-Support Software',
      description: 'Designing transparent tools that present actionable field and trial information clearly to agronomists and growers without black-box complexity.'
    },
    {
      title: 'Weather & Soil-Moisture Data Integration',
      description: 'Exploring practical methods to integrate localized sensor data with weather observations to help optimize irrigation and fieldwork scheduling.'
    },
    {
      title: 'Crop Modeling & Digital Twins',
      description: 'Investigating how computational crop models can simulate plant development stages and nutrient uptake under variable seasonal conditions.'
    },
    {
      title: 'Precision Drones & Remote Sensing',
      description: 'Studying multi-spectral imagery, drone application feasibility, and canopy stress detection for targeted field scouting.'
    },
    {
      title: 'Greenhouse Environmental Automation',
      description: 'Interest in low-cost microclimate monitoring, smart irrigation schedules, and accessible controls for small and mid-sized growers.'
    }
  ]
};

export const PROFILE_DATA = PORTFOLIO_DATA.profile;
