import { useState } from "react";

// position: "top" | "bottom" | "left" | "right"
// variant:  "dark" | "light" | "accent" | "outline" | "rich"
export default function Tooltip({
  text,
  children,
  position = "top",
  variant = "dark",
  description,
}) {
  const [visible, setVisible] = useState(false);

  // tooltip position based on prop
  const positions = {
    top:    { bottom: "calc(100% + 10px)", left: "50%", transform: visible ? "translateX(-50%) translateY(0)"  : "translateX(-50%) translateY(6px)"  },
    bottom: { top:    "calc(100% + 10px)", left: "50%", transform: visible ? "translateX(-50%) translateY(0)"  : "translateX(-50%) translateY(-6px)" },
    left:   { right:  "calc(100% + 10px)", top:  "50%", transform: visible ? "translateY(-50%) translateX(0)"  : "translateY(-50%) translateX(6px)"  },
    right:  { left:   "calc(100% + 10px)", top:  "50%", transform: visible ? "translateY(-50%) translateX(0)"  : "translateY(-50%) translateX(-6px)" },
  };

  // arrow position based on prop
  const arrows = {
    top:    { bottom: "-4px", left: "50%", marginLeft: "-4px", borderLeft: "4px solid transparent", borderRight: "4px solid transparent" },
    bottom: { top:    "-4px", left: "50%", marginLeft: "-4px", borderLeft: "4px solid transparent", borderRight: "4px solid transparent" },
    left:   { right:  "-4px", top:  "50%", marginTop:  "-4px", borderTop: "4px solid transparent",  borderBottom: "4px solid transparent" },
    right:  { left:   "-4px", top:  "50%", marginTop:  "-4px", borderTop: "4px solid transparent",  borderBottom: "4px solid transparent" },
  };

  // styles per variant
  const variants = {
    dark:    { bg: "#1a1c1e",    color: "#f0ede8", border: "none",                             arrowColor: "#1a1c1e"    },
    light:   { bg: "#ffffff",    color: "#1a1c1e", border: "1px solid #e5e5e5",                arrowColor: "#ffffff"    },
    accent:  { bg: "#534AB7",    color: "#EEEDFE", border: "none",                             arrowColor: "#534AB7"    },
    outline: { bg: "transparent",color: "#f0ede8", border: "1px solid rgba(240,237,232,0.25)", arrowColor: "transparent"},
    rich:    { bg: "#1a1c1e",    color: "#f0ede8", border: "1px solid rgba(255,255,255,0.08)", arrowColor: "#1a1c1e"    },
  };

  const s = variants[variant];

  // arrow color direction
  const arrowDirectionStyle = {
    top:    { borderTop:    `4px solid ${s.arrowColor}` },
    bottom: { borderBottom: `4px solid ${s.arrowColor}` },
    left:   { borderLeft:   `4px solid ${s.arrowColor}` },
    right:  { borderRight:  `4px solid ${s.arrowColor}` },
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {/* tooltip box */}
      <div
        className={`tooltip-box ${variant === "rich" ? "tooltip-rich" : ""}`}
        style={{
          ...positions[position],
          background: s.bg,
          color: s.color,
          border: s.border,
          opacity: visible ? 1 : 0,
        }}
      >
        {variant === "rich" ? (
          <>
            <p className="tooltip-rich-title">{text}</p>
            <p className="tooltip-rich-desc">{description}</p>
          </>
        ) : (
          text
        )}

        {/* arrow */}
        {variant !== "outline" && (
          <span
            className="tooltip-arrow"
            style={{
              ...arrows[position],
              ...arrowDirectionStyle[position],
            }}
          />
        )}
      </div>
    </div>
  );
}