import { useEffect, useState } from "react";

function ButtonDarkMode() {
  const [dark, setDark] = useState(() =>
      typeof window !== "undefined"
        ? document.documentElement.classList.contains("dark")
        : false
    );
  
    useEffect(() => {
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [dark]);
  
    return (
      <div>
        <button
          className="px-4 py-2 rounded bg-blanco border-2 border-black text-negro dark:bg-negro dark:text-blanco dark:border-blanco"
          onClick={() => setDark((d) => !d)}
        >
          {dark ? "Modo Oscuro" : "Modo Claro"}
        </button>
      </div>
    );
}

export default ButtonDarkMode