import React, { useState, useEffect, useMemo } from 'react';
import * as d3Geo from 'd3-geo';
import * as topojson from 'topojson-client';

// Path to world topojson file in public directory
const geoUrl = '/world-110m.json';

// Regions served: Africa, Europe, Asia -> Theme Orange (#FD761A)
// Unserved: North America, South America, Australia/Oceania, Greenland, Antarctica -> Dark Charcoal (#2B2B2B)
const SERVED_COUNTRY_NAMES = new Set([
  // Africa
  'Tanzania', 'W. Sahara', 'Dem. Rep. Congo', 'Somalia', 'Kenya', 'Sudan', 'Chad', 'S. Sudan',
  'South Africa', 'Lesotho', 'Zimbabwe', 'Botswana', 'Namibia', 'Senegal', 'Mali', 'Mauritania',
  'Benin', 'Niger', 'Nigeria', 'Cameroon', 'Togo', 'Ghana', "Côte d'Ivoire", 'Guinea',
  'Guinea-Bissau', 'Liberia', 'Sierra Leone', 'Burkina Faso', 'Central African Rep.', 'Congo',
  'Gabon', 'Eq. Guinea', 'Zambia', 'Malawi', 'Mozambique', 'eSwatini', 'Angola', 'Burundi',
  'Madagascar', 'Gambia', 'Tunisia', 'Algeria', 'Morocco', 'Egypt', 'Libya', 'Ethiopia',
  'Djibouti', 'Somaliland', 'Uganda', 'Rwanda', 'Eritrea',
  // Europe
  'Norway', 'France', 'Sweden', 'Belarus', 'Ukraine', 'Poland', 'Austria', 'Hungary',
  'Moldova', 'Romania', 'Lithuania', 'Latvia', 'Estonia', 'Germany', 'Bulgaria', 'Greece',
  'Turkey', 'Albania', 'Croatia', 'Switzerland', 'Luxembourg', 'Belgium', 'Netherlands',
  'Portugal', 'Spain', 'Ireland', 'Italy', 'Denmark', 'United Kingdom', 'Iceland',
  'Azerbaijan', 'Georgia', 'Slovenia', 'Finland', 'Slovakia', 'Czechia', 'Cyprus',
  'N. Cyprus', 'Bosnia and Herz.', 'Macedonia', 'Serbia', 'Montenegro', 'Kosovo', 'Armenia',
  // Asia
  'Kazakhstan', 'Uzbekistan', 'Indonesia', 'Timor-Leste', 'Israel', 'Lebanon', 'Palestine',
  'Jordan', 'United Arab Emirates', 'Qatar', 'Kuwait', 'Iraq', 'Oman', 'Cambodia',
  'Thailand', 'Laos', 'Myanmar', 'Vietnam', 'North Korea', 'South Korea', 'Mongolia',
  'India', 'Bangladesh', 'Bhutan', 'Nepal', 'Pakistan', 'Afghanistan', 'Tajikistan',
  'Kyrgyzstan', 'Turkmenistan', 'Iran', 'Syria', 'Sri Lanka', 'China', 'Taiwan',
  'Philippines', 'Malaysia', 'Brunei', 'Japan', 'Yemen', 'Saudi Arabia', 'Russia'
]);

// India Coordinates: ~lat 20.5937, lng 78.9629 -> [lng, lat]
const INDIA_COORDINATES = [78.9629, 20.5937];

export default function LocationsWeServe({ className = "" }) {
  const [geographies, setGeographies] = useState([]);

  useEffect(() => {
    fetch(geoUrl)
      .then((res) => res.json())
      .then((worldData) => {
        if (worldData && worldData.objects && worldData.objects.countries) {
          const featureCollection = topojson.feature(worldData, worldData.objects.countries);
          setGeographies(featureCollection.features || []);
        }
      })
      .catch((err) => console.error('Failed to load world map data', err));
  }, []);

  const { pathGenerator, indiaPos } = useMemo(() => {
    // 800x440 coordinate space for crisp SVG rendering
    const projection = d3Geo
      .geoEqualEarth()
      .scale(175)
      .center([20, 12])
      .translate([400, 220]);

    const pathGen = d3Geo.geoPath().projection(projection);
    const projectedIndia = projection(INDIA_COORDINATES) || [549, 170];

    return { pathGenerator: pathGen, indiaPos: projectedIndia };
  }, []);

  return (
    <div className={`w-full min-h-[480px] md:min-h-[500px] bg-white rounded-2xl p-6 md:p-8 border border-[#EAEAEA] text-left relative flex flex-col justify-between ${className}`}>
      
      {/* Top Heading */}
      <div className="mb-5">
        <h2 className="text-2xl md:text-[32px] font-bold text-primary leading-tight tracking-tight font-headline-lg whitespace-nowrap">
          Location We Serve
        </h2>
      </div>

      {/* Inner Map Box with light background and nested rounded corners */}
      <div className="relative w-full flex-1 min-h-[360px] sm:min-h-[400px] md:min-h-[420px] bg-[#F7F8FA] flex items-center justify-center rounded-xl overflow-hidden">
        <svg
          viewBox="0 0 800 440"
          className="w-full h-full object-contain"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Countries layer */}
          <g>
            {geographies.map((feature, idx) => {
              const countryName = feature.properties?.name;
              const isServed = SERVED_COUNTRY_NAMES.has(countryName);
              const fillColor = isServed ? '#FD761A' : '#2B2B2B';
              const d = pathGenerator(feature);

              if (!d) return null;

              return (
                <path
                  key={feature.id || idx}
                  d={d}
                  fill={fillColor}
                  stroke="#E5E5E5"
                  strokeWidth={0.75}
                  className="transition-colors duration-200"
                />
              );
            })}
          </g>

          {/* Static Green Pointer Marker on India */}
          {indiaPos && (
            <g transform={`translate(${indiaPos[0]}, ${indiaPos[1]})`} className="pointer-events-none">
              {/* Outer static soft green halo */}
              <circle r={10} fill="#10B981" opacity={0.25} />

              {/* Main solid green dot with white outline */}
              <circle r={5.5} fill="#10B981" stroke="#FFFFFF" strokeWidth={1.5} />

              {/* Center white dot */}
              <circle r={2} fill="#FFFFFF" />
            </g>
          )}
        </svg>
      </div>

    </div>
  );
}
