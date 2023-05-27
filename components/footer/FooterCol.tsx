"use client";

import Link from "next/link";

interface NavLinks {
  type: string;
  title: string;
  path: string;
}

interface FooterColProps {
  title: string;
  links: NavLinks[];
  className?: React.ReactNode;
}

const FooterCol: React.FC<FooterColProps> = ({ title, className, links }) => {
  return (
    <div className={"mx-auto " + className}>
      <h1 className="text-sm font-bold pb-3">{title}</h1>
      <ul>
        {links.map((item, index) => (
          <li className="text-sm pb-3 text-slate-400 hover:text-white duration-300 transition" key={index}>
            {item.type === "link" ? <Link href={item.path}>{item.title}</Link> : <a></a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCol;
