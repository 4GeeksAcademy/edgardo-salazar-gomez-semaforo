import React, { useState } from "react";
import "../../styles/index.css";

export const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
  <div className="d-flex flex-column align-items-center justify-content-center vh-100">
    {/* Estructura superior (soporte colgante) */}
    <div className="hanger"></div>

    {/* Caja del semáforo */}
    <div className="traffic-light bg-dark rounded-3 d-flex flex-column align-items-center p-3">
      <div
        className={`light red ${color === "red" ? "glow" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "glow" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "glow" : ""}`}
        onClick={() => setColor("green")}
      ></div>
    </div>

    {/* Poste inferior */}
    <div className="pole"></div>
  </div>
);
}