(function () {
  const copyBtn = document.getElementById("copy-ca");
  const caText = document.getElementById("ca-text");
  const ca = copyBtn?.dataset.copy || "xyzpump";

  if (copyBtn && caText) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(ca);
        const prev = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = prev;
        }, 2000);
      } catch {
        const range = document.createRange();
        range.selectNodeContents(caText);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    });
  }

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (window.twttr?.widgets) {
    window.twttr.widgets.load();
  } else {
    window.addEventListener("load", () => {
      window.twttr?.widgets?.load();
    });
  }
})();
