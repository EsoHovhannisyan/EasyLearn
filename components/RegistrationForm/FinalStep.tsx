
'use client';

export default function FinalStep({ onStartAction }: { onStartAction: () => void }) {
  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h1>EasyLearn</h1>
      <div style={{ fontSize: 80, margin: '20px 0' }}>iconca</div>
      <p style={{ fontSize: 18, marginBottom: 30 }}>
        Start your success journey with EasyLearn
      </p>
      <button
        style={{
          padding: '12px 30px',
          fontSize: 16,
          cursor: 'pointer',
          borderRadius: 5,
          border: 'none',
          backgroundColor: '#0070f3',
          color: 'white',
        }}
        onClick={onStartAction}
      >
        Let’s start
      </button>
    </div>
  );
}

