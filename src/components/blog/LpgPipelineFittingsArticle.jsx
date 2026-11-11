import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS } from '../../data/hitechData';

export default function LpgPipelineFittingsArticle({ post }) {
  const { sections } = post;

  return (
    <div className="space-y-12 text-left">
      {/* Lead Hook Paragraphs */}
      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
        <p className="text-lg sm:text-xl font-medium text-gray-900 border-l-4 border-secondary-container pl-4 py-1 italic bg-orange-50/40 rounded-r-xl">
          Say a new LPG line at a restaurant is finished on schedule. The installer packs up, the gas is switched on, and the kitchen runs dinner service that same night. Three weeks later, the manager notices a faint smell near the back wall. Nobody can find the source. After two days of searching, the culprit turns up: one coupling, tightened to full torque in a single go, in about thirty seconds.
        </p>
        <p>
          In most LPG leaks, the pipe and the material are fine. The problem is a small step someone skipped because the site was running late, like thread tape on a joint that should never have it, a trench bedded on leftover bricks, or a one-hour pressure test cut down to fifteen minutes.
        </p>
        <p>
          With LPG, a small leak doesn&apos;t stay small. The gas is heavier than air, so it sinks into trenches, drains and basements and sits there until something ignites it.
        </p>
        <p>
          This checklist walks you through every stage of an LPG pipeline installation, from digging the trench to signing off the final tightness test. It&apos;s written for site engineers, installers, facility managers and anyone who has to put their name on a commissioning report. Print it, keep it on site, and don&apos;t sign anything until every box is ticked.
        </p>
      </div>

      {/* Quick summary - H2 */}
      <section id="quick-summary" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Executive Summary</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Quick summary
          </h2>
        </div>

        <div className="bg-gradient-to-br from-amber-50/60 to-orange-50/40 border border-orange-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
          <ul className="space-y-4 text-sm sm:text-base text-gray-800">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">straighten</span>
              <span><strong>Bury the pipe at least 600 mm deep</strong>, on and around clean sand. No bricks, wood or stones under the pipe.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">block</span>
              <span><strong>Never use sealant or tape on conical metal-to-metal fittings.</strong> Thread tape goes on NPT threads only.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">handyman</span>
              <span><strong>Tighten coupling bolts in three stages</strong> (20 Nm, 40 Nm, 47 Nm) with rest periods in between.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">air</span>
              <span><strong>Purge with nitrogen</strong> if the line has ever held fuel or vapour. Never use compressed air for this.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">speed</span>
              <span><strong>Run two tests before commissioning:</strong> a 25 bar strength test for 5 minutes and a low-pressure tightness test for 1 hour.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">warning</span>
              <span><strong>Never tighten anything while the system is under pressure.</strong></span>
            </li>
          </ul>
        </div>
      </section>

      {/* Introduction and compliance scope - H2 */}
      <section id="compliance-scope" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Regulatory Standards</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Introduction and compliance scope
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          {/* What this checklist covers - H3 */}
          <div id="what-checklist-covers" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              What this checklist covers
            </h3>
            <p>
              This is a step-by-step audit for LPG pipeline fittings, pipe joints and pre-commissioning safety on commercial kitchens, industrial plants and fuelling stations. You can use it during installation or as a final sign-off before the system goes live. Most of these checks also apply if you run a <Link to="/services/domestic-lpg-pipeline" className="text-secondary font-semibold hover:underline">domestic LPG gas pipeline service</Link> for apartments and gated communities, just at a smaller scale.
            </p>
          </div>

          {/* Standards it draws from */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
            <h4 className="font-bold text-primary text-base flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-xl">verified</span>
              Standards it draws from
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700 pl-4 list-disc">
              <li><strong>OPW KPS installation guidelines</strong> for underground flexible piping</li>
              <li><strong>INGAA guidelines</strong> on pipeline pressure testing</li>
              <li><strong>Bureau of Indian Standards</strong> (IS 8737 and IS 3224) for valve fittings</li>
              <li><strong>Your local regulatory and fire safety approval requirements</strong></li>
            </ul>
            <p className="text-xs text-gray-600 pt-1 italic">
              Always check the manufacturer&apos;s manual for the exact pipe and fittings you&apos;re using. Where it differs from a general guideline, the manufacturer&apos;s numbers usually win for warranty purposes.
            </p>
          </div>

          {/* Why more sites are switching to pipelines */}
          <div className="space-y-3">
            <h4 className="font-headline-md text-xl font-bold text-gray-900">
              Why more sites are switching to pipelines
            </h4>
            <p>
              If you or your client are still weighing <Link to="/blog/domestic-lpg-pipeline-vs-cylinder" className="text-secondary font-semibold hover:underline">pipeline vs cylinder</Link>, the difference shows up fast in a busy kitchen or factory. Cylinders need constant swapping, storage space and someone keeping track of refills. They also struggle with heavy, continuous use. Draw gas out fast enough and you get <Link to="/blog/lpg-gas-freezing" className="text-secondary font-semibold hover:underline">LPG cylinder freezing</Link>: the cylinder chills, frost forms on the outside and the flame drops right when demand is highest. A pipeline fed from a central cylinder bank or bulk tank avoids most of that, as long as the installation is done right.
            </p>
          </div>

          {/* Why LPG needs extra care */}
          <div className="space-y-3">
            <h4 className="font-headline-md text-xl font-bold text-gray-900">
              Why LPG needs extra care
            </h4>
            <p>
              Three properties of LPG explain why the rules below are so strict. One litre of liquid LPG expands into roughly 250 litres of gas, so a small liquid leak turns into a large vapour cloud quickly. The gas is heavier than air, so instead of drifting away it collects in trenches, basements, drains and pits. And it ignites at fairly low concentrations, roughly 2% to 10% of the air. Below that range the mix is too lean to burn and above it too rich, but in an enclosed space that window is easy to hit.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-installation and trench readiness checklist - H2 */}
      <section id="trench-readiness" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Site Preparation</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Pre-installation and trench readiness checklist
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Most fitting problems that show up years later start with a badly prepared trench. Pipe that shifts or sits on a hard point puts stress on the joints, and joints are where leaks begin.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box</span>
                <span><strong>Burial depth is at least 600 mm (60 cm)</strong> from the top of the pipe to finished ground level.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box</span>
                <span><strong>The trench floor has at least 200 mm (20 cm) of clean sand</strong>, with a grain size of about 3 mm.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box</span>
                <span><strong>There is 200 mm of sand on all sides</strong> of the pipe.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box</span>
                <span><strong>No wood blocks, bricks, stones or Styrofoam sit under or around the pipe.</strong> These create pressure points that wear the pipe and stress fittings over time.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box</span>
                <span><strong>If the pipe needs lifting during laying</strong>, sandbags are placed at 1-metre intervals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box</span>
                <span><strong>Backfill is compacted mechanically</strong> every 20 cm.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box</span>
                <span><strong>At least 30 cm of compacted sand covers the pipe</strong> before any heavy vehicle or equipment crosses the trench.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0 mt-0.5">check_box</span>
                <span><strong>Marker tape is laid above the pipe</strong> during backfilling so anyone digging later knows what&apos;s below.</span>
              </li>
            </ul>
          </div>

          <p className="italic text-gray-900 font-medium">
            Before backfilling, take photos of the open trench with a measuring tape in frame. Once the sand goes in, nobody can check the depth again without digging it up.
          </p>

          {/* In-content Image 1: Trench Readiness */}
          {sections?.trenchBedding && (
            <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
              <img
                src={sections.trenchBedding.image}
                alt={sections.trenchBedding.imageAlt}
                width={800}
                height={450}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[460px]"
              />
              <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                <span>{sections.trenchBedding.imageCaption}</span>
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Fitting assembly and jointing checklist - H2 */}
      <section id="fitting-assembly-jointing" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Mechanical Jointing</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Fitting assembly and jointing checklist
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            This is where most installers get caught out, because NPT threads and conical seals need opposite treatment. Tape that seals a threaded joint will cause a conical joint to leak.
          </p>

          {/* NPT tapered threads */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-xl font-bold text-gray-900">
              NPT tapered threads
            </h3>
            <ul className="space-y-2 text-base pl-4 list-disc text-gray-700">
              <li>Threads are free of damage, burrs and cross-threading before assembly.</li>
              <li>Gas-rated thread sealing tape is applied. Standard plumbing tape for water lines isn&apos;t rated for gas.</li>
            </ul>
          </div>

          {/* Conical seals */}
          <div className="space-y-3 bg-red-50/50 border border-red-200 rounded-xl p-5">
            <h3 className="font-headline-md text-xl font-bold text-red-900">
              Conical seals (tees, elbows, manifolds)
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-red-600 text-lg shrink-0 mt-0.5">cancel</span>
                <span><strong>Nothing has been applied to metal-to-metal conical seals:</strong> no lubricant, no thread tape, no sealant.</span>
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-gray-700 pt-1">
              These fittings seal through direct metal contact. Anything between the two surfaces stops them seating properly, and you end up with a joint that looks tight and leaks under pressure.
            </p>
          </div>

          {/* Coupling fasteners */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-xl font-bold text-gray-900">
              Coupling fasteners
            </h3>
            <ul className="space-y-2 text-base pl-4 list-disc text-gray-700">
              <li>Coupling bolts and nuts are coated with copper paste, ceramic paste or molybdenum disulphide (MoS2) before torquing. This prevents galling and keeps torque readings accurate.</li>
            </ul>
          </div>

          {/* Staged torque sequence */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-xl font-bold text-gray-900">
              Staged torque sequence
            </h3>
            <p>
              Couplings need time for the seal material to settle. Going straight to final torque in one go is a common reason joints loosen later.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-secondary-container font-bold text-sm uppercase mb-1">Stage 1: 20 Nm</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tighten in alternate half-turns, rest 5 minutes, and repeat 3 times.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-secondary-container font-bold text-sm uppercase mb-1">Stage 2: 40 Nm</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tighten to 40 Nm, rest 15 minutes, and repeat 2 times.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-secondary-container font-bold text-sm uppercase mb-1">Stage 3: 47 Nm</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Apply final torque and rest 15 to 30 minutes, rechecking until the coupling is fully closed and holds torque.
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-800">
              * Torque values and times for each coupling are recorded on the installation sheet.
            </p>
            <p className="text-sm text-gray-600">
              Yes, this takes a while on a site with dozens of couplings. Build it into the schedule instead of trying to squeeze it.
            </p>
          </div>

          {/* In-content Image 2: Staged Torque Assembly */}
          {sections?.torqueCoupling && (
            <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
              <img
                src={sections.torqueCoupling.image}
                alt={sections.torqueCoupling.imageAlt}
                width={800}
                height={450}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[460px]"
              />
              <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                <span>{sections.torqueCoupling.imageCaption}</span>
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Safety, purging and exclusion zone checklist - H2 */}
      <section id="safety-purging-exclusion" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Safety Protocols</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Safety, purging and exclusion zone checklist
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          {/* Inert gas flushing */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-xl font-bold text-gray-900">
              Inert gas flushing
            </h3>
            <ul className="space-y-2 text-base pl-4 list-disc text-gray-700">
              <li>If the line has ever carried fuel or hydrocarbon vapour (during re-testing or repair, for example), it has been fully purged with nitrogen.</li>
              <li><strong>Compressed air was never used to purge these lines.</strong> Air mixed with leftover fuel vapour can form an explosive mixture inside the pipe.</li>
            </ul>
          </div>

          {/* Exclusion zones */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-xl font-bold text-gray-900">
              Exclusion zones
            </h3>
            <ul className="space-y-2 text-base pl-4 list-disc text-gray-700">
              <li>For hydrostatic testing, a perimeter of at least 50 feet (about 15 m) is set around test headers and pressurised sections.</li>
              <li>For pneumatic testing, a larger exclusion boundary is worked out from line volume, pipe diameter and test pressure. Gas stores far more energy than water at the same pressure, so a pneumatic failure is much more violent.</li>
              <li>Only essential, trained personnel are inside the zone during testing.</li>
            </ul>
          </div>

          {/* Signage and barriers */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-xl font-bold text-gray-900">
              Signage and barriers
            </h3>
            <ul className="space-y-2 text-base pl-4 list-disc text-gray-700">
              <li>&ldquo;DANGER: HIGH PRESSURE TESTING IN PROGRESS&rdquo; signs are posted at every access point.</li>
              <li>Physical barriers or blast shielding are in place wherever people or equipment could be exposed.</li>
            </ul>
          </div>

          {/* Why pneumatic testing is riskier */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 space-y-2">
            <h4 className="font-bold text-amber-950 text-base">
              Why pneumatic testing is riskier
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Water barely compresses, so when a hydrostatic test fails, the pressure drops almost instantly and the water leaks out. Compressed gas behaves differently. When a joint fails under pneumatic pressure, the stored energy releases all at once and can throw fittings or pipe sections with real force. That&apos;s why pneumatic tests need wider exclusion zones and tighter controls.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-commissioning pressure and tightness testing checklist - H2 */}
      <section id="pressure-tightness-testing" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Integrity Verification</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Pre-commissioning pressure and tightness testing checklist
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            The strength test checks that the system holds together under load. The tightness test finds the small leaks the strength test misses.
          </p>

          {/* High-pressure strength test */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-xl font-bold text-gray-900">
              High-pressure strength test
            </h3>
            <ul className="space-y-2 text-base pl-4 list-disc text-gray-700">
              <li>The pipeline is isolated from storage tanks and dispensers.</li>
              <li>It is pressurised to 25 bar (363 psi), and never above 40 bar.</li>
              <li>Nitrogen is used. Air is acceptable only on brand-new lines that have never held fuel.</li>
              <li>Pressure is held for 5 minutes.</li>
              <li>The line is inspected for structural movement, displaced fittings and unanchored sections that shift.</li>
            </ul>
          </div>

          {/* Low-pressure tightness test */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-xl font-bold text-gray-900">
              Low-pressure tightness test
            </h3>
            <p>
              Gas detectors earn their place once the system is running, but on a fresh installation the soap test is still the simplest and most reliable form of <Link to="/blog/lpg-leak-detection" className="text-secondary font-semibold hover:underline">LPG leak detection</Link>. It points you to the exact joint that&apos;s leaking, which a room detector can&apos;t do.
            </p>
            <ul className="space-y-2 text-base pl-4 list-disc text-gray-700">
              <li>Pressure is set between 0.02 and 0.70 bar (0.3 to 10 psi).</li>
              <li>Pressure is held for 1 hour.</li>
              <li>Soap solution (water plus detergent) is applied to every joint, fitting and flange.</li>
              <li>The undersides of pipes and fittings are checked with a mirror.</li>
              <li>No bubbles appear. Even slow, small bubbles mean a leak that needs fixing.</li>
            </ul>
          </div>

          {/* Temperature and pressure logging */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-xl font-bold text-gray-900">
              Temperature and pressure logging
            </h3>
            <ul className="space-y-2 text-base pl-4 list-disc text-gray-700">
              <li>Ambient temperature and gauge pressure are recorded every 10 minutes during the test.</li>
            </ul>
            <p>
              Pressure in a sealed pipe rises and falls with temperature, so a line tested in the morning sun can show a pressure change with no leak at all. Use the gas law P1/T1 = P2/T2 (with absolute pressure and temperature in Kelvin) to check whether a drop matches the temperature change or points to a real leak.
            </p>
          </div>

          {/* Table 1: Strength test vs tightness test */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm my-6 bg-white">
            <table className="w-full text-left text-xs sm:text-sm text-gray-700 min-w-[620px]">
              <thead className="bg-primary text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 font-semibold w-1/4">Criteria</th>
                  <th className="py-3.5 px-4 font-semibold w-3/8 border-l border-white/20">Strength test</th>
                  <th className="py-3.5 px-4 font-semibold w-3/8 border-l border-white/20">Tightness test</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">Purpose</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Confirms the system can hold pressure without failing</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Finds small leaks at joints and fittings</td>
                </tr>
                <tr className="bg-gray-50/70 hover:bg-orange-50/30">
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">Pressure</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">25 bar (max 40 bar)</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">0.02 to 0.70 bar</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">Hold time</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">5 minutes</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">1 hour</td>
                </tr>
                <tr className="bg-gray-50/70 hover:bg-orange-50/30">
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">Test medium</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Nitrogen (air only on new, unused lines)</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Nitrogen or air as per manufacturer</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">What to check</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Pipe movement, fitting displacement, anchoring</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">Bubbles at joints, pressure drop vs temperature log</td>
                </tr>
                <tr className="bg-gray-50/70 hover:bg-orange-50/30">
                  <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">Pass condition</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">No movement or failure</td>
                  <td className="py-3 px-4 border-l border-gray-200 text-gray-800">No bubbles, no unexplained pressure drop</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* In-content Image 3: Pressure Testing */}
          {sections?.pressureTesting && (
            <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
              <img
                src={sections.pressureTesting.image}
                alt={sections.pressureTesting.imageAlt}
                width={800}
                height={450}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[460px]"
              />
              <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                <span>{sections.pressureTesting.imageCaption}</span>
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Emergency handling and maintenance - H2 */}
      <section id="emergency-handling-maintenance" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Field Safety</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Emergency handling and maintenance
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          {/* If you smell gas or find a leak */}
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-5 space-y-3">
            <h3 className="font-bold text-red-900 text-base flex items-center gap-2">
              <span className="material-symbols-outlined text-red-600">emergency</span>
              If you smell gas or find a leak
            </h3>
            <ol className="pl-5 list-decimal space-y-1.5 text-xs sm:text-sm text-gray-800 font-medium">
              <li>Shut off the main gas supply immediately.</li>
              <li>Open doors and windows for natural ventilation. Don&apos;t switch electrical equipment on or off.</li>
              <li>Fully depressurise the system before anyone inspects or repairs it.</li>
            </ol>
          </div>

          {/* Never tighten under pressure */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-xl font-bold text-gray-900">
              Never tighten under pressure
            </h3>
            <p>
              Don&apos;t tighten fittings, flange bolts or couplings while the system is pressurised. It feels like a quick fix, but a fitting that gives way under load can release gas at full pressure right at the person holding the spanner. Depressurise first, every time.
            </p>
          </div>

          {/* In-content Image 4: Isolation Valves */}
          {sections?.isolationValves && (
            <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
              <img
                src={sections.isolationValves.image}
                alt={sections.isolationValves.imageAlt}
                width={800}
                height={450}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[460px]"
              />
              <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                <span>{sections.isolationValves.imageCaption}</span>
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* Conclusion - H2 */}
      <section id="conclusion" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Final Sign-off</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Conclusion
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Nearly every step in this checklist exists because someone, somewhere, skipped it and had a leak. Dig the trench to depth, bed the pipe on sand, keep tape off conical fittings, give the couplings their rest periods, and run both tests for the full time. Each one is simple on its own; the risk comes from letting one slide when the site is behind schedule.
          </p>
          <p>
            Keep signed copies of every completed checklist, torque record and test log. They protect you during inspections and warranty claims, and the next maintenance team will know exactly what was done.
          </p>
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-primary to-primary-container text-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary-container text-2xl">verified_user</span>
            <h3 className="font-headline-md text-lg sm:text-xl font-bold text-white">Need Professional Pipeline Commissioning?</h3>
          </div>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Hi Tech Energy provides certified pre-commissioning pressure tests, hydrostatic strength verification, and PESO-compliant LPG pipeline installations for restaurants, hotels, apartments, and industrial plants across India.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-block text-center bg-secondary-container hover:brightness-110 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow cursor-pointer"
            >
              Request Pipeline Installation &amp; Testing
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

