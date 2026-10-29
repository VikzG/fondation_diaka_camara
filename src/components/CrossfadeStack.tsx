import type { ReactNode } from "react";

interface CrossfadeStackProps<T> {
  items: T[];
  current: number;
  className?: string;
  render: (item: T) => ReactNode;
}

// Empile un bloc par slide dans la même cellule de grille et fait un fondu enchaîné :
// la hauteur reste stable et aucun bloc ne disparaît avant que le suivant apparaisse
export const CrossfadeStack = <T,>({
  items,
  current,
  className = "",
  render,
}: CrossfadeStackProps<T>): JSX.Element => (
  <div className={`grid ${className}`}>
    {items.map((item, index) => {
      const active = index === current;
      return (
        <div
          key={index}
          className={`[grid-area:1/1] transition-opacity duration-700 ease-in-out ${
            active ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!active}
          {...(active ? {} : { inert: "" })}
        >
          {render(item)}
        </div>
      );
    })}
  </div>
);
