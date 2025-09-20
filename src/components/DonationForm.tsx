import { useState } from "react";

const SLUG = "gala-2025-817496";

export default function PageDon() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [interval, setIntervalValue] = useState<"o" | "m">("o");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"donorbox" | "momo">("donorbox");

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

  // Paiement MoMo
  const payWithMomo = async () => {
    const finalAmount = getFinalAmount();
    if (!finalAmount) {
      alert("Veuillez entrer un montant valide.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/momo/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount.toString(),
          phoneNumber: "22960000000", // 👉 plus tard : demander au user
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert(`Paiement MoMo initié ! Référence : ${data.referenceId}`);
      } else {
        alert("Erreur lors du paiement MoMo.");
      }
    } catch (err) {
      alert("Impossible de contacter le serveur MoMo.");
    }
  };

  // Bouton paiement
  const handlePayment = () => {
    if (paymentMethod === "donorbox") {
      openDonorbox();
    } else {
      payWithMomo();
    }
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
    <div className="w-1/2 flex items-center justify-center p-[100px] px-24">
      <div className="bg-white/50 backdrop-blur-md rounded-3xl p-12 w-full shadow-2xl lg:min-w-[450px] max-w-[700px]">
        <h3 className="text-5xl font-[beautique-display] text-gray-800 mb-10 text-center">
          Faites un don
        </h3>

        <div className="space-y-8 mb-8 font-mona">
          {/* Type de don */}
          <div className="relative flex bg-colbat rounded-full text-2xl font-bold p-2">
            <div
              className={`absolute top-1 bottom-1 bg-antiflash rounded-full transition-all duration-300 ease-in-out ${
                interval === "m" ? "left-1 right-1/2" : "left-1/2 right-1"
              }`}
            />
            <button
              onClick={() => setIntervalValue("m")}
              className={`relative z-10 flex-1 py-4 px-3 rounded-full font-bold transition-colors duration-300 ${
                interval === "m" ? "text-colbat" : "text-white hover:text-gray-200"
              }`}
            >
              Don mensuel
            </button>
            <button
              onClick={() => setIntervalValue("o")}
              className={`relative z-10 flex-1 py-4 px-3 rounded-full font-bold transition-colors duration-300 ${
                interval === "o" ? "text-colbat" : "text-white hover:text-gray-200"
              }`}
            >
              Don unique
            </button>
          </div>

          {/* Montants prédéfinis */}
          <div className="grid grid-cols-2 gap-3 text-2xl">
            {[1000, 500, 100, 50].map((amt) => (
              <button
                key={amt}
                onClick={() => handlePresetAmountClick(amt)}
                className={`py-3 px-3 rounded-2xl font-bold transition-colors ${
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
              className={`text-2xl w-full font-semibold py-3 px-3 rounded-2xl transition-colors ${
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
                  className="flex-1 text-2xl py-3 px-4 rounded-2xl border-2 border-colbat bg-white focus:outline-none focus:ring-2 focus:ring-colbat focus:border-transparent"
                  min="1"
                  step="0.01"
                />
                <span className="text-2xl font-bold text-colbat">$</span>
              </div>
            )}
          </div>

          {/* Choix du moyen de paiement */}
          <div className="flex space-x-4">
            <button
              onClick={() => setPaymentMethod("donorbox")}
              className={`flex-1 py-3 px-3 rounded-2xl font-bold ${
                paymentMethod === "donorbox"
                  ? "bg-colbat text-white"
                  : "bg-antiflash text-colbat hover:bg-blue-100"
              }`}
            >
              Carte / PayPal (Donorbox)
            </button>
            <button
              onClick={() => setPaymentMethod("momo")}
              className={`flex-1 py-3 px-3 rounded-2xl font-bold ${
                paymentMethod === "momo"
                  ? "bg-colbat text-white"
                  : "bg-antiflash text-colbat hover:bg-blue-100"
              }`}
            >
              MoMo MTN
            </button>
          </div>
        </div>

        {/* Bouton paiement */}
        <button
          onClick={handlePayment}
          className="text-2xl w-full bg-colbat text-white hover:bg-blue-700 font-semibold py-3 px-3 rounded-2xl transition-colors mt-2"
        >
          Procéder au paiement
        </button>

        <p className="mt-3 text-sm text-gray-600 text-center">
          Si vous choisissez Donorbox, le bouton ouvrira une nouvelle page.  
          Si vous choisissez MoMo, vous recevrez une demande de paiement sur votre téléphone.
        </p>
      </div>
    </div>
  );
}
