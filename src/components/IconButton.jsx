export default function IconButton({
  children,
  color = "rgba(240,237,232,0.5)",
}) {
  return (
    <button
      className="icon-btn"
      style={{ color }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.1)";
        e.currentTarget.style.color = "#f0ede8";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
        e.currentTarget.style.color = color;
      }}
    >
      {children}
    </button>
  );
}