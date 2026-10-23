# Hi Tech Energy - Blog 6 (LPG Leak Detection: Everything You Need to Know)

**Meta Title:** LPG Leak Detection: Everything You Need to Know  
**Meta Description:** Learn how LPG leak detection works, common causes of gas leaks, available detection methods, and safety practices for residential and commercial gas systems.  
**Slug:** https://www.hitechenergy.org/blog/lpg-leak-detection  

---

# LPG Leak Detection: How It Works, Warning Signs, and What to Do

If you run a restaurant kitchen, a hostel, a lab, or a factory that uses LPG, you've probably had that moment: a faint smell near the manifold, and a quick "is that gas or is it just the drain?"

Most of the time it's nothing. But LPG is heavier than air, it collects quietly in low spots, and a single spark from a light switch can be enough to ignite it.

This guide covers how LPG leaks are detected, starting with the smell your nose picks up and going through to the sensors and automatic shut-off valves used in commercial pipeline systems. It also covers why detectors sometimes go off for no clear reason, and what the safety rules say about storing cylinders and running gas lines.

---

## Quick takeaways

* Propane and butane are heavier than air, so a leak pools near the floor and in drains, pits, and basements instead of drifting away.
* LPG has no natural odour. Suppliers add ethyl mercaptan so you can smell a leak (the rotten egg or rotten cabbage smell).
* Sensors work in different ways. Metal oxide sensors (like the MQ-2 and MQ-6) react to gas touching a heated element, infrared sensors measure how gas absorbs light, and ultrasonic sensors pick up changes in sound waves.
* A detector that only beeps relies on someone hearing it. A detector wired to a solenoid valve cuts the gas supply on its own.
* If you smell gas, don't touch switches, don't use a lighter or start a vehicle, shut the cylinder or main valve if it's safe, open doors and windows, and leave. Call for help from outside.
* Humidity, cleaning chemicals, cooking fumes, and charging batteries are common causes of false alarms. Never reset a detector inside an area where you suspect a leak.

---

## What is LPG leak detection and why does it matter?

LPG leak detection is any method that spots escaping propane or butane before it builds up enough to catch fire. That might be your nose, a sensor on the wall, or a full control panel that shuts the gas off and sends an SMS. Whatever the method, you want to catch the leak while the concentration is still well below the point where it can burn.

### Why LPG behaves differently from other gases

LPG is heavier than air, so a leak settles at floor level and in low areas like drains, cellars, and service pits.

Natural gas (PNG) is lighter than air and tends to rise and disperse. LPG does the opposite. In a kitchen, it can spread across the floor and build up under counters. In a plant room, it can collect in a trench. This is why LPG sensors are mounted low on the wall, usually around 15 to 30 cm above the floor, and why ventilation at floor level matters.

That behaviour creates two risks:

1. **Fire and explosion.** LPG burns when it mixes with air in roughly the 2% to 10% range. Below that, the mix is too lean, and above it, too rich. A pooled leak can easily pass through that range.
2. **Asphyxiation.** In a closed, low space, LPG pushes out oxygen. People entering a pit or basement after a leak can be at risk even if nothing ignites.

### Why your LPG smells

Pure LPG has no colour and no smell, so you'd have no idea it was leaking. Suppliers add a small amount of an odorant, usually ethyl mercaptan, which gives off a sharp sulphur or rotten egg smell.

The smell has limits, though. Someone with a weak sense of smell might miss it. So might someone who's been in the room for a while, because your nose gets used to it. And nobody smells a leak in a space nobody walks into. Detectors cover those cases.

### Home cylinders vs industrial systems

The risk looks different depending on scale:

| Setting | Typical setup | Where leaks usually happen |
| :--- | :--- | :--- |
| **Homes** | One or two 14.2 kg cylinders, rubber tube to the stove | Regulator, worn rubber hose, stove knobs |
| **Commercial kitchens, hostels, hotels** | Cylinder bank with a manifold and copper or GI pipeline | Manifold joints, valves, pipe threads, appliance connections |
| **Industries and labs** | Bulk storage, vaporisers, long pipelines, gas headers | Flanges, valves, buried or concealed pipe, regulator stations |

A bigger system has more joints, and every joint can leak. Commercial and industrial setups need more than a nose and a good habit.

This is worth thinking about if you're comparing [LPG pipeline vs LPG cylinder](/blog/domestic-lpg-pipeline-vs-cylinder) setups for a building. Many apartments now use a [domestic LPG gas pipeline service](/services/domestic-lpg-pipeline), where a central cylinder bank outside the building feeds each flat through a fixed line. The cylinders stay out of the kitchen, which removes a big risk, but the pipeline adds joints and valves that need their own leak checks.

On bigger sites, the layout matters too. When people weigh [LPG manifold vs gas header](/blog/lpg-manifold-vs-gas-header) designs, the detection question comes down to where leaks can happen. A manifold joins several cylinders at one point, so leaks tend to show up in one area. A gas header splits the supply into multiple branch lines, so you need sensor coverage along each branch.

### Physical and sensory signs of an LPG leak

The first sign is usually the smell: rotten eggs or sulphur, stronger near the floor.

You may also hear it. A small leak at a cylinder valve, regulator, or pipe joint hisses. On larger high-pressure lines, the sound can be a louder roar or whistle.

On outdoor or underground lines, look for:

* **Frost or ice forming on a valve or joint.** LPG gets very cold as it expands, so a leak can freeze moisture around it. Don't confuse this with normal [LPG cylinder freezing](/blog/lpg-gas-freezing), where frost forms on the body of a cylinder because gas is being drawn from it faster than it can vaporise. That's a supply issue. Frost on a joint or fitting is the warning sign.
* A white mist or fog near a fitting.
* Bubbles rising through puddles, wet soil, or standing water.
* Dirt or dust blowing around near the ground for no reason.
* A patch of grass or plants along a buried pipe route that has turned brown or died.

To check a joint you suspect, brush soapy water on it. Bubbles mean gas is escaping. Never use a match or lighter to check.

---

## How do LPG sensors work?

Different sensor technologies suit different jobs, budgets, and environments.

### Semiconductor (metal oxide) sensors: MQ-2 and MQ-6

Metal oxide sensors use a small heated element coated with tin dioxide (SnO2). When propane or butane touches it, the element's electrical resistance drops, and the circuit reads that drop as gas.

These are the most common sensors in low-cost detectors and DIY projects. The MQ-2 picks up a wide range of flammable gases and smoke. The MQ-6 is tuned more closely to LPG, propane, and butane.

Typical specs:
* Runs on 5V DC
* Heater draws up to about 800 mW
* Detects roughly 200 to 10,000 ppm (parts per million) of LPG
* Needs a burn-in period of 24 hours or more when new before readings settle

Most MQ modules have two outputs. The analog pin gives a voltage that rises as gas concentration rises. The digital pin acts like a switch: it stays high in clean air and drops low once the gas crosses a threshold you set with the small potentiometer on the board.

They work well in homes, small kitchens, budget alarms, and hobby builds. The catch is that they also react to other gases (alcohol, cooking fumes, some sprays), and their readings drift with temperature and humidity.

### Electrochemical and infrared (IR) sensors

Electrochemical sensors produce a small electrical current when a target gas reacts at an electrode. They're very accurate for toxic gases like carbon monoxide, but they're less common as a primary LPG sensor, and certain chemicals can poison them over time.

Infrared sensors shine infrared light through the air and measure how much gets absorbed. Hydrocarbons like propane and butane absorb specific wavelengths, so less light reaching the detector means gas is present. IR sensors don't need oxygen to work, resist poisoning, and last longer. They cost more, which is why you mostly see them in industrial plants.

Some facilities also use optical gas imaging cameras, which make gas plumes visible on screen. These are for inspections and for finding leaks along long pipelines, not for fixed alarms.

### Ultrasonic acoustic detection

Ultrasonic detectors listen for the high-frequency sound a pressurised gas leak makes, or measure how gas changes the way sound travels through the air. The gas doesn't have to reach them.

One research approach uses 40 kHz ultrasonic waves and measures acoustic impedance, which is how much a gas resists sound passing through it. You get it by multiplying the gas density by the speed of sound in that gas.

Every gas has its own value. At 25°C, roughly:

| Gas | Acoustic impedance (kg·m⁻²·s⁻¹) |
| :--- | :--- |
| **Air** | ~415 |
| **Butane** | ~481 |
| **Helium** | ~180 |
| **Hydrogen** | ~114 |

Butane's value is clearly different from air's, so a shift in the reflected signal can flag a leak. In lab tests, this method has picked up a pressurised breach in around 10 milliseconds and identified the type of gas in under a second.

This helps in places where wind or ventilation can blow gas away from a point sensor before it registers. Open-air plants and exposed outdoor installations are the usual examples.

### Which sensor fits which job?

| Sensor type | Best for | Main strength | Main weakness |
| :--- | :--- | :--- | :--- |
| **Metal oxide (MQ series)** | Homes, small kitchens | Cheap, simple | Cross-sensitivity, drift |
| **Catalytic bead** | Commercial and industrial areas | Proven for flammable gases | Can be poisoned by silicones and sulphur |
| **Infrared** | Industrial plants, harsh environments | Stable, long life | Higher cost |
| **Ultrasonic** | Open-air, high-pressure systems | Very fast, not affected by wind | Doesn't measure concentration directly |

---

## How an automated LPG monitoring and shut-off system works

A detector on its own only warns you. A monitoring system also acts on the warning. Here's what's inside one, using a typical microcontroller setup as the example.

### The hardware

A basic automated system has four parts:

1. **The sensor**, usually an MQ-2 or MQ-6 for LPG. Some builds add a DHT11 to track temperature and humidity, which helps spot conditions that cause false readings.
2. **The controller**, a microcontroller such as an ATmega328 (the chip on an Arduino UNO), which reads the sensor and decides what to do.
3. **The display and alerts.** A 16x2 LCD shows live readings, a buzzer sounds locally, and a GSM module like the SIM800L sends SMS alerts to phones.
4. **The output.** A relay drives a solenoid valve (or a servo on the valve) to close the gas line, and can also switch on an exhaust fan.

For power, a simple version steps 230V mains down to 12V AC with a transformer, converts it to DC with a bridge rectifier (four 1N4007 diodes), and regulates it to a steady 5V with an LM7805 regulator for the controller and sensor.

### What happens when gas is detected

1. **The reading crosses the threshold.** The trigger point sits well below the danger level. Many builds use something around 300 ppm, a tiny fraction of the lower flammable limit.
2. **The controller signals the relay**, and the solenoid valve shuts the main supply.
3. **The buzzer and any warning lights go on.**
4. **The exhaust fan switches on** to clear the gas. The fan has to be rated for flammable atmospheres, or placed so its motor isn't in the gas zone.
5. **The GSM module sends an SMS** to the owner, manager, or maintenance team.

Optimised systems in published studies report response times around 120 milliseconds from detection to action, against around 220 ms for slower setups. Both are far faster than any person could react.

### DIY builds vs certified systems

An Arduino detector is a good learning project and can work as an extra alert at home. A restaurant, hotel, hospital, lab, or factory needs a system built and installed to standard. That means:

* Sensors and valves certified for use with LPG
* Enclosures that stop the electronics from sparking inside a gas zone
* Battery backup so monitoring continues during a power cut
* A control panel that logs events and can be tested and calibrated on a schedule
* Installation by a team approved under PESO rules

If you're setting this up for a commercial or industrial site, a professional [LPG gas pipeline installation service](/services/commercial-lpg-pipeline) can plan the sensors, valves, and control panel together with the pipeline itself, instead of adding them later.

---

## Why gas detectors give false alarms (and how to fix it)

An alarm that keeps going off for no reason wears down trust fast. Staff start ignoring it, or someone switches it off, and then it's not there on the day it's needed. Most false alarms have a cause you can find.

### Common causes

Sudden temperature or humidity changes are the first suspect. Moving from a cold room to a hot kitchen, or a burst of steam, can leave condensation on the sensor and throw the reading off.

Cross-sensitivity is the next. Many sensors react to more than one gas, so alcohol sanitisers, cooking fumes, aerosol sprays, and paint can all trigger an LPG sensor. Lead-acid batteries give off hydrogen while charging, which can set off some sensors. That's why detectors near UPS or battery rooms tend to act up.

Sensors can also be poisoned. Silicones (found in some sealants and sprays), sulphur compounds, and strong cleaning solvents can damage catalytic and some metal oxide sensors, leaving them with wrong readings or a weak response.

Finally, sensors age. Every sensor has a working life, and older ones drift.

### Ten steps to troubleshoot a false alarm

1. Write down which detector went off, the peak reading, and the date and time.
2. Check what was happening nearby at that time: cleaning, painting, cooking, battery charging, venting.
3. Inspect the unit in a safe area where you're sure there's no gas.
4. Let it settle to room temperature and humidity.
5. Check the zero reading in clean air, or with zero-gas from a cylinder.
6. Do a bump test: expose it briefly to a known test gas and confirm it alarms.
7. Recalibrate if the readings are outside the allowed range.
8. Cross-check with a separate, calibrated portable detector.
9. Take unstable units out of service and mark them.
10. Replace sensors that keep failing.

> **Important:** Never zero or recalibrate a detector inside an area where you suspect a leak. If there's gas in the air when you reset it, the detector treats that as normal. Later, in clean air, it may show a negative reading and fail to alarm when real gas is present.

---

## Safety rules for LPG storage and pipelines

How LPG is stored and piped matters as much as how leaks are detected.

In India, LPG storage and pipelines come under the Petroleum and Explosives Safety Organisation (PESO), along with the relevant BIS and PNGRB standards. Exact distances and rules depend on the quantity stored and the type of premises, so check with a PESO-approved installer for your site. The principles below are widely followed.

### Storing commercial LPG cylinders

* Keep cylinders upright at all times, including empty ones.
* Store them outdoors where possible, in a well-ventilated, lockable cage. A common guideline is a cage at least 1.8 metres high, on a level floor that doesn't flood.
* Keep them away from drains and pits. LPG sinks, so a leak near an open drain can travel a long way underground. Guidelines commonly ask for around 5 metres from boundaries, drains, and fire escapes, and around 3 metres from ignition sources and other gas types.
* Keep ignition sources away: no smoking, no open flames, no unprotected electrical fittings.
* Store full and empty cylinders apart, and keep LPG away from oxygen cylinders.

If a cylinder catches fire, don't try to fight it unless you're trained and can safely shut the valve. A heated cylinder can rupture. Get everyone out, keep well back, and call the fire service on 101 or 112.

---

## Converting from LPG to PNG

Many commercial and residential buildings are moving from LPG cylinders to piped natural gas, and the old pipeline can't simply be connected to the new supply.

Pressure is the main issue. LPG manifold systems are built for cylinder pressures that can reach around 16.5 bar. Domestic PNG runs at a very low pressure, around 110 mbar in the service line. The pipeline, regulators, and appliances all need checking before the switch.

Pipe size needs a second look too. [Gas pipe sizing for LPG](/blog/lpg-pipe-sizing) is based on high pressure, so a line that carried LPG comfortably may be too narrow to deliver enough low-pressure PNG to every appliance.

PNGRB guidelines for conversion generally require:

* Checking that pipe wall thickness is suitable
* Removing threaded joints hidden inside walls or ceilings
* Pressure-testing the full line for leaks
* Certification by a Third-Party Inspection Agency (TPIA)

### What to do if you smell gas or a pipeline is damaged

Act in this order:

1. **Stop work and don't touch anything electrical.** No switches on or off, no plugs, no doorbells.
2. **Don't light matches, use lighters, or start a vehicle nearby.**
3. **Shut the gas** at the cylinder valve or main isolation valve, only if you can reach it safely.
4. **Open doors and windows** on your way out, if it's safe to do so.
5. **Get everyone out, moving upwind**, so the wind blows toward you and not from the leak to you.
6. **Call for help from a safe distance**, not near the leak. In India, the LPG emergency helpline is 1906, and fire services are on 101 or 112.
7. **Don't go back in** until a qualified person says it's safe.

---

## Conclusion

LPG is safe when it's handled right. The trouble starts when it escapes, because it sinks, hides in low spots, and doesn't need much to ignite.

The odorant gives your nose a chance to catch a leak, but a kitchen, hotel, lab, or factory running a manifold or pipeline can't rely on someone noticing a smell. Proper protection uses a sensor suited to the space, an automatic shut-off valve that closes without waiting for a person, and a regular schedule for testing and maintaining both.

If something smells off, don't investigate with a flame and don't flip a switch. Shut the gas if you safely can, get out, and call for help from outside.

---

## Frequently asked questions

### Can LPG leaks be detected without chemical sensors?
Yes. Ultrasonic detectors pick up pressurised LPG leaks by sound, without the gas having to touch a sensor. Some designs using 40 kHz ultrasonic waves have detected leaks in about 10 milliseconds, and they keep working when wind blows the gas away from the detector.

### Why does my LPG detector go off when there's no leak?
Usually it's another gas or vapour the sensor also reacts to (alcohol sanitisers, cooking fumes, sprays, hydrogen from charging batteries), condensation from humidity, a detector that was zeroed in contaminated air, or an ageing sensor. The ten-step checklist above will help you find the cause.

### What's the difference between a bump test and calibration?
A bump test is a quick pass or fail check. You expose the detector briefly to a test gas to confirm the sensor responds and the alarm goes off. Calibration adjusts the detector's readings against a known gas concentration so the numbers it shows are accurate.

### Is an Arduino LPG detector safe for home use?
It can work as an extra early warning, but it shouldn't be your only protection. If you build one, use optoisolated relays, a sealed enclosure so nothing can spark in the gas zone, and battery backup so it keeps working during power cuts. For commercial premises, use a certified system installed by a PESO-approved team.

### Where should an LPG detector be installed?
Low on the wall, about 15 to 30 cm above the floor, because LPG sinks. Put it near the cylinder or manifold and the cooking area, but not directly above the burner, where cooking fumes will hit it constantly.

### How often should gas detectors be tested?
Follow the manufacturer's schedule. Many commercial sites bump test monthly, or before each shift in high-risk areas, and calibrate at least once or twice a year. Replace sensors at the end of their rated life.
