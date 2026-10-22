import React, { useState } from 'react';
import { BarChart3, Info, ArrowUpRight, ArrowDownRight, Minus, RefreshCw } from 'lucide-react';
import { SAMPLE_TRIAL_DATA, calculateNutrientVariance, LeafSampleTreatmentData } from '../utils/portfolioLogic';

export const LeafSampleDemo: React.FC = () => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>('treatment-a');
  const baseline = SAMPLE_TRIAL_DATA.find((t) => t.id === 'check') || SAMPLE_TRIAL_DATA[0];
  const selectedTreatment = SAMPLE_TRIAL_DATA.find((t) => t.id === selectedTreatmentId) || SAMPLE_TRIAL_DATA[1];

  const nutrients = [
    {
      name: 'Nitrogen (N)',
      unit: '%',
      current: selectedTreatment.nitrogenPct,
      base: baseline.nitrogenPct,
      sufficiency: '2.80 – 3.50%',
      maxScale: 4.0
    },
    {
      name: 'Phosphorus (P)',
      unit: '%',
      current: selectedTreatment.phosphorusPct,
      base: baseline.phosphorusPct,
      sufficiency: '0.30 – 0.45%',
      maxScale: 0.6
    },
    {
      name: 'Potassium (K)',
      unit: '%',
      current: selectedTreatment.potassiumPct,
      base: baseline.potassiumPct,
      sufficiency: '1.80 – 2.50%',
      maxScale: 3.0
    },
    {
      name: 'Zinc (Zn)',
      unit: 'ppm',
      current: selectedTreatment.zincPpm,
      base: baseline.zincPpm,
      sufficiency: '20 – 45 ppm',
      maxScale: 50.0
    }
  ];

  return (
    <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
      {/* Demonstration Banner */}
      <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-white">Demonstration Feature:</strong> Illustrative leaf-sample comparison data simulating the agronomist graph workflow built in Microsoft Access (not client data or agronomic recommendation).
        </p>
      </div>

      {/* Control Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-wider block">
            Interactive Access Database Workflow
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
            Leaf Tissue Treatment Comparison
          </h4>
        </div>

        {/* Treatment Selector */}
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Select Treatment">
          {SAMPLE_TRIAL_DATA.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTreatmentId(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedTreatmentId === t.id
                  ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {t.treatmentName.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Treatment Note */}
      <div className="text-xs text-slate-300 bg-slate-800/40 p-3 rounded-xl border border-slate-800">
        <span className="font-semibold text-white">{selectedTreatment.treatmentName}: </span>
        <span className="text-slate-400">{selectedTreatment.description}</span>
      </div>

      {/* Grid: Visual Chart + Accessible Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Visual Comparison Bars */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
            Nutrient Levels vs. Baseline Check
          </span>

          <div className="space-y-4">
            {nutrients.map((n, i) => {
              const variance = calculateNutrientVariance(n.current, n.base);
              const currentWidth = Math.min(100, (n.current / n.maxScale) * 100);
              const baseWidth = Math.min(100, (n.base / n.maxScale) * 100);

              return (
                <div key={i} className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{n.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">
                        {n.current} {n.unit}
                      </span>
                      <span
                        className={`text-[11px] font-mono flex items-center gap-0.5 ${
                          variance.direction === 'higher'
                            ? 'text-emerald-400'
                            : variance.direction === 'lower'
                            ? 'text-rose-400'
                            : 'text-slate-400'
                        }`}
                      >
                        {variance.direction === 'higher' && <ArrowUpRight className="w-3 h-3" />}
                        {variance.direction === 'lower' && <ArrowDownRight className="w-3 h-3" />}
                        {variance.direction === 'equal' && <Minus className="w-3 h-3" />}
                        <span>
                          {variance.diff > 0 ? `+${variance.diff}` : variance.diff} {n.unit}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Dual Bar Comparison */}
                  <div className="space-y-1">
                    {/* Selected Treatment Bar */}
                    <div className="h-4 w-full bg-slate-800 rounded overflow-hidden flex items-center">
                      <div
                        className="h-full bg-emerald-500 rounded transition-all duration-300"
                        style={{ width: `${currentWidth}%` }}
                        role="progressbar"
                        aria-valuenow={n.current}
                        aria-valuemin={0}
                        aria-valuemax={n.maxScale}
                        aria-label={`${n.name} for ${selectedTreatment.treatmentName}`}
                      />
                    </div>
                    {/* Baseline Reference Marker */}
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>Baseline: {n.base} {n.unit}</span>
                      <span>Target Sufficiency: {n.sufficiency}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accessible Data Table */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
            Nutrient Summary Table
          </span>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs" aria-label="Nutrient comparison table">
              <thead className="bg-slate-800/80 text-[11px] font-mono uppercase text-slate-400 border-b border-slate-800">
                <tr>
                  <th scope="col" className="p-2.5">Nutrient</th>
                  <th scope="col" className="p-2.5">Test Val</th>
                  <th scope="col" className="p-2.5">Check</th>
                  <th scope="col" className="p-2.5">Delta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {nutrients.map((n, i) => {
                  const variance = calculateNutrientVariance(n.current, n.base);
                  return (
                    <tr key={i} className="hover:bg-slate-800/30">
                      <td className="p-2.5 font-medium text-white">{n.name.split(' ')[0]}</td>
                      <td className="p-2.5 font-mono text-emerald-300">{n.current} {n.unit}</td>
                      <td className="p-2.5 font-mono text-slate-400">{n.base}</td>
                      <td className="p-2.5 font-mono">
                        <span
                          className={
                            variance.direction === 'higher'
                              ? 'text-emerald-400'
                              : variance.direction === 'lower'
                              ? 'text-rose-400'
                              : 'text-slate-400'
                          }
                        >
                          {variance.diff > 0 ? `+${variance.diff}` : variance.diff}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed italic">
            In the actual Access system, the agronomist selects custom date windows and grower field IDs to generate instant visual charts for farmer consultations.
          </p>
        </div>

      </div>
    </div>
  );
};
