import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedPageTransition = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/about");
  };

  return (
    <TransitionGroup component={null}>
      <CSSTransition classNames="page-transition" timeout={1200}>
        <main>
          <div className="cd-index cd-main-content">
            <div>
              <h1>Animated Page Transition</h1>
              <Link href="/about" passHref legacyBehavior>
                <a className="cd-btn" data-type="page-transition" onClick={handleClick}>
                  Start animation
                </a>
              </Link>
            </div>
          </div>
        </main>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedPageTransition;
