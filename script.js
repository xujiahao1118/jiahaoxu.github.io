(() => {
  const toggle = document.getElementById("language-toggle");
  const translatable = document.querySelectorAll("[data-en][data-zh]");
  let language = localStorage.getItem("jx-site-language") || "en";

  function applyLanguage() {
    document.documentElement.lang = language;
    translatable.forEach((element) => {
      element.textContent = element.dataset[language];
    });
    toggle.textContent = language === "en" ? "中文" : "English";
    toggle.setAttribute("aria-label", language === "en" ? "切换到中文" : "Switch to English");
    document.title = language === "en" ? "JiaHao Xu | Academic Homepage" : "许家豪 | 学术个人主页";
  }

  toggle.addEventListener("click", () => {
    language = language === "en" ? "zh" : "en";
    localStorage.setItem("jx-site-language", language);
    applyLanguage();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLanguage();
})();