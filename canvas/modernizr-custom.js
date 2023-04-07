/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-canvas-setclasses !*/
!(function (e, n, a) {
  function o() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : r
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function s(e) {
    var n = l.className,
      a = Modernizr._config.classPrefix || "";
    if ((r && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp("(^|\\s)" + a + "no-js(\\s|$)");
      n = n.replace(o, "$1" + a + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + a + e.join(" " + a)),
      r ? (l.className.baseVal = n) : (l.className = n));
  }
  function t(e, n) {
    return typeof e === n;
  }
  function c() {
    var e, n, a, o, s, c, l;
    for (var r in u)
      if (u.hasOwnProperty(r)) {
        if (
          ((e = []),
          (n = u[r]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (a = 0; a < n.options.aliases.length; a++)
            e.push(n.options.aliases[a].toLowerCase());
        for (o = t(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)
          (c = e[s]),
            (l = c.split(".")),
            1 === l.length
              ? (Modernizr[l[0]] = o)
              : (!Modernizr[l[0]] ||
                  Modernizr[l[0]] instanceof Boolean ||
                  (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = o)),
            i.push((o ? "" : "no-") + l.join("-"));
      }
  }
  var i = [],
    l = n.documentElement,
    r = "svg" === l.nodeName.toLowerCase(),
    u = [],
    p = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var a = this;
        setTimeout(function () {
          n(a[e]);
        }, 0);
      },
      addTest: function (e, n, a) {
        u.push({ name: e, fn: n, options: a });
      },
      addAsyncTest: function (e) {
        u.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = p),
    (Modernizr = new Modernizr()),
    Modernizr.addTest("canvas", function () {
      var e = o("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    Modernizr.addTest("audio", function () {
      var e = o("audio"),
        n = !1;
      try {
        (n = !!e.canPlayType),
          n &&
            ((n = new Boolean(n)),
            (n.ogg = e
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, "")),
            (n.mp3 = e
              .canPlayType('audio/mpeg; codecs="mp3"')
              .replace(/^no$/, "")),
            (n.opus =
              e.canPlayType('audio/ogg; codecs="opus"') ||
              e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
            (n.wav = e
              .canPlayType('audio/wav; codecs="1"')
              .replace(/^no$/, "")),
            (n.m4a = (
              e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
            ).replace(/^no$/, "")));
      } catch (a) {}
      return n;
    }),
    c(),
    s(i),
    delete p.addTest,
    delete p.addAsyncTest;
  for (var f = 0; f < Modernizr._q.length; f++) Modernizr._q[f]();
  e.Modernizr = Modernizr;
})(window, document);

const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");

context.fillRect(0, 0, 100, 100);
