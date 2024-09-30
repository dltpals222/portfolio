import React from "react";
import Link from "next/link";
import { RedirectButtonType } from "@/types";

const RedirectButton: React.FC<RedirectButtonType> = ({ path, text, className }) => {
  return (
    <div>
      <Link href={`#${path}`} passHref>
        <button className={className}>
          {text}
        </button>
      </Link>
    </div>
  );
};

export default RedirectButton;
