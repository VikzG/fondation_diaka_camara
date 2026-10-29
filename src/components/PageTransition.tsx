type Props = { children: React.ReactNode };

// Fondu d'entrée en CSS (classe `page-fade-in` dans tailwind.css) plutôt qu'avec framer-motion :
// l'animation JS ne démarrait qu'une fois toute la page construite, ce qui laissait l'écran
// blanc jusqu'à une seconde. Pas de `transform` ici : il casserait les éléments en `position: fixed`.
export default function PageTransition({ children }: Props) {
  return <div className="min-h-screen page-fade-in">{children}</div>;
}
