import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_LOCATIONS } from '../../data/hitechData';

export default function LpgLeakDetectionArticle({ post }) {
  const { sections } = post;

  return (
    <div className="space-y-12 text-left">
      {/* Lead Hook Paragraphs */}
      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
        <p className="text-lg sm:text-xl font-medium text-gray-900 border-l-4 border-secondary-container pl-4 py-1 italic bg-orange-50/40 rounded-r-xl">
          If you run a restaurant kitchen, a hostel, a lab, or a factory that uses LPG, you've probably had that moment: a faint smell near the manifold, and a quick "is that gas or is it just the drain?"
        </p>
        <p>
          Most of the time it's nothing. But LPG is heavier than air, it collects quietly in low spots, and a single spark from a light switch can be enough to ignite it.
        </p>
        <p>
          This guide covers how LPG leaks are detected, starting with the smell your nose picks up and going through to the sensors and automatic shut-off valves used in commercial pipeline systems. It also covers why detectors sometimes go off for no clear reason, and what the safety rules say about storing cylinders and running gas lines.
        </p>
      </div>

      {/* Quick takeaways - H2 */}
      <section id="quick-takeaways" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Key Highlights</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Quick takeaways
          </h2>
        </div>

        <div className="bg-gradient-to-br from-amber-50/60 to-orange-50/40 border border-orange-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
          <ul className="space-y-3.5 text-sm sm:text-base text-gray-800">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">warning</span>
              <span><strong>Propane and butane are heavier than air</strong>, so a leak pools near the floor and in drains, pits, and basements instead of drifting away.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">air</span>
              <span><strong>LPG has no natural odour.</strong> Suppliers add ethyl mercaptan so you can smell a leak (the rotten egg or rotten cabbage smell).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">sensors</span>
              <span><strong>Sensors work in different ways.</strong> Metal oxide sensors (like the MQ-2 and MQ-6) react to gas touching a heated element, infrared sensors measure how gas absorbs light, and ultrasonic sensors pick up changes in sound waves.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">smart_toy</span>
              <span><strong>A detector that only beeps relies on someone hearing it.</strong> A detector wired to a solenoid valve cuts the gas supply on its own.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">emergency</span>
              <span><strong>If you smell gas</strong>, don't touch switches, don't use a lighter or start a vehicle, shut the cylinder or main valve if it's safe, open doors and windows, and leave. Call for help from outside.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container text-xl shrink-0 mt-0.5">build_circle</span>
              <span><strong>Humidity, cleaning chemicals, cooking fumes, and charging batteries</strong> are common causes of false alarms. Never reset a detector inside an area where you suspect a leak.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What is LPG leak detection and why does it matter? - H2 */}
      <section id="what-is-lpg-leak-detection" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Fundamentals &amp; Science</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            What is LPG leak detection and why does it matter?
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            LPG leak detection is any method that spots escaping propane or butane before it builds up enough to catch fire. That might be your nose, a sensor on the wall, or a full control panel that shuts the gas off and sends an SMS. Whatever the method, you want to catch the leak while the concentration is still well below the point where it can burn.
          </p>

          <div id="why-lpg-behaves-differently" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Why LPG behaves differently from other gases
            </h3>
            <p>
              LPG is heavier than air, so a leak settles at floor level and in low areas like drains, cellars, and service pits.
            </p>
            <p>
              Natural gas (PNG) is lighter than air and tends to rise and disperse. LPG does the opposite. In a kitchen, it can spread across the floor and build up under counters. In a plant room, it can collect in a trench. This is why LPG sensors are mounted low on the wall, usually around 15 to 30 cm above the floor, and why ventilation at floor level matters.
            </p>
            <p>
              That behaviour creates two risks:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li>
                <strong>Fire and explosion.</strong> LPG burns when it mixes with air in roughly the 2% to 10% range. Below that, the mix is too lean, and above it, too rich. A pooled leak can easily pass through that range.
              </li>
              <li>
                <strong>Asphyxiation.</strong> In a closed, low space, LPG pushes out oxygen. People entering a pit or basement after a leak can be at risk even if nothing ignites.
              </li>
            </ol>
          </div>

          <div id="why-your-lpg-smells" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Why your LPG smells
            </h3>
            <p>
              Pure LPG has no colour and no smell, so you'd have no idea it was leaking. Suppliers add a small amount of an odorant, usually ethyl mercaptan, which gives off a sharp sulphur or rotten egg smell.
            </p>
            <p>
              The smell has limits, though. Someone with a weak sense of smell might miss it. So might someone who's been in the room for a while, because your nose gets used to it. And nobody smells a leak in a space nobody walks into. Detectors cover those cases.
            </p>
          </div>

          <div id="home-cylinders-vs-industrial-systems" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Home cylinders vs industrial systems
            </h3>
            <p>
              The risk looks different depending on scale:
            </p>

            {/* Scale Comparison Table */}
            <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-primary text-white border-b border-primary">
                    <th className="py-3.5 px-4 font-bold">Setting</th>
                    <th className="py-3.5 px-4 font-bold">Typical setup</th>
                    <th className="py-3.5 px-4 font-bold">Where leaks usually happen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-primary">Homes</td>
                    <td className="py-3 px-4 text-gray-700">One or two 14.2 kg cylinders, rubber tube to the stove</td>
                    <td className="py-3 px-4 text-gray-700">Regulator, worn rubber hose, stove knobs</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold text-primary">Commercial kitchens, hostels, hotels</td>
                    <td className="py-3 px-4 text-gray-700">Cylinder bank with a manifold and copper or GI pipeline</td>
                    <td className="py-3 px-4 text-gray-700">Manifold joints, valves, pipe threads, appliance connections</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-primary">Industries and labs</td>
                    <td className="py-3 px-4 text-gray-700">Bulk storage, vaporisers, long pipelines, gas headers</td>
                    <td className="py-3 px-4 text-gray-700">Flanges, valves, buried or concealed pipe, regulator stations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              A bigger system has more joints, and every joint can leak. Commercial and industrial setups need more than a nose and a good habit.
            </p>
            <p>
              This is worth thinking about if you're comparing <Link to="/blog/domestic-lpg-pipeline-vs-cylinder" className="text-secondary font-semibold hover:underline">LPG pipeline vs LPG cylinder</Link> setups for a building. Many apartments now use a <Link to="/services/domestic-lpg-pipeline" className="text-secondary font-semibold hover:underline">domestic LPG gas pipeline service</Link>, where a central cylinder bank outside the building feeds each flat through a fixed line. The cylinders stay out of the kitchen, which removes a big risk, but the pipeline adds joints and valves that need their own leak checks.
            </p>
            <p>
              On bigger sites, the layout matters too. When people weigh <Link to="/blog/lpg-manifold-vs-gas-header" className="text-secondary font-semibold hover:underline">LPG manifold vs gas header</Link> designs, the detection question comes down to where leaks can happen. A manifold joins several cylinders at one point, so leaks tend to show up in one area. A gas header splits the supply into multiple branch lines, so you need sensor coverage along each branch.
            </p>
          </div>

          <div id="physical-sensory-signs" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Physical and sensory signs of an LPG leak
            </h3>
            <p>
              The first sign is usually the smell: rotten eggs or sulphur, stronger near the floor.
            </p>
            <p>
              You may also hear it. A small leak at a cylinder valve, regulator, or pipe joint hisses. On larger high-pressure lines, the sound can be a louder roar or whistle.
            </p>
            <p>
              On outdoor or underground lines, look for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>
                <strong>Frost or ice forming on a valve or joint.</strong> LPG gets very cold as it expands, so a leak can freeze moisture around it. Don't confuse this with normal <Link to="/blog/lpg-gas-freezing" className="text-secondary font-semibold hover:underline">LPG cylinder freezing</Link>, where frost forms on the body of a cylinder because gas is being drawn from it faster than it can vaporise. That's a supply issue. Frost on a joint or fitting is the warning sign.
              </li>
              <li>A white mist or fog near a fitting.</li>
              <li>Bubbles rising through puddles, wet soil, or standing water.</li>
              <li>Dirt or dust blowing around near the ground for no reason.</li>
              <li>A patch of grass or plants along a buried pipe route that has turned brown or died.</li>
            </ul>

            {/* In-content image 1: Bubble test */}
            {sections?.bubbleTest && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.bubbleTest.image}
                  alt={sections.bubbleTest.imageAlt}
                  width="960"
                  height="540"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.bubbleTest.imageCaption}</span>
                </figcaption>
              </figure>
            )}

            <p>
              To check a joint you suspect, brush soapy water on it. Bubbles mean gas is escaping. Never use a match or lighter to check.
            </p>
          </div>
        </div>
      </section>

      {/* How do LPG sensors work? - H2 */}
      <section id="how-lpg-sensors-work" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Sensor Technologies</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            How do LPG sensors work?
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            Different sensor technologies suit different jobs, budgets, and environments.
          </p>

          <div id="semiconductor-sensors-mq2-mq6" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Semiconductor (metal oxide) sensors: MQ-2 and MQ-6
            </h3>
            <p>
              Metal oxide sensors use a small heated element coated with tin dioxide (SnO2). When propane or butane touches it, the element's electrical resistance drops, and the circuit reads that drop as gas.
            </p>
            <p>
              These are the most common sensors in low-cost detectors and DIY projects. The MQ-2 picks up a wide range of flammable gases and smoke. The MQ-6 is tuned more closely to LPG, propane, and butane.
            </p>
            <p>Typical specs:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Runs on 5V DC</li>
              <li>Heater draws up to about 800 mW</li>
              <li>Detects roughly 200 to 10,000 ppm (parts per million) of LPG</li>
              <li>Needs a burn-in period of 24 hours or more when new before readings settle</li>
            </ul>
            <p>
              Most MQ modules have two outputs. The analog pin gives a voltage that rises as gas concentration rises. The digital pin acts like a switch: it stays high in clean air and drops low once the gas crosses a threshold you set with the small potentiometer on the board.
            </p>
            <p>
              They work well in homes, small kitchens, budget alarms, and hobby builds. The catch is that they also react to other gases (alcohol, cooking fumes, some sprays), and their readings drift with temperature and humidity.
            </p>

            {/* In-content image 2: Wall-Mounted Gas Sensor */}
            {sections?.gasSensor && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.gasSensor.image}
                  alt={sections.gasSensor.imageAlt}
                  width="960"
                  height="540"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.gasSensor.imageCaption}</span>
                </figcaption>
              </figure>
            )}
          </div>

          <div id="electrochemical-infrared-sensors" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Electrochemical and infrared (IR) sensors
            </h3>
            <p>
              Electrochemical sensors produce a small electrical current when a target gas reacts at an electrode. They're very accurate for toxic gases like carbon monoxide, but they're less common as a primary LPG sensor, and certain chemicals can poison them over time.
            </p>
            <p>
              Infrared sensors shine infrared light through the air and measure how much gets absorbed. Hydrocarbons like propane and butane absorb specific wavelengths, so less light reaching the detector means gas is present. IR sensors don't need oxygen to work, resist poisoning, and last longer. They cost more, which is why you mostly see them in industrial plants.
            </p>
            <p>
              Some facilities also use optical gas imaging cameras, which make gas plumes visible on screen. These are for inspections and for finding leaks along long pipelines, not for fixed alarms.
            </p>
          </div>

          <div id="ultrasonic-acoustic-detection" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Ultrasonic acoustic detection
            </h3>
            <p>
              Ultrasonic detectors listen for the high-frequency sound a pressurised gas leak makes, or measure how gas changes the way sound travels through the air. The gas doesn't have to reach them.
            </p>
            <p>
              One research approach uses 40 kHz ultrasonic waves and measures acoustic impedance, which is how much a gas resists sound passing through it. You get it by multiplying the gas density by the speed of sound in that gas.
            </p>
            <p>Every gas has its own value. At 25°C, roughly:</p>

            {/* Acoustic Impedance Table */}
            <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white max-w-lg">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-primary text-white border-b border-primary">
                    <th className="py-3 px-4 font-bold">Gas</th>
                    <th className="py-3 px-4 font-bold">Acoustic impedance (kg·m⁻²·s⁻¹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-gray-900">Air</td>
                    <td className="py-2.5 px-4 text-gray-700">~415</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-orange-50/30">
                    <td className="py-2.5 px-4 font-semibold text-secondary-container">Butane</td>
                    <td className="py-2.5 px-4 font-bold text-secondary-container">~481</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-gray-900">Helium</td>
                    <td className="py-2.5 px-4 text-gray-700">~180</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-gray-900">Hydrogen</td>
                    <td className="py-2.5 px-4 text-gray-700">~114</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Butane's value is clearly different from air's, so a shift in the reflected signal can flag a leak. In lab tests, this method has picked up a pressurised breach in around 10 milliseconds and identified the type of gas in under a second.
            </p>
            <p>
              This helps in places where wind or ventilation can blow gas away from a point sensor before it registers. Open-air plants and exposed outdoor installations are the usual examples.
            </p>
          </div>

          <div id="which-sensor-fits-which-job" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Which sensor fits which job?
            </h3>

            {/* Sensor Fitment Table */}
            <div className="overflow-x-auto my-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-primary text-white border-b border-primary">
                    <th className="py-3.5 px-4 font-bold">Sensor type</th>
                    <th className="py-3.5 px-4 font-bold">Best for</th>
                    <th className="py-3.5 px-4 font-bold">Main strength</th>
                    <th className="py-3.5 px-4 font-bold">Main weakness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-primary">Metal oxide (MQ series)</td>
                    <td className="py-3 px-4 text-gray-700">Homes, small kitchens</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Cheap, simple</td>
                    <td className="py-3 px-4 text-amber-700">Cross-sensitivity, drift</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold text-primary">Catalytic bead</td>
                    <td className="py-3 px-4 text-gray-700">Commercial and industrial areas</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Proven for flammable gases</td>
                    <td className="py-3 px-4 text-amber-700">Can be poisoned by silicones and sulphur</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-primary">Infrared</td>
                    <td className="py-3 px-4 text-gray-700">Industrial plants, harsh environments</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Stable, long life</td>
                    <td className="py-3 px-4 text-amber-700">Higher cost</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors bg-gray-50/50">
                    <td className="py-3 px-4 font-semibold text-primary">Ultrasonic</td>
                    <td className="py-3 px-4 text-gray-700">Open-air, high-pressure systems</td>
                    <td className="py-3 px-4 text-emerald-700 font-medium">Very fast, not affected by wind</td>
                    <td className="py-3 px-4 text-amber-700">Doesn't measure concentration directly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How an automated LPG monitoring and shut-off system works - H2 */}
      <section id="automated-lpg-monitoring-system" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Automation &amp; Control</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            How an automated LPG monitoring and shut-off system works
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            A detector on its own only warns you. A monitoring system also acts on the warning. Here's what's inside one, using a typical microcontroller setup as the example.
          </p>

          <div id="hardware-components" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              The hardware
            </h3>
            <p>A basic automated system has four parts:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <span className="material-symbols-outlined text-secondary-container">sensors</span>
                  1. The sensor
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Usually an MQ-2 or MQ-6 for LPG. Some builds add a DHT11 to track temperature and humidity, which helps spot conditions that cause false readings.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <span className="material-symbols-outlined text-secondary-container">memory</span>
                  2. The controller
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  A microcontroller such as an ATmega328 (the chip on an Arduino UNO), which reads the sensor and decides what to do.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <span className="material-symbols-outlined text-secondary-container">notification_important</span>
                  3. The display and alerts
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  A 16x2 LCD shows live readings, a buzzer sounds locally, and a GSM module like the SIM800L sends SMS alerts to phones.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <span className="material-symbols-outlined text-secondary-container">valve</span>
                  4. The output
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  A relay drives a solenoid valve (or a servo on the valve) to close the gas line, and can also switch on an exhaust fan.
                </p>
              </div>
            </div>

            <p>
              For power, a simple version steps 230V mains down to 12V AC with a transformer, converts it to DC with a bridge rectifier (four 1N4007 diodes), and regulates it to a steady 5V with an LM7805 regulator for the controller and sensor.
            </p>
          </div>

          <div id="what-happens-when-gas-detected" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              What happens when gas is detected
            </h3>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-secondary-container text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">The reading crosses the threshold</h4>
                  <p className="text-xs sm:text-sm text-gray-600 pt-1">The trigger point sits well below the danger level. Many builds use something around 300 ppm, a tiny fraction of the lower flammable limit.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-secondary-container text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">The controller signals the relay</h4>
                  <p className="text-xs sm:text-sm text-gray-600 pt-1">The controller signals the relay, and the solenoid valve shuts the main supply.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-secondary-container text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">The buzzer and warning lights activate</h4>
                  <p className="text-xs sm:text-sm text-gray-600 pt-1">The buzzer and any warning lights go on.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-secondary-container text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">The exhaust fan switches on</h4>
                  <p className="text-xs sm:text-sm text-gray-600 pt-1">The exhaust fan switches on to clear the gas. The fan has to be rated for flammable atmospheres, or placed so its motor isn't in the gas zone.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-secondary-container text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">5</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">The GSM module sends an SMS</h4>
                  <p className="text-xs sm:text-sm text-gray-600 pt-1">The GSM module sends an SMS to the owner, manager, or maintenance team.</p>
                </div>
              </div>
            </div>

            <p className="pt-2">
              Optimised systems in published studies report response times around 120 milliseconds from detection to action, against around 220 ms for slower setups. Both are far faster than any person could react.
            </p>

            {/* In-content image 3: Solenoid Valve */}
            {sections?.solenoidValve && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.solenoidValve.image}
                  alt={sections.solenoidValve.imageAlt}
                  width="960"
                  height="540"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.solenoidValve.imageCaption}</span>
                </figcaption>
              </figure>
            )}
          </div>

          <div id="diy-vs-certified-systems" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              DIY builds vs certified systems
            </h3>
            <p>
              An Arduino detector is a good learning project and can work as an extra alert at home. A restaurant, hotel, hospital, lab, or factory needs a system built and installed to standard. That means:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Sensors and valves certified for use with LPG</li>
              <li>Enclosures that stop the electronics from sparking inside a gas zone</li>
              <li>Battery backup so monitoring continues during a power cut</li>
              <li>A control panel that logs events and can be tested and calibrated on a schedule</li>
              <li>Installation by a team approved under PESO rules</li>
            </ul>
            <p>
              If you're setting this up for a commercial or industrial site, a professional <Link to="/services/commercial-lpg-pipeline" className="text-secondary font-semibold hover:underline">LPG gas pipeline installation service</Link> can plan the sensors, valves, and control panel together with the pipeline itself, instead of adding them later.
            </p>
          </div>
        </div>
      </section>

      {/* Why gas detectors give false alarms (and how to fix it) - H2 */}
      <section id="false-alarms-troubleshooting" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Diagnostic Protocol</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Why gas detectors give false alarms (and how to fix it)
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            An alarm that keeps going off for no reason wears down trust fast. Staff start ignoring it, or someone switches it off, and then it's not there on the day it's needed. Most false alarms have a cause you can find.
          </p>

          <div id="common-causes-false-alarms" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Common causes
            </h3>
            <p>
              Sudden temperature or humidity changes are the first suspect. Moving from a cold room to a hot kitchen, or a burst of steam, can leave condensation on the sensor and throw the reading off.
            </p>
            <p>
              Cross-sensitivity is the next. Many sensors react to more than one gas, so alcohol sanitisers, cooking fumes, aerosol sprays, and paint can all trigger an LPG sensor. Lead-acid batteries give off hydrogen while charging, which can set off some sensors. That's why detectors near UPS or battery rooms tend to act up.
            </p>
            <p>
              Sensors can also be poisoned. Silicones (found in some sealants and sprays), sulphur compounds, and strong cleaning solvents can damage catalytic and some metal oxide sensors, leaving them with wrong readings or a weak response.
            </p>
            <p>
              Finally, sensors age. Every sensor has a working life, and older ones drift.
            </p>
          </div>

          <div id="ten-steps-troubleshoot" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Ten steps to troubleshoot a false alarm
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                <p className="text-xs sm:text-sm text-gray-700">Write down which detector went off, the peak reading, and the date and time.</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                <p className="text-xs sm:text-sm text-gray-700">Check what was happening nearby at that time: cleaning, painting, cooking, battery charging, venting.</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                <p className="text-xs sm:text-sm text-gray-700">Inspect the unit in a safe area where you're sure there's no gas.</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                <p className="text-xs sm:text-sm text-gray-700">Let it settle to room temperature and humidity.</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                <p className="text-xs sm:text-sm text-gray-700">Check the zero reading in clean air, or with zero-gas from a cylinder.</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                <p className="text-xs sm:text-sm text-gray-700">Do a bump test: expose it briefly to a known test gas and confirm it alarms.</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">7</span>
                <p className="text-xs sm:text-sm text-gray-700">Recalibrate if the readings are outside the allowed range.</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">8</span>
                <p className="text-xs sm:text-sm text-gray-700">Cross-check with a separate, calibrated portable detector.</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">9</span>
                <p className="text-xs sm:text-sm text-gray-700">Take unstable units out of service and mark them.</p>
              </div>
              <div className="p-3.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">10</span>
                <p className="text-xs sm:text-sm text-gray-700">Replace sensors that keep failing.</p>
              </div>
            </div>

            {/* Critical Warning Callout */}
            <div className="p-5 rounded-2xl bg-red-50 border-l-4 border-red-600 text-red-950 text-sm sm:text-base leading-relaxed my-6 shadow-sm">
              <div className="flex items-center gap-2 text-red-800 font-bold mb-1.5">
                <span className="material-symbols-outlined text-lg">error</span>
                <span>Important Safety Warning</span>
              </div>
              <p>
                <strong>Never zero or recalibrate a detector inside an area where you suspect a leak.</strong> If there's gas in the air when you reset it, the detector treats that as normal. Later, in clean air, it may show a negative reading and fail to alarm when real gas is present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety rules for LPG storage and pipelines - H2 */}
      <section id="safety-rules-storage-pipelines" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Statutory Compliance</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Safety rules for LPG storage and pipelines
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            How LPG is stored and piped matters as much as how leaks are detected.
          </p>
          <p>
            In India, LPG storage and pipelines come under the Petroleum and Explosives Safety Organisation (PESO), along with the relevant BIS and PNGRB standards. Exact distances and rules depend on the quantity stored and the type of premises, so check with a PESO-approved installer for your site. The principles below are widely followed.
          </p>

          <div id="storing-commercial-cylinders" className="scroll-mt-28 space-y-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900">
              Storing commercial LPG cylinders
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Keep cylinders upright at all times, including empty ones.</li>
              <li>Store them outdoors where possible, in a well-ventilated, lockable cage. A common guideline is a cage at least 1.8 metres high, on a level floor that doesn't flood.</li>
              <li>Keep them away from drains and pits. LPG sinks, so a leak near an open drain can travel a long way underground. Guidelines commonly ask for around 5 metres from boundaries, drains, and fire escapes, and around 3 metres from ignition sources and other gas types.</li>
              <li>Keep ignition sources away: no smoking, no open flames, no unprotected electrical fittings.</li>
              <li>Store full and empty cylinders apart, and keep LPG away from oxygen cylinders.</li>
            </ul>

            {/* In-content image 4: Storage Cage */}
            {sections?.storageCage && (
              <figure className="my-8 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
                <img
                  src={sections.storageCage.image}
                  alt={sections.storageCage.imageAlt}
                  width="960"
                  height="540"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
                <figcaption className="p-4 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-base shrink-0">photo_camera</span>
                  <span>{sections.storageCage.imageCaption}</span>
                </figcaption>
              </figure>
            )}

            <p>
              If a cylinder catches fire, don't try to fight it unless you're trained and can safely shut the valve. A heated cylinder can rupture. Get everyone out, keep well back, and call the fire service on 101 or 112.
            </p>
          </div>
        </div>
      </section>

      {/* Converting from LPG to PNG - H2 */}
      <section id="converting-lpg-to-png" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Infrastructure Upgrades</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Converting from LPG to PNG
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p>
            Many commercial and residential buildings are moving from LPG cylinders to piped natural gas, and the old pipeline can't simply be connected to the new supply.
          </p>
          <p>
            Pressure is the main issue. LPG manifold systems are built for cylinder pressures that can reach around 16.5 bar. Domestic PNG runs at a very low pressure, around 110 mbar in the service line. The pipeline, regulators, and appliances all need checking before the switch.
          </p>
          <p>
            Pipe size needs a second look too. <Link to="/blog/lpg-pipe-sizing" className="text-secondary font-semibold hover:underline">Gas pipe sizing for LPG</Link> is based on high pressure, so a line that carried LPG comfortably may be too narrow to deliver enough low-pressure PNG to every appliance.
          </p>
          <p>PNGRB guidelines for conversion generally require:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Checking that pipe wall thickness is suitable</li>
            <li>Removing threaded joints hidden inside walls or ceilings</li>
            <li>Pressure-testing the full line for leaks</li>
            <li>Certification by a Third-Party Inspection Agency (TPIA)</li>
          </ul>

          <div id="emergency-procedure-gas-smell" className="scroll-mt-28 space-y-4 pt-4">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-red-600">e911_emergency</span>
              What to do if you smell gas or a pipeline is damaged
            </h3>
            <p className="font-medium text-gray-800">
              Act in this order:
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 bg-red-50/60 border border-red-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="font-bold text-red-950 text-sm sm:text-base">Stop work and don't touch anything electrical</h4>
                  <p className="text-xs sm:text-sm text-red-900 pt-0.5">No switches on or off, no plugs, no doorbells.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50/60 border border-red-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="font-bold text-red-950 text-sm sm:text-base">Avoid open flames and vehicle ignition</h4>
                  <p className="text-xs sm:text-sm text-red-900 pt-0.5">Don't light matches, use lighters, or start a vehicle nearby.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50/60 border border-red-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="font-bold text-red-950 text-sm sm:text-base">Shut the gas isolation valve</h4>
                  <p className="text-xs sm:text-sm text-red-900 pt-0.5">Shut the gas at the cylinder valve or main isolation valve, only if you can reach it safely.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50/60 border border-red-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                <div>
                  <h4 className="font-bold text-red-950 text-sm sm:text-base">Ventilate the area</h4>
                  <p className="text-xs sm:text-sm text-red-900 pt-0.5">Open doors and windows on your way out, if it's safe to do so.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50/60 border border-red-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">5</span>
                <div>
                  <h4 className="font-bold text-red-950 text-sm sm:text-base">Evacuate upwind</h4>
                  <p className="text-xs sm:text-sm text-red-900 pt-0.5">Get everyone out, moving upwind, so the wind blows toward you and not from the leak to you.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50/60 border border-red-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">6</span>
                <div>
                  <h4 className="font-bold text-red-950 text-sm sm:text-base">Call emergency helplines from outside</h4>
                  <p className="text-xs sm:text-sm text-red-900 pt-0.5">Call for help from a safe distance, not near the leak. In India, the LPG emergency helpline is 1906, and fire services are on 101 or 112.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50/60 border border-red-200 rounded-xl shadow-sm">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">7</span>
                <div>
                  <h4 className="font-bold text-red-950 text-sm sm:text-base">Wait for qualified clearance</h4>
                  <p className="text-xs sm:text-sm text-red-900 pt-0.5">Don't go back in until a qualified person says it's safe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion - H2 */}
      <section id="conclusion" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Summary &amp; Best Practices</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Conclusion
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            LPG is safe when it's handled right. The trouble starts when it escapes, because it sinks, hides in low spots, and doesn't need much to ignite.
          </p>
          <p>
            The odorant gives your nose a chance to catch a leak, but a kitchen, hotel, lab, or factory running a manifold or pipeline can't rely on someone noticing a smell. Proper protection uses a sensor suited to the space, an automatic shut-off valve that closes without waiting for a person, and a regular schedule for testing and maintaining both.
          </p>
          <p>
            If something smells off, don't investigate with a flame and don't flip a switch. Shut the gas if you safely can, get out, and call for help from outside.
          </p>

          {/* Interactive Consultation Banner */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary-container text-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-bold text-xl sm:text-2xl text-white">Need Certified LPG Leak Detection for Your Setup?</h3>
              <p className="text-white/80 text-xs sm:text-sm max-w-xl">
                Hi Tech Energy designs and installs PESO-certified gas leak detection systems, slam-shut solenoid valves, and centralized safety panels across commercial kitchens, hotels, and industrial plants.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link
                to="/contact"
                className="bg-secondary-container hover:brightness-110 text-white font-bold py-3 px-6 rounded-xl text-center text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Book Safety Audit
              </Link>
              <a
                href={`tel:${OFFICE_LOCATIONS.headOffice.phone}`}
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl text-center text-xs transition-all border border-white/20"
              >
                📞 Call Gas Safety Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
