import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LotVsVotArticle({ post }) {
  const { sections, comparisonTable, sizingTable } = post;

  // Interactive quick calculator / sizing estimator state
  const [hourlyConsumption, setHourlyConsumption] = useState(25);

  const votCylindersNeeded = Math.ceil(hourlyConsumption / 0.5);
  const lotCylindersNeeded = Math.ceil(hourlyConsumption / 4.0);
  const spaceSavedPercent = Math.round(((votCylindersNeeded - lotCylindersNeeded) / votCylindersNeeded) * 100);

  return (
    <div className="space-y-12 text-left">
      {/* Lead Hook Paragraphs */}
      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
        <p className="text-lg sm:text-xl font-medium text-gray-900 border-l-4 border-secondary-container pl-4 py-1 italic bg-orange-50/40 rounded-r-xl">
          Most industrial LPG problems get blamed on the gas supplier: weak burner flames during peak hours, cylinders shivering with heavy frost on a winter morning, and a monthly fuel bill that fails to match what was actually burned in production.
        </p>
        <p>
          Call the commercial agency and they will usually tell you the fuel quality is fine—and most of the time, they are completely right. The trouble is rarely the gas itself. It is almost always <strong>how the fuel leaves the cylinder bank</strong>.
        </p>
        <p>
          Commercial and industrial operations draw LPG in one of two fundamental configurations: <strong>Vapour Off-Take (VOT)</strong> or <strong>Liquid Off-Take (LOT)</strong>. A system mismatched to your production thermal load costs your business thousands every month in unburned fuel waste, frozen manifolds, and halted assembly lines.
        </p>
        <p>
          If you are planning a new <Link to="/" className="text-secondary font-semibold hover:underline">LPG gas pipeline installation service</Link> for your facility, or troubleshooting why your current cylinder bank continually freezes, settling the <strong>LOT vs VOT LPG manifold system</strong> question is your first critical decision.
        </p>
      </div>

      {/* Why the Manifold Matters - H2 */}
      <section id="why-manifold-matters" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Thermal Infrastructure</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Why the Manifold Matters
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            LPG fuels precision manufacturing processes across Indian industry: heat treatment furnaces, aluminum and bronze melting crucibles, automotive powder coating ovens, continuous steam boilers, and large commercial hotel kitchens. It burns clean, generates high calorific value, and enables tight temperature modulation.
          </p>
          <p>
            Yet two industrial plants buying identical 33 kg commercial cylinders from the exact same supplier can experience wildly contrasting results. One runs smoothly through three continuous shifts without a hitch. The other battles persistent pressure drops, ice-encrusted manifolds, and cylinders returned to the distributor with 15% to 25% of unburned liquid fuel remaining inside.
          </p>
          <p>
            The manifold system explains the entire gap. Three site variables determine the required manifold architecture:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-secondary-container transition-colors">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-secondary-container flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">1. Hourly Draw (kg/hr)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                The peak consumption when all burners, boilers, and ovens fire concurrently during maximum production load.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-secondary-container transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">straighten</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">2. Storage Footprint</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Available ground space for cylinder banks while adhering to PESO statutory boundary and setback rules.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-secondary-container transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">route</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">3. Piping Distance</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Total distance and hydraulic pressure drop between the outdoor manifold bank and indoor consumption points.
              </p>
            </div>
          </div>
        </div>

        {/* VOT and LOT in plain terms - H3 */}
        <div id="plain-terms" className="scroll-mt-28 space-y-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container">compare_arrows</span>
            VOT and LOT in Plain Terms
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="inline-block bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-md">VOT (Vapour Off-Take)</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                The setup most people picture. Liquid LPG inside the cylinder boils naturally into vapour by absorbing heat from the ambient air through the steel walls. The system draws gas strictly from the top cylinder valve.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 space-y-2">
              <span className="inline-block bg-secondary-container text-white text-xs font-bold px-2.5 py-1 rounded-md">LOT (Liquid Off-Take)</span>
              <p className="text-gray-700 text-sm leading-relaxed">
                Works the opposite way. It draws liquid LPG from the bottom of the cylinder via an internal dip tube and pipes it to an external vaporiser skid, which converts liquid to high-volume gas at a stable, controlled rate.
              </p>
            </div>
          </div>

          {/* Cutaway diagram figure */}
          <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md mt-6">
            <img
              src={sections.cutaway.image}
              alt={sections.cutaway.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100 flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-secondary-container">schema</span>
              {sections.cutaway.imageCaption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* How VOT Works and Where It Struggles - H2 */}
      <section id="how-vot-works" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Atmospheric Extraction</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            How VOT Works and Where It Struggles
          </h2>
        </div>

        {/* Why VOT depends on the weather - H3 */}
        <div id="vot-weather" className="scroll-mt-28 space-y-3">
          <h3 className="font-headline-md text-xl font-bold text-primary">
            Why VOT Depends on the Weather
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Liquid LPG requires thermal energy (latent heat of vaporization) to turn into vapour. In a VOT system, that heat comes solely from the air surrounding the cylinder, passing through the steel casing.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Under low gas demand, this works because the cylinder absorbs environmental heat at roughly the same rate it expels vapour. However, when burner demand rises, ambient air cannot warm the cylinder fast enough. The internal temperature plunges, pressure collapses, and the cylinders freeze. That is why VOT is strictly suited for low-to-moderate loads, generally <strong>under 60 kg/hr</strong> (such as small cafeterias and quick-service canteens). A standard 33 kg VOT cylinder yields only <strong>about 0.5 kg of gas per hour</strong>.
          </p>
        </div>

        {/* What VOT does well - H3 */}
        <div id="what-vot-does-well" className="scroll-mt-28 space-y-3 bg-emerald-50/50 border border-emerald-200/80 p-6 rounded-2xl">
          <h3 className="font-headline-md text-xl font-bold text-emerald-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600">thumb_up</span>
            What VOT Does Well
          </h3>
          <p className="text-emerald-950 text-sm sm:text-base leading-relaxed">
            VOT has a very low upfront installation cost. You only need a manifold header, copper pigtails, and a basic two-stage pressure regulator. There is no electrical connection, no external vaporiser unit, and minimal mechanical maintenance. For a small commercial kitchen running 2 to 4 burners with predictable, low demand, a <Link to="/services/commercial-lpg-pipeline" className="text-emerald-800 font-bold underline">commercial VOT line</Link> is often all you need.
          </p>
        </div>

        {/* Where VOT goes wrong - H3 */}
        <div id="where-vot-fails" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-red-600">error</span>
            Where VOT Goes Wrong: The Hidden Cost of Frozen Banks
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            Push a VOT system past its vaporization limit, and operational failures compound rapidly:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50/50 border border-red-200 p-5 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
                <span className="material-symbols-outlined text-red-600 text-lg">ac_unit</span>
                Ice Formation &amp; Pressure Collapses
              </div>
              <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                On chilly mornings or high-volume rush hours, cylinders drop below 0°C. Ice coats the cylinder body, gas pressure falls, and burner flames flicker weak yellow right when ovens must reach peak heat.
              </p>
            </div>

            <div className="bg-red-50/50 border border-red-200 p-5 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
                <span className="material-symbols-outlined text-red-600 text-lg">water_drop</span>
                Unburned Liquid Returned as Waste
              </div>
              <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                When cylinders freeze, vaporization halts completely despite 3 to 7 kg of liquid remaining inside. These &ldquo;empty&rdquo; cylinders get returned to the distributor carrying fuel you paid for and never burned.
              </p>
            </div>

            <div className="bg-red-50/50 border border-red-200 p-5 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
                <span className="material-symbols-outlined text-red-600 text-lg">local_fire_department</span>
                Hazardous Hot Water Hacks
              </div>
              <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                To keep burners alive, kitchen or plant workers often pour boiling water over frozen cylinders. This is a severe safety violation under PESO guidelines that causes thermal fatigue on cylinder welds.
              </p>
            </div>

            <div className="bg-red-50/50 border border-red-200 p-5 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-red-800 font-bold text-sm">
                <span className="material-symbols-outlined text-red-600 text-lg">grid_goldenratio</span>
                Excessive Floor Space Footprint
              </div>
              <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                At only 0.5 kg/hr per cylinder, an industrial load of 30 kg/hr demands 60 connected cylinders (30 active + 30 standby). This cylinder yard consumes prime factory real estate.
              </p>
            </div>
          </div>

          {/* Section image - Commercial VOT bank */}
          <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-4">
            <img
              src={sections.votSetup.image}
              alt={sections.votSetup.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
              {sections.votSetup.imageCaption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* How LOT Systems Work - H2 */}
      <section id="how-lot-works" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Engineered Vaporization</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            How LOT Systems Work
          </h2>
        </div>

        {/* Liquid out, steady gas in - H3 */}
        <div id="liquid-out-steady-gas" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Liquid Out, Steady Gas In: 8x Efficiency
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            An LOT system utilizes special spring-loaded valves with an internal dip tube to draw liquid LPG directly from the bottom of the cylinder, conveying it through high-pressure braided pigtails to an external vaporiser.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            The vaporiser—either electric dry-type or thermodynamic hot water bath—supplies controlled thermal energy to instantly flash liquid LPG into gas. Because heat comes entirely from the external vaporiser skid rather than ambient air, the cylinder never drops in temperature and output remains constant.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-secondary-container p-6 rounded-r-2xl space-y-3">
            <h4 className="font-bold text-primary text-base sm:text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">electric_bolt</span>
              The 8x Mathematical Difference
            </h4>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              A single 33 kg LOT cylinder delivers approximately <strong>4.0 kg of gas per hour</strong>—a staggering <strong>8 times the output</strong> of a 33 kg VOT cylinder (~0.5 kg/hr).
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Say your facility burns <strong>20 kg of LPG per hour</strong>. On VOT, you would need <strong>40 cylinders connected simultaneously</strong> (plus 40 in reserve) to avoid freezing. On LOT, you need just <strong>5 cylinders active</strong> (plus 5 in reserve). That is why switching to a <Link to="/services/lot-pipeline" className="text-secondary font-bold underline">LOT pipeline service</Link> transforms operational overhead within the first week.
            </p>
          </div>

          {/* Interactive Calculator Sizing Widget */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-secondary-container/30 shadow-lg space-y-6 my-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div>
                <span className="bg-secondary-container text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-block mb-1">Interactive Tool</span>
                <h4 className="font-bold text-lg text-primary">Live Manifold Sizing Calculator</h4>
              </div>
              <span className="text-xs text-gray-500">Slide to test your facility draw</span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="hourly-consumption-range" className="text-xs sm:text-sm font-semibold text-gray-800">
                  Target Consumption Rate (kg/hr):
                </label>
                <span className="text-xl font-bold text-secondary-container">{hourlyConsumption} kg/hr</span>
              </div>
              <input
                id="hourly-consumption-range"
                type="range"
                min="5"
                max="120"
                step="5"
                value={hourlyConsumption}
                onChange={(e) => setHourlyConsumption(Number(e.target.value))}
                className="w-full accent-secondary-container cursor-pointer"
                aria-label="Target consumption rate in kilograms per hour"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>5 kg/hr (Small Canteen)</span>
                <span>60 kg/hr (Commercial Threshold)</span>
                <span>120 kg/hr (Industrial Furnace)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center">
                <p className="text-xs text-gray-500 font-medium mb-1">VOT Cylinders Needed</p>
                <p className="text-2xl font-bold text-primary">{votCylindersNeeded} <span className="text-xs font-normal text-gray-500">active ({votCylindersNeeded * 2} total)</span></p>
                <p className="text-[11px] text-red-600 mt-1">@ 0.5 kg/hr per cylinder</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-xl border border-secondary-container/40 text-center">
                <p className="text-xs text-secondary font-medium mb-1">LOT Cylinders Needed</p>
                <p className="text-2xl font-bold text-secondary-container">{lotCylindersNeeded} <span className="text-xs font-normal text-gray-500">active ({lotCylindersNeeded * 2} total)</span></p>
                <p className="text-[11px] text-emerald-700 mt-1 font-semibold">@ 4.0 kg/hr per cylinder</p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-center flex flex-col justify-center">
                <p className="text-xs text-emerald-800 font-medium mb-1">Manifold Space Saved</p>
                <p className="text-3xl font-extrabold text-emerald-700">~{spaceSavedPercent}%</p>
                <p className="text-[11px] text-emerald-900 mt-0.5">Fewer changeovers &amp; zero frost</p>
              </div>
            </div>
          </div>

          {/* Section image - LOT vaporiser skid */}
          <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-4">
            <img
              src={sections.lotSkid.image}
              alt={sections.lotSkid.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
              {sections.lotSkid.imageCaption}
            </figcaption>
          </figure>
        </div>

        {/* What changes day to day - H3 */}
        <div id="operational-changes" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl font-bold text-primary">
            What Changes Day to Day on the Factory Floor
          </h3>
          <ul className="space-y-3 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-gray-700 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-600 shrink-0 mt-0.5">check_circle</span>
              <span><strong>Uniform Burner Pressure:</strong> Heavy burners receive unvarying gas pressure, whether firing at 4:00 AM in winter or during continuous 10-hour furnace cycles.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-600 shrink-0 mt-0.5">check_circle</span>
              <span><strong>100% Fuel Utilization:</strong> Cylinders are evacuated down to the last gram. No unburned liquid is sent back to the oil distributor.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-600 shrink-0 mt-0.5">check_circle</span>
              <span><strong>80% Floor Space Reduction:</strong> Reclaim valuable outdoor yard area for production staging or storage.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-600 shrink-0 mt-0.5">check_circle</span>
              <span><strong>Total Safety Compliance:</strong> No freezing cylinders, no cold-sweat manifolds, and zero unsafe hot water pouring.</span>
            </li>
          </ul>
        </div>

        {/* Advanced LOT options - H3 */}
        <div id="advanced-lot-options" className="scroll-mt-28 space-y-4">
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container">tune</span>
            Advanced LOT Options
          </h3>
          <p className="text-gray-700 leading-relaxed text-base">
            Engineering advancements have created specialized LOT configurations for specific operational needs:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Automated</span>
                <h4 className="font-bold text-base text-gray-900 mt-2">SUPER LOT (SLOT)</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  Integrates an <strong>Electronic Auto Changeover Device (EACD)</strong>. When the active cylinder bank runs low, it switches automatically to the standby bank without manual intervention, preventing burner flameouts.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-primary pt-2 border-t border-gray-100">
                Ideal for: Continuous 24/7 manufacturing
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Zero Power Cost</span>
                <h4 className="font-bold text-base text-gray-900 mt-2">SLOT Plus (HLV)</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  Uses <strong>Heaterless Vaporisers (HLV)</strong> that extract the natural ambient warmth of circulating water rather than electric heating coils. This eliminates the electric utility cost of vaporization entirely.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-emerald-700 pt-2 border-t border-gray-100">
                Ideal for: Facilities with high electricity tariffs
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <span className="bg-secondary-container text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Heavy Duty</span>
                <h4 className="font-bold text-base text-gray-900 mt-2">450 kg Maxima LOT</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  A massive single vessel that replaces <strong>fifteen 33 kg cylinders</strong>. Greatly reduces delivery frequency, manual handling, and manifold connection points.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-secondary pt-2 border-t border-gray-100">
                Ideal for: Metal forging &amp; commercial boilers
              </div>
            </div>
          </div>

          {/* Section image - PRS Skid */}
          <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-4">
            <img
              src={sections.prsSkid.image}
              alt={sections.prsSkid.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
              {sections.prsSkid.imageCaption}
            </figcaption>
          </figure>
        </div>

        {/* Sizing at a glance - H3 */}
        <div id="sizing-at-glance" className="scroll-mt-28 space-y-4">
          <div className="border-b border-gray-200 pb-2">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">table_chart</span>
              Sizing &amp; Output Comparison at a Glance
            </h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3.5 px-4 font-semibold">Setup</th>
                  <th className="py-3.5 px-4 font-semibold">Output per Cylinder</th>
                  <th className="py-3.5 px-4 font-semibold">Storage Footprint</th>
                  <th className="py-3.5 px-4 font-semibold">Pressure Stability</th>
                  <th className="py-3.5 px-4 font-semibold">Best Suited For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sizingTable.map((row, idx) => (
                  <tr
                    key={row.setup}
                    className={idx % 2 === 0 ? 'bg-white hover:bg-orange-50/40' : 'bg-gray-50/70 hover:bg-orange-50/40'}
                  >
                    <td className="py-3 px-4 font-bold text-primary">{row.setup}</td>
                    <td className="py-3 px-4 font-semibold text-secondary-container">{row.output}</td>
                    <td className="py-3 px-4 text-gray-700">{row.footprint}</td>
                    <td className="py-3 px-4 text-gray-700">{row.pressure}</td>
                    <td className="py-3 px-4 text-gray-600">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LOT vs VOT Compared - H2 & Comparison Table */}
      <section id="comparison-table-section" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Direct Technical Benchmark</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            LOT vs VOT Side-by-Side Comparison
          </h2>
        </div>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          The table below contrasts key operational specifications between Vapour Off-Take and Liquid Off-Take manifolds:
        </p>

        {/* High Contrast Responsive Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-3.5 px-4 font-bold text-white w-1/3">Feature Specification</th>
                <th className="py-3.5 px-4 font-bold text-gray-200 w-1/3 bg-primary/90">
                  Vapour Off-Take (VOT)
                </th>
                <th className="py-3.5 px-4 font-bold text-white w-1/3 bg-secondary-container">
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
                  <td className="py-3.5 px-4 font-bold text-gray-900 border-r border-gray-100">{row.feature}</td>
                  <td className="py-3.5 px-4 text-gray-700 border-r border-gray-100">
                    <div className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-gray-400 text-sm mt-0.5 shrink-0">radio_button_unchecked</span>
                      <span>{row.vot}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-primary bg-orange-50/30">
                    <div className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5 shrink-0">check_circle</span>
                      <span>{row.lot}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section image - Industrial burners */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-4">
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
      </section>

      {/* Setup Cost vs Running Cost - H2 / H3 */}
      <section id="setup-vs-running-cost" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Financial &amp; ROI Analysis</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Setup Cost vs Running Cost: ROI &amp; BOM Model
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            Most decisions stall on initial capital spend. LOT requires a higher initial investment because you are procuring an external vaporiser, high-pressure liquid manifolds, and a dual-stream Pressure Reducing Skid (PRS).
          </p>
          <p>
            However, when you analyze total cost of ownership (TCO), the picture changes completely:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-red-50/60 border border-red-200 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-red-900 text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-red-600">trending_down</span>
                The Real Running Cost of VOT
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-red-950">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">close</span>
                  <span>10% to 20% fuel unevaporated and sent back in &ldquo;empty&rdquo; cylinders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">close</span>
                  <span>Production downtime and rejected batches from temperature dips</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">close</span>
                  <span>Continuous manual labor swapping dozens of cylinders each shift</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-emerald-900 text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600">trending_up</span>
                The Financial Payback of LOT
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                  <span><strong>100% fuel burned:</strong> Zero waste returned to the distributor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                  <span><strong>Fast Payback:</strong> Facilities using &gt; 40 cylinders/day recoup Capex in <strong>under 4 years</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm mt-0.5">check</span>
                  <span><strong>Reclaimed yard space:</strong> 80% reduction in required storage footprint</span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOM Financing Feature Callout */}
          <div className="bg-gradient-to-br from-primary to-primary-container text-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary-container">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-secondary-fixed-dim">Capex-Free Option</span>
                <h3 className="font-bold text-lg sm:text-xl text-white">The Build-Own-Maintain (BOM) Model</h3>
              </div>
            </div>
            <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
              If initial equipment capital is your primary bottleneck, ask Hi Tech Energy about the <strong>Build-Own-Maintain (BOM)</strong> financing arrangement. Under this model, the supplier installs, owns, and maintains the entire LOT vaporiser and PRS skid, and your facility pays strictly for the metered gas you burn—with zero initial equipment capital outlay on your balance sheet.
            </p>
          </div>
        </div>
      </section>

      {/* Which System Does Your Facility Need? - H2 */}
      <section id="which-system-needed" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Practical Recommendation</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            Which System Does Your Facility Need?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* VOT Checklist */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-lg">
              <span className="material-symbols-outlined text-gray-600">kitchen</span>
              VOT Makes Sense If:
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                <span>Your total gas consumption stays strictly <strong>under 60 kg/hr</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                <span>You run a small restaurant kitchen, employee canteen, or a few light burners</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                <span>Your equipment budget is tight and you have plenty of outdoor ground space for cylinder banks</span>
              </li>
            </ul>
          </div>

          {/* LOT Checklist */}
          <div className="bg-orange-50/70 border border-orange-200 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-lg">
              <span className="material-symbols-outlined text-secondary-container">factory</span>
              LOT Makes Sense If:
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary-container text-sm mt-0.5">check</span>
                <span>You run a high-demand site: hotel, hospital, metal processing, heat treatment, powder coating, or steam boiler</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary-container text-sm mt-0.5">check</span>
                <span>You already experience frozen cylinders, dropping flame temperatures, or gas left in &ldquo;empty&rdquo; cylinders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary-container text-sm mt-0.5">check</span>
                <span>Storage yard space is constrained and PESO safety setbacks must be maintained</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gut Check Box */}
        <div id="decision-flowchart" className="scroll-mt-28 bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
            <span className="material-symbols-outlined">lightbulb</span>
            A Quick Gut Check for Facility Managers:
          </div>
          <p className="text-amber-950 text-sm sm:text-base leading-relaxed">
            If anyone on your site has ever poured hot water on a cylinder to keep production going through a shift, <strong>your VOT system is already operating past its safe limit</strong>.
          </p>
        </div>

        {/* Domestic Reference Link */}
        <p className="text-xs sm:text-sm text-gray-500 italic">
          Note: Both VOT and LOT systems are engineered for commercial and industrial facilities. If you are evaluating piped gas for residential complexes or villa communities, check our guide on <Link to="/blog/domestic-lpg-pipeline-vs-cylinder" className="text-secondary font-semibold hover:underline">domestic LPG pipeline vs cylinder safety</Link>.
        </p>

        {/* Decision Flowchart figure */}
        <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md my-4">
          <img
            src={sections.flowchart.image}
            alt={sections.flowchart.imageAlt}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-auto aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 bg-gray-50 text-xs text-gray-600 text-center border-t border-gray-100">
            {sections.flowchart.imageCaption}
          </figcaption>
        </figure>
      </section>

      {/* VOT or LOT: The Short Version / Verdict - H2 */}
      <section id="verdict-summary" className="scroll-mt-28 space-y-6 pt-6 border-t border-gray-100">
        <div className="border-b border-gray-200 pb-3">
          <span className="text-secondary font-bold text-xs uppercase tracking-wider block mb-1">Summary</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary flex items-center gap-2">
            <span className="w-2 h-7 bg-secondary-container rounded-full inline-block" />
            VOT or LOT: The Technical Verdict
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base sm:text-lg">
          <p>
            If your facility consumes modest gas volume and has ample open space, VOT is inexpensive to install and simple to run.
          </p>
          <p>
            If you run heavy burners, work with restricted yard space, or fight frozen cylinders every winter, VOT is silently draining your bottom line through fuel waste and lost production hours. LOT costs more on day one, but recoups every rupee through 100% fuel evacuation and unshakeable pressure stability.
          </p>
          <div className="bg-primary/5 border border-primary/15 p-6 rounded-2xl text-gray-800 space-y-2">
            <p className="font-bold text-primary text-base sm:text-lg">
              Engineered with PESO Standard &amp; ISO Certification
            </p>
            <p className="text-sm leading-relaxed">
              <strong>Hi Tech Energy</strong> is <Link to="/safety" className="text-secondary font-semibold hover:underline">PESO Standard and ISO certified</Link>, engineering turnkey <Link to="/services/commercial-lpg-pipeline" className="text-secondary font-semibold hover:underline">commercial VOT line systems</Link> and heavy industrial <Link to="/services/lot-pipeline" className="text-secondary font-semibold hover:underline">LOT pipeline installations</Link>. If your thermal demand has outgrown cylinder banks, our engineering specialists will size your vaporiser, high-pressure manifold, and pressure reducing skid to your exact hourly consumption.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
