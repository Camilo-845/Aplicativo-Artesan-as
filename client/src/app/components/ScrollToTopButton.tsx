'use client'

export default function ScrollToTopButton(){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return(
        <button onClick={scrollToTop} className="fixed bottom-0 right-0 m-4" >
        <svg className="fill-foreground"
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
        >
          <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
        </svg>
      </button>
    )
}

