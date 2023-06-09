"use-client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { usePathname } from "next/navigation";

interface DataProps {
  name: string;
  icon: LucideIcon;
  menus: any;
}

interface SubMenuProps {
  data: DataProps;
}

const SubMenu: React.FC<SubMenuProps> = ({ data }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li className={`link ${pathname.includes(data.name) && "text-blue-600"}`} onClick={() => setSubMenuOpen(!subMenuOpen)}>
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{data.name}</p>
        <IoIosArrowDown className={` ${subMenuOpen && "rotate-180"} duration-200 `} />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu: any) => (
          <li key={menu}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <Link href={`/${data.name}/${menu}`} className="link !bg-transparent capitalize">
              {menu}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
