/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.4", n = function (a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
            } else if (g) {
                for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
            } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ea = function () {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName)return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    return p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b)return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)return la(a, b);
                c = a;
                while (c = c.parentNode)h.unshift(c);
                c = b;
                while (c = c.parentNode)i.unshift(c);
                while (h[d] === i[d])d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: oa(function () {
                    return [0]
                }), last: oa(function (a, b) {
                    return [b - 1]
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = ma(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = na(b);
        function qa() {
        }

        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else while (b = b[d])if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return !0
                }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)if (c = d.relative[a[i].type])m = [sa(ta(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                }
                m.push(c)
            }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a)return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b))return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b))return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++)if (n.contains(e[b], this))return !0
            }));
            for (b = 0; c > b; b++)n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
                if (e && n(a).is(c))break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)if (n.contains(this, b[a]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return n.Deferred(function (c) {
                        n.each(b, function (b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? n.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c)
            })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a))return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)return c;
                    if (c = M.get(f, d), void 0 !== c)return c;
                    if (c = P(f, d, void 0), void 0 !== c)return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        L.remove(a, [b + "queue", c])
                    })
                })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i)n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;
    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)pa(f[d], g[d]);
            if (b)if (c)for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)na(f[d], g[d]); else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)if (e = a[m], e || 0 === e)if ("object" === n.type(e))n.merge(l, e.nodeType ? [e] : e); else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                while (j--)f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                j = 0;
                while (e = f[j++])fa.test(e.type || "") && c.push(e)
            }
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p))return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++)h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }

    var ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                }, boxSizingReliable: function () {
                    return null == c && g(), c
                }, reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"), Ba = new RegExp("^([+-])=(" + Q + ")", "i"), Ca = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Da = {letterSpacing: "0", fontWeight: "400"}, Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a)return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
        while (e--)if (b = Ea[e] + c, b in a)return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xa, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Ja(this, !0)
        }, hide: function () {
            return Ja(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }

    n.Tween = Ka, Ka.prototype = {
        constructor: Ka, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pa = /queueHooks$/, Qa = [Va], Ra = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };

    function Sa() {
        return setTimeout(function () {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], Na.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d])continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m))"inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m)n.style(a, b, m[b])
            });
            for (d in m)g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)if (d = Qa[f].call(j, a, k, j.opts))return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function (a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                f = 0;
                while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                f = 0;
                while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a)return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {}, f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)for (e in h)if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c)f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = gb.exec(e))f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? e : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t)return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (j in{success: 1, error: 1, complete: 1})v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t))throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild)a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b))n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b))d(a, b); else for (e in b)Ab(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(xb, "\r\n")}
                }) : {name: b.name, value: c.replace(xb, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Bb = 0, Cb = {}, Db = {0: 200, 1223: 204}, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb)Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb)return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f)return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
/*
 By Osvaldas Valutis, www.osvaldas.info
 Available for use under the MIT License
 */

;(function ($, window, document, undefined) {
    $.fn.doubleTapToGo = function (params) {
        if (!( 'ontouchstart' in window ) && !navigator.msMaxTouchPoints && !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) return false;

        this.each(function () {
            var curItem = false;

            $(this).on('click', function (e) {
                var item = $(this);
                if (item[0] != curItem[0]) {
                    e.preventDefault();
                    curItem = item;
                }
            });

            $(document).on('click touchstart MSPointerDown', function (e) {
                var resetItem = true,
                    parents = $(e.target).parents();

                for (var i = 0; i < parents.length; i++)
                    if (parents[i] == curItem[0])
                        resetItem = false;

                if (resetItem)
                    curItem = false;
            });
        });
        return this;
    };
})(jQuery, window, document);
$(document).ready(function () {

    $('body').addClass('js');

    // $('.tooltip').tooltipster({
    //   'maxWidth': 270
    // });

    // $('.tooltip').on('focus', function() {
    //   console.log($(this));
    //   $(this).tooltipster('show');
    // }).on('blur', function() {
    //   $(this).tooltipster('hide');
    // });

    // var placeHolderConfig = {
    //   className: 'placeholder-polyfill'
    // };

    // /* global svgeezy */
    // svgeezy.init(false, 'png'); // this will let the plugin check all images

});
/*
 Highcharts JS v4.1.9 (2015-10-07)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
 */
(function () {
    function D() {
        var a, b = arguments, c, d = {}, e = function (a, b) {
            var c, d;
            typeof a !== "object" && (a = {});
            for (d in b)b.hasOwnProperty(d) && (c = b[d], a[d] = c && typeof c === "object" && Object.prototype.toString.call(c) !== "[object Array]" && d !== "renderTo" && typeof c.nodeType !== "number" ? e(a[d] || {}, c) : b[d]);
            return a
        };
        b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++)d = e(d, b[a]);
        return d
    }

    function G(a, b) {
        return parseInt(a, b || 10)
    }

    function Ba(a) {
        return typeof a === "string"
    }

    function da(a) {
        return a &&
            typeof a === "object"
    }

    function Ga(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function qa(a) {
        return typeof a === "number"
    }

    function Ca(a) {
        return V.log(a) / V.LN10
    }

    function ia(a) {
        return V.pow(10, a)
    }

    function ja(a, b) {
        for (var c = a.length; c--;)if (a[c] === b) {
            a.splice(c, 1);
            break
        }
    }

    function q(a) {
        return a !== x && a !== null
    }

    function K(a, b, c) {
        var d, e;
        if (Ba(b))q(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (q(b) && da(b))for (d in b)a.setAttribute(d, b[d]);
        return e
    }

    function ra(a) {
        return Ga(a) ?
            a : [a]
    }

    function M(a, b) {
        if (sa && !ca && b && b.opacity !== x)b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        t(a.style, b)
    }

    function $(a, b, c, d, e) {
        a = C.createElement(a);
        b && t(a, b);
        e && M(a, {padding: 0, border: P, margin: 0});
        c && M(a, c);
        d && d.appendChild(a);
        return a
    }

    function ka(a, b) {
        var c = function () {
            return x
        };
        c.prototype = new a;
        t(c.prototype, b);
        return c
    }

    function Ha(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function Wa(a) {
        return (db && db(a) || nb || 0) * 6E4
    }

    function Ia(a, b) {
        for (var c = "{", d = !1, e, f, g, h, i, j = []; (c = a.indexOf(c)) !== -1;) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                i = g.length;
                e = b;
                for (h = 0; h < i; h++)e = e[g[h]];
                if (f.length)f = f.join(":"), g = /\.([0-9])/, h = S.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e !== null && (e = B.numberFormat(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : ""))) : e = Na(f, e)
            }
            j.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        j.push(a);
        return j.join("")
    }

    function ob(a) {
        return V.pow(10, T(V.log(a) / V.LN10))
    }

    function pb(a, b, c, d, e) {
        var f, g = a, c = p(c, 1);
        f = a / c;
        b || (b = [1, 2, 2.5, 5, 10], d === !1 && (c ===
        1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));
        for (d = 0; d < b.length; d++)if (g = b[d], e && g * c >= a || !e && f <= (b[d] + (b[d + 1] || b[d])) / 2)break;
        g *= c;
        return g
    }

    function qb(a, b) {
        var c = a.length, d, e;
        for (e = 0; e < c; e++)a[e].ss_i = e;
        a.sort(function (a, c) {
            d = b(a, c);
            return d === 0 ? a.ss_i - c.ss_i : d
        });
        for (e = 0; e < c; e++)delete a[e].ss_i
    }

    function Oa(a) {
        for (var b = a.length, c = a[0]; b--;)a[b] < c && (c = a[b]);
        return c
    }

    function Da(a) {
        for (var b = a.length, c = a[0]; b--;)a[b] > c && (c = a[b]);
        return c
    }

    function Pa(a, b) {
        for (var c in a)a[c] && a[c] !== b && a[c].destroy && a[c].destroy(),
            delete a[c]
    }

    function Qa(a) {
        eb || (eb = $(Ja));
        a && eb.appendChild(a);
        eb.innerHTML = ""
    }

    function la(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b)throw c;
        L.console && console.log(c)
    }

    function ea(a, b) {
        return parseFloat(a.toPrecision(b || 14))
    }

    function Ra(a, b) {
        b.renderer.globalAnimation = p(a, b.animation)
    }

    function Cb() {
        var a = S.global, b = a.useUTC, c = b ? "getUTC" : "get", d = b ? "setUTC" : "set";
        ya = a.Date || window.Date;
        nb = b && a.timezoneOffset;
        db = b && a.getTimezoneOffset;
        fb = function (a, c, d, h, i, j) {
            var k;
            b ? (k =
                ya.UTC.apply(0, arguments), k += Wa(k)) : k = (new ya(a, c, p(d, 1), p(h, 0), p(i, 0), p(j, 0))).getTime();
            return k
        };
        rb = c + "Minutes";
        sb = c + "Hours";
        tb = c + "Day";
        Xa = c + "Date";
        Ya = c + "Month";
        Za = c + "FullYear";
        Db = d + "Milliseconds";
        Eb = d + "Seconds";
        Fb = d + "Minutes";
        Gb = d + "Hours";
        ub = d + "Date";
        vb = d + "Month";
        wb = d + "FullYear"
    }

    function Q() {
    }

    function Sa(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        !c && !d && this.addLabel()
    }

    function Hb(a, b, c, d, e) {
        var f = a.chart.inverted;
        this.axis = a;
        this.isNegative = c;
        this.options = b;
        this.x = d;
        this.total =
            null;
        this.points = {};
        this.stack = e;
        this.alignOptions = {
            align: b.align || (f ? c ? "left" : "right" : "center"),
            verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"),
            y: p(b.y, f ? 4 : c ? 14 : -6),
            x: p(b.x, f ? c ? -6 : 6 : 0)
        };
        this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center")
    }

    var x, C = document, L = window, V = Math, w = V.round, T = V.floor, ta = V.ceil, s = V.max, z = V.min, O = V.abs, W = V.cos, aa = V.sin, ma = V.PI, ga = ma * 2 / 360, za = navigator.userAgent, Ib = L.opera, sa = /(msie|trident|edge)/i.test(za) && !Ib, gb = C.documentMode === 8, hb = !sa && /AppleWebKit/.test(za),
        Ka = /Firefox/.test(za), Jb = /(Mobile|Android|Windows Phone)/.test(za), Ea = "http://www.w3.org/2000/svg", ca = !!C.createElementNS && !!C.createElementNS(Ea, "svg").createSVGRect, Nb = Ka && parseInt(za.split("Firefox/")[1], 10) < 4, fa = !ca && !sa && !!C.createElement("canvas").getContext, $a, ab, Kb = {}, xb = 0, eb, S, Na, yb, F, ua = function () {
            return x
        }, X = [], bb = 0, Ja = "div", P = "none", Ob = /^[0-9]+$/, ib = ["plotTop", "marginRight", "marginBottom", "plotLeft"], Pb = "stroke-width", ya, fb, nb, db, rb, sb, tb, Xa, Ya, Za, Db, Eb, Fb, Gb, ub, vb, wb, N = {}, B;
    B = L.Highcharts =
        L.Highcharts ? la(16, !0) : {};
    B.seriesTypes = N;
    var t = B.extend = function (a, b) {
        var c;
        a || (a = {});
        for (c in b)a[c] = b[c];
        return a
    }, p = B.pick = function () {
        var a = arguments, b, c, d = a.length;
        for (b = 0; b < d; b++)if (c = a[b], c !== x && c !== null)return c
    }, Ta = B.wrap = function (a, b, c) {
        var d = a[b];
        a[b] = function () {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this, a)
        }
    };
    Na = function (a, b, c) {
        if (!q(b) || isNaN(b))return S.lang.invalidDate || "";
        var a = p(a, "%Y-%m-%d %H:%M:%S"), d = new ya(b - Wa(b)), e, f = d[sb](), g = d[tb](), h = d[Xa](),
            i = d[Ya](), j = d[Za](), k = S.lang, m = k.weekdays, d = t({
                a: m[g].substr(0, 3),
                A: m[g],
                d: Ha(h),
                e: h,
                w: g,
                b: k.shortMonths[i],
                B: k.months[i],
                m: Ha(i + 1),
                y: j.toString().substr(2, 2),
                Y: j,
                H: Ha(f),
                k: f,
                I: Ha(f % 12 || 12),
                l: f % 12 || 12,
                M: Ha(d[rb]()),
                p: f < 12 ? "AM" : "PM",
                P: f < 12 ? "am" : "pm",
                S: Ha(d.getSeconds()),
                L: Ha(w(b % 1E3), 3)
            }, B.dateFormats);
        for (e in d)for (; a.indexOf("%" + e) !== -1;)a = a.replace("%" + e, typeof d[e] === "function" ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    F = {
        millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5,
        week: 6048E5, month: 24192E5, year: 314496E5
    };
    B.numberFormat = function (a, b, c, d) {
        var e = S.lang, a = +a || 0, f = b === -1 ? z((a.toString().split(".")[1] || "").length, 20) : isNaN(b = O(b)) ? 2 : b, b = c === void 0 ? e.decimalPoint : c, d = d === void 0 ? e.thousandsSep : d, e = a < 0 ? "-" : "", c = String(G(a = O(a).toFixed(f))), g = c.length > 3 ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + O(a - c).toFixed(f).slice(2) : "")
    };
    yb = {
        init: function (a, b, c) {
            var b = b || "", d = a.shift, e = b.indexOf("C") > -1, f = e ? 7 : 3, g, b = b.split(" "),
                c = [].concat(c), h, i, j = function (a) {
                    for (g = a.length; g--;)a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
                };
            e && (j(b), j(c));
            a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length)for (; d--;)c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length)for (a = c.length; b.length < a;)d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(i));
            return [b, c]
        }, step: function (a, b, c, d) {
            var e = [], f = a.length;
            if (c === 1)e =
                d; else if (f === b.length && c < 1)for (; f--;)d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d; else e = b;
            return e
        }
    };
    (function (a) {
        L.HighchartsAdapter = L.HighchartsAdapter || a && {
                init: function (b) {
                    var c = a.fx;
                    a.extend(a.easing, {
                        easeOutQuad: function (a, b, c, g, h) {
                            return -g * (b /= h) * (b - 2) + c
                        }
                    });
                    a.each(["cur", "_default", "width", "height", "opacity"], function (b, e) {
                        var f = c.step, g;
                        e === "cur" ? f = c.prototype : e === "_default" && a.Tween && (f = a.Tween.propHooks[e], e = "set");
                        (g = f[e]) && (f[e] = function (a) {
                            var c, a = b ? a : this;
                            if (a.prop !==
                                "align")return c = a.elem, c.attr ? c.attr(a.prop, e === "cur" ? x : a.now) : g.apply(this, arguments)
                        })
                    });
                    Ta(a.cssHooks.opacity, "get", function (a, b, c) {
                        return b.attr ? b.opacity || 0 : a.call(this, b, c)
                    });
                    this.addAnimSetter("d", function (a) {
                        var c = a.elem, f;
                        if (!a.started)f = b.init(c, c.d, c.toD), a.start = f[0], a.end = f[1], a.started = !0;
                        c.attr("d", b.step(a.start, a.end, a.pos, c.toD))
                    });
                    this.each = Array.prototype.forEach ? function (a, b) {
                        return Array.prototype.forEach.call(a, b)
                    } : function (a, b) {
                        var c, g = a.length;
                        for (c = 0; c < g; c++)if (b.call(a[c],
                                a[c], c, a) === !1)return c
                    };
                    a.fn.highcharts = function () {
                        var a = "Chart", b = arguments, c, g;
                        if (this[0]) {
                            Ba(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1));
                            c = b[0];
                            if (c !== x)c.chart = c.chart || {}, c.chart.renderTo = this[0], new B[a](c, b[1]), g = this;
                            c === x && (g = X[K(this[0], "data-highcharts-chart")])
                        }
                        return g
                    }
                }, addAnimSetter: function (b, c) {
                    a.Tween ? a.Tween.propHooks[b] = {set: c} : a.fx.step[b] = c
                }, getScript: a.getScript, inArray: a.inArray, adapterRun: function (b, c) {
                    return a(b)[c]()
                }, grep: a.grep, map: function (a, c) {
                    for (var d = [], e =
                        0, f = a.length; e < f; e++)d[e] = c.call(a[e], a[e], e, a);
                    return d
                }, offset: function (b) {
                    return a(b).offset()
                }, addEvent: function (b, c, d) {
                    a(b).bind(c, d)
                }, removeEvent: function (b, c, d) {
                    var e = C.removeEventListener ? "removeEventListener" : "detachEvent";
                    C[e] && b && !b[e] && (b[e] = function () {
                    });
                    a(b).unbind(c, d)
                }, fireEvent: function (b, c, d, e) {
                    var f = a.Event(c), g = "detached" + c, h;
                    !sa && d && (delete d.layerX, delete d.layerY, delete d.returnValue);
                    t(f, d);
                    b[c] && (b[g] = b[c], b[c] = null);
                    a.each(["preventDefault", "stopPropagation"], function (a,
                                                                            b) {
                        var c = f[b];
                        f[b] = function () {
                            try {
                                c.call(f)
                            } catch (a) {
                                b === "preventDefault" && (h = !0)
                            }
                        }
                    });
                    a(b).trigger(f);
                    b[g] && (b[c] = b[g], b[g] = null);
                    e && !f.isDefaultPrevented() && !h && e(f)
                }, washMouseEvent: function (a) {
                    var c = a.originalEvent || a;
                    if (c.pageX === x)c.pageX = a.pageX, c.pageY = a.pageY;
                    return c
                }, animate: function (b, c, d) {
                    var e = a(b);
                    if (!b.style)b.style = {};
                    if (c.d)b.toD = c.d, c.d = 1;
                    e.stop();
                    c.opacity !== x && b.attr && (c.opacity += "px");
                    b.hasAnim = 1;
                    e.animate(c, d)
                }, stop: function (b) {
                    b.hasAnim && a(b).stop()
                }
            }
    })(L.jQuery);
    var U = L.HighchartsAdapter,
        E = U || {};
    U && U.init.call(U, yb);
    var jb = E.adapterRun, Qb = E.getScript, La = E.inArray, o = B.each = E.each, kb = E.grep, Rb = E.offset, Ua = E.map, I = E.addEvent, Y = E.removeEvent, J = E.fireEvent, Sb = E.washMouseEvent, lb = E.animate, cb = E.stop;
    S = {
        colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/4.1.9/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/4.1.9/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}}
        },
        title: {text: "Chart title", align: "center", margin: 15, style: {color: "#333333", fontSize: "18px"}},
        subtitle: {text: "", align: "center", style: {color: "#555555"}},
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {duration: 1E3},
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0, radius: 4, lineColor: "#FFFFFF", states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1, radiusPlus: 2
                        }, select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}
                    }
                },
                point: {events: {}},
                dataLabels: {
                    align: "center",
                    formatter: function () {
                        return this.y === null ? "" : B.numberFormat(this.y, -1)
                    },
                    style: {
                        color: "contrast",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textShadow: "0 0 6px contrast, 0 0 3px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                softThreshold: !0,
                states: {hover: {lineWidthPlus: 1, marker: {}, halo: {size: 10, opacity: 0.25}}, select: {marker: {}}},
                stickyTracking: !0,
                turboThreshold: 1E3
            }
        },
        labels: {style: {position: "absolute", color: "#3E576F"}},
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function () {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {activeColor: "#274b6d", inactiveColor: "#CCC"},
            shadow: !1,
            itemStyle: {color: "#333333", fontSize: "12px", fontWeight: "bold"},
            itemHoverStyle: {color: "#000"},
            itemHiddenStyle: {color: "#CCC"},
            itemCheckboxStyle: {position: "absolute", width: "13px", height: "13px"},
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {style: {fontWeight: "bold"}}
        },
        loading: {
            labelStyle: {fontWeight: "bold", position: "relative", top: "45%"},
            style: {position: "absolute", backgroundColor: "white", opacity: 0.5, textAlign: "center"}
        },
        tooltip: {
            enabled: !0,
            animation: ca,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: Jb ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
            style: {
                cursor: "pointer", color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var ba = S.plotOptions, U = ba.line;
    Cb();
    var Tb = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, Ub = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, Vb = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, na = function (a) {
        var b = [], c, d;
        (function (a) {
            a && a.stops ? d = Ua(a.stops, function (a) {
                return na(a[1])
            }) : (c = Tb.exec(a)) ? b = [G(c[1]), G(c[2]), G(c[3]), parseFloat(c[4], 10)] : (c = Ub.exec(a)) ? b = [G(c[1], 16), G(c[2], 16), G(c[3], 16), 1] : (c = Vb.exec(a)) &&
            (b = [G(c[1]), G(c[2]), G(c[3]), 1])
        })(a);
        return {
            get: function (c) {
                var f;
                d ? (f = D(a), f.stops = [].concat(f.stops), o(d, function (a, b) {
                    f.stops[b] = [f.stops[b][0], a.get(c)]
                })) : f = b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : c === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a;
                return f
            }, brighten: function (a) {
                if (d)o(d, function (b) {
                    b.brighten(a)
                }); else if (qa(a) && a !== 0) {
                    var c;
                    for (c = 0; c < 3; c++)b[c] += G(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255)
                }
                return this
            }, rgba: b, setOpacity: function (a) {
                b[3] = a;
                return this
            }, raw: a
        }
    };
    Q.prototype =
    {
        opacity: 1,
        textProps: "fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
        init: function (a, b) {
            this.element = b === "span" ? $(b) : C.createElementNS(Ea, b);
            this.renderer = a
        },
        animate: function (a, b, c) {
            b = p(b, this.renderer.globalAnimation, !0);
            cb(this);
            if (b) {
                b = D(b, {});
                if (c)b.complete = c;
                lb(this, a, b)
            } else this.attr(a, null, c);
            return this
        },
        colorGradient: function (a, b, c) {
            var d = this.renderer, e, f, g, h, i, j, k, m, n, l, u, r = [];
            a.linearGradient ? f = "linearGradient" : a.radialGradient &&
            (f = "radialGradient");
            if (f) {
                g = a[f];
                i = d.gradients;
                k = a.stops;
                l = c.radialReference;
                Ga(g) && (a[f] = g = {x1: g[0], y1: g[1], x2: g[2], y2: g[3], gradientUnits: "userSpaceOnUse"});
                f === "radialGradient" && l && !q(g.gradientUnits) && (h = g, g = D(g, d.getRadialAttr(l, h), {gradientUnits: "userSpaceOnUse"}));
                for (u in g)u !== "id" && r.push(u, g[u]);
                for (u in k)r.push(k[u]);
                r = r.join(",");
                i[r] ? a = i[r].attr("id") : (g.id = a = "highcharts-" + xb++, i[r] = j = d.createElement(f).attr(g).add(d.defs), j.radAttr = h, j.stops = [], o(k, function (a) {
                    a[1].indexOf("rgba") ===
                    0 ? (e = na(a[1]), m = e.get("rgb"), n = e.get("a")) : (m = a[1], n = 1);
                    a = d.createElement("stop").attr({offset: a[0], "stop-color": m, "stop-opacity": n}).add(j);
                    j.stops.push(a)
                }));
                c.setAttribute(b, "url(" + d.url + "#" + a + ")");
                c.gradient = r
            }
        },
        applyTextShadow: function (a) {
            var b = this.element, c, d = a.indexOf("contrast") !== -1, e = {}, f = this.renderer.forExport, g = f || b.style.textShadow !== x && !sa;
            if (d)e.textShadow = a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill));
            if (hb || f)e.textRendering = "geometricPrecision";
            g ? this.css(e) :
                (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")), o(a.split(/\s?,\s?/g), function (a) {
                    var d = b.firstChild, e, f, a = a.split(" ");
                    e = a[a.length - 1];
                    (f = a[a.length - 2]) && o(c, function (a, c) {
                        var g;
                        c === 0 && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), c === null && b.setAttribute("y", 0));
                        g = a.cloneNode(1);
                        K(g, {
                            "class": "highcharts-text-shadow",
                            fill: e,
                            stroke: e,
                            "stroke-opacity": 1 / s(G(f), 3),
                            "stroke-width": f,
                            "stroke-linejoin": "round"
                        });
                        b.insertBefore(g,
                            d)
                    })
                }))
        },
        attr: function (a, b, c) {
            var d, e = this.element, f, g = this, h;
            typeof a === "string" && b !== x && (d = a, a = {}, a[d] = b);
            if (typeof a === "string")g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e); else {
                for (d in a) {
                    b = a[d];
                    h = !1;
                    this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0);
                    if (this.rotation && (d === "x" || d === "y"))this.doTransform = !0;
                    h || (this[d + "Setter"] || this._defaultSetter).call(this, b, d, e);
                    this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) &&
                    this.updateShadows(d, b)
                }
                if (this.doTransform)this.updateTransform(), this.doTransform = !1
            }
            c && c();
            return g
        },
        updateShadows: function (a, b) {
            for (var c = this.shadows, d = c.length; d--;)c[d].setAttribute(a, a === "height" ? s(b - (c[d].cutHeight || 0), 0) : a === "d" ? this.d : b)
        },
        addClass: function (a) {
            var b = this.element, c = K(b, "class") || "";
            c.indexOf(a) === -1 && K(b, "class", c + " " + a);
            return this
        },
        symbolAttr: function (a) {
            var b = this;
            o("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function (c) {
                b[c] = p(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x,
                    b.y, b.width, b.height, b)
            })
        },
        clip: function (a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : P)
        },
        crisp: function (a) {
            var b, c = {}, d, e = a.strokeWidth || this.strokeWidth || 0;
            d = w(e) % 2 / 2;
            a.x = T(a.x || this.x || 0) + d;
            a.y = T(a.y || this.y || 0) + d;
            a.width = T((a.width || this.width || 0) - 2 * d);
            a.height = T((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a)this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        },
        css: function (a) {
            var b = this.styles, c = {}, d = this.element, e, f, g = "";
            e = !b;
            if (a && a.color)a.fill = a.color;
            if (b)for (f in a)a[f] !==
            b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && d.nodeName.toLowerCase() === "text" && G(a.width) || this.textWidth;
                b && (a = t(b, c));
                this.styles = a;
                e && (fa || !ca && this.renderer.forExport) && delete a.width;
                if (sa && !ca)M(this.element, a); else {
                    b = function (a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (f in a)g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    K(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function (a, b) {
            var c = this, d = c.element;
            ab && a === "click" ? (d.ontouchstart = function (a) {
                c.touchEventFired =
                    ya.now();
                a.preventDefault();
                b.call(d, a)
            }, d.onclick = function (a) {
                (za.indexOf("Android") === -1 || ya.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a)
            }) : d["on" + a] = b;
            return this
        },
        setRadialReference: function (a) {
            var b = this.renderer.gradients[this.element.gradient];
            this.element.radialReference = a;
            b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
            return this
        },
        translate: function (a, b) {
            return this.attr({translateX: a, translateY: b})
        },
        invert: function () {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function () {
            var a = this.translateX || 0, b = this.translateY || 0, c = this.scaleX, d = this.scaleY, e = this.inverted, f = this.rotation, g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (q(c) || q(d)) && a.push("scale(" + p(c, 1) + " " + p(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "))
        },
        toFront: function () {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function (a, b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions = a, this.alignByTranslate = b, !c || Ba(c))this.alignTo = d = c || "renderer", ja(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = p(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            if (d === "right" || d === "center")f += (c.width - (a.width || 0)) / {right: 1, center: 2}[d];
            h[b ? "translateX" : "x"] = w(f);
            if (e === "bottom" || e === "middle")g += (c.height -
                (a.height || 0)) / ({bottom: 1, middle: 2}[e] || 1);
            h[b ? "translateY" : "y"] = w(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        },
        getBBox: function (a) {
            var b, c = this.renderer, d, e = this.rotation, f = this.element, g = this.styles, h = e * ga;
            d = this.textStr;
            var i, j = f.style, k, m;
            d !== x && (m = ["", e || 0, g && g.fontSize, f.style.width].join(","), m = d === "" || Ob.test(d) ? "num:" + d.toString().length + m : d + m);
            m && !a && (b = c.cache[m]);
            if (!b) {
                if (f.namespaceURI === Ea || c.forExport) {
                    try {
                        k = this.fakeTS && function (a) {
                                o(f.querySelectorAll(".highcharts-text-shadow"),
                                    function (b) {
                                        b.style.display = a
                                    })
                            }, Ka && j.textShadow ? (i = j.textShadow, j.textShadow = "") : k && k(P), b = f.getBBox ? t({}, f.getBBox()) : {
                            width: f.offsetWidth,
                            height: f.offsetHeight
                        }, i ? j.textShadow = i : k && k("")
                    } catch (n) {
                    }
                    if (!b || b.width < 0)b = {width: 0, height: 0}
                } else b = this.htmlGetBBox();
                if (c.isSVG) {
                    a = b.width;
                    d = b.height;
                    if (sa && g && g.fontSize === "11px" && d.toPrecision(3) === "16.9")b.height = d = 14;
                    if (e)b.width = O(d * aa(h)) + O(a * W(h)), b.height = O(d * W(h)) + O(a * aa(h))
                }
                m && (c.cache[m] = b)
            }
            return b
        },
        show: function (a) {
            return this.attr({
                visibility: a ?
                    "inherit" : "visible"
            })
        },
        hide: function () {
            return this.attr({visibility: "hidden"})
        },
        fadeOut: function (a) {
            var b = this;
            b.animate({opacity: 0}, {
                duration: a || 150, complete: function () {
                    b.attr({y: -9999})
                }
            })
        },
        add: function (a) {
            var b = this.renderer, c = this.element, d;
            if (a)this.parentGroup = a;
            this.parentInverted = a && a.inverted;
            this.textStr !== void 0 && b.buildText(this);
            this.added = !0;
            if (!a || a.handleZ || this.zIndex)d = this.zIndexSetter();
            d || (a ? a.element : b.box).appendChild(c);
            if (this.onAdd)this.onAdd();
            return this
        },
        safeRemoveChild: function (a) {
            var b =
                a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function () {
            var a = this, b = a.element || {}, c = a.shadows, d = a.renderer.isSVG && b.nodeName === "SPAN" && a.parentGroup, e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            cb(a);
            if (a.clipPath)a.clipPath = a.clipPath.destroy();
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++)a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && o(c, function (b) {
                a.safeRemoveChild(b)
            }); d && d.div && d.div.childNodes.length === 0;)b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div,
                d = b;
            a.alignTo && ja(a.renderer.alignedObjects, a);
            for (e in a)delete a[e];
            return null
        },
        shadow: function (a, b, c) {
            var d = [], e, f, g = this.element, h, i, j, k;
            if (a) {
                i = p(a.width, 3);
                j = (a.opacity || 0.15) / i;
                k = this.parentInverted ? "(-1,-1)" : "(" + p(a.offsetX, 1) + ", " + p(a.offsetY, 1) + ")";
                for (e = 1; e <= i; e++) {
                    f = g.cloneNode(0);
                    h = i * 2 + 1 - 2 * e;
                    K(f, {
                        isShadow: "true",
                        stroke: a.color || "black",
                        "stroke-opacity": j * e,
                        "stroke-width": h,
                        transform: "translate" + k,
                        fill: P
                    });
                    if (c)K(f, "height", s(K(f, "height") - h, 0)), f.cutHeight = h;
                    b ? b.element.appendChild(f) :
                        g.parentNode.insertBefore(f, g);
                    d.push(f)
                }
                this.shadows = d
            }
            return this
        },
        xGetter: function (a) {
            this.element.nodeName === "circle" && (a = {x: "cx", y: "cy"}[a] || a);
            return this._defaultGetter(a)
        },
        _defaultGetter: function (a) {
            a = p(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        },
        dSetter: function (a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b, a);
            this[b] = a
        },
        dashstyleSetter: function (a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a =
                    a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--;)a[b] = G(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN", "none");
                this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function (a) {
            this.element.setAttribute("text-anchor", {left: "start", center: "middle", right: "end"}[a])
        },
        opacitySetter: function (a,
                                 b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        },
        titleSetter: function (a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = C.createElementNS(Ea, "title"), this.element.appendChild(b));
            b.appendChild(C.createTextNode(String(p(a), "").replace(/<[^>]*>/g, "")))
        },
        textSetter: function (a) {
            if (a !== this.textStr)delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this)
        },
        fillSetter: function (a, b, c) {
            typeof a === "string" ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        },
        visibilitySetter: function (a, b, c) {
            a ===
            "inherit" ? c.removeAttribute(b) : c.setAttribute(b, a)
        },
        zIndexSetter: function (a, b) {
            var c = this.renderer, d = this.parentGroup, c = (d || c).element || c.box, e, f, g = this.element, h;
            e = this.added;
            var i;
            q(a) && (g.setAttribute(b, a), a = +a, this[b] === a && (e = !1), this[b] = a);
            if (e) {
                if ((a = this.zIndex) && d)d.handleZ = !0;
                d = c.childNodes;
                for (i = 0; i < d.length && !h; i++)if (e = d[i], f = K(e, "zIndex"), e !== g && (G(f) > a || !q(a) && q(f)))c.insertBefore(g, e), h = !0;
                h || c.appendChild(g)
            }
            return h
        },
        _defaultSetter: function (a, b, c) {
            c.setAttribute(b, a)
        }
    };
    Q.prototype.yGetter =
        Q.prototype.xGetter;
    Q.prototype.translateXSetter = Q.prototype.translateYSetter = Q.prototype.rotationSetter = Q.prototype.verticalAlignSetter = Q.prototype.scaleXSetter = Q.prototype.scaleYSetter = function (a, b) {
        this[b] = a;
        this.doTransform = !0
    };
    Q.prototype["stroke-widthSetter"] = Q.prototype.strokeSetter = function (a, b, c) {
        this[b] = a;
        if (this.stroke && this["stroke-width"])this.strokeWidth = this["stroke-width"], Q.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]),
            this.hasStroke = !0; else if (b === "stroke-width" && a === 0 && this.hasStroke)c.removeAttribute("stroke"), this.hasStroke = !1
    };
    var Aa = function () {
        this.init.apply(this, arguments)
    };
    Aa.prototype = {
        Element: Q, init: function (a, b, c, d, e, f) {
            var g = location, h, d = this.createElement("svg").attr({version: "1.1"}).css(this.getStyle(d));
            h = d.element;
            a.appendChild(h);
            a.innerHTML.indexOf("xmlns") === -1 && K(h, "xmlns", Ea);
            this.isSVG = !0;
            this.box = h;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (Ka || hb) && C.getElementsByTagName("base").length ?
                g.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(C.createTextNode("Created with Highcharts 4.1.9"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = f;
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.setSize(b, c, !1);
            var i;
            if (Ka && a.getBoundingClientRect)this.subPixelFix = b = function () {
                M(a, {left: 0, top: 0});
                i = a.getBoundingClientRect();
                M(a, {left: ta(i.left) - i.left + "px", top: ta(i.top) - i.top + "px"})
            }, b(), I(L, "resize",
                b)
        }, getStyle: function (a) {
            return this.style = t({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a)
        }, isHidden: function () {
            return !this.boxWrapper.getBBox().width
        }, destroy: function () {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            Pa(this.gradients || {});
            this.gradients = null;
            if (a)this.defs = a.destroy();
            this.subPixelFix && Y(L, "resize", this.subPixelFix);
            return this.alignedObjects = null
        }, createElement: function (a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        }, draw: function () {
        }, getRadialAttr: function (a, b) {
            return {cx: a[0] - a[2] / 2 + b.cx * a[2], cy: a[1] - a[2] / 2 + b.cy * a[2], r: b.r * a[2]}
        }, buildText: function (a) {
            for (var b = a.element, c = this, d = c.forExport, e = p(a.textStr, "").toString(), f = e.indexOf("<") !== -1, g = b.childNodes, h, i, j = K(b, "x"), k = a.styles, m = a.textWidth, n = k && k.lineHeight, l = k && k.textShadow, u = k && k.textOverflow === "ellipsis", r = g.length, Z = m && !a.added && this.box, A = function (a) {
                return n ? G(n) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize :
                k && k.fontSize || c.style.fontSize || 12, a).h
            }, v = function (a) {
                return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
            }; r--;)b.removeChild(g[r]);
            !f && !l && !u && e.indexOf(" ") === -1 ? b.appendChild(C.createTextNode(v(e))) : (h = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, Z && Z.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], e[e.length - 1] ===
            "" && e.pop(), o(e, function (e, f) {
                var g, n = 0, e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                o(g, function (e) {
                    if (e !== "" || g.length === 1) {
                        var l = {}, r = C.createElementNS(Ea, "tspan"), p;
                        h.test(e) && (p = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), K(r, "style", p));
                        i.test(e) && !d && (K(r, "onclick", 'location.href="' + e.match(i)[1] + '"'), M(r, {cursor: "pointer"}));
                        e = v(e.replace(/<(.|\n)*?>/g, "") || " ");
                        if (e !== " ") {
                            r.appendChild(C.createTextNode(e));
                            if (n)l.dx = 0; else if (f && j !== null)l.x =
                                j;
                            K(r, l);
                            b.appendChild(r);
                            !n && f && (!ca && d && M(r, {display: "block"}), K(r, "dy", A(r)));
                            if (m) {
                                for (var l = e.replace(/([^\^])-/g, "$1- ").split(" "), Z = g.length > 1 || f || l.length > 1 && k.whiteSpace !== "nowrap", o, y, q, s = [], x = A(r), t = 1, w = a.rotation, z = e, D = z.length; (Z || u) && (l.length || s.length);)a.rotation = 0, o = a.getBBox(!0), q = o.width, !ca && c.forExport && (q = c.measureSpanWidth(r.firstChild.data, a.styles)), o = q > m, y === void 0 && (y = o), u && y ? (D /= 2, z === "" || !o && D < 0.5 ? l = [] : (o && (y = !0), z = e.substring(0, z.length + (o ? -1 : 1) * ta(D)), l = [z + (m > 3 ? "\u2026" :
                                    "")], r.removeChild(r.firstChild))) : !o || l.length === 1 ? (l = s, s = [], l.length && (t++, r = C.createElementNS(Ea, "tspan"), K(r, {
                                    dy: x,
                                    x: j
                                }), p && K(r, "style", p), b.appendChild(r)), q > m && (m = q)) : (r.removeChild(r.firstChild), s.unshift(l.pop())), l.length && r.appendChild(C.createTextNode(l.join(" ").replace(/- /g, "-")));
                                y && a.attr("title", a.textStr);
                                a.rotation = w
                            }
                            n++
                        }
                    }
                })
            }), Z && Z.removeChild(b), l && a.applyTextShadow && a.applyTextShadow(l))
        }, getContrast: function (a) {
            a = na(a).rgba;
            return a[0] + a[1] + a[2] > 384 ? "#000000" : "#FFFFFF"
        }, button: function (a,
                             b, c, d, e, f, g, h, i) {
            var j = this.label(a, b, c, i, null, null, null, null, "button"), k = 0, m, n, l, u, r, p, a = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }, e = D({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {linearGradient: a, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]},
                r: 2,
                padding: 5,
                style: {color: "black"}
            }, e);
            l = e.style;
            delete e.style;
            f = D(e, {stroke: "#68A", fill: {linearGradient: a, stops: [[0, "#FFF"], [1, "#ACF"]]}}, f);
            u = f.style;
            delete f.style;
            g = D(e, {stroke: "#68A", fill: {linearGradient: a, stops: [[0, "#9BD"], [1, "#CDF"]]}}, g);
            r = g.style;
            delete g.style;
            h = D(e, {style: {color: "#CCC"}},
                h);
            p = h.style;
            delete h.style;
            I(j.element, sa ? "mouseover" : "mouseenter", function () {
                k !== 3 && j.attr(f).css(u)
            });
            I(j.element, sa ? "mouseout" : "mouseleave", function () {
                k !== 3 && (m = [e, f, g][k], n = [l, u, r][k], j.attr(m).css(n))
            });
            j.setState = function (a) {
                (j.state = k = a) ? a === 2 ? j.attr(g).css(r) : a === 3 && j.attr(h).css(p) : j.attr(e).css(l)
            };
            return j.on("click", function (a) {
                k !== 3 && d.call(j, a)
            }).attr(e).css(t({cursor: "default"}, l))
        }, crispLine: function (a, b) {
            a[1] === a[4] && (a[1] = a[4] = w(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = w(a[2]) + b % 2 /
                2);
            return a
        }, path: function (a) {
            var b = {fill: P};
            Ga(a) ? b.d = a : da(a) && t(b, a);
            return this.createElement("path").attr(b)
        }, circle: function (a, b, c) {
            a = da(a) ? a : {x: a, y: b, r: c};
            b = this.createElement("circle");
            b.xSetter = function (a) {
                this.element.setAttribute("cx", a)
            };
            b.ySetter = function (a) {
                this.element.setAttribute("cy", a)
            };
            return b.attr(a)
        }, arc: function (a, b, c, d, e, f) {
            if (da(a))b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {innerR: d || 0, start: e || 0, end: f || 0});
            a.r = c;
            return a
        }, rect: function (a,
                           b, c, d, e, f) {
            var e = da(a) ? a.r : e, g = this.createElement("rect"), a = da(a) ? a : a === x ? {} : {
                x: a,
                y: b,
                width: s(c, 0),
                height: s(d, 0)
            };
            if (f !== x)a.strokeWidth = f, a = g.crisp(a);
            if (e)a.r = e;
            g.rSetter = function (a) {
                K(this.element, {rx: a, ry: a})
            };
            return g.attr(a)
        }, setSize: function (a, b, c) {
            var d = this.alignedObjects, e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[p(c, !0) ? "animate" : "attr"]({width: a, height: b}); e--;)d[e].align()
        }, g: function (a) {
            var b = this.createElement("g");
            return q(a) ? b.attr({"class": "highcharts-" + a}) : b
        }, image: function (a,
                            b, c, d, e) {
            var f = {preserveAspectRatio: P};
            arguments.length > 1 && t(f, {x: b, y: c, width: d, height: e});
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        }, symbol: function (a, b, c, d, e, f) {
            var g, h = this.symbols[a], h = h && h(w(b), w(c), d, e, f), i = /^url\((.*?)\)$/, j, k;
            if (h)g = this.path(h), t(g, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && t(g, f); else if (i.test(a))k = function (a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(w((d - b[0]) / 2), w((e - b[1]) / 2)))
            }, j = a.match(i)[1], a = Kb[j] || f && f.width && f.height && [f.width, f.height], g = this.image(j).attr({
                x: b,
                y: c
            }), g.isImg = !0, a ? k(g, a) : (g.attr({width: 0, height: 0}), $("img", {
                onload: function () {
                    this.width === 0 && (M(this, {
                        position: "absolute",
                        top: "-999em"
                    }), document.body.appendChild(this));
                    k(g, Kb[j] = [this.width, this.height]);
                    this.parentNode && this.parentNode.removeChild(this)
                }, src: j
            }));
            return g
        }, symbols: {
            circle: function (a, b, c, d) {
                var e = 0.166 * c;
                return ["M",
                    a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            }, square: function (a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            }, triangle: function (a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            }, "triangle-down": function (a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            }, diamond: function (a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            }, arc: function (a, b, c, d, e) {
                var f = e.start, c = e.r || c || d, g = e.end - 0.001, d = e.innerR, h = e.open, i = W(f), j = aa(f), k = W(g), g = aa(g), e = e.end - f < ma ? 0 : 1;
                return ["M", a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z"]
            }, callout: function (a, b, c, d, e) {
                var f = z(e && e.r || 0, c, d), g = f + 6, h = e && e.anchorX, e = e && e.anchorY, i;
                i = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b];
                h && h > c && e > b + g && e < b + d - g ? i.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h && h < 0 && e > b + g && e < b + d - g ? i.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e >
                d && h > a + g && h < a + c - g ? i.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && e < 0 && h > a + g && h < a + c - g && i.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return i
            }
        }, clipRect: function (a, b, c, d) {
            var e = "highcharts-" + xb++, f = this.createElement("clipPath").attr({id: e}).add(this.defs), a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            a.count = 0;
            return a
        }, text: function (a, b, c, d) {
            var e = fa || !ca && this.forExport, f = {};
            if (d && (this.allowHTML || !this.forExport))return this.html(a, b, c);
            f.x = Math.round(b || 0);
            if (c)f.y = Math.round(c);
            if (a ||
                a === 0)f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({position: "absolute"});
            if (!d)a.xSetter = function (a, b, c) {
                var d = c.getElementsByTagName("tspan"), e, f = c.getAttribute(b), n;
                for (n = 0; n < d.length; n++)e = d[n], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a)
            };
            return a
        }, fontMetrics: function (a, b) {
            var c, d, a = a || this.style.fontSize;
            !a && b && L.getComputedStyle && (b = b.element || b, a = (c = L.getComputedStyle(b, "")) && c.fontSize);
            a = /px/.test(a) ? G(a) : /em/.test(a) ? parseFloat(a) * 12 : 12;
            c = a < 24 ? a + 3 : w(a * 1.2);
            d = w(c * 0.8);
            return {h: c, b: d, f: a}
        }, rotCorr: function (a, b, c) {
            var d = a;
            b && c && (d = s(d * W(b * ga), 4));
            return {x: -a / 3 * aa(b * ga), y: d}
        }, label: function (a, b, c, d, e, f, g, h, i) {
            function j() {
                var a, b;
                a = u.element.style;
                p = (s === void 0 || va === void 0 || l.styles.textAlign) && q(u.textStr) && u.getBBox();
                l.width = (s || p.width || 0) + 2 * v + y;
                l.height = (va || p.height || 0) + 2 * v;
                B = v + n.fontMetrics(a && a.fontSize, u).b;
                if (E) {
                    if (!r)a = w(-A * v) + C, b = (h ? -B : 0) + C, l.box = r = d ? n.symbol(d, a, b, l.width, l.height, H) : n.rect(a, b, l.width, l.height, 0, H[Pb]), r.isImg || r.attr("fill",
                        P), r.add(l);
                    r.isImg || r.attr(t({width: w(l.width), height: w(l.height)}, H));
                    H = null
                }
            }

            function k() {
                var a = l.styles, a = a && a.textAlign, b = y + v * (1 - A), c;
                c = h ? 0 : B;
                if (q(s) && p && (a === "center" || a === "right"))b += {center: 0.5, right: 1}[a] * (s - p.width);
                if (b !== u.x || c !== u.y)u.attr("x", b), c !== x && u.attr("y", c);
                u.x = b;
                u.y = c
            }

            function m(a, b) {
                r ? r.attr(a, b) : H[a] = b
            }

            var n = this, l = n.g(i), u = n.text("", 0, 0, g).attr({zIndex: 1}), r, p, A = 0, v = 3, y = 0, s, va, zb, z, C = 0, H = {}, B, E;
            l.onAdd = function () {
                u.add(l);
                l.attr({text: a || a === 0 ? a : "", x: b, y: c});
                r && q(e) && l.attr({
                    anchorX: e,
                    anchorY: f
                })
            };
            l.widthSetter = function (a) {
                s = a
            };
            l.heightSetter = function (a) {
                va = a
            };
            l.paddingSetter = function (a) {
                if (q(a) && a !== v)v = l.padding = a, k()
            };
            l.paddingLeftSetter = function (a) {
                q(a) && a !== y && (y = a, k())
            };
            l.alignSetter = function (a) {
                A = {left: 0, center: 0.5, right: 1}[a]
            };
            l.textSetter = function (a) {
                a !== x && u.textSetter(a);
                j();
                k()
            };
            l["stroke-widthSetter"] = function (a, b) {
                a && (E = !0);
                C = a % 2 / 2;
                m(b, a)
            };
            l.strokeSetter = l.fillSetter = l.rSetter = function (a, b) {
                b === "fill" && a && (E = !0);
                m(b, a)
            };
            l.anchorXSetter = function (a, b) {
                e = a;
                m(b, w(a) -
                    C - zb)
            };
            l.anchorYSetter = function (a, b) {
                f = a;
                m(b, a - z)
            };
            l.xSetter = function (a) {
                l.x = a;
                A && (a -= A * ((s || p.width) + v));
                zb = w(a);
                l.attr("translateX", zb)
            };
            l.ySetter = function (a) {
                z = l.y = w(a);
                l.attr("translateY", z)
            };
            var G = l.css;
            return t(l, {
                css: function (a) {
                    if (a) {
                        var b = {}, a = D(a);
                        o(l.textProps, function (c) {
                            a[c] !== x && (b[c] = a[c], delete a[c])
                        });
                        u.css(b)
                    }
                    return G.call(l, a)
                }, getBBox: function () {
                    return {width: p.width + 2 * v, height: p.height + 2 * v, x: p.x - v, y: p.y - v}
                }, shadow: function (a) {
                    r && r.shadow(a);
                    return l
                }, destroy: function () {
                    Y(l.element,
                        "mouseenter");
                    Y(l.element, "mouseleave");
                    u && (u = u.destroy());
                    r && (r = r.destroy());
                    Q.prototype.destroy.call(l);
                    l = n = j = k = m = null
                }
            })
        }
    };
    $a = Aa;
    t(Q.prototype, {
        htmlCss: function (a) {
            var b = this.element;
            if (b = a && b.tagName === "SPAN" && a.width)delete a.width, this.textWidth = b, this.updateTransform();
            if (a && a.textOverflow === "ellipsis")a.whiteSpace = "nowrap", a.overflow = "hidden";
            this.styles = t(this.styles, a);
            M(this.element, a);
            return this
        }, htmlGetBBox: function () {
            var a = this.element;
            if (a.nodeName === "text")a.style.position = "absolute";
            return {x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight}
        }, htmlUpdateTransform: function () {
            if (this.added) {
                var a = this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left", h = {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[g], i = this.shadows, j = this.styles;
                M(b, {marginLeft: c, marginTop: d});
                i && o(i, function (a) {
                    M(a, {marginLeft: c + 1, marginTop: d + 1})
                });
                this.inverted && o(b.childNodes, function (c) {
                    a.invertChild(c, b)
                });
                if (b.tagName === "SPAN") {
                    var k = this.rotation,
                        m, n = G(this.textWidth), l = [k, g, b.innerHTML, this.textWidth, this.textAlign].join(",");
                    if (l !== this.cTT) {
                        m = a.fontMetrics(b.style.fontSize).b;
                        q(k) && this.setSpanRotation(k, h, m);
                        i = p(this.elemWidth, b.offsetWidth);
                        if (i > n && /[ \-]/.test(b.textContent || b.innerText))M(b, {
                            width: n + "px",
                            display: "block",
                            whiteSpace: j && j.whiteSpace || "normal"
                        }), i = n;
                        this.getSpanCorrection(i, m, h, k, g)
                    }
                    M(b, {left: e + (this.xCorr || 0) + "px", top: f + (this.yCorr || 0) + "px"});
                    if (hb)m = b.offsetHeight;
                    this.cTT = l
                }
            } else this.alignOnAdd = !0
        }, setSpanRotation: function (a,
                                      b, c) {
            var d = {}, e = sa ? "-ms-transform" : hb ? "-webkit-transform" : Ka ? "MozTransform" : Ib ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + (Ka ? "Origin" : "-origin")] = d.transformOrigin = b * 100 + "% " + c + "px";
            M(this.element, d)
        }, getSpanCorrection: function (a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b
        }
    });
    t(Aa.prototype, {
        html: function (a, b, c) {
            var d = this.createElement("span"), e = d.element, f = d.renderer;
            d.textSetter = function (a) {
                a !== e.innerHTML && delete this.bBox;
                e.innerHTML = this.textStr = a;
                d.htmlUpdateTransform()
            };
            d.xSetter = d.ySetter =
                d.alignSetter = d.rotationSetter = function (a, b) {
                    b === "align" && (b = "textAlign");
                    d[b] = a;
                    d.htmlUpdateTransform()
                };
            d.attr({text: a, x: w(b), y: w(c)}).css({
                position: "absolute",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            e.style.whiteSpace = "nowrap";
            d.css = d.htmlCss;
            if (f.isSVG)d.add = function (a) {
                var b, c = f.box.parentNode, j = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a;)j.push(a), a = a.parentGroup;
                        o(j.reverse(), function (a) {
                            var d, e = K(a.element, "class");
                            e && (e = {className: e});
                            b = a.div = a.div || $(Ja, e, {
                                    position: "absolute",
                                    left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px"
                                }, b || c);
                            d = b.style;
                            t(a, {
                                translateXSetter: function (b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }, translateYSetter: function (b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }
                            });
                            o(["opacity", "visibility"], function (b) {
                                Ta(a, b + "Setter", function (a, b, c, e) {
                                    a.call(this, b, c, e);
                                    d[c] = b
                                })
                            })
                        })
                    }
                } else b = c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd && d.htmlUpdateTransform();
                return d
            };
            return d
        }
    });
    if (!ca && !fa) {
        E = {
            init: function (a, b) {
                var c = ["<", b, ' filled="f" stroked="f"'], d = ["position: ",
                    "absolute", ";"], e = b === Ja;
                (b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;");
                d.push("visibility: ", e ? "hidden" : "visible");
                c.push(' style="', d.join(""), '"/>');
                if (b)c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = $(c);
                this.renderer = a
            }, add: function (a) {
                var b = this.renderer, c = this.element, d = b.box, d = a ? a.element || a : d;
                a && a.inverted && b.invertChild(c, d);
                d.appendChild(c);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                if (this.onAdd)this.onAdd();
                return this
            },
            updateTransform: Q.prototype.htmlUpdateTransform, setSpanRotation: function () {
                var a = this.rotation, b = W(a * ga), c = aa(a * ga);
                M(this.element, {filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : P})
            }, getSpanCorrection: function (a, b, c, d, e) {
                var f = d ? W(d * ga) : 1, g = d ? aa(d * ga) : 0, h = p(this.elemHeight, this.element.offsetHeight), i;
                this.xCorr = f < 0 && -a;
                this.yCorr = g < 0 && -h;
                i = f * g < 0;
                this.xCorr += g * b * (i ? 1 - c : c);
                this.yCorr -= f * b * (d ? i ? c : 1 - c : 1);
                e && e !==
                "left" && (this.xCorr -= a * c * (f < 0 ? -1 : 1), d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)), M(this.element, {textAlign: e}))
            }, pathToVML: function (a) {
                for (var b = a.length, c = []; b--;)if (qa(a[b]))c[b] = w(a[b] * 10) - 5; else if (a[b] === "Z")c[b] = "x"; else if (c[b] = a[b], a.isArc && (a[b] === "wa" || a[b] === "at"))c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1);
                return c.join(" ") || "x"
            }, clip: function (a) {
                var b = this, c;
                a ? (c = a.members, ja(c, b), c.push(b), b.destroyClip = function () {
                    ja(c, b)
                }, a = a.getCSS(b)) : (b.destroyClip &&
                b.destroyClip(), a = {clip: gb ? "inherit" : "rect(auto)"});
                return b.css(a)
            }, css: Q.prototype.htmlCss, safeRemoveChild: function (a) {
                a.parentNode && Qa(a)
            }, destroy: function () {
                this.destroyClip && this.destroyClip();
                return Q.prototype.destroy.apply(this)
            }, on: function (a, b) {
                this.element["on" + a] = function () {
                    var a = L.event;
                    a.target = a.srcElement;
                    b(a)
                };
                return this
            }, cutOffPath: function (a, b) {
                var c, a = a.split(/[ ,]/);
                c = a.length;
                if (c === 9 || c === 11)a[c - 4] = a[c - 2] = G(a[c - 2]) - 10 * b;
                return a.join(" ")
            }, shadow: function (a, b, c) {
                var d = [], e,
                    f = this.element, g = this.renderer, h, i = f.style, j, k = f.path, m, n, l, u;
                k && typeof k.value !== "string" && (k = "x");
                n = k;
                if (a) {
                    l = p(a.width, 3);
                    u = (a.opacity || 0.15) / l;
                    for (e = 1; e <= 3; e++) {
                        m = l * 2 + 1 - 2 * e;
                        c && (n = this.cutOffPath(k.value, m + 0.5));
                        j = ['<shape isShadow="true" strokeweight="', m, '" filled="false" path="', n, '" coordsize="10 10" style="', f.style.cssText, '" />'];
                        h = $(g.prepVML(j), null, {left: G(i.left) + p(a.offsetX, 1), top: G(i.top) + p(a.offsetY, 1)});
                        if (c)h.cutOff = m + 1;
                        j = ['<stroke color="', a.color || "black", '" opacity="', u * e, '"/>'];
                        $(g.prepVML(j), null, null, h);
                        b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);
                        d.push(h)
                    }
                    this.shadows = d
                }
                return this
            }, updateShadows: ua, setAttr: function (a, b) {
                gb ? this.element[a] = b : this.element.setAttribute(a, b)
            }, classSetter: function (a) {
                this.element.className = a
            }, dashstyleSetter: function (a, b, c) {
                (c.getElementsByTagName("stroke")[0] || $(this.renderer.prepVML(["<stroke/>"]), null, null, c))[b] = a || "solid";
                this[b] = a
            }, dSetter: function (a, b, c) {
                var d = this.shadows, a = a || [];
                this.d = a.join && a.join(" ");
                c.path = a =
                    this.pathToVML(a);
                if (d)for (c = d.length; c--;)d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
                this.setAttr(b, a)
            }, fillSetter: function (a, b, c) {
                var d = c.nodeName;
                if (d === "SPAN")c.style.color = a; else if (d !== "IMG")c.filled = a !== P, this.setAttr("fillcolor", this.renderer.color(a, c, b, this))
            }, opacitySetter: ua, rotationSetter: function (a, b, c) {
                c = c.style;
                this[b] = c[b] = a;
                c.left = -w(aa(a * ga) + 1) + "px";
                c.top = w(W(a * ga)) + "px"
            }, strokeSetter: function (a, b, c) {
                this.setAttr("strokecolor", this.renderer.color(a, c, b))
            }, "stroke-widthSetter": function (a,
                                               b, c) {
                c.stroked = !!a;
                this[b] = a;
                qa(a) && (a += "px");
                this.setAttr("strokeweight", a)
            }, titleSetter: function (a, b) {
                this.setAttr(b, a)
            }, visibilitySetter: function (a, b, c) {
                a === "inherit" && (a = "visible");
                this.shadows && o(this.shadows, function (c) {
                    c.style[b] = a
                });
                c.nodeName === "DIV" && (a = a === "hidden" ? "-999em" : 0, gb || (c.style[b] = a ? "visible" : "hidden"), b = "top");
                c.style[b] = a
            }, xSetter: function (a, b, c) {
                this[b] = a;
                b === "x" ? b = "left" : b === "y" && (b = "top");
                this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a
            }, zIndexSetter: function (a,
                                       b, c) {
                c.style[b] = a
            }
        };
        B.VMLElement = E = ka(Q, E);
        E.prototype.ySetter = E.prototype.widthSetter = E.prototype.heightSetter = E.prototype.xSetter;
        var Ma = {
            Element: E, isIE8: za.indexOf("MSIE 8.0") > -1, init: function (a, b, c, d) {
                var e;
                this.alignedObjects = [];
                d = this.createElement(Ja).css(t(this.getStyle(d), {position: "relative"}));
                e = d.element;
                a.appendChild(d.element);
                this.isVML = !0;
                this.box = e;
                this.boxWrapper = d;
                this.cache = {};
                this.setSize(b, c, !1);
                if (!C.namespaces.hcv) {
                    C.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    try {
                        C.createStyleSheet().cssText =
                            "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    } catch (f) {
                        C.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    }
                }
            }, isHidden: function () {
                return !this.box.offsetWidth
            }, clipRect: function (a, b, c, d) {
                var e = this.createElement(), f = da(a);
                return t(e, {
                    members: [],
                    count: 0,
                    left: (f ? a.x : a) + 1,
                    top: (f ? a.y : b) + 1,
                    width: (f ? a.width : c) - 1,
                    height: (f ? a.height : d) - 1,
                    getCSS: function (a) {
                        var b = a.element,
                            c = b.nodeName, a = a.inverted, d = this.top - (c === "shape" ? b.offsetTop : 0), e = this.left, b = e + this.width, f = d + this.height, d = {clip: "rect(" + w(a ? e : d) + "px," + w(a ? f : b) + "px," + w(a ? b : f) + "px," + w(a ? d : e) + "px)"};
                        !a && gb && c === "DIV" && t(d, {width: b + "px", height: f + "px"});
                        return d
                    },
                    updateClipping: function () {
                        o(e.members, function (a) {
                            a.element && a.css(e.getCSS(a))
                        })
                    }
                })
            }, color: function (a, b, c, d) {
                var e = this, f, g = /^rgba/, h, i, j = P;
                a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");
                if (i) {
                    var k, m, n = a.linearGradient || a.radialGradient,
                        l, u, r, p, A, v = "", a = a.stops, y, q = [], va = function () {
                            h = ['<fill colors="' + q.join(",") + '" opacity="', r, '" o:opacity2="', u, '" type="', i, '" ', v, 'focus="100%" method="any" />'];
                            $(e.prepVML(h), null, null, b)
                        };
                    l = a[0];
                    y = a[a.length - 1];
                    l[0] > 0 && a.unshift([0, l[1]]);
                    y[0] < 1 && a.push([1, y[1]]);
                    o(a, function (a, b) {
                        g.test(a[1]) ? (f = na(a[1]), k = f.get("rgb"), m = f.get("a")) : (k = a[1], m = 1);
                        q.push(a[0] * 100 + "% " + k);
                        b ? (r = m, p = k) : (u = m, A = k)
                    });
                    if (c === "fill")if (i === "gradient")c = n.x1 || n[0] || 0, a = n.y1 || n[1] || 0, l = n.x2 || n[2] || 0, n = n.y2 || n[3] || 0, v =
                        'angle="' + (90 - V.atan((n - a) / (l - c)) * 180 / ma) + '"', va(); else {
                        var j = n.r, s = j * 2, x = j * 2, t = n.cx, w = n.cy, z = b.radialReference, D, j = function () {
                            z && (D = d.getBBox(), t += (z[0] - D.x) / D.width - 0.5, w += (z[1] - D.y) / D.height - 0.5, s *= z[2] / D.width, x *= z[2] / D.height);
                            v = 'src="' + S.global.VMLRadialGradientURL + '" size="' + s + "," + x + '" origin="0.5,0.5" position="' + t + "," + w + '" color2="' + A + '" ';
                            va()
                        };
                        d.added ? j() : d.onAdd = j;
                        j = p
                    } else j = k
                } else if (g.test(a) && b.tagName !== "IMG")f = na(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], $(this.prepVML(h), null, null,
                    b), j = f.get("rgb"); else {
                    j = b.getElementsByTagName(c);
                    if (j.length)j[0].opacity = 1, j[0].type = "solid";
                    j = a
                }
                return j
            }, prepVML: function (a) {
                var b = this.isIE8, a = a.join("");
                b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
                return a
            }, text: Aa.prototype.html, path: function (a) {
                var b = {coordsize: "10 10"};
                Ga(a) ? b.d = a : da(a) && t(b, a);
                return this.createElement("shape").attr(b)
            }, circle: function (a, b, c) {
                var d = this.symbol("circle");
                if (da(a))c = a.r, b = a.y, a = a.x;
                d.isCircle = !0;
                d.r = c;
                return d.attr({x: a, y: b})
            }, g: function (a) {
                var b;
                a && (b = {className: "highcharts-" + a, "class": "highcharts-" + a});
                return this.createElement(Ja).attr(b)
            }, image: function (a, b, c, d, e) {
                var f = this.createElement("img").attr({src: a});
                arguments.length > 1 && f.attr({x: b, y: c, width: d, height: e});
                return f
            }, createElement: function (a) {
                return a === "rect" ? this.symbol(a) :
                    Aa.prototype.createElement.call(this, a)
            }, invertChild: function (a, b) {
                var c = this, d = b.style, e = a.tagName === "IMG" && a.style;
                M(a, {
                    flip: "x",
                    left: G(d.width) - (e ? G(e.top) : 1),
                    top: G(d.height) - (e ? G(e.left) : 1),
                    rotation: -90
                });
                o(a.childNodes, function (b) {
                    c.invertChild(b, a)
                })
            }, symbols: {
                arc: function (a, b, c, d, e) {
                    var f = e.start, g = e.end, h = e.r || c || d, c = e.innerR, d = W(f), i = aa(f), j = W(g), k = aa(g);
                    if (g - f === 0)return ["x"];
                    f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k];
                    e.open && !c && f.push("e", "M", a, b);
                    f.push("at", a - c, b - c, a + c, b + c, a + c *
                        j, b + c * k, a + c * d, b + c * i, "x", "e");
                    f.isArc = !0;
                    return f
                }, circle: function (a, b, c, d, e) {
                    e && (c = d = 2 * e.r);
                    e && e.isCircle && (a -= c / 2, b -= d / 2);
                    return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
                }, rect: function (a, b, c, d, e) {
                    return Aa.prototype.symbols[!q(e) || !e.r ? "square" : "callout"].call(0, a, b, c, d, e)
                }
            }
        };
        B.VMLRenderer = E = function () {
            this.init.apply(this, arguments)
        };
        E.prototype = D(Aa.prototype, Ma);
        $a = E
    }
    Aa.prototype.measureSpanWidth = function (a, b) {
        var c = C.createElement("span"), d;
        d = C.createTextNode(a);
        c.appendChild(d);
        M(c, b);
        this.box.appendChild(c);
        d = c.offsetWidth;
        Qa(c);
        return d
    };
    var Lb;
    if (fa)B.CanVGRenderer = E = function () {
        Ea = "http://www.w3.org/1999/xhtml"
    }, E.prototype.symbols = {}, Lb = function () {
        function a() {
            var a = b.length, d;
            for (d = 0; d < a; d++)b[d]();
            b = []
        }

        var b = [];
        return {
            push: function (c, d) {
                b.length === 0 && Qb(d, a);
                b.push(c)
            }
        }
    }(), $a = E;
    Sa.prototype = {
        addLabel: function () {
            var a = this.axis, b = a.options, c = a.chart, d = a.categories, e = a.names, f = this.pos, g = b.labels, h = a.tickPositions, i = f === h[0], j = f === h[h.length - 1], e = d ? p(d[f], e[f], f) : f, d = this.label, h = h.info, k;
            a.isDatetimeAxis &&
            h && (k = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
            this.isFirst = i;
            this.isLast = j;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: i,
                isLast: j,
                dateTimeLabelFormat: k,
                value: a.isLog ? ea(ia(e)) : e
            });
            q(d) ? d && d.attr({text: b}) : (this.labelLength = (this.label = d = q(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(D(g.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0)
        }, getLabelSize: function () {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        }, handleOverflow: function (a) {
            var b =
                this.axis, c = a.x, d = b.chart.chartWidth, e = b.chart.spacing, f = p(b.labelLeft, z(b.pos, e[3])), e = p(b.labelRight, s(b.pos + b.len, d - e[1])), g = this.label, h = this.rotation, i = {
                left: 0,
                center: 0.5,
                right: 1
            }[b.labelAlign], j = g.getBBox().width, k = b.slotWidth, m = 1, n, l = {};
            if (h)h < 0 && c - i * j < f ? n = w(c / W(h * ga) - f) : h > 0 && c + i * j > e && (n = w((d - c) / W(h * ga))); else if (d = c + (1 - i) * j, c - i * j < f ? k = a.x + k * (1 - i) - f : d > e && (k = e - a.x + k * i, m = -1), k = z(b.slotWidth, k), k < b.slotWidth && b.labelAlign === "center" && (a.x += m * (b.slotWidth - k - i * (b.slotWidth - z(j, k)))), j > k || b.autoRotation &&
                g.styles.width)n = k;
            if (n) {
                l.width = n;
                if (!b.options.labels.style.textOverflow)l.textOverflow = "ellipsis";
                g.css(l)
            }
        }, getPosition: function (a, b, c, d) {
            var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        }, getLabelPosition: function (a, b, c, d, e, f, g, h) {
            var i = this.axis, j = i.transA, k = i.reversed,
                m = i.staggerLines, n = i.tickRotCorr || {
                        x: 0,
                        y: 0
                    }, c = p(e.y, n.y + (i.side === 2 ? 8 : -(c.getBBox().height / 2))), a = a + e.x + n.x - (f && d ? f * j * (k ? -1 : 1) : 0), b = b + c - (f && !d ? f * j * (k ? 1 : -1) : 0);
            m && (b += g / (h || 1) % m * (i.labelOffset / m));
            return {x: a, y: w(b)}
        }, getMarkPath: function (a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        }, render: function (a, b, c) {
            var d = this.axis, e = d.options, f = d.chart.renderer, g = d.horiz, h = this.type, i = this.label, j = this.pos, k = e.labels, m = this.gridLine, n = h ? h + "Grid" : "grid", l = h ? h + "Tick" : "tick", u = e[n + "LineWidth"],
                r = e[n + "LineColor"], o = e[n + "LineDashStyle"], A = e[l + "Length"], n = p(e[l + "Width"], !h && d.isXAxis ? 1 : 0), v = e[l + "Color"], y = e[l + "Position"], l = this.mark, q = k.step, va = !0, s = d.tickmarkOffset, t = this.getPosition(g, j, s, b), w = t.x, t = t.y, z = g && w === d.pos + d.len || !g && t === d.pos ? -1 : 1, c = p(c, 1);
            this.isActive = !0;
            if (u) {
                j = d.getPlotLinePath(j + s, u * z, b, !0);
                if (m === x) {
                    m = {stroke: r, "stroke-width": u};
                    if (o)m.dashstyle = o;
                    if (!h)m.zIndex = 1;
                    if (b)m.opacity = 0;
                    this.gridLine = m = u ? f.path(j).attr(m).add(d.gridGroup) : null
                }
                if (!b && m && j)m[this.isNew ? "attr" :
                    "animate"]({d: j, opacity: c})
            }
            if (n && A)y === "inside" && (A = -A), d.opposite && (A = -A), h = this.getMarkPath(w, t, A, n * z, g, f), l ? l.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({stroke: v, "stroke-width": n, opacity: c}).add(d.axisGroup);
            if (i && !isNaN(w))i.xy = t = this.getLabelPosition(w, t, i, g, k, s, a, q), this.isFirst && !this.isLast && !p(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !p(e.showLastLabel, 1) ? va = !1 : g && !d.isRadial && !k.step && !k.rotation && !b && c !== 0 && this.handleOverflow(t), q && a % q && (va = !1), va && !isNaN(t.y) ? (t.opacity =
                c, i[this.isNew ? "attr" : "animate"](t), this.isNew = !1) : i.attr("y", -9999)
        }, destroy: function () {
            Pa(this, this.axis)
        }
    };
    B.PlotLineOrBand = function (a, b) {
        this.axis = a;
        if (b)this.options = b, this.id = b.id
    };
    B.PlotLineOrBand.prototype = {
        render: function () {
            var a = this, b = a.axis, c = b.horiz, d = a.options, e = d.label, f = a.label, g = d.width, h = d.to, i = d.from, j = q(i) && q(h), k = d.value, m = d.dashStyle, n = a.svgElem, l = [], u, r = d.color, p = d.zIndex, o = d.events, v = {}, y = b.chart.renderer;
            b.isLog && (i = Ca(i), h = Ca(h), k = Ca(k));
            if (g) {
                if (l = b.getPlotLinePath(k, g),
                        v = {stroke: r, "stroke-width": g}, m)v.dashstyle = m
            } else if (j) {
                l = b.getPlotBandPath(i, h, d);
                if (r)v.fill = r;
                if (d.borderWidth)v.stroke = d.borderColor, v["stroke-width"] = d.borderWidth
            } else return;
            if (q(p))v.zIndex = p;
            if (n)if (l)n.animate({d: l}, null, n.onGetPath); else {
                if (n.hide(), n.onGetPath = function () {
                        n.show()
                    }, f)a.label = f = f.destroy()
            } else if (l && l.length && (a.svgElem = n = y.path(l).attr(v).add(), o))for (u in d = function (b) {
                n.on(b, function (c) {
                    o[b].apply(a, [c])
                })
            }, o)d(u);
            if (e && q(e.text) && l && l.length && b.width > 0 && b.height > 0) {
                e =
                    D({
                        align: c && j && "center",
                        x: c ? !j && 4 : 10,
                        verticalAlign: !c && j && "middle",
                        y: c ? j ? 16 : 10 : j ? 6 : -4,
                        rotation: c && !j && 90
                    }, e);
                if (!f) {
                    v = {align: e.textAlign || e.align, rotation: e.rotation};
                    if (q(p))v.zIndex = p;
                    a.label = f = y.text(e.text, 0, 0, e.useHTML).attr(v).css(e.style).add()
                }
                b = [l[1], l[4], j ? l[6] : l[1]];
                j = [l[2], l[5], j ? l[7] : l[2]];
                l = Oa(b);
                c = Oa(j);
                f.align(e, !1, {x: l, y: c, width: Da(b) - l, height: Da(j) - c});
                f.show()
            } else f && f.hide();
            return a
        }, destroy: function () {
            ja(this.axis.plotLinesAndBands, this);
            delete this.axis;
            Pa(this)
        }
    };
    var ha = B.Axis =
        function () {
            this.init.apply(this, arguments)
        };
    ha.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#D8D8D8",
            labels: {enabled: !0, style: {color: "#606060", cursor: "default", fontSize: "11px"}, x: 0, y: 15},
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: 0.01,
            maxPadding: 0.01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {align: "middle", style: {color: "#707070"}},
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {x: -8, y: 3},
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: !0,
            title: {rotation: 270, text: "Values"},
            stackLabels: {
                enabled: !1, formatter: function () {
                    return B.numberFormat(this.total,
                        -1)
                }, style: D(ba.line.dataLabels.style, {color: "#000000"})
            }
        },
        defaultLeftAxisOptions: {labels: {x: -15, y: null}, title: {rotation: 270}},
        defaultRightAxisOptions: {labels: {x: 15, y: null}, title: {rotation: 90}},
        defaultBottomAxisOptions: {labels: {autoRotation: [-45], x: 0, y: null}, title: {rotation: 0}},
        defaultTopAxisOptions: {labels: {autoRotation: [-45], x: 0, y: -15}, title: {rotation: 0}},
        init: function (a, b) {
            var c = b.isX;
            this.chart = a;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side =
                b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options, e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.reversed = d.reversed;
            this.visible = d.visible !== !1;
            this.zoomEnabled = d.zoomEnabled !== !1;
            this.categories = d.categories || e === "category";
            this.names = this.names || [];
            this.isLog = e === "logarithmic";
            this.isDatetimeAxis = e === "datetime";
            this.isLinked = q(d.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks =
            {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.stacksTouched = 0;
            this.min = this.max = null;
            this.crosshair = p(d.crosshair, ra(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events;
            La(this, a.axes) === -1 && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            if (a.inverted &&
                c && this.reversed === x)this.reversed = !0;
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d)I(this, f, d[f]);
            if (this.isLog)this.val2lin = Ca, this.lin2val = ia
        },
        setOptions: function (a) {
            this.options = D(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], D(S[this.coll], a))
        },
        defaultLabelFormatter: function () {
            var a = this.axis, b = this.value, c = a.categories, d =
                this.dateTimeLabelFormat, e = S.lang.numericSymbols, f = e && e.length, g, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval;
            if (h)g = Ia(h, this); else if (c)g = b; else if (d)g = Na(d, b); else if (f && a >= 1E3)for (; f-- && g === x;)c = Math.pow(1E3, f + 1), a >= c && b * 10 % c === 0 && e[f] !== null && (g = B.numberFormat(b / c, -1) + e[f]);
            g === x && (g = O(b) >= 1E4 ? B.numberFormat(b, -1) : B.numberFormat(b, -1, x, ""));
            return g
        },
        getSeriesExtremes: function () {
            var a = this, b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.threshold = null;
            a.softThreshold = !a.isXAxis;
            a.buildStacks && a.buildStacks();
            o(a.series, function (c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d = c.options, e = d.threshold, f;
                    a.hasVisibleSeries = !0;
                    a.isLog && e <= 0 && (e = null);
                    if (a.isXAxis) {
                        if (d = c.xData, d.length)a.dataMin = z(p(a.dataMin, d[0]), Oa(d)), a.dataMax = s(p(a.dataMax, d[0]), Da(d))
                    } else {
                        c.getExtremes();
                        f = c.dataMax;
                        c = c.dataMin;
                        if (q(c) && q(f))a.dataMin = z(p(a.dataMin, c), c), a.dataMax = s(p(a.dataMax, f), f);
                        if (q(e))a.threshold = e;
                        if (!d.softThreshold || a.isLog)a.softThreshold = !1
                    }
                }
            })
        },
        translate: function (a,
                             b, c, d, e, f) {
            var g = this.linkedParent || this, h = 1, i = 0, j = d ? g.oldTransA : g.transA, d = d ? g.oldMin : g.min, k = g.minPixelPadding, e = (g.doPostTranslate || g.isLog && e) && g.lin2val;
            if (!j)j = g.transA;
            if (c)h *= -1, i = g.len;
            g.reversed && (h *= -1, i -= h * (g.sector || g.len));
            b ? (a = a * h + i, a -= k, a = a / j + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), f === "between" && (f = 0.5), a = h * (a - d) * j + i + h * k + (qa(f) ? j * f * g.pointRange : 0));
            return a
        },
        toPixels: function (a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function (a, b) {
            return this.translate(a -
                (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function (a, b, c, d, e) {
            var f = this.chart, g = this.left, h = this.top, i, j, k = c && f.oldChartHeight || f.chartHeight, m = c && f.oldChartWidth || f.chartWidth, n;
            i = this.transB;
            var l = function (a, b, c) {
                if (a < b || a > c)d ? a = z(s(b, a), c) : n = !0;
                return a
            }, e = p(e, this.translate(a, null, null, c)), a = c = w(e + i);
            i = j = w(k - e - i);
            isNaN(e) ? n = !0 : this.horiz ? (i = h, j = k - this.bottom, a = c = l(a, g, g + this.width)) : (a = g, c = m - this.right, i = j = l(i, h, h + this.height));
            return n && !d ? null : f.renderer.crispLine(["M", a, i, "L",
                c, j], b || 1)
        },
        getLinearTickPositions: function (a, b, c) {
            var d, e = ea(T(b / a) * a), f = ea(ta(c / a) * a), g = [];
            if (b === c && qa(b))return [b];
            for (b = e; b <= f;) {
                g.push(b);
                b = ea(b + a);
                if (b === d)break;
                d = b
            }
            return g
        },
        getMinorTickPositions: function () {
            var a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [], e, f = this.pointRangePadding || 0;
            e = this.min - f;
            var f = this.max + f, g = f - e;
            if (g && g / c < this.len / 3)if (this.isLog) {
                f = b.length;
                for (e = 1; e < f; e++)d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0))
            } else if (this.isDatetimeAxis && a.minorTickInterval ===
                "auto")d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek)); else for (b = e + (b[0] - e) % c; b <= f; b += c)d.push(b);
            d.length !== 0 && this.trimTicks(d, a.startOnTick, a.endOnTick);
            return d
        },
        adjustForMinRange: function () {
            var a = this.options, b = this.min, c = this.max, d, e = this.dataMax - this.dataMin >= this.minRange, f, g, h, i, j, k;
            if (this.isXAxis && this.minRange === x && !this.isLog)q(a.min) || q(a.max) ? this.minRange = null : (o(this.series, function (a) {
                i = a.xData;
                for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--)if (h = i[g] -
                        i[g - 1], f === x || h < f)f = h
            }), this.minRange = z(f * 5, this.dataMax - this.dataMin));
            if (c - b < this.minRange) {
                k = this.minRange;
                d = (k - c + b) / 2;
                d = [b - d, p(a.min, b - d)];
                if (e)d[2] = this.dataMin;
                b = Da(d);
                c = [b + k, p(a.max, b + k)];
                if (e)c[2] = this.dataMax;
                c = Oa(c);
                c - b < k && (d[0] = c - k, d[1] = p(a.min, c - k), b = Da(d))
            }
            this.min = b;
            this.max = c
        },
        setAxisTranslation: function (a) {
            var b = this, c = b.max - b.min, d = b.axisPointRange || 0, e, f = 0, g = 0, h = b.linkedParent, i = !!b.categories, j = b.transA, k = b.isXAxis;
            if (k || i || d)if (h ? (f = h.minPointOffset, g = h.pointRangePadding) : o(b.series,
                    function (a) {
                        var c = i ? 1 : k ? a.pointRange : b.axisPointRange || 0, h = a.options.pointPlacement, j = a.closestPointRange;
                        d = s(d, c);
                        b.single || (f = s(f, Ba(h) ? 0 : c / 2), g = s(g, h === "on" ? 0 : c));
                        !a.noSharedTooltip && q(j) && (e = q(e) ? z(e, j) : j)
                    }), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = z(d, c), k)b.closestPointRange = e;
            if (a)b.oldTransA = j;
            b.translationSlope = b.transA = j = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = j * f
        },
        minFromRange: function () {
            return this.max -
                this.range
        },
        setTickInterval: function (a) {
            var b = this, c = b.chart, d = b.options, e = b.isLog, f = b.isDatetimeAxis, g = b.isXAxis, h = b.isLinked, i = d.maxPadding, j = d.minPadding, k = d.tickInterval, m = d.tickPixelInterval, n = b.categories, l = b.threshold, u = b.softThreshold, r, Z, A, v;
            !f && !n && !h && this.getTickAmount();
            A = p(b.userMin, d.min);
            v = p(b.userMax, d.max);
            h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = p(c.min, c.dataMin), b.max = p(c.max, c.dataMax), d.type !== b.linkedParent.options.type && la(11, 1)) : (!u && q(l) &&
            (b.dataMin >= l ? (r = l, j = 0) : b.dataMax <= l && (Z = l, i = 0)), b.min = p(A, r, b.dataMin), b.max = p(v, Z, b.dataMax));
            if (e)!a && z(b.min, p(b.dataMin, b.min)) <= 0 && la(10, 1), b.min = ea(Ca(b.min), 15), b.max = ea(Ca(b.max), 15);
            if (b.range && q(b.max))b.userMin = b.min = A = s(b.min, b.minFromRange()), b.userMax = v = b.max, b.range = null;
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            if (!n && !b.axisPointRange && !b.usePercentage && !h && q(b.min) && q(b.max) && (c = b.max - b.min))!q(A) && j && (b.min -= c * j), !q(v) && i && (b.max += c * i);
            if (qa(d.floor))b.min = s(b.min,
                d.floor);
            if (qa(d.ceiling))b.max = z(b.max, d.ceiling);
            if (u && q(b.dataMin))if (l = l || 0, !q(A) && b.min < l && b.dataMin >= l)b.min = l; else if (!q(v) && b.max > l && b.dataMax <= l)b.max = l;
            b.tickInterval = b.min === b.max || b.min === void 0 || b.max === void 0 ? 1 : h && !k && m === b.linkedParent.options.tickPixelInterval ? k = b.linkedParent.tickInterval : p(k, this.tickAmount ? (b.max - b.min) / s(this.tickAmount - 1, 1) : void 0, n ? 1 : (b.max - b.min) * m / s(b.len, m));
            g && !a && o(b.series, function (a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            if (b.postProcessTickInterval)b.tickInterval = b.postProcessTickInterval(b.tickInterval);
            if (b.pointRange)b.tickInterval = s(b.pointRange, b.tickInterval);
            a = p(d.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
            if (!k && b.tickInterval < a)b.tickInterval = a;
            if (!f && !e && !k)b.tickInterval = pb(b.tickInterval, null, ob(b.tickInterval), p(d.allowDecimals, !(b.tickInterval > 0.5 && b.tickInterval < 5 && b.max > 1E3 && b.max < 9999)), !!this.tickAmount);
            if (!this.tickAmount && this.len)b.tickInterval =
                b.unsquish();
            this.setTickPositions()
        },
        setTickPositions: function () {
            var a = this.options, b, c = a.tickPositions, d = a.tickPositioner, e = a.startOnTick, f = a.endOnTick, g;
            this.tickmarkOffset = this.categories && a.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0;
            this.minorTickInterval = a.minorTickInterval === "auto" && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
            this.tickPositions = b = c && c.slice();
            if (!b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units),
                    this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min, this.max]))))this.tickPositions = b = d;
            if (!this.isLinked)this.trimTicks(b, e, f), this.min === this.max && q(this.min) && !this.tickAmount && (g = !0, this.min -= 0.5, this.max += 0.5), this.single = g, !c && !d && this.adjustTickAmount()
        },
        trimTicks: function (a, b, c) {
            var d = a[0], e = a[a.length - 1], f = this.minPointOffset || 0;
            b ? this.min = d : this.min - f > d && a.shift();
            c ? this.max = e : this.max + f < e && a.pop();
            a.length === 0 && q(d) && a.push((e + d) / 2)
        },
        getTickAmount: function () {
            var a = {}, b, c = this.options, d = c.tickAmount, e = c.tickPixelInterval;
            !q(c.tickInterval) && this.len < e && !this.isRadial && !this.isLog && c.startOnTick && c.endOnTick && (d = 2);
            !d && this.chart.options.chart.alignTicks !== !1 && c.alignTicks !== !1 && (o(this.chart[this.coll], function (c) {
                var d = c.options, e = c.horiz, d = [e ?
                    d.left : d.top, e ? d.width : d.height, d.pane].join(",");
                c.series.length && (a[d] ? b = !0 : a[d] = 1)
            }), b && (d = ta(this.len / e) + 1));
            if (d < 4)this.finalTickAmt = d, d = 5;
            this.tickAmount = d
        },
        adjustTickAmount: function () {
            var a = this.tickInterval, b = this.tickPositions, c = this.tickAmount, d = this.finalTickAmt, e = b && b.length;
            if (e < c) {
                for (; b.length < c;)b.push(ea(b[b.length - 1] + a));
                this.transA *= (e - 1) / (c - 1);
                this.max = b[b.length - 1]
            } else e > c && (this.tickInterval *= 2, this.setTickPositions());
            if (q(d)) {
                for (a = c = b.length; a--;)(d === 3 && a % 2 === 1 || d <= 2 && a >
                0 && a < c - 1) && b.splice(a, 1);
                this.finalTickAmt = x
            }
        },
        setScale: function () {
            var a, b;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            b = this.len !== this.oldAxisLength;
            o(this.series, function (b) {
                if (b.isDirtyData || b.isDirty || b.xAxis.isDirty)a = !0
            });
            if (b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin =
                        this.userMin, this.oldUserMax = this.userMax, !this.isDirty)this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax
            } else this.cleanStacks && this.cleanStacks()
        },
        setExtremes: function (a, b, c, d, e) {
            var f = this, g = f.chart, c = p(c, !0);
            o(f.series, function (a) {
                delete a.kdTree
            });
            e = t(e, {min: a, max: b});
            J(f, "setExtremes", e, function () {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                c && g.redraw(d)
            })
        },
        zoom: function (a, b) {
            var c = this.dataMin, d = this.dataMax, e = this.options, f = z(c, p(e.min, c)), e = s(d, p(e.max, d));
            this.allowZoomOutside ||
            (q(c) && a <= f && (a = f), q(d) && b >= e && (b = e));
            this.displayBtn = a !== x || b !== x;
            this.setExtremes(a, b, !1, x, {trigger: "zoom"});
            return !0
        },
        setAxisSize: function () {
            var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = this.horiz, e = p(b.width, a.plotWidth - c + (b.offsetRight || 0)), f = p(b.height, a.plotHeight), g = p(b.top, a.plotTop), b = p(b.left, a.plotLeft + c), c = /%$/;
            c.test(f) && (f = parseFloat(f) / 100 * a.plotHeight);
            c.test(g) && (g = parseFloat(g) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight -
                f - g;
            this.right = a.chartWidth - e - b;
            this.len = s(d ? e : f, 0);
            this.pos = d ? b : g
        },
        getExtremes: function () {
            var a = this.isLog;
            return {
                min: a ? ea(ia(this.min)) : this.min,
                max: a ? ea(ia(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function (a) {
            var b = this.isLog, c = b ? ia(this.min) : this.min, b = b ? ia(this.max) : this.max;
            a === null ? a = b < 0 ? b : c : c > a ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function (a) {
            a = (p(a, 0) - this.side * 90 + 720) % 360;
            return a > 15 &&
            a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center"
        },
        unsquish: function () {
            var a = this.ticks, b = this.options.labels, c = this.horiz, d = this.tickInterval, e = d, f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d), g, h = b.rotation, i = this.chart.renderer.fontMetrics(b.style.fontSize, a[0] && a[0].label), j, k = Number.MAX_VALUE, m, n = function (a) {
                a /= f || 1;
                a = a > 1 ? ta(a) : 1;
                return a * d
            };
            c ? (m = !b.staggerLines && !b.step && (q(h) ? [h] : f < p(b.autoRotationLimit, 80) && b.autoRotation)) && o(m, function (a) {
                var b;
                if (a === h || a && a >= -90 && a <= 90)j = n(O(i.h / aa(ga *
                        a))), b = j + O(a / 360), b < k && (k = b, g = a, e = j)
            }) : b.step || (e = n(i.h));
            this.autoRotation = m;
            this.labelRotation = p(g, h);
            return e
        },
        renderUnsquish: function () {
            var a = this.chart, b = a.renderer, c = this.tickPositions, d = this.ticks, e = this.options.labels, f = this.horiz, g = a.margin, h = this.categories ? c.length : c.length - 1, i = this.slotWidth = f && !e.step && !e.rotation && (this.staggerLines || 1) * a.plotWidth / h || !f && (g[3] && g[3] - a.spacing[3] || a.chartWidth * 0.33), j = s(1, w(i - 2 * (e.padding || 5))), k = {}, g = b.fontMetrics(e.style.fontSize, d[0] && d[0].label),
                h = e.style.textOverflow, m, n = 0;
            if (!Ba(e.rotation))k.rotation = e.rotation || 0;
            if (this.autoRotation)o(c, function (a) {
                if ((a = d[a]) && a.labelLength > n)n = a.labelLength
            }), n > j && n > g.h ? k.rotation = this.labelRotation : this.labelRotation = 0; else if (i && (m = {width: j + "px"}, !h)) {
                m.textOverflow = "clip";
                for (i = c.length; !f && i--;)if (j = c[i], j = d[j].label)if (j.styles.textOverflow === "ellipsis" && j.css({textOverflow: "clip"}), j.getBBox().height > this.len / c.length - (g.h - g.f))j.specCss = {textOverflow: "ellipsis"}
            }
            if (k.rotation && (m = {
                    width: (n >
                    a.chartHeight * 0.5 ? a.chartHeight * 0.33 : a.chartHeight) + "px"
                }, !h))m.textOverflow = "ellipsis";
            this.labelAlign = k.align = e.align || this.autoLabelAlign(this.labelRotation);
            o(c, function (a) {
                var b = (a = d[a]) && a.label;
                if (b)b.attr(k), m && b.css(D(m, b.specCss)), delete b.specCss, a.rotation = k.rotation
            });
            this.tickRotCorr = b.rotCorr(g.b, this.labelRotation || 0, this.side === 2)
        },
        hasData: function () {
            return this.hasVisibleSeries || q(this.min) && q(this.max) && !!this.tickPositions
        },
        getOffset: function () {
            var a = this, b = a.chart, c = b.renderer,
                d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, i = b.inverted ? [1, 0, 3, 2][h] : h, j, k, m = 0, n, l = 0, u = d.title, r = d.labels, Z = 0, A = b.axisOffset, b = b.clipOffset, v = [-1, 1, 1, -1][h], y, t = a.axisParent;
            j = a.hasData();
            a.showAxis = k = j || p(d.showEmpty, !0);
            a.staggerLines = a.horiz && r.staggerLines;
            if (!a.axisGroup)a.gridGroup = c.g("grid").attr({zIndex: d.gridZIndex || 1}).add(t), a.axisGroup = c.g("axis").attr({zIndex: d.zIndex || 2}).add(t), a.labelGroup = c.g("axis-labels").attr({zIndex: r.zIndex || 7}).addClass("highcharts-" + a.coll.toLowerCase() +
                "-labels").add(t);
            if (j || a.isLinked) {
                if (o(e, function (b) {
                        f[b] ? f[b].addLabel() : f[b] = new Sa(a, b)
                    }), a.renderUnsquish(), o(e, function (b) {
                        if (h === 0 || h === 2 || {
                                1: "left",
                                3: "right"
                            }[h] === a.labelAlign)Z = s(f[b].getLabelSize(), Z)
                    }), a.staggerLines)Z *= a.staggerLines, a.labelOffset = Z
            } else for (y in f)f[y].destroy(), delete f[y];
            if (u && u.text && u.enabled !== !1) {
                if (!a.axisTitle)a.axisTitle = c.text(u.text, 0, 0, u.useHTML).attr({
                    zIndex: 7,
                    rotation: u.rotation || 0,
                    align: u.textAlign || {low: "left", middle: "center", high: "right"}[u.align]
                }).addClass("highcharts-" +
                    this.coll.toLowerCase() + "-title").css(u.style).add(a.axisGroup), a.axisTitle.isNew = !0;
                if (k)m = a.axisTitle.getBBox()[g ? "height" : "width"], n = u.offset, l = q(n) ? 0 : p(u.margin, g ? 5 : 10);
                a.axisTitle[k ? "show" : "hide"]()
            }
            a.offset = v * p(d.offset, A[h]);
            a.tickRotCorr = a.tickRotCorr || {x: 0, y: 0};
            c = h === 2 ? a.tickRotCorr.y : 0;
            g = Z + l + (Z && v * (g ? p(r.y, a.tickRotCorr.y + 8) : r.x) - c);
            a.axisTitleMargin = p(n, g);
            A[h] = s(A[h], a.axisTitleMargin + m + v * a.offset, g);
            d = d.offset ? 0 : T(d.lineWidth / 2) * 2;
            b[i] = s(b[i], d)
        },
        getLinePath: function (a) {
            var b = this.chart,
                c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        },
        getTitlePosition: function () {
            var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, i = e.x || 0, j = e.y || 0, k = G(e.style.fontSize || 12), d = {
                low: f + (a ? 0 : d),
                middle: f + d / 2,
                high: f + (a ? d : 0)
            }[e.align], b = (a ?
                c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? k : 0);
            return {x: a ? d + i : b + (g ? this.width : 0) + h + i, y: a ? b + j - (g ? this.height : 0) + h : d + j}
        },
        render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.isLog, f = a.isLinked, g = a.tickPositions, h = a.axisTitle, i = a.ticks, j = a.minorTicks, k = a.alternateBands, m = d.stackLabels, n = d.alternateGridColor, l = a.tickmarkOffset, u = d.lineWidth, r, p = b.hasRendered && q(a.oldMin) && !isNaN(a.oldMin), A = a.showAxis, v = c.globalAnimation, y, s;
            a.labelEdge.length = 0;
            a.overlap = !1;
            o([i, j, k], function (a) {
                for (var b in a)a[b].isActive = !1
            });
            if (a.hasData() || f) {
                a.minorTickInterval && !a.categories && o(a.getMinorTickPositions(), function (b) {
                    j[b] || (j[b] = new Sa(a, b, "minor"));
                    p && j[b].isNew && j[b].render(null, !0);
                    j[b].render(null, !1, 1)
                });
                if (g.length && (o(g, function (b, c) {
                        if (!f || b >= a.min && b <= a.max)i[b] || (i[b] = new Sa(a, b)), p && i[b].isNew && i[b].render(c, !0, 0.1), i[b].render(c)
                    }), l && (a.min === 0 || a.single)))i[-1] || (i[-1] = new Sa(a, -1, null, !0)), i[-1].render(-1);
                n && o(g, function (b, c) {
                    s = g[c + 1] !== x ? g[c + 1] +
                    l : a.max - l;
                    if (c % 2 === 0 && b < a.max && s <= a.max - l)k[b] || (k[b] = new B.PlotLineOrBand(a)), y = b + l, k[b].options = {
                        from: e ? ia(y) : y,
                        to: e ? ia(s) : s,
                        color: n
                    }, k[b].render(), k[b].isActive = !0
                });
                if (!a._addedPlotLB)o((d.plotLines || []).concat(d.plotBands || []), function (b) {
                    a.addPlotBandOrLine(b)
                }), a._addedPlotLB = !0
            }
            o([i, j, k], function (a) {
                var c, d, e = [], f = v ? v.duration || 500 : 0, g = function () {
                    for (d = e.length; d--;)a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]])
                };
                for (c in a)if (!a[c].isActive)a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c);
                a === k || !b.hasRendered || !f ? g() : f && setTimeout(g, f)
            });
            if (u)r = a.getLinePath(u), a.axisLine ? a.axisLine.animate({d: r}) : a.axisLine = c.path(r).attr({
                stroke: d.lineColor,
                "stroke-width": u,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[A ? "show" : "hide"]();
            if (h && A)h[h.isNew ? "attr" : "animate"](a.getTitlePosition()), h.isNew = !1;
            m && m.enabled && a.renderStackTotals();
            a.isDirty = !1
        },
        redraw: function () {
            this.visible && (this.render(), o(this.plotLinesAndBands, function (a) {
                a.render()
            }));
            o(this.series, function (a) {
                a.isDirty = !0
            })
        },
        destroy: function (a) {
            var b = this, c = b.stacks, d, e = b.plotLinesAndBands;
            a || Y(b);
            for (d in c)Pa(c[d]), c[d] = null;
            o([b.ticks, b.minorTicks, b.alternateBands], function (a) {
                Pa(a)
            });
            for (a = e.length; a--;)e[a].destroy();
            o("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","), function (a) {
                b[a] && (b[a] = b[a].destroy())
            });
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function (a, b) {
            var c, d = this.crosshair, e = d.animation;
            if (!this.crosshair || (q(b) || !p(this.crosshair.snap, !0)) === !1 || b && b.series &&
                b.series[this.coll] !== this)this.hideCrosshair(); else if (p(d.snap, !0) ? q(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : p(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null, null, c) || null, c === null)this.hideCrosshair(); else if (this.cross)this.cross.attr({visibility: "visible"})[e ? "animate" : "attr"]({d: c}, e); else {
                e = this.categories && !this.isRadial;
                e = {
                    "stroke-width": d.width || (e ? this.transA :
                        1), stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"), zIndex: d.zIndex || 2
                };
                if (d.dashStyle)e.dashstyle = d.dashStyle;
                this.cross = this.chart.renderer.path(c).attr(e).add()
            }
        },
        hideCrosshair: function () {
            this.cross && this.cross.hide()
        }
    };
    t(ha.prototype, {
        getPlotBandPath: function (a, b) {
            var c = this.getPlotLinePath(b, null, null, !0), d = this.getPlotLinePath(a, null, null, !0);
            d && c && d.toString() !== c.toString() ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d
        }, addPlotBand: function (a) {
            return this.addPlotBandOrLine(a, "plotBands")
        },
        addPlotLine: function (a) {
            return this.addPlotBandOrLine(a, "plotLines")
        }, addPlotBandOrLine: function (a, b) {
            var c = (new B.PlotLineOrBand(this, a)).render(), d = this.userOptions;
            c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c
        }, removePlotBandOrLine: function (a) {
            for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--;)b[e].id === a && b[e].destroy();
            o([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function (b) {
                for (e = b.length; e--;)b[e].id === a &&
                ja(b, b[e])
            })
        }
    });
    ha.prototype.getTimeTicks = function (a, b, c, d) {
        var e = [], f = {}, g = S.global.useUTC, h, i = new ya(b - Wa(b)), j = a.unitRange, k = a.count;
        if (q(b)) {
            i[Db](j >= F.second ? 0 : k * T(i.getMilliseconds() / k));
            if (j >= F.second)i[Eb](j >= F.minute ? 0 : k * T(i.getSeconds() / k));
            if (j >= F.minute)i[Fb](j >= F.hour ? 0 : k * T(i[rb]() / k));
            if (j >= F.hour)i[Gb](j >= F.day ? 0 : k * T(i[sb]() / k));
            if (j >= F.day)i[ub](j >= F.month ? 1 : k * T(i[Xa]() / k));
            j >= F.month && (i[vb](j >= F.year ? 0 : k * T(i[Ya]() / k)), h = i[Za]());
            j >= F.year && (h -= h % k, i[wb](h));
            if (j === F.week)i[ub](i[Xa]() -
                i[tb]() + p(d, 1));
            b = 1;
            if (nb || db)i = i.getTime(), i = new ya(i + Wa(i));
            h = i[Za]();
            for (var d = i.getTime(), m = i[Ya](), n = i[Xa](), l = (F.day + (g ? Wa(i) : i.getTimezoneOffset() * 6E4)) % F.day; d < c;)e.push(d), j === F.year ? d = fb(h + b * k, 0) : j === F.month ? d = fb(h, m + b * k) : !g && (j === F.day || j === F.week) ? d = fb(h, m, n + b * k * (j === F.day ? 1 : 7)) : d += j * k, b++;
            e.push(d);
            o(kb(e, function (a) {
                return j <= F.hour && a % F.day === l
            }), function (a) {
                f[a] = "day"
            })
        }
        e.info = t(a, {higherRanks: f, totalRange: j * k});
        return e
    };
    ha.prototype.normalizeTimeTickInterval = function (a, b) {
        var c =
            b || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], d = c[c.length - 1], e = F[d[0]], f = d[1], g;
        for (g = 0; g < c.length; g++)if (d = c[g], e = F[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + F[c[g + 1][0]]) / 2)break;
        e === F.year && a < 5 * e && (f = [1, 2, 5]);
        c = pb(a / e, f, d[0] === "year" ? s(ob(a / e), 1) : 1);
        return {unitRange: e, count: c, unitName: d[0]}
    };
    ha.prototype.getLogTickPositions = function (a, b, c, d) {
        var e =
            this.options, f = this.len, g = [];
        if (!d)this._minorAutoInterval = null;
        if (a >= 0.5)a = w(a), g = this.getLinearTickPositions(a, b, c); else if (a >= 0.08)for (var f = T(b), h, i, j, k, m, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !m; f++) {
            i = e.length;
            for (h = 0; h < i && !m; h++)j = Ca(ia(f) * e[h]), j > b && (!d || k <= c) && k !== x && g.push(k), k > c && (m = !0), k = j
        } else if (b = ia(b), c = ia(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = p(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length :
                    f) || 1)), a = pb(a, null, ob(a)), g = Ua(this.getLinearTickPositions(a, b, c), Ca), !d)this._minorAutoInterval = a / 5;
        if (!d)this.tickInterval = a;
        return g
    };
    var Mb = B.Tooltip = function () {
        this.init.apply(this, arguments)
    };
    Mb.prototype = {
        init: function (a, b) {
            var c = b.borderWidth, d = b.style, e = G(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {x: 0, y: 0};
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: e, fill: b.backgroundColor, "stroke-width": c,
                r: b.borderRadius, zIndex: 8
            }).css(d).css({padding: 0}).add().attr({y: -9999});
            fa || this.label.shadow(b.shadow);
            this.shared = b.shared
        }, destroy: function () {
            if (this.label)this.label = this.label.destroy();
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        }, move: function (a, b, c, d) {
            var e = this, f = e.now, g = e.options.animation !== !1 && !e.isHidden && (O(a - f.x) > 1 || O(b - f.y) > 1), h = e.followPointer || e.len > 1;
            t(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: h ? x : g ? (2 * f.anchorX + c) / 3 : c,
                anchorY: h ? x : g ? (f.anchorY + d) / 2 : d
            });
            e.label.attr(f);
            if (g)clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                e && e.move(a, b, c, d)
            }, 32)
        }, hide: function (a) {
            var b = this;
            clearTimeout(this.hideTimer);
            if (!this.isHidden)this.hideTimer = setTimeout(function () {
                b.label.fadeOut();
                b.isHidden = !0
            }, p(a, this.options.hideDelay, 500))
        }, getAnchor: function (a, b) {
            var c, d = this.chart, e = d.inverted, f = d.plotTop, g = d.plotLeft, h = 0, i = 0, j, k, a = ra(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === x && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY -
            f]);
            c || (o(a, function (a) {
                j = a.series.yAxis;
                k = a.series.xAxis;
                h += a.plotX + (!e && k ? k.left - g : 0);
                i += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && j ? j.top - f : 0)
            }), h /= a.length, i /= a.length, c = [e ? d.plotWidth - i : h, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - h : i]);
            return Ua(c, w)
        }, getPosition: function (a, b, c) {
            var d = this.chart, e = this.distance, f = {}, g = c.h || 0, h, i = ["y", d.chartHeight, b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight], j = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth],
                k = p(c.ttBelow, d.inverted && !c.negative || !d.inverted && c.negative), m = function (a, b, c, d, h, i) {
                    var j = c < d - e, n = d + e + c < b, m = d - e - c;
                    d += e;
                    if (k && n)f[a] = d; else if (!k && j)f[a] = m; else if (j)f[a] = z(i - c, m - g < 0 ? m : m - g); else if (n)f[a] = s(h, d + g + c > b ? d : d + g); else return !1
                }, n = function (a, b, c, d) {
                    if (d < e || d > b - e)return !1; else f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2
                }, l = function (a) {
                    var b = i;
                    i = j;
                    j = b;
                    h = a
                }, u = function () {
                    m.apply(0, i) !== !1 ? n.apply(0, j) === !1 && !h && (l(!0), u()) : h ? f.x = f.y = 0 : (l(!0), u())
                };
            (d.inverted || this.len > 1) && l();
            u();
            return f
        }, defaultFormatter: function (a) {
            var b =
                this.points || ra(this), c;
            c = [a.tooltipFooterHeaderFormatter(b[0])];
            c = c.concat(a.bodyFormatter(b));
            c.push(a.tooltipFooterHeaderFormatter(b[0], !0));
            return c.join("")
        }, refresh: function (a, b) {
            var c = this.chart, d = this.label, e = this.options, f, g, h, i = {}, j, k = [];
            j = e.formatter || this.defaultFormatter;
            var i = c.hoverPoints, m, n = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = ra(a)[0].series.tooltipOptions.followPointer;
            h = this.getAnchor(a, b);
            f = h[0];
            g = h[1];
            n && (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints =
                a, i && o(i, function (a) {
                a.setState()
            }), o(a, function (a) {
                a.setState("hover");
                k.push(a.getLabelConfig())
            }), i = {
                x: a[0].category,
                y: a[0].y
            }, i.points = k, this.len = k.length, a = a[0]) : i = a.getLabelConfig();
            j = j.call(i, this);
            i = a.series;
            this.distance = p(i.tooltipOptions.distance, 16);
            j === !1 ? this.hide() : (this.isHidden && (cb(d), d.attr("opacity", 1).show()), d.attr({text: j}), m = e.borderColor || a.color || i.color || "#606060", d.attr({stroke: m}), this.updatePosition({
                plotX: f,
                plotY: g,
                negative: a.negative,
                ttBelow: a.ttBelow,
                h: h[2] || 0
            }), this.isHidden = !1);
            J(c, "tooltipRefresh", {text: j, x: f + c.plotLeft, y: g + c.plotTop, borderColor: m})
        }, updatePosition: function (a) {
            var b = this.chart, c = this.label, c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(w(c.x), w(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        }, getXDateFormat: function (a, b, c) {
            var d, b = b.dateTimeLabelFormats, e = c && c.closestPointRange, f, g = {
                millisecond: 15,
                second: 12,
                minute: 9,
                hour: 6,
                day: 3
            }, h, i = "millisecond";
            if (e) {
                h = Na("%m-%d %H:%M:%S.%L", a.x);
                for (f in F) {
                    if (e === F.week && +Na("%w",
                            a.x) === c.options.startOfWeek && h.substr(6) === "00:00:00.000") {
                        f = "week";
                        break
                    } else if (F[f] > e) {
                        f = i;
                        break
                    } else if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f]))break;
                    f !== "week" && (i = f)
                }
                f && (d = b[f])
            } else d = b.day;
            return d || b.year
        }, tooltipFooterHeaderFormatter: function (a, b) {
            var c = b ? "footer" : "header", d = a.series, e = d.tooltipOptions, f = e.xDateFormat, g = d.xAxis, h = g && g.options.type === "datetime" && qa(a.key), c = e[c + "Format"];
            h && !f && (f = this.getXDateFormat(a, e, g));
            h && f && (c = c.replace("{point.key}", "{point.key:" +
                f + "}"));
            return Ia(c, {point: a, series: d})
        }, bodyFormatter: function (a) {
            return Ua(a, function (a) {
                var c = a.series.tooltipOptions;
                return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat)
            })
        }
    };
    var oa;
    ab = C.documentElement.ontouchstart !== x;
    var Va = B.Pointer = function (a, b) {
        this.init(a, b)
    };
    Va.prototype = {
        init: function (a, b) {
            var c = b.chart, d = c.events, e = fa ? "" : c.zoomType, c = a.inverted, f;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert =
                e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            if (B.Tooltip && b.tooltip.enabled)a.tooltip = new Mb(a, b.tooltip), this.followTouchMove = p(b.tooltip.followTouchMove, !0);
            this.setDOMEvents()
        }, normalize: function (a, b) {
            var c, d, a = a || window.event, a = Sb(a);
            if (!a.target)a.target = a.srcElement;
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            if (!b)this.chartPosition = b = Rb(this.chart.container);
            d.pageX === x ? (c = s(a.x, a.clientX - b.left), d = a.y) : (c =
                d.pageX - b.left, d = d.pageY - b.top);
            return t(a, {chartX: w(c), chartY: w(d)})
        }, getCoordinates: function (a) {
            var b = {xAxis: [], yAxis: []};
            o(this.chart.axes, function (c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"])})
            });
            return b
        }, runPointActions: function (a) {
            var b = this.chart, c = b.series, d = b.tooltip, e = d ? d.shared : !1, f = b.hoverPoint, g = b.hoverSeries, h, i = Number.MAX_VALUE, j, k, m = [], n, l;
            if (!e && !g)for (h = 0; h < c.length; h++)if (c[h].directTouch || !c[h].options.stickyTracking)c = [];
            g && (e ? g.noSharedTooltip :
                g.directTouch) && f ? n = f : (o(c, function (b) {
                j = b.noSharedTooltip && e;
                k = !e && b.directTouch;
                b.visible && !j && !k && p(b.options.enableMouseTracking, !0) && (l = b.searchPoint(a, !j && b.kdDimensions === 1)) && m.push(l)
            }), o(m, function (a) {
                if (a && typeof a.dist === "number" && a.dist < i)i = a.dist, n = a
            }));
            if (n && (n !== this.prevKDPoint || d && d.isHidden)) {
                if (e && !n.series.noSharedTooltip) {
                    for (h = m.length; h--;)(m[h].clientX !== n.clientX || m[h].series.noSharedTooltip) && m.splice(h, 1);
                    m.length && d && d.refresh(m, a);
                    o(m, function (b) {
                        b.onMouseOver(a, b !==
                            (g && g.directTouch && f || n))
                    })
                } else if (d && d.refresh(n, a), !g || !g.directTouch)n.onMouseOver(a);
                this.prevKDPoint = n
            } else c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}], a), d.updatePosition({
                plotX: c[0],
                plotY: c[1]
            }));
            if (d && !this._onDocumentMouseMove)this._onDocumentMouseMove = function (a) {
                if (X[oa])X[oa].pointer.onDocumentMouseMove(a)
            }, I(C, "mousemove", this._onDocumentMouseMove);
            o(b.axes, function (b) {
                b.drawCrosshair(a, p(n, f))
            })
        }, reset: function (a, b) {
            var c = this.chart, d = c.hoverSeries, e =
                c.hoverPoint, f = c.hoverPoints, g = c.tooltip, h = g && g.shared ? f : e;
            (a = a && g && h) && ra(h)[0].plotX === x && (a = !1);
            if (a)g.refresh(h), e && (e.setState(e.state, !0), o(c.axes, function (a) {
                p(a.options.crosshair && a.options.crosshair.snap, !0) ? a.drawCrosshair(null, e) : a.hideCrosshair()
            })); else {
                if (e)e.onMouseOut();
                f && o(f, function (a) {
                    a.setState()
                });
                if (d)d.onMouseOut();
                g && g.hide(b);
                if (this._onDocumentMouseMove)Y(C, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null;
                o(c.axes, function (a) {
                    a.hideCrosshair()
                });
                this.hoverX =
                    c.hoverPoints = c.hoverPoint = null
            }
        }, scaleGroups: function (a, b) {
            var c = this.chart, d;
            o(c.series, function (e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        }, dragStart: function (a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY = a.chartY
        }, drag: function (a) {
            var b =
                this.chart, c = b.options.chart, d = a.chartX, e = a.chartY, f = this.zoomHor, g = this.zoomVert, h = b.plotLeft, i = b.plotTop, j = b.plotWidth, k = b.plotHeight, m, n = this.selectionMarker, l = this.mouseDownX, u = this.mouseDownY, r = c.panKey && a[c.panKey + "Key"];
            if (!n || !n.touch)if (d < h ? d = h : d > h + j && (d = h + j), e < i ? e = i : e > i + k && (e = i + k), this.hasDragged = Math.sqrt(Math.pow(l - d, 2) + Math.pow(u - e, 2)), this.hasDragged > 10) {
                m = b.isInsidePlot(l - h, u - i);
                if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && m && !r && !n)this.selectionMarker = n = b.renderer.rect(h, i,
                    f ? 1 : j, g ? 1 : k, 0).attr({
                    fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)",
                    zIndex: 7
                }).add();
                n && f && (d -= l, n.attr({width: O(d), x: (d > 0 ? 0 : d) + l}));
                n && g && (d = e - u, n.attr({height: O(d), y: (d > 0 ? 0 : d) + u}));
                m && !n && c.panning && b.pan(a, c.panning)
            }
        }, drop: function (a) {
            var b = this, c = this.chart, d = this.hasPinched;
            if (this.selectionMarker) {
                var e = {
                    xAxis: [],
                    yAxis: [],
                    originalEvent: a.originalEvent || a
                }, f = this.selectionMarker, g = f.attr ? f.attr("x") : f.x, h = f.attr ? f.attr("y") : f.y, i = f.attr ? f.attr("width") : f.width, j = f.attr ? f.attr("height") :
                    f.height, k;
                if (this.hasDragged || d)o(c.axes, function (c) {
                    if (c.zoomEnabled && q(c.min) && (d || b[{xAxis: "zoomX", yAxis: "zoomY"}[c.coll]])) {
                        var f = c.horiz, l = a.type === "touchend" ? c.minPixelPadding : 0, u = c.toValue((f ? g : h) + l), f = c.toValue((f ? g + i : h + j) - l);
                        e[c.coll].push({axis: c, min: z(u, f), max: s(u, f)});
                        k = !0
                    }
                }), k && J(c, "selection", e, function (a) {
                    c.zoom(t(a, d ? {animation: !1} : null))
                });
                this.selectionMarker = this.selectionMarker.destroy();
                d && this.scaleGroups()
            }
            if (c)M(c.container, {cursor: c._cursor}), c.cancelClick = this.hasDragged >
                10, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []
        }, onContainerMouseDown: function (a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        }, onDocumentMouseUp: function (a) {
            X[oa] && X[oa].pointer.drop(a)
        }, onDocumentMouseMove: function (a) {
            var b = this.chart, c = this.chartPosition, a = this.normalize(a, c);
            c && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset()
        }, onContainerMouseLeave: function () {
            var a = X[oa];
            if (a)a.pointer.reset(),
                a.pointer.chartPosition = null
        }, onContainerMouseMove: function (a) {
            var b = this.chart;
            oa = b.index;
            a = this.normalize(a);
            a.returnValue = !1;
            b.mouseIsDown === "mousedown" && this.drag(a);
            (this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) && !b.openMenu && this.runPointActions(a)
        }, inClass: function (a, b) {
            for (var c; a;) {
                if (c = K(a, "class"))if (c.indexOf(b) !== -1)return !0; else if (c.indexOf("highcharts-container") !== -1)return !1;
                a = a.parentNode
            }
        }, onTrackerMouseOut: function (a) {
            var b =
                this.chart.hoverSeries, a = a.relatedTarget || a.toElement;
            if (b && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && !this.inClass(a, "highcharts-series-" + b.index))b.onMouseOut()
        }, onContainerClick: function (a) {
            var b = this.chart, c = b.hoverPoint, d = b.plotLeft, e = b.plotTop, a = this.normalize(a);
            a.originalEvent = a;
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (J(c.series, "click", t(a, {point: c})), b.hoverPoint && c.firePointEvent("click", a)) : (t(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX -
                d, a.chartY - e) && J(b, "click", a)))
        }, setDOMEvents: function () {
            var a = this, b = a.chart.container;
            b.onmousedown = function (b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function (b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function (b) {
                a.onContainerClick(b)
            };
            I(b, "mouseleave", a.onContainerMouseLeave);
            bb === 1 && I(C, "mouseup", a.onDocumentMouseUp);
            if (ab)b.ontouchstart = function (b) {
                a.onContainerTouchStart(b)
            }, b.ontouchmove = function (b) {
                a.onContainerTouchMove(b)
            }, bb === 1 && I(C, "touchend", a.onDocumentTouchEnd)
        }, destroy: function () {
            var a;
            Y(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            bb || (Y(C, "mouseup", this.onDocumentMouseUp), Y(C, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this)this[a] = null
        }
    };
    t(B.Pointer.prototype, {
        pinchTranslate: function (a, b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        }, pinchTranslateDirection: function (a, b, c, d, e, f, g, h) {
            var i = this.chart, j = a ? "x" :
                "y", k = a ? "X" : "Y", m = "chart" + k, n = a ? "width" : "height", l = i["plot" + (a ? "Left" : "Top")], u, r, p = h || 1, o = i.inverted, v = i.bounds[a ? "h" : "v"], s = b.length === 1, q = b[0][m], t = c[0][m], x = !s && b[1][m], w = !s && c[1][m], z, c = function () {
                !s && O(q - x) > 20 && (p = h || O(t - w) / O(q - x));
                r = (l - t) / p + q;
                u = i["plot" + (a ? "Width" : "Height")] / p
            };
            c();
            b = r;
            b < v.min ? (b = v.min, z = !0) : b + u > v.max && (b = v.max - u, z = !0);
            z ? (t -= 0.8 * (t - g[j][0]), s || (w -= 0.8 * (w - g[j][1])), c()) : g[j] = [t, w];
            o || (f[j] = r - l, f[n] = u);
            f = o ? 1 / p : p;
            e[n] = u;
            e[j] = b;
            d[o ? a ? "scaleY" : "scaleX" : "scale" + k] = p;
            d["translate" +
            k] = f * l + (t - f * q)
        }, pinch: function (a) {
            var b = this, c = b.chart, d = b.pinchDown, e = a.touches, f = e.length, g = b.lastValidTouch, h = b.hasZoom, i = b.selectionMarker, j = {}, k = f === 1 && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick), m = {};
            if (f > 1)b.initiated = !0;
            h && b.initiated && !k && a.preventDefault();
            Ua(e, function (a) {
                return b.normalize(a)
            });
            if (a.type === "touchstart")o(e, function (a, b) {
                d[b] = {chartX: a.chartX, chartY: a.chartY}
            }), g.x = [d[0].chartX, d[1] && d[1].chartX], g.y = [d[0].chartY, d[1] && d[1].chartY], o(c.axes,
                function (a) {
                    if (a.zoomEnabled) {
                        var b = c.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, e = a.toPixels(p(a.options.min, a.dataMin)), f = a.toPixels(p(a.options.max, a.dataMax)), g = z(e, f), e = s(e, f);
                        b.min = z(a.pos, g - d);
                        b.max = s(a.pos + a.len, e + d)
                    }
                }), b.res = !0; else if (d.length) {
                if (!i)b.selectionMarker = i = t({destroy: ua, touch: !0}, c.plotBox);
                b.pinchTranslate(d, e, j, i, m, g);
                b.hasPinched = h;
                b.scaleGroups(j, m);
                if (!h && b.followTouchMove && f === 1)this.runPointActions(b.normalize(a)); else if (b.res)b.res = !1, this.reset(!1, 0)
            }
        }, touch: function (a,
                            b) {
            var c = this.chart;
            oa = c.index;
            a.touches.length === 1 ? (a = this.normalize(a), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop) && !c.openMenu ? (b && this.runPointActions(a), this.pinch(a)) : b && this.reset()) : a.touches.length === 2 && this.pinch(a)
        }, onContainerTouchStart: function (a) {
            this.touch(a, !0)
        }, onContainerTouchMove: function (a) {
            this.touch(a)
        }, onDocumentTouchEnd: function (a) {
            X[oa] && X[oa].pointer.drop(a)
        }
    });
    if (L.PointerEvent || L.MSPointerEvent) {
        var wa = {}, Ab = !!L.PointerEvent, Wb = function () {
            var a, b = [];
            b.item = function (a) {
                return this[a]
            };
            for (a in wa)wa.hasOwnProperty(a) && b.push({pageX: wa[a].pageX, pageY: wa[a].pageY, target: wa[a].target});
            return b
        }, Bb = function (a, b, c, d) {
            a = a.originalEvent || a;
            if ((a.pointerType === "touch" || a.pointerType === a.MSPOINTER_TYPE_TOUCH) && X[oa])d(a), d = X[oa].pointer, d[b]({
                type: c,
                target: a.currentTarget,
                preventDefault: ua,
                touches: Wb()
            })
        };
        t(Va.prototype, {
            onContainerPointerDown: function (a) {
                Bb(a, "onContainerTouchStart", "touchstart", function (a) {
                    wa[a.pointerId] = {pageX: a.pageX, pageY: a.pageY, target: a.currentTarget}
                })
            }, onContainerPointerMove: function (a) {
                Bb(a,
                    "onContainerTouchMove", "touchmove", function (a) {
                        wa[a.pointerId] = {pageX: a.pageX, pageY: a.pageY};
                        if (!wa[a.pointerId].target)wa[a.pointerId].target = a.currentTarget
                    })
            }, onDocumentPointerUp: function (a) {
                Bb(a, "onDocumentTouchEnd", "touchend", function (a) {
                    delete wa[a.pointerId]
                })
            }, batchMSEvents: function (a) {
                a(this.chart.container, Ab ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a(this.chart.container, Ab ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a(C, Ab ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        });
        Ta(Va.prototype, "init", function (a, b, c) {
            a.call(this, b, c);
            this.hasZoom && M(b.container, {"-ms-touch-action": P, "touch-action": P})
        });
        Ta(Va.prototype, "setDOMEvents", function (a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(I)
        });
        Ta(Va.prototype, "destroy", function (a) {
            this.batchMSEvents(Y);
            a.call(this)
        })
    }
    var mb = B.Legend = function (a, b) {
        this.init(a, b)
    };
    mb.prototype = {
        init: function (a, b) {
            var c = this, d = b.itemStyle, e = b.itemMarginTop || 0;
            this.options = b;
            if (b.enabled)c.itemStyle = d, c.itemHiddenStyle =
                D(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = p(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = p(b.symbolWidth, 16), c.pages = [], c.render(), I(c.chart, "endResize", function () {
                c.positionCheckboxes()
            })
        }, colorizeItem: function (a, b) {
            var c = this.options, d = a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.legendColor || a.color || "#CCC" : g, g = a.options && a.options.marker, i = {fill: h}, j;
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({stroke: h});
            if (f) {
                if (g && f.isMarker)for (j in i.stroke = h, g = a.convertAttribs(g), g)d = g[j], d !== x && (i[j] = d);
                f.attr(i)
            }
        }, positionItem: function (a) {
            var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox;
            (a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            if (f)f.x = e, f.y = d
        }, destroyItem: function (a) {
            var b = a.checkbox;
            o(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && Qa(a.checkbox)
        },
        destroy: function () {
            var a = this.group, b = this.box;
            if (b)this.box = b.destroy();
            if (a)this.group = a.destroy()
        }, positionCheckboxes: function (a) {
            var b = this.group.alignAttr, c, d = this.clipHeight || this.legendHeight;
            if (b)c = b.translateY, o(this.allItems, function (e) {
                var f = e.checkbox, g;
                f && (g = c + f.y + (a || 0) + 3, M(f, {
                    left: b.translateX + e.checkboxOffset + f.x - 20 + "px",
                    top: g + "px",
                    display: g > c - 6 && g < c + d - 6 ? "" : P
                }))
            })
        }, renderTitle: function () {
            var a = this.padding, b = this.options.title, c = 0;
            if (b.text) {
                if (!this.title)this.title = this.chart.renderer.label(b.text,
                    a - 3, a - 4, null, null, null, null, null, "legend-title").attr({zIndex: 1}).css(b.style).add(this.group);
                a = this.title.getBBox();
                c = a.height;
                this.offsetWidth = a.width;
                this.contentGroup.attr({translateY: c})
            }
            this.titleHeight = c
        }, setText: function (a) {
            var b = this.options;
            a.legendItem.attr({text: b.labelFormat ? Ia(b.labelFormat, a) : b.labelFormatter.call(a)})
        }, renderItem: function (a) {
            var b = this.chart, c = b.renderer, d = this.options, e = d.layout === "horizontal", f = this.symbolWidth, g = d.symbolPadding, h = this.itemStyle, i = this.itemHiddenStyle,
                j = this.padding, k = e ? p(d.itemDistance, 20) : 0, m = !d.rtl, n = d.width, l = d.itemMarginBottom || 0, u = this.itemMarginTop, r = this.initialItemX, o = a.legendItem, A = a.series && a.series.drawLegendSymbol ? a.series : a, v = A.options, v = this.createCheckboxForItem && v && v.showCheckbox, q = d.useHTML;
            if (!o) {
                a.legendGroup = c.g("legend-item").attr({zIndex: 1}).add(this.scrollGroup);
                a.legendItem = o = c.text("", m ? f + g : -g, this.baseline || 0, q).css(D(a.visible ? h : i)).attr({
                    align: m ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup);
                if (!this.baseline)this.fontMetrics =
                    c.fontMetrics(h.fontSize, o), this.baseline = this.fontMetrics.f + 3 + u, o.attr("y", this.baseline);
                A.drawLegendSymbol(this, a);
                this.setItemEvents && this.setItemEvents(a, o, q, h, i);
                this.colorizeItem(a, a.visible);
                v && this.createCheckboxForItem(a)
            }
            this.setText(a);
            c = o.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + k + (v ? 20 : 0);
            this.itemHeight = g = w(a.legendItemHeight || c.height);
            if (e && this.itemX - r + f > (n || b.chartWidth - 2 * j - r - d.x))this.itemX = r, this.itemY += u + this.lastLineHeight + l, this.lastLineHeight =
                0;
            this.maxItemWidth = s(this.maxItemWidth, f);
            this.lastItemY = u + this.itemY + l;
            this.lastLineHeight = s(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += u + g + l, this.lastLineHeight = g);
            this.offsetWidth = n || s((e ? this.itemX - r - k : f) + j, this.offsetWidth)
        }, getAllItems: function () {
            var a = [];
            o(this.chart.series, function (b) {
                var c = b.options;
                if (p(c.showInLegend, !q(c.linkedTo) ? x : !1, !0))a = a.concat(b.legendItems || (c.legendType === "point" ? b.data : b))
            });
            return a
        }, adjustMargins: function (a,
                                    b) {
            var c = this.chart, d = this.options, e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);
            this.display && !d.floating && o([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (f, g) {
                f.test(e) && !q(a[g]) && (c[ib[g]] = s(c[ib[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * d[g % 2 ? "x" : "y"] + p(d.margin, 12) + b[g]))
            })
        }, render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.group, e, f, g, h, i = a.box, j = a.options, k = a.padding, m = j.borderWidth, n = j.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            if (!d)a.group = d = c.g("legend").attr({zIndex: 7}).add(), a.contentGroup = c.g().attr({zIndex: 1}).add(d), a.scrollGroup = c.g().add(a.contentGroup);
            a.renderTitle();
            e = a.getAllItems();
            qb(e, function (a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            j.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            a.lastLineHeight = 0;
            o(e, function (b) {
                a.renderItem(b)
            });
            g = (j.width || a.offsetWidth) + k;
            h = a.lastItemY + a.lastLineHeight +
                a.titleHeight;
            h = a.handleOverflow(h);
            h += k;
            if (m || n) {
                if (i) {
                    if (g > 0 && h > 0)i[i.isNew ? "attr" : "animate"](i.crisp({width: g, height: h})), i.isNew = !1
                } else a.box = i = c.rect(0, 0, g, h, j.borderRadius, m || 0).attr({
                    stroke: j.borderColor,
                    "stroke-width": m || 0,
                    fill: n || P
                }).add(d).shadow(j.shadow), i.isNew = !0;
                i[f ? "show" : "hide"]()
            }
            a.legendWidth = g;
            a.legendHeight = h;
            o(e, function (b) {
                a.positionItem(b)
            });
            f && d.align(t({width: g, height: h}, j), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        }, handleOverflow: function (a) {
            var b = this, c =
                this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding, g = e.maxHeight, h, i = this.clipRect, j = e.navigation, k = p(j.animation, !0), m = j.arrowSize || 12, n = this.nav, l = this.pages, u = this.padding, r, q = this.allItems, A = function (a) {
                i.attr({height: a});
                if (b.contentGroup.div)b.contentGroup.div.style.clip = "rect(" + u + "px,9999px," + (u + a) + "px,0)"
            };
            e.layout === "horizontal" && (f /= 2);
            g && (f = z(f, g));
            l.length = 0;
            if (a > f) {
                this.clipHeight = h = s(f - 20 - this.titleHeight - u, 0);
                this.currentPage =
                    p(this.currentPage, 1);
                this.fullHeight = a;
                o(q, function (a, b) {
                    var c = a._legendItemPos[1], d = w(a.legendItem.getBBox().height), e = l.length;
                    if (!e || c - l[e - 1] > h && (r || c) !== l[e - 1])l.push(r || c), e++;
                    b === q.length - 1 && c + d - l[e - 1] > h && l.push(c);
                    c !== r && (r = c)
                });
                if (!i)i = b.clipRect = d.clipRect(0, u, 9999, 0), b.contentGroup.clip(i);
                A(h);
                if (!n)this.nav = n = d.g().attr({zIndex: 1}).add(this.group), this.up = d.symbol("triangle", 0, 0, m, m).on("click", function () {
                    b.scroll(-1, k)
                }).add(n), this.pager = d.text("", 15, 10).css(j.style).add(n), this.down =
                    d.symbol("triangle-down", 0, 0, m, m).on("click", function () {
                        b.scroll(1, k)
                    }).add(n);
                b.scroll(0);
                a = f
            } else if (n)A(c.chartHeight), n.hide(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0;
            return a
        }, scroll: function (a, b) {
            var c = this.pages, d = c.length, e = this.currentPage + a, f = this.clipHeight, g = this.options.navigation, h = g.activeColor, g = g.inactiveColor, i = this.pager, j = this.padding;
            e > d && (e = d);
            if (e > 0)b !== x && Ra(b, this.chart), this.nav.attr({
                translateX: j,
                translateY: f + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }),
                this.up.attr({fill: e === 1 ? g : h}).css({cursor: e === 1 ? "default" : "pointer"}), i.attr({text: e + "/" + d}), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: e === d ? g : h
            }).css({cursor: e === d ? "default" : "pointer"}), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({translateY: c}), this.currentPage = e, this.positionCheckboxes(c)
        }
    };
    Ma = B.LegendSymbolMixin = {
        drawRectangle: function (a, b) {
            var c = a.options.symbolHeight || a.fontMetrics.f;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius ||
                0).attr({zIndex: 3}).add(b.legendGroup)
        }, drawLineMarker: function (a) {
            var b = this.options, c = b.marker, d;
            d = a.symbolWidth;
            var e = this.chart.renderer, f = this.legendGroup, a = a.baseline - w(a.fontMetrics.b * 0.3), g;
            if (b.lineWidth) {
                g = {"stroke-width": b.lineWidth};
                if (b.dashStyle)g.dashstyle = b.dashStyle;
                this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f)
            }
            if (c && c.enabled !== !1)b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0
        }
    };
    (/Trident\/7\.0/.test(za) || Ka) && Ta(mb.prototype,
        "positionItem", function (a, b) {
            var c = this, d = function () {
                b._legendItemPos && a.call(c, b)
            };
            d();
            setTimeout(d)
        });
    E = B.Chart = function () {
        this.init.apply(this, arguments)
    };
    E.prototype = {
        callbacks: [], init: function (a, b) {
            var c, d = a.series;
            a.series = null;
            c = D(S, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing", d);
            var e = d.events;
            this.bounds = {h: {}, v: {}};
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries =
                d.showAxes;
            var f = this, g;
            f.index = X.length;
            X.push(f);
            bb++;
            d.reflow !== !1 && I(f, "load", function () {
                f.initReflow()
            });
            if (e)for (g in e)I(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = fa ? !1 : p(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender()
        }, initSeries: function (a) {
            var b = this.options.chart;
            (b = N[a.type || b.type || b.defaultSeriesType]) || la(17, !0);
            b = new b;
            b.init(this, a);
            return b
        }, isInsidePlot: function (a, b, c) {
            var d = c ? b : a, a = c ? a : b;
            return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight
        },
        redraw: function (a) {
            var b = this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, g, h, i = this.hasCartesianSeries, j = this.isDirtyBox, k = c.length, m = k, n = this.renderer, l = n.isHidden(), p = [];
            Ra(a, this);
            l && this.cloneRenderTo();
            for (this.layOutTitles(); m--;)if (a = c[m], a.options.stacking && (g = !0, a.isDirty)) {
                h = !0;
                break
            }
            if (h)for (m = k; m--;)if (a = c[m], a.options.stacking)a.isDirty = !0;
            o(c, function (a) {
                a.isDirty && a.options.legendType === "point" && (a.updateTotals && a.updateTotals(), f = !0)
            });
            if (f && e.options.enabled)e.render(),
                this.isDirtyLegend = !1;
            g && this.getStacks();
            if (i && !this.isResizing)this.maxTicks = null, o(b, function (a) {
                a.setScale()
            });
            this.getMargins();
            i && (o(b, function (a) {
                a.isDirty && (j = !0)
            }), o(b, function (a) {
                var b = a.min + "," + a.max;
                if (a.extKey !== b)a.extKey = b, p.push(function () {
                    J(a, "afterSetExtremes", t(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                });
                (j || g) && a.redraw()
            }));
            j && this.drawChartBox();
            o(c, function (a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            n.draw();
            J(this, "redraw");
            l && this.cloneRenderTo(!0);
            o(p, function (a) {
                a.call()
            })
        }, get: function (a) {
            var b = this.axes, c = this.series, d, e;
            for (d = 0; d < b.length; d++)if (b[d].options.id === a)return b[d];
            for (d = 0; d < c.length; d++)if (c[d].options.id === a)return c[d];
            for (d = 0; d < c.length; d++) {
                e = c[d].points || [];
                for (b = 0; b < e.length; b++)if (e[b].id === a)return e[b]
            }
            return null
        }, getAxes: function () {
            var a = this, b = this.options, c = b.xAxis = ra(b.xAxis || {}), b = b.yAxis = ra(b.yAxis || {});
            o(c, function (a, b) {
                a.index = b;
                a.isX = !0
            });
            o(b, function (a, b) {
                a.index = b
            });
            c = c.concat(b);
            o(c, function (b) {
                new ha(a,
                    b)
            })
        }, getSelectedPoints: function () {
            var a = [];
            o(this.series, function (b) {
                a = a.concat(kb(b.points || [], function (a) {
                    return a.selected
                }))
            });
            return a
        }, getSelectedSeries: function () {
            return kb(this.series, function (a) {
                return a.selected
            })
        }, setTitle: function (a, b, c) {
            var g;
            var d = this, e = d.options, f;
            f = e.title = D(e.title, a);
            g = e.subtitle = D(e.subtitle, b), e = g;
            o([["title", a, f], ["subtitle", b, e]], function (a) {
                var b = a[0], c = d[b], e = a[1], a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b, zIndex: a.zIndex || 4
                }).css(a.style).add())
            });
            d.layOutTitles(c)
        }, layOutTitles: function (a) {
            var b = 0, c = this.title, d = this.subtitle, e = this.options, f = e.title, e = e.subtitle, g = this.renderer, h = this.spacingBox.width - 44;
            if (c && (c.css({width: (f.width || h) + "px"}).align(t({y: g.fontMetrics(f.style.fontSize, c).b - 3}, f), !1, "spacingBox"), !f.floating && !f.verticalAlign))b = c.getBBox().height;
            d && (d.css({width: (e.width || h) + "px"}).align(t({y: b + (f.margin - 13) + g.fontMetrics(e.style.fontSize, c).b}, e), !1, "spacingBox"),
            !e.floating && !e.verticalAlign && (b = ta(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            if (!this.isDirtyBox && c)this.isDirtyBox = c, this.hasRendered && p(a, !0) && this.isDirtyBox && this.redraw()
        }, getChartSize: function () {
            var a = this.options.chart, b = a.width, a = a.height, c = this.renderToClone || this.renderTo;
            if (!q(b))this.containerWidth = jb(c, "width");
            if (!q(a))this.containerHeight = jb(c, "height");
            this.chartWidth = s(0, b || this.containerWidth || 600);
            this.chartHeight = s(0, p(a, this.containerHeight > 19 ? this.containerHeight :
                400))
        }, cloneRenderTo: function (a) {
            var b = this.renderToClone, c = this.container;
            a ? b && (this.renderTo.appendChild(c), Qa(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), M(b, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), b.style.setProperty && b.style.setProperty("display", "block", "important"), C.body.appendChild(b), c && b.appendChild(c))
        }, getContainer: function () {
            var a, b = this.options, c = b.chart, d, e, f;
            this.renderTo =
                a = c.renderTo;
            f = "highcharts-" + xb++;
            if (Ba(a))this.renderTo = a = C.getElementById(a);
            a || la(13, !0);
            d = G(K(a, "data-highcharts-chart"));
            !isNaN(d) && X[d] && X[d].hasRendered && X[d].destroy();
            K(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            !c.skipClone && !a.offsetWidth && this.cloneRenderTo();
            this.getChartSize();
            d = this.chartWidth;
            e = this.chartHeight;
            this.container = a = $(Ja, {
                className: "highcharts-container" + (c.className ? " " + c.className : ""),
                id: f
            }, t({
                position: "relative", overflow: "hidden", width: d + "px", height: e + "px",
                textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, c.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = new (B[c.renderer] || $a)(a, d, e, c.style, c.forExport, b.exporting && b.exporting.allowHTML);
            fa && this.renderer.create(this, a, d, e);
            this.renderer.chartIndex = this.index
        }, getMargins: function (a) {
            var b = this.spacing, c = this.margin, d = this.titleOffset;
            this.resetMargins();
            if (d && !q(c[0]))this.plotTop = s(this.plotTop, d + this.options.title.margin + b[0]);
            this.legend.adjustMargins(c,
                b);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            a || this.getAxisMargins()
        }, getAxisMargins: function () {
            var a = this, b = a.axisOffset = [0, 0, 0, 0], c = a.margin;
            a.hasCartesianSeries && o(a.axes, function (a) {
                a.visible && a.getOffset()
            });
            o(ib, function (d, e) {
                q(c[e]) || (a[d] += b[e])
            });
            a.setChartSize()
        }, reflow: function (a) {
            var b = this, c = b.options.chart, d = b.renderTo, e = c.width || jb(d, "width"), f = c.height || jb(d, "height"), c = a ? a.target : L, d = function () {
                if (b.container)b.setSize(e,
                    f, !1), b.hasUserSize = null
            };
            if (!b.hasUserSize && !b.isPrinting && e && f && (c === L || c === C)) {
                if (e !== b.containerWidth || f !== b.containerHeight)clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d();
                b.containerWidth = e;
                b.containerHeight = f
            }
        }, initReflow: function () {
            var a = this, b = function (b) {
                a.reflow(b)
            };
            I(L, "resize", b);
            I(a, "destroy", function () {
                Y(L, "resize", b)
            })
        }, setSize: function (a, b, c) {
            var d = this, e, f, g, h = d.renderer;
            d.isResizing += 1;
            g = function () {
                d && J(d, "endResize", null, function () {
                    d.isResizing -= 1
                })
            };
            Ra(c,
                d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            if (q(a))d.chartWidth = e = s(0, w(a)), d.hasUserSize = !!e;
            if (q(b))d.chartHeight = f = s(0, w(b));
            a = h.globalAnimation;
            (a ? lb : M)(d.container, {width: e + "px", height: f + "px"}, a);
            d.setChartSize(!0);
            h.setSize(e, f, c);
            d.maxTicks = null;
            o(d.axes, function (a) {
                a.isDirty = !0;
                a.setScale()
            });
            o(d.series, function (a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            J(d, "resize");
            a = h.globalAnimation;
            a === !1 ?
                g() : setTimeout(g, a && a.duration || 500)
        }, setChartSize: function (a) {
            var b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart, g = this.spacing, h = this.clipOffset, i, j, k, m;
            this.plotLeft = i = w(this.plotLeft);
            this.plotTop = j = w(this.plotTop);
            this.plotWidth = k = s(0, w(d - i - this.marginRight));
            this.plotHeight = m = s(0, w(e - j - this.marginBottom));
            this.plotSizeX = b ? m : k;
            this.plotSizeY = b ? k : m;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3], y: g[0], width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {x: i, y: j, width: k, height: m};
            d = 2 * T(this.plotBorderWidth / 2);
            b = ta(s(d, h[3]) / 2);
            c = ta(s(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: T(this.plotSizeX - s(d, h[1]) / 2 - b),
                height: s(0, T(this.plotSizeY - s(d, h[2]) / 2 - c))
            };
            a || o(this.axes, function (a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        }, resetMargins: function () {
            var a = this;
            o(ib, function (b, c) {
                a[b] = p(a.margin[c], a.spacing[c])
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0]
        }, drawChartBox: function () {
            var a = this.options.chart, b = this.renderer,
                c = this.chartWidth, d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, i = a.borderWidth || 0, j = a.backgroundColor, k = a.plotBackgroundColor, m = a.plotBackgroundImage, n = a.plotBorderWidth || 0, l, p = this.plotLeft, o = this.plotTop, q = this.plotWidth, s = this.plotHeight, v = this.plotBox, t = this.clipRect, x = this.clipBox;
            l = i + (a.shadow ? 8 : 0);
            if (i || j)if (e)e.animate(e.crisp({width: c - l, height: d - l})); else {
                e = {fill: j || P};
                if (i)e.stroke = a.borderColor, e["stroke-width"] = i;
                this.chartBackground =
                    b.rect(l / 2, l / 2, c - l, d - l, a.borderRadius, i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)
            }
            if (k)f ? f.animate(v) : this.plotBackground = b.rect(p, o, q, s, 0).attr({fill: k}).add().shadow(a.plotShadow);
            if (m)h ? h.animate(v) : this.plotBGImage = b.image(m, p, o, q, s).add();
            t ? t.animate({width: x.width, height: x.height}) : this.clipRect = b.clipRect(x);
            if (n)g ? g.animate(g.crisp({
                x: p,
                y: o,
                width: q,
                height: s,
                strokeWidth: -n
            })) : this.plotBorder = b.rect(p, o, q, s, 0, -n).attr({
                stroke: a.plotBorderColor, "stroke-width": n, fill: P,
                zIndex: 1
            }).add();
            this.isDirtyBox = !1
        }, propFromSeries: function () {
            var a = this, b = a.options.chart, c, d = a.options.series, e, f;
            o(["inverted", "angular", "polar"], function (g) {
                c = N[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--;)(c = N[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        }, linkSeries: function () {
            var a = this, b = a.series;
            o(b, function (a) {
                a.linkedSeries.length = 0
            });
            o(b, function (b) {
                var d = b.options.linkedTo;
                if (Ba(d) && (d = d === ":previous" ? a.series[b.index - 1] : a.get(d)))d.linkedSeries.push(b),
                    b.linkedParent = d, b.visible = p(b.options.visible, d.options.visible, b.visible)
            })
        }, renderSeries: function () {
            o(this.series, function (a) {
                a.translate();
                a.render()
            })
        }, renderLabels: function () {
            var a = this, b = a.options.labels;
            b.items && o(b.items, function (c) {
                var d = t(b.style, c.style), e = G(d.left) + a.plotLeft, f = G(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({zIndex: 2}).css(d).add()
            })
        }, render: function () {
            var a = this.axes, b = this.renderer, c = this.options, d, e, f, g;
            this.setTitle();
            this.legend =
                new mb(this, c.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            d = this.plotWidth;
            e = this.plotHeight -= 13;
            o(a, function (a) {
                a.setScale()
            });
            this.getAxisMargins();
            f = d / this.plotWidth > 1.1;
            g = e / this.plotHeight > 1.1;
            if (f || g)this.maxTicks = null, o(a, function (a) {
                (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0)
            }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && o(a, function (a) {
                a.visible && a.render()
            });
            if (!this.seriesGroup)this.seriesGroup = b.g("series-group").attr({zIndex: 3}).add();
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0
        }, showCredits: function (a) {
            if (a.enabled && !this.credits)this.credits = this.renderer.text(a.text, 0, 0).on("click", function () {
                if (a.href)location.href = a.href
            }).attr({align: a.position.align, zIndex: 8}).css(a.style).add().align(a.position)
        }, destroy: function () {
            var a = this, b = a.axes, c = a.series, d = a.container, e, f = d && d.parentNode;
            J(a, "destroy");
            X[a.index] = x;
            bb--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            Y(a);
            for (e = b.length; e--;)b[e] =
                b[e].destroy();
            for (e = c.length; e--;)c[e] = c[e].destroy();
            o("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function (b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            if (d)d.innerHTML = "", Y(d), f && Qa(d);
            for (e in a)delete a[e]
        }, isReadyToRender: function () {
            var a = this;
            return !ca && L == L.top && C.readyState !== "complete" || fa && !L.canvg ? (fa ? Lb.push(function () {
                a.firstRender()
            }, a.options.global.canvasToolsURL) :
                C.attachEvent("onreadystatechange", function () {
                    C.detachEvent("onreadystatechange", a.firstRender);
                    C.readyState === "complete" && a.firstRender()
                }), !1) : !0
        }, firstRender: function () {
            var a = this, b = a.options, c = a.callback;
            if (a.isReadyToRender()) {
                a.getContainer();
                J(a, "init");
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                o(b.series || [], function (b) {
                    a.initSeries(b)
                });
                a.linkSeries();
                J(a, "beforeRender");
                if (B.Pointer)a.pointer = new Va(a, b);
                a.render();
                a.renderer.draw();
                c && c.apply(a, [a]);
                o(a.callbacks,
                    function (b) {
                        a.index !== x && b.apply(a, [a])
                    });
                J(a, "load");
                a.cloneRenderTo(!0)
            }
        }, splashArray: function (a, b) {
            var c = b[a], c = da(c) ? c : [c, c, c, c];
            return [p(b[a + "Top"], c[0]), p(b[a + "Right"], c[1]), p(b[a + "Bottom"], c[2]), p(b[a + "Left"], c[3])]
        }
    };
    var Xb = B.CenteredSeriesMixin = {
        getCenter: function () {
            var a = this.options, b = this.chart, c = 2 * (a.slicedOffset || 0), d = b.plotWidth - 2 * c, b = b.plotHeight - 2 * c, e = a.center, e = [p(e[0], "50%"), p(e[1], "50%"), a.size || "100%", a.innerSize || 0], f = z(d, b), g, h;
            for (g = 0; g < 4; ++g)h = e[g], a = g < 2 || g === 2 && /%$/.test(h),
                e[g] = (/%$/.test(h) ? [d, b, f, e[2]][g] * parseFloat(h) / 100 : parseFloat(h)) + (a ? c : 0);
            e[3] > e[2] && (e[3] = e[2]);
            return e
        }
    }, Fa = function () {
    };
    Fa.prototype = {
        init: function (a, b, c) {
            this.series = a;
            this.color = a.color;
            this.applyOptions(b, c);
            this.pointAttr = {};
            if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length))a.colorCounter = 0;
            a.chart.pointCount++;
            return this
        }, applyOptions: function (a, b) {
            var c = this.series, d = c.options.pointValKey || c.pointValKey,
                a = Fa.prototype.optionsToObject.call(this, a);
            t(this, a);
            this.options = this.options ? t(this.options, a) : a;
            if (d)this.y = this[d];
            if (this.x === x && c)this.x = b === x ? c.autoIncrement() : b;
            return this
        }, optionsToObject: function (a) {
            var b = {}, c = this.series, d = c.options.keys, e = d || c.pointArrayMap || ["y"], f = e.length, g = 0, h = 0;
            if (typeof a === "number" || a === null)b[e[0]] = a; else if (Ga(a)) {
                if (!d && a.length > f) {
                    c = typeof a[0];
                    if (c === "string")b.name = a[0]; else if (c === "number")b.x = a[0];
                    g++
                }
                for (; h < f;) {
                    if (!d || a[g] !== void 0)b[e[h]] = a[g];
                    g++;
                    h++
                }
            } else if (typeof a ===
                "object") {
                b = a;
                if (a.dataLabels)c._hasPointLabels = !0;
                if (a.marker)c._hasPointMarkers = !0
            }
            return b
        }, destroy: function () {
            var a = this.series.chart, b = a.hoverPoints, c;
            a.pointCount--;
            if (b && (this.setState(), ja(b, this), !b.length))a.hoverPoints = null;
            if (this === a.hoverPoint)this.onMouseOut();
            if (this.graphic || this.dataLabel)Y(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this)this[c] = null
        }, destroyElements: function () {
            for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"],
                     b, c = 6; c--;)b = a[c], this[b] && (this[b] = this[b].destroy())
        }, getLabelConfig: function () {
            return {
                x: this.category,
                y: this.y,
                color: this.color,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        }, tooltipFormatter: function (a) {
            var b = this.series, c = b.tooltipOptions, d = p(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || "";
            o(b.pointArrayMap || ["y"], function (b) {
                b = "{point." + b;
                if (e || f)a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return Ia(a, {point: this, series: this.series})
        }, firePointEvent: function (a, b, c) {
            var d = this, e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            a === "click" && e.allowPointSelect && (c = function (a) {
                d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            J(this, a, b, c)
        }, visible: !0
    };
    var R = B.Series = function () {
    };
    R.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Fa,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor", "stroke-width": "lineWidth",
            fill: "fillColor", r: "radius"
        },
        directTouch: !1,
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function (a, b) {
            var c = this, d, e, f = a.series, g = function (a, b) {
                return p(a.options.index, a._i) - p(b.options.index, b._i)
            };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            t(c, {name: b.name, state: "", pointAttr: {}, visible: b.visible !== !1, selected: b.selected === !0});
            if (fa)b.animation = !1;
            e = b.events;
            for (d in e)I(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click ||
                b.allowPointSelect)a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            o(c.parallelArrays, function (a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            if (c.isCartesian)a.hasCartesianSeries = !0;
            f.push(c);
            c._i = f.length - 1;
            qb(f, g);
            this.yAxis && qb(this.yAxis.series, g);
            o(f, function (a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function () {
            var a = this, b = a.options, c = a.chart, d;
            o(a.axisTypes || [], function (e) {
                o(c[e], function (c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== x && b[e] === d.id || b[e] === x && d.index === 0)c.series.push(a),
                        a[e] = c, c.isDirty = !0
                });
                !a[e] && a.optionalAxis !== e && la(18, !0)
            })
        },
        updateParallelArrays: function (a, b) {
            var c = a.series, d = arguments;
            o(c.parallelArrays, typeof b === "number" ? function (d) {
                var f = d === "y" && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f
            } : function (a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
            })
        },
        autoIncrement: function () {
            var a = this.options, b = this.xIncrement, c, d = a.pointIntervalUnit, b = p(b, a.pointStart, 0);
            this.pointInterval = c = p(this.pointInterval, a.pointInterval, 1);
            if (d === "month" ||
                d === "year")a = new ya(b), a = d === "month" ? +a[vb](a[Ya]() + c) : +a[wb](a[Za]() + c), c = a - b;
            this.xIncrement = b + c;
            return b
        },
        getSegments: function () {
            var a = -1, b = [], c, d = this.points, e = d.length;
            if (e)if (this.options.connectNulls) {
                for (c = e; c--;)d[c].y === null && d.splice(c, 1);
                d.length && (b = [d])
            } else o(d, function (c, g) {
                c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
            });
            this.segments = b
        },
        setOptions: function (a) {
            var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type];
            this.userOptions = a;
            c = D(e, c.series, a);
            this.tooltipOptions = D(S.tooltip, S.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            e.marker === null && delete c.marker;
            this.zoneAxis = c.zoneAxis;
            a = this.zones = (c.zones || []).slice();
            if ((c.negativeColor || c.negativeFillColor) && !c.zones)a.push({
                value: c[this.zoneAxis + "Threshold"] || c.threshold || 0,
                color: c.negativeColor,
                fillColor: c.negativeFillColor
            });
            a.length && q(a[a.length - 1].value) && a.push({
                color: this.color,
                fillColor: this.fillColor
            });
            return c
        },
        getCyclic: function (a, b, c) {
            var d = this.userOptions, e = "_" + a + "Index", f = a + "Counter";
            b || (q(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        },
        getColor: function () {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || ba[this.type].color, this.chart.options.colors)
        },
        getSymbol: function () {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            if (/^url/.test(this.symbol))a.radius =
                0
        },
        drawLegendSymbol: Ma.drawLineMarker,
        setData: function (a, b, c, d) {
            var e = this, f = e.points, g = f && f.length || 0, h, i = e.options, j = e.chart, k = null, m = e.xAxis, n = m && !!m.categories, l = i.turboThreshold, u = this.xData, r = this.yData, s = (h = e.pointArrayMap) && h.length, a = a || [];
            h = a.length;
            b = p(b, !0);
            if (d !== !1 && h && g === h && !e.cropped && !e.hasGroupedData && e.visible)o(a, function (a, b) {
                f[b].update && f[b].update(a, !1, null, !1)
            }); else {
                e.xIncrement = null;
                e.pointRange = n ? 1 : i.pointRange;
                e.colorCounter = 0;
                o(this.parallelArrays, function (a) {
                    e[a + "Data"].length =
                        0
                });
                if (l && h > l) {
                    for (c = 0; k === null && c < h;)k = a[c], c++;
                    if (qa(k)) {
                        n = p(i.pointStart, 0);
                        k = p(i.pointInterval, 1);
                        for (c = 0; c < h; c++)u[c] = n, r[c] = a[c], n += k;
                        e.xIncrement = n
                    } else if (Ga(k))if (s)for (c = 0; c < h; c++)k = a[c], u[c] = k[0], r[c] = k.slice(1, s + 1); else for (c = 0; c < h; c++)k = a[c], u[c] = k[0], r[c] = k[1]; else la(12)
                } else for (c = 0; c < h; c++)if (a[c] !== x && (k = {series: e}, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k, c), n && q(k.name)))m.names[k.x] = k.name;
                Ba(r[0]) && la(14, !0);
                e.data = [];
                e.options.data = a;
                for (c =
                         g; c--;)f[c] && f[c].destroy && f[c].destroy();
                if (m)m.minRange = m.userMinRange;
                e.isDirty = e.isDirtyData = j.isDirtyBox = !0;
                c = !1
            }
            i.legendType === "point" && (this.processData(), this.generatePoints());
            b && j.redraw(c)
        },
        processData: function (a) {
            var b = this.xData, c = this.yData, d = b.length, e;
            e = 0;
            var f, g, h = this.xAxis, i, j = this.options;
            i = j.cropThreshold;
            var k = this.getExtremesFromAll || j.getExtremesFromAll, m = this.isCartesian, n, l;
            if (m && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a)return !1;
            if (h)a = h.getExtremes(), n = a.min, l =
                a.max;
            if (m && this.sorted && !k && (!i || d > i || this.forceCrop))if (b[d - 1] < n || b[0] > l)b = [], c = []; else if (b[0] < n || b[d - 1] > l)e = this.cropData(this.xData, this.yData, n, l), b = e.xData, c = e.yData, e = e.start, f = !0;
            for (i = b.length - 1; i >= 0; i--)d = b[i] - b[i - 1], d > 0 && (g === x || d < g) ? g = d : d < 0 && this.requireSorting && la(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            if (j.pointRange === null)this.pointRange = g || 1;
            this.closestPointRange = g
        },
        cropData: function (a, b, c, d) {
            var e = a.length, f = 0, g = e, h = p(this.cropShoulder,
                1), i;
            for (i = 0; i < e; i++)if (a[i] >= c) {
                f = s(0, i - h);
                break
            }
            for (; i < e; i++)if (a[i] > d) {
                g = i + h;
                break
            }
            return {xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g}
        },
        generatePoints: function () {
            var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, i, j = this.hasGroupedData, k, m = [], n;
            if (!b && !j)b = [], b.length = a.length, b = this.data = b;
            for (n = 0; n < g; n++)i = h + n, j ? m[n] = (new f).init(this, [d[n]].concat(ra(e[n]))) : (b[i] ? k = b[i] : a[i] !== x && (b[i] = k = (new f).init(this,
                a[i], d[n])), m[n] = k), m[n].index = i;
            if (b && (g !== (c = b.length) || j))for (n = 0; n < c; n++)if (n === h && !j && (n += g), b[n])b[n].destroyElements(), b[n].plotX = x;
            this.data = b;
            this.points = m
        },
        getExtremes: function (a) {
            var b = this.yAxis, c = this.processedXData, d, e = [], f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min, h = d.max, i, j, k, m, a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (m = 0; m < d; m++)if (j = c[m], k = a[m], i = k !== null && k !== x && (!b.isLog || k.length || k > 0), j = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped ||
                    (c[m + 1] || j) >= g && (c[m - 1] || j) <= h, i && j)if (i = k.length)for (; i--;)k[i] !== null && (e[f++] = k[i]); else e[f++] = k;
            this.dataMin = Oa(e);
            this.dataMax = Da(e)
        },
        translate: function () {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, j = i === "between" || qa(i), k = a.threshold, m = a.startFromThreshold ? k : 0, n, l, u, o, t = Number.MAX_VALUE, a = 0; a < g; a++) {
                var A = f[a], v = A.x, y = A.y;
                l = A.low;
                var w =
                    b && e.stacks[(this.negStacks && y < (m ? 0 : k) ? "-" : "") + this.stackKey];
                if (e.isLog && y !== null && y <= 0)A.y = y = null, la(10);
                A.plotX = n = z(s(-1E5, c.translate(v, 0, 0, 0, 1, i, this.type === "flags")), 1E5);
                if (b && this.visible && w && w[v])o = this.getStackIndicator(o, v, this.index), w = w[v], y = w.points[o.key], l = y[0], y = y[1], l === m && (l = p(k, e.min)), e.isLog && l <= 0 && (l = null), A.total = A.stackTotal = w.total, A.percentage = w.total && A.y / w.total * 100, A.stackY = y, w.setOffset(this.pointXOffset || 0, this.barW || 0);
                A.yBottom = q(l) ? e.translate(l, 0, 1, 0, 1) : null;
                h &&
                (y = this.modifyValue(y, A));
                A.plotY = l = typeof y === "number" && y !== Infinity ? z(s(-1E5, e.translate(y, 0, 1, 0, 1)), 1E5) : x;
                A.isInside = l !== x && l >= 0 && l <= e.len && n >= 0 && n <= c.len;
                A.clientX = j ? c.translate(v, 0, 0, 0, 1) : n;
                A.negative = A.y < (k || 0);
                A.category = d && d[A.x] !== x ? d[A.x] : A.x;
                a && (t = z(t, O(n - u)));
                u = n
            }
            this.closestPointRangePx = t;
            this.getSegments()
        },
        setClip: function (a) {
            var b = this.chart, c = this.options, d = b.renderer, e = b.inverted, f = this.clipBox, g = f || b.clipBox, h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height,
                    c.xAxis, c.yAxis].join(","), i = b[h], j = b[h + "m"];
            if (!i) {
                if (a)g.width = 0, b[h + "m"] = j = d.clipRect(-99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight);
                b[h] = i = d.clipRect(g)
            }
            a && (i.count += 1);
            if (c.clip !== !1)this.group.clip(a || f ? i : b.clipRect), this.markerGroup.clip(j), this.sharedClipKey = h;
            a || (i.count -= 1, i.count <= 0 && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())))
        },
        animate: function (a) {
            var b = this.chart, c = this.options.animation, d;
            if (c && !da(c))c = ba[this.type].animation;
            a ? this.setClip(c) :
                (d = this.sharedClipKey, (a = b[d]) && a.animate({width: b.plotSizeX}, c), b[d + "m"] && b[d + "m"].animate({width: b.plotSizeX + 99}, c), this.animate = null)
        },
        afterAnimate: function () {
            this.setClip();
            J(this, "afterAnimate")
        },
        drawPoints: function () {
            var a, b = this.points, c = this.chart, d, e, f, g, h, i, j, k, m = this.options.marker, n = this.pointAttr[""], l, o, r, s = this.markerGroup, q = p(m.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * m.radius);
            if (m.enabled !== !1 || this._hasPointMarkers)for (f = b.length; f--;)if (g = b[f], d = T(g.plotX), e = g.plotY,
                    k = g.graphic, l = g.marker || {}, o = !!g.marker, a = q && l.enabled === x || l.enabled, r = g.isInside, a && e !== x && !isNaN(e) && g.y !== null)if (a = g.pointAttr[g.selected ? "select" : ""] || n, h = a.r, i = p(l.symbol, this.symbol), j = i.indexOf("url") === 0, k)k[r ? "show" : "hide"](!0).animate(t({
                x: d - h,
                y: e - h
            }, k.symbolName ? {width: 2 * h, height: 2 * h} : {})); else {
                if (r && (h > 0 || j))g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h, o ? l : m).attr(a).add(s)
            } else if (k)g.graphic = k.destroy()
        },
        convertAttribs: function (a, b, c, d) {
            var e = this.pointAttrToOptions, f, g, h = {}, a = a ||
                {}, b = b || {}, c = c || {}, d = d || {};
            for (f in e)g = e[f], h[f] = p(a[g], b[f], c[f], d[f]);
            return h
        },
        getAttribs: function () {
            var a = this, b = a.options, c = ba[a.type].marker ? b.marker : b, d = c.states, e = d.hover, f, g = a.color, h = a.options.negativeColor;
            f = {stroke: g, fill: g};
            var i = a.points || [], j, k, m = [], n = a.pointAttrToOptions;
            j = a.hasPointSpecificOptions;
            var l = c.lineColor, u = c.fillColor;
            k = b.turboThreshold;
            var r = a.zones, s = a.zoneAxis || "y", A;
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) :
                (e.color = e.color || na(e.color || g).brighten(e.brightness).get(), e.negativeColor = e.negativeColor || na(e.negativeColor || h).brighten(e.brightness).get());
            m[""] = a.convertAttribs(c, f);
            o(["hover", "select"], function (b) {
                m[b] = a.convertAttribs(d[b], m[""])
            });
            a.pointAttr = m;
            g = i.length;
            if (!k || g < k || j)for (; g--;) {
                k = i[g];
                if ((c = k.options && k.options.marker || k.options) && c.enabled === !1)c.radius = 0;
                if (r.length) {
                    j = 0;
                    for (f = r[j]; k[s] >= f.value;)f = r[++j];
                    k.color = k.fillColor = p(f.color, a.color)
                }
                j = b.colorByPoint || k.color;
                if (k.options)for (A in n)q(c[n[A]]) &&
                (j = !0);
                if (j) {
                    c = c || {};
                    j = [];
                    d = c.states || {};
                    f = d.hover = d.hover || {};
                    if (!b.marker || k.negative && !f.fillColor && !e.fillColor)f[a.pointAttrToOptions.fill] = f.color || !k.options.color && e[k.negative && h ? "negativeColor" : "color"] || na(k.color).brighten(f.brightness || e.brightness).get();
                    f = {color: k.color};
                    if (!u)f.fillColor = k.color;
                    if (!l)f.lineColor = k.color;
                    c.hasOwnProperty("color") && !c.color && delete c.color;
                    j[""] = a.convertAttribs(t(f, c), m[""]);
                    j.hover = a.convertAttribs(d.hover, m.hover, j[""]);
                    j.select = a.convertAttribs(d.select,
                        m.select, j[""])
                } else j = m;
                k.pointAttr = j
            }
        },
        destroy: function () {
            var a = this, b = a.chart, c = /AppleWebKit\/533/.test(za), d, e = a.data || [], f, g, h;
            J(a, "destroy");
            Y(a);
            o(a.axisTypes || [], function (b) {
                if (h = a[b])ja(h.series, a), h.isDirty = h.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (d = e.length; d--;)(f = e[d]) && f.destroy && f.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            for (g in a)a[g] instanceof Q && !a[g].survive && (d = c && g === "group" ? "hide" : "destroy", a[g][d]());
            if (b.hoverSeries === a)b.hoverSeries =
                null;
            ja(b.series, a);
            for (g in a)delete a[g]
        },
        getSegmentPath: function (a) {
            var b = this, c = [], d = b.options.step;
            o(a, function (e, f) {
                var g = e.plotX, h = e.plotY, i;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (i = a[f - 1], d === "right" ? c.push(i.plotX, h, "L") : d === "center" ? c.push((i.plotX + g) / 2, i.plotY, "L", (i.plotX + g) / 2, h, "L") : c.push(g, i.plotY, "L")), c.push(e.plotX, e.plotY))
            });
            return c
        },
        getGraphPath: function () {
            var a = this, b = [], c, d = [];
            o(a.segments, function (e) {
                c = a.getSegmentPath(e);
                e.length >
                1 ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints = d;
            return a.graphPath = b
        },
        drawGraph: function () {
            var a = this, b = this.options, c = [["graph", b.lineColor || this.color, b.dashStyle]], d = b.lineWidth, e = b.linecap !== "square", f = this.getGraphPath(), g = this.fillGraph && this.color || P;
            o(this.zones, function (d, e) {
                c.push(["zoneGraph" + e, d.color || a.color, d.dashStyle || b.dashStyle])
            });
            o(c, function (c, i) {
                var j = c[0], k = a[j];
                if (k)k.animate({d: f}); else if ((d || g) && f.length)k = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: g,
                    zIndex: 1
                }, c[2] ? k.dashstyle =
                    c[2] : e && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), a[j] = a.chart.renderer.path(f).attr(k).add(a.group).shadow(i < 2 && b.shadow)
            })
        },
        applyZones: function () {
            var a = this, b = this.chart, c = b.renderer, d = this.zones, e, f, g = this.clips || [], h, i = this.graph, j = this.area, k = s(b.chartWidth, b.chartHeight), m = this[(this.zoneAxis || "y") + "Axis"], n, l = m.reversed, u = b.inverted, r = m.horiz, q, t, v, y = !1;
            if (d.length && (i || j) && m.min !== x)i && i.hide(), j && j.hide(), n = m.getExtremes(), o(d, function (d, o) {
                e = l ? r ? b.plotWidth : 0 : r ? 0 : m.toPixels(n.min);
                e = z(s(p(f, e), 0), k);
                f = z(s(w(m.toPixels(p(d.value, n.max), !0)), 0), k);
                y && (e = f = m.toPixels(n.max));
                q = Math.abs(e - f);
                t = z(e, f);
                v = s(e, f);
                if (m.isXAxis) {
                    if (h = {x: u ? v : t, y: 0, width: q, height: k}, !r)h.x = b.plotHeight - h.x
                } else if (h = {x: 0, y: u ? v : t, width: k, height: q}, r)h.y = b.plotWidth - h.y;
                b.inverted && c.isVML && (h = m.isXAxis ? {
                    x: 0,
                    y: l ? t : v,
                    height: h.width,
                    width: b.chartWidth
                } : {x: h.y - b.plotLeft - b.spacingBox.x, y: 0, width: h.height, height: b.chartHeight});
                g[o] ? g[o].animate(h) : (g[o] = c.clipRect(h), i && a["zoneGraph" + o].clip(g[o]), j && a["zoneArea" +
                o].clip(g[o]));
                y = d.value > n.max
            }), this.clips = g
        },
        invertGroups: function () {
            function a() {
                var a = {width: b.yAxis.len, height: b.xAxis.len};
                o(["group", "markerGroup"], function (c) {
                    b[c] && b[c].attr(a).invert()
                })
            }

            var b = this, c = b.chart;
            if (b.xAxis)I(c, "resize", a), I(b, "destroy", function () {
                Y(c, "resize", a)
            }), a(), b.invertGroups = a
        },
        plotGroup: function (a, b, c, d, e) {
            var f = this[a], g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({
                visibility: c,
                zIndex: d || 0.1
            }).add(e), f.addClass("highcharts-series-" + this.index));
            f[g ? "attr" : "animate"](this.getPlotBox());
            return f
        },
        getPlotBox: function () {
            var a = this.chart, b = this.xAxis, c = this.yAxis;
            if (a.inverted)b = c, c = this.xAxis;
            return {translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1}
        },
        render: function () {
            var a = this, b = a.chart, c, d = a.options, e = (c = d.animation) && !!a.animate && b.renderer.isSVG && p(c.duration, 500) || 0, f = a.visible ? "visible" : "hidden", g = d.zIndex, h = a.hasRendered, i = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, i);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, i);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            o(a.points, function (a) {
                a.redraw && a.redraw()
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && a.options.enableMouseTracking !== !1 && a.drawTracker();
            b.inverted && a.invertGroups();
            d.clip !== !1 && !a.sharedClipKey && !h && c.clip(b.clipRect);
            e && a.animate();
            if (!h)e ? a.animationTimeout = setTimeout(function () {
                a.afterAnimate()
            }, e) : a.afterAnimate();
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        },
        redraw: function () {
            var a = this.chart, b = this.isDirtyData, c = this.isDirty, d = this.group, e = this.xAxis, f = this.yAxis;
            d && (a.inverted && d.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), d.animate({translateX: p(e && e.left, a.plotLeft), translateY: p(f && f.top, a.plotTop)}));
            this.translate();
            this.render();
            b && J(this, "updatedData");
            (c || b) && delete this.kdTree
        },
        kdDimensions: 1,
        kdAxisArray: ["clientX", "plotY"],
        searchPoint: function (a, b) {
            var c = this.xAxis, d = this.yAxis, e = this.chart.inverted;
            return this.searchKDTree({
                clientX: e ? c.len -
                a.chartY + c.pos : a.chartX - c.pos, plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos
            }, b)
        },
        buildKDTree: function () {
            function a(b, d, g) {
                var h, i;
                if (i = b && b.length)return h = c.kdAxisArray[d % g], b.sort(function (a, b) {
                    return a[h] - b[h]
                }), i = Math.floor(i / 2), {
                    point: b[i],
                    left: a(b.slice(0, i), d + 1, g),
                    right: a(b.slice(i + 1), d + 1, g)
                }
            }

            function b() {
                var b = kb(c.points || [], function (a) {
                    return a.y !== null
                });
                c.kdTree = a(b, d, d)
            }

            var c = this, d = c.kdDimensions;
            delete c.kdTree;
            c.options.kdSync ? b() : setTimeout(b)
        },
        searchKDTree: function (a, b) {
            function c(a,
                       b, j, k) {
                var m = b.point, n = d.kdAxisArray[j % k], l, p, o = m;
                p = q(a[e]) && q(m[e]) ? Math.pow(a[e] - m[e], 2) : null;
                l = q(a[f]) && q(m[f]) ? Math.pow(a[f] - m[f], 2) : null;
                l = (p || 0) + (l || 0);
                m.dist = q(l) ? Math.sqrt(l) : Number.MAX_VALUE;
                m.distX = q(p) ? Math.sqrt(p) : Number.MAX_VALUE;
                n = a[n] - m[n];
                l = n < 0 ? "left" : "right";
                p = n < 0 ? "right" : "left";
                b[l] && (l = c(a, b[l], j + 1, k), o = l[g] < o[g] ? l : m);
                b[p] && Math.sqrt(n * n) < o[g] && (a = c(a, b[p], j + 1, k), o = a[g] < o[g] ? a : o);
                return o
            }

            var d = this, e = this.kdAxisArray[0], f = this.kdAxisArray[1], g = b ? "distX" : "dist";
            this.kdTree || this.buildKDTree();
            if (this.kdTree)return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
        }
    };
    Hb.prototype = {
        destroy: function () {
            Pa(this, this.axis)
        }, render: function (a) {
            var b = this.options, c = b.format, c = c ? Ia(c, this) : b.formatter.call(this);
            this.label ? this.label.attr({
                text: c,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(c, null, null, b.useHTML).css(b.style).attr({
                align: this.textAlign,
                rotation: b.rotation,
                visibility: "hidden"
            }).add(a)
        }, setOffset: function (a, b) {
            var c = this.axis, d = c.chart, e = d.inverted, f = c.reversed,
                f = this.isNegative && !f || !this.isNegative && f, g = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1), c = c.translate(0), c = O(g - c), h = d.xAxis[0].translate(this.x) + a, i = d.plotHeight, f = {
                    x: e ? f ? g : g - c : h,
                    y: e ? i - h - b : f ? i - g - c : i - g,
                    width: e ? c : b,
                    height: e ? b : c
                };
            if (e = this.label)e.align(this.alignOptions, null, f), f = e.alignAttr, e[this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0)
        }
    };
    E.prototype.getStacks = function () {
        var a = this;
        o(a.yAxis, function (a) {
            if (a.stacks && a.hasVisibleSeries)a.oldStacks = a.stacks
        });
        o(a.series,
            function (b) {
                if (b.options.stacking && (b.visible === !0 || a.options.chart.ignoreHiddenSeries === !1))b.stackKey = b.type + p(b.options.stack, "")
            })
    };
    ha.prototype.buildStacks = function () {
        var a = this.series, b = p(this.options.reversedStacks, !0), c = a.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1; c--;)a[b ? c : a.length - c - 1].setStackedPoints();
            if (this.usePercentage)for (c = 0; c < a.length; c++)a[c].setPercentStacks()
        }
    };
    ha.prototype.renderStackTotals = function () {
        var a = this.chart, b = a.renderer, c = this.stacks, d, e, f = this.stackTotalGroup;
        if (!f)this.stackTotalGroup = f = b.g("stack-labels").attr({visibility: "visible", zIndex: 6}).add();
        f.translate(a.plotLeft, a.plotTop);
        for (d in c)for (e in a = c[d], a)a[e].render(f)
    };
    ha.prototype.resetStacks = function () {
        var a = this.stacks, b, c;
        if (!this.isXAxis)for (b in a)for (c in a[b])a[b][c].touched < this.stacksTouched ? (a[b][c].destroy(), delete a[b][c]) : (a[b][c].total = null, a[b][c].cum = 0)
    };
    ha.prototype.cleanStacks = function () {
        var a, b, c;
        if (!this.isXAxis) {
            if (this.oldStacks)a = this.stacks = this.oldStacks;
            for (b in a)for (c in a[b])a[b][c].cum =
                a[b][c].total
        }
    };
    R.prototype.setStackedPoints = function () {
        if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
            var a = this.processedXData, b = this.processedYData, c = [], d = b.length, e = this.options, f = e.threshold, g = e.startFromThreshold ? f : 0, h = e.stack, e = e.stacking, i = this.stackKey, j = "-" + i, k = this.negStacks, m = this.yAxis, n = m.stacks, l = m.oldStacks, o, r, q, t, v, w, x;
            m.stacksTouched += 1;
            for (v = 0; v < d; v++) {
                w = a[v];
                x = b[v];
                o = this.getStackIndicator(o, w, this.index);
                t = o.key;
                q = (r = k && x < (g ?
                        0 : f)) ? j : i;
                n[q] || (n[q] = {});
                if (!n[q][w])l[q] && l[q][w] ? (n[q][w] = l[q][w], n[q][w].total = null) : n[q][w] = new Hb(m, m.options.stackLabels, r, w, h);
                q = n[q][w];
                q.points[t] = [p(q.cum, g)];
                q.touched = m.stacksTouched;
                e === "percent" ? (r = r ? i : j, k && n[r] && n[r][w] ? (r = n[r][w], q.total = r.total = s(r.total, q.total) + O(x) || 0) : q.total = ea(q.total + (O(x) || 0))) : q.total = ea(q.total + (x || 0));
                q.cum = p(q.cum, g) + (x || 0);
                q.points[t].push(q.cum);
                c[v] = q.cum
            }
            if (e === "percent")m.usePercentage = !0;
            this.stackedYData = c;
            m.oldStacks = {}
        }
    };
    R.prototype.setPercentStacks =
        function () {
            var a = this, b = a.stackKey, c = a.yAxis.stacks, d = a.processedXData, e;
            o([b, "-" + b], function (b) {
                var f;
                for (var g = d.length, h, i; g--;)if (h = d[g], e = a.getStackIndicator(e, h, a.index), f = (i = c[b] && c[b][h]) && i.points[e.key], h = f)i = i.total ? 100 / i.total : 0, h[0] = ea(h[0] * i), h[1] = ea(h[1] * i), a.stackedYData[g] = h[1]
            })
        };
    R.prototype.getStackIndicator = function (a, b, c) {
        !q(a) || a.x !== b ? a = {x: b, index: 0} : a.index++;
        a.key = [c, b, a.index].join(",");
        return a
    };
    t(E.prototype, {
        addSeries: function (a, b, c) {
            var d, e = this;
            a && (b = p(b, !0), J(e, "addSeries",
                {options: a}, function () {
                    d = e.initSeries(a);
                    e.isDirtyLegend = !0;
                    e.linkSeries();
                    b && e.redraw(c)
                }));
            return d
        }, addAxis: function (a, b, c, d) {
            var e = b ? "xAxis" : "yAxis", f = this.options;
            new ha(this, D(a, {index: this[e].length, isX: b}));
            f[e] = ra(f[e] || {});
            f[e].push(a);
            p(c, !0) && this.redraw(d)
        }, showLoading: function (a) {
            var b = this, c = b.options, d = b.loadingDiv, e = c.loading, f = function () {
                d && M(d, {
                    left: b.plotLeft + "px",
                    top: b.plotTop + "px",
                    width: b.plotWidth + "px",
                    height: b.plotHeight + "px"
                })
            };
            if (!d)b.loadingDiv = d = $(Ja, {className: "highcharts-loading"},
                t(e.style, {
                    zIndex: 10,
                    display: P
                }), b.container), b.loadingSpan = $("span", null, e.labelStyle, d), I(b, "redraw", f);
            b.loadingSpan.innerHTML = a || c.lang.loading;
            if (!b.loadingShown)M(d, {
                opacity: 0,
                display: ""
            }), lb(d, {opacity: e.style.opacity}, {duration: e.showDuration || 0}), b.loadingShown = !0;
            f()
        }, hideLoading: function () {
            var a = this.options, b = this.loadingDiv;
            b && lb(b, {opacity: 0}, {
                duration: a.loading.hideDuration || 100, complete: function () {
                    M(b, {display: P})
                }
            });
            this.loadingShown = !1
        }
    });
    t(Fa.prototype, {
        update: function (a, b, c, d) {
            function e() {
                f.applyOptions(a);
                if (f.y === null && h)f.graphic = h.destroy();
                if (da(a) && !Ga(a))f.redraw = function () {
                    if (h && h.element && a && a.marker && a.marker.symbol)f.graphic = h.destroy();
                    if (a && a.dataLabels && f.dataLabel)f.dataLabel = f.dataLabel.destroy();
                    f.redraw = null
                };
                i = f.index;
                g.updateParallelArrays(f, i);
                if (m && f.name)m[f.x] = f.name;
                k.data[i] = f.options;
                g.isDirty = g.isDirtyData = !0;
                if (!g.fixedBox && g.hasCartesianSeries)j.isDirtyBox = !0;
                if (k.legendType === "point")j.isDirtyLegend = !0;
                b && j.redraw(c)
            }

            var f = this, g = f.series, h = f.graphic, i, j = g.chart, k = g.options,
                m = g.xAxis && g.xAxis.names, b = p(b, !0);
            d === !1 ? e() : f.firePointEvent("update", {options: a}, e)
        }, remove: function (a, b) {
            this.series.removePoint(La(this, this.series.data), a, b)
        }
    });
    t(R.prototype, {
        addPoint: function (a, b, c, d) {
            var e = this, f = e.options, g = e.data, h = e.graph, i = e.area, j = e.chart, k = e.xAxis && e.xAxis.names, m = h && h.shift || 0, n = ["graph", "area"], h = f.data, l, u = e.xData;
            Ra(d, j);
            if (c) {
                for (d = e.zones.length; d--;)n.push("zoneGraph" + d, "zoneArea" + d);
                o(n, function (a) {
                    if (e[a])e[a].shift = m + (f.step ? 2 : 1)
                })
            }
            if (i)i.isArea = !0;
            b = p(b,
                !0);
            i = {series: e};
            e.pointClass.prototype.applyOptions.apply(i, [a]);
            n = i.x;
            d = u.length;
            if (e.requireSorting && n < u[d - 1])for (l = !0; d && u[d - 1] > n;)d--;
            e.updateParallelArrays(i, "splice", d, 0, 0);
            e.updateParallelArrays(i, d);
            if (k && i.name)k[n] = i.name;
            h.splice(d, 0, a);
            l && (e.data.splice(d, 0, null), e.processData());
            f.legendType === "point" && e.generatePoints();
            c && (g[0] && g[0].remove ? g[0].remove(!1) : (g.shift(), e.updateParallelArrays(i, "shift"), h.shift()));
            e.isDirty = !0;
            e.isDirtyData = !0;
            b && (e.getAttribs(), j.redraw())
        }, removePoint: function (a,
                                  b, c) {
            var d = this, e = d.data, f = e[a], g = d.points, h = d.chart, i = function () {
                e.length === g.length && g.splice(a, 1);
                e.splice(a, 1);
                d.options.data.splice(a, 1);
                d.updateParallelArrays(f || {series: d}, "splice", a, 1);
                f && f.destroy();
                d.isDirty = !0;
                d.isDirtyData = !0;
                b && h.redraw()
            };
            Ra(c, h);
            b = p(b, !0);
            f ? f.firePointEvent("remove", null, i) : i()
        }, remove: function (a, b) {
            var c = this, d = c.chart, a = p(a, !0);
            if (!c.isRemoving)c.isRemoving = !0, J(c, "remove", null, function () {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                d.linkSeries();
                a && d.redraw(b)
            });
            c.isRemoving = !1
        }, update: function (a, b) {
            var c = this, d = this.chart, e = this.userOptions, f = this.type, g = N[f].prototype, h = ["group", "markerGroup", "dataLabelsGroup"], i;
            if (a.type && a.type !== f || a.zIndex !== void 0)h.length = 0;
            o(h, function (a) {
                h[a] = c[a];
                delete c[a]
            });
            a = D(e, {animation: !1, index: this.index, pointStart: this.xData[0]}, {data: this.options.data}, a);
            this.remove(!1);
            for (i in g)this[i] = x;
            t(this, N[a.type || f].prototype);
            o(h, function (a) {
                c[a] = h[a]
            });
            this.init(d, a);
            d.linkSeries();
            p(b, !0) && d.redraw(!1)
        }
    });
    t(ha.prototype,
        {
            update: function (a, b) {
                var c = this.chart, a = c.options[this.coll][this.options.index] = D(this.userOptions, a);
                this.destroy(!0);
                this._addedPlotLB = this.chart._labelPanes = x;
                this.init(c, t(a, {events: x}));
                c.isDirtyBox = !0;
                p(b, !0) && c.redraw()
            }, remove: function (a) {
            for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--;)d[e] && d[e].remove(!1);
            ja(b.axes, this);
            ja(b[c], this);
            b.options[c].splice(this.options.index, 1);
            o(b[c], function (a, b) {
                a.options.index = b
            });
            this.destroy();
            b.isDirtyBox = !0;
            p(a, !0) && b.redraw()
        }, setTitle: function (a,
                               b) {
            this.update({title: a}, b)
        }, setCategories: function (a, b) {
            this.update({categories: a}, b)
        }
        });
    var xa = ka(R);
    N.line = xa;
    ba.area = D(U, {softThreshold: !1, threshold: 0});
    var pa = ka(R, {
        type: "area", getSegments: function () {
            var a = this, b = [], c = [], d = [], e = this.xAxis, f = this.yAxis, g = f.stacks[this.stackKey], h = {}, i, j, k = this.points, m = this.options.connectNulls, n, l, p;
            if (this.options.stacking && !this.cropped) {
                for (l = 0; l < k.length; l++)h[k[l].x] = k[l];
                for (p in g)g[p].total !== null && d.push(+p);
                d.sort(function (a, b) {
                    return a - b
                });
                o(d, function (b) {
                    var d =
                        null, k;
                    if (!m || h[b] && h[b].y !== null)if (h[b])c.push(h[b]); else {
                        for (l = a.index; l <= f.series.length; l++)if (n = a.getStackIndicator(null, b, l), k = g[b].points[n.key]) {
                            d = k[1];
                            break
                        }
                        i = e.translate(b);
                        j = f.getThreshold(d);
                        c.push({y: null, plotX: i, clientX: i, plotY: j, yBottom: j, onMouseOver: ua})
                    }
                });
                c.length && b.push(c)
            } else R.prototype.getSegments.call(this), b = this.segments;
            this.segments = b
        }, getSegmentPath: function (a) {
            var b = R.prototype.getSegmentPath.call(this, a), c = [].concat(b), d, e = this.options;
            d = b.length;
            var f = this.yAxis.getThreshold(e.threshold),
                g;
            d === 3 && c.push("L", b[1], b[2]);
            if (e.stacking && !this.closedStacks)for (d = a.length - 1; d >= 0; d--)g = p(a[d].yBottom, f), d < a.length - 1 && e.step && c.push(a[d + 1].plotX, g), c.push(a[d].plotX, g); else this.closeSegment(c, a, f);
            this.areaPath = this.areaPath.concat(c);
            return b
        }, closeSegment: function (a, b, c) {
            a.push("L", b[b.length - 1].plotX, c, "L", b[0].plotX, c)
        }, drawGraph: function () {
            this.areaPath = [];
            R.prototype.drawGraph.apply(this);
            var a = this, b = this.areaPath, c = this.options, d = [["area", this.color, c.fillColor]];
            o(this.zones, function (b,
                                    f) {
                d.push(["zoneArea" + f, b.color || a.color, b.fillColor || c.fillColor])
            });
            o(d, function (d) {
                var f = d[0], g = a[f];
                g ? g.animate({d: b}) : a[f] = a.chart.renderer.path(b).attr({
                    fill: p(d[2], na(d[1]).setOpacity(p(c.fillOpacity, 0.75)).get()),
                    zIndex: 0
                }).add(a.group)
            })
        }, drawLegendSymbol: Ma.drawRectangle
    });
    N.area = pa;
    ba.spline = D(U);
    xa = ka(R, {
        type: "spline", getPointSpline: function (a, b, c) {
            var d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1], h, i, j, k;
            if (f && g) {
                a = f.plotY;
                j = g.plotX;
                var g = g.plotY, m;
                h = (1.5 * d + f.plotX) / 2.5;
                i = (1.5 * e + a) / 2.5;
                j = (1.5 *
                    d + j) / 2.5;
                k = (1.5 * e + g) / 2.5;
                m = (k - i) * (j - d) / (j - h) + e - k;
                i += m;
                k += m;
                i > a && i > e ? (i = s(a, e), k = 2 * e - i) : i < a && i < e && (i = z(a, e), k = 2 * e - i);
                k > g && k > e ? (k = s(g, e), i = 2 * e - k) : k < g && k < e && (k = z(g, e), i = 2 * e - k);
                b.rightContX = j;
                b.rightContY = k
            }
            c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e], f.rightContX = f.rightContY = null) : b = ["M", d, e];
            return b
        }
    });
    N.spline = xa;
    ba.areaspline = D(ba.area);
    pa = pa.prototype;
    xa = ka(xa, {
        type: "areaspline",
        closedStacks: !0,
        getSegmentPath: pa.getSegmentPath,
        closeSegment: pa.closeSegment,
        drawGraph: pa.drawGraph,
        drawLegendSymbol: Ma.drawRectangle
    });
    N.areaspline = xa;
    ba.column = D(U, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {brightness: 0.1, shadow: !1, halo: !1},
            select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}
        },
        dataLabels: {align: null, verticalAlign: null, y: null},
        softThreshold: !1,
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {distance: 6},
        threshold: 0
    });
    xa = ka(R, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color", r: "borderRadius"
        },
        cropShoulder: 0,
        directTouch: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function () {
            R.prototype.init.apply(this, arguments);
            var a = this, b = a.chart;
            b.hasRendered && o(b.series, function (b) {
                if (b.type === a.type)b.isDirty = !0
            })
        },
        getColumnMetrics: function () {
            var a = this, b = a.options, c = a.xAxis, d = a.yAxis, e = c.reversed, f, g = {}, h, i = 0;
            b.grouping === !1 ? i = 1 : o(a.chart.series, function (b) {
                var c = b.options, e = b.yAxis;
                if (b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos)c.stacking ?
                    (f = b.stackKey, g[f] === x && (g[f] = i++), h = g[f]) : c.grouping !== !1 && (h = i++), b.columnIndex = h
            });
            var j = z(O(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len), k = j * b.groupPadding, m = (j - 2 * k) / i, b = z(b.maxPointWidth || c.len, p(b.pointWidth, m * (1 - 2 * b.pointPadding)));
            return a.columnMetrics = {
                width: b,
                offset: (m - b) / 2 + (k + ((e ? i - (a.columnIndex || 0) : a.columnIndex) || 0) * m - j / 2) * (e ? -1 : 1)
            }
        },
        crispCol: function (a, b, c, d) {
            var e = this.chart, f = this.borderWidth, g = -(f % 2 ? 0.5 : 0), f = f % 2 ? 0.5 : 1;
            e.inverted && e.renderer.isVML &&
            (f += 1);
            c = Math.round(a + c) + g;
            a = Math.round(a) + g;
            c -= a;
            g = O(b) <= 0.5;
            d = Math.round(b + d) + f;
            b = Math.round(b) + f;
            d -= b;
            g && (b -= 1, d += 1);
            return {x: a, y: b, width: c, height: d}
        },
        translate: function () {
            var a = this, b = a.chart, c = a.options, d = a.borderWidth = p(c.borderWidth, a.closestPointRange * a.xAxis.transA < 2 ? 0 : 1), e = a.yAxis, f = a.translatedThreshold = e.getThreshold(c.threshold), g = p(c.minPointLength, 5), h = a.getColumnMetrics(), i = h.width, j = a.barW = s(i, 1 + 2 * d), k = a.pointXOffset = h.offset;
            b.inverted && (f -= 0.5);
            c.pointPadding && (j = ta(j));
            R.prototype.translate.apply(a);
            o(a.points, function (c) {
                var d = z(p(c.yBottom, f), 9E4), h = 999 + O(d), h = z(s(-h, c.plotY), e.len + h), o = c.plotX + k, q = j, t = z(h, d), w, v = s(h, d) - t;
                O(v) < g && g && (v = g, w = !e.reversed && !c.negative || e.reversed && c.negative, t = O(t - f) > g ? d - g : f - (w ? g : 0));
                c.barX = o;
                c.pointWidth = i;
                c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h, a.xAxis.len - o - q / 2, v] : [o + q / 2, h + e.pos - b.plotTop, v];
                c.shapeType = "rect";
                c.shapeArgs = a.crispCol(o, t, q, v)
            })
        },
        getSymbol: ua,
        drawLegendSymbol: Ma.drawRectangle,
        drawGraph: ua,
        drawPoints: function () {
            var a = this, b = this.chart,
                c = a.options, d = b.renderer, e = c.animationLimit || 250, f, g;
            o(a.points, function (h) {
                var i = h.plotY, j = h.graphic;
                if (i !== x && !isNaN(i) && h.y !== null)f = h.shapeArgs, i = q(a.borderWidth) ? {"stroke-width": a.borderWidth} : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], j ? (cb(j), j.attr(i)[b.pointCount < e ? "animate" : "attr"](D(f))) : h.graphic = d[h.shapeType](f).attr(i).attr(g).add(h.group || a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius); else if (j)h.graphic = j.destroy()
            })
        },
        animate: function (a) {
            var b = this.yAxis,
                c = this.options, d = this.chart.inverted, e = {};
            if (ca)a ? (e.scaleY = 0.001, a = z(b.pos + b.len, s(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), this.animate = null)
        },
        remove: function () {
            var a = this, b = a.chart;
            b.hasRendered && o(b.series, function (b) {
                if (b.type === a.type)b.isDirty = !0
            });
            R.prototype.remove.apply(a, arguments)
        }
    });
    N.column = xa;
    ba.bar = D(ba.column);
    pa = ka(xa, {type: "bar", inverted: !0});
    N.bar = pa;
    ba.scatter = D(U, {
        lineWidth: 0,
        marker: {enabled: !0},
        tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    });
    pa = ka(R, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        kdDimensions: 2,
        drawGraph: function () {
            this.options.lineWidth && R.prototype.drawGraph.call(this)
        }
    });
    N.scatter =
        pa;
    ba.pie = D(U, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30, enabled: !0, formatter: function () {
                return this.y === null ? void 0 : this.point.name
            }, x: 0
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {hover: {brightness: 0.1, shadow: !1}},
        stickyTracking: !1,
        tooltip: {followPointer: !0}
    });
    U = {
        type: "pie",
        isCartesian: !1,
        pointClass: ka(Fa, {
            init: function () {
                Fa.prototype.init.apply(this, arguments);
                var a = this, b;
                a.name =
                    p(a.name, "Slice");
                b = function (b) {
                    a.slice(b.type === "select")
                };
                I(a, "select", b);
                I(a, "unselect", b);
                return a
            }, setVisible: function (a, b) {
                var c = this, d = c.series, e = d.chart, f = d.options.ignoreHiddenPoint, b = p(b, f);
                if (a !== c.visible) {
                    c.visible = c.options.visible = a = a === x ? !c.visible : a;
                    d.options.data[La(c, d.data)] = c.options;
                    o(["graphic", "dataLabel", "connector", "shadowGroup"], function (b) {
                        if (c[b])c[b][a ? "show" : "hide"](!0)
                    });
                    c.legendItem && e.legend.colorizeItem(c, a);
                    !a && c.state === "hover" && c.setState("");
                    if (f)d.isDirty = !0;
                    b && e.redraw()
                }
            }, slice: function (a, b, c) {
                var d = this.series;
                Ra(c, d.chart);
                p(b, !0);
                this.sliced = this.options.sliced = a = q(a) ? a : !this.sliced;
                d.options.data[La(this, d.data)] = this.options;
                a = a ? this.slicedTranslation : {translateX: 0, translateY: 0};
                this.graphic.animate(a);
                this.shadowGroup && this.shadowGroup.animate(a)
            }, haloPath: function (a) {
                var b = this.shapeArgs, c = this.series.chart;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, {
                    innerR: this.shapeArgs.r,
                    start: b.start, end: b.end
                })
            }
        }),
        requireSorting: !1,
        directTouch: !0,
        noSharedTooltip: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        axisTypes: [],
        pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"},
        animate: function (a) {
            var b = this, c = b.points, d = b.startAngleRad;
            if (!a)o(c, function (a) {
                var c = a.graphic, g = a.shapeArgs;
                c && (c.attr({r: a.startR || b.center[3] / 2, start: d, end: d}), c.animate({
                    r: g.r,
                    start: g.start,
                    end: g.end
                }, b.options.animation))
            }), b.animate = null
        },
        updateTotals: function () {
            var a, b = 0,
                c = this.points, d = c.length, e, f = this.options.ignoreHiddenPoint;
            for (a = 0; a < d; a++)e = c[a], b += f && !e.visible ? 0 : e.y;
            this.total = b;
            for (a = 0; a < d; a++)e = c[a], e.percentage = b > 0 && (e.visible || !f) ? e.y / b * 100 : 0, e.total = b
        },
        generatePoints: function () {
            R.prototype.generatePoints.call(this);
            this.updateTotals()
        },
        translate: function (a) {
            this.generatePoints();
            var b = 0, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, f, g, h, i = c.startAngle || 0, j = this.startAngleRad = ma / 180 * (i - 90), i = (this.endAngleRad = ma / 180 * (p(c.endAngle, i + 360) - 90)) - j, k =
                this.points, m = c.dataLabels.distance, c = c.ignoreHiddenPoint, n, l = k.length, o;
            if (!a)this.center = a = this.getCenter();
            this.getX = function (b, c) {
                h = V.asin(z((b - a[1]) / (a[2] / 2 + m), 1));
                return a[0] + (c ? -1 : 1) * W(h) * (a[2] / 2 + m)
            };
            for (n = 0; n < l; n++) {
                o = k[n];
                f = j + b * i;
                if (!c || o.visible)b += o.percentage / 100;
                g = j + b * i;
                o.shapeType = "arc";
                o.shapeArgs = {
                    x: a[0],
                    y: a[1],
                    r: a[2] / 2,
                    innerR: a[3] / 2,
                    start: w(f * 1E3) / 1E3,
                    end: w(g * 1E3) / 1E3
                };
                h = (g + f) / 2;
                h > 1.5 * ma ? h -= 2 * ma : h < -ma / 2 && (h += 2 * ma);
                o.slicedTranslation = {translateX: w(W(h) * d), translateY: w(aa(h) * d)};
                f =
                    W(h) * a[2] / 2;
                g = aa(h) * a[2] / 2;
                o.tooltipPos = [a[0] + f * 0.7, a[1] + g * 0.7];
                o.half = h < -ma / 2 || h > ma / 2 ? 1 : 0;
                o.angle = h;
                e = z(e, m / 2);
                o.labelPos = [a[0] + f + W(h) * m, a[1] + g + aa(h) * m, a[0] + f + W(h) * e, a[1] + g + aa(h) * e, a[0] + f, a[1] + g, m < 0 ? "center" : o.half ? "right" : "left", h]
            }
        },
        drawGraph: null,
        drawPoints: function () {
            var a = this, b = a.chart.renderer, c, d, e = a.options.shadow, f, g, h;
            if (e && !a.shadowGroup)a.shadowGroup = b.g("shadow").add(a.group);
            o(a.points, function (i) {
                if (i.y !== null) {
                    d = i.graphic;
                    g = i.shapeArgs;
                    f = i.shadowGroup;
                    if (e && !f)f = i.shadowGroup = b.g("shadow").add(a.shadowGroup);
                    c = i.sliced ? i.slicedTranslation : {translateX: 0, translateY: 0};
                    f && f.attr(c);
                    if (d)d.setRadialReference(a.center).animate(t(g, c)); else {
                        h = {"stroke-linejoin": "round"};
                        if (!i.visible)h.visibility = "hidden";
                        i.graphic = d = b[i.shapeType](g).setRadialReference(a.center).attr(i.pointAttr[i.selected ? "select" : ""]).attr(h).attr(c).add(a.group).shadow(e, f)
                    }
                }
            })
        },
        searchPoint: ua,
        sortByAngle: function (a, b) {
            a.sort(function (a, d) {
                return a.angle !== void 0 && (d.angle - a.angle) * b
            })
        },
        drawLegendSymbol: Ma.drawRectangle,
        getCenter: Xb.getCenter,
        getSymbol: ua
    };
    U = ka(R, U);
    N.pie = U;
    R.prototype.drawDataLabels = function () {
        var a = this, b = a.options, c = b.cursor, d = b.dataLabels, e = a.points, f, g, h = a.hasRendered || 0, i, j, k = a.chart.renderer;
        if (d.enabled || a._hasPointLabels)a.dlProcessOptions && a.dlProcessOptions(d), j = a.plotGroup("dataLabelsGroup", "data-labels", d.defer ? "hidden" : "visible", d.zIndex || 6), p(d.defer, !0) && (j.attr({opacity: +h}), h || I(a, "afterAnimate", function () {
            a.visible && j.show();
            j[b.animation ? "animate" : "attr"]({opacity: 1}, {duration: 200})
        })), g = d, o(e, function (e) {
            var h,
                l = e.dataLabel, o, r, s = e.connector, w = !0, v, y = {};
            f = e.dlOptions || e.options && e.options.dataLabels;
            h = p(f && f.enabled, g.enabled);
            if (l && !h)e.dataLabel = l.destroy(); else if (h) {
                d = D(g, f);
                v = d.style;
                h = d.rotation;
                o = e.getLabelConfig();
                i = d.format ? Ia(d.format, o) : d.formatter.call(o, d);
                v.color = p(d.color, v.color, a.color, "black");
                if (l)if (q(i))l.attr({text: i}), w = !1; else {
                    if (e.dataLabel = l = l.destroy(), s)e.connector = s.destroy()
                } else if (q(i)) {
                    l = {
                        fill: d.backgroundColor,
                        stroke: d.borderColor,
                        "stroke-width": d.borderWidth,
                        r: d.borderRadius ||
                        0,
                        rotation: h,
                        padding: d.padding,
                        zIndex: 1
                    };
                    if (v.color === "contrast")y.color = d.inside || d.distance < 0 || b.stacking ? k.getContrast(e.color || a.color) : "#000000";
                    if (c)y.cursor = c;
                    for (r in l)l[r] === x && delete l[r];
                    l = e.dataLabel = k[h ? "text" : "label"](i, 0, -999, d.shape, null, null, d.useHTML).attr(l).css(t(v, y)).add(j).shadow(d.shadow)
                }
                l && a.alignDataLabel(e, l, d, null, w)
            }
        })
    };
    R.prototype.alignDataLabel = function (a, b, c, d, e) {
        var f = this.chart, g = f.inverted, h = p(a.plotX, -999), i = p(a.plotY, -999), j = b.getBBox(), k = f.renderer.fontMetrics(c.style.fontSize).b,
            m = this.visible && (a.series.forceDL || f.isInsidePlot(h, w(i), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g));
        if (m)d = t({
            x: g ? f.plotWidth - i : h,
            y: w(g ? f.plotHeight - h : i),
            width: 0,
            height: 0
        }, d), t(c, {
            width: j.width,
            height: j.height
        }), c.rotation ? (a = f.renderer.rotCorr(k, c.rotation), b[e ? "attr" : "animate"]({
            x: d.x + c.x + d.width / 2 + a.x,
            y: d.y + c.y + d.height / 2
        }).attr({align: c.align})) : (b.align(c, null, d), g = b.alignAttr, p(c.overflow, "justify") === "justify" ? this.justifyDataLabel(b, c, g, j, d, e) : p(c.crop, !0) && (m = f.isInsidePlot(g.x, g.y) &&
            f.isInsidePlot(g.x + j.width, g.y + j.height)), c.shape && b.attr({anchorX: a.plotX, anchorY: a.plotY}));
        if (!m)cb(b), b.attr({y: -999}), b.placed = !1
    };
    R.prototype.justifyDataLabel = function (a, b, c, d, e, f) {
        var g = this.chart, h = b.align, i = b.verticalAlign, j, k, m = a.box ? 0 : a.padding || 0;
        j = c.x + m;
        if (j < 0)h === "right" ? b.align = "left" : b.x = -j, k = !0;
        j = c.x + d.width - m;
        if (j > g.plotWidth)h === "left" ? b.align = "right" : b.x = g.plotWidth - j, k = !0;
        j = c.y + m;
        if (j < 0)i === "bottom" ? b.verticalAlign = "top" : b.y = -j, k = !0;
        j = c.y + d.height - m;
        if (j > g.plotHeight)i === "top" ?
            b.verticalAlign = "bottom" : b.y = g.plotHeight - j, k = !0;
        if (k)a.placed = !f, a.align(b, null, e)
    };
    if (N.pie)N.pie.prototype.drawDataLabels = function () {
        var a = this, b = a.data, c, d = a.chart, e = a.options.dataLabels, f = p(e.connectorPadding, 10), g = p(e.connectorWidth, 1), h = d.plotWidth, i = d.plotHeight, j, k, m = p(e.softConnector, !0), n = e.distance, l = a.center, q = l[2] / 2, r = l[1], t = n > 0, x, v, y, D = [[], []], C, B, E, G, H, F = [0, 0, 0, 0], M = function (a, b) {
            return b.y - a.y
        };
        if (a.visible && (e.enabled || a._hasPointLabels)) {
            R.prototype.drawDataLabels.apply(a);
            o(b,
                function (a) {
                    a.dataLabel && a.visible && D[a.half].push(a)
                });
            for (G = 2; G--;) {
                var J = [], N = [], I = D[G], L = I.length, K;
                if (L) {
                    a.sortByAngle(I, G - 0.5);
                    for (H = b = 0; !b && I[H];)b = I[H] && I[H].dataLabel && (I[H].dataLabel.getBBox().height || 21), H++;
                    if (n > 0) {
                        v = z(r + q + n, d.plotHeight);
                        for (H = s(0, r - q - n); H <= v; H += b)J.push(H);
                        v = J.length;
                        if (L > v) {
                            c = [].concat(I);
                            c.sort(M);
                            for (H = L; H--;)c[H].rank = H;
                            for (H = L; H--;)I[H].rank >= v && I.splice(H, 1);
                            L = I.length
                        }
                        for (H = 0; H < L; H++) {
                            c = I[H];
                            y = c.labelPos;
                            c = 9999;
                            var Q, P;
                            for (P = 0; P < v; P++)Q = O(J[P] - y[1]), Q < c && (c = Q,
                                K = P);
                            if (K < H && J[H] !== null)K = H; else for (v < L - H + K && J[H] !== null && (K = v - L + H); J[K] === null;)K++;
                            N.push({i: K, y: J[K]});
                            J[K] = null
                        }
                        N.sort(M)
                    }
                    for (H = 0; H < L; H++) {
                        c = I[H];
                        y = c.labelPos;
                        x = c.dataLabel;
                        E = c.visible === !1 ? "hidden" : "inherit";
                        c = y[1];
                        if (n > 0) {
                            if (v = N.pop(), K = v.i, B = v.y, c > B && J[K + 1] !== null || c < B && J[K - 1] !== null)B = z(s(0, c), d.plotHeight)
                        } else B = c;
                        C = e.justify ? l[0] + (G ? -1 : 1) * (q + n) : a.getX(B === r - q - n || B === r + q + n ? c : B, G);
                        x._attr = {visibility: E, align: y[6]};
                        x._pos = {x: C + e.x + ({left: f, right: -f}[y[6]] || 0), y: B + e.y - 10};
                        x.connX = C;
                        x.connY =
                            B;
                        if (this.options.size === null)v = x.width, C - v < f ? F[3] = s(w(v - C + f), F[3]) : C + v > h - f && (F[1] = s(w(C + v - h + f), F[1])), B - b / 2 < 0 ? F[0] = s(w(-B + b / 2), F[0]) : B + b / 2 > i && (F[2] = s(w(B + b / 2 - i), F[2]))
                    }
                }
            }
            if (Da(F) === 0 || this.verifyDataLabelOverflow(F))this.placeDataLabels(), t && g && o(this.points, function (b) {
                j = b.connector;
                y = b.labelPos;
                if ((x = b.dataLabel) && x._pos && b.visible)E = x._attr.visibility, C = x.connX, B = x.connY, k = m ? ["M", C + (y[6] === "left" ? 5 : -5), B, "C", C, B, 2 * y[2] - y[4], 2 * y[3] - y[5], y[2], y[3], "L", y[4], y[5]] : ["M", C + (y[6] === "left" ? 5 : -5), B, "L",
                    y[2], y[3], "L", y[4], y[5]], j ? (j.animate({d: k}), j.attr("visibility", E)) : b.connector = j = a.chart.renderer.path(k).attr({
                    "stroke-width": g,
                    stroke: e.connectorColor || b.color || "#606060",
                    visibility: E
                }).add(a.dataLabelsGroup); else if (j)b.connector = j.destroy()
            })
        }
    }, N.pie.prototype.placeDataLabels = function () {
        o(this.points, function (a) {
            var b = a.dataLabel;
            if (b && a.visible)(a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({y: -999})
        })
    }, N.pie.prototype.alignDataLabel = ua, N.pie.prototype.verifyDataLabelOverflow =
        function (a) {
            var b = this.center, c = this.options, d = c.center, e = c.minSize || 80, f = e, g;
            d[0] !== null ? f = s(b[2] - s(a[1], a[3]), e) : (f = s(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2);
            d[1] !== null ? f = s(z(f, b[2] - s(a[0], a[2])), e) : (f = s(z(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);
            f < b[2] ? (b[2] = f, b[3] = Math.min(/%$/.test(c.innerSize || 0) ? f * parseFloat(c.innerSize || 0) / 100 : parseFloat(c.innerSize || 0), f), this.translate(b), o(this.points, function (a) {
                if (a.dataLabel)a.dataLabel._pos = null
            }), this.drawDataLabels && this.drawDataLabels()) : g = !0;
            return g
        };
    if (N.column)N.column.prototype.alignDataLabel = function (a, b, c, d, e) {
        var f = this.chart.inverted, g = a.series, h = a.dlBox || a.shapeArgs, i = p(a.below, a.plotY > p(this.translatedThreshold, g.yAxis.len)), j = p(c.inside, !!this.options.stacking);
        if (h && (d = D(h), f && (d = {
                x: g.yAxis.len - d.y - d.height,
                y: g.xAxis.len - d.x - d.width,
                width: d.height,
                height: d.width
            }), !j))f ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0);
        c.align = p(c.align, !f || j ? "center" : i ? "right" : "left");
        c.verticalAlign = p(c.verticalAlign, f || j ? "middle" : i ? "top" :
            "bottom");
        R.prototype.alignDataLabel.call(this, a, b, c, d, e)
    };
    (function (a) {
        var b = a.Chart, c = a.each, d = a.pick, e = HighchartsAdapter.addEvent;
        b.prototype.callbacks.push(function (a) {
            function b() {
                var e = [];
                c(a.series, function (a) {
                    var b = a.options.dataLabels, f = a.dataLabelCollections || ["dataLabel"];
                    (b.enabled || a._hasPointLabels) && !b.allowOverlap && a.visible && c(f, function (b) {
                        c(a.points, function (a) {
                            if (a[b])a[b].labelrank = d(a.labelrank, a.shapeArgs && a.shapeArgs.height), e.push(a[b])
                        })
                    })
                });
                a.hideOverlappingLabels(e)
            }

            b();
            e(a, "redraw", b)
        });
        b.prototype.hideOverlappingLabels = function (a) {
            var b = a.length, d, e, j, k, m, n, l;
            for (e = 0; e < b; e++)if (d = a[e])d.oldOpacity = d.opacity, d.newOpacity = 1;
            a.sort(function (a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (e = 0; e < b; e++) {
                j = a[e];
                for (d = e + 1; d < b; ++d)if (k = a[d], j && k && j.placed && k.placed && j.newOpacity !== 0 && k.newOpacity !== 0 && (m = j.alignAttr, n = k.alignAttr, l = 2 * (j.box ? 0 : j.padding), m = !(n.x > m.x + (j.width - l) || n.x + (k.width - l) < m.x || n.y > m.y + (j.height - l) || n.y + (k.height - l) < m.y)))(j.labelrank < k.labelrank ?
                    j : k).newOpacity = 0
            }
            c(a, function (a) {
                var b, c;
                if (a) {
                    c = a.newOpacity;
                    if (a.oldOpacity !== c && a.placed)c ? a.show(!0) : b = function () {
                        a.hide()
                    }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b);
                    a.isOld = !0
                }
            })
        }
    })(B);
    U = B.TrackerMixin = {
        drawTrackerPoint: function () {
            var a = this, b = a.chart, c = b.pointer, d = a.options.cursor, e = d && {cursor: d}, f = function (a) {
                for (var c = a.target, d; c && !d;)d = c.point, c = c.parentNode;
                if (d !== x && d !== b.hoverPoint)d.onMouseOver(a)
            };
            o(a.points, function (a) {
                if (a.graphic)a.graphic.element.point =
                    a;
                if (a.dataLabel)a.dataLabel.element.point = a
            });
            if (!a._hasTracking)o(a.trackerGroups, function (b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (a) {
                        c.onTrackerMouseOut(a)
                    }).css(e), ab))a[b].on("touchstart", f)
            }), a._hasTracking = !0
        }, drawTrackerGraph: function () {
            var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e = d.length, f = a.chart, g = f.pointer, h = f.renderer, i = f.options.tooltip.snap, j = a.tracker, k = b.cursor, m = k && {cursor: k}, k = a.singlePoints, n,
                l = function () {
                    if (f.hoverSeries !== a)a.onMouseOver()
                }, p = "rgba(192,192,192," + (ca ? 1.0E-4 : 0.002) + ")";
            if (e && !c)for (n = e + 1; n--;)d[n] === "M" && d.splice(n + 1, 0, d[n + 1] - i, d[n + 2], "L"), (n && d[n] === "M" || n === e) && d.splice(n, 0, "L", d[n - 2] + i, d[n - 1]);
            for (n = 0; n < k.length; n++)e = k[n], d.push("M", e.plotX - i, e.plotY, "L", e.plotX + i, e.plotY);
            j ? j.attr({d: d}) : (a.tracker = h.path(d).attr({
                "stroke-linejoin": "round",
                visibility: a.visible ? "visible" : "hidden",
                stroke: p,
                fill: c ? p : P,
                "stroke-width": b.lineWidth + (c ? 0 : 2 * i),
                zIndex: 2
            }).add(a.group), o([a.tracker,
                a.markerGroup], function (a) {
                a.addClass("highcharts-tracker").on("mouseover", l).on("mouseout", function (a) {
                    g.onTrackerMouseOut(a)
                }).css(m);
                if (ab)a.on("touchstart", l)
            }))
        }
    };
    if (N.column)xa.prototype.drawTracker = U.drawTrackerPoint;
    if (N.pie)N.pie.prototype.drawTracker = U.drawTrackerPoint;
    if (N.scatter)pa.prototype.drawTracker = U.drawTrackerPoint;
    t(mb.prototype, {
        setItemEvents: function (a, b, c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function () {
                a.setState("hover");
                b.css(f.options.itemHoverStyle)
            }).on("mouseout",
                function () {
                    b.css(a.visible ? d : e);
                    a.setState()
                }).on("click", function (b) {
                var c = function () {
                    a.setVisible && a.setVisible()
                }, b = {browserEvent: b};
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : J(a, "legendItemClick", b, c)
            })
        }, createCheckboxForItem: function (a) {
            a.checkbox = $("input", {
                type: "checkbox",
                checked: a.selected,
                defaultChecked: a.selected
            }, this.options.itemCheckboxStyle, this.chart.container);
            I(a.checkbox, "click", function (b) {
                J(a.series || a, "checkboxClick", {checked: b.target.checked, item: a}, function () {
                    a.select()
                })
            })
        }
    });
    S.legend.itemStyle.cursor = "pointer";
    t(E.prototype, {
        showResetZoom: function () {
            var a = this, b = S.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, f = c.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () {
                a.zoomOut()
            }, d, e && e.hover).attr({align: c.position.align, title: b.resetZoomTitle}).add().align(c.position, !1, f)
        }, zoomOut: function () {
            var a = this;
            J(a, "selection", {resetSelection: !0}, function () {
                a.zoom()
            })
        }, zoom: function (a) {
            var b, c = this.pointer,
                d = !1, e;
            !a || a.resetSelection ? o(this.axes, function (a) {
                b = a.zoom()
            }) : o(a.xAxis.concat(a.yAxis), function (a) {
                var e = a.axis, h = e.isXAxis;
                if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"])b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            if (d && !e)this.showResetZoom(); else if (!d && da(e))this.resetZoomButton = e.destroy();
            b && this.redraw(p(this.options.chart.animation, a && a.animation, this.pointCount < 100))
        }, pan: function (a, b) {
            var c = this, d = c.hoverPoints, e;
            d && o(d, function (a) {
                a.setState()
            });
            o(b === "xy" ?
                [1, 0] : [1], function (b) {
                var d = a[b ? "chartX" : "chartY"], h = c[b ? "xAxis" : "yAxis"][0], i = c[b ? "mouseDownX" : "mouseDownY"], j = (h.pointRange || 0) / 2, k = h.getExtremes(), m = h.toValue(i - d, !0) + j, j = h.toValue(i + c[b ? "plotWidth" : "plotHeight"] - d, !0) - j, i = i > d;
                if (h.series.length && (i || m > z(k.dataMin, k.min)) && (!i || j < s(k.dataMax, k.max)))h.setExtremes(m, j, !1, !1, {trigger: "pan"}), e = !0;
                c[b ? "mouseDownX" : "mouseDownY"] = d
            });
            e && c.redraw(!1);
            M(c.container, {cursor: "move"})
        }
    });
    t(Fa.prototype, {
        select: function (a, b) {
            var c = this, d = c.series, e = d.chart,
                a = p(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {accumulate: b}, function () {
                c.selected = c.options.selected = a;
                d.options.data[La(c, d.data)] = c.options;
                c.setState(a && "select");
                b || o(e.getSelectedPoints(), function (a) {
                    if (a.selected && a !== c)a.selected = a.options.selected = !1, d.options.data[La(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect")
                })
            })
        }, onMouseOver: function (a, b) {
            var c = this.series, d = c.chart, e = d.tooltip, f = d.hoverPoint;
            if (d.hoverSeries !== c)c.onMouseOver();
            if (f && f !== this)f.onMouseOut();
            if (this.series && (this.firePointEvent("mouseOver"), e && (!e.shared || c.noSharedTooltip) && e.refresh(this, a), this.setState("hover"), !b))d.hoverPoint = this
        }, onMouseOut: function () {
            var a = this.series.chart, b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            if (!b || La(this, b) === -1)this.setState(), a.hoverPoint = null
        }, importEvents: function () {
            if (!this.hasImportedEvents) {
                var a = D(this.series.options.point, this.options).events, b;
                this.events = a;
                for (b in a)I(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        }, setState: function (a, b) {
            var c =
                T(this.plotX), d = this.plotY, e = this.series, f = e.options.states, g = ba[e.type].marker && e.options.marker, h = g && !g.enabled, i = g && g.states[a], j = i && i.enabled === !1, k = e.stateMarkerGraphic, m = this.marker || {}, n = e.chart, l = e.halo, o, a = a || "";
            o = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && a !== "select" || f[a] && f[a].enabled === !1 || a && (j || h && i.enabled === !1) || a && m.states && m.states[a] && m.states[a].enabled === !1)) {
                if (this.graphic)g = g && this.graphic.symbolName && o.r, this.graphic.attr(D(o, g ? {
                    x: c - g, y: d -
                    g, width: 2 * g, height: 2 * g
                } : {})), k && k.hide(); else {
                    if (a && i)if (g = i.radius, m = m.symbol || e.symbol, k && k.currentSymbol !== m && (k = k.destroy()), k)k[b ? "animate" : "attr"]({
                        x: c - g,
                        y: d - g
                    }); else if (m)e.stateMarkerGraphic = k = n.renderer.symbol(m, c - g, d - g, 2 * g, 2 * g).attr(o).add(e.markerGroup), k.currentSymbol = m;
                    if (k)k[a && n.isInsidePlot(c, d, n.inverted) ? "show" : "hide"](), k.element.point = this
                }
                if ((c = f[a] && f[a].halo) && c.size) {
                    if (!l)e.halo = l = n.renderer.path().add(n.seriesGroup);
                    l.attr(t({fill: na(this.color || e.color).setOpacity(c.opacity).get()},
                        c.attributes))[b ? "animate" : "attr"]({d: this.haloPath(c.size)})
                } else l && l.attr({d: []});
                this.state = a
            }
        }, haloPath: function (a) {
            var b = this.series, c = b.chart, d = b.getPlotBox(), e = c.inverted;
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : this.plotX) - a, d.translateY + (e ? b.xAxis.len - this.plotX : this.plotY) - a, a * 2, a * 2)
        }
    });
    t(R.prototype, {
        onMouseOver: function () {
            var a = this.chart, b = a.hoverSeries;
            if (b && b !== this)b.onMouseOut();
            this.options.events.mouseOver && J(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        }, onMouseOut: function () {
            var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
            b.hoverSeries = null;
            if (d)d.onMouseOut();
            this && a.events.mouseOut && J(this, "mouseOut");
            c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide();
            this.setState()
        }, setState: function (a) {
            var b = this.options, c = this.graph, d = b.states, e = b.lineWidth, b = 0, a = a || "";
            if (this.state !== a && (this.state = a, !(d[a] && d[a].enabled === !1) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus || 0)), c && !c.dashstyle))) {
                a = {"stroke-width": e};
                for (c.attr(a); this["zoneGraph" + b];)this["zoneGraph" + b].attr(a), b += 1
            }
        }, setVisible: function (a, b) {
            var c = this, d = c.chart, e = c.legendItem, f, g = d.options.chart.ignoreHiddenSeries, h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === x ? !h : a) ? "show" : "hide";
            o(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (a) {
                if (c[a])c[a][f]()
            });
            if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c)c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && o(d.series, function (a) {
                if (a.options.stacking &&
                    a.visible)a.isDirty = !0
            });
            o(c.linkedSeries, function (b) {
                b.setVisible(a, !1)
            });
            if (g)d.isDirtyBox = !0;
            b !== !1 && d.redraw();
            J(c, f)
        }, show: function () {
            this.setVisible(!0)
        }, hide: function () {
            this.setVisible(!1)
        }, select: function (a) {
            this.selected = a = a === x ? !this.selected : a;
            if (this.checkbox)this.checkbox.checked = a;
            J(this, a ? "select" : "unselect")
        }, drawTracker: U.drawTrackerGraph
    });
    t(B, {
        Color: na,
        Point: Fa,
        Tick: Sa,
        Renderer: $a,
        SVGElement: Q,
        SVGRenderer: Aa,
        arrayMin: Oa,
        arrayMax: Da,
        charts: X,
        dateFormat: Na,
        error: la,
        format: Ia,
        pathAnim: yb,
        getOptions: function () {
            return S
        },
        hasBidiBug: Nb,
        isTouchDevice: Jb,
        setOptions: function (a) {
            S = D(!0, S, a);
            Cb();
            return S
        },
        addEvent: I,
        removeEvent: Y,
        createElement: $,
        discardElement: Qa,
        css: M,
        each: o,
        map: Ua,
        merge: D,
        splat: ra,
        extendClass: ka,
        pInt: G,
        svg: ca,
        canvas: fa,
        vml: !ca && !fa,
        product: "Highcharts",
        version: "4.1.9"
    })
})();
/*
 Highcharts JS v4.1.9 (2015-10-07)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
 */
(function (n, G) {
    function L(a, b, c) {
        this.init.call(this, a, b, c)
    }

    var Q = n.arrayMin, R = n.arrayMax, s = n.each, I = n.extend, t = n.merge, S = n.map, o = n.pick, B = n.pInt, p = n.getOptions().plotOptions, i = n.seriesTypes, u = n.extendClass, M = n.splat, r = n.wrap, N = n.Axis, z = n.Tick, J = n.Point, T = n.Pointer, U = n.CenteredSeriesMixin, A = n.TrackerMixin, w = n.Series, y = Math, E = y.round, C = y.floor, O = y.max, V = n.Color, v = function () {
    };
    I(L.prototype, {
        init: function (a, b, c) {
            var d = this, e = d.defaultOptions;
            d.chart = b;
            d.options = a = t(e, b.angular ? {background: {}} : void 0,
                a);
            (a = a.background) && s([].concat(M(a)).reverse(), function (a) {
                var b = a.backgroundColor, k = c.userOptions, a = t(d.defaultBackgroundOptions, a);
                if (b)a.backgroundColor = b;
                a.color = a.backgroundColor;
                c.options.plotBands.unshift(a);
                k.plotBands = k.plotBands || [];
                k.plotBands !== c.options.plotBands && k.plotBands.unshift(a)
            })
        }, defaultOptions: {center: ["50%", "50%"], size: "85%", startAngle: 0}, defaultBackgroundOptions: {
            shape: "circle", borderWidth: 1, borderColor: "silver", backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0,
                    "#FFF"], [1, "#DDD"]]
            }, from: -Number.MAX_VALUE, innerRadius: 0, to: Number.MAX_VALUE, outerRadius: "105%"
        }
    });
    var H = N.prototype, z = z.prototype, W = {
        getOffset: v, redraw: function () {
            this.isDirty = !1
        }, render: function () {
            this.isDirty = !1
        }, setScale: v, setCategories: v, setTitle: v
    }, P = {
        isRadial: !0,
        defaultRadialGaugeOptions: {
            labels: {align: "center", x: 0, y: null},
            minorGridLineWidth: 0,
            minorTickInterval: "auto",
            minorTickLength: 10,
            minorTickPosition: "inside",
            minorTickWidth: 1,
            tickLength: 10,
            tickPosition: "inside",
            tickWidth: 2,
            title: {rotation: 0},
            zIndex: 2
        },
        defaultRadialXOptions: {
            gridLineWidth: 1,
            labels: {align: null, distance: 15, x: 0, y: null},
            maxPadding: 0,
            minPadding: 0,
            showLastLabel: !1,
            tickLength: 0
        },
        defaultRadialYOptions: {
            gridLineInterpolation: "circle",
            labels: {align: "right", x: -3, y: -2},
            showLastLabel: !1,
            title: {x: 4, text: null, rotation: 90}
        },
        setOptions: function (a) {
            a = this.options = t(this.defaultOptions, this.defaultRadialOptions, a);
            if (!a.plotBands)a.plotBands = []
        },
        getOffset: function () {
            H.getOffset.call(this);
            this.chart.axisOffset[this.side] = 0;
            this.center = this.pane.center =
                U.getCenter.call(this.pane)
        },
        getLinePath: function (a, b) {
            var c = this.center, b = o(b, c[2] / 2 - this.offset);
            return this.chart.renderer.symbols.arc(this.left + c[0], this.top + c[1], b, b, {
                start: this.startAngleRad,
                end: this.endAngleRad,
                open: !0,
                innerR: 0
            })
        },
        setAxisTranslation: function () {
            H.setAxisTranslation.call(this);
            if (this.center)this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset :
                0
        },
        beforeSetTickPositions: function () {
            this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
        },
        setAxisSize: function () {
            H.setAxisSize.call(this);
            if (this.isRadial) {
                this.center = this.pane.center = n.CenteredSeriesMixin.getCenter.call(this.pane);
                if (this.isCircular)this.sector = this.endAngleRad - this.startAngleRad;
                this.len = this.width = this.height = this.center[2] * o(this.sector, 1) / 2
            }
        },
        getPosition: function (a, b) {
            return this.postTranslate(this.isCircular ? this.translate(a) : 0, o(this.isCircular ?
                    b : this.translate(a), this.center[2] / 2) - this.offset)
        },
        postTranslate: function (a, b) {
            var c = this.chart, d = this.center, a = this.startAngleRad + a;
            return {x: c.plotLeft + d[0] + Math.cos(a) * b, y: c.plotTop + d[1] + Math.sin(a) * b}
        },
        getPlotBandPath: function (a, b, c) {
            var d = this.center, e = this.startAngleRad, f = d[2] / 2, h = [o(c.outerRadius, "100%"), c.innerRadius, o(c.thickness, 10)], k = /%$/, g, j = this.isCircular;
            this.options.gridLineInterpolation === "polygon" ? d = this.getPlotLinePath(a).concat(this.getPlotLinePath(b, !0)) : (a = Math.max(a, this.min),
                b = Math.min(b, this.max), j || (h[0] = this.translate(a), h[1] = this.translate(b)), h = S(h, function (a) {
                k.test(a) && (a = B(a, 10) * f / 100);
                return a
            }), c.shape === "circle" || !j ? (a = -Math.PI / 2, b = Math.PI * 1.5, g = !0) : (a = e + this.translate(a), b = e + this.translate(b)), d = this.chart.renderer.symbols.arc(this.left + d[0], this.top + d[1], h[0], h[0], {
                start: Math.min(a, b),
                end: Math.max(a, b),
                innerR: o(h[1], h[0] - h[2]),
                open: g
            }));
            return d
        },
        getPlotLinePath: function (a, b) {
            var c = this, d = c.center, e = c.chart, f = c.getPosition(a), h, k, g;
            c.isCircular ? g = ["M", d[0] +
            e.plotLeft, d[1] + e.plotTop, "L", f.x, f.y] : c.options.gridLineInterpolation === "circle" ? (a = c.translate(a)) && (g = c.getLinePath(0, a)) : (s(e.xAxis, function (a) {
                a.pane === c.pane && (h = a)
            }), g = [], a = c.translate(a), d = h.tickPositions, h.autoConnect && (d = d.concat([d[0]])), b && (d = [].concat(d).reverse()), s(d, function (f, b) {
                k = h.getPosition(f, a);
                g.push(b ? "L" : "M", k.x, k.y)
            }));
            return g
        },
        getTitlePosition: function () {
            var a = this.center, b = this.chart, c = this.options.title;
            return {
                x: b.plotLeft + a[0] + (c.x || 0), y: b.plotTop + a[1] - {
                    high: 0.5, middle: 0.25,
                    low: 0
                }[c.align] * a[2] + (c.y || 0)
            }
        }
    };
    r(H, "init", function (a, b, c) {
        var l;
        var d = b.angular, e = b.polar, f = c.isX, h = d && f, k, g;
        g = b.options;
        var j = c.pane || 0;
        if (d) {
            if (I(this, h ? W : P), k = !f)this.defaultRadialOptions = this.defaultRadialGaugeOptions
        } else if (e)I(this, P), this.defaultRadialOptions = (k = f) ? this.defaultRadialXOptions : t(this.defaultYAxisOptions, this.defaultRadialYOptions);
        a.call(this, b, c);
        if (!h && (d || e)) {
            a = this.options;
            if (!b.panes)b.panes = [];
            this.pane = (l = b.panes[j] = b.panes[j] || new L(M(g.pane)[j], b, this), j = l);
            j = j.options;
            b.inverted = !1;
            g.chart.zoomType = null;
            this.startAngleRad = b = (j.startAngle - 90) * Math.PI / 180;
            this.endAngleRad = g = (o(j.endAngle, j.startAngle + 360) - 90) * Math.PI / 180;
            this.offset = a.offset || 0;
            if ((this.isCircular = k) && c.max === G && g - b === 2 * Math.PI)this.autoConnect = !0
        }
    });
    r(z, "getPosition", function (a, b, c, d, e) {
        var f = this.axis;
        return f.getPosition ? f.getPosition(c) : a.call(this, b, c, d, e)
    });
    r(z, "getLabelPosition", function (a, b, c, d, e, f, h, k, g) {
        var j = this.axis, m = f.y, l = 20, i = f.align, x = (j.translate(this.pos) + j.startAngleRad + Math.PI /
            2) / Math.PI * 180 % 360;
        j.isRadial ? (a = j.getPosition(this.pos, j.center[2] / 2 + o(f.distance, -25)), f.rotation === "auto" ? d.attr({rotation: x}) : m === null && (m = j.chart.renderer.fontMetrics(d.styles.fontSize).b - d.getBBox().height / 2), i === null && (j.isCircular ? (this.label.getBBox().width > j.len * j.tickInterval / (j.max - j.min) && (l = 0), i = x > l && x < 180 - l ? "left" : x > 180 + l && x < 360 - l ? "right" : "center") : i = "center", d.attr({align: i})), a.x += f.x, a.y += m) : a = a.call(this, b, c, d, e, f, h, k, g);
        return a
    });
    r(z, "getMarkPath", function (a, b, c, d, e, f, h) {
        var k =
            this.axis;
        k.isRadial ? (a = k.getPosition(this.pos, k.center[2] / 2 + d), b = ["M", b, c, "L", a.x, a.y]) : b = a.call(this, b, c, d, e, f, h);
        return b
    });
    p.arearange = t(p.area, {
        lineWidth: 1,
        marker: null,
        threshold: null,
        tooltip: {pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
        trackByArea: !0,
        dataLabels: {align: null, verticalAlign: null, xLow: 0, xHigh: 0, yLow: 0, yHigh: 0},
        states: {hover: {halo: !1}}
    });
    i.arearange = u(i.area, {
        type: "arearange", pointArrayMap: ["low", "high"],
        dataLabelCollections: ["dataLabel", "dataLabelUpper"], toYData: function (a) {
            return [a.low, a.high]
        }, pointValKey: "low", deferTranslatePolar: !0, highToXY: function (a) {
            var b = this.chart, c = this.xAxis.postTranslate(a.rectPlotX, this.yAxis.len - a.plotHigh);
            a.plotHighX = c.x - b.plotLeft;
            a.plotHigh = c.y - b.plotTop
        }, getSegments: function () {
            var a = this;
            s(a.points, function (b) {
                if (!a.options.connectNulls && (b.low === null || b.high === null))b.y = null; else if (b.low === null && b.high !== null)b.y = b.high
            });
            w.prototype.getSegments.call(this)
        },
        translate: function () {
            var a = this, b = a.yAxis;
            i.area.prototype.translate.apply(a);
            s(a.points, function (a) {
                var d = a.low, e = a.high, f = a.plotY;
                e === null && d === null ? a.y = null : d === null ? (a.plotLow = a.plotY = null, a.plotHigh = b.translate(e, 0, 1, 0, 1)) : e === null ? (a.plotLow = f, a.plotHigh = null) : (a.plotLow = f, a.plotHigh = b.translate(e, 0, 1, 0, 1))
            });
            this.chart.polar && s(this.points, function (b) {
                a.highToXY(b)
            })
        }, getSegmentPath: function (a) {
            var b, c = [], d = a.length, e = w.prototype.getSegmentPath, f, h;
            h = this.options;
            var k = h.step;
            for (b = HighchartsAdapter.grep(a,
                function (a) {
                    return a.plotLow !== null
                }); d--;)f = a[d], f.plotHigh !== null && c.push({plotX: f.plotHighX || f.plotX, plotY: f.plotHigh});
            a = e.call(this, b);
            if (k)k === !0 && (k = "left"), h.step = {left: "right", center: "center", right: "left"}[k];
            c = e.call(this, c);
            h.step = k;
            h = [].concat(a, c);
            this.chart.polar || (c[0] = "L");
            this.areaPath = this.areaPath.concat(a, c);
            return h
        }, drawDataLabels: function () {
            var a = this.data, b = a.length, c, d = [], e = w.prototype, f = this.options.dataLabels, h = f.align, k = f.inside, g, j, m = this.chart.inverted;
            if (f.enabled ||
                this._hasPointLabels) {
                for (c = b; c--;)if (g = a[c])if (j = k ? g.plotHigh < g.plotLow : g.plotHigh > g.plotLow, g.y = g.high, g._plotY = g.plotY, g.plotY = g.plotHigh, d[c] = g.dataLabel, g.dataLabel = g.dataLabelUpper, g.below = j, m) {
                    if (!h)f.align = j ? "right" : "left";
                    f.x = f.xHigh
                } else f.y = f.yHigh;
                e.drawDataLabels && e.drawDataLabels.apply(this, arguments);
                for (c = b; c--;)if (g = a[c])if (j = k ? g.plotHigh < g.plotLow : g.plotHigh > g.plotLow, g.dataLabelUpper = g.dataLabel, g.dataLabel = d[c], g.y = g.low, g.plotY = g._plotY, g.below = !j, m) {
                    if (!h)f.align = j ? "left" : "right";
                    f.x = f.xLow
                } else f.y = f.yLow;
                e.drawDataLabels && e.drawDataLabels.apply(this, arguments)
            }
            f.align = h
        }, alignDataLabel: function () {
            i.column.prototype.alignDataLabel.apply(this, arguments)
        }, setStackedPoints: v, getSymbol: v, drawPoints: v
    });
    p.areasplinerange = t(p.arearange);
    i.areasplinerange = u(i.arearange, {type: "areasplinerange", getPointSpline: i.spline.prototype.getPointSpline});
    (function () {
        var a = i.column.prototype;
        p.columnrange = t(p.column, p.arearange, {lineWidth: 1, pointRange: null});
        i.columnrange = u(i.arearange, {
            type: "columnrange",
            translate: function () {
                var b = this, c = b.yAxis, d;
                a.translate.apply(b);
                s(b.points, function (a) {
                    var f = a.shapeArgs, h = b.options.minPointLength, k;
                    a.tooltipPos = null;
                    a.plotHigh = d = c.translate(a.high, 0, 1, 0, 1);
                    a.plotLow = a.plotY;
                    k = d;
                    a = a.plotY - d;
                    Math.abs(a) < h ? (h -= a, a += h, k -= h / 2) : a < 0 && (a *= -1, k -= a);
                    f.height = a;
                    f.y = k
                })
            },
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            drawGraph: v,
            crispCol: a.crispCol,
            pointAttrToOptions: a.pointAttrToOptions,
            drawPoints: a.drawPoints,
            drawTracker: a.drawTracker,
            animate: a.animate,
            getColumnMetrics: a.getColumnMetrics
        })
    })();
    p.gauge = t(p.line, {
        dataLabels: {
            enabled: !0,
            defer: !1,
            y: 15,
            borderWidth: 1,
            borderColor: "silver",
            borderRadius: 3,
            crop: !1,
            verticalAlign: "top",
            zIndex: 2
        }, dial: {}, pivot: {}, tooltip: {headerFormat: ""}, showInLegend: !1
    });
    A = {
        type: "gauge",
        pointClass: u(J, {
            setState: function (a) {
                this.state = a
            }
        }),
        angular: !0,
        drawGraph: v,
        fixedBox: !0,
        forceDL: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        translate: function () {
            var a = this.yAxis, b = this.options, c = a.center;
            this.generatePoints();
            s(this.points, function (d) {
                var e = t(b.dial, d.dial), f = B(o(e.radius,
                        80)) * c[2] / 200, h = B(o(e.baseLength, 70)) * f / 100, k = B(o(e.rearLength, 10)) * f / 100, g = e.baseWidth || 3, j = e.topWidth || 1, m = b.overshoot, l = a.startAngleRad + a.translate(d.y, null, null, null, !0);
                m && typeof m === "number" ? (m = m / 180 * Math.PI, l = Math.max(a.startAngleRad - m, Math.min(a.endAngleRad + m, l))) : b.wrap === !1 && (l = Math.max(a.startAngleRad, Math.min(a.endAngleRad, l)));
                l = l * 180 / Math.PI;
                d.shapeType = "path";
                d.shapeArgs = {
                    d: e.path || ["M", -k, -g / 2, "L", h, -g / 2, f, -j / 2, f, j / 2, h, g / 2, -k, g / 2, "z"],
                    translateX: c[0],
                    translateY: c[1],
                    rotation: l
                };
                d.plotX =
                    c[0];
                d.plotY = c[1]
            })
        },
        drawPoints: function () {
            var a = this, b = a.yAxis.center, c = a.pivot, d = a.options, e = d.pivot, f = a.chart.renderer;
            s(a.points, function (b) {
                var c = b.graphic, g = b.shapeArgs, e = g.d, m = t(d.dial, b.dial);
                c ? (c.animate(g), g.d = e) : b.graphic = f[b.shapeType](g).attr({
                    stroke: m.borderColor || "none",
                    "stroke-width": m.borderWidth || 0,
                    fill: m.backgroundColor || "black",
                    rotation: g.rotation
                }).add(a.group)
            });
            c ? c.animate({translateX: b[0], translateY: b[1]}) : a.pivot = f.circle(0, 0, o(e.radius, 5)).attr({
                "stroke-width": e.borderWidth ||
                0, stroke: e.borderColor || "silver", fill: e.backgroundColor || "black"
            }).translate(b[0], b[1]).add(a.group)
        },
        animate: function (a) {
            var b = this;
            if (!a)s(b.points, function (a) {
                var d = a.graphic;
                d && (d.attr({rotation: b.yAxis.startAngleRad * 180 / Math.PI}), d.animate({rotation: a.shapeArgs.rotation}, b.options.animation))
            }), b.animate = null
        },
        render: function () {
            this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup);
            w.prototype.render.call(this);
            this.group.clip(this.chart.clipRect)
        },
        setData: function (a, b) {
            w.prototype.setData.call(this, a, !1);
            this.processData();
            this.generatePoints();
            o(b, !0) && this.chart.redraw()
        },
        drawTracker: A && A.drawTrackerPoint
    };
    i.gauge = u(i.line, A);
    p.boxplot = t(p.column, {
        fillColor: "#FFFFFF",
        lineWidth: 1,
        medianWidth: 2,
        states: {hover: {brightness: -0.3}},
        threshold: null,
        tooltip: {pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},
        whiskerLength: "50%",
        whiskerWidth: 2
    });
    i.boxplot = u(i.column, {
        type: "boxplot",
        pointArrayMap: ["low", "q1", "median", "q3", "high"],
        toYData: function (a) {
            return [a.low, a.q1, a.median, a.q3, a.high]
        },
        pointValKey: "high",
        pointAttrToOptions: {fill: "fillColor", stroke: "color", "stroke-width": "lineWidth"},
        drawDataLabels: v,
        translate: function () {
            var a = this.yAxis, b = this.pointArrayMap;
            i.column.prototype.translate.apply(this);
            s(this.points, function (c) {
                s(b, function (b) {
                    c[b] !== null && (c[b + "Plot"] = a.translate(c[b], 0, 1, 0, 1))
                })
            })
        },
        drawPoints: function () {
            var a =
                this, b = a.options, c = a.chart.renderer, d, e, f, h, k, g, j, m, l, i, x, n, K, p, t, r, v, u, w, y, B, A, z = a.doQuartiles !== !1, F, D = a.options.whiskerLength;
            s(a.points, function (q) {
                l = q.graphic;
                B = q.shapeArgs;
                x = {};
                p = {};
                r = {};
                A = q.color || a.color;
                if (q.plotY !== G)if (d = q.pointAttr[q.selected ? "selected" : ""], v = B.width, u = C(B.x), w = u + v, y = E(v / 2), e = C(z ? q.q1Plot : q.lowPlot), f = C(z ? q.q3Plot : q.lowPlot), h = C(q.highPlot), k = C(q.lowPlot), x.stroke = q.stemColor || b.stemColor || A, x["stroke-width"] = o(q.stemWidth, b.stemWidth, b.lineWidth), x.dashstyle = q.stemDashStyle ||
                        b.stemDashStyle, p.stroke = q.whiskerColor || b.whiskerColor || A, p["stroke-width"] = o(q.whiskerWidth, b.whiskerWidth, b.lineWidth), r.stroke = q.medianColor || b.medianColor || A, r["stroke-width"] = o(q.medianWidth, b.medianWidth, b.lineWidth), j = x["stroke-width"] % 2 / 2, m = u + y + j, i = ["M", m, f, "L", m, h, "M", m, e, "L", m, k], z && (j = d["stroke-width"] % 2 / 2, m = C(m) + j, e = C(e) + j, f = C(f) + j, u += j, w += j, n = ["M", u, f, "L", u, e, "L", w, e, "L", w, f, "L", u, f, "z"]), D && (j = p["stroke-width"] % 2 / 2, h += j, k += j, F = /%$/.test(D) ? y * parseFloat(D) / 100 : D / 2, K = ["M", m - F, h, "L", m +
                    F, h, "M", m - F, k, "L", m + F, k]), j = r["stroke-width"] % 2 / 2, g = E(q.medianPlot) + j, t = ["M", u, g, "L", w, g], l)q.stem.animate({d: i}), D && q.whiskers.animate({d: K}), z && q.box.animate({d: n}), q.medianShape.animate({d: t}); else {
                    q.graphic = l = c.g().add(a.group);
                    q.stem = c.path(i).attr(x).add(l);
                    if (D)q.whiskers = c.path(K).attr(p).add(l);
                    if (z)q.box = c.path(n).attr(d).add(l);
                    q.medianShape = c.path(t).attr(r).add(l)
                }
            })
        },
        setStackedPoints: v
    });
    p.errorbar = t(p.boxplot, {
        color: "#000000",
        grouping: !1,
        linkedTo: ":previous",
        tooltip: {pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
        whiskerWidth: null
    });
    i.errorbar = u(i.boxplot, {
        type: "errorbar",
        pointArrayMap: ["low", "high"],
        toYData: function (a) {
            return [a.low, a.high]
        },
        pointValKey: "high",
        doQuartiles: !1,
        drawDataLabels: i.arearange ? i.arearange.prototype.drawDataLabels : v,
        getColumnMetrics: function () {
            return this.linkedParent && this.linkedParent.columnMetrics || i.column.prototype.getColumnMetrics.call(this)
        }
    });
    p.waterfall = t(p.column, {
        lineWidth: 1,
        lineColor: "#333",
        dashStyle: "dot",
        borderColor: "#333",
        dataLabels: {inside: !0},
        states: {hover: {lineWidthPlus: 0}}
    });
    i.waterfall = u(i.column, {
        type: "waterfall", upColorProp: "fill", pointValKey: "y", translate: function () {
            var a = this.options, b = this.yAxis, c, d, e, f, h, k, g, j, m, l = a.threshold, X = a.stacking;
            i.column.prototype.translate.apply(this);
            g = j = l;
            d = this.points;
            for (c = 0, a = d.length; c < a; c++) {
                e = d[c];
                k = this.processedYData[c];
                f = e.shapeArgs;
                m = (h = X && b.stacks[(this.negStacks && k < l ? "-" : "") + this.stackKey]) ? h[e.x].points[this.index + "," + c] : [0, k];
                if (e.isSum)e.y = k; else if (e.isIntermediateSum)e.y = k - j;
                h = O(g, g + e.y) + m[0];
                f.y = b.translate(h, 0, 1);
                if (e.isSum)f.y = b.translate(m[1], 0, 1), f.height = Math.min(b.translate(m[0], 0, 1), b.len) - f.y; else if (e.isIntermediateSum)f.y = b.translate(m[1], 0, 1), f.height = Math.min(b.translate(j, 0, 1), b.len) - f.y, j = m[1]; else {
                    if (g !== 0)f.height = k > 0 ? b.translate(g, 0, 1) - f.y : b.translate(g, 0, 1) - b.translate(g - k, 0, 1);
                    g += k
                }
                f.height < 0 && (f.y += f.height, f.height *= -1);
                e.plotY = f.y = E(f.y) - this.borderWidth % 2 / 2;
                f.height = O(E(f.height), 0.001);
                e.yBottom = f.y + f.height;
                f = e.plotY + (e.negative ? f.height : 0);
                this.chart.inverted ? e.tooltipPos[0] = b.len -
                    f : e.tooltipPos[1] = f
            }
        }, processData: function (a) {
            var b = this.yData, c = this.options.data, d, e = b.length, f, h, k, g, j, m;
            h = f = k = g = this.options.threshold || 0;
            for (m = 0; m < e; m++)j = b[m], d = c && c[m] ? c[m] : {}, j === "sum" || d.isSum ? b[m] = h : j === "intermediateSum" || d.isIntermediateSum ? b[m] = f : (h += j, f += j), k = Math.min(h, k), g = Math.max(h, g);
            w.prototype.processData.call(this, a);
            this.dataMin = k;
            this.dataMax = g
        }, toYData: function (a) {
            if (a.isSum)return a.x === 0 ? null : "sum"; else if (a.isIntermediateSum)return a.x === 0 ? null : "intermediateSum";
            return a.y
        },
        getAttribs: function () {
            i.column.prototype.getAttribs.apply(this, arguments);
            var a = this, b = a.options, c = b.states, d = b.upColor || a.color, b = n.Color(d).brighten(0.1).get(), e = t(a.pointAttr), f = a.upColorProp;
            e[""][f] = d;
            e.hover[f] = c.hover.upColor || b;
            e.select[f] = c.select.upColor || d;
            s(a.points, function (f) {
                if (!f.options.color)f.y > 0 ? (f.pointAttr = e, f.color = d) : f.pointAttr = a.pointAttr
            })
        }, getGraphPath: function () {
            var a = this.data, b = a.length, c = E(this.options.lineWidth + this.borderWidth) % 2 / 2, d = [], e, f, h;
            for (h = 1; h < b; h++)f = a[h].shapeArgs,
                e = a[h - 1].shapeArgs, f = ["M", e.x + e.width, e.y + c, "L", f.x, e.y + c], a[h - 1].y < 0 && (f[2] += e.height, f[5] += e.height), d = d.concat(f);
            return d
        }, getExtremes: v, drawGraph: w.prototype.drawGraph
    });
    p.polygon = t(p.scatter, {marker: {enabled: !1}});
    i.polygon = u(i.scatter, {
        type: "polygon", fillGraph: !0, getSegmentPath: function (a) {
            return w.prototype.getSegmentPath.call(this, a).concat("z")
        }, drawGraph: w.prototype.drawGraph, drawLegendSymbol: n.LegendSymbolMixin.drawRectangle
    });
    p.bubble = t(p.scatter, {
        dataLabels: {
            formatter: function () {
                return this.point.z
            },
            inside: !0, verticalAlign: "middle"
        },
        marker: {lineColor: null, lineWidth: 1},
        minSize: 8,
        maxSize: "20%",
        softThreshold: !1,
        states: {hover: {halo: {size: 5}}},
        tooltip: {pointFormat: "({point.x}, {point.y}), Size: {point.z}"},
        turboThreshold: 0,
        zThreshold: 0,
        zoneAxis: "z"
    });
    A = u(J, {
        haloPath: function () {
            return J.prototype.haloPath.call(this, this.shapeArgs.r + this.series.options.states.hover.halo.size)
        }, ttBelow: !1
    });
    i.bubble = u(i.scatter, {
        type: "bubble",
        pointClass: A,
        pointArrayMap: ["y", "z"],
        parallelArrays: ["x", "y", "z"],
        trackerGroups: ["group",
            "dataLabelsGroup"],
        bubblePadding: !0,
        zoneAxis: "z",
        pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor"},
        applyOpacity: function (a) {
            var b = this.options.marker, c = o(b.fillOpacity, 0.5), a = a || b.fillColor || this.color;
            c !== 1 && (a = V(a).setOpacity(c).get("rgba"));
            return a
        },
        convertAttribs: function () {
            var a = w.prototype.convertAttribs.apply(this, arguments);
            a.fill = this.applyOpacity(a.fill);
            return a
        },
        getRadii: function (a, b, c, d) {
            var e, f, h, k = this.zData, g = [], j = this.options, m = j.sizeBy !== "width",
                l = j.zThreshold, i = b - a;
            for (f = 0, e = k.length; f < e; f++)h = k[f], j.sizeByAbsoluteValue && (h = Math.abs(h - l), b = Math.max(b - l, Math.abs(a - l)), a = 0), h === null ? h = null : h < a ? h = c / 2 - 1 : (h = i > 0 ? (h - a) / i : 0.5, m && h >= 0 && (h = Math.sqrt(h)), h = y.ceil(c + h * (d - c)) / 2), g.push(h);
            this.radii = g
        },
        animate: function (a) {
            var b = this.options.animation;
            if (!a)s(this.points, function (a) {
                var d = a.graphic, a = a.shapeArgs;
                d && a && (d.attr("r", 1), d.animate({r: a.r}, b))
            }), this.animate = null
        },
        translate: function () {
            var a, b = this.data, c, d, e = this.radii;
            i.scatter.prototype.translate.call(this);
            for (a = b.length; a--;)c = b[a], d = e ? e[a] : 0, typeof d === "number" && d >= this.minPxSize / 2 ? (c.shapeType = "circle", c.shapeArgs = {
                x: c.plotX,
                y: c.plotY,
                r: d
            }, c.dlBox = {
                x: c.plotX - d,
                y: c.plotY - d,
                width: 2 * d,
                height: 2 * d
            }) : c.shapeArgs = c.plotY = c.dlBox = G
        },
        drawLegendSymbol: function (a, b) {
            var c = B(a.itemStyle.fontSize) / 2;
            b.legendSymbol = this.chart.renderer.circle(c, a.baseline - c, c).attr({zIndex: 3}).add(b.legendGroup);
            b.legendSymbol.isMarker = !0
        },
        drawPoints: i.column.prototype.drawPoints,
        alignDataLabel: i.column.prototype.alignDataLabel,
        buildKDTree: v,
        applyZones: v
    });
    N.prototype.beforePadding = function () {
        var a = this, b = this.len, c = this.chart, d = 0, e = b, f = this.isXAxis, h = f ? "xData" : "yData", k = this.min, g = {}, j = y.min(c.plotWidth, c.plotHeight), m = Number.MAX_VALUE, l = -Number.MAX_VALUE, i = this.max - k, x = b / i, n = [];
        s(this.series, function (b) {
            var h = b.options;
            if (b.bubblePadding && (b.visible || !c.options.chart.ignoreHiddenSeries))if (a.allowZoomOutside = !0, n.push(b), f)s(["minSize", "maxSize"], function (a) {
                var b = h[a], f = /%$/.test(b), b = B(b);
                g[a] = f ? j * b / 100 : b
            }), b.minPxSize =
                g.minSize, b.maxPxSize = g.maxSize, b = b.zData, b.length && (m = o(h.zMin, y.min(m, y.max(Q(b), h.displayNegative === !1 ? h.zThreshold : -Number.MAX_VALUE))), l = o(h.zMax, y.max(l, R(b))))
        });
        s(n, function (a) {
            var b = a[h], c = b.length, g;
            f && a.getRadii(m, l, a.minPxSize, a.maxPxSize);
            if (i > 0)for (; c--;)typeof b[c] === "number" && (g = a.radii[c], d = Math.min((b[c] - k) * x - g, d), e = Math.max((b[c] - k) * x + g, e))
        });
        n.length && i > 0 && !this.isLog && (e -= b, x *= (b + d - e) / b, s([["min", "userMin", d], ["max", "userMax", e]], function (b) {
            o(a.options[b[0]], a[b[1]]) === G && (a[b[0]] +=
                b[2] / x)
        }))
    };
    (function () {
        function a(a, b, c) {
            a.call(this, b, c);
            if (this.chart.polar)this.closeSegment = function (a) {
                var b = this.xAxis.center;
                a.push("L", b[0], b[1])
            }, this.closedStacks = !0
        }

        function b(a, b) {
            var c = this.chart, g = this.options.animation, d = this.group, e = this.markerGroup, l = this.xAxis.center, i = c.plotLeft, n = c.plotTop;
            if (c.polar) {
                if (c.renderer.isSVG)g === !0 && (g = {}), b ? (c = {
                    translateX: l[0] + i,
                    translateY: l[1] + n,
                    scaleX: 0.001,
                    scaleY: 0.001
                }, d.attr(c), e && e.attr(c)) : (c = {translateX: i, translateY: n, scaleX: 1, scaleY: 1},
                    d.animate(c, g), e && e.animate(c, g), this.animate = null)
            } else a.call(this, b)
        }

        var c = w.prototype, d = T.prototype, e;
        c.searchPointByAngle = function (a) {
            var b = this.chart, c = this.xAxis.pane.center;
            return this.searchKDTree({clientX: 180 + Math.atan2(a.chartX - c[0] - b.plotLeft, a.chartY - c[1] - b.plotTop) * (-180 / Math.PI)})
        };
        r(c, "buildKDTree", function (a) {
            if (this.chart.polar)this.kdByAngle ? this.searchPoint = this.searchPointByAngle : this.kdDimensions = 2;
            a.apply(this)
        });
        c.toXY = function (a) {
            var b, c = this.chart, g = a.plotX;
            b = a.plotY;
            a.rectPlotX =
                g;
            a.rectPlotY = b;
            b = this.xAxis.postTranslate(a.plotX, this.yAxis.len - b);
            a.plotX = a.polarPlotX = b.x - c.plotLeft;
            a.plotY = a.polarPlotY = b.y - c.plotTop;
            this.kdByAngle ? (c = (g / Math.PI * 180 + this.xAxis.pane.options.startAngle) % 360, c < 0 && (c += 360), a.clientX = c) : a.clientX = a.plotX
        };
        i.area && r(i.area.prototype, "init", a);
        i.areaspline && r(i.areaspline.prototype, "init", a);
        i.spline && r(i.spline.prototype, "getPointSpline", function (a, b, c, g) {
            var d, e, l, i, n, p, o;
            if (this.chart.polar) {
                d = c.plotX;
                e = c.plotY;
                a = b[g - 1];
                l = b[g + 1];
                this.connectEnds &&
                (a || (a = b[b.length - 2]), l || (l = b[1]));
                if (a && l)i = a.plotX, n = a.plotY, b = l.plotX, p = l.plotY, i = (1.5 * d + i) / 2.5, n = (1.5 * e + n) / 2.5, l = (1.5 * d + b) / 2.5, o = (1.5 * e + p) / 2.5, b = Math.sqrt(Math.pow(i - d, 2) + Math.pow(n - e, 2)), p = Math.sqrt(Math.pow(l - d, 2) + Math.pow(o - e, 2)), i = Math.atan2(n - e, i - d), n = Math.atan2(o - e, l - d), o = Math.PI / 2 + (i + n) / 2, Math.abs(i - o) > Math.PI / 2 && (o -= Math.PI), i = d + Math.cos(o) * b, n = e + Math.sin(o) * b, l = d + Math.cos(Math.PI + o) * p, o = e + Math.sin(Math.PI + o) * p, c.rightContX = l, c.rightContY = o;
                g ? (c = ["C", a.rightContX || a.plotX, a.rightContY ||
                a.plotY, i || d, n || e, d, e], a.rightContX = a.rightContY = null) : c = ["M", d, e]
            } else c = a.call(this, b, c, g);
            return c
        });
        r(c, "translate", function (a) {
            var b = this.chart;
            a.call(this);
            if (b.polar && (this.kdByAngle = b.tooltip && b.tooltip.shared, !this.preventPostTranslate)) {
                a = this.points;
                for (b = a.length; b--;)this.toXY(a[b])
            }
        });
        r(c, "getSegmentPath", function (a, b) {
            var c = this.points;
            if (this.chart.polar && this.options.connectEnds !== !1 && b[b.length - 1] === c[c.length - 1] && c[0].y !== null)this.connectEnds = !0, b = [].concat(b, [c[0]]);
            return a.call(this,
                b)
        });
        r(c, "animate", b);
        if (i.column)e = i.column.prototype, r(e, "animate", b), r(e, "translate", function (a) {
            var b = this.xAxis, c = this.yAxis.len, d = b.center, e = b.startAngleRad, i = this.chart.renderer, l, n;
            this.preventPostTranslate = !0;
            a.call(this);
            if (b.isRadial) {
                b = this.points;
                for (n = b.length; n--;)l = b[n], a = l.barX + e, l.shapeType = "path", l.shapeArgs = {
                    d: i.symbols.arc(d[0], d[1], c - l.plotY, null, {
                        start: a,
                        end: a + l.pointWidth,
                        innerR: c - o(l.yBottom, c)
                    })
                }, this.toXY(l), l.tooltipPos = [l.plotX, l.plotY], l.ttBelow = l.plotY > d[1]
            }
        }), r(e, "alignDataLabel",
            function (a, b, d, e, j, i) {
                if (this.chart.polar) {
                    a = b.rectPlotX / Math.PI * 180;
                    if (e.align === null)e.align = a > 20 && a < 160 ? "left" : a > 200 && a < 340 ? "right" : "center";
                    if (e.verticalAlign === null)e.verticalAlign = a < 45 || a > 315 ? "bottom" : a > 135 && a < 225 ? "top" : "middle";
                    c.alignDataLabel.call(this, b, d, e, j, i)
                } else a.call(this, b, d, e, j, i)
            });
        r(d, "getCoordinates", function (a, b) {
            var c = this.chart, d = {xAxis: [], yAxis: []};
            c.polar ? s(c.axes, function (a) {
                var e = a.isXAxis, f = a.center, i = b.chartX - f[0] - c.plotLeft, f = b.chartY - f[1] - c.plotTop;
                d[e ? "xAxis" : "yAxis"].push({
                    axis: a,
                    value: a.translate(e ? Math.PI - Math.atan2(i, f) : Math.sqrt(Math.pow(i, 2) + Math.pow(f, 2)), !0)
                })
            }) : d = a.call(this, b);
            return d
        })
    })()
})(Highcharts);
/**
 * Created by crispin on 12/10/2015.
 */
//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            global.moment = factory()
}(this, function () {
    'use strict';

    var hookCallback;

    function utils_hooks__hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid(flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = getParsingFlags(from);
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function Locale() {
    }

    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && typeof module !== 'undefined' &&
            module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) {
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (typeof values === 'undefined') {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, values) {
        if (values !== null) {
            values.abbr = name;
            locales[name] = locales[name] || new Locale();
            locales[name].set(values);

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    // returns locale data
    function locale_locales__getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function get_set__set(mom, unit, value) {
        return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }

    // MOMENTS

    function getSet(units, value) {
        var unit;
        if (typeof units === 'object') {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1 = /\d/;            //       0 - 9
    var match2 = /\d\d/;          //      00 - 99
    var match3 = /\d{3}/;         //     000 - 999
    var match4 = /\d{4}/;         //    0000 - 9999
    var match6 = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2 = /\d\d?/;         //       0 - 99
    var match1to3 = /\d{1,3}/;       //       0 - 999
    var match1to4 = /\d{1,4}/;       //       0 - 9999
    var match1to6 = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned = /\d+/;           //       0 - inf
    var matchSigned = /[+-]?\d+/;      //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

    var regexes = {};

    function isFunction(sth) {
        // https://github.com/moment/moment/issues/2325
        return typeof sth === 'function' &&
            Object.prototype.toString.call(sth) === '[object Function]';
    }


    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', matchWord);
    addRegexToken('MMMM', matchWord);

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

    function localeMonths(m) {
        return this._months[m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

    function localeMonthsShort(m) {
        return this._monthsShort[m.month()];
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function checkOverflow(m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                    a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                        a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                            a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                                a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                                    a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                                        -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (firstTime) {
                warn(msg + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;

    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
        ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
        ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d{2}/],
        ['YYYY-DDD', /\d{4}-\d{3}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
        ['HH:mm', /(T| )\d\d:\d\d/],
        ['HH', /(T| )\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = from_string__isoRegex.exec(string);

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    config._f = isoDates[i][0];
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    // match[6] should be 'T' or space
                    config._f += (match[6] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (string.match(matchOffset)) {
                config._f += 'Z';
            }
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', false);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var week1Jan = 6 + firstDayOfWeek - firstDayOfWeekOfYear, janX = createUTCDate(year, 0, 1 + week1Jan), d = janX.getUTCDay(), dayOfYear;
        if (d < firstDayOfWeek) {
            d += 7;
        }

        weekday = weekday != null ? 1 * weekday : firstDayOfWeek;

        dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
        }
        return [now.getFullYear(), now.getMonth(), now.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    utils_hooks__hooks.ISO_8601 = function () {
    };

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
            config._a[HOUR] <= 12 &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            return other < this ? this : other;
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            return other > this ? this : other;
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchOffset);
    addRegexToken('ZZ', matchOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(string) {
        var matches = ((string || '').match(matchOffset) || []);
        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {
    };

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(input);
            }
            if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(this._i));
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (typeof this._isDSTShifted !== 'undefined') {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return !this._isUTC;
    }

    function isUtcOffset() {
        return this._isUTC;
    }

    function isUtc() {
        return this._isUTC && this._offset === 0;
    }

    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

    function create__createDuration(input, key) {
        var duration = input,
        // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = create__isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                d: parseIso(match[4], sign),
                h: parseIso(match[5], sign),
                m: parseIso(match[6], sign),
                s: parseIso(match[7], sign),
                w: parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val;
                val = period;
                period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                        diff < 1 ? 'sameDay' :
                            diff < 2 ? 'nextDay' :
                                diff < 7 ? 'nextWeek' : 'sameElse';
        return this.format(formats && formats[format] || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this > +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return inputMs < +this.clone().startOf(units);
        }
    }

    function isBefore(input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this < +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return +this.clone().endOf(units) < inputMs;
        }
    }

    function isBetween(from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }

    function isSame(input, units) {
        var inputMs;
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this === +input;
        } else {
            inputMs = +local__createLocal(input);
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
        }
    }

    function diff(input, units, asFloat) {
        var that = cloneWithOffset(input, this),
            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,
            delta, output;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                    units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                        units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString() {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if ('function' === typeof Date.prototype.toISOString) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format(inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function fromNow(withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function toNow(withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    function startOf(units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
            /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
            /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
            /* falls through */
            case 'hour':
                this.minutes(0);
            /* falls through */
            case 'minute':
                this.seconds(0);
            /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf(units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf() {
        return +this._d - ((this._offset || 0) * 60000);
    }

    function unix() {
        return Math.floor(+this / 1000);
    }

    function toDate() {
        return this._offset ? new Date(+this) : this._d;
    }

    function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function moment_valid__isValid() {
        return valid__isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function weeksInYear(year, dow, doy) {
        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    // MOMENTS

    function getSetWeekYear(input) {
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getSetISOWeekYear(input) {
        var year = weekOfYear(this, 1, 4).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    addFormatToken('Q', 0, 0, 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', matchWord);
    addRegexToken('ddd', matchWord);
    addRegexToken('dddd', matchWord);

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {
        var weekday = config._locale.weekdaysParse(input);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

    function localeWeekdays(m) {
        return this._weekdays[m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

    function localeWeekdaysShort(m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

    function localeWeekdaysMin(m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse(weekdayName) {
        var i, mom, regex;

        this._weekdaysParse = this._weekdaysParse || [];

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            if (!this._weekdaysParse[i]) {
                mom = local__createLocal([2000, 1]).day(i);
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, function () {
        return this.hours() % 12 || 12;
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add = add_subtract__add;
    momentPrototype__proto.calendar = moment_calendar__calendar;
    momentPrototype__proto.clone = clone;
    momentPrototype__proto.diff = diff;
    momentPrototype__proto.endOf = endOf;
    momentPrototype__proto.format = format;
    momentPrototype__proto.from = from;
    momentPrototype__proto.fromNow = fromNow;
    momentPrototype__proto.to = to;
    momentPrototype__proto.toNow = toNow;
    momentPrototype__proto.get = getSet;
    momentPrototype__proto.invalidAt = invalidAt;
    momentPrototype__proto.isAfter = isAfter;
    momentPrototype__proto.isBefore = isBefore;
    momentPrototype__proto.isBetween = isBetween;
    momentPrototype__proto.isSame = isSame;
    momentPrototype__proto.isValid = moment_valid__isValid;
    momentPrototype__proto.lang = lang;
    momentPrototype__proto.locale = locale;
    momentPrototype__proto.localeData = localeData;
    momentPrototype__proto.max = prototypeMax;
    momentPrototype__proto.min = prototypeMin;
    momentPrototype__proto.parsingFlags = parsingFlags;
    momentPrototype__proto.set = getSet;
    momentPrototype__proto.startOf = startOf;
    momentPrototype__proto.subtract = add_subtract__subtract;
    momentPrototype__proto.toArray = toArray;
    momentPrototype__proto.toObject = toObject;
    momentPrototype__proto.toDate = toDate;
    momentPrototype__proto.toISOString = moment_format__toISOString;
    momentPrototype__proto.toJSON = moment_format__toISOString;
    momentPrototype__proto.toString = toString;
    momentPrototype__proto.unix = unix;
    momentPrototype__proto.valueOf = to_type__valueOf;

    // Year
    momentPrototype__proto.year = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
    momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;
    momentPrototype__proto.weeksInYear = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date = getSetDayOfMonth;
    momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
    momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset = getSetOffset;
    momentPrototype__proto.utc = setOffsetToUTC;
    momentPrototype__proto.local = setOffsetToLocal;
    momentPrototype__proto.parseZone = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal = isLocal;
    momentPrototype__proto.isUtcOffset = isUtcOffset;
    momentPrototype__proto.isUtc = isUtc;
    momentPrototype__proto.isUTC = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix(input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone() {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };

    function locale_calendar__calendar(key, mom, now) {
        var output = this._calendar[key];
        return typeof output === 'function' ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat(string) {
        return string;
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };

    function relative__relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (typeof output === 'function') ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
    }

    function locale_set__set(config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (typeof prop === 'function') {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar = defaultCalendar;
    prototype__proto.calendar = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat = longDateFormat;
    prototype__proto._invalidDate = defaultInvalidDate;
    prototype__proto.invalidDate = invalidDate;
    prototype__proto._ordinal = defaultOrdinal;
    prototype__proto.ordinal = ordinal;
    prototype__proto._ordinalParse = defaultOrdinalParse;
    prototype__proto.preparse = preParsePostFormat;
    prototype__proto.postformat = preParsePostFormat;
    prototype__proto._relativeTime = defaultRelativeTime;
    prototype__proto.relativeTime = relative__relativeTime;
    prototype__proto.pastFuture = pastFuture;
    prototype__proto.set = locale_set__set;

    // Month
    prototype__proto.months = localeMonths;
    prototype__proto._months = defaultLocaleMonths;
    prototype__proto.monthsShort = localeMonthsShort;
    prototype__proto._monthsShort = defaultLocaleMonthsShort;
    prototype__proto.monthsParse = localeMonthsParse;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays = localeWeekdays;
    prototype__proto._weekdays = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin = localeWeekdaysMin;
    prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort = localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse = localeWeekdaysParse;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get(format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function list(format, index, field, count, setter) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, setter);
        }

        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }

    function lists__listMonths(format, index) {
        return list(format, index, 'months', 12, 'month');
    }

    function lists__listMonthsShort(format, index) {
        return list(format, index, 'monthsShort', 12, 'month');
    }

    function lists__listWeekdays(format, index) {
        return list(format, index, 'weekdays', 7, 'day');
    }

    function lists__listWeekdaysShort(format, index) {
        return list(format, index, 'weekdaysShort', 7, 'day');
    }

    function lists__listWeekdaysMin(format, index) {
        return list(format, index, 'weekdaysMin', 7, 'day');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                    (b === 1) ? 'st' :
                        (b === 2) ? 'nd' :
                            (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract(duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add(input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract(input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as(units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   :
                    return days / 7 + milliseconds / 6048e5;
                case 'day'    :
                    return days + milliseconds / 864e5;
                case 'hour'   :
                    return days * 24 + milliseconds / 36e5;
                case 'minute' :
                    return days * 1440 + milliseconds / 6e4;
                case 'second' :
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf() {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asYears = makeAs('y');

    function duration_get__get(units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds] ||
            minutes === 1 && ['m'] ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours === 1 && ['h'] ||
            hours < thresholds.h && ['hh', hours] ||
            days === 1 && ['d'] ||
            days < thresholds.d && ['dd', days] ||
            months === 1 && ['M'] ||
            months < thresholds.M && ['MM', months] ||
            years === 1 && ['y'] || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize(withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days = iso_string__abs(this._days);
        var months = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs = duration_abs__abs;
    duration_prototype__proto.add = duration_add_subtract__add;
    duration_prototype__proto.subtract = duration_add_subtract__subtract;
    duration_prototype__proto.as = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds = asSeconds;
    duration_prototype__proto.asMinutes = asMinutes;
    duration_prototype__proto.asHours = asHours;
    duration_prototype__proto.asDays = asDays;
    duration_prototype__proto.asWeeks = asWeeks;
    duration_prototype__proto.asMonths = asMonths;
    duration_prototype__proto.asYears = asYears;
    duration_prototype__proto.valueOf = duration_as__valueOf;
    duration_prototype__proto._bubble = bubble;
    duration_prototype__proto.get = duration_get__get;
    duration_prototype__proto.milliseconds = milliseconds;
    duration_prototype__proto.seconds = seconds;
    duration_prototype__proto.minutes = minutes;
    duration_prototype__proto.hours = hours;
    duration_prototype__proto.days = days;
    duration_prototype__proto.weeks = weeks;
    duration_prototype__proto.months = months;
    duration_prototype__proto.years = years;
    duration_prototype__proto.humanize = humanize;
    duration_prototype__proto.toISOString = iso_string__toISOString;
    duration_prototype__proto.toString = iso_string__toISOString;
    duration_prototype__proto.toJSON = iso_string__toISOString;
    duration_prototype__proto.locale = locale;
    duration_prototype__proto.localeData = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.10.6';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn = momentPrototype;
    utils_hooks__hooks.min = min;
    utils_hooks__hooks.max = max;
    utils_hooks__hooks.utc = create_utc__createUTC;
    utils_hooks__hooks.unix = moment__createUnix;
    utils_hooks__hooks.months = lists__listMonths;
    utils_hooks__hooks.isDate = isDate;
    utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid = valid__createInvalid;
    utils_hooks__hooks.duration = create__createDuration;
    utils_hooks__hooks.isMoment = isMoment;
    utils_hooks__hooks.weekdays = lists__listWeekdays;
    utils_hooks__hooks.parseZone = moment__createInZone;
    utils_hooks__hooks.localeData = locale_locales__getLocale;
    utils_hooks__hooks.isDuration = isDuration;
    utils_hooks__hooks.monthsShort = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale = defineLocale;
    utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // AFFIX CLASS DEFINITION
    // ======================

    var Affix = function (element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)

        this.$target = $(this.options.target)
            .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
            .on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))

        this.$element = $(element)
        this.affixed = null
        this.unpin = null
        this.pinnedOffset = null

        this.checkPosition()
    }

    Affix.VERSION = '3.3.5'

    Affix.RESET = 'affix affix-top affix-bottom'

    Affix.DEFAULTS = {
        offset: 0,
        target: window
    }

    Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        var targetHeight = this.$target.height()

        if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

        if (this.affixed == 'bottom') {
            if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
            return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
        }

        var initializing = this.affixed == null
        var colliderTop = initializing ? scrollTop : position.top
        var colliderHeight = initializing ? targetHeight : height

        if (offsetTop != null && scrollTop <= offsetTop) return 'top'
        if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

        return false
    }

    Affix.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset
        this.$element.removeClass(Affix.RESET).addClass('affix')
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        return (this.pinnedOffset = position.top - scrollTop)
    }

    Affix.prototype.checkPositionWithEventLoop = function () {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }

    Affix.prototype.checkPosition = function () {
        if (!this.$element.is(':visible')) return

        var height = this.$element.height()
        var offset = this.options.offset
        var offsetTop = offset.top
        var offsetBottom = offset.bottom
        var scrollHeight = Math.max($(document).height(), $(document.body).height())

        if (typeof offset != 'object')         offsetBottom = offsetTop = offset
        if (typeof offsetTop == 'function')    offsetTop = offset.top(this.$element)
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css('top', '')

            var affixType = 'affix' + (affix ? '-' + affix : '')
            var e = $.Event(affixType + '.bs.affix')

            this.$element.trigger(e)

            if (e.isDefaultPrevented()) return

            this.affixed = affix
            this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

            this.$element
                .removeClass(Affix.RESET)
                .addClass(affixType)
                .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
        }

        if (affix == 'bottom') {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            })
        }
    }


    // AFFIX PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.affix')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.affix

    $.fn.affix = Plugin
    $.fn.affix.Constructor = Affix


    // AFFIX NO CONFLICT
    // =================

    $.fn.affix.noConflict = function () {
        $.fn.affix = old
        return this
    }


    // AFFIX DATA-API
    // ==============

    $(window).on('load', function () {
        $('[data-spy="affix"]').each(function () {
            var $spy = $(this)
            var data = $spy.data()

            data.offset = data.offset || {}

            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
            if (data.offsetTop != null) data.offset.top = data.offsetTop

            Plugin.call($spy, data)
        })
    })

}(jQuery);
/* Credit to Cameron Daigle for jquery-minical date picker - http://camerond.github.io/jquery-minical/ */

var date_tools, minical, templates;

date_tools = {
    getMonthName: function (date) {
        var months;
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[date.getMonth()];
    },
    getDayClass: function (date) {
        if (!date) {
            return;
        }
        return "minical_day_" + [date.getDate(), date.getMonth() + 1, date.getFullYear()].join("_");
    },
    getStartOfCalendarBlock: function (date) {
        var firstOfMonth;
        firstOfMonth = new Date(date);
        firstOfMonth.setDate(1);
        return new Date(firstOfMonth.setDate(1 - firstOfMonth.getDay()));
    }
};

templates = {
    clear_link: function () {
        return $("<div />", {
            "class": "minical_clear"
        }).append($("<a />", {
            href: "#",
            text: "Clear date"
        }));
    },
    day: function (date) {
        return $("<td />").data("minical_date", new Date(date)).addClass(date_tools.getDayClass(date)).append($("<a />", {
            "href": "#"
        }).text(date.getDate()));
    },
    dayHeader: function () {
        var $tr, day, days, i, len;
        days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        $tr = $("<tr />");
        for (i = 0, len = days.length; i < len; i++) {
            day = days[i];
            $("<th />").text(day).appendTo($tr);
        }
        return $tr;
    },
    month: function (date) {
        var $li;
        $li = $("<li />", {
            "class": "minical_" + (date_tools.getMonthName(date).toLowerCase())
        });
        $li.html("<article> <header> <h5>" + (date_tools.getMonthName(date)) + " " + (date.getFullYear()) + "</h5> <a href='#' class='minical_prev'></a> <a href='#' class='minical_next'></a> </header> <section> <table> <thead> <tr> </tr> </thead> <tbody> </tbody> </table> </section> </article>");
        $li.find('thead').append(this.dayHeader());
        return $li;
    }
};

minical = {
    offset: {
        x: 0,
        y: 5
    },
    inline: false,
    trigger: null,
    align_to_trigger: true,
    initialize_with_date: false,
    move_on_resize: true,
    read_only: true,
    show_clear_link: false,
    add_timezone_offset: false,
    appendCalendarTo: function () {
        return $('body');
    },
    date_format: function (date) {
        return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join("/");
    },
    from: null,
    to: null,
    date_changed: $.noop,
    month_drawn: $.noop,
    fireCallback: function (name) {
        return this[name] && this[name].apply(this.$el);
    },
    buildCalendarContainer: function () {
        var $cal;
        $cal = $("<ul />", {
            id: "minical_calendar_" + this.id,
            "class": "minical"
        }).data("minical", this);
        if (this.inline) {
            return $cal.addClass('minical-inline').insertAfter(this.$el);
        } else {
            return $cal.appendTo(this.appendCalendarTo.apply(this.$el));
        }
    },
    render: function (date) {
        var $li, $tr, current_date, d, i, j, w;
        if (date == null) {
            date = this.selected_day;
        }
        $li = templates.month(date);
        if (this.show_clear_link || !this.initialize_with_date) {
            templates.clear_link().insertAfter($li.find("table"));
        }
        current_date = date_tools.getStartOfCalendarBlock(date);
        if (this.from && this.from > current_date) {
            $li.find(".minical_prev").detach();
        }
        for (w = i = 1; i <= 6; w = ++i) {
            $tr = $("<tr />");
            for (d = j = 1; j <= 7; d = ++j) {
                $tr.append(this.renderDay(current_date, date));
                current_date.setDate(current_date.getDate() + 1);
            }
            if ($tr.find('.minical_day').length) {
                $tr.appendTo($li.find('tbody'));
            }
        }
        $li.find("." + (date_tools.getDayClass(new Date()))).addClass("minical_today");
        if (this.to && this.to <= new Date($li.find("td").last().data("minical_date"))) {
            $li.find(".minical_next").detach();
        }
        this.$cal.empty().append($li);
        this.markSelectedDay();
        this.fireCallback('month_drawn');
        return this.$cal;
    },
    renderDay: function (d, base_date) {
        var $td, current_month, month;
        $td = templates.day(d);
        current_month = d.getMonth();
        month = base_date.getMonth();
        if ((this.from && d < this.from) || (this.to && d > this.to)) {
            $td.addClass("minical_disabled");
        }
        if (current_month > month || current_month === 0 && month === 11) {
            return $td.addClass("minical_future_month");
        } else if (current_month < month) {
            return $td.addClass("minical_past_month");
        } else {
            return $td.addClass("minical_day");
        }
    },
    highlightDay: function (date) {
        var $td, klass;
        $td = this.$cal.find("." + (date_tools.getDayClass(date)));
        if ($td.hasClass("minical_disabled")) {
            return;
        }
        if (this.to && date > this.to) {
            return;
        }
        if (this.from && date < this.from) {
            return;
        }
        if (!$td.length) {
            this.render(date);
            this.highlightDay(date);
            return;
        }
        klass = "minical_highlighted";
        this.$cal.find("." + klass).removeClass(klass);
        return $td.addClass(klass);
    },
    selectDay: function (date, external) {
        var event_name;
        event_name = external ? 'change.minical_external' : 'change.minical';
        this.selected_day = date;
        this.markSelectedDay();
        this.$el.val(date ? this.date_format(this.selected_day) : '').trigger(event_name);
        return this.fireCallback('date_changed');
    },
    markSelectedDay: function () {
        var klass;
        klass = 'minical_selected';
        this.$cal.find('td').removeClass(klass);
        return this.$cal.find("." + (date_tools.getDayClass(this.selected_day))).addClass(klass);
    },
    moveToDay: function (x, y) {
        var $selected, move_from, move_to;
        $selected = this.$cal.find(".minical_highlighted");
        if (!$selected.length) {
            $selected = this.$cal.find(".minical_day").eq(0);
        }
        move_from = $selected.data("minical_date");
        move_to = new Date(move_from);
        move_to.setDate(move_from.getDate() + x + y * 7);
        this.highlightDay(move_to);
        return false;
    },
    positionCalendar: function () {
        var height, offset, overlap, position;
        if (this.inline) {
            return this.$cal;
        }
        offset = this.align_to_trigger ? this.$trigger[this.offset_method]() : this.$el[this.offset_method]();
        height = this.align_to_trigger ? this.$trigger.outerHeight() : this.$el.outerHeight();
        position = {
            left: (offset.left + this.offset.x) + "px",
            top: (height + offset.top + this.offset.y) + "px"
        };
        this.$cal.css(position);
        overlap = this.$cal.width() + this.$cal[this.offset_method]().left - $(window).width();
        if (overlap > 0) {
            this.$cal.css("left", offset.left - overlap - 10);
        }
        return this.$cal;
    },
    clickDay: function (e) {
        var $td;
        $td = $(e.target).closest('td');
        if ($td.hasClass("minical_disabled")) {
            return false;
        }
        //console.log("ClickDay = " + $td);
        this.selectDay($td.data('minical_date'));
        this.$cal.trigger('hide.minical');
        return false;
    },
    hoverDay: function (e) {
        return this.highlightDay($(e.target).closest("td").data('minical_date'));
    },
    hoverOutDay: function (e) {
        return this.$cal.find('.minical_highlighted').removeClass('minical_highlighted');
    },
    nextMonth: function (e) {
        var next;
        next = new Date(this.$cal.find(".minical_day").eq(0).data("minical_date"));
        next.setMonth(next.getMonth() + 1);
        this.render(next);
        return false;
    },
    prevMonth: function (e) {
        var prev;
        prev = new Date(this.$cal.find(".minical_day").eq(0).data("minical_date"));
        prev.setMonth(prev.getMonth() - 1);
        this.render(prev);
        return false;
    },
    showCalendar: function (e) {
        $(".minical").not(this.$cal).trigger('hide.minical');
        if (this.$cal.is(":visible") || this.$el.is(":disabled")) {
            return;
        }
        this.highlightDay(this.selected_day || this.detectInitialDate());
        this.positionCalendar().show();
        this.attachCalendarEvents();
        return e && e.preventDefault();
    },
    hideCalendar: function (e) {
        if (this.inline) {
            return;
        }
        this.$cal.hide();
        this.detachCalendarEvents();
        return false;
    },
    attachCalendarEvents: function () {
        if (this.inline) {
            return;
        }
        this.detachCalendarEvents();
        $(document).on("keydown.minical_" + this.id, $.proxy(this.keydown, this)).on("click.minical_" + this.id + " touchend.minical_" + this.id, $.proxy(this.outsideClick, this));
        if (this.move_on_resize) {
            return $(window).on("resize.minical_" + this.id, $.proxy(this.positionCalendar, this));
        }
    },
    detachCalendarEvents: function () {
        $(document).off("keydown.minical_" + this.id).off("click.minical_" + this.id + " touchend.minical_" + this.id);
        return $(window).off("resize.minical_" + this.id);
    },
    keydown: function (e) {
        var key, keys, mc;
        key = e.which;
        mc = this;
        keys = {
            9: function () {
                return true;
            },
            13: function () {
                mc.$cal.find(".minical_highlighted a").click();
                return false;
            },
            27: function () {
                return mc.hideCalendar();
            }, //Added esc key closing dialogue box
            37: function () {
                return mc.moveToDay(-1, 0);
            },
            38: function () {
                return mc.moveToDay(0, -1);
            },
            39: function () {
                return mc.moveToDay(1, 0);
            },
            40: function () {
                return mc.moveToDay(0, 1);
            }
        };
        this.checkToHideCalendar();
        if (keys[key]) {
            return keys[key]();
        } else if (!e.metaKey && !e.ctrlKey) {
            return !mc.read_only;
        }
    },
    outsideClick: function (e) {
        var $t;
        $t = $(e.target);
        this.$last_clicked = $t;
        if ($t.parent().is(".minical_clear")) {
            this.$el.minical('clear');
            return false;
        }
        if ($t.is(this.$el) || $t.is(this.$trigger) || $t.closest(".minical").length) {
            return true;
        }
        return this.$cal.trigger('hide.minical');
    },
    checkToHideCalendar: function () {
        var mc;
        mc = this;
        return setTimeout(function () {
            if (!mc.$el.add(mc.$trigger).is(":focus")) {
                return mc.$cal.trigger("hide.minical");
            }
        }, 50);
    },
    initTrigger: function () {
        if ($.isFunction(this.trigger)) {
            this.$trigger = $.proxy(this.trigger, this.$el)();
        } else {
            this.$trigger = this.$el.find(this.trigger);
            if (!this.$trigger.length) {
                this.$trigger = this.$el.parent().find(this.trigger);
            }
        }
        if (this.$trigger.length) {
            return this.$trigger.data("minical", this).on("focus.minical click.minical", (function (_this) {
                return function () {
                    return _this.$cal.trigger('show.minical');
                };
            })(this));
        } else {
            this.$trigger = $.noop;
            return this.align_to_trigger = false;
        }
    },
    detectDataAttributeOptions: function () {
        var attr, i, len, range, ref, results;
        ref = ['from', 'to'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
            range = ref[i];
            attr = this.$el.attr("data-minical-" + range);
            if (attr && /^\d+$/.test(attr)) {
                results.push(this[range] = new Date(+attr));
            } else {
                results.push(void 0);
            }
        }
        return results;
    },
    detectInitialDate: function () {
        var initial_date, millis;

        initial_date = this.$el.attr("data-minical-initial") || this.$el.val();

        //Date() defaults to MM/DD/YYYY, so if input has value on load we need to swap DD and MM to trick it into parsing in UK format
        if (this.$el.val()) {
            var input = this.$el.val();
            var initial_day = input.split('/')[0];
            var initial_month = input.split('/')[1];
            var initial_year = input.split('/')[2];
            initial_date = [initial_month, initial_day, initial_year].join('/');
        }

        millis = /^\d+$/.test(initial_date) ? initial_date : initial_date ? Date.parse(initial_date) : new Date().getTime();
        millis = parseInt(millis) + (this.add_timezone_offset ? new Date().getTimezoneOffset() * 60 * 1000 : 0);
        return new Date(millis);
    },
    external: {
        clear: function () {
            var mc;
            mc = this.data('minical');
            this.trigger('hide.minical');
            return mc.selectDay(false);
        },
        destroy: function () {
            var mc;
            mc = this.data('minical');
            this.trigger('hide.minical');
            mc.$cal.remove();
            return mc.$el.removeClass('minical_input').removeData('minical');
        },
        select: function (date) {
            return this.data('minical').selectDay(date, true);
        }
    },
    init: function () {
        var mc;
        this.id = $(".minical").length;
        mc = this;
        this.detectDataAttributeOptions();
        this.$cal = this.buildCalendarContainer();
        //If statement causes date to flip to american date format after form has been submitted. Plus, we already add date input input on load, so don't need plugin to do it too.
        if (!(!this.$el.val() && !this.initialize_with_date)) {
            this.selectDay(this.detectInitialDate());
        }
        this.offset_method = this.$cal.parent().is("body") ? "offset" : "position";
        this.initTrigger();
        this.$el.addClass("minical_input");
        this.$cal.on("click.minical", "td a", $.proxy(this.clickDay, this)).on("mouseenter.minical", "td a", $.proxy(this.hoverDay, this)).on("mouseleave.minical", $.proxy(this.hoverOutDay, this)).on("click.minical", "a.minical_next", $.proxy(this.nextMonth, this)).on("click.minical", "a.minical_prev", $.proxy(this.prevMonth, this));
        if (this.inline) {
            return this.showCalendar();
        } else {
            this.$el.on("focus.minical click.minical", (function (_this) {
                return function () {
                    return _this.$cal.trigger('show.minical');
                };
            })(this)).on("hide.minical", $.proxy(this.hideCalendar, this));
            return this.$cal.on("hide.minical", $.proxy(this.hideCalendar, this)).on("show.minical", $.proxy(this.showCalendar, this));
        }
    }
};

$.fn.minical = function (opts) {
    var $els;
    $els = this;

    //console.log(opts);

    if (opts && minical.external[opts]) {
        return minical.external[opts].apply($els, Array.prototype.slice.call(arguments, 1));
    } else {
        return $els.each(function () {
            var $e, mc;
            $e = $(this);
            mc = $.extend(true, {
                $el: $e
            }, minical, opts);
            $e.data("minical", mc);
            return mc.init();
        });
    }
};
/*! js-cookie v2.0.4 | MIT */
!function (a) {
    if ("function" == typeof define && define.amd)define(a); else if ("object" == typeof exports)module.exports = a(); else {
        var b = window.Cookies, c = window.Cookies = a();
        c.noConflict = function () {
            return window.Cookies = b, c
        }
    }
}(function () {
    function a() {
        for (var a = 0, b = {}; a < arguments.length; a++) {
            var c = arguments[a];
            for (var d in c)b[d] = c[d]
        }
        return b
    }

    function b(c) {
        function d(b, e, f) {
            var g;
            if (arguments.length > 1) {
                if (f = a({path: "/"}, d.defaults, f), "number" == typeof f.expires) {
                    var h = new Date;
                    h.setMilliseconds(h.getMilliseconds() + 864e5 * f.expires), f.expires = h
                }
                try {
                    g = JSON.stringify(e), /^[\{\[]/.test(g) && (e = g)
                } catch (i) {
                }
                return e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), b = encodeURIComponent(String(b)), b = b.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), b = b.replace(/[\(\)]/g, escape), document.cookie = [b, "=", e, f.expires && "; expires=" + f.expires.toUTCString(), f.path && "; path=" + f.path, f.domain && "; domain=" + f.domain, f.secure ? "; secure" : ""].join("")
            }
            b || (g = {});
            for (var j = document.cookie ? document.cookie.split("; ") : [], k = /(%[0-9A-Z]{2})+/g, l = 0; l < j.length; l++) {
                var m = j[l].split("="), n = m[0].replace(k, decodeURIComponent), o = m.slice(1).join("=");
                '"' === o.charAt(0) && (o = o.slice(1, -1));
                try {
                    if (o = c && c(o, n) || o.replace(k, decodeURIComponent), this.json)try {
                        o = JSON.parse(o)
                    } catch (i) {
                    }
                    if (b === n) {
                        g = o;
                        break
                    }
                    b || (g[n] = o)
                } catch (i) {
                }
            }
            return g
        }

        return d.get = d.set = d, d.getJSON = function () {
            return d.apply({json: !0}, [].slice.call(arguments))
        }, d.defaults = {}, d.remove = function (b, c) {
            d(b, "", a(c, {expires: -1}))
        }, d.withConverter = b, d
    }

    return b()
});
/*! pym.js - v0.4.4 - 2015-07-16 */
!function (a) {
    "function" == typeof define && define.amd ? define(a) : "undefined" != typeof module && module.exports ? module.exports = a() : window.pym = a.call(this)
}(function () {
    var a = "xPYMx", b = {}, c = function (a) {
        var b = new RegExp("[\\?&]" + a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)"), c = b.exec(location.search);
        return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
    }, d = function (a, b) {
        return "*" === b.xdomain || a.origin.match(new RegExp(b.xdomain + "$")) ? !0 : void 0
    }, e = function (b, c, d) {
        var e = ["pym", b, c, d];
        return e.join(a)
    }, f = function (b) {
        var c = ["pym", b, "(\\S+)", "(.+)"];
        return new RegExp("^" + c.join(a) + "$")
    }, g = function () {
        for (var a = document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"), c = a.length, d = 0; c > d; ++d) {
            var e = a[d];
            e.setAttribute("data-pym-auto-initialized", ""), "" === e.id && (e.id = "pym-" + d);
            var f = e.getAttribute("data-pym-src"), g = e.getAttribute("data-pym-xdomain"), h = {};
            g && (h.xdomain = g), new b.Parent(e.id, f, h)
        }
    };
    return b.Parent = function (a, b, c) {
        this.id = a, this.url = b, this.el = document.getElementById(a), this.iframe = null, this.settings = {xdomain: "*"}, this.messageRegex = f(this.id), this.messageHandlers = {}, c = c || {}, this._constructIframe = function () {
            var a = this.el.offsetWidth.toString();
            this.iframe = document.createElement("iframe");
            var b = "", c = this.url.indexOf("#");
            c > -1 && (b = this.url.substring(c, this.url.length), this.url = this.url.substring(0, c)), this.url.indexOf("?") < 0 ? this.url += "?" : this.url += "&", this.iframe.src = this.url + "initialWidth=" + a + "&childId=" + this.id + "&parentUrl=" + encodeURIComponent(window.location.href) + b, this.iframe.setAttribute("width", "100%"), this.iframe.setAttribute("scrolling", "no"), this.iframe.setAttribute("marginheight", "0"), this.iframe.setAttribute("frameborder", "0"), this.el.appendChild(this.iframe), window.addEventListener("resize", this._onResize)
        }, this._onResize = function () {
            this.sendWidth()
        }.bind(this), this._fire = function (a, b) {
            if (a in this.messageHandlers)for (var c = 0; c < this.messageHandlers[a].length; c++)this.messageHandlers[a][c].call(this, b)
        }, this.remove = function () {
            window.removeEventListener("message", this._processMessage), window.removeEventListener("resize", this._onResize), this.el.removeChild(this.iframe)
        }, this._processMessage = function (a) {
            if (d(a, this.settings) && "string" == typeof a.data) {
                var b = a.data.match(this.messageRegex);
                if (!b || 3 !== b.length)return !1;
                var c = b[1], e = b[2];
                this._fire(c, e)
            }
        }.bind(this), this._onHeightMessage = function (a) {
            var b = parseInt(a);
            this.iframe.setAttribute("height", b + "px")
        }, this._onNavigateToMessage = function (a) {
            document.location.href = a
        }, this.onMessage = function (a, b) {
            a in this.messageHandlers || (this.messageHandlers[a] = []), this.messageHandlers[a].push(b)
        }, this.sendMessage = function (a, b) {
            this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(e(this.id, a, b), "*")
        }, this.sendWidth = function () {
            var a = this.el.offsetWidth.toString();
            this.sendMessage("width", a)
        };
        for (var g in c)this.settings[g] = c[g];
        return this.onMessage("height", this._onHeightMessage), this.onMessage("navigateTo", this._onNavigateToMessage), window.addEventListener("message", this._processMessage, !1), this._constructIframe(), this
    }, b.Child = function (b) {
        this.parentWidth = null, this.id = null, this.parentUrl = null, this.settings = {
            renderCallback: null,
            xdomain: "*",
            polling: 0
        }, this.messageRegex = null, this.messageHandlers = {}, b = b || {}, this.onMessage = function (a, b) {
            a in this.messageHandlers || (this.messageHandlers[a] = []), this.messageHandlers[a].push(b)
        }, this._fire = function (a, b) {
            if (a in this.messageHandlers)for (var c = 0; c < this.messageHandlers[a].length; c++)this.messageHandlers[a][c].call(this, b)
        }, this._processMessage = function (a) {
            if (d(a, this.settings) && "string" == typeof a.data) {
                var b = a.data.match(this.messageRegex);
                if (b && 3 === b.length) {
                    var c = b[1], e = b[2];
                    this._fire(c, e)
                }
            }
        }.bind(this), this._onWidthMessage = function (a) {
            var b = parseInt(a);
            b !== this.parentWidth && (this.parentWidth = b, this.settings.renderCallback && this.settings.renderCallback(b), this.sendHeight())
        }, this.sendMessage = function (a, b) {
            window.parent.postMessage(e(this.id, a, b), "*")
        }, this.sendHeight = function () {
            var a = document.getElementsByTagName("body")[0].offsetHeight.toString();
            this.sendMessage("height", a)
        }.bind(this), this.scrollParentTo = function (a) {
            this.sendMessage("navigateTo", "#" + a)
        }, this.navigateParentTo = function (a) {
            this.sendMessage("navigateTo", a)
        }, this.id = c("childId") || b.id, this.messageRegex = new RegExp("^pym" + a + this.id + a + "(\\S+)" + a + "(.+)$");
        var f = parseInt(c("initialWidth"));
        this.parentUrl = c("parentUrl"), this.onMessage("width", this._onWidthMessage);
        for (var g in b)this.settings[g] = b[g];
        return window.addEventListener("message", this._processMessage, !1), this.settings.renderCallback && this.settings.renderCallback(f), this.sendHeight(), this.settings.polling && window.setInterval(this.sendHeight, this.settings.polling), this
    }, g(), b
});
$(function () {
    $("footer").append("<div id='viewport-sm' class='js-viewport-size'></div>" +
        "<div id='viewport-md' class='js-viewport-size'></div>" +
        "<div id='viewport-lg' class='js-viewport-size'></div>");

    jsEnhanceViewportSize();
});

$(window).on('resize', function () {
    jsEnhanceViewportSize();
});

function clearViewportSizes() {
    $('body').removeClass('viewport-sm viewport-md viewport-lg');
}

function jsEnhanceViewportSize() {

    $.each($(".js-viewport-size"), function () {

        if ($(this).is(':visible')) {
            clearViewportSizes();
            var idName = $(this).attr('id');
            $('body').addClass(idName);
        }

    });
}
//  Ugliest code ever, copy paste stuff from pattern-library and alpha site, hence a bit messy

var renderLineChart = function (timeseries) {
    var chart = {};
    chart.years = false;
    chart.months = false;
    chart.quarters = false;
    var chartContainer = $('[data-chart]');
    var currentFrequency;
    var currentDisplay = 'chart'; //chart or table
    var currentData;
    var currentFilter = 'all'; //10yr, 5yr, all, custom
    var table = $('[data-table]');
    var customDownloads = $('[data-chart-custom]');
    var sortArray = []; //To store data on render for use in table sort

    initialize();

    function initialize() {
        //console.log(table);
        chart = window.linechart;
        chart.years = isNotEmpty(timeseries.years);
        chart.months = isNotEmpty(timeseries.months);
        chart.quarters = isNotEmpty(timeseries.quarters);
        chartControls = new ChartControls();

        var frequency = '';

        if (!(chart.years || chart.months || chart.quarters)) {
            //console.debug('No data found');
            // return; // No data to render chart with
        }

        // Order affects which frequency is selected by default on-load
        if (chart.years) {
            timeseries.years = formatData(timeseries.years)
            frequency = 'years';
        }

        if (chart.quarters) {
            timeseries.quarters = formatData(timeseries.quarters)
            frequency = 'quarters';
        }

        if (chart.months) {
            timeseries.months = formatData(timeseries.months);
            frequency = 'months';
        }

        changeFrequency(frequency);
        chartControls.initialize();
    }


    function getLinechartConfig() {
        var chartConfig;
        $.getJSON(timeseries.uri + 'linechartconfig', function (config) {
            // console.log("Successfuly read timseries data");
            chartConfig = config; //Global variable
        }).fail(function (d, textStatus, error) {
            // console.error("Failed reading timseries, status: " + textStatus + ", error: " + error)
        });
        return chartConfig;
    }


    function changeFrequency(frequency) {
        if (currentFrequency == frequency) {
            return;
        }
        currentFrequency = frequency;
        currentData = getAllData();
        chartControls.changeDates();
        filter();
    }


    function filter() {
        // console.log("filter start");
        //Filter
        var data = getAllData();
        if (currentFilter === 'all') {
            currentData = data;
            hide(customDownloads);
        } else {
            var filter = chartControls.getFilterValues();
            var from = filter.start.year + (isQuarters() ? filter.start.quarter : '') + (isMonths() ? filter.start.month : '');
            var to = filter.end.year + (isQuarters() ? filter.end.quarter : '') + (isMonths() ? filter.end.month : '');
            from = +from; //Cast to number
            to = +to;

            try {
                $('.chart-area__controls__custom__errors').empty();
                validateFilter(from, to);
            } catch (err) {
                $('<p>' + err.message + '</p>').appendTo('.chart-area__controls__custom__errors');
                return;
            }

            var filteredData = {
                values: [],
                min: undefined
            }

            var min = undefined;
            for (i = 0; i < data.values.length; i++) {
                current = data.values[i]
                if (current.value >= from && current.value <= to) {
                    filteredData.values.push(current)
                    if (!min || current.y < min) {
                        min = current.y;
                    }
                }
            }
            filteredData.min = min;
            currentData = filteredData;
            show(customDownloads);

        }

        render();

    }

    function render() {
        if (currentDisplay === 'chart') {
            hide(table);
            renderChart();
            timeseriesAccessibiliyAttrs();
        } else {
            hide(chartContainer);
            sortArray = []; //Remove any previously selected data from array when new frequency/time period selected
            renderTable();
            timeseriesAccessibiliyAttrs(true);

            sortMarkup('reset'); //Reset sort styling so arrows on default sorting order
            inverse = true; //Used to default table sort function to correct order
        }
    }

    function renderTable() {
        //Find empty table body to add data to
        var tbody = table.find('tbody');
        //Empty that tbody of its current contents
        tbody.empty();

        for (i = 0; i < currentData.values.length; i++) {
            current = currentData.values[i];
            sortArray.push({
                'date': current.name,
                'value': current.y
            });
            tr = $(document.createElement('tr')).addClass('table__row');
            tbody.append(tr);
            tr.append('<td class="table__data">' + current.name + '</td>');
            tr.append('<td class="table__data">' + current.y + '</td>');
        }
        show(table);

    }


    function renderChart() {
        //console.log(currentData);
        chart.series[0].data = currentData.values;
        chart.xAxis.tickInterval = tickInterval(currentData.values.length);
        if (!timeseries.description.isIndex) {
            var min = currentData.min;
            if (min < 0) {
                min = min - 1;
            } else {
                min = 0;
            }
            chart.yAxis.min = min;
        }
        show(chartContainer);
        chartContainer.highcharts(chart);
    }


    function validateFilter(from, to) {

        //console.debug("From: " + from);
        //console.debug("To: " + to);

        if (from === to) {
            throw new Error('Sorry, the start date and end date cannot be the same');
        } else if (to < from) {
            throw new Error('Sorry, the chosen date range is not valid');
        }
    }

    function tickInterval(length) {
        if (length <= 20) {
            return 1;
        } else if (length <= 80) {
            return 4;
        } else if (length <= 240) {
            return 12;
        } else if (length <= 480) {
            return 48;
        } else if (length <= 960) {
            return 96;
        } else {
            return 192;
        }
    }

    //Format data into high charts compatible format
    function formatData(timeseriesValues) {
        var data = {
            values: [],
            years: []
        };
        var current;
        var value;
        var i;
        var min;

        for (i = 0; i < timeseriesValues.length; i++) {
            current = timeseriesValues[i]
            value = isNotEmpty(current.value) ? current.value : null;
            if (value) {
                if (!min || +current.value < +min) {
                    min = +current.value;
                }
                data.min = min;
            }

            data.values.push(enrichData(current, i));
            data.years.push(current.year);

        }
        toUnique(data.years);
        return data
    }

    function getAllData() {
        return timeseries[currentFrequency];
    }

    function enrichData(timeseriesValue) {
        var quarter = timeseriesValue.quarter;
        var year = timeseriesValue.year;
        var month = timeseriesValue.month;

        timeseriesValue.y = isNotEmpty(timeseriesValue.value) ? (+timeseriesValue.value) : null; //Cast to number
        timeseriesValue.value = +(year + (quarter ? quarterVal(quarter) : '') + (month ? monthVal(month) : ''));
        if (typeof timeseriesValue.label !== 'undefined' && timeseriesValue.label) {
            timeseriesValue.name = timeseriesValue.label; //Appears on x axis
        } else {
            timeseriesValue.name = timeseriesValue.date; //Appears on x axis
        }
        delete timeseriesValue.date;

        return timeseriesValue;
    }


    function hide(element) {
        element.hide();
    }

    function show(element) {
        element.show();
    }

    function monthVal(mon) {
        switch (mon.slice(0, 3).toUpperCase()) {
            case 'JAN':
                return '01'
            case 'FEB':
                return '02'
            case 'MAR':
                return '03'
            case 'APR':
                return '04'
            case 'MAY':
                return '05'
            case 'JUN':
                return '06'
            case 'JUL':
                return '07'
            case 'AUG':
                return '08'
            case 'SEP':
                return '09'
            case 'OCT':
                return '10'
            case 'NOV':
                return '11'
            case 'DEC':
                return '12'
            default:
                throw 'Invalid Month:' + mon

        }
    }

    function quarterVal(quarter) {
        switch (quarter) {
            case 'Q1':
                return 1
            case 'Q2':
                return 2
            case 'Q3':
                return 3
            case 'Q4':
                return 4
            default:
                throw 'Invalid Quarter:' + quarter

        }
    }

    function isMonths() {
        return currentFrequency === 'months';
    }

    function isQuarters() {
        return currentFrequency === 'quarters';
    }


    //Check if arrray  or string is not empty
    function isNotEmpty(array) {
        return (array && array.length > 0)
    }


    //Remove duplicate values in given array
    function toUnique(a) { //array,placeholder,placeholder
        var b = a.length;
        var c
        while (c = --b) {
            while (c--) {
                a[b] !== a[c] || a.splice(c, 1);
            }
        }
    }

    /*Chart Controls*/
    function ChartControls() {

        var element = $('[data-chart-controls]');

        function initialize() {
            bindFrequencyChangeButtons();
            bindDisplayChangeButtons();
            // bindLinkEvents();
            bindTimePeriodButtons();
            setCollapsible();
            bindCustomDateFilters();
            setYears();
            resetFilters();
        }

        function changeDates() {
            resolveQuarters();
            resolveMonths();
        }

        function setYears() {
            var years = currentData.years;
            var $fromYear = $('[data-chart-controls-from-year]');
            var $toYear = $('[data-chart-controls-to-year]');
            $fromYear.empty();
            $toYear.empty();
            $.each(years, function (value, key) {
                $fromYear.append($("<option></option>")
                    .attr("value", +key).text(key));
                $toYear.append($("<option></option>")
                    .attr("value", +key).text(key));
            });
        }

        function resolveQuarters() {
            fromQuarters = $('[data-chart-controls-from-quarter]');
            toQuarters = $('[data-chart-controls-to-quarter]');
            if (isQuarters()) {
                show(fromQuarters);
                show(toQuarters);
            } else {
                hide(fromQuarters);
                hide(toQuarters);
            }

        }

        function resolveMonths() {
            fromMonths = $('[data-chart-controls-from-month]');
            toMonths = $('[data-chart-controls-to-month]');
            if (isMonths()) {
                show(fromMonths);
                show(toMonths);
            } else {
                hide(fromMonths);
                hide(toMonths);
            }
        }

        function resetFilters() {
            /*
             * Set the select options
             */
            $('[data-chart-controls-from-month]', element).val('01');
            $('[data-chart-controls-from-quarter]', element).val(1);
            $('[data-chart-controls-from-year]', element).find('option:first-child').attr('selected', true);
            $('[data-chart-controls-to-month]', element).val(12);
            $('[data-chart-controls-to-quarter]', element).val(4);
            $('[data-chart-controls-to-year]', element).find('option:last-child').attr('selected', true);
        }


        /**
         * Collect the values from the various controls
         */
        function getFilterValues() {
            return {
                start: {
                    year: $('[data-chart-controls-from-year]').val(),
                    quarter: $('[data-chart-controls-from-quarter]').val(),
                    month: $('[data-chart-controls-from-month]').val()
                },
                end: {
                    year: $('[data-chart-controls-to-year]').val(),
                    quarter: $('[data-chart-controls-to-quarter]').val(),
                    month: $('[data-chart-controls-to-month]').val()
                }
            };
        };

        function getDisplayType() {
            $('[data-chart-controls-from-year]').val()
        }

        function bindFrequencyChangeButtons() {

            /*
             * Add click handlers to the controls
             */

            $('[data-chart-controls-scale]').each(function () {
                var frequency = this.value;
                if (!chart[frequency]) {
                    $(this).attr("disabled", true);
                    $(this).parent().addClass('btn--secondary--disabled');
                } else {
                    if ($(this).data('chart-controls-scale') == currentFrequency) {
                        $(this).attr('checked', true);
                    }
                    $(this).on('click', function (e, data) {
                        var frequency = this.value;
                        toggleSelectedButton();
                        changeFrequency(frequency);
                    });
                }
            });

            toggleSelectedButton();
        }

        function bindDisplayChangeButtons() {
            $('[data-chart-controls-type]', element).on('click', function (e, data) {
                currentDisplay = $(this).data('chart-controls-type');
                toggleSelectedButton();
                filter();

                // Changes the title above chart/table
                // Capitalise the first character
                displayTitle = currentDisplay[0].toUpperCase() + currentDisplay.slice(1);
                $('#title-type').text(displayTitle);


                // Find sortable table
                var tableHeaders = $('.js-table-sort thead').find('.js-table-sort__header'),
                    tableBtn = tableHeaders.find('button');

                //Bind header click and assign which column to sort by
                tableBtn.off().click(function () {

                    //Store 'this' to pass to sort styling function
                    var $this = $(this);

                    //Change styling of headers, so arrow displays correctly
                    sortMarkup($this.closest(tableHeaders));

                    //Find which column has been clicked
                    var column = $this.text();

                    //Use header title to state which column to sort by
                    if (column == 'Period') {
                        column = 'date';
                    } else if (column == 'Value') {
                        column = 'value';
                    }

                    //Call sorting function and parse through population data array, which column it needs to sort by, and what the current frequency is
                    triggerSort(sortArray, column, currentFrequency);

                });

            });
        }

        function bindCustomDateFilters() {
            $('select', element).change(function () {
                currentFilter = 'custom';
                filter();
            })
        }

        function bindTimePeriodButtons() {

            $('[data-chart-controls-range]', element).on('click', function (e) {

                var elem = $(this);
                var filterDate;
                var fromYear;
                var fromMonth;
                var fromQuarter;
                e.preventDefault();
                // toggleSelectedLink(elem);
                // toggleTimePeriodButton(elem);
                toggleSelectedButton();
                var filterValue = elem.data('chart-controls-range');
                if (filterValue === currentFilter) {
                    return;
                }
                currentFilter = filterValue;
                resetFilters();

                /*
                 * Work out what the dates are
                 */

                switch (currentFilter) {
                    case '10yr':
                        filterDate = moment().subtract(10, 'years');
                        fromMonth = filterDate.month() + 1;
                        fromQuarter = filterDate.quarter() + 1;
                        fromYear = filterDate.year();
                        break;
                    case '5yr':
                        filterDate = moment().subtract(5, 'years');
                        fromMonth = filterDate.month() + 1;
                        fromQuarter = filterDate.quarter() + 1;
                        fromYear = filterDate.year();
                        break;
                    case 'all':
                        fromMonth = 1;
                        fromQuarter = 1;
                        fromYear = $('[data-chart-controls-from-year] option:first-child', element).val();
                        break;
                }

                /*
                 * Set the select options
                 */
                $('[data-chart-controls-from-month]', element).find('option[value="' + pad(fromMonth, 2) + '"]').attr('selected', true);
                $('[data-chart-controls-from-quarter]', element).find('option[value="' + fromQuarter + '"]').attr('selected', true);
                $('[data-chart-controls-from-year]', element).find('option[value="' + fromYear + '"]').attr('selected', true);

                filter();
            });
        };

        function pad(number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            //console.log(str);
            return str;

        }


        /**
         * Add the collape / expand behaviour to the custom date filter
         */
        function setCollapsible() {


            // var customControl = $('[data-chart-control-custom-range]', element);
            // var elem;
            // var target;

            $('[data-chart-control-custom-trigger-for]', element).on('click', function (e) {
                e.preventDefault();
                toggleSelectedButton();
                toggleCollapsible();


            });
        };

        function toggleCollapsible() {
            dropdown = $('.chart-area__controls__custom');

            if (dropdown.hasClass('chart-area__controls__custom--active')) {
                // console.log('closing custom dd');
                dropdown.removeClass('chart-area__controls__custom--active');
                dropdown.attr('aria-hidden', 'true');
                dropdown.stop(true, true).slideUp();
            } else {
                // console.log('opening custom dd');
                // dropdown.height(0);
                dropdown.removeClass('js-hidden');
                dropdown.hide();
                dropdown.addClass('chart-area__controls__custom--active');
                dropdown.stop(true, true).slideDown();
                dropdown.attr('aria-hidden', 'false');

            }
        }

        function hideCollapsible() {
            $('.chart-area__controls__custom').slideUp;
        }

        function toggleSelectedLink(clickedElem) {
            $('a', element).removeClass('chart-area__controls__active');
            clickedElem.addClass('chart-area__controls__active');

        };

        function toggleSelectedButton() {

            // hideCollapsible();
            // setCollapsible();

            var selectedElement = $('input:checked', element);


            var customcontrols = $('.chart-area__controls__custom');
            var toggleTheCollapsible;
            var devNote;

            // $('.chart-area__controls__custom').hasClass('chart-area__controls__custom--active')

            selectedElement.each(function (index) {
                var selectedElementDataAttr = $(this).attr('data-chart-control-custom-trigger-for');


                if ($(this).attr('data-chart-controls-range')) {
                    devNote = "time period not custom";
                    if ($('.chart-area__controls__custom').hasClass('chart-area__controls__custom--active')) {
                        toggleTheCollapsible = true;
                    }
                    // toggleTheCollapsible = true;
                } else if ($(this).attr('data-chart-control-custom-trigger-for')) {
                    devNote = "is custom";
                    toggleTheCollapsible = false;
                } else {
                    devNote = "not time period, not custom";
                    // if($('.chart-area__controls__custom').hasClass('chart-area__controls__custom--active')){
                    toggleTheCollapsible = false;
                    // }
                }


                // console.log($(this).attr('data-chart-control-custom-trigger-for'));
                // var n = selectedElementDataAttr.length;
                // console.log(n);
                // if(selectedElement.attr('data-chart-control-custom-trigger-for').length() > 0){
                // 	console.log('not custom');
                // 	// if($('.chart-area__controls__custom').hasClass('chart-area__controls__custom--active')){
                // 	// 	toggleCollapsable();
                // 	// }
                // }
            });
            // console.log(devNote);
            if (toggleTheCollapsible) {
                toggleCollapsible();
            }


            // if(!selectedElement.attr('data-chart-control-custom-trigger-for')){
            // 	console.log('not custom');
            // 	// if($('.chart-area__controls__custom').hasClass('chart-area__controls__custom--active')){
            // 	// 	toggleCollapsable();
            // 	// }

            // }
            // console.log(selectedElement.attr('data-chart-control-custom-trigger-for'));
            // console.log(selectedElement);


            selectedElement.closest('.btn-group').find('.btn').removeClass('btn--secondary--active');

            selectedElement.each(function () {

                $(this).closest('.btn').addClass('btn--secondary--active');
            });

        };

        $.extend(this, {
            initialize: initialize,
            changeDates: changeDates,
            getFilterValues: getFilterValues
        });

    }

    $.extend(this, {})
    return this;

};

function removeHiddenInputs() {
    $("input[name='fromMonth']").remove();
    $("input[name='fromQuarter']").remove();
    $("input[name='fromYear']").remove();
    $("input[name='toMonth']").remove();
    $("input[name='toQuarter']").remove();
    $("input[name='toYear']").remove();
    $("input[name='frequency']").remove();
}


$(function () {
    // Store default hrefs of download links
    var currentHrefs = [],
        $downloadLinks = $('.dlCustomData');

    $downloadLinks.each(function () {
        currentHrefs.push(String($(this).attr('href')));
    });


    $downloadLinks.on('keydown mousedown', function () {

        //Grab all the custom date values
        var fromYear = $('[data-chart-controls-from-year]').val(),
            fromQuarter = $('[data-chart-controls-from-quarter]').val(),
            fromMonth = $('[data-chart-controls-from-month]').val(),
            toYear = $('[data-chart-controls-to-year]').val(),
            toQuarter = $('[data-chart-controls-to-quarter]').val(),
            toMonth = $('[data-chart-controls-to-month]').val();

        // Update each link with new href
        $('.dlCustomData').each(function (i) {

            selectedFrequency = $(".btn--secondary--active.frequency-select .frequency").val();
            selectedFrequency = selectedFrequency.trim();

            var $this = $(this),
                currentHref = currentHrefs[i],
                hrefHasParams = currentHref.indexOf('?') > -1,
                updatedHref;

            // Add '&' or '?' to end of current URL, depending on whether it already has parameters
            if (hrefHasParams) {
                currentHref = currentHref + '&';
            } else {
                currentHref = currentHref + '?';
            }

            switch (selectedFrequency) {
                case 'months':
                    // Build up new href for clicked anchor
                    updatedHref = currentHref + 'series=' + '&fromMonth=' + fromMonth + '&fromYear=' + fromYear + '&toMonth=' + toMonth + '&toYear=' + toYear + '&frequency=' + selectedFrequency;
                    // Replace anchor href with new URL
                    $this.attr('href', updatedHref);

                    break;

                case 'quarters':
                    // Build up new href for clicked anchor
                    updatedHref = currentHref + 'series=' + '&fromQuarter=Q' + fromQuarter + '&fromYear=' + fromYear + '&toQuarter=Q' + toQuarter + '&toYear=' + toYear + '&frequency=' + selectedFrequency;
                    // Replace anchor href with new URL
                    $this.attr('href', updatedHref);

                    break;

                case 'years':
                    // Build up new href for clicked anchor
                    updatedHref = currentHref + 'series=' + '&fromYear=' + fromYear + '&toYear=' + toYear + '&frequency=' + selectedFrequency;
                    // Replace anchor href with new URL
                    $this.attr('href', updatedHref);

                    break;
            }
            return true;
        });
    });
});


// $('.dlCustomData').submit(function(){

// 	selectedFrequency = $( ".btn--secondary--active.frequency-select .frequency").val();
// 	selectedFrequency = selectedFrequency.trim();

// 	//Grab all the custom date values
// 	fromYear = $('[data-chart-controls-from-year]').val();
// 	fromQuarter = $('[data-chart-controls-from-quarter]').val();
// 	fromMonth = $('[data-chart-controls-from-month]').val();
// 	toYear = $('[data-chart-controls-to-year]').val();
// 	toQuarter = $('[data-chart-controls-to-quarter]').val();
// 	toMonth = $('[data-chart-controls-to-month]').val();


// 	switch (selectedFrequency) {
// 		case 'months':
// 			// create a string to input hidden values to POST
// 			str = '<input type="hidden" name="fromMonth" value="'+fromMonth+'" /><input type="hidden" name="fromYear" value="'+fromYear+'" /><input type="hidden" name="toMonth" value="'+toMonth+'" /><input type="hidden" name="toYear" value="'+toYear+'" /><input type="hidden" name="frequency" value="months"/>';
// 			// remove any previous custom date hidden inputs
// 			removeHiddenInputs();
// 			// append the inputs to end of form
// 			$(this).append(str);
// 			break;

// 		case 'quarters':
// 			// create a string to input hidden values to POST
// 			str = '<input type="hidden" name="fromQuarter" value="Q'+fromQuarter+'" /><input type="hidden" name="fromYear" value="'+fromYear+'" /><input type="hidden" name="toQuarter" value="Q'+toQuarter+'" /><input type="hidden" name="toYear" value="'+toYear+'" /><input type="hidden" name="frequency" value="quarters"/>';
// 			// remove any previous custom date hidden inputs
// 			removeHiddenInputs();
// 			// append the inputs to end of form
// 			$(this).append(str);
// 			break;

// 		case 'years':
// 			// create a string to input hidden values to POST
// 			str = '<input type="hidden" name="fromYear" value="'+fromYear+'" /><input type="hidden" name="toYear" value="'+toYear+'" /><input type="hidden" name="frequency" value="years"/>';
// 			// remove any previous custom date hidden inputs
// 			removeHiddenInputs();
// 			// append the inputs to end of form
// 			$(this).append(str);
// 			break;
// 	}
//   return true;

// });

$(function () {

    $('.btn--chart-control--download').on("keyup mouseup", function () {
        var $activeButton = $(this), // button clicked
            $activeControl = $('#' + $activeButton.find('input').attr('id') + '-controls'), //control (button) block related to clicked button
            $activeInput = $activeButton.find('input'),
            $buttons = $('.btn--chart-control--download'),
            $controls = $('.chart-area__controls__download');

        // remove active class from all buttons
        $buttons.each(function () {
            var $input = $(this).find('input');
            if ($input.attr('aria-expanded') == 'true') {
                $input.attr('aria-expanded', 'false');
                $input.prop('checked', false);
            }
        });
        $buttons.removeClass('btn--secondary--active');

        // set all controls to hidden
        $controls.each(function () {
            if ($(this).attr('aria-hidden') == 'false') {
                $(this).attr('aria-hidden', 'true');
            }
        });

        // set active class on clicked button and unhide correct controls (button) block
        $activeButton.addClass('btn--secondary--active');
        $activeInput.attr('aria-expanded', 'true');
        $activeInput.prop('checked', true);
        $activeControl.attr('aria-hidden', 'false');
    });

});

function filterFocus() {
    var $filters = $('.timeseries__filters input[type="radio"]'),
        $radioGroup,
        activeClass = 'btn-group--active';

    $filters.on('keyup', function (e) {
        $radioGroup = $(this).closest('fieldset');
        $radioGroup.addClass(activeClass); // Bug - this should add activeClass repeatedly, but btns are currently removed and replaced in DOM on each change. If this bug gets fixed we might need to update this function.
        $filters.on('keydown', function () {
            if (e.keyCode == '9') {
                $radioGroup.removeClass(activeClass);
            }
        });
        $filters.on('focusout', function () {
            $radioGroup.removeClass(activeClass);
        });
    });
}
filterFocus();
function toggleSubnav(element) {
    element
        .toggleClass('js-expandable-active')
        .find('.js-expandable__content').toggleClass('js-nav-hidden');
}

function expandSubnav(element) {
    if (!(element.hasClass('js-expandable-active'))) {
        element
            .addClass('js-expandable-active')
            .find('.js-expandable__content')
            .removeClass('js-nav-hidden');
    }
}

function collapseSubnav(element) {
    if (element.hasClass('js-expandable-active')) {
        element
            .removeClass('js-expandable-active')
            .find('.js-expandable__content')
            .addClass('js-nav-hidden');
    }
}

function showMenu(toggleElement, menuElement) {
    toggleElement.addClass('menu-is-expanded');
    menuElement.removeClass('nav-main--hidden');
    menuElement.attr('aria-expanded', true);
}

function hideMenu(toggleElement, menuElement) {
    toggleElement.removeClass('menu-is-expanded');
    menuElement.addClass('nav-main--hidden');
    menuElement.attr('aria-expanded', false);
}

function showSearch(toggleElement, searchElement) {
    toggleElement.addClass('search-is-expanded');
    toggleElement.find('.nav--controls__icon')
        .removeClass('icon-search-1')
        .addClass('icon-cancel');
    toggleElement.find('.nav--controls__text').text('Hide');
    searchElement.removeClass('nav-search--hidden');
    searchElement.attr('aria-expanded', true);
}

function hideSearch(toggleElement, searchElement) {
    toggleElement.removeClass('search-is-expanded');
    toggleElement.find('.nav--controls__icon')
        .removeClass('icon-cancel')
        .addClass('icon-search-1');
    toggleElement.find('.nav--controls__text').text('Search');
    searchElement.addClass('nav-search--hidden');
    searchElement.attr('aria-expanded', false);
}

function cloneSecondaryNav() {
    // On mobile move secondary nav items in header to primary nav

    var $navLink = $('.js-nav-clone__link');

    if ($('body').hasClass('viewport-sm') && $('.js-nav-clone__list').find($navLink).length > 0) {
        // Remove from separate UL and add into primary
        $navLink.each(function () {
            $(this)
                .removeClass('secondary-nav__link')
                .insertAfter('.primary-nav__item:last')
                .addClass('primary-nav__link col')
                .wrap('<li class="primary-nav__item">');

        });
    } else if (!$('body').hasClass('viewport-sm') && $('.secondary-nav__item').is(':hidden')) {
        // Remove from primary nav and add into separate secondary list
        $navLink.each(function (i) {
            var index = i + 1;
            $(this)
                .unwrap()
                .removeClass('primary-nav__link col')
                .addClass('secondary-nav__link')
                .appendTo('.js-nav-clone__list li:nth-child(' + index + ')');
        });
    }
}

function clonePrimaryItems() {
    var $detectDuplicate = $('.js-nav__duplicate');

    // Clone primary nav items into sub-menu on mobile, so it can still be selected on mobile
    if ($('body').hasClass('viewport-sm') && $detectDuplicate.length == 0) {
        $('.js-expandable').each(function () {
            var $this = $(this),
                $thisHref = $this.find('a:first').attr('href'),
                $thisText = $this.find('a:first').html(),
                $childList = $this.find('.js-expandable__content'),
                $newLink = '<a class="primary-nav__child-link" href="' + $thisHref + '">' + $thisText + '</a>',
                $newItem = '<li class="primary-nav__child-item js-nav__duplicate js-expandable__child">' + $newLink + '</li>';

            $childList.prepend($newItem);
        });

    } else if (!$('body').hasClass('viewport-sm') && $detectDuplicate.length > 0) {
        $detectDuplicate.remove();
    }

    // OLD CODE
    //$primaryNav.find('.nav__expandable').each(function () {
    //    var subNav = $(this).find('.nav--primary__sub');
    //    $(this).find(' > a').clone()
    //        .removeClass()
    //        .prependTo(subNav)
    //        .wrap('<li class="nav__top-level-duplicate"></li>');
    //});
}

function cloneLanguageToggle() {
    var $toggle = $('.language--js'),
        $toggleContainer = $('.language--js__container'),
        extraClass = 'margin-top-sm--1 margin-bottom-sm--4 margin-left-sm--1';

    if ($('body').hasClass('viewport-sm') && $('#nav-primary').find($toggle).length == 0) {
        // Move toggle to menu drop-down
        $toggle.appendTo('#nav-primary')
            .addClass(extraClass);

    } else if (!$('body').hasClass('viewport-sm') && $('#nav-primary').find($toggle).length > 0) {
        // Move toggle back to original location on tablet or larger
        $toggle.appendTo($toggleContainer)
            .removeClass(extraClass);
    }
}


$(window).resize(function () {
    clonePrimaryItems();
    cloneSecondaryNav();
    cloneLanguageToggle();
});


$(document).ready(function () {
    var $primaryNav = $('#nav-primary');
    var $searchBar = $('#searchBar');
    var $navItem = $('.js-nav');
    var $expandableItem = $('.js-expandable');

    clonePrimaryItems();
    cloneSecondaryNav();
    cloneLanguageToggle();

    $primaryNav.addClass('nav-main--hidden').attr('aria-expanded', false);
    //$searchBar.addClass('nav-search--hidden').attr('aria-expanded', false);

    $expandableItem.on('click', function (event) {
        if ($('body').hasClass('viewport-sm')) {
            event.preventDefault();
            toggleSubnav($(this));
        }
    });

    $expandableItem.doubleTapToGo();

    // stop parent element from taking over all click events
    $('.js-expandable > .js-expandable__content').on('click', function (event) {
        event.stopPropagation();
    });

    // Menu navigation using keyboard
    $navItem.on('keydown', function (e) {
        var $this = $(this),
            $focusedItem = $('.js-expandable__child a:focus'), // only selects child item that is in focus
            keycode = e.keyCode,
            up = '38',
            down = '40',
            right = '39',
            left = '37',
            esc = '27',
            tab = '9';
        if (keycode == tab && $focusedItem) {
            $this.removeClass('primary-nav__item--focus');
            $this.next().focus();
        }
        if (keycode == esc) {
            $this.removeClass('primary-nav__item--focus');
            $this.closest('.js-nav').find('a:first').addClass('hide-children').focus();
            $this.closest('.js-nav').find('a:first').focusout(function () {
                $(this).removeClass('hide-children');
            });
        }
        if (keycode == down) {
            e.preventDefault();
            $this.addClass('primary-nav__item--focus');
            if ($focusedItem.length > 0) {
                $focusedItem.parent().next().find('a').focus();
            } else {
                $this.find('.js-expandable__child:first a').focus();
            }
        }
        if (keycode == up) {
            e.preventDefault();
            if ($focusedItem.length > 0 && $focusedItem.parent().prev().length > 0) {
                $focusedItem.parent().prev().find('a').focus();
            } else {
                $this.removeClass('primary-nav__item--focus');
                $this.find('a:first').focus();
            }
        }
        if (keycode == right) {
            e.preventDefault();
            $this.removeClass('primary-nav__item--focus');
            $this.closest('.js-nav').next().find('a:first').focus();
        }
        if (keycode == left) {
            e.preventDefault();
            $this.removeClass('primary-nav__item--focus');
            $this.closest('.js-nav').prev().find('a:first').focus();
        }
    });

    // Remove focus and styling classes if mouse hovers over nav
    $navItem.hover(function () {
        if ($navItem.find(':focus')) {
            $navItem.find(':focus').blur();
            $navItem.removeClass('primary-nav__item--focus');
        }
    });

    // Close menu on click of the page
    $('body').not('js-expandable .js-expandable__child').click(function (e) {
        e.stopPropagation();
        $('.primary-nav__item--focus').removeClass('primary-nav__item--focus');
    });


    //$('.js-expandable > a').on('keydown', function (event) {
    //    // Enter || spacebar
    //    if (event.keyCode === 13 || event.keyCode === 32) {
    //        if ($(window).width() < 767) {
    //            event.preventDefault();
    //            toggleSubnav($(this));
    //        }
    //    }
    //
    //    // Right arrow
    //    if (event.keyCode === 39) {
    //        if ($(window).width() < 767) {
    //            event.preventDefault();
    //            expandSubnav($(this));
    //        }
    //        else {
    //            // TODO: Make sure the large viewport breakpoint is exact
    //            // This should move the focus to the next nav item and expand its subnav
    //            //event.preventDefault();
    //            //var nextNode = $(this).closest('.js-expandable').next();
    //            //$(nextNode).focus();
    //        }
    //    }
    //
    //    // Left arrow
    //    if (event.keyCode === 37) {
    //        if ($(window).width() < 767) {
    //            event.preventDefault();
    //            collapseSubnav($(this));
    //        }
    //        else {
    //            // TODO: Make sure the large viewport breakpoint is exact
    //            // This should move the focus to the previous item and expand its subnav
    //            //event.preventDefault();
    //            //var previousNode = $(this).closest('.js-expandable').prev();
    //            //$(previousNode).focus();
    //        }
    //    }
    //});

    // stop parent element from taking over enter/space events
    $('.js-expandable > .nav--primary__sub').on('keydown', function (event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.stopPropagation();
        }
    });

    var $menuToggle = $('#menu-toggle').parent();
    var $searchToggle = $('#search-toggle').parent();

    $('#menu-toggle').on('click', function (event) {
        event.preventDefault();

        if ($primaryNav.hasClass('nav-main--hidden')) {
            showMenu($menuToggle, $primaryNav);
            hideSearch($searchToggle, $searchBar);
        }
        else {
            hideMenu($menuToggle, $primaryNav);
        }
    });

    $('#search-toggle').on('click', function (event) {
        event.preventDefault();
        var $searchToggle = $(this).parent();

        if ($searchBar.hasClass('nav-search--hidden')) {
            showSearch($searchToggle, $searchBar);
            hideMenu($menuToggle, $primaryNav);
        }

        else {
            hideSearch($searchToggle, $searchBar);
        }
    });


    // The following function to enable focus-tabbing through menu graciously
    // taken from Simply Accessible — thank you kindly.
    // http://simplyaccessible.com/article/better-for-accessibility

    //$(function () {
    //    //$('.primary-nav__list').setup_navigation();
    //});
    //
    //$.fn.setup_navigation = function (settings) {
    //    settings = jQuery.extend({
    //        focusClass: 'menu-focus',
    //    }, settings);
    //
    //
    //    // Set tabIndex to -1 so that links can't receive focus until menu is open
    //    $(this).find('> li > a').next('ul').find('a').attr('tabIndex', -1);
    //
    //    $(this).find('> li > a').hover(function () {
    //        $(this).closest('ul')
    //            .find('.' + settings.focusClass).removeClass(settings.focusClass)
    //            .find('a').attr('tabIndex', -1);
    //    });
    //    $(this).find('> li > a').focus(function () {
    //        $(this).closest('ul')
    //            .find('.' + settings.focusClass).removeClass(settings.focusClass)
    //            .find('a').attr('tabIndex', -1);
    //        $(this).next('ul')
    //            .addClass(settings.focusClass)
    //            .find('a').attr('tabIndex', 0);
    //    });
    //
    //    // Hide menu if click or focus occurs outside of navigation
    //    $(this).find('a').last().keydown(function (e) {
    //        if (e.keyCode === 9) {
    //            // If the user tabs out of the navigation hide all menus
    //            $('.' + settings.focusClass)
    //                .removeClass(settings.focusClass)
    //                .find('a').attr('tabIndex', -1);
    //        }
    //    });
    //    $(document).click(function () {
    //        $('.' + settings.focusClass)
    //            .removeClass(settings.focusClass)
    //            .find('a').attr('tabIndex', -1);
    //    });
    //
    //    $(this).click(function (e) {
    //        e.stopPropagation();
    //    });
    //};

});
var renderSparkline = function (data, chartContainer) {
    var sparklinename = 'sparkline' + data.description.cdid;
    var chart = window[sparklinename];
    // var chartContainer = $('[data-sparkline-'+data.description.cdid + ']');

    renderChart();

    function renderChart() {
        for (var i = data.series.length - 1; i >= 0; i--) {
            var y = data.series[i].y
            data.series[i].y = y ? y : null // highcarts does not play well with undefined y value
        }
        ;
        chart.series[0].data = data.series;
        chartContainer.highcharts(chart);
    }

};
/**
 * Created by crispin on 21/10/2015.
 */

function initialiseTable() {
    var $table = $('.js-table-sort'),
        $tableHeaders = $table.find('thead th'),
        $tableBody = $table.find('tbody');

    // Wrap table headers in a button
    $tableHeaders.each(function () {
        var $this = $(this),
            headerText = $this.text();
        $this.wrapInner('<button aria-label="Sort table by ' + headerText + '" aria-controls="table-tbody">');
    });

    // Add aria-controls destination id to table body
    $tableBody.attr('id', 'table-tbody').attr('');
}
initialiseTable();

function triggerSort(array, column, frequency) {

    // If frequency is 'months' then replace month values with actual numbers (stops alphabetical ordering breaking order)
    if (frequency == "months") {
        $.each(array, function (index) {
            //Select the date value of each object
            var date = array[index].date;

            //Replace month string with equivalent number
            array[index].date = date.replace('JAN', '01').replace('FEB', '02').replace('MAR', '03').replace('APR', '04').replace('MAY', '05').replace('JUN', '06').replace('JUL', '07').replace('AUG', '08').replace('SEP', '09').replace('OCT', '10').replace('NOV', '11').replace('DEC', '12');

        });

        //Sort array of table data
        array.sort(sortTable(column));

        // Now months have been sorted correct switch numbers back to month
        $.each(array, function (index) {
            var date = array[index].date;
            var year = date.substr(0, date.indexOf(' '));
            var month = date.substr(date.indexOf(' ') + 1);

            //Revert number back to month string
            array[index].date = year + " " + month.replace('01', 'JAN').replace('02', 'FEB').replace('03', 'MAR').replace('04', 'APR').replace('05', 'MAY').replace('06', 'JUN').replace('07', 'JUL').replace('08', 'AUG').replace('09', 'SEP').replace('10', 'OCT').replace('11', 'NOV').replace('12', 'DEC');

        });

    } else {
        //If not months then just sort array as normal
        array.sort(sortTable(column));

    }

    //Swaps whether inverse is true or not, so it always does the opposite from the previous click
    inverse = !inverse;

    //Rebuild the table with sorted array
    buildTable(array);
}

//Sorts table contents. Argument 'column' defines which column is being sorted
function sortTable(column) {
    return function (a, b) {
        var aData = a[column];
        var bData = b[column];

        //If inverted it sorts the opposite direction
        if (inverse == true) {
            return ((aData > bData) ? -1 : ((aData < bData) ? 1 : 0));
        } else {
            return ((aData < bData) ? -1 : ((aData > bData) ? 1 : 0));
        }
    }
}

//Get the data array and build the table body from it - TODO Should reuse renderTable function in linechart.js if possible
function buildTable(array) {
    var tbody = $('.js-table-sort').find('tbody');
    $(tbody).empty();

    for (i = 0; i < array.length; i++) {
        current = array[i];
        tr = $(document.createElement('tr')).addClass('table__row');
        tbody.append(tr);
        tr.append('<td class="js-table-sort__data">' + current.date + '</td>');
        tr.append('<td class="js-table-sort__data">' + current.value + '</td>');
    }
}

//Set the sort styling - ie the arrow is attached to the correct header and in the correction direction
function sortMarkup(type) {

    //Find table headers
    var tableHeaders = $('.js-table-sort thead').find('.js-table-sort__header');

    //If 'reset' passed to function then it'll return the styling to default
    if (type == 'reset') {

        //Find default header to reset to
        var defaultTableHeader = $(tableHeaders).filter('th:contains("Period")');

        //Reset arrow to appear on 'period' and show as ascending;
        $(defaultTableHeader).attr('aria-sort', 'ascending').attr('aria-pressed', 'true');

    } else {

        //Instead of reset, column name is passed into function and that column has sorted styling added to it
        var column = type,
            sortOrder;

        //If inverse then toggle whether asc or desc class is added
        if (inverse === true) {
            //sortOrder = 'sorted-asc';
            sortOrder = 'descending';
        } else if (inverse === false) {
            //sortOrder = 'sorted-desc';
            sortOrder = 'ascending';
        }

        //Remove existing aria-sort attributes from headers
        $(tableHeaders).each(function () {
            var $this = $(this);

            if ($this.is(column)) {
                $this.attr('aria-sort', sortOrder)
                    .find('button')
                    .attr('aria-pressed', 'true');
            } else {
                $this.removeAttr('aria-sort')
                    .find('button')
                    .attr('aria-pressed', 'false');
            }
        });
    }
}

//TEST TO SHOW WHAT DATA IS BEING PUSHED AT EACH CHART/TABLE CHANGE

//var callCount = 0;
//
//function logArray(array) {
//	callCount++;
//	console.log("/** (" + callCount + ") START GETTING DATA **/");
//	$.each(array, function (index){
//		console.log(array[index]);
//	})
//	console.log("/** (" + callCount + ") FINISHED GETTING DATA **/");
//}

//END OF TEST CODE


/**
 * Created by crispin on 28/10/2015.
 */


//Toggles between showing and hiding content on click. Possible replacement for accordion.js in the future.

// Credit goes to Heydon Pickering (http://heydonworks.com/practical_aria_examples/#progressive-collapsibles)

function showHide(remove) {
    var showHideTrigger = $('.js-show-hide .js-show-hide__title');

    if (showHideTrigger.length > 0) {
        showHideTrigger.each(function (i) {
            var $this = $(this),
                panel = $this.next(),
                button = $this.children('button');

            if (!remove) {

                // create unique id for a11y relationship
                var id = 'collapsible-' + $this.index();

                if ($this.hasClass('is-shown')) {
                    var bool = false;
                } else {
                    var bool = true;
                }

                // wrap the content and make it focusable
                $this.nextUntil('.js-show-hide__title').attr({id: id, 'aria-hidden': bool});

                // inverse the boolean value
                bool = !bool;

                // Add the button inside the title so both the heading and button semantics are read - if prevents multiple buttons being added
                if (button.length == 0) {
                    $this.wrapInner('<button class="js-show-hide__button" type="button" aria-expanded="' + bool + '" aria-controls="' + id + '">');
                }
                button = $this.children('button');

                // Toggle the state properties on click
                button.on('click', function () {
                    var state = $(this).attr('aria-expanded') === 'false' ? true : false;
                    $(this).attr('aria-expanded', state);
                    panel.attr('aria-hidden', !state);
                });
            } else {
                // Set filters to show
                $this.children('button').attr('aria-expanded', 'true');
                panel.attr('aria-hidden', 'false');

                // Remove show/hide functionality
                var heading = $this.children('button').contents();
                heading.unwrap();
            }
        });
    }
}

// Checks if show/hide is open and sets to show if not doing so already
function forceShow(showHideElem) {
    showHideElem.find('.js-show-hide__title button').attr('aria-expanded', 'true');
    showHideElem.find('.js-show-hide__content').attr('aria-hidden', 'false');
}

$(function () {
    // Initalise show/hides on page
    showHide();

    // If page has hash in path open show/hide
    var locationHash = location.hash;
    if (locationHash) {
        forceShow($(locationHash));
    }

    // If an anchor with a hash href attribute is clicked check show/hide needs to be opened
    $('a[href^="#"]').click(function () {
        var sectionId = $($(this).attr('href'));
        forceShow(sectionId);
    });
});
/**
 * Created by jon on 05/11/2015.
 */

$(function () {

    if ($('.js-sticky-sidebar').length > 0) {

        // kick in twbs affix plugin

        $(".js-sticky-sidebar").affix({
            offset: {
                top: function () {
                    return (this.top = $('header').outerHeight(true) + $('.page-intro').outerHeight(true))
                },
                bottom: function () {
                    return (this.bottom = $('footer').outerHeight(true))
                }
            }
        });

    }

});

// function to work out if an element is within current viewport

$.fn.isOnScreen = function () {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

// function to work out what percentage of an element is within current viewport

$.fn.percentOnScreen = function () {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        bottom: win.scrollTop() + win.height()
    };

    var el = this,
        elHeight = el.height(),
        offsetTop = el.offset().top,
        offsetBottom = el.offset().top + elHeight;


    if (viewport.top >= offsetTop && viewport.top < offsetBottom) {
        percentage = ((offsetBottom - viewport.top) / elHeight) * 100;
    } else if (viewport.bottom > offsetTop && viewport.bottom < offsetBottom) {
        percentage = ((viewport.bottom - offsetTop) / elHeight) * 100;
        //console.log("(offsetTop: " + offsetTop + "- scrollBottom: " + scrollBottom + ") / sectionHeight: " + sectionHeight)
    } else if ((viewport.top > offsetTop && viewport.bottom < offsetBottom) || (viewport.top < offsetTop && viewport.bottom > offsetBottom)) {
        percentage = 100;
    } else {
        percentage = 0;
    }

    return percentage;

};


$(window).on("load scroll", function () {

    $.each($(".section-container"), function () {

        var section = $(this),
            sectionTitle = section.find('h2').attr('id');

        if ($(this).isOnScreen()) {
            $(this).percentOnScreen();

        } else {
            percentage = 0;

        }

        bgTransparency = percentage / 100;

        $.each($(".side-bar__item"), function () {
            $("#" + sectionTitle + "-menu-item").css("background-color", "rgba(221, 221, 221," + bgTransparency + ")");
        });
    });

});

//Stored in function so minical can be initialised again after ajax (ie tabs on list pages)

function initialiseMinical() {
    $('#input-start-date, #input-end-date').minical({
        offset: {
            x: 0,
            y: 0
        },
        date_format: function (date) {
            var day = ('0' + date.getDate()).slice(-2); //Add zero to beginning of single digit numbers
            var month = ('0' + (date.getMonth() + 1)).slice(-2); //Add zero to beginning of single digit numbers
            return [day, month, date.getFullYear()].join('/');
        },
        date_changed: function () {
            //Send change event for auto-submit js to detect
            $(this).change();
        }
    });
}

initialiseMinical();
$(function () {


    if ($('body').contents().find('*').hasClass('js-sticky-toc')) {
        //variables
        var stickyTrigger = '.js-sticky-toc__trigger';
        var contentStart = $(stickyTrigger).offset().top;
        var locationHash = $(location.hash).attr('id');
        var stickyTocHeight = function () {
            return parseInt($('.table-of-contents--sticky__wrap').css('height'))
        }; // height of sticky toc
        var tocSelectList = $('<select id="sticky-toc" class="table-of-contents--sticky__select ">');
        var scrollTop = $(window).scrollTop();
        var pdfDownloadLink = $('.js-pdf-dl-link').attr('href');

        // recalculate trigger point if show-hide button is clicked
        $('.js-show-hide__button').click(function () {
            contentStart = $(stickyTrigger).offset().top;
        });

        //remove html and body height 100% to allow jquery scroll functions to work properly
        $('html, body').css('height', 'auto');


        //insert sticky wrapper
        var tocStickyWrap = $('<div class="table-of-contents--sticky__wrap print--hide"><div class="wrapper"><div class="col-wrap"><div id="stickySelectArea" class="col col--md-30 col--lg-40"><div class="table-of-contents--sticky__select-wrap">');
        $(tocStickyWrap).insertAfter($('#toc'));
        $('.table-of-contents--sticky__wrap #stickySelectArea').prepend('<label for="sticky-toc" class="table-of-contents--sticky__heading font-size--h2">Table of contents</label>');

        //add in print options
        if ($('.js-print-pdf').length > 0) {
            var printStickyWrap = $('<div class="col col--md-15 col--lg-17 hide--mobile"><p class="text-right padding-top-md--0 padding-bottom-md--0 margin-bottom-md--1 print--hide"><a href="" id="" class="link-complex nojs-hidden js-enhance--show jsEnhancePrint">Print this page&nbsp;</a><span class="icon icon-print--light-small"></span></p><p class="text-right padding-top-md--0 padding-bottom-md--1 margin-top-md--0 margin-bottom-md--0 print--hide js-enhance--show"><a href="' + pdfDownloadLink + ' " class="link-complex">Download as PDF&nbsp;</a><span class="icon icon-download--light-small"></span></p></div>');
            $(printStickyWrap).insertAfter($('.table-of-contents--sticky__wrap .col'));
        }


        //create select list of sections
        $(tocSelectList).append($('<option/>', {
            value: '',
            text: '-- Select a section --'
        }));

        $('#toc li a').each(function (i) {
            i = i + 1;
            var text = i + '. ' + $(this).text();
            var href = $(this).attr('href');
            $(tocSelectList).append($('<option/>', {
                value: href,
                text: text
            }));
        });

        //add toc select to sticky wrapper
        $('.table-of-contents--sticky__wrap .table-of-contents--sticky__select-wrap').append(tocSelectList);

        $('.table-of-contents--sticky__select').change(function () {
            var location = $(this).find('option:selected').val();
            if (location) {
                // expands section if show/hide
                forceShow($(location));
                //if ($(location).hasClass('is-collapsed')) {
                //    $(location).removeClass('is-collapsed').addClass('is-expanded');
                //}

                var functionTrigger = true;

                //animates scroll and offsets page to counteract sticky nav
                $('html, body').animate({
                    scrollTop: $(location).offset().top - stickyTocHeight()
                }, 1000, function () {
                    //stops function running twice - once for 'html' and another for 'body'
                    if (functionTrigger) {
                        //adds location hash to url without causing page to jump to it - credit to http://lea.verou.me/2011/05/change-url-hash-without-page-jump/
                        if (history.pushState) {
                            history.pushState(null, null, location);
                        }
                        //TODO Add hash to window.location in IE8-9 (don't support history.pushState)
                        // else {
                        //     window.location.hash = location;
                        //     $('html, body').scrollTop( $(location.hash).offset().top - 60 );
                        // }

                        var page = window.location.pathname + location;
                        jsEnhanceTriggerAnalyticsEvent(page);
                        functionTrigger = false;
                    }
                });
            }
        });


        // sticky toc function that evaluates scroll position and activates the sticky toc as appropriate
        function stickyTOC() {
            scrollTop = $(window).scrollTop();
            if (scrollTop > contentStart) {
                $('#toc').addClass('table-of-contents-ordered-list-hide');
                // $('#toc').removeClass('table-of-contents-ordered-list');
                $(stickyTrigger).css('padding-top', stickyTocHeight);
                $('.table-of-contents--sticky__wrap').show();
                updateSelected(scrollTop);
            } else {
                // $('#toc').addClass('table-of-contents-ordered-list');
                $('#toc').removeClass('table-of-contents-ordered-list-hide');
                $(stickyTrigger).css('padding-top', '0');
                $('.table-of-contents--sticky__wrap').hide();
            }
        }

        //Update the selected option on scroll
        function updateSelected(scrollTop) {
            var $sections = $(stickyTrigger + ' section');
            var top = $.grep($sections, function (item) {
                return $(item).position().top <= scrollTop + stickyTocHeight();
            });
            var topLength = $(top).length;
            var activeSectionId = $($(top)[topLength - 1]).attr('id');
            if (activeSectionId) {
                $('.table-of-contents--sticky__select').val("#" + activeSectionId);
            }
        }

        //Offsets page to make room for sticky nav if arrive on page directly at section
        if (locationHash) {
            $(window).load(function () {
                $('html, body').scrollTop($('#' + locationHash).offset().top - stickyTocHeight());
            });
        }

        stickyTOC();
        updateSelected(scrollTop);
        $(window).scroll(function () {
            stickyTOC();
        });
    }
})
$(function () {
    // Get language toggle from page
    var langSelect = $(".language.language--js select");

    // Listen for change of select and navigate to new url
    langSelect.change(function () {
        window.location = $(this).find('option:selected').attr('data-url');
    });
});// Function to change search filters in mobile to show/hide

$(function () {
    if ($('.js-mobile-filters').length > 0 && $('body').is('.viewport-sm')) {
        mobileFilters();
        showHide();
    }
});

function mobileFilters() {
    var $filters = $('.js-mobile-filters'),
        $filtersTitle = $('.js-mobile-filters__title'),
        $contents = $('.js-mobile-filters__contents'),
        $clearFilters = $filters.find('a#clear-search'),
        $sortBy = $('.js-mobile-filters__sort');

    $filters.addClass('js-show-hide show-hide show-hide--light').removeClass('tiles__item tiles__item--nav-type');
    $filtersTitle.addClass('mobile-filters__title js-show-hide__title show-hide__title').removeClass('tiles__title-h3 tiles__title-h3--nav');
    $contents.addClass('mobile-filters__contents js-show-hide__contents').removeClass('tiles__content tiles__content--nav');
    $clearFilters.prependTo($contents);
    $sortBy.prependTo($contents).css('display', 'inline-block');
};//progressive enhancement (jQuery) - JS specific to beta.ons.gov.uk, not applicable to whole pattern library

$(function () {
    // jQuery(window).load(function() {

    var browserNotSupported = (function () {
        var div = document.createElement('DIV');
        // http://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx
        div.innerHTML = '<!--[if lte IE 8]><I></I><![endif]-->';
        return div.getElementsByTagName('I').length > 0;
    }());


    if (browserNotSupported) {
        setTimeout(function () {
            $('#loading-overlay').fadeOut(300);
        }, 500);
    } else {
        jsEnhance();
    }


    function jsEnhance() {
        jsEnhanceShow();
        $('.js-enhance--hide').hide();
        $('.nojs-hidden').removeClass('nojs-hidden');

        var path = $('#pagePath').text();

        //The order of these functions being called is important...
        jsEnhanceULNavToSelectNav();
        jsEnhanceClickableDiv();
        jsEnhanceLinechart();
        jsEnhanceSparkline();
        jsEnhancePrint();
        jsEnhanceNumberSeparator();
        jsEnhanceMarkdownCharts(path);

        jsEnhancePrintCompendium();
        jsEnhanceBoxHeight();
        jsEnhanceBoxHeightResize();
        //jsEnhanceTriggerAnalyticsEvent();
        jsEnhanceDownloadAnalytics(path);
        jsEnhanceAnchorAnalytics();
        jsEnhanceExternalLinks();

        //jsEnhanceTableOfContents();
        jsEnhanceScrollToSection();

        jsEnhanceMobileTables();
        jsEnhanceMobileCharts();
        jsEnhanceHover();
        jsEnhanceRemoveFocus();
        jsEnhanceChartFocus();
        jsEnhanceTimeSeriesTool();

        // prototypeModalButtons();

        // setTimeout(function() {
        //     jsEnhanceIframedTables();
        //     jsEnhanceMobileTables();
        // }, 400);

        setTimeout(function () {
            $('#loading-overlay').fadeOut(300);
        }, 500);
    }
});


function jsEnhanceShow() {
    $('.js-enhance--show').show();
}

function jsEnhanceULNavToSelectNav() {
    $('.js-enhance--ul-to-select').each(function () {
        var labeltext = $('p:first', this).text();
        var selectoptions = $('ul:first li a', this);


        //IE9 dosent like this...
        // var label = $('<label>', {
        //     class: 'definition-emphasis',
        //     text: labeltext
        // });
        var label = $(document.createElement('label'));
        label.attr('class', 'definition-emphasis');
        label.attr('text', labeltext);


        //$(document.createElement('select')) is faster
        // var newselect = $('<select>', {
        //     class: 'field field--spaced'
        // });
        var newselect = $(document.createElement('select'));
        newselect.attr('class', 'field field--spaced max-width');

        // convert to lower case and remove colon from end of string
        labeltext = labeltext.toLowerCase().substring(0, labeltext.length - 1);

        newselect.append($('<option>', {
            value: '',
            text: 'Select a  ' + labeltext
        }));

        newselect.change(function () {
            var location = $(this).find('option:selected').val();
            if (location) {
                window.location = location;
            }
        });

        $.each(selectoptions, function (i, item) {
            newselect.append($('<option>', {
                value: $(this).attr('href'),
                text: $(this).text()
            }));
        });

        label.append(newselect);

        $(this).html(label);

    });
}

function jsEnhanceClickableDiv() {
    // get any content with clickable-wrap class
    var clickableDiv = $('.clickable-wrap');
    var hoverHashTable = {};
    hoverHashTable['tiles__item'] = ['tiles__item--hover'];
    hoverHashTable['tiles__item--list-type'] = ['tiles__item--list-type-hover'];
    hoverHashTable['tiles__item--list-type-simple'] = ['tiles__item--list-type-simple-hover'];
    hoverHashTable['tiles__item--nav-type-fixed'] = ['tiles__item--nav-type-fixed-hover'];
    hoverHashTable['tiles__content'] = ['tiles__content--hover'];
    hoverHashTable['sparkline-holder'] = ['sparkline-holder--hover'];
    hoverHashTable['image-holder'] = ['image-holder--hover'];
    hoverHashTable['tiles__image--headline'] = ['tiles__image--headline-hover'];
    hoverHashTable['tiles__image--headline-sparkline'] = ['tiles__image--headline-sparkline-hover'];
    hoverHashTable['tiles__title-dt'] = ['tiles__title-dt--hover'];
    hoverHashTable['tiles__title-h3'] = ['tiles__title-h3--hover'];
    hoverHashTable['tiles__title-h2'] = ['tiles__title-h2--hover'];
    hoverHashTable['tiles__title-h2--home'] = ['tiles__title-h2--home-hover'];
    hoverHashTable['tiles__title-h3--nav'] = ['tiles__title-h3--nav-hover'];
    hoverHashTable['tiles__title-h2--nav'] = ['tiles__title-h2--nav-hover'];
    hoverHashTable['tiles__title-h4'] = ['tiles__title-h4--hover'];
    hoverHashTable['tiles__content'] = ['tiles__content--hover'];
    hoverHashTable['tiles__content--nav'] = ['tiles__content--nav-hover'];
    hoverHashTable['tiles__extra'] = ['tiles__extra--hover'];
    hoverHashTable['tiles__image--search-sparkline'] = ['tiles__image--search-sparkline-hover'];

    // on click grab the first link of the content and go there
    $(clickableDiv).on('mousedown touchstart', function () { // using mousedown & touchstart as a quick fix to keyboard accessibility problems TODO switch all elements using this function to use jsHoverEnhance  and utility tiles instead.
        var link = $('a:first', this).attr('href');
        window.location = link;
    });

    // on hover change the cursor so that it looks clickable
    $(clickableDiv).css({
        'cursor': 'pointer'
    });

    //add class to change background colour
    function addHoverClass(elem) {
        $.each(hoverHashTable, function (className, hoverClassName) {
            $(elem).find('.' + className).addClass(hoverClassName[0]);
        });
    }

    //remove class to toggle background to origin colour
    function removeHoverClass(elem) {
        $.each(hoverHashTable, function (className, hoverClassName) {
            $(elem).find('.' + hoverClassName[0]).removeClass(hoverClassName[0]);
        });
    }

    // change the background colour on hover
    $(clickableDiv).hover(function () {
            addHoverClass(this);
        },
        function () {
            removeHoverClass(this);
        }
    );

    // change the background colour on focus
    $('.tiles__item--nav-type-fixed a, .tiles__item--nav-type a, .tiles__title-dt a, .tiles__title a').focus(function () {
        if ($(this).parent(clickableDiv)) {
            var elem = $(this).closest(clickableDiv);
            addHoverClass(elem);

            $(this).focusout(function () {
                removeHoverClass(elem);
            });
        }
    });


    //var anchor = $(clickableDiv).find('a:first');
    //$(clickableDiv).focus(function () {
    //        var elem = $(this);
    //        console.log('focus now');
    //        addHoverClass(elem);
    //    },
    //    function () {
    //        var elem = $(this);
    //        console.log('stop focus');
    //        removeHoverClass(elem);
    //    }
    //);

    //$(clickableDiv).hover(function() {
    //  var elem = $(this);
    //    console.log('elem = ' + elem);
    //  $.each(hoverHashTable, function(className, hoverClassName) {
    //      // $(elem).find('.'+className).css('background-color', 'red');
    //      $(elem).find('.'+className).addClass(hoverClassName[0]);
    //  });
    //}, function() {
    //  var elem = $(this);
    //    console.log('elem = ' + elem);
    //  $.each(hoverHashTable, function(className, hoverClassName) {
    //      $(elem).find('.'+hoverClassName[0]).removeClass(hoverClassName[0]);
    //  });
    //});

    // check if there's a nav--block-landing to remove :after class
    //   if ($('.nav--block-landing')) {
    //       $(clickableDiv).hover(function() {
    //         $('.nav--block-landing').addClass('nav--block-landing--remove');
    //       }, function() {
    //         $('.nav--block-landing').removeClass('nav--block-landing--remove');
    //       });
    //     }
}


function jsEnhanceLinechart() {

    var chartContainer = $(".linechart");
    if (!chartContainer.length) {
        return;
    }

    chartContainer.each(function () {
        var $this = $(this);
        var uri = $this.data('uri');
        $this.empty();
        $.getJSON(uri + '/data', function (timeseries) {
            renderLineChart(timeseries);
        }).fail(function (d, textStatus, error) {
            // console.error("Failed reading timseries, status: " + textStatus + ", error: " + error)
        });
    });
}

function jsEnhanceSparkline() {

    var chartContainer = $(".sparkline");
    if (!chartContainer.length) {
        return;
    }
    chartContainer.each(function () {
        var $this = $(this);
        var uri = $this.data('uri');
        $this.empty();
        $.getJSON(uri + '/data?series', function (timeseries) {
            // console.log("Successfuly read timseries data");
            renderSparkline(timeseries, $this);
        }).fail(function (d, textStatus, error) {
            // console.error("Failed reading timseries, status: " + textStatus + ", error: " + error)
        });
    });
}

//TODO No longer used - test and then delete
//function stripTrailingSlash(str) {
//    if(str.substr(-1) === '/') {
//        return str.substr(0, str.length - 1);
//    }
//    return str;
//}

function jsEnhanceMarkdownCharts(path) {

    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    var chartContainer = $(".markdown-chart");
    if (!chartContainer.length) {
        return;
    }

    chartContainer.each(function (i) {
        var $this = $(this);
        var id = $this.attr('id');
        var chartId = $this.data('filename');
        var chartWidth = $this.width();
        var chartUri = $this.data('uri'); //= $this.data('uri');
        $this.empty();

        //Read chart configuration from server using container's width
        var jqxhr = $.get("/chartconfig", {
                uri: chartUri,
                width: chartWidth
            },
            function () {
                var chartConfig = window["chart-" + chartId];
                if (chartConfig) {
                    // Build chart from config endpoint
                    chartConfig.chart.renderTo = id;
                    new Highcharts.Chart(chartConfig);
                    delete window["chart-" + chartId]; //clear data from window object after rendering


                    //    // Insert hidden table after chart for screen reader alternative
                    //    var series = chartConfig.series,
                    //        dataLength = series[0].data.length,
                    //        table = '<table id="chart-table-' + id + '" class="markdown-chart__table"><caption>Table representing data in figure ' + (i+1) + '</caption><thead><tr><tbody>',
                    //        headers,
                    //        th,
                    //        td;
                    //
                    //    console.log(chartConfig);
                    //
                    //    // Insert table markup after chart
                    //    $(table).insertAfter($this);
                    //
                    //    // Add table row for each td in series
                    //    for (i = 0; i < dataLength; i++) {
                    //        $('#chart-table-' + id + ' tbody').append('<tr>');
                    //    }
                    //
                    //    // Loop through each series add insert th and td into empty table
                    //    $(series).each(function() {
                    //        th = '<th>' + $(this)[0].name + '</th scope="col">';
                    //        headers = $('#chart-table-' + id + ' thead tr').append(th);
                    //
                    //        $($(this)[0].data).each(function(index) {
                    //            $('#chart-table-' + id + ' tbody tr:nth-child(' + (index+1) + ')').append('<td>' + String($(this)[0]) + '</td>');
                    //        });
                    //    });
                }
            }, "script");

    });
}

function jsEnhancePrint() {
    $('.jsEnhancePrint').click(function () {
        window.print();
        return false;
    });
}


function jsEnhanceNumberSeparator() {
    // Adapted from http://stackoverflow.com/questions/14075014/jquery-function-to-to-format-number-with-commas-and-decimal
    $(".stat__figure-enhance").each(function (index) {
        //console.log( index + ": " + $( this ).text() );
        var number = $(this).text();
        var n = number.toString().split(".");
        //Comma-fies the first part
        n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // //Combines the two sections
        $(this).text(n.join("."));
    });
}

function jsEnhancePrintCompendium() {
    $('#jsEnhancePrintCompendium').click(function (e) {
        addLoadingOverlay();

        $('.chapter').each(function (index) {
            // Synchronously adds div with id to get around Ajax working asynchronously
            $('main').append("<div id='compendium-print" + index + "'></div>");

            var url = $(this).attr('href');

            // Set what content from each page we want to retrieve for printing
            var childIntro = ('.page-intro');
            var childContent = ('.page-content');

            $.get(url, function (data) {
                $(data).find(childIntro).addClass('print--break-before').appendTo('#compendium-print' + index);
                $(data).find(childContent).appendTo('#compendium-print' + index);
            });


            e.preventDefault();

        });

        $(document).ajaxStop(function () {
            window.print();
            location.reload();
        });
    });
}

//Set adjacent boxes to same height (eg data and headlines on T3). Flexbox not suitable for this case.
function jsEnhanceBoxHeight() {
    if ($(window).width() > 608) {
        var highestBox = 0;
        $('.equal-height').each(function () {

            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });

        $('.equal-height').height(highestBox);
    }
}

//Resets the box heights on resize
function jsEnhanceBoxHeightResize() {
    $(window).resize(function () {
        $('.equal-height').height('auto');
        jsEnhanceBoxHeight();
    });
}


//TODO No longer used - test and then delete
//function jsEnhanceIframedTables() {
//   $('iframe').each(function(i) {
//       // markdown-table-container
//       if($(this).contents().find('div').hasClass('markdown-table-container')) {
//           // console.log('iframe with table found');
//           $(this).contents().find('iframe').remove();
//           $(this).contents().find('script').remove();
//           $(this).contents().find('*').css('width','auto');
//           $(this).contents().find('*').css('height','auto');
//
//           // var iframedtable =  $(this).contents().find('table');
//
//           var iframecontent = $(this).contents().find('body').html();
//
//           // $('<div class="table-wrapper">' + iframecontent + '</div>').insertAfter($(this));
//           $(iframecontent).insertAfter($(this));
//           $(this).remove();
//        }
//   });
//}

function jsEnhanceMobileTables() {
    //<span class=" icon-table" role="presentation"></span>
    // $('markdown-table-container').addClass('table-holder-mobile');

    $('<button class="btn btn--mobile-table-show">View table</button>').insertAfter($('.markdown-table-wrap'));
    $('<button class="btn btn--mobile-table-hide">Close table</button>').insertAfter($('.markdown-table-wrap table'));

    $('.btn--mobile-table-show').click(function (e) {
        // console.log($(this).closest('.markdown-table-container').find('.markdown-table-wrap'));
        $(this).closest('.markdown-table-container').find('.markdown-table-wrap').show();
    });

    $('.btn--mobile-table-hide').click(function (e) {
        // console.log($(this).closest('.markdown-table-container').find('.markdown-table-wrap'));
        // $(this).closest('.markdown-table-wrap').hide();
        $(this).closest('.markdown-table-wrap').css('display', '');
    });
}

function jsEnhanceMobileCharts() {

    // if on mobile inject overlay and button elements
    if ($("body").hasClass("viewport-sm")) {
        $('<div class="markdown-chart-overlay"></div>').insertAfter($('.markdown-chart'));
        $('<button class="btn btn--mobile-chart-show">View chart</button>').insertAfter($('.markdown-chart'));
        $('<button class="btn btn--mobile-chart-hide">Close chart</button>').appendTo($('.markdown-chart-overlay'));

        $('.btn--mobile-chart-show').click(function () {
            // the variables
            var $this = $(this),
                $title = $('<span class="font-size--h4">' + $this.closest('.markdown-chart-container').find('h4').text() + '</span>'),
                $imgSrc = $this.closest('.markdown-chart-container').find('.js-chart-image-src').attr('href'),
                width = 700,
                $img = '<img src="' + $imgSrc + '&width=' + width + '" />',
                $overlay = $this.closest('.markdown-chart-container').find('.markdown-chart-overlay');

            // check if image has been injected already
            if (!$overlay.find('img').length) {
                $overlay.append($title);
                $overlay.append($img);
            }

            // show the overlay
            $overlay.show();
        });

        $('.btn--mobile-chart-hide').click(function () {
            $(this).closest('.markdown-chart-overlay').css('display', '');
        });
    }
}

// Trigger Google Analytic pageview event
function jsEnhanceTriggerAnalyticsEvent(page) {
    if (typeof ga != "undefined") {
        ga('send', 'pageview', {
            'page': page
        });
    }
}

//Track file downloads in analytics
function jsEnhanceDownloadAnalytics(path) {
    //Track generated file downloads (eg chart xlsx download)
    $('.download-analytics').click(function () {
        var downloadType = $(this).parent().attr('action');
        var downloadTitle = $('#title').text();
        var downloadFormat = $(this).attr('value');

        if (downloadType == '/file') {
            var downloadType = '/download';
            var downloadFormat = 'xls';
        }

        // Charts don't contain file type information so 'png' hardcoded
        if (downloadType == '/chartimage') {
            downloadFormat = 'png';
        }

        var page = downloadType + ('?uri=') + path + ('/') + downloadTitle + '.' + downloadFormat;

        jsEnhanceTriggerAnalyticsEvent(page);
    });

    //Track uploaded file downloads
    $('.file-download-analytics').click(function () {
        var fileName = $(this).attr('href').split('=')[1];
        var page = '/download?' + fileName;

        jsEnhanceTriggerAnalyticsEvent(page);
    });

    //Track click on 'print full report' link
    $('.print-analytics').click(function () {
        var path = $('#pagePath').text();
        var page = '/print?uri=' + path;

        jsEnhanceTriggerAnalyticsEvent(page);
    });
}

function jsEnhanceAnchorAnalytics() {
    //Trigger analytics pageview on click of any # anchor
    $("a[href*='#']").click(function (e) {
        var hash = $(this).attr('href');
        var page = window.location.pathname + hash;
        jsEnhanceTriggerAnalyticsEvent(page);
    });
}

function jsEnhanceExternalLinks() {

    // Using regex instead of simply using 'host' because it causes error with security on Government browsers (IE9 so far)
    function getHostname(url) {
        var m = url.match(/^http(s?):\/\/[^/]+/);
        return m ? m[0] : null;
    }


    function eachAnchor(anchors) {

        $(anchors).each(function () {
            var href = $(this).attr("href");
            var hostname = getHostname(href);

            if (hostname) {
                if (hostname !== document.domain && hostname.indexOf('ons.gov.uk') == -1) {
                    $(this).attr('target', '_blank');
                }
            }

        });
    }

    eachAnchor('a[href^="http://"]:not([href*="loop11.com"]):not([href*="ons.gov.uk"])');
    eachAnchor('a[href^="https://"]:not([href*="loop11.com"]):not([href*="ons.gov.uk"])');
    eachAnchor('a[href*="nationalarchives.gov.uk"]');

}


//function jsEnhanceTableOfContents() {
//    if ($('body').contents().find('*').hasClass('page-content__main-content')) {
//
//        //remove html and body height 100% to allow jquery scroll functions to work properly
//        $('html, body').css('height', 'auto');
//
//
//        //insert sticky wrapper
//        var tocStickyWrap = $('<div class="table-of-contents--sticky__wrap print--hide"><div class="wrapper">');
//        $(tocStickyWrap).insertAfter($('#toc'));
//        $('.table-of-contents--sticky__wrap .wrapper').append('<h2 class="table-of-contents--sticky__heading">Table of contents</h2>');
//
//
//        //create select list of sections
//        var tocSelectList = $('<select class="table-of-contents--sticky__select ">');
//
//        $(tocSelectList).append($('<option/>', {
//            value: '',
//            text: '-- Select a section --'
//        }));
//
//        $('#toc li a').each(function(i) {
//            i = i + 1;
//            var text = i + '. ' + $(this).text();
//            var href = $(this).attr('href');
//            $(tocSelectList).append($('<option/>', {
//                value: href,
//                text: text
//            }));
//        });
//
//
//        //add toc select to sticky wrapper
//        $('.table-of-contents--sticky__wrap .wrapper').append(tocSelectList);
//
//        $('.table-of-contents--sticky__select').change(function() {
//            var location = $(this).find('option:selected').val();
//            if (location) {
//                // expands section if accordion
//                var section = $(location);
//                if (section.hasClass('is-collapsed')) {
//                    section.removeClass('is-collapsed').addClass('is-expanded');
//                }
//
//                var functionTrigger = true;
//
//                //animates scroll and offsets page to counteract sticky nav
//                $('html, body').animate({
//                    scrollTop: $(location).offset().top - 105
//                }, 1000, function() {
//                    //stops function running twice - once for 'html' and another for 'body'
//                    if (functionTrigger) {
//                        //adds location hash to url without causing page to jump to it - credit to http://lea.verou.me/2011/05/change-url-hash-without-page-jump/
//                        if (history.pushState) {
//                            history.pushState(null, null, location);
//                        }
//                        //TODO Add hash to window.location in IE8-9 (don't support history.pushState)
//                        // else {
//                        //     window.location.hash = location;
//                        //     $('html, body').scrollTop( $(location.hash).offset().top - 60 );
//                        // }
//
//                        var page = window.location.pathname + location;
//                        jsEnhanceTriggerAnalyticsEvent(page);
//                        functionTrigger = false;
//                    }
//                });
//            }
//        });
//
//
//
//        // sticky toc function that evaluates scroll position and activates the sticky toc as appropriate
//        function stickyTOC() {
//            var contentStart = $('.page-content__main-content').offset().top;
//            var scrollTop = $(window).scrollTop();
//            // console.log(scrollTop);
//            if (scrollTop > contentStart) {
//                $('#toc').addClass('table-of-contents-ordered-list-hide');
//                // $('#toc').removeClass('table-of-contents-ordered-list');
//                $('.page-content__main-content').css('padding-top', '96px');
//                $('.table-of-contents--sticky__wrap').show();
//            } else {
//                // $('#toc').addClass('table-of-contents-ordered-list');
//                $('#toc').removeClass('table-of-contents-ordered-list-hide');
//                $('.page-content__main-content').css('padding-top', '0');
//                $('.table-of-contents--sticky__wrap').hide();
//            }
//        }
//
//        stickyTOC();
//        $(window).scroll(function() {
//            stickyTOC();
//            // console.log($(window).scrollTop());
//        });
//    }
//}

function jsEnhanceScrollToSection() {

    //Animate scroll to anchor on same page
    $('.jsEnhanceAnimateScroll').click(function (e) {
        e.preventDefault();

        var target = this.hash;

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000, function () {
            location.hash = target;

            //TODO Fix root cause of IE offsetting. Temporary fix:
            //$('html, body').scrollTop( $(location.hash).offset().top - 60 );
        });
    });
}

// New T3 hover enhancement
function jsEnhanceHover() {
    var hoverTrigger = $('.js-hover-click'),
        hoverLink = hoverTrigger.find('a:first'),
        bgColour = function () {
            elem.css('background-color')
        },
        white = "rgb(255, 255, 255)",
        whiteHover = 'white-hover',
        greyHover = 'grey-hover';

    // Add span that covers whole tile area - meaning we don't have to hi-jack click
    hoverTrigger.each(function () {
        $(this).css('position', 'relative');
        var link = $(this).find('a:first');
        link.append('<span class="box__clickable"></span>');
    });

    //hoverTrigger.click(function() {
    //    //var link = $('a:first', this).attr('href');
    //    //window.location = link;
    //});

    function addHoverClass(elem) {
        if (bgColour === white) {
            $(elem).addClass(whiteHover)
        } else {
            $(elem).addClass(greyHover);
        }
    }

    function removeHoverClass(elem) {
        if (bgColour === white) {
            $(elem).removeClass(whiteHover)
        } else {
            $(elem).removeClass(greyHover);
        }
    }

    // Add styling on hover
    hoverTrigger.hover(function () {
            addHoverClass($(this));
        },
        function () {
            removeHoverClass($(this));
        });

    // Add hover styling on focus
    hoverLink.focus(function () {
        var $this = $(this),
            parentElem = $this.closest(hoverTrigger);
        if ($this.parent(hoverTrigger)) {
            addHoverClass(parentElem);
            $this.focusout(function () {
                removeHoverClass(parentElem)
            });
        }
    });
}

// Not used?
function jsEnhanceSelectedHighlight() {

    $('.js-timeseriestool-select').on("click", function () {

        //$('div').eq($(this).parent().index()).effect("highlight", {}, 1000);
        //$(this).closest( ".col-wrap").animate({
        //    backgroundColor: 'red',
        //    opacity: 0.4,
        //    marginLeft: "0.6in"
        //}, 1000);
        //if($(this).prop('checked')) {
        //    $(this).closest(".col-wrap").stop(true, false).addClass('background--iron-light', {duration: 500});
        //} else {
        //    $(this).closest(".col-wrap").stop(true, false).removeClass('background--iron-light', {duration: 500});
        //}

        if ($(this).prop('checked')) {
            $(this).closest(".col-wrap").addClass('background--gallery', 1000, "easeOutBounce");
        } else {
            $(this).closest(".col-wrap").removeClass('background--gallery', 1000, "easeOutBounce");
        }

    });

}

function jsEnhanceRemoveFocus() {

    //function to remove focus on click
    function removeFocus(elem) {
        $(elem).click(function () {
            //var target =  "#" + $(this).attr("for");
            //console.log("clicked = "+this);
            //console.log("target = "+target);

            this.blur();
        });
    }

    //run function on following elements/classes that have a focus state
    removeFocus("a");
    removeFocus(".accordion__title");
    removeFocus(".timeseries__chart");
}

function jsEnhanceTimeSeriesTool() {
    // timeseriesTool.refresh();
}


//Adds focus to highcharts filters when tabbed through
function jsEnhanceChartFocus() {
    //TODO Javascript considers arrow keydowns as a 'click' so can't use normal removeFocus function to stop focus on click (it breaks keyboard navigation by adding blur on arrow keydown).

    //$('.btn--chart-control input').focusin(function() {
    //	var radioGroup = $(this).closest('div[role="radiogroup"]');
    //	$(radioGroup).addClass('input--focus');
    //});
    //
    //$('.btn--chart-control input').focusout(function() {
    //	var radioGroup = $(this).closest('div[role="radiogroup"]');
    //	$(radioGroup).removeClass('input--focus');
    //});


    //Attempt to fix this problem but detects click as keyboard arrow click after you've focussed on it via keyboard

    //var leftArrow = 37;
    //var upArrow = 38;
    //var rightArrow = 39;
    //var downArrow = 40;
    //
    //$('.btn--chart-control input').keydown(function(e){
    //
    //	//detect whether input has been focused on using mouse or keyboard
    //	var keydownType = e.keyCode;
    //	console.log("keycode = " + keydownType);
    //
    //	//if triggered by arrow keys from keyboard run functions to add class on focus
    //	if (keydownType == leftArrow || keydownType == rightArrow) {
    //
    //		$('.btn--chart-control input').focusin(function() {
    //
    //			console.log("Keyboardy");
    //			var radioGroup = $(this).closest('div[role="radiogroup"]');
    //			$(radioGroup).addClass('input--focus');
    //		});
    //
    //		$('.btn--chart-control input').focusout(function() {
    //			var radioGroup = $(this).closest('div[role="radiogroup"]');
    //			$(radioGroup).removeClass('input--focus');
    //		});
    //
    //	} else {
    //		console.log("Clicky");
    //	}
    //});

}
$(window).load(function () {
    if ($('.timeseries__chart').length == 0) {
        // Enhance markdown charts
        $('.highcharts-container').each(function () {
            highchartsAccessibilityAttrs($(this), 'Chart representing data available in following XLS or CSV download');
        });
    } else {
        // Do accessibility goodness to T5
        timeseriesAccessibiliyAttrs()
    }
});

function highchartsAccessibilityAttrs(selector, labelText, removeAttrs) {
    if (!removeAttrs) {
        selector.attr('aria-label', labelText);
        selector.find('svg').attr('aria-hidden', 'true');
    } else {
        selector.attr('aria-label', '');
        selector.find('svg').attr('aria-hidden', 'false');
    }
}

function timeseriesAccessibiliyAttrs(removeAttrs) {
    highchartsAccessibilityAttrs($('.timeseries__chart'), 'Chart representing data available in table alternative. Select "table" in filters to display table', removeAttrs);
}
