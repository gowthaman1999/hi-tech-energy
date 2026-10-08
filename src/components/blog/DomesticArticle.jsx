import React from 'react';
import { Link } from 'react-router-dom';

export default function DomesticArticle({ post }) {
  const { sections, comparisonTable } = post;

  return (
    <div className="space-y-12 text-left">
      {/* Introduction Paragraphs */}
      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
        <p>
          In most Indian homes, the LPG cylinder sits under the kitchen counter. We book it, wait for it, and change it when the gas runs out. Sometimes it runs out in the middle of cooking. Sometimes nobody is at home when the delivery comes.
        </p>
        <p>
          Many new apartments and houses now use a <Link to="/services/domestic-lpg-pipeline" className="text-secondary font-semibold hover:underline">domestic LPG pipeline</Link> instead. The cylinders are kept outside the house, and gas comes to the stove through a pipe.
        </p>
        <p>
          In this blog, we compare both options and look at one main question: which one is safer for your kitchen?
        </p>
      </div>

      {/* Summary - H3 & Table */}
      <section id="glance" className="scroll-mt-28 space-y-4">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Quick Comparison</span>
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Pipeline vs Cylinder at a Glance
          </h3>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-3 px-4 font-semibold w-1/3">Feature</th>
                <th className="py-3 px-4 font-semibold w-1/3 bg-primary-container text-secondary-fixed-dim">
                  Domestic LPG Pipeline
                </th>
                <th className="py-3 px-4 font-semibold w-1/3">LPG Cylinder</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonTable.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={idx % 2 === 0 ? 'bg-white hover:bg-orange-50/40 transition-colors' : 'bg-gray-50/70 hover:bg-orange-50/40 transition-colors'}
                >
                  <td className="py-3 px-4 font-medium text-gray-800">{row.feature}</td>
                  <td className="py-3 px-4 font-semibold text-primary bg-orange-50/30">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                      {row.pipeline}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-gray-400 text-sm">info</span>
                      {row.cylinder}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What Is the Difference? - H2 */}
      <section id="difference" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          What Is the Difference?
        </h2>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Both use the same gas, LPG. The only difference is where the gas is kept and how it reaches your stove.
          </p>
          <p>
            With a cylinder, the gas is kept inside your kitchen. A regulator and a rubber hose connect it to the stove.
          </p>
          <p>
            With a <Link to="/services/domestic-lpg-pipeline" className="text-secondary font-semibold hover:underline">domestic LPG pipeline</Link>, the cylinders are kept outside in an open or ventilated area. The gas goes through metal pipes and reaches a valve near your stove. In apartments, each house usually gets its own gas meter.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-sm text-amber-900 leading-relaxed">
            <strong>Important Distinction:</strong> Please note that this is not PNG (piped natural gas). PNG is a different gas supplied by city gas companies. An LPG pipeline uses the same LPG you use today.
          </div>
        </div>

        {/* Section Image 1 */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
          <img
            src={sections.difference.image}
            alt={sections.difference.imageAlt}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
            {sections.difference.imageCaption}
          </figcaption>
        </figure>
      </section>

      {/* Safety: Which One Is Safer? - H2 */}
      <section id="safety" className="scroll-mt-28 space-y-8 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          Safety: Which One Is Safer?
        </h2>

        {/* Sub-H3: What Happens When Gas Leaks */}
        <div id="gas-leaks" className="scroll-mt-28 space-y-3 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-600">warning</span>
            What Happens When Gas Leaks
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            LPG is heavier than air. When it leaks, it does not go up. It goes down and collects near the floor and inside closed cabinets.
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            This is why a cylinder inside the kitchen is risky. All the gas is stored in your kitchen. If the hose is damaged or the regulator is not fitted properly, gas can collect under the counter. You may not notice it until you light the stove.
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            In a pipeline system, the cylinders are outside the house. If there is a leak there, the gas spreads into the open air. Inside your kitchen, there is only a small amount of gas in the pipe. You can also close the supply using valves.
          </p>
        </div>

        {/* Sub-H3: Pressure and Safety Devices */}
        <div id="pressure-safety" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Pressure and Safety Devices
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Gas inside a cylinder is stored at high pressure. That is why a damaged cylinder or valve can be dangerous.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            In a pipeline system, this high pressure stays outside your house. Regulators near the cylinders reduce the pressure step by step. When the gas reaches your kitchen, the pressure is low, the same as what your stove normally uses.
          </p>
          <p className="text-gray-800 font-semibold text-base">
            A proper <Link to="/services/domestic-lpg-pipeline" className="text-secondary hover:underline">domestic LPG gas pipeline service</Link> should also give you these safety items:
          </p>

          <ul className="space-y-3 bg-blue-50/60 border border-blue-100 p-5 sm:p-6 rounded-2xl text-gray-800 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container shrink-0 mt-0.5">detector_alarm</span>
              <span>
                <strong>A gas leak detector</strong> in the kitchen that gives an alarm when it finds gas (explore our <Link to="/services/leakage-detection-system" className="text-secondary font-semibold hover:underline">smart leak detection systems</Link>)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container shrink-0 mt-0.5">valve</span>
              <span>
                <strong>An automatic shut-off valve</strong> that stops the gas when a leak is found
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container shrink-0 mt-0.5">tune</span>
              <span>
                <strong>Valves outside the house and near the stove</strong>, so you can close the gas by hand
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container shrink-0 mt-0.5">air</span>
              <span>
                <strong>LPG odorization:</strong> LPG also has a smell added to it (ethyl mercaptan), so you can smell a leak. The detector helps you find it faster.
              </span>
            </li>
          </ul>
        </div>

        {/* Section Image 2 - Leak detector & Valve */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
          <img
            src={sections.safety.image}
            alt={sections.safety.imageAlt}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
            {sections.safety.imageCaption}
          </figcaption>
        </figure>

        {/* Sub-H3: Lifting and Changing Cylinders */}
        <div id="lifting-changing" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Lifting and Changing Cylinders
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A full cylinder weighs almost 30 kg. Lifting it, moving it and fixing the regulator is hard work, and many leaks at home happen because the regulator was not fixed properly.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            With a pipeline, nobody at home needs to lift or change cylinders. There is no rubber hose from a cylinder in your kitchen, and you don't need to keep a spare cylinder inside the house.
          </p>
        </div>
      </section>

      {/* Daily Use and Convenience - H2 */}
      <section id="convenience" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          Daily Use and Convenience
        </h2>

        {/* Sub-H3: No More Gas Running Out */}
        <div id="running-out" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            No More Gas Running Out
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A pipeline system can have an automatic changeover valve. When one cylinder becomes empty, the system switches to the next cylinder. The empty one is replaced later. You don't need to book gas or wait for delivery.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            In apartments, this also means delivery people don't have to carry cylinders in the lift or on the stairs every day.
          </p>
        </div>

        {/* Sub-H3: More Space in Your Kitchen */}
        <div id="kitchen-space" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            More Space in Your Kitchen
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The cylinder usually takes the cabinet under the counter. Once it is gone, you can use that space for vessels and other items.
          </p>
        </div>

        {/* Section Image 3 - Cabinet Space */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
          <img
            src={sections.convenience.image}
            alt={sections.convenience.imageAlt}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
            {sections.convenience.imageCaption}
          </figcaption>
        </figure>
      </section>

      {/* Billing and Maintenance - H2 */}
      <section id="billing-maintenance" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          Billing and Maintenance
        </h2>

        {/* Sub-H3: How You Pay */}
        <div id="how-you-pay" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            How You Pay
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            With a cylinder, you pay every time you book a refill. With a pipeline, a meter records how much gas your house uses. You pay only for that, usually every month.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            In apartments, this is fair for everyone because each house pays for its own use.
          </p>
        </div>

        {/* Section Image 4 - Gas Meter */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
          <img
            src={sections.billing.image}
            alt={sections.billing.imageAlt}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
            {sections.billing.imageCaption}
          </figcaption>
        </figure>

        {/* Sub-H3: Regular Checks */}
        <div id="regular-checks" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Regular Checks
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A pipeline also needs regular checking. The joints and valves should be tested for leaks. The regulators, leak detector and shut-off valve should be checked to see if they work. The place where the cylinders are kept should have good air flow.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            A good installer will follow <Link to="/safety" className="text-secondary font-semibold hover:underline">PESO rules and the Indian standard IS 6044</Link>, and will offer regular maintenance.
          </p>
        </div>
      </section>

      {/* Do You Need to Change Your Gas Stove? - H2 */}
      <section id="gas-stove-change" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          Do You Need to Change Your Gas Stove?
        </h2>

        {/* Sub-H3: Your Stove Will Work As It Is */}
        <div id="stove-work-as-is" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Your Stove Will Work As It Is
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            No. Both cylinder and pipeline use LPG, so your stove does not need any change. The burner nozzle needs to be changed only if you move from LPG to PNG. If anyone says your stove needs to be changed for an LPG pipeline, ask them why.
          </p>
        </div>

        {/* Section Image 5 - Stove Blue Flame */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-6">
          <img
            src={sections.stove.image}
            alt={sections.stove.imageAlt}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
            {sections.stove.imageCaption}
          </figcaption>
        </figure>

        {/* Sub-H3: What Changes Near the Stove */}
        <div id="near-the-stove" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            What Changes Near the Stove
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The cylinder, regulator and long rubber hose are removed. The pipe comes to a valve on the wall near your stove. A short ISI-marked hose connects the valve to the stove.
          </p>

          <p className="text-gray-800 font-semibold text-sm sm:text-base">
            Before and during the change:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Check that your stove has the ISI mark</strong> and is in good condition. Clean the burners if they are blocked.
            </li>
            <li>
              <strong>Tell the installer where you want the valve.</strong> It should be easy to reach and not behind the stove or near the sink.
            </li>
            <li>
              <strong>After fitting,</strong> the installer should test for leaks and light all the burners.
            </li>
          </ol>
        </div>

        {/* Sub-H3: 3 Things to Check After Your Stove Is Connected */}
        <div id="three-checks" className="scroll-mt-28 bg-orange-50/50 border border-orange-200/80 p-6 rounded-2xl space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container">checklist</span>
            3 Things to Check After Your Stove Is Connected
          </h3>
          <ol className="list-decimal pl-5 space-y-3 text-gray-800 text-sm sm:text-base">
            <li>
              <strong>Flame colour:</strong> The flame should be blue. If it is yellow or orange, call the technician.
            </li>
            <li>
              <strong>Soap water test:</strong> Put soap water on the joints. If you see bubbles, there is a leak. Never use a matchstick or lighter to check.
            </li>
            <li>
              <strong>Valve test:</strong> Close the valve near the stove while a burner is on. The flame should go off in a few seconds.
            </li>
          </ol>
        </div>
      </section>

      {/* Which One Should You Choose? - H2 */}
      <section id="which-to-choose" className="scroll-mt-28 space-y-6 pt-4 border-t border-gray-100">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
          <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
          Which One Should You Choose?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Choose Pipeline Card */}
          <div className="bg-emerald-50/60 border border-emerald-200/80 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
              <span className="material-symbols-outlined text-emerald-600">domain_add</span>
              Go for a Domestic LPG Pipeline if:
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                <span>You own your house or your apartment society is planning one</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                <span>You have a safe, ventilated exterior space for cylinders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                <span>You want leak alarms, smart meters, and automatic shut-off safety</span>
              </li>
            </ul>
          </div>

          {/* Stay with Cylinder Card */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-gray-800 font-bold text-base">
              <span className="material-symbols-outlined text-gray-600">home</span>
              Stay with a Cylinder if:
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-gray-500 text-sm mt-0.5">fiber_manual_record</span>
                <span>You live in a rented house for a short duration and cannot make alterations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-gray-500 text-sm mt-0.5">fiber_manual_record</span>
                <span>You need portable gas that you frequently move from place to place</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 p-5 rounded-2xl text-gray-800 text-base leading-relaxed">
          <strong>In short:</strong> The main safety benefit is that the cylinder is no longer inside your kitchen. Add a leak detector with automatic shut-off, and your kitchen becomes much safer.
        </div>
      </section>
    </div>
  );
}
