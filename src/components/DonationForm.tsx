import { useState } from "react";

const SLUG = "gala-2025-817496";

export default function PageDon() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [interval, setIntervalValue] = useState<"o" | "m">("o");
  const [showCustomInput, setShowCustomInput] = useState(false);

  // Déterminer le montant final
  const getFinalAmount = () => {
    if (showCustomInput && customAmount) {
      const parsed = parseFloat(customAmount);
      if (!isNaN(parsed) && parsed > 0) {
        return parsed;
      }
    } else if (selectedAmount) {
      return selectedAmount;
    }
    return null;
  };

  // Paiement Donorbox
  const openDonorbox = () => {
    const url = new URL(`https://donorbox.org/${SLUG}`);
    const finalAmount = getFinalAmount();

    if (finalAmount) {
      url.searchParams.set("amount", finalAmount.toString());
    }
    if (interval === "m") {
      url.searchParams.set("recurring", "true");
    }
    window.open(url.toString(), "_blank", "noopener");
  };

  const handleCustomAmountClick = () => {
    setSelectedAmount(null);
    setShowCustomInput(true);
  };

  const handlePresetAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setShowCustomInput(false);
    setCustomAmount("");
  };

  return (
    <div className="flex items-center justify-center px-6 py-10 lg:px-24 lg:py-[100px]">
      <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-12 w-full max-w-[700px] lg:min-w-[500px] shadow-2xl">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-[beautique-display] text-gray-800 mb-6 lg:mb-10 text-center">
          Faites un don
        </h3>

        <div className="space-y-6 lg:space-y-8 mb-6 lg:mb-8 font-mona">
          {/* Type de don */}
          <div className="relative flex bg-colbat rounded-full text-base sm:text-xl lg:text-2xl font-bold p-1 lg:p-2">
            <div
              className={`absolute top-1 bottom-1 bg-antiflash rounded-full transition-all duration-300 ease-in-out ${
                interval === "m" ? "left-1 right-1/2" : "left-1/2 right-1"
              }`}
            />
            <button
              onClick={() => setIntervalValue("m")}
              className={`relative z-10 flex-1 py-2 lg:py-4 px-2 lg:px-3 rounded-full font-bold transition-colors duration-300 ${
                interval === "m" ? "text-colbat" : "text-white hover:text-gray-200"
              }`}
            >
              Don mensuel
            </button>
            <button
              onClick={() => setIntervalValue("o")}
              className={`relative z-10 flex-1 py-2 lg:py-4 px-2 lg:px-3 rounded-full font-bold transition-colors duration-300 ${
                interval === "o" ? "text-colbat" : "text-white hover:text-gray-200"
              }`}
            >
              Don unique
            </button>
          </div>

          {/* Montants prédéfinis */}
          <div className="grid grid-cols-2 gap-3 text-base sm:text-xl lg:text-2xl">
            {[1000, 500, 100, 50].map((amt) => (
              <button
                key={amt}
                onClick={() => handlePresetAmountClick(amt)}
                className={`py-2 lg:py-3 px-2 lg:px-3 rounded-2xl font-bold transition-colors ${
                  selectedAmount === amt && !showCustomInput
                    ? "bg-colbat text-white"
                    : "bg-antiflash text-colbat hover:bg-blue-100"
                }`}
              >
                {amt}$
              </button>
            ))}
          </div>

          {/* Montant personnalisé */}
          <div className="space-y-3">
            <button
              onClick={handleCustomAmountClick}
              className={`text-base sm:text-xl lg:text-2xl w-full font-semibold py-2 lg:py-3 px-2 lg:px-3 rounded-2xl transition-colors ${
                showCustomInput
                  ? "bg-colbat text-white"
                  : "bg-antiflash text-colbat hover:bg-blue-100"
              }`}
            >
              Montant personnalisé
            </button>

            {showCustomInput && (
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Entrez le montant"
                  className="flex-1 text-base sm:text-xl lg:text-2xl py-2 lg:py-3 px-3 rounded-2xl border-2 border-colbat bg-white focus:outline-none focus:ring-2 focus:ring-colbat focus:border-transparent"
                  min="1"
                  step="0.01"
                />
                <span className="text-base sm:text-xl lg:text-2xl font-bold text-colbat">$</span>
              </div>
            )}
          </div>
        </div>

        {/* Bouton paiement */}
        <button
          onClick={openDonorbox}
          className="text-base sm:text-xl lg:text-2xl w-full bg-colbat text-white hover:bg-blue-700 font-semibold py-2 lg:py-3 px-3 rounded-2xl transition-colors mt-2"
        >
          Procéder au paiement
        </button>

        <p className="mt-3 text-xs sm:text-sm lg:text-base text-gray-600 text-center">
          Le bouton ouvrira une nouvelle page sécurisée via Donorbox (Carte bancaire ou PayPal).
        </p>
      </div>
    </div>
  );
}
