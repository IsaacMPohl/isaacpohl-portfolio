export interface MimeTypeBadgeInfo {
  label: string;
  badgeClass: string;
  category: 'pdf' | 'doc' | 'sheet' | 'slide' | 'image' | 'file';
}

export interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Projects' | 'Experience' | 'Research' | 'Leadership' | 'Personal' | 'Resume & Contact';
  sectionId: string;
  targetElementId?: string;
  expandTarget?: 'coursework' | 'additionalExp' | 'honors' | 'allQuotes' | 'marathonPost';
  keywords: string[];
}

/**
 * Formats raw byte count into human-readable file size strings (KB, MB, GB).
 */
export function formatFileSize(bytes: number): string {
  if (bytes <= 0 || isNaN(bytes)) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const size = bytes / Math.pow(1024, i);
  return `${size.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

/**
 * Formats date string into friendly human readable format.
 */
export function formatFriendlyDate(dateStr: string): string {
  if (!dateStr) return 'Recent';
  if (dateStr.includes('Expected') || dateStr.includes('Present') || dateStr.includes('202')) {
    return dateStr;
  }
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

/**
 * Filters project list by type/category tag and text search.
 */
export function filterProjects<T extends { title: string; summary: string; technologies: string[]; category: string }>(
  projects: T[],
  categoryFilter: string,
  searchQuery: string
): T[] {
  if (!projects || !Array.isArray(projects)) return [];
  const trimmedSearch = (searchQuery || '').trim().toLowerCase();
  const normalizedCategory = categoryFilter || 'All';

  return projects.filter((project) => {
    const matchesCategory =
      normalizedCategory === 'All' ||
      project.category.toLowerCase() === normalizedCategory.toLowerCase();

    if (!matchesCategory) return false;
    if (!trimmedSearch) return true;

    const inTitle = project.title.toLowerCase().includes(trimmedSearch);
    const inDesc = project.summary.toLowerCase().includes(trimmedSearch);
    const inTech = project.technologies.some((tech) => tech.toLowerCase().includes(trimmedSearch));

    return inTitle || inDesc || inTech;
  });
}

/**
 * Formats application info for quiet, 1-click clipboard paste by recruiters or hiring teams.
 * Clean, standard email, LinkedIn, and education; hides website field unless a real public URL is configured.
 */
export function generateApplicationSummary(profile: {
  name: string;
  major: string;
  university: string;
  graduationDate: string;
  email: string;
  linkedin: string;
  portfolioUrl?: string;
  quickFillSummary: string;
}): {
  clipboardFull: string;
  markdownSummary: string;
  quickFields: Record<string, string>;
} {
  const hasConfiguredPublicUrl = Boolean(
    profile.portfolioUrl &&
    !profile.portfolioUrl.includes('localhost') &&
    !profile.portfolioUrl.includes('127.0.0.1') &&
    !profile.portfolioUrl.includes('run.app') &&
    !profile.portfolioUrl.includes('aistudio')
  );

  const lines = [
    `Name: ${profile.name}`,
    `Education: ${profile.university} — ${profile.major} (${profile.graduationDate})`,
    `Email: ${profile.email}`,
    `LinkedIn: ${profile.linkedin}`
  ];

  if (hasConfiguredPublicUrl && profile.portfolioUrl) {
    lines.push(`Personal Website: ${profile.portfolioUrl}`);
  }

  lines.push('', 'Professional Summary:', profile.quickFillSummary);

  const clipboardFull = lines.join('\n');

  const markdownSummary = `## ${profile.name}
- **Education:** ${profile.university} — ${profile.major} (${profile.graduationDate})
- **Email:** [${profile.email}](mailto:${profile.email})
- **LinkedIn:** [${profile.linkedin}](${profile.linkedin})
${hasConfiguredPublicUrl && profile.portfolioUrl ? `- **Personal Website:** [${profile.portfolioUrl}](${profile.portfolioUrl})\n` : ''}
> ${profile.quickFillSummary}
`;

  const quickFields: Record<string, string> = {
    'Full Name': profile.name,
    'Education': `${profile.university} — ${profile.major} (${profile.graduationDate})`,
    'Email Address': profile.email,
    'LinkedIn Profile': profile.linkedin,
    'Candidate Summary': profile.quickFillSummary
  };

  if (hasConfiguredPublicUrl && profile.portfolioUrl) {
    quickFields['Personal Website'] = profile.portfolioUrl;
  }

  return {
    clipboardFull,
    markdownSummary,
    quickFields
  };
}

/**
 * Comprehensive index of searchable items for the Explore Navigation menu.
 */
export const EXPLORE_INDEX: SearchResultItem[] = [
  // Software and AI Work
  {
    id: 'exp-onemain',
    title: 'OneMain Financial — Technology Intern',
    subtitle: 'AI-assisted metadata discovery and stakeholder reviews',
    category: 'Experience',
    sectionId: 'experience',
    targetElementId: 'item-exp-onemain',
    keywords: ['onemain', 'financial', 'ai', 'metadata', 'discovery', 'sql server', 'ssms', 'dimensional model', 'internship', 'evansville']
  },
  {
    id: 'proj-onemain',
    title: 'OneMain Financial Data Discovery Workflow',
    subtitle: 'Language model exploration and metadata evaluation project',
    category: 'Projects',
    sectionId: 'work',
    targetElementId: 'item-proj-onemain-ai',
    keywords: ['onemain', 'language models', 'metadata', 'cto', 'stakeholder', 'sql server']
  },
  {
    id: 'proj-parrish',
    title: 'Parrish Consulting Services',
    subtitle: 'Software development in C#, Blazor, ASP.NET Core, WPF & monitoring',
    category: 'Experience',
    sectionId: 'experience',
    targetElementId: 'item-exp-parrish',
    keywords: ['parrish', 'c#', 'blazor', 'asp.net', 'wpf', 'sql server', 'monitoring', 'consulting', 'software']
  },
  {
    id: 'proj-lunchbox',
    title: 'LunchBox Restaurant Point-of-Sale',
    subtitle: 'Tablet cash register app with Python Flask REST API on Raspberry Pi',
    category: 'Projects',
    sectionId: 'work',
    targetElementId: 'item-proj-lunchbox',
    keywords: ['lunchbox', 'restaurant', 'pos', 'register', 'python', 'flask', 'raspberry pi', 'android', 'java']
  },
  {
    id: 'course-csc425',
    title: 'Web Applications & Services (CSC425)',
    subtitle: 'React/Vite, Node.js/Express, PostgreSQL, TranscriptCard',
    category: 'Projects',
    sectionId: 'work',
    targetElementId: 'item-proj-csc425-web',
    expandTarget: 'coursework',
    keywords: ['csc425', 'web applications', 'react', 'vite', 'express', 'postgresql', 'transcriptcard', 'coursework']
  },
  {
    id: 'course-cis407',
    title: 'Advanced Database Systems (CIS407)',
    subtitle: 'Relational schema design, normalization & SQL',
    category: 'Projects',
    sectionId: 'work',
    targetElementId: 'item-proj-cis407-db',
    expandTarget: 'coursework',
    keywords: ['cis407', 'database', 'sql', 'erd', 'normalization', 'relational', 'coursework']
  },
  {
    id: 'course-csc345',
    title: 'Solitaire Lite in Java (CSC345)',
    subtitle: 'Object-oriented software design and GUI state modeling',
    category: 'Projects',
    sectionId: 'work',
    targetElementId: 'item-proj-csc345-solitaire',
    expandTarget: 'coursework',
    keywords: ['csc345', 'solitaire', 'java', 'object oriented', 'gui', 'coursework']
  },

  // Agriculture and Greenhouse Experience
  {
    id: 'exp-pohl-ag',
    title: 'Pohl Ag Service — Junior Assistant',
    subtitle: 'Soil & leaf sampling fieldwork and Microsoft Access database development',
    category: 'Experience',
    sectionId: 'experience',
    targetElementId: 'item-exp-pohl-ag',
    keywords: ['pohl ag', 'agronomy', 'fieldwork', 'soil', 'leaf', 'access', 'database', 'trials', 'sampling', 'princeton', 'haubstadt']
  },
  {
    id: 'proj-leaf-db',
    title: 'Pohl Ag Service Leaf-Sample Database',
    subtitle: 'Relational Microsoft Access tool connecting leaf tissue results to trials',
    category: 'Projects',
    sectionId: 'work',
    targetElementId: 'item-proj-leaf-db',
    keywords: ['access', 'leaf', 'sample', 'database', 'agronomist', 'graphs', 'trials', 'sql', 'vba']
  },
  {
    id: 'exp-greenhouse',
    title: "Pohl's Greenhouse — Owner",
    subtitle: 'Managed small greenhouse business (Jan 2020–May 2025) & grant equipment',
    category: 'Experience',
    sectionId: 'experience',
    targetElementId: 'item-exp-pohl-greenhouse',
    keywords: ['greenhouse', 'pohl', 'owner', 'nursery', 'plants', 'watering', 'bob evans', 'ffa', 'star farmer']
  },
  {
    id: 'exp-purdue-ext',
    title: 'Purdue Extension — 4-H Youth Development Intern',
    subtitle: 'Youth educational programs and data-informed program growth analysis',
    category: 'Experience',
    sectionId: 'experience',
    targetElementId: 'item-exp-purdue-ext',
    keywords: ['purdue', 'extension', '4-h', 'youth', 'fair', 'programs', 'vanderburgh', 'intern']
  },
  {
    id: 'exp-pumpkins',
    title: "Pohl's Pumpkin Stand / Patch",
    subtitle: 'Grew and sold pumpkins across 3 acres and 3 locations in Gibson County',
    category: 'Experience',
    sectionId: 'experience',
    targetElementId: 'item-exp-pohl-pumpkins',
    expandTarget: 'additionalExp',
    keywords: ['pumpkins', 'patch', 'farm', 'retail', 'gibson county', 'steve pohl']
  },
  {
    id: 'exp-steve-pohl',
    title: 'Steve Pohl Farms — Farmhand',
    subtitle: 'Assisted with commercial wheat and corn harvests, grain cart & machinery',
    category: 'Experience',
    sectionId: 'experience',
    targetElementId: 'item-exp-steve-pohl-farms',
    expandTarget: 'additionalExp',
    keywords: ['steve pohl', 'farms', 'farmhand', 'grain cart', 'harvest', 'tractor', 'wheat', 'corn']
  },
  {
    id: 'exp-conservation',
    title: 'Conservation Field Observations',
    subtitle: 'Residue and cover-crop field assessments for conservation records',
    category: 'Experience',
    sectionId: 'experience',
    targetElementId: 'item-exp-conservation',
    expandTarget: 'additionalExp',
    keywords: ['conservation', 'cover crop', 'residue', 'no-till', 'field observer', 'soil']
  },
  {
    id: 'exp-wellness',
    title: 'Murray State Wellness Center',
    subtitle: 'Student front desk staff & facility access verification',
    category: 'Experience',
    sectionId: 'experience',
    targetElementId: 'item-exp-wellness-center',
    expandTarget: 'additionalExp',
    keywords: ['wellness center', 'murray state', 'front desk', 'campus employment']
  },

  // Research Interests
  {
    id: 'res-digital-twins',
    title: 'Agricultural Digital Twins & Open-Source AI',
    subtitle: 'Applying for research funding at Murray State exploring crop decision simulation',
    category: 'Research',
    sectionId: 'about',
    targetElementId: 'item-res-digital-twins',
    keywords: ['digital twins', 'research', 'murray state', 'funding', 'simulation', 'ai', 'fertilizer', 'weather']
  },
  {
    id: 'res-ag-dashboard',
    title: 'Precision Agriculture Intelligence & Dashboard Concept',
    subtitle: 'Future applied interest connecting field sensors, weather & trial data',
    category: 'Research',
    sectionId: 'about',
    targetElementId: 'item-res-ag-dashboard',
    keywords: ['precision agriculture', 'dashboard', 'sensors', 'weather', 'yield', 'concept', 'research']
  },
  {
    id: 'course-t50-drone',
    title: 'DJI Agras T50 Drone Analysis',
    subtitle: 'Technical research analysis of agricultural drone spraying systems',
    category: 'Research',
    sectionId: 'work',
    targetElementId: 'item-proj-t50-drone',
    expandTarget: 'coursework',
    keywords: ['drone', 'dji agras t50', 'spray', 'aerial', 'precision agriculture', 'coursework']
  },

  // Leadership and Service
  {
    id: 'lead-odk',
    title: 'Omicron Delta Kappa (ODK) Honor Society',
    subtitle: 'President 2026–2027, Treasurer 2025–2026 at Murray State',
    category: 'Leadership',
    sectionId: 'leadership',
    targetElementId: 'leadership-roles',
    keywords: ['odk', 'omicron delta kappa', 'president', 'treasurer', 'honor society', 'murray state']
  },
  {
    id: 'lead-ato',
    title: 'Alpha Tau Omega (ATO) — Chaplaincy & Faith',
    subtitle: 'Chaplain 2026–2027, Bible study growth 3 to 15+, All-Campus Bible Study',
    category: 'Leadership',
    sectionId: 'leadership',
    targetElementId: 'item-serv-ato-faith-service',
    keywords: ['ato', 'alpha tau omega', 'chaplain', 'bible study', 'chicago retreat', 'faith', 'brotherhood', 'all-campus']
  },
  {
    id: 'lead-aerial-innovators',
    title: '4-H Aerial Ag Innovators',
    subtitle: 'Indiana Youth State Leader teaching 500+ youth drone & sensor principles',
    category: 'Leadership',
    sectionId: 'leadership',
    targetElementId: 'item-serv-aerial-innovators',
    keywords: ['aerial ag innovators', '4-h', 'drones', 'youth', 'stem', 'ohio state', 'indiana']
  },
  {
    id: 'lead-world-hunger',
    title: 'World Hunger Advocate Group',
    subtitle: 'Founded youth team, ~$5k grants secured, 1,500+ reached, applying for additional funding',
    category: 'Leadership',
    sectionId: 'leadership',
    targetElementId: 'item-serv-world-hunger',
    keywords: ['world hunger', 'hunger', '4-h', 'corteva', 'microgreens', 'food security', 'grants', 'david kentucky']
  },
  {
    id: 'lead-stock-trailer',
    title: 'Stock the Trailer Food Drive',
    subtitle: 'Collaborative county fair effort collecting 9,676 lbs of food over 2 years',
    category: 'Leadership',
    sectionId: 'leadership',
    targetElementId: 'item-serv-stock-trailer',
    keywords: ['stock the trailer', 'food drive', 'fair', 'hunger', 'pounds']
  },
  {
    id: 'lead-honors',
    title: 'Honors & Competitive Awards',
    subtitle: 'National FFA Finalist Top 4, Star Farmer Finalist, American FFA Degree, Salutatorian',
    category: 'Leadership',
    sectionId: 'leadership',
    targetElementId: 'honors-awards-section',
    expandTarget: 'honors',
    keywords: ['honors', 'awards', 'ffa', 'salutatorian', 'star farmer', 'american ffa degree', 'bob evans', 'bpa']
  },

  // Personal Interests
  {
    id: 'pers-marathon',
    title: 'Winter 2026 St. Jude Memphis Marathon (26.2 Miles)',
    subtitle: 'December 5, 2026 race training, Patient Kane artwork, virtual 5K team',
    category: 'Personal',
    sectionId: 'outside',
    targetElementId: 'marathon-spotlight',
    keywords: ['marathon', 'st. jude', 'memphis', 'running', 'patient kane', 'virtual 5k', 'december 5']
  },
  {
    id: 'pers-scout',
    title: 'Restoring an International Scout 80',
    subtitle: 'Hands-on vintage automotive mechanical restoration project',
    category: 'Personal',
    sectionId: 'outside',
    targetElementId: 'hobbies-section',
    keywords: ['scout 80', 'international scout', 'restoration', 'mechanics', 'automotive']
  },
  {
    id: 'pers-ice-cream',
    title: 'Homemade Ice Cream & Reviews',
    subtitle: 'Churning custom ice cream recipes and reviewing local shops',
    category: 'Personal',
    sectionId: 'outside',
    targetElementId: 'hobbies-section',
    keywords: ['ice cream', 'homemade', 'hobbies', 'reviews']
  },
  {
    id: 'pers-quotes',
    title: 'Guiding Quotes & Convictions',
    subtitle: 'Kane, Helen Keller, Kahlil Gibran, Rick Warren, James T. Kirk, John A. Shedd',
    category: 'Personal',
    sectionId: 'outside',
    targetElementId: 'quotes-section',
    expandTarget: 'allQuotes',
    keywords: ['quotes', 'helen keller', 'kane', 'footprints on the moon', 'rick warren', 'kirk', 'shedd']
  },

  // Résumé & Contact
  {
    id: 'nav-resume',
    title: 'Curriculum Vitae & Résumé Access',
    subtitle: 'Direct PDF download, ATS-clean print preview, and Quick-Fill helper',
    category: 'Resume & Contact',
    sectionId: 'resume',
    targetElementId: 'resume-card',
    keywords: ['resume', 'cv', 'pdf', 'download', 'print', 'quick-fill', 'education', 'skills']
  },
  {
    id: 'nav-contact',
    title: 'Direct Contact & Information',
    subtitle: 'isaacpohl0@gmail.com and verified LinkedIn profile',
    category: 'Resume & Contact',
    sectionId: 'contact',
    targetElementId: 'contact-details',
    keywords: ['contact', 'email', 'linkedin', 'phone', 'location', 'inquiry', 'message']
  }
];

/**
 * Searches the Explore index for matches.
 */
export function searchExploreIndex(query: string): SearchResultItem[] {
  const clean = (query || '').trim().toLowerCase();
  if (!clean) return [];

  const tokens = clean.split(/\s+/).filter(Boolean);

  return EXPLORE_INDEX.filter((item) => {
    const haystack = [
      item.title.toLowerCase(),
      item.subtitle.toLowerCase(),
      item.category.toLowerCase(),
      ...item.keywords
    ].join(' ');

    return tokens.every((token) => haystack.includes(token));
  });
}
