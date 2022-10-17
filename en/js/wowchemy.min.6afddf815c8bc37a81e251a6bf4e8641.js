(() => {
  // <stdin>
  (() => {
    var e, n, o, r, c, u, m, f, p, b, _, O, C, M, F, t = Object.assign || function(e2) {
      for (var t2, s2, n2 = 1; n2 < arguments.length; n2++) {
        t2 = arguments[n2];
        for (s2 in t2)
          Object.prototype.hasOwnProperty.call(t2, s2) && (e2[s2] = t2[s2]);
      }
      return e2;
    }, i = function(t2) {
      return t2.tagName === "IMG";
    }, q = function(t2) {
      return NodeList.prototype.isPrototypeOf(t2);
    }, a = function(t2) {
      return t2 && t2.nodeType === 1;
    }, S = function(t2) {
      var n2 = t2.currentSrc || t2.src;
      return n2.substr(-4).toLowerCase() === ".svg";
    }, T = function(t2) {
      try {
        return Array.isArray(t2) ? t2.filter(i) : q(t2) ? [].slice.call(t2).filter(i) : a(t2) ? [t2].filter(i) : typeof t2 == "string" ? [].slice.call(document.querySelectorAll(t2)).filter(i) : [];
      } catch {
        throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`);
      }
    }, B = function(t2) {
      var n2 = document.createElement("div");
      return n2.classList.add("medium-zoom-overlay"), n2.style.background = t2, n2;
    }, I = function(t2) {
      var s2 = t2.getBoundingClientRect(), o2 = s2.top, i2 = s2.left, a2 = s2.width, r2 = s2.height, n2 = t2.cloneNode(), c2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, l2 = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      return n2.removeAttribute("id"), n2.style.position = "absolute", n2.style.top = o2 + c2 + "px", n2.style.left = i2 + l2 + "px", n2.style.width = a2 + "px", n2.style.height = r2 + "px", n2.style.transform = "", n2;
    }, s = function(n2, s2) {
      var i2, o2 = t({ bubbles: false, cancelable: false, detail: void 0 }, s2);
      return typeof window.CustomEvent == "function" ? new CustomEvent(n2, o2) : (i2 = document.createEvent("CustomEvent"), i2.initCustomEvent(n2, o2.bubbles, o2.cancelable, o2.detail), i2);
    }, z = function(n2) {
      var r2, u2, y2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p2 = window.Promise || function(t2) {
        function n3() {
        }
        t2(n3, n3);
      }, A2 = function(t2) {
        var n3 = t2.target;
        if (n3 === u2) {
          l2();
          return;
        }
        if (c2.indexOf(n3) === -1)
          return;
        v2({ target: n3 });
      }, k2 = function() {
        if (d2 || !o2.original)
          return;
        var t2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        Math.abs(m2 - t2) > i2.scrollOffset && setTimeout(l2, 150);
      }, E2 = function(t2) {
        var n3 = t2.key || t2.keyCode;
        (n3 === "Escape" || n3 === "Esc" || n3 === 27) && l2();
      }, x2 = function() {
        var l3, n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o3 = n3;
        return n3.background && (u2.style.background = n3.background), n3.container && n3.container instanceof Object && (o3.container = t({}, i2.container, n3.container)), n3.template && (l3 = a(n3.template) ? n3.template : document.querySelector(n3.template), o3.template = l3), i2 = t({}, i2, o3), c2.forEach(function(e2) {
          e2.dispatchEvent(s("medium-zoom:update", { detail: { zoom: r2 } }));
        }), r2;
      }, b2 = function() {
        var n3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return z(t({}, i2, n3));
      }, f2 = function() {
        for (var n3, s2 = arguments.length, o3 = Array(s2), t2 = 0; t2 < s2; t2++)
          o3[t2] = arguments[t2];
        return n3 = o3.reduce(function(e2, t3) {
          return [].concat(e2, T(t3));
        }, []), n3.filter(function(e2) {
          return c2.indexOf(e2) === -1;
        }).forEach(function(e2) {
          c2.push(e2), e2.classList.add("medium-zoom-image");
        }), h2.forEach(function(e2) {
          var t3 = e2.type, s3 = e2.listener, o4 = e2.options;
          n3.forEach(function(e3) {
            e3.addEventListener(t3, s3, o4);
          });
        }), r2;
      }, C2 = function() {
        for (var i3, a2 = arguments.length, n3 = Array(a2), t2 = 0; t2 < a2; t2++)
          n3[t2] = arguments[t2];
        return o2.zoomed && l2(), i3 = n3.length > 0 ? n3.reduce(function(e2, t3) {
          return [].concat(e2, T(t3));
        }, []) : c2, i3.forEach(function(e2) {
          e2.classList.remove("medium-zoom-image"), e2.dispatchEvent(s("medium-zoom:detach", { detail: { zoom: r2 } }));
        }), c2 = c2.filter(function(e2) {
          return i3.indexOf(e2) === -1;
        }), r2;
      }, w2 = function(t2, n3) {
        var s2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return c2.forEach(function(e2) {
          e2.addEventListener("medium-zoom:" + t2, n3, s2);
        }), h2.push({ type: "medium-zoom:" + t2, listener: n3, options: s2 }), r2;
      }, _2 = function(t2, n3) {
        var s2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return c2.forEach(function(e2) {
          e2.removeEventListener("medium-zoom:" + t2, n3, s2);
        }), h2 = h2.filter(function(e2) {
          return e2.type !== "medium-zoom:" + t2 || e2.listener.toString() !== n3.toString();
        }), r2;
      }, g2 = function() {
        var f3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n3 = f3.target, h3 = function() {
          if (n4 = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight, left: 0, top: 0, right: 0, bottom: 0 }, s2 = void 0, r3 = void 0, i2.container)
            if (i2.container instanceof Object)
              n4 = t({}, n4, i2.container), s2 = n4.width - n4.left - n4.right - i2.margin * 2, r3 = n4.height - n4.top - n4.bottom - i2.margin * 2;
            else {
              var n4, k3 = a(i2.container) ? i2.container : document.querySelector(i2.container), d3 = k3.getBoundingClientRect(), p3 = d3.width, x3 = d3.height, _3 = d3.left, y3 = d3.top;
              n4 = t({}, n4, { width: p3, height: x3, left: _3, top: y3 });
            }
          var s2 = s2 || n4.width - i2.margin * 2, r3 = r3 || n4.height - i2.margin * 2, c3 = o2.zoomedHd || o2.original, v3 = S(c3) ? s2 : c3.naturalWidth || s2, g3 = S(c3) ? r3 : c3.naturalHeight || r3, l3 = c3.getBoundingClientRect(), b3 = l3.top, j3 = l3.left, f4 = l3.width, m3 = l3.height, w3 = Math.min(v3, s2) / f4, O3 = Math.min(g3, r3) / m3, u3 = Math.min(w3, O3), C3 = (-j3 + (s2 - f4) / 2 + i2.margin + n4.left) / u3, E3 = (-b3 + (r3 - m3) / 2 + i2.margin + n4.top) / u3, h4 = "scale(" + u3 + ") translate3d(" + C3 + "px, " + E3 + "px, 0)";
          o2.zoomed.style.transform = h4, o2.zoomedHd && (o2.zoomedHd.style.transform = h4);
        };
        return new p2(function(e2) {
          if (n3 && c2.indexOf(n3) === -1) {
            e2(r2);
            return;
          }
          var t2, f4, p3, g3, v3 = function t3() {
            d2 = false, o2.zoomed.removeEventListener("transitionend", t3), o2.original.dispatchEvent(s("medium-zoom:opened", { detail: { zoom: r2 } })), e2(r2);
          };
          if (o2.zoomed) {
            e2(r2);
            return;
          }
          if (n3)
            o2.original = n3;
          else if (c2.length > 0)
            f4 = c2, o2.original = f4[0];
          else {
            e2(r2);
            return;
          }
          o2.original.dispatchEvent(s("medium-zoom:open", { detail: { zoom: r2 } })), m2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, d2 = true, o2.zoomed = I(o2.original), document.body.appendChild(u2), i2.template && (p3 = a(i2.template) ? i2.template : document.querySelector(i2.template), o2.template = document.createElement("div"), o2.template.appendChild(p3.content.cloneNode(true)), document.body.appendChild(o2.template)), document.body.appendChild(o2.zoomed), window.requestAnimationFrame(function() {
            document.body.classList.add("medium-zoom--opened");
          }), o2.original.classList.add("medium-zoom-image--hidden"), o2.zoomed.classList.add("medium-zoom-image--opened"), o2.zoomed.addEventListener("click", l2), o2.zoomed.addEventListener("transitionend", v3), o2.original.getAttribute("data-zoom-src") ? (o2.zoomedHd = o2.zoomed.cloneNode(), o2.zoomedHd.removeAttribute("srcset"), o2.zoomedHd.removeAttribute("sizes"), o2.zoomedHd.src = o2.zoomed.getAttribute("data-zoom-src"), o2.zoomedHd.onerror = function() {
            clearInterval(t2), console.warn("Unable to reach the zoom image target " + o2.zoomedHd.src), o2.zoomedHd = null, h3();
          }, t2 = setInterval(function() {
            o2.zoomedHd.complete && (clearInterval(t2), o2.zoomedHd.classList.add("medium-zoom-image--opened"), o2.zoomedHd.addEventListener("click", l2), document.body.appendChild(o2.zoomedHd), h3());
          }, 10)) : o2.original.hasAttribute("srcset") ? (o2.zoomedHd = o2.zoomed.cloneNode(), o2.zoomedHd.removeAttribute("sizes"), o2.zoomedHd.removeAttribute("loading"), g3 = o2.zoomedHd.addEventListener("load", function() {
            o2.zoomedHd.removeEventListener("load", g3), o2.zoomedHd.classList.add("medium-zoom-image--opened"), o2.zoomedHd.addEventListener("click", l2), document.body.appendChild(o2.zoomedHd), h3();
          })) : h3();
        });
      }, l2 = function() {
        return new p2(function(e2) {
          if (d2 || !o2.original) {
            e2(r2);
            return;
          }
          var t2 = function t3() {
            o2.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(o2.zoomed), o2.zoomedHd && document.body.removeChild(o2.zoomedHd), document.body.removeChild(u2), o2.zoomed.classList.remove("medium-zoom-image--opened"), o2.template && document.body.removeChild(o2.template), d2 = false, o2.zoomed.removeEventListener("transitionend", t3), o2.original.dispatchEvent(s("medium-zoom:closed", { detail: { zoom: r2 } })), o2.original = null, o2.zoomed = null, o2.zoomedHd = null, o2.template = null, e2(r2);
          };
          d2 = true, document.body.classList.remove("medium-zoom--opened"), o2.zoomed.style.transform = "", o2.zoomedHd && (o2.zoomedHd.style.transform = ""), o2.template && (o2.template.style.transition = "opacity 150ms", o2.template.style.opacity = 0), o2.original.dispatchEvent(s("medium-zoom:close", { detail: { zoom: r2 } })), o2.zoomed.addEventListener("transitionend", t2);
        });
      }, v2 = function() {
        var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n3 = t2.target;
        return o2.original ? l2() : g2({ target: n3 });
      }, j2 = function() {
        return i2;
      }, O2 = function() {
        return c2;
      }, M2 = function() {
        return o2.original;
      }, c2 = [], h2 = [], d2 = false, m2 = 0, i2 = y2, o2 = { original: null, zoomed: null, zoomedHd: null, template: null };
      return Object.prototype.toString.call(n2) === "[object Object]" ? i2 = n2 : (n2 || typeof n2 == "string") && f2(n2), i2 = t({ margin: 0, background: "#fff", scrollOffset: 40, container: null, template: null }, i2), u2 = B(i2.background), document.addEventListener("click", A2), document.addEventListener("keyup", E2), document.addEventListener("scroll", k2), window.addEventListener("resize", l2), r2 = { open: g2, close: l2, toggle: v2, update: x2, clone: b2, attach: f2, detach: C2, on: w2, off: _2, getOptions: j2, getImages: O2, getZoomedImage: M2 }, r2;
    };
    function U(e2, t2) {
      t2 === void 0 && (t2 = {});
      var n2, s2, o2 = t2.insertAt;
      if (!e2 || typeof document == "undefined")
        return;
      s2 = document.head || document.getElementsByTagName("head")[0], n2 = document.createElement("style"), n2.type = "text/css", o2 === "top" ? s2.firstChild ? s2.insertBefore(n2, s2.firstChild) : s2.appendChild(n2) : s2.appendChild(n2), n2.styleSheet ? n2.styleSheet.cssText = e2 : n2.appendChild(document.createTextNode(e2));
    }
    F = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}", U(F), _ = z, M = false, f = "production", p = false;
    function k(e2, t2) {
      const n2 = e2.getBoundingClientRect(), o2 = { height: e2.clientHeight, width: e2.clientWidth }, s2 = t2.getBoundingClientRect(), i2 = s2.top >= n2.top && s2.bottom <= n2.top + o2.height;
      i2 || (e2.scrollTop = s2.top + e2.scrollTop - n2.top);
    }
    function E(e2, t2 = 600) {
      e2.style.display = "", e2.style.opacity = "0";
      let s2 = +new Date(), n2 = function() {
        e2.style.opacity = (+e2.style.opacity + (new Date() - s2) / t2).toString(), s2 = +new Date(), +e2.style.opacity < 1 && (window.requestAnimationFrame && requestAnimationFrame(n2) || setTimeout(n2, 16));
      };
      n2();
    }
    e = document.body;
    function x() {
      return parseInt(localStorage.getItem("wcTheme") || 2);
    }
    function y() {
      return Boolean(window.wc.darkLightEnabled);
    }
    function V() {
      if (!y())
        return console.debug("User theming disabled."), { isDarkTheme: window.wc.isSiteThemeDark, themeMode: window.wc.isSiteThemeDark ? 1 : 0 };
      console.debug("User theming enabled.");
      let t2, n2 = x();
      switch (console.debug(`User's theme variation: ${n2}`), n2) {
        case 0:
          t2 = false;
          break;
        case 1:
          t2 = true;
          break;
        default:
          window.matchMedia("(prefers-color-scheme: dark)").matches ? t2 = true : window.matchMedia("(prefers-color-scheme: light)").matches ? t2 = false : t2 = window.wc.isSiteThemeDark;
          break;
      }
      return t2 && !e.classList.contains("dark") ? (console.debug("Applying Wowchemy dark theme"), document.body.classList.add("dark")) : !t2 && e.classList.contains("dark") && (console.debug("Applying Wowchemy light theme"), document.body.classList.remove("dark")), { isDarkTheme: t2, themeMode: n2 };
    }
    function h(e2) {
      if (!y()) {
        console.debug("Cannot change theme - user theming disabled.");
        return;
      }
      let t2;
      switch (e2) {
        case 0:
          localStorage.setItem("wcTheme", "0"), t2 = false, console.debug("User changed theme variation to Light.");
          break;
        case 1:
          localStorage.setItem("wcTheme", "1"), t2 = true, console.debug("User changed theme variation to Dark.");
          break;
        default:
          localStorage.setItem("wcTheme", "2"), window.matchMedia("(prefers-color-scheme: dark)").matches ? t2 = true : window.matchMedia("(prefers-color-scheme: light)").matches ? t2 = false : t2 = window.wc.isSiteThemeDark, console.debug("User changed theme variation to Auto.");
          break;
      }
      j(t2, e2);
    }
    function G(e2) {
      let t2 = document.querySelector(".js-set-theme-light"), n2 = document.querySelector(".js-set-theme-dark"), s2 = document.querySelector(".js-set-theme-auto");
      if (t2 === null)
        return;
      switch (e2) {
        case 0:
          t2.classList.add("dropdown-item-active"), n2.classList.remove("dropdown-item-active"), s2.classList.remove("dropdown-item-active");
          break;
        case 1:
          t2.classList.remove("dropdown-item-active"), n2.classList.add("dropdown-item-active"), s2.classList.remove("dropdown-item-active");
          break;
        default:
          t2.classList.remove("dropdown-item-active"), n2.classList.remove("dropdown-item-active"), s2.classList.add("dropdown-item-active");
          break;
      }
    }
    function j(t2, n2 = 2, s2 = false) {
      const o2 = document.querySelector("link[title=hl-light]"), i2 = document.querySelector("link[title=hl-dark]"), a2 = o2 !== null || i2 !== null, r2 = document.querySelector("script[title=mermaid]") !== null;
      G(n2);
      const c2 = new CustomEvent("wcThemeChange", { detail: { isDarkTheme: () => t2 } });
      if (document.dispatchEvent(c2), !s2 && (t2 === false && !e.classList.contains("dark") || t2 === true && e.classList.contains("dark")))
        return;
      t2 === false ? (s2 || (Object.assign(document.body.style, { opacity: 0, visibility: "visible" }), E(document.body, 600)), e.classList.remove("dark"), a2 && (console.debug("Setting HLJS theme to light"), o2 && (o2.disabled = false), i2 && (i2.disabled = true)), r2 && (console.debug("Initializing Mermaid with light theme"), s2 ? window.mermaid.initialize({ startOnLoad: true, theme: "default", securityLevel: "loose" }) : location.reload())) : t2 === true && (s2 || (Object.assign(document.body.style, { opacity: 0, visibility: "visible" }), E(document.body, 600)), e.classList.add("dark"), a2 && (console.debug("Setting HLJS theme to dark"), o2 && (o2.disabled = true), i2 && (i2.disabled = false)), r2 && (console.debug("Initializing Mermaid with dark theme"), s2 ? window.mermaid.initialize({ startOnLoad: true, theme: "dark", securityLevel: "loose" }) : location.reload()));
    }
    function Y(e2) {
      if (!y())
        return;
      const s2 = e2.matches;
      console.debug(`OS dark mode preference changed to ${s2 ? "\u{1F312} on" : "\u2600\uFE0F off"}.`);
      let n2 = x(), t2;
      n2 === 2 && (window.matchMedia("(prefers-color-scheme: dark)").matches ? t2 = true : window.matchMedia("(prefers-color-scheme: light)").matches ? t2 = false : t2 = window.wc.isSiteThemeDark, j(t2, n2));
    }
    console.debug(`Environment: ${f}`);
    function v() {
      let t2 = $("#navbar-main"), e2 = t2.outerHeight();
      return console.debug("Navbar height: " + e2), e2;
    }
    function g(e2, t2 = 0) {
      if (e2 = typeof e2 == "undefined" || typeof e2 == "object" ? decodeURIComponent(window.location.hash) : e2, $(e2).length) {
        e2 = "#" + $.escapeSelector(e2.substring(1));
        let n2 = Math.ceil($(e2).offset().top - v());
        $("body").addClass("scrolling"), $("html, body").animate({ scrollTop: n2 }, t2, function() {
          $("body").removeClass("scrolling");
        });
      } else
        console.debug("Cannot scroll to target `#" + e2 + "`. ID not found!");
    }
    function A() {
      let e2 = $("body"), t2 = e2.data("bs.scrollspy");
      t2 && (t2._config.offset = v(), e2.data("bs.scrollspy", t2), e2.scrollspy("refresh"));
    }
    function K() {
      if (window.history.replaceState) {
        let e2 = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash;
        window.history.replaceState({ path: e2 }, "", e2);
      }
    }
    if (window.addEventListener("hashchange", g), $("#navbar-main li.nav-item a.nav-link, .js-scroll").on("click", function(e2) {
      let t2 = this.hash;
      if (this.pathname === window.location.pathname && t2 && $(t2).length && $(".js-widget-page").length > 0) {
        e2.preventDefault();
        let n2 = Math.ceil($(t2).offset().top - v());
        $("html, body").animate({ scrollTop: n2 }, 800);
      }
    }), $(document).on("click", ".navbar-collapse.show", function(e2) {
      let t2 = $(e2.target).is("a") ? $(e2.target) : $(e2.target).parent();
      t2.is("a") && t2.attr("class") != "dropdown-toggle" && $(this).collapse("hide");
    }), o = {}, n = $("#container-publications"), n.length) {
      n.isotope({ itemSelector: ".isotope-item", percentPosition: true, masonry: { columnWidth: ".grid-sizer" }, filter: function() {
        let e3 = $(this), t2 = !u || e3.text().match(u), n2 = !r || e3.is(r);
        return t2 && n2;
      } });
      let e2 = $(".filter-search").keyup(D(function() {
        u = new RegExp(e2.val(), "gi"), n.isotope();
      }));
      $(".pub-filters").on("change", function() {
        let t2 = $(this), e3 = t2[0].getAttribute("data-filter-group");
        if (o[e3] = this.value, r = w(o), n.isotope(), e3 === "pubtype") {
          let e4 = $(this).val();
          e4.substr(0, 9) === ".pubtype-" ? window.location.hash = e4.substr(9) : window.location.hash = "";
        }
      });
    }
    function D(e2, t2) {
      let n2;
      return t2 = t2 || 100, function() {
        clearTimeout(n2);
        let o2 = arguments, i2 = this;
        function a2() {
          e2.apply(i2, o2);
        }
        n2 = setTimeout(a2, t2);
      };
    }
    function w(e2) {
      let t2 = "";
      for (let n2 in e2)
        t2 += e2[n2];
      return t2;
    }
    function R() {
      if (!n.length)
        return;
      let e2 = window.location.hash.replace("#", ""), t2 = "*";
      e2 != "" && !isNaN(e2) && (t2 = ".pubtype-" + e2);
      let s2 = "pubtype";
      o[s2] = t2, r = w(o), n.isotope(), $(".pubtype-select").val(t2);
    }
    function P() {
      if ($("#map").length) {
        let o2 = $("#map-provider").val(), e2 = $("#map-lat").val(), t2 = $("#map-lng").val(), n2 = parseInt($("#map-zoom").val()), s2 = $("#map-dir").val(), i2 = $("#map-api-key").val();
        if (o2 === "google") {
          let o3 = new GMaps({ div: "#map", lat: e2, lng: t2, zoom: n2, zoomControl: true, zoomControlOpt: { style: "SMALL", position: "TOP_LEFT" }, streetViewControl: false, mapTypeControl: false, gestureHandling: "cooperative" });
          o3.addMarker({ lat: e2, lng: t2, click: function() {
            let n3 = "https://www.google.com/maps/place/" + encodeURIComponent(s2) + "/@" + e2 + "," + t2 + "/";
            window.open(n3, "_blank");
          }, title: s2 });
        } else {
          let a2 = new L.map("map").setView([e2, t2], n2);
          o2 === "mapbox" && i2.length ? L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", { attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xA9 <a href="http://mapbox.com">Mapbox</a>', tileSize: 512, maxZoom: 18, zoomOffset: -1, id: "mapbox/streets-v11", accessToken: i2 }).addTo(a2) : L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(a2);
          let r2 = L.marker([e2, t2]).addTo(a2), c2 = e2 + "," + t2 + "#map=" + n2 + "/" + e2 + "/" + t2 + "&layers=N";
          r2.bindPopup(s2 + '<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route=' + c2 + '">Routing via OpenStreetMap</a></p>');
        }
      }
    }
    function H(e2, t2) {
      f === "production" && $.getJSON("https://api.github.com/repos/" + t2 + "/tags").done(function(t3) {
        let n2 = t3[0];
        $(e2).append(" " + n2.name);
      }).fail(function(e3, t3, n2) {
        let s2 = t3 + ", " + n2;
        console.log("Request Failed: " + s2);
      });
    }
    function l() {
      $("body").hasClass("searching") ? ($("[id=search-query]").blur(), $("body").removeClass("searching compensate-for-scrollbar"), K(), $("#fancybox-style-noscroll").remove()) : (!$("#fancybox-style-noscroll").length && document.body.scrollHeight > window.innerHeight && ($("head").append('<style id="fancybox-style-noscroll">.compensate-for-scrollbar{margin-right:' + (window.innerWidth - document.documentElement.clientWidth) + "px;}</style>"), $("body").addClass("compensate-for-scrollbar")), $("body").addClass("searching"), $(".search-results").css({ opacity: 0, visibility: "visible" }).animate({ opacity: 1 }, 200), $("#search-query").focus());
    }
    function d() {
      $(".carousel").each(function() {
        let e2 = $(".carousel-item", this);
        e2.css("min-height", 0);
        let t2 = Math.max.apply(null, e2.map(function() {
          return $(this).outerHeight();
        }).get());
        e2.css("min-height", t2 + "px");
      });
    }
    function N() {
      $("#TableOfContents").addClass("nav flex-column"), $("#TableOfContents li").addClass("nav-item"), $("#TableOfContents li a").addClass("nav-link"), $("input[type='checkbox'][disabled]").parents("ul").addClass("task-list");
    }
    function W(e2) {
      return Array.prototype.filter.call(e2.parentNode.children, function(t2) {
        return t2 !== e2;
      });
    }
    $(document).ready(function() {
      N();
      let { isDarkTheme: n2, themeMode: s2 } = V();
      j(n2, s2, true), M && hljs.initHighlighting();
      let e2 = document.querySelector(".docs-links .active"), t2 = document.querySelector(".docs-links");
      e2 && t2 && k(t2, e2);
    }), $(window).on("load", function() {
      A();
      let n2 = document.querySelectorAll(".projects-container"), s2 = n2.length;
      window.location.hash && s2 === 0 && g(decodeURIComponent(window.location.hash), 0);
      let o2 = document.querySelector(".docs-toc .nav-link.active"), i2 = document.querySelector(".docs-toc");
      o2 && i2 && k(i2, o2);
      let e2 = {};
      document.body.classList.contains("dark") ? e2.background = "rgba(0,0,0,0.9)" : e2.background = "rgba(255,255,255,0.9)", _("[data-zoomable]", e2);
      let a2 = 0;
      n2.forEach(function(e3, t3) {
        console.debug(`Loading Isotope instance ${t3}`);
        let i3, n3 = e3.closest("section"), s3 = "";
        n3.querySelector(".isotope").classList.contains("js-layout-row") ? s3 = "fitRows" : s3 = "masonry";
        let a3 = n3.querySelector(".default-project-filter"), o3 = "*";
        a3 !== null && (o3 = a3.textContent), console.debug(`Default Isotope filter: ${o3}`), imagesLoaded(e3, function() {
          i3 = new Isotope(e3, { itemSelector: ".isotope-item", layoutMode: s3, masonry: { gutter: 20 }, filter: o3 });
          let t4 = n3.querySelectorAll(".project-filters a");
          t4.forEach((e4) => e4.addEventListener("click", (t5) => {
            t5.preventDefault();
            let n4 = e4.getAttribute("data-filter");
            console.debug(`Updating Isotope filter to ${n4}`), i3.arrange({ filter: n4 }), e4.classList.remove("active"), e4.classList.add("active");
            let s4 = W(e4);
            s4.forEach((e5) => {
              e5.classList.remove("active"), e5.classList.remove("all");
            });
          })), r2();
        });
      });
      function r2() {
        a2++, a2 === s2 && (console.debug(`All Portfolio Isotope instances loaded.`), window.location.hash && g(decodeURIComponent(window.location.hash), 0));
      }
      $(".pub-filters-select") && R(), $(".js-cite-modal").click(function(e3) {
        e3.preventDefault();
        let t3 = $(this).attr("data-filename"), n3 = $("#modal");
        n3.find(".modal-body code").load(t3, function(e4, n4, s3) {
          if (n4 == "error") {
            let e5 = "Error: ";
            $("#modal-error").html(e5 + s3.status + " " + s3.statusText);
          } else
            $(".js-download-cite").attr("href", t3);
        }), n3.modal("show");
      }), $(".js-copy-cite").click(function(e3) {
        e3.preventDefault();
        let t3 = document.createRange(), n3 = document.querySelector("#modal .modal-body");
        t3.selectNode(n3), window.getSelection().addRange(t3);
        try {
          document.execCommand("copy");
        } catch {
          console.log("Error: citation copy failed.");
        }
        window.getSelection().removeRange(t3);
      }), P();
      let t2 = ".js-github-release";
      $(t2).length > 0 && H(t2, $(t2).data("repo")), document.addEventListener("keyup", (e3) => {
        if (e3.code === "Escape") {
          const e4 = document.body;
          e4.classList.contains("searching") && l();
        }
        if (e3.key === "/") {
          let t3 = document.hasFocus() && document.activeElement !== document.body && document.activeElement !== document.documentElement && document.activeElement || null, n3 = t3 instanceof HTMLInputElement || t3 instanceof HTMLTextAreaElement;
          p && !n3 && (e3.preventDefault(), l());
        }
      }), p && $(".js-search").click(function(e3) {
        e3.preventDefault(), l();
      }), $('[data-toggle="tooltip"]').tooltip();
    }), c = document.querySelector(".js-set-theme-light"), m = document.querySelector(".js-set-theme-dark"), b = document.querySelector(".js-set-theme-auto"), c && m && b && (c.addEventListener("click", (e2) => {
      e2.preventDefault(), h(0);
    }), m.addEventListener("click", (e2) => {
      e2.preventDefault(), h(1);
    }), b.addEventListener("click", (e2) => {
      e2.preventDefault(), h(2);
    })), C = window.matchMedia("(prefers-color-scheme: dark)"), C.addEventListener("change", (e2) => {
      Y(e2);
    }), window.addEventListener("load", d), window.addEventListener("resize", d), window.addEventListener("orientationchange", d), $("body").on("mouseenter mouseleave", ".dropdown", function(e2) {
      var t2 = $(e2.target).closest(".dropdown"), n2 = $(".dropdown-menu", t2);
      t2.addClass("show"), n2.addClass("show"), setTimeout(function() {
        t2[t2.is(":hover") ? "addClass" : "removeClass"]("show"), n2[t2.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 300);
    }), $(window).resize(function() {
      clearTimeout(O), O = setTimeout(A, 200);
    });
  })();
})();
/*! Copyright 2016-present George Cushen (https://georgecushen.com/) */
/*! License: https://github.com/wowchemy/wowchemy-hugo-modules/blob/main/LICENSE.md */
/*! Wowchemy v5.1.0 | https://wowchemy.com/ */
