import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatFileSize,
  calculateNutrientVariance,
  filterProjects,
  generateApplicationSummary,
  SAMPLE_TRIAL_DATA
} from './portfolioLogic.ts';

test('formatFileSize formats byte quantities into readable strings', () => {
  assert.equal(formatFileSize(0), '0 B');
  assert.equal(formatFileSize(1024), '1.0 KB');
  assert.equal(formatFileSize(1048576), '1.0 MB');
});

test('calculateNutrientVariance computes delta and percentage correctly', () => {
  // Baseline: 2.75, Current: 3.10
  const result = calculateNutrientVariance(3.10, 2.75);
  assert.equal(result.diff, 0.35);
  assert.equal(result.direction, 'higher');
  assert.equal(result.diffPct > 0, true);

  // Equal
  const equalResult = calculateNutrientVariance(2.5, 2.5);
  assert.equal(equalResult.diff, 0);
  assert.equal(equalResult.direction, 'equal');
});

test('SAMPLE_TRIAL_DATA contains valid demonstration treatments', () => {
  assert.equal(SAMPLE_TRIAL_DATA.length >= 3, true);
  const baseline = SAMPLE_TRIAL_DATA.find(t => t.id === 'check');
  assert.ok(baseline);
  assert.equal(baseline.nitrogenPct > 0, true);
});

test('filterProjects filters by category and search queries', () => {
  const sampleProjects = [
    {
      id: 'p1',
      title: 'Pohl Ag Service Leaf-Sample Database',
      summary: 'Microsoft Access database connecting leaf-sample results to fields and trials.',
      technologies: ['Microsoft Access', 'VBA', 'SQL'],
      category: 'Agriculture Database'
    },
    {
      id: 'p2',
      title: 'OneMain Financial AI-Assisted Data Discovery',
      summary: 'Helped evaluate language model workflows for metadata discovery.',
      technologies: ['Language Models', 'SQL Server'],
      category: 'Data Discovery & AI'
    }
  ];

  const dbOnly = filterProjects(sampleProjects, 'Agriculture Database', '');
  assert.equal(dbOnly.length, 1);
  assert.equal(dbOnly[0].title, 'Pohl Ag Service Leaf-Sample Database');

  const queryMatch = filterProjects(sampleProjects, 'All', 'OneMain');
  assert.equal(queryMatch.length, 1);
  assert.equal(queryMatch[0].id, 'p2');
});

test('generateApplicationSummary produces clean recruiter output with verified contact and education', () => {
  const profile = {
    name: 'Isaac Pohl',
    major: 'Computer Science and Agriculture–Agriscience Technology',
    university: 'Murray State University',
    graduationDate: 'Expected May 2028',
    email: 'isaacpohl0@gmail.com',
    linkedin: 'https://www.linkedin.com/in/isaac-pohl/',
    portfolioUrl: 'https://isaacpohl.dev',
    quickFillSummary: 'Junior at Murray State University dual-majoring in Computer Science and Agriculture.'
  };

  const result = generateApplicationSummary(profile);
  assert.ok(result.clipboardFull.includes('Isaac Pohl'));
  assert.ok(result.clipboardFull.includes('isaacpohl0@gmail.com'));
  assert.ok(result.clipboardFull.includes('https://www.linkedin.com/in/isaac-pohl/'));
  assert.ok(result.clipboardFull.includes('Expected May 2028'));
  assert.equal(result.quickFields['Full Name'], 'Isaac Pohl');
  assert.equal(result.quickFields['Email Address'], 'isaacpohl0@gmail.com');
  assert.equal(result.quickFields['LinkedIn Profile'], 'https://www.linkedin.com/in/isaac-pohl/');

  // Website omitted when preview URL is provided
  const previewProfile = {
    ...profile,
    portfolioUrl: 'https://ais-dev-wcptxvrkmipw6wcsvb4kyz-689610634763.us-east1.run.app'
  };
  const previewResult = generateApplicationSummary(previewProfile);
  assert.equal(previewResult.quickFields['Personal Website'], undefined);
  assert.equal(previewResult.clipboardFull.includes('run.app'), false);
});
