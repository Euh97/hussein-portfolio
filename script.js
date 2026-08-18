const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

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

const strengthMarquee = document.querySelector("[data-strength-marquee]");

if (strengthMarquee) {
  const valuesMarquee = strengthMarquee.querySelector(".strength-marquee");
  const strengthTrack = strengthMarquee.querySelector(".strength-track");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (valuesMarquee && strengthTrack && !reducedMotion) {
    let currentRate = 1;
    let targetRate = 1;

    const updatePlaybackRate = () => {
      const animation = strengthTrack.getAnimations
        ? strengthTrack.getAnimations()[0]
        : null;

      currentRate += (targetRate - currentRate) * 0.08;

      if (animation) {
        animation.playbackRate = currentRate;
      }

      window.requestAnimationFrame(updatePlaybackRate);
    };

    valuesMarquee.addEventListener("pointerenter", () => {
      targetRate = 0.42;
    });

    valuesMarquee.addEventListener("pointerleave", () => {
      targetRate = 1;
    });

    window.requestAnimationFrame(updatePlaybackRate);
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
