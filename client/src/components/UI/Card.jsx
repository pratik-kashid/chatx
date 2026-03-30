export function Card({ children, className = '' }) {
  return (
    <div
      className={[
        'rounded-3xl border border-slate-700/70 bg-slate-950/70 shadow-2xl shadow-slate-950/30 backdrop-blur-xl',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
