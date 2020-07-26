var Hashtable = function() {
    function e(a) {
        if ("string" == typeof a) return a;
        return typeof a.hashCode == f ? (a = a.hashCode(), "string" == typeof a ? a : e(a)) : typeof a.toString == f ? a.toString() : "" + a;
    }

    function k(a, c) {
        return a.equals(c);
    }

    function h(a, c) {
        return typeof c.equals == f ? c.equals(a) : a === c;
    }

    function j(a) {
        return function(c) {
            if (null === c) throw Error("null is not a valid " + a);
            if ("undefined" == typeof c) throw Error(a + " must not be undefined");
        }
    }

    function m(a, c, b, d) {
        this[0] = a;
        this.entries = [];
        this.addEntry(c, b);
        if (null !== d) this.getEqualityFunction =
            function() { return d }
    }

    function q(a) {
        return function(c) {
            for (var b = this.entries.length, d, e = this.getEqualityFunction(c); b--;)
                if (d = this.entries[b], e(c, d[0])) switch (a) {
                    case r:
                        return !0;
                    case s:
                        return d;
                    case o:
                        return [b, d[1]];
                }
            return !1;
        }
    }

    function b(a) { return function(c) { for (var b = c.length, d = 0, e = this.entries.length; d < e; ++d) c[b + d] = this.entries[d][a] } }

    function c(a, c) { var b = a[c]; return b && b instanceof m ? b : null }

    function d(b, i) {
        var n = this,
            g = [],
            h = {},
            k = typeof b == f ? b : e,
            o = typeof i == f ? i : null;
        this.put = function(a, b) {
            p(a);
            t(b);
            var d = k(a),
                e, f = null;
            (e = c(h, d)) ? (d = e.getEntryForKey(a)) ? (f = d[1], d[1] = b) : e.addEntry(a, b): (e = new m(d, a, b, o), g[g.length] = e, h[d] = e);
            return f
        };
        this.get = function(a) {
            p(a);
            var b = k(a);
            if (b = c(h, b))
                if (a = b.getEntryForKey(a)) return a[1];
            return null
        };
        this.containsKey = function(a) { p(a); var b = k(a); return (b = c(h, b)) ? b.containsKey(a) : !1 };
        this.containsValue = function(a) {
            t(a);
            for (var b = g.length; b--;)
                if (g[b].containsValue(a)) return !0;
            return !1
        };
        this.clear = function() {
            g.length = 0;
            h = {}
        };
        this.isEmpty = function() { return !g.length };
        var j = function(a) { return function() { for (var b = [], c = g.length; c--;) g[c][a](b); return b } };
        this.keys = j("keys");
        this.values = j("values");
        this.entries = j("getEntries");
        this.remove = function(b) {
            p(b);
            var d = k(b),
                e = null,
                f = c(h, d);
            if (f && (e = f.removeEntryForKey(b), null !== e && !f.entries.length)) {
                a: {
                    for (b = g.length; b--;)
                        if (f = g[b], d === f[0]) break a;b = null
                }
                a(g, b);delete h[d]
            }
            return e
        };
        this.size = function() { for (var a = 0, b = g.length; b--;) a += g[b].entries.length; return a };
        this.each = function(a) {
            for (var b = n.entries(), c = b.length,
                    d; c--;) d = b[c], a(d[0], d[1])
        };
        this.putAll = function(a, b) {
            for (var c = a.entries(), d, e, g, l = c.length, i = typeof b == f; l--;) {
                d = c[l];
                e = d[0];
                d = d[1];
                if (i && (g = n.get(e))) d = b(e, g, d);
                n.put(e, d)
            }
        };
        this.clone = function() {
            var a = new d(b, i);
            a.putAll(n);
            return a
        }
    }
    var f = "function",
        a = typeof Array.prototype.splice == f ? function(a, b) { a.splice(b, 1) } : function(a, b) {
            var c, d, e;
            if (b === a.length - 1) a.length = b;
            else {
                c = a.slice(b + 1);
                a.length = b;
                for (d = 0, e = c.length; d < e; ++d) a[b + d] = c[d]
            }
        },
        p = j("key"),
        t = j("value"),
        r = 0,
        s = 1,
        o = 2;
    m.prototype = {
        getEqualityFunction: function(a) {
            return typeof a.equals ==
                f ? k : h
        },
        getEntryForKey: q(s),
        getEntryAndIndexForKey: q(o),
        removeEntryForKey: function(b) { return (b = this.getEntryAndIndexForKey(b)) ? (a(this.entries, b[0]), b[1]) : null },
        addEntry: function(a, b) { this.entries[this.entries.length] = [a, b] },
        keys: b(0),
        values: b(1),
        getEntries: function(a) { for (var b = a.length, c = 0, d = this.entries.length; c < d; ++c) a[b + c] = this.entries[c].slice(0) },
        containsKey: q(r),
        containsValue: function(a) {
            for (var b = this.entries.length; b--;)
                if (a === this.entries[b][1]) return !0;
            return !1
        }
    };
    return d
}();
(function(e) {
    function k(b, c, d) {
        this.dec = b;
        this.group = c;
        this.neg = d;
    }

    function h(b) {
        if (0 == j.size())
            for (var c = 0; c < q.length; c++) {
                localeGroup = q[c];
                for (var d = 0; d < localeGroup.length; d++)
                    j.put(localeGroup[d], c)
            }
        c = ".";
        d = ",";
        if (b = j.get(b))
            if (b = m[b])
                c = b[0], d = b[1];
        return new k(c, d, "-");
    }
    var j = new Hashtable,
        m = [
            [".", ","],
            [",", "."],
            [",", " "],
            [".", "'"]
        ],
        q = ["ae,au,ca,cn,eg,gb,hk,il,in,jp,sk,th,tw,us".split(","), "at,br,de,dk,es,gr,it,nl,pt,tr,vn".split(","), "cz,fi,fr,ru,se,pl".split(","), ["ch"]];
    e.fn.formatNumber = function(b, c, d) {
        return this.each(function() {
            null == c && (c = !0);
            null == d && (d = !0);
            var f;
            f = e(this).is(":input") ? new String(e(this).val()) : new String(e(this).text());
            f = e.formatNumber(f, b);
            c && (e(this).is(":input") ? e(this).val(f) : e(this).text(f));
            if (d) return f
        })
    };
    e.formatNumber = function(b, c) {
        c = e.extend({}, e.fn.formatNumber.defaults, c);
        h(c.locale.toLowerCase());
        for (var d = "", f = !1, a = 0; a < c.format.length; a++)
            if (-1 == "0#-,.".indexOf(c.format.charAt(a))) d += c.format.charAt(a);
            else if (0 == a && "-" == c.format.charAt(a)) f = !0;
        else break;
        for (var p = "", a = c.format.length - 1; 0 <= a; a--)
            if (-1 == "0#-,.".indexOf(c.format.charAt(a))) p = c.format.charAt(a) + p;
            else break;
        c.format = c.format.substring(d.length);
        c.format = c.format.substring(0, c.format.length - p.length);
        a = new Number(b);
        return e._formatNumber(a, c, p, d, f)
    };
    e._formatNumber = function(b, c, d, f, a) {
        var c = e.extend({}, e.fn.formatNumber.defaults, c),
            p = h(c.locale.toLowerCase()),
            k = p.dec,
            j = p.group,
            p = p.neg,
            m = !1;
        if (isNaN(b))
            if (!0 == c.nanForceZero) b = 0, m = !0;
            else return null;
        "%" == d && (b *= 100);
        var o = "";
        if (-1 < c.format.indexOf(".")) {
            var l =
                k,
                i = c.format.substring(c.format.lastIndexOf(".") + 1);
            !0 == c.round ? b = new Number(b.toFixed(i.length)) : (b = b.toString(), b = b.substring(0, b.lastIndexOf(".") + i.length + 1), b = new Number(b));
            for (var n = new String((b % 1).toFixed(i.length)), n = n.substring(n.lastIndexOf(".") + 1), g = 0; g < i.length; g++)
                if ("#" == i.charAt(g) && "0" != n.charAt(g)) l += n.charAt(g);
                else if ("#" == i.charAt(g) && "0" == n.charAt(g))
                if (n.substring(g).match("[1-9]")) l += n.charAt(g);
                else break;
            else "0" == i.charAt(g) && (l += n.charAt(g));
            o += l
        }
        else b = Math.round(b);
        g =
            Math.floor(b);
        0 > b && (g = Math.ceil(b));
        l = "";
        l = -1 == c.format.indexOf(".") ? c.format : c.format.substring(0, c.format.indexOf("."));
        i = "";
        if (!(0 == g && "#" == l.substr(l.length - 1)) || m) {
            m = new String(Math.abs(g));
            n = 9999; - 1 != l.lastIndexOf(",") && (n = l.length - l.lastIndexOf(",") - 1);
            for (var q = 0, g = m.length - 1; - 1 < g; g--) i = m.charAt(g) + i, q++, q == n && 0 != g && (i = j + i, q = 0);
            if (l.length > i.length && (j = l.indexOf("0"), -1 != j))
                for (j = l.length - j; i.length < j;) i = "0" + i
        }!i && -1 !== l.indexOf("0", l.length - 1) && (i = "0");
        o = i + o;
        0 > b && a && 0 < f.length ? f = p + f : 0 > b &&
            (o = p + o);
        c.decimalSeparatorAlwaysShown || o.lastIndexOf(k) == o.length - 1 && (o = o.substring(0, o.length - 1));
        return f + o + d
    };
    e.fn.parseNumber = function(b, c, d) {
        null == c && (c = !0);
        null == d && (d = !0);
        var f;
        f = e(this).is(":input") ? new String(e(this).val()) : new String(e(this).text());
        if (b = e.parseNumber(f, b))
            if (c && (e(this).is(":input") ? e(this).val(b.toString()) : e(this).text(b.toString())), d) return b
    };
    e.parseNumber = function(b, c) {
        for (var c = e.extend({}, e.fn.parseNumber.defaults, c), d = h(c.locale.toLowerCase()), f = d.dec, a = d.group,
                d = d.neg; - 1 < b.indexOf(a);) b = b.replace(a, "");
        b = b.replace(f, ".").replace(d, "-");
        f = "";
        a = !1;
        "%" == b.charAt(b.length - 1) && (a = !0);
        for (d = 0; d < b.length; d++) - 1 < "1234567890.-".indexOf(b.charAt(d)) && (f += b.charAt(d));
        d = new Number(f);
        a && (d = (d / 100).toFixed(f.length - 1));
        return d
    };
    e.fn.parseNumber.defaults = { locale: "us", decimalSeparatorAlwaysShown: !1 };
    e.fn.formatNumber.defaults = { format: "#,###.00", locale: "us", decimalSeparatorAlwaysShown: !1, nanForceZero: !0, round: !0 };
    Number.prototype.toFixed = function(b) {
        return $._roundNumber(this, b);
    };
    e._roundNumber = function(b, c) {
        var d = Math.pow(10, c || 0),
            d = "" + Math.round(b * d) / d;
        if (0 < c) {
            var e = d.indexOf("."); - 1 == e ? (d += ".", e = 0) : e = d.length - (e + 1);
            for (; e < c;) d += "0", e++;
        }
        return d;
    }
})(jQuery);

var helpfulCalculators = helpfulCalculators || {};
(function(e) {
    var k, h, j;

    function m(a, b) {
        a.empty();
        a.append(b);
    }

    function q(a) {
        return $.parseNumber(a, { format: "#,###", locale: "us" });
    }

    e.formatToRoundNumberOnBlur = function(a) {
        a.blur(function() {
            0 !== a.parseNumber({ format: "#,###.00", locale: "us" }) && a.formatNumber({ format: "#,###", locale: "us" });
        })
    };

    e.formatToPrecisionNumberOnBlur = function(a) {
        a.blur(function() {
            a.parseNumber({
                format: "#,###.00",
                locale: "us"
            });
            a.formatNumber({ format: "#,###.00", locale: "us" })
        })
    };

    e.addValidatorMethods = function() {
        $.validator.addMethod("naturalCf", function(a, b) {
            return this.optional(b) || 1 <= q(a);
        }, "Please enter a positive number");
        $.validator.addMethod("numberCf", function(a, b) {
            return this.optional(b) || 0 <= q(a);
        }, "Please enter a positive number");
    };

    e.setClearOnChange = function(a, b) {
        a.change(function() {});
    };

    e.parseCfNum = q;

    e.formatToCfNum = function(a) {
        return (a = $.formatNumber(a, { format: "#,###", locale: "us" })) ? a : 0;
    };

    e.clearText = function(a) {
        a.empty();
        a.append("&nbsp;");
    };

    e.setText = m;

    e.clearInput = function(a) {
        a.empty();
        a.val("");
    };

    e.setInput = function(a, b) {
        a.empty();
        a.val(b);
    };

    e.negativeToZero = function(a) {
        return 0 > a ? 0 : a;
    };

    e.chartBgColor = "#F3EEEA";
})(helpfulCalculators = helpfulCalculators || {});
