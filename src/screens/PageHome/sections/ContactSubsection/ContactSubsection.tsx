import { Button } from "../../../../components/ui/button";
import { useState, useRef } from "react";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "emailjs-com";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    contactUs: "CONTACTEZ-NOUS",
    joinCircle: "REJOINDRE LE CERCLE",
    circleText:
      "Le Cercle des Alliances est un lieu de partage, de collaboration et de solidarité. Ensemble, nous pouvons créer des passerelles entre nos causes et bâtir un avenir plus équitable pour les enfants et les femmes d’Afrique.",
    fullName: "Nom complet*",
    organization: "Organisation",
    email: "Adresse Email*",
    phone: "N° de téléphone",
    message: "Votre message*",
    send: "Envoyer",
    file: "Fichier :",
    attachment: "* Pièce jointe facultative (Proposition ou Plaquette)",
    attachmentShort: "* Pièce jointe facultative",
    sent: "Votre message a bien été envoyé !",
    fileTooBig: "⚠️ Le fichier est trop lourd (max 5 Mo).",
    uploadFailed: "❌ Échec de l’upload du fichier.",
    sendFailed: "❌ Une erreur est survenue. Merci de réessayer.",
  },
  en: {
    contactUs: "CONTACT US",
    joinCircle: "JOIN THE CIRCLE",
    circleText:
      "The Circle of Alliances is a place for sharing, collaboration and solidarity. Together, we can build bridges between our causes and create a fairer future for the children and women of Africa.",
    fullName: "Full name*",
    organization: "Organisation",
    email: "Email address*",
    phone: "Phone number",
    message: "Your message*",
    send: "Send",
    file: "File:",
    attachment: "* Optional attachment (Proposal or Brochure)",
    attachmentShort: "* Optional attachment",
    sent: "Your message has been sent!",
    fileTooBig: "⚠️ The file is too large (max 5 MB).",
    uploadFailed: "❌ The file upload failed.",
    sendFailed: "❌ Something went wrong. Please try again.",
  },
};

export const ContactSubsection = (): JSX.Element => {
  const [phone, setPhone] = useState("");
  const [phoneMobile, setPhoneMobile] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileMobile, setFileMobile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const location = useLocation();
  const t = useTranslation(content);
  const isCerclePage = location.pathname === "/cercle";
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileInputMobileRef = useRef<HTMLInputElement>(null);

  // === gestion soumission ===
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    isMobile: boolean
  ) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = formData.get("fullName")?.toString() || "N/A";
    const email = formData.get("email")?.toString() || "N/A";
    const organization = formData.get("organization")?.toString() || "N/A";
    const message = formData.get("message")?.toString() || "N/A";
    const phoneNumber: string = isMobile ? phoneMobile : phone;
    const phoneValue = phoneNumber || "N/A";
    const time = new Date().toLocaleString();

    const selectedFile = isMobile ? fileMobile : file;
    let fileUrl = "";

    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert(t.fileTooBig);
        setIsSending(false);
        return;
      }

      const uploadData = new FormData();
      uploadData.append("file", selectedFile);
      uploadData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
      );

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
          }/upload`,
          { method: "POST", body: uploadData }
        );
        const data = await res.json();
        fileUrl = data.secure_url;
      } catch (err) {
        console.error("Erreur Cloudinary :", err);
        alert(t.uploadFailed);
        setIsSending(false);
        return;
      }
    }

    const templateParams = {
      fullName,
      email,
      organization,
      phone: phoneValue,
      message,
      time,
      fileUrl: fileUrl || "",
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      form.reset();
      setPhone("");
      setPhoneMobile("");
      setFile(null);
      setFileMobile(null);

      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 4000);
    } catch (error) {
      console.error("Erreur EmailJS :", error);
      alert(t.sendFailed);
    } finally {
      setIsSending(false);
    }
  };

  const formFields = [
    {
      id: "fullName",
      label: t.fullName,
      type: "input",
      required: true,
      className: "flex-1",
    },
    {
      id: "organization",
      label: t.organization,
      type: "input",
      required: false,
      className: "flex-1",
    },
  ];

  const singleFields = [
    { id: "email", label: t.email, type: "input", required: true },
    { id: "phone", label: t.phone, type: "input", required: false },
    {
      id: "message",
      label: t.message,
      type: "textarea",
      required: true,
    },
  ];

  // === JSX ===
  const desktopReturn = (
    <section
      id="contact"
      className="hidden lg:flex w-full items-start gap-[100px] p-[100px] relative bg-vanilla"
    >
      <div
        className={`inline-flex flex-col gap-[100px] relative self-stretch w-1/2 ${
          isCerclePage ? "items-start text-left" : "items-center text-center"
        }`}
      >
        <h2 className="relative w-fit font-[beautique-display-bold] text-5xl text-licorice">
          {isCerclePage ? t.joinCircle : t.contactUs}
        </h2>
        {isCerclePage ? (
          <p className="font-corps text-licorice text-lg text-justify leading-relaxed max-w-md">
            {t.circleText}
          </p>
        ) : (
          <img loading="lazy" decoding="async"
            className="relative w-60 h-[247px]"
            alt="contact"
            src="/contact_section/logo_contact.svg"
          />
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-10 relative w-1/2">
        <form
          onSubmit={(e) => handleSubmit(e, false)}
          className="flex-col justify-center gap-[15px] flex-[0_0_auto] flex items-center relative self-stretch w-full"
        >
          <div className="flex items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            {formFields.map((field) => (
              <div key={field.id} className={`relative ${field.className}`}>
                <Label htmlFor={field.id} className="sr-only">
                  {field.label}
                </Label>
                <Input
                  name={field.id}
                  id={field.id}
                  required={field.required}
                  placeholder={field.label}
                  className="h-[38px] font-corps font-medium gap-2.5 px-5 bg-[#ffffffcc] rounded-lg backdrop-blur-[5px] border-0 placeholder:font-medium placeholder:text-licorice"
                />
              </div>
            ))}
          </div>

          {singleFields.map((field) => (
            <div key={field.id} className="relative self-stretch w-full">
              <Label htmlFor={field.id} className="sr-only">
                {field.label}
              </Label>

              {field.id === "phone" ? (
                <PhoneInput
                  country={"fr"}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: "phone",
                    id: "phone",
                    placeholder: field.label,
                    required: field.required,
                  }}
                  inputClass="h-[38px] !w-full px-5 shadow-sm !rounded-lg !border-none !bg-[#ffffffcc] placeholder:text-licorice"
                  buttonClass="bg-[#ffffffcc]"
                  containerClass="w-full"
                />
              ) : field.type === "textarea" ? (
                <Textarea
                  name={field.id}
                  id={field.id}
                  required={field.required}
                  placeholder={field.label}
                  className="h-[173px] px-5 py-[5px] bg-[#ffffffcc] rounded-lg backdrop-blur-[5px] border-0 resize-none placeholder:font-medium placeholder:text-licorice"
                />
              ) : (
                <Input
                  name={field.id}
                  id={field.id}
                  required={field.required}
                  placeholder={field.label}
                  className="h-[38px] px-5 bg-[#ffffffcc] rounded-lg backdrop-blur-[5px] border-0 placeholder:font-medium placeholder:text-licorice"
                />
              )}
            </div>
          ))}

          <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full rounded-[10px]">
            <Button
              type="submit"
              className="h-auto flex items-center justify-center gap-2.5 flex-1 grow bg-pumpkin rounded-[10px] hover:underline hover:-translate-y-1 transition-all duration-300 border-0 shadow-sm"
            >
              <span className="relative w-fit font-extrabold text-vanilla text-lg text-center leading-[30px] whitespace-nowrap">
                {t.send}
              </span>
            </Button>
          </div>

          {/* Pièce jointe desktop */}
          <div className="flex items-center justify-center gap-2.5 px-5 py-[5px] self-stretch w-full bg-[#ffffff33] rounded-lg border border-solid border-[#160a00] backdrop-blur-[7.5px]">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const selectedFile = e.target.files[0];
                  if (selectedFile.size > 5 * 1024 * 1024) {
                    alert(t.fileTooBig);
                    return;
                  }
                  setFile(selectedFile);
                }
              }}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="relative w-fit font-corps font-medium text-licorice text-md hover:underline"
            >
              {file
                ? `${t.file} ${file.name}`
                : t.attachment}
            </button>
          </div>
        </form>
      </div>
    </section>
  );

  // === MOBILE RETURN ===
  const mobileReturn = (
    <section
      id="contact"
      className="flex bg-vanilla flex-col items-center gap-6 px-6 py-10 lg:hidden"
    >
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="font-[beautique-display-bold] text-3xl text-licorice text-center">
          {isCerclePage ? t.joinCircle : t.contactUs}
        </h2>
      </div>

      <div className="flex flex-col items-center w-full gap-4">
        <form
          onSubmit={(e) => handleSubmit(e, true)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex gap-4 w-full">
            <div className="flex-1">
              <Input
                name="organization"
                placeholder={t.organization}
                className="bg-[#ffffffcc] shadow-sm !rounded-lg !border-none placeholder:text-sm placeholder:text-licorice"
              />
            </div>
            <div className="flex-1">
              <Input
                name="fullName"
                required
                placeholder={t.fullName}
                className="bg-[#ffffffcc] shadow-sm  !rounded-lg !border-none placeholder:text-sm placeholder:text-licorice"
              />
            </div>
          </div>

          {singleFields.map((field) => (
            <div key={field.id} className="w-full">
              {field.id === "phone" ? (
                <PhoneInput
                  country={"fr"}
                  value={phoneMobile}
                  onChange={setPhoneMobile}
                  inputProps={{
                    name: "phone",
                    id: "phoneMobile",
                    placeholder: field.label,
                    required: field.required,
                  }}
                  inputClass="h-10 !w-full px-3 shadow-sm !bg-[#ffffffcc] !rounded-lg !border-none placeholder:text-sm placeholder:text-licorice"
                  buttonClass="bg-[#ffffffcc]"
                  containerClass="w-full"
                />
              ) : field.type === "textarea" ? (
                <Textarea
                  name={field.id}
                  required={field.required}
                  placeholder={field.label}
                  className="h-36 px-4 py-2 bg-[#ffffffcc] rounded-lg border-0 resize-none placeholder:text-sm placeholder:text-licorice"
                />
              ) : (
                <Input
                  name={field.id}
                  required
                  placeholder={field.label}
                  className="h-10 w-full px-4 bg-[#ffffffcc] rounded-lg border-0 placeholder:text-sm placeholder:text-licorice"
                />
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="mt-2 w-full py-3 bg-pumpkin rounded-lg text-vanilla font-extrabold text-lg hover:underline hover:-translate-y-1 transition-all shadow-sm"
          >
            {t.send}
          </Button>

          {/* Pièce jointe mobile */}
          <div className="flex items-center justify-center gap-2.5 px-4 py-2 w-full bg-[#ffffff33] rounded-lg border border-solid border-[#160a00] backdrop-blur-sm">
            <input
              type="file"
              ref={fileInputMobileRef}
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const selectedFile = e.target.files[0];
                  if (selectedFile.size > 5 * 1024 * 1024) {
                    alert(t.fileTooBig);
                    return;
                  }
                  setFileMobile(selectedFile);
                }
              }}
            />
            <button
              type="button"
              onClick={() => fileInputMobileRef.current?.click()}
              className="relative w-fit font-corps text-licorice text-sm hover:underline"
            >
              {fileMobile
                ? `${t.file} ${fileMobile.name}`
                : t.attachmentShort}
            </button>
          </div>
        </form>
      </div>
    </section>
  );

  return (
    <>
      {desktopReturn}
      {mobileReturn}

      {/* Loader */}
      {isSending && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="w-20 h-20 border-4 border-t-orange-500 border-gray-200 rounded-full animate-spin"></div>
        </div>
      )}
      {/* Confirmation */}
      {showConfirmation && (
        <div className="fixed text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pumpkin text-vanilla px-6 py-3 rounded-lg shadow-lg z-50 font-bold">
          {t.sent}
        </div>
      )}
    </>
  );
};
