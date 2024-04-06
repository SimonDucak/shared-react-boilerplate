import * as w from "react";
import Qe, { forwardRef as zi, useContext as Li, Children as Bi, isValidElement as Kt, cloneElement as Ht, useState as Wi } from "react";
function Ui(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Xe(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Lr = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function Yi() {
  if (wn)
    return Ot;
  wn = 1;
  var e = Qe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, l) {
    var f, m = {}, p = null, x = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (x = u.ref);
    for (f in u)
      n.call(u, f) && !i.hasOwnProperty(f) && (m[f] = u[f]);
    if (c && c.defaultProps)
      for (f in u = c.defaultProps, u)
        m[f] === void 0 && (m[f] = u[f]);
    return { $$typeof: t, type: c, key: p, ref: x, props: m, _owner: o.current };
  }
  return Ot.Fragment = r, Ot.jsx = a, Ot.jsxs = a, Ot;
}
var St = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function qi() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Qe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g = Symbol.iterator, d = "@@iterator";
    function h(s) {
      if (s === null || typeof s != "object")
        return null;
      var b = g && s[g] || s[d];
      return typeof b == "function" ? b : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(s) {
      {
        for (var b = arguments.length, O = new Array(b > 1 ? b - 1 : 0), I = 1; I < b; I++)
          O[I - 1] = arguments[I];
        $("error", s, O);
      }
    }
    function $(s, b, O) {
      {
        var I = _.ReactDebugCurrentFrame, K = I.getStackAddendum();
        K !== "" && (b += "%s", O = O.concat([K]));
        var ae = O.map(function(q) {
          return String(q);
        });
        ae.unshift("Warning: " + b), Function.prototype.apply.call(console[s], console, ae);
      }
    }
    var C = !1, y = !1, N = !1, k = !1, se = !1, ce;
    ce = Symbol.for("react.module.reference");
    function ne(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === i || se || s === o || s === l || s === f || k || s === x || C || y || N || typeof s == "object" && s !== null && (s.$$typeof === p || s.$$typeof === m || s.$$typeof === a || s.$$typeof === c || s.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === ce || s.getModuleId !== void 0));
    }
    function G(s, b, O) {
      var I = s.displayName;
      if (I)
        return I;
      var K = b.displayName || b.name || "";
      return K !== "" ? O + "(" + K + ")" : O;
    }
    function oe(s) {
      return s.displayName || "Context";
    }
    function J(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var b = s;
            return oe(b) + ".Consumer";
          case a:
            var O = s;
            return oe(O._context) + ".Provider";
          case u:
            return G(s, s.render, "ForwardRef");
          case m:
            var I = s.displayName || null;
            return I !== null ? I : J(s.type) || "Memo";
          case p: {
            var K = s, ae = K._payload, q = K._init;
            try {
              return J(q(ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, pe = 0, ie, Ee, le, Fe, E, S, L;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function j() {
      {
        if (pe === 0) {
          ie = console.log, Ee = console.info, le = console.warn, Fe = console.error, E = console.group, S = console.groupCollapsed, L = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        pe++;
      }
    }
    function W() {
      {
        if (pe--, pe === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, s, {
              value: ie
            }),
            info: Z({}, s, {
              value: Ee
            }),
            warn: Z({}, s, {
              value: le
            }),
            error: Z({}, s, {
              value: Fe
            }),
            group: Z({}, s, {
              value: E
            }),
            groupCollapsed: Z({}, s, {
              value: S
            }),
            groupEnd: Z({}, s, {
              value: L
            })
          });
        }
        pe < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = _.ReactCurrentDispatcher, D;
    function V(s, b, O) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (K) {
            var I = K.stack.trim().match(/\n( *(at )?)/);
            D = I && I[1] || "";
          }
        return `
` + D + s;
      }
    }
    var M = !1, U;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      U = new ve();
    }
    function T(s, b) {
      if (!s || M)
        return "";
      {
        var O = U.get(s);
        if (O !== void 0)
          return O;
      }
      var I;
      M = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ae;
      ae = A.current, A.current = null, j();
      try {
        if (b) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (Ye) {
              I = Ye;
            }
            Reflect.construct(s, [], q);
          } else {
            try {
              q.call();
            } catch (Ye) {
              I = Ye;
            }
            s.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ye) {
            I = Ye;
          }
          s();
        }
      } catch (Ye) {
        if (Ye && I && typeof Ye.stack == "string") {
          for (var Y = Ye.stack.split(`
`), Oe = I.stack.split(`
`), me = Y.length - 1, ge = Oe.length - 1; me >= 1 && ge >= 0 && Y[me] !== Oe[ge]; )
            ge--;
          for (; me >= 1 && ge >= 0; me--, ge--)
            if (Y[me] !== Oe[ge]) {
              if (me !== 1 || ge !== 1)
                do
                  if (me--, ge--, ge < 0 || Y[me] !== Oe[ge]) {
                    var ke = `
` + Y[me].replace(" at new ", " at ");
                    return s.displayName && ke.includes("<anonymous>") && (ke = ke.replace("<anonymous>", s.displayName)), typeof s == "function" && U.set(s, ke), ke;
                  }
                while (me >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        M = !1, A.current = ae, W(), Error.prepareStackTrace = K;
      }
      var it = s ? s.displayName || s.name : "", Cn = it ? V(it) : "";
      return typeof s == "function" && U.set(s, Cn), Cn;
    }
    function _e(s, b, O) {
      return T(s, !1);
    }
    function P(s) {
      var b = s.prototype;
      return !!(b && b.isReactComponent);
    }
    function we(s, b, O) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return T(s, P(s));
      if (typeof s == "string")
        return V(s);
      switch (s) {
        case l:
          return V("Suspense");
        case f:
          return V("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            return _e(s.render);
          case m:
            return we(s.type, b, O);
          case p: {
            var I = s, K = I._payload, ae = I._init;
            try {
              return we(ae(K), b, O);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, Ze = {}, Vt = _.ReactDebugCurrentFrame;
    function rt(s) {
      if (s) {
        var b = s._owner, O = we(s.type, s._source, b ? b.type : null);
        Vt.setExtraStackFrame(O);
      } else
        Vt.setExtraStackFrame(null);
    }
    function bt(s, b, O, I, K) {
      {
        var ae = Function.call.bind(Ve);
        for (var q in s)
          if (ae(s, q)) {
            var Y = void 0;
            try {
              if (typeof s[q] != "function") {
                var Oe = Error((I || "React class") + ": " + O + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              Y = s[q](b, q, I, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (me) {
              Y = me;
            }
            Y && !(Y instanceof Error) && (rt(K), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", O, q, typeof Y), rt(null)), Y instanceof Error && !(Y.message in Ze) && (Ze[Y.message] = !0, rt(K), R("Failed %s type: %s", O, Y.message), rt(null));
          }
      }
    }
    var Et = Array.isArray;
    function xt(s) {
      return Et(s);
    }
    function Sr(s) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, O = b && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return O;
      }
    }
    function nt(s) {
      try {
        return Ge(s), !1;
      } catch {
        return !0;
      }
    }
    function Ge(s) {
      return "" + s;
    }
    function zt(s) {
      if (nt(s))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(s)), Ge(s);
    }
    var Ke = _.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, z, _t, Tt;
    Tt = {};
    function Lt(s) {
      if (Ve.call(s, "ref")) {
        var b = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function En(s) {
      if (Ve.call(s, "key")) {
        var b = Object.getOwnPropertyDescriptor(s, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Ci(s, b) {
      if (typeof s.ref == "string" && Ke.current && b && Ke.current.stateNode !== b) {
        var O = J(Ke.current.type);
        Tt[O] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(Ke.current.type), s.ref), Tt[O] = !0);
      }
    }
    function wi(s, b) {
      {
        var O = function() {
          z || (z = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        O.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function Pi(s, b) {
      {
        var O = function() {
          _t || (_t = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        O.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var $i = function(s, b, O, I, K, ae, q) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: b,
        ref: O,
        props: q,
        // Record the component responsible for creating this element.
        _owner: ae
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function ki(s, b, O, I, K) {
      {
        var ae, q = {}, Y = null, Oe = null;
        O !== void 0 && (zt(O), Y = "" + O), En(b) && (zt(b.key), Y = "" + b.key), Lt(b) && (Oe = b.ref, Ci(b, K));
        for (ae in b)
          Ve.call(b, ae) && !Rr.hasOwnProperty(ae) && (q[ae] = b[ae]);
        if (s && s.defaultProps) {
          var me = s.defaultProps;
          for (ae in me)
            q[ae] === void 0 && (q[ae] = me[ae]);
        }
        if (Y || Oe) {
          var ge = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          Y && wi(q, ge), Oe && Pi(q, ge);
        }
        return $i(s, Y, Oe, K, I, Ke.current, q);
      }
    }
    var Cr = _.ReactCurrentOwner, xn = _.ReactDebugCurrentFrame;
    function ot(s) {
      if (s) {
        var b = s._owner, O = we(s.type, s._source, b ? b.type : null);
        xn.setExtraStackFrame(O);
      } else
        xn.setExtraStackFrame(null);
    }
    var wr;
    wr = !1;
    function Pr(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function _n() {
      {
        if (Cr.current) {
          var s = J(Cr.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function ji(s) {
      {
        if (s !== void 0) {
          var b = s.fileName.replace(/^.*[\\\/]/, ""), O = s.lineNumber;
          return `

Check your code at ` + b + ":" + O + ".";
        }
        return "";
      }
    }
    var Tn = {};
    function Ni(s) {
      {
        var b = _n();
        if (!b) {
          var O = typeof s == "string" ? s : s.displayName || s.name;
          O && (b = `

Check the top-level render call using <` + O + ">.");
        }
        return b;
      }
    }
    function On(s, b) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var O = Ni(b);
        if (Tn[O])
          return;
        Tn[O] = !0;
        var I = "";
        s && s._owner && s._owner !== Cr.current && (I = " It was passed a child from " + J(s._owner.type) + "."), ot(s), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, I), ot(null);
      }
    }
    function Sn(s, b) {
      {
        if (typeof s != "object")
          return;
        if (xt(s))
          for (var O = 0; O < s.length; O++) {
            var I = s[O];
            Pr(I) && On(I, b);
          }
        else if (Pr(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var K = h(s);
          if (typeof K == "function" && K !== s.entries)
            for (var ae = K.call(s), q; !(q = ae.next()).done; )
              Pr(q.value) && On(q.value, b);
        }
      }
    }
    function Ai(s) {
      {
        var b = s.type;
        if (b == null || typeof b == "string")
          return;
        var O;
        if (typeof b == "function")
          O = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === m))
          O = b.propTypes;
        else
          return;
        if (O) {
          var I = J(b);
          bt(O, s.props, "prop", I, s);
        } else if (b.PropTypes !== void 0 && !wr) {
          wr = !0;
          var K = J(b);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ii(s) {
      {
        for (var b = Object.keys(s.props), O = 0; O < b.length; O++) {
          var I = b[O];
          if (I !== "children" && I !== "key") {
            ot(s), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), ot(null);
            break;
          }
        }
        s.ref !== null && (ot(s), R("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    function Rn(s, b, O, I, K, ae) {
      {
        var q = ne(s);
        if (!q) {
          var Y = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = ji(K);
          Oe ? Y += Oe : Y += _n();
          var me;
          s === null ? me = "null" : xt(s) ? me = "array" : s !== void 0 && s.$$typeof === t ? (me = "<" + (J(s.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : me = typeof s, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", me, Y);
        }
        var ge = ki(s, b, O, K, ae);
        if (ge == null)
          return ge;
        if (q) {
          var ke = b.children;
          if (ke !== void 0)
            if (I)
              if (xt(ke)) {
                for (var it = 0; it < ke.length; it++)
                  Sn(ke[it], s);
                Object.freeze && Object.freeze(ke);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Sn(ke, s);
        }
        return s === n ? Ii(ge) : Ai(ge), ge;
      }
    }
    function Mi(s, b, O) {
      return Rn(s, b, O, !0);
    }
    function Di(s, b, O) {
      return Rn(s, b, O, !1);
    }
    var Fi = Di, Vi = Mi;
    St.Fragment = n, St.jsx = Fi, St.jsxs = Vi;
  }()), St;
}
process.env.NODE_ENV === "production" ? Lr.exports = Yi() : Lr.exports = qi();
var Se = Lr.exports;
const Gi = {
  black: "#000",
  white: "#fff"
}, Pt = Gi, Ki = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, at = Ki, Hi = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, st = Hi, Xi = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ct = Xi, Ji = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, ut = Ji, Zi = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, lt = Zi, Qi = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Rt = Qi, ea = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, ta = ea;
function $t(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" })), Po = "$$material";
function B() {
  return B = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, B.apply(this, arguments);
}
function Le(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function $o(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var na = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, oa = /* @__PURE__ */ $o(
  function(e) {
    return na.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function ia(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function aa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var sa = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(aa(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = ia(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Te = "-ms-", tr = "-moz-", H = "-webkit-", Zr = "comm", Qr = "rule", en = "decl", ca = "@import", ko = "@keyframes", ua = "@layer", la = Math.abs, ir = String.fromCharCode, fa = Object.assign;
function da(e, t) {
  return xe(e, 0) ^ 45 ? (((t << 2 ^ xe(e, 0)) << 2 ^ xe(e, 1)) << 2 ^ xe(e, 2)) << 2 ^ xe(e, 3) : 0;
}
function jo(e) {
  return e.trim();
}
function pa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function X(e, t, r) {
  return e.replace(t, r);
}
function Br(e, t) {
  return e.indexOf(t);
}
function xe(e, t) {
  return e.charCodeAt(t) | 0;
}
function kt(e, t, r) {
  return e.slice(t, r);
}
function Be(e) {
  return e.length;
}
function tn(e) {
  return e.length;
}
function Bt(e, t) {
  return t.push(e), e;
}
function ma(e, t) {
  return e.map(t).join("");
}
var ar = 1, pt = 1, No = 0, Ce = 0, be = 0, ht = "";
function sr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: ar, column: pt, length: a, return: "" };
}
function Ct(e, t) {
  return fa(sr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ha() {
  return be;
}
function ya() {
  return be = Ce > 0 ? xe(ht, --Ce) : 0, pt--, be === 10 && (pt = 1, ar--), be;
}
function $e() {
  return be = Ce < No ? xe(ht, Ce++) : 0, pt++, be === 10 && (pt = 1, ar++), be;
}
function We() {
  return xe(ht, Ce);
}
function Xt() {
  return Ce;
}
function At(e, t) {
  return kt(ht, e, t);
}
function jt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ao(e) {
  return ar = pt = 1, No = Be(ht = e), Ce = 0, [];
}
function Io(e) {
  return ht = "", e;
}
function Jt(e) {
  return jo(At(Ce - 1, Wr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function va(e) {
  for (; (be = We()) && be < 33; )
    $e();
  return jt(e) > 2 || jt(be) > 3 ? "" : " ";
}
function ga(e, t) {
  for (; --t && $e() && !(be < 48 || be > 102 || be > 57 && be < 65 || be > 70 && be < 97); )
    ;
  return At(e, Xt() + (t < 6 && We() == 32 && $e() == 32));
}
function Wr(e) {
  for (; $e(); )
    switch (be) {
      case e:
        return Ce;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wr(be);
        break;
      case 40:
        e === 41 && Wr(e);
        break;
      case 92:
        $e();
        break;
    }
  return Ce;
}
function ba(e, t) {
  for (; $e() && e + be !== 57; )
    if (e + be === 84 && We() === 47)
      break;
  return "/*" + At(t, Ce - 1) + "*" + ir(e === 47 ? e : $e());
}
function Ea(e) {
  for (; !jt(We()); )
    $e();
  return At(e, Ce);
}
function xa(e) {
  return Io(Zt("", null, null, null, [""], e = Ao(e), 0, [0], e));
}
function Zt(e, t, r, n, o, i, a, c, u) {
  for (var l = 0, f = 0, m = a, p = 0, x = 0, g = 0, d = 1, h = 1, _ = 1, R = 0, $ = "", C = o, y = i, N = n, k = $; h; )
    switch (g = R, R = $e()) {
      case 40:
        if (g != 108 && xe(k, m - 1) == 58) {
          Br(k += X(Jt(R), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Jt(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += va(g);
        break;
      case 92:
        k += ga(Xt() - 1, 7);
        continue;
      case 47:
        switch (We()) {
          case 42:
          case 47:
            Bt(_a(ba($e(), Xt()), t, r), u);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * d:
        c[l++] = Be(k) * _;
      case 125 * d:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            h = 0;
          case 59 + f:
            _ == -1 && (k = X(k, /\f/g, "")), x > 0 && Be(k) - m && Bt(x > 32 ? kn(k + ";", n, r, m - 1) : kn(X(k, " ", "") + ";", n, r, m - 2), u);
            break;
          case 59:
            k += ";";
          default:
            if (Bt(N = $n(k, t, r, l, f, o, c, $, C = [], y = [], m), i), R === 123)
              if (f === 0)
                Zt(k, t, N, N, C, i, m, c, y);
              else
                switch (p === 99 && xe(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Zt(e, N, N, n && Bt($n(e, N, N, 0, 0, o, c, $, o, C = [], m), y), o, y, m, c, n ? C : y);
                    break;
                  default:
                    Zt(k, N, N, N, [""], y, 0, c, y);
                }
        }
        l = f = x = 0, d = _ = 1, $ = k = "", m = a;
        break;
      case 58:
        m = 1 + Be(k), x = g;
      default:
        if (d < 1) {
          if (R == 123)
            --d;
          else if (R == 125 && d++ == 0 && ya() == 125)
            continue;
        }
        switch (k += ir(R), R * d) {
          case 38:
            _ = f > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            c[l++] = (Be(k) - 1) * _, _ = 1;
            break;
          case 64:
            We() === 45 && (k += Jt($e())), p = We(), f = m = Be($ = k += Ea(Xt())), R++;
            break;
          case 45:
            g === 45 && Be(k) == 2 && (d = 0);
        }
    }
  return i;
}
function $n(e, t, r, n, o, i, a, c, u, l, f) {
  for (var m = o - 1, p = o === 0 ? i : [""], x = tn(p), g = 0, d = 0, h = 0; g < n; ++g)
    for (var _ = 0, R = kt(e, m + 1, m = la(d = a[g])), $ = e; _ < x; ++_)
      ($ = jo(d > 0 ? p[_] + " " + R : X(R, /&\f/g, p[_]))) && (u[h++] = $);
  return sr(e, t, r, o === 0 ? Qr : c, u, l, f);
}
function _a(e, t, r) {
  return sr(e, t, r, Zr, ir(ha()), kt(e, 2, -2), 0);
}
function kn(e, t, r, n) {
  return sr(e, t, r, en, kt(e, 0, n), kt(e, n + 1, -1), n);
}
function ft(e, t) {
  for (var r = "", n = tn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Ta(e, t, r, n) {
  switch (e.type) {
    case ua:
      if (e.children.length)
        break;
    case ca:
    case en:
      return e.return = e.return || e.value;
    case Zr:
      return "";
    case ko:
      return e.return = e.value + "{" + ft(e.children, n) + "}";
    case Qr:
      e.value = e.props.join(",");
  }
  return Be(r = ft(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Oa(e) {
  var t = tn(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function Sa(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ra = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = We(), o === 38 && i === 12 && (r[n] = 1), !jt(i); )
    $e();
  return At(t, Ce);
}, Ca = function(t, r) {
  var n = -1, o = 44;
  do
    switch (jt(o)) {
      case 0:
        o === 38 && We() === 12 && (r[n] = 1), t[n] += Ra(Ce - 1, r, n);
        break;
      case 2:
        t[n] += Jt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = We() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += ir(o);
    }
  while (o = $e());
  return t;
}, wa = function(t, r) {
  return Io(Ca(Ao(t), r));
}, jn = /* @__PURE__ */ new WeakMap(), Pa = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !jn.get(n)) && !o) {
      jn.set(t, !0);
      for (var i = [], a = wa(r, i), c = n.props, u = 0, l = 0; u < a.length; u++)
        for (var f = 0; f < c.length; f++, l++)
          t.props[l] = i[u] ? a[u].replace(/&\f/g, c[f]) : c[f] + " " + a[u];
    }
  }
}, $a = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, ka = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", ja = function(t) {
  return t.type === "comm" && t.children.indexOf(ka) > -1;
}, Na = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = !!r.parent, c = a ? r.parent.children : (
          // global rule at the root level
          o
        ), u = c.length - 1; u >= 0; u--) {
          var l = c[u];
          if (l.line < r.line)
            break;
          if (l.column < r.column) {
            if (ja(l))
              return;
            break;
          }
        }
        i.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Mo = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Aa = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Mo(r[n]))
      return !0;
  return !1;
}, Nn = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Ia = function(t, r, n) {
  Mo(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Nn(t)) : Aa(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Nn(t)));
};
function Do(e, t) {
  switch (da(e, t)) {
    case 5103:
      return H + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return H + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return H + e + tr + e + Te + e + e;
    case 6828:
    case 4268:
      return H + e + Te + e + e;
    case 6165:
      return H + e + Te + "flex-" + e + e;
    case 5187:
      return H + e + X(e, /(\w+).+(:[^]+)/, H + "box-$1$2" + Te + "flex-$1$2") + e;
    case 5443:
      return H + e + Te + "flex-item-" + X(e, /flex-|-self/, "") + e;
    case 4675:
      return H + e + Te + "flex-line-pack" + X(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return H + e + Te + X(e, "shrink", "negative") + e;
    case 5292:
      return H + e + Te + X(e, "basis", "preferred-size") + e;
    case 6060:
      return H + "box-" + X(e, "-grow", "") + H + e + Te + X(e, "grow", "positive") + e;
    case 4554:
      return H + X(e, /([^-])(transform)/g, "$1" + H + "$2") + e;
    case 6187:
      return X(X(X(e, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return X(e, /(image-set\([^]*)/, H + "$1$`$1");
    case 4968:
      return X(X(e, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + Te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return X(e, /(.+)-inline(.+)/, H + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Be(e) - 1 - t > 6)
        switch (xe(e, t + 1)) {
          case 109:
            if (xe(e, t + 4) !== 45)
              break;
          case 102:
            return X(e, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + tr + (xe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Br(e, "stretch") ? Do(X(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (xe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (xe(e, Be(e) - 3 - (~Br(e, "!important") && 10))) {
        case 107:
          return X(e, ":", ":" + H) + e;
        case 101:
          return X(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + H + (xe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + Te + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (xe(e, t + 11)) {
        case 114:
          return H + e + Te + X(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return H + e + Te + X(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return H + e + Te + X(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return H + e + Te + e + e;
  }
  return e;
}
var Ma = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case en:
        t.return = Do(t.value, t.length);
        break;
      case ko:
        return ft([Ct(t, {
          value: X(t.value, "@", "@" + H)
        })], o);
      case Qr:
        if (t.length)
          return ma(t.props, function(i) {
            switch (pa(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ft([Ct(t, {
                  props: [X(i, /:(read-\w+)/, ":" + tr + "$1")]
                })], o);
              case "::placeholder":
                return ft([Ct(t, {
                  props: [X(i, /:(plac\w+)/, ":" + H + "input-$1")]
                }), Ct(t, {
                  props: [X(i, /:(plac\w+)/, ":" + tr + "$1")]
                }), Ct(t, {
                  props: [X(i, /:(plac\w+)/, Te + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Da = [Ma], Fo = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(d) {
      var h = d.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Da;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(d) {
      for (var h = d.getAttribute("data-emotion").split(" "), _ = 1; _ < h.length; _++)
        i[h[_]] = !0;
      c.push(d);
    }
  );
  var u, l = [Pa, $a];
  process.env.NODE_ENV !== "production" && l.push(Na({
    get compat() {
      return g.compat;
    }
  }), Ia);
  {
    var f, m = [Ta, process.env.NODE_ENV !== "production" ? function(d) {
      d.root || (d.return ? f.insert(d.return) : d.value && d.type !== Zr && f.insert(d.value + "{}"));
    } : Sa(function(d) {
      f.insert(d);
    })], p = Oa(l.concat(o, m)), x = function(h) {
      return ft(xa(h), p);
    };
    u = function(h, _, R, $) {
      f = R, process.env.NODE_ENV !== "production" && _.map !== void 0 && (f = {
        insert: function(y) {
          R.insert(y + _.map);
        }
      }), x(h ? h + "{" + _.styles + "}" : _.styles), $ && (g.inserted[_.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new sa({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return g.sheet.hydrate(c), g;
}, Wt = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An;
function Fa() {
  if (An)
    return Q;
  An = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function $(y) {
    if (typeof y == "object" && y !== null) {
      var N = y.$$typeof;
      switch (N) {
        case t:
          switch (y = y.type, y) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case m:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case f:
                case g:
                case x:
                case a:
                  return y;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function C(y) {
    return $(y) === l;
  }
  return Q.AsyncMode = u, Q.ConcurrentMode = l, Q.ContextConsumer = c, Q.ContextProvider = a, Q.Element = t, Q.ForwardRef = f, Q.Fragment = n, Q.Lazy = g, Q.Memo = x, Q.Portal = r, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = m, Q.isAsyncMode = function(y) {
    return C(y) || $(y) === u;
  }, Q.isConcurrentMode = C, Q.isContextConsumer = function(y) {
    return $(y) === c;
  }, Q.isContextProvider = function(y) {
    return $(y) === a;
  }, Q.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Q.isForwardRef = function(y) {
    return $(y) === f;
  }, Q.isFragment = function(y) {
    return $(y) === n;
  }, Q.isLazy = function(y) {
    return $(y) === g;
  }, Q.isMemo = function(y) {
    return $(y) === x;
  }, Q.isPortal = function(y) {
    return $(y) === r;
  }, Q.isProfiler = function(y) {
    return $(y) === i;
  }, Q.isStrictMode = function(y) {
    return $(y) === o;
  }, Q.isSuspense = function(y) {
    return $(y) === m;
  }, Q.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === l || y === i || y === o || y === m || y === p || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === x || y.$$typeof === a || y.$$typeof === c || y.$$typeof === f || y.$$typeof === h || y.$$typeof === _ || y.$$typeof === R || y.$$typeof === d);
  }, Q.typeOf = $, Q;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Va() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function $(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === n || T === l || T === i || T === o || T === m || T === p || typeof T == "object" && T !== null && (T.$$typeof === g || T.$$typeof === x || T.$$typeof === a || T.$$typeof === c || T.$$typeof === f || T.$$typeof === h || T.$$typeof === _ || T.$$typeof === R || T.$$typeof === d);
    }
    function C(T) {
      if (typeof T == "object" && T !== null) {
        var _e = T.$$typeof;
        switch (_e) {
          case t:
            var P = T.type;
            switch (P) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case m:
                return P;
              default:
                var we = P && P.$$typeof;
                switch (we) {
                  case c:
                  case f:
                  case g:
                  case x:
                  case a:
                    return we;
                  default:
                    return _e;
                }
            }
          case r:
            return _e;
        }
      }
    }
    var y = u, N = l, k = c, se = a, ce = t, ne = f, G = n, oe = g, J = x, Z = r, pe = i, ie = o, Ee = m, le = !1;
    function Fe(T) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(T) || C(T) === u;
    }
    function E(T) {
      return C(T) === l;
    }
    function S(T) {
      return C(T) === c;
    }
    function L(T) {
      return C(T) === a;
    }
    function F(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function j(T) {
      return C(T) === f;
    }
    function W(T) {
      return C(T) === n;
    }
    function A(T) {
      return C(T) === g;
    }
    function D(T) {
      return C(T) === x;
    }
    function V(T) {
      return C(T) === r;
    }
    function M(T) {
      return C(T) === i;
    }
    function U(T) {
      return C(T) === o;
    }
    function ve(T) {
      return C(T) === m;
    }
    ee.AsyncMode = y, ee.ConcurrentMode = N, ee.ContextConsumer = k, ee.ContextProvider = se, ee.Element = ce, ee.ForwardRef = ne, ee.Fragment = G, ee.Lazy = oe, ee.Memo = J, ee.Portal = Z, ee.Profiler = pe, ee.StrictMode = ie, ee.Suspense = Ee, ee.isAsyncMode = Fe, ee.isConcurrentMode = E, ee.isContextConsumer = S, ee.isContextProvider = L, ee.isElement = F, ee.isForwardRef = j, ee.isFragment = W, ee.isLazy = A, ee.isMemo = D, ee.isPortal = V, ee.isProfiler = M, ee.isStrictMode = U, ee.isSuspense = ve, ee.isValidElementType = $, ee.typeOf = C;
  }()), ee;
}
var Mn;
function rn() {
  return Mn || (Mn = 1, process.env.NODE_ENV === "production" ? Wt.exports = Fa() : Wt.exports = Va()), Wt.exports;
}
var Vo = rn(), za = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, La = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, zo = {};
zo[Vo.ForwardRef] = za;
zo[Vo.Memo] = La;
var Ba = !0;
function nn(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var cr = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ba === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ur = function(t, r, n) {
  cr(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Wa(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ua = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Dn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ya = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", qa = /[A-Z]|^ms/g, Lo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, on = function(t) {
  return t.charCodeAt(1) === 45;
}, Fn = function(t) {
  return t != null && typeof t != "boolean";
}, $r = /* @__PURE__ */ $o(function(e) {
  return on(e) ? e : e.replace(qa, "-$&").toLowerCase();
}), rr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Lo, function(n, o, i) {
          return ze = {
            name: o,
            styles: i,
            next: ze
          }, o;
        });
  }
  return Ua[t] !== 1 && !on(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Ga = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Ka = ["normal", "none", "initial", "inherit", "unset"], Ha = rr, Xa = /^-ms-/, Ja = /-(.)/g, Vn = {};
  rr = function(t, r) {
    if (t === "content" && (typeof r != "string" || Ka.indexOf(r) === -1 && !Ga.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = Ha(t, r);
    return n !== "" && !on(t) && t.indexOf("-") !== -1 && Vn[t] === void 0 && (Vn[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Xa, "ms-").replace(Ja, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var Bo = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Nt(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Bo);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return ze = {
          name: r.name,
          styles: r.styles,
          next: ze
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            ze = {
              name: n.name,
              styles: n.styles,
              next: ze
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return Za(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = ze, a = r(e);
        return ze = i, Nt(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], u = r.replace(Lo, function(f, m, p) {
          var x = "animation" + c.length;
          return c.push("const " + x + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + x + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var l = t[r];
  return l !== void 0 ? l : r;
}
function Za(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Nt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : Fn(a) && (n += $r(i) + ":" + rr(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Bo);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Fn(a[c]) && (n += $r(i) + ":" + rr(i, a[c]) + ";");
        else {
          var u = Nt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += $r(i) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Ya), n += i + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var zn = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Wo;
process.env.NODE_ENV !== "production" && (Wo = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ze, mt = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  ze = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Nt(n, r, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(Dn), i += a[0]);
  for (var c = 1; c < t.length; c++)
    i += Nt(n, r, t[c]), o && (process.env.NODE_ENV !== "production" && a[c] === void 0 && console.error(Dn), i += a[c]);
  var u;
  process.env.NODE_ENV !== "production" && (i = i.replace(Wo, function(p) {
    return u = p, "";
  })), zn.lastIndex = 0;
  for (var l = "", f; (f = zn.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    f[1];
  var m = Wa(i) + l;
  return process.env.NODE_ENV !== "production" ? {
    name: m,
    styles: i,
    map: u,
    next: ze,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: m,
    styles: i,
    next: ze
  };
}, Qa = function(t) {
  return t();
}, Uo = w.useInsertionEffect ? w.useInsertionEffect : !1, an = Uo || Qa, Ln = Uo || w.useLayoutEffect, es = {}.hasOwnProperty, sn = /* @__PURE__ */ w.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Fo({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (sn.displayName = "EmotionCacheContext");
var ts = sn.Provider, lr = function(t) {
  return /* @__PURE__ */ zi(function(r, n) {
    var o = Li(sn);
    return t(r, o, n);
  });
}, tt = /* @__PURE__ */ w.createContext({});
process.env.NODE_ENV !== "production" && (tt.displayName = "EmotionThemeContext");
var Bn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Wn = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", rs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return cr(r, n, o), an(function() {
    return ur(r, n, o);
  }), null;
}, ns = /* @__PURE__ */ lr(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Bn], i = [n], a = "";
  typeof e.className == "string" ? a = nn(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var c = mt(i, void 0, w.useContext(tt));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = e[Wn];
    u && (c = mt([c, "label:" + u + ";"]));
  }
  a += t.key + "-" + c.name;
  var l = {};
  for (var f in e)
    es.call(e, f) && f !== "css" && f !== Bn && (process.env.NODE_ENV === "production" || f !== Wn) && (l[f] = e[f]);
  return l.ref = r, l.className = a, /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(rs, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ w.createElement(o, l));
});
process.env.NODE_ENV !== "production" && (ns.displayName = "EmotionCssPropInternal");
var kr = { exports: {} }, Un;
function Yo() {
  return Un || (Un = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(kr)), kr.exports;
}
Yo();
var os = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Yn = !1, qo = /* @__PURE__ */ lr(function(e, t) {
  process.env.NODE_ENV !== "production" && !Yn && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Yn = !0);
  var r = e.styles, n = mt([r], void 0, w.useContext(tt)), o = w.useRef();
  return Ln(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, u = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), u !== null && (c = !0, u.setAttribute("data-emotion", i), a.hydrate([u])), o.current = [a, c], function() {
      a.flush();
    };
  }, [t]), Ln(function() {
    var i = o.current, a = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && ur(t, n.next, !0), a.tags.length) {
      var u = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = u, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (qo.displayName = "EmotionGlobal");
function Go() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return mt(t);
}
var fr = function() {
  var t = Go.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, is = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var i = t[n];
    if (i != null) {
      var a = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            a = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var c in i)
              i[c] && c && (a && (a += " "), a += c);
          }
          break;
        }
        default:
          a = i;
      }
      a && (o && (o += " "), o += a);
    }
  }
  return o;
};
function as(e, t, r) {
  var n = [], o = nn(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var ss = function(t) {
  var r = t.cache, n = t.serializedArr;
  return an(function() {
    for (var o = 0; o < n.length; o++)
      ur(r, n[o], !1);
  }), null;
}, cs = /* @__PURE__ */ lr(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var l = arguments.length, f = new Array(l), m = 0; m < l; m++)
      f[m] = arguments[m];
    var p = mt(f, t.registered);
    return n.push(p), cr(t, p, !1), t.key + "-" + p.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var l = arguments.length, f = new Array(l), m = 0; m < l; m++)
      f[m] = arguments[m];
    return as(t.registered, o, is(f));
  }, a = {
    css: o,
    cx: i,
    theme: w.useContext(tt)
  }, c = e.children(a);
  return r = !0, /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(ss, {
    cache: t,
    serializedArr: n
  }), c);
});
process.env.NODE_ENV !== "production" && (cs.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var qn = !0, us = typeof jest < "u" || typeof vi < "u";
  if (qn && !us) {
    var Gn = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : qn ? window : global
    ), Kn = "__EMOTION_REACT_" + os.version.split(".")[0] + "__";
    Gn[Kn] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Gn[Kn] = !0;
  }
}
var ls = oa, fs = function(t) {
  return t !== "theme";
}, Hn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ls : fs;
}, Xn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Jn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ds = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return cr(r, n, o), an(function() {
    return ur(r, n, o);
  }), null;
}, ps = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = Xn(t, r, n), u = c || Hn(o), l = !u("as");
  return function() {
    var f = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      m.push.apply(m, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(Jn), m.push(f[0][0]);
      for (var p = f.length, x = 1; x < p; x++)
        process.env.NODE_ENV !== "production" && f[0][x] === void 0 && console.error(Jn), m.push(f[x], f[0][x]);
    }
    var g = lr(function(d, h, _) {
      var R = l && d.as || o, $ = "", C = [], y = d;
      if (d.theme == null) {
        y = {};
        for (var N in d)
          y[N] = d[N];
        y.theme = w.useContext(tt);
      }
      typeof d.className == "string" ? $ = nn(h.registered, C, d.className) : d.className != null && ($ = d.className + " ");
      var k = mt(m.concat(C), h.registered, y);
      $ += h.key + "-" + k.name, a !== void 0 && ($ += " " + a);
      var se = l && c === void 0 ? Hn(R) : u, ce = {};
      for (var ne in d)
        l && ne === "as" || // $FlowFixMe
        se(ne) && (ce[ne] = d[ne]);
      return ce.className = $, ce.ref = _, /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(ds, {
        cache: h,
        serialized: k,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ w.createElement(R, ce));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = m, g.__emotion_forwardProp = c, Object.defineProperty(g, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), g.withComponent = function(d, h) {
      return e(d, B({}, r, h, {
        shouldForwardProp: Xn(g, h, !0)
      })).apply(void 0, m);
    }, g;
  };
}, ms = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ur = ps.bind();
ms.forEach(function(e) {
  Ur[e] = Ur(e);
});
var Yr = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jr, Zn;
function hs() {
  if (Zn)
    return jr;
  Zn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return jr = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), l, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var m in c)
        t.call(c, m) && (u[m] = c[m]);
      if (e) {
        l = e(c);
        for (var p = 0; p < l.length; p++)
          r.call(c, l[p]) && (u[l[p]] = c[l[p]]);
      }
    }
    return u;
  }, jr;
}
var Nr, Qn;
function cn() {
  if (Qn)
    return Nr;
  Qn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Nr = e, Nr;
}
var Ar, eo;
function Ko() {
  return eo || (eo = 1, Ar = Function.call.bind(Object.prototype.hasOwnProperty)), Ar;
}
var Ir, to;
function ys() {
  if (to)
    return Ir;
  to = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = cn(), r = {}, n = Ko();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var m;
          try {
            if (typeof i[f] != "function") {
              var p = Error(
                (u || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            m = i[f](a, f, u, c, null, t);
          } catch (g) {
            m = g;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var x = l ? l() : "";
            e(
              "Failed " + c + " type: " + m.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ir = o, Ir;
}
var Mr, ro;
function vs() {
  if (ro)
    return Mr;
  ro = 1;
  var e = rn(), t = hs(), r = cn(), n = Ko(), o = ys(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Mr = function(c, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(E) {
      var S = E && (l && E[l] || E[f]);
      if (typeof S == "function")
        return S;
    }
    var p = "<<anonymous>>", x = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: R(),
      arrayOf: $,
      element: C(),
      elementType: y(),
      instanceOf: N,
      node: ne(),
      objectOf: se,
      oneOf: k,
      oneOfType: ce,
      shape: oe,
      exact: J
    };
    function g(E, S) {
      return E === S ? E !== 0 || 1 / E === 1 / S : E !== E && S !== S;
    }
    function d(E, S) {
      this.message = E, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function h(E) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, L = 0;
      function F(W, A, D, V, M, U, ve) {
        if (V = V || p, U = U || D, ve !== r) {
          if (u) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var _e = V + ":" + D;
            !S[_e] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[_e] = !0, L++);
          }
        }
        return A[D] == null ? W ? A[D] === null ? new d("The " + M + " `" + U + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new d("The " + M + " `" + U + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : E(A, D, V, M, U);
      }
      var j = F.bind(null, !1);
      return j.isRequired = F.bind(null, !0), j;
    }
    function _(E) {
      function S(L, F, j, W, A, D) {
        var V = L[F], M = ie(V);
        if (M !== E) {
          var U = Ee(V);
          return new d(
            "Invalid " + W + " `" + A + "` of type " + ("`" + U + "` supplied to `" + j + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return h(S);
    }
    function R() {
      return h(a);
    }
    function $(E) {
      function S(L, F, j, W, A) {
        if (typeof E != "function")
          return new d("Property `" + A + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var D = L[F];
        if (!Array.isArray(D)) {
          var V = ie(D);
          return new d("Invalid " + W + " `" + A + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected an array."));
        }
        for (var M = 0; M < D.length; M++) {
          var U = E(D, M, j, W, A + "[" + M + "]", r);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return h(S);
    }
    function C() {
      function E(S, L, F, j, W) {
        var A = S[L];
        if (!c(A)) {
          var D = ie(A);
          return new d("Invalid " + j + " `" + W + "` of type " + ("`" + D + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(E);
    }
    function y() {
      function E(S, L, F, j, W) {
        var A = S[L];
        if (!e.isValidElementType(A)) {
          var D = ie(A);
          return new d("Invalid " + j + " `" + W + "` of type " + ("`" + D + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(E);
    }
    function N(E) {
      function S(L, F, j, W, A) {
        if (!(L[F] instanceof E)) {
          var D = E.name || p, V = Fe(L[F]);
          return new d("Invalid " + W + " `" + A + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return h(S);
    }
    function k(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function S(L, F, j, W, A) {
        for (var D = L[F], V = 0; V < E.length; V++)
          if (g(D, E[V]))
            return null;
        var M = JSON.stringify(E, function(ve, T) {
          var _e = Ee(T);
          return _e === "symbol" ? String(T) : T;
        });
        return new d("Invalid " + W + " `" + A + "` of value `" + String(D) + "` " + ("supplied to `" + j + "`, expected one of " + M + "."));
      }
      return h(S);
    }
    function se(E) {
      function S(L, F, j, W, A) {
        if (typeof E != "function")
          return new d("Property `" + A + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var D = L[F], V = ie(D);
        if (V !== "object")
          return new d("Invalid " + W + " `" + A + "` of type " + ("`" + V + "` supplied to `" + j + "`, expected an object."));
        for (var M in D)
          if (n(D, M)) {
            var U = E(D, M, j, W, A + "." + M, r);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return h(S);
    }
    function ce(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var S = 0; S < E.length; S++) {
        var L = E[S];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(L) + " at index " + S + "."
          ), a;
      }
      function F(j, W, A, D, V) {
        for (var M = [], U = 0; U < E.length; U++) {
          var ve = E[U], T = ve(j, W, A, D, V, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && M.push(T.data.expectedType);
        }
        var _e = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new d("Invalid " + D + " `" + V + "` supplied to " + ("`" + A + "`" + _e + "."));
      }
      return h(F);
    }
    function ne() {
      function E(S, L, F, j, W) {
        return Z(S[L]) ? null : new d("Invalid " + j + " `" + W + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return h(E);
    }
    function G(E, S, L, F, j) {
      return new d(
        (E || "React class") + ": " + S + " type `" + L + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function oe(E) {
      function S(L, F, j, W, A) {
        var D = L[F], V = ie(D);
        if (V !== "object")
          return new d("Invalid " + W + " `" + A + "` of type `" + V + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var M in E) {
          var U = E[M];
          if (typeof U != "function")
            return G(j, W, A, M, Ee(U));
          var ve = U(D, M, j, W, A + "." + M, r);
          if (ve)
            return ve;
        }
        return null;
      }
      return h(S);
    }
    function J(E) {
      function S(L, F, j, W, A) {
        var D = L[F], V = ie(D);
        if (V !== "object")
          return new d("Invalid " + W + " `" + A + "` of type `" + V + "` " + ("supplied to `" + j + "`, expected `object`."));
        var M = t({}, L[F], E);
        for (var U in M) {
          var ve = E[U];
          if (n(E, U) && typeof ve != "function")
            return G(j, W, A, U, Ee(ve));
          if (!ve)
            return new d(
              "Invalid " + W + " `" + A + "` key `" + U + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(L[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var T = ve(D, U, j, W, A + "." + U, r);
          if (T)
            return T;
        }
        return null;
      }
      return h(S);
    }
    function Z(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(Z);
          if (E === null || c(E))
            return !0;
          var S = m(E);
          if (S) {
            var L = S.call(E), F;
            if (S !== E.entries) {
              for (; !(F = L.next()).done; )
                if (!Z(F.value))
                  return !1;
            } else
              for (; !(F = L.next()).done; ) {
                var j = F.value;
                if (j && !Z(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pe(E, S) {
      return E === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function ie(E) {
      var S = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : pe(S, E) ? "symbol" : S;
    }
    function Ee(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var S = ie(E);
      if (S === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function le(E) {
      var S = Ee(E);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function Fe(E) {
      return !E.constructor || !E.constructor.name ? p : E.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Mr;
}
var Dr, no;
function gs() {
  if (no)
    return Dr;
  no = 1;
  var e = cn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Dr = function() {
    function n(a, c, u, l, f, m) {
      if (m !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Dr;
}
if (process.env.NODE_ENV !== "production") {
  var bs = rn(), Es = !0;
  Yr.exports = vs()(bs.isElement, Es);
} else
  Yr.exports = gs()();
var xs = Yr.exports;
const v = /* @__PURE__ */ Ui(xs);
let qr;
typeof document == "object" && (qr = Fo({
  key: "css",
  prepend: !0
}));
function Ho(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && qr ? /* @__PURE__ */ Se.jsx(ts, {
    value: qr,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (Ho.propTypes = {
  /**
   * Your component tree.
   */
  children: v.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: v.bool
});
function _s(e) {
  return e == null || Object.keys(e).length === 0;
}
function Xo(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(_s(o) ? r : o) : t;
  return /* @__PURE__ */ Se.jsx(qo, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Xo.propTypes = {
  defaultTheme: v.object,
  styles: v.oneOfType([v.array, v.string, v.object, v.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ts(e, t) {
  const r = Ur(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Os = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Xo,
  StyledEngineProvider: Ho,
  ThemeContext: tt,
  css: Go,
  default: Ts,
  internal_processStyles: Os,
  keyframes: fr
}, Symbol.toStringTag, { value: "Module" }));
function He(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Jo(e) {
  if (!He(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Jo(e[r]);
  }), t;
}
function Ue(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? B({}, e) : e;
  return He(e) && He(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (He(t[o]) && o in e && He(e[o]) ? n[o] = Ue(e[o], t[o], r) : r.clone ? n[o] = He(t[o]) ? Jo(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
const Rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ue,
  isPlainObject: He
}, Symbol.toStringTag, { value: "Module" })), Cs = ["values", "unit", "step"], ws = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => B({}, r, {
    [n.key]: n.val
  }), {});
};
function Zo(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = Le(e, Cs), i = ws(t), a = Object.keys(i);
  function c(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function u(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function l(p, x) {
    const g = a.indexOf(x);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : x) - n / 100}${r})`;
  }
  function f(p) {
    return a.indexOf(p) + 1 < a.length ? l(p, a[a.indexOf(p) + 1]) : c(p);
  }
  function m(p) {
    const x = a.indexOf(p);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? u(a[x]) : l(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return B({
    keys: a,
    values: i,
    up: c,
    down: u,
    between: l,
    only: f,
    not: m,
    unit: r
  }, o);
}
const Ps = {
  borderRadius: 4
}, $s = Ps, ks = process.env.NODE_ENV !== "production" ? v.oneOfType([v.number, v.string, v.object, v.array]) : {}, Je = ks;
function wt(e, t) {
  return t ? Ue(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const un = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, oo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${un[e]}px)`
};
function qe(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || oo;
    return t.reduce((a, c, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || oo;
    return Object.keys(t).reduce((a, c) => {
      if (Object.keys(i.values || un).indexOf(c) !== -1) {
        const u = i.up(c);
        a[u] = r(t[c], c);
      } else {
        const u = c;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function js(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Ns(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Re(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : $t(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Re
}, Symbol.toStringTag, { value: "Module" }));
function dr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function nr(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = dr(e, r) || n, t && (o = t(o, n, e)), o;
}
function he(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], u = a.theme, l = dr(u, n) || {};
    return qe(a, c, (m) => {
      let p = nr(l, o, m);
      return m === p && typeof m == "string" && (p = nr(l, o, `${t}${m === "default" ? "" : Re(m)}`, m)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Je
  } : {}, i.filterProps = [t], i;
}
function Is(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Ms = {
  m: "margin",
  p: "padding"
}, Ds = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, io = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Fs = Is((e) => {
  if (e.length > 2)
    if (io[e])
      e = io[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Ms[t], o = Ds[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), pr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], mr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Vs = [...pr, ...mr];
function It(e, t, r, n) {
  var o;
  const i = (o = dr(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Qo(e) {
  return It(e, "spacing", 8, "spacing");
}
function Mt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function zs(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Mt(t, r), n), {});
}
function Ls(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Fs(r), i = zs(o, n), a = e[r];
  return qe(e, a, i);
}
function ei(e, t) {
  const r = Qo(e.theme);
  return Object.keys(e).map((n) => Ls(e, t, n, r)).reduce(wt, {});
}
function fe(e) {
  return ei(e, pr);
}
fe.propTypes = process.env.NODE_ENV !== "production" ? pr.reduce((e, t) => (e[t] = Je, e), {}) : {};
fe.filterProps = pr;
function de(e) {
  return ei(e, mr);
}
de.propTypes = process.env.NODE_ENV !== "production" ? mr.reduce((e, t) => (e[t] = Je, e), {}) : {};
de.filterProps = mr;
process.env.NODE_ENV !== "production" && Vs.reduce((e, t) => (e[t] = Je, e), {});
function Bs(e = 8) {
  if (e.mui)
    return e;
  const t = Qo({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function hr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? wt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Ie(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function De(e, t) {
  return he({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ws = De("border", Ie), Us = De("borderTop", Ie), Ys = De("borderRight", Ie), qs = De("borderBottom", Ie), Gs = De("borderLeft", Ie), Ks = De("borderColor"), Hs = De("borderTopColor"), Xs = De("borderRightColor"), Js = De("borderBottomColor"), Zs = De("borderLeftColor"), Qs = De("outline", Ie), ec = De("outlineColor"), yr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = It(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Mt(t, n)
    });
    return qe(e, e.borderRadius, r);
  }
  return null;
};
yr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Je
} : {};
yr.filterProps = ["borderRadius"];
hr(Ws, Us, Ys, qs, Gs, Ks, Hs, Xs, Js, Zs, yr, Qs, ec);
const vr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = It(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Mt(t, n)
    });
    return qe(e, e.gap, r);
  }
  return null;
};
vr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Je
} : {};
vr.filterProps = ["gap"];
const gr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = It(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Mt(t, n)
    });
    return qe(e, e.columnGap, r);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Je
} : {};
gr.filterProps = ["columnGap"];
const br = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = It(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Mt(t, n)
    });
    return qe(e, e.rowGap, r);
  }
  return null;
};
br.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Je
} : {};
br.filterProps = ["rowGap"];
const tc = he({
  prop: "gridColumn"
}), rc = he({
  prop: "gridRow"
}), nc = he({
  prop: "gridAutoFlow"
}), oc = he({
  prop: "gridAutoColumns"
}), ic = he({
  prop: "gridAutoRows"
}), ac = he({
  prop: "gridTemplateColumns"
}), sc = he({
  prop: "gridTemplateRows"
}), cc = he({
  prop: "gridTemplateAreas"
}), uc = he({
  prop: "gridArea"
});
hr(vr, gr, br, tc, rc, nc, oc, ic, ac, sc, cc, uc);
function dt(e, t) {
  return t === "grey" ? t : e;
}
const lc = he({
  prop: "color",
  themeKey: "palette",
  transform: dt
}), fc = he({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: dt
}), dc = he({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: dt
});
hr(lc, fc, dc);
function Pe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const pc = he({
  prop: "width",
  transform: Pe
}), ln = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || un[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Pe(r)
      };
    };
    return qe(e, e.maxWidth, t);
  }
  return null;
};
ln.filterProps = ["maxWidth"];
const mc = he({
  prop: "minWidth",
  transform: Pe
}), hc = he({
  prop: "height",
  transform: Pe
}), yc = he({
  prop: "maxHeight",
  transform: Pe
}), vc = he({
  prop: "minHeight",
  transform: Pe
});
he({
  prop: "size",
  cssProperty: "width",
  transform: Pe
});
he({
  prop: "size",
  cssProperty: "height",
  transform: Pe
});
const gc = he({
  prop: "boxSizing"
});
hr(pc, ln, mc, hc, yc, vc, gc);
const bc = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ie
  },
  borderTop: {
    themeKey: "borders",
    transform: Ie
  },
  borderRight: {
    themeKey: "borders",
    transform: Ie
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ie
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ie
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ie
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: yr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: dt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: dt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: dt
  },
  // spacing
  p: {
    style: de
  },
  pt: {
    style: de
  },
  pr: {
    style: de
  },
  pb: {
    style: de
  },
  pl: {
    style: de
  },
  px: {
    style: de
  },
  py: {
    style: de
  },
  padding: {
    style: de
  },
  paddingTop: {
    style: de
  },
  paddingRight: {
    style: de
  },
  paddingBottom: {
    style: de
  },
  paddingLeft: {
    style: de
  },
  paddingX: {
    style: de
  },
  paddingY: {
    style: de
  },
  paddingInline: {
    style: de
  },
  paddingInlineStart: {
    style: de
  },
  paddingInlineEnd: {
    style: de
  },
  paddingBlock: {
    style: de
  },
  paddingBlockStart: {
    style: de
  },
  paddingBlockEnd: {
    style: de
  },
  m: {
    style: fe
  },
  mt: {
    style: fe
  },
  mr: {
    style: fe
  },
  mb: {
    style: fe
  },
  ml: {
    style: fe
  },
  mx: {
    style: fe
  },
  my: {
    style: fe
  },
  margin: {
    style: fe
  },
  marginTop: {
    style: fe
  },
  marginRight: {
    style: fe
  },
  marginBottom: {
    style: fe
  },
  marginLeft: {
    style: fe
  },
  marginX: {
    style: fe
  },
  marginY: {
    style: fe
  },
  marginInline: {
    style: fe
  },
  marginInlineStart: {
    style: fe
  },
  marginInlineEnd: {
    style: fe
  },
  marginBlock: {
    style: fe
  },
  marginBlockStart: {
    style: fe
  },
  marginBlockEnd: {
    style: fe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: vr
  },
  rowGap: {
    style: br
  },
  columnGap: {
    style: gr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Pe
  },
  maxWidth: {
    style: ln
  },
  minWidth: {
    transform: Pe
  },
  height: {
    transform: Pe
  },
  maxHeight: {
    transform: Pe
  },
  minHeight: {
    transform: Pe
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Dt = bc;
function Ec(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function xc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ti() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: l,
      transform: f,
      style: m
    } = c;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const p = dr(o, l) || {};
    return m ? m(a) : qe(a, n, (g) => {
      let d = nr(p, f, g);
      return g === d && typeof g == "string" && (d = nr(p, f, `${r}${g === "default" ? "" : Re(g)}`, g)), u === !1 ? d : {
        [u]: d
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const a = (n = i.unstable_sxConfig) != null ? n : Dt;
    function c(u) {
      let l = u;
      if (typeof u == "function")
        l = u(i);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const f = js(i.breakpoints), m = Object.keys(f);
      let p = f;
      return Object.keys(l).forEach((x) => {
        const g = xc(l[x], i);
        if (g != null)
          if (typeof g == "object")
            if (a[x])
              p = wt(p, e(x, g, i, a));
            else {
              const d = qe({
                theme: i
              }, g, (h) => ({
                [x]: h
              }));
              Ec(d, g) ? p[x] = t({
                sx: g,
                theme: i
              }) : p = wt(p, d);
            }
          else
            p = wt(p, e(x, g, i, a));
      }), Ns(m, p);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const Er = ti();
Er.filterProps = ["sx"];
function ri(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const _c = ["breakpoints", "palette", "spacing", "shape"];
function fn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = Le(e, _c), c = Zo(r), u = Bs(o);
  let l = Ue({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: B({
      mode: "light"
    }, n),
    spacing: u,
    shape: B({}, $s, i)
  }, a);
  return l.applyStyles = ri, l = t.reduce((f, m) => Ue(f, m), l), l.unstable_sxConfig = B({}, Dt, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(m) {
    return Er({
      sx: m,
      theme: this
    });
  }, l;
}
const Tc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fn,
  private_createBreakpoints: Zo,
  unstable_applyStyles: ri
}, Symbol.toStringTag, { value: "Module" }));
function Oc(e) {
  return Object.keys(e).length === 0;
}
function Sc(e = null) {
  const t = w.useContext(tt);
  return !t || Oc(t) ? e : t;
}
const Rc = fn();
function Cc(e = Rc) {
  return Sc(e);
}
const wc = ["sx"], Pc = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : Dt;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function $c(e) {
  const {
    sx: t
  } = e, r = Le(e, wc), {
    systemProps: n,
    otherProps: o
  } = Pc(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const c = t(...a);
    return He(c) ? B({}, n, c) : n;
  } : i = B({}, n, t), B({}, o, {
    sx: i
  });
}
const kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er,
  extendSxProp: $c,
  unstable_createStyleFunctionSx: ti,
  unstable_defaultSxConfig: Dt
}, Symbol.toStringTag, { value: "Module" })), ao = (e) => e, jc = () => {
  let e = ao;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ao;
    }
  };
}, Nc = jc();
function ni(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = ni(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Ne() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = ni(e)) && (n && (n += " "), n += t);
  return n;
}
const Ac = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function xr(e, t, r = "Mui") {
  const n = Ac[t];
  return n ? `${r}-${n}` : `${Nc.generate(e)}-${t}`;
}
function dn(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = xr(e, o, r);
  }), n;
}
var Gr = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function Ic() {
  if (so)
    return te;
  so = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function d(h) {
    if (typeof h == "object" && h !== null) {
      var _ = h.$$typeof;
      switch (_) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case l:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case a:
                case u:
                case p:
                case m:
                case i:
                  return h;
                default:
                  return _;
              }
          }
        case t:
          return _;
      }
    }
  }
  return te.ContextConsumer = a, te.ContextProvider = i, te.Element = e, te.ForwardRef = u, te.Fragment = r, te.Lazy = p, te.Memo = m, te.Portal = t, te.Profiler = o, te.StrictMode = n, te.Suspense = l, te.SuspenseList = f, te.isAsyncMode = function() {
    return !1;
  }, te.isConcurrentMode = function() {
    return !1;
  }, te.isContextConsumer = function(h) {
    return d(h) === a;
  }, te.isContextProvider = function(h) {
    return d(h) === i;
  }, te.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, te.isForwardRef = function(h) {
    return d(h) === u;
  }, te.isFragment = function(h) {
    return d(h) === r;
  }, te.isLazy = function(h) {
    return d(h) === p;
  }, te.isMemo = function(h) {
    return d(h) === m;
  }, te.isPortal = function(h) {
    return d(h) === t;
  }, te.isProfiler = function(h) {
    return d(h) === o;
  }, te.isStrictMode = function(h) {
    return d(h) === n;
  }, te.isSuspense = function(h) {
    return d(h) === l;
  }, te.isSuspenseList = function(h) {
    return d(h) === f;
  }, te.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === l || h === f || h === x || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === m || h.$$typeof === i || h.$$typeof === a || h.$$typeof === u || h.$$typeof === g || h.getModuleId !== void 0);
  }, te.typeOf = d, te;
}
var re = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function Mc() {
  return co || (co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g = !1, d = !1, h = !1, _ = !1, R = !1, $;
    $ = Symbol.for("react.module.reference");
    function C(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === r || P === o || R || P === n || P === l || P === f || _ || P === x || g || d || h || typeof P == "object" && P !== null && (P.$$typeof === p || P.$$typeof === m || P.$$typeof === i || P.$$typeof === a || P.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === $ || P.getModuleId !== void 0));
    }
    function y(P) {
      if (typeof P == "object" && P !== null) {
        var we = P.$$typeof;
        switch (we) {
          case e:
            var Ve = P.type;
            switch (Ve) {
              case r:
              case o:
              case n:
              case l:
              case f:
                return Ve;
              default:
                var Ze = Ve && Ve.$$typeof;
                switch (Ze) {
                  case c:
                  case a:
                  case u:
                  case p:
                  case m:
                  case i:
                    return Ze;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var N = a, k = i, se = e, ce = u, ne = r, G = p, oe = m, J = t, Z = o, pe = n, ie = l, Ee = f, le = !1, Fe = !1;
    function E(P) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function S(P) {
      return Fe || (Fe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(P) {
      return y(P) === a;
    }
    function F(P) {
      return y(P) === i;
    }
    function j(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function W(P) {
      return y(P) === u;
    }
    function A(P) {
      return y(P) === r;
    }
    function D(P) {
      return y(P) === p;
    }
    function V(P) {
      return y(P) === m;
    }
    function M(P) {
      return y(P) === t;
    }
    function U(P) {
      return y(P) === o;
    }
    function ve(P) {
      return y(P) === n;
    }
    function T(P) {
      return y(P) === l;
    }
    function _e(P) {
      return y(P) === f;
    }
    re.ContextConsumer = N, re.ContextProvider = k, re.Element = se, re.ForwardRef = ce, re.Fragment = ne, re.Lazy = G, re.Memo = oe, re.Portal = J, re.Profiler = Z, re.StrictMode = pe, re.Suspense = ie, re.SuspenseList = Ee, re.isAsyncMode = E, re.isConcurrentMode = S, re.isContextConsumer = L, re.isContextProvider = F, re.isElement = j, re.isForwardRef = W, re.isFragment = A, re.isLazy = D, re.isMemo = V, re.isPortal = M, re.isProfiler = U, re.isStrictMode = ve, re.isSuspense = T, re.isSuspenseList = _e, re.isValidElementType = C, re.typeOf = y;
  }()), re;
}
process.env.NODE_ENV === "production" ? Gr.exports = Ic() : Gr.exports = Mc();
var uo = Gr.exports;
const Dc = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function oi(e) {
  const t = `${e}`.match(Dc);
  return t && t[1] || "";
}
function ii(e, t = "") {
  return e.displayName || e.name || oi(e) || t;
}
function lo(e, t, r) {
  const n = ii(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Fc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ii(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case uo.ForwardRef:
          return lo(e, e.render, "ForwardRef");
        case uo.Memo:
          return lo(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fc,
  getFunctionName: oi
}, Symbol.toStringTag, { value: "Module" }));
function pn(e, t) {
  const r = B({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = B({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = B({}, i), Object.keys(o).forEach((a) => {
        r[n][a] = pn(o[a], i[a]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function zc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : pn(t.components[r].defaultProps, n);
}
function Lc({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = Cc(r);
  return n && (o = o[n] || o), zc({
    theme: o,
    name: t,
    props: e
  });
}
const Bc = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function Wc(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wc
}, Symbol.toStringTag, { value: "Module" }));
function Yc(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function qc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Gc(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !qc(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Kc = Yc(v.elementType, Gc), Hc = v.oneOfType([v.func, v.object]), Xc = Hc;
function Jc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Ut(e) {
  const t = w.useRef(e);
  return Bc(() => {
    t.current = e;
  }), w.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function fo(...e) {
  return w.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Jc(r, t);
    });
  }, e);
}
const po = {};
function Zc(e, t) {
  const r = w.useRef(po);
  return r.current === po && (r.current = e(t)), r;
}
const Qc = [];
function eu(e) {
  w.useEffect(e, Qc);
}
class _r {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new _r();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function tu() {
  const e = Zc(_r.create).current;
  return eu(e.disposeEffect), e;
}
let Tr = !0, Kr = !1;
const ru = new _r(), nu = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function ou(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && nu[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function iu(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Tr = !0);
}
function Fr() {
  Tr = !1;
}
function au() {
  this.visibilityState === "hidden" && Kr && (Tr = !0);
}
function su(e) {
  e.addEventListener("keydown", iu, !0), e.addEventListener("mousedown", Fr, !0), e.addEventListener("pointerdown", Fr, !0), e.addEventListener("touchstart", Fr, !0), e.addEventListener("visibilitychange", au, !0);
}
function cu(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Tr || ou(t);
}
function uu() {
  const e = w.useCallback((o) => {
    o != null && su(o.ownerDocument);
  }, []), t = w.useRef(!1);
  function r() {
    return t.current ? (Kr = !0, ru.start(100, () => {
      Kr = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return cu(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function ai(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, a) => {
        if (a) {
          const c = t(a);
          c !== "" && i.push(c), r && r[a] && i.push(r[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
function lu(e, t) {
  return B({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var ye = {}, si = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(si);
var ci = si.exports;
const fu = /* @__PURE__ */ Xe(ra), du = /* @__PURE__ */ Xe(Uc);
var ui = ci;
Object.defineProperty(ye, "__esModule", {
  value: !0
});
var Yt = ye.alpha = pi;
ye.blend = Ou;
ye.colorChannel = void 0;
var pu = ye.darken = hn;
ye.decomposeColor = Me;
ye.emphasize = mi;
var mo = ye.getContrastRatio = bu;
ye.getLuminance = or;
ye.hexToRgb = li;
ye.hslToRgb = di;
var mu = ye.lighten = yn;
ye.private_safeAlpha = Eu;
ye.private_safeColorChannel = void 0;
ye.private_safeDarken = xu;
ye.private_safeEmphasize = Tu;
ye.private_safeLighten = _u;
ye.recomposeColor = yt;
ye.rgbToHex = gu;
var ho = ui(fu), hu = ui(du);
function mn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, hu.default)(e, t, r);
}
function li(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function yu(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Me(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Me(li(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, ho.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, ho.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const fi = (e) => {
  const t = Me(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
ye.colorChannel = fi;
const vu = (e, t) => {
  try {
    return fi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
ye.private_safeColorChannel = vu;
function yt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function gu(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Me(e);
  return `#${t.map((r, n) => yu(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function di(e) {
  e = Me(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (l, f = (l + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(t[3])), yt({
    type: c,
    values: u
  });
}
function or(e) {
  e = Me(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Me(di(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function bu(e, t) {
  const r = or(e), n = or(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function pi(e, t) {
  return e = Me(e), t = mn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, yt(e);
}
function Eu(e, t, r) {
  try {
    return pi(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function hn(e, t) {
  if (e = Me(e), t = mn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return yt(e);
}
function xu(e, t, r) {
  try {
    return hn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function yn(e, t) {
  if (e = Me(e), t = mn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return yt(e);
}
function _u(e, t, r) {
  try {
    return yn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function mi(e, t = 0.15) {
  return or(e) > 0.5 ? hn(e, t) : yn(e, t);
}
function Tu(e, t, r) {
  try {
    return mi(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ou(e, t, r, n = 1) {
  const o = (u, l) => Math.round((u ** (1 / n) * (1 - r) + l ** (1 / n) * r) ** n), i = Me(e), a = Me(t), c = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return yt({
    type: "rgb",
    values: c
  });
}
const Su = ["mode", "contrastThreshold", "tonalOffset"], yo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Pt.white,
    default: Pt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Vr = {
  text: {
    primary: Pt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Pt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function vo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = mu(e.main, o) : t === "dark" && (e.dark = pu(e.main, i)));
}
function Ru(e = "light") {
  return e === "dark" ? {
    main: ct[200],
    light: ct[50],
    dark: ct[400]
  } : {
    main: ct[700],
    light: ct[400],
    dark: ct[800]
  };
}
function Cu(e = "light") {
  return e === "dark" ? {
    main: st[200],
    light: st[50],
    dark: st[400]
  } : {
    main: st[500],
    light: st[300],
    dark: st[700]
  };
}
function wu(e = "light") {
  return e === "dark" ? {
    main: at[500],
    light: at[300],
    dark: at[700]
  } : {
    main: at[700],
    light: at[400],
    dark: at[800]
  };
}
function Pu(e = "light") {
  return e === "dark" ? {
    main: ut[400],
    light: ut[300],
    dark: ut[700]
  } : {
    main: ut[700],
    light: ut[500],
    dark: ut[900]
  };
}
function $u(e = "light") {
  return e === "dark" ? {
    main: lt[400],
    light: lt[300],
    dark: lt[700]
  } : {
    main: lt[800],
    light: lt[500],
    dark: lt[900]
  };
}
function ku(e = "light") {
  return e === "dark" ? {
    main: Rt[400],
    light: Rt[300],
    dark: Rt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Rt[500],
    dark: Rt[900]
  };
}
function ju(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = Le(e, Su), i = e.primary || Ru(t), a = e.secondary || Cu(t), c = e.error || wu(t), u = e.info || Pu(t), l = e.success || $u(t), f = e.warning || ku(t);
  function m(d) {
    const h = mo(d, Vr.text.primary) >= r ? Vr.text.primary : yo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const _ = mo(d, h);
      _ < 3 && console.error([`MUI: The contrast ratio of ${_}:1 for ${h} on ${d}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const p = ({
    color: d,
    name: h,
    mainShade: _ = 500,
    lightShade: R = 300,
    darkShade: $ = 700
  }) => {
    if (d = B({}, d), !d.main && d[_] && (d.main = d[_]), !d.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${_}\` property.` : $t(11, h ? ` (${h})` : "", _));
    if (typeof d.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(d.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : $t(12, h ? ` (${h})` : "", JSON.stringify(d.main)));
    return vo(d, "light", R, n), vo(d, "dark", $, n), d.contrastText || (d.contrastText = m(d.main)), d;
  }, x = {
    dark: Vr,
    light: yo
  };
  return process.env.NODE_ENV !== "production" && (x[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ue(B({
    // A collection of common colors.
    common: B({}, Pt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: ta,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, x[t]), o);
}
const Nu = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Au(e) {
  return Math.round(e * 1e5) / 1e5;
}
const go = {
  textTransform: "uppercase"
}, bo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Iu(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = bo,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m
  } = r, p = Le(r, Nu);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const x = o / 14, g = m || ((_) => `${_ / l * x}rem`), d = (_, R, $, C, y) => B({
    fontFamily: n,
    fontWeight: _,
    fontSize: g(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $
  }, n === bo ? {
    letterSpacing: `${Au(C / R)}em`
  } : {}, y, f), h = {
    h1: d(i, 96, 1.167, -1.5),
    h2: d(i, 60, 1.2, -0.5),
    h3: d(a, 48, 1.167, 0),
    h4: d(a, 34, 1.235, 0.25),
    h5: d(a, 24, 1.334, 0),
    h6: d(c, 20, 1.6, 0.15),
    subtitle1: d(a, 16, 1.75, 0.15),
    subtitle2: d(c, 14, 1.57, 0.1),
    body1: d(a, 16, 1.5, 0.15),
    body2: d(a, 14, 1.43, 0.15),
    button: d(c, 14, 1.75, 0.4, go),
    caption: d(a, 12, 1.66, 0.4),
    overline: d(a, 12, 2.66, 1, go),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ue(B({
    htmlFontSize: l,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: u
  }, h), p, {
    clone: !1
    // No need to clone deep
  });
}
const Mu = 0.2, Du = 0.14, Fu = 0.12;
function ue(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Du})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Fu})`].join(",");
}
const Vu = ["none", ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], zu = ["duration", "easing", "delay"], Lu = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Bu = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Eo(e) {
  return `${Math.round(e)}ms`;
}
function Wu(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Uu(e) {
  const t = B({}, Lu, e.easing), r = B({}, Bu, e.duration);
  return B({
    getAutoHeightDuration: Wu,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: u = 0
      } = i, l = Le(i, zu);
      if (process.env.NODE_ENV !== "production") {
        const f = (p) => typeof p == "string", m = (p) => !isNaN(parseFloat(p));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !m(u) && !f(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof a == "string" ? a : Eo(a)} ${c} ${typeof u == "string" ? u : Eo(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Yu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, qu = Yu, Gu = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function hi(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = Le(e, Gu);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : $t(18));
  const c = ju(n), u = fn(e);
  let l = Ue(u, {
    mixins: lu(u.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Vu.slice(),
    typography: Iu(c, i),
    transitions: Uu(o),
    zIndex: B({}, qu)
  });
  if (l = Ue(l, a), l = t.reduce((f, m) => Ue(f, m), l), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (p, x) => {
      let g;
      for (g in p) {
        const d = p[g];
        if (f.indexOf(g) !== -1 && Object.keys(d).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const h = xr("", g);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${h}' syntax:`, JSON.stringify({
              root: {
                [`&.${h}`]: d
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[g] = {};
        }
      }
    };
    Object.keys(l.components).forEach((p) => {
      const x = l.components[p].styleOverrides;
      x && p.indexOf("Mui") === 0 && m(x, p);
    });
  }
  return l.unstable_sxConfig = B({}, Dt, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(m) {
    return Er({
      sx: m,
      theme: this
    });
  }, l;
}
const Ku = hi(), yi = Ku;
function vn({
  props: e,
  name: t
}) {
  return Lc({
    props: e,
    name: t,
    defaultTheme: yi,
    themeId: Po
  });
}
var Ft = {}, zr = { exports: {} }, xo;
function Hu() {
  return xo || (xo = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {}, i = Object.keys(r), a, c;
      for (c = 0; c < i.length; c++)
        a = i[c], !(n.indexOf(a) >= 0) && (o[a] = r[a]);
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(zr)), zr.exports;
}
const Xu = /* @__PURE__ */ Xe(Ss), Ju = /* @__PURE__ */ Xe(Rs), Zu = /* @__PURE__ */ Xe(As), Qu = /* @__PURE__ */ Xe(Vc), el = /* @__PURE__ */ Xe(Tc), tl = /* @__PURE__ */ Xe(kc);
var vt = ci;
Object.defineProperty(Ft, "__esModule", {
  value: !0
});
var rl = Ft.default = yl;
Ft.shouldForwardProp = Qt;
Ft.systemDefaultTheme = void 0;
var je = vt(Yo()), Hr = vt(Hu()), _o = fl(Xu), nl = Ju, ol = vt(Zu), il = vt(Qu), al = vt(el), sl = vt(tl);
const cl = ["ownerState"], ul = ["variants"], ll = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function gi(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (gi = function(n) {
    return n ? r : t;
  })(e);
}
function fl(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = gi(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function dl(e) {
  return Object.keys(e).length === 0;
}
function pl(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Qt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ml = Ft.systemDefaultTheme = (0, al.default)(), To = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function qt({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return dl(t) ? e : t[r] || t;
}
function hl(e) {
  return e ? (t, r) => r[e] : null;
}
function er(e, t) {
  let {
    ownerState: r
  } = t, n = (0, Hr.default)(t, cl);
  const o = typeof e == "function" ? e((0, je.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => er(i, (0, je.default)({
      ownerState: r
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let c = (0, Hr.default)(o, ul);
    return i.forEach((u) => {
      let l = !0;
      typeof u.props == "function" ? l = u.props((0, je.default)({
        ownerState: r
      }, n, r)) : Object.keys(u.props).forEach((f) => {
        (r == null ? void 0 : r[f]) !== u.props[f] && n[f] !== u.props[f] && (l = !1);
      }), l && (Array.isArray(c) || (c = [c]), c.push(typeof u.style == "function" ? u.style((0, je.default)({
        ownerState: r
      }, n, r)) : u.style));
    }), c;
  }
  return o;
}
function yl(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ml,
    rootShouldForwardProp: n = Qt,
    slotShouldForwardProp: o = Qt
  } = e, i = (a) => (0, sl.default)((0, je.default)({}, a, {
    theme: qt((0, je.default)({}, a, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, c = {}) => {
    (0, _o.internal_processStyles)(a, (y) => y.filter((N) => !(N != null && N.__mui_systemSx)));
    const {
      name: u,
      slot: l,
      skipVariantsResolver: f,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = hl(To(l))
    } = c, x = (0, Hr.default)(c, ll), g = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), d = m || !1;
    let h;
    process.env.NODE_ENV !== "production" && u && (h = `${u}-${To(l || "Root")}`);
    let _ = Qt;
    l === "Root" || l === "root" ? _ = n : l ? _ = o : pl(a) && (_ = void 0);
    const R = (0, _o.default)(a, (0, je.default)({
      shouldForwardProp: _,
      label: h
    }, x)), $ = (y) => typeof y == "function" && y.__emotion_real !== y || (0, nl.isPlainObject)(y) ? (N) => er(y, (0, je.default)({}, N, {
      theme: qt({
        theme: N.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : y, C = (y, ...N) => {
      let k = $(y);
      const se = N ? N.map($) : [];
      u && p && se.push((G) => {
        const oe = qt((0, je.default)({}, G, {
          defaultTheme: r,
          themeId: t
        }));
        if (!oe.components || !oe.components[u] || !oe.components[u].styleOverrides)
          return null;
        const J = oe.components[u].styleOverrides, Z = {};
        return Object.entries(J).forEach(([pe, ie]) => {
          Z[pe] = er(ie, (0, je.default)({}, G, {
            theme: oe
          }));
        }), p(G, Z);
      }), u && !g && se.push((G) => {
        var oe;
        const J = qt((0, je.default)({}, G, {
          defaultTheme: r,
          themeId: t
        })), Z = J == null || (oe = J.components) == null || (oe = oe[u]) == null ? void 0 : oe.variants;
        return er({
          variants: Z
        }, (0, je.default)({}, G, {
          theme: J
        }));
      }), d || se.push(i);
      const ce = se.length - N.length;
      if (Array.isArray(y) && ce > 0) {
        const G = new Array(ce).fill("");
        k = [...y, ...G], k.raw = [...y.raw, ...G];
      }
      const ne = R(k, ...se);
      if (process.env.NODE_ENV !== "production") {
        let G;
        u && (G = `${u}${(0, ol.default)(l || "")}`), G === void 0 && (G = `Styled(${(0, il.default)(a)})`), ne.displayName = G;
      }
      return a.muiName && (ne.muiName = a.muiName), ne;
    };
    return R.withConfig && (C.withConfig = R.withConfig), C;
  };
}
function vl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const bi = (e) => vl(e) && e !== "classes", gt = rl({
  themeId: Po,
  defaultTheme: yi,
  rootShouldForwardProp: bi
});
function Xr(e, t) {
  return Xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Xr(e, t);
}
function gl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xr(e, t);
}
const Oo = Qe.createContext(null);
function bl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gn(e, t) {
  var r = function(i) {
    return t && Kt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Bi.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function El(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in t) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var l = n[u][a];
        c[n[u][a]] = r(l);
      }
    c[u] = r(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function et(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function xl(e, t) {
  return gn(e.children, function(r) {
    return Ht(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: et(r, "appear", e),
      enter: et(r, "enter", e),
      exit: et(r, "exit", e)
    });
  });
}
function _l(e, t, r) {
  var n = gn(e.children), o = El(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Kt(a)) {
      var c = i in t, u = i in n, l = t[i], f = Kt(l) && !l.props.in;
      u && (!c || f) ? o[i] = Ht(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: et(a, "exit", e),
        enter: et(a, "enter", e)
      }) : !u && c && !f ? o[i] = Ht(a, {
        in: !1
      }) : u && c && Kt(l) && (o[i] = Ht(a, {
        onExited: r.bind(null, a),
        in: l.props.in,
        exit: et(a, "exit", e),
        enter: et(a, "enter", e)
      }));
    }
  }), o;
}
var Tl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ol = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, bn = /* @__PURE__ */ function(e) {
  gl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(bl(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? xl(o, c) : _l(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = gn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = B({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = Le(o, ["component", "childFactory"]), u = this.state.contextValue, l = Tl(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ Qe.createElement(Oo.Provider, {
      value: u
    }, l) : /* @__PURE__ */ Qe.createElement(Oo.Provider, {
      value: u
    }, /* @__PURE__ */ Qe.createElement(i, c, l));
  }, t;
}(Qe.Component);
bn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: v.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: v.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: v.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: v.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: v.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: v.func
} : {};
bn.defaultProps = Ol;
const Sl = bn;
function Ei(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: l
  } = e, [f, m] = w.useState(!1), p = Ne(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, g = Ne(r.child, f && r.childLeaving, n && r.childPulsate);
  return !c && !f && m(!0), w.useEffect(() => {
    if (!c && u != null) {
      const d = setTimeout(u, l);
      return () => {
        clearTimeout(d);
      };
    }
  }, [u, c, l]), /* @__PURE__ */ Se.jsx("span", {
    className: p,
    style: x,
    children: /* @__PURE__ */ Se.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Ei.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object.isRequired,
  className: v.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: v.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: v.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: v.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: v.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: v.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: v.number,
  /**
   * exit delay
   */
  timeout: v.number.isRequired
});
const Ae = dn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Rl = ["center", "classes", "className"];
let Or = (e) => e, So, Ro, Co, wo;
const Jr = 550, Cl = 80, wl = fr(So || (So = Or`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Pl = fr(Ro || (Ro = Or`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), $l = fr(Co || (Co = Or`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), kl = gt("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), jl = gt(Ei, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(wo || (wo = Or`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Ae.rippleVisible, wl, Jr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ae.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Ae.child, Ae.childLeaving, Pl, Jr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ae.childPulsate, $l, ({
  theme: e
}) => e.transitions.easing.easeInOut), xi = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = vn({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = n, c = Le(n, Rl), [u, l] = w.useState([]), f = w.useRef(0), m = w.useRef(null);
  w.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [u]);
  const p = w.useRef(!1), x = tu(), g = w.useRef(null), d = w.useRef(null), h = w.useCallback((C) => {
    const {
      pulsate: y,
      rippleX: N,
      rippleY: k,
      rippleSize: se,
      cb: ce
    } = C;
    l((ne) => [...ne, /* @__PURE__ */ Se.jsx(jl, {
      classes: {
        ripple: Ne(i.ripple, Ae.ripple),
        rippleVisible: Ne(i.rippleVisible, Ae.rippleVisible),
        ripplePulsate: Ne(i.ripplePulsate, Ae.ripplePulsate),
        child: Ne(i.child, Ae.child),
        childLeaving: Ne(i.childLeaving, Ae.childLeaving),
        childPulsate: Ne(i.childPulsate, Ae.childPulsate)
      },
      timeout: Jr,
      pulsate: y,
      rippleX: N,
      rippleY: k,
      rippleSize: se
    }, f.current)]), f.current += 1, m.current = ce;
  }, [i]), _ = w.useCallback((C = {}, y = {}, N = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: se = o || y.pulsate,
      fakeElement: ce = !1
      // For test purposes
    } = y;
    if ((C == null ? void 0 : C.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (p.current = !0);
    const ne = ce ? null : d.current, G = ne ? ne.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let oe, J, Z;
    if (se || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      oe = Math.round(G.width / 2), J = Math.round(G.height / 2);
    else {
      const {
        clientX: pe,
        clientY: ie
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      oe = Math.round(pe - G.left), J = Math.round(ie - G.top);
    }
    if (se)
      Z = Math.sqrt((2 * G.width ** 2 + G.height ** 2) / 3), Z % 2 === 0 && (Z += 1);
    else {
      const pe = Math.max(Math.abs((ne ? ne.clientWidth : 0) - oe), oe) * 2 + 2, ie = Math.max(Math.abs((ne ? ne.clientHeight : 0) - J), J) * 2 + 2;
      Z = Math.sqrt(pe ** 2 + ie ** 2);
    }
    C != null && C.touches ? g.current === null && (g.current = () => {
      h({
        pulsate: k,
        rippleX: oe,
        rippleY: J,
        rippleSize: Z,
        cb: N
      });
    }, x.start(Cl, () => {
      g.current && (g.current(), g.current = null);
    })) : h({
      pulsate: k,
      rippleX: oe,
      rippleY: J,
      rippleSize: Z,
      cb: N
    });
  }, [o, h, x]), R = w.useCallback(() => {
    _({}, {
      pulsate: !0
    });
  }, [_]), $ = w.useCallback((C, y) => {
    if (x.clear(), (C == null ? void 0 : C.type) === "touchend" && g.current) {
      g.current(), g.current = null, x.start(0, () => {
        $(C, y);
      });
      return;
    }
    g.current = null, l((N) => N.length > 0 ? N.slice(1) : N), m.current = y;
  }, [x]);
  return w.useImperativeHandle(r, () => ({
    pulsate: R,
    start: _,
    stop: $
  }), [R, _, $]), /* @__PURE__ */ Se.jsx(kl, B({
    className: Ne(Ae.root, i.root, a),
    ref: d
  }, c, {
    children: /* @__PURE__ */ Se.jsx(Sl, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (xi.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: v.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string
});
const Nl = xi;
function Al(e) {
  return xr("MuiButtonBase", e);
}
const Il = dn("MuiButtonBase", ["root", "disabled", "focusVisible"]), Ml = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Dl = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = ai({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Al, o);
  return r && n && (a.root += ` ${n}`), a;
}, Fl = gt("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Il.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), _i = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = vn({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: l = !1,
    disableRipple: f = !1,
    disableTouchRipple: m = !1,
    focusRipple: p = !1,
    LinkComponent: x = "a",
    onBlur: g,
    onClick: d,
    onContextMenu: h,
    onDragLeave: _,
    onFocus: R,
    onFocusVisible: $,
    onKeyDown: C,
    onKeyUp: y,
    onMouseDown: N,
    onMouseLeave: k,
    onMouseUp: se,
    onTouchEnd: ce,
    onTouchMove: ne,
    onTouchStart: G,
    tabIndex: oe = 0,
    TouchRippleProps: J,
    touchRippleRef: Z,
    type: pe
  } = n, ie = Le(n, Ml), Ee = w.useRef(null), le = w.useRef(null), Fe = fo(le, Z), {
    isFocusVisibleRef: E,
    onFocus: S,
    onBlur: L,
    ref: F
  } = uu(), [j, W] = w.useState(!1);
  l && j && W(!1), w.useImperativeHandle(o, () => ({
    focusVisible: () => {
      W(!0), Ee.current.focus();
    }
  }), []);
  const [A, D] = w.useState(!1);
  w.useEffect(() => {
    D(!0);
  }, []);
  const V = A && !f && !l;
  w.useEffect(() => {
    j && p && !f && A && le.current.pulsate();
  }, [f, p, j, A]);
  function M(z, _t, Tt = m) {
    return Ut((Lt) => (_t && _t(Lt), !Tt && le.current && le.current[z](Lt), !0));
  }
  const U = M("start", N), ve = M("stop", h), T = M("stop", _), _e = M("stop", se), P = M("stop", (z) => {
    j && z.preventDefault(), k && k(z);
  }), we = M("start", G), Ve = M("stop", ce), Ze = M("stop", ne), Vt = M("stop", (z) => {
    L(z), E.current === !1 && W(!1), g && g(z);
  }, !1), rt = Ut((z) => {
    Ee.current || (Ee.current = z.currentTarget), S(z), E.current === !0 && (W(!0), $ && $(z)), R && R(z);
  }), bt = () => {
    const z = Ee.current;
    return u && u !== "button" && !(z.tagName === "A" && z.href);
  }, Et = w.useRef(!1), xt = Ut((z) => {
    p && !Et.current && j && le.current && z.key === " " && (Et.current = !0, le.current.stop(z, () => {
      le.current.start(z);
    })), z.target === z.currentTarget && bt() && z.key === " " && z.preventDefault(), C && C(z), z.target === z.currentTarget && bt() && z.key === "Enter" && !l && (z.preventDefault(), d && d(z));
  }), Sr = Ut((z) => {
    p && z.key === " " && le.current && j && !z.defaultPrevented && (Et.current = !1, le.current.stop(z, () => {
      le.current.pulsate(z);
    })), y && y(z), d && z.target === z.currentTarget && bt() && z.key === " " && !z.defaultPrevented && d(z);
  });
  let nt = u;
  nt === "button" && (ie.href || ie.to) && (nt = x);
  const Ge = {};
  nt === "button" ? (Ge.type = pe === void 0 ? "button" : pe, Ge.disabled = l) : (!ie.href && !ie.to && (Ge.role = "button"), l && (Ge["aria-disabled"] = l));
  const zt = fo(r, F, Ee);
  process.env.NODE_ENV !== "production" && w.useEffect(() => {
    V && !le.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [V]);
  const Ke = B({}, n, {
    centerRipple: i,
    component: u,
    disabled: l,
    disableRipple: f,
    disableTouchRipple: m,
    focusRipple: p,
    tabIndex: oe,
    focusVisible: j
  }), Rr = Dl(Ke);
  return /* @__PURE__ */ Se.jsxs(Fl, B({
    as: nt,
    className: Ne(Rr.root, c),
    ownerState: Ke,
    onBlur: Vt,
    onClick: d,
    onContextMenu: ve,
    onFocus: rt,
    onKeyDown: xt,
    onKeyUp: Sr,
    onMouseDown: U,
    onMouseLeave: P,
    onMouseUp: _e,
    onDragLeave: T,
    onTouchEnd: Ve,
    onTouchMove: Ze,
    onTouchStart: we,
    ref: zt,
    tabIndex: l ? -1 : oe,
    type: pe
  }, Ge, ie, {
    children: [a, V ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ Se.jsx(Nl, B({
        ref: Fe,
        center: i
      }, J))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (_i.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Xc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: v.bool,
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Kc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: v.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: v.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: v.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: v.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: v.string,
  /**
   * @ignore
   */
  href: v.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: v.elementType,
  /**
   * @ignore
   */
  onBlur: v.func,
  /**
   * @ignore
   */
  onClick: v.func,
  /**
   * @ignore
   */
  onContextMenu: v.func,
  /**
   * @ignore
   */
  onDragLeave: v.func,
  /**
   * @ignore
   */
  onFocus: v.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: v.func,
  /**
   * @ignore
   */
  onKeyDown: v.func,
  /**
   * @ignore
   */
  onKeyUp: v.func,
  /**
   * @ignore
   */
  onMouseDown: v.func,
  /**
   * @ignore
   */
  onMouseLeave: v.func,
  /**
   * @ignore
   */
  onMouseUp: v.func,
  /**
   * @ignore
   */
  onTouchEnd: v.func,
  /**
   * @ignore
   */
  onTouchMove: v.func,
  /**
   * @ignore
   */
  onTouchStart: v.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * @default 0
   */
  tabIndex: v.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: v.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: v.oneOfType([v.func, v.shape({
    current: v.shape({
      pulsate: v.func.isRequired,
      start: v.func.isRequired,
      stop: v.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: v.oneOfType([v.oneOf(["button", "reset", "submit"]), v.string])
});
const Vl = _i;
function zl(e) {
  return xr("MuiButton", e);
}
const Ll = dn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Gt = Ll, Ti = /* @__PURE__ */ w.createContext({});
process.env.NODE_ENV !== "production" && (Ti.displayName = "ButtonGroupContext");
const Bl = Ti, Oi = /* @__PURE__ */ w.createContext(void 0);
process.env.NODE_ENV !== "production" && (Oi.displayName = "ButtonGroupButtonContext");
const Wl = Oi, Ul = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Yl = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${Re(t)}`, `size${Re(o)}`, `${i}Size${Re(o)}`, `color${Re(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Re(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${Re(o)}`]
  }, u = ai(c, zl, a);
  return B({}, a, u);
}, Si = (e) => B({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), ql = gt(Vl, {
  shouldForwardProp: (e) => bi(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${Re(r.color)}`], t[`size${Re(r.size)}`], t[`${r.variant}Size${Re(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return B({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": B({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Yt(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Yt(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Yt(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": B({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Gt.focusVisible}`]: B({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Gt.disabled}`]: B({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Yt(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (r = (n = e.palette).getContrastText) == null ? void 0 : r.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Gt.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Gt.disabled}`]: {
    boxShadow: "none"
  }
}), Gl = gt("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${Re(r.size)}`]];
  }
})(({
  ownerState: e
}) => B({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Si(e))), Kl = gt("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${Re(r.size)}`]];
  }
})(({
  ownerState: e
}) => B({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Si(e))), Ri = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = w.useContext(Bl), o = w.useContext(Wl), i = pn(n, t), a = vn({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: u = "primary",
    component: l = "button",
    className: f,
    disabled: m = !1,
    disableElevation: p = !1,
    disableFocusRipple: x = !1,
    endIcon: g,
    focusVisibleClassName: d,
    fullWidth: h = !1,
    size: _ = "medium",
    startIcon: R,
    type: $,
    variant: C = "text"
  } = a, y = Le(a, Ul), N = B({}, a, {
    color: u,
    component: l,
    disabled: m,
    disableElevation: p,
    disableFocusRipple: x,
    fullWidth: h,
    size: _,
    type: $,
    variant: C
  }), k = Yl(N), se = R && /* @__PURE__ */ Se.jsx(Gl, {
    className: k.startIcon,
    ownerState: N,
    children: R
  }), ce = g && /* @__PURE__ */ Se.jsx(Kl, {
    className: k.endIcon,
    ownerState: N,
    children: g
  }), ne = o || "";
  return /* @__PURE__ */ Se.jsxs(ql, B({
    ownerState: N,
    className: Ne(n.className, k.root, f, ne),
    component: l,
    disabled: m,
    focusRipple: !x,
    focusVisibleClassName: Ne(k.focusVisible, d),
    ref: r,
    type: $
  }, y, {
    classes: k,
    children: [se, c, ce]
  }));
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: v.oneOfType([v.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), v.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: v.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: v.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: v.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: v.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: v.bool,
  /**
   * Element placed after the children.
   */
  endIcon: v.node,
  /**
   * @ignore
   */
  focusVisibleClassName: v.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: v.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: v.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: v.oneOfType([v.oneOf(["small", "medium", "large"]), v.string]),
  /**
   * Element placed before the children.
   */
  startIcon: v.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * @ignore
   */
  type: v.oneOfType([v.oneOf(["button", "reset", "submit"]), v.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: v.oneOfType([v.oneOf(["contained", "outlined", "text"]), v.string])
});
const Hl = Ri, Jl = () => {
  const [e, t] = Wi(0);
  return /* @__PURE__ */ Se.jsxs("div", { onClick: () => t((r) => r + 1), children: [
    /* @__PURE__ */ Se.jsx("h4", { children: "Shared Component" }),
    /* @__PURE__ */ Se.jsxs(Hl, { variant: "contained", color: "primary", children: [
      "Count ",
      e
    ] })
  ] });
}, Zl = hi({
  palette: {
    mode: "dark",
    primary: {
      main: "#C40109"
    }
  }
});
export {
  Jl as SharedComponent,
  Zl as koopTheme
};
//# sourceMappingURL=index.es.js.map
