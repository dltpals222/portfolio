import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";

const ExampleComponent = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [newLocation, setNewLocation] = useState<string>("");
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const mainRef = useRef<HTMLElement | null>(null);

  const transitionsSupported = useCallback(() => {
    return document.documentElement.classList.contains("csstransitions");
  }, []);

  const loadNewContent = useCallback(
    (url: string, bool: boolean) => {
      url = url === "" ? "/" : url;
      const newSection = "cd-" + url.replace(".html", "");
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "document";
      xhr.send();

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 400) {
          const newContent = xhr.response.querySelect(".cd-main-content").innerHTML;
          if (mainRef.current instanceof HTMLElement) {
            mainRef.current.innerHTML = newContent;
          }

          const delay = transitionsSupported() ? 1200 : 0;
          setTimeout(() => {
            document.body.classList.toggle("cd-about", newSection === "cd-about");
            document.body.classList.remove("page-is-changing");

            const loadingBar = document.querySelector(".cd-loading-bar");
            loadingBar?.addEventListener("transitionend", function transitionEndHandler() {
              setIsAnimating(false);
              loadingBar.removeEventListener("transitionend", transitionEndHandler);
            });
          }, delay);

          if (url !== window.location.pathname && bool) {
            window.history.pushState({ path: url }, "", url);
          }
        }
      };
    },
    [setIsAnimating, transitionsSupported]
  );

  useEffect(() => {
    const changePage = (url: string, bool: boolean) => {
      setIsAnimating(true);
      document.body.classList.add("page-is-changing");

      const loadingBar = document.querySelector(".cd-loading-bar");
      loadingBar?.addEventListener("transitionend", function transitionEndHandler() {
        loadNewContent(url, bool);
        setNewLocation(url);
        loadingBar.removeEventListener("transitionend", transitionEndHandler);
      });

      if (!transitionsSupported()) {
        loadNewContent(url, bool);
        setNewLocation(url);
      }
    };

    mainRef.current?.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const pageTransitionLink = target.closest('[data-type="page-transition"]');
      if (pageTransitionLink) {
        event.preventDefault();
        const newPage = pageTransitionLink.getAttribute("href");
        if (newPage && !isAnimating) changePage(newPage, true);
        setFirstLoad(true);
      }
    });

    window.addEventListener("popstate", () => {
      if (firstLoad) {
        const newPageArray = location.pathname.split("/");
        const newPage = newPageArray[newPageArray.length - 1];

        if (!isAnimating && newLocation !== newPage) changePage(newPage, true);
      }
      setFirstLoad(true);
    });
  }, [firstLoad, isAnimating, newLocation, loadNewContent, transitionsSupported]);

  return (
    <div>
      <main>
        <div className="cd-index cd-main-content">
          <div>
            <h1>이세민의 포트폴리오</h1>
            <Link href="/nav" legacyBehavior>
              <a className="cd-btn link" data-type="page-transition">
                자세히 보기
              </a>
            </Link>
          </div>
        </div>
      </main>

      <div className="cd-cover-layer"></div>
      <div className="cd-loading-bar"></div>
    </div>
  );
};

export default ExampleComponent;
