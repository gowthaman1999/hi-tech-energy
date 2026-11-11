import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS } from '../../data/hitechData';

export default function LpgManifoldRestaurantsArticle({ post }) {
  const { sections } = post;

  return (
    <div className="space-y-12 text-left">
      {/* Lead Hook Paragraphs */}
      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
        <p className="text-lg sm:text-xl font-medium text-gray-900 border-l-4 border-secondary-container pl-4 py-1 italic bg-orange-50/40 rounded-r-xl">
          Ask a restaurant owner about the worst ten minutes of their year, and there&apos;s a good chance a gas cylinder is part of the story.
        </p>
        <p>
          It&apos;s 8:40 on a Saturday. Every table is taken, the rail has 19 tickets on it, and your butter chicken is the best it&apos;s been all month. Then the flame under it shrinks, coughs, and goes out. Two burners down the line follow. Your helper is dragging a 19 kg cylinder across a wet floor while the head chef shouts for a spanner, and out front a family of six is checking their watches.
        </p>
        <p>
          By the time the gas is back, you&apos;ve remade four dishes, sent out free desserts, and you already know which table is going to leave the one-star review.
        </p>
        <p>
          What makes this so frustrating is that you could have seen it coming. The number of burners you run, the size of your cylinders, and the hours you&apos;re busiest were all there to work out on paper months ago. The kitchen simply outgrew a gas setup built for half the covers.
        </p>
        <p>
          An LPG manifold is how busy restaurants stop this from happening. It links several cylinders into one supply, keeps a full backup bank ready, and switches to it by itself the moment the first bank runs low. Your cooks keep cooking, and the guests never find out there was a problem.
        </p>
        <p>
          This guide covers everything you need before you buy or upgrade one: how the system works, how to size it for your kitchen with a real worked example, the safety and PESO rules you have to meet, and the small daily habits that keep it running without surprises.
        </p>
      </div>

      {/* Key Takeaways - H2 */}
      <section id="key-takeaways" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Executive Summary</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Key Takeaways
          </h2>
        </div>

        <div className="bg-gradient-to-br from-amber-50/60 to-orange-50/40 border border-orange-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-secondary-container mb-4">The short version:</p>
          <ul className="space-y-4 text-sm sm:text-base text-gray-800">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">check_circle</span>
              <span><strong>A manifold removes mid-service gas outages.</strong> One bank of cylinders feeds the kitchen while a second bank waits. When the first runs low, an automatic changeover regulator switches to the reserve without any flame drop.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">calculate</span>
              <span><strong>Size it on real demand, not guesswork.</strong> Add up the gas rating of every appliance, multiply by 0.7, and check that your active cylinders can vaporise gas fast enough to keep up.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">ac_unit</span>
              <span><strong>Cylinder freezing is the hidden problem.</strong> Pull gas faster than a cylinder can boil it off and you get frost on the cylinder, a pressure crash, and flames going out. More active cylinders solve this.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">deck</span>
              <span><strong>Cylinders belong outdoors.</strong> LPG vapour is heavier than air and pools at floor level. Basements and indoor storerooms are off the table.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">shield</span>
              <span><strong>Safety devices are not optional.</strong> Leak sensors, a solenoid shut-off tied to your exhaust hood, excess flow valves and flame failure devices all need to be in place and tested.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">grid_view</span>
              <span><strong>Most restaurants land on a 2×2 or 4×4 manifold.</strong> High-volume and cloud kitchens often need 6×6, 8×8 or a vaporiser setup.</span>
            </li>
          </ul>
        </div>

        {/* The Hidden Cost of Mid-Service Gas Depletion - H3 */}
        <div id="hidden-cost-depletion" className="scroll-mt-28 space-y-4 pt-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            The Hidden Cost of Mid-Service Gas Depletion
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Most small restaurants start the same way. A couple of commercial cylinders, a regulator on each, a rubber hose to the range. It works fine at 30 covers a night, and then the business grows and it stops working.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A single cylinder setup has no warning and no backup. When the cylinder empties, the flame dies, usually right when demand is highest because that&apos;s when you&apos;re burning gas fastest. Your line loses momentum, half-cooked dishes have to be redone, and someone ends up handling a heavy cylinder in a rush. Rushed cylinder swaps are where leaks and loose fittings happen.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Connecting cylinders one-to-one with appliances doesn&apos;t hold up in a busy kitchen for two reasons. First, each cylinder empties fast because one appliance is pulling everything from it. Second, as a cylinder empties and cools, its pressure drops, and your flame gets weaker even before it runs out. Your chef notices the tadka isn&apos;t crackling the way it should, but nobody knows why.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A central gas system with a manifold fixes both problems. Gas comes from a common header fed by several cylinders, so pressure stays steady. Cooking temperatures stay consistent, burners don&apos;t get starved of gas, and your equipment lasts longer because it isn&apos;t constantly running on low or fluctuating pressure. For most restaurants, the <Link to="/blog/domestic-lpg-pipeline-vs-cylinder" className="text-secondary font-semibold hover:underline">LPG pipeline vs cylinder</Link> question comes down to exactly this: loose cylinders cost you a little in every service, and a piped system stops that cost.
          </p>

          {/* Downtime Cost Calculation Card */}
          <div className="bg-red-50/60 border border-red-200 rounded-2xl p-5 sm:p-6 my-6 space-y-3">
            <div className="flex items-center gap-2 text-red-700 font-bold text-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-lg">warning</span>
              What 15 minutes of downtime really costs
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Say your restaurant serves 40 covers an hour at peak with an average bill of ₹600. A 15-minute gas outage during dinner rush can easily mean:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-800">
              <li className="flex items-center justify-between py-1 border-b border-red-100">
                <span>Around 10 covers delayed or lost:</span>
                <span className="font-bold text-red-900">₹6,000</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-red-100">
                <span>Dishes remade or comped to calm angry tables:</span>
                <span className="font-bold text-red-900">₹1,500 to ₹3,000</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-red-100">
                <span>One bad Google review that sits at the top of your listing for months:</span>
                <span className="font-bold text-red-900">hard to put a number on</span>
              </li>
            </ul>
            <p className="text-xs font-semibold text-gray-900 pt-1">
              Do that twice a month and you&apos;ve paid for a basic manifold within a year.
            </p>
          </div>
        </div>
      </section>

      {/* What is a Restaurant LPG Manifold System? - H2 */}
      <section id="what-is-manifold" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">System Definition</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            What is a Restaurant LPG Manifold System?
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            An LPG manifold is a piping assembly that connects multiple LPG cylinders into one common supply line, called a header. Instead of each appliance depending on its own cylinder, the whole kitchen draws from the header.
          </p>

          <p className="font-semibold text-gray-900">The main parts you&apos;ll find in a typical system:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                <span className="material-symbols-outlined text-secondary-container text-lg">propane_tank</span>
                Active cylinder bank
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                The group of cylinders currently feeding the kitchen during operational hours.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                <span className="material-symbols-outlined text-secondary-container text-lg">storage</span>
                Reserve cylinder bank
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                An equal group of full cylinders sitting on standby ready for automated switchover.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                <span className="material-symbols-outlined text-secondary-container text-lg">swap_horiz</span>
                Automatic changeover regulator
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                The valve that switches from active to reserve when the active side runs low.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                <span className="material-symbols-outlined text-secondary-container text-lg">speed</span>
                First-stage and second-stage regulators
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                These bring the gas pressure down in two steps to what your appliances need.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                <span className="material-symbols-outlined text-secondary-container text-lg">linear_scale</span>
                High-pressure pigtails
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Short flexible hoses connecting each cylinder to the header, usually stainless steel braided.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                <span className="material-symbols-outlined text-secondary-container text-lg">emergency</span>
                Isolation and emergency shut-off valves
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                For swapping cylinders safely and cutting gas instantly in an emergency.
              </p>
            </div>
          </div>

          <p>
            The whole point is to give your ranges, tandoors, fryers and ovens a steady, uninterrupted gas supply at the right pressure, while moving the high-pressure cylinders out of the kitchen to a safer spot outdoors.
          </p>
        </div>
      </section>

      {/* Core System Architecture & How It Works - H2 */}
      <section id="core-architecture" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Engineering Anatomy</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Core System Architecture &amp; How It Works
          </h2>
        </div>

        {/* Active vs. Reserve Cylinder Banks & Auto-Changeover Regulators - H3 */}
        <div id="active-reserve-banks" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Active vs. Reserve Cylinder Banks &amp; Auto-Changeover Regulators
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A manifold splits the cylinders into two equal groups. You&apos;ll see this written as 2×2, 4×4 or 6×6. A 4×4, for example, has 8 cylinders: 4 on the active side and 4 on the reserve side.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The active bank feeds the kitchen. The reserve bank sits there full, doing nothing, until it&apos;s needed.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The automatic changeover regulator sits between the two banks. It&apos;s constantly sensing pressure on the active side. As those cylinders empty, the pressure falls. When it drops below a set point, a spring-loaded mechanism inside the regulator shifts and opens the reserve side.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            There&apos;s no electricity involved, no staff action and no gap in supply. The burners keep going at the same flame.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 my-4 space-y-3">
            <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-lg">palette</span>
              Most changeover regulators have a coloured indicator:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-emerald-900">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shrink-0 mt-1 shadow-sm" />
                <div>
                  <strong className="block text-emerald-950 font-bold">Green: Active Bank Feeding</strong>
                  <span>The active bank is still supplying gas. All good.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-xl p-3 text-red-900">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500 shrink-0 mt-1 shadow-sm" />
                <div>
                  <strong className="block text-red-950 font-bold">Red: Switched to Reserve</strong>
                  <span>The active bank is empty and the system has switched to reserve.</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            When your staff see red, that&apos;s the cue to call your gas distributor and order a refill for the empty bank. You now have the full reserve bank&apos;s worth of time to get it done, which for most restaurants is a day or more.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Add one line to your opening checklist: whoever opens the kitchen checks the indicator window, and if it&apos;s red, the refill call happens before 11 am. Kitchens that skip this end up with both banks empty on a Sunday, which is the exact problem the manifold was bought to fix.
          </p>

          {/* In-content Image 1: Auto-changeover Regulator */}
          {sections?.changeoverRegulator && (
            <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
              <img
                src={sections.changeoverRegulator.image}
                alt={sections.changeoverRegulator.imageAlt}
                width={1200}
                height={675}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[460px]"
              />
              <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                <span>{sections.changeoverRegulator.imageCaption}</span>
              </figcaption>
            </figure>
          )}
        </div>

        {/* Two-Stage Pressure Regulation - H3 */}
        <div id="two-stage-regulation" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Two-Stage Pressure Regulation (High to Medium to Working Pressure)
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Gas inside a cylinder is under a lot of pressure. Your burners need very little. Getting from one to the other in a single step works on a home stove, but in a commercial kitchen with long pipe runs and lots of appliances it causes problems. That&apos;s why manifolds use two stages.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>First stage: at the manifold.</strong> The pressure inside an LPG cylinder changes with temperature. On a mild day it might be around 4 to 8 bar, and in peak Indian summer it climbs higher. Regulators at this point are built to handle up to roughly 15 to 17.5 bar. The first-stage regulator brings this down to a medium pressure, usually around 1.4 to 2 bar. This medium pressure is what travels through the pipeline toward the kitchen.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>Second stage: near the appliances.</strong> Close to the kitchen, a second regulator drops the pressure to what each appliance is designed for. Standard low-pressure appliances run at roughly 28 to 50 mbar (about 11 inches water column). Some Indian commercial burners, like Chinese wok ranges and bulk-cooking bhattis, are designed for higher pressure, so the second stage is set to match those specifically.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Two stages matter most when demand jumps. At lunch, the tandoor is already going, three burners on the range light up together, and the fryers kick in. With a single regulator, that sudden demand causes the pressure to dip, and you get lifting flames, yellow tips, or in bad cases flashback inside the burner. With two stages, the medium-pressure line acts as a buffer. The second-stage regulator has plenty of supply to draw on, so pressure at the burner stays steady even when everything lights at once.
          </p>

          {/* Table 1: Two-Stage Pressure Regulation */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm my-6 bg-white">
            <table className="w-full text-left text-xs sm:text-sm text-gray-700 min-w-[620px]">
              <thead className="bg-primary text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 font-semibold w-1/4">Feature / Specification</th>
                  <th className="py-3.5 px-4 font-semibold w-3/8 border-l border-white/20">First-Stage Regulator</th>
                  <th className="py-3.5 px-4 font-semibold w-3/8 border-l border-white/20">Second-Stage Regulator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">Input pressure</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Cylinder pressure (up to 15 to 17.5 bar rated)</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Around 1.4 to 2 bar</td>
                </tr>
                <tr className="bg-gray-50/70 hover:bg-orange-50/30">
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">Output pressure</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Around 1.4 to 2 bar</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">28 to 50 mbar for low-pressure appliances, or higher as specified</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">Location</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">At the manifold header, outdoors</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Near the kitchen wall or at the appliance branch</td>
                </tr>
                <tr className="bg-gray-50/70 hover:bg-orange-50/30">
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">Main purpose</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Bring raw cylinder pressure to a safe, steady medium pressure for the pipeline</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Deliver exact working pressure for clean, stable flames</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* High-Pressure Pigtails, Manifold Headers & Safety Valves - H3 */}
        <div id="pigtails-headers-valves" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            High-Pressure Pigtails, Manifold Headers &amp; Safety Valves
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>Pigtails.</strong> These are the short flexible hoses connecting each cylinder valve to the header. You&apos;ll find stainless steel braided pigtails (preferred for commercial use) or reinforced rubber ones. Good pigtails have a built-in check valve, so if one hose is disconnected or damaged, gas from the header doesn&apos;t flow back out through it.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>Isolation valves and non-return valves (NRVs).</strong> Each cylinder branch should have its own shut-off valve. This is what lets your staff close one cylinder, remove it, and fit a new one while the rest of the system keeps feeding the kitchen. Non-return valves stop gas from flowing backwards from a full cylinder into an empty one or out of an open connection.
          </p>
        </div>
      </section>

      {/* Right-Sizing Your Restaurant LPG Manifold - H2 */}
      <section id="right-sizing-manifold" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Engineering Calculations</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Right-Sizing Your Restaurant LPG Manifold
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Most restaurant owners skip this part, and most manifold problems start here. An undersized manifold still fails at peak hour, only more slowly than a single cylinder does. Sizing one properly takes three steps.
        </p>

        {/* Step 1: Calculate Total Peak Hourly Gas Consumption - H3 */}
        <div id="step-1-hourly-consumption" className="scroll-mt-28 space-y-4 pt-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Step 1: Calculate Total Peak Hourly Gas Consumption
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            List every gas appliance. Walk the kitchen and note the gas rating on each appliance. It&apos;s usually on a metal nameplate on the side or back, given in BTU/hr, kW, or kg/hr.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            As a rough rule, 1 kg of LPG gives about 47,000 BTU of heat. So to turn BTU/hr into kg/hr, divide by 47,000.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium text-gray-900">
            Here&apos;s a sample kitchen for a busy North Indian restaurant:
          </p>

          {/* Table 2: Sample Kitchen Load */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm my-4 bg-white">
            <table className="w-full text-left text-xs sm:text-sm text-gray-700 min-w-[500px]">
              <thead className="bg-primary text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 font-semibold w-1/2">Appliance</th>
                  <th className="py-3 px-4 font-semibold w-1/4 border-l border-white/20">Rating (BTU/hr)</th>
                  <th className="py-3 px-4 font-semibold w-1/4 border-l border-white/20">Approx. LPG use (kg/hr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="py-2.5 px-4 font-medium text-gray-900">Commercial 6-burner range</td>
                  <td className="py-2.5 px-4 border-l border-gray-200">108,000</td>
                  <td className="py-2.5 px-4 border-l border-gray-200">2.30</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="py-2.5 px-4 font-medium text-gray-900">Heavy-duty tandoor</td>
                  <td className="py-2.5 px-4 border-l border-gray-200">40,000</td>
                  <td className="py-2.5 px-4 border-l border-gray-200">0.85</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2.5 px-4 font-medium text-gray-900">Twin deep fryers</td>
                  <td className="py-2.5 px-4 border-l border-gray-200">60,000</td>
                  <td className="py-2.5 px-4 border-l border-gray-200">1.28</td>
                </tr>
                <tr className="bg-gray-50/60">
                  <td className="py-2.5 px-4 font-medium text-gray-900">Stock pot burner</td>
                  <td className="py-2.5 px-4 border-l border-gray-200">50,000</td>
                  <td className="py-2.5 px-4 border-l border-gray-200">1.06</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2.5 px-4 font-medium text-gray-900">Flat-top griddle</td>
                  <td className="py-2.5 px-4 border-l border-gray-200">30,000</td>
                  <td className="py-2.5 px-4 border-l border-gray-200">0.64</td>
                </tr>
                <tr className="bg-orange-50 font-bold text-gray-900 border-t-2 border-orange-200">
                  <td className="py-3 px-4">Total connected load</td>
                  <td className="py-3 px-4 border-l border-orange-200">288,000</td>
                  <td className="py-3 px-4 border-l border-orange-200 text-secondary-container">6.13</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Total connected load is simply all of these added together. It&apos;s the most gas your kitchen could ever use if every burner was on full at the same time.
          </p>
        </div>

        {/* Step 2: Apply the Diversity Factor (0.7) - H3 */}
        <div id="step-2-diversity-factor" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Step 2: Apply the Diversity Factor (0.7)
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            No kitchen runs every burner at full flame at once. Even at peak, some burners are on simmer, the fryer is idling between batches, and the griddle is half-used. Planning for 100% would mean paying for a much bigger system than you need.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            To account for this, multiply your total connected load by 0.7 to get a realistic peak demand. It&apos;s a widely used benchmark for commercial kitchens.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2 text-xs sm:text-sm text-gray-800">
            <p className="font-bold text-primary uppercase tracking-wider text-xs">Worked example using the kitchen above:</p>
            <ul className="space-y-1.5 pl-4 list-disc text-gray-700">
              <li><strong>Total connected load:</strong> 288,000 BTU/hr (6.13 kg/hr)</li>
              <li><strong>Diversity factor:</strong> 0.7</li>
              <li><strong>Realistic peak demand:</strong> 288,000 × 0.7 = 201,600 BTU/hr</li>
              <li><strong>In kg:</strong> 201,600 ÷ 47,000 = about 4.3 kg/hr</li>
            </ul>
            <p className="pt-2 text-gray-900 font-medium">
              So this kitchen needs a system that can deliver around 4.3 kg of LPG every hour during peak service, without pressure dropping.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            If your kitchen is unusual, say a banquet kitchen where every burner really does run flat out for three hours, use a higher factor like 0.85 or 0.9.
          </p>
        </div>

        {/* Step 3: Factor in Cylinder Evaporation Capacity - H3 */}
        <div id="step-3-evaporation-capacity" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Step 3: Factor in Cylinder Evaporation Capacity (Preventing Freeze)
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Inside the cylinder, LPG sits as a liquid. To come out as gas, it has to boil, and boiling takes heat. That heat comes from the air around the cylinder, through the steel wall. As gas is drawn off, the cylinder gets colder.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            If you pull gas faster than the cylinder can absorb heat, it keeps getting colder. You&apos;ll see condensation on the outside, then a ring of frost at the liquid level. Pressure inside drops sharply. Your flames go weak and can go out completely, even though the cylinder is still half full. This is one of the most common reasons for &ldquo;the gas is low but the cylinder isn&apos;t empty&rdquo; complaints.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Each cylinder can only safely supply so much gas per hour. That depends on its size (bigger cylinders have more wetted surface area to absorb heat), how full it is, and the outside temperature. Rough figures in typical Indian conditions:
          </p>

          <ul className="space-y-2 text-base text-gray-700 pl-4 list-disc">
            <li><strong>19 kg commercial cylinder:</strong> around 0.8 to 1 kg/hr of continuous draw</li>
            <li><strong>47.5 kg cylinder:</strong> around 1.5 to 2 kg/hr of continuous draw</li>
          </ul>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            These drop on cold mornings, in hill stations, or when cylinders are kept in shade with poor airflow. Your gas supplier or installer can give you exact figures for your cylinder type.
          </p>

          <div className="bg-orange-50/50 border border-orange-200 rounded-xl p-5 space-y-2 text-xs sm:text-sm text-gray-800">
            <p className="font-bold text-primary">Going back to the example, the kitchen needs 4.3 kg/hr. Using 47.5 kg cylinders at about 1.5 kg/hr each:</p>
            <ul className="space-y-1.5 pl-4 list-disc text-gray-700">
              <li>4.3 ÷ 1.5 = 2.9, so at least 3 cylinders on the active side</li>
              <li>Round up for safety and you get 4 active cylinders</li>
              <li>Match that with 4 reserve cylinders, and you have a 4×4 manifold</li>
            </ul>
            <p className="text-gray-900 pt-1 font-medium">
              If this kitchen used 19 kg cylinders instead, you&apos;d need about 5 to 6 active cylinders, which pushes you to a 6×6.
            </p>
          </div>

          {/* In-content Image 2: Commercial Kitchen Cooking Line */}
          {sections?.kitchenCookingLine && (
            <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
              <img
                src={sections.kitchenCookingLine.image}
                alt={sections.kitchenCookingLine.imageAlt}
                width={1200}
                height={675}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[460px]"
              />
              <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                <span>{sections.kitchenCookingLine.imageCaption}</span>
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Manifold Selection Matrix by Restaurant Type - H2 */}
      <section id="selection-matrix" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Facility Sizing Matrix</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Manifold Selection Matrix by Restaurant Type
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Here&apos;s a quick guide. It assumes 47.5 kg cylinders in normal Indian ambient temperatures. If you&apos;re on 19 kg cylinders, go one size up.
        </p>

        {/* Table 3: Selection Matrix */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm my-6 bg-white">
          <table className="w-full text-left text-xs sm:text-sm text-gray-700 min-w-[650px]">
            <thead className="bg-primary text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4 font-semibold w-1/4">Restaurant type</th>
                <th className="py-3.5 px-4 font-semibold w-3/8 border-l border-white/20">Typical equipment</th>
                <th className="py-3.5 px-4 font-semibold w-1/6 border-l border-white/20">Peak demand</th>
                <th className="py-3.5 px-4 font-semibold w-1/4 border-l border-white/20">Recommended setup</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="py-3 px-4 font-bold text-gray-900">Café, QSR, small bistro</td>
                <td className="py-3 px-4 border-l border-gray-200">2 to 4 burner range, 1 fryer, small griddle</td>
                <td className="py-3 px-4 border-l border-gray-200 text-gray-900 font-semibold">Up to 3 kg/hr</td>
                <td className="py-3 px-4 border-l border-gray-200 font-semibold text-secondary-container">2×2 manifold (4 cylinders)</td>
              </tr>
              <tr className="bg-gray-50/70 hover:bg-orange-50/30">
                <td className="py-3 px-4 font-bold text-gray-900">Casual dining, busy bar kitchen</td>
                <td className="py-3 px-4 border-l border-gray-200">6-burner range, tandoor, twin fryers, stock pot</td>
                <td className="py-3 px-4 border-l border-gray-200 text-gray-900 font-semibold">3 to 8 kg/hr</td>
                <td className="py-3 px-4 border-l border-gray-200 font-semibold text-secondary-container">4×4 manifold (8 cylinders)</td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4 font-bold text-gray-900">High-volume dining, banquets, hotel kitchens</td>
                <td className="py-3 px-4 border-l border-gray-200">Multiple ranges, Chinese wok ranges, bulk bhattis, ovens</td>
                <td className="py-3 px-4 border-l border-gray-200 text-gray-900 font-semibold">8 to 15 kg/hr</td>
                <td className="py-3 px-4 border-l border-gray-200 font-semibold text-secondary-container">6×6 manifold (12 cylinders)</td>
              </tr>
              <tr className="bg-gray-50/70 hover:bg-orange-50/30">
                <td className="py-3 px-4 font-bold text-gray-900">Cloud kitchens, central production units</td>
                <td className="py-3 px-4 border-l border-gray-200">Several cooking lines running long hours</td>
                <td className="py-3 px-4 border-l border-gray-200 text-gray-900 font-semibold">15+ kg/hr</td>
                <td className="py-3 px-4 border-l border-gray-200 font-semibold text-secondary-container">8×8 manifold or LOT with vaporiser</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Treat this as a starting point. Always run the three-step calculation for your actual kitchen.
        </p>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          The pipes matter too. A well-sized manifold won&apos;t help if the pipeline after it is too narrow. <Link to="/blog/lpg-pipe-sizing" className="text-secondary font-semibold hover:underline">Gas pipe sizing for LPG</Link> depends on your peak demand in kg/hr, the length of the run from the manifold to the farthest appliance, and the pressure in that section of pipe. A long, thin pipe running at low pressure loses too much on the way, and the burner at the far end of the line ends up with a weak flame. Your installer should work out the pipe diameter from these figures. If they just pick a standard size without asking about your appliances, find someone else.
        </p>
      </section>

      {/* Safety Infrastructure, Storage & Statutory Compliance - H2 */}
      <section id="safety-compliance" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Statutory Norms</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Safety Infrastructure, Storage &amp; Statutory Compliance
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          A manifold makes your kitchen safer, but only if it&apos;s installed right. This section covers what the rules expect and why.
        </p>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          In India, LPG storage and installations come under the Gas Cylinder Rules administered by PESO (Petroleum and Explosives Safety Organisation), along with IS 6044 Part 2 for commercial LPG installations and your state fire service&apos;s NOC requirements. Depending on how much LPG you store on site, you may need a PESO licence. Internationally, NFPA 58 is the common reference. Your installer should know which apply to you.
        </p>

        {/* Outdoor Storage & Heavy-Vapour Clearance Rules - H3 */}
        <div id="outdoor-storage-clearance" className="scroll-mt-28 space-y-4 pt-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Outdoor Storage &amp; Heavy-Vapour Clearance Rules
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            LPG vapour is about 1.5 to 2 times heavier than air. Unlike natural gas, which rises and disperses, leaked LPG flows downward and collects at floor level, in drains, pits, and any low corner. It can sit there quietly until it finds a spark.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The cylinder bank belongs outdoors, on a level concrete base, inside a lockable enclosure made of wire mesh or with louvred sides. The enclosure needs airflow on all sides so any small leak blows away instead of building up. A roof to protect from direct sun and rain is good. Solid walls on all sides are not.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
            <p className="font-bold text-primary text-sm uppercase tracking-wider">Keep the cylinder bank well clear of:</p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700 pl-4 list-disc">
              <li>Doors and windows, especially ones that open into the kitchen</li>
              <li>Basement openings and stairwells</li>
              <li>Air intakes for AC or ventilation</li>
              <li>Electrical switches, panels, and motors</li>
              <li>Open drains and manholes</li>
            </ul>
            <p className="text-xs font-semibold text-gray-600 pt-1">
              Typical minimum distances range from 1 to 3 metres depending on the quantity stored and local codes.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Cylinders can never go in basements, cellars, lofts, attics, under staircases, inside the main kitchen, or anywhere along an escape route. Fire codes in India and pretty much everywhere else prohibit this, because a leak in an enclosed low space turns into an explosion risk very quickly.
          </p>

          {/* In-content Image 3: Outdoor Storage Cage */}
          {sections?.outdoorStorage && (
            <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
              <img
                src={sections.outdoorStorage.image}
                alt={sections.outdoorStorage.imageAlt}
                width={1200}
                height={675}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[460px]"
              />
              <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                <span>{sections.outdoorStorage.imageCaption}</span>
              </figcaption>
            </figure>
          )}
        </div>

        {/* Gas Safety Interlocks & Forced Ventilation - H3 */}
        <div id="interlocks-ventilation" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Gas Safety Interlocks &amp; Forced Ventilation
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A commercial kitchen&apos;s gas supply should be electrically linked to the exhaust hood fans. If the hood isn&apos;t running, the gas shouldn&apos;t flow.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            In practice, a solenoid valve sits on the main gas line into the kitchen. It only stays open while the exhaust system is on and an airflow sensor confirms air is actually moving. If the fan trips, a belt snaps, or someone switches the hood off mid-service, the solenoid closes and gas stops.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Burning gas without proper extraction fills the kitchen with carbon monoxide, which you can&apos;t see or smell. It also allows unburned gas to build up if a burner goes out. Your cooks are standing in that air for 10 hours a day.
          </p>
        </div>

        {/* Automatic Safety Shut-Offs & Leak Detection - H3 */}
        <div id="safety-shutoffs-detection" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Automatic Safety Shut-Offs &amp; Leak Detection
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>Excess flow valves (EFVs).</strong> These valves close automatically if gas starts flowing much faster than the system is designed for. That only happens when something has gone badly wrong, like a pipe cracking or a pigtail getting cut. The EFV limits how much gas escapes.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>Gas leak detectors.</strong> Good <Link to="/blog/lpg-leak-detection" className="text-secondary font-semibold hover:underline">LPG leak detection</Link> depends mostly on where the sensors go. Since LPG settles low, sensors should be mounted about 30 cm above floor level near the appliances and the point where gas enters the kitchen. Good systems link the sensors to a loud alarm and to the solenoid valve, so a detected leak shuts off the gas automatically.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>Flame failure devices (FFDs).</strong> Every burner should have one. A thermocouple sits in the flame. If the flame blows out from a draft, a boil-over, or a cook&apos;s mistake, the thermocouple cools down within seconds and cuts gas to that burner. Without it, an unlit burner keeps pouring gas into the kitchen.
          </p>
        </div>

        {/* Piping Colour Coding, Flexible Hoses & Equipment Restraints - H3 */}
        <div id="piping-colour-coding" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Piping Colour Coding, Flexible Hoses &amp; Equipment Restraints
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Fixed gas pipelines should be painted signal red or yellow, with &ldquo;LPG&rdquo; and flow direction arrows stencilled at regular intervals. When a plumber, electrician, or fire officer walks into your kitchen, they should know straight away which line is gas.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium text-gray-900">
            Flexible hoses:
          </p>
          <ul className="space-y-2 text-base text-gray-700 pl-4 list-disc">
            <li>Keep the hose from the fixed pipe to the appliance as short as practical, usually no more than 1.2 to 2 metres depending on local rules.</li>
            <li>Stainless steel braided hoses hold up far better to heat, grease, and rats than rubber.</li>
            <li>Rubber hoses should be replaced every 2 years, or sooner if you see cracks, hardening, or swelling.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Ranges and fryers on castors get pulled out for cleaning. Without a restraint, the only thing stopping them is the gas hose, which gets stretched and kinked until it fails. A steel safety cable anchored to the wall, shorter than the gas hose, takes that load instead.
          </p>
        </div>
      </section>

      {/* Operational Best Practices, Inspections & Troubleshooting - H2 */}
      <section id="best-practices-troubleshooting" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Standard Operating Procedures</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Operational Best Practices, Inspections &amp; Troubleshooting
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          A well-installed manifold still needs a bit of daily care. Most of it takes minutes.
        </p>

        {/* Safe Cylinder Replacement & Soap-Bubble Leak Checks - H3 */}
        <div id="cylinder-replacement-leak-checks" className="scroll-mt-28 space-y-4 pt-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Safe Cylinder Replacement &amp; Soap-Bubble Leak Checks
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium text-gray-900">
            Changeover routine for staff:
          </p>

          <ol className="space-y-2 text-sm sm:text-base text-gray-800 list-decimal pl-5">
            <li>Check the indicator window. Red means the bank that just emptied needs replacing.</li>
            <li>Close the cylinder valves on the empty cylinders.</li>
            <li>Close the isolation valve on each empty branch.</li>
            <li>Disconnect the pigtails carefully. A small hiss of trapped gas is normal.</li>
            <li>Check the cylinder valve threads and the pigtail washer or O-ring. Replace any worn washers.</li>
            <li>Fit the new cylinders and tighten the connections firmly, without over-tightening.</li>
            <li>Open the cylinder valves slowly, then open the branch isolation valves.</li>
            <li>Turn the changeover lever so the newly filled bank becomes the reserve.</li>
          </ol>

          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 my-4 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
              <span className="material-symbols-outlined text-lg">water_drop</span>
              The soap-bubble test
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              After every cylinder change, brush soapy water or a proper leak detection fluid onto each joint you touched. Watch for 10 to 15 seconds. Any bubbles growing means a leak: close the valve and re-tighten or replace the washer.
            </p>
            <p className="text-xs font-bold text-red-700 pt-1">
              Never check for leaks with a match or lighter. Everyone knows this, and people still do it.
            </p>
          </div>

          {/* In-content Image 4: Leak test inspection */}
          {sections?.leakInspection && (
            <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
              <img
                src={sections.leakInspection.image}
                alt={sections.leakInspection.imageAlt}
                width={1200}
                height={675}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[460px]"
              />
              <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                <span>{sections.leakInspection.imageCaption}</span>
              </figcaption>
            </figure>
          )}
        </div>

        {/* Daily Kitchen Shift Shutdown Sequence - H3 */}
        <div id="daily-shutdown-sequence" className="scroll-mt-28 space-y-4 pt-6 border-t border-gray-100">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Daily Kitchen Shift Shutdown Sequence
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium text-gray-900">
            At the end of the night, do it in this order:
          </p>

          <ol className="space-y-2 text-sm sm:text-base text-gray-800 list-decimal pl-5">
            <li><strong>Close the main manifold shut-off valve first</strong>, while the burners are still lit.</li>
            <li><strong>Let the gas left in the pipeline burn off.</strong> The flames will shrink and go out on their own.</li>
            <li><strong>Then turn every appliance knob to OFF.</strong></li>
          </ol>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Doing it in this order empties the pipeline, so if a hose fails or someone bumps a knob overnight, there&apos;s no pressurised gas sitting in the kitchen. Turning the knobs off first and the main valve second leaves the whole line full.
          </p>
        </div>

        {/* Mid-Service Emergency Troubleshooting Guide - H3 */}
        <div id="emergency-troubleshooting" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
            Mid-Service Emergency Troubleshooting Guide
          </h3>

          {/* Problem 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
            <h4 className="font-bold text-primary text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-secondary-container text-white text-xs flex items-center justify-center font-bold">1</span>
              Problem 1: Flames dropping or flickering during peak hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-gray-700">
              <p className="font-semibold text-gray-900">Likely causes:</p>
              <ul className="pl-4 list-disc space-y-1">
                <li>Active cylinders freezing (look for frost or heavy condensation)</li>
                <li>Changeover regulator stuck and not switching to reserve</li>
                <li>Manifold too small for the current load</li>
              </ul>
              <p className="font-semibold text-gray-900 pt-2">What staff should do right away:</p>
              <ul className="pl-4 list-disc space-y-1">
                <li>Check cylinders for frost. If frozen, manually switch to the reserve bank.</li>
                <li>Check the indicator. If it&apos;s red but flames are still low, the changeover may be stuck. Switch manually.</li>
                <li>Reduce load by turning off burners not in active use until pressure recovers.</li>
                <li>Afterwards, get the system re-checked. If this keeps happening, you&apos;ve outgrown your manifold.</li>
              </ul>
              <p className="italic text-red-700 font-medium pt-1">
                Don&apos;t pour hot water on frozen cylinders or try to heat them. Report it and get the system resized.
              </p>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
            <h4 className="font-bold text-primary text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-secondary-container text-white text-xs flex items-center justify-center font-bold">2</span>
              Problem 2: Gas keeps shutting off for no clear reason
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-gray-700">
              <p>This is usually the safety interlock doing its job, or a sensor that needs attention.</p>
              <ul className="pl-4 list-disc space-y-1">
                <li>Check the exhaust hood is actually running at full speed.</li>
                <li>Look for blocked filters or a slipping fan belt reducing airflow.</li>
                <li>Leak sensors can drift or get coated in grease. Have them cleaned and recalibrated by your installer.</li>
              </ul>
              <p className="italic text-red-700 font-medium pt-1">
                Never bypass or bridge the interlock to &ldquo;get through service.&rdquo; Of all the shortcuts kitchens take, this is one of the most dangerous.
              </p>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-5 space-y-3">
            <h4 className="font-bold text-red-900 text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">3</span>
              Problem 3: You smell gas
            </h4>
            <p className="text-xs sm:text-sm text-gray-700">
              LPG has no smell on its own. The rotten-egg or cabbage smell is a chemical called ethyl mercaptan added so you can detect leaks. If you smell it:
            </p>
            <ol className="pl-5 list-decimal space-y-1.5 text-xs sm:text-sm text-gray-800 font-medium">
              <li>Don&apos;t touch any electrical switch: no lights, no fans, no phones inside the kitchen.</li>
              <li>Put out all open flames.</li>
              <li>Close the main manifold valve and the cylinder valves if you can reach them safely.</li>
              <li>Open doors and windows, especially low ones, to let the gas flow out.</li>
              <li>Get everyone out of the building.</li>
              <li>Call your gas supplier&apos;s emergency line and the fire service from outside.</li>
              <li>Don&apos;t go back in until a qualified person confirms it&apos;s safe.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Conclusion - H2 */}
      <section id="conclusion" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Summary &amp; Action Plan</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Conclusion
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            When a kitchen runs out of gas mid-service, it usually means the gas setup hasn&apos;t kept up with how much the business has grown.
          </p>
          <p>
            A properly designed LPG manifold gives you steady gas through the busiest hours, a full reserve that switches in by itself, and cylinders stored safely outside the kitchen where they belong. Add the right safety devices, and you get a kitchen that&apos;s easier to run, easier to get through a fire audit, and a lot less stressful on a packed Saturday.
          </p>
          <p>
            Most of this comes down to sizing. Count your appliances, apply the 0.7 factor, check your cylinders can keep up without freezing, and pick the configuration that matches.
          </p>
        </div>

        {/* Weekly Checklist Card */}
        <div className="bg-gradient-to-br from-primary to-primary-container text-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary-container text-2xl">checklist</span>
            <h3 className="font-headline-md text-lg sm:text-xl font-bold text-white">Your checklist for this week:</h3>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-white/90">
            <li className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
              <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box_outline_blank</span>
              <span><strong>Audit your current gas load.</strong> List every appliance&apos;s rating and compare it with how many cylinders you&apos;re running.</span>
            </li>
            <li className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
              <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box_outline_blank</span>
              <span><strong>Walk your cylinder storage area.</strong> Is it outdoors, ventilated, and clear of doors, drains, and switches?</span>
            </li>
            <li className="flex items-start gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
              <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box_outline_blank</span>
              <span><strong>Book a <Link to="/services/commercial-lpg-pipeline" className="text-secondary-fixed-dim underline font-bold hover:text-white">commercial LPG pipeline service</Link>.</strong> Ask a certified gas engineer for a two-stage pressure check, a leak test on every joint, and a test of your hood interlock and leak detectors.</span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-white/80 pt-1 italic">
            If any of those three throws up a problem, fix it before your next busy weekend.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-block text-center bg-secondary-container hover:brightness-110 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow cursor-pointer"
            >
              Request Commercial Manifold Audit
            </Link>
            <a
              href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold py-3 px-6 rounded-xl text-xs transition-all"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              {OFFICE_LOCATIONS.headOffice.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

