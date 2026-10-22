export interface MimeTypeBadgeInfo {
  label: string;
  badgeClass: string;
  category: 'pdf' | 'doc' | 'sheet' | 'slide' | 'image' | 'file';
}

export interface LeafSampleTreatmentData {
  id: string;
  treatmentName: string;
  description: string;
  nitrogenPct: number;    // Standard sufficiency: 2.8 - 3.5%
  phosphorusPct: number;  // Standard sufficiency: 0.30 - 0.45%
  potassiumPct: number;   // Standard sufficiency: 1.8 - 2.5%
  zincPpm: number;        // Standard sufficiency: 20 - 45 ppm
}

/**
 * Illustrative leaf-sample trial data for demonstration.
 * Labeled explicitly as demonstration data simulating the agronomist workflow in Microsoft Access.
 */
export const SAMPLE_TRIAL_DATA: LeafSampleTreatmentData[] = [
  {
    id: 'check',
    treatmentName: 'Untreated Check (Baseline)',
    description: 'Standard regional fertility program without supplemental in-furrow starter or foliar micronutrients.',
    nitrogenPct: 2.75,
    phosphorusPct: 0.31,
    potassiumPct: 1.85,
    zincPpm: 21.4
  },
  {
    id: 'treatment-a',
    treatmentName: 'Treatment A: Starter Zinc + Sulfur',
    description: 'In-furrow liquid starter applied at planting with chelated zinc and ammonium thiosulfate.',
    nitrogenPct: 3.10,
    phosphorusPct: 0.37,
    potassiumPct: 2.05,
    zincPpm: 32.1
  },
  {
    id: 'treatment-b',
    treatmentName: 'Treatment B: V6 Foliar Micronutrient Boost',
    description: 'Foliar application at V6 growth stage combining urea-triazone nitrogen with foliar boron and zinc.',
    nitrogenPct: 3.28,
    phosphorusPct: 0.39,
    potassiumPct: 2.18,
    zincPpm: 34.6
  }
];

export function calculateNutrientVariance(current: number, baseline: number): {
  diff: number;
  diffPct: number;
  direction: 'higher' | 'lower' | 'equal';
} {
  const diff = +(current - baseline).toFixed(2);
  const diffPct = baseline === 0 ? 0 : +((diff / baseline) * 100).toFixed(1);
  return {
    diff,
    diffPct,
    direction: diff > 0 ? 'higher' : diff < 0 ? 'lower' : 'equal'
  };
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
