import { COUNTIES, VIEW_W, VIEW_H } from './_virginiaCountiesData';

const SERVICE_AREA = new Set([
  'Cumberland',
  'Powhatan',
  'Goochland',
  'Chesterfield',
  'Fluvanna',
  'Louisa',
  'Albemarle',
  'Greene',
  'Buckingham',
  'Amelia',
  'Prince Edward',
  'Charlottesville',
]);
const HQ = 'Cumberland';

const HQ_PIN = { x: 512.9, y: 259.5 };

const DEFAULT_FILL = 'var(--color-neutral-border, #E5E2DC)';
const SERVICE_FILL = '#B8924A';
const HQ_FILL = '#0F2A47';
const STROKE = '#FFFFFF';

export default function VirginiaMap() {
  const base = COUNTIES.filter((c) => !SERVICE_AREA.has(c.name));
  const service = COUNTIES.filter(
    (c) => SERVICE_AREA.has(c.name) && c.name !== HQ
  );
  const hq = COUNTIES.find((c) => c.name === HQ);

  return (
    <div
      role="img"
      aria-label="Map of Virginia showing MH Septic's service area across 12 counties in Central Virginia"
      className="relative w-full max-w-[500px]"
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        aria-hidden="true"
      >
        <title>MH Septic Service Area — Central Virginia</title>
        <desc>
          Map of Virginia showing MH Septic&apos;s service area across 12
          counties in Central Virginia, with Cumberland County highlighted as
          the headquarters.
        </desc>

        <g
          fill={DEFAULT_FILL}
          stroke={STROKE}
          strokeWidth="1"
          strokeLinejoin="round"
        >
          {base.map((c) => (
            <path key={c.name + c.id} d={c.d}>
              <title>{c.name}</title>
            </path>
          ))}
        </g>

        <g
          fill={SERVICE_FILL}
          fillOpacity="0.85"
          stroke={STROKE}
          strokeWidth="1"
          strokeLinejoin="round"
          className="[&>path]:transition-[fill-opacity] [&>path]:duration-200 [&>path:hover]:[fill-opacity:1]"
        >
          {service.map((c) => (
            <path key={c.name + c.id} d={c.d}>
              <title>{c.name} County</title>
            </path>
          ))}
        </g>

        {hq && (
          <path
            d={hq.d}
            fill={HQ_FILL}
            stroke={STROKE}
            strokeWidth="1"
            strokeLinejoin="round"
          >
            <title>Cumberland County (HQ)</title>
          </path>
        )}

        <circle
          cx={HQ_PIN.x}
          cy={HQ_PIN.y}
          r="14"
          fill={SERVICE_FILL}
          fillOpacity="0.25"
        />
        <circle
          cx={HQ_PIN.x}
          cy={HQ_PIN.y}
          r="5"
          fill={SERVICE_FILL}
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />

        <g
          fontFamily="Manrope, Inter, sans-serif"
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
        >
          <text
            x={HQ_PIN.x}
            y={HQ_PIN.y + 36}
            fill="#0F2A47"
            stroke="#FFFFFF"
            strokeWidth="3"
            paintOrder="stroke"
          >
            Cumberland County · HQ
          </text>
        </g>
      </svg>

      <p className="mt-3 text-center text-xs text-neutral-muted">
        Cumberland County, VA · ~1.5 hr service radius
      </p>
    </div>
  );
}
