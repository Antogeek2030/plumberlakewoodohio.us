export const siteConfig = {
  name: 'Plumber Lakewood Ohio',
  shortName: 'plumberlakewoodohio',
  domain: 'plumberlakewoodohio.us',
  url: 'https://plumberlakewoodohio.us',
  phone: '(216) 555-0199', // Update with your real phone number
  phoneHref: 'tel:+12165550199',
  email: 'info@plumberlakewoodohio.us',
  address: {
    street: '13305 Madison Ave',
    city: 'Lakewood',
    state: 'OH',
    zip: '44107',
    full: '13305 Madison Ave, Lakewood, OH 44107, USA',
    mapsUrl: 'https://maps.google.com/?q=13305+Madison+Ave,+Lakewood,+OH+44107'
  },
  description: 'Reliable local plumbing services in Lakewood, Ohio. From emergency repairs to water heater installations, our team is ready to help.',
  geo: {
    latitude: 41.4850,
    longitude: -81.7982
  },
  social: {
    // Add when available
  },
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY' // Replace with your Web3Forms access key from https://web3forms.com
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  process: string[];
  priceRange: string;
  faqs: { question: string; answer: string }[];
  icon?: string;
};

export const services: Service[] = [
  {
    slug: 'emergency-plumbing',
    title: 'Emergency Plumbing Services',
    shortTitle: 'Emergency Plumbing',
    description: '24/7 emergency plumbing response for bursts, major leaks, and urgent drain issues in Lakewood and nearby areas.',
    intro: 'When a pipe bursts at 2 a.m. or a sewer backup threatens your home, you need a plumber who answers the phone and shows up. Our emergency plumbing team serves Lakewood, Ohio and surrounding neighborhoods with prompt, careful service focused on stopping the damage and restoring function.',
    process: [
      'Call or submit an urgent request and describe the issue',
      'We triage severity and dispatch the nearest available technician',
      'On arrival we secure the area, shut off water if needed, and diagnose',
      'We complete the necessary repair or temporary stabilization',
      'We explain findings and any follow-up recommendations'
    ],
    priceRange: 'Emergency service calls typically start in the $150–$300 range depending on time of day and complexity; full repair costs vary.',
    faqs: [
      {
        question: 'Do you offer true 24/7 emergency service?',
        answer: 'Yes. We respond to urgent calls around the clock for Lakewood and nearby communities. Response times depend on weather, traffic, and call volume.'
      },
      {
        question: 'What counts as a plumbing emergency?',
        answer: 'Burst pipes, major leaks that cannot be stopped, sewage backups into living areas, no water, and gas line concerns (if you smell gas, leave the home and call the utility first).'
      },
      {
        question: 'Will you give a price before starting work?',
        answer: 'We diagnose first and discuss options and approximate costs before proceeding with non-emergency repairs. Emergency stabilization may begin immediately to protect the property.'
      }
    ]
  },
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning Services',
    shortTitle: 'Drain Cleaning',
    description: 'Professional drain cleaning for kitchen, bathroom, and main line clogs in Lakewood, OH homes and businesses.',
    intro: 'Slow drains and recurring clogs are more than an inconvenience—they can signal deeper buildup in your pipes. We use proven mechanical and hydro methods to clear kitchen sinks, showers, tubs, floor drains, and main sewer lines without unnecessary disruption.',
    process: [
      'Inspect the affected drain and ask about history of clogs',
      'Select the appropriate cleaning method (cable, hydro-jet, or camera-assisted)',
      'Clear the blockage thoroughly',
      'Flush and test flow',
      'Advise on prevention and any further pipe concerns observed'
    ],
    priceRange: 'Most residential drain cleaning jobs fall between $150 and $450 depending on access and severity.',
    faqs: [
      {
        question: 'Is hydro-jetting better than a snake?',
        answer: 'Hydro-jetting is excellent for grease, scale, and heavy buildup in main lines. A cable machine is often ideal for localized clogs. We choose based on the situation.'
      },
      {
        question: 'How often should drains be cleaned?',
        answer: 'It depends on usage and pipe condition. Many homes benefit from professional attention every 1–2 years if they experience slow drains or have older piping.'
      },
      {
        question: 'Can you clear outdoor drains and cleanouts?',
        answer: 'Yes. We service exterior cleanouts, yard drains, and area drains as part of residential and light commercial work.'
      }
    ]
  },
  {
    slug: 'water-heater-repair',
    title: 'Water Heater Repair',
    shortTitle: 'Water Heater Repair',
    description: 'Fast, reliable water heater repair for tank and tankless units serving Lakewood, Ohio homeowners.',
    intro: 'No hot water, lukewarm showers, or strange noises from the water heater usually point to a repairable problem. We diagnose conventional tank and tankless systems, replace failed components, and help you decide when repair still makes sense versus replacement.',
    process: [
      'Confirm symptoms and check age and type of unit',
      'Test elements, thermostats, valves, burners, or electronic controls',
      'Present findings and clear repair options',
      'Complete approved repairs with quality parts',
      'Verify hot water recovery and safety features'
    ],
    priceRange: 'Common repairs such as element or thermostat replacement often range $200–$600 including labor; larger component work varies.',
    faqs: [
      {
        question: 'How long do water heaters typically last?',
        answer: 'Traditional tank units often last 8–12 years with proper maintenance. Tankless units can last longer when flushed regularly. Age is a key factor in repair versus replace decisions.'
      },
      {
        question: 'Do you work on both gas and electric units?',
        answer: 'Yes. We service gas and electric tank heaters as well as many tankless models common in the Lakewood area.'
      },
      {
        question: 'What if the tank is leaking?',
        answer: 'A leaking tank usually means the unit has reached the end of its life. We can help with safe shutdown and discuss replacement options.'
      }
    ]
  },
  {
    slug: 'water-heater-installation',
    title: 'Water Heater Installation',
    shortTitle: 'Water Heater Installation',
    description: 'Professional installation of tank and tankless water heaters for Lakewood homes with code-compliant work.',
    intro: 'Choosing and installing the right water heater affects comfort, energy use, and long-term reliability. We help Lakewood homeowners select appropriate tank or tankless systems, handle permitting where required, and install to local code with attention to venting, drainage, and safety.',
    process: [
      'Evaluate household demand, existing setup, and fuel type',
      'Recommend suitable capacity and efficiency options',
      'Obtain any needed permits and schedule installation',
      'Remove the old unit safely and install the new one',
      'Test operation, explain maintenance, and register warranties when applicable'
    ],
    priceRange: 'Installed conventional tank systems commonly range $1,200–$2,500; tankless installations are typically higher depending on venting and electrical or gas upgrades.',
    faqs: [
      {
        question: 'Should I switch to tankless?',
        answer: 'Tankless can save space and provide endless hot water, but upfront cost and possible electrical or gas line upgrades matter. We discuss real-world pros and cons for your home.'
      },
      {
        question: 'Do you haul away the old water heater?',
        answer: 'Yes. We remove and dispose of the old unit as part of a standard replacement installation.'
      },
      {
        question: 'How long does installation take?',
        answer: 'Most straightforward tank replacements are completed in a few hours. Tankless or complex upgrades may take longer.'
      }
    ]
  },
  {
    slug: 'leak-detection',
    title: 'Leak Detection',
    shortTitle: 'Leak Detection',
    description: 'Accurate leak detection for hidden water leaks under slabs, in walls, and in plumbing systems throughout Lakewood.',
    intro: 'Hidden leaks waste water, damage finishes, and can lead to mold. We use non-invasive methods—listening equipment, moisture meters, and pressure testing—to locate the source so repairs can be targeted instead of exploratory.',
    process: [
      'Gather history of high bills, damp spots, or pressure loss',
      'Perform systematic pressure and listening tests',
      'Pinpoint the most likely leak location',
      'Confirm findings and outline repair approaches',
      'Coordinate or perform the necessary repair'
    ],
    priceRange: 'Leak detection service visits typically start around $200–$400; repair costs depend on location and access.',
    faqs: [
      {
        question: 'Can you find leaks under concrete slabs?',
        answer: 'Yes. Slab leaks are a common request. We use specialized equipment to narrow the location before any concrete cutting is considered.'
      },
      {
        question: 'Will detection require opening walls?',
        answer: 'We aim to minimize opening finishes. In many cases we can isolate the area closely enough that only a small access point is needed for repair.'
      },
      {
        question: 'Do you also repair the leak once found?',
        answer: 'Yes. Detection and repair are often handled in sequence so you have one point of contact.'
      }
    ]
  },
  {
    slug: 'pipe-repair',
    title: 'Pipe Repair & Replacement',
    shortTitle: 'Pipe Repair',
    description: 'Copper, PEX, and galvanized pipe repair and selective replacement for Lakewood residences.',
    intro: 'Corroded, frozen, or damaged pipes need careful repair so the fix lasts. We repair sections of copper, PEX, and other common materials and can replace runs when corrosion or repeated failures make that the better choice.',
    process: [
      'Locate and assess the damaged section',
      'Shut off and drain the affected line',
      'Repair or replace with matching or upgraded materials',
      'Pressure test the repair',
      'Restore finishes if we opened access points'
    ],
    priceRange: 'Simple accessible repairs often range $200–$600; longer runs or difficult access increase cost.',
    faqs: [
      {
        question: 'Do you still work with galvanized pipe?',
        answer: 'We can repair or connect to existing galvanized when appropriate, but we generally recommend upgrading to copper or PEX for longevity when larger sections need work.'
      },
      {
        question: 'What about frozen pipes?',
        answer: 'We thaw and repair freeze damage and can advise on insulation and heat tape to reduce future risk in exposed areas.'
      },
      {
        question: 'Is whole-house re-piping ever recommended?',
        answer: 'When multiple leaks appear in aging systems, selective or full re-pipe can be more economical long-term. We evaluate case by case.'
      }
    ]
  },
  {
    slug: 'sewer-line-repair',
    title: 'Sewer Line Repair',
    shortTitle: 'Sewer Line Repair',
    description: 'Sewer line inspection, repair, and replacement options for Lakewood properties with main line problems.',
    intro: 'Main sewer line issues show up as slow drains throughout the house, backups, or foul odors. We inspect with camera equipment when needed, clear blockages, and discuss repair versus replacement options including traditional dig and trenchless approaches where suitable.',
    process: [
      'Assess symptoms and access points (cleanouts)',
      'Camera inspect when helpful to identify roots, breaks, or bellies',
      'Clear the line or recommend targeted repair',
      'Discuss trenchless or conventional repair if structural damage is found',
      'Complete agreed work and verify flow'
    ],
    priceRange: 'Clearing and minor repairs vary widely; full line replacement is a larger project and is quoted after inspection.',
    faqs: [
      {
        question: 'Do you offer trenchless sewer repair?',
        answer: 'When conditions allow, trenchless methods can reduce yard disruption. Suitability depends on pipe condition, depth, and access—we evaluate after inspection.'
      },
      {
        question: 'How do tree roots affect sewer lines?',
        answer: 'Roots seek moisture and can enter joints or cracks. Regular cleaning and, when needed, structural repair or replacement address the problem.'
      },
      {
        question: 'Who is responsible for the sewer line?',
        answer: 'Typically the property owner is responsible from the house to the city connection. We can help clarify local practice.'
      }
    ]
  },
  {
    slug: 'toilet-repair',
    title: 'Toilet Repair & Installation',
    shortTitle: 'Toilet Repair',
    description: 'Toilet repair, rebuild, and new toilet installation for Lakewood bathrooms.',
    intro: 'Running toilets, weak flushes, and leaks at the base are everyday problems with straightforward solutions. We repair fill valves, flappers, and wax seals, and install new toilets when replacement is the better path.',
    process: [
      'Diagnose the specific symptom (running, leaking, clogging, rocking)',
      'Repair internal components or address the base seal',
      'If replacing, remove the old toilet carefully and set the new one level',
      'Connect supply, test flush multiple times, and check for leaks',
      'Haul away the old toilet when replacing'
    ],
    priceRange: 'Most toilet repairs fall between $150 and $350. New toilet installation (labor only or with fixture) is quoted based on model and conditions.',
    faqs: [
      {
        question: 'Why does my toilet keep running?',
        answer: 'Usually a worn flapper, misadjusted fill valve, or mineral buildup. These are common, inexpensive repairs.'
      },
      {
        question: 'Can you install a taller or comfort-height toilet?',
        answer: 'Yes. We install standard and comfort-height models and can help match rough-in dimensions.'
      },
      {
        question: 'Do you fix wax ring leaks?',
        answer: 'Yes. A leaking wax seal is a frequent cause of water at the base and is straightforward to correct.'
      }
    ]
  },
  {
    slug: 'faucet-repair',
    title: 'Faucet Repair & Replacement',
    shortTitle: 'Faucet Repair',
    description: 'Kitchen and bathroom faucet repair and replacement in Lakewood homes.',
    intro: 'Dripping faucets waste water and become annoying quickly. We repair cartridge, compression, and ball-type faucets and install new fixtures when repair is no longer practical or you want an updated look.',
    process: [
      'Identify faucet type and the source of the drip or reduced flow',
      'Replace cartridges, seats, O-rings, or aerators as needed',
      'If replacing, disconnect supply lines and remove the old faucet',
      'Install the new faucet, reconnect, and check for leaks under pressure',
      'Clean up and demonstrate operation'
    ],
    priceRange: 'Repairs commonly range $125–$300. Replacement labor is typically $150–$350 plus the cost of the fixture.',
    faqs: [
      {
        question: 'Can every dripping faucet be repaired?',
        answer: 'Most can. Very old or discontinued models sometimes make parts hard to find; in those cases replacement is cleaner.'
      },
      {
        question: 'Do you install widespread and single-hole faucets?',
        answer: 'Yes. We handle common kitchen and bath configurations and can advise if your sink or counter needs modification.'
      },
      {
        question: 'Why is water pressure low at one faucet?',
        answer: 'Often a clogged aerator or supply issue local to that fixture. We check those first.'
      }
    ]
  },
  {
    slug: 'garbage-disposal-repair',
    title: 'Garbage Disposal Repair',
    shortTitle: 'Garbage Disposal',
    description: 'Garbage disposal repair, unjamming, and replacement for Lakewood kitchens.',
    intro: 'A disposal that hums, leaks, or will not turn on is a common kitchen frustration. We free jams, replace reset components and seals, and install new disposals when the unit has failed.',
    process: [
      'Confirm power and reset status safely',
      'Attempt to free a jam if present',
      'Inspect for leaks at the sink flange or dishwasher connection',
      'Repair or replace the unit as appropriate',
      'Test with water and a small amount of food waste'
    ],
    priceRange: 'Unjamming and minor repairs often $100–$250. Full replacement typically $250–$450 installed depending on model.',
    faqs: [
      {
        question: 'Is it safe to put my hand in the disposal?',
        answer: 'Never. Always disconnect power and use the proper hex key or tools from the bottom. We handle jammed units safely.'
      },
      {
        question: 'What should not go down a disposal?',
        answer: 'Grease, fibrous vegetables, coffee grounds in large amounts, and non-food items. We can share practical habits that extend unit life.'
      },
      {
        question: 'Do you install quiet or higher-horsepower models?',
        answer: 'Yes. We can recommend and install models suited to your household needs and sink configuration.'
      }
    ]
  },
  {
    slug: 'sump-pump-installation',
    title: 'Sump Pump Installation',
    shortTitle: 'Sump Pump Install',
    description: 'New sump pump installation and battery backup options for Lakewood basements.',
    intro: 'A properly sized and installed sump pump is one of the best protections against basement flooding. We install primary pumps and optional battery backup systems so your home stays dry during power outages and heavy rain.',
    process: [
      'Evaluate basin condition, discharge path, and electrical access',
      'Select an appropriate pump capacity for the expected water volume',
      'Install or upgrade the pump, check valve, and discharge line',
      'Add battery backup if desired and test both systems',
      'Explain maintenance and alarm features'
    ],
    priceRange: 'Primary pump installation commonly ranges $800–$1,800 depending on existing setup; battery backup systems add to the total.',
    faqs: [
      {
        question: 'Do I need a battery backup?',
        answer: 'If your area loses power during storms or you have finished basement space, a backup provides important extra protection. We discuss your risk level.'
      },
      {
        question: 'How often should a sump pump be tested?',
        answer: 'A simple pour test a few times a year and before rainy seasons is good practice. We can show you how.'
      },
      {
        question: 'Can you replace only the pump in an existing basin?',
        answer: 'Yes, provided the basin and discharge are in good condition.'
      }
    ]
  },
  {
    slug: 'sump-pump-repair',
    title: 'Sump Pump Repair',
    shortTitle: 'Sump Pump Repair',
    description: 'Sump pump diagnosis and repair for primary and backup systems in Lakewood homes.',
    intro: 'When a sump pump fails to start or runs constantly, quick attention prevents water damage. We diagnose switches, floats, check valves, and motors and repair or replace components so the system is ready for the next storm.',
    process: [
      'Test the pump, float switch, and electrical supply',
      'Inspect the check valve and discharge line for restrictions',
      'Repair or replace failed parts',
      'Verify automatic operation and high-water response',
      'Advise on remaining life and backup options'
    ],
    priceRange: 'Many repairs fall in the $150–$400 range; full pump replacement is higher if the unit itself has failed.',
    faqs: [
      {
        question: 'Why is my sump pump running all the time?',
        answer: 'Possible causes include a stuck float, failed check valve allowing water back, or unusually high groundwater. We isolate the reason.'
      },
      {
        question: 'Can you service battery backup systems too?',
        answer: 'Yes. We check batteries, chargers, and transfer operation on backup units we encounter.'
      },
      {
        question: 'How long do sump pumps usually last?',
        answer: 'Quality pumps often last 7–10 years with regular use and occasional maintenance. Heavy use or sediment shortens life.'
      }
    ]
  },
  {
    slug: 'bathroom-plumbing',
    title: 'Bathroom Plumbing Services',
    shortTitle: 'Bathroom Plumbing',
    description: 'Complete bathroom plumbing—repairs, fixture installs, and rough-in for remodels in Lakewood.',
    intro: 'From a single leaking shower valve to full bathroom rough-in for a remodel, we handle the plumbing that makes bathrooms work. We coordinate with your schedule and, when applicable, other trades so the job stays on track.',
    process: [
      'Review the scope—repair, fixture swap, or full remodel rough-in',
      'Plan supply and drain locations for new layouts if needed',
      'Complete repairs or installation to code',
      'Pressure test and check for leaks',
      'Coordinate final connections after finishes if part of a larger project'
    ],
    priceRange: 'Individual fixture work is often $200–$600; remodel rough-in is quoted based on layout and access.',
    faqs: [
      {
        question: 'Do you work with bathroom remodelers?',
        answer: 'Yes. We commonly handle the plumbing portion of bathroom renovations and can phase work around tiling and cabinetry.'
      },
      {
        question: 'Can you move a toilet or shower location?',
        answer: 'Relocating fixtures is possible but involves drain and vent work. We assess feasibility and cost before starting.'
      },
      {
        question: 'Do you install freestanding tubs and showers?',
        answer: 'Yes. We install a wide range of tub, shower, and shower-pan systems.'
      }
    ]
  },
  {
    slug: 'kitchen-plumbing',
    title: 'Kitchen Plumbing Services',
    shortTitle: 'Kitchen Plumbing',
    description: 'Kitchen sink, dishwasher, and related plumbing installation and repair in Lakewood homes.',
    intro: 'Kitchen plumbing sees heavy daily use. We repair and replace sinks, faucets, supply lines, and dishwasher connections, and we rough in for kitchen remodels so everything lines up with cabinets and appliances.',
    process: [
      'Identify the issue or review remodel plans',
      'Shut off water and protect surrounding cabinets',
      'Complete the repair or new installation',
      'Connect dishwasher and filtration devices if present',
      'Test thoroughly and clean the work area'
    ],
    priceRange: 'Sink and faucet work commonly $200–$500; dishwasher installation or reconnection is often $150–$300.',
    faqs: [
      {
        question: 'Can you install an undermount sink?',
        answer: 'Yes, provided the countertop is suitable. We work with fabricators and homeowners on timing.'
      },
      {
        question: 'Do you hook up reverse-osmosis or other filters?',
        answer: 'We can install or reconnect many under-sink filtration systems as part of kitchen plumbing work.'
      },
      {
        question: 'Why is there water under my kitchen sink?',
        answer: 'Common causes are supply line fittings, drain traps, or the disposal connection. We locate and fix the source.'
      }
    ]
  },
  {
    slug: 'gas-line-services',
    title: 'Gas Line Services',
    shortTitle: 'Gas Line Services',
    description: 'Gas line installation, extension, and leak evaluation for appliances in Lakewood (licensed work).',
    intro: 'Safe gas piping is essential for stoves, dryers, water heaters, and fireplaces. We install and extend gas lines for new appliances and evaluate suspected leaks. If you smell gas, leave the building and contact the utility first—then call us for follow-up work once the area is safe.',
    process: [
      'Confirm appliance requirements and existing line capacity',
      'Plan the route and obtain any required permits',
      'Install or extend black iron or approved CSST piping',
      'Pressure test the new work',
      'Connect the appliance and verify operation with the customer present'
    ],
    priceRange: 'Short appliance connections often start in the $300–$600 range; longer runs and multiple appliances are quoted individually.',
    faqs: [
      {
        question: 'Do you pull permits for gas work?',
        answer: 'Yes. We follow local permitting requirements for gas piping work in the Lakewood area.'
      },
      {
        question: 'Can you convert a range or dryer to gas?',
        answer: 'When the home has adequate gas service, we can run a new line and make the connection. We evaluate capacity first.'
      },
      {
        question: 'What should I do if I smell gas?',
        answer: 'Leave the home immediately, avoid switches or flames, and call the gas utility from outside. Do not re-enter until cleared.'
      }
    ]
  },
  {
    slug: 'water-softener-installation',
    title: 'Water Softener Installation',
    shortTitle: 'Water Softener',
    description: 'Water softener and conditioning system installation for Lakewood homes dealing with hard water.',
    intro: 'Hard water leaves scale on fixtures and can shorten the life of water heaters and appliances. We install water softeners and related conditioning equipment, size them for household demand, and set them up for reliable operation.',
    process: [
      'Discuss water hardness concerns and household size',
      'Recommend system capacity and installation location',
      'Install the unit with proper bypass and drain connections',
      'Program and start up the system',
      'Explain salt refill and basic maintenance'
    ],
    priceRange: 'Installed softener systems commonly range $1,000–$2,500 depending on capacity and features.',
    faqs: [
      {
        question: 'How do I know if I need a softener?',
        answer: 'Signs include white scale on faucets, spots on dishes, dry skin, and higher soap usage. A simple hardness test helps confirm.'
      },
      {
        question: 'Where is a softener usually installed?',
        answer: 'Near the main water entry, often in a basement or utility area, with access to a drain and power.'
      },
      {
        question: 'Do you service existing softeners?',
        answer: 'We can inspect and perform basic service; for complex control boards we may refer to specialists depending on brand.'
      }
    ]
  },
  {
    slug: 'backflow-prevention',
    title: 'Backflow Prevention',
    shortTitle: 'Backflow Prevention',
    description: 'Backflow preventer installation, testing, and repair to protect Lakewood potable water supplies.',
    intro: 'Backflow prevention devices protect drinking water from contamination. We install, test, and repair assemblies required for irrigation, boilers, and certain commercial or multi-family applications, and we help property owners stay compliant with local requirements.',
    process: [
      'Determine the required type of assembly for the application',
      'Install or replace the device in an accessible location',
      'Perform required testing and document results',
      'Repair or rebuild if a test fails',
      'Provide records for the property owner or authority having jurisdiction'
    ],
    priceRange: 'Installation and testing costs vary by assembly size and type; residential irrigation devices are often in the $400–$900 installed range before testing fees.',
    faqs: [
      {
        question: 'Who needs a backflow preventer?',
        answer: 'Properties with irrigation systems, certain boilers, or other connections that could allow non-potable water to enter the supply often require one. Local rules specify when.'
      },
      {
        question: 'How often must devices be tested?',
        answer: 'Many jurisdictions require annual testing by a certified tester. We can perform tests and provide the paperwork.'
      },
      {
        question: 'What happens if a test fails?',
        answer: 'We diagnose the failed components, repair or rebuild the assembly, and retest until it passes.'
      }
    ]
  },
  {
    slug: 'hydro-jetting',
    title: 'Hydro Jetting Services',
    shortTitle: 'Hydro Jetting',
    description: 'High-pressure hydro jetting to clear stubborn grease, scale, and debris from sewer and drain lines.',
    intro: 'When cable machines are not enough, hydro jetting uses high-pressure water to scour pipe walls and clear heavy buildup. It is especially effective for restaurant grease lines, main sewers with scale, and recurring residential clogs caused by grease or roots.',
    process: [
      'Camera or assess the line to confirm hydro jetting is appropriate',
      'Protect the area and set up water supply and containment',
      'Jet the line from accessible cleanouts',
      'Re-inspect if needed to confirm cleanliness',
      'Advise on maintenance intervals for high-use systems'
    ],
    priceRange: 'Residential hydro jetting often ranges $400–$900 depending on line length and access; commercial work is quoted per job.',
    faqs: [
      {
        question: 'Is hydro jetting safe for older pipes?',
        answer: 'We evaluate pipe material and condition first. Severely deteriorated pipes may not be good candidates; we discuss risks honestly.'
      },
      {
        question: 'How is it different from snaking?',
        answer: 'A snake punches a hole through a clog. Jetting cleans the full diameter and removes more residue, which can reduce how quickly clogs return.'
      },
      {
        question: 'Do you camera the line after jetting?',
        answer: 'When helpful for verification or to identify structural issues, yes. We recommend it especially for main sewer lines.'
      }
    ]
  },
  {
    slug: 'fixture-installation',
    title: 'Plumbing Fixture Installation',
    shortTitle: 'Fixture Installation',
    description: 'Installation of sinks, faucets, toilets, showers, and related fixtures for Lakewood homes.',
    intro: 'Whether you are updating a single bathroom or finishing a remodel, proper fixture installation prevents leaks and ensures good performance. We install a wide range of residential fixtures and can work from your supplied products or help with selection.',
    process: [
      'Confirm fixture compatibility with existing rough-in',
      'Prepare the area and protect finished surfaces',
      'Set and connect each fixture to supply and drain',
      'Adjust for level, seal, and smooth operation',
      'Final leak check and customer walkthrough'
    ],
    priceRange: 'Labor for common fixtures typically ranges $150–$400 each depending on complexity; packages for multiple fixtures are available.',
    faqs: [
      {
        question: 'Can I supply my own fixtures?',
        answer: 'Yes. Many customers purchase fixtures themselves. We install them provided they are suitable for the existing plumbing.'
      },
      {
        question: 'Do you install wall-hung toilets and vanities?',
        answer: 'We install many modern configurations; wall-hung toilets require specific carriers that must be planned during rough-in.'
      },
      {
        question: 'What if the rough-in does not match the new fixture?',
        answer: 'We assess options—adapters, minor relocation, or different fixture choice—and discuss cost before proceeding.'
      }
    ]
  },
  {
    slug: 'plumbing-inspection',
    title: 'Plumbing Inspection',
    shortTitle: 'Plumbing Inspection',
    description: 'Pre-purchase and maintenance plumbing inspections for Lakewood buyers and homeowners.',
    intro: 'A focused plumbing inspection gives home buyers and owners a clear picture of system condition. We check visible supply and drain lines, water heaters, fixtures, and functional operation, and we can add camera inspection of sewer lines when requested.',
    process: [
      'Walk through the property and note visible plumbing components',
      'Operate fixtures and observe flow, drainage, and shutoffs',
      'Inspect the water heater and accessible main lines',
      'Perform optional sewer camera inspection',
      'Provide a written summary of findings and prioritized recommendations'
    ],
    priceRange: 'Standard visual inspections often range $200–$400; adding a sewer camera inspection increases the fee.',
    faqs: [
      {
        question: 'Is this the same as a home inspection?',
        answer: 'It is more focused on plumbing systems. Many clients use it to supplement a general home inspection when plumbing is a concern.'
      },
      {
        question: 'Do you inspect for insurance or municipal requirements?',
        answer: 'We can provide documentation of what we observed. Specific certification needs should be confirmed in advance.'
      },
      {
        question: 'Can you prioritize repairs by urgency?',
        answer: 'Yes. Our summary distinguishes safety issues, near-term concerns, and longer-term maintenance items.'
      }
    ]
  }
];

export const serviceAreas = [
  {
    slug: 'lakewood',
    name: 'Lakewood',
    description: 'Our home base. Full plumbing services for Lakewood, Ohio residents and businesses along Madison, Detroit, and surrounding streets.'
  },
  {
    slug: 'rocky-river',
    name: 'Rocky River',
    description: 'Reliable plumbing support for Rocky River homes, from emergency calls to water heater and drain work.'
  },
  {
    slug: 'fairview-park',
    name: 'Fairview Park',
    description: 'Serving Fairview Park with the same careful, local approach we bring to every Lakewood job.'
  },
  {
    slug: 'westlake',
    name: 'Westlake',
    description: 'Plumbing repairs, installations, and maintenance for Westlake neighborhoods and commercial spaces.'
  },
  {
    slug: 'bay-village',
    name: 'Bay Village',
    description: 'Responsive plumbing service for Bay Village residents who want a nearby, accountable team.'
  },
  {
    slug: 'cleveland',
    name: 'Cleveland (West Side)',
    description: 'Selected plumbing services for western Cleveland neighborhoods adjacent to Lakewood.'
  },
  {
    slug: 'edgewater',
    name: 'Edgewater',
    description: 'Plumbing help for the Edgewater area, including older homes with unique piping challenges.'
  },
  {
    slug: 'lakewood-park',
    name: 'Near Lakewood Park',
    description: 'Convenient service for homes and properties around Lakewood Park and the surrounding blocks.'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getAreaBySlug(slug: string) {
  return serviceAreas.find(a => a.slug === slug);
}
