import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RedirectButtonType } from "@/types";

const RedirectButton: React.FC<RedirectButtonType> = ({ path, text, className }) => {
  const [innerPath, setInnerPath] = useState<string | "">("");
  
  useEffect(() => {
    if(path == "" || path == "/"){
      setInnerPath('/');
    } else {
      setInnerPath(`/${path}`);
    }
  }, [path])

  return (
    <div>
      <Link href={innerPath} passHref>
        <button className={className}>
          {text}
        </button>
      </Link>
    </div>
  );
};

export default RedirectButton;
