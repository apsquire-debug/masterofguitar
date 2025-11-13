'use client';

interface ChordDiagramProps {
  chordName: string;
  fingers: (number | 'x' | null)[];  // 'x' = don't play, null = open string, number = fret
  frets?: [number, number]; // [startFret, endFret]
}

export default function ChordDiagram({
  chordName,
  fingers,
  frets = [1, 4]
}: ChordDiagramProps) {
  const strings = ['E', 'A', 'D', 'G', 'B', 'e'];
  const [startFret, endFret] = frets;
  const numFrets = endFret - startFret + 1;

  return (
    <div className="inline-block bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{chordName}</h3>

      <svg width="180" height="240" viewBox="0 0 180 240" className="mx-auto">
        {/* Nut (if starting at fret 1) */}
        {startFret === 1 && (
          <rect x="30" y="30" width="120" height="4" fill="#333" />
        )}

        {/* Fret numbers on the side */}
        {startFret > 1 && (
          <text x="15" y="50" fontSize="14" fill="#666">{startFret}</text>
        )}

        {/* Strings (vertical lines) */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={`string-${i}`}
            x1={30 + i * 24}
            y1="30"
            x2={30 + i * 24}
            y2={30 + numFrets * 40}
            stroke="#333"
            strokeWidth="1.5"
          />
        ))}

        {/* Frets (horizontal lines) */}
        {Array.from({ length: numFrets + 1 }).map((_, i) => (
          <line
            key={`fret-${i}`}
            x1="30"
            y1={30 + i * 40}
            x2="150"
            y2={30 + i * 40}
            stroke="#333"
            strokeWidth="1"
          />
        ))}

        {/* Finger positions */}
        {fingers.map((finger, i) => {
          const x = 30 + i * 24;

          if (finger === 'x') {
            // Don't play this string
            return (
              <g key={`finger-${i}`}>
                <line x1={x - 6} y1="14" x2={x + 6} y2="24" stroke="#e74c3c" strokeWidth="2" />
                <line x1={x + 6} y1="14" x2={x - 6} y2="24" stroke="#e74c3c" strokeWidth="2" />
              </g>
            );
          } else if (finger === null) {
            // Open string
            return (
              <circle
                key={`finger-${i}`}
                cx={x}
                cy="19"
                r="6"
                fill="none"
                stroke="#27ae60"
                strokeWidth="2"
              />
            );
          } else {
            // Finger on fret
            const relativeFret = finger - startFret + 1;
            return (
              <circle
                key={`finger-${i}`}
                cx={x}
                cy={30 + (relativeFret * 40) - 20}
                r="8"
                fill="#3498db"
                stroke="#2980b9"
                strokeWidth="2"
              />
            );
          }
        })}

        {/* String labels at bottom */}
        {strings.map((string, i) => (
          <text
            key={`label-${i}`}
            x={30 + i * 24}
            y={30 + numFrets * 40 + 20}
            fontSize="12"
            fill="#666"
            textAnchor="middle"
          >
            {string}
          </text>
        ))}
      </svg>
    </div>
  );
}
