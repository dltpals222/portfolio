import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const About = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <TransitionGroup component={null}>
      <CSSTransition classNames="page-transition" timeout={1200}>
        <main>
          <div className="cd-about cd-main-content">
            <div>
              <h1>About Page</h1>
              <p>
                This is the about page with the animated page transition. You can put any content
                you want here.
              </p>
              <Link href="/" passHref legacyBehavior>
                <a className="cd-btn" data-type="page-transition" onClick={handleClick}>
                  Go Back
                </a>
              </Link>
            </div>
          </div>
        </main>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default About;
