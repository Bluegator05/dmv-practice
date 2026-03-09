export interface Sign {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const encodeSVG = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export const signs: Sign[] = [
  {
    id: 's1',
    name: 'Stop Sign',
    description: 'Come to a complete stop, yield to pedestrians and other vehicles.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#CC0000" stroke="#FFFFFF" stroke-width="2"/>
        <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="none" stroke="#FFFFFF" stroke-width="2" transform="scale(0.92) translate(4.5, 4.5)"/>
      </svg>
    `)
  },
  {
    id: 's2',
    name: 'Yield Sign',
    description: 'Slow down and be ready to stop to let any vehicle, bicyclist, or pedestrian pass before you proceed.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,95 5,15 95,15" fill="#FFFFFF" stroke="#CC0000" stroke-width="12" stroke-linejoin="round"/>
        <polygon points="50,85 15,25 85,25" fill="#FFFFFF"/>
      </svg>
    `)
  },
  {
    id: 's3',
    name: 'Do Not Enter',
    description: 'You are entering a street or ramp in the wrong direction.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect x="5" y="5" width="90" height="90" fill="#FFFFFF" rx="5"/>
        <circle cx="50" cy="50" r="40" fill="#CC0000"/>
        <rect x="20" y="42" width="60" height="16" fill="#FFFFFF"/>
      </svg>
    `)
  },
  {
    id: 's4',
    name: 'Railroad Crossing',
    description: 'Advance warning of a railroad crossing. Look, listen, and slow down.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="#FFCC00" stroke="#000000" stroke-width="3"/>
        <circle cx="50" cy="50" r="41" fill="none" stroke="#000000" stroke-width="1.5"/>
        <line x1="20" y1="20" x2="80" y2="80" stroke="#000000" stroke-width="10"/>
        <line x1="20" y1="80" x2="80" y2="20" stroke="#000000" stroke-width="10"/>
      </svg>
    `)
  },
  {
    id: 's5',
    name: 'School Zone',
    description: 'You are near a school. Watch for children at all times.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g transform="translate(258 2) scale(1)">
          <path fill="#cdff00" d="m-252.7434 43.143479 38.52125-38.52c1.12375-1.26625 2.79-2.03875 4.5-2.03875 1.71125 0 3.3975.74875 4.52375 2.03875l38.51625 38.52c1.2425 1.12375 1.96875 2.765 1.96875 4.4525v38.98875c0 3.30375-2.695 5.99875-5.99875 5.99875h-78.00125c-3.30375 0-6-2.695-6-5.99875v-38.98875c0-1.6875.72875-3.32875 1.97-4.4525"/>
          <path fill-rule="evenodd" d="m-213.09465 5.7008544.19875-.2125c.49125-.48375 1.03625-.83 1.68-1.075.1125-.04.22375-.075.3375-.10875.74875-.1975 1.45625-.20625 2.21-.0325l.23.06375c.77375.2425 1.4275.6375 1.98625 1.2275l38.6875 38.7025.20125.1925c.46875.485.80125 1.0225 1.03375 1.655.1275.375.20625.74125.24375 1.135.0075.12.01125.2375.0125.35875l-.005 39.205c-.0175.2275-.045.4425-.085.66375-.05.2175-.10875.42-.17875.63-.13625.345-.29.645-.49.955-.12625.1775-.255.34125-.39625.505-.25375.26625-.50875.48625-.8075.69875-.18375.11875-.365.22125-.5575.3225-.34125.15375-.6625.2625-1.02625.34625-.22375.04125-.4375.06875-.665.085l-78.2075.005c-.2375-.005-.46-.01875-.695-.05125-.22-.03875-.4275-.085-.64125-.14625-.35125-.12-.65875-.25875-.98-.445-.1825-.11625-.3525-.23875-.52375-.3725-.2775-.24-.51-.48375-.73625-.7725-.12625-.1775-.23875-.35375-.3475-.54125-.17-.3325-.29375-.645-.39625-1.00375-.05-.22-.0875-.43-.11625-.65125l-.02375-.47375.00125-39.085.0125-.2325c.07375-.795.325-1.5025.765-2.1675.1775-.25625.37-.485.5925-.70375l38.68625-38.67625z"/>
          <path fill="#cdff00" fill-rule="evenodd" d="m-211.35965 7.3597294.17-.1825c.3475-.34375.7825-.56125 1.2675-.62125.63-.06125 1.27125.17625 1.7075.635l38.78375 38.8025.16375.15375c.39125.405.5875.91375.595 1.475l-.00375 39.0675-.02125.205c-.0925.5175-.32875.91875-.725 1.2625-.24375.1925-.485.3175-.785.4025-.19.045-.36.05875-.555.06375l-78.0575-.0025-.20375-.02125c-.5175-.09375-.9175-.3275-1.2625-.7225-.1925-.2475-.31625-.48625-.4025-.78625-.04375-.19125-.06-.36125-.065-.5575l.00125-38.98875c.0225-.545.24125-1.04875.63-1.4325l38.7625-38.7525z"/>
          <path fill-rule="evenodd" d="M-200.0883975 29.584754c-.375.29875-.77625.5675-1.21875.75-.45.1825-.92.29125-1.40625.3125-.34625.015-.69.0038-1.03125-.0625l-.15625 1-2.34375 2.15625-2.90625 9.8125-4.25 1.75-2.40625-5.3125-3.6875-2.09375c-.29625.16875-.5775.3425-.90625.4375-.30625.0875-.61625.15375-.9375.15625-.4675.0075-.92375-.03125-1.375-.15625h-.09375l-2.59375 2.75-2.5625 8.21875-4.90625 4.65625 1.40625 1.34375 5.8125-3.84375.75-3.0625.9375 2.84375-3.75 11.5625 1.3125.40625-3.90625 14.75 2.09375.75 5.5625-14.75 2.25.15625 6.15625 14.3125 2.1875-.65625-4.4375-13.90625c.4475-.0975.89375-.215 1.34375-.3125.3925-.09.77375-.22 1.15625-.34375l-2.25-6.90625 5.59375-1.34375-1.15625-5.65625h-1.34375l.90625-1.40625-.15625-.34375 4.8125-1.3125 1.25-2.1875 1.84375 7.6875-3.59375 11.3125-1 17.21875 3.9375.34375 1.40625-14.3125 2.40625-5.34375 1.84375 7.34375 6.8125 12.71875 3.59375-1.75-6.40625-13.21875.65625-11.40625 6.8125-2-1.8125-6.65625-1.75.25.5625-3.59375-5.5625-10.5625-3-1.34375-.5-1.15625zm3.09375 10.0625 3 4.59375-.75 2.8125-1 .25-1.25-7.65625zm-19.5625 6.65625.75 1.59375-.6875 2-.90625.15625.84375-3.75zM-199.2509 25.588479c-.04 1.5425-.6775 2.83875-1.96375 3.72625-1.4925 1.03-3.48875.99625-4.98-.0225-1.2175-.83-1.96625-2.22875-1.9625-3.70375 0-1.7925 1.09625-3.425 2.73875-4.13 1.38125-.58875 2.96875-.4425 4.2125.405 1.21125.8275 1.99 2.25 1.955 3.725"/>
          <path fill-rule="evenodd" d="M-217.4834 33.662229c-.05 1.735-1.04875 3.22625-2.655 3.91375-1.875.8-4.04.0775-5.15125-1.6125-1.085-1.64875-.8325-3.92625.55375-5.31625 1.3875-1.39375 3.66875-1.625 5.31625-.55 1.15125.75625 1.97875 2.165 1.93625 3.565"/>
        </g>
      </svg>
    `)
  },
  {
    id: 's6',
    name: 'No Right Turn',
    description: 'Right turns are prohibited. Do not turn right.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect x="5" y="5" width="90" height="90" fill="#FFFFFF" stroke="#000000" stroke-width="3" rx="5"/>
        <path d="M35,65 L35,45 Q35,35 45,35 L55,35 L55,25 L75,45 L55,65 L55,55 L45,55 Q40,55 40,65 Z" fill="#000000"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#CC0000" stroke-width="8"/>
        <line x1="25" y1="25" x2="75" y2="75" stroke="#CC0000" stroke-width="8"/>
      </svg>
    `)
  },
  {
    id: 's7',
    name: 'No U-Turn',
    description: 'U-turns are prohibited.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect x="5" y="5" width="90" height="90" fill="#FFFFFF" stroke="#000000" stroke-width="3" rx="5"/>
        <path d="M40,70 L40,45 Q40,30 50,30 Q60,30 60,45 L60,70 L50,70 L50,45 Q50,40 50,40 Q50,45 50,45 Z" fill="none" stroke="#000000" stroke-width="8" />
        <path d="M40,70 L40,45 Q40,25 50,25 Q60,25 60,45 L60,70" fill="none" stroke="#000000" stroke-width="8"/>
        <polygon points="30,60 50,60 40,80" fill="#000000"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#CC0000" stroke-width="8"/>
        <line x1="25" y1="25" x2="75" y2="75" stroke="#CC0000" stroke-width="8"/>
      </svg>
    `)
  },
  {
    id: 's8',
    name: 'Slippery When Wet',
    description: 'In wet weather, drive slowly. Do not speed up or brake quickly. Make turns at a very slow speed.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <rect x="40" y="35" width="20" height="20" rx="3" fill="#000000"/>
        <path d="M35,55 L65,55 L68,65 L32,65 Z" fill="#000000"/>
        <rect x="34" y="65" width="6" height="5" fill="#000000"/>
        <rect x="60" y="65" width="6" height="5" fill="#000000"/>
        <path d="M38,70 Q25,80 35,90" fill="none" stroke="#000000" stroke-width="3"/>
        <path d="M62,70 Q75,80 65,90" fill="none" stroke="#000000" stroke-width="3"/>
      </svg>
    `)
  },
  {
    id: 's9',
    name: 'Merge Ahead',
    description: 'Traffic from another road will be entering the road. Be prepared for vehicles to move into your lane.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <path d="M45,80 L45,35 L40,35 L50,20 L60,35 L55,35 L55,60 Q65,45 75,45 L75,55 Q60,55 55,70 L55,80 Z" fill="#000000"/>
      </svg>
    `)
  },
  {
    id: 's10',
    name: 'Divided Highway Begins',
    description: 'The highway ahead is divided by a median or physical barrier. Keep to the right.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <!-- Authentic Divided Highway Begins Silhouette from MUTCD W6-1 -->
        <g transform="translate(6, 6) scale(0.34)">
            <path d="M187.153 108.13v17.37c0 8.509-1.975 16.902-5.567 24.61-1.192 2.568-2.572 5.066-4.17 7.408-2.942 4.332-6.166 8.502-8.357 13.286-2.205 4.815-3.464 10.064-3.464 15.37v13.388h-21.548v-13.388c0-5.838.843-11.68 2.477-17.29 1.474-5.076 3.58-10.071 6.579-14.446 1.482-2.166 3.19-4.173 4.844-6.194 1.474-1.796 2.871-3.613 3.884-5.712 2.607-5.359 3.513-11.331 3.556-17.247l.116-17.156-12.506 4.106c-.399.166-.748.28-1.182.31-1.559.124-3.115-.659-3.961-1.978-.727-1.14-.882-2.614-.463-3.888.226-.663.586-1.009.97-1.563l27.803-40.103 28.236 40.21c.717 1.008 1.13 1.361 1.186 2.557.08 1.7-.477 3.118-1.93 4.092-.924.621-2.018.787-3.1.621-.311-.046-.491-.159-.788-.258l-12.615-4.106zM111.719 168.927l12.615-4.079c.554-.197.836-.331 1.407-.331 1.606 0 2.84.522 3.775 1.87.836 1.188.974 2.78.441 4.127-.226.59-.522.843-.875 1.337l-28.352 40.206-27.711-40.104c-.272-.388-.89-1.14-1.07-1.718a4.456 4.456 0 0 1-.228-1.308c-.011-1.81 1.167-3.33 2.765-4.05.688-.318 1.37-.424 2.1-.286.338.06.67.081.966.257l12.608 4.079-.095-17.138c-.021-4.015-.47-8.03-1.594-11.885-.875-3.03-2.135-6.03-4.057-8.552-1.7-2.244-3.55-4.381-5.278-6.607a39.363 39.363 0 0 1-3.838-6.05c-4.389-8.52-6.594-18.144-6.594-27.704V77.525H90.27v13.466c0 7.401 2.42 14.767 6.54 20.888 1.612 2.392 3.299 4.734 4.918 7.122a55.639 55.639 0 0 1 4.526 8.061c3.556 7.726 5.465 16.122 5.465 24.624v17.24zM147.984 49.222c-.099 4.117-.2 8.24-.476 12.354a143.834 143.834 0 0 1-4.114 25.9c-1.763 6.884-3.584 13.865-6.607 20.328a14.397 14.397 0 0 1-1.04 1.83c-1.648 2.424-3.867 3.934-6.746 4.538-2.811.582-5.768-.187-8.096-1.838-1.64-1.161-2.812-2.9-3.57-4.742-2.378-5.76-4.135-11.768-5.648-17.8-2.357-9.335-4.226-18.79-4.95-28.396-.303-4.053-.391-8.117-.494-12.174h41.741z" fill="#000000" fill-rule="evenodd"/>
        </g>
      </svg>
    `)
  },
  {
    id: 's11',
    name: 'Divided Highway Ends',
    description: 'The divided highway ends 350 to 500 feet ahead. Keep to the right.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <!-- Authentic Divided Highway Ends Silhouette from MUTCD W6-2 (Rotated W6-1) -->
        <g transform="translate(50, 50) rotate(180) translate(-50, -50)">
            <g transform="translate(6, 6) scale(0.34)">
                <path d="M187.153 108.13v17.37c0 8.509-1.975 16.902-5.567 24.61-1.192 2.568-2.572 5.066-4.17 7.408-2.942 4.332-6.166 8.502-8.357 13.286-2.205 4.815-3.464 10.064-3.464 15.37v13.388h-21.548v-13.388c0-5.838.843-11.68 2.477-17.29 1.474-5.076 3.58-10.071 6.579-14.446 1.482-2.166 3.19-4.173 4.844-6.194 1.474-1.796 2.871-3.613 3.884-5.712 2.607-5.359 3.513-11.331 3.556-17.247l.116-17.156-12.506 4.106c-.399.166-.748.28-1.182.31-1.559.124-3.115-.659-3.961-1.978-.727-1.14-.882-2.614-.463-3.888.226-.663.586-1.009.97-1.563l27.803-40.103 28.236 40.21c.717 1.008 1.13 1.361 1.186 2.557.08 1.7-.477 3.118-1.93 4.092-.924.621-2.018.787-3.1.621-.311-.046-.491-.159-.788-.258l-12.615-4.106zM111.719 168.927l12.615-4.079c.554-.197.836-.331 1.407-.331 1.606 0 2.84.522 3.775 1.87.836 1.188.974 2.78.441 4.127-.226.59-.522.843-.875 1.337l-28.352 40.206-27.711-40.104c-.272-.388-.89-1.14-1.07-1.718a4.456 4.456 0 0 1-.228-1.308c-.011-1.81 1.167-3.33 2.765-4.05.688-.318 1.37-.424 2.1-.286.338.06.67.081.966.257l12.608 4.079-.095-17.138c-.021-4.015-.47-8.03-1.594-11.885-.875-3.03-2.135-6.03-4.057-8.552-1.7-2.244-3.55-4.381-5.278-6.607a39.363 39.363 0 0 1-3.838-6.05c-4.389-8.52-6.594-18.144-6.594-27.704V77.525H90.27v13.466c0 7.401 2.42 14.767 6.54 20.888 1.612 2.392 3.299 4.734 4.918 7.122a55.639 55.639 0 0 1 4.526 8.061c3.556 7.726 5.465 16.122 5.465 24.624v17.24zM147.984 49.222c-.099 4.117-.2 8.24-.476 12.354a143.834 143.834 0 0 1-4.114 25.9c-1.763 6.884-3.584 13.865-6.607 20.328a14.397 14.397 0 0 1-1.04 1.83c-1.648 2.424-3.867 3.934-6.746 4.538-2.811.582-5.768-.187-8.096-1.838-1.64-1.161-2.812-2.9-3.57-4.742-2.378-5.76-4.135-11.768-5.648-17.8-2.357-9.335-4.226-18.79-4.95-28.396-.303-4.053-.391-8.117-.494-12.174h41.741z" fill="#000000" fill-rule="evenodd"/>
            </g>
        </g>
      </svg>
    `)
  },
  {
    id: 's12',
    name: 'Two Way Traffic',
    description: 'Keep to the right. You are leaving a one-way road and entering a two-way road.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <!-- Down Arrow (Left) -->
        <path d="M30,20 L30,60 L20,60 L35,80 L50,60 L40,60 L40,20 Z" fill="#000000" transform="translate(0, 5) scale(0.85)"/>
        <!-- Up Arrow (Right) -->
        <path d="M70,80 L70,40 L80,40 L65,20 L50,40 L60,40 L60,80 Z" fill="#000000" transform="translate(15, -5) scale(0.85)"/>
      </svg>
    `)
  },
  {
    id: 's13',
    name: 'Right Curve',
    description: 'The road will curve to the right.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <path d="M45,80 L45,55 Q45,35 65,35 L65,25 L85,40 L65,55 L65,45 Q55,45 55,55 L55,80 Z" fill="#000000"/>
      </svg>
    `)
  },
  {
    id: 's14',
    name: 'Right Turn Ahead',
    description: 'The road makes a sharp turn to the right.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <path d="M45,80 L45,50 L65,50 L65,40 L85,55 L65,70 L65,60 L55,60 L55,80 Z" fill="#000000"/>
      </svg>
    `)
  },
  {
    id: 's15',
    name: 'Winding Road',
    description: 'The road winds with a series of turns or curves.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <path d="M40,80 Q35,70 45,60 Q55,50 45,40 Q40,35 48,25 L38,25 L50,15 L62,25 L52,25 Q45,35 55,40 Q65,50 55,60 Q45,70 50,80 Z" fill="#000000"/>
      </svg>
    `)
  },
  {
    id: 's16',
    name: 'Crossroad',
    description: 'A four-way intersection is ahead. Be ready to yield the right-of-way.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <rect x="44" y="20" width="12" height="60" fill="#000000"/>
        <rect x="20" y="44" width="60" height="12" fill="#000000"/>
      </svg>
    `)
  },
  {
    id: 's17',
    name: 'Side Road',
    description: 'A road joins from the right. Be alert for vehicles entering the roadway.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <rect x="44" y="20" width="12" height="60" fill="#000000"/>
        <rect x="56" y="44" width="24" height="12" fill="#000000"/>
      </svg>
    `)
  },
  {
    id: 's18',
    name: 'T Intersection',
    description: 'The roadway ends ahead. You must signal before turning right or left.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <rect x="44" y="32" width="12" height="48" fill="#000000"/>
        <rect x="20" y="20" width="60" height="12" fill="#000000"/>
      </svg>
    `)
  },
  {
    id: 's19',
    name: 'Y Intersection',
    description: 'You must bear either right or left ahead.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <rect x="44" y="50" width="12" height="30" fill="#000000"/>
        <polygon points="44,50 56,50 35,20 25,25" fill="#000000"/>
        <polygon points="56,50 44,50 65,20 75,25" fill="#000000"/>
      </svg>
    `)
  },
  {
    id: 's20',
    name: 'Traffic Signal Ahead',
    description: 'There is a traffic light ahead on the road you are on. Be ready to stop.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <rect x="35" y="20" width="30" height="60" fill="#000000" rx="5"/>
        <circle cx="50" cy="32" r="8" fill="#CC0000"/>
        <circle cx="50" cy="50" r="8" fill="#FFCC00"/>
        <circle cx="50" cy="68" r="8" fill="#00CC00"/>
      </svg>
    `)
  },
  {
    id: 's21',
    name: 'Lane Ends',
    description: 'The right lane ends soon. Drivers in the right lane must merge left.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <rect x="35" y="20" width="5" height="60" fill="#000000"/>
        <path d="M55,80 L55,50 L45,30 L45,20 L50,20 L50,30 L60,50 L60,80 Z" fill="#000000"/>
      </svg>
    `)
  },
  {
    id: 's22',
    name: 'Pedestrian Crossing',
    description: 'Watch for people crossing the street. Slow down or stop if necessary.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <!-- Accurate Pedestrian Silhouette from MUTCD W11-2 -->
        <path d="M114.926 43.134c6.534 0 11.86 5.327 11.86 11.857 0 6.533-5.326 11.867-11.86 11.867-6.533 0-11.856-5.334-11.856-11.867 0-6.53 5.323-11.857 11.856-11.857M79.018 117.927l24.878-16.584c1.15-4.858 5.92-26.437 15.49-31.433 9.476-6.279 44.426 19.477 44.627 19.686v37.556l-7.581-1.316-2.96-29.979c-2.858-.578-5.715-1.15-8.566-1.721 6.238 16.129 8.53 31.672 4.94 41.913L165 197.983l-10.213 7.243-22.07-57.32-10.213 10.873-14.164 43.155-13.511-4.942 12.192-45.463 14.164-25.361-5.43-18.729-5.771 7.525-27.012 8.897-3.955-5.934z" fill="#000000" fill-rule="evenodd" transform="scale(0.3937) translate(-10, -5)"/>
        <!-- Optional Crosswalk lines - Standard W11-2 advance warning lacks these, but W11-2a adds them. We'll add clean lines. -->
        <line x1="25" y1="80" x2="75" y2="80" stroke="#000000" stroke-width="3"/>
        <line x1="30" y1="72" x2="70" y2="72" stroke="#000000" stroke-width="3"/>
      </svg>
    `)
  },
  {
    id: 's23',
    name: 'Deer Crossing',
    description: 'Deer often cross the roadway in this area. Be alert, slow down if you see a deer.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <!-- Accurate Leaping Deer Silhouette from MUTCD W11-3 -->
        <path d="M86.582 140.6c-.558.13-2.953-4.192-5.93-6.697-1.348-1.14-1.119-1.16-1.193-3.453-.17-5.3.896-5.221-2.35-10.94-.3-.53-1.527-2.55-.888-3.68.402-.72.818-1.22 1.118-1.71 1.185-1.951 2.618-.918 4.66-.413 3.19.783 7.694 2.124 10.675 3.207.868-4.177 1.711-7.885 3.75-11.014 3.588-5.503 2.738-3.99 2.378-10.665-.148-2.758.003-5.369.437-8.103-.723-1.77-3.02-2.31-4.74-2.353-.583-.018-1.99-1.016-2.474-1.5-.497-.504-1.947-.225-2.328-1.033-.522-1.097-.42-1.901.14-2.55.297-.343.71-.653 1.204-.928.49-.283 1.065-.537 1.668-.762 2.029-.762 4.477-1.267 5.867-1.715 3.817-1.044 4.717-.956 8.827-1.273 2.067-.16 2.695-.716 3.707-1.503.787-.61 1.662-1.563 1.46-2.692-.197-1.132-1.647-1.524-3.474-1.291-3.016.395-6.784 1.069-9.042-1.686-1.383-1.69-1.178-2.71-1.764-4.06.579 1.022 1.983 2.924 3.627 3.904 1.411.844 2.942 1.186 4.089.494 1.414-.857-1.76-2.776-.07-6.092-.498 4.48 4.113 6.029 6.063 5.112 2.526-1.182 1.03-9.434-2.61-11.201 4.046.007 4.36 4.36 5.419 7.218.589 1.587 2.148 1.14 3.002-.025 1.626-2.212 3.496-7.221-1.584-11.052 4.053 1.57 5.669 4.476 4.536 8.865-1.848 4.554-6.258 8.544-6.836 13.67 1.57-1.129 3.143-1.471 5.143-.811-1.704 2.72-1.83 4.244-4.939 5.147.237 3.037.678 6.16.014 9.15-.395 1.758-.568 2.587-.367 4.167 1.083 8.558-.402 9.945 7.73 19.371 3.26 3.782 8.466 5.352 12.636 8.227 2.918 2.01 3.542 2.23 7.052 2.77 5.867.902 8.425 1.156 13.399 6.123 3.683-.324 4.575-1.936 5.76-2.907 1.458-2.046 2.202-4.162 2.234-7.852 1.746 1.767 3.012 4.06 3.316 6.156.29 2.014-.967 3.351-2.844 4.811-2.067 1.352-3.778 2.706-6.632 2.77.939 2.734 1.31 5.327.674 7.99-.399 6.266-4.071 11.374 1.083 17.05 2.19 2.78 6.043 6.163 6.565 8.333.526 2.17-.74 4.808.07 13.331.904 2.067.019 2.854 3.994 5.14.088 1.944.18 3.88.272 5.824-3.383-1.358-4.04-3.143-5.55-4.265-3.728-2.773-3.756-6.699-4.099-15.021-.254-6.325-17.504-15.815-19.932-18.62-2.705-3.136-3.383-6.953-5.912-8.925-9.042-7.034-23.619-4.36-35.574-12.118-1.51-.614-3.299-.945-4.812-1.552-3.517-2.35-5.93-5.8-10.28-7.317.892 3.592.674 6.636 1.016 9.949.423 2.159 2.801 2.459 3.316 4.127-.138.815-.272 1.627-.41 2.441-.087.812.371 2.286-.267 2.431" fill="#000000" fill-rule="evenodd" transform="scale(0.3937)"/>
      </svg>
    `)
  },
  {
    id: 's24',
    name: 'Low Clearance',
    description: 'Do not enter if your vehicle is taller than the height listed on the sign.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="#FFCC00" stroke="#000000" stroke-width="3" stroke-linejoin="round"/>
        <polygon points="50,25 40,35 60,35" fill="#000000"/>
        <polygon points="50,75 40,65 60,65" fill="#000000"/>
      </svg>
    `)
  },
  {
    id: 's25',
    name: 'Keep Right',
    description: 'Drive to the right of the median or island.',
    imageUrl: encodeSVG(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect x="15" y="15" width="70" height="70" fill="#FFFFFF" stroke="#000000" stroke-width="3" rx="5"/>
        <path d="M40,20 Q50,20 50,30 L50,50 L40,50 Z" fill="#000000"/>
        <path d="M45,80 L45,50 C45,40 55,40 60,40 L60,30 L80,45 L60,60 L60,50 C55,50 55,55 55,60 L55,80 Z" fill="#000000"/>
      </svg>
    `)
  }
];
