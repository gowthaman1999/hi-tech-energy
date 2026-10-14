import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS } from '../../data/hitechData';

export default function LpgPipeSizingArticle({ post }) {
  const {
    propertiesTable = [],
    operatingPressuresTable = [],
    applianceLoadTable = [],
    longestLengthTable = [],
    branchLengthTable = [],
    equivalentLengthTable = [],
    testPressureTable = [],
    sections = {}
  } = post;

  // Interactive quick calculator for gas flow (BTU/hr to CFH)
  const [calcBtu, setCalcBtu] = useState(199000);
  const [calcGasType, setCalcGasType] = useState('lpg'); // 'lpg' or 'ng'

  const cfhResult = calcGasType === 'lpg'
    ? (calcBtu / 2500).toFixed(1)
    : (calcBtu / 1000).toFixed(1);

  return (
    <div className="space-y-12 text-left">
      {/* Quick Summary Callout Box - H2 */}
      <section
        id="quick-summary"
        className="scroll-mt-28 bg-gradient-to-br from-blue-50/80 via-white to-orange-50/50 border-2 border-primary/20 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4"
      >
        <div className="flex items-center gap-2.5 pb-2 border-b border-primary/10">
          <span className="material-symbols-outlined text-secondary-container text-2xl">verified</span>
          <h2 className="font-headline-md text-lg sm:text-xl font-bold text-primary">
            Quick Summary
          </h2>
        </div>
        <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800">
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>Most gas line problems are sizing problems:</strong> Lazy flames, sooty burners and a water heater that cuts out when the furnace kicks on usually trace back to a pipe that's one size too small.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>Never size an LPG job off a natural gas table:</strong> LPG carries about 2.5 times more heat per cubic foot than natural gas, so the same load needs a smaller LPG line.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>Every capacity table is built on a set pressure drop:</strong> It's printed in the header. Mixing a 0.5&quot; w.c. table with a 1.0 psi table is one of the most common ways good fitters end up with undersized runs.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>Longest length vs. branch length method:</strong> The longest length method gives you a fast, safe answer. The branch length method stops you paying for oversized pipe on short branches.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>On LPG, check the supply before blaming the pipe:</strong> With vapour off-take, the cylinders can only boil off gas so fast, which is why the way you draw gas matters on bigger loads. A frosted cylinder points to the supply, not a sizing fault.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>Beware the flat 5-foot rule:</strong> A flat 5 feet per fitting overstates losses on small pipe and badly understates them on large headers.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>Bonding rules:</strong> Bond to rigid pipe or a brass fitting. A clamp on the corrugated CSST itself is a code violation.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-base mt-0.5 shrink-0">check_circle</span>
            <span><strong>Commissioning checks:</strong> Test, purge and check regulator lock-up before you hand over the job. A tightness test done with the wrong gauge proves nothing.</span>
          </li>
        </ul>

        <div className="pt-4 border-t border-primary/10 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
          <p>
            Most of us have taken this call. The customer installed a new tankless water heater, and it works fine on its own. But turn on the shower while the furnace is running and the heater throws an ignition fault. The installer says the unit is faulty and the manufacturer says it's the gas supply. Nine times out of ten, the manufacturer is right.
          </p>
          <p>
            On paper, gas pipe sizing is simple: add up the BTUs, measure the run, read a table. In practice it's where small shortcuts turn into callbacks, and sometimes into real safety problems. I've written this guide for gas fitters, plumbers, system designers and teams running an{' '}
            <Link to="/services" className="text-secondary font-bold hover:underline">
              LPG gas pipeline installation service
            </Link>{' '}
            who want a reference they can use on a job. It covers both LPG and natural gas.
          </p>
        </div>
      </section>

      {/* Sub-H3: Why small sizing errors cause big field failures */}
      <section id="why-small-sizing-errors" className="scroll-mt-28 space-y-4 pt-4 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-2">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Root Causes</span>
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            Why Small Sizing Errors Cause Big Field Failures
          </h3>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Gas loses pressure to friction as it moves through a pipe. The longer the pipe, the smaller the bore and the more gas you push through it, the more pressure you lose. An undersized run starves the appliance of pressure, especially when several appliances fire at once. The burner then runs on the wrong gas and air mix, which gives you yellow, lazy flames and a carbon monoxide risk. Soot builds up on heat exchangers and burner heads and makes things worse over time. And you get nuisance flame-outs at peak demand: the system works perfectly at 2 p.m. and fails at 7 a.m., when everyone is showering and the heating is on.
          </p>
          <p>
            The awkward part is that an undersized system often passes commissioning. You light one appliance at a time, everything looks fine, and the problems only show up weeks later under full load.
          </p>
        </div>
      </section>

      {/* Natural gas vs. LPG - H2 */}
      <section id="natural-gas-vs-lpg" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Fuel Thermodynamics</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Natural Gas vs. LPG: Why One Table Won’t Do Both
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            The two fuels look the same on a burner but move through pipe very differently.
          </p>
          <p>
            Natural gas has a specific gravity of about 0.60, so it's lighter than air, and it carries roughly 1,000 BTU per cubic foot. LPG (propane) has a specific gravity of about 1.50 to 1.52, so it's heavier than air and collects in basements, pits and drains. It carries roughly 2,500 BTU per cubic foot. Stored as a liquid, it expands about 250 times when it turns to vapour, which is how a modest cylinder or tank can feed a whole building.
          </p>
          <p>
            Because each cubic foot of LPG holds so much more energy, you move less volume for the same heat load. An LPG line can often be one size smaller than a natural gas line serving the same appliances.
          </p>
        </div>

        {/* Section image 1 - Gas Combustion Pipe */}
        {sections.properties && (
          <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
            <img
              src={sections.properties.image}
              alt={sections.properties.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
              {sections.properties.imageCaption}
            </figcaption>
          </figure>
        )}

        {/* Table 1: Fuel Properties Comparison */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <span className="material-symbols-outlined text-secondary-container text-base">table_chart</span>
            <span>Fuel Properties Comparison: Natural Gas vs. LPG (Propane)</span>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 font-semibold">Property</th>
                  <th className="py-3 px-4 font-semibold">Natural gas</th>
                  <th className="py-3 px-4 font-semibold">LPG (propane)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {propertiesTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50/60' : 'bg-white'}>
                    <td className="py-2.5 px-4 font-medium text-gray-900">{row.property}</td>
                    <td className="py-2.5 px-4 text-gray-700">{row.naturalGas}</td>
                    <td className="py-2.5 px-4 text-primary font-semibold">{row.lpg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Quick Sizing Calculator */}
        <div className="bg-surface-container-low border border-outline-variant/40 p-5 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <span className="material-symbols-outlined text-secondary-container">calculate</span>
            <span>Quick Volumetric Flow Calculator (BTU/hr to CFH)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-gray-600 font-semibold mb-1">Connected Load (BTU/hr)</label>
              <input
                type="number"
                value={calcBtu}
                onChange={(e) => setCalcBtu(Number(e.target.value) || 0)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-container"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-1">Fuel Gas</label>
              <select
                value={calcGasType}
                onChange={(e) => setCalcGasType(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-container"
              >
                <option value="lpg">LPG / Propane (~2,500 BTU/ft³)</option>
                <option value="ng">Natural Gas (~1,000 BTU/ft³)</option>
              </select>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 flex flex-col justify-center items-center text-center">
              <span className="text-gray-500 text-[11px] font-medium">Required Volumetric Flow</span>
              <span className="text-xl font-bold text-secondary-container">{cfhResult} CFH</span>
            </div>
          </div>
          <p className="text-[11px] text-gray-500">
            Notice how LPG requires only 40% of the cubic volume of natural gas for the same thermal energy demand!
          </p>
        </div>
      </section>

      {/* Domestic LPG pipeline vs LPG cylinder - H2 */}
      <section id="domestic-vs-cylinder" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Residential Architecture</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Domestic LPG Pipeline vs LPG Cylinder: What Changes for Sizing
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Plenty of homes still run a single cylinder with a rubber hose straight to the stove. There's no pipe to size, so nobody thinks about pressure drop.
          </p>
          <p>
            That changes when a household moves to a piped system. The piped setup keeps the cylinders outside in a ventilated enclosure and runs fixed pipe to the kitchen, the geyser and anything else that burns gas. That's safer, and it frees up kitchen space. It also means you now have pipe length, fittings and a combined load to deal with, so the sizing rules in this guide apply.
          </p>
          <p>
            A good{' '}
            <Link to="/services/domestic-lpg-pipeline" className="text-secondary font-bold hover:underline">
              domestic LPG gas pipeline service
            </Link>{' '}
            treats even a small flat like a small network. List the appliances, measure the run from the regulator, and size it properly.
          </p>
        </div>
      </section>

      {/* Operating pressures and allowable pressure drops - H2 */}
      <section id="operating-pressures" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">System Pressures</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Operating Pressures and Allowable Pressure Drops
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Before you open a capacity table, you need two numbers: the pressure at the start of the run, and how much of it you can lose before the gas reaches the appliance.
        </p>

        {/* Sub-H3: How two-stage LPG and natural gas pressures work */}
        <div id="two-stage-pressures" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            How Two-Stage LPG and Natural Gas Pressures Work
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Two-stage regulation is standard on most modern LPG installations. The first stage regulator sits at or near the tank or cylinder bank. Tank pressure swings a lot with outdoor temperature, and the first stage brings it down to a steady intermediate pressure of no more than 20 psig (about 1.4 bar). Many systems run around 10 psig. The second stage regulator sits closer to the building and drops that to appliance level, typically 11&quot; w.c. (about 300 mm w.c., or roughly 27 to 29 mbar).
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The long run from tank to building carries gas at higher pressure, so it can be smaller pipe. The second stage then gives the appliances a steady pressure even as tank pressure rises and falls.
          </p>
        </div>

        {/* Section image 2 - Two-Stage Regulator */}
        {sections.twoStage && (
          <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
            <img
              src={sections.twoStage.image}
              alt={sections.twoStage.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
              {sections.twoStage.imageCaption}
            </figcaption>
          </figure>
        )}

        {/* Sub-H3: LOT vs VOT: how the supply source affects your system */}
        <div id="lot-vs-vot-supply" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            LOT vs VOT: How the Supply Source Affects Your System
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            On LPG jobs the pipe is only half the story. The other half is how the gas leaves the cylinders.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>VOT (vapour off-take)</strong> draws vapour from the top of the cylinder, and the liquid inside boils off to replace it using heat from the surrounding air. It needs no extra equipment, which is why homes, small restaurants and offices use it.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>LOT (liquid off-take)</strong> draws liquid LPG from the bottom of the cylinder and sends it to a vaporiser, which turns it into gas with electric or water-bath heat. Hotels, industrial kitchens and factories use it when the load is too high for natural boil-off.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            For sizing, three things follow. VOT capacity is capped by vaporisation rate, so a perfect pipe still starves the appliances if the cylinder bank can't make enough vapour; add cylinders to the manifold, not bigger pipe. On an LOT system, the section up to the vaporiser carries liquid and is designed as a liquid line, including hydrostatic relief valves anywhere liquid could get trapped between two valves. After the vaporiser, you size it like any other vapour system, using the pressures and drops below.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <Link to="/blog/lpg-gas-freezing" className="text-secondary font-bold hover:underline">
              LPG cylinder freezing
            </Link>{' '}
            is the problem that passes for a sizing fault. When a VOT system draws gas faster than the cylinders can boil it off, the liquid cools. Frost forms on the outside of the cylinder, usually up to the liquid level. Cylinder pressure falls, flames shrink and appliances cut out, just as they would with an undersized pipe.
          </p>
          <div className="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-950 text-sm sm:text-base leading-relaxed">
            <strong>Diagnostic field tip:</strong> You can tell the two apart on site. If the cylinders are frosted or sweating heavily during peak use, the supply is the problem, not the pipe. Add cylinders to the manifold, switch to an LOT system with a vaporiser, or spread the load across more of the day. <em>Never heat a cylinder with a flame or hot water to thaw it.</em>
          </div>
        </div>

        {/* Sub-H3: Natural gas supply pressures */}
        <div id="natural-gas-pressures" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            Natural Gas Supply Pressures
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Natural gas usually arrives at the meter at low pressure, around 3.5&quot; to 7&quot; w.c. (about 0.125 to 0.25 psi) for most homes and small commercial sites. Larger buildings may get medium-pressure supply (2 psi or more) with line regulators near each appliance group, which lets you run smaller pipe for the mains.
          </p>
        </div>
      </section>

      {/* Choosing the correct allowable pressure drop - H2 */}
      <section id="allowable-pressure-drop" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Standard Baselines</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Choosing the Correct Allowable Pressure Drop
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Every capacity table assumes a pressure drop. Common baselines are 0.5&quot; w.c. for low-pressure natural gas and 11&quot; w.c. LPG in US-style tables, 1.0 psi for 2 psi elevated-pressure systems, 1 to 2 mbar in UK and European practice, and 0.25 kPa in some metric tables.
          </p>
          <p>
            Say you're sizing a low-pressure LPG system to a 0.5&quot; w.c. drop. You grab a table from a supplier's catalogue that looks right, but it was built on a 1.0&quot; w.c. drop. Its capacities are noticeably higher, so you pick a smaller pipe. It looks fine on paper, and the appliance at the end of the run is short of gas.
          </p>
          <p>
            The fix is dull: <strong>read the table header every time</strong>. It should state the gas type, inlet pressure, pressure drop and specific gravity. If any of those don't match your job, you're on the wrong table.
          </p>
        </div>

        {/* Table 2: Operating Pressures and Allowable Drop */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <span className="material-symbols-outlined text-secondary-container text-base">table_chart</span>
            <span>Operating Pressures &amp; Allowable Drop Reference</span>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 font-semibold">System type</th>
                  <th className="py-3 px-4 font-semibold">Typical supply pressure</th>
                  <th className="py-3 px-4 font-semibold">Typical allowable drop</th>
                  <th className="py-3 px-4 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {operatingPressuresTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50/60' : 'bg-white'}>
                    <td className="py-2.5 px-4 font-medium text-gray-900">{row.systemType}</td>
                    <td className="py-2.5 px-4 text-gray-700">{row.supplyPressure}</td>
                    <td className="py-2.5 px-4 text-primary font-semibold">{row.allowableDrop}</td>
                    <td className="py-2.5 px-4 text-gray-600 text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sub-H3: Pipe sizing workflows: longest length vs. branch length */}
        <div id="sizing-workflows" className="scroll-mt-28 space-y-4 pt-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            Pipe Sizing Workflows: Longest Length vs. Branch Length
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            NFPA 54 and the International Fuel Gas Code both accept two ways to size a gas network. The first is simpler. The second saves pipe. We'll use the same house for both so you can see where they differ.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The example job runs on natural gas at 7&quot; w.c. supply with a 0.5&quot; w.c. drop, in Schedule 40 steel.
          </p>

          {/* Table 3: Appliance Input & Run Length */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 font-semibold">Appliance</th>
                  <th className="py-3 px-4 font-semibold">Input</th>
                  <th className="py-3 px-4 font-semibold">Distance from meter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {applianceLoadTable.map((row, idx) => (
                  <tr key={idx} className={row.appliance === 'Total' ? 'bg-orange-50 font-bold text-primary' : (idx % 2 === 1 ? 'bg-gray-50/60' : 'bg-white')}>
                    <td className="py-2.5 px-4">{row.appliance}</td>
                    <td className="py-2.5 px-4">{row.input}</td>
                    <td className="py-2.5 px-4 text-gray-600">{row.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            At about 1,000 BTU per cubic foot, 364,000 BTU/hr is about 364 cubic feet per hour (CFH).
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A main header leaves the meter. At 12 ft there's a tee to the furnace. The header continues to a second tee at 25 ft, where the range branches off, and carries on to the tankless heater at 40 ft.
          </p>
        </div>

        {/* Section image 3 - Longest Length & Branch Pipeline Layout */}
        {sections.workflows && (
          <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
            <img
              src={sections.workflows.image}
              alt={sections.workflows.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
              {sections.workflows.imageCaption}
            </figcaption>
          </figure>
        )}

        {/* Sub-H3: The longest length method */}
        <div id="longest-length-method" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            The Longest Length Method
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            This is the quickest way to a safe answer.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
            <li><strong>Add up the connected load</strong> from the nameplate input of every appliance (input, not output). Here that's 364,000 BTU/hr, or about 364 CFH.</li>
            <li><strong>Measure from the meter</strong> (or the second-stage regulator on LPG) to the furthest appliance. Here that's 40 ft.</li>
            <li><strong>Size every section from that one length.</strong> Go to the 40 ft column of your table and size each section for the load it carries.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            In a standard 0.5&quot; w.c. natural gas table for Schedule 40 steel, the 40 ft column gives roughly 81 CFH for 1/2&quot;, 170 CFH for 3/4&quot;, 320 CFH for 1&quot; and 657 CFH for 1-1/4&quot;.
          </p>

          {/* Table 4: Longest Length Method Results */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 font-semibold">Section</th>
                  <th className="py-3 px-4 font-semibold">Load carried</th>
                  <th className="py-3 px-4 font-semibold">Size picked (40 ft column)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {longestLengthTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50/60' : 'bg-white'}>
                    <td className="py-2.5 px-4 font-medium text-gray-900">{row.section}</td>
                    <td className="py-2.5 px-4 text-gray-700">{row.loadCarried}</td>
                    <td className="py-2.5 px-4 font-bold text-primary">{row.sizePicked}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic">
            It's conservative and quick. The cost is that short branches near the meter get sized as if they were 40 ft long.
          </p>
        </div>

        {/* Sub-H3: The branch length method */}
        <div id="branch-length-method" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            The Branch Length Method
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            This method gets you smaller pipe on short branches without taking risks on the main run.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
            <li><strong>Size the main run to the furthest appliance</strong> exactly as before. Every section on the path from the meter to the tankless heater still uses the 40 ft column.</li>
            <li><strong>Size each branch using its total length</strong> from the meter to that appliance, not the length of the branch alone.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The furnace sits 18 ft from the meter, so round up to the 20 ft column. There, 1/2&quot; carries about 118 CFH against a 100 CFH load, so 1/2&quot; works. The range, at 30 ft, gets about 95 CFH from 1/2&quot; against a 65 CFH load and stays at 1/2&quot;.
          </p>

          {/* Table 5: Longest Length vs Branch Length */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 font-semibold">Section</th>
                  <th className="py-3 px-4 font-semibold">Longest length result</th>
                  <th className="py-3 px-4 font-semibold">Branch length result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {branchLengthTable.map((row, idx) => (
                  <tr key={idx} className={row.longestResult !== row.branchResult ? 'bg-emerald-50/70 font-semibold' : (idx % 2 === 1 ? 'bg-gray-50/60' : 'bg-white')}>
                    <td className="py-2.5 px-4 text-gray-900">{row.section}</td>
                    <td className="py-2.5 px-4 text-gray-700">{row.longestResult}</td>
                    <td className="py-2.5 px-4 text-emerald-800">{row.branchResult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            In a small house that's one branch. In a restaurant kitchen with eight burners and a fryer bank off one header, the savings in pipe, fittings and labour add up quickly.
          </p>
          <div className="bg-primary/5 border border-primary/20 p-5 rounded-2xl text-gray-800 leading-relaxed text-base">
            <strong>The LPG difference:</strong> Run the same house on propane at 11&quot; w.c. with a 0.5&quot; w.c. drop and the first main section drops from <strong>1-1/4&quot; to 1&quot;</strong>, because LPG carries about 2.5 times the energy per cubic foot. Using a natural gas table on an LPG job, or the other way round, gives you the wrong size.
          </div>
        </div>
      </section>

      {/* Fitting resistance and friction losses - H2 */}
      <section id="fitting-resistance" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Hydraulic Losses</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Fitting Resistance and Friction Losses
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Straight pipe isn't the only thing that costs you pressure. Every elbow, tee and valve adds turbulence, and turbulence eats pressure.
        </p>

        {/* Sub-H3: The 5-foot rule vs real equivalent length tables */}
        <div id="five-foot-rule-vs-tables" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            The 5-Foot Rule vs. Real Equivalent Length Tables
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Plenty of fitters were taught to add 5 feet of pipe for every fitting. It's easy to remember and wrong at both ends of the size range.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A 1/2&quot; elbow behaves like about 1.5 ft of straight pipe, so adding 5 ft triples the real loss and you oversize the run. A 4&quot; tee taken through the branch behaves like about 20 ft of straight pipe, so adding 5 ft understates the loss by a factor of four and the header ends up undersized. The second mistake is the dangerous one, because commercial kitchens and boiler rooms are where loads are highest and margins are tightest.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Before you add anything, check the table notes. Many capacity tables, including the NFPA 54 and IFGC ones, already allow for a normal number of fittings. If yours does, only add equivalent length for layouts with a lot of extra fittings.
          </p>

          {/* Table 6: Equivalent Length of Pipe for Fittings */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <span className="material-symbols-outlined text-secondary-container text-base">table_chart</span>
              <span>Equivalent Length of Straight Pipe per Fitting (in feet)</span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-3 px-3.5 font-semibold">Nominal size</th>
                    <th className="py-3 px-3.5 font-semibold">45° elbow</th>
                    <th className="py-3 px-3.5 font-semibold">90° elbow</th>
                    <th className="py-3 px-3.5 font-semibold">Tee (through branch)</th>
                    <th className="py-3 px-3.5 font-semibold">Gate valve (open)</th>
                    <th className="py-3 px-3.5 font-semibold bg-red-900/60">Flat rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {equivalentLengthTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50/60' : 'bg-white'}>
                      <td className="py-2.5 px-3.5 font-bold text-gray-900">{row.nominalSize}</td>
                      <td className="py-2.5 px-3.5 text-gray-700">{row.elbow45}</td>
                      <td className="py-2.5 px-3.5 text-gray-700">{row.elbow90}</td>
                      <td className="py-2.5 px-3.5 font-semibold text-secondary-container">{row.teeBranch}</td>
                      <td className="py-2.5 px-3.5 text-gray-700">{row.gateValve}</td>
                      <td className="py-2.5 px-3.5 text-red-700 font-semibold">{row.flatRule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sub-H3: CSST fitting corrections */}
        <div id="csst-fitting-corrections" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            CSST Fitting Corrections
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Corrugated stainless steel tubing (CSST) has its own rules, because the corrugations add friction along the whole length.
          </p>
          <div className="bg-blue-50/70 border border-blue-200 p-5 rounded-2xl space-y-2 text-gray-800">
            <div className="flex items-center gap-2 text-primary font-bold text-base">
              <span className="material-symbols-outlined text-secondary-container">functions</span>
              <span>CSST Equivalent Length Formula: L = 1.3n</span>
            </div>
            <p className="text-sm leading-relaxed">
              Most CSST manufacturers' sizing tables already allow for a set number of fittings and bends. For runs with more than that, several design guides use <strong>L = 1.3n</strong>, where <strong>n</strong> is the number of extra fittings or tight bends beyond what the table assumes, and <strong>L</strong> is the extra length in feet to add to the run.
            </p>
            <p className="text-xs text-primary font-semibold">
              Example: A run with 4 extra bends gets 1.3 × 4 = 5.2 ft added to its measured length before you go to the table.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Use the sizing table for the exact CSST brand you're installing. Different manufacturers' tubing has different internal profiles, and their tables aren't interchangeable.
          </p>
        </div>
      </section>

      {/* Material selection and underground pipe assembly - H2 */}
      <section id="material-selection" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Piping Metallurgy &amp; Assembly</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Material Selection and Underground Pipe Assembly
          </h2>
        </div>

        {/* Section image 4 - Materials and Fittings */}
        {sections.materials && (
          <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
            <img
              src={sections.materials.image}
              alt={sections.materials.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
              {sections.materials.imageCaption}
            </figcaption>
          </figure>
        )}

        {/* Sub-H3: Aboveground systems: Schedule 40 steel, copper and CSST */}
        <div id="aboveground-systems" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            Aboveground Systems: Schedule 40 Steel, Copper and CSST
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>Schedule 40 steel (black iron)</strong> is still the default for exposed and commercial work. It's tough and takes threaded or welded joints, and no inspector will question it.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Many codes allow <strong>copper tubing</strong> for gas, with two checks first. Some local codes restrict it, and natural gas with a high sulphur content can attack copper over time. Make sure the fittings are rated for gas. Lead and lead-alloy pipe isn't allowed for gas at all, so if you find any in an old building, it comes out.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>CSST</strong> is popular because it goes in fast with fewer joints. Size it by Equivalent Hydraulic Diameter (EHD) rather than the nominal size on the jacket: a higher EHD means more flow, and two tubes that look the same from different brands can carry different amounts of gas. Run it through a protective sleeve wherever it passes through masonry or concrete, never cast straight into a wall or slab. Fit striker plates at studs and joists where a nail or screw could hit it.
          </p>
          <div className="bg-red-50/70 border-l-4 border-red-500 p-4 rounded-r-xl text-red-950 text-sm sm:text-base leading-relaxed">
            <strong>Critical electrical bonding requirement:</strong> Gas piping has to be bonded to the building's electrical earthing system, and in lightning-prone areas a missed bond can damage CSST. In UK practice, main protective bonding conductors are typically 10 mm² copper. In the US, CSST bonding is commonly done with 6 AWG copper under NFPA 54. <em>Attach the bonding conductor to a rigid steel section, a brass CSST fitting or a manufacturer-approved bonding point. A clamp on the corrugated tubing can damage it and won't give a reliable connection, and the code prohibits it.</em>
          </div>
        </div>

        {/* Sub-H3: Underground medium-density polyethene (MDPE) */}
        <div id="underground-mdpe" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            Underground Medium-Density Polyethene (MDPE)
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            MDPE is the standard choice for buried runs. It doesn't rust and it copes with ground movement. It also comes in long coils, so there are fewer joints underground.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            You'll see two main grades: <strong>PE80</strong> covers general low and medium pressure distribution. <strong>PE100</strong> gives higher pressure ratings, or thinner walls at the same pressure.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Gas PE pipe is usually yellow or yellow-striped so it's easy to spot when someone digs. It's for underground use only, because sunlight degrades polyethylene, and it must change to metal pipe through an approved riser before it comes above ground.
          </p>
          <div className="space-y-3 pt-2">
            <h4 className="font-bold text-primary text-base">Mechanical Stab Fittings (Con-Stab Assembly Procedure):</h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><strong>Cut the pipe square</strong> with a proper PE pipe cutter, not a hacksaw. An angled cut won't seat evenly on the internal seal.</li>
              <li><strong>Chamfer the outside edge</strong> so the pipe slides past the O-ring without rolling or cutting it, then clean off any shavings.</li>
              <li><strong>Measure the insertion depth</strong> from the fitting (most have a depth gauge or a printed dimension) and mark it on the pipe with a paint pen.</li>
              <li><strong>Push the pipe in straight</strong> until your mark sits within about 1/8&quot; of the fitting face. If the mark is still well outside, the pipe isn't fully engaged and the joint can pull out under pressure.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Testing, purging and retrofitting existing gas lines - H2 */}
      <section id="testing-purging-retrofitting" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Quality &amp; Commissioning</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Testing, Purging and Retrofitting Existing Gas Lines
          </h2>
        </div>

        {/* Section image 5 - Pressure Testing */}
        {sections.testing && (
          <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
            <img
              src={sections.testing.image}
              alt={sections.testing.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
              {sections.testing.imageCaption}
            </figcaption>
          </figure>
        )}

        {/* Sub-H3: Pressure testing and tightness criteria */}
        <div id="pressure-testing" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            Pressure Testing and Tightness Criteria
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A pressure test proves two things: the joints hold under pressure (strength), and the system doesn't leak at normal pressure (tightness).
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            NFPA 54 calls for a test pressure of at least 1.5 times the maximum working pressure, and never less than 3 psig. Many LPG installation specifications set higher multipliers for different parts of the system, for example:
          </p>

          {/* Table 7: Test Pressure Benchmarks */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 font-semibold">System section</th>
                  <th className="py-3 px-4 font-semibold">Example test pressure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {testPressureTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50/60' : 'bg-white'}>
                    <td className="py-2.5 px-4 font-medium text-gray-900">{row.section}</td>
                    <td className="py-2.5 px-4 text-primary font-bold">{row.testPressure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            On home installations, the low-pressure line from the second-stage regulator to the kitchen is the section most likely to get tested in a hurry. Give it the same care as the high-pressure side.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            These numbers vary by country, code and project spec, and your local code and the design spec decide the final figure. In India, that means{' '}
            <Link to="/safety" className="text-secondary font-bold hover:underline">
              PESO requirements and the relevant part of IS 6044
            </Link>
            , the code of practice for LPG installations.
          </p>
          <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-2xl text-gray-800 text-sm sm:text-base leading-relaxed space-y-2">
            <p>
              People sometimes assume a tightness test proves zero leakage. It sets a maximum allowable pressure drop over a fixed time, which corresponds to a very small leak rate.
            </p>
            <p>
              In one commonly cited set of figures, a <strong>4 mbar drop over 2 minutes</strong> works out to about <strong>19 mL of gas per minute</strong>. For comparison, people can smell odorised gas at around <strong>1 mL per minute</strong>, and the smallest leak that can build an ignitable mix in a normal room is estimated at around <strong>14 mL per minute</strong>. So the limit sits close to the danger line, and a 5 mbar drop is a fail, not a near pass.
            </p>
            <p className="text-xs text-primary font-semibold">
              Use a gauge that can read small changes at your test pressure. A 0 to 300 psi dial gauge won't show a 4 mbar drop.
            </p>
          </div>
        </div>

        {/* Sub-H3: Safe purging and regulator lock-up checks */}
        <div id="purging-lock-up" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            Safe Purging and Regulator Lock-Up Checks
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            After a pneumatic test the line is full of air, and it has to come out before anyone lights an appliance.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li><strong>Purge through a temporary purge point</strong> that vents outdoors, away from ignition sources, doors, windows and drains (LPG sinks, so drains matter). On larger pipe, many codes require purging outdoors rather than into the room.</li>
            <li><strong>Displace the air with fuel gas</strong> until gas comes out of the purge point.</li>
            <li><strong>Confirm with a gas detector</strong> or a controlled test flame at a safe test burner. A steady flame that doesn't lift or go out means the air is gone.</li>
            <li><strong>Never purge</strong> into an appliance combustion chamber.</li>
            <li><strong>Close the purge point</strong> and leak-check it.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Lock-up is the pressure the regulator holds when no gas is flowing. To check it, fit a manometer downstream of the regulator, run an appliance to confirm working pressure, then shut the appliance off and watch the reading settle.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The pressure will rise a little when flow stops, which is normal. If lock-up settles more than about 20% above the regulator's set pressure, or keeps creeping up, the seat is probably worn or dirty. Replace the regulator before handover, because a creeping regulator can push appliances above their rated inlet pressure overnight.
          </p>
        </div>

        {/* Sub-H3: Capacity audits: adding high-BTU equipment to old lines */}
        <div id="capacity-audits" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-6 bg-secondary-container rounded-full inline-block" />
            Capacity Audits: Adding High-BTU Equipment to Old Lines
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A lot of today's callbacks start here. A homeowner swaps a 40,000 BTU/hr tank water heater for a 199,000 BTU/hr tankless unit and expects the existing 1/2&quot; line to cope.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            It usually can't. On natural gas at a 0.5&quot; w.c. drop, a 1/2&quot; steel line carries about 172 CFH at 10 ft and only about 81 CFH at 40 ft. A 199,000 BTU/hr heater needs about 199 CFH on its own.
          </p>

          <div className="bg-surface-container-low border border-outline-variant/40 p-5 rounded-2xl space-y-3">
            <h4 className="font-bold text-primary text-base">Before you quote, run this 6-step audit:</h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li><strong>List every appliance</strong> on the system with its nameplate input, including anything the customer plans to add, such as a pool heater, outdoor kitchen or generator.</li>
              <li><strong>Map the existing pipe</strong> with sizes and measured lengths from the meter or regulator.</li>
              <li><strong>Check the meter and regulator capacity.</strong> The pipe can be fine while the meter is too small, and utilities and LPG suppliers can upgrade both.</li>
              <li><strong>Re-run the sizing</strong> for the new total load using the correct table for the gas and pressure.</li>
              <li><strong>Find the bottleneck.</strong> Often you only need to replace the first section from the meter plus the new appliance branch, not the whole house.</li>
              <li><strong>Fire every appliance at once</strong> and measure inlet pressure at the furthest one. It should stay within the manufacturer's stated range.</li>
            </ol>
          </div>
        </div>

        {/* Safety Callout Box */}
        <div className="bg-red-50 border-2 border-red-200 p-6 rounded-3xl space-y-3 text-red-950">
          <div className="flex items-center gap-2 text-red-700 font-bold text-base">
            <span className="material-symbols-outlined">warning</span>
            <span>Critical Field Safety Callouts</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-red-600 text-sm mt-0.5">cancel</span>
              <span><strong>Never use pure oxygen</strong> for pressure or leak testing. Oxygen meeting oil or grease inside fittings can ignite violently. Use air, nitrogen or another inert gas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-red-600 text-sm mt-0.5">cancel</span>
              <span><strong>Never use a flame</strong> to look for leaks. Use leak detection fluid or an electronic detector.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-red-600 text-sm mt-0.5">cancel</span>
              <span><strong>LPG sinks:</strong> Check pits, basements and drains before any ignition near an LPG purge or leak.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-secondary-container text-sm mt-0.5">check_circle</span>
              <span><strong>Check lock-up</strong> on every new or replaced regulator.</span>
            </li>
          </ul>
        </div>

        {/* Tightness testing flowchart - H3 */}
        <div id="tightness-flowchart" className="scroll-mt-28 space-y-4 pt-2">
          <div className="flex items-center gap-2 text-primary font-bold text-lg sm:text-xl">
            <span className="material-symbols-outlined text-secondary-container">account_tree</span>
            <h3>Tightness Testing Flowchart &amp; Procedural Steps</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm space-y-1">
              <span className="font-bold text-secondary-container block text-xs uppercase">Step 1: Isolation</span>
              <p className="text-gray-700 font-medium">Isolate the section and cap all open ends securely.</p>
            </div>
            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm space-y-1">
              <span className="font-bold text-secondary-container block text-xs uppercase">Step 2: Pressurise</span>
              <p className="text-gray-700 font-medium">Pressurise to the required test pressure with air or nitrogen.</p>
            </div>
            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm space-y-1">
              <span className="font-bold text-secondary-container block text-xs uppercase">Step 3: Stabilise</span>
              <p className="text-gray-700 font-medium">Let the pressure stabilise for the specified duration.</p>
            </div>
            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm space-y-1">
              <span className="font-bold text-secondary-container block text-xs uppercase">Step 4: Record Initial</span>
              <p className="text-gray-700 font-medium">Record the precise starting pressure reading on gauge.</p>
            </div>
            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm space-y-1">
              <span className="font-bold text-secondary-container block text-xs uppercase">Step 5: Hold Period</span>
              <p className="text-gray-700 font-medium">Hold the system sealed for the specified test period.</p>
            </div>
            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm space-y-1 bg-gradient-to-br from-emerald-50 to-white">
              <span className="font-bold text-emerald-700 block text-xs uppercase">Step 6: Evaluation</span>
              <p className="text-gray-700 font-medium">
                Pressure drop exceeded? If <strong>Yes</strong>, find leak with bubble fluid, repair &amp; restart at Step 2. If <strong>No</strong>, record result, release &amp; purge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion - H2 */}
      <section id="conclusion" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Final Summary</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Conclusion
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Good gas sizing comes from using the right table for the job and refusing the shortcuts that look harmless. Know your gas and your pressure drop, measure runs properly and count fittings honestly. Then test and purge as if the inspector were standing behind you, and the 7 a.m. &quot;no hot water&quot; call gets a lot rarer. Whether gas piping is your full-time trade or you take the odd gas job alongside plumbing work, the checklist below covers the steps that matter most on site.
          </p>

          {/* On-site Engineering Checklist */}
          <div className="bg-primary/5 border border-primary/15 p-6 rounded-2xl text-gray-800 space-y-3">
            <h3 className="font-bold text-primary text-base sm:text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">checklist</span>
              On-Site Gas Pipe Sizing &amp; Safety Checklist
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check_circle</span>
                <span><strong>Identify fuel &amp; pressure:</strong> Confirm LPG (11&quot; w.c.) vs. Natural Gas (7&quot; w.c.) and allowable pressure drop (0.5&quot; w.c.).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check_circle</span>
                <span><strong>Sum appliance inputs:</strong> Always use manufacturer nameplate input ratings in BTU/hr or CFH.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check_circle</span>
                <span><strong>Choose sizing workflow:</strong> Use Longest Length for fast conservative runs, or Branch Length for commercial kitchens with multiple drop lines.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check_circle</span>
                <span><strong>Calculate real equivalent lengths:</strong> Consult diameter-specific fitting tables rather than the crude flat 5-foot rule.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check_circle</span>
                <span><strong>Follow material codes:</strong> Sleeving and striker plates for CSST; approved risers for buried MDPE; bonding to rigid metal only.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check_circle</span>
                <span><strong>Commission thoroughly:</strong> Strength pressure test, precision tightness test (gauged to mbar), outdoor purging, and regulator lock-up checks (&le;20% rise).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* High-Contrast Conversion Banner CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-container to-primary text-white p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center sm:text-left">
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="bg-secondary-container text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
              Expert Gas Line Sizing &amp; Installation
            </span>
            <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-white leading-tight">
              Need certified LPG pipe sizing or commercial pipeline installation?
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Connect with the engineering specialists at <strong>Hi Tech Energy</strong>. We design, size, and install PESO-compliant commercial manifolds, industrial LOT vaporisers, and residential reticulated gas networks with zero pressure drops.
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
              <span>Book Engineering Site Visit</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <a
              href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-xl text-xs transition-all border border-white/20"
            >
              <span className="material-symbols-outlined text-sm">phone</span>
              <span>Call: {OFFICE_LOCATIONS.headOffice.phone}</span>
            </a>
            <a
              href="https://wa.me/919943999901?text=Hi%20Tech%20Energy%2C%20I%20need%20assistance%20with%20LPG%20pipe%20sizing%20and%20installation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-5 rounded-xl text-xs transition-all shadow"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
