import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS } from '../../data/hitechData';

export default function LpgManifoldVsGasHeaderArticle({ post }) {
  const { sections, comparisonTable } = post;

  return (
    <div className="space-y-12 text-left">
      {/* Lead Hook Paragraphs */}
      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
        <p className="text-lg sm:text-xl font-medium text-gray-900 border-l-4 border-secondary-container pl-4 py-1 italic bg-orange-50/40 rounded-r-xl">
          If you're planning an LPG pipeline for a restaurant, hotel, hospital, factory, lab, or apartment building, you'll see two terms in almost every quotation: manifold and header. People often use them as if they mean the same thing, but they do two different jobs in the same system.
        </p>
        <p>
          The manifold collects gas from your cylinders. The header carries that gas to the places that use it. When either one is wrong, you'll notice it in daily operation. Burners lose flame during the lunch rush, cylinders frost over, or gas runs out halfway through service.
        </p>
        <p>
          This guide covers how each one works, where they differ, the mistakes we see most often on site, and how to work out what your setup needs.
        </p>
      </div>

      {/* Why your gas supply fails at the worst possible time - H2 */}
      <section id="fails-at-worst-time" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Operational Diagnostics</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Why your gas supply fails at the worst possible time
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <div id="single-cylinders-problem" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              The problem with running a business off single cylinders
            </h3>
            <p>
              Most commercial kitchens start with one or two 19 kg cylinders, a rubber hose, a regulator, and a burner. That works until the business grows.
            </p>
            <p>
              Then the cylinder runs empty in the middle of lunch service, and someone has to drag a replacement in while orders wait. Hoses start running across the floor. With two burners on full flame, one cylinder can't keep up and the flame drops.
            </p>
            <p>
              This is the <Link to="/blog/domestic-lpg-pipeline-vs-cylinder" className="text-secondary font-semibold hover:underline">LPG pipeline vs LPG cylinder</Link> decision most growing businesses reach. Adding more cylinders around the kitchen won't fix it. You need a proper gas pipeline system, and that's where manifolds and headers come in.
            </p>
          </div>

          <div id="supply-vs-distribution" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Supply side vs distribution side
            </h3>
            <p>
              An LPG manifold sits at the supply end. It connects a bank of cylinders and feeds their combined gas into one outlet, so supply stays steady.
            </p>
            <p>
              A gas header system sits on the distribution side. It's the main pipe that takes that gas and splits it into branch lines, each going to a burner, appliance, floor, or lab bench, so every point of use gets an even, controlled supply.
            </p>
            <p>
              A small setup might only need a manifold. Larger ones almost always need both.
            </p>
          </div>

          {/* Quick Supply vs Distribution Comparison Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-primary/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-secondary-container text-2xl">propane_tank</span>
                <h4 className="font-bold text-primary text-base">The Supply Side: LPG Manifold</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Aggregates high-pressure gas from multiple cylinders outdoors. Handles vaporization capacity, cylinder changeovers, and primary pressure reduction.
              </p>
            </div>
            <div className="bg-orange-50/50 border border-orange-200 rounded-xl p-5 hover:border-secondary-container/50 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-secondary-container text-2xl">alt_route</span>
                <h4 className="font-bold text-primary text-base">The Distribution Side: Gas Header</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Distributes regulated gas throughout indoor cooking lines, boiler rooms, or floors. Offers individual isolation valves, secondary regulators, and branch take-offs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How each system works - H2 */}
      <section id="how-each-works" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Engineering Anatomy</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            How each system works
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <div id="how-manifold-works" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              How an LPG manifold works
            </h3>
            <p>
              Picture a row of cylinders, each connected to a common pipe by a short high-pressure hose called a pigtail. That common pipe is the manifold. Gas from every open cylinder flows into it, then through a regulator into your pipeline.
            </p>
            <p>
              A properly built manifold usually has:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li><strong>Pigtails</strong> (copper or stainless steel braided high-pressure hoses) connecting each cylinder valve to the manifold</li>
              <li><strong>Non-return valves (NRVs)</strong> at each connection, so gas doesn't flow back out when you disconnect a cylinder to replace it</li>
              <li><strong>Isolation valves</strong> to shut off one side, or one cylinder, at a time</li>
              <li><strong>A pressure gauge</strong> showing supply pressure</li>
              <li><strong>A first-stage regulator</strong> that brings cylinder pressure down to a steady pipeline pressure</li>
            </ul>

            {/* In-content image 1: Manifold Bank */}
            {sections?.manifoldBank && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.manifoldBank.image}
                  alt={sections.manifoldBank.imageAlt}
                  width="800"
                  height="450"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.manifoldBank.imageCaption}</span>
                </figcaption>
              </figure>
            )}

            <p>
              Linking cylinders does more than add storage. LPG sits in the cylinder as a liquid and turns into vapour as you draw gas. Each cylinder can only vaporise so much gas per hour, and that rate drops in cooler weather and as the cylinder empties. Connect several cylinders together and they share the load, so none of them is pushed past what it can deliver.
            </p>
          </div>

          <div id="how-header-works" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              How a gas header system works
            </h3>
            <p>
              After the manifold and regulator, the gas enters a main pipe that runs through the building or along a wall. That pipe is the header.
            </p>
            <p>
              The header has tapping points along its length, and each one feeds a branch line with its own isolation valve. In a kitchen, one branch might go to the tandoor, another to the bulk cooking range, and another to the dishwasher's booster heater. In a lab, each branch might serve a different bench. In an apartment building, each branch might feed a floor or a single flat's meter.
            </p>
            <p>
              A good header system usually has:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li><strong>A main header pipe</strong> sized for the total gas demand of every connected appliance</li>
              <li><strong>Branch isolation valves</strong>, so you can shut one line for repair without shutting the whole kitchen or building</li>
              <li><strong>Second-stage regulators</strong> on branches where appliances need a lower, specific pressure</li>
              <li><strong>A pressure gauge</strong> to monitor distribution pressure</li>
              <li><strong>A purge or drain point</strong> for maintenance and pressure testing</li>
            </ul>

            {/* In-content image 2: Commercial Kitchen Gas Header */}
            {sections?.kitchenHeader && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.kitchenHeader.image}
                  alt={sections.kitchenHeader.imageAlt}
                  width="800"
                  height="450"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.kitchenHeader.imageCaption}</span>
                </figcaption>
              </figure>
            )}

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-sm sm:text-base leading-relaxed">
              <strong>Helpful Analogy:</strong> If it helps, compare it to water in a house. The manifold is the overhead tank and the connection that fills it, and the header is the main pipe running to every tap.
            </div>
          </div>

          <div id="header-layouts" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Single-line, multi-outlet, and loop headers
            </h3>
            <p>
              Headers aren't all laid out the same way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <span className="material-symbols-outlined text-secondary-container">trending_flat</span>
                  Single-Line Headers
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Run in one direction with branches coming off along the way. They suit small and medium kitchens where the appliances sit along one wall.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <span className="material-symbols-outlined text-secondary-container">hub</span>
                  Multi-Outlet Headers
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Group several valved outlets together near the supply point. You'll find them in labs and smaller commercial setups where branch lines fan out from one spot.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <span className="material-symbols-outlined text-secondary-container">all_inclusive</span>
                  Loop / Ring Headers
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Form a closed circuit, so gas can reach any point from two directions. In large kitchens, hostels, hospitals, and industrial plants, this keeps pressure even at the far end of the line, and the last burner runs as strongly as the first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparing purpose, capacity, safety, and maintenance - H2 */}
      <section id="comparing-systems" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Direct Comparison</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Comparing purpose, capacity, safety, and maintenance
          </h2>
        </div>

        {/* Responsive Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm my-6 bg-white">
          <table className="w-full text-left text-sm text-gray-700 min-w-[620px]">
            <thead className="bg-primary text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4 font-semibold w-1/4">Factor</th>
                <th className="py-3.5 px-4 font-semibold w-3/8 border-l border-white/20">LPG manifold</th>
                <th className="py-3.5 px-4 font-semibold w-3/8 border-l border-white/20">Gas header system</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonTable.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70 hover:bg-orange-50/30'}>
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">{row.factor}</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800 leading-snug">{row.manifold}</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800 leading-snug">{row.header}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <div id="supply-capacity-flame" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Supply capacity and flame stability
            </h3>
            <p>
              When flames drop as soon as several burners are on, the cause is usually on the supply side. Either the manifold has too few cylinders for the load, or the cylinders are being pushed past their vaporisation rate. Watch for frost or condensation on the outside of the cylinders. It means the liquid inside is cooling because it's vaporising faster than heat can reach it. People call this <Link to="/blog/lpg-gas-freezing" className="text-secondary font-semibold hover:underline">LPG cylinder freezing</Link>, and it's one of the clearest signs your cylinder bank is too small.
            </p>
            <p>
              If the flame is fine near the cylinder bank but weak at the far end of the kitchen, look at the distribution side instead. The header may be too narrow, too long for its diameter, or feeding too many branches. Correct <Link to="/blog/lpg-pipe-sizing" className="text-secondary font-semibold hover:underline">LPG pipe sizing</Link> depends on total gas demand, the length of each run, and how much pressure drop the appliances can tolerate. It should be calculated, not guessed.
            </p>
          </div>

          <div id="materials-build-quality" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Materials and build quality
            </h3>
            <p>
              Everything on the manifold side handles higher pressure. Pigtails should be purpose-made high-pressure hoses, and the manifold pipes and fittings need to be rated for LPG service.
            </p>
            <p>
              Header and branch lines usually use seamless or heavy-grade steel pipe for the main runs, with copper for the final connections to appliances. Rubber hose should never be used as permanent pipeline.
            </p>
            <p>
              Whatever materials go in, they should meet the relevant Indian standard. <strong>IS 6044 (Part 1)</strong> is the code of practice for LPG cylinder installations in commercial, industrial, and domestic settings, so it's worth asking your installer about it.
            </p>
          </div>

          <div id="safety-features" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Safety
            </h3>
            <p>
              The manifold's safety job is holding gas at high pressure. NRVs stop gas escaping during cylinder changes. The cylinder bank should sit outside the building in a well-ventilated area, away from drains, basements, and pits. LPG is heavier than air, so leaked gas collects at low points instead of drifting away.
            </p>
            <p>
              The header's safety job is control. Branch valves let you shut off one appliance or area immediately, and in a fire or leak you can isolate a single line without shutting down the whole facility.
            </p>
          </div>

          <div id="maintenance-checks" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Maintenance
            </h3>
            <p>
              Manifolds need regular checks on pigtails, NRVs, valves, and regulators. Pigtails wear, crack, and harden over time, so replace them on schedule instead of waiting for one to fail.
            </p>
            <p>
              Headers need periodic leak tests across joints and valves, checks on branch regulators, and corrosion inspections, especially on exposed outdoor runs and in humid or coastal areas.
            </p>
          </div>
        </div>
      </section>

      {/* Manifold types: manual vs auto changeover - H2 */}
      <section id="manifold-types" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Cylinder Bank Management</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Manifold types: manual vs auto changeover
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            Once you know you need a manifold, the next choice is how it switches between cylinders.
          </p>

          <div id="manual-changeover" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Manual changeover manifolds
            </h3>
            <p>
              A manual manifold has two banks of cylinders, a service side and a reserve side. When the service side runs out, someone turns a valve to switch to the reserve, then replaces the empties.
            </p>
            <p>
              It's simple and dependable, but it relies on staff. If nobody notices the pressure dropping, the kitchen loses gas before anyone switches over.
            </p>
          </div>

          <div id="auto-changeover" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Auto changeover manifolds
            </h3>
            <p>
              An auto changeover manifold uses a changeover regulator. When the service bank pressure falls, it switches to the reserve bank by itself. Most have an indicator, often green and red, so staff can see which side is running and which side needs fresh cylinders.
            </p>

            {/* In-content image 3: Auto Changeover Regulator */}
            {sections?.autoChangeover && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.autoChangeover.image}
                  alt={sections.autoChangeover.imageAlt}
                  width="800"
                  height="450"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.autoChangeover.imageCaption}</span>
                </figcaption>
              </figure>
            )}

            <p>
              For restaurants, hotels, hospitals, and anywhere gas can't stop mid-operation, auto changeover is usually worth having. Supply carries on, and staff replace the empty bank when the indicator turns.
            </p>
          </div>

          <div id="when-to-use-lot" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              When a manifold isn't enough: LOT systems
            </h3>
            <p>
              A cylinder bank can only deliver so much gas as vapour. Large industrial users and very busy kitchens can hit that limit even with many cylinders connected.
            </p>
            <p>
              At that point the setup usually moves to a Liquid Off-Take (LOT) system. It draws liquid LPG from larger cylinders and turns it into gas with a vaporiser, which gives much higher and steadier output than drawing vapour.
            </p>
            <p>
              That's what the <Link to="/blog/lot-vs-vot" className="text-secondary font-semibold hover:underline">LOT vs VOT</Link> comparison comes down to. A VOT (Vapour Off-Take) system, which is what a standard cylinder manifold is, depends on the cylinders vaporising gas on their own, so temperature and cylinder size limit its output. An LOT system doesn't rely on natural vaporisation, so it suits heavy, continuous use. If your manifold keeps frosting up even with a full cylinder bank, ask whether LOT would suit you better.
            </p>
          </div>
        </div>
      </section>

      {/* Matching the system to your setup - H2 */}
      <section id="matching-system" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Architecture Recommendation</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Matching the system to your setup
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-base">
              <span className="material-symbols-outlined text-secondary-container">store</span>
              Small Restaurant or Café (1-3 Burners)
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              With a few burners close together, a manifold with auto changeover and a short pipeline is often enough, without a full header.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-base">
              <span className="material-symbols-outlined text-secondary-container">restaurant</span>
              Large Commercial Kitchen, Hotel, or Hostel
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Requires a manifold plus a <Link to="/services/gas-header-system" className="text-secondary font-semibold hover:underline">header system</Link>, so each cooking section has its own isolated branch.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-base">
              <span className="material-symbols-outlined text-secondary-container">local_hospital</span>
              Hospital or Institutional Kitchen
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              An auto changeover manifold, a header with branch isolation, and leak detection with automatic shut-off.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-base">
              <span className="material-symbols-outlined text-secondary-container">apartment</span>
              Apartment Buildings & Gated Communities
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              A central cylinder bank with a reticulated header network feeding each floor or flat, usually with individual meters. A <Link to="/services/domestic-lpg-pipeline" className="text-secondary font-semibold hover:underline">domestic LPG pipeline service</Link> for residential buildings means families no longer store and change cylinders inside their homes.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-base">
              <span className="material-symbols-outlined text-secondary-container">science</span>
              Chemistry & Research Labs
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              A compact multi-outlet header with a valve at each bench, plus leak detection.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-base">
              <span className="material-symbols-outlined text-secondary-container">factory</span>
              Industrial Plants with Heavy Consumption
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              An LOT system with a vaporiser, feeding a header that supplies each process line.
            </p>
          </div>
        </div>
      </section>

      {/* Pressure control, leak detection, and protection - H2 */}
      <section id="pressure-leak-protection" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Safety Engineering</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Pressure control, leak detection, and protection
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <div id="two-stage-pressure" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Getting pressure right at every stage
            </h3>
            <p>
              Cylinder pressure changes with temperature. It rises on hot afternoons and falls on cool mornings, while appliances need steady pressure to burn cleanly.
            </p>
            <p>
              Well-designed systems handle this with two-stage regulation. The first-stage regulator at the manifold brings cylinder pressure down to a steady pipeline pressure, and second-stage regulators near the appliances lower it again to what each burner needs. Flame size then stays the same whatever the weather or however full the cylinders are.
            </p>
          </div>

          <div id="leak-detection-shutoff" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Gas leak detection and auto shut-off
            </h3>
            <p>
              Commercial and industrial setups should have gas leak detectors as standard. A detector mounted near the floor, where LPG settles, picks up leaking gas and sounds an alarm. Connected to a solenoid shut-off valve on the supply line, it can also cut the gas before the concentration becomes dangerous.
            </p>

            {/* In-content image 4: Gas Leak Detector Solenoid */}
            {sections?.safetyDetection && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.safetyDetection.image}
                  alt={sections.safetyDetection.imageAlt}
                  width="800"
                  height="450"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.safetyDetection.imageCaption}</span>
                </figcaption>
              </figure>
            )}

            <p>
              Some systems link to a central <Link to="/services/gas-control-panel-system" className="text-secondary font-semibold hover:underline">gas control panel</Link> that shows supply status, pressure, and alarms in one place. In a large kitchen or building, that saves a lot of guesswork during an emergency.
            </p>
          </div>

          <div id="protecting-pipes" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Protecting pipes and fittings
            </h3>
            <p>
              Exposed pipes need protection from trolleys and from heavy equipment being moved past. Outdoor sections should be painted or coated against corrosion. Clamp pipes securely along their run, and pass them through a sleeve wherever they go through a wall so the pipe isn't stressed or damaged.
            </p>
          </div>
        </div>
      </section>

      {/* Common mistakes we see on site - H2 */}
      <section id="common-mistakes" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Field Insights</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Common mistakes we see on site
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-red-50/50 border border-red-200">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 flex items-center gap-2 text-red-900">
              <span className="material-symbols-outlined text-red-600">cancel</span>
              1. Mixing up the two systems
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Some quotations use "manifold" and "header" loosely, and the buyer ends up with one when they needed both. A manifold without a proper header leaves you with long, unbranched lines and no way to isolate appliances. A header fed by an undersized manifold distributes gas well, but there isn't enough gas to distribute.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-red-50/50 border border-red-200">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 flex items-center gap-2 text-red-900">
              <span className="material-symbols-outlined text-red-600">cancel</span>
              2. Undersizing the cylinder bank
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We see this one most. The manifold is built for today's burners, the kitchen adds two ranges a year later, and the cylinders start frosting while the flames weaken. Size the manifold for the load you expect, not only the load you have now.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-red-50/50 border border-red-200">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 flex items-center gap-2 text-red-900">
              <span className="material-symbols-outlined text-red-600">cancel</span>
              3. Using rubber hose where pipe should be
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Rubber hoses crack and harden with age, and rodents chew them. They're meant for short, visible appliance connections, not permanent lines behind equipment or through walls.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-red-50/50 border border-red-200">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 flex items-center gap-2 text-red-900">
              <span className="material-symbols-outlined text-red-600">cancel</span>
              4. Cylinder banks in the wrong place
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Cylinders kept indoors, near a drain, under a staircase, or in a basement are dangerous because leaked LPG gathers at low points. Put the cylinder bank outside, in a ventilated spot that's easy to reach for changes.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-red-50/50 border border-red-200">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 flex items-center gap-2 text-red-900">
              <span className="material-symbols-outlined text-red-600">cancel</span>
              5. Skipping pressure testing
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Pressure test every new or modified pipeline before gas goes in, and check every joint with soap solution or a detector. Never use a flame to look for leaks.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-red-50/50 border border-red-200">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 flex items-center gap-2 text-red-900">
              <span className="material-symbols-outlined text-red-600">cancel</span>
              6. Not checking licensing requirements
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Storing larger quantities of LPG cylinders falls under PESO (Petroleum and Explosives Safety Organisation) rules, and above certain limits you'll need a licence and an approved layout. Check this before you plan a large cylinder bank, not after it's built.
            </p>
          </div>
        </div>
      </section>

      {/* What a proper installation involves - H2 */}
      <section id="proper-installation" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Execution Roadmap</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            What a proper installation involves
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            Only a qualified, experienced installer who follows PESO guidelines and the relevant IS codes should do LPG pipeline work. It still helps to know what a proper job looks like, so you can judge any <Link to="/services/commercial-lpg-pipeline" className="text-secondary font-semibold hover:underline">LPG gas pipeline installation service</Link> you're considering and check the work as it happens.
          </p>

          <div id="installation-phase-1" className="scroll-mt-28 space-y-2 p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
              <h3 className="font-bold text-gray-900 text-lg">Phase 1: site survey and load calculation</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
              A good installer starts by listing every appliance, its gas consumption, and how many run at once during peak hours. That gives the total gas demand, which decides how many cylinders go in the manifold, whether you need auto changeover or an LOT system, and how big the header and branch pipes should be. The installer also picks the cylinder bank location for ventilation, access, and a safe distance from drains, openings, and ignition sources.
            </p>
          </div>

          <div id="installation-phase-2" className="scroll-mt-28 space-y-2 p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
              <h3 className="font-bold text-gray-900 text-lg">Phase 2: manifold and header installation</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
              The cylinder bank goes in with the manifold, pigtails, NRVs, changeover valve, and first-stage regulator. The header then runs along its planned route, clamped securely, with tapping points and branch valves wherever an appliance or area needs gas. Second-stage regulators go in where needed, and leak detectors and shut-off valves are positioned and wired.
            </p>
          </div>

          <div id="installation-phase-3" className="scroll-mt-28 space-y-2 p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
              <h3 className="font-bold text-gray-900 text-lg">Phase 3: testing, commissioning, and handover</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
              Before any gas goes in, the whole system is pressure tested and every joint checked for leaks. Once it passes, gas is introduced, each appliance is lit and its flame checked, and the safety devices are tested. At handover, the installer should walk you through where each valve is, how to switch or replace cylinders, what to do in a leak, and the maintenance schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion: getting supply and distribution right - H2 */}
      <section id="conclusion" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Key Takeaway</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Conclusion: getting supply and distribution right
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            You don't choose between a manifold and a header. They solve two different problems.
          </p>
          <p>
            The manifold handles supply. It keeps gas coming from enough cylinders, without anyone dragging replacements in during service.
          </p>
          <p>
            The header handles distribution. It gets gas to every appliance at the right pressure and lets you shut off any single line when needed.
          </p>
          <p>
            A manifold on its own may be enough if you have a small kitchen with a few appliances close to the supply and no need to isolate them separately. You'll probably need both if you run a large kitchen, hotel, hospital, institution, or lab, if your appliances are spread across different areas or floors, or if your operation can't afford a gas interruption.
          </p>
          <p>
            Whatever you install, size it for peak-hour demand and future growth, not just today's appliance count. Most of the LPG pipeline problems we're called in to fix, from weak flames to frosted cylinders, trace back to a system built just big enough for the day it was installed.
          </p>

          {/* Interactive Consultation Banner */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary-container text-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-bold text-xl sm:text-2xl text-white">Need a Manifold or Header Audit for Your Facility?</h3>
              <p className="text-white/80 text-xs sm:text-sm max-w-xl">
                Hi Tech Energy engineers turnkey cylinder banks, automatic changeover manifolds, and certified gas headers compliant with IS 6044 and PESO safety standards across Tamil Nadu.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link
                to="/contact"
                className="bg-secondary-container hover:brightness-110 text-white font-bold py-3 px-6 rounded-xl text-center text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Schedule Site Visit
              </Link>
              <a
                href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`}
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl text-center text-xs transition-all border border-white/20"
              >
                📞 Call Engineering Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
