import React from 'react';
import { Link } from 'react-router-dom';

export default function LotVsVotContent({ post }) {
  const { sections, comparisonTable, sizingTable } = post;

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
          If you're planning a new <Link to="/services/industrial-solutions" className="text-secondary font-semibold hover:underline">LPG gas pipeline installation service</Link> for your facility, or trying to work out why your current setup keeps acting up, settle this choice first. This post explains how each system works, what it costs to run, and how to tell which one your site needs.
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
        </div>

        {/* Section Image 1 */}
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
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
            <li>On a cold morning or during peak hours, the cylinders get so cold that ice forms on the outside. Gas pressure falls, and the burners lose power right when you need them.</li>
            <li>A cold cylinder also stops vaporising while there's still liquid inside. Those "empty" cylinders go back to the distributor carrying fuel you paid for and never burned.</li>
            <li>To get the gas moving again, staff often pour hot water over frozen cylinders. It's a real safety hazard and shouldn't happen on any site, let alone as a daily routine.</li>
            <li>Then there's space. At 0.5 kg/hr per cylinder, heavy users need large banks of connected cylinders, and those take up floor area you could put to better use.</li>
          </ul>

          {/* Callout box */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl text-amber-950 text-sm sm:text-base leading-relaxed">
            <strong className="block font-bold text-amber-900 mb-1">The hidden cost of a frozen VOT bank:</strong>
            Each cylinder returned with liquid inside is money lost, and each bucket of hot water is a safety violation waiting to be noticed. Over a year, the system that was cheaper to install can end up costing more to run.
          </div>
        </div>

        {/* Section Image 2 */}
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
      </section>

      {/* How LOT systems work - H2 */}
      <section id="how-lot-works" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          How LOT systems work
        </h2>

        {/* Liquid out, steady gas in */}
        <div id="steady-gas" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Liquid out, steady gas in
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            An LOT system uses special valves to draw liquid LPG from the bottom of the cylinder and pipe it to an external vaporiser. The vaporiser, either electric or water-based (thermodynamic), heats the liquid into gas. Since the heat comes from the vaporiser, the cylinder doesn't freeze and the output stays steady.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A single 33 kg LOT cylinder delivers about <strong>4 kg of gas per hour, 8 times</strong> what the same cylinder gives in a VOT setup.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Say your facility burns 20 kg of LPG per hour. On VOT, at 0.5 kg/hr per cylinder, you'd need around 40 cylinders connected to keep up. On LOT, at 4 kg/hr, you'd need around 5. That difference is why most high-demand sites that switch to a <Link to="/services/lot-pipeline" className="text-secondary font-semibold hover:underline">LOT pipeline service</Link> notice it within the first week, with far fewer cylinders to manage and no pressure dips halfway through a shift.
          </p>
        </div>

        {/* Section Image 3 */}
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

        {/* What changes day to day */}
        <div id="day-to-day" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            What changes day to day
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Heavy burners get constant pressure, whether it's a cold January morning or the third hour of a continuous run. Cylinders are used completely, so nothing goes back unburned. With 8 times the output per cylinder, LOT can cut the floor space needed for gas storage by up to 80%. And with no frost on the cylinders, nobody has a reason to reach for the hot water bucket.
          </p>
        </div>

        {/* Advanced LOT options */}
        <div id="advanced-lot" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Advanced LOT options
          </h3>
          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-secondary-container mt-1 shrink-0 text-lg">check_circle</span>
              <span><strong>SUPER LOT (SLOT):</strong> Adds an Electronic Auto Changeover Device (EACD). When one bank of cylinders runs low, the system switches to the next bank automatically, so nobody has to walk out and change it by hand.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-secondary-container mt-1 shrink-0 text-lg">check_circle</span>
              <span><strong>SLOT Plus:</strong> Uses Heaterless Vaporisers (HLV), which turn liquid LPG into gas using the warmth in ambient water instead of electric heating. That removes the electricity cost of vaporising altogether.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-secondary-container mt-1 shrink-0 text-lg">check_circle</span>
              <span><strong>The 450 kg Maxima LOT cylinder:</strong> Replaces fifteen 33 kg cylinders on its own, so the site handles fewer deliveries and fewer changeovers.</span>
            </li>
          </ul>
        </div>

        {/* Sizing at a glance Table */}
        <div id="sizing-table" className="scroll-mt-28 space-y-4 pt-2">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Sizing at a glance
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
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
                  <tr key={row.setup} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                    <td className="py-3 px-4 font-bold text-primary">{row.setup}</td>
                    <td className="py-3 px-4 text-gray-800 font-semibold">{row.output}</td>
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

        {/* Side by side Table */}
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

        {/* Section Image 4 */}
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

        {/* Setup cost vs running cost */}
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

        {/* Section Image 5 */}
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
