import { ImageResponse } from 'next/og';

// Configurazione immagine
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Generazione Icona (HardHat Arancione)
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F97316', // Colore Orange-500 del tuo brand
        }}
      >
        {/* Codice SVG dell'icona HardHat */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
          <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
          <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
          <path d="M14 6h0a6 6 0 0 1 6 6v3" />
        </svg>
      </div>
    ),
    { ...size }
  );
}