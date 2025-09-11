import { useEffect, useState } from "react";

type Circle = {
  angle: number;
};

export const AnimatedCircles = ({ currentSlide }: { currentSlide: number }) => {
  const center = 225;   // centre du SVG
  const radius = 210;   // rayon du grand cercle
  const circleCount = 7;

  // calcul des angles avec un "trou" de 20% après l’orange
  const emptyArc = 0.2 * 2 * Math.PI;  // 20% du cercle = 72°
  const filledArc = 2 * Math.PI - emptyArc; // 80% restant
  const step = filledArc / (circleCount - 1);

  const initialCircles: Circle[] = Array.from({ length: circleCount }).map(
    (_, i) => ({
      angle: i * step, // cercles répartis uniquement sur 80%
    })
  );

  const [circles] = useState<Circle[]>(initialCircles);
  const [orangeIndex, setOrangeIndex] = useState(6);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // fait tourner le SVG complet de 1 "cran"
    setRotation((prev) => prev + (360 / circleCount));

    // orange avance d’un cran aussi
    setOrangeIndex((prev) => (prev - 1 + circleCount) % circleCount);
  }, [currentSlide]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 450"
      className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out"
      fill="none"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "50% 50%",
      }}
    >
      {/* Grand cercle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke="#0A4BA5"
        strokeWidth="1"
      />

      {/* Petits cercles */}
      {circles.map((c, i) => {
        const angleOffset = -0.7 * Math.PI; // ajustement initial
        const cx = center + radius * Math.cos(c.angle + angleOffset);
        const cy = center + radius * Math.sin(c.angle + angleOffset);

        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="12"
            fill={i === orangeIndex ? "#F06419" : "#0A4BA5"}
          />
        );
      })}
    </svg>
  );
};
