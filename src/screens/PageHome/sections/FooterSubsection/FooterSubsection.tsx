
export const FooterSubsection = (): JSX.Element => {
  return (
    <footer className="flex w-full items-center justify-center gap-2.5 px-[60px] py-5 relative bg-colbat">
      <div className="flex items-center gap-[30px] relative flex-1 grow">
        <img
          className="relative w-[52px] h-[38.21px]"
          alt="Footer logo"
          src="/footer_section/enveloppe_footer.svg"
        />

        <div className="relative flex-1 mt-[-1.00px] [font-family:'Mona_Sans',Helvetica] font-normal text-vanilla text-[17.5px] tracking-[0] leading-7">
          <span className="text-[#faf2d7]">
            {" "}
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
    </footer>
  );
};
