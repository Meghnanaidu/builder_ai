document.querySelectorAll("[udesly-cookie-bar]").forEach((a) => {
  function b() {
    localStorage.setItem(m, l.getTime());
  }
  function c() {
    k && localStorage.setItem(m + "-deny", l.getTime());
  }
  function d(a) {
    localStorage.removeItem(a);
  }
  function e(a) {
    return localStorage.getItem(a);
  }
  function f(a, b) {
    a + i * j > l.getTime() ? g() : d(b);
  }
  function g() {
    h.remove();
  }
  const h = a;
  if (!h) return;
  const i = 864e5,
    j = parseInt(h.getAttribute("cookie-duration"), 10) || 30,
    k = document.querySelector("[cookie-deny]"),
    l = new Date();
  var m;
  ((m = h.getAttribute("udesly-cookie-bar") || "cookie-accepted"),
  h.removeAttribute("udesly-cookie-bar"),
  h.querySelectorAll("[cookie='accept']").forEach((a) => {
    a.addEventListener("click", () => {
      b(), g();
    });
  }),
  h.querySelectorAll("[cookie='deny']").forEach((a) => {
    a.addEventListener("click", () => {
      c(), g();
    });
  }),
  localStorage.getItem(m))
    ? f(e(m), m)
    : localStorage.getItem(m + "-deny") && f(e(m + "-deny"), m + "-deny"),
    (window.userAcceptedCookie = function () {
      return !!localStorage.getItem(m) && e(m) + i * j > l.getTime();
    });
});
