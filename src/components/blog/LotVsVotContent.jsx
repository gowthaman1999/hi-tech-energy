import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LotVsVotContent({ post }) {
  const { sections, comparisonTable, sizingTable } = post;

  // Interactive Flowchart State
  const [consumption, setConsumption] = useState(null); // 'under60' | 'over60'
  const [bankSpaceProblem, setBankSpaceProblem] = useState(null); // 'no' | 'yes'
  const [floorSpaceTight, setFloorSpaceTight] = useState(null); // 'yes' | 'no'
  const [cutPowerCost, setCutPowerCost] = useState(null); // 'no' | 'yes'

  const resetFlowchart = () => {
    setConsumption(null);
    setBankSpaceProblem(null);
    setFloorSpaceTight(null);
    setCutPowerCost(null);
  };

  return (
    <>
      {/* Introduction Paragraphs - Exact wording preserved */}
      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
        <p>
          Most industrial LPG problems get blamed on the gas supplier: weak flames during peak hours, cylinders covered in ice on a winter morning, a monthly bill that doesn't match what you burned. Call the agency and they'll usually tell you the gas is fine, and most of the time they're right.
        </p>
        <p>
          The trouble is more often in how the gas leaves the cylinder. Commercial and industrial sites draw it in one of two ways, Vapour Off-Take (VOT) or Liquid Off-Take (LOT). A system that doesn't match your load costs you every month in wasted fuel and lost production time.
        </p>
        <p>
          If you're planning a new <Link to="/" className="text-secondary font-semibold hover:underline">LPG gas pipeline installation service</Link> for your facility, or trying to work out why your current setup keeps acting up, settle this choice first. This post explains how each system works, what it costs to run, and how to tell which one your site needs.
        </p>
      </div>

      {/* Why the manifold matters - H2 */}
      <section id="why-manifold" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          Why the manifold matters
        </h2>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            LPG runs heat treatment, metal melting, powder coating, steam generation, and commercial cooking. It burns clean and efficiently, which is why so many facilities depend on it.
          </p>
          <p>
            Yet two plants buying the same gas from the same supplier can get very different results. One runs smoothly all day. The other fights pressure drops, frozen cylinders, and cylinders that go back to the distributor with fuel still inside. Usually the manifold system explains the gap.
          </p>
          <p>
            Three site details decide which manifold you need: how much fuel you burn per hour (in kg/hr), how much space you have for the gas bank, and how far the gas bank sits from where the gas is used.
          </p>
        </div>

        {/* Section Image 1: Dual Header Manifold Bank */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
          <img
            src={sections.manifold.image}
            alt={sections.manifold.imageAlt}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
            {sections.manifold.imageCaption}
          </figcaption>
        </figure>

        {/* Sub-H3: VOT and LOT in plain terms */}
        <div id="vot-lot-plain-terms" className="scroll-mt-28 space-y-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            VOT and LOT in plain terms
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            <strong>Vapour Off-Take (VOT)</strong> is the setup most people picture. The LPG inside the cylinder boils into vapour on its own, and the system draws that vapour from the top valve.
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            <strong>Liquid Off-Take (LOT)</strong> works the other way around. It draws liquid LPG from the bottom of the cylinder and sends it to an external vaporiser, which turns it into gas at a steady, controlled rate.
          </p>

          {/* Cutaway Diagram from Document Specification */}
          <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm pt-2">
            <img
              src={sections.cutaway?.image || '/images/blog/vot-vs-lot-cylinder-cutaway-diagram.webp'}
              alt={sections.cutaway?.imageAlt || 'Technical side-by-side cutaway diagram comparing VOT vapour withdrawal and LOT liquid dip tube with external vaporiser skid'}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
              {sections.cutaway?.imageCaption || 'Side-by-side cutaway: Left, a VOT cylinder drawing vapour from the top valve. Right, an LOT cylinder drawing liquid through a dip tube from the bottom into an external vaporiser skid.'}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* How VOT works and where it struggles - H2 */}
      <section id="how-vot-works" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          How VOT works and where it struggles
        </h2>

        {/* Sub-H3: Why VOT depends on the weather */}
        <div id="weather-dependence" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Why VOT depends on the weather
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Liquid LPG needs heat to turn into vapour. In a VOT system, that heat comes from the air around the cylinder, through the steel walls. At low demand this works well, because the cylinder takes in heat about as fast as it gives off gas.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            When demand goes up, the air can't warm the cylinder fast enough. The temperature inside drops, and the pressure drops with it. That's why VOT suits low to moderate loads, generally under 60 kg/hr, in places like small restaurants, office canteens, and small eateries. A standard 33 kg VOT cylinder gives only about 0.5 kg of gas per hour.
          </p>
        </div>

        {/* Sub-H3: What VOT does well */}
        <div id="what-vot-does-well" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            What VOT does well
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            VOT is cheap to set up. You need the cylinder bank and a basic pressure regulator, with no electrical equipment, no vaporiser, and no specialised maintenance. For a small kitchen with steady, modest demand, that's often all you need.
          </p>
        </div>

        {/* Sub-H3: Where VOT goes wrong */}
        <div id="where-vot-fails" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Where VOT goes wrong
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Push a VOT system past its limit and the problems pile up.
          </p>
          <ul className="space-y-3 text-base sm:text-lg text-gray-700 list-disc pl-5">
            <li>
              On a cold morning or during peak hours, the cylinders get so cold that ice forms on the outside. Gas pressure falls, and the burners lose power right when you need them.
            </li>
            <li>
              A cold cylinder also stops vaporising while there's still liquid inside. Those "empty" cylinders go back to the distributor carrying fuel you paid for and never burned.
            </li>
            <li>
              To get the gas moving again, staff often pour hot water over frozen cylinders. It's a real safety hazard and shouldn't happen on any site, let alone as a daily routine.
            </li>
            <li>
              Then there's space. At 0.5 kg/hr per cylinder, heavy users need large banks of connected cylinders, and those take up floor area you could put to better use.
            </li>
          </ul>

          {/* Section Image 2: Commercial VOT setup */}
          <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
            <img
              src={sections.vot.image}
              alt={sections.vot.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
              {sections.vot.imageCaption}
            </figcaption>
          </figure>

          {/* Callout Box: The hidden cost of a frozen VOT bank */}
          <div className="bg-amber-50/70 border-l-4 border-amber-500 p-5 rounded-r-xl space-y-2">
            <h4 className="font-bold text-amber-900 text-base">
              The hidden cost of a frozen VOT bank:
            </h4>
            <p className="text-amber-800 text-sm sm:text-base leading-relaxed">
              Each cylinder returned with liquid inside is money lost, and each bucket of hot water is a safety violation waiting to be noticed. Over a year, the system that was cheaper to install can end up costing more to run.
            </p>
          </div>
        </div>
      </section>

      {/* How LOT systems work - H2 */}
      <section id="how-lot-works" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          How LOT systems work
        </h2>

        {/* Sub-H3: Liquid out, steady gas in */}
        <div id="steady-gas" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Liquid out, steady gas in
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            An LOT system uses special valves to draw liquid LPG from the bottom of the cylinder and pipe it to an external vaporiser. The vaporiser, either electric or water-based (thermodynamic), heats the liquid into gas. Since the heat comes from the vaporiser, the cylinder doesn't freeze and the output stays steady.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A single 33 kg LOT cylinder delivers about 4 kg of gas per hour, 8 times what the same cylinder gives in a VOT setup.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Say your facility burns 20 kg of LPG per hour. On VOT, at 0.5 kg/hr per cylinder, you'd need around 40 cylinders connected to keep up. On LOT, at 4 kg/hr, you'd need around 5. That difference is why most high-demand sites that switch to a <Link to="/services/lot-pipeline" className="text-secondary font-semibold hover:underline">LOT pipeline service</Link> notice it within the first week, with far fewer cylinders to manage and no pressure dips halfway through a shift.
          </p>
        </div>

        {/* Section Image 3: LOT vaporiser skid */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
          <img
            src={sections.lot.image}
            alt={sections.lot.imageAlt}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
            {sections.lot.imageCaption}
          </figcaption>
        </figure>

        {/* Sub-H3: What changes day to day */}
        <div id="day-to-day" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            What changes day to day
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Heavy burners get constant pressure, whether it's a cold January morning or the third hour of a continuous run. Cylinders are used completely, so nothing goes back unburned. With 8 times the output per cylinder, LOT can cut the floor space needed for gas storage by up to 80%. And with no frost on the cylinders, nobody has a reason to reach for the hot water bucket.
          </p>
        </div>

        {/* Sub-H3: Advanced LOT options */}
        <div id="advanced-lot" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Advanced LOT options
          </h3>
          <ul className="space-y-3 text-base sm:text-lg text-gray-700 list-disc pl-5">
            <li>
              <strong>SUPER LOT (SLOT)</strong> adds an Electronic Auto Changeover Device (EACD). When one bank of cylinders runs low, the system switches to the next bank automatically, so nobody has to walk out and change it by hand.
            </li>
            <li>
              <strong>SLOT Plus</strong> uses Heaterless Vaporisers (HLV), which turn liquid LPG into gas using the warmth in ambient water instead of electric heating. That removes the electricity cost of vaporising altogether.
            </li>
            <li>
              <strong>The 450 kg Maxima LOT cylinder</strong> replaces fifteen 33 kg cylinders on its own, so the site handles fewer deliveries and fewer changeovers.
            </li>
          </ul>
        </div>

        {/* Sizing at a glance Table */}
        <div id="sizing-table" className="scroll-mt-28 space-y-4 pt-2">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Sizing at a glance
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 font-semibold">Setup</th>
                  <th className="py-3 px-4 font-semibold">Output per cylinder</th>
                  <th className="py-3 px-4 font-semibold">Storage footprint</th>
                  <th className="py-3 px-4 font-semibold">Pressure stability</th>
                  <th className="py-3 px-4 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sizingTable.map((row, idx) => (
                  <tr 
                    key={row.setup} 
                    className={idx % 2 === 0 ? 'bg-white hover:bg-orange-50/40 transition-colors' : 'bg-gray-50/70 hover:bg-orange-50/40 transition-colors'}
                  >
                    <td className="py-3 px-4 font-bold text-primary">{row.setup}</td>
                    <td className="py-3 px-4 font-semibold text-secondary">{row.output}</td>
                    <td className="py-3 px-4 text-gray-700">{row.footprint}</td>
                    <td className="py-3 px-4 text-gray-700">{row.stability}</td>
                    <td className="py-3 px-4 text-gray-600">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LOT vs VOT compared - H2 */}
      <section id="comparison" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          LOT vs VOT compared
        </h2>

        {/* Sub-H3: Side by side */}
        <div id="side-by-side" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Side by side
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 font-semibold w-1/3">Feature</th>
                  <th className="py-3 px-4 font-semibold w-1/3">Vapour Off-Take (VOT)</th>
                  <th className="py-3 px-4 font-semibold w-1/3 bg-primary-container text-secondary-fixed-dim">
                    Liquid Off-Take (LOT)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonTable.map((row, idx) => (
                  <tr 
                    key={row.feature} 
                    className={idx % 2 === 0 ? 'bg-white hover:bg-orange-50/40 transition-colors' : 'bg-gray-50/70 hover:bg-orange-50/40 transition-colors'}
                  >
                    <td className="py-3 px-4 font-medium text-gray-800">{row.feature}</td>
                    <td className="py-3 px-4 text-gray-600">{row.vot}</td>
                    <td className="py-3 px-4 font-semibold text-primary bg-orange-50/30">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                        {row.lot}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section Image 4: PRS Skid */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
          <img
            src={sections.prs.image}
            alt={sections.prs.imageAlt}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
            {sections.prs.imageCaption}
          </figcaption>
        </figure>

        {/* Sub-H3: Setup cost vs running cost */}
        <div id="cost-analysis" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Setup cost vs running cost
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Most decisions stall on cost. LOT costs more to set up because you're paying for a vaporiser, the piping, and a <Link to="/services/lot-primary-lines" className="text-secondary font-semibold hover:underline">Pressure Reducing Skid (PRS)</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            In return, every kilo of gas you buy gets burned, production doesn't stop for pressure drops, less space goes to cylinder storage, and staff spend fewer hours swapping cylinders. For facilities using more than 40 cylinders a day, the setup cost typically pays for itself in under 4 years.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            If the upfront spend is the main hurdle, some gas suppliers offer a Build-Own-Maintain (BOM) model. The supplier installs and owns the LOT system, and you pay for the gas you use, with no capital outlay on your side.
          </p>
        </div>
      </section>

      {/* Which system does your facility need? - H2 */}
      <section id="which-system" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          Which system does your facility need?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* VOT criteria */}
          <div id="vot-criteria" className="bg-gray-50 border border-gray-200 p-6 rounded-2xl space-y-3">
            <h3 className="font-headline-md text-lg font-bold text-gray-800 flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-600">restaurant</span>
              VOT makes sense if:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-gray-500 text-sm mt-0.5">check</span>
                <span>Your total consumption stays under 60 kg/hr</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-gray-500 text-sm mt-0.5">check</span>
                <span>You run a small commercial kitchen, a canteen, or a few light burners</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-gray-500 text-sm mt-0.5">check</span>
                <span>Your budget for upfront equipment is tight and you have plenty of space for a cylinder bank</span>
              </li>
            </ul>
          </div>

          {/* LOT criteria */}
          <div id="lot-criteria" className="bg-emerald-50/60 border border-emerald-200/80 p-6 rounded-2xl space-y-3">
            <h3 className="font-headline-md text-lg font-bold text-emerald-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-600">factory</span>
              LOT makes sense if:
            </h3>
            <ul className="space-y-2 text-sm text-emerald-950">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                <span>You run a high-demand site such as a hotel, hospital, metal processing unit, heat treatment plant, powder coating line, or steam boiler</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                <span>You already deal with frozen cylinders, weak flames, or gas left in "empty" cylinders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                <span>Space for gas storage is limited</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Image 5: Industrial burners */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
          <img
            src={sections.burners.image}
            alt={sections.burners.imageAlt}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
            {sections.burners.imageCaption}
          </figcaption>
        </figure>

        <div className="bg-primary/5 border border-primary/10 p-5 rounded-2xl text-gray-800 text-base leading-relaxed space-y-2">
          <p>
            <strong>A quick gut check:</strong> if anyone on your site has ever poured hot water on a cylinder to keep production going, your VOT system is already past its limit.
          </p>
          <p className="text-sm text-gray-600">
            Both systems are built for commercial and industrial sites. If you're setting up gas for homes or an apartment complex, the comparison to look at is <Link to="/blog/domestic-lpg-pipeline-vs-cylinder" className="text-secondary font-semibold hover:underline">domestic LPG pipeline vs LPG cylinder</Link>, which comes with its own setup and costs.
          </p>
        </div>

        {/* Decision flowchart - As in Google Document */}
        <div id="decision-flowchart" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-200/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
              Decision flowchart
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Follow the decision flowchart below to quickly determine which LPG manifold architecture matches your actual load and floor requirements:
          </p>

          {/* Flowchart Diagram Graphic */}
          <figure className="rounded-2xl overflow-hidden border border-gray-300 bg-[#121212] shadow-xl my-6 max-w-2xl mx-auto">
            <div className="p-2 sm:p-4 bg-[#181818] flex justify-center">
              <img
                src={sections.flowchart?.image || '/images/blog/lot-vs-vot-decision-flowchart.webp'}
                alt={sections.flowchart?.imageAlt || 'Official Decision Flowchart for LOT vs VOT Manifold System Selection'}
                width={616}
                height={577}
                loading="lazy"
                className="w-full max-w-lg h-auto object-contain rounded-lg"
              />
            </div>
            <figcaption className="p-3.5 bg-neutral-900 text-xs text-neutral-300 text-center border-t border-neutral-800">
              Official Decision Tree: Hourly Consumption (kg/hr) → Space Availability → System Recommendation.
            </figcaption>
          </figure>

          {/* Interactive Decision Assistant Tool */}
          <div className="bg-gradient-to-br from-primary/5 via-white to-secondary-container/5 border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-2xl">alt_route</span>
                <h4 className="font-bold text-primary text-lg sm:text-xl">
                  Interactive System Sizing Tool
                </h4>
              </div>
              {(consumption || bankSpaceProblem || floorSpaceTight || cutPowerCost) && (
                <button
                  onClick={resetFlowchart}
                  className="text-xs text-primary font-semibold hover:text-secondary underline cursor-pointer"
                >
                  Reset Calculator
                </button>
              )}
            </div>
            <p className="text-sm text-gray-600">
              Answer the questions below to simulate the decision flowchart for your facility:
            </p>

            {/* Step 1: Consumption */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-800">
                1. What is your total hourly LPG consumption?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setConsumption('under60');
                    setFloorSpaceTight(null);
                    setCutPowerCost(null);
                  }}
                  className={`p-4 rounded-xl border text-left font-semibold text-sm transition-all cursor-pointer ${
                    consumption === 'under60'
                      ? 'border-secondary-container bg-secondary-container/10 text-primary shadow-sm ring-2 ring-secondary-container/30'
                      : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <span className="block font-bold">Under 60 kg/hr</span>
                  <span className="text-xs font-normal text-gray-500">Commercial kitchens, canteens, small ovens</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setConsumption('over60');
                    setBankSpaceProblem(null);
                  }}
                  className={`p-4 rounded-xl border text-left font-semibold text-sm transition-all cursor-pointer ${
                    consumption === 'over60'
                      ? 'border-secondary-container bg-secondary-container/10 text-primary shadow-sm ring-2 ring-secondary-container/30'
                      : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <span className="block font-bold">Over 60 kg/hr</span>
                  <span className="text-xs font-normal text-gray-500">Hotels, industrial furnaces, boilers, metal plants</span>
                </button>
              </div>
            </div>

            {/* Step 2A: Under 60 branch */}
            {consumption === 'under60' && (
              <div className="space-y-3 pt-4 border-t border-gray-100 animate-fadeIn">
                <label className="block text-sm font-bold text-gray-800">
                  2. Is space for a cylinder bank a problem?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setBankSpaceProblem('no')}
                    className={`p-3.5 rounded-xl border text-center font-semibold text-sm transition-all cursor-pointer ${
                      bankSpaceProblem === 'no'
                        ? 'border-secondary-container bg-secondary-container/10 text-primary ring-2 ring-secondary-container/30'
                        : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    No (Ample Yard Space)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBankSpaceProblem('yes')}
                    className={`p-3.5 rounded-xl border text-center font-semibold text-sm transition-all cursor-pointer ${
                      bankSpaceProblem === 'yes'
                        ? 'border-secondary-container bg-secondary-container/10 text-primary ring-2 ring-secondary-container/30'
                        : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    Yes (Limited Space)
                  </button>
                </div>
              </div>
            )}

            {/* Step 2B: Over 60 branch */}
            {consumption === 'over60' && (
              <div className="space-y-4 pt-4 border-t border-gray-100 animate-fadeIn">
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-gray-800">
                    2. Is floor space tight?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setFloorSpaceTight('yes');
                        setCutPowerCost(null);
                      }}
                      className={`p-3.5 rounded-xl border text-center font-semibold text-sm transition-all cursor-pointer ${
                        floorSpaceTight === 'yes'
                          ? 'border-secondary-container bg-secondary-container/10 text-primary ring-2 ring-secondary-container/30'
                          : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      Yes (Very Tight)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFloorSpaceTight('no')}
                      className={`p-3.5 rounded-xl border text-center font-semibold text-sm transition-all cursor-pointer ${
                        floorSpaceTight === 'no'
                          ? 'border-secondary-container bg-secondary-container/10 text-primary ring-2 ring-secondary-container/30'
                          : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      No (Standard Industrial Yard)
                    </button>
                  </div>
                </div>

                {floorSpaceTight === 'no' && (
                  <div className="space-y-3 pt-3 animate-fadeIn">
                    <label className="block text-sm font-bold text-gray-800">
                      3. Want to cut power costs and manual changeovers?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setCutPowerCost('no')}
                        className={`p-3.5 rounded-xl border text-center font-semibold text-sm transition-all cursor-pointer ${
                          cutPowerCost === 'no'
                            ? 'border-secondary-container bg-secondary-container/10 text-primary ring-2 ring-secondary-container/30'
                            : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        No (Standard Electric LOT)
                      </button>
                      <button
                        type="button"
                        onClick={() => setCutPowerCost('yes')}
                        className={`p-3.5 rounded-xl border text-center font-semibold text-sm transition-all cursor-pointer ${
                          cutPowerCost === 'yes'
                            ? 'border-secondary-container bg-secondary-container/10 text-primary ring-2 ring-secondary-container/30'
                            : 'border-gray-200 bg-white hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        Yes (Zero Power &amp; Auto Changeover)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Recommendation Result Card */}
            {((consumption === 'under60' && bankSpaceProblem) ||
              (consumption === 'over60' && floorSpaceTight === 'yes') ||
              (consumption === 'over60' && floorSpaceTight === 'no' && cutPowerCost)) && (
              <div className="mt-6 p-6 rounded-2xl bg-white border-2 border-secondary-container shadow-md animate-fadeIn">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary-container mb-1 block">
                  Flowchart Recommendation
                </span>

                {consumption === 'under60' && bankSpaceProblem === 'no' && (
                  <div>
                    <h5 className="font-headline-md text-2xl font-bold text-primary mb-2">
                      Vapour Off-Take (VOT) System
                    </h5>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Because your load is under 60 kg/hr and yard space is not an obstacle, a commercial VOT cylinder bank provides the lowest initial investment with minimal equipment complexity.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-600 mb-6">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">~0.5 kg/hr per cylinder</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">Low CapEx</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">No Vaporiser Required</span>
                    </div>
                    <Link
                      to="/services/commercial-lpg-pipeline"
                      className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-primary-container transition-all"
                    >
                      Explore VOT Pipeline Services
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                )}

                {consumption === 'under60' && bankSpaceProblem === 'yes' && (
                  <div>
                    <h5 className="font-headline-md text-2xl font-bold text-primary mb-2">
                      Liquid Off-Take (LOT) System
                    </h5>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Even with consumption under 60 kg/hr, space constraints make LOT the superior choice. Delivering ~4 kg/hr per cylinder cuts required cylinder storage footprint by up to 80% while eliminating cold weather freezing.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-600 mb-6">
                      <span className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full">~4 kg/hr per cylinder</span>
                      <span className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full">80% Less Floor Space</span>
                      <span className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full">Zero Unburned Fuel</span>
                    </div>
                    <Link
                      to="/services/lot-pipeline"
                      className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-primary-container transition-all"
                    >
                      Explore LOT Pipeline Services
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                )}

                {consumption === 'over60' && floorSpaceTight === 'yes' && (
                  <div>
                    <h5 className="font-headline-md text-2xl font-bold text-primary mb-2">
                      450 kg Maxima LOT System
                    </h5>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      High-demand facilities with tight yards benefit most from 450 kg Maxima LOT installations. Each Maxima cylinder replaces fifteen standard 33 kg cylinders, dramatically reducing delivery traffic, footprint, and changeovers.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-600 mb-6">
                      <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">Replaces 15 x 33 kg Cylinders</span>
                      <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">Ultra-compact Footprint</span>
                      <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">High Industrial Demand</span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-primary-container transition-all"
                    >
                      Request 450 kg Maxima Sizing
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                )}

                {consumption === 'over60' && floorSpaceTight === 'no' && cutPowerCost === 'no' && (
                  <div>
                    <h5 className="font-headline-md text-2xl font-bold text-primary mb-2">
                      Standard Industrial LOT System
                    </h5>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      An engineered LOT manifold connected to a high-capacity electric or thermodynamic vaporiser and dual-stage Pressure Reducing Skid (PRS) guarantees rock-solid burner pressure across 24/7 continuous operations.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-gray-600 mb-6">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Steady High Output</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">PRS Pressure Stability</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Continuous Shifts</span>
                    </div>
                    <Link
                      to="/services/lot-pipeline"
                      className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-primary-container transition-all"
                    >
                      View Industrial LOT Systems
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                )}

                {consumption === 'over60' && floorSpaceTight === 'no' && cutPowerCost === 'yes' && (
                  <div>
                    <h5 className="font-headline-md text-2xl font-bold text-primary mb-2">
                      SLOT Plus with Heaterless Vaporiser (HLV)
                    </h5>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      The premier energy-saving solution: ambient-water thermodynamic vaporisation eliminates electric heating power bills, while the Electronic Auto Changeover Device (EACD) automates switching between cylinder banks with zero human intervention.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-emerald-800 mb-6">
                      <span className="bg-emerald-50 px-3 py-1 rounded-full">Zero Electricity for Vaporisation</span>
                      <span className="bg-emerald-50 px-3 py-1 rounded-full">Electronic Auto Changeover</span>
                      <span className="bg-emerald-50 px-3 py-1 rounded-full">Maximum Operational Efficiency</span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-primary-container transition-all"
                    >
                      Enquire for SLOT Plus Installation
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* VOT or LOT: the short version - H2 */}
      <section id="short-version" className="scroll-mt-28 space-y-4 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          VOT or LOT: the short version
        </h2>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            If your facility uses a modest amount of gas and has room to spare, VOT is cheap to install and easy to run. If you run heavy burners, work with limited space, or fight frozen cylinders every winter, VOT is probably costing you more than you think. LOT costs more on day one and pays that back through full fuel use and steady pressure.
          </p>
          <p>
            If you're not sure where your site falls, start with your actual hourly consumption. That number usually points to the right system.
          </p>
          <p>
            Hi Tech Energy is PESO Standard and ISO certified, and we install both <Link to="/services/commercial-lpg-pipeline" className="text-secondary font-semibold hover:underline">Commercial VOT line systems</Link> and full <Link to="/services/lot-pipeline" className="text-secondary font-semibold hover:underline">industrial LOT setups</Link>. If your load has outgrown cylinder banks, we'll size the vaporiser, manifold, and pressure reducing skid to your actual consumption.
          </p>
        </div>
      </section>
    </>
  );
}
