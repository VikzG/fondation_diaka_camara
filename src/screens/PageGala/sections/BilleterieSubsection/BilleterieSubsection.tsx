import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const BilleterieSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-11 pt-[70px] pb-[100px] px-[100px] relative">
      <h2 className="relative self-stretch mt-[-1.00px] font-titres font-[number:var(--titres-font-weight)] text-licorice text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] [font-style:var(--titres-font-style)]">
        BILLETERIE
      </h2>

      <div className="relative w-[850px] h-[406px]">
        <div className="relative w-[865px] h-[421px] -top-1 -left-2.5 bg-[url(/ticket.svg)] bg-[100%_100%]">
          <Card className="w-[730px] h-[309px] absolute top-[53px] left-[70px] rounded-[15px] border-2 border-solid border-[#c30f28] bg-transparent">
            <CardContent className="flex items-center justify-center gap-[38px] p-[30px] h-full">
              <Button
                variant="ghost"
                size="icon"
                className="relative w-[55px] h-[55px] p-0 hover:bg-transparent"
              >
                <ChevronLeftIcon className="w-[55px] h-[55px] text-licorice" />
              </Button>

              <div className="flex flex-col w-[471.92px] items-start gap-10 pt-0 pb-5 px-0 relative">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Beautique_Display_Condensed-MediumItalic',Helvetica] font-medium italic text-licorice text-[32px] text-center tracking-[0.64px] leading-[38px]">
                  Table VIP
                  <br />
                  10 personnes.
                </div>

                <div className="relative self-stretch [font-family:'Beautique_Display_Condensed-Black',Helvetica] font-black text-licorice text-[40px] text-center tracking-[0.80px] leading-[38px]">
                  $ 10 000
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="relative w-[55px] h-[55px] p-0 bg-carmin rounded-[27.5px] hover:bg-carmin/90"
              >
                <ChevronRightIcon className="w-[19px] h-9 text-antiflash" />
              </Button>
            </CardContent>
          </Card>

          <div className="inline-flex items-center justify-center gap-2.5 px-0 py-0.5 absolute top-[336px] left-[322px] rounded-[10px] shadow-[0px_1px_2px_#00000040]">
            <Button className="inline-flex items-center justify-center gap-2.5 pt-[5px] pb-[7px] px-[25px] relative flex-[0_0_auto] bg-carmin rounded-[10px] hover:bg-carmin/90 h-auto">
              <span className="text-antiflash relative w-fit mt-[-1.00px] [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg text-center tracking-[0] leading-[30px] whitespace-nowrap">
                Acheter mes places
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
