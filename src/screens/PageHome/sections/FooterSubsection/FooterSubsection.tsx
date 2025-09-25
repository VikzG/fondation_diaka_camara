export const FooterSubsection = (): JSX.Element => {
  return (
    <footer id="footer" className="w-full bg-colbat px-6 py-5">
      {/* Desktop */}
      <div className="hidden max-[1200px]:hidden lg:flex items-center justify-center gap-2.5 px-[60px] py-5 relative">
        <div className="flex items-center gap-[30px] relative flex-1 grow">
          <img
            className="relative w-[52px] h-[38.21px]"
            alt="Footer logo"
            src="/footer_section/enveloppe_footer.svg"
          />

          <div className="relative flex-1 mt-[-1.00px] [font-family:'Mona_Sans',Helvetica] font-normal text-vanilla text-[17.5px] tracking-[0] leading-7">
            <span className="text-[#faf2d7]">
              Fondation Diaka Camara, Conakry
              <br />
            </span>

            <span className="font-bold text-[#faf2d7]"> </span>

            <a
              href="mailto:contact@fondationdiakacamara.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="font-bold text-[#faf2d7] underline">
                contact@fondationdiakacamara.org
              </span>
            </a>
          </div>
          <div className="flex flex-row gap-7">
            <a href="https://www.instagram.com/" target="_blank" className="cursor-pointer">
              <img src="/footer_section/instagram_logo.svg" alt="Logo Instagram" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" className="cursor-pointer">
              <img src="/footer_section/facebook_logo.svg" alt="Logo Facebook" />
            </a>
            <a href="https://fr.linkedin.com/" target="_blank" className="cursor-pointer">
              <img src="/footer_section/linkedin_logo.svg" alt="Logo Linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="flex flex-col items-center justify-center gap-4 max-[1200px]:flex lg:hidden text-center">
        <div className="[font-family:'Mona_Sans',Helvetica] font-normal text-vanilla text-base leading-6">
          <span className="text-[#faf2d7] block">Fondation Diaka Camara, Conakry</span>
          <a
            href="mailto:contact@fondationdiakacamara.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="font-bold text-[#faf2d7] underline">contact@fondationdiakacamara.org</span>
          </a>
        </div>

        <div className="flex flex-row gap-4 mt-2">
          <a href="https://www.instagram.com/" target="_blank">
            <img className="w-6 h-6" src="/footer_section/instagram_logo.svg" alt="Logo Instagram" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img className="w-6 h-6" src="/footer_section/facebook_logo.svg" alt="Logo Facebook" />
          </a>
          <a href="https://fr.linkedin.com/" target="_blank">
            <img className="w-6 h-6" src="/footer_section/linkedin_logo.svg" alt="Logo Linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};
