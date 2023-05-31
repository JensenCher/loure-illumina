"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import LargeHeading from "@/ui/LargeHeading";
import Button from "@/ui/Button";
import Icons from "@/components/Icons";
import { FaArtstation } from "react-icons/fa";
import FooterCol from "./FooterCol";
import FooterContact from "./FooterContact";

export default function Footer() {
  // // Change Nav color when hover
  // const [navbar, setNavbar] = useState(false);
  // useEffect(() => {
  //   const changeNavbar = () => {
  //     if (window.scrollY >= 90) {
  //       setNavbar(true);
  //     } else {
  //       setNavbar(false);
  //     }
  //   };
  //   window.addEventListener("scroll", changeNavbar);
  // }, []);

  return (
    <div className={"w-full"}>
      <div className="py-5">
        <Container>
          <div className="py-5 border-t-2 border-slate-400/50">
            <LargeHeading size="sm" className="p-5 text-slate-100 dark:text-light-gold md:max-w-[250px]">
              Let's Work <span className="inline-block">Together</span>
            </LargeHeading>
            <div className="flex flex-col md:flex-row md:items-stretch w-full md:gap-16">
              <div className="py-5 md:pt-5 min-w-[300px] max-w-[500px] mx-auto md:mx-5 md:max-w-[500px] md:flex md:flex-col md:justify-between md">
                <FooterContact />
                <div className="hidden md:flex md:flex-row md:gap-4 text-slate-400">
                  {/* <div title="Twitter">
                    <Icons.Twitter className="hover:text-white transition duration-300 cursor-pointer" />
                  </div> */}
                  <a target="_blank" href="https://www.artstation.com/arielramseypoh" rel="noopener noreferrer" title="Art Station">
                    <FaArtstation size={25} className="hover:text-white transition duration-300" />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/arielramsey_poh/" rel="noopener noreferrer" title="Instagram">
                    <Icons.Instagram className="hover:text-white transition duration-300 " />
                  </a>
                  <a target="_blank" href="https://www.youtube.com/@6ftariel926" rel="noopener noreferrer" title="YouTube">
                    <Icons.Youtube className="hover:text-white transition duration-300 " />
                  </a>
                  <a href="mailto: 6ftariel.business@gmail.com" title="Email">
                    <Icons.Mail className="hover:text-white transition duration-300  cursor-pointer" />
                  </a>
                </div>
              </div>
              <div className="py-5 md:pt-0 md:pb-5 px-5 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-14 items-start justify-between">
                <FooterCol
                  title={"Resources"}
                  links={[
                    {
                      type: "link",
                      title: "Tarot Angelus",
                      path: "/tarot-angelus",
                    },
                    {
                      type: "link",
                      title: "About",
                      path: "/",
                    },
                    {
                      type: "link",
                      title: "The Team",
                      path: "/",
                    },
                  ]}
                />
                <FooterCol
                  title={"Storyline"}
                  links={[
                    {
                      type: "link",
                      title: "0 - The Fool",
                      path: "/tarot-angelus",
                    },
                    {
                      type: "link",
                      title: "1 - The Magician",
                      path: "/tarot-angelus",
                    },
                    {
                      type: "link",
                      title: "2 - High Priestess",
                      path: "/tarot-angelus",
                    },
                    {
                      type: "link",
                      title: "3 - The Empress",
                      path: "/tarot-angelus",
                    },
                    {
                      type: "link",
                      title: "4 - The Emperor",
                      path: "/tarot-angelus",
                    },
                    {
                      type: "link",
                      title: "999 - Mount Fuji",
                      path: "/tarot-angelus",
                    },
                    {
                      type: "link",
                      title: "More...",
                      path: "/tarot-angelus",
                    },
                  ]}
                />
                <FooterCol
                  title={"Progress"}
                  links={[
                    {
                      type: "link",
                      title: "Humble Beginnings",
                      path: "/tarot-angelus",
                    },
                    {
                      type: "link",
                      title: "March of Innovation",
                      path: "/tarot-angelus",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="pt-10 pb-5 flex flex-col md:flex-row justify-between text-slate-400 gap-5">
              <div className="flex flex-row gap-5 md:hidden">
                <div title="Twitter">
                  <Icons.Twitter className="hover:text-white transition duration-300  cursor-pointer" />
                </div>
                <a target="_blank" href="https://www.instagram.com/arielramsey_poh/" rel="noopener noreferrer" title="Instagram">
                  <Icons.Instagram className="hover:text-white transition duration-300 " />
                </a>
                <a target="_blank" href="https://www.youtube.com/@6ftariel926" rel="noopener noreferrer" title="YouTube">
                  <Icons.Youtube className="hover:text-white transition duration-300 " />
                </a>
                <a href="mailto: 6ftariel.business@gmail.com" title="Email">
                  <Icons.Mail className="hover:text-white transition duration-300  cursor-pointer" />
                </a>
              </div>
              <div>Copyright &#169; 2023 Ariel Ramsey Poh</div>
              <div>Developed by Jensen Cher</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
