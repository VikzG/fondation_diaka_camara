import { useEffect, useState } from "react";
import { RESERVATIONS_CLOSE_AT, RESERVATIONS_OPEN, reservationsClosed } from "./lots";

export type ReservationsStatus = "soon" | "open" | "closed";

const currentStatus = (): ReservationsStatus => {
  if (!RESERVATIONS_OPEN) return "soon";
  return reservationsClosed() ? "closed" : "open";
};

export const useReservationsStatus = (): ReservationsStatus => {
  const [status, setStatus] = useState(currentStatus);

  useEffect(() => {
    if (status !== "open") return;
    const update = () => setStatus(currentStatus());
    // Un minuteur pour l'heure exacte, et une vérification régulière si l'appareil s'est mis en veille
    const timer = setTimeout(update, Math.max(0, RESERVATIONS_CLOSE_AT - Date.now()) + 500);
    const interval = setInterval(update, 30000);
    document.addEventListener("visibilitychange", update);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, [status]);

  return status;
};
