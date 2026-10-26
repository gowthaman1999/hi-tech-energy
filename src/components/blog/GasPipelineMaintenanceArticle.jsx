import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS } from '../../data/hitechData';

export default function GasPipelineMaintenanceArticle({ post }) {
  const { sections } = post;

  return (
    <div className="space-y-12 text-left">
      {/* Lead Hook Paragraphs */}
      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
        <p className="text-lg sm:text-xl font-medium text-gray-900 border-l-4 border-secondary-container pl-4 py-1 italic bg-orange-50/40 rounded-r-xl">
          If you manage a gas pipeline, you already know the uncomfortable truth: the steel you buried years ago changes a little every day. Soil chemistry, moisture, stray current from a nearby rail line, a bit of H₂S in the gas stream. None of it shows up on a dashboard until it does, usually at the worst possible moment.
        </p>
        <p>
          Pipeline maintenance has come a long way from &ldquo;dig it up and look.&rdquo; You can now inspect hundreds of kilometres of live line without stopping flow, find a leak within metres in under a minute, and repair a damaged section without venting methane.
        </p>
        <p>
          This guide walks through how that works in practice. We&apos;ll cover the corrosion threats behind most failures, the inspection tools that find them early, the repair methods that keep gas flowing, and the standards that tie it all together. Whether you&apos;re an integrity engineer, an operations lead, or a facility owner comparing quotes for an <Link to="/services/industrial-solutions" className="text-secondary font-semibold hover:underline">industrial gas pipeline service</Link>, you&apos;ll come away knowing what to ask for and why.
        </p>
      </div>

      {/* Summary takeaways - H2 */}
      <section id="summary-takeaways" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Key Highlights</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Summary takeaways
          </h2>
        </div>

        <div className="bg-gradient-to-br from-amber-50/60 to-orange-50/40 border border-orange-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
          <ul className="space-y-4 text-sm sm:text-base text-gray-800">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">shield</span>
              <span><strong>Monitored cathodic protection cuts corrosion failures by about 10x.</strong> Penspen&apos;s analysis of post-1980 gas transmission lines shows that pipes with properly monitored CP fail from corrosion roughly ten times less often than those without.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">manage_search</span>
              <span><strong>Smart PIGs plus API 1163 validation reduce digs.</strong> When Magnetic Flux Leakage (MFL) and Ultrasonic Testing (UT) results are checked against a proper dig validation process, you only excavate where the data says you need to.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">recycling</span>
              <span><strong>Zero-venting methods pay for themselves.</strong> Portable pumpdown compressors recover around 90% of the gas that would otherwise be vented, and the US EPA reports that hot tapping delivers a 258% internal rate of return compared with traditional depressurize-and-vent tie-ins.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Primary corrosion threats in natural gas pipelines - H2 */}
      <section id="primary-corrosion-threats" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Corrosion Mechanisms</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            What are the primary corrosion threats in natural gas pipelines?
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            Natural gas pipelines face three main corrosion threats: external corrosion from soil and moisture contact, internal corrosion driven by water, H₂S and CO₂ inside the line, and stray current corrosion caused by nearby electrical systems. Each attacks the pipe wall differently, so each needs its own prevention and monitoring approach.
          </p>

          <div id="external-internal-corrosion-mechanisms" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              External and internal corrosion mechanisms
            </h3>
            <p>
              Corrosion takes a few distinct forms, and the one you&apos;re dealing with decides how you respond.
            </p>
            <p>
              <strong>General corrosion</strong> is the slow, even thinning you see across a broad area of exposed steel. It&apos;s predictable and fairly easy to plan around.
            </p>
            <p>
              <strong>Localized pitting</strong> is more dangerous. The metal loss concentrates in small, deep pits, so a pipe can look healthy on average while one pit eats through most of the wall.
            </p>
            <p>
              <strong>Microbiologically influenced corrosion (MIC)</strong> happens when bacteria settle on the pipe surface, often in low spots where water collects. Sulphate-reducing bacteria produce byproducts that speed up metal loss a lot. Corrolytics notes that MIC often looks like ordinary pitting at first glance, which is why it gets misdiagnosed.
            </p>
            <p>Inside the pipe, the main culprits are:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li><strong>Water.</strong> Even small amounts that drop out of the gas stream give corrosion the electrolyte it needs.</li>
              <li><strong>Hydrogen sulphide (H₂S).</strong> It forms iron sulphide and can cause sulphide stress cracking in susceptible steels.</li>
              <li><strong>Carbon dioxide (CO₂).</strong> It dissolves in water to form carbonic acid, which attacks the wall from the inside. This is often called &ldquo;sweet corrosion.&rdquo;</li>
            </ul>
            <p>
              Put all three together in a low point of the line and you have a corrosion hotspot that no external coating can help with.
            </p>
          </div>

          <div id="cathodic-protection-stray-current" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Cathodic protection (CP) and stray current interference
            </h3>
            <p>
              For buried steel, the first line of defence is a good coating, usually fusion-bonded epoxy (FBE). Cathodic protection backs it up at the spots where the coating inevitably gets damaged.
            </p>
            <p>There are two ways to apply it:</p>

            {/* CP Methods Table */}
            <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-primary text-white border-b border-primary">
                    <th className="py-3.5 px-4 font-bold">CP method</th>
                    <th className="py-3.5 px-4 font-bold">How it works</th>
                    <th className="py-3.5 px-4 font-bold">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">Sacrificial anode</td>
                    <td className="py-3 px-4 text-gray-700">Blocks of a more reactive metal (zinc, magnesium, aluminium) are connected to the pipe and corrode instead of it</td>
                    <td className="py-3 px-4 text-gray-700">Shorter pipelines, well-coated lines, sites without a power supply</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-orange-50/20">
                    <td className="py-3 px-4 font-semibold text-secondary-container">Impressed current (ICCP)</td>
                    <td className="py-3 px-4 text-gray-700">A rectifier pushes DC current from inert anodes through the soil to the pipe</td>
                    <td className="py-3 px-4 text-gray-700">Long transmission lines, large structures, poorly coated or older pipe</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Both make the pipe the cathode in an electrochemical cell, so the steel stops giving up electrons.
            </p>
            <p>
              Stray current complicates this. When a pipeline runs alongside high-voltage overhead power lines or DC rail systems, current leaks into the ground and distorts your CP readings. The potential logs fill up with noise, and a technician taking a single spot measurement can&apos;t tell whether the pipe is protected.
            </p>
            <p>
              The old answer was to dig and check, which is slow and expensive. National Gas in the UK tried something else. They deployed MiniLog units that record pipe-to-soil potential continuously for 48 hours. Over two full days the stray current patterns average out and the real protection level shows through. That let them clear an inspection backlog and avoid up to £324,000 in exploratory digs that would only have confirmed the pipe was fine.
            </p>

            {/* In-content Image 1: Cathodic Protection */}
            {sections?.cathodicProtection && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.cathodicProtection.image}
                  alt={sections.cathodicProtection.imageAlt}
                  width="1200"
                  height="675"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.cathodicProtection.imageCaption}</span>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </section>

      {/* Inspecting gas pipelines without halting service - H2 */}
      <section id="inspect-gas-pipelines-without-halting-service" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Non-Intrusive Testing</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            How do operators inspect gas pipelines without halting service?
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            Operators inspect live gas pipelines with in-line inspection tools called smart PIGs, which travel inside the pipe with the gas flow and record wall condition through magnetic, ultrasonic or acoustic sensors. Continuous leak detection systems run alongside, monitoring pressure, flow and acoustic signals around the clock.
          </p>

          <div id="inline-inspection-ili-smart-pigs" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              In-line inspection (ILI) with smart PIGs
            </h3>
            <p>
              A smart PIG (pipeline inspection gauge) is a sensor-packed tool that&apos;s loaded into a launcher, pushed along by the gas, and pulled out at a receiver downstream. TC Energy and other large operators run them routinely because supply never has to stop, so customers don&apos;t notice a thing.
            </p>
            <p>What the PIG finds depends on what&apos;s inside it:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li><strong>Magnetic Flux Leakage (MFL)</strong> is the workhorse. Strong magnets saturate the pipe wall, and sensors pick up where the field &ldquo;leaks&rdquo; out because metal is missing. It&apos;s good at finding internal and external metal loss from corrosion.</li>
              <li><strong>Ultrasonic Testing (UT)</strong> sends sound pulses into the wall and times the echoes. You get a direct wall thickness measurement, and it can also spot laminations (layers separating inside the steel).</li>
              <li><strong>Electro-Magnetic Acoustic Transducers (EMAT)</strong> generate ultrasonic waves without a liquid couplant, which suits gas lines. EMAT is the tool for fine cracks and stress corrosion cracking (SCC), which MFL tends to miss.</li>
            </ul>
            <p>
              Mercury Training Center points out that no single tool catches everything, so many operators run combination tools or schedule separate runs for different threats.
            </p>

            {/* In-content Image 2: Smart PIG Inspection */}
            {sections?.smartPig && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.smartPig.image}
                  alt={sections.smartPig.imageAlt}
                  width="1200"
                  height="675"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.smartPig.imageCaption}</span>
                </figcaption>
              </figure>
            )}

            <p>
              A PIG report is a set of predictions. If the tool says there&apos;s a 40% wall loss feature at a given spot, you still need to know how far to trust that number. API 1163 sets out the validation process:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
              <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm space-y-2">
                <span className="w-7 h-7 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center">1</span>
                <p className="text-xs text-gray-700 leading-snug">Review the tool&apos;s stated performance specs (detection threshold, sizing tolerance, confidence level).</p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm space-y-2">
                <span className="w-7 h-7 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center">2</span>
                <p className="text-xs text-gray-700 leading-snug">Pick a sample of reported features to excavate.</p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm space-y-2">
                <span className="w-7 h-7 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center">3</span>
                <p className="text-xs text-gray-700 leading-snug">Measure those features directly in the field.</p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm space-y-2">
                <span className="w-7 h-7 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center">4</span>
                <p className="text-xs text-gray-700 leading-snug">Compare the field measurements against the tool&apos;s predictions.</p>
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm space-y-2">
                <span className="w-7 h-7 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center">5</span>
                <p className="text-xs text-gray-700 leading-snug">Accept, adjust, or reject the tool&apos;s results based on how well they match.</p>
              </div>
            </div>

            <p>
              Once the tool&apos;s accuracy is confirmed, you can trust its readings on the hundreds of features you didn&apos;t dig up, instead of excavating everything just in case.
            </p>
          </div>

          <div id="continuous-leak-detection-systems-compared" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Continuous leak detection systems (LDS) compared
            </h3>
            <p>
              Smart PIGs give you a detailed snapshot every few years. Leak detection systems watch the line every second in between. Atmos International groups the main approaches like this.
            </p>
            <p>
              <strong>Real-Time Transient Models (RTTM)</strong> build a hydraulic simulation of the pipeline and compare predicted pressure and flow against actual readings. They&apos;re very sensitive, but whenever an operator changes the flow rate or starts a compressor, the model can mistake normal behaviour for a leak.
            </p>
            <p>
              <strong>Statistical analytics using SPRT (Sequential Probability Ratio Testing)</strong> skip the physics model. They look at the statistical pattern of flow and pressure data and ask whether it looks more like a leak or like normal operation, which holds up much better during flow changes.
            </p>
            <p>
              <strong>Negative pressure wave (acoustic) detection</strong> listens for the sudden pressure drop that travels up and down the pipe when a rupture happens. Sensors at each end time the wave&apos;s arrival, which lets these systems locate a leak to within metres over distances of up to 140 km in about 60 seconds.
            </p>
            <p>
              <strong>Distributed fibre optics</strong> run a cable along the pipeline. Distributed Acoustic Sensing (DAS) picks up the sound of escaping gas or someone digging nearby, while Distributed Temperature Sensing (DTS) detects the cooling effect of gas expanding through a leak.
            </p>

            {/* LDS Comparison Table */}
            <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-primary text-white border-b border-primary">
                    <th className="py-3.5 px-4 font-bold">Technology</th>
                    <th className="py-3.5 px-4 font-bold">Detection speed</th>
                    <th className="py-3.5 px-4 font-bold">Location accuracy</th>
                    <th className="py-3.5 px-4 font-bold">False alarm risk</th>
                    <th className="py-3.5 px-4 font-bold">Best use case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">RTTM</td>
                    <td className="py-3 px-4 text-gray-700">Minutes</td>
                    <td className="py-3 px-4 text-gray-700">Moderate</td>
                    <td className="py-3 px-4 text-amber-700 font-medium">High (during transients)</td>
                    <td className="py-3 px-4 text-gray-700">Steady-state trunklines</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-orange-50/20">
                    <td className="py-3 px-4 font-semibold text-secondary-container">Statistical (SPRT)</td>
                    <td className="py-3 px-4 text-gray-700 font-medium">Fast</td>
                    <td className="py-3 px-4 text-gray-700">High</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Low</td>
                    <td className="py-3 px-4 text-gray-700">Complex or transient gas lines</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">Negative pressure wave</td>
                    <td className="py-3 px-4 text-gray-700 font-medium">Instant (&lt;60s)</td>
                    <td className="py-3 px-4 text-gray-700">Metre-level</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Very low</td>
                    <td className="py-3 px-4 text-gray-700">Long-distance transmission</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">Fibre optic (DAS/DTS)</td>
                    <td className="py-3 px-4 text-gray-700 font-medium">Instant</td>
                    <td className="py-3 px-4 text-gray-700">Exact (&lt;1 m)</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Low</td>
                    <td className="py-3 px-4 text-gray-700">High-consequence areas (HCAs)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              In practice, many operators combine two methods: a statistical system for everyday reliability, plus fibre or acoustic sensing in populated or environmentally sensitive stretches.
            </p>

            {/* In-content Image 3: Leak Monitoring SCADA */}
            {sections?.leakMonitoring && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.leakMonitoring.image}
                  alt={sections.leakMonitoring.imageAlt}
                  width="1200"
                  height="675"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.leakMonitoring.imageCaption}</span>
                </figcaption>
              </figure>
            )}

            <p>
              The same thinking applies at a smaller scale inside plants. <Link to="/blog/lpg-leak-detection" className="text-secondary font-semibold hover:underline">LPG leak detection</Link> works a little differently because LPG is heavier than air, so it settles and pools in low spots instead of rising. That&apos;s why gas detectors in factories, hotels and commercial kitchens are mounted close to floor level, usually wired to an <Link to="/services/leakage-detection-system" className="text-secondary font-semibold hover:underline">automatic shut-off valve on the supply line</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Repair without disruptions or methane venting - H2 */}
      <section id="repaired-without-disruptions-methane-venting" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">In-Service Maintenance</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            How can gas pipelines be repaired without service disruptions or methane venting?
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            Gas pipelines can be repaired without shutdowns or venting by using hot tapping to connect into live lines, stopple plugging to isolate sections under pressure, portable compressors to move gas out of a segment before work, and composite wraps to restore strength without cutting the pipe.
          </p>

          <div id="hot-tapping-stopple-plugging" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Hot tapping and stopple plugging
            </h3>
            <p>
              Hot tapping lets you cut a new branch connection into a pipeline while it&apos;s still pressurized and flowing, so there&apos;s no blowdown and customers keep their supply.
            </p>
            <p>A typical hot tap runs like this:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li><strong>Assess and plan.</strong> Confirm pipe condition, wall thickness, and operating pressure at the tap location.</li>
              <li><strong>Weld the fitting.</strong> A split tee or reinforced fitting is welded onto the live pipe using qualified in-service welding procedures.</li>
              <li><strong>Install and test the valve.</strong> A full-bore valve is bolted to the fitting, and the assembly is pressure tested.</li>
              <li><strong>Mount the tapping machine and cut.</strong> The machine passes through the open valve and cuts a circular coupon out of the pipe wall.</li>
              <li><strong>Retract and close.</strong> The cutter pulls back with the coupon held on a pilot drill, and the valve is closed.</li>
              <li><strong>Remove the machine and connect.</strong> The tapping machine comes off, and the new branch line is tied in.</li>
            </ol>
            <p>
              Stopple plugging builds on the same idea when you need to isolate a section for repair. Crews make two hot taps on either side of the work area and insert plugging heads to block flow, while a temporary bypass keeps gas moving around the section.
            </p>
            <p>
              According to the US EPA&apos;s Natural Gas STAR programme, hot tapping avoids the gas loss, customer disruption and flaring of a conventional tie-in, and typically pays back in about five months.
            </p>
            <p>Before you approve a hot tap, check these six things:</p>

            {/* Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg shrink-0 mt-0.5">check_box</span>
                <p className="text-xs sm:text-sm text-gray-700"><strong>Operating pressure:</strong> is it within the fitting and machine&apos;s rated limits, and does it need to come down during welding?</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg shrink-0 mt-0.5">check_box</span>
                <p className="text-xs sm:text-sm text-gray-700"><strong>Metallurgy:</strong> what&apos;s the pipe grade and carbon equivalent, and can it be welded in service without risk of hydrogen cracking?</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg shrink-0 mt-0.5">check_box</span>
                <p className="text-xs sm:text-sm text-gray-700"><strong>Isolation valves:</strong> do the upstream and downstream valves work, in case something goes wrong?</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg shrink-0 mt-0.5">check_box</span>
                <p className="text-xs sm:text-sm text-gray-700"><strong>Physical clearance:</strong> is there room around the excavation for the tapping machine, valve, and crew?</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg shrink-0 mt-0.5">check_box</span>
                <p className="text-xs sm:text-sm text-gray-700"><strong>Flow dynamics:</strong> is there enough flow to carry weld heat away, without so much that it affects weld quality or the cut?</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg shrink-0 mt-0.5">check_box</span>
                <p className="text-xs sm:text-sm text-gray-700"><strong>Purge protocols:</strong> is there a clear plan for purging air from the new branch before commissioning?</p>
              </div>
            </div>
          </div>

          <div id="gas-recovery-composite-wraps" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Gas recovery and composite reinforcement wraps
            </h3>
            <p>
              Sometimes you have to empty a segment. Even then, venting isn&apos;t your only option.
            </p>
            <p>
              Portable pumpdown compressors pull gas out of the isolated section and push it into an adjacent segment or a downstream line. The US EPA estimates this recovers around 90% of the gas that would otherwise be vented. Methane traps far more heat than CO₂ over the short term, so that helps your emissions reporting as much as your gas balance.
            </p>
            <p>
              For damaged pipe that&apos;s still sound enough to keep in service, composite repair wraps are often the fastest fix. American Pipeline Solutions describes the process: crews clean the damaged area, fill the defect with a load-transfer epoxy, and wrap layers of glass or carbon fibre composite around the pipe. Once cured, the wrap carries the hoop stress that the thinned steel can no longer handle.
            </p>

            {/* Composite Wrap vs Welded Sleeve Table */}
            <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-primary text-white border-b border-primary">
                    <th className="py-3.5 px-4 font-bold">Factor</th>
                    <th className="py-3.5 px-4 font-bold">Composite wrap</th>
                    <th className="py-3.5 px-4 font-bold">Welded steel sleeve</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">Hot work required</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">No</td>
                    <td className="py-3 px-4 text-gray-700">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">Line shutdown needed</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">No</td>
                    <td className="py-3 px-4 text-gray-700">Sometimes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">Installation time</td>
                    <td className="py-3 px-4 text-gray-700 font-medium">Hours</td>
                    <td className="py-3 px-4 text-gray-700">Often a day or more</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">Crew skill</td>
                    <td className="py-3 px-4 text-gray-700">Trained installers</td>
                    <td className="py-3 px-4 text-gray-700">Qualified in-service welders</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">Good for</td>
                    <td className="py-3 px-4 text-gray-700">External corrosion, dents, gouges</td>
                    <td className="py-3 px-4 text-gray-700">Wider range of defects, including some leaks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* In-content Image 4: Composite Wrap Repair */}
            {sections?.compositeRepair && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.compositeRepair.image}
                  alt={sections.compositeRepair.imageAlt}
                  width="1200"
                  height="675"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.compositeRepair.imageCaption}</span>
                </figcaption>
              </figure>
            )}

            <p>
              Composite wraps don&apos;t suit every defect. Through-wall leaks and some crack types need a different repair, but for external metal loss a wrap saves time and avoids welding on a live line.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory frameworks governing gas pipeline integrity - H2 */}
      <section id="regulatory-frameworks-pipeline-integrity" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Compliance &amp; Engineering Standards</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            What regulatory frameworks govern gas pipeline integrity?
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            Gas pipeline integrity is mainly governed by ASME B31.8S, which sets out a risk-based integrity management programme. It&apos;s supported by API RP 1160 for hazardous liquids, API 1163 for in-line inspection validation, and ASME B31G for assessing the remaining strength of corroded pipe.
          </p>

          <div id="asme-b318s-integrity-lifecycle" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              The ASME B31.8S integrity lifecycle
            </h3>
            <p>
              Most gas pipeline integrity programmes are built on ASME B31.8S. Penspen and Technical Toolboxes both describe it as a repeating loop:
            </p>

            <div className="p-4 bg-primary text-white rounded-xl text-center text-xs sm:text-sm font-semibold tracking-wide shadow-sm overflow-x-auto whitespace-nowrap">
              Threat identification &rarr; Data integration &rarr; Risk assessment &rarr; Integrity assessment (ILI / ECDA / pressure test) &rarr; Mitigation &amp; reassessment
            </div>

            <ol className="list-decimal pl-6 space-y-3 text-gray-800">
              <li><strong>Threat identification.</strong> List every threat that could apply to each segment: external corrosion, internal corrosion, SCC, manufacturing defects, third-party damage, weather and ground movement.</li>
              <li><strong>Data integration.</strong> Pull together everything you know: construction records, coating type, CP survey results, past ILI runs, leak history, soil data.</li>
              <li><strong>Risk assessment.</strong> Rank segments by likelihood and consequence of failure.</li>
              <li><strong>Integrity assessment.</strong> Inspect the highest-risk segments first, using in-line inspection, external corrosion direct assessment (ECDA), or hydrostatic testing.</li>
              <li><strong>Mitigation and reassessment.</strong> Repair what you find, improve prevention, and set the next inspection interval, then start again with the new data.</li>
            </ol>

            <p>
              All of this depends on good records. Technical Toolboxes stresses the TVC standard: every data point should be traceable (you know where it came from), verifiable (another record or test can confirm it), and complete (no gaps). If you can&apos;t prove a pipe&apos;s grade or wall thickness, regulators will expect you to assume the worst, which usually means lower operating pressures.
            </p>
          </div>

          <div id="safe-working-pressure-qra" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Safe working pressure and quantitative risk assessment (QRA)
            </h3>
            <p>
              Remaining strength assessment answers a practical question: now that corrosion has taken some wall away, how much pressure can this pipe still safely hold?
            </p>
            <p>
              Engineers use ASME B31G or the more common Modified B31G (the 0.85dL method). Mercury Training Center covers both in its integrity courses. Here&apos;s how Modified B31G works:
            </p>

            {/* Formula Block */}
            <div className="p-5 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto shadow-inner border border-slate-800">
              <p className="text-secondary-fixed-dim font-bold mb-2">MODIFIED B31G (0.85dL METHOD) FORMULATION:</p>
              <pre className="text-slate-300">
{`INPUTS
  D      = outside diameter of pipe
  t      = nominal wall thickness
  d      = maximum depth of corrosion
  L      = longitudinal length of corrosion
  SMYS   = specified minimum yield strength
  S_flow = SMYS + 69 MPa (10 ksi)

STEP 1: Folias bulging factor (M)
  If L² / (D·t) ≤ 50:
      M = √[ 1 + 0.6275 · (L² / D·t) − 0.003375 · (L² / D·t)² ]
  If L² / (D·t) > 50:
      M = 0.032 · (L² / D·t) + 3.3

STEP 2: Estimated failure stress (S_f)
  S_f = S_flow · [ (1 − 0.85 · d/t) / (1 − 0.85 · (d/t) / M) ]

STEP 3: Estimated failure pressure (P_f)
  P_f = (2 · S_f · t) / D

STEP 4: Safe operating pressure
  P_safe = P_f × design factor  (e.g., 0.72 for Class 1 locations)
  Compare P_safe against the current MAOP.`}
              </pre>
            </div>

            <p>
              Here&apos;s a worked example. Take an API 5L X52 pipe (SMYS 359 MPa) with a 610 mm outside diameter and 9.5 mm wall. An ILI run reports a corrosion patch 3.8 mm deep (d/t = 0.40) and 150 mm long.
            </p>

            {/* Worked Calculation Card */}
            <div className="bg-gradient-to-br from-slate-50 to-orange-50/30 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-2 text-xs sm:text-sm text-gray-800">
              <p className="font-bold text-primary text-sm sm:text-base border-b border-gray-200 pb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-base">calculate</span>
                Worked Example Step-by-Step:
              </p>
              <ul className="space-y-1.5 font-mono text-xs sm:text-sm">
                <li>&bull; L² / (D&middot;t) = 22,500 / 5,795 = 3.88</li>
                <li>&bull; M = &radic;(1 + 2.437 &minus; 0.051) = 1.84</li>
                <li>&bull; S_flow = 359 + 69 = 428 MPa</li>
                <li>&bull; S_f = 428 &times; (0.66 / 0.815) &asymp; 347 MPa</li>
                <li>&bull; P_f = (2 &times; 347 &times; 9.5) / 610 &asymp; 10.8 MPa (about 108 bar)</li>
                <li>&bull; P_safe = 10.8 &times; 0.72 &asymp; 7.8 MPa (about 78 bar)</li>
              </ul>
            </div>

            <p>
              If the line&apos;s MAOP is 70 bar, this defect can stay in service until the next scheduled repair. If MAOP is 85 bar, you either reduce pressure or repair it now. These methods are generally applied to defects between 10% and 80% of wall thickness, and anything deeper than 80% is typically repaired whatever the calculation says.
            </p>
            <p>
              Quantitative risk assessment (QRA) takes risk ranking further. Many operators still use simple high/medium/low matrices, which are easy to build but hard to compare across a network. Penspen advocates QRA, which calculates actual numbers: the probability of failure per kilometre per year, and the individual risk to someone standing at a given distance from the pipe. Those risk transects show how risk drops off with distance, which matters when you&apos;re deciding whether a new housing development can go up 50 metres from your line.
            </p>
            <p>
              Once you have the numbers, the ALARP principle (As Low As Reasonably Practicable) guides what to do about them. Typical measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Laying concrete slabs above the pipe to protect against excavator strikes</li>
              <li>Using heavier wall pipe in populated areas</li>
              <li>Increasing depth of cover to keep third-party damage at bay</li>
              <li>Adding marker tape and signage along the route</li>
            </ul>
            <p>
              You keep adding measures until the cost of the next one is grossly out of proportion to the risk it removes.
            </p>
          </div>
        </div>
      </section>

      {/* Wrapping up - H2 */}
      <section id="wrapping-up" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Conclusion &amp; Best Practices</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Wrapping up
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Pipeline integrity comes from a system where problems get found early and fixed without creating new ones, and that system starts at the design stage. Getting <Link to="/blog/lpg-pipe-sizing" className="text-secondary font-semibold hover:underline">gas pipe sizing for LPG</Link> right during installation, with the correct diameter for the connected load and an allowance for pressure drop over the run, leaves you fewer weak points to monitor later.
          </p>
          <p>
            From there, good coatings and monitored cathodic protection stop most corrosion before it starts. Smart PIGs and continuous leak detection catch what slips through. Hot tapping, gas recovery compressors and composite wraps let you fix things without shutting down or venting, and ASME B31.8S keeps your spending pointed at the segments where the risk actually is.
          </p>
        </div>

        {/* Call to Action Box inside Article */}
        <div className="bg-gradient-to-r from-primary via-primary-container to-primary text-white p-6 sm:p-8 rounded-2xl shadow-xl mt-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-secondary-fixed-dim text-xs font-bold uppercase tracking-wider">Hi Tech Energy Engineering</span>
            <h3 className="font-headline-lg text-xl sm:text-2xl font-bold text-white">
              Planning Gas Pipeline Maintenance or an Infrastructure Upgrade?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Hi Tech Energy delivers PESO-compliant industrial gas pipeline installations, smart leak detection, and pipeline maintenance across India.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-secondary-container hover:brightness-110 text-white font-bold py-2.5 px-5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Request Integrity Consultation</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <a
                href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-all inline-flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                <span>{OFFICE_LOCATIONS.headOffice.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
