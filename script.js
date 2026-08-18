document.getElementById("year").textContent = new Date().getFullYear();

const contactPageUrl = document.getElementById("contact-page-url");
if (
  contactPageUrl &&
  (window.location.protocol === "http:" || window.location.protocol === "https:")
) {
  contactPageUrl.value = window.location.href.split("#")[0];
}

const typingHeading = document.querySelector("[data-typing]");
const typingMain = typingHeading?.querySelector(".typing-main");
const typingAccent = typingHeading?.querySelector(".typing-accent");
const headline = "I build Laravel backends for real business.";
const accentStart = headline.indexOf("real business.");

if (typingHeading && typingMain && typingAccent) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  let index = reducedMotion ? headline.length : 0;

  const renderHeadline = () => {
    const displayed = headline.slice(0, index);
    typingMain.textContent = displayed.slice(
      0,
      Math.min(displayed.length, accentStart)
    );
    typingAccent.textContent =
      displayed.length > accentStart ? displayed.slice(accentStart) : "";
  };

  renderHeadline();

  if (!reducedMotion) {
    const timer = window.setInterval(() => {
      index += 1;
      renderHeadline();
      if (index >= headline.length) window.clearInterval(timer);
    }, 85);
  }
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
