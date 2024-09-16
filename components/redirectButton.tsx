import React from "react";
import Link from "next/link";
import { RedirectButtonType } from "@/types";

const RedirectButton : React.FC<RedirectButtonType> = ({path, text, className}) => {
  const [toPath, setToPath] = React.useState("#" + path);
  
  return (
    <div>
      <button className={className}>
        <Link href={toPath}>
          {text ? <a>{text}</a> : null}
        </Link>
      </button>
    </div>
  )
}

export default RedirectButton;

// 위에 함수 테스트해보고 안된다면 아래것 테스트 해볼 것

// import React from "react";
// import Link from "next/link";
// import { RedirectButtonType } from "@/types";

// const RedirectButton: React.FC<RedirectButtonType> = ({ path, text, className }) => {
//   return (
//     <div>
//       <Link href={`#${path}`} passHref>
//         <button className={className}>
//           {text}
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default RedirectButton;
