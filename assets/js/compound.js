// TODO
// Read labels from HTML - but add default
// Read Size from HTML - but add default

var helpfulCalculators = helpfulCalculators || {};
(function(a) {
    function o() {
        for (var k = a.parseCfNum($("#base").val()), c = a.parseCfNum($("#rate").val()), d = a.parseCfNum($("#years").val()), e = a.parseCfNum($("#deposit").val()), b = k, f = 0, h = c / 12, d = 12 * d, i, g = 0, c = [], j = [], l = 1; l <= d; l++) 0 === l % 1 && (i = b * h / 100, b += i, g += i, b += e, f += e, b.toFixed(2), i.toFixed(2), c[l - 1] = parseFloat(g.toFixed(2), 10), j[l - 1] = f);
        b = b.toFixed(2);
        a.setText($("#amount"), a.formatToCfNum(b));
        a.setText($("#totalDeposits"), a.formatToCfNum(f));
        a.setText($("#totalInterest"), a.formatToCfNum(g));
        if (p && null !== document.getElementById("chart_div")) {
            f = new google.visualization.DataTable;
            b = s(d, t);
            j = q(j, b);
            c = q(c, b);
            g = c.length;
            h = b;
            b = [];
            12 <= h && (h /= 12);
            for (i = 0; i < g; i++) {
                b[i] = ((i + 1) * h).toString() + " " + (12 <= d / g ? "Years" : "Months");
            }
            d = [];
            for (g = 0; g < c.length; g++) {
                d[g] = parseInt(k, 10);
            } 
            d = 0 < k && 0 < e ? m(b, d, j, c) : 0 < k && 0 >= e ? m(b, d, c) : 0 >= k && 0 < e ? m(b, j, c) : m(b, c);
            c = [];
            j = new google.visualization.ColumnChart(document.getElementById("chart_div"));
            b = {
                width: 600,
                height: 400,
                chartArea: { top: 20 },
                backgroundColor: a.chartBgColor,
                colors: c,
                legend: "in",
                isStacked: !0,
                vAxis: { title: "Balance" }
            };
            f.addColumn("string", "xLabels");
            0 < k && (f.addColumn("number", "Principal"), c.push("blue"));
            0 < e && (f.addColumn("number", "Deposits"), c.push("orange"));
            f.addColumn("number", "Interest");
            c.push("green");
            f.addRows(d);
            j.draw(f, b);
        }
    }

    function n() {
        reset();
        $("#chart_div").empty();
    }

    function reset() { 
        a.clearText($("#amount"));
        a.clearText($("#totalDeposits"));
        a.clearText($("#totalInterest"));
    }

    function s(a, c) {
        var d = 3;
        if (a <= c) return 1;
        if (a <= 2 * c) return 2;
        for (;;) { 
            if (a <= c * d) return d;
            d *= 2; 
            if (25E3 < d) return d;
        }
    }

    function q(a, c) { 
        var d = []; 
        if (1 > c) 
            return a; 
        for (var e = a.length - 1; - 1 < e; e -= c) 
            d.push(a[e]); 
            return d.reverse(); 
    }

    function m() {
        var a = Array.prototype.slice.call(arguments),
            c,
            d = [],
            e = [];
        if (0 === a.length || "undefined" === typeof a[0].length) return [];
        if (1 === a.length) return a[0];
        c = a[0].length;
        for (var b = 0; b < a.length; b++)
            if ("undefined" === typeof a[b].length || a[b].length !== c) return [];
        for (b = 0; b < c; b++) {
            for (var e = [], f = 0; f < a.length; f++) e.push(a[f][b]);
            d.push(e);
        }
        return d;
    }
    
    if (document.getElementById("chart_div")) {
        google.load("visualization", "1", { packages: ["corechart"] });
        google.setOnLoadCallback(function() { 
            p = !0;
            o();
            $("#calcButton").attr("disabled", !1);
            $("#clearButton").attr("disabled", !1);
            $("#clearButton").click(function() {
                a.clearInput($("#base"));
                a.clearInput($("#rate"));
                a.clearInput($("#years"));
                a.clearInput($("#deposit"));
                r();
                $("#chart_div").empty();
            }) 
        });
    
        var p = !1,
            t = 24;
    }

    $(document).ready(function() {
        a.formatToRoundNumberOnBlur($("#base"));
        a.formatToRoundNumberOnBlur($("#deposit"));
        a.formatToPrecisionNumberOnBlur($("#rate"));
        a.formatToRoundNumberOnBlur($("#years"));
        a.setClearOnChange($("#base"), n);
        a.setClearOnChange($("#deposit"), n);
        a.setClearOnChange($("#rate"), n);
        a.setClearOnChange($("#years"), n);
        a.addValidatorMethods();
        $("#compoundForm").validate({
            onfocusout: !1,
            debug: !0,
            rules: { base: { required: !1, numberCf: !0 }, deposit: { required: !1, numberCf: !0 }, rate: { required: !0, range: [0, 100] }, years: { required: !0, naturalCf: !0 } },
            messages: {
                base: { numberCf: "Enter a positive number, or 0" },
                deposit: { numberCf: "Enter a positive number, or 0" },
                rate: { required: "Enter an interest rate e.g. 7.3", range: "Enter an interest rate from 0 to 100 e.g. 7.3" },
                years: { required: "Enter repayment period in years", naturalCf: "Enter a number >= 1" }
            },
            submitHandler: o
        })
    })
})(helpfulCalculators = helpfulCalculators || {});
