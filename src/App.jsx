import { useState } from "react";
import Tooltip from "./components/Tooltip";
import IconButton from "./components/IconButton";
import Icon from "./components/Icon";
import { icons } from "./data/icons";
import "./styles/App.css";

export default function App() {
  return (
    <div className="page">

      {/* header */}
      <div className="header">
        <p className="header-sub">HOVER TO SEE</p>
        <h1 className="header-title">Animated Tooltips</h1>
      </div>

      {/* positions */}
      <section className="section">
        <p className="section-label">POSITIONS</p>
        <div className="row">
          {["top", "bottom", "left", "right"].map(pos => (
            <Tooltip
              key={pos}
              text={pos.charAt(0).toUpperCase() + pos.slice(1)}
              position={pos}
              variant="dark"
            >
              <IconButton>
                <Icon d={icons.star} />
              </IconButton>
            </Tooltip>
          ))}
        </div>
      </section>

      {/* variants */}
      <section className="section">
        <p className="section-label">VARIANTS</p>
        <div className="row">

          <Tooltip text="Dark tooltip" variant="dark">
            <IconButton>
              <Icon d={icons.heart} />
            </IconButton>
          </Tooltip>

          <Tooltip text="Light tooltip" variant="light">
            <IconButton>
              <Icon d={icons.bell} />
            </IconButton>
          </Tooltip>

          <Tooltip text="Accent tooltip" variant="accent">
            <IconButton color="#a87eff">
              <Icon d={icons.settings} />
            </IconButton>
          </Tooltip>

          <Tooltip text="Outline tooltip" variant="outline">
            <IconButton>
              <Icon d={icons.share} />
            </IconButton>
          </Tooltip>

          <Tooltip
            text="Rich tooltip"
            description="Supports a title and a longer description underneath."
            variant="rich"
          >
            <IconButton>
              <Icon d={icons.star} />
            </IconButton>
          </Tooltip>

        </div>
      </section>

      {/* toolbar */}
      <section className="section">
        <p className="section-label">REAL USAGE — TOOLBAR</p>
        <div className="toolbar">
          {[
            { tip: "Add to favorites", icon: icons.heart },
            { tip: "Notifications",    icon: icons.bell },
            { tip: "Settings",         icon: icons.settings },
            { tip: "Share",            icon: icons.share },
          ].map(({ tip, icon }) => (
            <Tooltip key={tip} text={tip} variant="dark">
              <IconButton>
                <Icon d={icon} size={18} />
              </IconButton>
            </Tooltip>
          ))}
        </div>
      </section>

    </div>
  );
}