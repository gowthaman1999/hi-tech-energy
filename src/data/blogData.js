export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'domestic-lpg-pipeline-vs-cylinder',
    title: 'Domestic LPG Pipeline vs LPG Cylinder: Which Is Safer for Your Kitchen?',
    metaTitle: 'Domestic LPG Pipeline vs LPG Cylinder: Which Is Safer?',
    metaDescription: 'Compare domestic LPG pipelines and cylinders, including safety, risks, and convenience, to understand the right option for your kitchen.',
    canonicalUrl: 'https://www.hitechenergy.org/blog/domestic-lpg-pipeline-vs-cylinder',
    h1: 'Domestic LPG Pipeline vs LPG Cylinder: Which Is Safer for Your Kitchen?',
    date: 'October 5, 2026',
    datePublished: '2026-10-05T13:00:00+05:30',
    dateModified: '2026-10-05T13:00:00+05:30',
    readTime: '6 min read',
    topic: 'Safety Protocols',
    tag: 'Safety Guide',
    author: 'Hi Tech Energy Technical Team',
    authorRole: 'LPG Pipeline & Safety Engineering Specialists',
    heroImage: '/images/blog/domestic-lpg-pipeline-vs-cylinder-hero.webp',
    heroImageAlt: 'Domestic LPG pipeline vs cylinder installation in a modern Indian kitchen',
    excerpt: 'Compare domestic LPG pipelines and cylinders, including safety, risks, space, and convenience, to understand which option is truly safer for your kitchen.',
    tableOfContents: [
      { id: 'glance', title: 'Pipeline vs Cylinder at a Glance' },
      { id: 'difference', title: 'What Is the Difference?' },
      { id: 'safety', title: 'Safety: Which One Is Safer?' },
      { id: 'gas-leaks', title: 'What Happens When Gas Leaks', level: 3 },
      { id: 'pressure-safety', title: 'Pressure and Safety Devices', level: 3 },
      { id: 'lifting-changing', title: 'Lifting and Changing Cylinders', level: 3 },
      { id: 'convenience', title: 'Daily Use and Convenience' },
      { id: 'running-out', title: 'No More Gas Running Out', level: 3 },
      { id: 'kitchen-space', title: 'More Space in Your Kitchen', level: 3 },
      { id: 'billing-maintenance', title: 'Billing and Maintenance' },
      { id: 'how-you-pay', title: 'How You Pay', level: 3 },
      { id: 'regular-checks', title: 'Regular Checks', level: 3 },
      { id: 'gas-stove-change', title: 'Do You Need to Change Your Gas Stove?' },
      { id: 'stove-work-as-is', title: 'Your Stove Will Work As It Is', level: 3 },
      { id: 'near-the-stove', title: 'What Changes Near the Stove', level: 3 },
      { id: 'three-checks', title: '3 Things to Check After Your Stove Is Connected', level: 3 },
      { id: 'which-to-choose', title: 'Which One Should You Choose?' }
    ],
    comparisonTable: [
      { feature: 'Gas used', pipeline: 'LPG', cylinder: 'LPG' },
      { feature: 'Where gas is kept', pipeline: 'Outside the house', cylinder: 'Inside the kitchen' },
      { feature: 'Gas inside the kitchen', pipeline: 'Very little, only in the pipe', cylinder: 'Full cylinder' },
      { feature: 'Pressure in the kitchen', pipeline: 'Low', cylinder: 'High pressure cylinder kept inside' },
      { feature: 'Leak safety', pipeline: 'Leak detector and auto shut-off', cylinder: 'Mostly depends on smell' },
      { feature: 'Refill', pipeline: 'Automatic, no booking', cylinder: 'Book, wait and change by hand' },
      { feature: 'Payment', pipeline: 'Pay for what you use', cylinder: 'Pay for each refill' },
      { feature: 'Stove change', pipeline: 'Not needed', cylinder: 'Not needed' },
      { feature: 'Kitchen space', pipeline: 'Cabinet is free', cylinder: 'Cylinder takes space' }
    ],
    sections: {
      difference: {
        image: '/images/blog/domestic-lpg-pipeline-outdoor-bank.webp',
        imageAlt: 'Centralized outdoor domestic LPG cylinder bank and copper piping system',
        imageCaption: 'Centralized cylinder manifold installed in an open, well-ventilated exterior zone.'
      },
      safety: {
        image: '/images/blog/gas-leak-detector-auto-shutoff.webp',
        imageAlt: 'Smart kitchen gas leak detector and automatic gas shut-off valve for LPG pipeline safety',
        imageCaption: 'Active kitchen safety: Gas leak detector wired to an automatic shut-off solenoid valve.'
      },
      convenience: {
        image: '/images/blog/spacious-modular-kitchen-under-counter.webp',
        imageAlt: 'Spacious modular kitchen cabinet storage after switching from LPG cylinder to pipeline',
        imageCaption: 'Reclaimed cabinet space: Modular under-counter storage with wall-mounted gas shutoff.'
      },
      billing: {
        image: '/images/blog/domestic-gas-meter-pipeline-system.webp',
        imageAlt: 'Domestic LPG gas pipeline meter and pressure regulator for accurate monthly consumption billing',
        imageCaption: 'Individual apartment gas utility meter with pressure gauge and isolation valve.'
      },
      stove: {
        image: '/images/blog/gas-stove-blue-flame-inspection.webp',
        imageAlt: 'Gas stove operating with clean blue flame connected to domestic LPG pipeline',
        imageCaption: 'A steady pure blue flame indicates optimal combustion on an existing LPG stove.'
      }
    },
    faqs: [
      {
        question: 'Do you need to change your gas stove for a domestic LPG pipeline?',
        answer: 'No. Both cylinder and pipeline use LPG, so your stove does not need any change. The burner nozzle needs to be changed only if you move from LPG to PNG (piped natural gas).'
      },
      {
        question: 'Which is safer for your kitchen, a domestic LPG pipeline or a cylinder?',
        answer: 'A domestic LPG pipeline is significantly safer because the cylinder and high gas pressure remain outside the house in a ventilated area. Inside the kitchen, pressure is reduced to normal cooking levels, and automated safety systems (leak detectors and automatic shut-off valves) can isolate the gas immediately if a leak occurs.'
      },
      {
        question: 'What happens when LPG leaks in a kitchen?',
        answer: 'LPG is heavier than air, so it does not rise. Instead, it sinks and collects near the floor and inside closed cabinets. With a pipeline, gas storage is outside in the open air, and only a tiny volume of low-pressure gas is present in the kitchen pipe.'
      },
      {
        question: 'What should you check after your stove is connected to an LPG pipeline?',
        answer: 'Perform three checks: 1) Flame colour must be pure blue (if yellow or orange, call a technician); 2) Soap water test on joints to verify zero bubbling; 3) Valve test by closing the isolation valve while a burner is lit to ensure the flame shuts off immediately.'
      }
    ]
  }
];

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
