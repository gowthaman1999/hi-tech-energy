import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS } from '../../data/hitechData';

export default function LpgFreezingArticle({ post }) {
  const { propaneButaneTable, temperatureOutputTable, votVsLotTable } = post;

  // Interactive Sizing Calculator state
  const [burnerCount, setBurnerCount] = useState(4);
  const [burnerRatingKw, setBurnerRatingKw] = useState(25);
  const [temperatureScenario, setTemperatureScenario] = useState('winter'); // 'moderate' (16°C) or 'winter' (-1°C)

  const totalKw = burnerCount * burnerRatingKw;
  const totalMj = totalKw * 3.6; // 1 kW = 3.6 MJ/hr
  const singleCylOutputMj = temperatureScenario === 'moderate' ? 113 : 84;
  const minActiveCylinders = Math.ceil(totalMj / singleCylOutputMj);
  const totalCylindersWithReserve = minActiveCylinders * 2;

  return (
    <div className="space-y-12 text-left">
      {/* Key Takeaways Callout Box */}
      <section id="key-takeaways" className="scroll-mt-28 bg-gradient-to-br from-blue-50/80 via-white to-orange-50/50 border-2 border-primary/20 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
        <div className="flex items-center gap-2.5 pb-2 border-b border-primary/10">
          <span className="material-symbols-outlined text-secondary-container text-2xl">verified</span>
          <h2 className="font-headline-md text-lg sm:text-xl font-bold text-primary">
            Key Takeaways: Quick Summary
          </h2>
        </div>
        <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800">
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>The Gas Is Not Frozen:</strong> LPG does not freeze solid under earthly weather (-188°C freezing point). Frost on the steel walls occurs because rapid boiling pulls heat out of the cylinder walls.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>The Frost Line Reveals Liquid Level:</strong> Condensation and ice form strictly where liquid LPG touches the inner steel wall, indicating how much fuel remains.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>Butane Struggles Near 0°C:</strong> Indian commercial LPG is a propane-butane blend. Butane stops vaporising below 0°C, causing late-stage sputtering in near-empty cylinders (&lt;20% fill).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-red-600 text-base mt-0.5 shrink-0">cancel</span>
            <span><strong>Dangerous Myths:</strong> Never pour boiling water, never apply open blowtorches, never bring cylinders indoors, and never tip cylinders horizontally.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary-container text-base mt-0.5 shrink-0">engineering</span>
            <span><strong>The Engineered Fix:</strong> Divide demand across a certified multi-cylinder VOT manifold, or upgrade to a <Link to="/services/lot-pipeline" className="text-secondary font-semibold hover:underline">Liquid Off-Take (LOT) system</Link> with an external thermal vaporiser.</span>
          </li>
        </ul>
      </section>

      {/* The Frosty Cylinder Dilemma - H2 */}
      <section id="frosty-dilemma" className="scroll-mt-28 space-y-4 pt-4 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Field Scenario</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            The Frosty Cylinder Dilemma
          </h2>
        </div>

        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Run your hand along a commercial LPG cylinder in the middle of a busy lunch rush or heavy factory shift, and you will feel cold, wet steel. Look closer, and there could be a thick crust of chalky white ice hugging the lower half of the tank, as though it spent the night in an industrial deep freezer.
          </p>
          <p>
            Meanwhile, your burner flames keep shrinking from roaring blue cones to sputtering yellow flickers—even though nobody touched the control knob.
          </p>
          <p>
            Commercial kitchen chefs, caterers, and plant engineers ask about this phenomenon constantly, usually with understandable anxiety: <em>Has the gas inside frozen solid? Is the cylinder on the verge of exploding?</em>
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl text-emerald-950 text-sm sm:text-base leading-relaxed">
            <strong>The short answer:</strong> The gas inside is completely fine. Pure propane freezes at <strong>-188°C (-306°F)</strong>, and external frost will not cause a cylinder to rupture. However, frost is an undeniable mechanical alarm bell: <strong>your system is drawing vapor faster than ambient air can replenish heat</strong>.
          </div>
        </div>
      </section>

      {/* Thermodynamics & Science - H2 */}
      <section id="thermodynamics" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Thermodynamics &amp; Physics</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            How LPG Freezing Happens: The Thermodynamics
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Inside any LPG cylinder, fuel sits stored as a liquid under its own equilibrium vapor pressure. Burners, boilers, and furnaces cannot burn liquid fuel directly; the liquid must boil and transform into gas before passing through the regulator.
          </p>
          <p>
            Boiling requires calories. In physics, this is called the <strong>latent heat of vaporisation</strong>. The process is strictly <em>endothermic</em>, meaning it continuously absorbs heat from its immediate surroundings. As liquid LPG flashes into vapour, it absorbs calories directly from the cylinder&apos;s steel casing, which in turn tries to draw replacement heat from the surrounding air.
          </p>
          <p>
            At low burner demand, atmospheric air replenishes heat as quickly as the liquid cools it. But during high peak draw, thermal absorption outpaces atmospheric heat transfer. The steel casing drops well below ambient temperatures.
          </p>
        </div>

        {/* 3 Visible Stages Pipeline */}
        <div id="condensation-to-ice" className="scroll-mt-28 space-y-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="font-headline-md text-xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container">timeline</span>
            From Condensation to Ice Crust: The 3 Visible Stages
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-50/60 border border-blue-200 p-4 rounded-xl space-y-2">
              <span className="bg-primary text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">Stage 1</span>
              <h4 className="font-bold text-gray-900 text-sm">Rapid Sub-Cooling</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Heavy burner consumption pulls the cylinder wall temperature sharply below the ambient air temperature.
              </p>
            </div>

            <div className="bg-amber-50/60 border border-amber-200 p-4 rounded-xl space-y-2">
              <span className="bg-secondary-container text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">Stage 2</span>
              <h4 className="font-bold text-gray-900 text-sm">Sweating (Dew Point)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                When the steel surface falls below the ambient dew point, airborne moisture condenses into wet droplets on the metal casing.
              </p>
            </div>

            <div className="bg-red-50/60 border border-red-200 p-4 rounded-xl space-y-2">
              <span className="bg-red-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">Stage 3</span>
              <h4 className="font-bold text-gray-900 text-sm">Frost &amp; Ice Crust</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                As draw persists and the surface breaches 0°C (32°F), moisture freezes into frost and thickens into an insulating ice crust.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-primary p-4 rounded-r-xl text-xs sm:text-sm text-gray-800 leading-relaxed">
            <strong>The Frost Line Principle:</strong> Frost forms exclusively where liquid LPG is actively touching the interior steel wall, because that is where boiling occurs. The upper boundary of the frost line reveals roughly how much liquid remains in the tank.
          </div>
        </div>
      </section>

      {/* Propane vs Butane - H2 & Responsive Table */}
      <section id="propane-vs-butane" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Fuel Chemistry</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Propane vs. Butane: Boiling vs. Freezing Points
          </h2>
        </div>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Commercial LPG supplied in India is a mixture of propane and butane. Understanding their contrasting boiling thermodynamics clarifies why empty cylinders freeze faster:
        </p>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-3 px-4 font-semibold w-1/3">Physical Property</th>
                <th className="py-3 px-4 font-semibold w-1/3 bg-primary-container text-secondary-fixed-dim">Propane (C3H8)</th>
                <th className="py-3 px-4 font-semibold w-1/3">Butane (C4H10)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {propaneButaneTable.map((row, idx) => (
                <tr
                  key={row.property}
                  className={idx % 2 === 0 ? 'bg-white hover:bg-orange-50/40' : 'bg-gray-50/70 hover:bg-orange-50/40'}
                >
                  <td className="py-3 px-4 font-medium text-gray-900">{row.property}</td>
                  <td className="py-3 px-4 font-semibold text-primary bg-orange-50/30">{row.propane}</td>
                  <td className="py-3 px-4 text-gray-700">{row.butane}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-orange-50/60 border border-orange-200 p-4 rounded-xl text-xs sm:text-sm text-gray-800 leading-relaxed">
          <strong>The Butane Stratification Effect:</strong> Because propane boils at -42°C and butane at -0.5°C, propane vaporises preferentially first. As a cylinder empties below 20%, the remaining liquid is heavily butane-rich. This residual butane struggles to vaporise near 0°C, causing your burners to sputter and the tank to freeze heavily in its final quarter.
        </div>
      </section>

      {/* Diagnostic Checklist - H2 */}
      <section id="diagnostic-checklist" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Root Cause Analysis</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Diagnostic Checklist: 5 Reasons Your Tank Ices Over
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-primary">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">1</span>
              Excessive Gas Withdrawal Rate
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every cylinder has a physical vaporisation limit (~0.5 kg/hr for standard 33 kg cylinders). A single 25 kW commercial burner consumes ~1.9 kg/hr. Running multiple burners on one cylinder forces extreme chilling.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-primary">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">2</span>
              Low Ambient Temperature &amp; Wind
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Cylinders depend on outdoor air to replace latent heat. Cold winter mornings reduce thermal transfer, while gusty wind strips away the thin thermal boundary layer on the steel.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-primary">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">3</span>
              Undersized Cylinder Storage Bank
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              A single cylinder has limited surface area in contact with liquid. Connecting multiple cylinders in a parallel manifold splits the load, keeping all tanks warmer.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-primary">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">4</span>
              Low Fill Level (&lt;20% Remaining)
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Less liquid means reduced wetted wall surface area for heat exchange. The remaining liquid is also butane-heavy, which resists evaporation in cold conditions.
            </p>
          </div>

          <div className="col-span-1 sm:col-span-2 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-primary">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">5</span>
              Piping &amp; Manifold Friction Losses
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Undersized pipeline diameters, long runs, and excessive elbows induce high pressure drops. Burners struggle, staff open valves wider, and the cylinder is driven into severe over-extraction.
            </p>
          </div>
        </div>

        {/* Temperature Output Derating Table - H3 */}
        <div id="temperature-output" className="scroll-mt-28 space-y-4 pt-2">
          <h3 className="font-headline-md text-lg sm:text-xl font-bold text-primary">
            How Ambient Temperature Slashes Vaporisation Output
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
            Standard 45 kg commercial cylinders experience severe derating as outdoor temperatures fall:
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-2.5 px-4 font-semibold">Ambient Temperature</th>
                  <th className="py-2.5 px-4 font-semibold">Vaporisation Output (MJ/hr)</th>
                  <th className="py-2.5 px-4 font-semibold">Equivalent Fuel Draw</th>
                  <th className="py-2.5 px-4 font-semibold">Operational Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {temperatureOutputTable.map((row, idx) => (
                  <tr
                    key={row.temp}
                    className={idx % 2 === 0 ? 'bg-white hover:bg-orange-50/40' : 'bg-gray-50/70 hover:bg-orange-50/40'}
                  >
                    <td className="py-2.5 px-4 font-bold text-gray-900">{row.temp}</td>
                    <td className="py-2.5 px-4 font-semibold text-secondary-container">{row.outputMJ}</td>
                    <td className="py-2.5 px-4 text-gray-700">{row.outputKg}</td>
                    <td className="py-2.5 px-4 text-gray-600">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-500 italic">
            *From 16°C to -18°C, a standard cylinder loses ~58% of usable vaporisation capacity, underscoring the necessity of sizing manifolds for local winter lows.
          </p>
        </div>
      </section>

      {/* Solutions & Engineering Fixes - H2 */}
      <section id="safe-solutions" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Remediation Guide</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            How to Fix and Prevent LPG Freezing Safely
          </h2>
        </div>

        {/* Immediate Safe Workarounds - H3 */}
        <div id="immediate-workarounds" className="scroll-mt-28 space-y-3 bg-gray-50 p-6 rounded-2xl border border-gray-200">
          <h3 className="font-headline-md text-lg font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container">build_circle</span>
            Immediate, Short-Term Safe Workarounds
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
              <span><strong>Switch to a Standby Backup Cylinder:</strong> Let the iced cylinder rest. Given time, it will absorb ambient heat and restore pressure naturally without dangerous manual heating.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
              <span><strong>Shelter Cylinders from Direct Wind:</strong> Install ventilated mesh louvers or a dedicated cylinder cage with a weather roof to prevent wind chill from stripping heat.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
              <span><strong>Swap Before Dropping Below 20%:</strong> Prevent butane heel pooling by replacing cylinders before they hit near-empty during peak service shifts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
              <span><strong>Stagger Cooking Loads:</strong> Delaying non-critical batch cooking by 10 to 15 minutes allows cylinder surface temperatures to rebound.</span>
            </li>
          </ul>
        </div>

        {/* Long-Term Engineering Fixes - H3 */}
        <div id="engineering-fixes" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Long-Term Engineering &amp; Infrastructure Solutions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <h4 className="font-bold text-base text-gray-900">Multi-Cylinder VOT Manifold</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Connect multiple cylinders in parallel with automatic changeover headers. Distributing thermal draw across 4, 6, or 8 cylinders ensures each operates well below its individual freezing threshold. Explore our <Link to="/services/commercial-lpg-pipeline" className="text-primary font-bold underline">Commercial LPG Pipeline Service</Link>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-secondary-container">
                <span className="material-symbols-outlined">heat_pump</span>
              </div>
              <h4 className="font-bold text-base text-gray-900">LOT System with External Vaporiser</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                For heavy industrial users (&gt;60 kg/hr), Liquid Off-Take draws liquid LPG directly into an electric or thermodynamic water-bath vaporiser skid. Because phase change occurs outside the cylinder, the tanks never freeze. See our <Link to="/services/lot-pipeline" className="text-secondary font-bold underline">LOT Pipeline Service</Link>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 text-xs sm:text-sm text-gray-700 space-y-2">
              <h4 className="font-bold text-primary text-sm flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary-container text-base">compress</span>
                Two-Stage Cold-Resistant Regulators
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pressure drop across narrow regulator orifices causes Joule-Thomson refrigeration. Installing dual-stage regulators distributes pressure reduction across two stages, preventing regulator freeze-up.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 text-xs sm:text-sm text-gray-700 space-y-2">
              <h4 className="font-bold text-primary text-sm flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary-container text-base">home</span>
                Centralised Outdoor Residential Piping
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                For residential societies, a <Link to="/services/domestic-lpg-pipeline" className="text-primary font-bold underline">Domestic LPG Pipeline Service</Link> places cylinders in an outdoor yard with automatic changeovers, eliminating kitchen icing. Read our <Link to="/blog/domestic-lpg-pipeline-vs-cylinder" className="text-secondary font-bold underline">Domestic Pipeline vs Cylinder</Link> comparison.
              </p>
            </div>
          </div>
        </div>

        {/* VOT vs LOT Comparison Table - H3 */}
        <div id="vot-vs-lot-comparison" className="scroll-mt-28 space-y-4 pt-4">
          <div className="border-b border-gray-200 pb-2">
            <h3 className="font-headline-md text-xl font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">table_view</span>
              VOT Manifold vs. LOT System with Vaporiser
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[580px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 font-semibold w-1/3">Feature Specification</th>
                  <th className="py-3 px-4 font-semibold w-1/3 bg-primary/90 text-gray-200">VOT Manifold System</th>
                  <th className="py-3 px-4 font-semibold w-1/3 bg-secondary-container text-white">LOT System with Vaporiser</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {votVsLotTable.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? 'bg-white hover:bg-orange-50/40' : 'bg-gray-50/70 hover:bg-orange-50/40'}
                  >
                    <td className="py-3 px-4 font-bold text-gray-900">{row.feature}</td>
                    <td className="py-3 px-4 text-gray-700">{row.vot}</td>
                    <td className="py-3 px-4 font-semibold text-primary bg-orange-50/30">{row.lot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-600">
            For an exhaustive technical breakdown of storage footprints, Capex vs Opex, and Build-Own-Maintain financing, read our full <Link to="/blog/lot-vs-vot" className="text-secondary font-semibold hover:underline">LOT vs VOT Manifold System Guide</Link>.
          </p>
        </div>
      </section>

      {/* Danger Zone: Unsafe Practices - H3 / Aside Warning Box */}
      <aside id="danger-zone" className="scroll-mt-28 bg-red-50 border-2 border-red-500/80 p-6 sm:p-8 rounded-3xl shadow-md space-y-6" aria-label="Danger Zone: Safety Prohibitions">
        <div className="flex items-center gap-3 pb-3 border-b border-red-200">
          <span className="material-symbols-outlined text-red-600 text-3xl">warning</span>
          <div>
            <span className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">Critical Safety Mandate</span>
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-red-900 mt-0.5">
              Danger Zone: 4 Unsafe Practices You Must Avoid
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-red-950">
          <div className="bg-white/80 p-4 rounded-xl border border-red-200 space-y-1.5">
            <h4 className="font-bold text-red-900 flex items-center gap-1.5 text-sm">
              <span className="material-symbols-outlined text-red-600 text-base">local_fire_department</span>
              1. Never Apply Open Flame or Blowtorches
            </h4>
            <p className="leading-relaxed text-gray-700">
              Direct heat creates localized hot spots, raises internal cylinder pressure violently, and risks triggering pressure relief valves or catastrophic cylinder BLEVE explosions.
            </p>
          </div>

          <div className="bg-white/80 p-4 rounded-xl border border-red-200 space-y-1.5">
            <h4 className="font-bold text-red-900 flex items-center gap-1.5 text-sm">
              <span className="material-symbols-outlined text-red-600 text-base">meeting_room</span>
              2. Never Move Cylinders Indoors to Warm Up
            </h4>
            <p className="leading-relaxed text-gray-700">
              LPG is 1.5 to 2 times heavier than air. Any minor seal leak indoors pools along floorboards and inside cupboards until ignited by a refrigerator compressor or static switch.
            </p>
          </div>

          <div className="bg-white/80 p-4 rounded-xl border border-red-200 space-y-1.5">
            <h4 className="font-bold text-red-900 flex items-center gap-1.5 text-sm">
              <span className="material-symbols-outlined text-red-600 text-base">rotate_90_degrees_ccw</span>
              3. Never Lay a Cylinder Horizontally
            </h4>
            <p className="leading-relaxed text-gray-700">
              Standard VOT cylinders are designed exclusively to draw vapour from the top. Tipping the cylinder causes raw liquid LPG to flood regulators and hoses, triggering terrifying fireball flare-ups.
            </p>
          </div>

          <div className="bg-white/80 p-4 rounded-xl border border-red-200 space-y-1.5">
            <h4 className="font-bold text-red-900 flex items-center gap-1.5 text-sm">
              <span className="material-symbols-outlined text-red-600 text-base">texture</span>
              4. Never Wrap in Wet Cloth, Rags, or Blankets
            </h4>
            <p className="leading-relaxed text-gray-700">
              Wet towels trap moisture directly against steel casing, drastically accelerating corrosion. Uncertified fabrics also trap heat unevenly and present fire hazards near kitchen burners.
            </p>
          </div>
        </div>

        {/* The Hot Water Question Settled - Sub H3 */}
        <div id="hot-water-settled" className="scroll-mt-28 bg-white p-5 rounded-2xl border border-red-300 text-xs sm:text-sm text-gray-800 space-y-2">
          <h4 className="font-bold text-red-900 text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-red-600">water_drop</span>
            The Hot Water Question, Settled
          </h4>
          <p className="leading-relaxed">
            Older informal guides sometimes suggested standing cylinders in buckets of warm water. <strong>Current safety directives from Indian Oil Marketing Companies (IOCL, BPCL, HPCL) and PESO explicitly prohibit pouring hot water or using water baths.</strong> Thermal shock stresses steel welds, induces erratic pressure spikes, and damages pressure relief valves. If your cylinder freezes regularly enough to tempt hot water hacks, your installation is undersized and demands an engineered manifold upgrade.
          </p>
        </div>
      </aside>

      {/* Commercial & Industrial Sizing Framework - H2 */}
      <section id="commercial-sizing" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Engineering Calculation</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Commercial and Industrial Sizing Framework
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-base">
          To permanently eliminate cylinder freezing, commercial kitchens and plants must size cylinder manifold banks using this 3-step engineering formula:
        </p>

        {/* 3 Step Guide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <span className="text-secondary font-bold text-xs block mb-1">Step 1</span>
            <h4 className="font-bold text-primary text-sm mb-1">Calculate Peak Load</h4>
            <p className="text-xs text-gray-600">
              Sum appliance thermal ratings operating concurrently during peak rush (1 kW = 3.6 MJ/hr).
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <span className="text-secondary font-bold text-xs block mb-1">Step 2</span>
            <h4 className="font-bold text-primary text-sm mb-1">Apply Cold Temperature</h4>
            <p className="text-xs text-gray-600">
              Identify per-cylinder output at the lowest realistic ambient temperature of your operational shift.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <span className="text-secondary font-bold text-xs block mb-1">Step 3</span>
            <h4 className="font-bold text-primary text-sm mb-1">Determine Bank Size</h4>
            <p className="text-xs text-gray-600">
              Divide peak load by single-cylinder winter output and double for standby auto-changeover.
            </p>
          </div>
        </div>

        {/* Formula Box */}
        <div className="bg-primary text-white p-5 sm:p-6 rounded-2xl shadow text-center space-y-2">
          <p className="text-xs text-secondary-fixed-dim uppercase tracking-wider font-semibold">Standard Engineering Manifold Formula</p>
          <div className="font-mono text-base sm:text-lg font-bold py-2 bg-white/10 rounded-xl px-4 inline-block">
            Minimum Active Cylinders = Total Peak Load (MJ/hr) ÷ Cylinder Vaporisation Output at Local Low Temp (MJ/hr)
          </div>
          <p className="text-[11px] text-white/70">Always mirror active cylinders on the reserve bank (e.g., 4 Active + 4 Standby) with an automatic changeover regulator.</p>
        </div>

        {/* Worked Restaurant Example - H3 */}
        <div id="worked-example" className="scroll-mt-28 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-headline-md text-xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container">calculate</span>
            Worked Example: Commercial Restaurant (4x 25 kW Burners)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Consider a restaurant firing four 25 kW commercial woks simultaneously:
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-gray-800 list-disc pl-5">
            <li><strong>Total Peak Thermal Demand:</strong> 4 × 25 kW = 100 kW = <strong>360 MJ/hr</strong></li>
            <li><strong>At Mild Temperature (16°C / 113 MJ/hr output):</strong> 360 ÷ 113 = 3.18 &rarr; <strong>4 Active Cylinders</strong></li>
            <li><strong>At Winter Temperature (-1°C / 84 MJ/hr output):</strong> 360 ÷ 84 = 4.28 &rarr; <strong>5 Active Cylinders</strong></li>
          </ul>
          <p className="text-xs sm:text-sm text-gray-700">
            <strong>System Recommendation:</strong> A 5+5 VOT cylinder manifold (5 active + 5 standby) guarantees continuous operation without a trace of frost.
          </p>
        </div>

        {/* Interactive Live Sizing Tool */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-secondary-container/40 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
            <div>
              <span className="bg-secondary-container text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block">Interactive Tool</span>
              <h4 className="font-bold text-lg text-primary">Live Sizing Estimator</h4>
            </div>
            <span className="text-xs text-gray-500">Test your kitchen load</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="burner-count-input" className="text-xs font-semibold text-gray-700 block mb-1">Burners / Appliances:</label>
              <input
                id="burner-count-input"
                type="number"
                min="1"
                max="20"
                value={burnerCount}
                onChange={(e) => setBurnerCount(Math.max(1, Number(e.target.value)))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-bold text-primary focus:outline-none focus:ring-2 focus:ring-secondary-container"
              />
            </div>
            <div>
              <label htmlFor="burner-kw-input" className="text-xs font-semibold text-gray-700 block mb-1">Rating per Burner (kW):</label>
              <input
                id="burner-kw-input"
                type="number"
                min="5"
                max="100"
                step="5"
                value={burnerRatingKw}
                onChange={(e) => setBurnerRatingKw(Math.max(5, Number(e.target.value)))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-bold text-primary focus:outline-none focus:ring-2 focus:ring-secondary-container"
              />
            </div>
            <div>
              <label htmlFor="temperature-scenario-select" className="text-xs font-semibold text-gray-700 block mb-1">Temperature Condition:</label>
              <select
                id="temperature-scenario-select"
                value={temperatureScenario}
                onChange={(e) => setTemperatureScenario(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-secondary-container"
              >
                <option value="moderate">Moderate Climate (16°C)</option>
                <option value="winter">Winter / Cold Peak (-1°C)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center">
              <p className="text-xs text-gray-500">Total Peak Thermal Load</p>
              <p className="text-xl font-bold text-primary">{totalKw} kW <span className="text-xs font-normal text-gray-500">({Math.round(totalMj)} MJ/hr)</span></p>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl border border-secondary-container/40 text-center">
              <p className="text-xs text-secondary font-medium">Minimum Active Cylinders</p>
              <p className="text-2xl font-bold text-secondary-container">{minActiveCylinders} Cylinders</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-center">
              <p className="text-xs text-emerald-800 font-medium">Recommended Manifold Bank</p>
              <p className="text-xl font-extrabold text-emerald-700">{minActiveCylinders} + {minActiveCylinders} <span className="text-xs font-semibold">({totalCylindersWithReserve} total)</span></p>
              <p className="text-[10px] text-emerald-900">Active + Standby Auto-Changeover</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50/60 border border-blue-200 p-5 rounded-2xl text-xs sm:text-sm text-gray-800 leading-relaxed">
          <strong>Statutory Compliance Mandate:</strong> Commercial gas piping manifolds must comply strictly with <strong>IS 6044 (Code of Practice for LPG Storage Installations)</strong> and <strong>Petroleum and Explosives Safety Organization (PESO)</strong> setback norms. Storage exceeding 1,000 kg requires formal PESO licensing and engineering layouts.
        </div>
      </section>

      {/* High-Contrast Conversion Banner CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-container to-primary text-white p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center sm:text-left">
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="bg-secondary-container text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
              Free Engineering Site Audit
            </span>
            <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-white leading-tight">
              Experiencing cylinder freezing or pressure drops during peak hours?
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Contact <strong>Hi Tech Energy</strong> for a certified site audit. Our PESO-certified engineers evaluate your peak burner load, design custom multi-cylinder manifolds or LOT vaporiser skids, and permanently resolve gas freezing issues.
            </p>
            <p className="text-xs text-secondary-fixed-dim font-semibold">
              PESO Standard Compliant • ISO 9001 Certified • Turnkey EPC Installation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container hover:brightness-110 active:scale-95 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg cursor-pointer"
            >
              <span>Schedule Free Site Audit</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <a
              href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-xl text-xs transition-all border border-white/20"
            >
              <span className="material-symbols-outlined text-sm">phone</span>
              <span>Call: {OFFICE_LOCATIONS.headOffice.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Conclusion & Technical Verdict - H2 */}
      <section id="conclusion" className="scroll-mt-28 space-y-4 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          Technical Conclusion &amp; Next Steps
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            A sweating or frosted LPG cylinder is a direct mechanical indicator that thermal gas demand exceeds the cylinder&apos;s natural atmospheric vaporisation rate. The gas inside is intact, the pressure relief valve is sound, and fuel quality is not degraded.
          </p>
          <p>
            While short-term workarounds like swapping to a rested standby cylinder will keep your kitchen running through lunch service, a permanent fix requires engineering intervention: sizing a multi-cylinder parallel manifold, transitioning to an <Link to="/services/lot-pipeline" className="text-secondary font-semibold hover:underline">LOT pipeline system with an external vaporiser</Link>, and installing high-performance two-stage regulators.
          </p>
          <p className="text-sm font-semibold text-primary">
            Have questions about sizing or PESO approvals? Speak with the engineering specialists at <Link to="/" className="text-secondary hover:underline">Hi Tech Energy</Link> today.
          </p>
        </div>
      </section>
    </div>
  );
}
