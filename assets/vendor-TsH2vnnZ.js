let Ka, kA, mn, jA, HA, qA, FA, OA, GA, PA, AA, pi, ff, vA, Pr, xe, hi, tr, Cs, WA, yA, qs, H, XA, ru, bn, Ze, Ya, $t, _i, _f, xi, pf, Dn, Lh, le, CA, rn, Vh, DA, LA, qr, Yh, kh, NA, cf, ms, So, zh, Be, xs, ys, Ds, te, Zn, Is, Qn, zn, Er, Wh, jh, HR, EA, RA, Ke, Cd, BA, nc, In, Te, Po, gn, IA, xA, MA, SA, sn, Tr, YA, VA, UA, Wt, Ji, en, zA, Gt, Wc;
let __tla = (async ()=>{
    let Lo, Rd, hc, Ad, _h, Pn, We, Yn, Gi, dc, uc, fc, Pd, ui, Id, Dd, Ld, Ud, Nd, Fd, Od, Bd, Oa, Ba, zd, Hd, kd, Vd, Gd, Wd, jd, Xd, qd, za, Ha, ka, Xi, Va, Ga, Wa, ja, ph, Yd, Kd, Kn, Zd, Jd, $d, Qd, tu, eu, nu, _c, iu, mh, qi, Yi, Xa, qa, As, Nn, gh, wh, wr, Uo, mi, _n, Mr, No, Fo, Ki, bh, vh, yh, nn, xh, Sh, Wi, Zi, Oo, Bo, Mh, zo, Ho, ls, hs, ds, us, Za, Ja, $a, Qa, to, eo, no, io, ro, so, ao, oo, co, lo, ho, uo, fo, _o, po, mo, go, fs, wo, bo, Eh, vo, yo, xo, Ys, pc, mc, gc, su, au, ou, Th, cu, Xn, gs, ce, Mi, wc, lu, hu, du, Rh, uu, fu, _u, pu, Mo, bc, Ln, ws;
    Lo = "174";
    vA = {
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    };
    yA = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    };
    Rd = 0;
    hc = 1;
    Ad = 2;
    _h = 1;
    Cd = 2;
    Pn = 3;
    Zn = 0;
    We = 1;
    Dn = 2;
    Yn = 0;
    Gi = 1;
    dc = 2;
    uc = 3;
    fc = 4;
    Pd = 5;
    ui = 100;
    Id = 101;
    Dd = 102;
    Ld = 103;
    Ud = 104;
    Nd = 200;
    Fd = 201;
    Od = 202;
    Bd = 203;
    Oa = 204;
    Ba = 205;
    zd = 206;
    Hd = 207;
    kd = 208;
    Vd = 209;
    Gd = 210;
    Wd = 211;
    jd = 212;
    Xd = 213;
    qd = 214;
    za = 0;
    Ha = 1;
    ka = 2;
    Xi = 3;
    Va = 4;
    Ga = 5;
    Wa = 6;
    ja = 7;
    ph = 0;
    Yd = 1;
    Kd = 2;
    Kn = 0;
    Zd = 1;
    Jd = 2;
    $d = 3;
    Qd = 4;
    tu = 5;
    eu = 6;
    nu = 7;
    _c = "attached";
    iu = "detached";
    mh = 300;
    qi = 301;
    Yi = 302;
    Xa = 303;
    qa = 304;
    As = 306;
    Ya = 1e3;
    _i = 1001;
    Ka = 1002;
    Ze = 1003;
    ru = 1004;
    Pr = 1005;
    bn = 1006;
    qs = 1007;
    pi = 1008;
    Nn = 1009;
    gh = 1010;
    wh = 1011;
    wr = 1012;
    Uo = 1013;
    mi = 1014;
    _n = 1015;
    Mr = 1016;
    No = 1017;
    Fo = 1018;
    Ki = 1020;
    bh = 35902;
    vh = 1021;
    yh = 1022;
    nn = 1023;
    xh = 1024;
    Sh = 1025;
    Wi = 1026;
    Zi = 1027;
    Oo = 1028;
    Bo = 1029;
    Mh = 1030;
    zo = 1031;
    Ho = 1033;
    ls = 33776;
    hs = 33777;
    ds = 33778;
    us = 33779;
    Za = 35840;
    Ja = 35841;
    $a = 35842;
    Qa = 35843;
    to = 36196;
    eo = 37492;
    no = 37496;
    io = 37808;
    ro = 37809;
    so = 37810;
    ao = 37811;
    oo = 37812;
    co = 37813;
    lo = 37814;
    ho = 37815;
    uo = 37816;
    fo = 37817;
    _o = 37818;
    po = 37819;
    mo = 37820;
    go = 37821;
    fs = 36492;
    wo = 36494;
    bo = 36495;
    Eh = 36283;
    vo = 36284;
    yo = 36285;
    xo = 36286;
    ms = 2300;
    So = 2301;
    Ys = 2302;
    pc = 2400;
    mc = 2401;
    gc = 2402;
    su = 2500;
    xA = 0;
    SA = 1;
    MA = 2;
    au = 3200;
    ou = 3201;
    Th = 0;
    cu = 1;
    Xn = "";
    en = "srgb";
    Ji = "srgb-linear";
    gs = "linear";
    ce = "srgb";
    Mi = 7680;
    wc = 519;
    lu = 512;
    hu = 513;
    du = 514;
    Rh = 515;
    uu = 516;
    fu = 517;
    _u = 518;
    pu = 519;
    Mo = 35044;
    bc = "300 es";
    Ln = 2e3;
    ws = 2001;
    class yi {
        addEventListener(t, e) {
            this._listeners === void 0 && (this._listeners = {});
            const n = this._listeners;
            n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
        }
        hasEventListener(t, e) {
            const n = this._listeners;
            return n === void 0 ? !1 : n[t] !== void 0 && n[t].indexOf(e) !== -1;
        }
        removeEventListener(t, e) {
            const n = this._listeners;
            if (n === void 0) return;
            const r = n[t];
            if (r !== void 0) {
                const s = r.indexOf(e);
                s !== -1 && r.splice(s, 1);
            }
        }
        dispatchEvent(t) {
            const e = this._listeners;
            if (e === void 0) return;
            const n = e[t.type];
            if (n !== void 0) {
                t.target = this;
                const r = n.slice(0);
                for(let s = 0, a = r.length; s < a; s++)r[s].call(this, t);
                t.target = null;
            }
        }
    }
    const Ne = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0a",
        "0b",
        "0c",
        "0d",
        "0e",
        "0f",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1a",
        "1b",
        "1c",
        "1d",
        "1e",
        "1f",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4a",
        "4b",
        "4c",
        "4d",
        "4e",
        "4f",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5a",
        "5b",
        "5c",
        "5d",
        "5e",
        "5f",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6a",
        "6b",
        "6c",
        "6d",
        "6e",
        "6f",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7a",
        "7b",
        "7c",
        "7d",
        "7e",
        "7f",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8a",
        "8b",
        "8c",
        "8d",
        "8e",
        "8f",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9a",
        "9b",
        "9c",
        "9d",
        "9e",
        "9f",
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "aa",
        "ab",
        "ac",
        "ad",
        "ae",
        "af",
        "b0",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "ba",
        "bb",
        "bc",
        "bd",
        "be",
        "bf",
        "c0",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "c9",
        "ca",
        "cb",
        "cc",
        "cd",
        "ce",
        "cf",
        "d0",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "da",
        "db",
        "dc",
        "dd",
        "de",
        "df",
        "e0",
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7",
        "e8",
        "e9",
        "ea",
        "eb",
        "ec",
        "ed",
        "ee",
        "ef",
        "f0",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "fa",
        "fb",
        "fc",
        "fd",
        "fe",
        "ff"
    ];
    let vc = 1234567;
    const pr = Math.PI / 180, $i = 180 / Math.PI;
    function pn() {
        const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
        return (Ne[i & 255] + Ne[i >> 8 & 255] + Ne[i >> 16 & 255] + Ne[i >> 24 & 255] + "-" + Ne[t & 255] + Ne[t >> 8 & 255] + "-" + Ne[t >> 16 & 15 | 64] + Ne[t >> 24 & 255] + "-" + Ne[e & 63 | 128] + Ne[e >> 8 & 255] + "-" + Ne[e >> 16 & 255] + Ne[e >> 24 & 255] + Ne[n & 255] + Ne[n >> 8 & 255] + Ne[n >> 16 & 255] + Ne[n >> 24 & 255]).toLowerCase();
    }
    function kt(i, t, e) {
        return Math.max(t, Math.min(e, i));
    }
    function ko(i, t) {
        return (i % t + t) % t;
    }
    function mu(i, t, e, n, r) {
        return n + (i - t) * (r - n) / (e - t);
    }
    function gu(i, t, e) {
        return i !== t ? (e - i) / (t - i) : 0;
    }
    function mr(i, t, e) {
        return (1 - e) * i + e * t;
    }
    function wu(i, t, e, n) {
        return mr(i, t, 1 - Math.exp(-e * n));
    }
    function bu(i, t = 1) {
        return t - Math.abs(ko(i, t * 2) - t);
    }
    function vu(i, t, e) {
        return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * (3 - 2 * i));
    }
    function yu(i, t, e) {
        return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * i * (i * (i * 6 - 15) + 10));
    }
    function xu(i, t) {
        return i + Math.floor(Math.random() * (t - i + 1));
    }
    function Su(i, t) {
        return i + Math.random() * (t - i);
    }
    function Mu(i) {
        return i * (.5 - Math.random());
    }
    function Eu(i) {
        i !== void 0 && (vc = i);
        let t = vc += 1831565813;
        return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
    function Tu(i) {
        return i * pr;
    }
    function Ru(i) {
        return i * $i;
    }
    function Au(i) {
        return (i & i - 1) === 0 && i !== 0;
    }
    function Cu(i) {
        return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
    }
    function Pu(i) {
        return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
    }
    function Iu(i, t, e, n, r) {
        const s = Math.cos, a = Math.sin, o = s(e / 2), c = a(e / 2), l = s((t + n) / 2), h = a((t + n) / 2), u = s((t - n) / 2), f = a((t - n) / 2), m = s((n - t) / 2), w = a((n - t) / 2);
        switch(r){
            case "XYX":
                i.set(o * h, c * u, c * f, o * l);
                break;
            case "YZY":
                i.set(c * f, o * h, c * u, o * l);
                break;
            case "ZXZ":
                i.set(c * u, c * f, o * h, o * l);
                break;
            case "XZX":
                i.set(o * h, c * w, c * m, o * l);
                break;
            case "YXY":
                i.set(c * m, o * h, c * w, o * l);
                break;
            case "ZYZ":
                i.set(c * w, c * m, o * h, o * l);
                break;
            default:
                console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
        }
    }
    function fn(i, t) {
        switch(t.constructor){
            case Float32Array:
                return i;
            case Uint32Array:
                return i / 4294967295;
            case Uint16Array:
                return i / 65535;
            case Uint8Array:
                return i / 255;
            case Int32Array:
                return Math.max(i / 2147483647, -1);
            case Int16Array:
                return Math.max(i / 32767, -1);
            case Int8Array:
                return Math.max(i / 127, -1);
            default:
                throw new Error("Invalid component type.");
        }
    }
    function oe(i, t) {
        switch(t.constructor){
            case Float32Array:
                return i;
            case Uint32Array:
                return Math.round(i * 4294967295);
            case Uint16Array:
                return Math.round(i * 65535);
            case Uint8Array:
                return Math.round(i * 255);
            case Int32Array:
                return Math.round(i * 2147483647);
            case Int16Array:
                return Math.round(i * 32767);
            case Int8Array:
                return Math.round(i * 127);
            default:
                throw new Error("Invalid component type.");
        }
    }
    EA = {
        DEG2RAD: pr,
        RAD2DEG: $i,
        generateUUID: pn,
        clamp: kt,
        euclideanModulo: ko,
        mapLinear: mu,
        inverseLerp: gu,
        lerp: mr,
        damp: wu,
        pingpong: bu,
        smoothstep: vu,
        smootherstep: yu,
        randInt: xu,
        randFloat: Su,
        randFloatSpread: Mu,
        seededRandom: Eu,
        degToRad: Tu,
        radToDeg: Ru,
        isPowerOfTwo: Au,
        ceilPowerOfTwo: Cu,
        floorPowerOfTwo: Pu,
        setQuaternionFromProperEuler: Iu,
        normalize: oe,
        denormalize: fn
    };
    $t = class {
        constructor(t = 0, e = 0){
            $t.prototype.isVector2 = !0, this.x = t, this.y = e;
        }
        get width() {
            return this.x;
        }
        set width(t) {
            this.x = t;
        }
        get height() {
            return this.y;
        }
        set height(t) {
            this.y = t;
        }
        set(t, e) {
            return this.x = t, this.y = e, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this;
        }
        add(t) {
            return this.x += t.x, this.y += t.y, this;
        }
        addScalar(t) {
            return this.x += t, this.y += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this;
        }
        sub(t) {
            return this.x -= t.x, this.y -= t.y, this;
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this;
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
            const e = this.x, n = this.y, r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6], this.y = r[1] * e + r[4] * n + r[7], this;
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
        }
        clamp(t, e) {
            return this.x = kt(this.x, t.x, e.x), this.y = kt(this.y, t.y, e.y), this;
        }
        clampScalar(t, e) {
            return this.x = kt(this.x, t, e), this.y = kt(this.y, t, e), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(kt(n, t, e));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y;
        }
        cross(t) {
            return this.x * t.y - this.y * t.x;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (e === 0) return Math.PI / 2;
            const n = this.dot(t) / e;
            return Math.acos(kt(n, -1, 1));
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x, n = this.y - t.y;
            return e * e + n * n;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t;
        }
        fromBufferAttribute(t, e) {
            return this.x = t.getX(e), this.y = t.getY(e), this;
        }
        rotateAround(t, e) {
            const n = Math.cos(e), r = Math.sin(e), s = this.x - t.x, a = this.y - t.y;
            return this.x = s * n - a * r + t.x, this.y = s * r + a * n + t.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    };
    class Ft {
        constructor(t, e, n, r, s, a, o, c, l){
            Ft.prototype.isMatrix3 = !0, this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], t !== void 0 && this.set(t, e, n, r, s, a, o, c, l);
        }
        set(t, e, n, r, s, a, o, c, l) {
            const h = this.elements;
            return h[0] = t, h[1] = r, h[2] = o, h[3] = e, h[4] = s, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
            const e = this.elements, n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
        }
        extractBasis(t, e, n) {
            return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
        }
        multiply(t) {
            return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], f = n[2], m = n[5], w = n[8], b = r[0], g = r[3], _ = r[6], R = r[1], E = r[4], S = r[7], N = r[2], C = r[5], I = r[8];
            return s[0] = a * b + o * R + c * N, s[3] = a * g + o * E + c * C, s[6] = a * _ + o * S + c * I, s[1] = l * b + h * R + u * N, s[4] = l * g + h * E + u * C, s[7] = l * _ + h * S + u * I, s[2] = f * b + m * R + w * N, s[5] = f * g + m * E + w * C, s[8] = f * _ + m * S + w * I, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8];
            return e * a * h - e * o * l - n * s * h + n * o * c + r * s * l - r * a * c;
        }
        invert() {
            const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = h * a - o * l, f = o * c - h * s, m = l * s - a * c, w = e * u + n * f + r * m;
            if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const b = 1 / w;
            return t[0] = u * b, t[1] = (r * l - h * n) * b, t[2] = (o * n - r * a) * b, t[3] = f * b, t[4] = (h * e - r * c) * b, t[5] = (r * s - o * e) * b, t[6] = m * b, t[7] = (n * c - l * e) * b, t[8] = (a * e - n * s) * b, this;
        }
        transpose() {
            let t;
            const e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
        }
        getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
            const e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
        }
        setUvTransform(t, e, n, r, s, a, o) {
            const c = Math.cos(s), l = Math.sin(s);
            return this.set(n * c, n * l, -n * (c * a + l * o) + a + t, -r * l, r * c, -r * (-l * a + c * o) + o + e, 0, 0, 1), this;
        }
        scale(t, e) {
            return this.premultiply(Ks.makeScale(t, e)), this;
        }
        rotate(t) {
            return this.premultiply(Ks.makeRotation(-t)), this;
        }
        translate(t, e) {
            return this.premultiply(Ks.makeTranslation(t, e)), this;
        }
        makeTranslation(t, e) {
            return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
        }
        makeRotation(t) {
            const e = Math.cos(t), n = Math.sin(t);
            return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
        }
        makeScale(t, e) {
            return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
        }
        equals(t) {
            const e = this.elements, n = t.elements;
            for(let r = 0; r < 9; r++)if (e[r] !== n[r]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for(let n = 0; n < 9; n++)this.elements[n] = t[n + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
        }
        clone() {
            return new this.constructor().fromArray(this.elements);
        }
    }
    const Ks = new Ft;
    function Ah(i) {
        for(let t = i.length - 1; t >= 0; --t)if (i[t] >= 65535) return !0;
        return !1;
    }
    function br(i) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", i);
    }
    function Du() {
        const i = br("canvas");
        return i.style.display = "block", i;
    }
    const yc = {};
    function li(i) {
        i in yc || (yc[i] = !0, console.warn(i));
    }
    function Lu(i, t, e) {
        return new Promise(function(n, r) {
            function s() {
                switch(i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)){
                    case i.WAIT_FAILED:
                        r();
                        break;
                    case i.TIMEOUT_EXPIRED:
                        setTimeout(s, e);
                        break;
                    default:
                        n();
                }
            }
            setTimeout(s, e);
        });
    }
    function Uu(i) {
        const t = i.elements;
        t[2] = .5 * t[2] + .5 * t[3], t[6] = .5 * t[6] + .5 * t[7], t[10] = .5 * t[10] + .5 * t[11], t[14] = .5 * t[14] + .5 * t[15];
    }
    function Nu(i) {
        const t = i.elements;
        t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
    }
    const xc = new Ft().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Sc = new Ft().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
    function Fu() {
        const i = {
            enabled: !0,
            workingColorSpace: Ji,
            spaces: {},
            convert: function(r, s, a) {
                return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === ce && (r.r = Un(r.r), r.g = Un(r.g), r.b = Un(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === ce && (r.r = ji(r.r), r.g = ji(r.g), r.b = ji(r.b))), r;
            },
            fromWorkingColorSpace: function(r, s) {
                return this.convert(r, this.workingColorSpace, s);
            },
            toWorkingColorSpace: function(r, s) {
                return this.convert(r, s, this.workingColorSpace);
            },
            getPrimaries: function(r) {
                return this.spaces[r].primaries;
            },
            getTransfer: function(r) {
                return r === Xn ? gs : this.spaces[r].transfer;
            },
            getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
                return r.fromArray(this.spaces[s].luminanceCoefficients);
            },
            define: function(r) {
                Object.assign(this.spaces, r);
            },
            _getMatrix: function(r, s, a) {
                return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
            },
            _getDrawingBufferColorSpace: function(r) {
                return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
            },
            _getUnpackColorSpace: function(r = this.workingColorSpace) {
                return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
            }
        }, t = [
            .64,
            .33,
            .3,
            .6,
            .15,
            .06
        ], e = [
            .2126,
            .7152,
            .0722
        ], n = [
            .3127,
            .329
        ];
        return i.define({
            [Ji]: {
                primaries: t,
                whitePoint: n,
                transfer: gs,
                toXYZ: xc,
                fromXYZ: Sc,
                luminanceCoefficients: e,
                workingColorSpaceConfig: {
                    unpackColorSpace: en
                },
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: en
                }
            },
            [en]: {
                primaries: t,
                whitePoint: n,
                transfer: ce,
                toXYZ: xc,
                fromXYZ: Sc,
                luminanceCoefficients: e,
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: en
                }
            }
        }), i;
    }
    te = Fu();
    function Un(i) {
        return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4);
    }
    function ji(i) {
        return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055;
    }
    let Ei;
    class Ou {
        static getDataURL(t) {
            if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
            let e;
            if (t instanceof HTMLCanvasElement) e = t;
            else {
                Ei === void 0 && (Ei = br("canvas")), Ei.width = t.width, Ei.height = t.height;
                const n = Ei.getContext("2d");
                t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Ei;
            }
            return e.toDataURL("image/png");
        }
        static sRGBToLinear(t) {
            if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
                const e = br("canvas");
                e.width = t.width, e.height = t.height;
                const n = e.getContext("2d");
                n.drawImage(t, 0, 0, t.width, t.height);
                const r = n.getImageData(0, 0, t.width, t.height), s = r.data;
                for(let a = 0; a < s.length; a++)s[a] = Un(s[a] / 255) * 255;
                return n.putImageData(r, 0, 0), e;
            } else if (t.data) {
                const e = t.data.slice(0);
                for(let n = 0; n < e.length; n++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(Un(e[n] / 255) * 255) : e[n] = Un(e[n]);
                return {
                    data: e,
                    width: t.width,
                    height: t.height
                };
            } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
        }
    }
    let Bu = 0;
    class Vo {
        constructor(t = null){
            this.isSource = !0, Object.defineProperty(this, "id", {
                value: Bu++
            }), this.uuid = pn(), this.data = t, this.dataReady = !0, this.version = 0;
        }
        set needsUpdate(t) {
            t === !0 && this.version++;
        }
        toJSON(t) {
            const e = t === void 0 || typeof t == "string";
            if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
            const n = {
                uuid: this.uuid,
                url: ""
            }, r = this.data;
            if (r !== null) {
                let s;
                if (Array.isArray(r)) {
                    s = [];
                    for(let a = 0, o = r.length; a < o; a++)r[a].isDataTexture ? s.push(Zs(r[a].image)) : s.push(Zs(r[a]));
                } else s = Zs(r);
                n.url = s;
            }
            return e || (t.images[this.uuid] = n), n;
        }
    }
    function Zs(i) {
        return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Ou.getDataURL(i) : i.data ? {
            data: Array.from(i.data),
            width: i.width,
            height: i.height,
            type: i.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    let zu = 0;
    Be = class extends yi {
        constructor(t = Be.DEFAULT_IMAGE, e = Be.DEFAULT_MAPPING, n = _i, r = _i, s = bn, a = pi, o = nn, c = Nn, l = Be.DEFAULT_ANISOTROPY, h = Xn){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: zu++
            }), this.uuid = pn(), this.name = "", this.source = new Vo(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new $t(0, 0), this.repeat = new $t(1, 1), this.center = new $t(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ft, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
        }
        get image() {
            return this.source.data;
        }
        set image(t = null) {
            this.source.data = t;
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
        }
        toJSON(t) {
            const e = t === void 0 || typeof t == "string";
            if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.6,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(t).uuid,
                mapping: this.mapping,
                channel: this.channel,
                repeat: [
                    this.repeat.x,
                    this.repeat.y
                ],
                offset: [
                    this.offset.x,
                    this.offset.y
                ],
                center: [
                    this.center.x,
                    this.center.y
                ],
                rotation: this.rotation,
                wrap: [
                    this.wrapS,
                    this.wrapT
                ],
                format: this.format,
                internalFormat: this.internalFormat,
                type: this.type,
                colorSpace: this.colorSpace,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                generateMipmaps: this.generateMipmaps,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        transformUv(t) {
            if (this.mapping !== mh) return t;
            if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch(this.wrapS){
                case Ya:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case _i:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case Ka:
                    Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
                    break;
            }
            if (t.y < 0 || t.y > 1) switch(this.wrapT){
                case Ya:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case _i:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case Ka:
                    Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
                    break;
            }
            return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
            t === !0 && (this.version++, this.source.needsUpdate = !0);
        }
        set needsPMREMUpdate(t) {
            t === !0 && this.pmremVersion++;
        }
    };
    Be.DEFAULT_IMAGE = null;
    Be.DEFAULT_MAPPING = mh;
    Be.DEFAULT_ANISOTROPY = 1;
    class ne {
        constructor(t = 0, e = 0, n = 0, r = 1){
            ne.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = r;
        }
        get width() {
            return this.z;
        }
        set width(t) {
            this.z = t;
        }
        get height() {
            return this.w;
        }
        set height(t) {
            this.w = t;
        }
        set(t, e, n, r) {
            return this.x = t, this.y = e, this.z = n, this.w = r, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setZ(t) {
            return this.z = t, this;
        }
        setW(t) {
            return this.w = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
        }
        add(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
        }
        addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
        }
        sub(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
        }
        applyMatrix4(t) {
            const e = this.x, n = this.y, r = this.z, s = this.w, a = t.elements;
            return this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * s, this;
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, n, r, s;
            const c = t.elements, l = c[0], h = c[4], u = c[8], f = c[1], m = c[5], w = c[9], b = c[2], g = c[6], _ = c[10];
            if (Math.abs(h - f) < .01 && Math.abs(u - b) < .01 && Math.abs(w - g) < .01) {
                if (Math.abs(h + f) < .1 && Math.abs(u + b) < .1 && Math.abs(w + g) < .1 && Math.abs(l + m + _ - 3) < .1) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                const E = (l + 1) / 2, S = (m + 1) / 2, N = (_ + 1) / 2, C = (h + f) / 4, I = (u + b) / 4, B = (w + g) / 4;
                return E > S && E > N ? E < .01 ? (n = 0, r = .707106781, s = .707106781) : (n = Math.sqrt(E), r = C / n, s = I / n) : S > N ? S < .01 ? (n = .707106781, r = 0, s = .707106781) : (r = Math.sqrt(S), n = C / r, s = B / r) : N < .01 ? (n = .707106781, r = .707106781, s = 0) : (s = Math.sqrt(N), n = I / s, r = B / s), this.set(n, r, s, e), this;
            }
            let R = Math.sqrt((g - w) * (g - w) + (u - b) * (u - b) + (f - h) * (f - h));
            return Math.abs(R) < .001 && (R = 1), this.x = (g - w) / R, this.y = (u - b) / R, this.z = (f - h) / R, this.w = Math.acos((l + m + _ - 1) / 2), this;
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
        }
        clamp(t, e) {
            return this.x = kt(this.x, t.x, e.x), this.y = kt(this.y, t.y, e.y), this.z = kt(this.z, t.z, e.z), this.w = kt(this.w, t.w, e.w), this;
        }
        clampScalar(t, e) {
            return this.x = kt(this.x, t, e), this.y = kt(this.y, t, e), this.z = kt(this.z, t, e), this.w = kt(this.w, t, e), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(kt(n, t, e));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
        }
        fromBufferAttribute(t, e) {
            return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w;
        }
    }
    class Hu extends yi {
        constructor(t = 1, e = 1, n = {}){
            super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new ne(0, 0, t, e), this.scissorTest = !1, this.viewport = new ne(0, 0, t, e);
            const r = {
                width: t,
                height: e,
                depth: 1
            };
            n = Object.assign({
                generateMipmaps: !1,
                internalFormat: null,
                minFilter: bn,
                depthBuffer: !0,
                stencilBuffer: !1,
                resolveDepthBuffer: !0,
                resolveStencilBuffer: !0,
                depthTexture: null,
                samples: 0,
                count: 1
            }, n);
            const s = new Be(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
            s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
            const a = n.count;
            for(let o = 0; o < a; o++)this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
            this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples;
        }
        get texture() {
            return this.textures[0];
        }
        set texture(t) {
            this.textures[0] = t;
        }
        set depthTexture(t) {
            this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t;
        }
        get depthTexture() {
            return this._depthTexture;
        }
        setSize(t, e, n = 1) {
            if (this.width !== t || this.height !== e || this.depth !== n) {
                this.width = t, this.height = e, this.depth = n;
                for(let r = 0, s = this.textures.length; r < s; r++)this.textures[r].image.width = t, this.textures[r].image.height = e, this.textures[r].image.depth = n;
                this.dispose();
            }
            this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
            for(let e = 0, n = t.textures.length; e < n; e++){
                this.textures[e] = t.textures[e].clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
                const r = Object.assign({}, t.textures[e].image);
                this.textures[e].source = new Vo(r);
            }
            return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    class gi extends Hu {
        constructor(t = 1, e = 1, n = {}){
            super(t, e, n), this.isWebGLRenderTarget = !0;
        }
    }
    class Ch extends Be {
        constructor(t = null, e = 1, n = 1, r = 1){
            super(null), this.isDataArrayTexture = !0, this.image = {
                data: t,
                width: e,
                height: n,
                depth: r
            }, this.magFilter = Ze, this.minFilter = Ze, this.wrapR = _i, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set;
        }
        addLayerUpdate(t) {
            this.layerUpdates.add(t);
        }
        clearLayerUpdates() {
            this.layerUpdates.clear();
        }
    }
    class ku extends Be {
        constructor(t = null, e = 1, n = 1, r = 1){
            super(null), this.isData3DTexture = !0, this.image = {
                data: t,
                width: e,
                height: n,
                depth: r
            }, this.magFilter = Ze, this.minFilter = Ze, this.wrapR = _i, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    tr = class {
        constructor(t = 0, e = 0, n = 0, r = 1){
            this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = r;
        }
        static slerpFlat(t, e, n, r, s, a, o) {
            let c = n[r + 0], l = n[r + 1], h = n[r + 2], u = n[r + 3];
            const f = s[a + 0], m = s[a + 1], w = s[a + 2], b = s[a + 3];
            if (o === 0) {
                t[e + 0] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
                return;
            }
            if (o === 1) {
                t[e + 0] = f, t[e + 1] = m, t[e + 2] = w, t[e + 3] = b;
                return;
            }
            if (u !== b || c !== f || l !== m || h !== w) {
                let g = 1 - o;
                const _ = c * f + l * m + h * w + u * b, R = _ >= 0 ? 1 : -1, E = 1 - _ * _;
                if (E > Number.EPSILON) {
                    const N = Math.sqrt(E), C = Math.atan2(N, _ * R);
                    g = Math.sin(g * C) / N, o = Math.sin(o * C) / N;
                }
                const S = o * R;
                if (c = c * g + f * S, l = l * g + m * S, h = h * g + w * S, u = u * g + b * S, g === 1 - o) {
                    const N = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
                    c *= N, l *= N, h *= N, u *= N;
                }
            }
            t[e] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
        }
        static multiplyQuaternionsFlat(t, e, n, r, s, a) {
            const o = n[r], c = n[r + 1], l = n[r + 2], h = n[r + 3], u = s[a], f = s[a + 1], m = s[a + 2], w = s[a + 3];
            return t[e] = o * w + h * u + c * m - l * f, t[e + 1] = c * w + h * f + l * u - o * m, t[e + 2] = l * w + h * m + o * f - c * u, t[e + 3] = h * w - o * u - c * f - l * m, t;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x = t, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y = t, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            this._z = t, this._onChangeCallback();
        }
        get w() {
            return this._w;
        }
        set w(t) {
            this._w = t, this._onChangeCallback();
        }
        set(t, e, n, r) {
            return this._x = t, this._y = e, this._z = n, this._w = r, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
        }
        setFromEuler(t, e = !0) {
            const n = t._x, r = t._y, s = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(r / 2), u = o(s / 2), f = c(n / 2), m = c(r / 2), w = c(s / 2);
            switch(a){
                case "XYZ":
                    this._x = f * h * u + l * m * w, this._y = l * m * u - f * h * w, this._z = l * h * w + f * m * u, this._w = l * h * u - f * m * w;
                    break;
                case "YXZ":
                    this._x = f * h * u + l * m * w, this._y = l * m * u - f * h * w, this._z = l * h * w - f * m * u, this._w = l * h * u + f * m * w;
                    break;
                case "ZXY":
                    this._x = f * h * u - l * m * w, this._y = l * m * u + f * h * w, this._z = l * h * w + f * m * u, this._w = l * h * u - f * m * w;
                    break;
                case "ZYX":
                    this._x = f * h * u - l * m * w, this._y = l * m * u + f * h * w, this._z = l * h * w - f * m * u, this._w = l * h * u + f * m * w;
                    break;
                case "YZX":
                    this._x = f * h * u + l * m * w, this._y = l * m * u + f * h * w, this._z = l * h * w - f * m * u, this._w = l * h * u - f * m * w;
                    break;
                case "XZY":
                    this._x = f * h * u - l * m * w, this._y = l * m * u - f * h * w, this._z = l * h * w + f * m * u, this._w = l * h * u + f * m * w;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
            }
            return e === !0 && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
            const n = e / 2, r = Math.sin(n);
            return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t) {
            const e = t.elements, n = e[0], r = e[4], s = e[8], a = e[1], o = e[5], c = e[9], l = e[2], h = e[6], u = e[10], f = n + o + u;
            if (f > 0) {
                const m = .5 / Math.sqrt(f + 1);
                this._w = .25 / m, this._x = (h - c) * m, this._y = (s - l) * m, this._z = (a - r) * m;
            } else if (n > o && n > u) {
                const m = 2 * Math.sqrt(1 + n - o - u);
                this._w = (h - c) / m, this._x = .25 * m, this._y = (r + a) / m, this._z = (s + l) / m;
            } else if (o > u) {
                const m = 2 * Math.sqrt(1 + o - n - u);
                this._w = (s - l) / m, this._x = (r + a) / m, this._y = .25 * m, this._z = (c + h) / m;
            } else {
                const m = 2 * Math.sqrt(1 + u - n - o);
                this._w = (a - r) / m, this._x = (s + l) / m, this._y = (c + h) / m, this._z = .25 * m;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
            let n = t.dot(e) + 1;
            return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(kt(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
            const n = this.angleTo(t);
            if (n === 0) return this;
            const r = Math.min(1, e / n);
            return this.slerp(t, r), this;
        }
        identity() {
            return this.set(0, 0, 0, 1);
        }
        invert() {
            return this.conjugate();
        }
        conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
        }
        dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
            let t = this.length();
            return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
        }
        multiply(t) {
            return this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
            return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
            const n = t._x, r = t._y, s = t._z, a = t._w, o = e._x, c = e._y, l = e._z, h = e._w;
            return this._x = n * h + a * o + r * l - s * c, this._y = r * h + a * c + s * o - n * l, this._z = s * h + a * l + n * c - r * o, this._w = a * h - n * o - r * c - s * l, this._onChangeCallback(), this;
        }
        slerp(t, e) {
            if (e === 0) return this;
            if (e === 1) return this.copy(t);
            const n = this._x, r = this._y, s = this._z, a = this._w;
            let o = a * t._w + n * t._x + r * t._y + s * t._z;
            if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = s, this;
            const c = 1 - o * o;
            if (c <= Number.EPSILON) {
                const m = 1 - e;
                return this._w = m * a + e * this._w, this._x = m * n + e * this._x, this._y = m * r + e * this._y, this._z = m * s + e * this._z, this.normalize(), this;
            }
            const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - e) * h) / l, f = Math.sin(e * h) / l;
            return this._w = a * u + this._w * f, this._x = n * u + this._x * f, this._y = r * u + this._y * f, this._z = s * u + this._z * f, this._onChangeCallback(), this;
        }
        slerpQuaternions(t, e, n) {
            return this.copy(t).slerp(e, n);
        }
        random() {
            const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
            return this.set(r * Math.sin(t), r * Math.cos(t), s * Math.sin(e), s * Math.cos(e));
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
        }
        fromArray(t, e = 0) {
            return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
        }
        fromBufferAttribute(t, e) {
            return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
        }
        toJSON() {
            return this.toArray();
        }
        _onChange(t) {
            return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w;
        }
    };
    H = class Ph {
        constructor(t = 0, e = 0, n = 0){
            Ph.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
        }
        set(t, e, n) {
            return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setZ(t) {
            return this.z = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this;
        }
        add(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z, this;
        }
        addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
        }
        sub(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this;
        }
        multiplyVectors(t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
        }
        applyEuler(t) {
            return this.applyQuaternion(Mc.setFromEuler(t));
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(Mc.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
            const e = this.x, n = this.y, r = this.z, s = t.elements;
            return this.x = s[0] * e + s[3] * n + s[6] * r, this.y = s[1] * e + s[4] * n + s[7] * r, this.z = s[2] * e + s[5] * n + s[8] * r, this;
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
            const e = this.x, n = this.y, r = this.z, s = t.elements, a = 1 / (s[3] * e + s[7] * n + s[11] * r + s[15]);
            return this.x = (s[0] * e + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * e + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * e + s[6] * n + s[10] * r + s[14]) * a, this;
        }
        applyQuaternion(t) {
            const e = this.x, n = this.y, r = this.z, s = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * r - o * n), h = 2 * (o * e - s * r), u = 2 * (s * n - a * e);
            return this.x = e + c * l + a * u - o * h, this.y = n + c * h + o * l - s * u, this.z = r + c * u + s * h - a * l, this;
        }
        project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
        }
        unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
        }
        transformDirection(t) {
            const e = this.x, n = this.y, r = this.z, s = t.elements;
            return this.x = s[0] * e + s[4] * n + s[8] * r, this.y = s[1] * e + s[5] * n + s[9] * r, this.z = s[2] * e + s[6] * n + s[10] * r, this.normalize();
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
        }
        clamp(t, e) {
            return this.x = kt(this.x, t.x, e.x), this.y = kt(this.y, t.y, e.y), this.z = kt(this.z, t.z, e.z), this;
        }
        clampScalar(t, e) {
            return this.x = kt(this.x, t, e), this.y = kt(this.y, t, e), this.z = kt(this.z, t, e), this;
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(kt(n, t, e));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
        }
        cross(t) {
            return this.crossVectors(this, t);
        }
        crossVectors(t, e) {
            const n = t.x, r = t.y, s = t.z, a = e.x, o = e.y, c = e.z;
            return this.x = r * c - s * o, this.y = s * a - n * c, this.z = n * o - r * a, this;
        }
        projectOnVector(t) {
            const e = t.lengthSq();
            if (e === 0) return this.set(0, 0, 0);
            const n = t.dot(this) / e;
            return this.copy(t).multiplyScalar(n);
        }
        projectOnPlane(t) {
            return Js.copy(this).projectOnVector(t), this.sub(Js);
        }
        reflect(t) {
            return this.sub(Js.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (e === 0) return Math.PI / 2;
            const n = this.dot(t) / e;
            return Math.acos(kt(n, -1, 1));
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x, n = this.y - t.y, r = this.z - t.z;
            return e * e + n * n + r * r;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
        }
        setFromSpherical(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, n) {
            const r = Math.sin(e) * t;
            return this.x = r * Math.sin(n), this.y = Math.cos(e) * t, this.z = r * Math.cos(n), this;
        }
        setFromCylindrical(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, n) {
            return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this;
        }
        setFromMatrixScale(t) {
            const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = n, this.z = r, this;
        }
        setFromMatrixColumn(t, e) {
            return this.fromArray(t.elements, e * 4);
        }
        setFromMatrix3Column(t, e) {
            return this.fromArray(t.elements, e * 3);
        }
        setFromEuler(t) {
            return this.x = t._x, this.y = t._y, this.z = t._z, this;
        }
        setFromColor(t) {
            return this.x = t.r, this.y = t.g, this.z = t.b, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
        }
        fromBufferAttribute(t, e) {
            return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
        }
        randomDirection() {
            const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
            return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z;
        }
    };
    const Js = new H, Mc = new tr;
    Qn = class {
        constructor(t = new H(1 / 0, 1 / 0, 1 / 0), e = new H(-1 / 0, -1 / 0, -1 / 0)){
            this.isBox3 = !0, this.min = t, this.max = e;
        }
        set(t, e) {
            return this.min.copy(t), this.max.copy(e), this;
        }
        setFromArray(t) {
            this.makeEmpty();
            for(let e = 0, n = t.length; e < n; e += 3)this.expandByPoint(cn.fromArray(t, e));
            return this;
        }
        setFromBufferAttribute(t) {
            this.makeEmpty();
            for(let e = 0, n = t.count; e < n; e++)this.expandByPoint(cn.fromBufferAttribute(t, e));
            return this;
        }
        setFromPoints(t) {
            this.makeEmpty();
            for(let e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]);
            return this;
        }
        setFromCenterAndSize(t, e) {
            const n = cn.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        setFromObject(t, e = !1) {
            return this.makeEmpty(), this.expandByObject(t, e);
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        }
        getCenter(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
            return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
            return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        expandByObject(t, e = !1) {
            t.updateWorldMatrix(!1, !1);
            const n = t.geometry;
            if (n !== void 0) {
                const s = n.getAttribute("position");
                if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0) for(let a = 0, o = s.count; a < o; a++)t.isMesh === !0 ? t.getVertexPosition(a, cn) : cn.fromBufferAttribute(s, a), cn.applyMatrix4(t.matrixWorld), this.expandByPoint(cn);
                else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Ir.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ir.copy(n.boundingBox)), Ir.applyMatrix4(t.matrixWorld), this.union(Ir);
            }
            const r = t.children;
            for(let s = 0, a = r.length; s < a; s++)this.expandByObject(r[s], e);
            return this;
        }
        containsPoint(t) {
            return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
        }
        getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
        }
        intersectsBox(t) {
            return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
        }
        intersectsSphere(t) {
            return this.clampPoint(t.center, cn), cn.distanceToSquared(t.center) <= t.radius * t.radius;
        }
        intersectsPlane(t) {
            let e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
        }
        intersectsTriangle(t) {
            if (this.isEmpty()) return !1;
            this.getCenter(sr), Dr.subVectors(this.max, sr), Ti.subVectors(t.a, sr), Ri.subVectors(t.b, sr), Ai.subVectors(t.c, sr), Hn.subVectors(Ri, Ti), kn.subVectors(Ai, Ri), ni.subVectors(Ti, Ai);
            let e = [
                0,
                -Hn.z,
                Hn.y,
                0,
                -kn.z,
                kn.y,
                0,
                -ni.z,
                ni.y,
                Hn.z,
                0,
                -Hn.x,
                kn.z,
                0,
                -kn.x,
                ni.z,
                0,
                -ni.x,
                -Hn.y,
                Hn.x,
                0,
                -kn.y,
                kn.x,
                0,
                -ni.y,
                ni.x,
                0
            ];
            return !$s(e, Ti, Ri, Ai, Dr) || (e = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], !$s(e, Ti, Ri, Ai, Dr)) ? !1 : (Lr.crossVectors(Hn, kn), e = [
                Lr.x,
                Lr.y,
                Lr.z
            ], $s(e, Ti, Ri, Ai, Dr));
        }
        clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
            return this.clampPoint(t, cn).distanceTo(t);
        }
        getBoundingSphere(t) {
            return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(cn).length() * .5), t;
        }
        intersect(t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(t) {
            return this.min.min(t.min), this.max.max(t.max), this;
        }
        applyMatrix4(t) {
            return this.isEmpty() ? this : (Mn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Mn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Mn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Mn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Mn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Mn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Mn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Mn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Mn), this);
        }
        translate(t) {
            return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max);
        }
    };
    const Mn = [
        new H,
        new H,
        new H,
        new H,
        new H,
        new H,
        new H,
        new H
    ], cn = new H, Ir = new Qn, Ti = new H, Ri = new H, Ai = new H, Hn = new H, kn = new H, ni = new H, sr = new H, Dr = new H, Lr = new H, ii = new H;
    function $s(i, t, e, n, r) {
        for(let s = 0, a = i.length - 3; s <= a; s += 3){
            ii.fromArray(i, s);
            const o = r.x * Math.abs(ii.x) + r.y * Math.abs(ii.y) + r.z * Math.abs(ii.z), c = t.dot(ii), l = e.dot(ii), h = n.dot(ii);
            if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o) return !1;
        }
        return !0;
    }
    const Vu = new Qn, ar = new H, Qs = new H;
    zn = class {
        constructor(t = new H, e = -1){
            this.isSphere = !0, this.center = t, this.radius = e;
        }
        set(t, e) {
            return this.center.copy(t), this.radius = e, this;
        }
        setFromPoints(t, e) {
            const n = this.center;
            e !== void 0 ? n.copy(e) : Vu.setFromPoints(t).getCenter(n);
            let r = 0;
            for(let s = 0, a = t.length; s < a; s++)r = Math.max(r, n.distanceToSquared(t[s]));
            return this.radius = Math.sqrt(r), this;
        }
        copy(t) {
            return this.center.copy(t.center), this.radius = t.radius, this;
        }
        isEmpty() {
            return this.radius < 0;
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this;
        }
        containsPoint(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t) {
            return t.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t) {
            const e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t) {
            return t.intersectsSphere(this);
        }
        intersectsPlane(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t, e) {
            const n = this.center.distanceToSquared(t);
            return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
        }
        getBoundingBox(t) {
            return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
        }
        applyMatrix4(t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
        }
        translate(t) {
            return this.center.add(t), this;
        }
        expandByPoint(t) {
            if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
            ar.subVectors(t, this.center);
            const e = ar.lengthSq();
            if (e > this.radius * this.radius) {
                const n = Math.sqrt(e), r = (n - this.radius) * .5;
                this.center.addScaledVector(ar, r / n), this.radius += r;
            }
            return this;
        }
        union(t) {
            return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Qs.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(ar.copy(t.center).add(Qs)), this.expandByPoint(ar.copy(t.center).sub(Qs))), this);
        }
        equals(t) {
            return t.center.equals(this.center) && t.radius === this.radius;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    };
    const En = new H, ta = new H, Ur = new H, Vn = new H, ea = new H, Nr = new H, na = new H;
    Cs = class {
        constructor(t = new H, e = new H(0, 0, -1)){
            this.origin = t, this.direction = e;
        }
        set(t, e) {
            return this.origin.copy(t), this.direction.copy(e), this;
        }
        copy(t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
        }
        at(t, e) {
            return e.copy(this.origin).addScaledVector(this.direction, t);
        }
        lookAt(t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this;
        }
        recast(t) {
            return this.origin.copy(this.at(t, En)), this;
        }
        closestPointToPoint(t, e) {
            e.subVectors(t, this.origin);
            const n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
        }
        distanceToPoint(t) {
            return Math.sqrt(this.distanceSqToPoint(t));
        }
        distanceSqToPoint(t) {
            const e = En.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (En.copy(this.origin).addScaledVector(this.direction, e), En.distanceToSquared(t));
        }
        distanceSqToSegment(t, e, n, r) {
            ta.copy(t).add(e).multiplyScalar(.5), Ur.copy(e).sub(t).normalize(), Vn.copy(this.origin).sub(ta);
            const s = t.distanceTo(e) * .5, a = -this.direction.dot(Ur), o = Vn.dot(this.direction), c = -Vn.dot(Ur), l = Vn.lengthSq(), h = Math.abs(1 - a * a);
            let u, f, m, w;
            if (h > 0) if (u = a * c - o, f = a * o - c, w = s * h, u >= 0) if (f >= -w) if (f <= w) {
                const b = 1 / h;
                u *= b, f *= b, m = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * c) + l;
            } else f = s, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * c) + l;
            else f = -s, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * c) + l;
            else f <= -w ? (u = Math.max(0, -(-a * s + o)), f = u > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -u * u + f * (f + 2 * c) + l) : f <= w ? (u = 0, f = Math.min(Math.max(-s, -c), s), m = f * (f + 2 * c) + l) : (u = Math.max(0, -(a * s + o)), f = u > 0 ? s : Math.min(Math.max(-s, -c), s), m = -u * u + f * (f + 2 * c) + l);
            else f = a > 0 ? -s : s, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * c) + l;
            return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(ta).addScaledVector(Ur, f), m;
        }
        intersectSphere(t, e) {
            En.subVectors(t.center, this.origin);
            const n = En.dot(this.direction), r = En.dot(En) - n * n, s = t.radius * t.radius;
            if (r > s) return null;
            const a = Math.sqrt(s - r), o = n - a, c = n + a;
            return c < 0 ? null : o < 0 ? this.at(c, e) : this.at(o, e);
        }
        intersectsSphere(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        }
        distanceToPlane(t) {
            const e = t.normal.dot(this.direction);
            if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
            const n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null;
        }
        intersectPlane(t, e) {
            const n = this.distanceToPlane(t);
            return n === null ? null : this.at(n, e);
        }
        intersectsPlane(t) {
            const e = t.distanceToPoint(this.origin);
            return e === 0 || t.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t, e) {
            let n, r, s, a, o, c;
            const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
            return l >= 0 ? (n = (t.min.x - f.x) * l, r = (t.max.x - f.x) * l) : (n = (t.max.x - f.x) * l, r = (t.min.x - f.x) * l), h >= 0 ? (s = (t.min.y - f.y) * h, a = (t.max.y - f.y) * h) : (s = (t.max.y - f.y) * h, a = (t.min.y - f.y) * h), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (t.min.z - f.z) * u, c = (t.max.z - f.z) * u) : (o = (t.max.z - f.z) * u, c = (t.min.z - f.z) * u), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, e);
        }
        intersectsBox(t) {
            return this.intersectBox(t, En) !== null;
        }
        intersectTriangle(t, e, n, r, s) {
            ea.subVectors(e, t), Nr.subVectors(n, t), na.crossVectors(ea, Nr);
            let a = this.direction.dot(na), o;
            if (a > 0) {
                if (r) return null;
                o = 1;
            } else if (a < 0) o = -1, a = -a;
            else return null;
            Vn.subVectors(this.origin, t);
            const c = o * this.direction.dot(Nr.crossVectors(Vn, Nr));
            if (c < 0) return null;
            const l = o * this.direction.dot(ea.cross(Vn));
            if (l < 0 || c + l > a) return null;
            const h = -o * Vn.dot(na);
            return h < 0 ? null : this.at(h / a, s);
        }
        applyMatrix4(t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
        }
        equals(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction);
        }
        clone() {
            return new this.constructor().copy(this);
        }
    };
    Gt = class {
        constructor(t, e, n, r, s, a, o, c, l, h, u, f, m, w, b, g){
            Gt.prototype.isMatrix4 = !0, this.elements = [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ], t !== void 0 && this.set(t, e, n, r, s, a, o, c, l, h, u, f, m, w, b, g);
        }
        set(t, e, n, r, s, a, o, c, l, h, u, f, m, w, b, g) {
            const _ = this.elements;
            return _[0] = t, _[4] = e, _[8] = n, _[12] = r, _[1] = s, _[5] = a, _[9] = o, _[13] = c, _[2] = l, _[6] = h, _[10] = u, _[14] = f, _[3] = m, _[7] = w, _[11] = b, _[15] = g, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return new Gt().fromArray(this.elements);
        }
        copy(t) {
            const e = this.elements, n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
        }
        copyPosition(t) {
            const e = this.elements, n = t.elements;
            return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
        }
        setFromMatrix3(t) {
            const e = t.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(t, e, n) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t) {
            const e = this.elements, n = t.elements, r = 1 / Ci.setFromMatrixColumn(t, 0).length(), s = 1 / Ci.setFromMatrixColumn(t, 1).length(), a = 1 / Ci.setFromMatrixColumn(t, 2).length();
            return e[0] = n[0] * r, e[1] = n[1] * r, e[2] = n[2] * r, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromEuler(t) {
            const e = this.elements, n = t.x, r = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), h = Math.cos(s), u = Math.sin(s);
            if (t.order === "XYZ") {
                const f = a * h, m = a * u, w = o * h, b = o * u;
                e[0] = c * h, e[4] = -c * u, e[8] = l, e[1] = m + w * l, e[5] = f - b * l, e[9] = -o * c, e[2] = b - f * l, e[6] = w + m * l, e[10] = a * c;
            } else if (t.order === "YXZ") {
                const f = c * h, m = c * u, w = l * h, b = l * u;
                e[0] = f + b * o, e[4] = w * o - m, e[8] = a * l, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = m * o - w, e[6] = b + f * o, e[10] = a * c;
            } else if (t.order === "ZXY") {
                const f = c * h, m = c * u, w = l * h, b = l * u;
                e[0] = f - b * o, e[4] = -a * u, e[8] = w + m * o, e[1] = m + w * o, e[5] = a * h, e[9] = b - f * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
            } else if (t.order === "ZYX") {
                const f = a * h, m = a * u, w = o * h, b = o * u;
                e[0] = c * h, e[4] = w * l - m, e[8] = f * l + b, e[1] = c * u, e[5] = b * l + f, e[9] = m * l - w, e[2] = -l, e[6] = o * c, e[10] = a * c;
            } else if (t.order === "YZX") {
                const f = a * c, m = a * l, w = o * c, b = o * l;
                e[0] = c * h, e[4] = b - f * u, e[8] = w * u + m, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -l * h, e[6] = m * u + w, e[10] = f - b * u;
            } else if (t.order === "XZY") {
                const f = a * c, m = a * l, w = o * c, b = o * l;
                e[0] = c * h, e[4] = -u, e[8] = l * h, e[1] = f * u + b, e[5] = a * h, e[9] = m * u - w, e[2] = w * u - m, e[6] = o * h, e[10] = b * u + f;
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromQuaternion(t) {
            return this.compose(Gu, t, Wu);
        }
        lookAt(t, e, n) {
            const r = this.elements;
            return Xe.subVectors(t, e), Xe.lengthSq() === 0 && (Xe.z = 1), Xe.normalize(), Gn.crossVectors(n, Xe), Gn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Xe.x += 1e-4 : Xe.z += 1e-4, Xe.normalize(), Gn.crossVectors(n, Xe)), Gn.normalize(), Fr.crossVectors(Xe, Gn), r[0] = Gn.x, r[4] = Fr.x, r[8] = Xe.x, r[1] = Gn.y, r[5] = Fr.y, r[9] = Xe.y, r[2] = Gn.z, r[6] = Fr.z, r[10] = Xe.z, this;
        }
        multiply(t) {
            return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const n = t.elements, r = e.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], f = n[9], m = n[13], w = n[2], b = n[6], g = n[10], _ = n[14], R = n[3], E = n[7], S = n[11], N = n[15], C = r[0], I = r[4], B = r[8], M = r[12], x = r[1], D = r[5], j = r[9], W = r[13], Y = r[2], tt = r[6], K = r[10], rt = r[14], q = r[3], lt = r[7], pt = r[11], St = r[15];
            return s[0] = a * C + o * x + c * Y + l * q, s[4] = a * I + o * D + c * tt + l * lt, s[8] = a * B + o * j + c * K + l * pt, s[12] = a * M + o * W + c * rt + l * St, s[1] = h * C + u * x + f * Y + m * q, s[5] = h * I + u * D + f * tt + m * lt, s[9] = h * B + u * j + f * K + m * pt, s[13] = h * M + u * W + f * rt + m * St, s[2] = w * C + b * x + g * Y + _ * q, s[6] = w * I + b * D + g * tt + _ * lt, s[10] = w * B + b * j + g * K + _ * pt, s[14] = w * M + b * W + g * rt + _ * St, s[3] = R * C + E * x + S * Y + N * q, s[7] = R * I + E * D + S * tt + N * lt, s[11] = R * B + E * j + S * K + N * pt, s[15] = R * M + E * W + S * rt + N * St, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], n = t[4], r = t[8], s = t[12], a = t[1], o = t[5], c = t[9], l = t[13], h = t[2], u = t[6], f = t[10], m = t[14], w = t[3], b = t[7], g = t[11], _ = t[15];
            return w * (+s * c * u - r * l * u - s * o * f + n * l * f + r * o * m - n * c * m) + b * (+e * c * m - e * l * f + s * a * f - r * a * m + r * l * h - s * c * h) + g * (+e * l * u - e * o * m - s * a * u + n * a * m + s * o * h - n * l * h) + _ * (-r * o * h - e * c * u + e * o * f + r * a * u - n * a * f + n * c * h);
        }
        transpose() {
            const t = this.elements;
            let e;
            return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
        }
        setPosition(t, e, n) {
            const r = this.elements;
            return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = e, r[14] = n), this;
        }
        invert() {
            const t = this.elements, e = t[0], n = t[1], r = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = t[9], f = t[10], m = t[11], w = t[12], b = t[13], g = t[14], _ = t[15], R = u * g * l - b * f * l + b * c * m - o * g * m - u * c * _ + o * f * _, E = w * f * l - h * g * l - w * c * m + a * g * m + h * c * _ - a * f * _, S = h * b * l - w * u * l + w * o * m - a * b * m - h * o * _ + a * u * _, N = w * u * c - h * b * c - w * o * f + a * b * f + h * o * g - a * u * g, C = e * R + n * E + r * S + s * N;
            if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const I = 1 / C;
            return t[0] = R * I, t[1] = (b * f * s - u * g * s - b * r * m + n * g * m + u * r * _ - n * f * _) * I, t[2] = (o * g * s - b * c * s + b * r * l - n * g * l - o * r * _ + n * c * _) * I, t[3] = (u * c * s - o * f * s - u * r * l + n * f * l + o * r * m - n * c * m) * I, t[4] = E * I, t[5] = (h * g * s - w * f * s + w * r * m - e * g * m - h * r * _ + e * f * _) * I, t[6] = (w * c * s - a * g * s - w * r * l + e * g * l + a * r * _ - e * c * _) * I, t[7] = (a * f * s - h * c * s + h * r * l - e * f * l - a * r * m + e * c * m) * I, t[8] = S * I, t[9] = (w * u * s - h * b * s - w * n * m + e * b * m + h * n * _ - e * u * _) * I, t[10] = (a * b * s - w * o * s + w * n * l - e * b * l - a * n * _ + e * o * _) * I, t[11] = (h * o * s - a * u * s - h * n * l + e * u * l + a * n * m - e * o * m) * I, t[12] = N * I, t[13] = (h * b * r - w * u * r + w * n * f - e * b * f - h * n * g + e * u * g) * I, t[14] = (w * o * r - a * b * r - w * n * c + e * b * c + a * n * g - e * o * g) * I, t[15] = (a * u * r - h * o * r + h * n * c - e * u * c - a * n * f + e * o * f) * I, this;
        }
        scale(t) {
            const e = this.elements, n = t.x, r = t.y, s = t.z;
            return e[0] *= n, e[4] *= r, e[8] *= s, e[1] *= n, e[5] *= r, e[9] *= s, e[2] *= n, e[6] *= r, e[10] *= s, e[3] *= n, e[7] *= r, e[11] *= s, this;
        }
        getMaxScaleOnAxis() {
            const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, r));
        }
        makeTranslation(t, e, n) {
            return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(t) {
            const e = Math.cos(t), n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(t) {
            const e = Math.cos(t), n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(t) {
            const e = Math.cos(t), n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(t, e) {
            const n = Math.cos(e), r = Math.sin(e), s = 1 - n, a = t.x, o = t.y, c = t.z, l = s * a, h = s * o;
            return this.set(l * a + n, l * o - r * c, l * c + r * o, 0, l * o + r * c, h * o + n, h * c - r * a, 0, l * c - r * o, h * c + r * a, s * c * c + n, 0, 0, 0, 0, 1), this;
        }
        makeScale(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, n, r, s, a) {
            return this.set(1, n, s, 0, t, 1, a, 0, e, r, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, n) {
            const r = this.elements, s = e._x, a = e._y, o = e._z, c = e._w, l = s + s, h = a + a, u = o + o, f = s * l, m = s * h, w = s * u, b = a * h, g = a * u, _ = o * u, R = c * l, E = c * h, S = c * u, N = n.x, C = n.y, I = n.z;
            return r[0] = (1 - (b + _)) * N, r[1] = (m + S) * N, r[2] = (w - E) * N, r[3] = 0, r[4] = (m - S) * C, r[5] = (1 - (f + _)) * C, r[6] = (g + R) * C, r[7] = 0, r[8] = (w + E) * I, r[9] = (g - R) * I, r[10] = (1 - (f + b)) * I, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
        }
        decompose(t, e, n) {
            const r = this.elements;
            let s = Ci.set(r[0], r[1], r[2]).length();
            const a = Ci.set(r[4], r[5], r[6]).length(), o = Ci.set(r[8], r[9], r[10]).length();
            this.determinant() < 0 && (s = -s), t.x = r[12], t.y = r[13], t.z = r[14], ln.copy(this);
            const l = 1 / s, h = 1 / a, u = 1 / o;
            return ln.elements[0] *= l, ln.elements[1] *= l, ln.elements[2] *= l, ln.elements[4] *= h, ln.elements[5] *= h, ln.elements[6] *= h, ln.elements[8] *= u, ln.elements[9] *= u, ln.elements[10] *= u, e.setFromRotationMatrix(ln), n.x = s, n.y = a, n.z = o, this;
        }
        makePerspective(t, e, n, r, s, a, o = Ln) {
            const c = this.elements, l = 2 * s / (e - t), h = 2 * s / (n - r), u = (e + t) / (e - t), f = (n + r) / (n - r);
            let m, w;
            if (o === Ln) m = -(a + s) / (a - s), w = -2 * a * s / (a - s);
            else if (o === ws) m = -a / (a - s), w = -a * s / (a - s);
            else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
            return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = m, c[14] = w, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
        }
        makeOrthographic(t, e, n, r, s, a, o = Ln) {
            const c = this.elements, l = 1 / (e - t), h = 1 / (n - r), u = 1 / (a - s), f = (e + t) * l, m = (n + r) * h;
            let w, b;
            if (o === Ln) w = (a + s) * u, b = -2 * u;
            else if (o === ws) w = s * u, b = -1 * u;
            else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
            return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -f, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -m, c[2] = 0, c[6] = 0, c[10] = b, c[14] = -w, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
        }
        equals(t) {
            const e = this.elements, n = t.elements;
            for(let r = 0; r < 16; r++)if (e[r] !== n[r]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for(let n = 0; n < 16; n++)this.elements[n] = t[n + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
        }
    };
    const Ci = new H, ln = new Gt, Gu = new H(0, 0, 0), Wu = new H(1, 1, 1), Gn = new H, Fr = new H, Xe = new H, Ec = new Gt, Tc = new tr;
    class vn {
        constructor(t = 0, e = 0, n = 0, r = vn.DEFAULT_ORDER){
            this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = r;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x = t, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y = t, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            this._z = t, this._onChangeCallback();
        }
        get order() {
            return this._order;
        }
        set order(t) {
            this._order = t, this._onChangeCallback();
        }
        set(t, e, n, r = this._order) {
            return this._x = t, this._y = e, this._z = n, this._order = r, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t, e = this._order, n = !0) {
            const r = t.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], h = r[9], u = r[2], f = r[6], m = r[10];
            switch(e){
                case "XYZ":
                    this._y = Math.asin(kt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-kt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(kt(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
                    break;
                case "ZYX":
                    this._y = Math.asin(-kt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
                    break;
                case "YZX":
                    this._z = Math.asin(kt(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, m));
                    break;
                case "XZY":
                    this._z = Math.asin(-kt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
            }
            return this._order = e, n === !0 && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, n) {
            return Ec.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ec, e, n);
        }
        setFromVector3(t, e = this._order) {
            return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
            return Tc.setFromEuler(this), this.setFromQuaternion(Tc, t);
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
        }
        fromArray(t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
        }
        _onChange(t) {
            return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order;
        }
    }
    vn.DEFAULT_ORDER = "XYZ";
    class Ih {
        constructor(){
            this.mask = 1;
        }
        set(t) {
            this.mask = (1 << t | 0) >>> 0;
        }
        enable(t) {
            this.mask |= 1 << t | 0;
        }
        enableAll() {
            this.mask = -1;
        }
        toggle(t) {
            this.mask ^= 1 << t | 0;
        }
        disable(t) {
            this.mask &= ~(1 << t | 0);
        }
        disableAll() {
            this.mask = 0;
        }
        test(t) {
            return (this.mask & t.mask) !== 0;
        }
        isEnabled(t) {
            return (this.mask & (1 << t | 0)) !== 0;
        }
    }
    let ju = 0;
    const Rc = new H, Pi = new tr, Tn = new Gt, Or = new H, or = new H, Xu = new H, qu = new tr, Ac = new H(1, 0, 0), Cc = new H(0, 1, 0), Pc = new H(0, 0, 1), Ic = {
        type: "added"
    }, Yu = {
        type: "removed"
    }, Ii = {
        type: "childadded",
        child: null
    }, ia = {
        type: "childremoved",
        child: null
    };
    xe = class extends yi {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: ju++
            }), this.uuid = pn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = xe.DEFAULT_UP.clone();
            const t = new H, e = new vn, n = new tr, r = new H(1, 1, 1);
            function s() {
                n.setFromEuler(e, !1);
            }
            function a() {
                e.setFromQuaternion(n, void 0, !1);
            }
            e._onChange(s), n._onChange(a), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: r
                },
                modelViewMatrix: {
                    value: new Gt
                },
                normalMatrix: {
                    value: new Ft
                }
            }), this.matrix = new Gt, this.matrixWorld = new Gt, this.matrixAutoUpdate = xe.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ih, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
        }
        onBeforeShadow() {}
        onAfterShadow() {}
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
            return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
            this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
            this.quaternion.setFromEuler(t, !0);
        }
        setRotationFromMatrix(t) {
            this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
            this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
            return Pi.setFromAxisAngle(t, e), this.quaternion.multiply(Pi), this;
        }
        rotateOnWorldAxis(t, e) {
            return Pi.setFromAxisAngle(t, e), this.quaternion.premultiply(Pi), this;
        }
        rotateX(t) {
            return this.rotateOnAxis(Ac, t);
        }
        rotateY(t) {
            return this.rotateOnAxis(Cc, t);
        }
        rotateZ(t) {
            return this.rotateOnAxis(Pc, t);
        }
        translateOnAxis(t, e) {
            return Rc.copy(t).applyQuaternion(this.quaternion), this.position.add(Rc.multiplyScalar(e)), this;
        }
        translateX(t) {
            return this.translateOnAxis(Ac, t);
        }
        translateY(t) {
            return this.translateOnAxis(Cc, t);
        }
        translateZ(t) {
            return this.translateOnAxis(Pc, t);
        }
        localToWorld(t) {
            return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
            return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Tn.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, n) {
            t.isVector3 ? Or.copy(t) : Or.set(t, e, n);
            const r = this.parent;
            this.updateWorldMatrix(!0, !1), or.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Tn.lookAt(or, Or, this.up) : Tn.lookAt(Or, or, this.up), this.quaternion.setFromRotationMatrix(Tn), r && (Tn.extractRotation(r.matrixWorld), Pi.setFromRotationMatrix(Tn), this.quaternion.premultiply(Pi.invert()));
        }
        add(t) {
            if (arguments.length > 1) {
                for(let e = 0; e < arguments.length; e++)this.add(arguments[e]);
                return this;
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Ic), Ii.child = t, this.dispatchEvent(Ii), Ii.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
        }
        remove(t) {
            if (arguments.length > 1) {
                for(let n = 0; n < arguments.length; n++)this.remove(arguments[n]);
                return this;
            }
            const e = this.children.indexOf(t);
            return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Yu), ia.child = t, this.dispatchEvent(ia), ia.child = null), this;
        }
        removeFromParent() {
            const t = this.parent;
            return t !== null && t.remove(this), this;
        }
        clear() {
            return this.remove(...this.children);
        }
        attach(t) {
            return this.updateWorldMatrix(!0, !1), Tn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Tn.multiply(t.parent.matrixWorld)), t.applyMatrix4(Tn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Ic), Ii.child = t, this.dispatchEvent(Ii), Ii.child = null, this;
        }
        getObjectById(t) {
            return this.getObjectByProperty("id", t);
        }
        getObjectByName(t) {
            return this.getObjectByProperty("name", t);
        }
        getObjectByProperty(t, e) {
            if (this[t] === e) return this;
            for(let n = 0, r = this.children.length; n < r; n++){
                const a = this.children[n].getObjectByProperty(t, e);
                if (a !== void 0) return a;
            }
        }
        getObjectsByProperty(t, e, n = []) {
            this[t] === e && n.push(this);
            const r = this.children;
            for(let s = 0, a = r.length; s < a; s++)r[s].getObjectsByProperty(t, e, n);
            return n;
        }
        getWorldPosition(t) {
            return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(or, t, Xu), t;
        }
        getWorldScale(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(or, qu, t), t;
        }
        getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t) {
            t(this);
            const e = this.children;
            for(let n = 0, r = e.length; n < r; n++)e[n].traverse(t);
        }
        traverseVisible(t) {
            if (this.visible === !1) return;
            t(this);
            const e = this.children;
            for(let n = 0, r = e.length; n < r; n++)e[n].traverseVisible(t);
        }
        traverseAncestors(t) {
            const e = this.parent;
            e !== null && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
            const e = this.children;
            for(let n = 0, r = e.length; n < r; n++)e[n].updateMatrixWorld(t);
        }
        updateWorldMatrix(t, e) {
            const n = this.parent;
            if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
                const r = this.children;
                for(let s = 0, a = r.length; s < a; s++)r[s].updateWorldMatrix(!1, !0);
            }
        }
        toJSON(t) {
            const e = t === void 0 || typeof t == "string", n = {};
            e && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            }, n.metadata = {
                version: 4.6,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const r = {};
            r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((o)=>({
                    boxInitialized: o.boxInitialized,
                    boxMin: o.box.min.toArray(),
                    boxMax: o.box.max.toArray(),
                    sphereInitialized: o.sphereInitialized,
                    sphereRadius: o.sphere.radius,
                    sphereCenter: o.sphere.center.toArray()
                })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (r.boundingSphere = {
                center: r.boundingSphere.center.toArray(),
                radius: r.boundingSphere.radius
            }), this.boundingBox !== null && (r.boundingBox = {
                min: r.boundingBox.min.toArray(),
                max: r.boundingBox.max.toArray()
            }));
            function s(o, c) {
                return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid;
            }
            if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                r.geometry = s(t.geometries, this.geometry);
                const o = this.geometry.parameters;
                if (o !== void 0 && o.shapes !== void 0) {
                    const c = o.shapes;
                    if (Array.isArray(c)) for(let l = 0, h = c.length; l < h; l++){
                        const u = c[l];
                        s(t.shapes, u);
                    }
                    else s(t.shapes, c);
                }
            }
            if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
                const o = [];
                for(let c = 0, l = this.material.length; c < l; c++)o.push(s(t.materials, this.material[c]));
                r.material = o;
            } else r.material = s(t.materials, this.material);
            if (this.children.length > 0) {
                r.children = [];
                for(let o = 0; o < this.children.length; o++)r.children.push(this.children[o].toJSON(t).object);
            }
            if (this.animations.length > 0) {
                r.animations = [];
                for(let o = 0; o < this.animations.length; o++){
                    const c = this.animations[o];
                    r.animations.push(s(t.animations, c));
                }
            }
            if (e) {
                const o = a(t.geometries), c = a(t.materials), l = a(t.textures), h = a(t.images), u = a(t.shapes), f = a(t.skeletons), m = a(t.animations), w = a(t.nodes);
                o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), w.length > 0 && (n.nodes = w);
            }
            return n.object = r, n;
            function a(o) {
                const c = [];
                for(const l in o){
                    const h = o[l];
                    delete h.metadata, c.push(h);
                }
                return c;
            }
        }
        clone(t) {
            return new this.constructor().copy(this, t);
        }
        copy(t, e = !0) {
            if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0) for(let n = 0; n < t.children.length; n++){
                const r = t.children[n];
                this.add(r.clone());
            }
            return this;
        }
    };
    xe.DEFAULT_UP = new H(0, 1, 0);
    xe.DEFAULT_MATRIX_AUTO_UPDATE = !0;
    xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const hn = new H, Rn = new H, ra = new H, An = new H, Di = new H, Li = new H, Dc = new H, sa = new H, aa = new H, oa = new H, ca = new ne, la = new ne, ha = new ne;
    let cr = class Hi {
        constructor(t = new H, e = new H, n = new H){
            this.a = t, this.b = e, this.c = n;
        }
        static getNormal(t, e, n, r) {
            r.subVectors(n, e), hn.subVectors(t, e), r.cross(hn);
            const s = r.lengthSq();
            return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
        }
        static getBarycoord(t, e, n, r, s) {
            hn.subVectors(r, e), Rn.subVectors(n, e), ra.subVectors(t, e);
            const a = hn.dot(hn), o = hn.dot(Rn), c = hn.dot(ra), l = Rn.dot(Rn), h = Rn.dot(ra), u = a * l - o * o;
            if (u === 0) return s.set(0, 0, 0), null;
            const f = 1 / u, m = (l * c - o * h) * f, w = (a * h - o * c) * f;
            return s.set(1 - m - w, w, m);
        }
        static containsPoint(t, e, n, r) {
            return this.getBarycoord(t, e, n, r, An) === null ? !1 : An.x >= 0 && An.y >= 0 && An.x + An.y <= 1;
        }
        static getInterpolation(t, e, n, r, s, a, o, c) {
            return this.getBarycoord(t, e, n, r, An) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, An.x), c.addScaledVector(a, An.y), c.addScaledVector(o, An.z), c);
        }
        static getInterpolatedAttribute(t, e, n, r, s, a) {
            return ca.setScalar(0), la.setScalar(0), ha.setScalar(0), ca.fromBufferAttribute(t, e), la.fromBufferAttribute(t, n), ha.fromBufferAttribute(t, r), a.setScalar(0), a.addScaledVector(ca, s.x), a.addScaledVector(la, s.y), a.addScaledVector(ha, s.z), a;
        }
        static isFrontFacing(t, e, n, r) {
            return hn.subVectors(n, e), Rn.subVectors(t, e), hn.cross(Rn).dot(r) < 0;
        }
        set(t, e, n) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t, e, n, r) {
            return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this;
        }
        setFromAttributeAndIndices(t, e, n, r) {
            return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, r), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        }
        getArea() {
            return hn.subVectors(this.c, this.b), Rn.subVectors(this.a, this.b), hn.cross(Rn).length() * .5;
        }
        getMidpoint(t) {
            return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
        }
        getNormal(t) {
            return Hi.getNormal(this.a, this.b, this.c, t);
        }
        getPlane(t) {
            return t.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t, e) {
            return Hi.getBarycoord(t, this.a, this.b, this.c, e);
        }
        getInterpolation(t, e, n, r, s) {
            return Hi.getInterpolation(t, this.a, this.b, this.c, e, n, r, s);
        }
        containsPoint(t) {
            return Hi.containsPoint(t, this.a, this.b, this.c);
        }
        isFrontFacing(t) {
            return Hi.isFrontFacing(this.a, this.b, this.c, t);
        }
        intersectsBox(t) {
            return t.intersectsTriangle(this);
        }
        closestPointToPoint(t, e) {
            const n = this.a, r = this.b, s = this.c;
            let a, o;
            Di.subVectors(r, n), Li.subVectors(s, n), sa.subVectors(t, n);
            const c = Di.dot(sa), l = Li.dot(sa);
            if (c <= 0 && l <= 0) return e.copy(n);
            aa.subVectors(t, r);
            const h = Di.dot(aa), u = Li.dot(aa);
            if (h >= 0 && u <= h) return e.copy(r);
            const f = c * u - h * l;
            if (f <= 0 && c >= 0 && h <= 0) return a = c / (c - h), e.copy(n).addScaledVector(Di, a);
            oa.subVectors(t, s);
            const m = Di.dot(oa), w = Li.dot(oa);
            if (w >= 0 && m <= w) return e.copy(s);
            const b = m * l - c * w;
            if (b <= 0 && l >= 0 && w <= 0) return o = l / (l - w), e.copy(n).addScaledVector(Li, o);
            const g = h * w - m * u;
            if (g <= 0 && u - h >= 0 && m - w >= 0) return Dc.subVectors(s, r), o = (u - h) / (u - h + (m - w)), e.copy(r).addScaledVector(Dc, o);
            const _ = 1 / (g + b + f);
            return a = b * _, o = f * _, e.copy(n).addScaledVector(Di, a).addScaledVector(Li, o);
        }
        equals(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        }
    };
    const Dh = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, Wn = {
        h: 0,
        s: 0,
        l: 0
    }, Br = {
        h: 0,
        s: 0,
        l: 0
    };
    function da(i, t, e) {
        return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
    }
    Wt = class {
        constructor(t, e, n){
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
        }
        set(t, e, n) {
            if (e === void 0 && n === void 0) {
                const r = t;
                r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
            } else this.setRGB(t, e, n);
            return this;
        }
        setScalar(t) {
            return this.r = t, this.g = t, this.b = t, this;
        }
        setHex(t, e = en) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, te.toWorkingColorSpace(this, e), this;
        }
        setRGB(t, e, n, r = te.workingColorSpace) {
            return this.r = t, this.g = e, this.b = n, te.toWorkingColorSpace(this, r), this;
        }
        setHSL(t, e, n, r = te.workingColorSpace) {
            if (t = ko(t, 1), e = kt(e, 0, 1), n = kt(n, 0, 1), e === 0) this.r = this.g = this.b = n;
            else {
                const s = n <= .5 ? n * (1 + e) : n + e - n * e, a = 2 * n - s;
                this.r = da(a, s, t + 1 / 3), this.g = da(a, s, t), this.b = da(a, s, t - 1 / 3);
            }
            return te.toWorkingColorSpace(this, r), this;
        }
        setStyle(t, e = en) {
            function n(s) {
                s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
            }
            let r;
            if (r = /^(\w+)\(([^\)]*)\)/.exec(t)) {
                let s;
                const a = r[1], o = r[2];
                switch(a){
                    case "rgb":
                    case "rgba":
                        if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, e);
                        if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, e);
                        break;
                    case "hsl":
                    case "hsla":
                        if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, e);
                        break;
                    default:
                        console.warn("THREE.Color: Unknown color model " + t);
                }
            } else if (r = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                const s = r[1], a = s.length;
                if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, e);
                if (a === 6) return this.setHex(parseInt(s, 16), e);
                console.warn("THREE.Color: Invalid hex color " + t);
            } else if (t && t.length > 0) return this.setColorName(t, e);
            return this;
        }
        setColorName(t, e = en) {
            const n = Dh[t.toLowerCase()];
            return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this;
        }
        copySRGBToLinear(t) {
            return this.r = Un(t.r), this.g = Un(t.g), this.b = Un(t.b), this;
        }
        copyLinearToSRGB(t) {
            return this.r = ji(t.r), this.g = ji(t.g), this.b = ji(t.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(t = en) {
            return te.fromWorkingColorSpace(Fe.copy(this), t), Math.round(kt(Fe.r * 255, 0, 255)) * 65536 + Math.round(kt(Fe.g * 255, 0, 255)) * 256 + Math.round(kt(Fe.b * 255, 0, 255));
        }
        getHexString(t = en) {
            return ("000000" + this.getHex(t).toString(16)).slice(-6);
        }
        getHSL(t, e = te.workingColorSpace) {
            te.fromWorkingColorSpace(Fe.copy(this), e);
            const n = Fe.r, r = Fe.g, s = Fe.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
            let c, l;
            const h = (o + a) / 2;
            if (o === a) c = 0, l = 0;
            else {
                const u = a - o;
                switch(l = h <= .5 ? u / (a + o) : u / (2 - a - o), a){
                    case n:
                        c = (r - s) / u + (r < s ? 6 : 0);
                        break;
                    case r:
                        c = (s - n) / u + 2;
                        break;
                    case s:
                        c = (n - r) / u + 4;
                        break;
                }
                c /= 6;
            }
            return t.h = c, t.s = l, t.l = h, t;
        }
        getRGB(t, e = te.workingColorSpace) {
            return te.fromWorkingColorSpace(Fe.copy(this), e), t.r = Fe.r, t.g = Fe.g, t.b = Fe.b, t;
        }
        getStyle(t = en) {
            te.fromWorkingColorSpace(Fe.copy(this), t);
            const e = Fe.r, n = Fe.g, r = Fe.b;
            return t !== en ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
        }
        offsetHSL(t, e, n) {
            return this.getHSL(Wn), this.setHSL(Wn.h + t, Wn.s + e, Wn.l + n);
        }
        add(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this;
        }
        addColors(t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
        }
        addScalar(t) {
            return this.r += t, this.g += t, this.b += t, this;
        }
        sub(t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
        }
        multiply(t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
        }
        multiplyScalar(t) {
            return this.r *= t, this.g *= t, this.b *= t, this;
        }
        lerp(t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
        }
        lerpColors(t, e, n) {
            return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
        }
        lerpHSL(t, e) {
            this.getHSL(Wn), t.getHSL(Br);
            const n = mr(Wn.h, Br.h, e), r = mr(Wn.s, Br.s, e), s = mr(Wn.l, Br.l, e);
            return this.setHSL(n, r, s), this;
        }
        setFromVector3(t) {
            return this.r = t.x, this.g = t.y, this.b = t.z, this;
        }
        applyMatrix3(t) {
            const e = this.r, n = this.g, r = this.b, s = t.elements;
            return this.r = s[0] * e + s[3] * n + s[6] * r, this.g = s[1] * e + s[4] * n + s[7] * r, this.b = s[2] * e + s[5] * n + s[8] * r, this;
        }
        equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
            return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
        }
        fromBufferAttribute(t, e) {
            return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
        }
        toJSON() {
            return this.getHex();
        }
        *[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b;
        }
    };
    const Fe = new Wt;
    Wt.NAMES = Dh;
    let Ku = 0;
    xi = class extends yi {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: Ku++
            }), this.uuid = pn(), this.name = "", this.type = "Material", this.blending = Gi, this.side = Zn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Oa, this.blendDst = Ba, this.blendEquation = ui, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Wt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Xi, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = wc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Mi, this.stencilZFail = Mi, this.stencilZPass = Mi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
        }
        get alphaTest() {
            return this._alphaTest;
        }
        set alphaTest(t) {
            this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
        }
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(t) {
            if (t !== void 0) for(const e in t){
                const n = t[e];
                if (n === void 0) {
                    console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
                    continue;
                }
                const r = this[e];
                if (r === void 0) {
                    console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
                    continue;
                }
                r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = n;
            }
        }
        toJSON(t) {
            const e = t === void 0 || typeof t == "string";
            e && (t = {
                textures: {},
                images: {}
            });
            const n = {
                metadata: {
                    version: 4.6,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Gi && (n.blending = this.blending), this.side !== Zn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Oa && (n.blendSrc = this.blendSrc), this.blendDst !== Ba && (n.blendDst = this.blendDst), this.blendEquation !== ui && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Xi && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== wc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Mi && (n.stencilFail = this.stencilFail), this.stencilZFail !== Mi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Mi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
            function r(s) {
                const a = [];
                for(const o in s){
                    const c = s[o];
                    delete c.metadata, a.push(c);
                }
                return a;
            }
            if (e) {
                const s = r(t.textures), a = r(t.images);
                s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
            }
            return n;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
            const e = t.clippingPlanes;
            let n = null;
            if (e !== null) {
                const r = e.length;
                n = new Array(r);
                for(let s = 0; s !== r; ++s)n[s] = e[s].clone();
            }
            return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        set needsUpdate(t) {
            t === !0 && this.version++;
        }
        onBuild() {
            console.warn("Material: onBuild() has been removed.");
        }
    };
    Lh = class extends xi {
        constructor(t){
            super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Wt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new vn, this.combine = ph, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
        }
    };
    const Me = new H, zr = new $t;
    let Zu = 0;
    sn = class {
        constructor(t, e, n = !1){
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = !0, Object.defineProperty(this, "id", {
                value: Zu++
            }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = Mo, this.updateRanges = [], this.gpuType = _n, this.version = 0;
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            t === !0 && this.version++;
        }
        setUsage(t) {
            return this.usage = t, this;
        }
        addUpdateRange(t, e) {
            this.updateRanges.push({
                start: t,
                count: e
            });
        }
        clearUpdateRanges() {
            this.updateRanges.length = 0;
        }
        copy(t) {
            return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
        }
        copyAt(t, e, n) {
            t *= this.itemSize, n *= e.itemSize;
            for(let r = 0, s = this.itemSize; r < s; r++)this.array[t + r] = e.array[n + r];
            return this;
        }
        copyArray(t) {
            return this.array.set(t), this;
        }
        applyMatrix3(t) {
            if (this.itemSize === 2) for(let e = 0, n = this.count; e < n; e++)zr.fromBufferAttribute(this, e), zr.applyMatrix3(t), this.setXY(e, zr.x, zr.y);
            else if (this.itemSize === 3) for(let e = 0, n = this.count; e < n; e++)Me.fromBufferAttribute(this, e), Me.applyMatrix3(t), this.setXYZ(e, Me.x, Me.y, Me.z);
            return this;
        }
        applyMatrix4(t) {
            for(let e = 0, n = this.count; e < n; e++)Me.fromBufferAttribute(this, e), Me.applyMatrix4(t), this.setXYZ(e, Me.x, Me.y, Me.z);
            return this;
        }
        applyNormalMatrix(t) {
            for(let e = 0, n = this.count; e < n; e++)Me.fromBufferAttribute(this, e), Me.applyNormalMatrix(t), this.setXYZ(e, Me.x, Me.y, Me.z);
            return this;
        }
        transformDirection(t) {
            for(let e = 0, n = this.count; e < n; e++)Me.fromBufferAttribute(this, e), Me.transformDirection(t), this.setXYZ(e, Me.x, Me.y, Me.z);
            return this;
        }
        set(t, e = 0) {
            return this.array.set(t, e), this;
        }
        getComponent(t, e) {
            let n = this.array[t * this.itemSize + e];
            return this.normalized && (n = fn(n, this.array)), n;
        }
        setComponent(t, e, n) {
            return this.normalized && (n = oe(n, this.array)), this.array[t * this.itemSize + e] = n, this;
        }
        getX(t) {
            let e = this.array[t * this.itemSize];
            return this.normalized && (e = fn(e, this.array)), e;
        }
        setX(t, e) {
            return this.normalized && (e = oe(e, this.array)), this.array[t * this.itemSize] = e, this;
        }
        getY(t) {
            let e = this.array[t * this.itemSize + 1];
            return this.normalized && (e = fn(e, this.array)), e;
        }
        setY(t, e) {
            return this.normalized && (e = oe(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
        }
        getZ(t) {
            let e = this.array[t * this.itemSize + 2];
            return this.normalized && (e = fn(e, this.array)), e;
        }
        setZ(t, e) {
            return this.normalized && (e = oe(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
        }
        getW(t) {
            let e = this.array[t * this.itemSize + 3];
            return this.normalized && (e = fn(e, this.array)), e;
        }
        setW(t, e) {
            return this.normalized && (e = oe(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
        }
        setXY(t, e, n) {
            return t *= this.itemSize, this.normalized && (e = oe(e, this.array), n = oe(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
        }
        setXYZ(t, e, n, r) {
            return t *= this.itemSize, this.normalized && (e = oe(e, this.array), n = oe(n, this.array), r = oe(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this;
        }
        setXYZW(t, e, n, r, s) {
            return t *= this.itemSize, this.normalized && (e = oe(e, this.array), n = oe(n, this.array), r = oe(r, this.array), s = oe(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = s, this;
        }
        onUpload(t) {
            return this.onUploadCallback = t, this;
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
            const t = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.from(this.array),
                normalized: this.normalized
            };
            return this.name !== "" && (t.name = this.name), this.usage !== Mo && (t.usage = this.usage), t;
        }
    };
    class Uh extends sn {
        constructor(t, e, n){
            super(new Uint16Array(t), e, n);
        }
    }
    class Nh extends sn {
        constructor(t, e, n){
            super(new Uint32Array(t), e, n);
        }
    }
    class Ve extends sn {
        constructor(t, e, n){
            super(new Float32Array(t), e, n);
        }
    }
    let Ju = 0;
    const tn = new Gt, ua = new xe, Ui = new H, qe = new Qn, lr = new Qn, Pe = new H;
    mn = class extends yi {
        constructor(){
            super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
                value: Ju++
            }), this.uuid = pn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {};
        }
        getIndex() {
            return this.index;
        }
        setIndex(t) {
            return Array.isArray(t) ? this.index = new (Ah(t) ? Nh : Uh)(t, 1) : this.index = t, this;
        }
        setIndirect(t) {
            return this.indirect = t, this;
        }
        getIndirect() {
            return this.indirect;
        }
        getAttribute(t) {
            return this.attributes[t];
        }
        setAttribute(t, e) {
            return this.attributes[t] = e, this;
        }
        deleteAttribute(t) {
            return delete this.attributes[t], this;
        }
        hasAttribute(t) {
            return this.attributes[t] !== void 0;
        }
        addGroup(t, e, n = 0) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: n
            });
        }
        clearGroups() {
            this.groups = [];
        }
        setDrawRange(t, e) {
            this.drawRange.start = t, this.drawRange.count = e;
        }
        applyMatrix4(t) {
            const e = this.attributes.position;
            e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
            const n = this.attributes.normal;
            if (n !== void 0) {
                const s = new Ft().getNormalMatrix(t);
                n.applyNormalMatrix(s), n.needsUpdate = !0;
            }
            const r = this.attributes.tangent;
            return r !== void 0 && (r.transformDirection(t), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
        }
        applyQuaternion(t) {
            return tn.makeRotationFromQuaternion(t), this.applyMatrix4(tn), this;
        }
        rotateX(t) {
            return tn.makeRotationX(t), this.applyMatrix4(tn), this;
        }
        rotateY(t) {
            return tn.makeRotationY(t), this.applyMatrix4(tn), this;
        }
        rotateZ(t) {
            return tn.makeRotationZ(t), this.applyMatrix4(tn), this;
        }
        translate(t, e, n) {
            return tn.makeTranslation(t, e, n), this.applyMatrix4(tn), this;
        }
        scale(t, e, n) {
            return tn.makeScale(t, e, n), this.applyMatrix4(tn), this;
        }
        lookAt(t) {
            return ua.lookAt(t), ua.updateMatrix(), this.applyMatrix4(ua.matrix), this;
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Ui).negate(), this.translate(Ui.x, Ui.y, Ui.z), this;
        }
        setFromPoints(t) {
            const e = this.getAttribute("position");
            if (e === void 0) {
                const n = [];
                for(let r = 0, s = t.length; r < s; r++){
                    const a = t[r];
                    n.push(a.x, a.y, a.z || 0);
                }
                this.setAttribute("position", new Ve(n, 3));
            } else {
                const n = Math.min(t.length, e.count);
                for(let r = 0; r < n; r++){
                    const s = t[r];
                    e.setXYZ(r, s.x, s.y, s.z || 0);
                }
                t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0;
            }
            return this;
        }
        computeBoundingBox() {
            this.boundingBox === null && (this.boundingBox = new Qn);
            const t = this.attributes.position, e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute) {
                console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new H(-1 / 0, -1 / 0, -1 / 0), new H(1 / 0, 1 / 0, 1 / 0));
                return;
            }
            if (t !== void 0) {
                if (this.boundingBox.setFromBufferAttribute(t), e) for(let n = 0, r = e.length; n < r; n++){
                    const s = e[n];
                    qe.setFromBufferAttribute(s), this.morphTargetsRelative ? (Pe.addVectors(this.boundingBox.min, qe.min), this.boundingBox.expandByPoint(Pe), Pe.addVectors(this.boundingBox.max, qe.max), this.boundingBox.expandByPoint(Pe)) : (this.boundingBox.expandByPoint(qe.min), this.boundingBox.expandByPoint(qe.max));
                }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        }
        computeBoundingSphere() {
            this.boundingSphere === null && (this.boundingSphere = new zn);
            const t = this.attributes.position, e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute) {
                console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new H, 1 / 0);
                return;
            }
            if (t) {
                const n = this.boundingSphere.center;
                if (qe.setFromBufferAttribute(t), e) for(let s = 0, a = e.length; s < a; s++){
                    const o = e[s];
                    lr.setFromBufferAttribute(o), this.morphTargetsRelative ? (Pe.addVectors(qe.min, lr.min), qe.expandByPoint(Pe), Pe.addVectors(qe.max, lr.max), qe.expandByPoint(Pe)) : (qe.expandByPoint(lr.min), qe.expandByPoint(lr.max));
                }
                qe.getCenter(n);
                let r = 0;
                for(let s = 0, a = t.count; s < a; s++)Pe.fromBufferAttribute(t, s), r = Math.max(r, n.distanceToSquared(Pe));
                if (e) for(let s = 0, a = e.length; s < a; s++){
                    const o = e[s], c = this.morphTargetsRelative;
                    for(let l = 0, h = o.count; l < h; l++)Pe.fromBufferAttribute(o, l), c && (Ui.fromBufferAttribute(t, l), Pe.add(Ui)), r = Math.max(r, n.distanceToSquared(Pe));
                }
                this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        }
        computeTangents() {
            const t = this.index, e = this.attributes;
            if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
                console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                return;
            }
            const n = e.position, r = e.normal, s = e.uv;
            this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new sn(new Float32Array(4 * n.count), 4));
            const a = this.getAttribute("tangent"), o = [], c = [];
            for(let B = 0; B < n.count; B++)o[B] = new H, c[B] = new H;
            const l = new H, h = new H, u = new H, f = new $t, m = new $t, w = new $t, b = new H, g = new H;
            function _(B, M, x) {
                l.fromBufferAttribute(n, B), h.fromBufferAttribute(n, M), u.fromBufferAttribute(n, x), f.fromBufferAttribute(s, B), m.fromBufferAttribute(s, M), w.fromBufferAttribute(s, x), h.sub(l), u.sub(l), m.sub(f), w.sub(f);
                const D = 1 / (m.x * w.y - w.x * m.y);
                isFinite(D) && (b.copy(h).multiplyScalar(w.y).addScaledVector(u, -m.y).multiplyScalar(D), g.copy(u).multiplyScalar(m.x).addScaledVector(h, -w.x).multiplyScalar(D), o[B].add(b), o[M].add(b), o[x].add(b), c[B].add(g), c[M].add(g), c[x].add(g));
            }
            let R = this.groups;
            R.length === 0 && (R = [
                {
                    start: 0,
                    count: t.count
                }
            ]);
            for(let B = 0, M = R.length; B < M; ++B){
                const x = R[B], D = x.start, j = x.count;
                for(let W = D, Y = D + j; W < Y; W += 3)_(t.getX(W + 0), t.getX(W + 1), t.getX(W + 2));
            }
            const E = new H, S = new H, N = new H, C = new H;
            function I(B) {
                N.fromBufferAttribute(r, B), C.copy(N);
                const M = o[B];
                E.copy(M), E.sub(N.multiplyScalar(N.dot(M))).normalize(), S.crossVectors(C, M);
                const D = S.dot(c[B]) < 0 ? -1 : 1;
                a.setXYZW(B, E.x, E.y, E.z, D);
            }
            for(let B = 0, M = R.length; B < M; ++B){
                const x = R[B], D = x.start, j = x.count;
                for(let W = D, Y = D + j; W < Y; W += 3)I(t.getX(W + 0)), I(t.getX(W + 1)), I(t.getX(W + 2));
            }
        }
        computeVertexNormals() {
            const t = this.index, e = this.getAttribute("position");
            if (e !== void 0) {
                let n = this.getAttribute("normal");
                if (n === void 0) n = new sn(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
                else for(let f = 0, m = n.count; f < m; f++)n.setXYZ(f, 0, 0, 0);
                const r = new H, s = new H, a = new H, o = new H, c = new H, l = new H, h = new H, u = new H;
                if (t) for(let f = 0, m = t.count; f < m; f += 3){
                    const w = t.getX(f + 0), b = t.getX(f + 1), g = t.getX(f + 2);
                    r.fromBufferAttribute(e, w), s.fromBufferAttribute(e, b), a.fromBufferAttribute(e, g), h.subVectors(a, s), u.subVectors(r, s), h.cross(u), o.fromBufferAttribute(n, w), c.fromBufferAttribute(n, b), l.fromBufferAttribute(n, g), o.add(h), c.add(h), l.add(h), n.setXYZ(w, o.x, o.y, o.z), n.setXYZ(b, c.x, c.y, c.z), n.setXYZ(g, l.x, l.y, l.z);
                }
                else for(let f = 0, m = e.count; f < m; f += 3)r.fromBufferAttribute(e, f + 0), s.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), h.subVectors(a, s), u.subVectors(r, s), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
                this.normalizeNormals(), n.needsUpdate = !0;
            }
        }
        normalizeNormals() {
            const t = this.attributes.normal;
            for(let e = 0, n = t.count; e < n; e++)Pe.fromBufferAttribute(t, e), Pe.normalize(), t.setXYZ(e, Pe.x, Pe.y, Pe.z);
        }
        toNonIndexed() {
            function t(o, c) {
                const l = o.array, h = o.itemSize, u = o.normalized, f = new l.constructor(c.length * h);
                let m = 0, w = 0;
                for(let b = 0, g = c.length; b < g; b++){
                    o.isInterleavedBufferAttribute ? m = c[b] * o.data.stride + o.offset : m = c[b] * h;
                    for(let _ = 0; _ < h; _++)f[w++] = l[m++];
                }
                return new sn(f, h, u);
            }
            if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const e = new mn, n = this.index.array, r = this.attributes;
            for(const o in r){
                const c = r[o], l = t(c, n);
                e.setAttribute(o, l);
            }
            const s = this.morphAttributes;
            for(const o in s){
                const c = [], l = s[o];
                for(let h = 0, u = l.length; h < u; h++){
                    const f = l[h], m = t(f, n);
                    c.push(m);
                }
                e.morphAttributes[o] = c;
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            const a = this.groups;
            for(let o = 0, c = a.length; o < c; o++){
                const l = a[o];
                e.addGroup(l.start, l.count, l.materialIndex);
            }
            return e;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.6,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
                const c = this.parameters;
                for(const l in c)c[l] !== void 0 && (t[l] = c[l]);
                return t;
            }
            t.data = {
                attributes: {}
            };
            const e = this.index;
            e !== null && (t.data.index = {
                type: e.array.constructor.name,
                array: Array.prototype.slice.call(e.array)
            });
            const n = this.attributes;
            for(const c in n){
                const l = n[c];
                t.data.attributes[c] = l.toJSON(t.data);
            }
            const r = {};
            let s = !1;
            for(const c in this.morphAttributes){
                const l = this.morphAttributes[c], h = [];
                for(let u = 0, f = l.length; u < f; u++){
                    const m = l[u];
                    h.push(m.toJSON(t.data));
                }
                h.length > 0 && (r[c] = h, s = !0);
            }
            s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative);
            const a = this.groups;
            a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
            const o = this.boundingSphere;
            return o !== null && (t.data.boundingSphere = {
                center: o.center.toArray(),
                radius: o.radius
            }), t;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const e = {};
            this.name = t.name;
            const n = t.index;
            n !== null && this.setIndex(n.clone(e));
            const r = t.attributes;
            for(const l in r){
                const h = r[l];
                this.setAttribute(l, h.clone(e));
            }
            const s = t.morphAttributes;
            for(const l in s){
                const h = [], u = s[l];
                for(let f = 0, m = u.length; f < m; f++)h.push(u[f].clone(e));
                this.morphAttributes[l] = h;
            }
            this.morphTargetsRelative = t.morphTargetsRelative;
            const a = t.groups;
            for(let l = 0, h = a.length; l < h; l++){
                const u = a[l];
                this.addGroup(u.start, u.count, u.materialIndex);
            }
            const o = t.boundingBox;
            o !== null && (this.boundingBox = o.clone());
            const c = t.boundingSphere;
            return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    };
    const Lc = new Gt, ri = new Cs, Hr = new zn, Uc = new H, kr = new H, Vr = new H, Gr = new H, fa = new H, Wr = new H, Nc = new H, jr = new H;
    rn = class extends xe {
        constructor(t = new mn, e = new Lh){
            super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
        }
        copy(t, e) {
            return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
        }
        updateMorphTargets() {
            const e = this.geometry.morphAttributes, n = Object.keys(e);
            if (n.length > 0) {
                const r = e[n[0]];
                if (r !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let s = 0, a = r.length; s < a; s++){
                        const o = r[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
                    }
                }
            }
        }
        getVertexPosition(t, e) {
            const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
            e.fromBufferAttribute(r, t);
            const o = this.morphTargetInfluences;
            if (s && o) {
                Wr.set(0, 0, 0);
                for(let c = 0, l = s.length; c < l; c++){
                    const h = o[c], u = s[c];
                    h !== 0 && (fa.fromBufferAttribute(u, t), a ? Wr.addScaledVector(fa, h) : Wr.addScaledVector(fa.sub(e), h));
                }
                e.add(Wr);
            }
            return e;
        }
        raycast(t, e) {
            const n = this.geometry, r = this.material, s = this.matrixWorld;
            r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Hr.copy(n.boundingSphere), Hr.applyMatrix4(s), ri.copy(t.ray).recast(t.near), !(Hr.containsPoint(ri.origin) === !1 && (ri.intersectSphere(Hr, Uc) === null || ri.origin.distanceToSquared(Uc) > (t.far - t.near) ** 2)) && (Lc.copy(s).invert(), ri.copy(t.ray).applyMatrix4(Lc), !(n.boundingBox !== null && ri.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, ri)));
        }
        _computeIntersections(t, e, n) {
            let r;
            const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, f = s.groups, m = s.drawRange;
            if (o !== null) if (Array.isArray(a)) for(let w = 0, b = f.length; w < b; w++){
                const g = f[w], _ = a[g.materialIndex], R = Math.max(g.start, m.start), E = Math.min(o.count, Math.min(g.start + g.count, m.start + m.count));
                for(let S = R, N = E; S < N; S += 3){
                    const C = o.getX(S), I = o.getX(S + 1), B = o.getX(S + 2);
                    r = Xr(this, _, t, n, l, h, u, C, I, B), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = g.materialIndex, e.push(r));
                }
            }
            else {
                const w = Math.max(0, m.start), b = Math.min(o.count, m.start + m.count);
                for(let g = w, _ = b; g < _; g += 3){
                    const R = o.getX(g), E = o.getX(g + 1), S = o.getX(g + 2);
                    r = Xr(this, a, t, n, l, h, u, R, E, S), r && (r.faceIndex = Math.floor(g / 3), e.push(r));
                }
            }
            else if (c !== void 0) if (Array.isArray(a)) for(let w = 0, b = f.length; w < b; w++){
                const g = f[w], _ = a[g.materialIndex], R = Math.max(g.start, m.start), E = Math.min(c.count, Math.min(g.start + g.count, m.start + m.count));
                for(let S = R, N = E; S < N; S += 3){
                    const C = S, I = S + 1, B = S + 2;
                    r = Xr(this, _, t, n, l, h, u, C, I, B), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = g.materialIndex, e.push(r));
                }
            }
            else {
                const w = Math.max(0, m.start), b = Math.min(c.count, m.start + m.count);
                for(let g = w, _ = b; g < _; g += 3){
                    const R = g, E = g + 1, S = g + 2;
                    r = Xr(this, a, t, n, l, h, u, R, E, S), r && (r.faceIndex = Math.floor(g / 3), e.push(r));
                }
            }
        }
    };
    function $u(i, t, e, n, r, s, a, o) {
        let c;
        if (t.side === We ? c = n.intersectTriangle(a, s, r, !0, o) : c = n.intersectTriangle(r, s, a, t.side === Zn, o), c === null) return null;
        jr.copy(o), jr.applyMatrix4(i.matrixWorld);
        const l = e.ray.origin.distanceTo(jr);
        return l < e.near || l > e.far ? null : {
            distance: l,
            point: jr.clone(),
            object: i
        };
    }
    function Xr(i, t, e, n, r, s, a, o, c, l) {
        i.getVertexPosition(o, kr), i.getVertexPosition(c, Vr), i.getVertexPosition(l, Gr);
        const h = $u(i, t, e, n, kr, Vr, Gr, Nc);
        if (h) {
            const u = new H;
            cr.getBarycoord(Nc, kr, Vr, Gr, u), r && (h.uv = cr.getInterpolatedAttribute(r, o, c, l, u, new $t)), s && (h.uv1 = cr.getInterpolatedAttribute(s, o, c, l, u, new $t)), a && (h.normal = cr.getInterpolatedAttribute(a, o, c, l, u, new H), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
            const f = {
                a: o,
                b: c,
                c: l,
                normal: new H,
                materialIndex: 0
            };
            cr.getNormal(kr, Vr, Gr, f.normal), h.face = f, h.barycoord = u;
        }
        return h;
    }
    Er = class extends mn {
        constructor(t = 1, e = 1, n = 1, r = 1, s = 1, a = 1){
            super(), this.type = "BoxGeometry", this.parameters = {
                width: t,
                height: e,
                depth: n,
                widthSegments: r,
                heightSegments: s,
                depthSegments: a
            };
            const o = this;
            r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
            const c = [], l = [], h = [], u = [];
            let f = 0, m = 0;
            w("z", "y", "x", -1, -1, n, e, t, a, s, 0), w("z", "y", "x", 1, -1, n, e, -t, a, s, 1), w("x", "z", "y", 1, 1, t, n, e, r, a, 2), w("x", "z", "y", 1, -1, t, n, -e, r, a, 3), w("x", "y", "z", 1, -1, t, e, n, r, s, 4), w("x", "y", "z", -1, -1, t, e, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new Ve(l, 3)), this.setAttribute("normal", new Ve(h, 3)), this.setAttribute("uv", new Ve(u, 2));
            function w(b, g, _, R, E, S, N, C, I, B, M) {
                const x = S / I, D = N / B, j = S / 2, W = N / 2, Y = C / 2, tt = I + 1, K = B + 1;
                let rt = 0, q = 0;
                const lt = new H;
                for(let pt = 0; pt < K; pt++){
                    const St = pt * D - W;
                    for(let Vt = 0; Vt < tt; Vt++){
                        const he = Vt * x - j;
                        lt[b] = he * R, lt[g] = St * E, lt[_] = Y, l.push(lt.x, lt.y, lt.z), lt[b] = 0, lt[g] = 0, lt[_] = C > 0 ? 1 : -1, h.push(lt.x, lt.y, lt.z), u.push(Vt / I), u.push(1 - pt / B), rt += 1;
                    }
                }
                for(let pt = 0; pt < B; pt++)for(let St = 0; St < I; St++){
                    const Vt = f + St + tt * pt, he = f + St + tt * (pt + 1), J = f + (St + 1) + tt * (pt + 1), st = f + (St + 1) + tt * pt;
                    c.push(Vt, he, st), c.push(he, J, st), q += 6;
                }
                o.addGroup(m, q, M), m += q, f += rt;
            }
        }
        copy(t) {
            return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
        }
        static fromJSON(t) {
            return new Er(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
        }
    };
    function Qi(i) {
        const t = {};
        for(const e in i){
            t[e] = {};
            for(const n in i[e]){
                const r = i[e][n];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = r.clone() : Array.isArray(r) ? t[e][n] = r.slice() : t[e][n] = r;
            }
        }
        return t;
    }
    function ke(i) {
        const t = {};
        for(let e = 0; e < i.length; e++){
            const n = Qi(i[e]);
            for(const r in n)t[r] = n[r];
        }
        return t;
    }
    function Qu(i) {
        const t = [];
        for(let e = 0; e < i.length; e++)t.push(i[e].clone());
        return t;
    }
    function Fh(i) {
        const t = i.getRenderTarget();
        return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : te.workingColorSpace;
    }
    const tf = {
        clone: Qi,
        merge: ke
    };
    var ef = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, nf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
    class Jn extends xi {
        constructor(t){
            super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ef, this.fragmentShader = nf, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
                clipCullDistance: !1,
                multiDraw: !1
            }, this.defaultAttributeValues = {
                color: [
                    1,
                    1,
                    1
                ],
                uv: [
                    0,
                    0
                ],
                uv1: [
                    0,
                    0
                ]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Qi(t.uniforms), this.uniformsGroups = Qu(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            e.glslVersion = this.glslVersion, e.uniforms = {};
            for(const r in this.uniforms){
                const a = this.uniforms[r].value;
                a && a.isTexture ? e.uniforms[r] = {
                    type: "t",
                    value: a.toJSON(t).uuid
                } : a && a.isColor ? e.uniforms[r] = {
                    type: "c",
                    value: a.getHex()
                } : a && a.isVector2 ? e.uniforms[r] = {
                    type: "v2",
                    value: a.toArray()
                } : a && a.isVector3 ? e.uniforms[r] = {
                    type: "v3",
                    value: a.toArray()
                } : a && a.isVector4 ? e.uniforms[r] = {
                    type: "v4",
                    value: a.toArray()
                } : a && a.isMatrix3 ? e.uniforms[r] = {
                    type: "m3",
                    value: a.toArray()
                } : a && a.isMatrix4 ? e.uniforms[r] = {
                    type: "m4",
                    value: a.toArray()
                } : e.uniforms[r] = {
                    value: a
                };
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
            const n = {};
            for(const r in this.extensions)this.extensions[r] === !0 && (n[r] = !0);
            return Object.keys(n).length > 0 && (e.extensions = n), e;
        }
    }
    class Oh extends xe {
        constructor(){
            super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Gt, this.projectionMatrix = new Gt, this.projectionMatrixInverse = new Gt, this.coordinateSystem = Ln;
        }
        copy(t, e) {
            return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
        }
        getWorldDirection(t) {
            return super.getWorldDirection(t).negate();
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t, e) {
            super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    const jn = new H, Fc = new $t, Oc = new $t;
    Ke = class extends Oh {
        constructor(t = 50, e = 1, n = .1, r = 2e3){
            super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
        }
        copy(t, e) {
            return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
        }
        setFocalLength(t) {
            const e = .5 * this.getFilmHeight() / t;
            this.fov = $i * 2 * Math.atan(e), this.updateProjectionMatrix();
        }
        getFocalLength() {
            const t = Math.tan(pr * .5 * this.fov);
            return .5 * this.getFilmHeight() / t;
        }
        getEffectiveFOV() {
            return $i * 2 * Math.atan(Math.tan(pr * .5 * this.fov) / this.zoom);
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1);
        }
        getViewBounds(t, e, n) {
            jn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), e.set(jn.x, jn.y).multiplyScalar(-t / jn.z), jn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(jn.x, jn.y).multiplyScalar(-t / jn.z);
        }
        getViewSize(t, e) {
            return this.getViewBounds(t, Fc, Oc), e.subVectors(Oc, Fc);
        }
        setViewOffset(t, e, n, r, s, a) {
            this.aspect = t / e, this.view === null && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t = this.near;
            let e = t * Math.tan(pr * .5 * this.fov) / this.zoom, n = 2 * e, r = this.aspect * n, s = -.5 * r;
            const a = this.view;
            if (this.view !== null && this.view.enabled) {
                const c = a.fullWidth, l = a.fullHeight;
                s += a.offsetX * r / c, e -= a.offsetY * n / l, r *= a.width / c, n *= a.height / l;
            }
            const o = this.filmOffset;
            o !== 0 && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
        }
    };
    const Ni = -90, Fi = 1;
    class rf extends xe {
        constructor(t, e, n){
            super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
            const r = new Ke(Ni, Fi, t, e);
            r.layers = this.layers, this.add(r);
            const s = new Ke(Ni, Fi, t, e);
            s.layers = this.layers, this.add(s);
            const a = new Ke(Ni, Fi, t, e);
            a.layers = this.layers, this.add(a);
            const o = new Ke(Ni, Fi, t, e);
            o.layers = this.layers, this.add(o);
            const c = new Ke(Ni, Fi, t, e);
            c.layers = this.layers, this.add(c);
            const l = new Ke(Ni, Fi, t, e);
            l.layers = this.layers, this.add(l);
        }
        updateCoordinateSystem() {
            const t = this.coordinateSystem, e = this.children.concat(), [n, r, s, a, o, c] = e;
            for (const l of e)this.remove(l);
            if (t === Ln) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
            else if (t === ws) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
            else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
            for (const l of e)this.add(l), l.updateMatrixWorld();
        }
        update(t, e) {
            this.parent === null && this.updateMatrixWorld();
            const { renderTarget: n, activeMipmapLevel: r } = this;
            this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
            const [s, a, o, c, l, h] = this.children, u = t.getRenderTarget(), f = t.getActiveCubeFace(), m = t.getActiveMipmapLevel(), w = t.xr.enabled;
            t.xr.enabled = !1;
            const b = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, r), t.render(e, s), t.setRenderTarget(n, 1, r), t.render(e, a), t.setRenderTarget(n, 2, r), t.render(e, o), t.setRenderTarget(n, 3, r), t.render(e, c), t.setRenderTarget(n, 4, r), t.render(e, l), n.texture.generateMipmaps = b, t.setRenderTarget(n, 5, r), t.render(e, h), t.setRenderTarget(u, f, m), t.xr.enabled = w, n.texture.needsPMREMUpdate = !0;
        }
    }
    class Bh extends Be {
        constructor(t, e, n, r, s, a, o, c, l, h){
            t = t !== void 0 ? t : [], e = e !== void 0 ? e : qi, super(t, e, n, r, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
        }
        get images() {
            return this.image;
        }
        set images(t) {
            this.image = t;
        }
    }
    class sf extends gi {
        constructor(t = 1, e = {}){
            super(t, t, e), this.isWebGLCubeRenderTarget = !0;
            const n = {
                width: t,
                height: t,
                depth: 1
            }, r = [
                n,
                n,
                n,
                n,
                n,
                n
            ];
            this.texture = new Bh(r, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : bn;
        }
        fromEquirectangularTexture(t, e) {
            this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
            const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
            }, r = new Er(5, 5, 5), s = new Jn({
                name: "CubemapFromEquirect",
                uniforms: Qi(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: We,
                blending: Yn
            });
            s.uniforms.tEquirect.value = e;
            const a = new rn(r, s), o = e.minFilter;
            return e.minFilter === pi && (e.minFilter = bn), new rf(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
        }
        clear(t, e, n, r) {
            const s = t.getRenderTarget();
            for(let a = 0; a < 6; a++)t.setRenderTarget(this, a), t.clear(e, n, r);
            t.setRenderTarget(s);
        }
    }
    qr = class extends xe {
        constructor(){
            super(), this.isGroup = !0, this.type = "Group";
        }
    };
    const af = {
        type: "move"
    };
    class _a {
        constructor(){
            this._targetRay = null, this._grip = null, this._hand = null;
        }
        getHandSpace() {
            return this._hand === null && (this._hand = new qr, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand;
        }
        getTargetRaySpace() {
            return this._targetRay === null && (this._targetRay = new qr, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new H, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new H), this._targetRay;
        }
        getGripSpace() {
            return this._grip === null && (this._grip = new qr, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new H, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new H), this._grip;
        }
        dispatchEvent(t) {
            return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
        }
        connect(t) {
            if (t && t.hand) {
                const e = this._hand;
                if (e) for (const n of t.hand.values())this._getHandJoint(e, n);
            }
            return this.dispatchEvent({
                type: "connected",
                data: t
            }), this;
        }
        disconnect(t) {
            return this.dispatchEvent({
                type: "disconnected",
                data: t
            }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
        }
        update(t, e, n) {
            let r = null, s = null, a = null;
            const o = this._targetRay, c = this._grip, l = this._hand;
            if (t && e.session.visibilityState !== "visible-blurred") {
                if (l && t.hand) {
                    a = !0;
                    for (const b of t.hand.values()){
                        const g = e.getJointPose(b, n), _ = this._getHandJoint(l, b);
                        g !== null && (_.matrix.fromArray(g.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.matrixWorldNeedsUpdate = !0, _.jointRadius = g.radius), _.visible = g !== null;
                    }
                    const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], f = h.position.distanceTo(u.position), m = .02, w = .005;
                    l.inputState.pinching && f > m + w ? (l.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: t.handedness,
                        target: this
                    })) : !l.inputState.pinching && f <= m - w && (l.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: t.handedness,
                        target: this
                    }));
                } else c !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
                o !== null && (r = e.getPose(t.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(af)));
            }
            return o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
        }
        _getHandJoint(t, e) {
            if (t.joints[e.jointName] === void 0) {
                const n = new qr;
                n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
            }
            return t.joints[e.jointName];
        }
    }
    RA = class extends xe {
        constructor(){
            super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new vn, this.environmentIntensity = 1, this.environmentRotation = new vn, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        copy(t, e) {
            return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
        }
    };
    AA = class {
        constructor(t, e){
            this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = Mo, this.updateRanges = [], this.version = 0, this.uuid = pn();
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            t === !0 && this.version++;
        }
        setUsage(t) {
            return this.usage = t, this;
        }
        addUpdateRange(t, e) {
            this.updateRanges.push({
                start: t,
                count: e
            });
        }
        clearUpdateRanges() {
            this.updateRanges.length = 0;
        }
        copy(t) {
            return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
        }
        copyAt(t, e, n) {
            t *= this.stride, n *= e.stride;
            for(let r = 0, s = this.stride; r < s; r++)this.array[t + r] = e.array[n + r];
            return this;
        }
        set(t, e = 0) {
            return this.array.set(t, e), this;
        }
        clone(t) {
            t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = pn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
            return n.setUsage(this.usage), n;
        }
        onUpload(t) {
            return this.onUploadCallback = t, this;
        }
        toJSON(t) {
            return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = pn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            };
        }
    };
    const He = new H;
    zh = class {
        constructor(t, e, n, r = !1){
            this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = r;
        }
        get count() {
            return this.data.count;
        }
        get array() {
            return this.data.array;
        }
        set needsUpdate(t) {
            this.data.needsUpdate = t;
        }
        applyMatrix4(t) {
            for(let e = 0, n = this.data.count; e < n; e++)He.fromBufferAttribute(this, e), He.applyMatrix4(t), this.setXYZ(e, He.x, He.y, He.z);
            return this;
        }
        applyNormalMatrix(t) {
            for(let e = 0, n = this.count; e < n; e++)He.fromBufferAttribute(this, e), He.applyNormalMatrix(t), this.setXYZ(e, He.x, He.y, He.z);
            return this;
        }
        transformDirection(t) {
            for(let e = 0, n = this.count; e < n; e++)He.fromBufferAttribute(this, e), He.transformDirection(t), this.setXYZ(e, He.x, He.y, He.z);
            return this;
        }
        getComponent(t, e) {
            let n = this.array[t * this.data.stride + this.offset + e];
            return this.normalized && (n = fn(n, this.array)), n;
        }
        setComponent(t, e, n) {
            return this.normalized && (n = oe(n, this.array)), this.data.array[t * this.data.stride + this.offset + e] = n, this;
        }
        setX(t, e) {
            return this.normalized && (e = oe(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
        }
        setY(t, e) {
            return this.normalized && (e = oe(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
        }
        setZ(t, e) {
            return this.normalized && (e = oe(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
        }
        setW(t, e) {
            return this.normalized && (e = oe(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
        }
        getX(t) {
            let e = this.data.array[t * this.data.stride + this.offset];
            return this.normalized && (e = fn(e, this.array)), e;
        }
        getY(t) {
            let e = this.data.array[t * this.data.stride + this.offset + 1];
            return this.normalized && (e = fn(e, this.array)), e;
        }
        getZ(t) {
            let e = this.data.array[t * this.data.stride + this.offset + 2];
            return this.normalized && (e = fn(e, this.array)), e;
        }
        getW(t) {
            let e = this.data.array[t * this.data.stride + this.offset + 3];
            return this.normalized && (e = fn(e, this.array)), e;
        }
        setXY(t, e, n) {
            return t = t * this.data.stride + this.offset, this.normalized && (e = oe(e, this.array), n = oe(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
        }
        setXYZ(t, e, n, r) {
            return t = t * this.data.stride + this.offset, this.normalized && (e = oe(e, this.array), n = oe(n, this.array), r = oe(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this;
        }
        setXYZW(t, e, n, r, s) {
            return t = t * this.data.stride + this.offset, this.normalized && (e = oe(e, this.array), n = oe(n, this.array), r = oe(r, this.array), s = oe(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this.data.array[t + 3] = s, this;
        }
        clone(t) {
            if (t === void 0) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
                const e = [];
                for(let n = 0; n < this.count; n++){
                    const r = n * this.data.stride + this.offset;
                    for(let s = 0; s < this.itemSize; s++)e.push(this.data.array[r + s]);
                }
                return new sn(new this.array.constructor(e), this.itemSize, this.normalized);
            } else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new zh(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
        }
        toJSON(t) {
            if (t === void 0) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
                const e = [];
                for(let n = 0; n < this.count; n++){
                    const r = n * this.data.stride + this.offset;
                    for(let s = 0; s < this.itemSize; s++)e.push(this.data.array[r + s]);
                }
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: e,
                    normalized: this.normalized
                };
            } else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            };
        }
    };
    const Bc = new H, zc = new ne, Hc = new ne, of = new H, kc = new Gt, Yr = new H, pa = new zn, Vc = new Gt, ma = new Cs;
    CA = class extends rn {
        constructor(t, e){
            super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = _c, this.bindMatrix = new Gt, this.bindMatrixInverse = new Gt, this.boundingBox = null, this.boundingSphere = null;
        }
        computeBoundingBox() {
            const t = this.geometry;
            this.boundingBox === null && (this.boundingBox = new Qn), this.boundingBox.makeEmpty();
            const e = t.getAttribute("position");
            for(let n = 0; n < e.count; n++)this.getVertexPosition(n, Yr), this.boundingBox.expandByPoint(Yr);
        }
        computeBoundingSphere() {
            const t = this.geometry;
            this.boundingSphere === null && (this.boundingSphere = new zn), this.boundingSphere.makeEmpty();
            const e = t.getAttribute("position");
            for(let n = 0; n < e.count; n++)this.getVertexPosition(n, Yr), this.boundingSphere.expandByPoint(Yr);
        }
        copy(t, e) {
            return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
        }
        raycast(t, e) {
            const n = this.material, r = this.matrixWorld;
            n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), pa.copy(this.boundingSphere), pa.applyMatrix4(r), t.ray.intersectsSphere(pa) !== !1 && (Vc.copy(r).invert(), ma.copy(t.ray).applyMatrix4(Vc), !(this.boundingBox !== null && ma.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(t, e, ma)));
        }
        getVertexPosition(t, e) {
            return super.getVertexPosition(t, e), this.applyBoneTransform(t, e), e;
        }
        bind(t, e) {
            this.skeleton = t, e === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
        }
        pose() {
            this.skeleton.pose();
        }
        normalizeSkinWeights() {
            const t = new ne, e = this.geometry.attributes.skinWeight;
            for(let n = 0, r = e.count; n < r; n++){
                t.fromBufferAttribute(e, n);
                const s = 1 / t.manhattanLength();
                s !== 1 / 0 ? t.multiplyScalar(s) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
            }
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t), this.bindMode === _c ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === iu ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        }
        applyBoneTransform(t, e) {
            const n = this.skeleton, r = this.geometry;
            zc.fromBufferAttribute(r.attributes.skinIndex, t), Hc.fromBufferAttribute(r.attributes.skinWeight, t), Bc.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
            for(let s = 0; s < 4; s++){
                const a = Hc.getComponent(s);
                if (a !== 0) {
                    const o = zc.getComponent(s);
                    kc.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), e.addScaledVector(of.copy(Bc).applyMatrix4(kc), a);
                }
            }
            return e.applyMatrix4(this.bindMatrixInverse);
        }
    };
    cf = class extends xe {
        constructor(){
            super(), this.isBone = !0, this.type = "Bone";
        }
    };
    class Hh extends Be {
        constructor(t = null, e = 1, n = 1, r, s, a, o, c, l = Ze, h = Ze, u, f){
            super(null, a, o, c, l, h, r, s, u, f), this.isDataTexture = !0, this.image = {
                data: t,
                width: e,
                height: n
            }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    const Gc = new Gt, lf = new Gt;
    kh = class {
        constructor(t = [], e = []){
            this.uuid = pn(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.init();
        }
        init() {
            const t = this.bones, e = this.boneInverses;
            if (this.boneMatrices = new Float32Array(t.length * 16), e.length === 0) this.calculateInverses();
            else if (t.length !== e.length) {
                console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
                for(let n = 0, r = this.bones.length; n < r; n++)this.boneInverses.push(new Gt);
            }
        }
        calculateInverses() {
            this.boneInverses.length = 0;
            for(let t = 0, e = this.bones.length; t < e; t++){
                const n = new Gt;
                this.bones[t] && n.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(n);
            }
        }
        pose() {
            for(let t = 0, e = this.bones.length; t < e; t++){
                const n = this.bones[t];
                n && n.matrixWorld.copy(this.boneInverses[t]).invert();
            }
            for(let t = 0, e = this.bones.length; t < e; t++){
                const n = this.bones[t];
                n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
            }
        }
        update() {
            const t = this.bones, e = this.boneInverses, n = this.boneMatrices, r = this.boneTexture;
            for(let s = 0, a = t.length; s < a; s++){
                const o = t[s] ? t[s].matrixWorld : lf;
                Gc.multiplyMatrices(o, e[s]), Gc.toArray(n, s * 16);
            }
            r !== null && (r.needsUpdate = !0);
        }
        clone() {
            return new kh(this.bones, this.boneInverses);
        }
        computeBoneTexture() {
            let t = Math.sqrt(this.bones.length * 4);
            t = Math.ceil(t / 4) * 4, t = Math.max(t, 4);
            const e = new Float32Array(t * t * 4);
            e.set(this.boneMatrices);
            const n = new Hh(e, t, t, nn, _n);
            return n.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = n, this;
        }
        getBoneByName(t) {
            for(let e = 0, n = this.bones.length; e < n; e++){
                const r = this.bones[e];
                if (r.name === t) return r;
            }
        }
        dispose() {
            this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
        }
        fromJSON(t, e) {
            this.uuid = t.uuid;
            for(let n = 0, r = t.bones.length; n < r; n++){
                const s = t.bones[n];
                let a = e[s];
                a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new cf), this.bones.push(a), this.boneInverses.push(new Gt().fromArray(t.boneInverses[n]));
            }
            return this.init(), this;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.6,
                    type: "Skeleton",
                    generator: "Skeleton.toJSON"
                },
                bones: [],
                boneInverses: []
            };
            t.uuid = this.uuid;
            const e = this.bones, n = this.boneInverses;
            for(let r = 0, s = e.length; r < s; r++){
                const a = e[r];
                t.bones.push(a.uuid);
                const o = n[r];
                t.boneInverses.push(o.toArray());
            }
            return t;
        }
    };
    Wc = class extends sn {
        constructor(t, e, n, r = 1){
            super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
        }
        copy(t) {
            return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
        }
    };
    const Oi = new Gt, jc = new Gt, Kr = [], Xc = new Qn, hf = new Gt, hr = new rn, dr = new zn;
    PA = class extends rn {
        constructor(t, e, n){
            super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new Wc(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
            for(let r = 0; r < n; r++)this.setMatrixAt(r, hf);
        }
        computeBoundingBox() {
            const t = this.geometry, e = this.count;
            this.boundingBox === null && (this.boundingBox = new Qn), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
            for(let n = 0; n < e; n++)this.getMatrixAt(n, Oi), Xc.copy(t.boundingBox).applyMatrix4(Oi), this.boundingBox.union(Xc);
        }
        computeBoundingSphere() {
            const t = this.geometry, e = this.count;
            this.boundingSphere === null && (this.boundingSphere = new zn), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
            for(let n = 0; n < e; n++)this.getMatrixAt(n, Oi), dr.copy(t.boundingSphere).applyMatrix4(Oi), this.boundingSphere.union(dr);
        }
        copy(t, e) {
            return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
        }
        getColorAt(t, e) {
            e.fromArray(this.instanceColor.array, t * 3);
        }
        getMatrixAt(t, e) {
            e.fromArray(this.instanceMatrix.array, t * 16);
        }
        getMorphAt(t, e) {
            const n = e.morphTargetInfluences, r = this.morphTexture.source.data.data, s = n.length + 1, a = t * s + 1;
            for(let o = 0; o < n.length; o++)n[o] = r[a + o];
        }
        raycast(t, e) {
            const n = this.matrixWorld, r = this.count;
            if (hr.geometry = this.geometry, hr.material = this.material, hr.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), dr.copy(this.boundingSphere), dr.applyMatrix4(n), t.ray.intersectsSphere(dr) !== !1)) for(let s = 0; s < r; s++){
                this.getMatrixAt(s, Oi), jc.multiplyMatrices(n, Oi), hr.matrixWorld = jc, hr.raycast(t, Kr);
                for(let a = 0, o = Kr.length; a < o; a++){
                    const c = Kr[a];
                    c.instanceId = s, c.object = this, e.push(c);
                }
                Kr.length = 0;
            }
        }
        setColorAt(t, e) {
            this.instanceColor === null && (this.instanceColor = new Wc(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3);
        }
        setMatrixAt(t, e) {
            e.toArray(this.instanceMatrix.array, t * 16);
        }
        setMorphAt(t, e) {
            const n = e.morphTargetInfluences, r = n.length + 1;
            this.morphTexture === null && (this.morphTexture = new Hh(new Float32Array(r * this.count), r, this.count, Oo, _n));
            const s = this.morphTexture.source.data.data;
            let a = 0;
            for(let l = 0; l < n.length; l++)a += n[l];
            const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, c = r * t;
            s[c] = o, s.set(n, c + 1);
        }
        updateMorphTargets() {}
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
        }
    };
    const ga = new H, df = new H, uf = new Ft;
    hi = class {
        constructor(t = new H(1, 0, 0), e = 0){
            this.isPlane = !0, this.normal = t, this.constant = e;
        }
        set(t, e) {
            return this.normal.copy(t), this.constant = e, this;
        }
        setComponents(t, e, n, r) {
            return this.normal.set(t, e, n), this.constant = r, this;
        }
        setFromNormalAndCoplanarPoint(t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
        }
        setFromCoplanarPoints(t, e, n) {
            const r = ga.subVectors(n, e).cross(df.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(r, t), this;
        }
        copy(t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this;
        }
        normalize() {
            const t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this;
        }
        negate() {
            return this.constant *= -1, this.normal.negate(), this;
        }
        distanceToPoint(t) {
            return this.normal.dot(t) + this.constant;
        }
        distanceToSphere(t) {
            return this.distanceToPoint(t.center) - t.radius;
        }
        projectPoint(t, e) {
            return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
        }
        intersectLine(t, e) {
            const n = t.delta(ga), r = this.normal.dot(n);
            if (r === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
            const s = -(t.start.dot(this.normal) + this.constant) / r;
            return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s);
        }
        intersectsLine(t) {
            const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0;
        }
        intersectsBox(t) {
            return t.intersectsPlane(this);
        }
        intersectsSphere(t) {
            return t.intersectsPlane(this);
        }
        coplanarPoint(t) {
            return t.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t, e) {
            const n = e || uf.getNormalMatrix(t), r = this.coplanarPoint(ga).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
            return this.constant = -r.dot(s), this;
        }
        translate(t) {
            return this.constant -= t.dot(this.normal), this;
        }
        equals(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    };
    const si = new zn, Zr = new H;
    class Go {
        constructor(t = new hi, e = new hi, n = new hi, r = new hi, s = new hi, a = new hi){
            this.planes = [
                t,
                e,
                n,
                r,
                s,
                a
            ];
        }
        set(t, e, n, r, s, a) {
            const o = this.planes;
            return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
        }
        copy(t) {
            const e = this.planes;
            for(let n = 0; n < 6; n++)e[n].copy(t.planes[n]);
            return this;
        }
        setFromProjectionMatrix(t, e = Ln) {
            const n = this.planes, r = t.elements, s = r[0], a = r[1], o = r[2], c = r[3], l = r[4], h = r[5], u = r[6], f = r[7], m = r[8], w = r[9], b = r[10], g = r[11], _ = r[12], R = r[13], E = r[14], S = r[15];
            if (n[0].setComponents(c - s, f - l, g - m, S - _).normalize(), n[1].setComponents(c + s, f + l, g + m, S + _).normalize(), n[2].setComponents(c + a, f + h, g + w, S + R).normalize(), n[3].setComponents(c - a, f - h, g - w, S - R).normalize(), n[4].setComponents(c - o, f - u, g - b, S - E).normalize(), e === Ln) n[5].setComponents(c + o, f + u, g + b, S + E).normalize();
            else if (e === ws) n[5].setComponents(o, u, b, E).normalize();
            else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
            return this;
        }
        intersectsObject(t) {
            if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
            else {
                const e = t.geometry;
                e.boundingSphere === null && e.computeBoundingSphere(), si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
            }
            return this.intersectsSphere(si);
        }
        intersectsSprite(t) {
            return si.center.set(0, 0, 0), si.radius = .7071067811865476, si.applyMatrix4(t.matrixWorld), this.intersectsSphere(si);
        }
        intersectsSphere(t) {
            const e = this.planes, n = t.center, r = -t.radius;
            for(let s = 0; s < 6; s++)if (e[s].distanceToPoint(n) < r) return !1;
            return !0;
        }
        intersectsBox(t) {
            const e = this.planes;
            for(let n = 0; n < 6; n++){
                const r = e[n];
                if (Zr.x = r.normal.x > 0 ? t.max.x : t.min.x, Zr.y = r.normal.y > 0 ? t.max.y : t.min.y, Zr.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint(Zr) < 0) return !1;
            }
            return !0;
        }
        containsPoint(t) {
            const e = this.planes;
            for(let n = 0; n < 6; n++)if (e[n].distanceToPoint(t) < 0) return !1;
            return !0;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    }
    ff = class extends xi {
        constructor(t){
            super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Wt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
        }
    };
    const bs = new H, vs = new H, qc = new Gt, ur = new Cs, Jr = new zn, wa = new H, Yc = new H;
    Vh = class extends xe {
        constructor(t = new mn, e = new ff){
            super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
        }
        copy(t, e) {
            return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
        }
        computeLineDistances() {
            const t = this.geometry;
            if (t.index === null) {
                const e = t.attributes.position, n = [
                    0
                ];
                for(let r = 1, s = e.count; r < s; r++)bs.fromBufferAttribute(e, r - 1), vs.fromBufferAttribute(e, r), n[r] = n[r - 1], n[r] += bs.distanceTo(vs);
                t.setAttribute("lineDistance", new Ve(n, 1));
            } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            return this;
        }
        raycast(t, e) {
            const n = this.geometry, r = this.matrixWorld, s = t.params.Line.threshold, a = n.drawRange;
            if (n.boundingSphere === null && n.computeBoundingSphere(), Jr.copy(n.boundingSphere), Jr.applyMatrix4(r), Jr.radius += s, t.ray.intersectsSphere(Jr) === !1) return;
            qc.copy(r).invert(), ur.copy(t.ray).applyMatrix4(qc);
            const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, h = n.index, f = n.attributes.position;
            if (h !== null) {
                const m = Math.max(0, a.start), w = Math.min(h.count, a.start + a.count);
                for(let b = m, g = w - 1; b < g; b += l){
                    const _ = h.getX(b), R = h.getX(b + 1), E = $r(this, t, ur, c, _, R, b);
                    E && e.push(E);
                }
                if (this.isLineLoop) {
                    const b = h.getX(w - 1), g = h.getX(m), _ = $r(this, t, ur, c, b, g, w - 1);
                    _ && e.push(_);
                }
            } else {
                const m = Math.max(0, a.start), w = Math.min(f.count, a.start + a.count);
                for(let b = m, g = w - 1; b < g; b += l){
                    const _ = $r(this, t, ur, c, b, b + 1, b);
                    _ && e.push(_);
                }
                if (this.isLineLoop) {
                    const b = $r(this, t, ur, c, w - 1, m, w - 1);
                    b && e.push(b);
                }
            }
        }
        updateMorphTargets() {
            const e = this.geometry.morphAttributes, n = Object.keys(e);
            if (n.length > 0) {
                const r = e[n[0]];
                if (r !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let s = 0, a = r.length; s < a; s++){
                        const o = r[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
                    }
                }
            }
        }
    };
    function $r(i, t, e, n, r, s, a) {
        const o = i.geometry.attributes.position;
        if (bs.fromBufferAttribute(o, r), vs.fromBufferAttribute(o, s), e.distanceSqToSegment(bs, vs, wa, Yc) > n) return;
        wa.applyMatrix4(i.matrixWorld);
        const l = t.ray.origin.distanceTo(wa);
        if (!(l < t.near || l > t.far)) return {
            distance: l,
            point: Yc.clone().applyMatrix4(i.matrixWorld),
            index: a,
            face: null,
            faceIndex: null,
            barycoord: null,
            object: i
        };
    }
    const Kc = new H, Zc = new H;
    IA = class extends Vh {
        constructor(t, e){
            super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
        }
        computeLineDistances() {
            const t = this.geometry;
            if (t.index === null) {
                const e = t.attributes.position, n = [];
                for(let r = 0, s = e.count; r < s; r += 2)Kc.fromBufferAttribute(e, r), Zc.fromBufferAttribute(e, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Kc.distanceTo(Zc);
                t.setAttribute("lineDistance", new Ve(n, 1));
            } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            return this;
        }
    };
    DA = class extends Vh {
        constructor(t, e){
            super(t, e), this.isLineLoop = !0, this.type = "LineLoop";
        }
    };
    _f = class extends xi {
        constructor(t){
            super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Wt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
        }
    };
    const Jc = new Gt, Eo = new Cs, Qr = new zn, ts = new H;
    LA = class extends xe {
        constructor(t = new mn, e = new _f){
            super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
        }
        copy(t, e) {
            return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
        }
        raycast(t, e) {
            const n = this.geometry, r = this.matrixWorld, s = t.params.Points.threshold, a = n.drawRange;
            if (n.boundingSphere === null && n.computeBoundingSphere(), Qr.copy(n.boundingSphere), Qr.applyMatrix4(r), Qr.radius += s, t.ray.intersectsSphere(Qr) === !1) return;
            Jc.copy(r).invert(), Eo.copy(t.ray).applyMatrix4(Jc);
            const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, u = n.attributes.position;
            if (l !== null) {
                const f = Math.max(0, a.start), m = Math.min(l.count, a.start + a.count);
                for(let w = f, b = m; w < b; w++){
                    const g = l.getX(w);
                    ts.fromBufferAttribute(u, g), $c(ts, g, c, r, t, e, this);
                }
            } else {
                const f = Math.max(0, a.start), m = Math.min(u.count, a.start + a.count);
                for(let w = f, b = m; w < b; w++)ts.fromBufferAttribute(u, w), $c(ts, w, c, r, t, e, this);
            }
        }
        updateMorphTargets() {
            const e = this.geometry.morphAttributes, n = Object.keys(e);
            if (n.length > 0) {
                const r = e[n[0]];
                if (r !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let s = 0, a = r.length; s < a; s++){
                        const o = r[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
                    }
                }
            }
        }
    };
    function $c(i, t, e, n, r, s, a) {
        const o = Eo.distanceSqToPoint(i);
        if (o < e) {
            const c = new H;
            Eo.closestPointToPoint(i, c), c.applyMatrix4(n);
            const l = r.ray.origin.distanceTo(c);
            if (l < r.near || l > r.far) return;
            s.push({
                distance: l,
                distanceToRay: Math.sqrt(o),
                point: c,
                index: t,
                face: null,
                faceIndex: null,
                barycoord: null,
                object: a
            });
        }
    }
    class Gh extends Be {
        constructor(t, e, n, r, s, a, o, c, l, h = Wi){
            if (h !== Wi && h !== Zi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            n === void 0 && h === Wi && (n = mi), n === void 0 && h === Zi && (n = Ki), super(null, r, s, a, o, c, h, n, l), this.isDepthTexture = !0, this.image = {
                width: t,
                height: e
            }, this.magFilter = o !== void 0 ? o : Ze, this.minFilter = c !== void 0 ? c : Ze, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
        }
        copy(t) {
            return super.copy(t), this.source = new Vo(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
        }
    }
    Wh = class extends mn {
        constructor(t = 1, e = 1, n = 1, r = 32, s = 1, a = !1, o = 0, c = Math.PI * 2){
            super(), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: t,
                radiusBottom: e,
                height: n,
                radialSegments: r,
                heightSegments: s,
                openEnded: a,
                thetaStart: o,
                thetaLength: c
            };
            const l = this;
            r = Math.floor(r), s = Math.floor(s);
            const h = [], u = [], f = [], m = [];
            let w = 0;
            const b = [], g = n / 2;
            let _ = 0;
            R(), a === !1 && (t > 0 && E(!0), e > 0 && E(!1)), this.setIndex(h), this.setAttribute("position", new Ve(u, 3)), this.setAttribute("normal", new Ve(f, 3)), this.setAttribute("uv", new Ve(m, 2));
            function R() {
                const S = new H, N = new H;
                let C = 0;
                const I = (e - t) / n;
                for(let B = 0; B <= s; B++){
                    const M = [], x = B / s, D = x * (e - t) + t;
                    for(let j = 0; j <= r; j++){
                        const W = j / r, Y = W * c + o, tt = Math.sin(Y), K = Math.cos(Y);
                        N.x = D * tt, N.y = -x * n + g, N.z = D * K, u.push(N.x, N.y, N.z), S.set(tt, I, K).normalize(), f.push(S.x, S.y, S.z), m.push(W, 1 - x), M.push(w++);
                    }
                    b.push(M);
                }
                for(let B = 0; B < r; B++)for(let M = 0; M < s; M++){
                    const x = b[M][B], D = b[M + 1][B], j = b[M + 1][B + 1], W = b[M][B + 1];
                    (t > 0 || M !== 0) && (h.push(x, D, W), C += 3), (e > 0 || M !== s - 1) && (h.push(D, j, W), C += 3);
                }
                l.addGroup(_, C, 0), _ += C;
            }
            function E(S) {
                const N = w, C = new $t, I = new H;
                let B = 0;
                const M = S === !0 ? t : e, x = S === !0 ? 1 : -1;
                for(let j = 1; j <= r; j++)u.push(0, g * x, 0), f.push(0, x, 0), m.push(.5, .5), w++;
                const D = w;
                for(let j = 0; j <= r; j++){
                    const Y = j / r * c + o, tt = Math.cos(Y), K = Math.sin(Y);
                    I.x = M * K, I.y = g * x, I.z = M * tt, u.push(I.x, I.y, I.z), f.push(0, x, 0), C.x = tt * .5 + .5, C.y = K * .5 * x + .5, m.push(C.x, C.y), w++;
                }
                for(let j = 0; j < r; j++){
                    const W = N + j, Y = D + j;
                    S === !0 ? h.push(Y, Y + 1, W) : h.push(Y + 1, Y, W), B += 3;
                }
                l.addGroup(_, B, S === !0 ? 1 : 2), _ += B;
            }
        }
        copy(t) {
            return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
        }
        static fromJSON(t) {
            return new Wh(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
        }
    };
    class Ps extends mn {
        constructor(t = 1, e = 1, n = 1, r = 1){
            super(), this.type = "PlaneGeometry", this.parameters = {
                width: t,
                height: e,
                widthSegments: n,
                heightSegments: r
            };
            const s = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, h = c + 1, u = t / o, f = e / c, m = [], w = [], b = [], g = [];
            for(let _ = 0; _ < h; _++){
                const R = _ * f - a;
                for(let E = 0; E < l; E++){
                    const S = E * u - s;
                    w.push(S, -R, 0), b.push(0, 0, 1), g.push(E / o), g.push(1 - _ / c);
                }
            }
            for(let _ = 0; _ < c; _++)for(let R = 0; R < o; R++){
                const E = R + l * _, S = R + l * (_ + 1), N = R + 1 + l * (_ + 1), C = R + 1 + l * _;
                m.push(E, S, C), m.push(S, N, C);
            }
            this.setIndex(m), this.setAttribute("position", new Ve(w, 3)), this.setAttribute("normal", new Ve(b, 3)), this.setAttribute("uv", new Ve(g, 2));
        }
        copy(t) {
            return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
        }
        static fromJSON(t) {
            return new Ps(t.width, t.height, t.widthSegments, t.heightSegments);
        }
    }
    jh = class extends mn {
        constructor(t = 1, e = 32, n = 16, r = 0, s = Math.PI * 2, a = 0, o = Math.PI){
            super(), this.type = "SphereGeometry", this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: n,
                phiStart: r,
                phiLength: s,
                thetaStart: a,
                thetaLength: o
            }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
            const c = Math.min(a + o, Math.PI);
            let l = 0;
            const h = [], u = new H, f = new H, m = [], w = [], b = [], g = [];
            for(let _ = 0; _ <= n; _++){
                const R = [], E = _ / n;
                let S = 0;
                _ === 0 && a === 0 ? S = .5 / e : _ === n && c === Math.PI && (S = -.5 / e);
                for(let N = 0; N <= e; N++){
                    const C = N / e;
                    u.x = -t * Math.cos(r + C * s) * Math.sin(a + E * o), u.y = t * Math.cos(a + E * o), u.z = t * Math.sin(r + C * s) * Math.sin(a + E * o), w.push(u.x, u.y, u.z), f.copy(u).normalize(), b.push(f.x, f.y, f.z), g.push(C + S, 1 - E), R.push(l++);
                }
                h.push(R);
            }
            for(let _ = 0; _ < n; _++)for(let R = 0; R < e; R++){
                const E = h[_][R + 1], S = h[_][R], N = h[_ + 1][R], C = h[_ + 1][R + 1];
                (_ !== 0 || a > 0) && m.push(E, S, C), (_ !== n - 1 || c < Math.PI) && m.push(S, N, C);
            }
            this.setIndex(m), this.setAttribute("position", new Ve(w, 3)), this.setAttribute("normal", new Ve(b, 3)), this.setAttribute("uv", new Ve(g, 2));
        }
        copy(t) {
            return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
        }
        static fromJSON(t) {
            return new jh(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
        }
    };
    pf = class extends xi {
        constructor(t){
            super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = {
                STANDARD: ""
            }, this.color = new Wt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Wt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Th, this.normalScale = new $t(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new vn, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.defines = {
                STANDARD: ""
            }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
        }
    };
    UA = class extends pf {
        constructor(t){
            super(), this.isMeshPhysicalMaterial = !0, this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new $t(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
                get: function() {
                    return kt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
                },
                set: function(e) {
                    this.ior = (1 + .4 * e) / (1 - .4 * e);
                }
            }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [
                100,
                400
            ], this.iridescenceThicknessMap = null, this.sheenColor = new Wt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Wt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Wt(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t);
        }
        get anisotropy() {
            return this._anisotropy;
        }
        set anisotropy(t) {
            this._anisotropy > 0 != t > 0 && this.version++, this._anisotropy = t;
        }
        get clearcoat() {
            return this._clearcoat;
        }
        set clearcoat(t) {
            this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
        }
        get iridescence() {
            return this._iridescence;
        }
        set iridescence(t) {
            this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
        }
        get dispersion() {
            return this._dispersion;
        }
        set dispersion(t) {
            this._dispersion > 0 != t > 0 && this.version++, this._dispersion = t;
        }
        get sheen() {
            return this._sheen;
        }
        set sheen(t) {
            this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
        }
        get transmission() {
            return this._transmission;
        }
        set transmission(t) {
            this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
        }
        copy(t) {
            return super.copy(t), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.anisotropy = t.anisotropy, this.anisotropyRotation = t.anisotropyRotation, this.anisotropyMap = t.anisotropyMap, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.dispersion = t.dispersion, this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [
                ...t.iridescenceThicknessRange
            ], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
        }
    };
    class mf extends xi {
        constructor(t){
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = au, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
        }
    }
    class gf extends xi {
        constructor(t){
            super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
        }
    }
    function es(i, t, e) {
        return !i || !e && i.constructor === t ? i : typeof t.BYTES_PER_ELEMENT == "number" ? new t(i) : Array.prototype.slice.call(i);
    }
    function wf(i) {
        return ArrayBuffer.isView(i) && !(i instanceof DataView);
    }
    function bf(i) {
        function t(r, s) {
            return i[r] - i[s];
        }
        const e = i.length, n = new Array(e);
        for(let r = 0; r !== e; ++r)n[r] = r;
        return n.sort(t), n;
    }
    function Qc(i, t, e) {
        const n = i.length, r = new i.constructor(n);
        for(let s = 0, a = 0; a !== n; ++s){
            const o = e[s] * t;
            for(let c = 0; c !== t; ++c)r[a++] = i[o + c];
        }
        return r;
    }
    function Xh(i, t, e, n) {
        let r = 1, s = i[0];
        for(; s !== void 0 && s[n] === void 0;)s = i[r++];
        if (s === void 0) return;
        let a = s[n];
        if (a !== void 0) if (Array.isArray(a)) do a = s[n], a !== void 0 && (t.push(s.time), e.push(...a)), s = i[r++];
        while (s !== void 0);
        else if (a.toArray !== void 0) do a = s[n], a !== void 0 && (t.push(s.time), a.toArray(e, e.length)), s = i[r++];
        while (s !== void 0);
        else do a = s[n], a !== void 0 && (t.push(s.time), e.push(a)), s = i[r++];
        while (s !== void 0);
    }
    Is = class {
        constructor(t, e, n, r){
            this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = r !== void 0 ? r : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
        }
        evaluate(t) {
            const e = this.parameterPositions;
            let n = this._cachedIndex, r = e[n], s = e[n - 1];
            n: {
                t: {
                    let a;
                    e: {
                        i: if (!(t < r)) {
                            for(let o = n + 2;;){
                                if (r === void 0) {
                                    if (t < s) break i;
                                    return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                                }
                                if (n === o) break;
                                if (s = r, r = e[++n], t < r) break t;
                            }
                            a = e.length;
                            break e;
                        }
                        if (!(t >= s)) {
                            const o = e[1];
                            t < o && (n = 2, s = o);
                            for(let c = n - 2;;){
                                if (s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
                                if (n === c) break;
                                if (r = s, s = e[--n - 1], t >= s) break t;
                            }
                            a = n, n = 0;
                            break e;
                        }
                        break n;
                    }
                    for(; n < a;){
                        const o = n + a >>> 1;
                        t < e[o] ? a = o : n = o + 1;
                    }
                    if (r = e[n], s = e[n - 1], s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
                    if (r === void 0) return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                this._cachedIndex = n, this.intervalChanged_(n, s, r);
            }
            return this.interpolate_(n, s, t, r);
        }
        getSettings_() {
            return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t) {
            const e = this.resultBuffer, n = this.sampleValues, r = this.valueSize, s = t * r;
            for(let a = 0; a !== r; ++a)e[a] = n[s + a];
            return e;
        }
        interpolate_() {
            throw new Error("call to abstract method");
        }
        intervalChanged_() {}
    };
    class vf extends Is {
        constructor(t, e, n, r){
            super(t, e, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
                endingStart: pc,
                endingEnd: pc
            };
        }
        intervalChanged_(t, e, n) {
            const r = this.parameterPositions;
            let s = t - 2, a = t + 1, o = r[s], c = r[a];
            if (o === void 0) switch(this.getSettings_().endingStart){
                case mc:
                    s = t, o = 2 * e - n;
                    break;
                case gc:
                    s = r.length - 2, o = e + r[s] - r[s + 1];
                    break;
                default:
                    s = t, o = n;
            }
            if (c === void 0) switch(this.getSettings_().endingEnd){
                case mc:
                    a = t, c = 2 * n - e;
                    break;
                case gc:
                    a = 1, c = n + r[1] - r[0];
                    break;
                default:
                    a = t - 1, c = e;
            }
            const l = (n - e) * .5, h = this.valueSize;
            this._weightPrev = l / (e - o), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = a * h;
        }
        interpolate_(t, e, n, r) {
            const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = t * o, l = c - o, h = this._offsetPrev, u = this._offsetNext, f = this._weightPrev, m = this._weightNext, w = (n - e) / (r - e), b = w * w, g = b * w, _ = -f * g + 2 * f * b - f * w, R = (1 + f) * g + (-1.5 - 2 * f) * b + (-.5 + f) * w + 1, E = (-1 - m) * g + (1.5 + m) * b + .5 * w, S = m * g - m * b;
            for(let N = 0; N !== o; ++N)s[N] = _ * a[h + N] + R * a[l + N] + E * a[c + N] + S * a[u + N];
            return s;
        }
    }
    class yf extends Is {
        constructor(t, e, n, r){
            super(t, e, n, r);
        }
        interpolate_(t, e, n, r) {
            const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = t * o, l = c - o, h = (n - e) / (r - e), u = 1 - h;
            for(let f = 0; f !== o; ++f)s[f] = a[l + f] * u + a[c + f] * h;
            return s;
        }
    }
    class xf extends Is {
        constructor(t, e, n, r){
            super(t, e, n, r);
        }
        interpolate_(t) {
            return this.copySampleValue_(t - 1);
        }
    }
    class xn {
        constructor(t, e, n, r){
            if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
            this.name = t, this.times = es(e, this.TimeBufferType), this.values = es(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
        }
        static toJSON(t) {
            const e = t.constructor;
            let n;
            if (e.toJSON !== this.toJSON) n = e.toJSON(t);
            else {
                n = {
                    name: t.name,
                    times: es(t.times, Array),
                    values: es(t.values, Array)
                };
                const r = t.getInterpolation();
                r !== t.DefaultInterpolation && (n.interpolation = r);
            }
            return n.type = t.ValueTypeName, n;
        }
        InterpolantFactoryMethodDiscrete(t) {
            return new xf(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodLinear(t) {
            return new yf(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodSmooth(t) {
            return new vf(this.times, this.values, this.getValueSize(), t);
        }
        setInterpolation(t) {
            let e;
            switch(t){
                case ms:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case So:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case Ys:
                    e = this.InterpolantFactoryMethodSmooth;
                    break;
            }
            if (e === void 0) {
                const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (this.createInterpolant === void 0) if (t !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
                else throw new Error(n);
                return console.warn("THREE.KeyframeTrack:", n), this;
            }
            return this.createInterpolant = e, this;
        }
        getInterpolation() {
            switch(this.createInterpolant){
                case this.InterpolantFactoryMethodDiscrete:
                    return ms;
                case this.InterpolantFactoryMethodLinear:
                    return So;
                case this.InterpolantFactoryMethodSmooth:
                    return Ys;
            }
        }
        getValueSize() {
            return this.values.length / this.times.length;
        }
        shift(t) {
            if (t !== 0) {
                const e = this.times;
                for(let n = 0, r = e.length; n !== r; ++n)e[n] += t;
            }
            return this;
        }
        scale(t) {
            if (t !== 1) {
                const e = this.times;
                for(let n = 0, r = e.length; n !== r; ++n)e[n] *= t;
            }
            return this;
        }
        trim(t, e) {
            const n = this.times, r = n.length;
            let s = 0, a = r - 1;
            for(; s !== r && n[s] < t;)++s;
            for(; a !== -1 && n[a] > e;)--a;
            if (++a, s !== 0 || a !== r) {
                s >= a && (a = Math.max(a, 1), s = a - 1);
                const o = this.getValueSize();
                this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
            }
            return this;
        }
        validate() {
            let t = !0;
            const e = this.getValueSize();
            e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
            const n = this.times, r = this.values, s = n.length;
            s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
            let a = null;
            for(let o = 0; o !== s; o++){
                const c = n[o];
                if (typeof c == "number" && isNaN(c)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c), t = !1;
                    break;
                }
                if (a !== null && a > c) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a), t = !1;
                    break;
                }
                a = c;
            }
            if (r !== void 0 && wf(r)) for(let o = 0, c = r.length; o !== c; ++o){
                const l = r[o];
                if (isNaN(l)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), t = !1;
                    break;
                }
            }
            return t;
        }
        optimize() {
            const t = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === Ys, s = t.length - 1;
            let a = 1;
            for(let o = 1; o < s; ++o){
                let c = !1;
                const l = t[o], h = t[o + 1];
                if (l !== h && (o !== 1 || l !== t[0])) if (r) c = !0;
                else {
                    const u = o * n, f = u - n, m = u + n;
                    for(let w = 0; w !== n; ++w){
                        const b = e[u + w];
                        if (b !== e[f + w] || b !== e[m + w]) {
                            c = !0;
                            break;
                        }
                    }
                }
                if (c) {
                    if (o !== a) {
                        t[a] = t[o];
                        const u = o * n, f = a * n;
                        for(let m = 0; m !== n; ++m)e[f + m] = e[u + m];
                    }
                    ++a;
                }
            }
            if (s > 0) {
                t[a] = t[s];
                for(let o = s * n, c = a * n, l = 0; l !== n; ++l)e[c + l] = e[o + l];
                ++a;
            }
            return a !== t.length ? (this.times = t.slice(0, a), this.values = e.slice(0, a * n)) : (this.times = t, this.values = e), this;
        }
        clone() {
            const t = this.times.slice(), e = this.values.slice(), n = this.constructor, r = new n(this.name, t, e);
            return r.createInterpolant = this.createInterpolant, r;
        }
    }
    xn.prototype.TimeBufferType = Float32Array;
    xn.prototype.ValueBufferType = Float32Array;
    xn.prototype.DefaultInterpolation = So;
    class er extends xn {
        constructor(t, e, n){
            super(t, e, n);
        }
    }
    er.prototype.ValueTypeName = "bool";
    er.prototype.ValueBufferType = Array;
    er.prototype.DefaultInterpolation = ms;
    er.prototype.InterpolantFactoryMethodLinear = void 0;
    er.prototype.InterpolantFactoryMethodSmooth = void 0;
    class qh extends xn {
    }
    qh.prototype.ValueTypeName = "color";
    ys = class extends xn {
    };
    ys.prototype.ValueTypeName = "number";
    class Sf extends Is {
        constructor(t, e, n, r){
            super(t, e, n, r);
        }
        interpolate_(t, e, n, r) {
            const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - e) / (r - e);
            let l = t * o;
            for(let h = l + o; l !== h; l += 4)tr.slerpFlat(s, 0, a, l - o, a, l, c);
            return s;
        }
    }
    Ds = class extends xn {
        InterpolantFactoryMethodLinear(t) {
            return new Sf(this.times, this.values, this.getValueSize(), t);
        }
    };
    Ds.prototype.ValueTypeName = "quaternion";
    Ds.prototype.InterpolantFactoryMethodSmooth = void 0;
    class nr extends xn {
        constructor(t, e, n){
            super(t, e, n);
        }
    }
    nr.prototype.ValueTypeName = "string";
    nr.prototype.ValueBufferType = Array;
    nr.prototype.DefaultInterpolation = ms;
    nr.prototype.InterpolantFactoryMethodLinear = void 0;
    nr.prototype.InterpolantFactoryMethodSmooth = void 0;
    xs = class extends xn {
    };
    xs.prototype.ValueTypeName = "vector";
    NA = class {
        constructor(t = "", e = -1, n = [], r = su){
            this.name = t, this.tracks = n, this.duration = e, this.blendMode = r, this.uuid = pn(), this.duration < 0 && this.resetDuration();
        }
        static parse(t) {
            const e = [], n = t.tracks, r = 1 / (t.fps || 1);
            for(let a = 0, o = n.length; a !== o; ++a)e.push(Ef(n[a]).scale(r));
            const s = new this(t.name, t.duration, e, t.blendMode);
            return s.uuid = t.uuid, s;
        }
        static toJSON(t) {
            const e = [], n = t.tracks, r = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid,
                blendMode: t.blendMode
            };
            for(let s = 0, a = n.length; s !== a; ++s)e.push(xn.toJSON(n[s]));
            return r;
        }
        static CreateFromMorphTargetSequence(t, e, n, r) {
            const s = e.length, a = [];
            for(let o = 0; o < s; o++){
                let c = [], l = [];
                c.push((o + s - 1) % s, o, (o + 1) % s), l.push(0, 1, 0);
                const h = bf(c);
                c = Qc(c, 1, h), l = Qc(l, 1, h), !r && c[0] === 0 && (c.push(s), l.push(l[0])), a.push(new ys(".morphTargetInfluences[" + e[o].name + "]", c, l).scale(1 / n));
            }
            return new this(t, -1, a);
        }
        static findByName(t, e) {
            let n = t;
            if (!Array.isArray(t)) {
                const r = t;
                n = r.geometry && r.geometry.animations || r.animations;
            }
            for(let r = 0; r < n.length; r++)if (n[r].name === e) return n[r];
            return null;
        }
        static CreateClipsFromMorphTargetSequences(t, e, n) {
            const r = {}, s = /^([\w-]*?)([\d]+)$/;
            for(let o = 0, c = t.length; o < c; o++){
                const l = t[o], h = l.name.match(s);
                if (h && h.length > 1) {
                    const u = h[1];
                    let f = r[u];
                    f || (r[u] = f = []), f.push(l);
                }
            }
            const a = [];
            for(const o in r)a.push(this.CreateFromMorphTargetSequence(o, r[o], e, n));
            return a;
        }
        static parseAnimation(t, e) {
            if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            const n = function(u, f, m, w, b) {
                if (m.length !== 0) {
                    const g = [], _ = [];
                    Xh(m, g, _, w), g.length !== 0 && b.push(new u(f, g, _));
                }
            }, r = [], s = t.name || "default", a = t.fps || 30, o = t.blendMode;
            let c = t.length || -1;
            const l = t.hierarchy || [];
            for(let u = 0; u < l.length; u++){
                const f = l[u].keys;
                if (!(!f || f.length === 0)) if (f[0].morphTargets) {
                    const m = {};
                    let w;
                    for(w = 0; w < f.length; w++)if (f[w].morphTargets) for(let b = 0; b < f[w].morphTargets.length; b++)m[f[w].morphTargets[b]] = -1;
                    for(const b in m){
                        const g = [], _ = [];
                        for(let R = 0; R !== f[w].morphTargets.length; ++R){
                            const E = f[w];
                            g.push(E.time), _.push(E.morphTarget === b ? 1 : 0);
                        }
                        r.push(new ys(".morphTargetInfluence[" + b + "]", g, _));
                    }
                    c = m.length * a;
                } else {
                    const m = ".bones[" + e[u].name + "]";
                    n(xs, m + ".position", f, "pos", r), n(Ds, m + ".quaternion", f, "rot", r), n(xs, m + ".scale", f, "scl", r);
                }
            }
            return r.length === 0 ? null : new this(s, c, r, o);
        }
        resetDuration() {
            const t = this.tracks;
            let e = 0;
            for(let n = 0, r = t.length; n !== r; ++n){
                const s = this.tracks[n];
                e = Math.max(e, s.times[s.times.length - 1]);
            }
            return this.duration = e, this;
        }
        trim() {
            for(let t = 0; t < this.tracks.length; t++)this.tracks[t].trim(0, this.duration);
            return this;
        }
        validate() {
            let t = !0;
            for(let e = 0; e < this.tracks.length; e++)t = t && this.tracks[e].validate();
            return t;
        }
        optimize() {
            for(let t = 0; t < this.tracks.length; t++)this.tracks[t].optimize();
            return this;
        }
        clone() {
            const t = [];
            for(let e = 0; e < this.tracks.length; e++)t.push(this.tracks[e].clone());
            return new this.constructor(this.name, this.duration, t, this.blendMode);
        }
        toJSON() {
            return this.constructor.toJSON(this);
        }
    };
    function Mf(i) {
        switch(i.toLowerCase()){
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return ys;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return xs;
            case "color":
                return qh;
            case "quaternion":
                return Ds;
            case "bool":
            case "boolean":
                return er;
            case "string":
                return nr;
        }
        throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i);
    }
    function Ef(i) {
        if (i.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const t = Mf(i.type);
        if (i.times === void 0) {
            const e = [], n = [];
            Xh(i.keys, e, n, "value"), i.times = e, i.values = n;
        }
        return t.parse !== void 0 ? t.parse(i) : new t(i.name, i.times, i.values, i.interpolation);
    }
    const qn = {
        enabled: !1,
        files: {},
        add: function(i, t) {
            this.enabled !== !1 && (this.files[i] = t);
        },
        get: function(i) {
            if (this.enabled !== !1) return this.files[i];
        },
        remove: function(i) {
            delete this.files[i];
        },
        clear: function() {
            this.files = {};
        }
    };
    class Tf {
        constructor(t, e, n){
            const r = this;
            let s = !1, a = 0, o = 0, c;
            const l = [];
            this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(h) {
                o++, s === !1 && r.onStart !== void 0 && r.onStart(h, a, o), s = !0;
            }, this.itemEnd = function(h) {
                a++, r.onProgress !== void 0 && r.onProgress(h, a, o), a === o && (s = !1, r.onLoad !== void 0 && r.onLoad());
            }, this.itemError = function(h) {
                r.onError !== void 0 && r.onError(h);
            }, this.resolveURL = function(h) {
                return c ? c(h) : h;
            }, this.setURLModifier = function(h) {
                return c = h, this;
            }, this.addHandler = function(h, u) {
                return l.push(h, u), this;
            }, this.removeHandler = function(h) {
                const u = l.indexOf(h);
                return u !== -1 && l.splice(u, 2), this;
            }, this.getHandler = function(h) {
                for(let u = 0, f = l.length; u < f; u += 2){
                    const m = l[u], w = l[u + 1];
                    if (m.global && (m.lastIndex = 0), m.test(h)) return w;
                }
                return null;
            };
        }
    }
    const Rf = new Tf;
    Tr = class {
        constructor(t){
            this.manager = t !== void 0 ? t : Rf, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {}
        loadAsync(t, e) {
            const n = this;
            return new Promise(function(r, s) {
                n.load(t, r, e, s);
            });
        }
        parse() {}
        setCrossOrigin(t) {
            return this.crossOrigin = t, this;
        }
        setWithCredentials(t) {
            return this.withCredentials = t, this;
        }
        setPath(t) {
            return this.path = t, this;
        }
        setResourcePath(t) {
            return this.resourcePath = t, this;
        }
        setRequestHeader(t) {
            return this.requestHeader = t, this;
        }
    };
    Tr.DEFAULT_MATERIAL_NAME = "__DEFAULT";
    const Cn = {};
    class Af extends Error {
        constructor(t, e){
            super(t), this.response = e;
        }
    }
    FA = class extends Tr {
        constructor(t){
            super(t);
        }
        load(t, e, n, r) {
            t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
            const s = qn.get(t);
            if (s !== void 0) return this.manager.itemStart(t), setTimeout(()=>{
                e && e(s), this.manager.itemEnd(t);
            }, 0), s;
            if (Cn[t] !== void 0) {
                Cn[t].push({
                    onLoad: e,
                    onProgress: n,
                    onError: r
                });
                return;
            }
            Cn[t] = [], Cn[t].push({
                onLoad: e,
                onProgress: n,
                onError: r
            });
            const a = new Request(t, {
                headers: new Headers(this.requestHeader),
                credentials: this.withCredentials ? "include" : "same-origin"
            }), o = this.mimeType, c = this.responseType;
            fetch(a).then((l)=>{
                if (l.status === 200 || l.status === 0) {
                    if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l;
                    const h = Cn[t], u = l.body.getReader(), f = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), m = f ? parseInt(f) : 0, w = m !== 0;
                    let b = 0;
                    const g = new ReadableStream({
                        start (_) {
                            R();
                            function R() {
                                u.read().then(({ done: E, value: S })=>{
                                    if (E) _.close();
                                    else {
                                        b += S.byteLength;
                                        const N = new ProgressEvent("progress", {
                                            lengthComputable: w,
                                            loaded: b,
                                            total: m
                                        });
                                        for(let C = 0, I = h.length; C < I; C++){
                                            const B = h[C];
                                            B.onProgress && B.onProgress(N);
                                        }
                                        _.enqueue(S), R();
                                    }
                                }, (E)=>{
                                    _.error(E);
                                });
                            }
                        }
                    });
                    return new Response(g);
                } else throw new Af(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
            }).then((l)=>{
                switch(c){
                    case "arraybuffer":
                        return l.arrayBuffer();
                    case "blob":
                        return l.blob();
                    case "document":
                        return l.text().then((h)=>new DOMParser().parseFromString(h, o));
                    case "json":
                        return l.json();
                    default:
                        if (o === void 0) return l.text();
                        {
                            const u = /charset="?([^;"\s]*)"?/i.exec(o), f = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(f);
                            return l.arrayBuffer().then((w)=>m.decode(w));
                        }
                }
            }).then((l)=>{
                qn.add(t, l);
                const h = Cn[t];
                delete Cn[t];
                for(let u = 0, f = h.length; u < f; u++){
                    const m = h[u];
                    m.onLoad && m.onLoad(l);
                }
            }).catch((l)=>{
                const h = Cn[t];
                if (h === void 0) throw this.manager.itemError(t), l;
                delete Cn[t];
                for(let u = 0, f = h.length; u < f; u++){
                    const m = h[u];
                    m.onError && m.onError(l);
                }
                this.manager.itemError(t);
            }).finally(()=>{
                this.manager.itemEnd(t);
            }), this.manager.itemStart(t);
        }
        setResponseType(t) {
            return this.responseType = t, this;
        }
        setMimeType(t) {
            return this.mimeType = t, this;
        }
    };
    class Cf extends Tr {
        constructor(t){
            super(t);
        }
        load(t, e, n, r) {
            this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
            const s = this, a = qn.get(t);
            if (a !== void 0) return s.manager.itemStart(t), setTimeout(function() {
                e && e(a), s.manager.itemEnd(t);
            }, 0), a;
            const o = br("img");
            function c() {
                h(), qn.add(t, this), e && e(this), s.manager.itemEnd(t);
            }
            function l(u) {
                h(), r && r(u), s.manager.itemError(t), s.manager.itemEnd(t);
            }
            function h() {
                o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
            }
            return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(t), o.src = t, o;
        }
    }
    OA = class extends Tr {
        constructor(t){
            super(t);
        }
        load(t, e, n, r) {
            const s = new Be, a = new Cf(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(o) {
                s.image = o, s.needsUpdate = !0, e !== void 0 && e(s);
            }, n, r), s;
        }
    };
    class Ls extends xe {
        constructor(t, e = 1){
            super(), this.isLight = !0, this.type = "Light", this.color = new Wt(t), this.intensity = e;
        }
        dispose() {}
        copy(t, e) {
            return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
        }
    }
    const ba = new Gt, tl = new H, el = new H;
    class Wo {
        constructor(t){
            this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new $t(512, 512), this.map = null, this.mapPass = null, this.matrix = new Gt, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Go, this._frameExtents = new $t(1, 1), this._viewportCount = 1, this._viewports = [
                new ne(0, 0, 1, 1)
            ];
        }
        getViewportCount() {
            return this._viewportCount;
        }
        getFrustum() {
            return this._frustum;
        }
        updateMatrices(t) {
            const e = this.camera, n = this.matrix;
            tl.setFromMatrixPosition(t.matrixWorld), e.position.copy(tl), el.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(el), e.updateMatrixWorld(), ba.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ba), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(ba);
        }
        getViewport(t) {
            return this._viewports[t];
        }
        getFrameExtents() {
            return this._frameExtents;
        }
        dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
        }
        copy(t) {
            return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        toJSON() {
            const t = {};
            return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
        }
    }
    class Pf extends Wo {
        constructor(){
            super(new Ke(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
        }
        updateMatrices(t) {
            const e = this.camera, n = $i * 2 * t.angle * this.focus, r = this.mapSize.width / this.mapSize.height, s = t.distance || e.far;
            (n !== e.fov || r !== e.aspect || s !== e.far) && (e.fov = n, e.aspect = r, e.far = s, e.updateProjectionMatrix()), super.updateMatrices(t);
        }
        copy(t) {
            return super.copy(t), this.focus = t.focus, this;
        }
    }
    BA = class extends Ls {
        constructor(t, e, n = 0, r = Math.PI / 3, s = 0, a = 2){
            super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(xe.DEFAULT_UP), this.updateMatrix(), this.target = new xe, this.distance = n, this.angle = r, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new Pf;
        }
        get power() {
            return this.intensity * Math.PI;
        }
        set power(t) {
            this.intensity = t / Math.PI;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t, e) {
            return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
        }
    };
    const nl = new Gt, fr = new H, va = new H;
    class If extends Wo {
        constructor(){
            super(new Ke(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new $t(4, 2), this._viewportCount = 6, this._viewports = [
                new ne(2, 1, 1, 1),
                new ne(0, 1, 1, 1),
                new ne(3, 1, 1, 1),
                new ne(1, 1, 1, 1),
                new ne(3, 0, 1, 1),
                new ne(1, 0, 1, 1)
            ], this._cubeDirections = [
                new H(1, 0, 0),
                new H(-1, 0, 0),
                new H(0, 0, 1),
                new H(0, 0, -1),
                new H(0, 1, 0),
                new H(0, -1, 0)
            ], this._cubeUps = [
                new H(0, 1, 0),
                new H(0, 1, 0),
                new H(0, 1, 0),
                new H(0, 1, 0),
                new H(0, 0, 1),
                new H(0, 0, -1)
            ];
        }
        updateMatrices(t, e = 0) {
            const n = this.camera, r = this.matrix, s = t.distance || n.far;
            s !== n.far && (n.far = s, n.updateProjectionMatrix()), fr.setFromMatrixPosition(t.matrixWorld), n.position.copy(fr), va.copy(n.position), va.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(va), n.updateMatrixWorld(), r.makeTranslation(-fr.x, -fr.y, -fr.z), nl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(nl);
        }
    }
    zA = class extends Ls {
        constructor(t, e, n = 0, r = 2){
            super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new If;
        }
        get power() {
            return this.intensity * 4 * Math.PI;
        }
        set power(t) {
            this.intensity = t / (4 * Math.PI);
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t, e) {
            return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
        }
    };
    Yh = class extends Oh {
        constructor(t = -1, e = 1, n = 1, r = -1, s = .1, a = 2e3){
            super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
        }
        copy(t, e) {
            return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
        }
        setViewOffset(t, e, n, r, s, a) {
            this.view === null && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
            let s = n - t, a = n + t, o = r + e, c = r - e;
            if (this.view !== null && this.view.enabled) {
                const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
            }
            this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
        }
    };
    class Df extends Wo {
        constructor(){
            super(new Yh(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
        }
    }
    HA = class extends Ls {
        constructor(t, e){
            super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(xe.DEFAULT_UP), this.updateMatrix(), this.target = new xe, this.shadow = new Df;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
        }
    };
    kA = class extends Ls {
        constructor(t, e){
            super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight";
        }
    };
    VA = class {
        static decodeText(t) {
            if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u") return new TextDecoder().decode(t);
            let e = "";
            for(let n = 0, r = t.length; n < r; n++)e += String.fromCharCode(t[n]);
            try {
                return decodeURIComponent(escape(e));
            } catch  {
                return e;
            }
        }
        static extractUrlBase(t) {
            const e = t.lastIndexOf("/");
            return e === -1 ? "./" : t.slice(0, e + 1);
        }
        static resolveURL(t, e) {
            return typeof t != "string" || t === "" ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t);
        }
    };
    GA = class extends Tr {
        constructor(t){
            super(t), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
                premultiplyAlpha: "none"
            };
        }
        setOptions(t) {
            return this.options = t, this;
        }
        load(t, e, n, r) {
            t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
            const s = this, a = qn.get(t);
            if (a !== void 0) {
                if (s.manager.itemStart(t), a.then) {
                    a.then((l)=>{
                        e && e(l), s.manager.itemEnd(t);
                    }).catch((l)=>{
                        r && r(l);
                    });
                    return;
                }
                return setTimeout(function() {
                    e && e(a), s.manager.itemEnd(t);
                }, 0), a;
            }
            const o = {};
            o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
            const c = fetch(t, o).then(function(l) {
                return l.blob();
            }).then(function(l) {
                return createImageBitmap(l, Object.assign(s.options, {
                    colorSpaceConversion: "none"
                }));
            }).then(function(l) {
                return qn.add(t, l), e && e(l), s.manager.itemEnd(t), l;
            }).catch(function(l) {
                r && r(l), qn.remove(t), s.manager.itemError(t), s.manager.itemEnd(t);
            });
            qn.add(t, c), s.manager.itemStart(t);
        }
    };
    class Lf extends Ke {
        constructor(t = []){
            super(), this.isArrayCamera = !0, this.cameras = t, this.index = 0;
        }
    }
    const jo = "\\[\\]\\.:\\/", Uf = new RegExp("[" + jo + "]", "g"), Xo = "[^" + jo + "]", Nf = "[^" + jo.replace("\\.", "") + "]", Ff = /((?:WC+[\/:])*)/.source.replace("WC", Xo), Of = /(WCOD+)?/.source.replace("WCOD", Nf), Bf = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Xo), zf = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Xo), Hf = new RegExp("^" + Ff + Of + Bf + zf + "$"), kf = [
        "material",
        "materials",
        "bones",
        "map"
    ];
    class Vf {
        constructor(t, e, n){
            const r = n || le.parseTrackName(e);
            this._targetGroup = t, this._bindings = t.subscribe_(e, r);
        }
        getValue(t, e) {
            this.bind();
            const n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
            r !== void 0 && r.getValue(t, e);
        }
        setValue(t, e) {
            const n = this._bindings;
            for(let r = this._targetGroup.nCachedObjects_, s = n.length; r !== s; ++r)n[r].setValue(t, e);
        }
        bind() {
            const t = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)t[e].bind();
        }
        unbind() {
            const t = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)t[e].unbind();
        }
    }
    le = class {
        constructor(t, e, n){
            this.path = e, this.parsedPath = n || le.parseTrackName(e), this.node = le.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
        static create(t, e, n) {
            return t && t.isAnimationObjectGroup ? new le.Composite(t, e, n) : new le(t, e, n);
        }
        static sanitizeNodeName(t) {
            return t.replace(/\s/g, "_").replace(Uf, "");
        }
        static parseTrackName(t) {
            const e = Hf.exec(t);
            if (e === null) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            const n = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            }, r = n.nodeName && n.nodeName.lastIndexOf(".");
            if (r !== void 0 && r !== -1) {
                const s = n.nodeName.substring(r + 1);
                kf.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = s);
            }
            if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
            return n;
        }
        static findNode(t, e) {
            if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid) return t;
            if (t.skeleton) {
                const n = t.skeleton.getBoneByName(e);
                if (n !== void 0) return n;
            }
            if (t.children) {
                const n = function(s) {
                    for(let a = 0; a < s.length; a++){
                        const o = s[a];
                        if (o.name === e || o.uuid === e) return o;
                        const c = n(o.children);
                        if (c) return c;
                    }
                    return null;
                }, r = n(t.children);
                if (r) return r;
            }
            return null;
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t, e) {
            t[e] = this.targetObject[this.propertyName];
        }
        _getValue_array(t, e) {
            const n = this.resolvedProperty;
            for(let r = 0, s = n.length; r !== s; ++r)t[e++] = n[r];
        }
        _getValue_arrayElement(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t, e) {
            this.resolvedProperty.toArray(t, e);
        }
        _setValue_direct(t, e) {
            this.targetObject[this.propertyName] = t[e];
        }
        _setValue_direct_setNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_array(t, e) {
            const n = this.resolvedProperty;
            for(let r = 0, s = n.length; r !== s; ++r)n[r] = t[e++];
        }
        _setValue_array_setNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for(let r = 0, s = n.length; r !== s; ++r)n[r] = t[e++];
            this.targetObject.needsUpdate = !0;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for(let r = 0, s = n.length; r !== s; ++r)n[r] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_arrayElement(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_fromArray(t, e) {
            this.resolvedProperty.fromArray(t, e);
        }
        _setValue_fromArray_setNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _getValue_unbound(t, e) {
            this.bind(), this.getValue(t, e);
        }
        _setValue_unbound(t, e) {
            this.bind(), this.setValue(t, e);
        }
        bind() {
            let t = this.node;
            const e = this.parsedPath, n = e.objectName, r = e.propertyName;
            let s = e.propertyIndex;
            if (t || (t = le.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
                console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
                return;
            }
            if (n) {
                let l = e.objectIndex;
                switch(n){
                    case "materials":
                        if (!t.material) {
                            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            return;
                        }
                        if (!t.material.materials) {
                            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            return;
                        }
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton) {
                            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            return;
                        }
                        t = t.skeleton.bones;
                        for(let h = 0; h < t.length; h++)if (t[h].name === l) {
                            l = h;
                            break;
                        }
                        break;
                    case "map":
                        if ("map" in t) {
                            t = t.map;
                            break;
                        }
                        if (!t.material) {
                            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            return;
                        }
                        if (!t.material.map) {
                            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                            return;
                        }
                        t = t.material.map;
                        break;
                    default:
                        if (t[n] === void 0) {
                            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            return;
                        }
                        t = t[n];
                }
                if (l !== void 0) {
                    if (t[l] === void 0) {
                        console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                        return;
                    }
                    t = t[l];
                }
            }
            const a = t[r];
            if (a === void 0) {
                const l = e.nodeName;
                console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + r + " but it wasn't found.", t);
                return;
            }
            let o = this.Versioning.None;
            this.targetObject = t, t.isMaterial === !0 ? o = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
            let c = this.BindingType.Direct;
            if (s !== void 0) {
                if (r === "morphTargetInfluences") {
                    if (!t.geometry) {
                        console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                        return;
                    }
                    if (!t.geometry.morphAttributes) {
                        console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                        return;
                    }
                    t.morphTargetDictionary[s] !== void 0 && (s = t.morphTargetDictionary[s]);
                }
                c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
            } else a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = r;
            this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
        }
        unbind() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
    };
    le.Composite = Vf;
    le.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    };
    le.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    };
    le.prototype.GetterByBindingType = [
        le.prototype._getValue_direct,
        le.prototype._getValue_array,
        le.prototype._getValue_arrayElement,
        le.prototype._getValue_toArray
    ];
    le.prototype.SetterByBindingTypeAndVersioning = [
        [
            le.prototype._setValue_direct,
            le.prototype._setValue_direct_setNeedsUpdate,
            le.prototype._setValue_direct_setMatrixWorldNeedsUpdate
        ],
        [
            le.prototype._setValue_array,
            le.prototype._setValue_array_setNeedsUpdate,
            le.prototype._setValue_array_setMatrixWorldNeedsUpdate
        ],
        [
            le.prototype._setValue_arrayElement,
            le.prototype._setValue_arrayElement_setNeedsUpdate,
            le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
        ],
        [
            le.prototype._setValue_fromArray,
            le.prototype._setValue_fromArray_setNeedsUpdate,
            le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
        ]
    ];
    WA = class {
        constructor(t = 1, e = 0, n = 0){
            this.radius = t, this.phi = e, this.theta = n;
        }
        set(t, e, n) {
            return this.radius = t, this.phi = e, this.theta = n, this;
        }
        copy(t) {
            return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
        }
        makeSafe() {
            return this.phi = kt(this.phi, 1e-6, Math.PI - 1e-6), this;
        }
        setFromVector3(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z);
        }
        setFromCartesianCoords(t, e, n) {
            return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(kt(e / this.radius, -1, 1))), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    };
    jA = class extends yi {
        constructor(t, e = null){
            super(), this.object = t, this.domElement = e, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = {
                LEFT: null,
                MIDDLE: null,
                RIGHT: null
            }, this.touches = {
                ONE: null,
                TWO: null
            };
        }
        connect() {}
        disconnect() {}
        dispose() {}
        update() {}
    };
    function il(i, t, e, n) {
        const r = Gf(n);
        switch(e){
            case vh:
                return i * t;
            case xh:
                return i * t;
            case Sh:
                return i * t * 2;
            case Oo:
                return i * t / r.components * r.byteLength;
            case Bo:
                return i * t / r.components * r.byteLength;
            case Mh:
                return i * t * 2 / r.components * r.byteLength;
            case zo:
                return i * t * 2 / r.components * r.byteLength;
            case yh:
                return i * t * 3 / r.components * r.byteLength;
            case nn:
                return i * t * 4 / r.components * r.byteLength;
            case Ho:
                return i * t * 4 / r.components * r.byteLength;
            case ls:
            case hs:
                return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
            case ds:
            case us:
                return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
            case Ja:
            case Qa:
                return Math.max(i, 16) * Math.max(t, 8) / 4;
            case Za:
            case $a:
                return Math.max(i, 8) * Math.max(t, 8) / 2;
            case to:
            case eo:
                return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
            case no:
                return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
            case io:
                return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
            case ro:
                return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
            case so:
                return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
            case ao:
                return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
            case oo:
                return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
            case co:
                return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
            case lo:
                return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
            case ho:
                return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
            case uo:
                return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
            case fo:
                return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
            case _o:
                return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
            case po:
                return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
            case mo:
                return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
            case go:
                return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
            case fs:
            case wo:
            case bo:
                return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
            case Eh:
            case vo:
                return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
            case yo:
            case xo:
                return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
        }
        throw new Error(`Unable to determine texture byte length for ${e} format.`);
    }
    function Gf(i) {
        switch(i){
            case Nn:
            case gh:
                return {
                    byteLength: 1,
                    components: 1
                };
            case wr:
            case wh:
            case Mr:
                return {
                    byteLength: 2,
                    components: 1
                };
            case No:
            case Fo:
                return {
                    byteLength: 2,
                    components: 4
                };
            case mi:
            case Uo:
            case _n:
                return {
                    byteLength: 4,
                    components: 1
                };
            case bh:
                return {
                    byteLength: 4,
                    components: 3
                };
        }
        throw new Error(`Unknown texture type ${i}.`);
    }
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: Lo
        }
    }));
    typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Lo);
    function Kh() {
        let i = null, t = !1, e = null, n = null;
        function r(s, a) {
            e(s, a), n = i.requestAnimationFrame(r);
        }
        return {
            start: function() {
                t !== !0 && e !== null && (n = i.requestAnimationFrame(r), t = !0);
            },
            stop: function() {
                i.cancelAnimationFrame(n), t = !1;
            },
            setAnimationLoop: function(s) {
                e = s;
            },
            setContext: function(s) {
                i = s;
            }
        };
    }
    function Wf(i) {
        const t = new WeakMap;
        function e(o, c) {
            const l = o.array, h = o.usage, u = l.byteLength, f = i.createBuffer();
            i.bindBuffer(c, f), i.bufferData(c, l, h), o.onUploadCallback();
            let m;
            if (l instanceof Float32Array) m = i.FLOAT;
            else if (l instanceof Uint16Array) o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
            else if (l instanceof Int16Array) m = i.SHORT;
            else if (l instanceof Uint32Array) m = i.UNSIGNED_INT;
            else if (l instanceof Int32Array) m = i.INT;
            else if (l instanceof Int8Array) m = i.BYTE;
            else if (l instanceof Uint8Array) m = i.UNSIGNED_BYTE;
            else if (l instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
            else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
            return {
                buffer: f,
                type: m,
                bytesPerElement: l.BYTES_PER_ELEMENT,
                version: o.version,
                size: u
            };
        }
        function n(o, c, l) {
            const h = c.array, u = c.updateRanges;
            if (i.bindBuffer(l, o), u.length === 0) i.bufferSubData(l, 0, h);
            else {
                u.sort((m, w)=>m.start - w.start);
                let f = 0;
                for(let m = 1; m < u.length; m++){
                    const w = u[f], b = u[m];
                    b.start <= w.start + w.count + 1 ? w.count = Math.max(w.count, b.start + b.count - w.start) : (++f, u[f] = b);
                }
                u.length = f + 1;
                for(let m = 0, w = u.length; m < w; m++){
                    const b = u[m];
                    i.bufferSubData(l, b.start * h.BYTES_PER_ELEMENT, h, b.start, b.count);
                }
                c.clearUpdateRanges();
            }
            c.onUploadCallback();
        }
        function r(o) {
            return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
        }
        function s(o) {
            o.isInterleavedBufferAttribute && (o = o.data);
            const c = t.get(o);
            c && (i.deleteBuffer(c.buffer), t.delete(o));
        }
        function a(o, c) {
            if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
                const h = t.get(o);
                (!h || h.version < o.version) && t.set(o, {
                    buffer: o.buffer,
                    type: o.type,
                    bytesPerElement: o.elementSize,
                    version: o.version
                });
                return;
            }
            const l = t.get(o);
            if (l === void 0) t.set(o, e(o, c));
            else if (l.version < o.version) {
                if (l.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
                n(l.buffer, o, c), l.version = o.version;
            }
        }
        return {
            get: r,
            remove: s,
            update: a
        };
    }
    var jf = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Xf = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, qf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Yf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Kf = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Zf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Jf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, $f = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Qf = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, t_ = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, e_ = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, n_ = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, i_ = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, r_ = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, s_ = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, a_ = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, o_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, c_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, l_ = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, h_ = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, d_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, u_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, f_ = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, __ = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, p_ = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, m_ = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, g_ = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, w_ = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, b_ = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, v_ = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, y_ = "gl_FragColor = linearToOutputTexel( gl_FragColor );", x_ = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, S_ = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, M_ = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, E_ = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, T_ = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, R_ = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, A_ = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, C_ = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, P_ = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, I_ = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, D_ = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, L_ = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, U_ = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, N_ = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, F_ = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, O_ = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, B_ = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, z_ = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, H_ = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, k_ = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, V_ = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, G_ = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, W_ = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, j_ = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, X_ = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, q_ = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Y_ = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, K_ = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Z_ = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, J_ = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, $_ = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Q_ = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, tp = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, ep = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, np = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, ip = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, rp = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, sp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, ap = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, op = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, cp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, lp = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, hp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, dp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, up = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, fp = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, _p = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, pp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, mp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, gp = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, wp = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, bp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, vp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, yp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, xp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Sp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Mp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Ep = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Tp = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Rp = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Ap = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Cp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Pp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ip = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Dp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Lp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Up = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Np = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Fp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Op = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Bp = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, zp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Hp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, kp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Vp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Gp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
    const Wp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, jp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Xp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, qp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Yp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Kp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Zp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Jp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, $p = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Qp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, tm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, em = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, nm = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, im = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, rm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, sm = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, am = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, om = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, cm = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, lm = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, hm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, dm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, um = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, _m = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, pm = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, mm = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, gm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wm = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, bm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, vm = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ym = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, xm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Sm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Bt = {
        alphahash_fragment: jf,
        alphahash_pars_fragment: Xf,
        alphamap_fragment: qf,
        alphamap_pars_fragment: Yf,
        alphatest_fragment: Kf,
        alphatest_pars_fragment: Zf,
        aomap_fragment: Jf,
        aomap_pars_fragment: $f,
        batching_pars_vertex: Qf,
        batching_vertex: t_,
        begin_vertex: e_,
        beginnormal_vertex: n_,
        bsdfs: i_,
        iridescence_fragment: r_,
        bumpmap_pars_fragment: s_,
        clipping_planes_fragment: a_,
        clipping_planes_pars_fragment: o_,
        clipping_planes_pars_vertex: c_,
        clipping_planes_vertex: l_,
        color_fragment: h_,
        color_pars_fragment: d_,
        color_pars_vertex: u_,
        color_vertex: f_,
        common: __,
        cube_uv_reflection_fragment: p_,
        defaultnormal_vertex: m_,
        displacementmap_pars_vertex: g_,
        displacementmap_vertex: w_,
        emissivemap_fragment: b_,
        emissivemap_pars_fragment: v_,
        colorspace_fragment: y_,
        colorspace_pars_fragment: x_,
        envmap_fragment: S_,
        envmap_common_pars_fragment: M_,
        envmap_pars_fragment: E_,
        envmap_pars_vertex: T_,
        envmap_physical_pars_fragment: O_,
        envmap_vertex: R_,
        fog_vertex: A_,
        fog_pars_vertex: C_,
        fog_fragment: P_,
        fog_pars_fragment: I_,
        gradientmap_pars_fragment: D_,
        lightmap_pars_fragment: L_,
        lights_lambert_fragment: U_,
        lights_lambert_pars_fragment: N_,
        lights_pars_begin: F_,
        lights_toon_fragment: B_,
        lights_toon_pars_fragment: z_,
        lights_phong_fragment: H_,
        lights_phong_pars_fragment: k_,
        lights_physical_fragment: V_,
        lights_physical_pars_fragment: G_,
        lights_fragment_begin: W_,
        lights_fragment_maps: j_,
        lights_fragment_end: X_,
        logdepthbuf_fragment: q_,
        logdepthbuf_pars_fragment: Y_,
        logdepthbuf_pars_vertex: K_,
        logdepthbuf_vertex: Z_,
        map_fragment: J_,
        map_pars_fragment: $_,
        map_particle_fragment: Q_,
        map_particle_pars_fragment: tp,
        metalnessmap_fragment: ep,
        metalnessmap_pars_fragment: np,
        morphinstance_vertex: ip,
        morphcolor_vertex: rp,
        morphnormal_vertex: sp,
        morphtarget_pars_vertex: ap,
        morphtarget_vertex: op,
        normal_fragment_begin: cp,
        normal_fragment_maps: lp,
        normal_pars_fragment: hp,
        normal_pars_vertex: dp,
        normal_vertex: up,
        normalmap_pars_fragment: fp,
        clearcoat_normal_fragment_begin: _p,
        clearcoat_normal_fragment_maps: pp,
        clearcoat_pars_fragment: mp,
        iridescence_pars_fragment: gp,
        opaque_fragment: wp,
        packing: bp,
        premultiplied_alpha_fragment: vp,
        project_vertex: yp,
        dithering_fragment: xp,
        dithering_pars_fragment: Sp,
        roughnessmap_fragment: Mp,
        roughnessmap_pars_fragment: Ep,
        shadowmap_pars_fragment: Tp,
        shadowmap_pars_vertex: Rp,
        shadowmap_vertex: Ap,
        shadowmask_pars_fragment: Cp,
        skinbase_vertex: Pp,
        skinning_pars_vertex: Ip,
        skinning_vertex: Dp,
        skinnormal_vertex: Lp,
        specularmap_fragment: Up,
        specularmap_pars_fragment: Np,
        tonemapping_fragment: Fp,
        tonemapping_pars_fragment: Op,
        transmission_fragment: Bp,
        transmission_pars_fragment: zp,
        uv_pars_fragment: Hp,
        uv_pars_vertex: kp,
        uv_vertex: Vp,
        worldpos_vertex: Gp,
        background_vert: Wp,
        background_frag: jp,
        backgroundCube_vert: Xp,
        backgroundCube_frag: qp,
        cube_vert: Yp,
        cube_frag: Kp,
        depth_vert: Zp,
        depth_frag: Jp,
        distanceRGBA_vert: $p,
        distanceRGBA_frag: Qp,
        equirect_vert: tm,
        equirect_frag: em,
        linedashed_vert: nm,
        linedashed_frag: im,
        meshbasic_vert: rm,
        meshbasic_frag: sm,
        meshlambert_vert: am,
        meshlambert_frag: om,
        meshmatcap_vert: cm,
        meshmatcap_frag: lm,
        meshnormal_vert: hm,
        meshnormal_frag: dm,
        meshphong_vert: um,
        meshphong_frag: fm,
        meshphysical_vert: _m,
        meshphysical_frag: pm,
        meshtoon_vert: mm,
        meshtoon_frag: gm,
        points_vert: wm,
        points_frag: bm,
        shadow_vert: vm,
        shadow_frag: ym,
        sprite_vert: xm,
        sprite_frag: Sm
    }, at = {
        common: {
            diffuse: {
                value: new Wt(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            mapTransform: {
                value: new Ft
            },
            alphaMap: {
                value: null
            },
            alphaMapTransform: {
                value: new Ft
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            },
            specularMapTransform: {
                value: new Ft
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            envMapRotation: {
                value: new Ft
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            },
            aoMapTransform: {
                value: new Ft
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            },
            lightMapTransform: {
                value: new Ft
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpMapTransform: {
                value: new Ft
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalMapTransform: {
                value: new Ft
            },
            normalScale: {
                value: new $t(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementMapTransform: {
                value: new Ft
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            },
            emissiveMapTransform: {
                value: new Ft
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            },
            metalnessMapTransform: {
                value: new Ft
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            },
            roughnessMapTransform: {
                value: new Ft
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new Wt(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowIntensity: 1,
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowIntensity: 1,
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotLightMap: {
                value: []
            },
            spotShadowMap: {
                value: []
            },
            spotLightMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowIntensity: 1,
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new Wt(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaMapTransform: {
                value: new Ft
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Ft
            }
        },
        sprite: {
            diffuse: {
                value: new Wt(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new $t(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            mapTransform: {
                value: new Ft
            },
            alphaMap: {
                value: null
            },
            alphaMapTransform: {
                value: new Ft
            },
            alphaTest: {
                value: 0
            }
        }
    }, wn = {
        basic: {
            uniforms: ke([
                at.common,
                at.specularmap,
                at.envmap,
                at.aomap,
                at.lightmap,
                at.fog
            ]),
            vertexShader: Bt.meshbasic_vert,
            fragmentShader: Bt.meshbasic_frag
        },
        lambert: {
            uniforms: ke([
                at.common,
                at.specularmap,
                at.envmap,
                at.aomap,
                at.lightmap,
                at.emissivemap,
                at.bumpmap,
                at.normalmap,
                at.displacementmap,
                at.fog,
                at.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    }
                }
            ]),
            vertexShader: Bt.meshlambert_vert,
            fragmentShader: Bt.meshlambert_frag
        },
        phong: {
            uniforms: ke([
                at.common,
                at.specularmap,
                at.envmap,
                at.aomap,
                at.lightmap,
                at.emissivemap,
                at.bumpmap,
                at.normalmap,
                at.displacementmap,
                at.fog,
                at.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    },
                    specular: {
                        value: new Wt(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }
            ]),
            vertexShader: Bt.meshphong_vert,
            fragmentShader: Bt.meshphong_frag
        },
        standard: {
            uniforms: ke([
                at.common,
                at.envmap,
                at.aomap,
                at.lightmap,
                at.emissivemap,
                at.bumpmap,
                at.normalmap,
                at.displacementmap,
                at.roughnessmap,
                at.metalnessmap,
                at.fog,
                at.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Bt.meshphysical_vert,
            fragmentShader: Bt.meshphysical_frag
        },
        toon: {
            uniforms: ke([
                at.common,
                at.aomap,
                at.lightmap,
                at.emissivemap,
                at.bumpmap,
                at.normalmap,
                at.displacementmap,
                at.gradientmap,
                at.fog,
                at.lights,
                {
                    emissive: {
                        value: new Wt(0)
                    }
                }
            ]),
            vertexShader: Bt.meshtoon_vert,
            fragmentShader: Bt.meshtoon_frag
        },
        matcap: {
            uniforms: ke([
                at.common,
                at.bumpmap,
                at.normalmap,
                at.displacementmap,
                at.fog,
                {
                    matcap: {
                        value: null
                    }
                }
            ]),
            vertexShader: Bt.meshmatcap_vert,
            fragmentShader: Bt.meshmatcap_frag
        },
        points: {
            uniforms: ke([
                at.points,
                at.fog
            ]),
            vertexShader: Bt.points_vert,
            fragmentShader: Bt.points_frag
        },
        dashed: {
            uniforms: ke([
                at.common,
                at.fog,
                {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }
            ]),
            vertexShader: Bt.linedashed_vert,
            fragmentShader: Bt.linedashed_frag
        },
        depth: {
            uniforms: ke([
                at.common,
                at.displacementmap
            ]),
            vertexShader: Bt.depth_vert,
            fragmentShader: Bt.depth_frag
        },
        normal: {
            uniforms: ke([
                at.common,
                at.bumpmap,
                at.normalmap,
                at.displacementmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Bt.meshnormal_vert,
            fragmentShader: Bt.meshnormal_frag
        },
        sprite: {
            uniforms: ke([
                at.sprite,
                at.fog
            ]),
            vertexShader: Bt.sprite_vert,
            fragmentShader: Bt.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Ft
                },
                t2D: {
                    value: null
                },
                backgroundIntensity: {
                    value: 1
                }
            },
            vertexShader: Bt.background_vert,
            fragmentShader: Bt.background_frag
        },
        backgroundCube: {
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                backgroundBlurriness: {
                    value: 0
                },
                backgroundIntensity: {
                    value: 1
                },
                backgroundRotation: {
                    value: new Ft
                }
            },
            vertexShader: Bt.backgroundCube_vert,
            fragmentShader: Bt.backgroundCube_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: Bt.cube_vert,
            fragmentShader: Bt.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Bt.equirect_vert,
            fragmentShader: Bt.equirect_frag
        },
        distanceRGBA: {
            uniforms: ke([
                at.common,
                at.displacementmap,
                {
                    referencePosition: {
                        value: new H
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }
            ]),
            vertexShader: Bt.distanceRGBA_vert,
            fragmentShader: Bt.distanceRGBA_frag
        },
        shadow: {
            uniforms: ke([
                at.lights,
                at.fog,
                {
                    color: {
                        value: new Wt(0)
                    },
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: Bt.shadow_vert,
            fragmentShader: Bt.shadow_frag
        }
    };
    wn.physical = {
        uniforms: ke([
            wn.standard.uniforms,
            {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatMapTransform: {
                    value: new Ft
                },
                clearcoatNormalMap: {
                    value: null
                },
                clearcoatNormalMapTransform: {
                    value: new Ft
                },
                clearcoatNormalScale: {
                    value: new $t(1, 1)
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatRoughnessMapTransform: {
                    value: new Ft
                },
                dispersion: {
                    value: 0
                },
                iridescence: {
                    value: 0
                },
                iridescenceMap: {
                    value: null
                },
                iridescenceMapTransform: {
                    value: new Ft
                },
                iridescenceIOR: {
                    value: 1.3
                },
                iridescenceThicknessMinimum: {
                    value: 100
                },
                iridescenceThicknessMaximum: {
                    value: 400
                },
                iridescenceThicknessMap: {
                    value: null
                },
                iridescenceThicknessMapTransform: {
                    value: new Ft
                },
                sheen: {
                    value: 0
                },
                sheenColor: {
                    value: new Wt(0)
                },
                sheenColorMap: {
                    value: null
                },
                sheenColorMapTransform: {
                    value: new Ft
                },
                sheenRoughness: {
                    value: 1
                },
                sheenRoughnessMap: {
                    value: null
                },
                sheenRoughnessMapTransform: {
                    value: new Ft
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                },
                transmissionMapTransform: {
                    value: new Ft
                },
                transmissionSamplerSize: {
                    value: new $t
                },
                transmissionSamplerMap: {
                    value: null
                },
                thickness: {
                    value: 0
                },
                thicknessMap: {
                    value: null
                },
                thicknessMapTransform: {
                    value: new Ft
                },
                attenuationDistance: {
                    value: 0
                },
                attenuationColor: {
                    value: new Wt(0)
                },
                specularColor: {
                    value: new Wt(1, 1, 1)
                },
                specularColorMap: {
                    value: null
                },
                specularColorMapTransform: {
                    value: new Ft
                },
                specularIntensity: {
                    value: 1
                },
                specularIntensityMap: {
                    value: null
                },
                specularIntensityMapTransform: {
                    value: new Ft
                },
                anisotropyVector: {
                    value: new $t
                },
                anisotropyMap: {
                    value: null
                },
                anisotropyMapTransform: {
                    value: new Ft
                }
            }
        ]),
        vertexShader: Bt.meshphysical_vert,
        fragmentShader: Bt.meshphysical_frag
    };
    const ns = {
        r: 0,
        b: 0,
        g: 0
    }, ai = new vn, Mm = new Gt;
    function Em(i, t, e, n, r, s, a) {
        const o = new Wt(0);
        let c = s === !0 ? 0 : 1, l, h, u = null, f = 0, m = null;
        function w(E) {
            let S = E.isScene === !0 ? E.background : null;
            return S && S.isTexture && (S = (E.backgroundBlurriness > 0 ? e : t).get(S)), S;
        }
        function b(E) {
            let S = !1;
            const N = w(E);
            N === null ? _(o, c) : N && N.isColor && (_(N, 1), S = !0);
            const C = i.xr.getEnvironmentBlendMode();
            C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || S) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
        }
        function g(E, S) {
            const N = w(S);
            N && (N.isCubeTexture || N.mapping === As) ? (h === void 0 && (h = new rn(new Er(1, 1, 1), new Jn({
                name: "BackgroundCubeMaterial",
                uniforms: Qi(wn.backgroundCube.uniforms),
                vertexShader: wn.backgroundCube.vertexShader,
                fragmentShader: wn.backgroundCube.fragmentShader,
                side: We,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, I, B) {
                this.matrixWorld.copyPosition(B.matrixWorld);
            }, Object.defineProperty(h.material, "envMap", {
                get: function() {
                    return this.uniforms.envMap.value;
                }
            }), r.update(h)), ai.copy(S.backgroundRotation), ai.x *= -1, ai.y *= -1, ai.z *= -1, N.isCubeTexture && N.isRenderTargetTexture === !1 && (ai.y *= -1, ai.z *= -1), h.material.uniforms.envMap.value = N, h.material.uniforms.flipEnvMap.value = N.isCubeTexture && N.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(ai)), h.material.toneMapped = te.getTransfer(N.colorSpace) !== ce, (u !== N || f !== N.version || m !== i.toneMapping) && (h.material.needsUpdate = !0, u = N, f = N.version, m = i.toneMapping), h.layers.enableAll(), E.unshift(h, h.geometry, h.material, 0, 0, null)) : N && N.isTexture && (l === void 0 && (l = new rn(new Ps(2, 2), new Jn({
                name: "BackgroundMaterial",
                uniforms: Qi(wn.background.uniforms),
                vertexShader: wn.background.vertexShader,
                fragmentShader: wn.background.fragmentShader,
                side: Zn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
                get: function() {
                    return this.uniforms.t2D.value;
                }
            }), r.update(l)), l.material.uniforms.t2D.value = N, l.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, l.material.toneMapped = te.getTransfer(N.colorSpace) !== ce, N.matrixAutoUpdate === !0 && N.updateMatrix(), l.material.uniforms.uvTransform.value.copy(N.matrix), (u !== N || f !== N.version || m !== i.toneMapping) && (l.material.needsUpdate = !0, u = N, f = N.version, m = i.toneMapping), l.layers.enableAll(), E.unshift(l, l.geometry, l.material, 0, 0, null));
        }
        function _(E, S) {
            E.getRGB(ns, Fh(i)), n.buffers.color.setClear(ns.r, ns.g, ns.b, S, a);
        }
        function R() {
            h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
        }
        return {
            getClearColor: function() {
                return o;
            },
            setClearColor: function(E, S = 1) {
                o.set(E), c = S, _(o, c);
            },
            getClearAlpha: function() {
                return c;
            },
            setClearAlpha: function(E) {
                c = E, _(o, c);
            },
            render: b,
            addToRenderList: g,
            dispose: R
        };
    }
    function Tm(i, t) {
        const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = f(null);
        let s = r, a = !1;
        function o(x, D, j, W, Y) {
            let tt = !1;
            const K = u(W, j, D);
            s !== K && (s = K, l(s.object)), tt = m(x, W, j, Y), tt && w(x, W, j, Y), Y !== null && t.update(Y, i.ELEMENT_ARRAY_BUFFER), (tt || a) && (a = !1, S(x, D, j, W), Y !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer));
        }
        function c() {
            return i.createVertexArray();
        }
        function l(x) {
            return i.bindVertexArray(x);
        }
        function h(x) {
            return i.deleteVertexArray(x);
        }
        function u(x, D, j) {
            const W = j.wireframe === !0;
            let Y = n[x.id];
            Y === void 0 && (Y = {}, n[x.id] = Y);
            let tt = Y[D.id];
            tt === void 0 && (tt = {}, Y[D.id] = tt);
            let K = tt[W];
            return K === void 0 && (K = f(c()), tt[W] = K), K;
        }
        function f(x) {
            const D = [], j = [], W = [];
            for(let Y = 0; Y < e; Y++)D[Y] = 0, j[Y] = 0, W[Y] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: D,
                enabledAttributes: j,
                attributeDivisors: W,
                object: x,
                attributes: {},
                index: null
            };
        }
        function m(x, D, j, W) {
            const Y = s.attributes, tt = D.attributes;
            let K = 0;
            const rt = j.getAttributes();
            for(const q in rt)if (rt[q].location >= 0) {
                const pt = Y[q];
                let St = tt[q];
                if (St === void 0 && (q === "instanceMatrix" && x.instanceMatrix && (St = x.instanceMatrix), q === "instanceColor" && x.instanceColor && (St = x.instanceColor)), pt === void 0 || pt.attribute !== St || St && pt.data !== St.data) return !0;
                K++;
            }
            return s.attributesNum !== K || s.index !== W;
        }
        function w(x, D, j, W) {
            const Y = {}, tt = D.attributes;
            let K = 0;
            const rt = j.getAttributes();
            for(const q in rt)if (rt[q].location >= 0) {
                let pt = tt[q];
                pt === void 0 && (q === "instanceMatrix" && x.instanceMatrix && (pt = x.instanceMatrix), q === "instanceColor" && x.instanceColor && (pt = x.instanceColor));
                const St = {};
                St.attribute = pt, pt && pt.data && (St.data = pt.data), Y[q] = St, K++;
            }
            s.attributes = Y, s.attributesNum = K, s.index = W;
        }
        function b() {
            const x = s.newAttributes;
            for(let D = 0, j = x.length; D < j; D++)x[D] = 0;
        }
        function g(x) {
            _(x, 0);
        }
        function _(x, D) {
            const j = s.newAttributes, W = s.enabledAttributes, Y = s.attributeDivisors;
            j[x] = 1, W[x] === 0 && (i.enableVertexAttribArray(x), W[x] = 1), Y[x] !== D && (i.vertexAttribDivisor(x, D), Y[x] = D);
        }
        function R() {
            const x = s.newAttributes, D = s.enabledAttributes;
            for(let j = 0, W = D.length; j < W; j++)D[j] !== x[j] && (i.disableVertexAttribArray(j), D[j] = 0);
        }
        function E(x, D, j, W, Y, tt, K) {
            K === !0 ? i.vertexAttribIPointer(x, D, j, Y, tt) : i.vertexAttribPointer(x, D, j, W, Y, tt);
        }
        function S(x, D, j, W) {
            b();
            const Y = W.attributes, tt = j.getAttributes(), K = D.defaultAttributeValues;
            for(const rt in tt){
                const q = tt[rt];
                if (q.location >= 0) {
                    let lt = Y[rt];
                    if (lt === void 0 && (rt === "instanceMatrix" && x.instanceMatrix && (lt = x.instanceMatrix), rt === "instanceColor" && x.instanceColor && (lt = x.instanceColor)), lt !== void 0) {
                        const pt = lt.normalized, St = lt.itemSize, Vt = t.get(lt);
                        if (Vt === void 0) continue;
                        const he = Vt.buffer, J = Vt.type, st = Vt.bytesPerElement, vt = J === i.INT || J === i.UNSIGNED_INT || lt.gpuType === Uo;
                        if (lt.isInterleavedBufferAttribute) {
                            const ht = lt.data, Ct = ht.stride, ee = lt.offset;
                            if (ht.isInstancedInterleavedBuffer) {
                                for(let It = 0; It < q.locationSize; It++)_(q.location + It, ht.meshPerAttribute);
                                x.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = ht.meshPerAttribute * ht.count);
                            } else for(let It = 0; It < q.locationSize; It++)g(q.location + It);
                            i.bindBuffer(i.ARRAY_BUFFER, he);
                            for(let It = 0; It < q.locationSize; It++)E(q.location + It, St / q.locationSize, J, pt, Ct * st, (ee + St / q.locationSize * It) * st, vt);
                        } else {
                            if (lt.isInstancedBufferAttribute) {
                                for(let ht = 0; ht < q.locationSize; ht++)_(q.location + ht, lt.meshPerAttribute);
                                x.isInstancedMesh !== !0 && W._maxInstanceCount === void 0 && (W._maxInstanceCount = lt.meshPerAttribute * lt.count);
                            } else for(let ht = 0; ht < q.locationSize; ht++)g(q.location + ht);
                            i.bindBuffer(i.ARRAY_BUFFER, he);
                            for(let ht = 0; ht < q.locationSize; ht++)E(q.location + ht, St / q.locationSize, J, pt, St * st, St / q.locationSize * ht * st, vt);
                        }
                    } else if (K !== void 0) {
                        const pt = K[rt];
                        if (pt !== void 0) switch(pt.length){
                            case 2:
                                i.vertexAttrib2fv(q.location, pt);
                                break;
                            case 3:
                                i.vertexAttrib3fv(q.location, pt);
                                break;
                            case 4:
                                i.vertexAttrib4fv(q.location, pt);
                                break;
                            default:
                                i.vertexAttrib1fv(q.location, pt);
                        }
                    }
                }
            }
            R();
        }
        function N() {
            B();
            for(const x in n){
                const D = n[x];
                for(const j in D){
                    const W = D[j];
                    for(const Y in W)h(W[Y].object), delete W[Y];
                    delete D[j];
                }
                delete n[x];
            }
        }
        function C(x) {
            if (n[x.id] === void 0) return;
            const D = n[x.id];
            for(const j in D){
                const W = D[j];
                for(const Y in W)h(W[Y].object), delete W[Y];
                delete D[j];
            }
            delete n[x.id];
        }
        function I(x) {
            for(const D in n){
                const j = n[D];
                if (j[x.id] === void 0) continue;
                const W = j[x.id];
                for(const Y in W)h(W[Y].object), delete W[Y];
                delete j[x.id];
            }
        }
        function B() {
            M(), a = !0, s !== r && (s = r, l(s.object));
        }
        function M() {
            r.geometry = null, r.program = null, r.wireframe = !1;
        }
        return {
            setup: o,
            reset: B,
            resetDefaultState: M,
            dispose: N,
            releaseStatesOfGeometry: C,
            releaseStatesOfProgram: I,
            initAttributes: b,
            enableAttribute: g,
            disableUnusedAttributes: R
        };
    }
    function Rm(i, t, e) {
        let n;
        function r(l) {
            n = l;
        }
        function s(l, h) {
            i.drawArrays(n, l, h), e.update(h, n, 1);
        }
        function a(l, h, u) {
            u !== 0 && (i.drawArraysInstanced(n, l, h, u), e.update(h, n, u));
        }
        function o(l, h, u) {
            if (u === 0) return;
            t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, u);
            let m = 0;
            for(let w = 0; w < u; w++)m += h[w];
            e.update(m, n, 1);
        }
        function c(l, h, u, f) {
            if (u === 0) return;
            const m = t.get("WEBGL_multi_draw");
            if (m === null) for(let w = 0; w < l.length; w++)a(l[w], h[w], f[w]);
            else {
                m.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, f, 0, u);
                let w = 0;
                for(let b = 0; b < u; b++)w += h[b] * f[b];
                e.update(w, n, 1);
            }
        }
        this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
    }
    function Am(i, t, e, n) {
        let r;
        function s() {
            if (r !== void 0) return r;
            if (t.has("EXT_texture_filter_anisotropic") === !0) {
                const I = t.get("EXT_texture_filter_anisotropic");
                r = i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            } else r = 0;
            return r;
        }
        function a(I) {
            return !(I !== nn && n.convert(I) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
        }
        function o(I) {
            const B = I === Mr && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
            return !(I !== Nn && n.convert(I) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && I !== _n && !B);
        }
        function c(I) {
            if (I === "highp") {
                if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
                I = "mediump";
            }
            return I === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
        }
        let l = e.precision !== void 0 ? e.precision : "highp";
        const h = c(l);
        h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
        const u = e.logarithmicDepthBuffer === !0, f = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control"), m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), w = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), b = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), _ = i.getParameter(i.MAX_VERTEX_ATTRIBS), R = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), E = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), N = w > 0, C = i.getParameter(i.MAX_SAMPLES);
        return {
            isWebGL2: !0,
            getMaxAnisotropy: s,
            getMaxPrecision: c,
            textureFormatReadable: a,
            textureTypeReadable: o,
            precision: l,
            logarithmicDepthBuffer: u,
            reverseDepthBuffer: f,
            maxTextures: m,
            maxVertexTextures: w,
            maxTextureSize: b,
            maxCubemapSize: g,
            maxAttributes: _,
            maxVertexUniforms: R,
            maxVaryings: E,
            maxFragmentUniforms: S,
            vertexTextures: N,
            maxSamples: C
        };
    }
    function Cm(i) {
        const t = this;
        let e = null, n = 0, r = !1, s = !1;
        const a = new hi, o = new Ft, c = {
            value: null,
            needsUpdate: !1
        };
        this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
            const m = u.length !== 0 || f || n !== 0 || r;
            return r = f, n = u.length, m;
        }, this.beginShadows = function() {
            s = !0, h(null);
        }, this.endShadows = function() {
            s = !1;
        }, this.setGlobalState = function(u, f) {
            e = h(u, f, 0);
        }, this.setState = function(u, f, m) {
            const w = u.clippingPlanes, b = u.clipIntersection, g = u.clipShadows, _ = i.get(u);
            if (!r || w === null || w.length === 0 || s && !g) s ? h(null) : l();
            else {
                const R = s ? 0 : n, E = R * 4;
                let S = _.clippingState || null;
                c.value = S, S = h(w, f, E, m);
                for(let N = 0; N !== E; ++N)S[N] = e[N];
                _.clippingState = S, this.numIntersection = b ? this.numPlanes : 0, this.numPlanes += R;
            }
        };
        function l() {
            c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
        }
        function h(u, f, m, w) {
            const b = u !== null ? u.length : 0;
            let g = null;
            if (b !== 0) {
                if (g = c.value, w !== !0 || g === null) {
                    const _ = m + b * 4, R = f.matrixWorldInverse;
                    o.getNormalMatrix(R), (g === null || g.length < _) && (g = new Float32Array(_));
                    for(let E = 0, S = m; E !== b; ++E, S += 4)a.copy(u[E]).applyMatrix4(R, o), a.normal.toArray(g, S), g[S + 3] = a.constant;
                }
                c.value = g, c.needsUpdate = !0;
            }
            return t.numPlanes = b, t.numIntersection = 0, g;
        }
    }
    function Pm(i) {
        let t = new WeakMap;
        function e(a, o) {
            return o === Xa ? a.mapping = qi : o === qa && (a.mapping = Yi), a;
        }
        function n(a) {
            if (a && a.isTexture) {
                const o = a.mapping;
                if (o === Xa || o === qa) if (t.has(a)) {
                    const c = t.get(a).texture;
                    return e(c, a.mapping);
                } else {
                    const c = a.image;
                    if (c && c.height > 0) {
                        const l = new sf(c.height);
                        return l.fromEquirectangularTexture(i, a), t.set(a, l), a.addEventListener("dispose", r), e(l.texture, a.mapping);
                    } else return null;
                }
            }
            return a;
        }
        function r(a) {
            const o = a.target;
            o.removeEventListener("dispose", r);
            const c = t.get(o);
            c !== void 0 && (t.delete(o), c.dispose());
        }
        function s() {
            t = new WeakMap;
        }
        return {
            get: n,
            dispose: s
        };
    }
    const ki = 4, rl = [
        .125,
        .215,
        .35,
        .446,
        .526,
        .582
    ], fi = 20, ya = new Yh, sl = new Wt;
    let xa = null, Sa = 0, Ma = 0, Ea = !1;
    const di = (1 + Math.sqrt(5)) / 2, Bi = 1 / di, al = [
        new H(-di, Bi, 0),
        new H(di, Bi, 0),
        new H(-Bi, 0, di),
        new H(Bi, 0, di),
        new H(0, di, -Bi),
        new H(0, di, Bi),
        new H(-1, 1, -1),
        new H(1, 1, -1),
        new H(-1, 1, 1),
        new H(1, 1, 1)
    ], Im = new H;
    class ol {
        constructor(t){
            this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
        }
        fromScene(t, e = 0, n = .1, r = 100, s = {}) {
            const { size: a = 256, position: o = Im } = s;
            xa = this._renderer.getRenderTarget(), Sa = this._renderer.getActiveCubeFace(), Ma = this._renderer.getActiveMipmapLevel(), Ea = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
            const c = this._allocateTargets();
            return c.depthBuffer = !0, this._sceneToCubeUV(t, n, r, c, o), e > 0 && this._blur(c, 0, 0, e), this._applyPMREM(c), this._cleanup(c), c;
        }
        fromEquirectangular(t, e = null) {
            return this._fromTexture(t, e);
        }
        fromCubemap(t, e = null) {
            return this._fromTexture(t, e);
        }
        compileCubemapShader() {
            this._cubemapMaterial === null && (this._cubemapMaterial = hl(), this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
            this._equirectMaterial === null && (this._equirectMaterial = ll(), this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
            this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
        }
        _setSize(t) {
            this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
        }
        _dispose() {
            this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
            for(let t = 0; t < this._lodPlanes.length; t++)this._lodPlanes[t].dispose();
        }
        _cleanup(t) {
            this._renderer.setRenderTarget(xa, Sa, Ma), this._renderer.xr.enabled = Ea, t.scissorTest = !1, is(t, 0, 0, t.width, t.height);
        }
        _fromTexture(t, e) {
            t.mapping === qi || t.mapping === Yi ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), xa = this._renderer.getRenderTarget(), Sa = this._renderer.getActiveCubeFace(), Ma = this._renderer.getActiveMipmapLevel(), Ea = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
            const n = e || this._allocateTargets();
            return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
        }
        _allocateTargets() {
            const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
                magFilter: bn,
                minFilter: bn,
                generateMipmaps: !1,
                type: Mr,
                format: nn,
                colorSpace: Ji,
                depthBuffer: !1
            }, r = cl(t, e, n);
            if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
                this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = cl(t, e, n);
                const { _lodMax: s } = this;
                ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Dm(s)), this._blurMaterial = Lm(s, t, e);
            }
            return r;
        }
        _compileMaterial(t) {
            const e = new rn(this._lodPlanes[0], t);
            this._renderer.compile(e, ya);
        }
        _sceneToCubeUV(t, e, n, r, s) {
            const c = new Ke(90, 1, e, n), l = [
                1,
                -1,
                1,
                1,
                1,
                1
            ], h = [
                1,
                1,
                1,
                -1,
                -1,
                -1
            ], u = this._renderer, f = u.autoClear, m = u.toneMapping;
            u.getClearColor(sl), u.toneMapping = Kn, u.autoClear = !1;
            const w = new Lh({
                name: "PMREM.Background",
                side: We,
                depthWrite: !1,
                depthTest: !1
            }), b = new rn(new Er, w);
            let g = !1;
            const _ = t.background;
            _ ? _.isColor && (w.color.copy(_), t.background = null, g = !0) : (w.color.copy(sl), g = !0);
            for(let R = 0; R < 6; R++){
                const E = R % 3;
                E === 0 ? (c.up.set(0, l[R], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x + h[R], s.y, s.z)) : E === 1 ? (c.up.set(0, 0, l[R]), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y + h[R], s.z)) : (c.up.set(0, l[R], 0), c.position.set(s.x, s.y, s.z), c.lookAt(s.x, s.y, s.z + h[R]));
                const S = this._cubeSize;
                is(r, E * S, R > 2 ? S : 0, S, S), u.setRenderTarget(r), g && u.render(b, c), u.render(t, c);
            }
            b.geometry.dispose(), b.material.dispose(), u.toneMapping = m, u.autoClear = f, t.background = _;
        }
        _textureToCubeUV(t, e) {
            const n = this._renderer, r = t.mapping === qi || t.mapping === Yi;
            r ? (this._cubemapMaterial === null && (this._cubemapMaterial = hl()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ll());
            const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new rn(this._lodPlanes[0], s), o = s.uniforms;
            o.envMap.value = t;
            const c = this._cubeSize;
            is(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, ya);
        }
        _applyPMREM(t) {
            const e = this._renderer, n = e.autoClear;
            e.autoClear = !1;
            const r = this._lodPlanes.length;
            for(let s = 1; s < r; s++){
                const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = al[(r - s - 1) % al.length];
                this._blur(t, s - 1, s, a, o);
            }
            e.autoClear = n;
        }
        _blur(t, e, n, r, s) {
            const a = this._pingPongRenderTarget;
            this._halfBlur(t, a, e, n, r, "latitudinal", s), this._halfBlur(a, t, n, n, r, "longitudinal", s);
        }
        _halfBlur(t, e, n, r, s, a, o) {
            const c = this._renderer, l = this._blurMaterial;
            a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
            const h = 3, u = new rn(this._lodPlanes[r], l), f = l.uniforms, m = this._sizeLods[n] - 1, w = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * fi - 1), b = s / w, g = isFinite(s) ? 1 + Math.floor(h * b) : fi;
            g > fi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fi}`);
            const _ = [];
            let R = 0;
            for(let I = 0; I < fi; ++I){
                const B = I / b, M = Math.exp(-B * B / 2);
                _.push(M), I === 0 ? R += M : I < g && (R += 2 * M);
            }
            for(let I = 0; I < _.length; I++)_[I] = _[I] / R;
            f.envMap.value = t.texture, f.samples.value = g, f.weights.value = _, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
            const { _lodMax: E } = this;
            f.dTheta.value = w, f.mipInt.value = E - n;
            const S = this._sizeLods[r], N = 3 * S * (r > E - ki ? r - E + ki : 0), C = 4 * (this._cubeSize - S);
            is(e, N, C, 3 * S, 2 * S), c.setRenderTarget(e), c.render(u, ya);
        }
    }
    function Dm(i) {
        const t = [], e = [], n = [];
        let r = i;
        const s = i - ki + 1 + rl.length;
        for(let a = 0; a < s; a++){
            const o = Math.pow(2, r);
            e.push(o);
            let c = 1 / o;
            a > i - ki ? c = rl[a - i + ki - 1] : a === 0 && (c = 0), n.push(c);
            const l = 1 / (o - 2), h = -l, u = 1 + l, f = [
                h,
                h,
                u,
                h,
                u,
                u,
                h,
                h,
                u,
                u,
                h,
                u
            ], m = 6, w = 6, b = 3, g = 2, _ = 1, R = new Float32Array(b * w * m), E = new Float32Array(g * w * m), S = new Float32Array(_ * w * m);
            for(let C = 0; C < m; C++){
                const I = C % 3 * 2 / 3 - 1, B = C > 2 ? 0 : -1, M = [
                    I,
                    B,
                    0,
                    I + 2 / 3,
                    B,
                    0,
                    I + 2 / 3,
                    B + 1,
                    0,
                    I,
                    B,
                    0,
                    I + 2 / 3,
                    B + 1,
                    0,
                    I,
                    B + 1,
                    0
                ];
                R.set(M, b * w * C), E.set(f, g * w * C);
                const x = [
                    C,
                    C,
                    C,
                    C,
                    C,
                    C
                ];
                S.set(x, _ * w * C);
            }
            const N = new mn;
            N.setAttribute("position", new sn(R, b)), N.setAttribute("uv", new sn(E, g)), N.setAttribute("faceIndex", new sn(S, _)), t.push(N), r > ki && r--;
        }
        return {
            lodPlanes: t,
            sizeLods: e,
            sigmas: n
        };
    }
    function cl(i, t, e) {
        const n = new gi(i, t, e);
        return n.texture.mapping = As, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
    }
    function is(i, t, e, n, r) {
        i.viewport.set(t, e, n, r), i.scissor.set(t, e, n, r);
    }
    function Lm(i, t, e) {
        const n = new Float32Array(fi), r = new H(0, 1, 0);
        return new Jn({
            name: "SphericalGaussianBlur",
            defines: {
                n: fi,
                CUBEUV_TEXEL_WIDTH: 1 / t,
                CUBEUV_TEXEL_HEIGHT: 1 / e,
                CUBEUV_MAX_MIP: `${i}.0`
            },
            uniforms: {
                envMap: {
                    value: null
                },
                samples: {
                    value: 1
                },
                weights: {
                    value: n
                },
                latitudinal: {
                    value: !1
                },
                dTheta: {
                    value: 0
                },
                mipInt: {
                    value: 0
                },
                poleAxis: {
                    value: r
                }
            },
            vertexShader: qo(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
            blending: Yn,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function ll() {
        return new Jn({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: qo(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
            blending: Yn,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function hl() {
        return new Jn({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: qo(),
            fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
            blending: Yn,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function qo() {
        return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
    }
    function Um(i) {
        let t = new WeakMap, e = null;
        function n(o) {
            if (o && o.isTexture) {
                const c = o.mapping, l = c === Xa || c === qa, h = c === qi || c === Yi;
                if (l || h) {
                    let u = t.get(o);
                    const f = u !== void 0 ? u.texture.pmremVersion : 0;
                    if (o.isRenderTargetTexture && o.pmremVersion !== f) return e === null && (e = new ol(i)), u = l ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), u.texture;
                    if (u !== void 0) return u.texture;
                    {
                        const m = o.image;
                        return l && m && m.height > 0 || h && m && r(m) ? (e === null && (e = new ol(i)), u = l ? e.fromEquirectangular(o) : e.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), o.addEventListener("dispose", s), u.texture) : null;
                    }
                }
            }
            return o;
        }
        function r(o) {
            let c = 0;
            const l = 6;
            for(let h = 0; h < l; h++)o[h] !== void 0 && c++;
            return c === l;
        }
        function s(o) {
            const c = o.target;
            c.removeEventListener("dispose", s);
            const l = t.get(c);
            l !== void 0 && (t.delete(c), l.dispose());
        }
        function a() {
            t = new WeakMap, e !== null && (e.dispose(), e = null);
        }
        return {
            get: n,
            dispose: a
        };
    }
    function Nm(i) {
        const t = {};
        function e(n) {
            if (t[n] !== void 0) return t[n];
            let r;
            switch(n){
                case "WEBGL_depth_texture":
                    r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    r = i.getExtension(n);
            }
            return t[n] = r, r;
        }
        return {
            has: function(n) {
                return e(n) !== null;
            },
            init: function() {
                e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
            },
            get: function(n) {
                const r = e(n);
                return r === null && li("THREE.WebGLRenderer: " + n + " extension not supported."), r;
            }
        };
    }
    function Fm(i, t, e, n) {
        const r = {}, s = new WeakMap;
        function a(u) {
            const f = u.target;
            f.index !== null && t.remove(f.index);
            for(const w in f.attributes)t.remove(f.attributes[w]);
            f.removeEventListener("dispose", a), delete r[f.id];
            const m = s.get(f);
            m && (t.remove(m), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, e.memory.geometries--;
        }
        function o(u, f) {
            return r[f.id] === !0 || (f.addEventListener("dispose", a), r[f.id] = !0, e.memory.geometries++), f;
        }
        function c(u) {
            const f = u.attributes;
            for(const m in f)t.update(f[m], i.ARRAY_BUFFER);
        }
        function l(u) {
            const f = [], m = u.index, w = u.attributes.position;
            let b = 0;
            if (m !== null) {
                const R = m.array;
                b = m.version;
                for(let E = 0, S = R.length; E < S; E += 3){
                    const N = R[E + 0], C = R[E + 1], I = R[E + 2];
                    f.push(N, C, C, I, I, N);
                }
            } else if (w !== void 0) {
                const R = w.array;
                b = w.version;
                for(let E = 0, S = R.length / 3 - 1; E < S; E += 3){
                    const N = E + 0, C = E + 1, I = E + 2;
                    f.push(N, C, C, I, I, N);
                }
            } else return;
            const g = new (Ah(f) ? Nh : Uh)(f, 1);
            g.version = b;
            const _ = s.get(u);
            _ && t.remove(_), s.set(u, g);
        }
        function h(u) {
            const f = s.get(u);
            if (f) {
                const m = u.index;
                m !== null && f.version < m.version && l(u);
            } else l(u);
            return s.get(u);
        }
        return {
            get: o,
            update: c,
            getWireframeAttribute: h
        };
    }
    function Om(i, t, e) {
        let n;
        function r(f) {
            n = f;
        }
        let s, a;
        function o(f) {
            s = f.type, a = f.bytesPerElement;
        }
        function c(f, m) {
            i.drawElements(n, m, s, f * a), e.update(m, n, 1);
        }
        function l(f, m, w) {
            w !== 0 && (i.drawElementsInstanced(n, m, s, f * a, w), e.update(m, n, w));
        }
        function h(f, m, w) {
            if (w === 0) return;
            t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, f, 0, w);
            let g = 0;
            for(let _ = 0; _ < w; _++)g += m[_];
            e.update(g, n, 1);
        }
        function u(f, m, w, b) {
            if (w === 0) return;
            const g = t.get("WEBGL_multi_draw");
            if (g === null) for(let _ = 0; _ < f.length; _++)l(f[_] / a, m[_], b[_]);
            else {
                g.multiDrawElementsInstancedWEBGL(n, m, 0, s, f, 0, b, 0, w);
                let _ = 0;
                for(let R = 0; R < w; R++)_ += m[R] * b[R];
                e.update(_, n, 1);
            }
        }
        this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
    }
    function Bm(i) {
        const t = {
            geometries: 0,
            textures: 0
        }, e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        function n(s, a, o) {
            switch(e.calls++, a){
                case i.TRIANGLES:
                    e.triangles += o * (s / 3);
                    break;
                case i.LINES:
                    e.lines += o * (s / 2);
                    break;
                case i.LINE_STRIP:
                    e.lines += o * (s - 1);
                    break;
                case i.LINE_LOOP:
                    e.lines += o * s;
                    break;
                case i.POINTS:
                    e.points += o * s;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", a);
                    break;
            }
        }
        function r() {
            e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
        }
        return {
            memory: t,
            render: e,
            programs: null,
            autoReset: !0,
            reset: r,
            update: n
        };
    }
    function zm(i, t, e) {
        const n = new WeakMap, r = new ne;
        function s(a, o, c) {
            const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
            let f = n.get(o);
            if (f === void 0 || f.count !== u) {
                let M = function() {
                    I.dispose(), n.delete(o), o.removeEventListener("dispose", M);
                };
                f !== void 0 && f.texture.dispose();
                const m = o.morphAttributes.position !== void 0, w = o.morphAttributes.normal !== void 0, b = o.morphAttributes.color !== void 0, g = o.morphAttributes.position || [], _ = o.morphAttributes.normal || [], R = o.morphAttributes.color || [];
                let E = 0;
                m === !0 && (E = 1), w === !0 && (E = 2), b === !0 && (E = 3);
                let S = o.attributes.position.count * E, N = 1;
                S > t.maxTextureSize && (N = Math.ceil(S / t.maxTextureSize), S = t.maxTextureSize);
                const C = new Float32Array(S * N * 4 * u), I = new Ch(C, S, N, u);
                I.type = _n, I.needsUpdate = !0;
                const B = E * 4;
                for(let x = 0; x < u; x++){
                    const D = g[x], j = _[x], W = R[x], Y = S * N * 4 * x;
                    for(let tt = 0; tt < D.count; tt++){
                        const K = tt * B;
                        m === !0 && (r.fromBufferAttribute(D, tt), C[Y + K + 0] = r.x, C[Y + K + 1] = r.y, C[Y + K + 2] = r.z, C[Y + K + 3] = 0), w === !0 && (r.fromBufferAttribute(j, tt), C[Y + K + 4] = r.x, C[Y + K + 5] = r.y, C[Y + K + 6] = r.z, C[Y + K + 7] = 0), b === !0 && (r.fromBufferAttribute(W, tt), C[Y + K + 8] = r.x, C[Y + K + 9] = r.y, C[Y + K + 10] = r.z, C[Y + K + 11] = W.itemSize === 4 ? r.w : 1);
                    }
                }
                f = {
                    count: u,
                    texture: I,
                    size: new $t(S, N)
                }, n.set(o, f), o.addEventListener("dispose", M);
            }
            if (a.isInstancedMesh === !0 && a.morphTexture !== null) c.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
            else {
                let m = 0;
                for(let b = 0; b < l.length; b++)m += l[b];
                const w = o.morphTargetsRelative ? 1 : 1 - m;
                c.getUniforms().setValue(i, "morphTargetBaseInfluence", w), c.getUniforms().setValue(i, "morphTargetInfluences", l);
            }
            c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
        }
        return {
            update: s
        };
    }
    function Hm(i, t, e, n) {
        let r = new WeakMap;
        function s(c) {
            const l = n.render.frame, h = c.geometry, u = t.get(c, h);
            if (r.get(u) !== l && (t.update(u), r.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), r.get(c) !== l && (e.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, i.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) {
                const f = c.skeleton;
                r.get(f) !== l && (f.update(), r.set(f, l));
            }
            return u;
        }
        function a() {
            r = new WeakMap;
        }
        function o(c) {
            const l = c.target;
            l.removeEventListener("dispose", o), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor);
        }
        return {
            update: s,
            dispose: a
        };
    }
    const Zh = new Be, dl = new Gh(1, 1), Jh = new Ch, $h = new ku, Qh = new Bh, ul = [], fl = [], _l = new Float32Array(16), pl = new Float32Array(9), ml = new Float32Array(4);
    function ir(i, t, e) {
        const n = i[0];
        if (n <= 0 || n > 0) return i;
        const r = t * e;
        let s = ul[r];
        if (s === void 0 && (s = new Float32Array(r), ul[r] = s), t !== 0) {
            n.toArray(s, 0);
            for(let a = 1, o = 0; a !== t; ++a)o += e, i[a].toArray(s, o);
        }
        return s;
    }
    function Re(i, t) {
        if (i.length !== t.length) return !1;
        for(let e = 0, n = i.length; e < n; e++)if (i[e] !== t[e]) return !1;
        return !0;
    }
    function Ae(i, t) {
        for(let e = 0, n = t.length; e < n; e++)i[e] = t[e];
    }
    function Us(i, t) {
        let e = fl[t];
        e === void 0 && (e = new Int32Array(t), fl[t] = e);
        for(let n = 0; n !== t; ++n)e[n] = i.allocateTextureUnit();
        return e;
    }
    function km(i, t) {
        const e = this.cache;
        e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
    }
    function Vm(i, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
        else {
            if (Re(e, t)) return;
            i.uniform2fv(this.addr, t), Ae(e, t);
        }
    }
    function Gm(i, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
        else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
        else {
            if (Re(e, t)) return;
            i.uniform3fv(this.addr, t), Ae(e, t);
        }
    }
    function Wm(i, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
        else {
            if (Re(e, t)) return;
            i.uniform4fv(this.addr, t), Ae(e, t);
        }
    }
    function jm(i, t) {
        const e = this.cache, n = t.elements;
        if (n === void 0) {
            if (Re(e, t)) return;
            i.uniformMatrix2fv(this.addr, !1, t), Ae(e, t);
        } else {
            if (Re(e, n)) return;
            ml.set(n), i.uniformMatrix2fv(this.addr, !1, ml), Ae(e, n);
        }
    }
    function Xm(i, t) {
        const e = this.cache, n = t.elements;
        if (n === void 0) {
            if (Re(e, t)) return;
            i.uniformMatrix3fv(this.addr, !1, t), Ae(e, t);
        } else {
            if (Re(e, n)) return;
            pl.set(n), i.uniformMatrix3fv(this.addr, !1, pl), Ae(e, n);
        }
    }
    function qm(i, t) {
        const e = this.cache, n = t.elements;
        if (n === void 0) {
            if (Re(e, t)) return;
            i.uniformMatrix4fv(this.addr, !1, t), Ae(e, t);
        } else {
            if (Re(e, n)) return;
            _l.set(n), i.uniformMatrix4fv(this.addr, !1, _l), Ae(e, n);
        }
    }
    function Ym(i, t) {
        const e = this.cache;
        e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
    }
    function Km(i, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
        else {
            if (Re(e, t)) return;
            i.uniform2iv(this.addr, t), Ae(e, t);
        }
    }
    function Zm(i, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
        else {
            if (Re(e, t)) return;
            i.uniform3iv(this.addr, t), Ae(e, t);
        }
    }
    function Jm(i, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
        else {
            if (Re(e, t)) return;
            i.uniform4iv(this.addr, t), Ae(e, t);
        }
    }
    function $m(i, t) {
        const e = this.cache;
        e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
    }
    function Qm(i, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
        else {
            if (Re(e, t)) return;
            i.uniform2uiv(this.addr, t), Ae(e, t);
        }
    }
    function tg(i, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
        else {
            if (Re(e, t)) return;
            i.uniform3uiv(this.addr, t), Ae(e, t);
        }
    }
    function eg(i, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
        else {
            if (Re(e, t)) return;
            i.uniform4uiv(this.addr, t), Ae(e, t);
        }
    }
    function ng(i, t, e) {
        const n = this.cache, r = e.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
        let s;
        this.type === i.SAMPLER_2D_SHADOW ? (dl.compareFunction = Rh, s = dl) : s = Zh, e.setTexture2D(t || s, r);
    }
    function ig(i, t, e) {
        const n = this.cache, r = e.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture3D(t || $h, r);
    }
    function rg(i, t, e) {
        const n = this.cache, r = e.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTextureCube(t || Qh, r);
    }
    function sg(i, t, e) {
        const n = this.cache, r = e.allocateTextureUnit();
        n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), e.setTexture2DArray(t || Jh, r);
    }
    function ag(i) {
        switch(i){
            case 5126:
                return km;
            case 35664:
                return Vm;
            case 35665:
                return Gm;
            case 35666:
                return Wm;
            case 35674:
                return jm;
            case 35675:
                return Xm;
            case 35676:
                return qm;
            case 5124:
            case 35670:
                return Ym;
            case 35667:
            case 35671:
                return Km;
            case 35668:
            case 35672:
                return Zm;
            case 35669:
            case 35673:
                return Jm;
            case 5125:
                return $m;
            case 36294:
                return Qm;
            case 36295:
                return tg;
            case 36296:
                return eg;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return ng;
            case 35679:
            case 36299:
            case 36307:
                return ig;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return rg;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return sg;
        }
    }
    function og(i, t) {
        i.uniform1fv(this.addr, t);
    }
    function cg(i, t) {
        const e = ir(t, this.size, 2);
        i.uniform2fv(this.addr, e);
    }
    function lg(i, t) {
        const e = ir(t, this.size, 3);
        i.uniform3fv(this.addr, e);
    }
    function hg(i, t) {
        const e = ir(t, this.size, 4);
        i.uniform4fv(this.addr, e);
    }
    function dg(i, t) {
        const e = ir(t, this.size, 4);
        i.uniformMatrix2fv(this.addr, !1, e);
    }
    function ug(i, t) {
        const e = ir(t, this.size, 9);
        i.uniformMatrix3fv(this.addr, !1, e);
    }
    function fg(i, t) {
        const e = ir(t, this.size, 16);
        i.uniformMatrix4fv(this.addr, !1, e);
    }
    function _g(i, t) {
        i.uniform1iv(this.addr, t);
    }
    function pg(i, t) {
        i.uniform2iv(this.addr, t);
    }
    function mg(i, t) {
        i.uniform3iv(this.addr, t);
    }
    function gg(i, t) {
        i.uniform4iv(this.addr, t);
    }
    function wg(i, t) {
        i.uniform1uiv(this.addr, t);
    }
    function bg(i, t) {
        i.uniform2uiv(this.addr, t);
    }
    function vg(i, t) {
        i.uniform3uiv(this.addr, t);
    }
    function yg(i, t) {
        i.uniform4uiv(this.addr, t);
    }
    function xg(i, t, e) {
        const n = this.cache, r = t.length, s = Us(e, r);
        Re(n, s) || (i.uniform1iv(this.addr, s), Ae(n, s));
        for(let a = 0; a !== r; ++a)e.setTexture2D(t[a] || Zh, s[a]);
    }
    function Sg(i, t, e) {
        const n = this.cache, r = t.length, s = Us(e, r);
        Re(n, s) || (i.uniform1iv(this.addr, s), Ae(n, s));
        for(let a = 0; a !== r; ++a)e.setTexture3D(t[a] || $h, s[a]);
    }
    function Mg(i, t, e) {
        const n = this.cache, r = t.length, s = Us(e, r);
        Re(n, s) || (i.uniform1iv(this.addr, s), Ae(n, s));
        for(let a = 0; a !== r; ++a)e.setTextureCube(t[a] || Qh, s[a]);
    }
    function Eg(i, t, e) {
        const n = this.cache, r = t.length, s = Us(e, r);
        Re(n, s) || (i.uniform1iv(this.addr, s), Ae(n, s));
        for(let a = 0; a !== r; ++a)e.setTexture2DArray(t[a] || Jh, s[a]);
    }
    function Tg(i) {
        switch(i){
            case 5126:
                return og;
            case 35664:
                return cg;
            case 35665:
                return lg;
            case 35666:
                return hg;
            case 35674:
                return dg;
            case 35675:
                return ug;
            case 35676:
                return fg;
            case 5124:
            case 35670:
                return _g;
            case 35667:
            case 35671:
                return pg;
            case 35668:
            case 35672:
                return mg;
            case 35669:
            case 35673:
                return gg;
            case 5125:
                return wg;
            case 36294:
                return bg;
            case 36295:
                return vg;
            case 36296:
                return yg;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return xg;
            case 35679:
            case 36299:
            case 36307:
                return Sg;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return Mg;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return Eg;
        }
    }
    class Rg {
        constructor(t, e, n){
            this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = ag(e.type);
        }
    }
    class Ag {
        constructor(t, e, n){
            this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Tg(e.type);
        }
    }
    class Cg {
        constructor(t){
            this.id = t, this.seq = [], this.map = {};
        }
        setValue(t, e, n) {
            const r = this.seq;
            for(let s = 0, a = r.length; s !== a; ++s){
                const o = r[s];
                o.setValue(t, e[o.id], n);
            }
        }
    }
    const Ta = /(\w+)(\])?(\[|\.)?/g;
    function gl(i, t) {
        i.seq.push(t), i.map[t.id] = t;
    }
    function Pg(i, t, e) {
        const n = i.name, r = n.length;
        for(Ta.lastIndex = 0;;){
            const s = Ta.exec(n), a = Ta.lastIndex;
            let o = s[1];
            const c = s[2] === "]", l = s[3];
            if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
                gl(e, l === void 0 ? new Rg(o, i, t) : new Ag(o, i, t));
                break;
            } else {
                let u = e.map[o];
                u === void 0 && (u = new Cg(o), gl(e, u)), e = u;
            }
        }
    }
    class _s {
        constructor(t, e){
            this.seq = [], this.map = {};
            const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
            for(let r = 0; r < n; ++r){
                const s = t.getActiveUniform(e, r), a = t.getUniformLocation(e, s.name);
                Pg(s, a, this);
            }
        }
        setValue(t, e, n, r) {
            const s = this.map[e];
            s !== void 0 && s.setValue(t, n, r);
        }
        setOptional(t, e, n) {
            const r = e[n];
            r !== void 0 && this.setValue(t, n, r);
        }
        static upload(t, e, n, r) {
            for(let s = 0, a = e.length; s !== a; ++s){
                const o = e[s], c = n[o.id];
                c.needsUpdate !== !1 && o.setValue(t, c.value, r);
            }
        }
        static seqWithValue(t, e) {
            const n = [];
            for(let r = 0, s = t.length; r !== s; ++r){
                const a = t[r];
                a.id in e && n.push(a);
            }
            return n;
        }
    }
    function wl(i, t, e) {
        const n = i.createShader(t);
        return i.shaderSource(n, e), i.compileShader(n), n;
    }
    const Ig = 37297;
    let Dg = 0;
    function Lg(i, t) {
        const e = i.split(`
`), n = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
        for(let a = r; a < s; a++){
            const o = a + 1;
            n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
        }
        return n.join(`
`);
    }
    const bl = new Ft;
    function Ug(i) {
        te._getMatrix(bl, te.workingColorSpace, i);
        const t = `mat3( ${bl.elements.map((e)=>e.toFixed(4))} )`;
        switch(te.getTransfer(i)){
            case gs:
                return [
                    t,
                    "LinearTransferOETF"
                ];
            case ce:
                return [
                    t,
                    "sRGBTransferOETF"
                ];
            default:
                return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [
                    t,
                    "LinearTransferOETF"
                ];
        }
    }
    function vl(i, t, e) {
        const n = i.getShaderParameter(t, i.COMPILE_STATUS), r = i.getShaderInfoLog(t).trim();
        if (n && r === "") return "";
        const s = /ERROR: 0:(\d+)/.exec(r);
        if (s) {
            const a = parseInt(s[1]);
            return e.toUpperCase() + `

` + r + `

` + Lg(i.getShaderSource(t), a);
        } else return r;
    }
    function Ng(i, t) {
        const e = Ug(t);
        return [
            `vec4 ${i}( vec4 value ) {`,
            `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
            "}"
        ].join(`
`);
    }
    function Fg(i, t) {
        let e;
        switch(t){
            case Zd:
                e = "Linear";
                break;
            case Jd:
                e = "Reinhard";
                break;
            case $d:
                e = "Cineon";
                break;
            case Qd:
                e = "ACESFilmic";
                break;
            case eu:
                e = "AgX";
                break;
            case nu:
                e = "Neutral";
                break;
            case tu:
                e = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
        }
        return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
    }
    const rs = new H;
    function Og() {
        te.getLuminanceCoefficients(rs);
        const i = rs.x.toFixed(4), t = rs.y.toFixed(4), e = rs.z.toFixed(4);
        return [
            "float luminance( const in vec3 rgb ) {",
            `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
            "	return dot( weights, rgb );",
            "}"
        ].join(`
`);
    }
    function Bg(i) {
        return [
            i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
            i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
        ].filter(_r).join(`
`);
    }
    function zg(i) {
        const t = [];
        for(const e in i){
            const n = i[e];
            n !== !1 && t.push("#define " + e + " " + n);
        }
        return t.join(`
`);
    }
    function Hg(i, t) {
        const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
        for(let r = 0; r < n; r++){
            const s = i.getActiveAttrib(t, r), a = s.name;
            let o = 1;
            s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), e[a] = {
                type: s.type,
                location: i.getAttribLocation(t, a),
                locationSize: o
            };
        }
        return e;
    }
    function _r(i) {
        return i !== "";
    }
    function yl(i, t) {
        const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
        return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
    }
    function xl(i, t) {
        return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
    }
    const kg = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function To(i) {
        return i.replace(kg, Gg);
    }
    const Vg = new Map;
    function Gg(i, t) {
        let e = Bt[t];
        if (e === void 0) {
            const n = Vg.get(t);
            if (n !== void 0) e = Bt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
            else throw new Error("Can not resolve #include <" + t + ">");
        }
        return To(e);
    }
    const Wg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function Sl(i) {
        return i.replace(Wg, jg);
    }
    function jg(i, t, e, n) {
        let r = "";
        for(let s = parseInt(t); s < parseInt(e); s++)r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
        return r;
    }
    function Ml(i) {
        let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
        return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
    }
    function Xg(i) {
        let t = "SHADOWMAP_TYPE_BASIC";
        return i.shadowMapType === _h ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Cd ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Pn && (t = "SHADOWMAP_TYPE_VSM"), t;
    }
    function qg(i) {
        let t = "ENVMAP_TYPE_CUBE";
        if (i.envMap) switch(i.envMapMode){
            case qi:
            case Yi:
                t = "ENVMAP_TYPE_CUBE";
                break;
            case As:
                t = "ENVMAP_TYPE_CUBE_UV";
                break;
        }
        return t;
    }
    function Yg(i) {
        let t = "ENVMAP_MODE_REFLECTION";
        if (i.envMap) switch(i.envMapMode){
            case Yi:
                t = "ENVMAP_MODE_REFRACTION";
                break;
        }
        return t;
    }
    function Kg(i) {
        let t = "ENVMAP_BLENDING_NONE";
        if (i.envMap) switch(i.combine){
            case ph:
                t = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case Yd:
                t = "ENVMAP_BLENDING_MIX";
                break;
            case Kd:
                t = "ENVMAP_BLENDING_ADD";
                break;
        }
        return t;
    }
    function Zg(i) {
        const t = i.envMapCubeUVHeight;
        if (t === null) return null;
        const e = Math.log2(t) - 2, n = 1 / t;
        return {
            texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)),
            texelHeight: n,
            maxMip: e
        };
    }
    function Jg(i, t, e, n) {
        const r = i.getContext(), s = e.defines;
        let a = e.vertexShader, o = e.fragmentShader;
        const c = Xg(e), l = qg(e), h = Yg(e), u = Kg(e), f = Zg(e), m = Bg(e), w = zg(s), b = r.createProgram();
        let g, _, R = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
        e.isRawShaderMaterial ? (g = [
            "#define SHADER_TYPE " + e.shaderType,
            "#define SHADER_NAME " + e.shaderName,
            w
        ].filter(_r).join(`
`), g.length > 0 && (g += `
`), _ = [
            "#define SHADER_TYPE " + e.shaderType,
            "#define SHADER_NAME " + e.shaderName,
            w
        ].filter(_r).join(`
`), _.length > 0 && (_ += `
`)) : (g = [
            Ml(e),
            "#define SHADER_TYPE " + e.shaderType,
            "#define SHADER_NAME " + e.shaderName,
            w,
            e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
            e.batching ? "#define USE_BATCHING" : "",
            e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
            e.instancing ? "#define USE_INSTANCING" : "",
            e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
            e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
            e.useFog && e.fog ? "#define USE_FOG" : "",
            e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
            e.map ? "#define USE_MAP" : "",
            e.envMap ? "#define USE_ENVMAP" : "",
            e.envMap ? "#define " + h : "",
            e.lightMap ? "#define USE_LIGHTMAP" : "",
            e.aoMap ? "#define USE_AOMAP" : "",
            e.bumpMap ? "#define USE_BUMPMAP" : "",
            e.normalMap ? "#define USE_NORMALMAP" : "",
            e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
            e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
            e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
            e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            e.anisotropy ? "#define USE_ANISOTROPY" : "",
            e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
            e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
            e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
            e.specularMap ? "#define USE_SPECULARMAP" : "",
            e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
            e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
            e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            e.metalnessMap ? "#define USE_METALNESSMAP" : "",
            e.alphaMap ? "#define USE_ALPHAMAP" : "",
            e.alphaHash ? "#define USE_ALPHAHASH" : "",
            e.transmission ? "#define USE_TRANSMISSION" : "",
            e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
            e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
            e.mapUv ? "#define MAP_UV " + e.mapUv : "",
            e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
            e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
            e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
            e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
            e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
            e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
            e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
            e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
            e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
            e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
            e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
            e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
            e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
            e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
            e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
            e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
            e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
            e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
            e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
            e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
            e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
            e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
            e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
            e.vertexColors ? "#define USE_COLOR" : "",
            e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            e.vertexUv1s ? "#define USE_UV1" : "",
            e.vertexUv2s ? "#define USE_UV2" : "",
            e.vertexUv3s ? "#define USE_UV3" : "",
            e.pointsUvs ? "#define USE_POINTS_UV" : "",
            e.flatShading ? "#define FLAT_SHADED" : "",
            e.skinning ? "#define USE_SKINNING" : "",
            e.morphTargets ? "#define USE_MORPHTARGETS" : "",
            e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
            e.morphColors ? "#define USE_MORPHCOLORS" : "",
            e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
            e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
            e.doubleSided ? "#define DOUBLE_SIDED" : "",
            e.flipSided ? "#define FLIP_SIDED" : "",
            e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            e.shadowMapEnabled ? "#define " + c : "",
            e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
            e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            "#ifdef USE_INSTANCING",
            "	attribute mat4 instanceMatrix;",
            "#endif",
            "#ifdef USE_INSTANCING_COLOR",
            "	attribute vec3 instanceColor;",
            "#endif",
            "#ifdef USE_INSTANCING_MORPH",
            "	uniform sampler2D morphTexture;",
            "#endif",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_UV1",
            "	attribute vec2 uv1;",
            "#endif",
            "#ifdef USE_UV2",
            "	attribute vec2 uv2;",
            "#endif",
            "#ifdef USE_UV3",
            "	attribute vec2 uv3;",
            "#endif",
            "#ifdef USE_TANGENT",
            "	attribute vec4 tangent;",
            "#endif",
            "#if defined( USE_COLOR_ALPHA )",
            "	attribute vec4 color;",
            "#elif defined( USE_COLOR )",
            "	attribute vec3 color;",
            "#endif",
            "#ifdef USE_SKINNING",
            "	attribute vec4 skinIndex;",
            "	attribute vec4 skinWeight;",
            "#endif",
            `
`
        ].filter(_r).join(`
`), _ = [
            Ml(e),
            "#define SHADER_TYPE " + e.shaderType,
            "#define SHADER_NAME " + e.shaderName,
            w,
            e.useFog && e.fog ? "#define USE_FOG" : "",
            e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
            e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
            e.map ? "#define USE_MAP" : "",
            e.matcap ? "#define USE_MATCAP" : "",
            e.envMap ? "#define USE_ENVMAP" : "",
            e.envMap ? "#define " + l : "",
            e.envMap ? "#define " + h : "",
            e.envMap ? "#define " + u : "",
            f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
            f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
            f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
            e.lightMap ? "#define USE_LIGHTMAP" : "",
            e.aoMap ? "#define USE_AOMAP" : "",
            e.bumpMap ? "#define USE_BUMPMAP" : "",
            e.normalMap ? "#define USE_NORMALMAP" : "",
            e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
            e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
            e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            e.anisotropy ? "#define USE_ANISOTROPY" : "",
            e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
            e.clearcoat ? "#define USE_CLEARCOAT" : "",
            e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            e.dispersion ? "#define USE_DISPERSION" : "",
            e.iridescence ? "#define USE_IRIDESCENCE" : "",
            e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
            e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
            e.specularMap ? "#define USE_SPECULARMAP" : "",
            e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
            e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
            e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            e.metalnessMap ? "#define USE_METALNESSMAP" : "",
            e.alphaMap ? "#define USE_ALPHAMAP" : "",
            e.alphaTest ? "#define USE_ALPHATEST" : "",
            e.alphaHash ? "#define USE_ALPHAHASH" : "",
            e.sheen ? "#define USE_SHEEN" : "",
            e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
            e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
            e.transmission ? "#define USE_TRANSMISSION" : "",
            e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
            e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "",
            e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            e.vertexUv1s ? "#define USE_UV1" : "",
            e.vertexUv2s ? "#define USE_UV2" : "",
            e.vertexUv3s ? "#define USE_UV3" : "",
            e.pointsUvs ? "#define USE_POINTS_UV" : "",
            e.gradientMap ? "#define USE_GRADIENTMAP" : "",
            e.flatShading ? "#define FLAT_SHADED" : "",
            e.doubleSided ? "#define DOUBLE_SIDED" : "",
            e.flipSided ? "#define FLIP_SIDED" : "",
            e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            e.shadowMapEnabled ? "#define " + c : "",
            e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
            e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
            e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
            e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
            e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            e.toneMapping !== Kn ? "#define TONE_MAPPING" : "",
            e.toneMapping !== Kn ? Bt.tonemapping_pars_fragment : "",
            e.toneMapping !== Kn ? Fg("toneMapping", e.toneMapping) : "",
            e.dithering ? "#define DITHERING" : "",
            e.opaque ? "#define OPAQUE" : "",
            Bt.colorspace_pars_fragment,
            Ng("linearToOutputTexel", e.outputColorSpace),
            Og(),
            e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
            `
`
        ].filter(_r).join(`
`)), a = To(a), a = yl(a, e), a = xl(a, e), o = To(o), o = yl(o, e), o = xl(o, e), a = Sl(a), o = Sl(o), e.isRawShaderMaterial !== !0 && (R = `#version 300 es
`, g = [
            m,
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture"
        ].join(`
`) + `
` + g, _ = [
            "#define varying in",
            e.glslVersion === bc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
            e.glslVersion === bc ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad"
        ].join(`
`) + `
` + _);
        const E = R + g + a, S = R + _ + o, N = wl(r, r.VERTEX_SHADER, E), C = wl(r, r.FRAGMENT_SHADER, S);
        r.attachShader(b, N), r.attachShader(b, C), e.index0AttributeName !== void 0 ? r.bindAttribLocation(b, 0, e.index0AttributeName) : e.morphTargets === !0 && r.bindAttribLocation(b, 0, "position"), r.linkProgram(b);
        function I(D) {
            if (i.debug.checkShaderErrors) {
                const j = r.getProgramInfoLog(b).trim(), W = r.getShaderInfoLog(N).trim(), Y = r.getShaderInfoLog(C).trim();
                let tt = !0, K = !0;
                if (r.getProgramParameter(b, r.LINK_STATUS) === !1) if (tt = !1, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, b, N, C);
                else {
                    const rt = vl(r, N, "vertex"), q = vl(r, C, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(b, r.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + j + `
` + rt + `
` + q);
                }
                else j !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", j) : (W === "" || Y === "") && (K = !1);
                K && (D.diagnostics = {
                    runnable: tt,
                    programLog: j,
                    vertexShader: {
                        log: W,
                        prefix: g
                    },
                    fragmentShader: {
                        log: Y,
                        prefix: _
                    }
                });
            }
            r.deleteShader(N), r.deleteShader(C), B = new _s(r, b), M = Hg(r, b);
        }
        let B;
        this.getUniforms = function() {
            return B === void 0 && I(this), B;
        };
        let M;
        this.getAttributes = function() {
            return M === void 0 && I(this), M;
        };
        let x = e.rendererExtensionParallelShaderCompile === !1;
        return this.isReady = function() {
            return x === !1 && (x = r.getProgramParameter(b, Ig)), x;
        }, this.destroy = function() {
            n.releaseStatesOfProgram(this), r.deleteProgram(b), this.program = void 0;
        }, this.type = e.shaderType, this.name = e.shaderName, this.id = Dg++, this.cacheKey = t, this.usedTimes = 1, this.program = b, this.vertexShader = N, this.fragmentShader = C, this;
    }
    let $g = 0;
    class Qg {
        constructor(){
            this.shaderCache = new Map, this.materialCache = new Map;
        }
        update(t) {
            const e = t.vertexShader, n = t.fragmentShader, r = this._getShaderStage(e), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
            return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
        }
        remove(t) {
            const e = this.materialCache.get(t);
            for (const n of e)n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
            return this.materialCache.delete(t), this;
        }
        getVertexShaderID(t) {
            return this._getShaderStage(t.vertexShader).id;
        }
        getFragmentShaderID(t) {
            return this._getShaderStage(t.fragmentShader).id;
        }
        dispose() {
            this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(t) {
            const e = this.materialCache;
            let n = e.get(t);
            return n === void 0 && (n = new Set, e.set(t, n)), n;
        }
        _getShaderStage(t) {
            const e = this.shaderCache;
            let n = e.get(t);
            return n === void 0 && (n = new tw(t), e.set(t, n)), n;
        }
    }
    class tw {
        constructor(t){
            this.id = $g++, this.code = t, this.usedTimes = 0;
        }
    }
    function ew(i, t, e, n, r, s, a) {
        const o = new Ih, c = new Qg, l = new Set, h = [], u = r.logarithmicDepthBuffer, f = r.vertexTextures;
        let m = r.precision;
        const w = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        };
        function b(M) {
            return l.add(M), M === 0 ? "uv" : `uv${M}`;
        }
        function g(M, x, D, j, W) {
            const Y = j.fog, tt = W.geometry, K = M.isMeshStandardMaterial ? j.environment : null, rt = (M.isMeshStandardMaterial ? e : t).get(M.envMap || K), q = rt && rt.mapping === As ? rt.image.height : null, lt = w[M.type];
            M.precision !== null && (m = r.getMaxPrecision(M.precision), m !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", m, "instead."));
            const pt = tt.morphAttributes.position || tt.morphAttributes.normal || tt.morphAttributes.color, St = pt !== void 0 ? pt.length : 0;
            let Vt = 0;
            tt.morphAttributes.position !== void 0 && (Vt = 1), tt.morphAttributes.normal !== void 0 && (Vt = 2), tt.morphAttributes.color !== void 0 && (Vt = 3);
            let he, J, st, vt;
            if (lt) {
                const ae = wn[lt];
                he = ae.vertexShader, J = ae.fragmentShader;
            } else he = M.vertexShader, J = M.fragmentShader, c.update(M), st = c.getVertexShaderID(M), vt = c.getFragmentShaderID(M);
            const ht = i.getRenderTarget(), Ct = i.state.buffers.depth.getReversed(), ee = W.isInstancedMesh === !0, It = W.isBatchedMesh === !0, ye = !!M.map, ge = !!M.matcap, jt = !!rt, P = !!M.aoMap, Je = !!M.lightMap, Xt = !!M.bumpMap, qt = !!M.normalMap, Mt = !!M.displacementMap, fe = !!M.emissiveMap, xt = !!M.metalnessMap, T = !!M.roughnessMap, v = M.anisotropy > 0, k = M.clearcoat > 0, $ = M.dispersion > 0, et = M.iridescence > 0, Z = M.sheen > 0, yt = M.transmission > 0, dt = v && !!M.anisotropyMap, mt = k && !!M.clearcoatMap, Zt = k && !!M.clearcoatNormalMap, it = k && !!M.clearcoatRoughnessMap, gt = et && !!M.iridescenceMap, Pt = et && !!M.iridescenceThicknessMap, Dt = Z && !!M.sheenColorMap, wt = Z && !!M.sheenRoughnessMap, Yt = !!M.specularMap, Ot = !!M.specularColorMap, ue = !!M.specularIntensityMap, F = yt && !!M.transmissionMap, ot = yt && !!M.thicknessMap, X = !!M.gradientMap, Q = !!M.alphaMap, ft = M.alphaTest > 0, ut = !!M.alphaHash, Nt = !!M.extensions;
            let be = Kn;
            M.toneMapped && (ht === null || ht.isXRRenderTarget === !0) && (be = i.toneMapping);
            const Ue = {
                shaderID: lt,
                shaderType: M.type,
                shaderName: M.name,
                vertexShader: he,
                fragmentShader: J,
                defines: M.defines,
                customVertexShaderID: st,
                customFragmentShaderID: vt,
                isRawShaderMaterial: M.isRawShaderMaterial === !0,
                glslVersion: M.glslVersion,
                precision: m,
                batching: It,
                batchingColor: It && W._colorsTexture !== null,
                instancing: ee,
                instancingColor: ee && W.instanceColor !== null,
                instancingMorph: ee && W.morphTexture !== null,
                supportsVertexTextures: f,
                outputColorSpace: ht === null ? i.outputColorSpace : ht.isXRRenderTarget === !0 ? ht.texture.colorSpace : Ji,
                alphaToCoverage: !!M.alphaToCoverage,
                map: ye,
                matcap: ge,
                envMap: jt,
                envMapMode: jt && rt.mapping,
                envMapCubeUVHeight: q,
                aoMap: P,
                lightMap: Je,
                bumpMap: Xt,
                normalMap: qt,
                displacementMap: f && Mt,
                emissiveMap: fe,
                normalMapObjectSpace: qt && M.normalMapType === cu,
                normalMapTangentSpace: qt && M.normalMapType === Th,
                metalnessMap: xt,
                roughnessMap: T,
                anisotropy: v,
                anisotropyMap: dt,
                clearcoat: k,
                clearcoatMap: mt,
                clearcoatNormalMap: Zt,
                clearcoatRoughnessMap: it,
                dispersion: $,
                iridescence: et,
                iridescenceMap: gt,
                iridescenceThicknessMap: Pt,
                sheen: Z,
                sheenColorMap: Dt,
                sheenRoughnessMap: wt,
                specularMap: Yt,
                specularColorMap: Ot,
                specularIntensityMap: ue,
                transmission: yt,
                transmissionMap: F,
                thicknessMap: ot,
                gradientMap: X,
                opaque: M.transparent === !1 && M.blending === Gi && M.alphaToCoverage === !1,
                alphaMap: Q,
                alphaTest: ft,
                alphaHash: ut,
                combine: M.combine,
                mapUv: ye && b(M.map.channel),
                aoMapUv: P && b(M.aoMap.channel),
                lightMapUv: Je && b(M.lightMap.channel),
                bumpMapUv: Xt && b(M.bumpMap.channel),
                normalMapUv: qt && b(M.normalMap.channel),
                displacementMapUv: Mt && b(M.displacementMap.channel),
                emissiveMapUv: fe && b(M.emissiveMap.channel),
                metalnessMapUv: xt && b(M.metalnessMap.channel),
                roughnessMapUv: T && b(M.roughnessMap.channel),
                anisotropyMapUv: dt && b(M.anisotropyMap.channel),
                clearcoatMapUv: mt && b(M.clearcoatMap.channel),
                clearcoatNormalMapUv: Zt && b(M.clearcoatNormalMap.channel),
                clearcoatRoughnessMapUv: it && b(M.clearcoatRoughnessMap.channel),
                iridescenceMapUv: gt && b(M.iridescenceMap.channel),
                iridescenceThicknessMapUv: Pt && b(M.iridescenceThicknessMap.channel),
                sheenColorMapUv: Dt && b(M.sheenColorMap.channel),
                sheenRoughnessMapUv: wt && b(M.sheenRoughnessMap.channel),
                specularMapUv: Yt && b(M.specularMap.channel),
                specularColorMapUv: Ot && b(M.specularColorMap.channel),
                specularIntensityMapUv: ue && b(M.specularIntensityMap.channel),
                transmissionMapUv: F && b(M.transmissionMap.channel),
                thicknessMapUv: ot && b(M.thicknessMap.channel),
                alphaMapUv: Q && b(M.alphaMap.channel),
                vertexTangents: !!tt.attributes.tangent && (qt || v),
                vertexColors: M.vertexColors,
                vertexAlphas: M.vertexColors === !0 && !!tt.attributes.color && tt.attributes.color.itemSize === 4,
                pointsUvs: W.isPoints === !0 && !!tt.attributes.uv && (ye || Q),
                fog: !!Y,
                useFog: M.fog === !0,
                fogExp2: !!Y && Y.isFogExp2,
                flatShading: M.flatShading === !0,
                sizeAttenuation: M.sizeAttenuation === !0,
                logarithmicDepthBuffer: u,
                reverseDepthBuffer: Ct,
                skinning: W.isSkinnedMesh === !0,
                morphTargets: tt.morphAttributes.position !== void 0,
                morphNormals: tt.morphAttributes.normal !== void 0,
                morphColors: tt.morphAttributes.color !== void 0,
                morphTargetsCount: St,
                morphTextureStride: Vt,
                numDirLights: x.directional.length,
                numPointLights: x.point.length,
                numSpotLights: x.spot.length,
                numSpotLightMaps: x.spotLightMap.length,
                numRectAreaLights: x.rectArea.length,
                numHemiLights: x.hemi.length,
                numDirLightShadows: x.directionalShadowMap.length,
                numPointLightShadows: x.pointShadowMap.length,
                numSpotLightShadows: x.spotShadowMap.length,
                numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
                numLightProbes: x.numLightProbes,
                numClippingPlanes: a.numPlanes,
                numClipIntersection: a.numIntersection,
                dithering: M.dithering,
                shadowMapEnabled: i.shadowMap.enabled && D.length > 0,
                shadowMapType: i.shadowMap.type,
                toneMapping: be,
                decodeVideoTexture: ye && M.map.isVideoTexture === !0 && te.getTransfer(M.map.colorSpace) === ce,
                decodeVideoTextureEmissive: fe && M.emissiveMap.isVideoTexture === !0 && te.getTransfer(M.emissiveMap.colorSpace) === ce,
                premultipliedAlpha: M.premultipliedAlpha,
                doubleSided: M.side === Dn,
                flipSided: M.side === We,
                useDepthPacking: M.depthPacking >= 0,
                depthPacking: M.depthPacking || 0,
                index0AttributeName: M.index0AttributeName,
                extensionClipCullDistance: Nt && M.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
                extensionMultiDraw: (Nt && M.extensions.multiDraw === !0 || It) && n.has("WEBGL_multi_draw"),
                rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
                customProgramCacheKey: M.customProgramCacheKey()
            };
            return Ue.vertexUv1s = l.has(1), Ue.vertexUv2s = l.has(2), Ue.vertexUv3s = l.has(3), l.clear(), Ue;
        }
        function _(M) {
            const x = [];
            if (M.shaderID ? x.push(M.shaderID) : (x.push(M.customVertexShaderID), x.push(M.customFragmentShaderID)), M.defines !== void 0) for(const D in M.defines)x.push(D), x.push(M.defines[D]);
            return M.isRawShaderMaterial === !1 && (R(x, M), E(x, M), x.push(i.outputColorSpace)), x.push(M.customProgramCacheKey), x.join();
        }
        function R(M, x) {
            M.push(x.precision), M.push(x.outputColorSpace), M.push(x.envMapMode), M.push(x.envMapCubeUVHeight), M.push(x.mapUv), M.push(x.alphaMapUv), M.push(x.lightMapUv), M.push(x.aoMapUv), M.push(x.bumpMapUv), M.push(x.normalMapUv), M.push(x.displacementMapUv), M.push(x.emissiveMapUv), M.push(x.metalnessMapUv), M.push(x.roughnessMapUv), M.push(x.anisotropyMapUv), M.push(x.clearcoatMapUv), M.push(x.clearcoatNormalMapUv), M.push(x.clearcoatRoughnessMapUv), M.push(x.iridescenceMapUv), M.push(x.iridescenceThicknessMapUv), M.push(x.sheenColorMapUv), M.push(x.sheenRoughnessMapUv), M.push(x.specularMapUv), M.push(x.specularColorMapUv), M.push(x.specularIntensityMapUv), M.push(x.transmissionMapUv), M.push(x.thicknessMapUv), M.push(x.combine), M.push(x.fogExp2), M.push(x.sizeAttenuation), M.push(x.morphTargetsCount), M.push(x.morphAttributeCount), M.push(x.numDirLights), M.push(x.numPointLights), M.push(x.numSpotLights), M.push(x.numSpotLightMaps), M.push(x.numHemiLights), M.push(x.numRectAreaLights), M.push(x.numDirLightShadows), M.push(x.numPointLightShadows), M.push(x.numSpotLightShadows), M.push(x.numSpotLightShadowsWithMaps), M.push(x.numLightProbes), M.push(x.shadowMapType), M.push(x.toneMapping), M.push(x.numClippingPlanes), M.push(x.numClipIntersection), M.push(x.depthPacking);
        }
        function E(M, x) {
            o.disableAll(), x.supportsVertexTextures && o.enable(0), x.instancing && o.enable(1), x.instancingColor && o.enable(2), x.instancingMorph && o.enable(3), x.matcap && o.enable(4), x.envMap && o.enable(5), x.normalMapObjectSpace && o.enable(6), x.normalMapTangentSpace && o.enable(7), x.clearcoat && o.enable(8), x.iridescence && o.enable(9), x.alphaTest && o.enable(10), x.vertexColors && o.enable(11), x.vertexAlphas && o.enable(12), x.vertexUv1s && o.enable(13), x.vertexUv2s && o.enable(14), x.vertexUv3s && o.enable(15), x.vertexTangents && o.enable(16), x.anisotropy && o.enable(17), x.alphaHash && o.enable(18), x.batching && o.enable(19), x.dispersion && o.enable(20), x.batchingColor && o.enable(21), M.push(o.mask), o.disableAll(), x.fog && o.enable(0), x.useFog && o.enable(1), x.flatShading && o.enable(2), x.logarithmicDepthBuffer && o.enable(3), x.reverseDepthBuffer && o.enable(4), x.skinning && o.enable(5), x.morphTargets && o.enable(6), x.morphNormals && o.enable(7), x.morphColors && o.enable(8), x.premultipliedAlpha && o.enable(9), x.shadowMapEnabled && o.enable(10), x.doubleSided && o.enable(11), x.flipSided && o.enable(12), x.useDepthPacking && o.enable(13), x.dithering && o.enable(14), x.transmission && o.enable(15), x.sheen && o.enable(16), x.opaque && o.enable(17), x.pointsUvs && o.enable(18), x.decodeVideoTexture && o.enable(19), x.decodeVideoTextureEmissive && o.enable(20), x.alphaToCoverage && o.enable(21), M.push(o.mask);
        }
        function S(M) {
            const x = w[M.type];
            let D;
            if (x) {
                const j = wn[x];
                D = tf.clone(j.uniforms);
            } else D = M.uniforms;
            return D;
        }
        function N(M, x) {
            let D;
            for(let j = 0, W = h.length; j < W; j++){
                const Y = h[j];
                if (Y.cacheKey === x) {
                    D = Y, ++D.usedTimes;
                    break;
                }
            }
            return D === void 0 && (D = new Jg(i, x, M, s), h.push(D)), D;
        }
        function C(M) {
            if (--M.usedTimes === 0) {
                const x = h.indexOf(M);
                h[x] = h[h.length - 1], h.pop(), M.destroy();
            }
        }
        function I(M) {
            c.remove(M);
        }
        function B() {
            c.dispose();
        }
        return {
            getParameters: g,
            getProgramCacheKey: _,
            getUniforms: S,
            acquireProgram: N,
            releaseProgram: C,
            releaseShaderCache: I,
            programs: h,
            dispose: B
        };
    }
    function nw() {
        let i = new WeakMap;
        function t(a) {
            return i.has(a);
        }
        function e(a) {
            let o = i.get(a);
            return o === void 0 && (o = {}, i.set(a, o)), o;
        }
        function n(a) {
            i.delete(a);
        }
        function r(a, o, c) {
            i.get(a)[o] = c;
        }
        function s() {
            i = new WeakMap;
        }
        return {
            has: t,
            get: e,
            remove: n,
            update: r,
            dispose: s
        };
    }
    function iw(i, t) {
        return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
    }
    function El(i, t) {
        return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
    }
    function Tl() {
        const i = [];
        let t = 0;
        const e = [], n = [], r = [];
        function s() {
            t = 0, e.length = 0, n.length = 0, r.length = 0;
        }
        function a(u, f, m, w, b, g) {
            let _ = i[t];
            return _ === void 0 ? (_ = {
                id: u.id,
                object: u,
                geometry: f,
                material: m,
                groupOrder: w,
                renderOrder: u.renderOrder,
                z: b,
                group: g
            }, i[t] = _) : (_.id = u.id, _.object = u, _.geometry = f, _.material = m, _.groupOrder = w, _.renderOrder = u.renderOrder, _.z = b, _.group = g), t++, _;
        }
        function o(u, f, m, w, b, g) {
            const _ = a(u, f, m, w, b, g);
            m.transmission > 0 ? n.push(_) : m.transparent === !0 ? r.push(_) : e.push(_);
        }
        function c(u, f, m, w, b, g) {
            const _ = a(u, f, m, w, b, g);
            m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? r.unshift(_) : e.unshift(_);
        }
        function l(u, f) {
            e.length > 1 && e.sort(u || iw), n.length > 1 && n.sort(f || El), r.length > 1 && r.sort(f || El);
        }
        function h() {
            for(let u = t, f = i.length; u < f; u++){
                const m = i[u];
                if (m.id === null) break;
                m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
            }
        }
        return {
            opaque: e,
            transmissive: n,
            transparent: r,
            init: s,
            push: o,
            unshift: c,
            finish: h,
            sort: l
        };
    }
    function rw() {
        let i = new WeakMap;
        function t(n, r) {
            const s = i.get(n);
            let a;
            return s === void 0 ? (a = new Tl, i.set(n, [
                a
            ])) : r >= s.length ? (a = new Tl, s.push(a)) : a = s[r], a;
        }
        function e() {
            i = new WeakMap;
        }
        return {
            get: t,
            dispose: e
        };
    }
    function sw() {
        const i = {};
        return {
            get: function(t) {
                if (i[t.id] !== void 0) return i[t.id];
                let e;
                switch(t.type){
                    case "DirectionalLight":
                        e = {
                            direction: new H,
                            color: new Wt
                        };
                        break;
                    case "SpotLight":
                        e = {
                            position: new H,
                            direction: new H,
                            color: new Wt,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        e = {
                            position: new H,
                            color: new Wt,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        e = {
                            direction: new H,
                            skyColor: new Wt,
                            groundColor: new Wt
                        };
                        break;
                    case "RectAreaLight":
                        e = {
                            color: new Wt,
                            position: new H,
                            halfWidth: new H,
                            halfHeight: new H
                        };
                        break;
                }
                return i[t.id] = e, e;
            }
        };
    }
    function aw() {
        const i = {};
        return {
            get: function(t) {
                if (i[t.id] !== void 0) return i[t.id];
                let e;
                switch(t.type){
                    case "DirectionalLight":
                        e = {
                            shadowIntensity: 1,
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new $t
                        };
                        break;
                    case "SpotLight":
                        e = {
                            shadowIntensity: 1,
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new $t
                        };
                        break;
                    case "PointLight":
                        e = {
                            shadowIntensity: 1,
                            shadowBias: 0,
                            shadowNormalBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new $t,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1e3
                        };
                        break;
                }
                return i[t.id] = e, e;
            }
        };
    }
    let ow = 0;
    function cw(i, t) {
        return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
    }
    function lw(i) {
        const t = new sw, e = aw(), n = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1,
                numSpotMaps: -1,
                numLightProbes: -1
            },
            ambient: [
                0,
                0,
                0
            ],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotLightMap: [],
            spotShadow: [],
            spotShadowMap: [],
            spotLightMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numSpotLightShadowsWithMaps: 0,
            numLightProbes: 0
        };
        for(let l = 0; l < 9; l++)n.probe.push(new H);
        const r = new H, s = new Gt, a = new Gt;
        function o(l) {
            let h = 0, u = 0, f = 0;
            for(let M = 0; M < 9; M++)n.probe[M].set(0, 0, 0);
            let m = 0, w = 0, b = 0, g = 0, _ = 0, R = 0, E = 0, S = 0, N = 0, C = 0, I = 0;
            l.sort(cw);
            for(let M = 0, x = l.length; M < x; M++){
                const D = l[M], j = D.color, W = D.intensity, Y = D.distance, tt = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
                if (D.isAmbientLight) h += j.r * W, u += j.g * W, f += j.b * W;
                else if (D.isLightProbe) {
                    for(let K = 0; K < 9; K++)n.probe[K].addScaledVector(D.sh.coefficients[K], W);
                    I++;
                } else if (D.isDirectionalLight) {
                    const K = t.get(D);
                    if (K.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow) {
                        const rt = D.shadow, q = e.get(D);
                        q.shadowIntensity = rt.intensity, q.shadowBias = rt.bias, q.shadowNormalBias = rt.normalBias, q.shadowRadius = rt.radius, q.shadowMapSize = rt.mapSize, n.directionalShadow[m] = q, n.directionalShadowMap[m] = tt, n.directionalShadowMatrix[m] = D.shadow.matrix, R++;
                    }
                    n.directional[m] = K, m++;
                } else if (D.isSpotLight) {
                    const K = t.get(D);
                    K.position.setFromMatrixPosition(D.matrixWorld), K.color.copy(j).multiplyScalar(W), K.distance = Y, K.coneCos = Math.cos(D.angle), K.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), K.decay = D.decay, n.spot[b] = K;
                    const rt = D.shadow;
                    if (D.map && (n.spotLightMap[N] = D.map, N++, rt.updateMatrices(D), D.castShadow && C++), n.spotLightMatrix[b] = rt.matrix, D.castShadow) {
                        const q = e.get(D);
                        q.shadowIntensity = rt.intensity, q.shadowBias = rt.bias, q.shadowNormalBias = rt.normalBias, q.shadowRadius = rt.radius, q.shadowMapSize = rt.mapSize, n.spotShadow[b] = q, n.spotShadowMap[b] = tt, S++;
                    }
                    b++;
                } else if (D.isRectAreaLight) {
                    const K = t.get(D);
                    K.color.copy(j).multiplyScalar(W), K.halfWidth.set(D.width * .5, 0, 0), K.halfHeight.set(0, D.height * .5, 0), n.rectArea[g] = K, g++;
                } else if (D.isPointLight) {
                    const K = t.get(D);
                    if (K.color.copy(D.color).multiplyScalar(D.intensity), K.distance = D.distance, K.decay = D.decay, D.castShadow) {
                        const rt = D.shadow, q = e.get(D);
                        q.shadowIntensity = rt.intensity, q.shadowBias = rt.bias, q.shadowNormalBias = rt.normalBias, q.shadowRadius = rt.radius, q.shadowMapSize = rt.mapSize, q.shadowCameraNear = rt.camera.near, q.shadowCameraFar = rt.camera.far, n.pointShadow[w] = q, n.pointShadowMap[w] = tt, n.pointShadowMatrix[w] = D.shadow.matrix, E++;
                    }
                    n.point[w] = K, w++;
                } else if (D.isHemisphereLight) {
                    const K = t.get(D);
                    K.skyColor.copy(D.color).multiplyScalar(W), K.groundColor.copy(D.groundColor).multiplyScalar(W), n.hemi[_] = K, _++;
                }
            }
            g > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = at.LTC_FLOAT_1, n.rectAreaLTC2 = at.LTC_FLOAT_2) : (n.rectAreaLTC1 = at.LTC_HALF_1, n.rectAreaLTC2 = at.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = f;
            const B = n.hash;
            (B.directionalLength !== m || B.pointLength !== w || B.spotLength !== b || B.rectAreaLength !== g || B.hemiLength !== _ || B.numDirectionalShadows !== R || B.numPointShadows !== E || B.numSpotShadows !== S || B.numSpotMaps !== N || B.numLightProbes !== I) && (n.directional.length = m, n.spot.length = b, n.rectArea.length = g, n.point.length = w, n.hemi.length = _, n.directionalShadow.length = R, n.directionalShadowMap.length = R, n.pointShadow.length = E, n.pointShadowMap.length = E, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = R, n.pointShadowMatrix.length = E, n.spotLightMatrix.length = S + N - C, n.spotLightMap.length = N, n.numSpotLightShadowsWithMaps = C, n.numLightProbes = I, B.directionalLength = m, B.pointLength = w, B.spotLength = b, B.rectAreaLength = g, B.hemiLength = _, B.numDirectionalShadows = R, B.numPointShadows = E, B.numSpotShadows = S, B.numSpotMaps = N, B.numLightProbes = I, n.version = ow++);
        }
        function c(l, h) {
            let u = 0, f = 0, m = 0, w = 0, b = 0;
            const g = h.matrixWorldInverse;
            for(let _ = 0, R = l.length; _ < R; _++){
                const E = l[_];
                if (E.isDirectionalLight) {
                    const S = n.directional[u];
                    S.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(g), u++;
                } else if (E.isSpotLight) {
                    const S = n.spot[m];
                    S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(g), S.direction.setFromMatrixPosition(E.matrixWorld), r.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(g), m++;
                } else if (E.isRectAreaLight) {
                    const S = n.rectArea[w];
                    S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(g), a.identity(), s.copy(E.matrixWorld), s.premultiply(g), a.extractRotation(s), S.halfWidth.set(E.width * .5, 0, 0), S.halfHeight.set(0, E.height * .5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), w++;
                } else if (E.isPointLight) {
                    const S = n.point[f];
                    S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(g), f++;
                } else if (E.isHemisphereLight) {
                    const S = n.hemi[b];
                    S.direction.setFromMatrixPosition(E.matrixWorld), S.direction.transformDirection(g), b++;
                }
            }
        }
        return {
            setup: o,
            setupView: c,
            state: n
        };
    }
    function Rl(i) {
        const t = new lw(i), e = [], n = [];
        function r(h) {
            l.camera = h, e.length = 0, n.length = 0;
        }
        function s(h) {
            e.push(h);
        }
        function a(h) {
            n.push(h);
        }
        function o() {
            t.setup(e);
        }
        function c(h) {
            t.setupView(e, h);
        }
        const l = {
            lightsArray: e,
            shadowsArray: n,
            camera: null,
            lights: t,
            transmissionRenderTarget: {}
        };
        return {
            init: r,
            state: l,
            setupLights: o,
            setupLightsView: c,
            pushLight: s,
            pushShadow: a
        };
    }
    function hw(i) {
        let t = new WeakMap;
        function e(r, s = 0) {
            const a = t.get(r);
            let o;
            return a === void 0 ? (o = new Rl(i), t.set(r, [
                o
            ])) : s >= a.length ? (o = new Rl(i), a.push(o)) : o = a[s], o;
        }
        function n() {
            t = new WeakMap;
        }
        return {
            get: e,
            dispose: n
        };
    }
    const dw = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, uw = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
    function fw(i, t, e) {
        let n = new Go;
        const r = new $t, s = new $t, a = new ne, o = new mf({
            depthPacking: ou
        }), c = new gf, l = {}, h = e.maxTextureSize, u = {
            [Zn]: We,
            [We]: Zn,
            [Dn]: Dn
        }, f = new Jn({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new $t
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: dw,
            fragmentShader: uw
        }), m = f.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const w = new mn;
        w.setAttribute("position", new sn(new Float32Array([
            -1,
            -1,
            .5,
            3,
            -1,
            .5,
            -1,
            3,
            .5
        ]), 3));
        const b = new rn(w, f), g = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = _h;
        let _ = this.type;
        this.render = function(C, I, B) {
            if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || C.length === 0) return;
            const M = i.getRenderTarget(), x = i.getActiveCubeFace(), D = i.getActiveMipmapLevel(), j = i.state;
            j.setBlending(Yn), j.buffers.color.setClear(1, 1, 1, 1), j.buffers.depth.setTest(!0), j.setScissorTest(!1);
            const W = _ !== Pn && this.type === Pn, Y = _ === Pn && this.type !== Pn;
            for(let tt = 0, K = C.length; tt < K; tt++){
                const rt = C[tt], q = rt.shadow;
                if (q === void 0) {
                    console.warn("THREE.WebGLShadowMap:", rt, "has no shadow.");
                    continue;
                }
                if (q.autoUpdate === !1 && q.needsUpdate === !1) continue;
                r.copy(q.mapSize);
                const lt = q.getFrameExtents();
                if (r.multiply(lt), s.copy(q.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / lt.x), r.x = s.x * lt.x, q.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / lt.y), r.y = s.y * lt.y, q.mapSize.y = s.y)), q.map === null || W === !0 || Y === !0) {
                    const St = this.type !== Pn ? {
                        minFilter: Ze,
                        magFilter: Ze
                    } : {};
                    q.map !== null && q.map.dispose(), q.map = new gi(r.x, r.y, St), q.map.texture.name = rt.name + ".shadowMap", q.camera.updateProjectionMatrix();
                }
                i.setRenderTarget(q.map), i.clear();
                const pt = q.getViewportCount();
                for(let St = 0; St < pt; St++){
                    const Vt = q.getViewport(St);
                    a.set(s.x * Vt.x, s.y * Vt.y, s.x * Vt.z, s.y * Vt.w), j.viewport(a), q.updateMatrices(rt, St), n = q.getFrustum(), S(I, B, q.camera, rt, this.type);
                }
                q.isPointLightShadow !== !0 && this.type === Pn && R(q, B), q.needsUpdate = !1;
            }
            _ = this.type, g.needsUpdate = !1, i.setRenderTarget(M, x, D);
        };
        function R(C, I) {
            const B = t.update(b);
            f.defines.VSM_SAMPLES !== C.blurSamples && (f.defines.VSM_SAMPLES = C.blurSamples, m.defines.VSM_SAMPLES = C.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), C.mapPass === null && (C.mapPass = new gi(r.x, r.y)), f.uniforms.shadow_pass.value = C.map.texture, f.uniforms.resolution.value = C.mapSize, f.uniforms.radius.value = C.radius, i.setRenderTarget(C.mapPass), i.clear(), i.renderBufferDirect(I, null, B, f, b, null), m.uniforms.shadow_pass.value = C.mapPass.texture, m.uniforms.resolution.value = C.mapSize, m.uniforms.radius.value = C.radius, i.setRenderTarget(C.map), i.clear(), i.renderBufferDirect(I, null, B, m, b, null);
        }
        function E(C, I, B, M) {
            let x = null;
            const D = B.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial;
            if (D !== void 0) x = D;
            else if (x = B.isPointLight === !0 ? c : o, i.localClippingEnabled && I.clipShadows === !0 && Array.isArray(I.clippingPlanes) && I.clippingPlanes.length !== 0 || I.displacementMap && I.displacementScale !== 0 || I.alphaMap && I.alphaTest > 0 || I.map && I.alphaTest > 0) {
                const j = x.uuid, W = I.uuid;
                let Y = l[j];
                Y === void 0 && (Y = {}, l[j] = Y);
                let tt = Y[W];
                tt === void 0 && (tt = x.clone(), Y[W] = tt, I.addEventListener("dispose", N)), x = tt;
            }
            if (x.visible = I.visible, x.wireframe = I.wireframe, M === Pn ? x.side = I.shadowSide !== null ? I.shadowSide : I.side : x.side = I.shadowSide !== null ? I.shadowSide : u[I.side], x.alphaMap = I.alphaMap, x.alphaTest = I.alphaTest, x.map = I.map, x.clipShadows = I.clipShadows, x.clippingPlanes = I.clippingPlanes, x.clipIntersection = I.clipIntersection, x.displacementMap = I.displacementMap, x.displacementScale = I.displacementScale, x.displacementBias = I.displacementBias, x.wireframeLinewidth = I.wireframeLinewidth, x.linewidth = I.linewidth, B.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
                const j = i.properties.get(x);
                j.light = B;
            }
            return x;
        }
        function S(C, I, B, M, x) {
            if (C.visible === !1) return;
            if (C.layers.test(I.layers) && (C.isMesh || C.isLine || C.isPoints) && (C.castShadow || C.receiveShadow && x === Pn) && (!C.frustumCulled || n.intersectsObject(C))) {
                C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, C.matrixWorld);
                const W = t.update(C), Y = C.material;
                if (Array.isArray(Y)) {
                    const tt = W.groups;
                    for(let K = 0, rt = tt.length; K < rt; K++){
                        const q = tt[K], lt = Y[q.materialIndex];
                        if (lt && lt.visible) {
                            const pt = E(C, lt, M, x);
                            C.onBeforeShadow(i, C, I, B, W, pt, q), i.renderBufferDirect(B, null, W, pt, C, q), C.onAfterShadow(i, C, I, B, W, pt, q);
                        }
                    }
                } else if (Y.visible) {
                    const tt = E(C, Y, M, x);
                    C.onBeforeShadow(i, C, I, B, W, tt, null), i.renderBufferDirect(B, null, W, tt, C, null), C.onAfterShadow(i, C, I, B, W, tt, null);
                }
            }
            const j = C.children;
            for(let W = 0, Y = j.length; W < Y; W++)S(j[W], I, B, M, x);
        }
        function N(C) {
            C.target.removeEventListener("dispose", N);
            for(const B in l){
                const M = l[B], x = C.target.uuid;
                x in M && (M[x].dispose(), delete M[x]);
            }
        }
    }
    const _w = {
        [za]: Ha,
        [ka]: Wa,
        [Va]: ja,
        [Xi]: Ga,
        [Ha]: za,
        [Wa]: ka,
        [ja]: Va,
        [Ga]: Xi
    };
    function pw(i, t) {
        function e() {
            let F = !1;
            const ot = new ne;
            let X = null;
            const Q = new ne(0, 0, 0, 0);
            return {
                setMask: function(ft) {
                    X !== ft && !F && (i.colorMask(ft, ft, ft, ft), X = ft);
                },
                setLocked: function(ft) {
                    F = ft;
                },
                setClear: function(ft, ut, Nt, be, Ue) {
                    Ue === !0 && (ft *= be, ut *= be, Nt *= be), ot.set(ft, ut, Nt, be), Q.equals(ot) === !1 && (i.clearColor(ft, ut, Nt, be), Q.copy(ot));
                },
                reset: function() {
                    F = !1, X = null, Q.set(-1, 0, 0, 0);
                }
            };
        }
        function n() {
            let F = !1, ot = !1, X = null, Q = null, ft = null;
            return {
                setReversed: function(ut) {
                    if (ot !== ut) {
                        const Nt = t.get("EXT_clip_control");
                        ot ? Nt.clipControlEXT(Nt.LOWER_LEFT_EXT, Nt.ZERO_TO_ONE_EXT) : Nt.clipControlEXT(Nt.LOWER_LEFT_EXT, Nt.NEGATIVE_ONE_TO_ONE_EXT);
                        const be = ft;
                        ft = null, this.setClear(be);
                    }
                    ot = ut;
                },
                getReversed: function() {
                    return ot;
                },
                setTest: function(ut) {
                    ut ? ht(i.DEPTH_TEST) : Ct(i.DEPTH_TEST);
                },
                setMask: function(ut) {
                    X !== ut && !F && (i.depthMask(ut), X = ut);
                },
                setFunc: function(ut) {
                    if (ot && (ut = _w[ut]), Q !== ut) {
                        switch(ut){
                            case za:
                                i.depthFunc(i.NEVER);
                                break;
                            case Ha:
                                i.depthFunc(i.ALWAYS);
                                break;
                            case ka:
                                i.depthFunc(i.LESS);
                                break;
                            case Xi:
                                i.depthFunc(i.LEQUAL);
                                break;
                            case Va:
                                i.depthFunc(i.EQUAL);
                                break;
                            case Ga:
                                i.depthFunc(i.GEQUAL);
                                break;
                            case Wa:
                                i.depthFunc(i.GREATER);
                                break;
                            case ja:
                                i.depthFunc(i.NOTEQUAL);
                                break;
                            default:
                                i.depthFunc(i.LEQUAL);
                        }
                        Q = ut;
                    }
                },
                setLocked: function(ut) {
                    F = ut;
                },
                setClear: function(ut) {
                    ft !== ut && (ot && (ut = 1 - ut), i.clearDepth(ut), ft = ut);
                },
                reset: function() {
                    F = !1, X = null, Q = null, ft = null, ot = !1;
                }
            };
        }
        function r() {
            let F = !1, ot = null, X = null, Q = null, ft = null, ut = null, Nt = null, be = null, Ue = null;
            return {
                setTest: function(ae) {
                    F || (ae ? ht(i.STENCIL_TEST) : Ct(i.STENCIL_TEST));
                },
                setMask: function(ae) {
                    ot !== ae && !F && (i.stencilMask(ae), ot = ae);
                },
                setFunc: function(ae, an, Sn) {
                    (X !== ae || Q !== an || ft !== Sn) && (i.stencilFunc(ae, an, Sn), X = ae, Q = an, ft = Sn);
                },
                setOp: function(ae, an, Sn) {
                    (ut !== ae || Nt !== an || be !== Sn) && (i.stencilOp(ae, an, Sn), ut = ae, Nt = an, be = Sn);
                },
                setLocked: function(ae) {
                    F = ae;
                },
                setClear: function(ae) {
                    Ue !== ae && (i.clearStencil(ae), Ue = ae);
                },
                reset: function() {
                    F = !1, ot = null, X = null, Q = null, ft = null, ut = null, Nt = null, be = null, Ue = null;
                }
            };
        }
        const s = new e, a = new n, o = new r, c = new WeakMap, l = new WeakMap;
        let h = {}, u = {}, f = new WeakMap, m = [], w = null, b = !1, g = null, _ = null, R = null, E = null, S = null, N = null, C = null, I = new Wt(0, 0, 0), B = 0, M = !1, x = null, D = null, j = null, W = null, Y = null;
        const tt = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        let K = !1, rt = 0;
        const q = i.getParameter(i.VERSION);
        q.indexOf("WebGL") !== -1 ? (rt = parseFloat(/^WebGL (\d)/.exec(q)[1]), K = rt >= 1) : q.indexOf("OpenGL ES") !== -1 && (rt = parseFloat(/^OpenGL ES (\d)/.exec(q)[1]), K = rt >= 2);
        let lt = null, pt = {};
        const St = i.getParameter(i.SCISSOR_BOX), Vt = i.getParameter(i.VIEWPORT), he = new ne().fromArray(St), J = new ne().fromArray(Vt);
        function st(F, ot, X, Q) {
            const ft = new Uint8Array(4), ut = i.createTexture();
            i.bindTexture(F, ut), i.texParameteri(F, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(F, i.TEXTURE_MAG_FILTER, i.NEAREST);
            for(let Nt = 0; Nt < X; Nt++)F === i.TEXTURE_3D || F === i.TEXTURE_2D_ARRAY ? i.texImage3D(ot, 0, i.RGBA, 1, 1, Q, 0, i.RGBA, i.UNSIGNED_BYTE, ft) : i.texImage2D(ot + Nt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ft);
            return ut;
        }
        const vt = {};
        vt[i.TEXTURE_2D] = st(i.TEXTURE_2D, i.TEXTURE_2D, 1), vt[i.TEXTURE_CUBE_MAP] = st(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), vt[i.TEXTURE_2D_ARRAY] = st(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), vt[i.TEXTURE_3D] = st(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ht(i.DEPTH_TEST), a.setFunc(Xi), Xt(!1), qt(hc), ht(i.CULL_FACE), P(Yn);
        function ht(F) {
            h[F] !== !0 && (i.enable(F), h[F] = !0);
        }
        function Ct(F) {
            h[F] !== !1 && (i.disable(F), h[F] = !1);
        }
        function ee(F, ot) {
            return u[F] !== ot ? (i.bindFramebuffer(F, ot), u[F] = ot, F === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = ot), F === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = ot), !0) : !1;
        }
        function It(F, ot) {
            let X = m, Q = !1;
            if (F) {
                X = f.get(ot), X === void 0 && (X = [], f.set(ot, X));
                const ft = F.textures;
                if (X.length !== ft.length || X[0] !== i.COLOR_ATTACHMENT0) {
                    for(let ut = 0, Nt = ft.length; ut < Nt; ut++)X[ut] = i.COLOR_ATTACHMENT0 + ut;
                    X.length = ft.length, Q = !0;
                }
            } else X[0] !== i.BACK && (X[0] = i.BACK, Q = !0);
            Q && i.drawBuffers(X);
        }
        function ye(F) {
            return w !== F ? (i.useProgram(F), w = F, !0) : !1;
        }
        const ge = {
            [ui]: i.FUNC_ADD,
            [Id]: i.FUNC_SUBTRACT,
            [Dd]: i.FUNC_REVERSE_SUBTRACT
        };
        ge[Ld] = i.MIN, ge[Ud] = i.MAX;
        const jt = {
            [Nd]: i.ZERO,
            [Fd]: i.ONE,
            [Od]: i.SRC_COLOR,
            [Oa]: i.SRC_ALPHA,
            [Gd]: i.SRC_ALPHA_SATURATE,
            [kd]: i.DST_COLOR,
            [zd]: i.DST_ALPHA,
            [Bd]: i.ONE_MINUS_SRC_COLOR,
            [Ba]: i.ONE_MINUS_SRC_ALPHA,
            [Vd]: i.ONE_MINUS_DST_COLOR,
            [Hd]: i.ONE_MINUS_DST_ALPHA,
            [Wd]: i.CONSTANT_COLOR,
            [jd]: i.ONE_MINUS_CONSTANT_COLOR,
            [Xd]: i.CONSTANT_ALPHA,
            [qd]: i.ONE_MINUS_CONSTANT_ALPHA
        };
        function P(F, ot, X, Q, ft, ut, Nt, be, Ue, ae) {
            if (F === Yn) {
                b === !0 && (Ct(i.BLEND), b = !1);
                return;
            }
            if (b === !1 && (ht(i.BLEND), b = !0), F !== Pd) {
                if (F !== g || ae !== M) {
                    if ((_ !== ui || S !== ui) && (i.blendEquation(i.FUNC_ADD), _ = ui, S = ui), ae) switch(F){
                        case Gi:
                            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                            break;
                        case dc:
                            i.blendFunc(i.ONE, i.ONE);
                            break;
                        case uc:
                            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                            break;
                        case fc:
                            i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", F);
                            break;
                    }
                    else switch(F){
                        case Gi:
                            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                            break;
                        case dc:
                            i.blendFunc(i.SRC_ALPHA, i.ONE);
                            break;
                        case uc:
                            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                            break;
                        case fc:
                            i.blendFunc(i.ZERO, i.SRC_COLOR);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", F);
                            break;
                    }
                    R = null, E = null, N = null, C = null, I.set(0, 0, 0), B = 0, g = F, M = ae;
                }
                return;
            }
            ft = ft || ot, ut = ut || X, Nt = Nt || Q, (ot !== _ || ft !== S) && (i.blendEquationSeparate(ge[ot], ge[ft]), _ = ot, S = ft), (X !== R || Q !== E || ut !== N || Nt !== C) && (i.blendFuncSeparate(jt[X], jt[Q], jt[ut], jt[Nt]), R = X, E = Q, N = ut, C = Nt), (be.equals(I) === !1 || Ue !== B) && (i.blendColor(be.r, be.g, be.b, Ue), I.copy(be), B = Ue), g = F, M = !1;
        }
        function Je(F, ot) {
            F.side === Dn ? Ct(i.CULL_FACE) : ht(i.CULL_FACE);
            let X = F.side === We;
            ot && (X = !X), Xt(X), F.blending === Gi && F.transparent === !1 ? P(Yn) : P(F.blending, F.blendEquation, F.blendSrc, F.blendDst, F.blendEquationAlpha, F.blendSrcAlpha, F.blendDstAlpha, F.blendColor, F.blendAlpha, F.premultipliedAlpha), a.setFunc(F.depthFunc), a.setTest(F.depthTest), a.setMask(F.depthWrite), s.setMask(F.colorWrite);
            const Q = F.stencilWrite;
            o.setTest(Q), Q && (o.setMask(F.stencilWriteMask), o.setFunc(F.stencilFunc, F.stencilRef, F.stencilFuncMask), o.setOp(F.stencilFail, F.stencilZFail, F.stencilZPass)), fe(F.polygonOffset, F.polygonOffsetFactor, F.polygonOffsetUnits), F.alphaToCoverage === !0 ? ht(i.SAMPLE_ALPHA_TO_COVERAGE) : Ct(i.SAMPLE_ALPHA_TO_COVERAGE);
        }
        function Xt(F) {
            x !== F && (F ? i.frontFace(i.CW) : i.frontFace(i.CCW), x = F);
        }
        function qt(F) {
            F !== Rd ? (ht(i.CULL_FACE), F !== D && (F === hc ? i.cullFace(i.BACK) : F === Ad ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Ct(i.CULL_FACE), D = F;
        }
        function Mt(F) {
            F !== j && (K && i.lineWidth(F), j = F);
        }
        function fe(F, ot, X) {
            F ? (ht(i.POLYGON_OFFSET_FILL), (W !== ot || Y !== X) && (i.polygonOffset(ot, X), W = ot, Y = X)) : Ct(i.POLYGON_OFFSET_FILL);
        }
        function xt(F) {
            F ? ht(i.SCISSOR_TEST) : Ct(i.SCISSOR_TEST);
        }
        function T(F) {
            F === void 0 && (F = i.TEXTURE0 + tt - 1), lt !== F && (i.activeTexture(F), lt = F);
        }
        function v(F, ot, X) {
            X === void 0 && (lt === null ? X = i.TEXTURE0 + tt - 1 : X = lt);
            let Q = pt[X];
            Q === void 0 && (Q = {
                type: void 0,
                texture: void 0
            }, pt[X] = Q), (Q.type !== F || Q.texture !== ot) && (lt !== X && (i.activeTexture(X), lt = X), i.bindTexture(F, ot || vt[F]), Q.type = F, Q.texture = ot);
        }
        function k() {
            const F = pt[lt];
            F !== void 0 && F.type !== void 0 && (i.bindTexture(F.type, null), F.type = void 0, F.texture = void 0);
        }
        function $() {
            try {
                i.compressedTexImage2D(...arguments);
            } catch (F) {
                console.error("THREE.WebGLState:", F);
            }
        }
        function et() {
            try {
                i.compressedTexImage3D(...arguments);
            } catch (F) {
                console.error("THREE.WebGLState:", F);
            }
        }
        function Z() {
            try {
                i.texSubImage2D(...arguments);
            } catch (F) {
                console.error("THREE.WebGLState:", F);
            }
        }
        function yt() {
            try {
                i.texSubImage3D(...arguments);
            } catch (F) {
                console.error("THREE.WebGLState:", F);
            }
        }
        function dt() {
            try {
                i.compressedTexSubImage2D(...arguments);
            } catch (F) {
                console.error("THREE.WebGLState:", F);
            }
        }
        function mt() {
            try {
                i.compressedTexSubImage3D(...arguments);
            } catch (F) {
                console.error("THREE.WebGLState:", F);
            }
        }
        function Zt() {
            try {
                i.texStorage2D(...arguments);
            } catch (F) {
                console.error("THREE.WebGLState:", F);
            }
        }
        function it() {
            try {
                i.texStorage3D(...arguments);
            } catch (F) {
                console.error("THREE.WebGLState:", F);
            }
        }
        function gt() {
            try {
                i.texImage2D(...arguments);
            } catch (F) {
                console.error("THREE.WebGLState:", F);
            }
        }
        function Pt() {
            try {
                i.texImage3D(...arguments);
            } catch (F) {
                console.error("THREE.WebGLState:", F);
            }
        }
        function Dt(F) {
            he.equals(F) === !1 && (i.scissor(F.x, F.y, F.z, F.w), he.copy(F));
        }
        function wt(F) {
            J.equals(F) === !1 && (i.viewport(F.x, F.y, F.z, F.w), J.copy(F));
        }
        function Yt(F, ot) {
            let X = l.get(ot);
            X === void 0 && (X = new WeakMap, l.set(ot, X));
            let Q = X.get(F);
            Q === void 0 && (Q = i.getUniformBlockIndex(ot, F.name), X.set(F, Q));
        }
        function Ot(F, ot) {
            const Q = l.get(ot).get(F);
            c.get(ot) !== Q && (i.uniformBlockBinding(ot, Q, F.__bindingPointIndex), c.set(ot, Q));
        }
        function ue() {
            i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, lt = null, pt = {}, u = {}, f = new WeakMap, m = [], w = null, b = !1, g = null, _ = null, R = null, E = null, S = null, N = null, C = null, I = new Wt(0, 0, 0), B = 0, M = !1, x = null, D = null, j = null, W = null, Y = null, he.set(0, 0, i.canvas.width, i.canvas.height), J.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
        }
        return {
            buffers: {
                color: s,
                depth: a,
                stencil: o
            },
            enable: ht,
            disable: Ct,
            bindFramebuffer: ee,
            drawBuffers: It,
            useProgram: ye,
            setBlending: P,
            setMaterial: Je,
            setFlipSided: Xt,
            setCullFace: qt,
            setLineWidth: Mt,
            setPolygonOffset: fe,
            setScissorTest: xt,
            activeTexture: T,
            bindTexture: v,
            unbindTexture: k,
            compressedTexImage2D: $,
            compressedTexImage3D: et,
            texImage2D: gt,
            texImage3D: Pt,
            updateUBOMapping: Yt,
            uniformBlockBinding: Ot,
            texStorage2D: Zt,
            texStorage3D: it,
            texSubImage2D: Z,
            texSubImage3D: yt,
            compressedTexSubImage2D: dt,
            compressedTexSubImage3D: mt,
            scissor: Dt,
            viewport: wt,
            reset: ue
        };
    }
    function mw(i, t, e, n, r, s, a) {
        const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new $t, h = new WeakMap;
        let u;
        const f = new WeakMap;
        let m = !1;
        try {
            m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
        } catch  {}
        function w(T, v) {
            return m ? new OffscreenCanvas(T, v) : br("canvas");
        }
        function b(T, v, k) {
            let $ = 1;
            const et = xt(T);
            if ((et.width > k || et.height > k) && ($ = k / Math.max(et.width, et.height)), $ < 1) if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
                const Z = Math.floor($ * et.width), yt = Math.floor($ * et.height);
                u === void 0 && (u = w(Z, yt));
                const dt = v ? w(Z, yt) : u;
                return dt.width = Z, dt.height = yt, dt.getContext("2d").drawImage(T, 0, 0, Z, yt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + et.width + "x" + et.height + ") to (" + Z + "x" + yt + ")."), dt;
            } else return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + et.width + "x" + et.height + ")."), T;
            return T;
        }
        function g(T) {
            return T.generateMipmaps;
        }
        function _(T) {
            i.generateMipmap(T);
        }
        function R(T) {
            return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
        }
        function E(T, v, k, $, et = !1) {
            if (T !== null) {
                if (i[T] !== void 0) return i[T];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
            }
            let Z = v;
            if (v === i.RED && (k === i.FLOAT && (Z = i.R32F), k === i.HALF_FLOAT && (Z = i.R16F), k === i.UNSIGNED_BYTE && (Z = i.R8)), v === i.RED_INTEGER && (k === i.UNSIGNED_BYTE && (Z = i.R8UI), k === i.UNSIGNED_SHORT && (Z = i.R16UI), k === i.UNSIGNED_INT && (Z = i.R32UI), k === i.BYTE && (Z = i.R8I), k === i.SHORT && (Z = i.R16I), k === i.INT && (Z = i.R32I)), v === i.RG && (k === i.FLOAT && (Z = i.RG32F), k === i.HALF_FLOAT && (Z = i.RG16F), k === i.UNSIGNED_BYTE && (Z = i.RG8)), v === i.RG_INTEGER && (k === i.UNSIGNED_BYTE && (Z = i.RG8UI), k === i.UNSIGNED_SHORT && (Z = i.RG16UI), k === i.UNSIGNED_INT && (Z = i.RG32UI), k === i.BYTE && (Z = i.RG8I), k === i.SHORT && (Z = i.RG16I), k === i.INT && (Z = i.RG32I)), v === i.RGB_INTEGER && (k === i.UNSIGNED_BYTE && (Z = i.RGB8UI), k === i.UNSIGNED_SHORT && (Z = i.RGB16UI), k === i.UNSIGNED_INT && (Z = i.RGB32UI), k === i.BYTE && (Z = i.RGB8I), k === i.SHORT && (Z = i.RGB16I), k === i.INT && (Z = i.RGB32I)), v === i.RGBA_INTEGER && (k === i.UNSIGNED_BYTE && (Z = i.RGBA8UI), k === i.UNSIGNED_SHORT && (Z = i.RGBA16UI), k === i.UNSIGNED_INT && (Z = i.RGBA32UI), k === i.BYTE && (Z = i.RGBA8I), k === i.SHORT && (Z = i.RGBA16I), k === i.INT && (Z = i.RGBA32I)), v === i.RGB && k === i.UNSIGNED_INT_5_9_9_9_REV && (Z = i.RGB9_E5), v === i.RGBA) {
                const yt = et ? gs : te.getTransfer($);
                k === i.FLOAT && (Z = i.RGBA32F), k === i.HALF_FLOAT && (Z = i.RGBA16F), k === i.UNSIGNED_BYTE && (Z = yt === ce ? i.SRGB8_ALPHA8 : i.RGBA8), k === i.UNSIGNED_SHORT_4_4_4_4 && (Z = i.RGBA4), k === i.UNSIGNED_SHORT_5_5_5_1 && (Z = i.RGB5_A1);
            }
            return (Z === i.R16F || Z === i.R32F || Z === i.RG16F || Z === i.RG32F || Z === i.RGBA16F || Z === i.RGBA32F) && t.get("EXT_color_buffer_float"), Z;
        }
        function S(T, v) {
            let k;
            return T ? v === null || v === mi || v === Ki ? k = i.DEPTH24_STENCIL8 : v === _n ? k = i.DEPTH32F_STENCIL8 : v === wr && (k = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === mi || v === Ki ? k = i.DEPTH_COMPONENT24 : v === _n ? k = i.DEPTH_COMPONENT32F : v === wr && (k = i.DEPTH_COMPONENT16), k;
        }
        function N(T, v) {
            return g(T) === !0 || T.isFramebufferTexture && T.minFilter !== Ze && T.minFilter !== bn ? Math.log2(Math.max(v.width, v.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? v.mipmaps.length : 1;
        }
        function C(T) {
            const v = T.target;
            v.removeEventListener("dispose", C), B(v), v.isVideoTexture && h.delete(v);
        }
        function I(T) {
            const v = T.target;
            v.removeEventListener("dispose", I), x(v);
        }
        function B(T) {
            const v = n.get(T);
            if (v.__webglInit === void 0) return;
            const k = T.source, $ = f.get(k);
            if ($) {
                const et = $[v.__cacheKey];
                et.usedTimes--, et.usedTimes === 0 && M(T), Object.keys($).length === 0 && f.delete(k);
            }
            n.remove(T);
        }
        function M(T) {
            const v = n.get(T);
            i.deleteTexture(v.__webglTexture);
            const k = T.source, $ = f.get(k);
            delete $[v.__cacheKey], a.memory.textures--;
        }
        function x(T) {
            const v = n.get(T);
            if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget) for(let $ = 0; $ < 6; $++){
                if (Array.isArray(v.__webglFramebuffer[$])) for(let et = 0; et < v.__webglFramebuffer[$].length; et++)i.deleteFramebuffer(v.__webglFramebuffer[$][et]);
                else i.deleteFramebuffer(v.__webglFramebuffer[$]);
                v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer[$]);
            }
            else {
                if (Array.isArray(v.__webglFramebuffer)) for(let $ = 0; $ < v.__webglFramebuffer.length; $++)i.deleteFramebuffer(v.__webglFramebuffer[$]);
                else i.deleteFramebuffer(v.__webglFramebuffer);
                if (v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && i.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for(let $ = 0; $ < v.__webglColorRenderbuffer.length; $++)v.__webglColorRenderbuffer[$] && i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);
                v.__webglDepthRenderbuffer && i.deleteRenderbuffer(v.__webglDepthRenderbuffer);
            }
            const k = T.textures;
            for(let $ = 0, et = k.length; $ < et; $++){
                const Z = n.get(k[$]);
                Z.__webglTexture && (i.deleteTexture(Z.__webglTexture), a.memory.textures--), n.remove(k[$]);
            }
            n.remove(T);
        }
        let D = 0;
        function j() {
            D = 0;
        }
        function W() {
            const T = D;
            return T >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), D += 1, T;
        }
        function Y(T) {
            const v = [];
            return v.push(T.wrapS), v.push(T.wrapT), v.push(T.wrapR || 0), v.push(T.magFilter), v.push(T.minFilter), v.push(T.anisotropy), v.push(T.internalFormat), v.push(T.format), v.push(T.type), v.push(T.generateMipmaps), v.push(T.premultiplyAlpha), v.push(T.flipY), v.push(T.unpackAlignment), v.push(T.colorSpace), v.join();
        }
        function tt(T, v) {
            const k = n.get(T);
            if (T.isVideoTexture && Mt(T), T.isRenderTargetTexture === !1 && T.version > 0 && k.__version !== T.version) {
                const $ = T.image;
                if ($ === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else if ($.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                else {
                    J(k, T, v);
                    return;
                }
            }
            e.bindTexture(i.TEXTURE_2D, k.__webglTexture, i.TEXTURE0 + v);
        }
        function K(T, v) {
            const k = n.get(T);
            if (T.version > 0 && k.__version !== T.version) {
                J(k, T, v);
                return;
            }
            e.bindTexture(i.TEXTURE_2D_ARRAY, k.__webglTexture, i.TEXTURE0 + v);
        }
        function rt(T, v) {
            const k = n.get(T);
            if (T.version > 0 && k.__version !== T.version) {
                J(k, T, v);
                return;
            }
            e.bindTexture(i.TEXTURE_3D, k.__webglTexture, i.TEXTURE0 + v);
        }
        function q(T, v) {
            const k = n.get(T);
            if (T.version > 0 && k.__version !== T.version) {
                st(k, T, v);
                return;
            }
            e.bindTexture(i.TEXTURE_CUBE_MAP, k.__webglTexture, i.TEXTURE0 + v);
        }
        const lt = {
            [Ya]: i.REPEAT,
            [_i]: i.CLAMP_TO_EDGE,
            [Ka]: i.MIRRORED_REPEAT
        }, pt = {
            [Ze]: i.NEAREST,
            [ru]: i.NEAREST_MIPMAP_NEAREST,
            [Pr]: i.NEAREST_MIPMAP_LINEAR,
            [bn]: i.LINEAR,
            [qs]: i.LINEAR_MIPMAP_NEAREST,
            [pi]: i.LINEAR_MIPMAP_LINEAR
        }, St = {
            [lu]: i.NEVER,
            [pu]: i.ALWAYS,
            [hu]: i.LESS,
            [Rh]: i.LEQUAL,
            [du]: i.EQUAL,
            [_u]: i.GEQUAL,
            [uu]: i.GREATER,
            [fu]: i.NOTEQUAL
        };
        function Vt(T, v) {
            if (v.type === _n && t.has("OES_texture_float_linear") === !1 && (v.magFilter === bn || v.magFilter === qs || v.magFilter === Pr || v.magFilter === pi || v.minFilter === bn || v.minFilter === qs || v.minFilter === Pr || v.minFilter === pi) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, lt[v.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, lt[v.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, lt[v.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, pt[v.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, pt[v.minFilter]), v.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, St[v.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
                if (v.magFilter === Ze || v.minFilter !== Pr && v.minFilter !== pi || v.type === _n && t.has("OES_texture_float_linear") === !1) return;
                if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
                    const k = t.get("EXT_texture_filter_anisotropic");
                    i.texParameterf(T, k.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, r.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
                }
            }
        }
        function he(T, v) {
            let k = !1;
            T.__webglInit === void 0 && (T.__webglInit = !0, v.addEventListener("dispose", C));
            const $ = v.source;
            let et = f.get($);
            et === void 0 && (et = {}, f.set($, et));
            const Z = Y(v);
            if (Z !== T.__cacheKey) {
                et[Z] === void 0 && (et[Z] = {
                    texture: i.createTexture(),
                    usedTimes: 0
                }, a.memory.textures++, k = !0), et[Z].usedTimes++;
                const yt = et[T.__cacheKey];
                yt !== void 0 && (et[T.__cacheKey].usedTimes--, yt.usedTimes === 0 && M(v)), T.__cacheKey = Z, T.__webglTexture = et[Z].texture;
            }
            return k;
        }
        function J(T, v, k) {
            let $ = i.TEXTURE_2D;
            (v.isDataArrayTexture || v.isCompressedArrayTexture) && ($ = i.TEXTURE_2D_ARRAY), v.isData3DTexture && ($ = i.TEXTURE_3D);
            const et = he(T, v), Z = v.source;
            e.bindTexture($, T.__webglTexture, i.TEXTURE0 + k);
            const yt = n.get(Z);
            if (Z.version !== yt.__version || et === !0) {
                e.activeTexture(i.TEXTURE0 + k);
                const dt = te.getPrimaries(te.workingColorSpace), mt = v.colorSpace === Xn ? null : te.getPrimaries(v.colorSpace), Zt = v.colorSpace === Xn || dt === mt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
                i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Zt);
                let it = b(v.image, !1, r.maxTextureSize);
                it = fe(v, it);
                const gt = s.convert(v.format, v.colorSpace), Pt = s.convert(v.type);
                let Dt = E(v.internalFormat, gt, Pt, v.colorSpace, v.isVideoTexture);
                Vt($, v);
                let wt;
                const Yt = v.mipmaps, Ot = v.isVideoTexture !== !0, ue = yt.__version === void 0 || et === !0, F = Z.dataReady, ot = N(v, it);
                if (v.isDepthTexture) Dt = S(v.format === Zi, v.type), ue && (Ot ? e.texStorage2D(i.TEXTURE_2D, 1, Dt, it.width, it.height) : e.texImage2D(i.TEXTURE_2D, 0, Dt, it.width, it.height, 0, gt, Pt, null));
                else if (v.isDataTexture) if (Yt.length > 0) {
                    Ot && ue && e.texStorage2D(i.TEXTURE_2D, ot, Dt, Yt[0].width, Yt[0].height);
                    for(let X = 0, Q = Yt.length; X < Q; X++)wt = Yt[X], Ot ? F && e.texSubImage2D(i.TEXTURE_2D, X, 0, 0, wt.width, wt.height, gt, Pt, wt.data) : e.texImage2D(i.TEXTURE_2D, X, Dt, wt.width, wt.height, 0, gt, Pt, wt.data);
                    v.generateMipmaps = !1;
                } else Ot ? (ue && e.texStorage2D(i.TEXTURE_2D, ot, Dt, it.width, it.height), F && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, it.width, it.height, gt, Pt, it.data)) : e.texImage2D(i.TEXTURE_2D, 0, Dt, it.width, it.height, 0, gt, Pt, it.data);
                else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
                    Ot && ue && e.texStorage3D(i.TEXTURE_2D_ARRAY, ot, Dt, Yt[0].width, Yt[0].height, it.depth);
                    for(let X = 0, Q = Yt.length; X < Q; X++)if (wt = Yt[X], v.format !== nn) if (gt !== null) if (Ot) {
                        if (F) if (v.layerUpdates.size > 0) {
                            const ft = il(wt.width, wt.height, v.format, v.type);
                            for (const ut of v.layerUpdates){
                                const Nt = wt.data.subarray(ut * ft / wt.data.BYTES_PER_ELEMENT, (ut + 1) * ft / wt.data.BYTES_PER_ELEMENT);
                                e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, ut, wt.width, wt.height, 1, gt, Nt);
                            }
                            v.clearLayerUpdates();
                        } else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, wt.width, wt.height, it.depth, gt, wt.data);
                    } else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, X, Dt, wt.width, wt.height, it.depth, 0, wt.data, 0, 0);
                    else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
                    else Ot ? F && e.texSubImage3D(i.TEXTURE_2D_ARRAY, X, 0, 0, 0, wt.width, wt.height, it.depth, gt, Pt, wt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, X, Dt, wt.width, wt.height, it.depth, 0, gt, Pt, wt.data);
                } else {
                    Ot && ue && e.texStorage2D(i.TEXTURE_2D, ot, Dt, Yt[0].width, Yt[0].height);
                    for(let X = 0, Q = Yt.length; X < Q; X++)wt = Yt[X], v.format !== nn ? gt !== null ? Ot ? F && e.compressedTexSubImage2D(i.TEXTURE_2D, X, 0, 0, wt.width, wt.height, gt, wt.data) : e.compressedTexImage2D(i.TEXTURE_2D, X, Dt, wt.width, wt.height, 0, wt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ot ? F && e.texSubImage2D(i.TEXTURE_2D, X, 0, 0, wt.width, wt.height, gt, Pt, wt.data) : e.texImage2D(i.TEXTURE_2D, X, Dt, wt.width, wt.height, 0, gt, Pt, wt.data);
                }
                else if (v.isDataArrayTexture) if (Ot) {
                    if (ue && e.texStorage3D(i.TEXTURE_2D_ARRAY, ot, Dt, it.width, it.height, it.depth), F) if (v.layerUpdates.size > 0) {
                        const X = il(it.width, it.height, v.format, v.type);
                        for (const Q of v.layerUpdates){
                            const ft = it.data.subarray(Q * X / it.data.BYTES_PER_ELEMENT, (Q + 1) * X / it.data.BYTES_PER_ELEMENT);
                            e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Q, it.width, it.height, 1, gt, Pt, ft);
                        }
                        v.clearLayerUpdates();
                    } else e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, it.width, it.height, it.depth, gt, Pt, it.data);
                } else e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Dt, it.width, it.height, it.depth, 0, gt, Pt, it.data);
                else if (v.isData3DTexture) Ot ? (ue && e.texStorage3D(i.TEXTURE_3D, ot, Dt, it.width, it.height, it.depth), F && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, it.width, it.height, it.depth, gt, Pt, it.data)) : e.texImage3D(i.TEXTURE_3D, 0, Dt, it.width, it.height, it.depth, 0, gt, Pt, it.data);
                else if (v.isFramebufferTexture) {
                    if (ue) if (Ot) e.texStorage2D(i.TEXTURE_2D, ot, Dt, it.width, it.height);
                    else {
                        let X = it.width, Q = it.height;
                        for(let ft = 0; ft < ot; ft++)e.texImage2D(i.TEXTURE_2D, ft, Dt, X, Q, 0, gt, Pt, null), X >>= 1, Q >>= 1;
                    }
                } else if (Yt.length > 0) {
                    if (Ot && ue) {
                        const X = xt(Yt[0]);
                        e.texStorage2D(i.TEXTURE_2D, ot, Dt, X.width, X.height);
                    }
                    for(let X = 0, Q = Yt.length; X < Q; X++)wt = Yt[X], Ot ? F && e.texSubImage2D(i.TEXTURE_2D, X, 0, 0, gt, Pt, wt) : e.texImage2D(i.TEXTURE_2D, X, Dt, gt, Pt, wt);
                    v.generateMipmaps = !1;
                } else if (Ot) {
                    if (ue) {
                        const X = xt(it);
                        e.texStorage2D(i.TEXTURE_2D, ot, Dt, X.width, X.height);
                    }
                    F && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, gt, Pt, it);
                } else e.texImage2D(i.TEXTURE_2D, 0, Dt, gt, Pt, it);
                g(v) && _($), yt.__version = Z.version, v.onUpdate && v.onUpdate(v);
            }
            T.__version = v.version;
        }
        function st(T, v, k) {
            if (v.image.length !== 6) return;
            const $ = he(T, v), et = v.source;
            e.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + k);
            const Z = n.get(et);
            if (et.version !== Z.__version || $ === !0) {
                e.activeTexture(i.TEXTURE0 + k);
                const yt = te.getPrimaries(te.workingColorSpace), dt = v.colorSpace === Xn ? null : te.getPrimaries(v.colorSpace), mt = v.colorSpace === Xn || yt === dt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
                i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, mt);
                const Zt = v.isCompressedTexture || v.image[0].isCompressedTexture, it = v.image[0] && v.image[0].isDataTexture, gt = [];
                for(let Q = 0; Q < 6; Q++)!Zt && !it ? gt[Q] = b(v.image[Q], !0, r.maxCubemapSize) : gt[Q] = it ? v.image[Q].image : v.image[Q], gt[Q] = fe(v, gt[Q]);
                const Pt = gt[0], Dt = s.convert(v.format, v.colorSpace), wt = s.convert(v.type), Yt = E(v.internalFormat, Dt, wt, v.colorSpace), Ot = v.isVideoTexture !== !0, ue = Z.__version === void 0 || $ === !0, F = et.dataReady;
                let ot = N(v, Pt);
                Vt(i.TEXTURE_CUBE_MAP, v);
                let X;
                if (Zt) {
                    Ot && ue && e.texStorage2D(i.TEXTURE_CUBE_MAP, ot, Yt, Pt.width, Pt.height);
                    for(let Q = 0; Q < 6; Q++){
                        X = gt[Q].mipmaps;
                        for(let ft = 0; ft < X.length; ft++){
                            const ut = X[ft];
                            v.format !== nn ? Dt !== null ? Ot ? F && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, ft, 0, 0, ut.width, ut.height, Dt, ut.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, ft, Yt, ut.width, ut.height, 0, ut.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ot ? F && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, ft, 0, 0, ut.width, ut.height, Dt, wt, ut.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, ft, Yt, ut.width, ut.height, 0, Dt, wt, ut.data);
                        }
                    }
                } else {
                    if (X = v.mipmaps, Ot && ue) {
                        X.length > 0 && ot++;
                        const Q = xt(gt[0]);
                        e.texStorage2D(i.TEXTURE_CUBE_MAP, ot, Yt, Q.width, Q.height);
                    }
                    for(let Q = 0; Q < 6; Q++)if (it) {
                        Ot ? F && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, 0, 0, gt[Q].width, gt[Q].height, Dt, wt, gt[Q].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, Yt, gt[Q].width, gt[Q].height, 0, Dt, wt, gt[Q].data);
                        for(let ft = 0; ft < X.length; ft++){
                            const Nt = X[ft].image[Q].image;
                            Ot ? F && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, ft + 1, 0, 0, Nt.width, Nt.height, Dt, wt, Nt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, ft + 1, Yt, Nt.width, Nt.height, 0, Dt, wt, Nt.data);
                        }
                    } else {
                        Ot ? F && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, 0, 0, Dt, wt, gt[Q]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, Yt, Dt, wt, gt[Q]);
                        for(let ft = 0; ft < X.length; ft++){
                            const ut = X[ft];
                            Ot ? F && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, ft + 1, 0, 0, Dt, wt, ut.image[Q]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Q, ft + 1, Yt, Dt, wt, ut.image[Q]);
                        }
                    }
                }
                g(v) && _(i.TEXTURE_CUBE_MAP), Z.__version = et.version, v.onUpdate && v.onUpdate(v);
            }
            T.__version = v.version;
        }
        function vt(T, v, k, $, et, Z) {
            const yt = s.convert(k.format, k.colorSpace), dt = s.convert(k.type), mt = E(k.internalFormat, yt, dt, k.colorSpace), Zt = n.get(v), it = n.get(k);
            if (it.__renderTarget = v, !Zt.__hasExternalTextures) {
                const gt = Math.max(1, v.width >> Z), Pt = Math.max(1, v.height >> Z);
                et === i.TEXTURE_3D || et === i.TEXTURE_2D_ARRAY ? e.texImage3D(et, Z, mt, gt, Pt, v.depth, 0, yt, dt, null) : e.texImage2D(et, Z, mt, gt, Pt, 0, yt, dt, null);
            }
            e.bindFramebuffer(i.FRAMEBUFFER, T), qt(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, $, et, it.__webglTexture, 0, Xt(v)) : (et === i.TEXTURE_2D || et >= i.TEXTURE_CUBE_MAP_POSITIVE_X && et <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, $, et, it.__webglTexture, Z), e.bindFramebuffer(i.FRAMEBUFFER, null);
        }
        function ht(T, v, k) {
            if (i.bindRenderbuffer(i.RENDERBUFFER, T), v.depthBuffer) {
                const $ = v.depthTexture, et = $ && $.isDepthTexture ? $.type : null, Z = S(v.stencilBuffer, et), yt = v.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, dt = Xt(v);
                qt(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, dt, Z, v.width, v.height) : k ? i.renderbufferStorageMultisample(i.RENDERBUFFER, dt, Z, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, Z, v.width, v.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, yt, i.RENDERBUFFER, T);
            } else {
                const $ = v.textures;
                for(let et = 0; et < $.length; et++){
                    const Z = $[et], yt = s.convert(Z.format, Z.colorSpace), dt = s.convert(Z.type), mt = E(Z.internalFormat, yt, dt, Z.colorSpace), Zt = Xt(v);
                    k && qt(v) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Zt, mt, v.width, v.height) : qt(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Zt, mt, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, mt, v.width, v.height);
                }
            }
            i.bindRenderbuffer(i.RENDERBUFFER, null);
        }
        function Ct(T, v) {
            if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
            if (e.bindFramebuffer(i.FRAMEBUFFER, T), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            const $ = n.get(v.depthTexture);
            $.__renderTarget = v, (!$.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), tt(v.depthTexture, 0);
            const et = $.__webglTexture, Z = Xt(v);
            if (v.depthTexture.format === Wi) qt(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, et, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, et, 0);
            else if (v.depthTexture.format === Zi) qt(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, et, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, et, 0);
            else throw new Error("Unknown depthTexture format");
        }
        function ee(T) {
            const v = n.get(T), k = T.isWebGLCubeRenderTarget === !0;
            if (v.__boundDepthTexture !== T.depthTexture) {
                const $ = T.depthTexture;
                if (v.__depthDisposeCallback && v.__depthDisposeCallback(), $) {
                    const et = ()=>{
                        delete v.__boundDepthTexture, delete v.__depthDisposeCallback, $.removeEventListener("dispose", et);
                    };
                    $.addEventListener("dispose", et), v.__depthDisposeCallback = et;
                }
                v.__boundDepthTexture = $;
            }
            if (T.depthTexture && !v.__autoAllocateDepthBuffer) {
                if (k) throw new Error("target.depthTexture not supported in Cube render targets");
                Ct(v.__webglFramebuffer, T);
            } else if (k) {
                v.__webglDepthbuffer = [];
                for(let $ = 0; $ < 6; $++)if (e.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer[$]), v.__webglDepthbuffer[$] === void 0) v.__webglDepthbuffer[$] = i.createRenderbuffer(), ht(v.__webglDepthbuffer[$], T, !1);
                else {
                    const et = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Z = v.__webglDepthbuffer[$];
                    i.bindRenderbuffer(i.RENDERBUFFER, Z), i.framebufferRenderbuffer(i.FRAMEBUFFER, et, i.RENDERBUFFER, Z);
                }
            } else if (e.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = i.createRenderbuffer(), ht(v.__webglDepthbuffer, T, !1);
            else {
                const $ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, et = v.__webglDepthbuffer;
                i.bindRenderbuffer(i.RENDERBUFFER, et), i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, et);
            }
            e.bindFramebuffer(i.FRAMEBUFFER, null);
        }
        function It(T, v, k) {
            const $ = n.get(T);
            v !== void 0 && vt($.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), k !== void 0 && ee(T);
        }
        function ye(T) {
            const v = T.texture, k = n.get(T), $ = n.get(v);
            T.addEventListener("dispose", I);
            const et = T.textures, Z = T.isWebGLCubeRenderTarget === !0, yt = et.length > 1;
            if (yt || ($.__webglTexture === void 0 && ($.__webglTexture = i.createTexture()), $.__version = v.version, a.memory.textures++), Z) {
                k.__webglFramebuffer = [];
                for(let dt = 0; dt < 6; dt++)if (v.mipmaps && v.mipmaps.length > 0) {
                    k.__webglFramebuffer[dt] = [];
                    for(let mt = 0; mt < v.mipmaps.length; mt++)k.__webglFramebuffer[dt][mt] = i.createFramebuffer();
                } else k.__webglFramebuffer[dt] = i.createFramebuffer();
            } else {
                if (v.mipmaps && v.mipmaps.length > 0) {
                    k.__webglFramebuffer = [];
                    for(let dt = 0; dt < v.mipmaps.length; dt++)k.__webglFramebuffer[dt] = i.createFramebuffer();
                } else k.__webglFramebuffer = i.createFramebuffer();
                if (yt) for(let dt = 0, mt = et.length; dt < mt; dt++){
                    const Zt = n.get(et[dt]);
                    Zt.__webglTexture === void 0 && (Zt.__webglTexture = i.createTexture(), a.memory.textures++);
                }
                if (T.samples > 0 && qt(T) === !1) {
                    k.__webglMultisampledFramebuffer = i.createFramebuffer(), k.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, k.__webglMultisampledFramebuffer);
                    for(let dt = 0; dt < et.length; dt++){
                        const mt = et[dt];
                        k.__webglColorRenderbuffer[dt] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, k.__webglColorRenderbuffer[dt]);
                        const Zt = s.convert(mt.format, mt.colorSpace), it = s.convert(mt.type), gt = E(mt.internalFormat, Zt, it, mt.colorSpace, T.isXRRenderTarget === !0), Pt = Xt(T);
                        i.renderbufferStorageMultisample(i.RENDERBUFFER, Pt, gt, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + dt, i.RENDERBUFFER, k.__webglColorRenderbuffer[dt]);
                    }
                    i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (k.__webglDepthRenderbuffer = i.createRenderbuffer(), ht(k.__webglDepthRenderbuffer, T, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
                }
            }
            if (Z) {
                e.bindTexture(i.TEXTURE_CUBE_MAP, $.__webglTexture), Vt(i.TEXTURE_CUBE_MAP, v);
                for(let dt = 0; dt < 6; dt++)if (v.mipmaps && v.mipmaps.length > 0) for(let mt = 0; mt < v.mipmaps.length; mt++)vt(k.__webglFramebuffer[dt][mt], T, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + dt, mt);
                else vt(k.__webglFramebuffer[dt], T, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + dt, 0);
                g(v) && _(i.TEXTURE_CUBE_MAP), e.unbindTexture();
            } else if (yt) {
                for(let dt = 0, mt = et.length; dt < mt; dt++){
                    const Zt = et[dt], it = n.get(Zt);
                    e.bindTexture(i.TEXTURE_2D, it.__webglTexture), Vt(i.TEXTURE_2D, Zt), vt(k.__webglFramebuffer, T, Zt, i.COLOR_ATTACHMENT0 + dt, i.TEXTURE_2D, 0), g(Zt) && _(i.TEXTURE_2D);
                }
                e.unbindTexture();
            } else {
                let dt = i.TEXTURE_2D;
                if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (dt = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(dt, $.__webglTexture), Vt(dt, v), v.mipmaps && v.mipmaps.length > 0) for(let mt = 0; mt < v.mipmaps.length; mt++)vt(k.__webglFramebuffer[mt], T, v, i.COLOR_ATTACHMENT0, dt, mt);
                else vt(k.__webglFramebuffer, T, v, i.COLOR_ATTACHMENT0, dt, 0);
                g(v) && _(dt), e.unbindTexture();
            }
            T.depthBuffer && ee(T);
        }
        function ge(T) {
            const v = T.textures;
            for(let k = 0, $ = v.length; k < $; k++){
                const et = v[k];
                if (g(et)) {
                    const Z = R(T), yt = n.get(et).__webglTexture;
                    e.bindTexture(Z, yt), _(Z), e.unbindTexture();
                }
            }
        }
        const jt = [], P = [];
        function Je(T) {
            if (T.samples > 0) {
                if (qt(T) === !1) {
                    const v = T.textures, k = T.width, $ = T.height;
                    let et = i.COLOR_BUFFER_BIT;
                    const Z = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, yt = n.get(T), dt = v.length > 1;
                    if (dt) for(let mt = 0; mt < v.length; mt++)e.bindFramebuffer(i.FRAMEBUFFER, yt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + mt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, yt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + mt, i.TEXTURE_2D, null, 0);
                    e.bindFramebuffer(i.READ_FRAMEBUFFER, yt.__webglMultisampledFramebuffer), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, yt.__webglFramebuffer);
                    for(let mt = 0; mt < v.length; mt++){
                        if (T.resolveDepthBuffer && (T.depthBuffer && (et |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (et |= i.STENCIL_BUFFER_BIT)), dt) {
                            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, yt.__webglColorRenderbuffer[mt]);
                            const Zt = n.get(v[mt]).__webglTexture;
                            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Zt, 0);
                        }
                        i.blitFramebuffer(0, 0, k, $, 0, 0, k, $, et, i.NEAREST), c === !0 && (jt.length = 0, P.length = 0, jt.push(i.COLOR_ATTACHMENT0 + mt), T.depthBuffer && T.resolveDepthBuffer === !1 && (jt.push(Z), P.push(Z), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, P)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, jt));
                    }
                    if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), dt) for(let mt = 0; mt < v.length; mt++){
                        e.bindFramebuffer(i.FRAMEBUFFER, yt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + mt, i.RENDERBUFFER, yt.__webglColorRenderbuffer[mt]);
                        const Zt = n.get(v[mt]).__webglTexture;
                        e.bindFramebuffer(i.FRAMEBUFFER, yt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + mt, i.TEXTURE_2D, Zt, 0);
                    }
                    e.bindFramebuffer(i.DRAW_FRAMEBUFFER, yt.__webglMultisampledFramebuffer);
                } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && c) {
                    const v = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
                    i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [
                        v
                    ]);
                }
            }
        }
        function Xt(T) {
            return Math.min(r.maxSamples, T.samples);
        }
        function qt(T) {
            const v = n.get(T);
            return T.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
        }
        function Mt(T) {
            const v = a.render.frame;
            h.get(T) !== v && (h.set(T, v), T.update());
        }
        function fe(T, v) {
            const k = T.colorSpace, $ = T.format, et = T.type;
            return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || k !== Ji && k !== Xn && (te.getTransfer(k) === ce ? ($ !== nn || et !== Nn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", k)), v;
        }
        function xt(T) {
            return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (l.width = T.naturalWidth || T.width, l.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (l.width = T.displayWidth, l.height = T.displayHeight) : (l.width = T.width, l.height = T.height), l;
        }
        this.allocateTextureUnit = W, this.resetTextureUnits = j, this.setTexture2D = tt, this.setTexture2DArray = K, this.setTexture3D = rt, this.setTextureCube = q, this.rebindTextures = It, this.setupRenderTarget = ye, this.updateRenderTargetMipmap = ge, this.updateMultisampleRenderTarget = Je, this.setupDepthRenderbuffer = ee, this.setupFrameBufferTexture = vt, this.useMultisampledRTT = qt;
    }
    function gw(i, t) {
        function e(n, r = Xn) {
            let s;
            const a = te.getTransfer(r);
            if (n === Nn) return i.UNSIGNED_BYTE;
            if (n === No) return i.UNSIGNED_SHORT_4_4_4_4;
            if (n === Fo) return i.UNSIGNED_SHORT_5_5_5_1;
            if (n === bh) return i.UNSIGNED_INT_5_9_9_9_REV;
            if (n === gh) return i.BYTE;
            if (n === wh) return i.SHORT;
            if (n === wr) return i.UNSIGNED_SHORT;
            if (n === Uo) return i.INT;
            if (n === mi) return i.UNSIGNED_INT;
            if (n === _n) return i.FLOAT;
            if (n === Mr) return i.HALF_FLOAT;
            if (n === vh) return i.ALPHA;
            if (n === yh) return i.RGB;
            if (n === nn) return i.RGBA;
            if (n === xh) return i.LUMINANCE;
            if (n === Sh) return i.LUMINANCE_ALPHA;
            if (n === Wi) return i.DEPTH_COMPONENT;
            if (n === Zi) return i.DEPTH_STENCIL;
            if (n === Oo) return i.RED;
            if (n === Bo) return i.RED_INTEGER;
            if (n === Mh) return i.RG;
            if (n === zo) return i.RG_INTEGER;
            if (n === Ho) return i.RGBA_INTEGER;
            if (n === ls || n === hs || n === ds || n === us) if (a === ce) if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
                if (n === ls) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (n === hs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (n === ds) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (n === us) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
            } else return null;
            else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
                if (n === ls) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === hs) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === ds) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === us) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            } else return null;
            if (n === Za || n === Ja || n === $a || n === Qa) if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
                if (n === Za) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (n === Ja) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (n === $a) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (n === Qa) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            } else return null;
            if (n === to || n === eo || n === no) if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
                if (n === to || n === eo) return a === ce ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                if (n === no) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
            } else return null;
            if (n === io || n === ro || n === so || n === ao || n === oo || n === co || n === lo || n === ho || n === uo || n === fo || n === _o || n === po || n === mo || n === go) if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
                if (n === io) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (n === ro) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (n === so) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (n === ao) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (n === oo) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (n === co) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (n === lo) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (n === ho) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (n === uo) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (n === fo) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (n === _o) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (n === po) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (n === mo) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (n === go) return a === ce ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
            } else return null;
            if (n === fs || n === wo || n === bo) if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
                if (n === fs) return a === ce ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (n === wo) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (n === bo) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
            } else return null;
            if (n === Eh || n === vo || n === yo || n === xo) if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
                if (n === fs) return s.COMPRESSED_RED_RGTC1_EXT;
                if (n === vo) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (n === yo) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (n === xo) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
            } else return null;
            return n === Ki ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
        }
        return {
            convert: e
        };
    }
    const ww = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, bw = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
    class vw {
        constructor(){
            this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
        }
        init(t, e, n) {
            if (this.texture === null) {
                const r = new Be, s = t.properties.get(r);
                s.__webglTexture = e.texture, (e.depthNear !== n.depthNear || e.depthFar !== n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = r;
            }
        }
        getMesh(t) {
            if (this.texture !== null && this.mesh === null) {
                const e = t.cameras[0].viewport, n = new Jn({
                    vertexShader: ww,
                    fragmentShader: bw,
                    uniforms: {
                        depthColor: {
                            value: this.texture
                        },
                        depthWidth: {
                            value: e.z
                        },
                        depthHeight: {
                            value: e.w
                        }
                    }
                });
                this.mesh = new rn(new Ps(20, 20), n);
            }
            return this.mesh;
        }
        reset() {
            this.texture = null, this.mesh = null;
        }
        getDepthTexture() {
            return this.texture;
        }
    }
    class yw extends yi {
        constructor(t, e){
            super();
            const n = this;
            let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, f = null, m = null, w = null;
            const b = new vw, g = e.getContextAttributes();
            let _ = null, R = null;
            const E = [], S = [], N = new $t;
            let C = null;
            const I = new Ke;
            I.viewport = new ne;
            const B = new Ke;
            B.viewport = new ne;
            const M = [
                I,
                B
            ], x = new Lf;
            let D = null, j = null;
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(J) {
                let st = E[J];
                return st === void 0 && (st = new _a, E[J] = st), st.getTargetRaySpace();
            }, this.getControllerGrip = function(J) {
                let st = E[J];
                return st === void 0 && (st = new _a, E[J] = st), st.getGripSpace();
            }, this.getHand = function(J) {
                let st = E[J];
                return st === void 0 && (st = new _a, E[J] = st), st.getHandSpace();
            };
            function W(J) {
                const st = S.indexOf(J.inputSource);
                if (st === -1) return;
                const vt = E[st];
                vt !== void 0 && (vt.update(J.inputSource, J.frame, l || a), vt.dispatchEvent({
                    type: J.type,
                    data: J.inputSource
                }));
            }
            function Y() {
                r.removeEventListener("select", W), r.removeEventListener("selectstart", W), r.removeEventListener("selectend", W), r.removeEventListener("squeeze", W), r.removeEventListener("squeezestart", W), r.removeEventListener("squeezeend", W), r.removeEventListener("end", Y), r.removeEventListener("inputsourceschange", tt);
                for(let J = 0; J < E.length; J++){
                    const st = S[J];
                    st !== null && (S[J] = null, E[J].disconnect(st));
                }
                D = null, j = null, b.reset(), t.setRenderTarget(_), m = null, f = null, u = null, r = null, R = null, he.stop(), n.isPresenting = !1, t.setPixelRatio(C), t.setSize(N.width, N.height, !1), n.dispatchEvent({
                    type: "sessionend"
                });
            }
            this.setFramebufferScaleFactor = function(J) {
                s = J, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
            }, this.setReferenceSpaceType = function(J) {
                o = J, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
            }, this.getReferenceSpace = function() {
                return l || a;
            }, this.setReferenceSpace = function(J) {
                l = J;
            }, this.getBaseLayer = function() {
                return f !== null ? f : m;
            }, this.getBinding = function() {
                return u;
            }, this.getFrame = function() {
                return w;
            }, this.getSession = function() {
                return r;
            }, this.setSession = async function(J) {
                if (r = J, r !== null) {
                    if (_ = t.getRenderTarget(), r.addEventListener("select", W), r.addEventListener("selectstart", W), r.addEventListener("selectend", W), r.addEventListener("squeeze", W), r.addEventListener("squeezestart", W), r.addEventListener("squeezeend", W), r.addEventListener("end", Y), r.addEventListener("inputsourceschange", tt), g.xrCompatible !== !0 && await e.makeXRCompatible(), C = t.getPixelRatio(), t.getSize(N), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
                        let vt = null, ht = null, Ct = null;
                        g.depth && (Ct = g.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, vt = g.stencil ? Zi : Wi, ht = g.stencil ? Ki : mi);
                        const ee = {
                            colorFormat: e.RGBA8,
                            depthFormat: Ct,
                            scaleFactor: s
                        };
                        u = new XRWebGLBinding(r, e), f = u.createProjectionLayer(ee), r.updateRenderState({
                            layers: [
                                f
                            ]
                        }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, !1), R = new gi(f.textureWidth, f.textureHeight, {
                            format: nn,
                            type: Nn,
                            depthTexture: new Gh(f.textureWidth, f.textureHeight, ht, void 0, void 0, void 0, void 0, void 0, void 0, vt),
                            stencilBuffer: g.stencil,
                            colorSpace: t.outputColorSpace,
                            samples: g.antialias ? 4 : 0,
                            resolveDepthBuffer: f.ignoreDepthValues === !1,
                            resolveStencilBuffer: f.ignoreDepthValues === !1
                        });
                    } else {
                        const vt = {
                            antialias: g.antialias,
                            alpha: !0,
                            depth: g.depth,
                            stencil: g.stencil,
                            framebufferScaleFactor: s
                        };
                        m = new XRWebGLLayer(r, e, vt), r.updateRenderState({
                            baseLayer: m
                        }), t.setPixelRatio(1), t.setSize(m.framebufferWidth, m.framebufferHeight, !1), R = new gi(m.framebufferWidth, m.framebufferHeight, {
                            format: nn,
                            type: Nn,
                            colorSpace: t.outputColorSpace,
                            stencilBuffer: g.stencil,
                            resolveDepthBuffer: m.ignoreDepthValues === !1,
                            resolveStencilBuffer: m.ignoreDepthValues === !1
                        });
                    }
                    R.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), he.setContext(r), he.start(), n.isPresenting = !0, n.dispatchEvent({
                        type: "sessionstart"
                    });
                }
            }, this.getEnvironmentBlendMode = function() {
                if (r !== null) return r.environmentBlendMode;
            }, this.getDepthTexture = function() {
                return b.getDepthTexture();
            };
            function tt(J) {
                for(let st = 0; st < J.removed.length; st++){
                    const vt = J.removed[st], ht = S.indexOf(vt);
                    ht >= 0 && (S[ht] = null, E[ht].disconnect(vt));
                }
                for(let st = 0; st < J.added.length; st++){
                    const vt = J.added[st];
                    let ht = S.indexOf(vt);
                    if (ht === -1) {
                        for(let ee = 0; ee < E.length; ee++)if (ee >= S.length) {
                            S.push(vt), ht = ee;
                            break;
                        } else if (S[ee] === null) {
                            S[ee] = vt, ht = ee;
                            break;
                        }
                        if (ht === -1) break;
                    }
                    const Ct = E[ht];
                    Ct && Ct.connect(vt);
                }
            }
            const K = new H, rt = new H;
            function q(J, st, vt) {
                K.setFromMatrixPosition(st.matrixWorld), rt.setFromMatrixPosition(vt.matrixWorld);
                const ht = K.distanceTo(rt), Ct = st.projectionMatrix.elements, ee = vt.projectionMatrix.elements, It = Ct[14] / (Ct[10] - 1), ye = Ct[14] / (Ct[10] + 1), ge = (Ct[9] + 1) / Ct[5], jt = (Ct[9] - 1) / Ct[5], P = (Ct[8] - 1) / Ct[0], Je = (ee[8] + 1) / ee[0], Xt = It * P, qt = It * Je, Mt = ht / (-P + Je), fe = Mt * -P;
                if (st.matrixWorld.decompose(J.position, J.quaternion, J.scale), J.translateX(fe), J.translateZ(Mt), J.matrixWorld.compose(J.position, J.quaternion, J.scale), J.matrixWorldInverse.copy(J.matrixWorld).invert(), Ct[10] === -1) J.projectionMatrix.copy(st.projectionMatrix), J.projectionMatrixInverse.copy(st.projectionMatrixInverse);
                else {
                    const xt = It + Mt, T = ye + Mt, v = Xt - fe, k = qt + (ht - fe), $ = ge * ye / T * xt, et = jt * ye / T * xt;
                    J.projectionMatrix.makePerspective(v, k, $, et, xt, T), J.projectionMatrixInverse.copy(J.projectionMatrix).invert();
                }
            }
            function lt(J, st) {
                st === null ? J.matrixWorld.copy(J.matrix) : J.matrixWorld.multiplyMatrices(st.matrixWorld, J.matrix), J.matrixWorldInverse.copy(J.matrixWorld).invert();
            }
            this.updateCamera = function(J) {
                if (r === null) return;
                let st = J.near, vt = J.far;
                b.texture !== null && (b.depthNear > 0 && (st = b.depthNear), b.depthFar > 0 && (vt = b.depthFar)), x.near = B.near = I.near = st, x.far = B.far = I.far = vt, (D !== x.near || j !== x.far) && (r.updateRenderState({
                    depthNear: x.near,
                    depthFar: x.far
                }), D = x.near, j = x.far), I.layers.mask = J.layers.mask | 2, B.layers.mask = J.layers.mask | 4, x.layers.mask = I.layers.mask | B.layers.mask;
                const ht = J.parent, Ct = x.cameras;
                lt(x, ht);
                for(let ee = 0; ee < Ct.length; ee++)lt(Ct[ee], ht);
                Ct.length === 2 ? q(x, I, B) : x.projectionMatrix.copy(I.projectionMatrix), pt(J, x, ht);
            };
            function pt(J, st, vt) {
                vt === null ? J.matrix.copy(st.matrixWorld) : (J.matrix.copy(vt.matrixWorld), J.matrix.invert(), J.matrix.multiply(st.matrixWorld)), J.matrix.decompose(J.position, J.quaternion, J.scale), J.updateMatrixWorld(!0), J.projectionMatrix.copy(st.projectionMatrix), J.projectionMatrixInverse.copy(st.projectionMatrixInverse), J.isPerspectiveCamera && (J.fov = $i * 2 * Math.atan(1 / J.projectionMatrix.elements[5]), J.zoom = 1);
            }
            this.getCamera = function() {
                return x;
            }, this.getFoveation = function() {
                if (!(f === null && m === null)) return c;
            }, this.setFoveation = function(J) {
                c = J, f !== null && (f.fixedFoveation = J), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = J);
            }, this.hasDepthSensing = function() {
                return b.texture !== null;
            }, this.getDepthSensingMesh = function() {
                return b.getMesh(x);
            };
            let St = null;
            function Vt(J, st) {
                if (h = st.getViewerPose(l || a), w = st, h !== null) {
                    const vt = h.views;
                    m !== null && (t.setRenderTargetFramebuffer(R, m.framebuffer), t.setRenderTarget(R));
                    let ht = !1;
                    vt.length !== x.cameras.length && (x.cameras.length = 0, ht = !0);
                    for(let It = 0; It < vt.length; It++){
                        const ye = vt[It];
                        let ge = null;
                        if (m !== null) ge = m.getViewport(ye);
                        else {
                            const P = u.getViewSubImage(f, ye);
                            ge = P.viewport, It === 0 && (t.setRenderTargetTextures(R, P.colorTexture, f.ignoreDepthValues ? void 0 : P.depthStencilTexture), t.setRenderTarget(R));
                        }
                        let jt = M[It];
                        jt === void 0 && (jt = new Ke, jt.layers.enable(It), jt.viewport = new ne, M[It] = jt), jt.matrix.fromArray(ye.transform.matrix), jt.matrix.decompose(jt.position, jt.quaternion, jt.scale), jt.projectionMatrix.fromArray(ye.projectionMatrix), jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(), jt.viewport.set(ge.x, ge.y, ge.width, ge.height), It === 0 && (x.matrix.copy(jt.matrix), x.matrix.decompose(x.position, x.quaternion, x.scale)), ht === !0 && x.cameras.push(jt);
                    }
                    const Ct = r.enabledFeatures;
                    if (Ct && Ct.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && u) {
                        const It = u.getDepthInformation(vt[0]);
                        It && It.isValid && It.texture && b.init(t, It, r.renderState);
                    }
                }
                for(let vt = 0; vt < E.length; vt++){
                    const ht = S[vt], Ct = E[vt];
                    ht !== null && Ct !== void 0 && Ct.update(ht, st, l || a);
                }
                St && St(J, st), st.detectedPlanes && n.dispatchEvent({
                    type: "planesdetected",
                    data: st
                }), w = null;
            }
            const he = new Kh;
            he.setAnimationLoop(Vt), this.setAnimationLoop = function(J) {
                St = J;
            }, this.dispose = function() {};
        }
    }
    const oi = new vn, xw = new Gt;
    function Sw(i, t) {
        function e(g, _) {
            g.matrixAutoUpdate === !0 && g.updateMatrix(), _.value.copy(g.matrix);
        }
        function n(g, _) {
            _.color.getRGB(g.fogColor.value, Fh(i)), _.isFog ? (g.fogNear.value = _.near, g.fogFar.value = _.far) : _.isFogExp2 && (g.fogDensity.value = _.density);
        }
        function r(g, _, R, E, S) {
            _.isMeshBasicMaterial || _.isMeshLambertMaterial ? s(g, _) : _.isMeshToonMaterial ? (s(g, _), u(g, _)) : _.isMeshPhongMaterial ? (s(g, _), h(g, _)) : _.isMeshStandardMaterial ? (s(g, _), f(g, _), _.isMeshPhysicalMaterial && m(g, _, S)) : _.isMeshMatcapMaterial ? (s(g, _), w(g, _)) : _.isMeshDepthMaterial ? s(g, _) : _.isMeshDistanceMaterial ? (s(g, _), b(g, _)) : _.isMeshNormalMaterial ? s(g, _) : _.isLineBasicMaterial ? (a(g, _), _.isLineDashedMaterial && o(g, _)) : _.isPointsMaterial ? c(g, _, R, E) : _.isSpriteMaterial ? l(g, _) : _.isShadowMaterial ? (g.color.value.copy(_.color), g.opacity.value = _.opacity) : _.isShaderMaterial && (_.uniformsNeedUpdate = !1);
        }
        function s(g, _) {
            g.opacity.value = _.opacity, _.color && g.diffuse.value.copy(_.color), _.emissive && g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity), _.map && (g.map.value = _.map, e(_.map, g.mapTransform)), _.alphaMap && (g.alphaMap.value = _.alphaMap, e(_.alphaMap, g.alphaMapTransform)), _.bumpMap && (g.bumpMap.value = _.bumpMap, e(_.bumpMap, g.bumpMapTransform), g.bumpScale.value = _.bumpScale, _.side === We && (g.bumpScale.value *= -1)), _.normalMap && (g.normalMap.value = _.normalMap, e(_.normalMap, g.normalMapTransform), g.normalScale.value.copy(_.normalScale), _.side === We && g.normalScale.value.negate()), _.displacementMap && (g.displacementMap.value = _.displacementMap, e(_.displacementMap, g.displacementMapTransform), g.displacementScale.value = _.displacementScale, g.displacementBias.value = _.displacementBias), _.emissiveMap && (g.emissiveMap.value = _.emissiveMap, e(_.emissiveMap, g.emissiveMapTransform)), _.specularMap && (g.specularMap.value = _.specularMap, e(_.specularMap, g.specularMapTransform)), _.alphaTest > 0 && (g.alphaTest.value = _.alphaTest);
            const R = t.get(_), E = R.envMap, S = R.envMapRotation;
            E && (g.envMap.value = E, oi.copy(S), oi.x *= -1, oi.y *= -1, oi.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === !1 && (oi.y *= -1, oi.z *= -1), g.envMapRotation.value.setFromMatrix4(xw.makeRotationFromEuler(oi)), g.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = _.reflectivity, g.ior.value = _.ior, g.refractionRatio.value = _.refractionRatio), _.lightMap && (g.lightMap.value = _.lightMap, g.lightMapIntensity.value = _.lightMapIntensity, e(_.lightMap, g.lightMapTransform)), _.aoMap && (g.aoMap.value = _.aoMap, g.aoMapIntensity.value = _.aoMapIntensity, e(_.aoMap, g.aoMapTransform));
        }
        function a(g, _) {
            g.diffuse.value.copy(_.color), g.opacity.value = _.opacity, _.map && (g.map.value = _.map, e(_.map, g.mapTransform));
        }
        function o(g, _) {
            g.dashSize.value = _.dashSize, g.totalSize.value = _.dashSize + _.gapSize, g.scale.value = _.scale;
        }
        function c(g, _, R, E) {
            g.diffuse.value.copy(_.color), g.opacity.value = _.opacity, g.size.value = _.size * R, g.scale.value = E * .5, _.map && (g.map.value = _.map, e(_.map, g.uvTransform)), _.alphaMap && (g.alphaMap.value = _.alphaMap, e(_.alphaMap, g.alphaMapTransform)), _.alphaTest > 0 && (g.alphaTest.value = _.alphaTest);
        }
        function l(g, _) {
            g.diffuse.value.copy(_.color), g.opacity.value = _.opacity, g.rotation.value = _.rotation, _.map && (g.map.value = _.map, e(_.map, g.mapTransform)), _.alphaMap && (g.alphaMap.value = _.alphaMap, e(_.alphaMap, g.alphaMapTransform)), _.alphaTest > 0 && (g.alphaTest.value = _.alphaTest);
        }
        function h(g, _) {
            g.specular.value.copy(_.specular), g.shininess.value = Math.max(_.shininess, 1e-4);
        }
        function u(g, _) {
            _.gradientMap && (g.gradientMap.value = _.gradientMap);
        }
        function f(g, _) {
            g.metalness.value = _.metalness, _.metalnessMap && (g.metalnessMap.value = _.metalnessMap, e(_.metalnessMap, g.metalnessMapTransform)), g.roughness.value = _.roughness, _.roughnessMap && (g.roughnessMap.value = _.roughnessMap, e(_.roughnessMap, g.roughnessMapTransform)), _.envMap && (g.envMapIntensity.value = _.envMapIntensity);
        }
        function m(g, _, R) {
            g.ior.value = _.ior, _.sheen > 0 && (g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen), g.sheenRoughness.value = _.sheenRoughness, _.sheenColorMap && (g.sheenColorMap.value = _.sheenColorMap, e(_.sheenColorMap, g.sheenColorMapTransform)), _.sheenRoughnessMap && (g.sheenRoughnessMap.value = _.sheenRoughnessMap, e(_.sheenRoughnessMap, g.sheenRoughnessMapTransform))), _.clearcoat > 0 && (g.clearcoat.value = _.clearcoat, g.clearcoatRoughness.value = _.clearcoatRoughness, _.clearcoatMap && (g.clearcoatMap.value = _.clearcoatMap, e(_.clearcoatMap, g.clearcoatMapTransform)), _.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = _.clearcoatRoughnessMap, e(_.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), _.clearcoatNormalMap && (g.clearcoatNormalMap.value = _.clearcoatNormalMap, e(_.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale), _.side === We && g.clearcoatNormalScale.value.negate())), _.dispersion > 0 && (g.dispersion.value = _.dispersion), _.iridescence > 0 && (g.iridescence.value = _.iridescence, g.iridescenceIOR.value = _.iridescenceIOR, g.iridescenceThicknessMinimum.value = _.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = _.iridescenceThicknessRange[1], _.iridescenceMap && (g.iridescenceMap.value = _.iridescenceMap, e(_.iridescenceMap, g.iridescenceMapTransform)), _.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = _.iridescenceThicknessMap, e(_.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), _.transmission > 0 && (g.transmission.value = _.transmission, g.transmissionSamplerMap.value = R.texture, g.transmissionSamplerSize.value.set(R.width, R.height), _.transmissionMap && (g.transmissionMap.value = _.transmissionMap, e(_.transmissionMap, g.transmissionMapTransform)), g.thickness.value = _.thickness, _.thicknessMap && (g.thicknessMap.value = _.thicknessMap, e(_.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = _.attenuationDistance, g.attenuationColor.value.copy(_.attenuationColor)), _.anisotropy > 0 && (g.anisotropyVector.value.set(_.anisotropy * Math.cos(_.anisotropyRotation), _.anisotropy * Math.sin(_.anisotropyRotation)), _.anisotropyMap && (g.anisotropyMap.value = _.anisotropyMap, e(_.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = _.specularIntensity, g.specularColor.value.copy(_.specularColor), _.specularColorMap && (g.specularColorMap.value = _.specularColorMap, e(_.specularColorMap, g.specularColorMapTransform)), _.specularIntensityMap && (g.specularIntensityMap.value = _.specularIntensityMap, e(_.specularIntensityMap, g.specularIntensityMapTransform));
        }
        function w(g, _) {
            _.matcap && (g.matcap.value = _.matcap);
        }
        function b(g, _) {
            const R = t.get(_).light;
            g.referencePosition.value.setFromMatrixPosition(R.matrixWorld), g.nearDistance.value = R.shadow.camera.near, g.farDistance.value = R.shadow.camera.far;
        }
        return {
            refreshFogUniforms: n,
            refreshMaterialUniforms: r
        };
    }
    function Mw(i, t, e, n) {
        let r = {}, s = {}, a = [];
        const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
        function c(R, E) {
            const S = E.program;
            n.uniformBlockBinding(R, S);
        }
        function l(R, E) {
            let S = r[R.id];
            S === void 0 && (w(R), S = h(R), r[R.id] = S, R.addEventListener("dispose", g));
            const N = E.program;
            n.updateUBOMapping(R, N);
            const C = t.render.frame;
            s[R.id] !== C && (f(R), s[R.id] = C);
        }
        function h(R) {
            const E = u();
            R.__bindingPointIndex = E;
            const S = i.createBuffer(), N = R.__size, C = R.usage;
            return i.bindBuffer(i.UNIFORM_BUFFER, S), i.bufferData(i.UNIFORM_BUFFER, N, C), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, E, S), S;
        }
        function u() {
            for(let R = 0; R < o; R++)if (a.indexOf(R) === -1) return a.push(R), R;
            return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        }
        function f(R) {
            const E = r[R.id], S = R.uniforms, N = R.__cache;
            i.bindBuffer(i.UNIFORM_BUFFER, E);
            for(let C = 0, I = S.length; C < I; C++){
                const B = Array.isArray(S[C]) ? S[C] : [
                    S[C]
                ];
                for(let M = 0, x = B.length; M < x; M++){
                    const D = B[M];
                    if (m(D, C, M, N) === !0) {
                        const j = D.__offset, W = Array.isArray(D.value) ? D.value : [
                            D.value
                        ];
                        let Y = 0;
                        for(let tt = 0; tt < W.length; tt++){
                            const K = W[tt], rt = b(K);
                            typeof K == "number" || typeof K == "boolean" ? (D.__data[0] = K, i.bufferSubData(i.UNIFORM_BUFFER, j + Y, D.__data)) : K.isMatrix3 ? (D.__data[0] = K.elements[0], D.__data[1] = K.elements[1], D.__data[2] = K.elements[2], D.__data[3] = 0, D.__data[4] = K.elements[3], D.__data[5] = K.elements[4], D.__data[6] = K.elements[5], D.__data[7] = 0, D.__data[8] = K.elements[6], D.__data[9] = K.elements[7], D.__data[10] = K.elements[8], D.__data[11] = 0) : (K.toArray(D.__data, Y), Y += rt.storage / Float32Array.BYTES_PER_ELEMENT);
                        }
                        i.bufferSubData(i.UNIFORM_BUFFER, j, D.__data);
                    }
                }
            }
            i.bindBuffer(i.UNIFORM_BUFFER, null);
        }
        function m(R, E, S, N) {
            const C = R.value, I = E + "_" + S;
            if (N[I] === void 0) return typeof C == "number" || typeof C == "boolean" ? N[I] = C : N[I] = C.clone(), !0;
            {
                const B = N[I];
                if (typeof C == "number" || typeof C == "boolean") {
                    if (B !== C) return N[I] = C, !0;
                } else if (B.equals(C) === !1) return B.copy(C), !0;
            }
            return !1;
        }
        function w(R) {
            const E = R.uniforms;
            let S = 0;
            const N = 16;
            for(let I = 0, B = E.length; I < B; I++){
                const M = Array.isArray(E[I]) ? E[I] : [
                    E[I]
                ];
                for(let x = 0, D = M.length; x < D; x++){
                    const j = M[x], W = Array.isArray(j.value) ? j.value : [
                        j.value
                    ];
                    for(let Y = 0, tt = W.length; Y < tt; Y++){
                        const K = W[Y], rt = b(K), q = S % N, lt = q % rt.boundary, pt = q + lt;
                        S += lt, pt !== 0 && N - pt < rt.storage && (S += N - pt), j.__data = new Float32Array(rt.storage / Float32Array.BYTES_PER_ELEMENT), j.__offset = S, S += rt.storage;
                    }
                }
            }
            const C = S % N;
            return C > 0 && (S += N - C), R.__size = S, R.__cache = {}, this;
        }
        function b(R) {
            const E = {
                boundary: 0,
                storage: 0
            };
            return typeof R == "number" || typeof R == "boolean" ? (E.boundary = 4, E.storage = 4) : R.isVector2 ? (E.boundary = 8, E.storage = 8) : R.isVector3 || R.isColor ? (E.boundary = 16, E.storage = 12) : R.isVector4 ? (E.boundary = 16, E.storage = 16) : R.isMatrix3 ? (E.boundary = 48, E.storage = 48) : R.isMatrix4 ? (E.boundary = 64, E.storage = 64) : R.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", R), E;
        }
        function g(R) {
            const E = R.target;
            E.removeEventListener("dispose", g);
            const S = a.indexOf(E.__bindingPointIndex);
            a.splice(S, 1), i.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id];
        }
        function _() {
            for(const R in r)i.deleteBuffer(r[R]);
            a = [], r = {}, s = {};
        }
        return {
            bind: c,
            update: l,
            dispose: _
        };
    }
    XA = class {
        constructor(t = {}){
            const { canvas: e = Du(), context: n = null, depth: r = !0, stencil: s = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: c = !0, preserveDrawingBuffer: l = !1, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = !1, reverseDepthBuffer: f = !1 } = t;
            this.isWebGLRenderer = !0;
            let m;
            if (n !== null) {
                if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
                m = n.getContextAttributes().alpha;
            } else m = a;
            const w = new Uint32Array(4), b = new Int32Array(4);
            let g = null, _ = null;
            const R = [], E = [];
            this.domElement = e, this.debug = {
                checkShaderErrors: !0,
                onShaderError: null
            }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = en, this.toneMapping = Kn, this.toneMappingExposure = 1;
            const S = this;
            let N = !1, C = 0, I = 0, B = null, M = -1, x = null;
            const D = new ne, j = new ne;
            let W = null;
            const Y = new Wt(0);
            let tt = 0, K = e.width, rt = e.height, q = 1, lt = null, pt = null;
            const St = new ne(0, 0, K, rt), Vt = new ne(0, 0, K, rt);
            let he = !1;
            const J = new Go;
            let st = !1, vt = !1;
            this.transmissionResolutionScale = 1;
            const ht = new Gt, Ct = new Gt, ee = new H, It = new ne, ye = {
                background: null,
                fog: null,
                environment: null,
                overrideMaterial: null,
                isScene: !0
            };
            let ge = !1;
            function jt() {
                return B === null ? q : 1;
            }
            let P = n;
            function Je(y, O) {
                return e.getContext(y, O);
            }
            try {
                const y = {
                    alpha: !0,
                    depth: r,
                    stencil: s,
                    antialias: o,
                    premultipliedAlpha: c,
                    preserveDrawingBuffer: l,
                    powerPreference: h,
                    failIfMajorPerformanceCaveat: u
                };
                if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Lo}`), e.addEventListener("webglcontextlost", Q, !1), e.addEventListener("webglcontextrestored", ft, !1), e.addEventListener("webglcontextcreationerror", ut, !1), P === null) {
                    const O = "webgl2";
                    if (P = Je(O, y), P === null) throw Je(O) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
                }
            } catch (y) {
                throw console.error("THREE.WebGLRenderer: " + y.message), y;
            }
            let Xt, qt, Mt, fe, xt, T, v, k, $, et, Z, yt, dt, mt, Zt, it, gt, Pt, Dt, wt, Yt, Ot, ue, F;
            function ot() {
                Xt = new Nm(P), Xt.init(), Ot = new gw(P, Xt), qt = new Am(P, Xt, t, Ot), Mt = new pw(P, Xt), qt.reverseDepthBuffer && f && Mt.buffers.depth.setReversed(!0), fe = new Bm(P), xt = new nw, T = new mw(P, Xt, Mt, xt, qt, Ot, fe), v = new Pm(S), k = new Um(S), $ = new Wf(P), ue = new Tm(P, $), et = new Fm(P, $, fe, ue), Z = new Hm(P, et, $, fe), Dt = new zm(P, qt, T), it = new Cm(xt), yt = new ew(S, v, k, Xt, qt, ue, it), dt = new Sw(S, xt), mt = new rw, Zt = new hw(Xt), Pt = new Em(S, v, k, Mt, Z, m, c), gt = new fw(S, Z, qt), F = new Mw(P, fe, qt, Mt), wt = new Rm(P, Xt, fe), Yt = new Om(P, Xt, fe), fe.programs = yt.programs, S.capabilities = qt, S.extensions = Xt, S.properties = xt, S.renderLists = mt, S.shadowMap = gt, S.state = Mt, S.info = fe;
            }
            ot();
            const X = new yw(S, P);
            this.xr = X, this.getContext = function() {
                return P;
            }, this.getContextAttributes = function() {
                return P.getContextAttributes();
            }, this.forceContextLoss = function() {
                const y = Xt.get("WEBGL_lose_context");
                y && y.loseContext();
            }, this.forceContextRestore = function() {
                const y = Xt.get("WEBGL_lose_context");
                y && y.restoreContext();
            }, this.getPixelRatio = function() {
                return q;
            }, this.setPixelRatio = function(y) {
                y !== void 0 && (q = y, this.setSize(K, rt, !1));
            }, this.getSize = function(y) {
                return y.set(K, rt);
            }, this.setSize = function(y, O, V = !0) {
                if (X.isPresenting) {
                    console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                    return;
                }
                K = y, rt = O, e.width = Math.floor(y * q), e.height = Math.floor(O * q), V === !0 && (e.style.width = y + "px", e.style.height = O + "px"), this.setViewport(0, 0, y, O);
            }, this.getDrawingBufferSize = function(y) {
                return y.set(K * q, rt * q).floor();
            }, this.setDrawingBufferSize = function(y, O, V) {
                K = y, rt = O, q = V, e.width = Math.floor(y * V), e.height = Math.floor(O * V), this.setViewport(0, 0, y, O);
            }, this.getCurrentViewport = function(y) {
                return y.copy(D);
            }, this.getViewport = function(y) {
                return y.copy(St);
            }, this.setViewport = function(y, O, V, G) {
                y.isVector4 ? St.set(y.x, y.y, y.z, y.w) : St.set(y, O, V, G), Mt.viewport(D.copy(St).multiplyScalar(q).round());
            }, this.getScissor = function(y) {
                return y.copy(Vt);
            }, this.setScissor = function(y, O, V, G) {
                y.isVector4 ? Vt.set(y.x, y.y, y.z, y.w) : Vt.set(y, O, V, G), Mt.scissor(j.copy(Vt).multiplyScalar(q).round());
            }, this.getScissorTest = function() {
                return he;
            }, this.setScissorTest = function(y) {
                Mt.setScissorTest(he = y);
            }, this.setOpaqueSort = function(y) {
                lt = y;
            }, this.setTransparentSort = function(y) {
                pt = y;
            }, this.getClearColor = function(y) {
                return y.copy(Pt.getClearColor());
            }, this.setClearColor = function() {
                Pt.setClearColor(...arguments);
            }, this.getClearAlpha = function() {
                return Pt.getClearAlpha();
            }, this.setClearAlpha = function() {
                Pt.setClearAlpha(...arguments);
            }, this.clear = function(y = !0, O = !0, V = !0) {
                let G = 0;
                if (y) {
                    let z = !1;
                    if (B !== null) {
                        const nt = B.texture.format;
                        z = nt === Ho || nt === zo || nt === Bo;
                    }
                    if (z) {
                        const nt = B.texture.type, ct = nt === Nn || nt === mi || nt === wr || nt === Ki || nt === No || nt === Fo, _t = Pt.getClearColor(), bt = Pt.getClearAlpha(), Lt = _t.r, Ut = _t.g, Et = _t.b;
                        ct ? (w[0] = Lt, w[1] = Ut, w[2] = Et, w[3] = bt, P.clearBufferuiv(P.COLOR, 0, w)) : (b[0] = Lt, b[1] = Ut, b[2] = Et, b[3] = bt, P.clearBufferiv(P.COLOR, 0, b));
                    } else G |= P.COLOR_BUFFER_BIT;
                }
                O && (G |= P.DEPTH_BUFFER_BIT), V && (G |= P.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), P.clear(G);
            }, this.clearColor = function() {
                this.clear(!0, !1, !1);
            }, this.clearDepth = function() {
                this.clear(!1, !0, !1);
            }, this.clearStencil = function() {
                this.clear(!1, !1, !0);
            }, this.dispose = function() {
                e.removeEventListener("webglcontextlost", Q, !1), e.removeEventListener("webglcontextrestored", ft, !1), e.removeEventListener("webglcontextcreationerror", ut, !1), Pt.dispose(), mt.dispose(), Zt.dispose(), xt.dispose(), v.dispose(), k.dispose(), Z.dispose(), ue.dispose(), F.dispose(), yt.dispose(), X.dispose(), X.removeEventListener("sessionstart", ic), X.removeEventListener("sessionend", rc), ti.stop();
            };
            function Q(y) {
                y.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), N = !0;
            }
            function ft() {
                console.log("THREE.WebGLRenderer: Context Restored."), N = !1;
                const y = fe.autoReset, O = gt.enabled, V = gt.autoUpdate, G = gt.needsUpdate, z = gt.type;
                ot(), fe.autoReset = y, gt.enabled = O, gt.autoUpdate = V, gt.needsUpdate = G, gt.type = z;
            }
            function ut(y) {
                console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", y.statusMessage);
            }
            function Nt(y) {
                const O = y.target;
                O.removeEventListener("dispose", Nt), be(O);
            }
            function be(y) {
                Ue(y), xt.remove(y);
            }
            function Ue(y) {
                const O = xt.get(y).programs;
                O !== void 0 && (O.forEach(function(V) {
                    yt.releaseProgram(V);
                }), y.isShaderMaterial && yt.releaseShaderCache(y));
            }
            this.renderBufferDirect = function(y, O, V, G, z, nt) {
                O === null && (O = ye);
                const ct = z.isMesh && z.matrixWorld.determinant() < 0, _t = yd(y, O, V, G, z);
                Mt.setMaterial(G, ct);
                let bt = V.index, Lt = 1;
                if (G.wireframe === !0) {
                    if (bt = et.getWireframeAttribute(V), bt === void 0) return;
                    Lt = 2;
                }
                const Ut = V.drawRange, Et = V.attributes.position;
                let Jt = Ut.start * Lt, ie = (Ut.start + Ut.count) * Lt;
                nt !== null && (Jt = Math.max(Jt, nt.start * Lt), ie = Math.min(ie, (nt.start + nt.count) * Lt)), bt !== null ? (Jt = Math.max(Jt, 0), ie = Math.min(ie, bt.count)) : Et != null && (Jt = Math.max(Jt, 0), ie = Math.min(ie, Et.count));
                const Se = ie - Jt;
                if (Se < 0 || Se === 1 / 0) return;
                ue.setup(z, G, _t, V, bt);
                let ve, Qt = wt;
                if (bt !== null && (ve = $.get(bt), Qt = Yt, Qt.setIndex(ve)), z.isMesh) G.wireframe === !0 ? (Mt.setLineWidth(G.wireframeLinewidth * jt()), Qt.setMode(P.LINES)) : Qt.setMode(P.TRIANGLES);
                else if (z.isLine) {
                    let Tt = G.linewidth;
                    Tt === void 0 && (Tt = 1), Mt.setLineWidth(Tt * jt()), z.isLineSegments ? Qt.setMode(P.LINES) : z.isLineLoop ? Qt.setMode(P.LINE_LOOP) : Qt.setMode(P.LINE_STRIP);
                } else z.isPoints ? Qt.setMode(P.POINTS) : z.isSprite && Qt.setMode(P.TRIANGLES);
                if (z.isBatchedMesh) if (z._multiDrawInstances !== null) li("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Qt.renderMultiDrawInstances(z._multiDrawStarts, z._multiDrawCounts, z._multiDrawCount, z._multiDrawInstances);
                else if (Xt.get("WEBGL_multi_draw")) Qt.renderMultiDraw(z._multiDrawStarts, z._multiDrawCounts, z._multiDrawCount);
                else {
                    const Tt = z._multiDrawStarts, De = z._multiDrawCounts, re = z._multiDrawCount, on = bt ? $.get(bt).bytesPerElement : 1, Si = xt.get(G).currentProgram.getUniforms();
                    for(let je = 0; je < re; je++)Si.setValue(P, "_gl_DrawID", je), Qt.render(Tt[je] / on, De[je]);
                }
                else if (z.isInstancedMesh) Qt.renderInstances(Jt, Se, z.count);
                else if (V.isInstancedBufferGeometry) {
                    const Tt = V._maxInstanceCount !== void 0 ? V._maxInstanceCount : 1 / 0, De = Math.min(V.instanceCount, Tt);
                    Qt.renderInstances(Jt, Se, De);
                } else Qt.render(Jt, Se);
            };
            function ae(y, O, V) {
                y.transparent === !0 && y.side === Dn && y.forceSinglePass === !1 ? (y.side = We, y.needsUpdate = !0, Cr(y, O, V), y.side = Zn, y.needsUpdate = !0, Cr(y, O, V), y.side = Dn) : Cr(y, O, V);
            }
            this.compile = function(y, O, V = null) {
                V === null && (V = y), _ = Zt.get(V), _.init(O), E.push(_), V.traverseVisible(function(z) {
                    z.isLight && z.layers.test(O.layers) && (_.pushLight(z), z.castShadow && _.pushShadow(z));
                }), y !== V && y.traverseVisible(function(z) {
                    z.isLight && z.layers.test(O.layers) && (_.pushLight(z), z.castShadow && _.pushShadow(z));
                }), _.setupLights();
                const G = new Set;
                return y.traverse(function(z) {
                    if (!(z.isMesh || z.isPoints || z.isLine || z.isSprite)) return;
                    const nt = z.material;
                    if (nt) if (Array.isArray(nt)) for(let ct = 0; ct < nt.length; ct++){
                        const _t = nt[ct];
                        ae(_t, V, z), G.add(_t);
                    }
                    else ae(nt, V, z), G.add(nt);
                }), _ = E.pop(), G;
            }, this.compileAsync = function(y, O, V = null) {
                const G = this.compile(y, O, V);
                return new Promise((z)=>{
                    function nt() {
                        if (G.forEach(function(ct) {
                            xt.get(ct).currentProgram.isReady() && G.delete(ct);
                        }), G.size === 0) {
                            z(y);
                            return;
                        }
                        setTimeout(nt, 10);
                    }
                    Xt.get("KHR_parallel_shader_compile") !== null ? nt() : setTimeout(nt, 10);
                });
            };
            let an = null;
            function Sn(y) {
                an && an(y);
            }
            function ic() {
                ti.stop();
            }
            function rc() {
                ti.start();
            }
            const ti = new Kh;
            ti.setAnimationLoop(Sn), typeof self < "u" && ti.setContext(self), this.setAnimationLoop = function(y) {
                an = y, X.setAnimationLoop(y), y === null ? ti.stop() : ti.start();
            }, X.addEventListener("sessionstart", ic), X.addEventListener("sessionend", rc), this.render = function(y, O) {
                if (O !== void 0 && O.isCamera !== !0) {
                    console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                    return;
                }
                if (N === !0) return;
                if (y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(), O.parent === null && O.matrixWorldAutoUpdate === !0 && O.updateMatrixWorld(), X.enabled === !0 && X.isPresenting === !0 && (X.cameraAutoUpdate === !0 && X.updateCamera(O), O = X.getCamera()), y.isScene === !0 && y.onBeforeRender(S, y, O, B), _ = Zt.get(y, E.length), _.init(O), E.push(_), Ct.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse), J.setFromProjectionMatrix(Ct), vt = this.localClippingEnabled, st = it.init(this.clippingPlanes, vt), g = mt.get(y, R.length), g.init(), R.push(g), X.enabled === !0 && X.isPresenting === !0) {
                    const nt = S.xr.getDepthSensingMesh();
                    nt !== null && js(nt, O, -1 / 0, S.sortObjects);
                }
                js(y, O, 0, S.sortObjects), g.finish(), S.sortObjects === !0 && g.sort(lt, pt), ge = X.enabled === !1 || X.isPresenting === !1 || X.hasDepthSensing() === !1, ge && Pt.addToRenderList(g, y), this.info.render.frame++, st === !0 && it.beginShadows();
                const V = _.state.shadowsArray;
                gt.render(V, y, O), st === !0 && it.endShadows(), this.info.autoReset === !0 && this.info.reset();
                const G = g.opaque, z = g.transmissive;
                if (_.setupLights(), O.isArrayCamera) {
                    const nt = O.cameras;
                    if (z.length > 0) for(let ct = 0, _t = nt.length; ct < _t; ct++){
                        const bt = nt[ct];
                        ac(G, z, y, bt);
                    }
                    ge && Pt.render(y);
                    for(let ct = 0, _t = nt.length; ct < _t; ct++){
                        const bt = nt[ct];
                        sc(g, y, bt, bt.viewport);
                    }
                } else z.length > 0 && ac(G, z, y, O), ge && Pt.render(y), sc(g, y, O);
                B !== null && I === 0 && (T.updateMultisampleRenderTarget(B), T.updateRenderTargetMipmap(B)), y.isScene === !0 && y.onAfterRender(S, y, O), ue.resetDefaultState(), M = -1, x = null, E.pop(), E.length > 0 ? (_ = E[E.length - 1], st === !0 && it.setGlobalState(S.clippingPlanes, _.state.camera)) : _ = null, R.pop(), R.length > 0 ? g = R[R.length - 1] : g = null;
            };
            function js(y, O, V, G) {
                if (y.visible === !1) return;
                if (y.layers.test(O.layers)) {
                    if (y.isGroup) V = y.renderOrder;
                    else if (y.isLOD) y.autoUpdate === !0 && y.update(O);
                    else if (y.isLight) _.pushLight(y), y.castShadow && _.pushShadow(y);
                    else if (y.isSprite) {
                        if (!y.frustumCulled || J.intersectsSprite(y)) {
                            G && It.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ct);
                            const ct = Z.update(y), _t = y.material;
                            _t.visible && g.push(y, ct, _t, V, It.z, null);
                        }
                    } else if ((y.isMesh || y.isLine || y.isPoints) && (!y.frustumCulled || J.intersectsObject(y))) {
                        const ct = Z.update(y), _t = y.material;
                        if (G && (y.boundingSphere !== void 0 ? (y.boundingSphere === null && y.computeBoundingSphere(), It.copy(y.boundingSphere.center)) : (ct.boundingSphere === null && ct.computeBoundingSphere(), It.copy(ct.boundingSphere.center)), It.applyMatrix4(y.matrixWorld).applyMatrix4(Ct)), Array.isArray(_t)) {
                            const bt = ct.groups;
                            for(let Lt = 0, Ut = bt.length; Lt < Ut; Lt++){
                                const Et = bt[Lt], Jt = _t[Et.materialIndex];
                                Jt && Jt.visible && g.push(y, ct, Jt, V, It.z, Et);
                            }
                        } else _t.visible && g.push(y, ct, _t, V, It.z, null);
                    }
                }
                const nt = y.children;
                for(let ct = 0, _t = nt.length; ct < _t; ct++)js(nt[ct], O, V, G);
            }
            function sc(y, O, V, G) {
                const z = y.opaque, nt = y.transmissive, ct = y.transparent;
                _.setupLightsView(V), st === !0 && it.setGlobalState(S.clippingPlanes, V), G && Mt.viewport(D.copy(G)), z.length > 0 && Ar(z, O, V), nt.length > 0 && Ar(nt, O, V), ct.length > 0 && Ar(ct, O, V), Mt.buffers.depth.setTest(!0), Mt.buffers.depth.setMask(!0), Mt.buffers.color.setMask(!0), Mt.setPolygonOffset(!1);
            }
            function ac(y, O, V, G) {
                if ((V.isScene === !0 ? V.overrideMaterial : null) !== null) return;
                _.state.transmissionRenderTarget[G.id] === void 0 && (_.state.transmissionRenderTarget[G.id] = new gi(1, 1, {
                    generateMipmaps: !0,
                    type: Xt.has("EXT_color_buffer_half_float") || Xt.has("EXT_color_buffer_float") ? Mr : Nn,
                    minFilter: pi,
                    samples: 4,
                    stencilBuffer: s,
                    resolveDepthBuffer: !1,
                    resolveStencilBuffer: !1,
                    colorSpace: te.workingColorSpace
                }));
                const nt = _.state.transmissionRenderTarget[G.id], ct = G.viewport || D;
                nt.setSize(ct.z * S.transmissionResolutionScale, ct.w * S.transmissionResolutionScale);
                const _t = S.getRenderTarget();
                S.setRenderTarget(nt), S.getClearColor(Y), tt = S.getClearAlpha(), tt < 1 && S.setClearColor(16777215, .5), S.clear(), ge && Pt.render(V);
                const bt = S.toneMapping;
                S.toneMapping = Kn;
                const Lt = G.viewport;
                if (G.viewport !== void 0 && (G.viewport = void 0), _.setupLightsView(G), st === !0 && it.setGlobalState(S.clippingPlanes, G), Ar(y, V, G), T.updateMultisampleRenderTarget(nt), T.updateRenderTargetMipmap(nt), Xt.has("WEBGL_multisampled_render_to_texture") === !1) {
                    let Ut = !1;
                    for(let Et = 0, Jt = O.length; Et < Jt; Et++){
                        const ie = O[Et], Se = ie.object, ve = ie.geometry, Qt = ie.material, Tt = ie.group;
                        if (Qt.side === Dn && Se.layers.test(G.layers)) {
                            const De = Qt.side;
                            Qt.side = We, Qt.needsUpdate = !0, oc(Se, V, G, ve, Qt, Tt), Qt.side = De, Qt.needsUpdate = !0, Ut = !0;
                        }
                    }
                    Ut === !0 && (T.updateMultisampleRenderTarget(nt), T.updateRenderTargetMipmap(nt));
                }
                S.setRenderTarget(_t), S.setClearColor(Y, tt), Lt !== void 0 && (G.viewport = Lt), S.toneMapping = bt;
            }
            function Ar(y, O, V) {
                const G = O.isScene === !0 ? O.overrideMaterial : null;
                for(let z = 0, nt = y.length; z < nt; z++){
                    const ct = y[z], _t = ct.object, bt = ct.geometry, Lt = G === null ? ct.material : G, Ut = ct.group;
                    _t.layers.test(V.layers) && oc(_t, O, V, bt, Lt, Ut);
                }
            }
            function oc(y, O, V, G, z, nt) {
                y.onBeforeRender(S, O, V, G, z, nt), y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, y.matrixWorld), y.normalMatrix.getNormalMatrix(y.modelViewMatrix), z.onBeforeRender(S, O, V, G, y, nt), z.transparent === !0 && z.side === Dn && z.forceSinglePass === !1 ? (z.side = We, z.needsUpdate = !0, S.renderBufferDirect(V, O, G, z, y, nt), z.side = Zn, z.needsUpdate = !0, S.renderBufferDirect(V, O, G, z, y, nt), z.side = Dn) : S.renderBufferDirect(V, O, G, z, y, nt), y.onAfterRender(S, O, V, G, z, nt);
            }
            function Cr(y, O, V) {
                O.isScene !== !0 && (O = ye);
                const G = xt.get(y), z = _.state.lights, nt = _.state.shadowsArray, ct = z.state.version, _t = yt.getParameters(y, z.state, nt, O, V), bt = yt.getProgramCacheKey(_t);
                let Lt = G.programs;
                G.environment = y.isMeshStandardMaterial ? O.environment : null, G.fog = O.fog, G.envMap = (y.isMeshStandardMaterial ? k : v).get(y.envMap || G.environment), G.envMapRotation = G.environment !== null && y.envMap === null ? O.environmentRotation : y.envMapRotation, Lt === void 0 && (y.addEventListener("dispose", Nt), Lt = new Map, G.programs = Lt);
                let Ut = Lt.get(bt);
                if (Ut !== void 0) {
                    if (G.currentProgram === Ut && G.lightsStateVersion === ct) return lc(y, _t), Ut;
                } else _t.uniforms = yt.getUniforms(y), y.onBeforeCompile(_t, S), Ut = yt.acquireProgram(_t, bt), Lt.set(bt, Ut), G.uniforms = _t.uniforms;
                const Et = G.uniforms;
                return (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (Et.clippingPlanes = it.uniform), lc(y, _t), G.needsLights = Sd(y), G.lightsStateVersion = ct, G.needsLights && (Et.ambientLightColor.value = z.state.ambient, Et.lightProbe.value = z.state.probe, Et.directionalLights.value = z.state.directional, Et.directionalLightShadows.value = z.state.directionalShadow, Et.spotLights.value = z.state.spot, Et.spotLightShadows.value = z.state.spotShadow, Et.rectAreaLights.value = z.state.rectArea, Et.ltc_1.value = z.state.rectAreaLTC1, Et.ltc_2.value = z.state.rectAreaLTC2, Et.pointLights.value = z.state.point, Et.pointLightShadows.value = z.state.pointShadow, Et.hemisphereLights.value = z.state.hemi, Et.directionalShadowMap.value = z.state.directionalShadowMap, Et.directionalShadowMatrix.value = z.state.directionalShadowMatrix, Et.spotShadowMap.value = z.state.spotShadowMap, Et.spotLightMatrix.value = z.state.spotLightMatrix, Et.spotLightMap.value = z.state.spotLightMap, Et.pointShadowMap.value = z.state.pointShadowMap, Et.pointShadowMatrix.value = z.state.pointShadowMatrix), G.currentProgram = Ut, G.uniformsList = null, Ut;
            }
            function cc(y) {
                if (y.uniformsList === null) {
                    const O = y.currentProgram.getUniforms();
                    y.uniformsList = _s.seqWithValue(O.seq, y.uniforms);
                }
                return y.uniformsList;
            }
            function lc(y, O) {
                const V = xt.get(y);
                V.outputColorSpace = O.outputColorSpace, V.batching = O.batching, V.batchingColor = O.batchingColor, V.instancing = O.instancing, V.instancingColor = O.instancingColor, V.instancingMorph = O.instancingMorph, V.skinning = O.skinning, V.morphTargets = O.morphTargets, V.morphNormals = O.morphNormals, V.morphColors = O.morphColors, V.morphTargetsCount = O.morphTargetsCount, V.numClippingPlanes = O.numClippingPlanes, V.numIntersection = O.numClipIntersection, V.vertexAlphas = O.vertexAlphas, V.vertexTangents = O.vertexTangents, V.toneMapping = O.toneMapping;
            }
            function yd(y, O, V, G, z) {
                O.isScene !== !0 && (O = ye), T.resetTextureUnits();
                const nt = O.fog, ct = G.isMeshStandardMaterial ? O.environment : null, _t = B === null ? S.outputColorSpace : B.isXRRenderTarget === !0 ? B.texture.colorSpace : Ji, bt = (G.isMeshStandardMaterial ? k : v).get(G.envMap || ct), Lt = G.vertexColors === !0 && !!V.attributes.color && V.attributes.color.itemSize === 4, Ut = !!V.attributes.tangent && (!!G.normalMap || G.anisotropy > 0), Et = !!V.morphAttributes.position, Jt = !!V.morphAttributes.normal, ie = !!V.morphAttributes.color;
                let Se = Kn;
                G.toneMapped && (B === null || B.isXRRenderTarget === !0) && (Se = S.toneMapping);
                const ve = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, Qt = ve !== void 0 ? ve.length : 0, Tt = xt.get(G), De = _.state.lights;
                if (st === !0 && (vt === !0 || y !== x)) {
                    const ze = y === x && G.id === M;
                    it.setState(G, y, ze);
                }
                let re = !1;
                G.version === Tt.__version ? (Tt.needsLights && Tt.lightsStateVersion !== De.state.version || Tt.outputColorSpace !== _t || z.isBatchedMesh && Tt.batching === !1 || !z.isBatchedMesh && Tt.batching === !0 || z.isBatchedMesh && Tt.batchingColor === !0 && z.colorTexture === null || z.isBatchedMesh && Tt.batchingColor === !1 && z.colorTexture !== null || z.isInstancedMesh && Tt.instancing === !1 || !z.isInstancedMesh && Tt.instancing === !0 || z.isSkinnedMesh && Tt.skinning === !1 || !z.isSkinnedMesh && Tt.skinning === !0 || z.isInstancedMesh && Tt.instancingColor === !0 && z.instanceColor === null || z.isInstancedMesh && Tt.instancingColor === !1 && z.instanceColor !== null || z.isInstancedMesh && Tt.instancingMorph === !0 && z.morphTexture === null || z.isInstancedMesh && Tt.instancingMorph === !1 && z.morphTexture !== null || Tt.envMap !== bt || G.fog === !0 && Tt.fog !== nt || Tt.numClippingPlanes !== void 0 && (Tt.numClippingPlanes !== it.numPlanes || Tt.numIntersection !== it.numIntersection) || Tt.vertexAlphas !== Lt || Tt.vertexTangents !== Ut || Tt.morphTargets !== Et || Tt.morphNormals !== Jt || Tt.morphColors !== ie || Tt.toneMapping !== Se || Tt.morphTargetsCount !== Qt) && (re = !0) : (re = !0, Tt.__version = G.version);
                let on = Tt.currentProgram;
                re === !0 && (on = Cr(G, O, z));
                let Si = !1, je = !1, rr = !1;
                const pe = on.getUniforms(), $e = Tt.uniforms;
                if (Mt.useProgram(on.program) && (Si = !0, je = !0, rr = !0), G.id !== M && (M = G.id, je = !0), Si || x !== y) {
                    Mt.buffers.depth.getReversed() ? (ht.copy(y.projectionMatrix), Uu(ht), Nu(ht), pe.setValue(P, "projectionMatrix", ht)) : pe.setValue(P, "projectionMatrix", y.projectionMatrix), pe.setValue(P, "viewMatrix", y.matrixWorldInverse);
                    const Ge = pe.map.cameraPosition;
                    Ge !== void 0 && Ge.setValue(P, ee.setFromMatrixPosition(y.matrixWorld)), qt.logarithmicDepthBuffer && pe.setValue(P, "logDepthBufFC", 2 / (Math.log(y.far + 1) / Math.LN2)), (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) && pe.setValue(P, "isOrthographic", y.isOrthographicCamera === !0), x !== y && (x = y, je = !0, rr = !0);
                }
                if (z.isSkinnedMesh) {
                    pe.setOptional(P, z, "bindMatrix"), pe.setOptional(P, z, "bindMatrixInverse");
                    const ze = z.skeleton;
                    ze && (ze.boneTexture === null && ze.computeBoneTexture(), pe.setValue(P, "boneTexture", ze.boneTexture, T));
                }
                z.isBatchedMesh && (pe.setOptional(P, z, "batchingTexture"), pe.setValue(P, "batchingTexture", z._matricesTexture, T), pe.setOptional(P, z, "batchingIdTexture"), pe.setValue(P, "batchingIdTexture", z._indirectTexture, T), pe.setOptional(P, z, "batchingColorTexture"), z._colorsTexture !== null && pe.setValue(P, "batchingColorTexture", z._colorsTexture, T));
                const Qe = V.morphAttributes;
                if ((Qe.position !== void 0 || Qe.normal !== void 0 || Qe.color !== void 0) && Dt.update(z, V, on), (je || Tt.receiveShadow !== z.receiveShadow) && (Tt.receiveShadow = z.receiveShadow, pe.setValue(P, "receiveShadow", z.receiveShadow)), G.isMeshGouraudMaterial && G.envMap !== null && ($e.envMap.value = bt, $e.flipEnvMap.value = bt.isCubeTexture && bt.isRenderTargetTexture === !1 ? -1 : 1), G.isMeshStandardMaterial && G.envMap === null && O.environment !== null && ($e.envMapIntensity.value = O.environmentIntensity), je && (pe.setValue(P, "toneMappingExposure", S.toneMappingExposure), Tt.needsLights && xd($e, rr), nt && G.fog === !0 && dt.refreshFogUniforms($e, nt), dt.refreshMaterialUniforms($e, G, q, rt, _.state.transmissionRenderTarget[y.id]), _s.upload(P, cc(Tt), $e, T)), G.isShaderMaterial && G.uniformsNeedUpdate === !0 && (_s.upload(P, cc(Tt), $e, T), G.uniformsNeedUpdate = !1), G.isSpriteMaterial && pe.setValue(P, "center", z.center), pe.setValue(P, "modelViewMatrix", z.modelViewMatrix), pe.setValue(P, "normalMatrix", z.normalMatrix), pe.setValue(P, "modelMatrix", z.matrixWorld), G.isShaderMaterial || G.isRawShaderMaterial) {
                    const ze = G.uniformsGroups;
                    for(let Ge = 0, Xs = ze.length; Ge < Xs; Ge++){
                        const ei = ze[Ge];
                        F.update(ei, on), F.bind(ei, on);
                    }
                }
                return on;
            }
            function xd(y, O) {
                y.ambientLightColor.needsUpdate = O, y.lightProbe.needsUpdate = O, y.directionalLights.needsUpdate = O, y.directionalLightShadows.needsUpdate = O, y.pointLights.needsUpdate = O, y.pointLightShadows.needsUpdate = O, y.spotLights.needsUpdate = O, y.spotLightShadows.needsUpdate = O, y.rectAreaLights.needsUpdate = O, y.hemisphereLights.needsUpdate = O;
            }
            function Sd(y) {
                return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0;
            }
            this.getActiveCubeFace = function() {
                return C;
            }, this.getActiveMipmapLevel = function() {
                return I;
            }, this.getRenderTarget = function() {
                return B;
            }, this.setRenderTargetTextures = function(y, O, V) {
                xt.get(y.texture).__webglTexture = O, xt.get(y.depthTexture).__webglTexture = V;
                const G = xt.get(y);
                G.__hasExternalTextures = !0, G.__autoAllocateDepthBuffer = V === void 0, G.__autoAllocateDepthBuffer || Xt.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), G.__useRenderToTexture = !1);
            }, this.setRenderTargetFramebuffer = function(y, O) {
                const V = xt.get(y);
                V.__webglFramebuffer = O, V.__useDefaultFramebuffer = O === void 0;
            };
            const Md = P.createFramebuffer();
            this.setRenderTarget = function(y, O = 0, V = 0) {
                B = y, C = O, I = V;
                let G = !0, z = null, nt = !1, ct = !1;
                if (y) {
                    const bt = xt.get(y);
                    if (bt.__useDefaultFramebuffer !== void 0) Mt.bindFramebuffer(P.FRAMEBUFFER, null), G = !1;
                    else if (bt.__webglFramebuffer === void 0) T.setupRenderTarget(y);
                    else if (bt.__hasExternalTextures) T.rebindTextures(y, xt.get(y.texture).__webglTexture, xt.get(y.depthTexture).__webglTexture);
                    else if (y.depthBuffer) {
                        const Et = y.depthTexture;
                        if (bt.__boundDepthTexture !== Et) {
                            if (Et !== null && xt.has(Et) && (y.width !== Et.image.width || y.height !== Et.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                            T.setupDepthRenderbuffer(y);
                        }
                    }
                    const Lt = y.texture;
                    (Lt.isData3DTexture || Lt.isDataArrayTexture || Lt.isCompressedArrayTexture) && (ct = !0);
                    const Ut = xt.get(y).__webglFramebuffer;
                    y.isWebGLCubeRenderTarget ? (Array.isArray(Ut[O]) ? z = Ut[O][V] : z = Ut[O], nt = !0) : y.samples > 0 && T.useMultisampledRTT(y) === !1 ? z = xt.get(y).__webglMultisampledFramebuffer : Array.isArray(Ut) ? z = Ut[V] : z = Ut, D.copy(y.viewport), j.copy(y.scissor), W = y.scissorTest;
                } else D.copy(St).multiplyScalar(q).floor(), j.copy(Vt).multiplyScalar(q).floor(), W = he;
                if (V !== 0 && (z = Md), Mt.bindFramebuffer(P.FRAMEBUFFER, z) && G && Mt.drawBuffers(y, z), Mt.viewport(D), Mt.scissor(j), Mt.setScissorTest(W), nt) {
                    const bt = xt.get(y.texture);
                    P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_CUBE_MAP_POSITIVE_X + O, bt.__webglTexture, V);
                } else if (ct) {
                    const bt = xt.get(y.texture), Lt = O;
                    P.framebufferTextureLayer(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, bt.__webglTexture, V, Lt);
                } else if (y !== null && V !== 0) {
                    const bt = xt.get(y.texture);
                    P.framebufferTexture2D(P.FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, bt.__webglTexture, V);
                }
                M = -1;
            }, this.readRenderTargetPixels = function(y, O, V, G, z, nt, ct) {
                if (!(y && y.isWebGLRenderTarget)) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                    return;
                }
                let _t = xt.get(y).__webglFramebuffer;
                if (y.isWebGLCubeRenderTarget && ct !== void 0 && (_t = _t[ct]), _t) {
                    Mt.bindFramebuffer(P.FRAMEBUFFER, _t);
                    try {
                        const bt = y.texture, Lt = bt.format, Ut = bt.type;
                        if (!qt.textureFormatReadable(Lt)) {
                            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                            return;
                        }
                        if (!qt.textureTypeReadable(Ut)) {
                            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                            return;
                        }
                        O >= 0 && O <= y.width - G && V >= 0 && V <= y.height - z && P.readPixels(O, V, G, z, Ot.convert(Lt), Ot.convert(Ut), nt);
                    } finally{
                        const bt = B !== null ? xt.get(B).__webglFramebuffer : null;
                        Mt.bindFramebuffer(P.FRAMEBUFFER, bt);
                    }
                }
            }, this.readRenderTargetPixelsAsync = async function(y, O, V, G, z, nt, ct) {
                if (!(y && y.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                let _t = xt.get(y).__webglFramebuffer;
                if (y.isWebGLCubeRenderTarget && ct !== void 0 && (_t = _t[ct]), _t) {
                    const bt = y.texture, Lt = bt.format, Ut = bt.type;
                    if (!qt.textureFormatReadable(Lt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
                    if (!qt.textureTypeReadable(Ut)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
                    if (O >= 0 && O <= y.width - G && V >= 0 && V <= y.height - z) {
                        Mt.bindFramebuffer(P.FRAMEBUFFER, _t);
                        const Et = P.createBuffer();
                        P.bindBuffer(P.PIXEL_PACK_BUFFER, Et), P.bufferData(P.PIXEL_PACK_BUFFER, nt.byteLength, P.STREAM_READ), P.readPixels(O, V, G, z, Ot.convert(Lt), Ot.convert(Ut), 0);
                        const Jt = B !== null ? xt.get(B).__webglFramebuffer : null;
                        Mt.bindFramebuffer(P.FRAMEBUFFER, Jt);
                        const ie = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
                        return P.flush(), await Lu(P, ie, 4), P.bindBuffer(P.PIXEL_PACK_BUFFER, Et), P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, nt), P.deleteBuffer(Et), P.deleteSync(ie), nt;
                    } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
                }
            }, this.copyFramebufferToTexture = function(y, O = null, V = 0) {
                y.isTexture !== !0 && (li("WebGLRenderer: copyFramebufferToTexture function signature has changed."), O = arguments[0] || null, y = arguments[1]);
                const G = Math.pow(2, -V), z = Math.floor(y.image.width * G), nt = Math.floor(y.image.height * G), ct = O !== null ? O.x : 0, _t = O !== null ? O.y : 0;
                T.setTexture2D(y, 0), P.copyTexSubImage2D(P.TEXTURE_2D, V, 0, 0, ct, _t, z, nt), Mt.unbindTexture();
            };
            const Ed = P.createFramebuffer(), Td = P.createFramebuffer();
            this.copyTextureToTexture = function(y, O, V = null, G = null, z = 0, nt = null) {
                y.isTexture !== !0 && (li("WebGLRenderer: copyTextureToTexture function signature has changed."), G = arguments[0] || null, y = arguments[1], O = arguments[2], nt = arguments[3] || 0, V = null), nt === null && (z !== 0 ? (li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), nt = z, z = 0) : nt = 0);
                let ct, _t, bt, Lt, Ut, Et, Jt, ie, Se;
                const ve = y.isCompressedTexture ? y.mipmaps[nt] : y.image;
                if (V !== null) ct = V.max.x - V.min.x, _t = V.max.y - V.min.y, bt = V.isBox3 ? V.max.z - V.min.z : 1, Lt = V.min.x, Ut = V.min.y, Et = V.isBox3 ? V.min.z : 0;
                else {
                    const Qe = Math.pow(2, -z);
                    ct = Math.floor(ve.width * Qe), _t = Math.floor(ve.height * Qe), y.isDataArrayTexture ? bt = ve.depth : y.isData3DTexture ? bt = Math.floor(ve.depth * Qe) : bt = 1, Lt = 0, Ut = 0, Et = 0;
                }
                G !== null ? (Jt = G.x, ie = G.y, Se = G.z) : (Jt = 0, ie = 0, Se = 0);
                const Qt = Ot.convert(O.format), Tt = Ot.convert(O.type);
                let De;
                O.isData3DTexture ? (T.setTexture3D(O, 0), De = P.TEXTURE_3D) : O.isDataArrayTexture || O.isCompressedArrayTexture ? (T.setTexture2DArray(O, 0), De = P.TEXTURE_2D_ARRAY) : (T.setTexture2D(O, 0), De = P.TEXTURE_2D), P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, O.flipY), P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), P.pixelStorei(P.UNPACK_ALIGNMENT, O.unpackAlignment);
                const re = P.getParameter(P.UNPACK_ROW_LENGTH), on = P.getParameter(P.UNPACK_IMAGE_HEIGHT), Si = P.getParameter(P.UNPACK_SKIP_PIXELS), je = P.getParameter(P.UNPACK_SKIP_ROWS), rr = P.getParameter(P.UNPACK_SKIP_IMAGES);
                P.pixelStorei(P.UNPACK_ROW_LENGTH, ve.width), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, ve.height), P.pixelStorei(P.UNPACK_SKIP_PIXELS, Lt), P.pixelStorei(P.UNPACK_SKIP_ROWS, Ut), P.pixelStorei(P.UNPACK_SKIP_IMAGES, Et);
                const pe = y.isDataArrayTexture || y.isData3DTexture, $e = O.isDataArrayTexture || O.isData3DTexture;
                if (y.isDepthTexture) {
                    const Qe = xt.get(y), ze = xt.get(O), Ge = xt.get(Qe.__renderTarget), Xs = xt.get(ze.__renderTarget);
                    Mt.bindFramebuffer(P.READ_FRAMEBUFFER, Ge.__webglFramebuffer), Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER, Xs.__webglFramebuffer);
                    for(let ei = 0; ei < bt; ei++)pe && (P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, xt.get(y).__webglTexture, z, Et + ei), P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, xt.get(O).__webglTexture, nt, Se + ei)), P.blitFramebuffer(Lt, Ut, ct, _t, Jt, ie, ct, _t, P.DEPTH_BUFFER_BIT, P.NEAREST);
                    Mt.bindFramebuffer(P.READ_FRAMEBUFFER, null), Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
                } else if (z !== 0 || y.isRenderTargetTexture || xt.has(y)) {
                    const Qe = xt.get(y), ze = xt.get(O);
                    Mt.bindFramebuffer(P.READ_FRAMEBUFFER, Ed), Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER, Td);
                    for(let Ge = 0; Ge < bt; Ge++)pe ? P.framebufferTextureLayer(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, Qe.__webglTexture, z, Et + Ge) : P.framebufferTexture2D(P.READ_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, Qe.__webglTexture, z), $e ? P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, ze.__webglTexture, nt, Se + Ge) : P.framebufferTexture2D(P.DRAW_FRAMEBUFFER, P.COLOR_ATTACHMENT0, P.TEXTURE_2D, ze.__webglTexture, nt), z !== 0 ? P.blitFramebuffer(Lt, Ut, ct, _t, Jt, ie, ct, _t, P.COLOR_BUFFER_BIT, P.NEAREST) : $e ? P.copyTexSubImage3D(De, nt, Jt, ie, Se + Ge, Lt, Ut, ct, _t) : P.copyTexSubImage2D(De, nt, Jt, ie, Lt, Ut, ct, _t);
                    Mt.bindFramebuffer(P.READ_FRAMEBUFFER, null), Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER, null);
                } else $e ? y.isDataTexture || y.isData3DTexture ? P.texSubImage3D(De, nt, Jt, ie, Se, ct, _t, bt, Qt, Tt, ve.data) : O.isCompressedArrayTexture ? P.compressedTexSubImage3D(De, nt, Jt, ie, Se, ct, _t, bt, Qt, ve.data) : P.texSubImage3D(De, nt, Jt, ie, Se, ct, _t, bt, Qt, Tt, ve) : y.isDataTexture ? P.texSubImage2D(P.TEXTURE_2D, nt, Jt, ie, ct, _t, Qt, Tt, ve.data) : y.isCompressedTexture ? P.compressedTexSubImage2D(P.TEXTURE_2D, nt, Jt, ie, ve.width, ve.height, Qt, ve.data) : P.texSubImage2D(P.TEXTURE_2D, nt, Jt, ie, ct, _t, Qt, Tt, ve);
                P.pixelStorei(P.UNPACK_ROW_LENGTH, re), P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, on), P.pixelStorei(P.UNPACK_SKIP_PIXELS, Si), P.pixelStorei(P.UNPACK_SKIP_ROWS, je), P.pixelStorei(P.UNPACK_SKIP_IMAGES, rr), nt === 0 && O.generateMipmaps && P.generateMipmap(De), Mt.unbindTexture();
            }, this.copyTextureToTexture3D = function(y, O, V = null, G = null, z = 0) {
                return y.isTexture !== !0 && (li("WebGLRenderer: copyTextureToTexture3D function signature has changed."), V = arguments[0] || null, G = arguments[1] || null, y = arguments[2], O = arguments[3], z = arguments[4] || 0), li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(y, O, V, G, z);
            }, this.initRenderTarget = function(y) {
                xt.get(y).__webglFramebuffer === void 0 && T.setupRenderTarget(y);
            }, this.initTexture = function(y) {
                y.isCubeTexture ? T.setTextureCube(y, 0) : y.isData3DTexture ? T.setTexture3D(y, 0) : y.isDataArrayTexture || y.isCompressedArrayTexture ? T.setTexture2DArray(y, 0) : T.setTexture2D(y, 0), Mt.unbindTexture();
            }, this.resetState = function() {
                C = 0, I = 0, B = null, Mt.reset(), ue.reset();
            }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        get coordinateSystem() {
            return Ln;
        }
        get outputColorSpace() {
            return this._outputColorSpace;
        }
        set outputColorSpace(t) {
            this._outputColorSpace = t;
            const e = this.getContext();
            e.drawingBufferColorspace = te._getDrawingBufferColorSpace(t), e.unpackColorSpace = te._getUnpackColorSpace();
        }
    };
    const Ew = "/Simulador-de-estacionamento/assets/rapier_wasm3d_bg-C9SRa0kS.wasm", Tw = async (i = {}, t)=>{
        let e;
        if (t.startsWith("data:")) {
            const n = t.replace(/^data:.*?base64,/, "");
            let r;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(n, "base64");
            else if (typeof atob == "function") {
                const s = atob(n);
                r = new Uint8Array(s.length);
                for(let a = 0; a < s.length; a++)r[a] = s.charCodeAt(a);
            } else throw new Error("Cannot decode base64-encoded data URL");
            e = await WebAssembly.instantiate(r, i);
        } else {
            const n = await fetch(t), r = n.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(n, i);
            else {
                const s = await n.arrayBuffer();
                e = await WebAssembly.instantiate(s, i);
            }
        }
        return e.instance.exports;
    };
    let d;
    function Rw(i) {
        d = i;
    }
    const Kt = new Array(128).fill(void 0);
    Kt.push(void 0, null, !0, !1);
    function se(i) {
        return Kt[i];
    }
    let gr = Kt.length;
    function Ee(i) {
        gr === Kt.length && Kt.push(Kt.length + 1);
        const t = gr;
        return gr = Kt[t], Kt[t] = i, t;
    }
    function Yo(i, t) {
        try {
            return i.apply(this, t);
        } catch (e) {
            d.__wbindgen_export_0(Ee(e));
        }
    }
    function At(i) {
        return i == null;
    }
    let zi = null;
    function Oe() {
        return (zi === null || zi.buffer.detached === !0 || zi.buffer.detached === void 0 && zi.buffer !== d.memory.buffer) && (zi = new DataView(d.memory.buffer)), zi;
    }
    function Aw(i) {
        i < 132 || (Kt[i] = gr, gr = i);
    }
    function vr(i) {
        const t = se(i);
        return Aw(i), t;
    }
    const Cw = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    let td = new Cw("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    td.decode();
    let ss = null;
    function Pw() {
        return (ss === null || ss.byteLength === 0) && (ss = new Uint8Array(d.memory.buffer)), ss;
    }
    function Iw(i, t) {
        return i = i >>> 0, td.decode(Pw().subarray(i, i + t));
    }
    function A(i, t) {
        if (!(i instanceof t)) throw new Error(`expected instance of ${t.name}`);
    }
    let de = 128;
    function me(i) {
        if (de == 1) throw new Error("out of js stack");
        return Kt[--de] = i, de;
    }
    let as = null;
    function ed() {
        return (as === null || as.byteLength === 0) && (as = new Float32Array(d.memory.buffer)), as;
    }
    function Al(i, t) {
        return i = i >>> 0, ed().subarray(i / 4, i / 4 + t);
    }
    let os = null;
    function nd() {
        return (os === null || os.byteLength === 0) && (os = new Uint32Array(d.memory.buffer)), os;
    }
    function Dw(i, t) {
        return i = i >>> 0, nd().subarray(i / 4, i / 4 + t);
    }
    let Ye = 0;
    function ci(i, t) {
        const e = t(i.length * 4, 4) >>> 0;
        return ed().set(i, e / 4), Ye = i.length, e;
    }
    function cs(i, t) {
        const e = t(i.length * 4, 4) >>> 0;
        return nd().set(i, e / 4), Ye = i.length, e;
    }
    const Ns = Object.freeze({
        LinX: 0,
        0: "LinX",
        LinY: 1,
        1: "LinY",
        LinZ: 2,
        2: "LinZ",
        AngX: 3,
        3: "AngX",
        AngY: 4,
        4: "AngY",
        AngZ: 5,
        5: "AngZ"
    }), un = Object.freeze({
        Revolute: 0,
        0: "Revolute",
        Fixed: 1,
        1: "Fixed",
        Prismatic: 2,
        2: "Prismatic",
        Rope: 3,
        3: "Rope",
        Spring: 4,
        4: "Spring",
        Spherical: 5,
        5: "Spherical",
        Generic: 6,
        6: "Generic"
    }), Le = Object.freeze({
        Ball: 0,
        0: "Ball",
        Cuboid: 1,
        1: "Cuboid",
        Capsule: 2,
        2: "Capsule",
        Segment: 3,
        3: "Segment",
        Polyline: 4,
        4: "Polyline",
        Triangle: 5,
        5: "Triangle",
        TriMesh: 6,
        6: "TriMesh",
        HeightField: 7,
        7: "HeightField",
        Compound: 8,
        8: "Compound",
        ConvexPolyhedron: 9,
        9: "ConvexPolyhedron",
        Cylinder: 10,
        10: "Cylinder",
        Cone: 11,
        11: "Cone",
        RoundCuboid: 12,
        12: "RoundCuboid",
        RoundTriangle: 13,
        13: "RoundTriangle",
        RoundCylinder: 14,
        14: "RoundCylinder",
        RoundCone: 15,
        15: "RoundCone",
        RoundConvexPolyhedron: 16,
        16: "RoundConvexPolyhedron",
        HalfSpace: 17,
        17: "HalfSpace"
    }), Ra = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawbroadphase_free(i >>> 0, 1));
    class wi {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(wi.prototype);
            return e.__wbg_ptr = t, Ra.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ra.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawbroadphase_free(t, 0);
        }
        constructor(){
            const t = d.rawbroadphase_new();
            return this.__wbg_ptr = t >>> 0, Ra.register(this, this.__wbg_ptr, this), this;
        }
    }
    const Cl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawccdsolver_free(i >>> 0, 1));
    class Ro {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Cl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawccdsolver_free(t, 0);
        }
        constructor(){
            const t = d.rawccdsolver_new();
            return this.__wbg_ptr = t >>> 0, Cl.register(this, this.__wbg_ptr, this), this;
        }
    }
    const Pl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawcharactercollision_free(i >>> 0, 1));
    class id {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Pl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawcharactercollision_free(t, 0);
        }
        constructor(){
            const t = d.rawcharactercollision_new();
            return this.__wbg_ptr = t >>> 0, Pl.register(this, this.__wbg_ptr, this), this;
        }
        handle() {
            return d.rawcharactercollision_handle(this.__wbg_ptr);
        }
        translationDeltaApplied() {
            const t = d.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
            return L.__wrap(t);
        }
        translationDeltaRemaining() {
            const t = d.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
            return L.__wrap(t);
        }
        toi() {
            return d.rawcharactercollision_toi(this.__wbg_ptr);
        }
        worldWitness1() {
            const t = d.rawcharactercollision_worldWitness1(this.__wbg_ptr);
            return L.__wrap(t);
        }
        worldWitness2() {
            const t = d.rawcharactercollision_worldWitness2(this.__wbg_ptr);
            return L.__wrap(t);
        }
        worldNormal1() {
            const t = d.rawcharactercollision_worldNormal1(this.__wbg_ptr);
            return L.__wrap(t);
        }
        worldNormal2() {
            const t = d.rawcharactercollision_worldNormal2(this.__wbg_ptr);
            return L.__wrap(t);
        }
    }
    const Aa = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawcolliderset_free(i >>> 0, 1));
    class we {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(we.prototype);
            return e.__wbg_ptr = t, Aa.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Aa.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawcolliderset_free(t, 0);
        }
        coTranslation(t) {
            const e = d.rawcolliderset_coTranslation(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        coRotation(t) {
            const e = d.rawcolliderset_coRotation(this.__wbg_ptr, t);
            return zt.__wrap(e);
        }
        coSetTranslation(t, e, n, r) {
            d.rawcolliderset_coSetTranslation(this.__wbg_ptr, t, e, n, r);
        }
        coSetTranslationWrtParent(t, e, n, r) {
            d.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, t, e, n, r);
        }
        coSetRotation(t, e, n, r, s) {
            d.rawcolliderset_coSetRotation(this.__wbg_ptr, t, e, n, r, s);
        }
        coSetRotationWrtParent(t, e, n, r, s) {
            d.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, t, e, n, r, s);
        }
        coIsSensor(t) {
            return d.rawcolliderset_coIsSensor(this.__wbg_ptr, t) !== 0;
        }
        coShapeType(t) {
            return d.rawcolliderset_coShapeType(this.__wbg_ptr, t);
        }
        coHalfspaceNormal(t) {
            const e = d.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        coHalfExtents(t) {
            const e = d.rawcolliderset_coHalfExtents(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        coSetHalfExtents(t, e) {
            A(e, L), d.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, t, e.__wbg_ptr);
        }
        coRadius(t) {
            const e = d.rawcolliderset_coRadius(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        coSetRadius(t, e) {
            d.rawcolliderset_coSetRadius(this.__wbg_ptr, t, e);
        }
        coHalfHeight(t) {
            const e = d.rawcolliderset_coHalfHeight(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        coSetHalfHeight(t, e) {
            d.rawcolliderset_coSetHalfHeight(this.__wbg_ptr, t, e);
        }
        coRoundRadius(t) {
            const e = d.rawcolliderset_coRoundRadius(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        coSetRoundRadius(t, e) {
            d.rawcolliderset_coSetRoundRadius(this.__wbg_ptr, t, e);
        }
        coVertices(t) {
            try {
                const r = d.__wbindgen_add_to_stack_pointer(-16);
                d.rawcolliderset_coVertices(r, this.__wbg_ptr, t);
                var e = Oe().getInt32(r + 4 * 0, !0), n = Oe().getInt32(r + 4 * 1, !0);
                let s;
                return e !== 0 && (s = Al(e, n).slice(), d.__wbindgen_export_1(e, n * 4, 4)), s;
            } finally{
                d.__wbindgen_add_to_stack_pointer(16);
            }
        }
        coIndices(t) {
            try {
                const r = d.__wbindgen_add_to_stack_pointer(-16);
                d.rawcolliderset_coIndices(r, this.__wbg_ptr, t);
                var e = Oe().getInt32(r + 4 * 0, !0), n = Oe().getInt32(r + 4 * 1, !0);
                let s;
                return e !== 0 && (s = Dw(e, n).slice(), d.__wbindgen_export_1(e, n * 4, 4)), s;
            } finally{
                d.__wbindgen_add_to_stack_pointer(16);
            }
        }
        coTriMeshFlags(t) {
            const e = d.rawcolliderset_coTriMeshFlags(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        coHeightFieldFlags(t) {
            const e = d.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        coHeightfieldHeights(t) {
            try {
                const r = d.__wbindgen_add_to_stack_pointer(-16);
                d.rawcolliderset_coHeightfieldHeights(r, this.__wbg_ptr, t);
                var e = Oe().getInt32(r + 4 * 0, !0), n = Oe().getInt32(r + 4 * 1, !0);
                let s;
                return e !== 0 && (s = Al(e, n).slice(), d.__wbindgen_export_1(e, n * 4, 4)), s;
            } finally{
                d.__wbindgen_add_to_stack_pointer(16);
            }
        }
        coHeightfieldScale(t) {
            const e = d.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        coHeightfieldNRows(t) {
            const e = d.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        coHeightfieldNCols(t) {
            const e = d.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        coParent(t) {
            try {
                const r = d.__wbindgen_add_to_stack_pointer(-16);
                d.rawcolliderset_coParent(r, this.__wbg_ptr, t);
                var e = Oe().getInt32(r + 4 * 0, !0), n = Oe().getFloat64(r + 8 * 1, !0);
                return e === 0 ? void 0 : n;
            } finally{
                d.__wbindgen_add_to_stack_pointer(16);
            }
        }
        coSetEnabled(t, e) {
            d.rawcolliderset_coSetEnabled(this.__wbg_ptr, t, e);
        }
        coIsEnabled(t) {
            return d.rawcolliderset_coIsEnabled(this.__wbg_ptr, t) !== 0;
        }
        coSetContactSkin(t, e) {
            d.rawcolliderset_coSetContactSkin(this.__wbg_ptr, t, e);
        }
        coContactSkin(t) {
            return d.rawcolliderset_coContactSkin(this.__wbg_ptr, t);
        }
        coFriction(t) {
            return d.rawcolliderset_coFriction(this.__wbg_ptr, t);
        }
        coRestitution(t) {
            return d.rawcolliderset_coRestitution(this.__wbg_ptr, t);
        }
        coDensity(t) {
            return d.rawcolliderset_coDensity(this.__wbg_ptr, t);
        }
        coMass(t) {
            return d.rawcolliderset_coMass(this.__wbg_ptr, t);
        }
        coVolume(t) {
            return d.rawcolliderset_coVolume(this.__wbg_ptr, t);
        }
        coCollisionGroups(t) {
            return d.rawcolliderset_coCollisionGroups(this.__wbg_ptr, t) >>> 0;
        }
        coSolverGroups(t) {
            return d.rawcolliderset_coSolverGroups(this.__wbg_ptr, t) >>> 0;
        }
        coActiveHooks(t) {
            return d.rawcolliderset_coActiveHooks(this.__wbg_ptr, t) >>> 0;
        }
        coActiveCollisionTypes(t) {
            return d.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr, t);
        }
        coActiveEvents(t) {
            return d.rawcolliderset_coActiveEvents(this.__wbg_ptr, t) >>> 0;
        }
        coContactForceEventThreshold(t) {
            return d.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr, t);
        }
        coContainsPoint(t, e) {
            return A(e, L), d.rawcolliderset_coContainsPoint(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
        }
        coCastShape(t, e, n, r, s, a, o, c, l) {
            A(e, L), A(n, Rt), A(r, L), A(s, zt), A(a, L);
            const h = d.rawcolliderset_coCastShape(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr, a.__wbg_ptr, o, c, l);
            return h === 0 ? void 0 : Hs.__wrap(h);
        }
        coCastCollider(t, e, n, r, s, a, o) {
            A(e, L), A(r, L);
            const c = d.rawcolliderset_coCastCollider(this.__wbg_ptr, t, e.__wbg_ptr, n, r.__wbg_ptr, s, a, o);
            return c === 0 ? void 0 : Fs.__wrap(c);
        }
        coIntersectsShape(t, e, n, r) {
            return A(e, Rt), A(n, L), A(r, zt), d.rawcolliderset_coIntersectsShape(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr) !== 0;
        }
        coContactShape(t, e, n, r, s) {
            A(e, Rt), A(n, L), A(r, zt);
            const a = d.rawcolliderset_coContactShape(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s);
            return a === 0 ? void 0 : yr.__wrap(a);
        }
        coContactCollider(t, e, n) {
            const r = d.rawcolliderset_coContactCollider(this.__wbg_ptr, t, e, n);
            return r === 0 ? void 0 : yr.__wrap(r);
        }
        coProjectPoint(t, e, n) {
            A(e, L);
            const r = d.rawcolliderset_coProjectPoint(this.__wbg_ptr, t, e.__wbg_ptr, n);
            return Os.__wrap(r);
        }
        coIntersectsRay(t, e, n, r) {
            return A(e, L), A(n, L), d.rawcolliderset_coIntersectsRay(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r) !== 0;
        }
        coCastRay(t, e, n, r, s) {
            return A(e, L), A(n, L), d.rawcolliderset_coCastRay(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r, s);
        }
        coCastRayAndGetNormal(t, e, n, r, s) {
            A(e, L), A(n, L);
            const a = d.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r, s);
            return a === 0 ? void 0 : zs.__wrap(a);
        }
        coSetSensor(t, e) {
            d.rawcolliderset_coSetSensor(this.__wbg_ptr, t, e);
        }
        coSetRestitution(t, e) {
            d.rawcolliderset_coSetRestitution(this.__wbg_ptr, t, e);
        }
        coSetFriction(t, e) {
            d.rawcolliderset_coSetFriction(this.__wbg_ptr, t, e);
        }
        coFrictionCombineRule(t) {
            return d.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr, t) >>> 0;
        }
        coSetFrictionCombineRule(t, e) {
            d.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr, t, e);
        }
        coRestitutionCombineRule(t) {
            return d.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, t) >>> 0;
        }
        coSetRestitutionCombineRule(t, e) {
            d.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr, t, e);
        }
        coSetCollisionGroups(t, e) {
            d.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr, t, e);
        }
        coSetSolverGroups(t, e) {
            d.rawcolliderset_coSetSolverGroups(this.__wbg_ptr, t, e);
        }
        coSetActiveHooks(t, e) {
            d.rawcolliderset_coSetActiveHooks(this.__wbg_ptr, t, e);
        }
        coSetActiveEvents(t, e) {
            d.rawcolliderset_coSetActiveEvents(this.__wbg_ptr, t, e);
        }
        coSetActiveCollisionTypes(t, e) {
            d.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr, t, e);
        }
        coSetShape(t, e) {
            A(e, Rt), d.rawcolliderset_coSetShape(this.__wbg_ptr, t, e.__wbg_ptr);
        }
        coSetContactForceEventThreshold(t, e) {
            d.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr, t, e);
        }
        coSetDensity(t, e) {
            d.rawcolliderset_coSetDensity(this.__wbg_ptr, t, e);
        }
        coSetMass(t, e) {
            d.rawcolliderset_coSetMass(this.__wbg_ptr, t, e);
        }
        coSetMassProperties(t, e, n, r, s) {
            A(n, L), A(r, L), A(s, zt), d.rawcolliderset_coSetMassProperties(this.__wbg_ptr, t, e, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr);
        }
        constructor(){
            const t = d.rawcolliderset_new();
            return this.__wbg_ptr = t >>> 0, Aa.register(this, this.__wbg_ptr, this), this;
        }
        len() {
            return d.rawcolliderset_len(this.__wbg_ptr) >>> 0;
        }
        contains(t) {
            return d.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
        }
        createCollider(t, e, n, r, s, a, o, c, l, h, u, f, m, w, b, g, _, R, E, S, N, C, I, B, M) {
            try {
                const j = d.__wbindgen_add_to_stack_pointer(-16);
                A(e, Rt), A(n, L), A(r, zt), A(o, L), A(c, L), A(l, zt), A(M, _e), d.rawcolliderset_createCollider(j, this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s, a, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, h, u, f, m, w, b, g, _, R, E, S, N, C, I, B, M.__wbg_ptr);
                var x = Oe().getInt32(j + 4 * 0, !0), D = Oe().getFloat64(j + 8 * 1, !0);
                return x === 0 ? void 0 : D;
            } finally{
                d.__wbindgen_add_to_stack_pointer(16);
            }
        }
        remove(t, e, n, r) {
            A(e, On), A(n, _e), d.rawcolliderset_remove(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r);
        }
        isHandleValid(t) {
            return d.rawcolliderset_contains(this.__wbg_ptr, t) !== 0;
        }
        forEachColliderHandle(t) {
            try {
                d.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, me(t));
            } finally{
                Kt[de++] = void 0;
            }
        }
    }
    const Il = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawcollidershapecasthit_free(i >>> 0, 1));
    class Fs {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Fs.prototype);
            return e.__wbg_ptr = t, Il.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Il.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawcollidershapecasthit_free(t, 0);
        }
        colliderHandle() {
            return d.rawcharactercollision_handle(this.__wbg_ptr);
        }
        time_of_impact() {
            return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
        }
        witness1() {
            const t = d.rawcollidershapecasthit_witness1(this.__wbg_ptr);
            return L.__wrap(t);
        }
        witness2() {
            const t = d.rawcollidershapecasthit_witness2(this.__wbg_ptr);
            return L.__wrap(t);
        }
        normal1() {
            const t = d.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
            return L.__wrap(t);
        }
        normal2() {
            const t = d.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
            return L.__wrap(t);
        }
    }
    const Dl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawcontactforceevent_free(i >>> 0, 1));
    class Ko {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Ko.prototype);
            return e.__wbg_ptr = t, Dl.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Dl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawcontactforceevent_free(t, 0);
        }
        collider1() {
            return d.rawcharactercollision_handle(this.__wbg_ptr);
        }
        collider2() {
            return d.rawcontactforceevent_collider2(this.__wbg_ptr);
        }
        total_force() {
            const t = d.rawcontactforceevent_total_force(this.__wbg_ptr);
            return L.__wrap(t);
        }
        total_force_magnitude() {
            return d.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
        }
        max_force_direction() {
            const t = d.rawcontactforceevent_max_force_direction(this.__wbg_ptr);
            return L.__wrap(t);
        }
        max_force_magnitude() {
            return d.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
        }
    }
    const Ll = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawcontactmanifold_free(i >>> 0, 1));
    class Zo {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Zo.prototype);
            return e.__wbg_ptr = t, Ll.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ll.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawcontactmanifold_free(t, 0);
        }
        normal() {
            const t = d.rawcontactmanifold_normal(this.__wbg_ptr);
            return L.__wrap(t);
        }
        local_n1() {
            const t = d.rawcontactmanifold_local_n1(this.__wbg_ptr);
            return L.__wrap(t);
        }
        local_n2() {
            const t = d.rawcontactmanifold_local_n2(this.__wbg_ptr);
            return L.__wrap(t);
        }
        subshape1() {
            return d.rawcontactmanifold_subshape1(this.__wbg_ptr) >>> 0;
        }
        subshape2() {
            return d.rawcontactmanifold_subshape2(this.__wbg_ptr) >>> 0;
        }
        num_contacts() {
            return d.rawcontactmanifold_num_contacts(this.__wbg_ptr) >>> 0;
        }
        contact_local_p1(t) {
            const e = d.rawcontactmanifold_contact_local_p1(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        contact_local_p2(t) {
            const e = d.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        contact_dist(t) {
            return d.rawcontactmanifold_contact_dist(this.__wbg_ptr, t);
        }
        contact_fid1(t) {
            return d.rawcontactmanifold_contact_fid1(this.__wbg_ptr, t) >>> 0;
        }
        contact_fid2(t) {
            return d.rawcontactmanifold_contact_fid2(this.__wbg_ptr, t) >>> 0;
        }
        contact_impulse(t) {
            return d.rawcontactmanifold_contact_impulse(this.__wbg_ptr, t);
        }
        contact_tangent_impulse_x(t) {
            return d.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr, t);
        }
        contact_tangent_impulse_y(t) {
            return d.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr, t);
        }
        num_solver_contacts() {
            return d.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr) >>> 0;
        }
        solver_contact_point(t) {
            const e = d.rawcontactmanifold_solver_contact_point(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        solver_contact_dist(t) {
            return d.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, t);
        }
        solver_contact_friction(t) {
            return d.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, t);
        }
        solver_contact_restitution(t) {
            return d.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr, t);
        }
        solver_contact_tangent_velocity(t) {
            const e = d.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
    }
    const Ul = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawcontactpair_free(i >>> 0, 1));
    class Jo {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Jo.prototype);
            return e.__wbg_ptr = t, Ul.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ul.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawcontactpair_free(t, 0);
        }
        collider1() {
            return d.rawcontactpair_collider1(this.__wbg_ptr);
        }
        collider2() {
            return d.rawcontactpair_collider2(this.__wbg_ptr);
        }
        numContactManifolds() {
            return d.rawcontactpair_numContactManifolds(this.__wbg_ptr) >>> 0;
        }
        contactManifold(t) {
            const e = d.rawcontactpair_contactManifold(this.__wbg_ptr, t);
            return e === 0 ? void 0 : Zo.__wrap(e);
        }
    }
    const Nl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawdebugrenderpipeline_free(i >>> 0, 1));
    class Lw {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Nl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawdebugrenderpipeline_free(t, 0);
        }
        constructor(){
            const t = d.rawdebugrenderpipeline_new();
            return this.__wbg_ptr = t >>> 0, Nl.register(this, this.__wbg_ptr, this), this;
        }
        vertices() {
            const t = d.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
            return vr(t);
        }
        colors() {
            const t = d.rawdebugrenderpipeline_colors(this.__wbg_ptr);
            return vr(t);
        }
        render(t, e, n, r, s) {
            A(t, _e), A(e, we), A(n, Fn), A(r, Bn), A(s, $n), d.rawdebugrenderpipeline_render(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr);
        }
    }
    const Fl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawdeserializedworld_free(i >>> 0, 1));
    class $o {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create($o.prototype);
            return e.__wbg_ptr = t, Fl.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Fl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawdeserializedworld_free(t, 0);
        }
        takeGravity() {
            const t = d.rawdeserializedworld_takeGravity(this.__wbg_ptr);
            return t === 0 ? void 0 : L.__wrap(t);
        }
        takeIntegrationParameters() {
            const t = d.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
            return t === 0 ? void 0 : bi.__wrap(t);
        }
        takeIslandManager() {
            const t = d.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
            return t === 0 ? void 0 : On.__wrap(t);
        }
        takeBroadPhase() {
            const t = d.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
            return t === 0 ? void 0 : wi.__wrap(t);
        }
        takeNarrowPhase() {
            const t = d.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
            return t === 0 ? void 0 : $n.__wrap(t);
        }
        takeBodies() {
            const t = d.rawdeserializedworld_takeBodies(this.__wbg_ptr);
            return t === 0 ? void 0 : _e.__wrap(t);
        }
        takeColliders() {
            const t = d.rawdeserializedworld_takeColliders(this.__wbg_ptr);
            return t === 0 ? void 0 : we.__wrap(t);
        }
        takeImpulseJoints() {
            const t = d.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
            return t === 0 ? void 0 : Fn.__wrap(t);
        }
        takeMultibodyJoints() {
            const t = d.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
            return t === 0 ? void 0 : Bn.__wrap(t);
        }
    }
    const Ol = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawdynamicraycastvehiclecontroller_free(i >>> 0, 1));
    class Uw {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ol.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawdynamicraycastvehiclecontroller_free(t, 0);
        }
        constructor(t){
            const e = d.rawdynamicraycastvehiclecontroller_new(t);
            return this.__wbg_ptr = e >>> 0, Ol.register(this, this.__wbg_ptr, this), this;
        }
        current_vehicle_speed() {
            return d.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
        }
        chassis() {
            return d.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr);
        }
        index_up_axis() {
            return d.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
        }
        set_index_up_axis(t) {
            d.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
        }
        index_forward_axis() {
            return d.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
        }
        set_index_forward_axis(t) {
            d.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, t);
        }
        add_wheel(t, e, n, r, s) {
            A(t, L), A(e, L), A(n, L), d.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r, s);
        }
        num_wheels() {
            return d.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>> 0;
        }
        update_vehicle(t, e, n, r, s, a, o) {
            try {
                A(e, _e), A(n, we), A(r, Qo), d.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s, At(a) ? 4294967297 : a >>> 0, me(o));
            } finally{
                Kt[de++] = void 0;
            }
        }
        wheel_chassis_connection_point_cs(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        set_wheel_chassis_connection_point_cs(t, e) {
            A(e, L), d.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr, t, e.__wbg_ptr);
        }
        wheel_suspension_rest_length(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_suspension_rest_length(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr, t, e);
        }
        wheel_max_suspension_travel(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_max_suspension_travel(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr, t, e);
        }
        wheel_radius(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_radius(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr, t, e);
        }
        wheel_suspension_stiffness(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_suspension_stiffness(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr, t, e);
        }
        wheel_suspension_compression(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_suspension_compression(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr, t, e);
        }
        wheel_suspension_relaxation(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_suspension_relaxation(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr, t, e);
        }
        wheel_max_suspension_force(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_max_suspension_force(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr, t, e);
        }
        wheel_brake(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_brake(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr, t, e);
        }
        wheel_steering(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_steering(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr, t, e);
        }
        wheel_engine_force(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_engine_force(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr, t, e);
        }
        wheel_direction_cs(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        set_wheel_direction_cs(t, e) {
            A(e, L), d.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr, t, e.__wbg_ptr);
        }
        wheel_axle_cs(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        set_wheel_axle_cs(t, e) {
            A(e, L), d.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr, t, e.__wbg_ptr);
        }
        wheel_friction_slip(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_friction_slip(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr, t, e);
        }
        wheel_side_friction_stiffness(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        set_wheel_side_friction_stiffness(t, e) {
            d.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr, t, e);
        }
        wheel_rotation(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        wheel_forward_impulse(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        wheel_side_impulse(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        wheel_suspension_force(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        wheel_contact_normal_ws(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        wheel_contact_point_ws(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        wheel_suspension_length(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr, t);
            return e === 4294967297 ? void 0 : e;
        }
        wheel_hard_point_ws(t) {
            const e = d.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr, t);
            return e === 0 ? void 0 : L.__wrap(e);
        }
        wheel_is_in_contact(t) {
            return d.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr, t) !== 0;
        }
        wheel_ground_object(t) {
            try {
                const r = d.__wbindgen_add_to_stack_pointer(-16);
                d.rawdynamicraycastvehiclecontroller_wheel_ground_object(r, this.__wbg_ptr, t);
                var e = Oe().getInt32(r + 4 * 0, !0), n = Oe().getFloat64(r + 8 * 1, !0);
                return e === 0 ? void 0 : n;
            } finally{
                d.__wbindgen_add_to_stack_pointer(16);
            }
        }
    }
    const Bl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_raweventqueue_free(i >>> 0, 1));
    class rd {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Bl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_raweventqueue_free(t, 0);
        }
        constructor(t){
            const e = d.raweventqueue_new(t);
            return this.__wbg_ptr = e >>> 0, Bl.register(this, this.__wbg_ptr, this), this;
        }
        drainCollisionEvents(t) {
            try {
                d.raweventqueue_drainCollisionEvents(this.__wbg_ptr, me(t));
            } finally{
                Kt[de++] = void 0;
            }
        }
        drainContactForceEvents(t) {
            try {
                d.raweventqueue_drainContactForceEvents(this.__wbg_ptr, me(t));
            } finally{
                Kt[de++] = void 0;
            }
        }
        clear() {
            d.raweventqueue_clear(this.__wbg_ptr);
        }
    }
    const zl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawgenericjoint_free(i >>> 0, 1));
    class dn {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(dn.prototype);
            return e.__wbg_ptr = t, zl.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, zl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawgenericjoint_free(t, 0);
        }
        static generic(t, e, n, r) {
            A(t, L), A(e, L), A(n, L);
            const s = d.rawgenericjoint_generic(t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r);
            return s === 0 ? void 0 : dn.__wrap(s);
        }
        static spring(t, e, n, r, s) {
            A(r, L), A(s, L);
            const a = d.rawgenericjoint_spring(t, e, n, r.__wbg_ptr, s.__wbg_ptr);
            return dn.__wrap(a);
        }
        static rope(t, e, n) {
            A(e, L), A(n, L);
            const r = d.rawgenericjoint_rope(t, e.__wbg_ptr, n.__wbg_ptr);
            return dn.__wrap(r);
        }
        static spherical(t, e) {
            A(t, L), A(e, L);
            const n = d.rawgenericjoint_spherical(t.__wbg_ptr, e.__wbg_ptr);
            return dn.__wrap(n);
        }
        static prismatic(t, e, n, r, s, a) {
            A(t, L), A(e, L), A(n, L);
            const o = d.rawgenericjoint_prismatic(t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r, s, a);
            return o === 0 ? void 0 : dn.__wrap(o);
        }
        static fixed(t, e, n, r) {
            A(t, L), A(e, zt), A(n, L), A(r, zt);
            const s = d.rawgenericjoint_fixed(t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr);
            return dn.__wrap(s);
        }
        static revolute(t, e, n) {
            A(t, L), A(e, L), A(n, L);
            const r = d.rawgenericjoint_revolute(t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr);
            return r === 0 ? void 0 : dn.__wrap(r);
        }
    }
    const Ca = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawimpulsejointset_free(i >>> 0, 1));
    class Fn {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Fn.prototype);
            return e.__wbg_ptr = t, Ca.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ca.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawimpulsejointset_free(t, 0);
        }
        jointType(t) {
            return d.rawimpulsejointset_jointType(this.__wbg_ptr, t);
        }
        jointBodyHandle1(t) {
            return d.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr, t);
        }
        jointBodyHandle2(t) {
            return d.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr, t);
        }
        jointFrameX1(t) {
            const e = d.rawimpulsejointset_jointFrameX1(this.__wbg_ptr, t);
            return zt.__wrap(e);
        }
        jointFrameX2(t) {
            const e = d.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, t);
            return zt.__wrap(e);
        }
        jointAnchor1(t) {
            const e = d.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        jointAnchor2(t) {
            const e = d.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        jointSetAnchor1(t, e) {
            A(e, L), d.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, t, e.__wbg_ptr);
        }
        jointSetAnchor2(t, e) {
            A(e, L), d.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, t, e.__wbg_ptr);
        }
        jointContactsEnabled(t) {
            return d.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, t) !== 0;
        }
        jointSetContactsEnabled(t, e) {
            d.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, t, e);
        }
        jointLimitsEnabled(t, e) {
            return d.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, t, e) !== 0;
        }
        jointLimitsMin(t, e) {
            return d.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr, t, e);
        }
        jointLimitsMax(t, e) {
            return d.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr, t, e);
        }
        jointSetLimits(t, e, n, r) {
            d.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, t, e, n, r);
        }
        jointConfigureMotorModel(t, e, n) {
            d.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, t, e, n);
        }
        jointConfigureMotorVelocity(t, e, n, r) {
            d.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, t, e, n, r);
        }
        jointConfigureMotorPosition(t, e, n, r, s) {
            d.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, t, e, n, r, s);
        }
        jointConfigureMotor(t, e, n, r, s, a) {
            d.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, t, e, n, r, s, a);
        }
        constructor(){
            const t = d.rawimpulsejointset_new();
            return this.__wbg_ptr = t >>> 0, Ca.register(this, this.__wbg_ptr, this), this;
        }
        createJoint(t, e, n, r) {
            return A(t, dn), d.rawimpulsejointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, n, r);
        }
        remove(t, e) {
            d.rawimpulsejointset_remove(this.__wbg_ptr, t, e);
        }
        len() {
            return d.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
        }
        contains(t) {
            return d.rawimpulsejointset_contains(this.__wbg_ptr, t) !== 0;
        }
        forEachJointHandle(t) {
            try {
                d.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, me(t));
            } finally{
                Kt[de++] = void 0;
            }
        }
        forEachJointAttachedToRigidBody(t, e) {
            try {
                d.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, me(e));
            } finally{
                Kt[de++] = void 0;
            }
        }
    }
    const Pa = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawintegrationparameters_free(i >>> 0, 1));
    class bi {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(bi.prototype);
            return e.__wbg_ptr = t, Pa.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Pa.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawintegrationparameters_free(t, 0);
        }
        constructor(){
            const t = d.rawintegrationparameters_new();
            return this.__wbg_ptr = t >>> 0, Pa.register(this, this.__wbg_ptr, this), this;
        }
        get dt() {
            return d.rawintegrationparameters_dt(this.__wbg_ptr);
        }
        get contact_erp() {
            return d.rawintegrationparameters_contact_erp(this.__wbg_ptr);
        }
        get normalizedAllowedLinearError() {
            return d.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
        }
        get normalizedPredictionDistance() {
            return d.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
        }
        get numSolverIterations() {
            return d.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
        }
        get numAdditionalFrictionIterations() {
            return d.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
        }
        get numInternalPgsIterations() {
            return d.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
        }
        get minIslandSize() {
            return d.rawintegrationparameters_minIslandSize(this.__wbg_ptr) >>> 0;
        }
        get maxCcdSubsteps() {
            return d.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
        }
        get lengthUnit() {
            return d.rawintegrationparameters_lengthUnit(this.__wbg_ptr);
        }
        set dt(t) {
            d.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
        }
        set contact_natural_frequency(t) {
            d.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr, t);
        }
        set normalizedAllowedLinearError(t) {
            d.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr, t);
        }
        set normalizedPredictionDistance(t) {
            d.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, t);
        }
        set numSolverIterations(t) {
            d.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, t);
        }
        set numAdditionalFrictionIterations(t) {
            d.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, t);
        }
        set numInternalPgsIterations(t) {
            d.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, t);
        }
        set minIslandSize(t) {
            d.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr, t);
        }
        set maxCcdSubsteps(t) {
            d.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr, t);
        }
        set lengthUnit(t) {
            d.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr, t);
        }
        switchToStandardPgsSolver() {
            d.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr);
        }
        switchToSmallStepsPgsSolver() {
            d.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr);
        }
        switchToSmallStepsPgsSolverWithoutWarmstart() {
            d.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr);
        }
    }
    const Ia = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawislandmanager_free(i >>> 0, 1));
    class On {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(On.prototype);
            return e.__wbg_ptr = t, Ia.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ia.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawislandmanager_free(t, 0);
        }
        constructor(){
            const t = d.rawislandmanager_new();
            return this.__wbg_ptr = t >>> 0, Ia.register(this, this.__wbg_ptr, this), this;
        }
        forEachActiveRigidBodyHandle(t) {
            try {
                d.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, me(t));
            } finally{
                Kt[de++] = void 0;
            }
        }
    }
    const Hl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawkinematiccharactercontroller_free(i >>> 0, 1));
    class Nw {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Hl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawkinematiccharactercontroller_free(t, 0);
        }
        constructor(t){
            const e = d.rawkinematiccharactercontroller_new(t);
            return this.__wbg_ptr = e >>> 0, Hl.register(this, this.__wbg_ptr, this), this;
        }
        up() {
            const t = d.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
            return L.__wrap(t);
        }
        setUp(t) {
            A(t, L), d.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, t.__wbg_ptr);
        }
        normalNudgeFactor() {
            return d.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr);
        }
        setNormalNudgeFactor(t) {
            d.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr, t);
        }
        offset() {
            return d.rawintegrationparameters_dt(this.__wbg_ptr);
        }
        setOffset(t) {
            d.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, t);
        }
        slideEnabled() {
            return d.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr) !== 0;
        }
        setSlideEnabled(t) {
            d.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, t);
        }
        autostepMaxHeight() {
            const t = d.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        autostepMinWidth() {
            const t = d.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        autostepIncludesDynamicBodies() {
            const t = d.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);
            return t === 16777215 ? void 0 : t !== 0;
        }
        autostepEnabled() {
            return d.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr) !== 0;
        }
        enableAutostep(t, e, n) {
            d.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr, t, e, n);
        }
        disableAutostep() {
            d.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
        }
        maxSlopeClimbAngle() {
            return d.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
        }
        setMaxSlopeClimbAngle(t) {
            d.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr, t);
        }
        minSlopeSlideAngle() {
            return d.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr);
        }
        setMinSlopeSlideAngle(t) {
            d.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr, t);
        }
        snapToGroundDistance() {
            const t = d.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        enableSnapToGround(t) {
            d.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr, t);
        }
        disableSnapToGround() {
            d.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
        }
        snapToGroundEnabled() {
            return d.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr) !== 0;
        }
        computeColliderMovement(t, e, n, r, s, a, o, c, l, h, u) {
            try {
                A(e, _e), A(n, we), A(r, Qo), A(a, L), d.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s, a.__wbg_ptr, o, At(c) ? 4294967297 : Math.fround(c), l, At(h) ? 4294967297 : h >>> 0, me(u));
            } finally{
                Kt[de++] = void 0;
            }
        }
        computedMovement() {
            const t = d.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
            return L.__wrap(t);
        }
        computedGrounded() {
            return d.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr) !== 0;
        }
        numComputedCollisions() {
            return d.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr) >>> 0;
        }
        computedCollision(t, e) {
            return A(e, id), d.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, t, e.__wbg_ptr) !== 0;
        }
    }
    const Da = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawmultibodyjointset_free(i >>> 0, 1));
    class Bn {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Bn.prototype);
            return e.__wbg_ptr = t, Da.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Da.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawmultibodyjointset_free(t, 0);
        }
        jointType(t) {
            return d.rawmultibodyjointset_jointType(this.__wbg_ptr, t);
        }
        jointFrameX1(t) {
            const e = d.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr, t);
            return zt.__wrap(e);
        }
        jointFrameX2(t) {
            const e = d.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, t);
            return zt.__wrap(e);
        }
        jointAnchor1(t) {
            const e = d.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        jointAnchor2(t) {
            const e = d.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        jointContactsEnabled(t) {
            return d.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, t) !== 0;
        }
        jointSetContactsEnabled(t, e) {
            d.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, t, e);
        }
        jointLimitsEnabled(t, e) {
            return d.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr, t, e) !== 0;
        }
        jointLimitsMin(t, e) {
            return d.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, t, e);
        }
        jointLimitsMax(t, e) {
            return d.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, t, e);
        }
        constructor(){
            const t = d.rawmultibodyjointset_new();
            return this.__wbg_ptr = t >>> 0, Da.register(this, this.__wbg_ptr, this), this;
        }
        createJoint(t, e, n, r) {
            return A(t, dn), d.rawmultibodyjointset_createJoint(this.__wbg_ptr, t.__wbg_ptr, e, n, r);
        }
        remove(t, e) {
            d.rawmultibodyjointset_remove(this.__wbg_ptr, t, e);
        }
        contains(t) {
            return d.rawmultibodyjointset_contains(this.__wbg_ptr, t) !== 0;
        }
        forEachJointHandle(t) {
            try {
                d.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, me(t));
            } finally{
                Kt[de++] = void 0;
            }
        }
        forEachJointAttachedToRigidBody(t, e) {
            try {
                d.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, t, me(e));
            } finally{
                Kt[de++] = void 0;
            }
        }
    }
    const La = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawnarrowphase_free(i >>> 0, 1));
    class $n {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create($n.prototype);
            return e.__wbg_ptr = t, La.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, La.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawnarrowphase_free(t, 0);
        }
        constructor(){
            const t = d.rawnarrowphase_new();
            return this.__wbg_ptr = t >>> 0, La.register(this, this.__wbg_ptr, this), this;
        }
        contact_pairs_with(t, e) {
            d.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, t, Ee(e));
        }
        contact_pair(t, e) {
            const n = d.rawnarrowphase_contact_pair(this.__wbg_ptr, t, e);
            return n === 0 ? void 0 : Jo.__wrap(n);
        }
        intersection_pairs_with(t, e) {
            d.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, t, Ee(e));
        }
        intersection_pair(t, e) {
            return d.rawnarrowphase_intersection_pair(this.__wbg_ptr, t, e) !== 0;
        }
    }
    const kl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawphysicspipeline_free(i >>> 0, 1));
    class Fw {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, kl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawphysicspipeline_free(t, 0);
        }
        constructor(){
            const t = d.rawphysicspipeline_new();
            return this.__wbg_ptr = t >>> 0, kl.register(this, this.__wbg_ptr, this), this;
        }
        step(t, e, n, r, s, a, o, c, l, h) {
            A(t, L), A(e, bi), A(n, On), A(r, wi), A(s, $n), A(a, _e), A(o, we), A(c, Fn), A(l, Bn), A(h, Ro), d.rawphysicspipeline_step(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr, a.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, h.__wbg_ptr);
        }
        stepWithEvents(t, e, n, r, s, a, o, c, l, h, u, f, m, w) {
            A(t, L), A(e, bi), A(n, On), A(r, wi), A(s, $n), A(a, _e), A(o, we), A(c, Fn), A(l, Bn), A(h, Ro), A(u, rd), d.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr, a.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr, Ee(f), Ee(m), Ee(w));
        }
    }
    const Vl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawpidcontroller_free(i >>> 0, 1));
    class Ow {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Vl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawpidcontroller_free(t, 0);
        }
        constructor(t, e, n, r){
            const s = d.rawpidcontroller_new(t, e, n, r);
            return this.__wbg_ptr = s >>> 0, Vl.register(this, this.__wbg_ptr, this), this;
        }
        set_kp(t, e) {
            d.rawpidcontroller_set_kp(this.__wbg_ptr, t, e);
        }
        set_ki(t, e) {
            d.rawpidcontroller_set_ki(this.__wbg_ptr, t, e);
        }
        set_kd(t, e) {
            d.rawpidcontroller_set_kd(this.__wbg_ptr, t, e);
        }
        set_axes_mask(t) {
            d.rawpidcontroller_set_axes_mask(this.__wbg_ptr, t);
        }
        reset_integrals() {
            d.rawpidcontroller_reset_integrals(this.__wbg_ptr);
        }
        apply_linear_correction(t, e, n, r, s) {
            A(e, _e), A(r, L), A(s, L), d.rawpidcontroller_apply_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, n, r.__wbg_ptr, s.__wbg_ptr);
        }
        apply_angular_correction(t, e, n, r, s) {
            A(e, _e), A(r, zt), A(s, L), d.rawpidcontroller_apply_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, n, r.__wbg_ptr, s.__wbg_ptr);
        }
        linear_correction(t, e, n, r, s) {
            A(e, _e), A(r, L), A(s, L);
            const a = d.rawpidcontroller_linear_correction(this.__wbg_ptr, t, e.__wbg_ptr, n, r.__wbg_ptr, s.__wbg_ptr);
            return L.__wrap(a);
        }
        angular_correction(t, e, n, r, s) {
            A(e, _e), A(r, zt), A(s, L);
            const a = d.rawpidcontroller_angular_correction(this.__wbg_ptr, t, e.__wbg_ptr, n, r.__wbg_ptr, s.__wbg_ptr);
            return L.__wrap(a);
        }
    }
    const Gl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawpointcolliderprojection_free(i >>> 0, 1));
    class Ss {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Ss.prototype);
            return e.__wbg_ptr = t, Gl.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Gl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawpointcolliderprojection_free(t, 0);
        }
        colliderHandle() {
            return d.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
        }
        point() {
            const t = d.rawpointcolliderprojection_point(this.__wbg_ptr);
            return L.__wrap(t);
        }
        isInside() {
            return d.rawpointcolliderprojection_isInside(this.__wbg_ptr) !== 0;
        }
        featureType() {
            return d.rawpointcolliderprojection_featureType(this.__wbg_ptr);
        }
        featureId() {
            const t = d.rawpointcolliderprojection_featureId(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
    }
    const Wl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawpointprojection_free(i >>> 0, 1));
    class Os {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Os.prototype);
            return e.__wbg_ptr = t, Wl.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Wl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawpointprojection_free(t, 0);
        }
        point() {
            const t = d.rawpointprojection_point(this.__wbg_ptr);
            return L.__wrap(t);
        }
        isInside() {
            return d.rawpointprojection_isInside(this.__wbg_ptr) !== 0;
        }
    }
    const jl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawquerypipeline_free(i >>> 0, 1));
    class Qo {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, jl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawquerypipeline_free(t, 0);
        }
        constructor(){
            const t = d.rawquerypipeline_new();
            return this.__wbg_ptr = t >>> 0, jl.register(this, this.__wbg_ptr, this), this;
        }
        update(t) {
            A(t, we), d.rawquerypipeline_update(this.__wbg_ptr, t.__wbg_ptr);
        }
        castRay(t, e, n, r, s, a, o, c, l, h, u) {
            try {
                A(t, _e), A(e, we), A(n, L), A(r, L);
                const f = d.rawquerypipeline_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s, a, o, At(c) ? 4294967297 : c >>> 0, !At(l), At(l) ? 0 : l, !At(h), At(h) ? 0 : h, me(u));
                return f === 0 ? void 0 : tc.__wrap(f);
            } finally{
                Kt[de++] = void 0;
            }
        }
        castRayAndGetNormal(t, e, n, r, s, a, o, c, l, h, u) {
            try {
                A(t, _e), A(e, we), A(n, L), A(r, L);
                const f = d.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s, a, o, At(c) ? 4294967297 : c >>> 0, !At(l), At(l) ? 0 : l, !At(h), At(h) ? 0 : h, me(u));
                return f === 0 ? void 0 : Bs.__wrap(f);
            } finally{
                Kt[de++] = void 0;
            }
        }
        intersectionsWithRay(t, e, n, r, s, a, o, c, l, h, u, f) {
            try {
                A(t, _e), A(e, we), A(n, L), A(r, L), d.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s, a, me(o), c, At(l) ? 4294967297 : l >>> 0, !At(h), At(h) ? 0 : h, !At(u), At(u) ? 0 : u, me(f));
            } finally{
                Kt[de++] = void 0, Kt[de++] = void 0;
            }
        }
        intersectionWithShape(t, e, n, r, s, a, o, c, l, h) {
            try {
                const m = d.__wbindgen_add_to_stack_pointer(-16);
                A(t, _e), A(e, we), A(n, L), A(r, zt), A(s, Rt), d.rawquerypipeline_intersectionWithShape(m, this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr, a, At(o) ? 4294967297 : o >>> 0, !At(c), At(c) ? 0 : c, !At(l), At(l) ? 0 : l, me(h));
                var u = Oe().getInt32(m + 4 * 0, !0), f = Oe().getFloat64(m + 8 * 1, !0);
                return u === 0 ? void 0 : f;
            } finally{
                d.__wbindgen_add_to_stack_pointer(16), Kt[de++] = void 0;
            }
        }
        projectPoint(t, e, n, r, s, a, o, c, l) {
            try {
                A(t, _e), A(e, we), A(n, L);
                const h = d.rawquerypipeline_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r, s, At(a) ? 4294967297 : a >>> 0, !At(o), At(o) ? 0 : o, !At(c), At(c) ? 0 : c, me(l));
                return h === 0 ? void 0 : Ss.__wrap(h);
            } finally{
                Kt[de++] = void 0;
            }
        }
        projectPointAndGetFeature(t, e, n, r, s, a, o, c) {
            try {
                A(t, _e), A(e, we), A(n, L);
                const l = d.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r, At(s) ? 4294967297 : s >>> 0, !At(a), At(a) ? 0 : a, !At(o), At(o) ? 0 : o, me(c));
                return l === 0 ? void 0 : Ss.__wrap(l);
            } finally{
                Kt[de++] = void 0;
            }
        }
        intersectionsWithPoint(t, e, n, r, s, a, o, c, l) {
            try {
                A(t, _e), A(e, we), A(n, L), d.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, me(r), s, At(a) ? 4294967297 : a >>> 0, !At(o), At(o) ? 0 : o, !At(c), At(c) ? 0 : c, me(l));
            } finally{
                Kt[de++] = void 0, Kt[de++] = void 0;
            }
        }
        castShape(t, e, n, r, s, a, o, c, l, h, u, f, m, w) {
            try {
                A(t, _e), A(e, we), A(n, L), A(r, zt), A(s, L), A(a, Rt);
                const b = d.rawquerypipeline_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr, a.__wbg_ptr, o, c, l, h, At(u) ? 4294967297 : u >>> 0, !At(f), At(f) ? 0 : f, !At(m), At(m) ? 0 : m, me(w));
                return b === 0 ? void 0 : Fs.__wrap(b);
            } finally{
                Kt[de++] = void 0;
            }
        }
        intersectionsWithShape(t, e, n, r, s, a, o, c, l, h, u) {
            try {
                A(t, _e), A(e, we), A(n, L), A(r, zt), A(s, Rt), d.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr, me(a), o, At(c) ? 4294967297 : c >>> 0, !At(l), At(l) ? 0 : l, !At(h), At(h) ? 0 : h, me(u));
            } finally{
                Kt[de++] = void 0, Kt[de++] = void 0;
            }
        }
        collidersWithAabbIntersectingAabb(t, e, n) {
            try {
                A(t, L), A(e, L), d.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, me(n));
            } finally{
                Kt[de++] = void 0;
            }
        }
    }
    const Xl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawraycolliderhit_free(i >>> 0, 1));
    class tc {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(tc.prototype);
            return e.__wbg_ptr = t, Xl.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Xl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawraycolliderhit_free(t, 0);
        }
        colliderHandle() {
            return d.rawcharactercollision_handle(this.__wbg_ptr);
        }
        timeOfImpact() {
            return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
        }
    }
    const ql = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawraycolliderintersection_free(i >>> 0, 1));
    class Bs {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Bs.prototype);
            return e.__wbg_ptr = t, ql.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, ql.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawraycolliderintersection_free(t, 0);
        }
        colliderHandle() {
            return d.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
        }
        normal() {
            const t = d.rawcollidershapecasthit_witness1(this.__wbg_ptr);
            return L.__wrap(t);
        }
        time_of_impact() {
            return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
        }
        featureType() {
            return d.rawpointcolliderprojection_featureType(this.__wbg_ptr);
        }
        featureId() {
            const t = d.rawpointcolliderprojection_featureId(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
    }
    const Yl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawrayintersection_free(i >>> 0, 1));
    class zs {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(zs.prototype);
            return e.__wbg_ptr = t, Yl.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Yl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawrayintersection_free(t, 0);
        }
        normal() {
            const t = d.rawcollidershapecasthit_witness1(this.__wbg_ptr);
            return L.__wrap(t);
        }
        time_of_impact() {
            return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
        }
        featureType() {
            return d.rawpointcolliderprojection_featureType(this.__wbg_ptr);
        }
        featureId() {
            const t = d.rawpointcolliderprojection_featureId(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
    }
    const Ua = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawrigidbodyset_free(i >>> 0, 1));
    class _e {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(_e.prototype);
            return e.__wbg_ptr = t, Ua.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ua.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawrigidbodyset_free(t, 0);
        }
        rbTranslation(t) {
            const e = d.rawrigidbodyset_rbTranslation(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        rbRotation(t) {
            const e = d.rawrigidbodyset_rbRotation(this.__wbg_ptr, t);
            return zt.__wrap(e);
        }
        rbSleep(t) {
            d.rawrigidbodyset_rbSleep(this.__wbg_ptr, t);
        }
        rbIsSleeping(t) {
            return d.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr, t) !== 0;
        }
        rbIsMoving(t) {
            return d.rawrigidbodyset_rbIsMoving(this.__wbg_ptr, t) !== 0;
        }
        rbNextTranslation(t) {
            const e = d.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        rbNextRotation(t) {
            const e = d.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, t);
            return zt.__wrap(e);
        }
        rbSetTranslation(t, e, n, r, s) {
            d.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, t, e, n, r, s);
        }
        rbSetRotation(t, e, n, r, s, a) {
            d.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, t, e, n, r, s, a);
        }
        rbSetLinvel(t, e, n) {
            A(e, L), d.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, t, e.__wbg_ptr, n);
        }
        rbSetAngvel(t, e, n) {
            A(e, L), d.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, t, e.__wbg_ptr, n);
        }
        rbSetNextKinematicTranslation(t, e, n, r) {
            d.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, t, e, n, r);
        }
        rbSetNextKinematicRotation(t, e, n, r, s) {
            d.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, t, e, n, r, s);
        }
        rbRecomputeMassPropertiesFromColliders(t, e) {
            A(e, we), d.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, t, e.__wbg_ptr);
        }
        rbSetAdditionalMass(t, e, n) {
            d.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, t, e, n);
        }
        rbSetAdditionalMassProperties(t, e, n, r, s, a) {
            A(n, L), A(r, L), A(s, zt), d.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, t, e, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr, a);
        }
        rbLinvel(t) {
            const e = d.rawrigidbodyset_rbLinvel(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        rbAngvel(t) {
            const e = d.rawrigidbodyset_rbAngvel(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        rbVelocityAtPoint(t, e) {
            A(e, L);
            const n = d.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr, t, e.__wbg_ptr);
            return L.__wrap(n);
        }
        rbLockTranslations(t, e, n) {
            d.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, t, e, n);
        }
        rbSetEnabledTranslations(t, e, n, r, s) {
            d.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, t, e, n, r, s);
        }
        rbLockRotations(t, e, n) {
            d.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, t, e, n);
        }
        rbSetEnabledRotations(t, e, n, r, s) {
            d.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr, t, e, n, r, s);
        }
        rbDominanceGroup(t) {
            return d.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr, t);
        }
        rbSetDominanceGroup(t, e) {
            d.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr, t, e);
        }
        rbEnableCcd(t, e) {
            d.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr, t, e);
        }
        rbSetSoftCcdPrediction(t, e) {
            d.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr, t, e);
        }
        rbMass(t) {
            return d.rawrigidbodyset_rbMass(this.__wbg_ptr, t);
        }
        rbInvMass(t) {
            return d.rawrigidbodyset_rbInvMass(this.__wbg_ptr, t);
        }
        rbEffectiveInvMass(t) {
            const e = d.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        rbLocalCom(t) {
            const e = d.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        rbWorldCom(t) {
            const e = d.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        rbInvPrincipalInertiaSqrt(t) {
            const e = d.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        rbPrincipalInertiaLocalFrame(t) {
            const e = d.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr, t);
            return zt.__wrap(e);
        }
        rbPrincipalInertia(t) {
            const e = d.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        rbEffectiveWorldInvInertiaSqrt(t) {
            const e = d.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr, t);
            return Ms.__wrap(e);
        }
        rbEffectiveAngularInertia(t) {
            const e = d.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, t);
            return Ms.__wrap(e);
        }
        rbWakeUp(t) {
            d.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, t);
        }
        rbIsCcdEnabled(t) {
            return d.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, t) !== 0;
        }
        rbSoftCcdPrediction(t) {
            return d.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr, t);
        }
        rbNumColliders(t) {
            return d.rawrigidbodyset_rbNumColliders(this.__wbg_ptr, t) >>> 0;
        }
        rbCollider(t, e) {
            return d.rawrigidbodyset_rbCollider(this.__wbg_ptr, t, e);
        }
        rbBodyType(t) {
            return d.rawrigidbodyset_rbBodyType(this.__wbg_ptr, t);
        }
        rbSetBodyType(t, e, n) {
            d.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr, t, e, n);
        }
        rbIsFixed(t) {
            return d.rawrigidbodyset_rbIsFixed(this.__wbg_ptr, t) !== 0;
        }
        rbIsKinematic(t) {
            return d.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr, t) !== 0;
        }
        rbIsDynamic(t) {
            return d.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr, t) !== 0;
        }
        rbLinearDamping(t) {
            return d.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr, t);
        }
        rbAngularDamping(t) {
            return d.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr, t);
        }
        rbSetLinearDamping(t, e) {
            d.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr, t, e);
        }
        rbSetAngularDamping(t, e) {
            d.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr, t, e);
        }
        rbSetEnabled(t, e) {
            d.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr, t, e);
        }
        rbIsEnabled(t) {
            return d.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr, t) !== 0;
        }
        rbGravityScale(t) {
            return d.rawrigidbodyset_rbGravityScale(this.__wbg_ptr, t);
        }
        rbSetGravityScale(t, e, n) {
            d.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr, t, e, n);
        }
        rbResetForces(t, e) {
            d.rawrigidbodyset_rbResetForces(this.__wbg_ptr, t, e);
        }
        rbResetTorques(t, e) {
            d.rawrigidbodyset_rbResetTorques(this.__wbg_ptr, t, e);
        }
        rbAddForce(t, e, n) {
            A(e, L), d.rawrigidbodyset_rbAddForce(this.__wbg_ptr, t, e.__wbg_ptr, n);
        }
        rbApplyImpulse(t, e, n) {
            A(e, L), d.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, t, e.__wbg_ptr, n);
        }
        rbAddTorque(t, e, n) {
            A(e, L), d.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, t, e.__wbg_ptr, n);
        }
        rbApplyTorqueImpulse(t, e, n) {
            A(e, L), d.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, t, e.__wbg_ptr, n);
        }
        rbAddForceAtPoint(t, e, n, r) {
            A(e, L), A(n, L), d.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r);
        }
        rbApplyImpulseAtPoint(t, e, n, r) {
            A(e, L), A(n, L), d.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r);
        }
        rbAdditionalSolverIterations(t) {
            return d.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr, t) >>> 0;
        }
        rbSetAdditionalSolverIterations(t, e) {
            d.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr, t, e);
        }
        rbUserData(t) {
            return d.rawrigidbodyset_rbUserData(this.__wbg_ptr, t) >>> 0;
        }
        rbSetUserData(t, e) {
            d.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, t, e);
        }
        rbUserForce(t) {
            const e = d.rawrigidbodyset_rbUserForce(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        rbUserTorque(t) {
            const e = d.rawrigidbodyset_rbUserTorque(this.__wbg_ptr, t);
            return L.__wrap(e);
        }
        constructor(){
            const t = d.rawrigidbodyset_new();
            return this.__wbg_ptr = t >>> 0, Ua.register(this, this.__wbg_ptr, this), this;
        }
        createRigidBody(t, e, n, r, s, a, o, c, l, h, u, f, m, w, b, g, _, R, E, S, N, C, I, B, M, x) {
            return A(e, L), A(n, zt), A(o, L), A(c, L), A(l, L), A(h, L), A(u, zt), d.rawrigidbodyset_createRigidBody(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r, s, a, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, h.__wbg_ptr, u.__wbg_ptr, f, m, w, b, g, _, R, E, S, N, C, I, B, M, x);
        }
        remove(t, e, n, r, s) {
            A(e, On), A(n, we), A(r, Fn), A(s, Bn), d.rawrigidbodyset_remove(this.__wbg_ptr, t, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr);
        }
        len() {
            return d.rawcolliderset_len(this.__wbg_ptr) >>> 0;
        }
        contains(t) {
            return d.rawrigidbodyset_contains(this.__wbg_ptr, t) !== 0;
        }
        forEachRigidBodyHandle(t) {
            try {
                d.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, me(t));
            } finally{
                Kt[de++] = void 0;
            }
        }
        propagateModifiedBodyPositionsToColliders(t) {
            A(t, we), d.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, t.__wbg_ptr);
        }
    }
    const Na = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawrotation_free(i >>> 0, 1));
    class zt {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(zt.prototype);
            return e.__wbg_ptr = t, Na.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Na.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawrotation_free(t, 0);
        }
        constructor(t, e, n, r){
            const s = d.rawrotation_new(t, e, n, r);
            return this.__wbg_ptr = s >>> 0, Na.register(this, this.__wbg_ptr, this), this;
        }
        static identity() {
            const t = d.rawrotation_identity();
            return zt.__wrap(t);
        }
        get x() {
            return d.rawrotation_x(this.__wbg_ptr);
        }
        get y() {
            return d.rawintegrationparameters_dt(this.__wbg_ptr);
        }
        get z() {
            return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
        }
        get w() {
            return d.rawrotation_w(this.__wbg_ptr);
        }
    }
    const Kl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawsdpmatrix3_free(i >>> 0, 1));
    class Ms {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Ms.prototype);
            return e.__wbg_ptr = t, Kl.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Kl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawsdpmatrix3_free(t, 0);
        }
        elements() {
            const t = d.rawsdpmatrix3_elements(this.__wbg_ptr);
            return vr(t);
        }
    }
    const Zl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawserializationpipeline_free(i >>> 0, 1));
    class Bw {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Zl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawserializationpipeline_free(t, 0);
        }
        constructor(){
            const t = d.rawserializationpipeline_new();
            return this.__wbg_ptr = t >>> 0, Zl.register(this, this.__wbg_ptr, this), this;
        }
        serializeAll(t, e, n, r, s, a, o, c, l) {
            A(t, L), A(e, bi), A(n, On), A(r, wi), A(s, $n), A(a, _e), A(o, we), A(c, Fn), A(l, Bn);
            const h = d.rawserializationpipeline_serializeAll(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr, a.__wbg_ptr, o.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr);
            return vr(h);
        }
        deserializeAll(t) {
            const e = d.rawserializationpipeline_deserializeAll(this.__wbg_ptr, Ee(t));
            return e === 0 ? void 0 : $o.__wrap(e);
        }
    }
    const Jl = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawshape_free(i >>> 0, 1));
    class Rt {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Rt.prototype);
            return e.__wbg_ptr = t, Jl.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Jl.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawshape_free(t, 0);
        }
        static cuboid(t, e, n) {
            const r = d.rawshape_cuboid(t, e, n);
            return Rt.__wrap(r);
        }
        static roundCuboid(t, e, n, r) {
            const s = d.rawshape_roundCuboid(t, e, n, r);
            return Rt.__wrap(s);
        }
        static ball(t) {
            const e = d.rawshape_ball(t);
            return Rt.__wrap(e);
        }
        static halfspace(t) {
            A(t, L);
            const e = d.rawshape_halfspace(t.__wbg_ptr);
            return Rt.__wrap(e);
        }
        static capsule(t, e) {
            const n = d.rawshape_capsule(t, e);
            return Rt.__wrap(n);
        }
        static cylinder(t, e) {
            const n = d.rawshape_cylinder(t, e);
            return Rt.__wrap(n);
        }
        static roundCylinder(t, e, n) {
            const r = d.rawshape_roundCylinder(t, e, n);
            return Rt.__wrap(r);
        }
        static cone(t, e) {
            const n = d.rawshape_cone(t, e);
            return Rt.__wrap(n);
        }
        static roundCone(t, e, n) {
            const r = d.rawshape_roundCone(t, e, n);
            return Rt.__wrap(r);
        }
        static polyline(t, e) {
            const n = ci(t, d.__wbindgen_export_2), r = Ye, s = cs(e, d.__wbindgen_export_2), a = Ye, o = d.rawshape_polyline(n, r, s, a);
            return Rt.__wrap(o);
        }
        static trimesh(t, e, n) {
            const r = ci(t, d.__wbindgen_export_2), s = Ye, a = cs(e, d.__wbindgen_export_2), o = Ye, c = d.rawshape_trimesh(r, s, a, o, n);
            return c === 0 ? void 0 : Rt.__wrap(c);
        }
        static heightfield(t, e, n, r, s) {
            const a = ci(n, d.__wbindgen_export_2), o = Ye;
            A(r, L);
            const c = d.rawshape_heightfield(t, e, a, o, r.__wbg_ptr, s);
            return Rt.__wrap(c);
        }
        static segment(t, e) {
            A(t, L), A(e, L);
            const n = d.rawshape_segment(t.__wbg_ptr, e.__wbg_ptr);
            return Rt.__wrap(n);
        }
        static triangle(t, e, n) {
            A(t, L), A(e, L), A(n, L);
            const r = d.rawshape_triangle(t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr);
            return Rt.__wrap(r);
        }
        static roundTriangle(t, e, n, r) {
            A(t, L), A(e, L), A(n, L);
            const s = d.rawshape_roundTriangle(t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r);
            return Rt.__wrap(s);
        }
        static convexHull(t) {
            const e = ci(t, d.__wbindgen_export_2), n = Ye, r = d.rawshape_convexHull(e, n);
            return r === 0 ? void 0 : Rt.__wrap(r);
        }
        static roundConvexHull(t, e) {
            const n = ci(t, d.__wbindgen_export_2), r = Ye, s = d.rawshape_roundConvexHull(n, r, e);
            return s === 0 ? void 0 : Rt.__wrap(s);
        }
        static convexMesh(t, e) {
            const n = ci(t, d.__wbindgen_export_2), r = Ye, s = cs(e, d.__wbindgen_export_2), a = Ye, o = d.rawshape_convexMesh(n, r, s, a);
            return o === 0 ? void 0 : Rt.__wrap(o);
        }
        static roundConvexMesh(t, e, n) {
            const r = ci(t, d.__wbindgen_export_2), s = Ye, a = cs(e, d.__wbindgen_export_2), o = Ye, c = d.rawshape_roundConvexMesh(r, s, a, o, n);
            return c === 0 ? void 0 : Rt.__wrap(c);
        }
        castShape(t, e, n, r, s, a, o, c, l, h) {
            A(t, L), A(e, zt), A(n, L), A(r, Rt), A(s, L), A(a, zt), A(o, L);
            const u = d.rawshape_castShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr, a.__wbg_ptr, o.__wbg_ptr, c, l, h);
            return u === 0 ? void 0 : Hs.__wrap(u);
        }
        intersectsShape(t, e, n, r, s) {
            return A(t, L), A(e, zt), A(n, Rt), A(r, L), A(s, zt), d.rawshape_intersectsShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr) !== 0;
        }
        contactShape(t, e, n, r, s, a) {
            A(t, L), A(e, zt), A(n, Rt), A(r, L), A(s, zt);
            const o = d.rawshape_contactShape(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s.__wbg_ptr, a);
            return o === 0 ? void 0 : yr.__wrap(o);
        }
        containsPoint(t, e, n) {
            return A(t, L), A(e, zt), A(n, L), d.rawshape_containsPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr) !== 0;
        }
        projectPoint(t, e, n, r) {
            A(t, L), A(e, zt), A(n, L);
            const s = d.rawshape_projectPoint(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r);
            return Os.__wrap(s);
        }
        intersectsRay(t, e, n, r, s) {
            return A(t, L), A(e, zt), A(n, L), A(r, L), d.rawshape_intersectsRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s) !== 0;
        }
        castRay(t, e, n, r, s, a) {
            return A(t, L), A(e, zt), A(n, L), A(r, L), d.rawshape_castRay(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s, a);
        }
        castRayAndGetNormal(t, e, n, r, s, a) {
            A(t, L), A(e, zt), A(n, L), A(r, L);
            const o = d.rawshape_castRayAndGetNormal(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, n.__wbg_ptr, r.__wbg_ptr, s, a);
            return o === 0 ? void 0 : zs.__wrap(o);
        }
    }
    const $l = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawshapecasthit_free(i >>> 0, 1));
    class Hs {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Hs.prototype);
            return e.__wbg_ptr = t, $l.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, $l.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawshapecasthit_free(t, 0);
        }
        time_of_impact() {
            return d.rawrotation_x(this.__wbg_ptr);
        }
        witness1() {
            const t = d.rawshapecasthit_witness1(this.__wbg_ptr);
            return L.__wrap(t);
        }
        witness2() {
            const t = d.rawcontactforceevent_total_force(this.__wbg_ptr);
            return L.__wrap(t);
        }
        normal1() {
            const t = d.rawshapecasthit_normal1(this.__wbg_ptr);
            return L.__wrap(t);
        }
        normal2() {
            const t = d.rawshapecasthit_normal2(this.__wbg_ptr);
            return L.__wrap(t);
        }
    }
    const Ql = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawshapecontact_free(i >>> 0, 1));
    class yr {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(yr.prototype);
            return e.__wbg_ptr = t, Ql.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ql.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawshapecontact_free(t, 0);
        }
        distance() {
            return d.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
        }
        point1() {
            const t = d.rawpointprojection_point(this.__wbg_ptr);
            return L.__wrap(t);
        }
        point2() {
            const t = d.rawcollidershapecasthit_witness1(this.__wbg_ptr);
            return L.__wrap(t);
        }
        normal1() {
            const t = d.rawcollidershapecasthit_witness2(this.__wbg_ptr);
            return L.__wrap(t);
        }
        normal2() {
            const t = d.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
            return L.__wrap(t);
        }
    }
    const Fa = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((i)=>d.__wbg_rawvector_free(i >>> 0, 1));
    class L {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(L.prototype);
            return e.__wbg_ptr = t, Fa.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Fa.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            d.__wbg_rawvector_free(t, 0);
        }
        static zero() {
            const t = d.rawvector_zero();
            return L.__wrap(t);
        }
        constructor(t, e, n){
            const r = d.rawvector_new(t, e, n);
            return this.__wbg_ptr = r >>> 0, Fa.register(this, this.__wbg_ptr, this), this;
        }
        get x() {
            return d.rawrotation_x(this.__wbg_ptr);
        }
        set x(t) {
            d.rawvector_set_x(this.__wbg_ptr, t);
        }
        get y() {
            return d.rawintegrationparameters_dt(this.__wbg_ptr);
        }
        set y(t) {
            d.rawintegrationparameters_set_dt(this.__wbg_ptr, t);
        }
        get z() {
            return d.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
        }
        set z(t) {
            d.rawvector_set_z(this.__wbg_ptr, t);
        }
        xyz() {
            const t = d.rawvector_xyz(this.__wbg_ptr);
            return L.__wrap(t);
        }
        yxz() {
            const t = d.rawvector_yxz(this.__wbg_ptr);
            return L.__wrap(t);
        }
        zxy() {
            const t = d.rawvector_zxy(this.__wbg_ptr);
            return L.__wrap(t);
        }
        xzy() {
            const t = d.rawvector_xzy(this.__wbg_ptr);
            return L.__wrap(t);
        }
        yzx() {
            const t = d.rawvector_yzx(this.__wbg_ptr);
            return L.__wrap(t);
        }
        zyx() {
            const t = d.rawvector_zyx(this.__wbg_ptr);
            return L.__wrap(t);
        }
    }
    function zw(i, t, e, n) {
        const r = se(i).bind(se(t), se(e), se(n));
        return Ee(r);
    }
    function Hw(i) {
        const t = se(i).buffer;
        return Ee(t);
    }
    function kw() {
        return Yo(function(i, t, e) {
            const n = se(i).call(se(t), se(e));
            return Ee(n);
        }, arguments);
    }
    function Vw() {
        return Yo(function(i, t, e, n) {
            const r = se(i).call(se(t), se(e), se(n));
            return Ee(r);
        }, arguments);
    }
    function Gw() {
        return Yo(function(i, t, e, n, r) {
            const s = se(i).call(se(t), se(e), se(n), se(r));
            return Ee(s);
        }, arguments);
    }
    function Ww(i) {
        return se(i).length;
    }
    function jw(i) {
        return se(i).length;
    }
    function Xw(i) {
        const t = new Uint8Array(se(i));
        return Ee(t);
    }
    function qw(i, t, e) {
        const n = new Uint8Array(se(i), t >>> 0, e >>> 0);
        return Ee(n);
    }
    function Yw(i, t, e) {
        const n = new Float32Array(se(i), t >>> 0, e >>> 0);
        return Ee(n);
    }
    function Kw(i) {
        const t = new Float32Array(i >>> 0);
        return Ee(t);
    }
    function Zw(i) {
        const t = Ko.__wrap(i);
        return Ee(t);
    }
    function Jw(i) {
        const t = Bs.__wrap(i);
        return Ee(t);
    }
    function $w(i, t, e) {
        se(i).set(se(t), e >>> 0);
    }
    function Qw(i, t, e) {
        se(i).set(se(t), e >>> 0);
    }
    function tb(i) {
        const t = se(i);
        return typeof t == "boolean" ? t ? 1 : 0 : 2;
    }
    function eb(i) {
        return typeof se(i) == "function";
    }
    function nb() {
        const i = d.memory;
        return Ee(i);
    }
    function ib(i, t) {
        const e = se(t), n = typeof e == "number" ? e : void 0;
        Oe().setFloat64(i + 8 * 1, At(n) ? 0 : n, !0), Oe().setInt32(i + 4 * 0, !At(n), !0);
    }
    function rb(i) {
        return Ee(i);
    }
    function sb(i) {
        vr(i);
    }
    function ab(i, t) {
        throw new Error(Iw(i, t));
    }
    URL = globalThis.URL;
    const p = await Tw({
        "./rapier_wasm3d_bg.js": {
            __wbindgen_number_new: rb,
            __wbindgen_boolean_get: tb,
            __wbindgen_object_drop_ref: sb,
            __wbindgen_number_get: ib,
            __wbindgen_is_function: eb,
            __wbg_rawraycolliderintersection_new: Jw,
            __wbg_rawcontactforceevent_new: Zw,
            __wbg_call_7cccdd69e0791ae2: kw,
            __wbg_call_833bed5770ea2041: Vw,
            __wbg_call_b8adc8b1d0a0d8eb: Gw,
            __wbg_bind_c8359b1cba058168: zw,
            __wbg_buffer_609cc3eee51ed158: Hw,
            __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: qw,
            __wbg_new_a12002a7f91c75be: Xw,
            __wbg_set_65595bdd868b3009: Qw,
            __wbg_length_a446193dc22c12f8: jw,
            __wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354: Yw,
            __wbg_set_10bad9bee0e9c58b: $w,
            __wbg_length_3b4f022188ae8db6: Ww,
            __wbg_newwithlength_5a5efe313cfd59f1: Kw,
            __wbindgen_throw: ab,
            __wbindgen_memory: nb
        }
    }, Ew), ob = p.memory, cb = p.version, lb = p.__wbg_rawkinematiccharactercontroller_free, hb = p.rawkinematiccharactercontroller_new, db = p.rawkinematiccharactercontroller_setUp, ub = p.rawkinematiccharactercontroller_normalNudgeFactor, fb = p.rawkinematiccharactercontroller_setNormalNudgeFactor, _b = p.rawkinematiccharactercontroller_setOffset, pb = p.rawkinematiccharactercontroller_slideEnabled, mb = p.rawkinematiccharactercontroller_setSlideEnabled, gb = p.rawkinematiccharactercontroller_autostepMaxHeight, wb = p.rawkinematiccharactercontroller_autostepMinWidth, bb = p.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, vb = p.rawkinematiccharactercontroller_autostepEnabled, yb = p.rawkinematiccharactercontroller_enableAutostep, xb = p.rawkinematiccharactercontroller_disableAutostep, Sb = p.rawkinematiccharactercontroller_maxSlopeClimbAngle, Mb = p.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, Eb = p.rawkinematiccharactercontroller_minSlopeSlideAngle, Tb = p.rawkinematiccharactercontroller_setMinSlopeSlideAngle, Rb = p.rawkinematiccharactercontroller_snapToGroundDistance, Ab = p.rawkinematiccharactercontroller_enableSnapToGround, Cb = p.rawkinematiccharactercontroller_disableSnapToGround, Pb = p.rawkinematiccharactercontroller_snapToGroundEnabled, Ib = p.rawkinematiccharactercontroller_computeColliderMovement, Db = p.rawkinematiccharactercontroller_computedMovement, Lb = p.rawkinematiccharactercontroller_computedGrounded, Ub = p.rawkinematiccharactercontroller_numComputedCollisions, Nb = p.rawkinematiccharactercontroller_computedCollision, Fb = p.__wbg_rawcharactercollision_free, Ob = p.rawcharactercollision_new, Bb = p.rawcharactercollision_handle, zb = p.rawcharactercollision_translationDeltaApplied, Hb = p.rawcharactercollision_translationDeltaRemaining, kb = p.rawcharactercollision_toi, Vb = p.rawcharactercollision_worldWitness1, Gb = p.rawcharactercollision_worldWitness2, Wb = p.rawcharactercollision_worldNormal1, jb = p.rawcharactercollision_worldNormal2, Xb = p.__wbg_rawpidcontroller_free, qb = p.rawpidcontroller_new, Yb = p.rawpidcontroller_set_kp, Kb = p.rawpidcontroller_set_ki, Zb = p.rawpidcontroller_set_kd, Jb = p.rawpidcontroller_set_axes_mask, $b = p.rawpidcontroller_reset_integrals, Qb = p.rawpidcontroller_apply_linear_correction, tv = p.rawpidcontroller_apply_angular_correction, ev = p.rawpidcontroller_linear_correction, nv = p.rawpidcontroller_angular_correction, iv = p.__wbg_rawdynamicraycastvehiclecontroller_free, rv = p.rawdynamicraycastvehiclecontroller_new, sv = p.rawdynamicraycastvehiclecontroller_current_vehicle_speed, av = p.rawdynamicraycastvehiclecontroller_chassis, ov = p.rawdynamicraycastvehiclecontroller_index_up_axis, cv = p.rawdynamicraycastvehiclecontroller_set_index_up_axis, lv = p.rawdynamicraycastvehiclecontroller_index_forward_axis, hv = p.rawdynamicraycastvehiclecontroller_set_index_forward_axis, dv = p.rawdynamicraycastvehiclecontroller_add_wheel, uv = p.rawdynamicraycastvehiclecontroller_num_wheels, fv = p.rawdynamicraycastvehiclecontroller_update_vehicle, _v = p.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs, pv = p.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs, mv = p.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length, gv = p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length, wv = p.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel, bv = p.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel, vv = p.rawdynamicraycastvehiclecontroller_wheel_radius, yv = p.rawdynamicraycastvehiclecontroller_set_wheel_radius, xv = p.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness, Sv = p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness, Mv = p.rawdynamicraycastvehiclecontroller_wheel_suspension_compression, Ev = p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression, Tv = p.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation, Rv = p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation, Av = p.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force, Cv = p.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force, Pv = p.rawdynamicraycastvehiclecontroller_wheel_brake, Iv = p.rawdynamicraycastvehiclecontroller_set_wheel_brake, Dv = p.rawdynamicraycastvehiclecontroller_wheel_steering, Lv = p.rawdynamicraycastvehiclecontroller_set_wheel_steering, Uv = p.rawdynamicraycastvehiclecontroller_wheel_engine_force, Nv = p.rawdynamicraycastvehiclecontroller_set_wheel_engine_force, Fv = p.rawdynamicraycastvehiclecontroller_wheel_direction_cs, Ov = p.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs, Bv = p.rawdynamicraycastvehiclecontroller_wheel_axle_cs, zv = p.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs, Hv = p.rawdynamicraycastvehiclecontroller_wheel_friction_slip, kv = p.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip, Vv = p.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness, Gv = p.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness, Wv = p.rawdynamicraycastvehiclecontroller_wheel_rotation, jv = p.rawdynamicraycastvehiclecontroller_wheel_forward_impulse, Xv = p.rawdynamicraycastvehiclecontroller_wheel_side_impulse, qv = p.rawdynamicraycastvehiclecontroller_wheel_suspension_force, Yv = p.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws, Kv = p.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws, Zv = p.rawdynamicraycastvehiclecontroller_wheel_suspension_length, Jv = p.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws, $v = p.rawdynamicraycastvehiclecontroller_wheel_is_in_contact, Qv = p.rawdynamicraycastvehiclecontroller_wheel_ground_object, ty = p.__wbg_rawccdsolver_free, ey = p.rawccdsolver_new, ny = p.rawimpulsejointset_jointType, iy = p.rawimpulsejointset_jointBodyHandle1, ry = p.rawimpulsejointset_jointBodyHandle2, sy = p.rawimpulsejointset_jointFrameX1, ay = p.rawimpulsejointset_jointFrameX2, oy = p.rawimpulsejointset_jointAnchor1, cy = p.rawimpulsejointset_jointAnchor2, ly = p.rawimpulsejointset_jointSetAnchor1, hy = p.rawimpulsejointset_jointSetAnchor2, dy = p.rawimpulsejointset_jointContactsEnabled, uy = p.rawimpulsejointset_jointSetContactsEnabled, fy = p.rawimpulsejointset_jointLimitsEnabled, _y = p.rawimpulsejointset_jointLimitsMin, py = p.rawimpulsejointset_jointLimitsMax, my = p.rawimpulsejointset_jointSetLimits, gy = p.rawimpulsejointset_jointConfigureMotorModel, wy = p.rawimpulsejointset_jointConfigureMotorVelocity, by = p.rawimpulsejointset_jointConfigureMotorPosition, vy = p.rawimpulsejointset_jointConfigureMotor, yy = p.__wbg_rawimpulsejointset_free, xy = p.rawimpulsejointset_new, Sy = p.rawimpulsejointset_createJoint, My = p.rawimpulsejointset_remove, Ey = p.rawimpulsejointset_len, Ty = p.rawimpulsejointset_contains, Ry = p.rawimpulsejointset_forEachJointHandle, Ay = p.rawimpulsejointset_forEachJointAttachedToRigidBody, Cy = p.__wbg_rawintegrationparameters_free, Py = p.rawintegrationparameters_new, Iy = p.rawintegrationparameters_dt, Dy = p.rawintegrationparameters_contact_erp, Ly = p.rawintegrationparameters_numSolverIterations, Uy = p.rawintegrationparameters_minIslandSize, Ny = p.rawintegrationparameters_maxCcdSubsteps, Fy = p.rawintegrationparameters_lengthUnit, Oy = p.rawintegrationparameters_set_dt, By = p.rawintegrationparameters_set_contact_natural_frequency, zy = p.rawintegrationparameters_set_normalizedAllowedLinearError, Hy = p.rawintegrationparameters_set_normalizedPredictionDistance, ky = p.rawintegrationparameters_set_numSolverIterations, Vy = p.rawintegrationparameters_set_minIslandSize, Gy = p.rawintegrationparameters_set_maxCcdSubsteps, Wy = p.rawintegrationparameters_set_lengthUnit, jy = p.rawintegrationparameters_switchToStandardPgsSolver, Xy = p.rawintegrationparameters_switchToSmallStepsPgsSolver, qy = p.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart, Yy = p.__wbg_rawislandmanager_free, Ky = p.rawislandmanager_new, Zy = p.rawislandmanager_forEachActiveRigidBodyHandle, Jy = p.__wbg_rawgenericjoint_free, $y = p.rawgenericjoint_generic, Qy = p.rawgenericjoint_spring, t0 = p.rawgenericjoint_rope, e0 = p.rawgenericjoint_spherical, n0 = p.rawgenericjoint_prismatic, i0 = p.rawgenericjoint_fixed, r0 = p.rawgenericjoint_revolute, s0 = p.rawmultibodyjointset_jointType, a0 = p.rawmultibodyjointset_jointFrameX1, o0 = p.rawmultibodyjointset_jointFrameX2, c0 = p.rawmultibodyjointset_jointAnchor1, l0 = p.rawmultibodyjointset_jointAnchor2, h0 = p.rawmultibodyjointset_jointContactsEnabled, d0 = p.rawmultibodyjointset_jointSetContactsEnabled, u0 = p.rawmultibodyjointset_jointLimitsEnabled, f0 = p.rawmultibodyjointset_jointLimitsMin, _0 = p.rawmultibodyjointset_jointLimitsMax, p0 = p.__wbg_rawmultibodyjointset_free, m0 = p.rawmultibodyjointset_new, g0 = p.rawmultibodyjointset_createJoint, w0 = p.rawmultibodyjointset_remove, b0 = p.rawmultibodyjointset_contains, v0 = p.rawmultibodyjointset_forEachJointHandle, y0 = p.rawmultibodyjointset_forEachJointAttachedToRigidBody, x0 = p.rawrigidbodyset_rbTranslation, S0 = p.rawrigidbodyset_rbRotation, M0 = p.rawrigidbodyset_rbSleep, E0 = p.rawrigidbodyset_rbIsSleeping, T0 = p.rawrigidbodyset_rbIsMoving, R0 = p.rawrigidbodyset_rbNextTranslation, A0 = p.rawrigidbodyset_rbNextRotation, C0 = p.rawrigidbodyset_rbSetTranslation, P0 = p.rawrigidbodyset_rbSetRotation, I0 = p.rawrigidbodyset_rbSetLinvel, D0 = p.rawrigidbodyset_rbSetAngvel, L0 = p.rawrigidbodyset_rbSetNextKinematicTranslation, U0 = p.rawrigidbodyset_rbSetNextKinematicRotation, N0 = p.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, F0 = p.rawrigidbodyset_rbSetAdditionalMass, O0 = p.rawrigidbodyset_rbSetAdditionalMassProperties, B0 = p.rawrigidbodyset_rbLinvel, z0 = p.rawrigidbodyset_rbAngvel, H0 = p.rawrigidbodyset_rbVelocityAtPoint, k0 = p.rawrigidbodyset_rbLockTranslations, V0 = p.rawrigidbodyset_rbSetEnabledTranslations, G0 = p.rawrigidbodyset_rbLockRotations, W0 = p.rawrigidbodyset_rbSetEnabledRotations, j0 = p.rawrigidbodyset_rbDominanceGroup, X0 = p.rawrigidbodyset_rbSetDominanceGroup, q0 = p.rawrigidbodyset_rbEnableCcd, Y0 = p.rawrigidbodyset_rbSetSoftCcdPrediction, K0 = p.rawrigidbodyset_rbMass, Z0 = p.rawrigidbodyset_rbInvMass, J0 = p.rawrigidbodyset_rbEffectiveInvMass, $0 = p.rawrigidbodyset_rbLocalCom, Q0 = p.rawrigidbodyset_rbWorldCom, tx = p.rawrigidbodyset_rbInvPrincipalInertiaSqrt, ex = p.rawrigidbodyset_rbPrincipalInertiaLocalFrame, nx = p.rawrigidbodyset_rbPrincipalInertia, ix = p.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt, rx = p.rawrigidbodyset_rbEffectiveAngularInertia, sx = p.rawrigidbodyset_rbWakeUp, ax = p.rawrigidbodyset_rbIsCcdEnabled, ox = p.rawrigidbodyset_rbSoftCcdPrediction, cx = p.rawrigidbodyset_rbNumColliders, lx = p.rawrigidbodyset_rbCollider, hx = p.rawrigidbodyset_rbBodyType, dx = p.rawrigidbodyset_rbSetBodyType, ux = p.rawrigidbodyset_rbIsFixed, fx = p.rawrigidbodyset_rbIsKinematic, _x = p.rawrigidbodyset_rbIsDynamic, px = p.rawrigidbodyset_rbLinearDamping, mx = p.rawrigidbodyset_rbAngularDamping, gx = p.rawrigidbodyset_rbSetLinearDamping, wx = p.rawrigidbodyset_rbSetAngularDamping, bx = p.rawrigidbodyset_rbSetEnabled, vx = p.rawrigidbodyset_rbIsEnabled, yx = p.rawrigidbodyset_rbGravityScale, xx = p.rawrigidbodyset_rbSetGravityScale, Sx = p.rawrigidbodyset_rbResetForces, Mx = p.rawrigidbodyset_rbResetTorques, Ex = p.rawrigidbodyset_rbAddForce, Tx = p.rawrigidbodyset_rbApplyImpulse, Rx = p.rawrigidbodyset_rbAddTorque, Ax = p.rawrigidbodyset_rbApplyTorqueImpulse, Cx = p.rawrigidbodyset_rbAddForceAtPoint, Px = p.rawrigidbodyset_rbApplyImpulseAtPoint, Ix = p.rawrigidbodyset_rbAdditionalSolverIterations, Dx = p.rawrigidbodyset_rbSetAdditionalSolverIterations, Lx = p.rawrigidbodyset_rbUserData, Ux = p.rawrigidbodyset_rbSetUserData, Nx = p.rawrigidbodyset_rbUserForce, Fx = p.rawrigidbodyset_rbUserTorque, Ox = p.__wbg_rawrigidbodyset_free, Bx = p.rawrigidbodyset_new, zx = p.rawrigidbodyset_createRigidBody, Hx = p.rawrigidbodyset_remove, kx = p.rawrigidbodyset_contains, Vx = p.rawrigidbodyset_forEachRigidBodyHandle, Gx = p.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, Wx = p.__wbg_rawbroadphase_free, jx = p.rawbroadphase_new, Xx = p.rawcolliderset_coTranslation, qx = p.rawcolliderset_coRotation, Yx = p.rawcolliderset_coSetTranslation, Kx = p.rawcolliderset_coSetTranslationWrtParent, Zx = p.rawcolliderset_coSetRotation, Jx = p.rawcolliderset_coSetRotationWrtParent, $x = p.rawcolliderset_coIsSensor, Qx = p.rawcolliderset_coShapeType, tS = p.rawcolliderset_coHalfspaceNormal, eS = p.rawcolliderset_coHalfExtents, nS = p.rawcolliderset_coSetHalfExtents, iS = p.rawcolliderset_coRadius, rS = p.rawcolliderset_coSetRadius, sS = p.rawcolliderset_coHalfHeight, aS = p.rawcolliderset_coSetHalfHeight, oS = p.rawcolliderset_coRoundRadius, cS = p.rawcolliderset_coSetRoundRadius, lS = p.rawcolliderset_coVertices, hS = p.rawcolliderset_coIndices, dS = p.rawcolliderset_coTriMeshFlags, uS = p.rawcolliderset_coHeightFieldFlags, fS = p.rawcolliderset_coHeightfieldHeights, _S = p.rawcolliderset_coHeightfieldScale, pS = p.rawcolliderset_coHeightfieldNRows, mS = p.rawcolliderset_coHeightfieldNCols, gS = p.rawcolliderset_coParent, wS = p.rawcolliderset_coSetEnabled, bS = p.rawcolliderset_coIsEnabled, vS = p.rawcolliderset_coSetContactSkin, yS = p.rawcolliderset_coContactSkin, xS = p.rawcolliderset_coFriction, SS = p.rawcolliderset_coRestitution, MS = p.rawcolliderset_coDensity, ES = p.rawcolliderset_coMass, TS = p.rawcolliderset_coVolume, RS = p.rawcolliderset_coCollisionGroups, AS = p.rawcolliderset_coSolverGroups, CS = p.rawcolliderset_coActiveHooks, PS = p.rawcolliderset_coActiveCollisionTypes, IS = p.rawcolliderset_coActiveEvents, DS = p.rawcolliderset_coContactForceEventThreshold, LS = p.rawcolliderset_coContainsPoint, US = p.rawcolliderset_coCastShape, NS = p.rawcolliderset_coCastCollider, FS = p.rawcolliderset_coIntersectsShape, OS = p.rawcolliderset_coContactShape, BS = p.rawcolliderset_coContactCollider, zS = p.rawcolliderset_coProjectPoint, HS = p.rawcolliderset_coIntersectsRay, kS = p.rawcolliderset_coCastRay, VS = p.rawcolliderset_coCastRayAndGetNormal, GS = p.rawcolliderset_coSetSensor, WS = p.rawcolliderset_coSetRestitution, jS = p.rawcolliderset_coSetFriction, XS = p.rawcolliderset_coFrictionCombineRule, qS = p.rawcolliderset_coSetFrictionCombineRule, YS = p.rawcolliderset_coRestitutionCombineRule, KS = p.rawcolliderset_coSetRestitutionCombineRule, ZS = p.rawcolliderset_coSetCollisionGroups, JS = p.rawcolliderset_coSetSolverGroups, $S = p.rawcolliderset_coSetActiveHooks, QS = p.rawcolliderset_coSetActiveEvents, tM = p.rawcolliderset_coSetActiveCollisionTypes, eM = p.rawcolliderset_coSetShape, nM = p.rawcolliderset_coSetContactForceEventThreshold, iM = p.rawcolliderset_coSetDensity, rM = p.rawcolliderset_coSetMass, sM = p.rawcolliderset_coSetMassProperties, aM = p.__wbg_rawcolliderset_free, oM = p.rawcolliderset_new, cM = p.rawcolliderset_len, lM = p.rawcolliderset_contains, hM = p.rawcolliderset_createCollider, dM = p.rawcolliderset_remove, uM = p.rawcolliderset_forEachColliderHandle, fM = p.__wbg_rawshapecontact_free, _M = p.__wbg_rawnarrowphase_free, pM = p.rawnarrowphase_new, mM = p.rawnarrowphase_contact_pairs_with, gM = p.rawnarrowphase_contact_pair, wM = p.rawnarrowphase_intersection_pairs_with, bM = p.rawnarrowphase_intersection_pair, vM = p.__wbg_rawcontactmanifold_free, yM = p.rawcontactpair_collider1, xM = p.rawcontactpair_collider2, SM = p.rawcontactpair_numContactManifolds, MM = p.rawcontactpair_contactManifold, EM = p.rawcontactmanifold_normal, TM = p.rawcontactmanifold_local_n1, RM = p.rawcontactmanifold_local_n2, AM = p.rawcontactmanifold_subshape1, CM = p.rawcontactmanifold_subshape2, PM = p.rawcontactmanifold_num_contacts, IM = p.rawcontactmanifold_contact_local_p1, DM = p.rawcontactmanifold_contact_local_p2, LM = p.rawcontactmanifold_contact_dist, UM = p.rawcontactmanifold_contact_fid1, NM = p.rawcontactmanifold_contact_fid2, FM = p.rawcontactmanifold_contact_impulse, OM = p.rawcontactmanifold_contact_tangent_impulse_x, BM = p.rawcontactmanifold_contact_tangent_impulse_y, zM = p.rawcontactmanifold_num_solver_contacts, HM = p.rawcontactmanifold_solver_contact_point, kM = p.rawcontactmanifold_solver_contact_dist, VM = p.rawcontactmanifold_solver_contact_friction, GM = p.rawcontactmanifold_solver_contact_restitution, WM = p.rawcontactmanifold_solver_contact_tangent_velocity, jM = p.__wbg_rawpointprojection_free, XM = p.rawpointprojection_point, qM = p.rawpointprojection_isInside, YM = p.__wbg_rawpointcolliderprojection_free, KM = p.rawpointcolliderprojection_colliderHandle, ZM = p.rawpointcolliderprojection_point, JM = p.rawpointcolliderprojection_isInside, $M = p.rawpointcolliderprojection_featureType, QM = p.rawpointcolliderprojection_featureId, tE = p.__wbg_rawrayintersection_free, eE = p.__wbg_rawraycolliderhit_free, nE = p.__wbg_rawshape_free, iE = p.rawshape_cuboid, rE = p.rawshape_roundCuboid, sE = p.rawshape_ball, aE = p.rawshape_halfspace, oE = p.rawshape_capsule, cE = p.rawshape_cylinder, lE = p.rawshape_roundCylinder, hE = p.rawshape_cone, dE = p.rawshape_roundCone, uE = p.rawshape_polyline, fE = p.rawshape_trimesh, _E = p.rawshape_heightfield, pE = p.rawshape_segment, mE = p.rawshape_triangle, gE = p.rawshape_roundTriangle, wE = p.rawshape_convexHull, bE = p.rawshape_roundConvexHull, vE = p.rawshape_convexMesh, yE = p.rawshape_roundConvexMesh, xE = p.rawshape_castShape, SE = p.rawshape_intersectsShape, ME = p.rawshape_contactShape, EE = p.rawshape_containsPoint, TE = p.rawshape_projectPoint, RE = p.rawshape_intersectsRay, AE = p.rawshape_castRay, CE = p.rawshape_castRayAndGetNormal, PE = p.__wbg_rawshapecasthit_free, IE = p.rawshapecasthit_witness1, DE = p.rawshapecasthit_normal1, LE = p.rawshapecasthit_normal2, UE = p.__wbg_rawcollidershapecasthit_free, NE = p.rawcollidershapecasthit_time_of_impact, FE = p.rawcollidershapecasthit_witness1, OE = p.rawcollidershapecasthit_witness2, BE = p.rawrotation_new, zE = p.rawrotation_identity, HE = p.rawrotation_x, kE = p.rawrotation_w, VE = p.rawvector_zero, GE = p.rawvector_new, WE = p.rawvector_set_x, jE = p.rawvector_set_z, XE = p.rawvector_xyz, qE = p.rawvector_yxz, YE = p.rawvector_zxy, KE = p.rawvector_xzy, ZE = p.rawvector_yzx, JE = p.rawvector_zyx, $E = p.rawsdpmatrix3_elements, QE = p.__wbg_rawdebugrenderpipeline_free, tT = p.rawdebugrenderpipeline_new, eT = p.rawdebugrenderpipeline_vertices, nT = p.rawdebugrenderpipeline_colors, iT = p.rawdebugrenderpipeline_render, rT = p.__wbg_raweventqueue_free, sT = p.__wbg_rawcontactforceevent_free, aT = p.rawcontactforceevent_collider2, oT = p.rawcontactforceevent_total_force, cT = p.rawcontactforceevent_total_force_magnitude, lT = p.rawcontactforceevent_max_force_direction, hT = p.rawcontactforceevent_max_force_magnitude, dT = p.raweventqueue_new, uT = p.raweventqueue_drainCollisionEvents, fT = p.raweventqueue_drainContactForceEvents, _T = p.raweventqueue_clear, pT = p.__wbg_rawphysicspipeline_free, mT = p.rawphysicspipeline_new, gT = p.rawphysicspipeline_step, wT = p.rawphysicspipeline_stepWithEvents, bT = p.rawquerypipeline_new, vT = p.rawquerypipeline_update, yT = p.rawquerypipeline_castRay, xT = p.rawquerypipeline_castRayAndGetNormal, ST = p.rawquerypipeline_intersectionsWithRay, MT = p.rawquerypipeline_intersectionWithShape, ET = p.rawquerypipeline_projectPoint, TT = p.rawquerypipeline_projectPointAndGetFeature, RT = p.rawquerypipeline_intersectionsWithPoint, AT = p.rawquerypipeline_castShape, CT = p.rawquerypipeline_intersectionsWithShape, PT = p.rawquerypipeline_collidersWithAabbIntersectingAabb, IT = p.__wbg_rawdeserializedworld_free, DT = p.rawdeserializedworld_takeGravity, LT = p.rawdeserializedworld_takeIntegrationParameters, UT = p.rawdeserializedworld_takeIslandManager, NT = p.rawdeserializedworld_takeBroadPhase, FT = p.rawdeserializedworld_takeNarrowPhase, OT = p.rawdeserializedworld_takeBodies, BT = p.rawdeserializedworld_takeColliders, zT = p.rawdeserializedworld_takeImpulseJoints, HT = p.rawdeserializedworld_takeMultibodyJoints, kT = p.__wbg_rawserializationpipeline_free, VT = p.rawserializationpipeline_new, GT = p.rawserializationpipeline_serializeAll, WT = p.rawserializationpipeline_deserializeAll, jT = p.rawcolliderset_isHandleValid, XT = p.rawkinematiccharactercontroller_offset, qT = p.rawintegrationparameters_normalizedAllowedLinearError, YT = p.rawintegrationparameters_numAdditionalFrictionIterations, KT = p.rawintegrationparameters_numInternalPgsIterations, ZT = p.rawrigidbodyset_len, JT = p.rawshapecontact_distance, $T = p.rawrayintersection_featureType, QT = p.rawraycolliderintersection_colliderHandle, tR = p.rawrayintersection_time_of_impact, eR = p.rawraycolliderintersection_featureType, nR = p.rawraycolliderhit_colliderHandle, iR = p.rawraycolliderintersection_time_of_impact, rR = p.rawcollidershapecasthit_colliderHandle, sR = p.rawraycolliderhit_timeOfImpact, aR = p.rawshapecasthit_time_of_impact, oR = p.rawrotation_y, cR = p.rawrotation_z, lR = p.rawvector_x, hR = p.rawvector_y, dR = p.rawvector_z, uR = p.rawcontactforceevent_collider1, fR = p.rawintegrationparameters_normalizedPredictionDistance, _R = p.__wbg_rawquerypipeline_free, pR = p.rawrayintersection_featureId, mR = p.rawraycolliderintersection_featureId, gR = p.rawkinematiccharactercontroller_up, wR = p.rawshapecontact_normal2, bR = p.rawshapecontact_point1, vR = p.rawshapecontact_point2, yR = p.rawrayintersection_normal, xR = p.rawraycolliderintersection_normal, SR = p.rawshapecontact_normal1, MR = p.rawcollidershapecasthit_normal1, ER = p.rawcollidershapecasthit_normal2, TR = p.rawshapecasthit_witness2, RR = p.rawintegrationparameters_set_numAdditionalFrictionIterations, AR = p.rawintegrationparameters_set_numInternalPgsIterations, CR = p.rawvector_set_y, PR = p.__wbg_rawrotation_free, IR = p.__wbg_rawcontactpair_free, DR = p.__wbg_rawvector_free, LR = p.__wbg_rawraycolliderintersection_free, UR = p.__wbg_rawsdpmatrix3_free, NR = p.__wbindgen_export_0, FR = p.__wbindgen_add_to_stack_pointer, OR = p.__wbindgen_export_1, BR = p.__wbindgen_export_2, zR = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wbg_rawbroadphase_free: Wx,
        __wbg_rawccdsolver_free: ty,
        __wbg_rawcharactercollision_free: Fb,
        __wbg_rawcolliderset_free: aM,
        __wbg_rawcollidershapecasthit_free: UE,
        __wbg_rawcontactforceevent_free: sT,
        __wbg_rawcontactmanifold_free: vM,
        __wbg_rawcontactpair_free: IR,
        __wbg_rawdebugrenderpipeline_free: QE,
        __wbg_rawdeserializedworld_free: IT,
        __wbg_rawdynamicraycastvehiclecontroller_free: iv,
        __wbg_raweventqueue_free: rT,
        __wbg_rawgenericjoint_free: Jy,
        __wbg_rawimpulsejointset_free: yy,
        __wbg_rawintegrationparameters_free: Cy,
        __wbg_rawislandmanager_free: Yy,
        __wbg_rawkinematiccharactercontroller_free: lb,
        __wbg_rawmultibodyjointset_free: p0,
        __wbg_rawnarrowphase_free: _M,
        __wbg_rawphysicspipeline_free: pT,
        __wbg_rawpidcontroller_free: Xb,
        __wbg_rawpointcolliderprojection_free: YM,
        __wbg_rawpointprojection_free: jM,
        __wbg_rawquerypipeline_free: _R,
        __wbg_rawraycolliderhit_free: eE,
        __wbg_rawraycolliderintersection_free: LR,
        __wbg_rawrayintersection_free: tE,
        __wbg_rawrigidbodyset_free: Ox,
        __wbg_rawrotation_free: PR,
        __wbg_rawsdpmatrix3_free: UR,
        __wbg_rawserializationpipeline_free: kT,
        __wbg_rawshape_free: nE,
        __wbg_rawshapecasthit_free: PE,
        __wbg_rawshapecontact_free: fM,
        __wbg_rawvector_free: DR,
        __wbindgen_add_to_stack_pointer: FR,
        __wbindgen_export_0: NR,
        __wbindgen_export_1: OR,
        __wbindgen_export_2: BR,
        memory: ob,
        rawbroadphase_new: jx,
        rawccdsolver_new: ey,
        rawcharactercollision_handle: Bb,
        rawcharactercollision_new: Ob,
        rawcharactercollision_toi: kb,
        rawcharactercollision_translationDeltaApplied: zb,
        rawcharactercollision_translationDeltaRemaining: Hb,
        rawcharactercollision_worldNormal1: Wb,
        rawcharactercollision_worldNormal2: jb,
        rawcharactercollision_worldWitness1: Vb,
        rawcharactercollision_worldWitness2: Gb,
        rawcolliderset_coActiveCollisionTypes: PS,
        rawcolliderset_coActiveEvents: IS,
        rawcolliderset_coActiveHooks: CS,
        rawcolliderset_coCastCollider: NS,
        rawcolliderset_coCastRay: kS,
        rawcolliderset_coCastRayAndGetNormal: VS,
        rawcolliderset_coCastShape: US,
        rawcolliderset_coCollisionGroups: RS,
        rawcolliderset_coContactCollider: BS,
        rawcolliderset_coContactForceEventThreshold: DS,
        rawcolliderset_coContactShape: OS,
        rawcolliderset_coContactSkin: yS,
        rawcolliderset_coContainsPoint: LS,
        rawcolliderset_coDensity: MS,
        rawcolliderset_coFriction: xS,
        rawcolliderset_coFrictionCombineRule: XS,
        rawcolliderset_coHalfExtents: eS,
        rawcolliderset_coHalfHeight: sS,
        rawcolliderset_coHalfspaceNormal: tS,
        rawcolliderset_coHeightFieldFlags: uS,
        rawcolliderset_coHeightfieldHeights: fS,
        rawcolliderset_coHeightfieldNCols: mS,
        rawcolliderset_coHeightfieldNRows: pS,
        rawcolliderset_coHeightfieldScale: _S,
        rawcolliderset_coIndices: hS,
        rawcolliderset_coIntersectsRay: HS,
        rawcolliderset_coIntersectsShape: FS,
        rawcolliderset_coIsEnabled: bS,
        rawcolliderset_coIsSensor: $x,
        rawcolliderset_coMass: ES,
        rawcolliderset_coParent: gS,
        rawcolliderset_coProjectPoint: zS,
        rawcolliderset_coRadius: iS,
        rawcolliderset_coRestitution: SS,
        rawcolliderset_coRestitutionCombineRule: YS,
        rawcolliderset_coRotation: qx,
        rawcolliderset_coRoundRadius: oS,
        rawcolliderset_coSetActiveCollisionTypes: tM,
        rawcolliderset_coSetActiveEvents: QS,
        rawcolliderset_coSetActiveHooks: $S,
        rawcolliderset_coSetCollisionGroups: ZS,
        rawcolliderset_coSetContactForceEventThreshold: nM,
        rawcolliderset_coSetContactSkin: vS,
        rawcolliderset_coSetDensity: iM,
        rawcolliderset_coSetEnabled: wS,
        rawcolliderset_coSetFriction: jS,
        rawcolliderset_coSetFrictionCombineRule: qS,
        rawcolliderset_coSetHalfExtents: nS,
        rawcolliderset_coSetHalfHeight: aS,
        rawcolliderset_coSetMass: rM,
        rawcolliderset_coSetMassProperties: sM,
        rawcolliderset_coSetRadius: rS,
        rawcolliderset_coSetRestitution: WS,
        rawcolliderset_coSetRestitutionCombineRule: KS,
        rawcolliderset_coSetRotation: Zx,
        rawcolliderset_coSetRotationWrtParent: Jx,
        rawcolliderset_coSetRoundRadius: cS,
        rawcolliderset_coSetSensor: GS,
        rawcolliderset_coSetShape: eM,
        rawcolliderset_coSetSolverGroups: JS,
        rawcolliderset_coSetTranslation: Yx,
        rawcolliderset_coSetTranslationWrtParent: Kx,
        rawcolliderset_coShapeType: Qx,
        rawcolliderset_coSolverGroups: AS,
        rawcolliderset_coTranslation: Xx,
        rawcolliderset_coTriMeshFlags: dS,
        rawcolliderset_coVertices: lS,
        rawcolliderset_coVolume: TS,
        rawcolliderset_contains: lM,
        rawcolliderset_createCollider: hM,
        rawcolliderset_forEachColliderHandle: uM,
        rawcolliderset_isHandleValid: jT,
        rawcolliderset_len: cM,
        rawcolliderset_new: oM,
        rawcolliderset_remove: dM,
        rawcollidershapecasthit_colliderHandle: rR,
        rawcollidershapecasthit_normal1: MR,
        rawcollidershapecasthit_normal2: ER,
        rawcollidershapecasthit_time_of_impact: NE,
        rawcollidershapecasthit_witness1: FE,
        rawcollidershapecasthit_witness2: OE,
        rawcontactforceevent_collider1: uR,
        rawcontactforceevent_collider2: aT,
        rawcontactforceevent_max_force_direction: lT,
        rawcontactforceevent_max_force_magnitude: hT,
        rawcontactforceevent_total_force: oT,
        rawcontactforceevent_total_force_magnitude: cT,
        rawcontactmanifold_contact_dist: LM,
        rawcontactmanifold_contact_fid1: UM,
        rawcontactmanifold_contact_fid2: NM,
        rawcontactmanifold_contact_impulse: FM,
        rawcontactmanifold_contact_local_p1: IM,
        rawcontactmanifold_contact_local_p2: DM,
        rawcontactmanifold_contact_tangent_impulse_x: OM,
        rawcontactmanifold_contact_tangent_impulse_y: BM,
        rawcontactmanifold_local_n1: TM,
        rawcontactmanifold_local_n2: RM,
        rawcontactmanifold_normal: EM,
        rawcontactmanifold_num_contacts: PM,
        rawcontactmanifold_num_solver_contacts: zM,
        rawcontactmanifold_solver_contact_dist: kM,
        rawcontactmanifold_solver_contact_friction: VM,
        rawcontactmanifold_solver_contact_point: HM,
        rawcontactmanifold_solver_contact_restitution: GM,
        rawcontactmanifold_solver_contact_tangent_velocity: WM,
        rawcontactmanifold_subshape1: AM,
        rawcontactmanifold_subshape2: CM,
        rawcontactpair_collider1: yM,
        rawcontactpair_collider2: xM,
        rawcontactpair_contactManifold: MM,
        rawcontactpair_numContactManifolds: SM,
        rawdebugrenderpipeline_colors: nT,
        rawdebugrenderpipeline_new: tT,
        rawdebugrenderpipeline_render: iT,
        rawdebugrenderpipeline_vertices: eT,
        rawdeserializedworld_takeBodies: OT,
        rawdeserializedworld_takeBroadPhase: NT,
        rawdeserializedworld_takeColliders: BT,
        rawdeserializedworld_takeGravity: DT,
        rawdeserializedworld_takeImpulseJoints: zT,
        rawdeserializedworld_takeIntegrationParameters: LT,
        rawdeserializedworld_takeIslandManager: UT,
        rawdeserializedworld_takeMultibodyJoints: HT,
        rawdeserializedworld_takeNarrowPhase: FT,
        rawdynamicraycastvehiclecontroller_add_wheel: dv,
        rawdynamicraycastvehiclecontroller_chassis: av,
        rawdynamicraycastvehiclecontroller_current_vehicle_speed: sv,
        rawdynamicraycastvehiclecontroller_index_forward_axis: lv,
        rawdynamicraycastvehiclecontroller_index_up_axis: ov,
        rawdynamicraycastvehiclecontroller_new: rv,
        rawdynamicraycastvehiclecontroller_num_wheels: uv,
        rawdynamicraycastvehiclecontroller_set_index_forward_axis: hv,
        rawdynamicraycastvehiclecontroller_set_index_up_axis: cv,
        rawdynamicraycastvehiclecontroller_set_wheel_axle_cs: zv,
        rawdynamicraycastvehiclecontroller_set_wheel_brake: Iv,
        rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs: pv,
        rawdynamicraycastvehiclecontroller_set_wheel_direction_cs: Ov,
        rawdynamicraycastvehiclecontroller_set_wheel_engine_force: Nv,
        rawdynamicraycastvehiclecontroller_set_wheel_friction_slip: kv,
        rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force: Cv,
        rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel: bv,
        rawdynamicraycastvehiclecontroller_set_wheel_radius: yv,
        rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness: Gv,
        rawdynamicraycastvehiclecontroller_set_wheel_steering: Lv,
        rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression: Ev,
        rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation: Rv,
        rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length: gv,
        rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness: Sv,
        rawdynamicraycastvehiclecontroller_update_vehicle: fv,
        rawdynamicraycastvehiclecontroller_wheel_axle_cs: Bv,
        rawdynamicraycastvehiclecontroller_wheel_brake: Pv,
        rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs: _v,
        rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws: Yv,
        rawdynamicraycastvehiclecontroller_wheel_contact_point_ws: Kv,
        rawdynamicraycastvehiclecontroller_wheel_direction_cs: Fv,
        rawdynamicraycastvehiclecontroller_wheel_engine_force: Uv,
        rawdynamicraycastvehiclecontroller_wheel_forward_impulse: jv,
        rawdynamicraycastvehiclecontroller_wheel_friction_slip: Hv,
        rawdynamicraycastvehiclecontroller_wheel_ground_object: Qv,
        rawdynamicraycastvehiclecontroller_wheel_hard_point_ws: Jv,
        rawdynamicraycastvehiclecontroller_wheel_is_in_contact: $v,
        rawdynamicraycastvehiclecontroller_wheel_max_suspension_force: Av,
        rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel: wv,
        rawdynamicraycastvehiclecontroller_wheel_radius: vv,
        rawdynamicraycastvehiclecontroller_wheel_rotation: Wv,
        rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness: Vv,
        rawdynamicraycastvehiclecontroller_wheel_side_impulse: Xv,
        rawdynamicraycastvehiclecontroller_wheel_steering: Dv,
        rawdynamicraycastvehiclecontroller_wheel_suspension_compression: Mv,
        rawdynamicraycastvehiclecontroller_wheel_suspension_force: qv,
        rawdynamicraycastvehiclecontroller_wheel_suspension_length: Zv,
        rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation: Tv,
        rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length: mv,
        rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness: xv,
        raweventqueue_clear: _T,
        raweventqueue_drainCollisionEvents: uT,
        raweventqueue_drainContactForceEvents: fT,
        raweventqueue_new: dT,
        rawgenericjoint_fixed: i0,
        rawgenericjoint_generic: $y,
        rawgenericjoint_prismatic: n0,
        rawgenericjoint_revolute: r0,
        rawgenericjoint_rope: t0,
        rawgenericjoint_spherical: e0,
        rawgenericjoint_spring: Qy,
        rawimpulsejointset_contains: Ty,
        rawimpulsejointset_createJoint: Sy,
        rawimpulsejointset_forEachJointAttachedToRigidBody: Ay,
        rawimpulsejointset_forEachJointHandle: Ry,
        rawimpulsejointset_jointAnchor1: oy,
        rawimpulsejointset_jointAnchor2: cy,
        rawimpulsejointset_jointBodyHandle1: iy,
        rawimpulsejointset_jointBodyHandle2: ry,
        rawimpulsejointset_jointConfigureMotor: vy,
        rawimpulsejointset_jointConfigureMotorModel: gy,
        rawimpulsejointset_jointConfigureMotorPosition: by,
        rawimpulsejointset_jointConfigureMotorVelocity: wy,
        rawimpulsejointset_jointContactsEnabled: dy,
        rawimpulsejointset_jointFrameX1: sy,
        rawimpulsejointset_jointFrameX2: ay,
        rawimpulsejointset_jointLimitsEnabled: fy,
        rawimpulsejointset_jointLimitsMax: py,
        rawimpulsejointset_jointLimitsMin: _y,
        rawimpulsejointset_jointSetAnchor1: ly,
        rawimpulsejointset_jointSetAnchor2: hy,
        rawimpulsejointset_jointSetContactsEnabled: uy,
        rawimpulsejointset_jointSetLimits: my,
        rawimpulsejointset_jointType: ny,
        rawimpulsejointset_len: Ey,
        rawimpulsejointset_new: xy,
        rawimpulsejointset_remove: My,
        rawintegrationparameters_contact_erp: Dy,
        rawintegrationparameters_dt: Iy,
        rawintegrationparameters_lengthUnit: Fy,
        rawintegrationparameters_maxCcdSubsteps: Ny,
        rawintegrationparameters_minIslandSize: Uy,
        rawintegrationparameters_new: Py,
        rawintegrationparameters_normalizedAllowedLinearError: qT,
        rawintegrationparameters_normalizedPredictionDistance: fR,
        rawintegrationparameters_numAdditionalFrictionIterations: YT,
        rawintegrationparameters_numInternalPgsIterations: KT,
        rawintegrationparameters_numSolverIterations: Ly,
        rawintegrationparameters_set_contact_natural_frequency: By,
        rawintegrationparameters_set_dt: Oy,
        rawintegrationparameters_set_lengthUnit: Wy,
        rawintegrationparameters_set_maxCcdSubsteps: Gy,
        rawintegrationparameters_set_minIslandSize: Vy,
        rawintegrationparameters_set_normalizedAllowedLinearError: zy,
        rawintegrationparameters_set_normalizedPredictionDistance: Hy,
        rawintegrationparameters_set_numAdditionalFrictionIterations: RR,
        rawintegrationparameters_set_numInternalPgsIterations: AR,
        rawintegrationparameters_set_numSolverIterations: ky,
        rawintegrationparameters_switchToSmallStepsPgsSolver: Xy,
        rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart: qy,
        rawintegrationparameters_switchToStandardPgsSolver: jy,
        rawislandmanager_forEachActiveRigidBodyHandle: Zy,
        rawislandmanager_new: Ky,
        rawkinematiccharactercontroller_autostepEnabled: vb,
        rawkinematiccharactercontroller_autostepIncludesDynamicBodies: bb,
        rawkinematiccharactercontroller_autostepMaxHeight: gb,
        rawkinematiccharactercontroller_autostepMinWidth: wb,
        rawkinematiccharactercontroller_computeColliderMovement: Ib,
        rawkinematiccharactercontroller_computedCollision: Nb,
        rawkinematiccharactercontroller_computedGrounded: Lb,
        rawkinematiccharactercontroller_computedMovement: Db,
        rawkinematiccharactercontroller_disableAutostep: xb,
        rawkinematiccharactercontroller_disableSnapToGround: Cb,
        rawkinematiccharactercontroller_enableAutostep: yb,
        rawkinematiccharactercontroller_enableSnapToGround: Ab,
        rawkinematiccharactercontroller_maxSlopeClimbAngle: Sb,
        rawkinematiccharactercontroller_minSlopeSlideAngle: Eb,
        rawkinematiccharactercontroller_new: hb,
        rawkinematiccharactercontroller_normalNudgeFactor: ub,
        rawkinematiccharactercontroller_numComputedCollisions: Ub,
        rawkinematiccharactercontroller_offset: XT,
        rawkinematiccharactercontroller_setMaxSlopeClimbAngle: Mb,
        rawkinematiccharactercontroller_setMinSlopeSlideAngle: Tb,
        rawkinematiccharactercontroller_setNormalNudgeFactor: fb,
        rawkinematiccharactercontroller_setOffset: _b,
        rawkinematiccharactercontroller_setSlideEnabled: mb,
        rawkinematiccharactercontroller_setUp: db,
        rawkinematiccharactercontroller_slideEnabled: pb,
        rawkinematiccharactercontroller_snapToGroundDistance: Rb,
        rawkinematiccharactercontroller_snapToGroundEnabled: Pb,
        rawkinematiccharactercontroller_up: gR,
        rawmultibodyjointset_contains: b0,
        rawmultibodyjointset_createJoint: g0,
        rawmultibodyjointset_forEachJointAttachedToRigidBody: y0,
        rawmultibodyjointset_forEachJointHandle: v0,
        rawmultibodyjointset_jointAnchor1: c0,
        rawmultibodyjointset_jointAnchor2: l0,
        rawmultibodyjointset_jointContactsEnabled: h0,
        rawmultibodyjointset_jointFrameX1: a0,
        rawmultibodyjointset_jointFrameX2: o0,
        rawmultibodyjointset_jointLimitsEnabled: u0,
        rawmultibodyjointset_jointLimitsMax: _0,
        rawmultibodyjointset_jointLimitsMin: f0,
        rawmultibodyjointset_jointSetContactsEnabled: d0,
        rawmultibodyjointset_jointType: s0,
        rawmultibodyjointset_new: m0,
        rawmultibodyjointset_remove: w0,
        rawnarrowphase_contact_pair: gM,
        rawnarrowphase_contact_pairs_with: mM,
        rawnarrowphase_intersection_pair: bM,
        rawnarrowphase_intersection_pairs_with: wM,
        rawnarrowphase_new: pM,
        rawphysicspipeline_new: mT,
        rawphysicspipeline_step: gT,
        rawphysicspipeline_stepWithEvents: wT,
        rawpidcontroller_angular_correction: nv,
        rawpidcontroller_apply_angular_correction: tv,
        rawpidcontroller_apply_linear_correction: Qb,
        rawpidcontroller_linear_correction: ev,
        rawpidcontroller_new: qb,
        rawpidcontroller_reset_integrals: $b,
        rawpidcontroller_set_axes_mask: Jb,
        rawpidcontroller_set_kd: Zb,
        rawpidcontroller_set_ki: Kb,
        rawpidcontroller_set_kp: Yb,
        rawpointcolliderprojection_colliderHandle: KM,
        rawpointcolliderprojection_featureId: QM,
        rawpointcolliderprojection_featureType: $M,
        rawpointcolliderprojection_isInside: JM,
        rawpointcolliderprojection_point: ZM,
        rawpointprojection_isInside: qM,
        rawpointprojection_point: XM,
        rawquerypipeline_castRay: yT,
        rawquerypipeline_castRayAndGetNormal: xT,
        rawquerypipeline_castShape: AT,
        rawquerypipeline_collidersWithAabbIntersectingAabb: PT,
        rawquerypipeline_intersectionWithShape: MT,
        rawquerypipeline_intersectionsWithPoint: RT,
        rawquerypipeline_intersectionsWithRay: ST,
        rawquerypipeline_intersectionsWithShape: CT,
        rawquerypipeline_new: bT,
        rawquerypipeline_projectPoint: ET,
        rawquerypipeline_projectPointAndGetFeature: TT,
        rawquerypipeline_update: vT,
        rawraycolliderhit_colliderHandle: nR,
        rawraycolliderhit_timeOfImpact: sR,
        rawraycolliderintersection_colliderHandle: QT,
        rawraycolliderintersection_featureId: mR,
        rawraycolliderintersection_featureType: eR,
        rawraycolliderintersection_normal: xR,
        rawraycolliderintersection_time_of_impact: iR,
        rawrayintersection_featureId: pR,
        rawrayintersection_featureType: $T,
        rawrayintersection_normal: yR,
        rawrayintersection_time_of_impact: tR,
        rawrigidbodyset_contains: kx,
        rawrigidbodyset_createRigidBody: zx,
        rawrigidbodyset_forEachRigidBodyHandle: Vx,
        rawrigidbodyset_len: ZT,
        rawrigidbodyset_new: Bx,
        rawrigidbodyset_propagateModifiedBodyPositionsToColliders: Gx,
        rawrigidbodyset_rbAddForce: Ex,
        rawrigidbodyset_rbAddForceAtPoint: Cx,
        rawrigidbodyset_rbAddTorque: Rx,
        rawrigidbodyset_rbAdditionalSolverIterations: Ix,
        rawrigidbodyset_rbAngularDamping: mx,
        rawrigidbodyset_rbAngvel: z0,
        rawrigidbodyset_rbApplyImpulse: Tx,
        rawrigidbodyset_rbApplyImpulseAtPoint: Px,
        rawrigidbodyset_rbApplyTorqueImpulse: Ax,
        rawrigidbodyset_rbBodyType: hx,
        rawrigidbodyset_rbCollider: lx,
        rawrigidbodyset_rbDominanceGroup: j0,
        rawrigidbodyset_rbEffectiveAngularInertia: rx,
        rawrigidbodyset_rbEffectiveInvMass: J0,
        rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt: ix,
        rawrigidbodyset_rbEnableCcd: q0,
        rawrigidbodyset_rbGravityScale: yx,
        rawrigidbodyset_rbInvMass: Z0,
        rawrigidbodyset_rbInvPrincipalInertiaSqrt: tx,
        rawrigidbodyset_rbIsCcdEnabled: ax,
        rawrigidbodyset_rbIsDynamic: _x,
        rawrigidbodyset_rbIsEnabled: vx,
        rawrigidbodyset_rbIsFixed: ux,
        rawrigidbodyset_rbIsKinematic: fx,
        rawrigidbodyset_rbIsMoving: T0,
        rawrigidbodyset_rbIsSleeping: E0,
        rawrigidbodyset_rbLinearDamping: px,
        rawrigidbodyset_rbLinvel: B0,
        rawrigidbodyset_rbLocalCom: $0,
        rawrigidbodyset_rbLockRotations: G0,
        rawrigidbodyset_rbLockTranslations: k0,
        rawrigidbodyset_rbMass: K0,
        rawrigidbodyset_rbNextRotation: A0,
        rawrigidbodyset_rbNextTranslation: R0,
        rawrigidbodyset_rbNumColliders: cx,
        rawrigidbodyset_rbPrincipalInertia: nx,
        rawrigidbodyset_rbPrincipalInertiaLocalFrame: ex,
        rawrigidbodyset_rbRecomputeMassPropertiesFromColliders: N0,
        rawrigidbodyset_rbResetForces: Sx,
        rawrigidbodyset_rbResetTorques: Mx,
        rawrigidbodyset_rbRotation: S0,
        rawrigidbodyset_rbSetAdditionalMass: F0,
        rawrigidbodyset_rbSetAdditionalMassProperties: O0,
        rawrigidbodyset_rbSetAdditionalSolverIterations: Dx,
        rawrigidbodyset_rbSetAngularDamping: wx,
        rawrigidbodyset_rbSetAngvel: D0,
        rawrigidbodyset_rbSetBodyType: dx,
        rawrigidbodyset_rbSetDominanceGroup: X0,
        rawrigidbodyset_rbSetEnabled: bx,
        rawrigidbodyset_rbSetEnabledRotations: W0,
        rawrigidbodyset_rbSetEnabledTranslations: V0,
        rawrigidbodyset_rbSetGravityScale: xx,
        rawrigidbodyset_rbSetLinearDamping: gx,
        rawrigidbodyset_rbSetLinvel: I0,
        rawrigidbodyset_rbSetNextKinematicRotation: U0,
        rawrigidbodyset_rbSetNextKinematicTranslation: L0,
        rawrigidbodyset_rbSetRotation: P0,
        rawrigidbodyset_rbSetSoftCcdPrediction: Y0,
        rawrigidbodyset_rbSetTranslation: C0,
        rawrigidbodyset_rbSetUserData: Ux,
        rawrigidbodyset_rbSleep: M0,
        rawrigidbodyset_rbSoftCcdPrediction: ox,
        rawrigidbodyset_rbTranslation: x0,
        rawrigidbodyset_rbUserData: Lx,
        rawrigidbodyset_rbUserForce: Nx,
        rawrigidbodyset_rbUserTorque: Fx,
        rawrigidbodyset_rbVelocityAtPoint: H0,
        rawrigidbodyset_rbWakeUp: sx,
        rawrigidbodyset_rbWorldCom: Q0,
        rawrigidbodyset_remove: Hx,
        rawrotation_identity: zE,
        rawrotation_new: BE,
        rawrotation_w: kE,
        rawrotation_x: HE,
        rawrotation_y: oR,
        rawrotation_z: cR,
        rawsdpmatrix3_elements: $E,
        rawserializationpipeline_deserializeAll: WT,
        rawserializationpipeline_new: VT,
        rawserializationpipeline_serializeAll: GT,
        rawshape_ball: sE,
        rawshape_capsule: oE,
        rawshape_castRay: AE,
        rawshape_castRayAndGetNormal: CE,
        rawshape_castShape: xE,
        rawshape_cone: hE,
        rawshape_contactShape: ME,
        rawshape_containsPoint: EE,
        rawshape_convexHull: wE,
        rawshape_convexMesh: vE,
        rawshape_cuboid: iE,
        rawshape_cylinder: cE,
        rawshape_halfspace: aE,
        rawshape_heightfield: _E,
        rawshape_intersectsRay: RE,
        rawshape_intersectsShape: SE,
        rawshape_polyline: uE,
        rawshape_projectPoint: TE,
        rawshape_roundCone: dE,
        rawshape_roundConvexHull: bE,
        rawshape_roundConvexMesh: yE,
        rawshape_roundCuboid: rE,
        rawshape_roundCylinder: lE,
        rawshape_roundTriangle: gE,
        rawshape_segment: pE,
        rawshape_triangle: mE,
        rawshape_trimesh: fE,
        rawshapecasthit_normal1: DE,
        rawshapecasthit_normal2: LE,
        rawshapecasthit_time_of_impact: aR,
        rawshapecasthit_witness1: IE,
        rawshapecasthit_witness2: TR,
        rawshapecontact_distance: JT,
        rawshapecontact_normal1: SR,
        rawshapecontact_normal2: wR,
        rawshapecontact_point1: bR,
        rawshapecontact_point2: vR,
        rawvector_new: GE,
        rawvector_set_x: WE,
        rawvector_set_y: CR,
        rawvector_set_z: jE,
        rawvector_x: lR,
        rawvector_xyz: XE,
        rawvector_xzy: KE,
        rawvector_y: hR,
        rawvector_yxz: qE,
        rawvector_yzx: ZE,
        rawvector_z: dR,
        rawvector_zero: VE,
        rawvector_zxy: YE,
        rawvector_zyx: JE,
        version: cb
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    Rw(zR);
    HR = class {
        constructor(t, e, n){
            this.x = t, this.y = e, this.z = n;
        }
    };
    class U {
        static new(t, e, n) {
            return new HR(t, e, n);
        }
        static intoRaw(t) {
            return new L(t.x, t.y, t.z);
        }
        static zeros() {
            return U.new(0, 0, 0);
        }
        static fromRaw(t) {
            if (!t) return null;
            let e = U.new(t.x, t.y, t.z);
            return t.free(), e;
        }
        static copy(t, e) {
            t.x = e.x, t.y = e.y, t.z = e.z;
        }
    }
    class th {
        constructor(t, e, n, r){
            this.x = t, this.y = e, this.z = n, this.w = r;
        }
    }
    class Ht {
        static identity() {
            return new th(0, 0, 0, 1);
        }
        static fromRaw(t) {
            if (!t) return null;
            let e = new th(t.x, t.y, t.z, t.w);
            return t.free(), e;
        }
        static intoRaw(t) {
            return new zt(t.x, t.y, t.z, t.w);
        }
        static copy(t, e) {
            t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w;
        }
    }
    class kR {
        get m11() {
            return this.elements[0];
        }
        get m12() {
            return this.elements[1];
        }
        get m21() {
            return this.m12;
        }
        get m13() {
            return this.elements[2];
        }
        get m31() {
            return this.m13;
        }
        get m22() {
            return this.elements[3];
        }
        get m23() {
            return this.elements[4];
        }
        get m32() {
            return this.m23;
        }
        get m33() {
            return this.elements[5];
        }
        constructor(t){
            this.elements = t;
        }
    }
    class eh {
        static fromRaw(t) {
            const e = new kR(t.elements());
            return t.free(), e;
        }
    }
    (function(i) {
        i[i.Dynamic = 0] = "Dynamic", i[i.Fixed = 1] = "Fixed", i[i.KinematicPositionBased = 2] = "KinematicPositionBased", i[i.KinematicVelocityBased = 3] = "KinematicVelocityBased";
    })(gn || (gn = {}));
    class nh {
        constructor(t, e, n){
            this.rawSet = t, this.colliderSet = e, this.handle = n;
        }
        finalizeDeserialization(t) {
            this.colliderSet = t;
        }
        isValid() {
            return this.rawSet.contains(this.handle);
        }
        lockTranslations(t, e) {
            return this.rawSet.rbLockTranslations(this.handle, t, e);
        }
        lockRotations(t, e) {
            return this.rawSet.rbLockRotations(this.handle, t, e);
        }
        setEnabledTranslations(t, e, n, r) {
            return this.rawSet.rbSetEnabledTranslations(this.handle, t, e, n, r);
        }
        restrictTranslations(t, e, n, r) {
            this.setEnabledTranslations(t, e, n, r);
        }
        setEnabledRotations(t, e, n, r) {
            return this.rawSet.rbSetEnabledRotations(this.handle, t, e, n, r);
        }
        restrictRotations(t, e, n, r) {
            this.setEnabledRotations(t, e, n, r);
        }
        dominanceGroup() {
            return this.rawSet.rbDominanceGroup(this.handle);
        }
        setDominanceGroup(t) {
            this.rawSet.rbSetDominanceGroup(this.handle, t);
        }
        additionalSolverIterations() {
            return this.rawSet.rbAdditionalSolverIterations(this.handle);
        }
        setAdditionalSolverIterations(t) {
            this.rawSet.rbSetAdditionalSolverIterations(this.handle, t);
        }
        enableCcd(t) {
            this.rawSet.rbEnableCcd(this.handle, t);
        }
        setSoftCcdPrediction(t) {
            this.rawSet.rbSetSoftCcdPrediction(this.handle, t);
        }
        softCcdPrediction() {
            return this.rawSet.rbSoftCcdPrediction(this.handle);
        }
        translation() {
            let t = this.rawSet.rbTranslation(this.handle);
            return U.fromRaw(t);
        }
        rotation() {
            let t = this.rawSet.rbRotation(this.handle);
            return Ht.fromRaw(t);
        }
        nextTranslation() {
            let t = this.rawSet.rbNextTranslation(this.handle);
            return U.fromRaw(t);
        }
        nextRotation() {
            let t = this.rawSet.rbNextRotation(this.handle);
            return Ht.fromRaw(t);
        }
        setTranslation(t, e) {
            this.rawSet.rbSetTranslation(this.handle, t.x, t.y, t.z, e);
        }
        setLinvel(t, e) {
            let n = U.intoRaw(t);
            this.rawSet.rbSetLinvel(this.handle, n, e), n.free();
        }
        gravityScale() {
            return this.rawSet.rbGravityScale(this.handle);
        }
        setGravityScale(t, e) {
            this.rawSet.rbSetGravityScale(this.handle, t, e);
        }
        setRotation(t, e) {
            this.rawSet.rbSetRotation(this.handle, t.x, t.y, t.z, t.w, e);
        }
        setAngvel(t, e) {
            let n = U.intoRaw(t);
            this.rawSet.rbSetAngvel(this.handle, n, e), n.free();
        }
        setNextKinematicTranslation(t) {
            this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
        }
        setNextKinematicRotation(t) {
            this.rawSet.rbSetNextKinematicRotation(this.handle, t.x, t.y, t.z, t.w);
        }
        linvel() {
            return U.fromRaw(this.rawSet.rbLinvel(this.handle));
        }
        velocityAtPoint(t) {
            const e = U.intoRaw(t);
            let n = U.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle, e));
            return e.free(), n;
        }
        angvel() {
            return U.fromRaw(this.rawSet.rbAngvel(this.handle));
        }
        mass() {
            return this.rawSet.rbMass(this.handle);
        }
        effectiveInvMass() {
            return U.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
        }
        invMass() {
            return this.rawSet.rbInvMass(this.handle);
        }
        localCom() {
            return U.fromRaw(this.rawSet.rbLocalCom(this.handle));
        }
        worldCom() {
            return U.fromRaw(this.rawSet.rbWorldCom(this.handle));
        }
        invPrincipalInertiaSqrt() {
            return U.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
        }
        principalInertia() {
            return U.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
        }
        principalInertiaLocalFrame() {
            return Ht.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
        }
        effectiveWorldInvInertiaSqrt() {
            return eh.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
        }
        effectiveAngularInertia() {
            return eh.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
        }
        sleep() {
            this.rawSet.rbSleep(this.handle);
        }
        wakeUp() {
            this.rawSet.rbWakeUp(this.handle);
        }
        isCcdEnabled() {
            return this.rawSet.rbIsCcdEnabled(this.handle);
        }
        numColliders() {
            return this.rawSet.rbNumColliders(this.handle);
        }
        collider(t) {
            return this.colliderSet.get(this.rawSet.rbCollider(this.handle, t));
        }
        setEnabled(t) {
            this.rawSet.rbSetEnabled(this.handle, t);
        }
        isEnabled() {
            return this.rawSet.rbIsEnabled(this.handle);
        }
        bodyType() {
            return this.rawSet.rbBodyType(this.handle);
        }
        setBodyType(t, e) {
            return this.rawSet.rbSetBodyType(this.handle, t, e);
        }
        isSleeping() {
            return this.rawSet.rbIsSleeping(this.handle);
        }
        isMoving() {
            return this.rawSet.rbIsMoving(this.handle);
        }
        isFixed() {
            return this.rawSet.rbIsFixed(this.handle);
        }
        isKinematic() {
            return this.rawSet.rbIsKinematic(this.handle);
        }
        isDynamic() {
            return this.rawSet.rbIsDynamic(this.handle);
        }
        linearDamping() {
            return this.rawSet.rbLinearDamping(this.handle);
        }
        angularDamping() {
            return this.rawSet.rbAngularDamping(this.handle);
        }
        setLinearDamping(t) {
            this.rawSet.rbSetLinearDamping(this.handle, t);
        }
        recomputeMassPropertiesFromColliders() {
            this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
        }
        setAdditionalMass(t, e) {
            this.rawSet.rbSetAdditionalMass(this.handle, t, e);
        }
        setAdditionalMassProperties(t, e, n, r, s) {
            let a = U.intoRaw(e), o = U.intoRaw(n), c = Ht.intoRaw(r);
            this.rawSet.rbSetAdditionalMassProperties(this.handle, t, a, o, c, s), a.free(), o.free(), c.free();
        }
        setAngularDamping(t) {
            this.rawSet.rbSetAngularDamping(this.handle, t);
        }
        resetForces(t) {
            this.rawSet.rbResetForces(this.handle, t);
        }
        resetTorques(t) {
            this.rawSet.rbResetTorques(this.handle, t);
        }
        addForce(t, e) {
            const n = U.intoRaw(t);
            this.rawSet.rbAddForce(this.handle, n, e), n.free();
        }
        applyImpulse(t, e) {
            const n = U.intoRaw(t);
            this.rawSet.rbApplyImpulse(this.handle, n, e), n.free();
        }
        addTorque(t, e) {
            const n = U.intoRaw(t);
            this.rawSet.rbAddTorque(this.handle, n, e), n.free();
        }
        applyTorqueImpulse(t, e) {
            const n = U.intoRaw(t);
            this.rawSet.rbApplyTorqueImpulse(this.handle, n, e), n.free();
        }
        addForceAtPoint(t, e, n) {
            const r = U.intoRaw(t), s = U.intoRaw(e);
            this.rawSet.rbAddForceAtPoint(this.handle, r, s, n), r.free(), s.free();
        }
        applyImpulseAtPoint(t, e, n) {
            const r = U.intoRaw(t), s = U.intoRaw(e);
            this.rawSet.rbApplyImpulseAtPoint(this.handle, r, s, n), r.free(), s.free();
        }
        userForce() {
            return U.fromRaw(this.rawSet.rbUserForce(this.handle));
        }
        userTorque() {
            return U.fromRaw(this.rawSet.rbUserTorque(this.handle));
        }
    }
    In = class {
        constructor(t){
            this.enabled = !0, this.status = t, this.translation = U.zeros(), this.rotation = Ht.identity(), this.gravityScale = 1, this.linvel = U.zeros(), this.mass = 0, this.massOnly = !1, this.centerOfMass = U.zeros(), this.translationsEnabledX = !0, this.translationsEnabledY = !0, this.angvel = U.zeros(), this.principalAngularInertia = U.zeros(), this.angularInertiaLocalFrame = Ht.identity(), this.translationsEnabledZ = !0, this.rotationsEnabledX = !0, this.rotationsEnabledY = !0, this.rotationsEnabledZ = !0, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = !0, this.sleeping = !1, this.ccdEnabled = !1, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
        }
        static dynamic() {
            return new In(gn.Dynamic);
        }
        static kinematicPositionBased() {
            return new In(gn.KinematicPositionBased);
        }
        static kinematicVelocityBased() {
            return new In(gn.KinematicVelocityBased);
        }
        static fixed() {
            return new In(gn.Fixed);
        }
        static newDynamic() {
            return new In(gn.Dynamic);
        }
        static newKinematicPositionBased() {
            return new In(gn.KinematicPositionBased);
        }
        static newKinematicVelocityBased() {
            return new In(gn.KinematicVelocityBased);
        }
        static newStatic() {
            return new In(gn.Fixed);
        }
        setDominanceGroup(t) {
            return this.dominanceGroup = t, this;
        }
        setAdditionalSolverIterations(t) {
            return this.additionalSolverIterations = t, this;
        }
        setEnabled(t) {
            return this.enabled = t, this;
        }
        setTranslation(t, e, n) {
            if (typeof t != "number" || typeof e != "number" || typeof n != "number") throw TypeError("The translation components must be numbers.");
            return this.translation = {
                x: t,
                y: e,
                z: n
            }, this;
        }
        setRotation(t) {
            return Ht.copy(this.rotation, t), this;
        }
        setGravityScale(t) {
            return this.gravityScale = t, this;
        }
        setAdditionalMass(t) {
            return this.mass = t, this.massOnly = !0, this;
        }
        setLinvel(t, e, n) {
            if (typeof t != "number" || typeof e != "number" || typeof n != "number") throw TypeError("The linvel components must be numbers.");
            return this.linvel = {
                x: t,
                y: e,
                z: n
            }, this;
        }
        setAngvel(t) {
            return U.copy(this.angvel, t), this;
        }
        setAdditionalMassProperties(t, e, n, r) {
            return this.mass = t, U.copy(this.centerOfMass, e), U.copy(this.principalAngularInertia, n), Ht.copy(this.angularInertiaLocalFrame, r), this.massOnly = !1, this;
        }
        enabledTranslations(t, e, n) {
            return this.translationsEnabledX = t, this.translationsEnabledY = e, this.translationsEnabledZ = n, this;
        }
        restrictTranslations(t, e, n) {
            return this.enabledTranslations(t, e, n);
        }
        lockTranslations() {
            return this.enabledTranslations(!1, !1, !1);
        }
        enabledRotations(t, e, n) {
            return this.rotationsEnabledX = t, this.rotationsEnabledY = e, this.rotationsEnabledZ = n, this;
        }
        restrictRotations(t, e, n) {
            return this.enabledRotations(t, e, n);
        }
        lockRotations() {
            return this.restrictRotations(!1, !1, !1);
        }
        setLinearDamping(t) {
            return this.linearDamping = t, this;
        }
        setAngularDamping(t) {
            return this.angularDamping = t, this;
        }
        setCanSleep(t) {
            return this.canSleep = t, this;
        }
        setSleeping(t) {
            return this.sleeping = t, this;
        }
        setCcdEnabled(t) {
            return this.ccdEnabled = t, this;
        }
        setSoftCcdPrediction(t) {
            return this.softCcdPrediction = t, this;
        }
        setUserData(t) {
            return this.userData = t, this;
        }
    };
    class ks {
        constructor(){
            this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array, this.size = 0;
        }
        set(t, e) {
            let n = this.index(t);
            for(; this.data.length <= n;)this.data.push(null);
            this.data[n] == null && (this.size += 1), this.data[n] = e;
        }
        len() {
            return this.size;
        }
        delete(t) {
            let e = this.index(t);
            e < this.data.length && (this.data[e] != null && (this.size -= 1), this.data[e] = null);
        }
        clear() {
            this.data = new Array;
        }
        get(t) {
            let e = this.index(t);
            return e < this.data.length ? this.data[e] : null;
        }
        forEach(t) {
            for (const e of this.data)e != null && t(e);
        }
        getAll() {
            return this.data.filter((t)=>t != null);
        }
        index(t) {
            return this.fconv[0] = t, this.uconv[0];
        }
    }
    class VR {
        free() {
            this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        constructor(t){
            this.raw = t || new _e, this.map = new ks, t && t.forEachRigidBodyHandle((e)=>{
                this.map.set(e, new nh(t, null, e));
            });
        }
        finalizeDeserialization(t) {
            this.map.forEach((e)=>e.finalizeDeserialization(t));
        }
        createRigidBody(t, e) {
            let n = U.intoRaw(e.translation), r = Ht.intoRaw(e.rotation), s = U.intoRaw(e.linvel), a = U.intoRaw(e.centerOfMass), o = U.intoRaw(e.angvel), c = U.intoRaw(e.principalAngularInertia), l = Ht.intoRaw(e.angularInertiaLocalFrame), h = this.raw.createRigidBody(e.enabled, n, r, e.gravityScale, e.mass, e.massOnly, a, s, o, c, l, e.translationsEnabledX, e.translationsEnabledY, e.translationsEnabledZ, e.rotationsEnabledX, e.rotationsEnabledY, e.rotationsEnabledZ, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.softCcdPrediction, e.ccdEnabled, e.dominanceGroup, e.additionalSolverIterations);
            n.free(), r.free(), s.free(), a.free(), o.free(), c.free(), l.free();
            const u = new nh(this.raw, t, h);
            return u.userData = e.userData, this.map.set(h, u), u;
        }
        remove(t, e, n, r, s) {
            for(let a = 0; a < this.raw.rbNumColliders(t); a += 1)n.unmap(this.raw.rbCollider(t, a));
            r.forEachJointHandleAttachedToRigidBody(t, (a)=>r.unmap(a)), s.forEachJointHandleAttachedToRigidBody(t, (a)=>s.unmap(a)), this.raw.remove(t, e.raw, n.raw, r.raw, s.raw), this.map.delete(t);
        }
        len() {
            return this.map.len();
        }
        contains(t) {
            return this.get(t) != null;
        }
        get(t) {
            return this.map.get(t);
        }
        forEach(t) {
            this.map.forEach(t);
        }
        forEachActiveRigidBody(t, e) {
            t.forEachActiveRigidBodyHandle((n)=>{
                e(this.get(n));
            });
        }
        getAll() {
            return this.map.getAll();
        }
    }
    class GR {
        constructor(t){
            this.raw = t || new bi;
        }
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        get dt() {
            return this.raw.dt;
        }
        get contact_erp() {
            return this.raw.contact_erp;
        }
        get lengthUnit() {
            return this.raw.lengthUnit;
        }
        get normalizedAllowedLinearError() {
            return this.raw.normalizedAllowedLinearError;
        }
        get normalizedPredictionDistance() {
            return this.raw.normalizedPredictionDistance;
        }
        get numSolverIterations() {
            return this.raw.numSolverIterations;
        }
        get numAdditionalFrictionIterations() {
            return this.raw.numAdditionalFrictionIterations;
        }
        get numInternalPgsIterations() {
            return this.raw.numInternalPgsIterations;
        }
        get minIslandSize() {
            return this.raw.minIslandSize;
        }
        get maxCcdSubsteps() {
            return this.raw.maxCcdSubsteps;
        }
        set dt(t) {
            this.raw.dt = t;
        }
        set contact_natural_frequency(t) {
            this.raw.contact_natural_frequency = t;
        }
        set lengthUnit(t) {
            this.raw.lengthUnit = t;
        }
        set normalizedAllowedLinearError(t) {
            this.raw.normalizedAllowedLinearError = t;
        }
        set normalizedPredictionDistance(t) {
            this.raw.normalizedPredictionDistance = t;
        }
        set numSolverIterations(t) {
            this.raw.numSolverIterations = t;
        }
        set numAdditionalFrictionIterations(t) {
            this.raw.numAdditionalFrictionIterations = t;
        }
        set numInternalPgsIterations(t) {
            this.raw.numInternalPgsIterations = t;
        }
        set minIslandSize(t) {
            this.raw.minIslandSize = t;
        }
        set maxCcdSubsteps(t) {
            this.raw.maxCcdSubsteps = t;
        }
        switchToStandardPgsSolver() {
            this.raw.switchToStandardPgsSolver();
        }
        switchToSmallStepsPgsSolver() {
            this.raw.switchToSmallStepsPgsSolver();
        }
        switchToSmallStepsPgsSolverWithoutWarmstart() {
            this.raw.switchToSmallStepsPgsSolverWithoutWarmstart();
        }
    }
    var ih;
    (function(i) {
        i[i.Revolute = 0] = "Revolute", i[i.Fixed = 1] = "Fixed", i[i.Prismatic = 2] = "Prismatic", i[i.Rope = 3] = "Rope", i[i.Spring = 4] = "Spring", i[i.Spherical = 5] = "Spherical", i[i.Generic = 6] = "Generic";
    })(ih || (ih = {}));
    var rh;
    (function(i) {
        i[i.AccelerationBased = 0] = "AccelerationBased", i[i.ForceBased = 1] = "ForceBased";
    })(rh || (rh = {}));
    var sh;
    (function(i) {
        i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ";
    })(sh || (sh = {}));
    class yn {
        constructor(t, e, n){
            this.rawSet = t, this.bodySet = e, this.handle = n;
        }
        static newTyped(t, e, n) {
            switch(t.jointType(n)){
                case un.Revolute:
                    return new YR(t, e, n);
                case un.Prismatic:
                    return new qR(t, e, n);
                case un.Fixed:
                    return new WR(t, e, n);
                case un.Spring:
                    return new XR(t, e, n);
                case un.Rope:
                    return new jR(t, e, n);
                case un.Spherical:
                    return new ZR(t, e, n);
                case un.Generic:
                    return new KR(t, e, n);
                default:
                    return new yn(t, e, n);
            }
        }
        finalizeDeserialization(t) {
            this.bodySet = t;
        }
        isValid() {
            return this.rawSet.contains(this.handle);
        }
        body1() {
            return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
        }
        body2() {
            return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
        }
        type() {
            return this.rawSet.jointType(this.handle);
        }
        frameX1() {
            return Ht.fromRaw(this.rawSet.jointFrameX1(this.handle));
        }
        frameX2() {
            return Ht.fromRaw(this.rawSet.jointFrameX2(this.handle));
        }
        anchor1() {
            return U.fromRaw(this.rawSet.jointAnchor1(this.handle));
        }
        anchor2() {
            return U.fromRaw(this.rawSet.jointAnchor2(this.handle));
        }
        setAnchor1(t) {
            const e = U.intoRaw(t);
            this.rawSet.jointSetAnchor1(this.handle, e), e.free();
        }
        setAnchor2(t) {
            const e = U.intoRaw(t);
            this.rawSet.jointSetAnchor2(this.handle, e), e.free();
        }
        setContactsEnabled(t) {
            this.rawSet.jointSetContactsEnabled(this.handle, t);
        }
        contactsEnabled() {
            return this.rawSet.jointContactsEnabled(this.handle);
        }
    }
    class sd extends yn {
        limitsEnabled() {
            return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
        }
        limitsMin() {
            return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
        }
        limitsMax() {
            return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
        }
        setLimits(t, e) {
            this.rawSet.jointSetLimits(this.handle, this.rawAxis(), t, e);
        }
        configureMotorModel(t) {
            this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), t);
        }
        configureMotorVelocity(t, e) {
            this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), t, e);
        }
        configureMotorPosition(t, e, n) {
            this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), t, e, n);
        }
        configureMotor(t, e, n, r) {
            this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), t, e, n, r);
        }
    }
    class WR extends yn {
    }
    class jR extends yn {
    }
    class XR extends yn {
    }
    class qR extends sd {
        rawAxis() {
            return Ns.LinX;
        }
    }
    class YR extends sd {
        rawAxis() {
            return Ns.AngX;
        }
    }
    class KR extends yn {
    }
    class ZR extends yn {
    }
    class JR {
        free() {
            this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        constructor(t){
            this.raw = t || new Fn, this.map = new ks, t && t.forEachJointHandle((e)=>{
                this.map.set(e, yn.newTyped(t, null, e));
            });
        }
        finalizeDeserialization(t) {
            this.map.forEach((e)=>e.finalizeDeserialization(t));
        }
        createJoint(t, e, n, r, s) {
            const a = e.intoRaw(), o = this.raw.createJoint(a, n, r, s);
            a.free();
            let c = yn.newTyped(this.raw, t, o);
            return this.map.set(o, c), c;
        }
        remove(t, e) {
            this.raw.remove(t, e), this.unmap(t);
        }
        forEachJointHandleAttachedToRigidBody(t, e) {
            this.raw.forEachJointAttachedToRigidBody(t, e);
        }
        unmap(t) {
            this.map.delete(t);
        }
        len() {
            return this.map.len();
        }
        contains(t) {
            return this.get(t) != null;
        }
        get(t) {
            return this.map.get(t);
        }
        forEach(t) {
            this.map.forEach(t);
        }
        getAll() {
            return this.map.getAll();
        }
    }
    class vi {
        constructor(t, e){
            this.rawSet = t, this.handle = e;
        }
        static newTyped(t, e) {
            switch(t.jointType(e)){
                case un.Revolute:
                    return new tA(t, e);
                case un.Prismatic:
                    return new QR(t, e);
                case un.Fixed:
                    return new $R(t, e);
                case un.Spherical:
                    return new eA(t, e);
                default:
                    return new vi(t, e);
            }
        }
        isValid() {
            return this.rawSet.contains(this.handle);
        }
        setContactsEnabled(t) {
            this.rawSet.jointSetContactsEnabled(this.handle, t);
        }
        contactsEnabled() {
            return this.rawSet.jointContactsEnabled(this.handle);
        }
    }
    class ad extends vi {
    }
    class $R extends vi {
    }
    class QR extends ad {
        rawAxis() {
            return Ns.LinX;
        }
    }
    class tA extends ad {
        rawAxis() {
            return Ns.AngX;
        }
    }
    class eA extends vi {
    }
    class nA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        constructor(t){
            this.raw = t || new Bn, this.map = new ks, t && t.forEachJointHandle((e)=>{
                this.map.set(e, vi.newTyped(this.raw, e));
            });
        }
        createJoint(t, e, n, r) {
            const s = t.intoRaw(), a = this.raw.createJoint(s, e, n, r);
            s.free();
            let o = vi.newTyped(this.raw, a);
            return this.map.set(a, o), o;
        }
        remove(t, e) {
            this.raw.remove(t, e), this.map.delete(t);
        }
        unmap(t) {
            this.map.delete(t);
        }
        len() {
            return this.map.len();
        }
        contains(t) {
            return this.get(t) != null;
        }
        get(t) {
            return this.map.get(t);
        }
        forEach(t) {
            this.map.forEach(t);
        }
        forEachJointHandleAttachedToRigidBody(t, e) {
            this.raw.forEachJointAttachedToRigidBody(t, e);
        }
        getAll() {
            return this.map.getAll();
        }
    }
    var Es;
    (function(i) {
        i[i.Average = 0] = "Average", i[i.Min = 1] = "Min", i[i.Multiply = 2] = "Multiply", i[i.Max = 3] = "Max";
    })(Es || (Es = {}));
    class iA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(t){
            this.raw = t || new Ro;
        }
    }
    class rA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(t){
            this.raw = t || new On;
        }
        forEachActiveRigidBodyHandle(t) {
            this.raw.forEachActiveRigidBodyHandle(t);
        }
    }
    class sA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(t){
            this.raw = t || new wi;
        }
    }
    class aA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(t){
            this.raw = t || new $n, this.tempManifold = new oA(null);
        }
        contactPairsWith(t, e) {
            this.raw.contact_pairs_with(t, e);
        }
        intersectionPairsWith(t, e) {
            this.raw.intersection_pairs_with(t, e);
        }
        contactPair(t, e, n) {
            const r = this.raw.contact_pair(t, e);
            if (r) {
                const s = r.collider1() != t;
                let a;
                for(a = 0; a < r.numContactManifolds(); ++a)this.tempManifold.raw = r.contactManifold(a), this.tempManifold.raw && n(this.tempManifold, s), this.tempManifold.free();
                r.free();
            }
        }
        intersectionPair(t, e) {
            return this.raw.intersection_pair(t, e);
        }
    }
    class oA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(t){
            this.raw = t;
        }
        normal() {
            return U.fromRaw(this.raw.normal());
        }
        localNormal1() {
            return U.fromRaw(this.raw.local_n1());
        }
        localNormal2() {
            return U.fromRaw(this.raw.local_n2());
        }
        subshape1() {
            return this.raw.subshape1();
        }
        subshape2() {
            return this.raw.subshape2();
        }
        numContacts() {
            return this.raw.num_contacts();
        }
        localContactPoint1(t) {
            return U.fromRaw(this.raw.contact_local_p1(t));
        }
        localContactPoint2(t) {
            return U.fromRaw(this.raw.contact_local_p2(t));
        }
        contactDist(t) {
            return this.raw.contact_dist(t);
        }
        contactFid1(t) {
            return this.raw.contact_fid1(t);
        }
        contactFid2(t) {
            return this.raw.contact_fid2(t);
        }
        contactImpulse(t) {
            return this.raw.contact_impulse(t);
        }
        contactTangentImpulseX(t) {
            return this.raw.contact_tangent_impulse_x(t);
        }
        contactTangentImpulseY(t) {
            return this.raw.contact_tangent_impulse_y(t);
        }
        numSolverContacts() {
            return this.raw.num_solver_contacts();
        }
        solverContactPoint(t) {
            return U.fromRaw(this.raw.solver_contact_point(t));
        }
        solverContactDist(t) {
            return this.raw.solver_contact_dist(t);
        }
        solverContactFriction(t) {
            return this.raw.solver_contact_friction(t);
        }
        solverContactRestitution(t) {
            return this.raw.solver_contact_restitution(t);
        }
        solverContactTangentVelocity(t) {
            return U.fromRaw(this.raw.solver_contact_tangent_velocity(t));
        }
    }
    class xr {
        constructor(t, e, n, r, s){
            this.distance = t, this.point1 = e, this.point2 = n, this.normal1 = r, this.normal2 = s;
        }
        static fromRaw(t) {
            if (!t) return null;
            const e = new xr(t.distance(), U.fromRaw(t.point1()), U.fromRaw(t.point2()), U.fromRaw(t.normal1()), U.fromRaw(t.normal2()));
            return t.free(), e;
        }
    }
    var Sr;
    (function(i) {
        i[i.Vertex = 0] = "Vertex", i[i.Edge = 1] = "Edge", i[i.Face = 2] = "Face", i[i.Unknown = 3] = "Unknown";
    })(Sr || (Sr = {}));
    class Vs {
        constructor(t, e){
            this.point = t, this.isInside = e;
        }
        static fromRaw(t) {
            if (!t) return null;
            const e = new Vs(U.fromRaw(t.point()), t.isInside());
            return t.free(), e;
        }
    }
    class Ts {
        constructor(t, e, n, r, s){
            this.featureType = Sr.Unknown, this.featureId = void 0, this.collider = t, this.point = e, this.isInside = n, s !== void 0 && (this.featureId = s), r !== void 0 && (this.featureType = r);
        }
        static fromRaw(t, e) {
            if (!e) return null;
            const n = new Ts(t.get(e.colliderHandle()), U.fromRaw(e.point()), e.isInside(), e.featureType(), e.featureId());
            return e.free(), n;
        }
    }
    class Gs {
        constructor(t, e, n, r){
            this.featureType = Sr.Unknown, this.featureId = void 0, this.timeOfImpact = t, this.normal = e, r !== void 0 && (this.featureId = r), n !== void 0 && (this.featureType = n);
        }
        static fromRaw(t) {
            if (!t) return null;
            const e = new Gs(t.time_of_impact(), U.fromRaw(t.normal()), t.featureType(), t.featureId());
            return t.free(), e;
        }
    }
    class Rs {
        constructor(t, e, n, r, s){
            this.featureType = Sr.Unknown, this.featureId = void 0, this.collider = t, this.timeOfImpact = e, this.normal = n, s !== void 0 && (this.featureId = s), r !== void 0 && (this.featureType = r);
        }
        static fromRaw(t, e) {
            if (!e) return null;
            const n = new Rs(t.get(e.colliderHandle()), e.time_of_impact(), U.fromRaw(e.normal()), e.featureType(), e.featureId());
            return e.free(), n;
        }
    }
    class ec {
        constructor(t, e){
            this.collider = t, this.timeOfImpact = e;
        }
        static fromRaw(t, e) {
            if (!e) return null;
            const n = new ec(t.get(e.colliderHandle()), e.timeOfImpact());
            return e.free(), n;
        }
    }
    class Rr {
        constructor(t, e, n, r, s){
            this.time_of_impact = t, this.witness1 = e, this.witness2 = n, this.normal1 = r, this.normal2 = s;
        }
        static fromRaw(t, e) {
            if (!e) return null;
            const n = new Rr(e.time_of_impact(), U.fromRaw(e.witness1()), U.fromRaw(e.witness2()), U.fromRaw(e.normal1()), U.fromRaw(e.normal2()));
            return e.free(), n;
        }
    }
    class Ws extends Rr {
        constructor(t, e, n, r, s, a){
            super(e, n, r, s, a), this.collider = t;
        }
        static fromRaw(t, e) {
            if (!e) return null;
            const n = new Ws(t.get(e.colliderHandle()), e.time_of_impact(), U.fromRaw(e.witness1()), U.fromRaw(e.witness2()), U.fromRaw(e.normal1()), U.fromRaw(e.normal2()));
            return e.free(), n;
        }
    }
    class Ie {
        static fromRaw(t, e) {
            const n = t.coShapeType(e);
            let r, s, a, o, c, l, h;
            switch(n){
                case Le.Ball:
                    return new od(t.coRadius(e));
                case Le.Cuboid:
                    return r = t.coHalfExtents(e), new cd(r.x, r.y, r.z);
                case Le.RoundCuboid:
                    return r = t.coHalfExtents(e), s = t.coRoundRadius(e), new ld(r.x, r.y, r.z, s);
                case Le.Capsule:
                    return c = t.coHalfHeight(e), l = t.coRadius(e), new hd(c, l);
                case Le.Segment:
                    return a = t.coVertices(e), new dd(U.new(a[0], a[1], a[2]), U.new(a[3], a[4], a[5]));
                case Le.Polyline:
                    return a = t.coVertices(e), o = t.coIndices(e), new _d(a, o);
                case Le.Triangle:
                    return a = t.coVertices(e), new ud(U.new(a[0], a[1], a[2]), U.new(a[3], a[4], a[5]), U.new(a[6], a[7], a[8]));
                case Le.RoundTriangle:
                    return a = t.coVertices(e), s = t.coRoundRadius(e), new fd(U.new(a[0], a[1], a[2]), U.new(a[3], a[4], a[5]), U.new(a[6], a[7], a[8]), s);
                case Le.HalfSpace:
                    return h = U.fromRaw(t.coHalfspaceNormal(e)), new cA(h);
                case Le.TriMesh:
                    a = t.coVertices(e), o = t.coIndices(e);
                    const u = t.coTriMeshFlags(e);
                    return new pd(a, o, u);
                case Le.HeightField:
                    const f = t.coHeightfieldScale(e), m = t.coHeightfieldHeights(e), w = t.coHeightfieldNRows(e), b = t.coHeightfieldNCols(e), g = t.coHeightFieldFlags(e);
                    return new md(w, b, m, f, g);
                case Le.ConvexPolyhedron:
                    return a = t.coVertices(e), o = t.coIndices(e), new Ao(a, o);
                case Le.RoundConvexPolyhedron:
                    return a = t.coVertices(e), o = t.coIndices(e), s = t.coRoundRadius(e), new Co(a, o, s);
                case Le.Cylinder:
                    return c = t.coHalfHeight(e), l = t.coRadius(e), new gd(c, l);
                case Le.RoundCylinder:
                    return c = t.coHalfHeight(e), l = t.coRadius(e), s = t.coRoundRadius(e), new wd(c, l, s);
                case Le.Cone:
                    return c = t.coHalfHeight(e), l = t.coRadius(e), new bd(c, l);
                case Le.RoundCone:
                    return c = t.coHalfHeight(e), l = t.coRadius(e), s = t.coRoundRadius(e), new vd(c, l, s);
                default:
                    throw new Error("unknown shape type: " + n);
            }
        }
        castShape(t, e, n, r, s, a, o, c, l, h) {
            let u = U.intoRaw(t), f = Ht.intoRaw(e), m = U.intoRaw(n), w = U.intoRaw(s), b = Ht.intoRaw(a), g = U.intoRaw(o), _ = this.intoRaw(), R = r.intoRaw(), E = Rr.fromRaw(null, _.castShape(u, f, m, R, w, b, g, c, l, h));
            return u.free(), f.free(), m.free(), w.free(), b.free(), g.free(), _.free(), R.free(), E;
        }
        intersectsShape(t, e, n, r, s) {
            let a = U.intoRaw(t), o = Ht.intoRaw(e), c = U.intoRaw(r), l = Ht.intoRaw(s), h = this.intoRaw(), u = n.intoRaw(), f = h.intersectsShape(a, o, u, c, l);
            return a.free(), o.free(), c.free(), l.free(), h.free(), u.free(), f;
        }
        contactShape(t, e, n, r, s, a) {
            let o = U.intoRaw(t), c = Ht.intoRaw(e), l = U.intoRaw(r), h = Ht.intoRaw(s), u = this.intoRaw(), f = n.intoRaw(), m = xr.fromRaw(u.contactShape(o, c, f, l, h, a));
            return o.free(), c.free(), l.free(), h.free(), u.free(), f.free(), m;
        }
        containsPoint(t, e, n) {
            let r = U.intoRaw(t), s = Ht.intoRaw(e), a = U.intoRaw(n), o = this.intoRaw(), c = o.containsPoint(r, s, a);
            return r.free(), s.free(), a.free(), o.free(), c;
        }
        projectPoint(t, e, n, r) {
            let s = U.intoRaw(t), a = Ht.intoRaw(e), o = U.intoRaw(n), c = this.intoRaw(), l = Vs.fromRaw(c.projectPoint(s, a, o, r));
            return s.free(), a.free(), o.free(), c.free(), l;
        }
        intersectsRay(t, e, n, r) {
            let s = U.intoRaw(e), a = Ht.intoRaw(n), o = U.intoRaw(t.origin), c = U.intoRaw(t.dir), l = this.intoRaw(), h = l.intersectsRay(s, a, o, c, r);
            return s.free(), a.free(), o.free(), c.free(), l.free(), h;
        }
        castRay(t, e, n, r, s) {
            let a = U.intoRaw(e), o = Ht.intoRaw(n), c = U.intoRaw(t.origin), l = U.intoRaw(t.dir), h = this.intoRaw(), u = h.castRay(a, o, c, l, r, s);
            return a.free(), o.free(), c.free(), l.free(), h.free(), u;
        }
        castRayAndGetNormal(t, e, n, r, s) {
            let a = U.intoRaw(e), o = Ht.intoRaw(n), c = U.intoRaw(t.origin), l = U.intoRaw(t.dir), h = this.intoRaw(), u = Gs.fromRaw(h.castRayAndGetNormal(a, o, c, l, r, s));
            return a.free(), o.free(), c.free(), l.free(), h.free(), u;
        }
    }
    var Ce;
    (function(i) {
        i[i.Ball = 0] = "Ball", i[i.Cuboid = 1] = "Cuboid", i[i.Capsule = 2] = "Capsule", i[i.Segment = 3] = "Segment", i[i.Polyline = 4] = "Polyline", i[i.Triangle = 5] = "Triangle", i[i.TriMesh = 6] = "TriMesh", i[i.HeightField = 7] = "HeightField", i[i.ConvexPolyhedron = 9] = "ConvexPolyhedron", i[i.Cylinder = 10] = "Cylinder", i[i.Cone = 11] = "Cone", i[i.RoundCuboid = 12] = "RoundCuboid", i[i.RoundTriangle = 13] = "RoundTriangle", i[i.RoundCylinder = 14] = "RoundCylinder", i[i.RoundCone = 15] = "RoundCone", i[i.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", i[i.HalfSpace = 17] = "HalfSpace";
    })(Ce || (Ce = {}));
    var ah;
    (function(i) {
        i[i.FIX_INTERNAL_EDGES = 1] = "FIX_INTERNAL_EDGES";
    })(ah || (ah = {}));
    var oh;
    (function(i) {
        i[i.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", i[i.ORIENTED = 8] = "ORIENTED", i[i.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", i[i.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", i[i.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", i[i.FIX_INTERNAL_EDGES = 144] = "FIX_INTERNAL_EDGES";
    })(oh || (oh = {}));
    class od extends Ie {
        constructor(t){
            super(), this.type = Ce.Ball, this.radius = t;
        }
        intoRaw() {
            return Rt.ball(this.radius);
        }
    }
    class cA extends Ie {
        constructor(t){
            super(), this.type = Ce.HalfSpace, this.normal = t;
        }
        intoRaw() {
            let t = U.intoRaw(this.normal), e = Rt.halfspace(t);
            return t.free(), e;
        }
    }
    class cd extends Ie {
        constructor(t, e, n){
            super(), this.type = Ce.Cuboid, this.halfExtents = U.new(t, e, n);
        }
        intoRaw() {
            return Rt.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
        }
    }
    class ld extends Ie {
        constructor(t, e, n, r){
            super(), this.type = Ce.RoundCuboid, this.halfExtents = U.new(t, e, n), this.borderRadius = r;
        }
        intoRaw() {
            return Rt.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
        }
    }
    class hd extends Ie {
        constructor(t, e){
            super(), this.type = Ce.Capsule, this.halfHeight = t, this.radius = e;
        }
        intoRaw() {
            return Rt.capsule(this.halfHeight, this.radius);
        }
    }
    class dd extends Ie {
        constructor(t, e){
            super(), this.type = Ce.Segment, this.a = t, this.b = e;
        }
        intoRaw() {
            let t = U.intoRaw(this.a), e = U.intoRaw(this.b), n = Rt.segment(t, e);
            return t.free(), e.free(), n;
        }
    }
    class ud extends Ie {
        constructor(t, e, n){
            super(), this.type = Ce.Triangle, this.a = t, this.b = e, this.c = n;
        }
        intoRaw() {
            let t = U.intoRaw(this.a), e = U.intoRaw(this.b), n = U.intoRaw(this.c), r = Rt.triangle(t, e, n);
            return t.free(), e.free(), n.free(), r;
        }
    }
    class fd extends Ie {
        constructor(t, e, n, r){
            super(), this.type = Ce.RoundTriangle, this.a = t, this.b = e, this.c = n, this.borderRadius = r;
        }
        intoRaw() {
            let t = U.intoRaw(this.a), e = U.intoRaw(this.b), n = U.intoRaw(this.c), r = Rt.roundTriangle(t, e, n, this.borderRadius);
            return t.free(), e.free(), n.free(), r;
        }
    }
    class _d extends Ie {
        constructor(t, e){
            super(), this.type = Ce.Polyline, this.vertices = t, this.indices = e ?? new Uint32Array(0);
        }
        intoRaw() {
            return Rt.polyline(this.vertices, this.indices);
        }
    }
    class pd extends Ie {
        constructor(t, e, n){
            super(), this.type = Ce.TriMesh, this.vertices = t, this.indices = e, this.flags = n;
        }
        intoRaw() {
            return Rt.trimesh(this.vertices, this.indices, this.flags);
        }
    }
    class Ao extends Ie {
        constructor(t, e){
            super(), this.type = Ce.ConvexPolyhedron, this.vertices = t, this.indices = e;
        }
        intoRaw() {
            return this.indices ? Rt.convexMesh(this.vertices, this.indices) : Rt.convexHull(this.vertices);
        }
    }
    class Co extends Ie {
        constructor(t, e, n){
            super(), this.type = Ce.RoundConvexPolyhedron, this.vertices = t, this.indices = e, this.borderRadius = n;
        }
        intoRaw() {
            return this.indices ? Rt.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : Rt.roundConvexHull(this.vertices, this.borderRadius);
        }
    }
    class md extends Ie {
        constructor(t, e, n, r, s){
            super(), this.type = Ce.HeightField, this.nrows = t, this.ncols = e, this.heights = n, this.scale = r, this.flags = s;
        }
        intoRaw() {
            let t = U.intoRaw(this.scale), e = Rt.heightfield(this.nrows, this.ncols, this.heights, t, this.flags);
            return t.free(), e;
        }
    }
    class gd extends Ie {
        constructor(t, e){
            super(), this.type = Ce.Cylinder, this.halfHeight = t, this.radius = e;
        }
        intoRaw() {
            return Rt.cylinder(this.halfHeight, this.radius);
        }
    }
    class wd extends Ie {
        constructor(t, e, n){
            super(), this.type = Ce.RoundCylinder, this.borderRadius = n, this.halfHeight = t, this.radius = e;
        }
        intoRaw() {
            return Rt.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
        }
    }
    class bd extends Ie {
        constructor(t, e){
            super(), this.type = Ce.Cone, this.halfHeight = t, this.radius = e;
        }
        intoRaw() {
            return Rt.cone(this.halfHeight, this.radius);
        }
    }
    class vd extends Ie {
        constructor(t, e, n){
            super(), this.type = Ce.RoundCone, this.halfHeight = t, this.radius = e, this.borderRadius = n;
        }
        intoRaw() {
            return Rt.roundCone(this.halfHeight, this.radius, this.borderRadius);
        }
    }
    class lA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(t){
            this.raw = t || new Fw;
        }
        step(t, e, n, r, s, a, o, c, l, h, u, f) {
            let m = U.intoRaw(t);
            u ? this.raw.stepWithEvents(m, e.raw, n.raw, r.raw, s.raw, a.raw, o.raw, c.raw, l.raw, h.raw, u.raw, f, f ? f.filterContactPair : null, f ? f.filterIntersectionPair : null) : this.raw.step(m, e.raw, n.raw, r.raw, s.raw, a.raw, o.raw, c.raw, l.raw, h.raw), m.free();
        }
    }
    var ch;
    (function(i) {
        i[i.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", i[i.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", i[i.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", i[i.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", i[i.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", i[i.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", i[i.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", i[i.ONLY_FIXED = 6] = "ONLY_FIXED";
    })(ch || (ch = {}));
    class hA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(t){
            this.raw = t || new Qo;
        }
        update(t) {
            this.raw.update(t.raw);
        }
        castRay(t, e, n, r, s, a, o, c, l, h) {
            let u = U.intoRaw(n.origin), f = U.intoRaw(n.dir), m = ec.fromRaw(e, this.raw.castRay(t.raw, e.raw, u, f, r, s, a, o, c, l, h));
            return u.free(), f.free(), m;
        }
        castRayAndGetNormal(t, e, n, r, s, a, o, c, l, h) {
            let u = U.intoRaw(n.origin), f = U.intoRaw(n.dir), m = Rs.fromRaw(e, this.raw.castRayAndGetNormal(t.raw, e.raw, u, f, r, s, a, o, c, l, h));
            return u.free(), f.free(), m;
        }
        intersectionsWithRay(t, e, n, r, s, a, o, c, l, h, u) {
            let f = U.intoRaw(n.origin), m = U.intoRaw(n.dir), w = (b)=>a(Rs.fromRaw(e, b));
            this.raw.intersectionsWithRay(t.raw, e.raw, f, m, r, s, w, o, c, l, h, u), f.free(), m.free();
        }
        intersectionWithShape(t, e, n, r, s, a, o, c, l, h) {
            let u = U.intoRaw(n), f = Ht.intoRaw(r), m = s.intoRaw(), w = this.raw.intersectionWithShape(t.raw, e.raw, u, f, m, a, o, c, l, h);
            return u.free(), f.free(), m.free(), w;
        }
        projectPoint(t, e, n, r, s, a, o, c, l) {
            let h = U.intoRaw(n), u = Ts.fromRaw(e, this.raw.projectPoint(t.raw, e.raw, h, r, s, a, o, c, l));
            return h.free(), u;
        }
        projectPointAndGetFeature(t, e, n, r, s, a, o, c) {
            let l = U.intoRaw(n), h = Ts.fromRaw(e, this.raw.projectPointAndGetFeature(t.raw, e.raw, l, r, s, a, o, c));
            return l.free(), h;
        }
        intersectionsWithPoint(t, e, n, r, s, a, o, c, l) {
            let h = U.intoRaw(n);
            this.raw.intersectionsWithPoint(t.raw, e.raw, h, r, s, a, o, c, l), h.free();
        }
        castShape(t, e, n, r, s, a, o, c, l, h, u, f, m, w) {
            let b = U.intoRaw(n), g = Ht.intoRaw(r), _ = U.intoRaw(s), R = a.intoRaw(), E = Ws.fromRaw(e, this.raw.castShape(t.raw, e.raw, b, g, _, R, o, c, l, h, u, f, m, w));
            return b.free(), g.free(), _.free(), R.free(), E;
        }
        intersectionsWithShape(t, e, n, r, s, a, o, c, l, h, u) {
            let f = U.intoRaw(n), m = Ht.intoRaw(r), w = s.intoRaw();
            this.raw.intersectionsWithShape(t.raw, e.raw, f, m, w, a, o, c, l, h, u), f.free(), m.free(), w.free();
        }
        collidersWithAabbIntersectingAabb(t, e, n) {
            let r = U.intoRaw(t), s = U.intoRaw(e);
            this.raw.collidersWithAabbIntersectingAabb(r, s, n), r.free(), s.free();
        }
    }
    class lh {
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        constructor(t){
            this.raw = t || new Bw;
        }
        serializeAll(t, e, n, r, s, a, o, c, l) {
            let h = U.intoRaw(t);
            const u = this.raw.serializeAll(h, e.raw, n.raw, r.raw, s.raw, a.raw, o.raw, c.raw, l.raw);
            return h.free(), u;
        }
        deserializeAll(t) {
            return nc.fromRaw(this.raw.deserializeAll(t));
        }
    }
    class dA {
        constructor(t, e){
            this.vertices = t, this.colors = e;
        }
    }
    class uA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
        }
        constructor(t){
            this.raw = t || new Lw;
        }
        render(t, e, n, r, s) {
            this.raw.render(t.raw, e.raw, n.raw, r.raw, s.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
        }
    }
    class fA {
    }
    class _A {
        constructor(t, e, n, r, s){
            this.params = e, this.bodies = n, this.colliders = r, this.queries = s, this.raw = new Nw(t), this.rawCharacterCollision = new id, this._applyImpulsesToDynamicBodies = !1, this._characterMass = null;
        }
        free() {
            this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
        }
        up() {
            return this.raw.up();
        }
        setUp(t) {
            let e = U.intoRaw(t);
            return this.raw.setUp(e);
        }
        applyImpulsesToDynamicBodies() {
            return this._applyImpulsesToDynamicBodies;
        }
        setApplyImpulsesToDynamicBodies(t) {
            this._applyImpulsesToDynamicBodies = t;
        }
        characterMass() {
            return this._characterMass;
        }
        setCharacterMass(t) {
            this._characterMass = t;
        }
        offset() {
            return this.raw.offset();
        }
        setOffset(t) {
            this.raw.setOffset(t);
        }
        normalNudgeFactor() {
            return this.raw.normalNudgeFactor();
        }
        setNormalNudgeFactor(t) {
            this.raw.setNormalNudgeFactor(t);
        }
        slideEnabled() {
            return this.raw.slideEnabled();
        }
        setSlideEnabled(t) {
            this.raw.setSlideEnabled(t);
        }
        autostepMaxHeight() {
            return this.raw.autostepMaxHeight();
        }
        autostepMinWidth() {
            return this.raw.autostepMinWidth();
        }
        autostepIncludesDynamicBodies() {
            return this.raw.autostepIncludesDynamicBodies();
        }
        autostepEnabled() {
            return this.raw.autostepEnabled();
        }
        enableAutostep(t, e, n) {
            this.raw.enableAutostep(t, e, n);
        }
        disableAutostep() {
            return this.raw.disableAutostep();
        }
        maxSlopeClimbAngle() {
            return this.raw.maxSlopeClimbAngle();
        }
        setMaxSlopeClimbAngle(t) {
            this.raw.setMaxSlopeClimbAngle(t);
        }
        minSlopeSlideAngle() {
            return this.raw.minSlopeSlideAngle();
        }
        setMinSlopeSlideAngle(t) {
            this.raw.setMinSlopeSlideAngle(t);
        }
        snapToGroundDistance() {
            return this.raw.snapToGroundDistance();
        }
        enableSnapToGround(t) {
            this.raw.enableSnapToGround(t);
        }
        disableSnapToGround() {
            this.raw.disableSnapToGround();
        }
        snapToGroundEnabled() {
            return this.raw.snapToGroundEnabled();
        }
        computeColliderMovement(t, e, n, r, s) {
            let a = U.intoRaw(e);
            this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, t.handle, a, this._applyImpulsesToDynamicBodies, this._characterMass, n, r, this.colliders.castClosure(s)), a.free();
        }
        computedMovement() {
            return U.fromRaw(this.raw.computedMovement());
        }
        computedGrounded() {
            return this.raw.computedGrounded();
        }
        numComputedCollisions() {
            return this.raw.numComputedCollisions();
        }
        computedCollision(t, e) {
            if (this.raw.computedCollision(t, this.rawCharacterCollision)) {
                let n = this.rawCharacterCollision;
                return e = e ?? new fA, e.translationDeltaApplied = U.fromRaw(n.translationDeltaApplied()), e.translationDeltaRemaining = U.fromRaw(n.translationDeltaRemaining()), e.toi = n.toi(), e.witness1 = U.fromRaw(n.worldWitness1()), e.witness2 = U.fromRaw(n.worldWitness2()), e.normal1 = U.fromRaw(n.worldNormal1()), e.normal2 = U.fromRaw(n.worldNormal2()), e.collider = this.colliders.get(n.handle()), e;
            } else return null;
        }
    }
    var hh;
    (function(i) {
        i[i.None = 0] = "None", i[i.LinX = 1] = "LinX", i[i.LinY = 2] = "LinY", i[i.LinZ = 4] = "LinZ", i[i.AngX = 8] = "AngX", i[i.AngY = 16] = "AngY", i[i.AngZ = 32] = "AngZ", i[i.AllLin = 7] = "AllLin", i[i.AllAng = 56] = "AllAng", i[i.All = 63] = "All";
    })(hh || (hh = {}));
    class pA {
        constructor(t, e, n, r, s, a){
            this.params = t, this.bodies = e, this.raw = new Ow(n, r, s, a);
        }
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        setKp(t, e) {
            this.raw.set_kp(t, e);
        }
        setKi(t, e) {
            this.raw.set_kp(t, e);
        }
        setKd(t, e) {
            this.raw.set_kp(t, e);
        }
        setAxes(t) {
            this.raw.set_axes_mask(t);
        }
        resetIntegrals() {
            this.raw.reset_integrals();
        }
        applyLinearCorrection(t, e, n) {
            let r = U.intoRaw(e), s = U.intoRaw(n);
            this.raw.apply_linear_correction(this.params.dt, this.bodies.raw, t.handle, r, s), r.free(), s.free();
        }
        applyAngularCorrection(t, e, n) {
            let r = Ht.intoRaw(e), s = U.intoRaw(n);
            this.raw.apply_angular_correction(this.params.dt, this.bodies.raw, t.handle, r, s), r.free(), s.free();
        }
        linearCorrection(t, e, n) {
            let r = U.intoRaw(e), s = U.intoRaw(n), a = this.raw.linear_correction(this.params.dt, this.bodies.raw, t.handle, r, s);
            return r.free(), s.free(), U.fromRaw(a);
        }
        angularCorrection(t, e, n) {
            let r = Ht.intoRaw(e), s = U.intoRaw(n), a = this.raw.angular_correction(this.params.dt, this.bodies.raw, t.handle, r, s);
            return r.free(), s.free(), U.fromRaw(a);
        }
    }
    class mA {
        constructor(t, e, n, r){
            this.raw = new Uw(t.handle), this.bodies = e, this.colliders = n, this.queries = r, this._chassis = t;
        }
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        updateVehicle(t, e, n, r) {
            this.raw.update_vehicle(t, this.bodies.raw, this.colliders.raw, this.queries.raw, e, n, this.colliders.castClosure(r));
        }
        currentVehicleSpeed() {
            return this.raw.current_vehicle_speed();
        }
        chassis() {
            return this._chassis;
        }
        get indexUpAxis() {
            return this.raw.index_up_axis();
        }
        set indexUpAxis(t) {
            this.raw.set_index_up_axis(t);
        }
        get indexForwardAxis() {
            return this.raw.index_forward_axis();
        }
        set setIndexForwardAxis(t) {
            this.raw.set_index_forward_axis(t);
        }
        addWheel(t, e, n, r, s) {
            let a = U.intoRaw(t), o = U.intoRaw(e), c = U.intoRaw(n);
            this.raw.add_wheel(a, o, c, r, s), a.free(), o.free(), c.free();
        }
        numWheels() {
            return this.raw.num_wheels();
        }
        wheelChassisConnectionPointCs(t) {
            return U.fromRaw(this.raw.wheel_chassis_connection_point_cs(t));
        }
        setWheelChassisConnectionPointCs(t, e) {
            let n = U.intoRaw(e);
            this.raw.set_wheel_chassis_connection_point_cs(t, n), n.free();
        }
        wheelSuspensionRestLength(t) {
            return this.raw.wheel_suspension_rest_length(t);
        }
        setWheelSuspensionRestLength(t, e) {
            this.raw.set_wheel_suspension_rest_length(t, e);
        }
        wheelMaxSuspensionTravel(t) {
            return this.raw.wheel_max_suspension_travel(t);
        }
        setWheelMaxSuspensionTravel(t, e) {
            this.raw.set_wheel_max_suspension_travel(t, e);
        }
        wheelRadius(t) {
            return this.raw.wheel_radius(t);
        }
        setWheelRadius(t, e) {
            this.raw.set_wheel_radius(t, e);
        }
        wheelSuspensionStiffness(t) {
            return this.raw.wheel_suspension_stiffness(t);
        }
        setWheelSuspensionStiffness(t, e) {
            this.raw.set_wheel_suspension_stiffness(t, e);
        }
        wheelSuspensionCompression(t) {
            return this.raw.wheel_suspension_compression(t);
        }
        setWheelSuspensionCompression(t, e) {
            this.raw.set_wheel_suspension_compression(t, e);
        }
        wheelSuspensionRelaxation(t) {
            return this.raw.wheel_suspension_relaxation(t);
        }
        setWheelSuspensionRelaxation(t, e) {
            this.raw.set_wheel_suspension_relaxation(t, e);
        }
        wheelMaxSuspensionForce(t) {
            return this.raw.wheel_max_suspension_force(t);
        }
        setWheelMaxSuspensionForce(t, e) {
            this.raw.set_wheel_max_suspension_force(t, e);
        }
        wheelBrake(t) {
            return this.raw.wheel_brake(t);
        }
        setWheelBrake(t, e) {
            this.raw.set_wheel_brake(t, e);
        }
        wheelSteering(t) {
            return this.raw.wheel_steering(t);
        }
        setWheelSteering(t, e) {
            this.raw.set_wheel_steering(t, e);
        }
        wheelEngineForce(t) {
            return this.raw.wheel_engine_force(t);
        }
        setWheelEngineForce(t, e) {
            this.raw.set_wheel_engine_force(t, e);
        }
        wheelDirectionCs(t) {
            return U.fromRaw(this.raw.wheel_direction_cs(t));
        }
        setWheelDirectionCs(t, e) {
            let n = U.intoRaw(e);
            this.raw.set_wheel_direction_cs(t, n), n.free();
        }
        wheelAxleCs(t) {
            return U.fromRaw(this.raw.wheel_axle_cs(t));
        }
        setWheelAxleCs(t, e) {
            let n = U.intoRaw(e);
            this.raw.set_wheel_axle_cs(t, n), n.free();
        }
        wheelFrictionSlip(t) {
            return this.raw.wheel_friction_slip(t);
        }
        setWheelFrictionSlip(t, e) {
            this.raw.set_wheel_friction_slip(t, e);
        }
        wheelSideFrictionStiffness(t) {
            return this.raw.wheel_side_friction_stiffness(t);
        }
        setWheelSideFrictionStiffness(t, e) {
            this.raw.set_wheel_side_friction_stiffness(t, e);
        }
        wheelRotation(t) {
            return this.raw.wheel_rotation(t);
        }
        wheelForwardImpulse(t) {
            return this.raw.wheel_forward_impulse(t);
        }
        wheelSideImpulse(t) {
            return this.raw.wheel_side_impulse(t);
        }
        wheelSuspensionForce(t) {
            return this.raw.wheel_suspension_force(t);
        }
        wheelContactNormal(t) {
            return U.fromRaw(this.raw.wheel_contact_normal_ws(t));
        }
        wheelContactPoint(t) {
            return U.fromRaw(this.raw.wheel_contact_point_ws(t));
        }
        wheelSuspensionLength(t) {
            return this.raw.wheel_suspension_length(t);
        }
        wheelHardPoint(t) {
            return U.fromRaw(this.raw.wheel_hard_point_ws(t));
        }
        wheelIsInContact(t) {
            return this.raw.wheel_is_in_contact(t);
        }
        wheelGroundObject(t) {
            return this.colliders.get(this.raw.wheel_ground_object(t));
        }
    }
    nc = class {
        free() {
            this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t)=>t.free()), this.pidControllers.forEach((t)=>t.free()), this.vehicleControllers.forEach((t)=>t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.pidControllers = void 0, this.vehicleControllers = void 0;
        }
        constructor(t, e, n, r, s, a, o, c, l, h, u, f, m, w){
            this.gravity = t, this.integrationParameters = new GR(e), this.islands = new rA(n), this.broadPhase = new sA(r), this.narrowPhase = new aA(s), this.bodies = new VR(a), this.colliders = new wA(o), this.impulseJoints = new JR(c), this.multibodyJoints = new nA(l), this.ccdSolver = new iA(h), this.queryPipeline = new hA(u), this.physicsPipeline = new lA(f), this.serializationPipeline = new lh(m), this.debugRenderPipeline = new uA(w), this.characterControllers = new Set, this.pidControllers = new Set, this.vehicleControllers = new Set, this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
        }
        static fromRaw(t) {
            return t ? new nc(U.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
        }
        takeSnapshot() {
            return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
        }
        static restoreSnapshot(t) {
            return new lh().deserializeAll(t);
        }
        debugRender() {
            return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new dA(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
        }
        step(t, e) {
            this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, t, e), this.queryPipeline.update(this.colliders);
        }
        propagateModifiedBodyPositionsToColliders() {
            this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
        }
        updateSceneQueries() {
            this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.colliders);
        }
        get timestep() {
            return this.integrationParameters.dt;
        }
        set timestep(t) {
            this.integrationParameters.dt = t;
        }
        get lengthUnit() {
            return this.integrationParameters.lengthUnit;
        }
        set lengthUnit(t) {
            this.integrationParameters.lengthUnit = t;
        }
        get numSolverIterations() {
            return this.integrationParameters.numSolverIterations;
        }
        set numSolverIterations(t) {
            this.integrationParameters.numSolverIterations = t;
        }
        get numAdditionalFrictionIterations() {
            return this.integrationParameters.numAdditionalFrictionIterations;
        }
        set numAdditionalFrictionIterations(t) {
            this.integrationParameters.numAdditionalFrictionIterations = t;
        }
        get numInternalPgsIterations() {
            return this.integrationParameters.numInternalPgsIterations;
        }
        set numInternalPgsIterations(t) {
            this.integrationParameters.numInternalPgsIterations = t;
        }
        switchToStandardPgsSolver() {
            this.integrationParameters.switchToStandardPgsSolver();
        }
        switchToSmallStepsPgsSolver() {
            this.integrationParameters.switchToSmallStepsPgsSolver();
        }
        switchToSmallStepsPgsSolverWithoutWarmstart() {
            this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart();
        }
        createRigidBody(t) {
            return this.bodies.createRigidBody(this.colliders, t);
        }
        createCharacterController(t) {
            let e = new _A(t, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
            return this.characterControllers.add(e), e;
        }
        removeCharacterController(t) {
            this.characterControllers.delete(t), t.free();
        }
        createPidController(t, e, n, r) {
            let s = new pA(this.integrationParameters, this.bodies, t, e, n, r);
            return this.pidControllers.add(s), s;
        }
        removePidController(t) {
            this.pidControllers.delete(t), t.free();
        }
        createVehicleController(t) {
            let e = new mA(t, this.bodies, this.colliders, this.queryPipeline);
            return this.vehicleControllers.add(e), e;
        }
        removeVehicleController(t) {
            this.vehicleControllers.delete(t), t.free();
        }
        createCollider(t, e) {
            let n = e ? e.handle : void 0;
            return this.colliders.createCollider(this.bodies, t, n);
        }
        createImpulseJoint(t, e, n, r) {
            return this.impulseJoints.createJoint(this.bodies, t, e.handle, n.handle, r);
        }
        createMultibodyJoint(t, e, n, r) {
            return this.multibodyJoints.createJoint(t, e.handle, n.handle, r);
        }
        getRigidBody(t) {
            return this.bodies.get(t);
        }
        getCollider(t) {
            return this.colliders.get(t);
        }
        getImpulseJoint(t) {
            return this.impulseJoints.get(t);
        }
        getMultibodyJoint(t) {
            return this.multibodyJoints.get(t);
        }
        removeRigidBody(t) {
            this.bodies && this.bodies.remove(t.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
        }
        removeCollider(t, e) {
            this.colliders && this.colliders.remove(t.handle, this.islands, this.bodies, e);
        }
        removeImpulseJoint(t, e) {
            this.impulseJoints && this.impulseJoints.remove(t.handle, e);
        }
        removeMultibodyJoint(t, e) {
            this.impulseJoints && this.multibodyJoints.remove(t.handle, e);
        }
        forEachCollider(t) {
            this.colliders.forEach(t);
        }
        forEachRigidBody(t) {
            this.bodies.forEach(t);
        }
        forEachActiveRigidBody(t) {
            this.bodies.forEachActiveRigidBody(this.islands, t);
        }
        castRay(t, e, n, r, s, a, o, c) {
            return this.queryPipeline.castRay(this.bodies, this.colliders, t, e, n, r, s, a ? a.handle : null, o ? o.handle : null, this.colliders.castClosure(c));
        }
        castRayAndGetNormal(t, e, n, r, s, a, o, c) {
            return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, t, e, n, r, s, a ? a.handle : null, o ? o.handle : null, this.colliders.castClosure(c));
        }
        intersectionsWithRay(t, e, n, r, s, a, o, c, l) {
            this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, t, e, n, r, s, a, o ? o.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
        }
        intersectionWithShape(t, e, n, r, s, a, o, c) {
            let l = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, t, e, n, r, s, a ? a.handle : null, o ? o.handle : null, this.colliders.castClosure(c));
            return l != null ? this.colliders.get(l) : null;
        }
        projectPoint(t, e, n, r, s, a, o) {
            return this.queryPipeline.projectPoint(this.bodies, this.colliders, t, e, n, r, s ? s.handle : null, a ? a.handle : null, this.colliders.castClosure(o));
        }
        projectPointAndGetFeature(t, e, n, r, s, a) {
            return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, t, e, n, r ? r.handle : null, s ? s.handle : null, this.colliders.castClosure(a));
        }
        intersectionsWithPoint(t, e, n, r, s, a, o) {
            this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, t, this.colliders.castClosure(e), n, r, s ? s.handle : null, a ? a.handle : null, this.colliders.castClosure(o));
        }
        castShape(t, e, n, r, s, a, o, c, l, h, u, f) {
            return this.queryPipeline.castShape(this.bodies, this.colliders, t, e, n, r, s, a, o, c, l, h ? h.handle : null, u ? u.handle : null, this.colliders.castClosure(f));
        }
        intersectionsWithShape(t, e, n, r, s, a, o, c, l) {
            this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, t, e, n, this.colliders.castClosure(r), s, a, o ? o.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
        }
        collidersWithAabbIntersectingAabb(t, e, n) {
            this.queryPipeline.collidersWithAabbIntersectingAabb(t, e, this.colliders.castClosure(n));
        }
        contactPairsWith(t, e) {
            this.narrowPhase.contactPairsWith(t.handle, this.colliders.castClosure(e));
        }
        intersectionPairsWith(t, e) {
            this.narrowPhase.intersectionPairsWith(t.handle, this.colliders.castClosure(e));
        }
        contactPair(t, e, n) {
            this.narrowPhase.contactPair(t.handle, e.handle, n);
        }
        intersectionPair(t, e) {
            return this.narrowPhase.intersectionPair(t.handle, e.handle);
        }
    };
    (function(i) {
        i[i.NONE = 0] = "NONE", i[i.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", i[i.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
    })(Po || (Po = {}));
    class gA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        collider1() {
            return this.raw.collider1();
        }
        collider2() {
            return this.raw.collider2();
        }
        totalForce() {
            return U.fromRaw(this.raw.total_force());
        }
        totalForceMagnitude() {
            return this.raw.total_force_magnitude();
        }
        maxForceDirection() {
            return U.fromRaw(this.raw.max_force_direction());
        }
        maxForceMagnitude() {
            return this.raw.max_force_magnitude();
        }
    }
    qA = class {
        constructor(t, e){
            this.raw = e || new rd(t);
        }
        free() {
            this.raw && this.raw.free(), this.raw = void 0;
        }
        drainCollisionEvents(t) {
            this.raw.drainCollisionEvents(t);
        }
        drainContactForceEvents(t) {
            let e = new gA;
            this.raw.drainContactForceEvents((n)=>{
                e.raw = n, t(e), e.free();
            });
        }
        clear() {
            this.raw.clear();
        }
    };
    var Io;
    (function(i) {
        i[i.NONE = 0] = "NONE", i[i.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", i[i.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
    })(Io || (Io = {}));
    var dh;
    (function(i) {
        i[i.EMPTY = 0] = "EMPTY", i[i.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
    })(dh || (dh = {}));
    var Do;
    (function(i) {
        i[i.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", i[i.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", i[i.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", i[i.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", i[i.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", i[i.FIXED_FIXED = 32] = "FIXED_FIXED", i[i.DEFAULT = 15] = "DEFAULT", i[i.ALL = 60943] = "ALL";
    })(Do || (Do = {}));
    class uh {
        constructor(t, e, n, r){
            this.colliderSet = t, this.handle = e, this._parent = n, this._shape = r;
        }
        finalizeDeserialization(t) {
            this.handle != null && (this._parent = t.get(this.colliderSet.raw.coParent(this.handle)));
        }
        ensureShapeIsCached() {
            this._shape || (this._shape = Ie.fromRaw(this.colliderSet.raw, this.handle));
        }
        get shape() {
            return this.ensureShapeIsCached(), this._shape;
        }
        isValid() {
            return this.colliderSet.raw.contains(this.handle);
        }
        translation() {
            return U.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
        }
        rotation() {
            return Ht.fromRaw(this.colliderSet.raw.coRotation(this.handle));
        }
        isSensor() {
            return this.colliderSet.raw.coIsSensor(this.handle);
        }
        setSensor(t) {
            this.colliderSet.raw.coSetSensor(this.handle, t);
        }
        setShape(t) {
            let e = t.intoRaw();
            this.colliderSet.raw.coSetShape(this.handle, e), e.free(), this._shape = t;
        }
        setEnabled(t) {
            this.colliderSet.raw.coSetEnabled(this.handle, t);
        }
        isEnabled() {
            return this.colliderSet.raw.coIsEnabled(this.handle);
        }
        setRestitution(t) {
            this.colliderSet.raw.coSetRestitution(this.handle, t);
        }
        setFriction(t) {
            this.colliderSet.raw.coSetFriction(this.handle, t);
        }
        frictionCombineRule() {
            return this.colliderSet.raw.coFrictionCombineRule(this.handle);
        }
        setFrictionCombineRule(t) {
            this.colliderSet.raw.coSetFrictionCombineRule(this.handle, t);
        }
        restitutionCombineRule() {
            return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
        }
        setRestitutionCombineRule(t) {
            this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, t);
        }
        setCollisionGroups(t) {
            this.colliderSet.raw.coSetCollisionGroups(this.handle, t);
        }
        setSolverGroups(t) {
            this.colliderSet.raw.coSetSolverGroups(this.handle, t);
        }
        contactSkin() {
            return this.colliderSet.raw.coContactSkin(this.handle);
        }
        setContactSkin(t) {
            return this.colliderSet.raw.coSetContactSkin(this.handle, t);
        }
        activeHooks() {
            return this.colliderSet.raw.coActiveHooks(this.handle);
        }
        setActiveHooks(t) {
            this.colliderSet.raw.coSetActiveHooks(this.handle, t);
        }
        activeEvents() {
            return this.colliderSet.raw.coActiveEvents(this.handle);
        }
        setActiveEvents(t) {
            this.colliderSet.raw.coSetActiveEvents(this.handle, t);
        }
        activeCollisionTypes() {
            return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
        }
        setContactForceEventThreshold(t) {
            return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, t);
        }
        contactForceEventThreshold() {
            return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
        }
        setActiveCollisionTypes(t) {
            this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, t);
        }
        setDensity(t) {
            this.colliderSet.raw.coSetDensity(this.handle, t);
        }
        setMass(t) {
            this.colliderSet.raw.coSetMass(this.handle, t);
        }
        setMassProperties(t, e, n, r) {
            let s = U.intoRaw(e), a = U.intoRaw(n), o = Ht.intoRaw(r);
            this.colliderSet.raw.coSetMassProperties(this.handle, t, s, a, o), s.free(), a.free(), o.free();
        }
        setTranslation(t) {
            this.colliderSet.raw.coSetTranslation(this.handle, t.x, t.y, t.z);
        }
        setTranslationWrtParent(t) {
            this.colliderSet.raw.coSetTranslationWrtParent(this.handle, t.x, t.y, t.z);
        }
        setRotation(t) {
            this.colliderSet.raw.coSetRotation(this.handle, t.x, t.y, t.z, t.w);
        }
        setRotationWrtParent(t) {
            this.colliderSet.raw.coSetRotationWrtParent(this.handle, t.x, t.y, t.z, t.w);
        }
        shapeType() {
            return this.colliderSet.raw.coShapeType(this.handle);
        }
        halfExtents() {
            return U.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
        }
        setHalfExtents(t) {
            const e = U.intoRaw(t);
            this.colliderSet.raw.coSetHalfExtents(this.handle, e);
        }
        radius() {
            return this.colliderSet.raw.coRadius(this.handle);
        }
        setRadius(t) {
            this.colliderSet.raw.coSetRadius(this.handle, t);
        }
        roundRadius() {
            return this.colliderSet.raw.coRoundRadius(this.handle);
        }
        setRoundRadius(t) {
            this.colliderSet.raw.coSetRoundRadius(this.handle, t);
        }
        halfHeight() {
            return this.colliderSet.raw.coHalfHeight(this.handle);
        }
        setHalfHeight(t) {
            this.colliderSet.raw.coSetHalfHeight(this.handle, t);
        }
        vertices() {
            return this.colliderSet.raw.coVertices(this.handle);
        }
        indices() {
            return this.colliderSet.raw.coIndices(this.handle);
        }
        heightfieldHeights() {
            return this.colliderSet.raw.coHeightfieldHeights(this.handle);
        }
        heightfieldScale() {
            let t = this.colliderSet.raw.coHeightfieldScale(this.handle);
            return U.fromRaw(t);
        }
        heightfieldNRows() {
            return this.colliderSet.raw.coHeightfieldNRows(this.handle);
        }
        heightfieldNCols() {
            return this.colliderSet.raw.coHeightfieldNCols(this.handle);
        }
        parent() {
            return this._parent;
        }
        friction() {
            return this.colliderSet.raw.coFriction(this.handle);
        }
        restitution() {
            return this.colliderSet.raw.coRestitution(this.handle);
        }
        density() {
            return this.colliderSet.raw.coDensity(this.handle);
        }
        mass() {
            return this.colliderSet.raw.coMass(this.handle);
        }
        volume() {
            return this.colliderSet.raw.coVolume(this.handle);
        }
        collisionGroups() {
            return this.colliderSet.raw.coCollisionGroups(this.handle);
        }
        solverGroups() {
            return this.colliderSet.raw.coSolverGroups(this.handle);
        }
        containsPoint(t) {
            let e = U.intoRaw(t), n = this.colliderSet.raw.coContainsPoint(this.handle, e);
            return e.free(), n;
        }
        projectPoint(t, e) {
            let n = U.intoRaw(t), r = Vs.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, n, e));
            return n.free(), r;
        }
        intersectsRay(t, e) {
            let n = U.intoRaw(t.origin), r = U.intoRaw(t.dir), s = this.colliderSet.raw.coIntersectsRay(this.handle, n, r, e);
            return n.free(), r.free(), s;
        }
        castShape(t, e, n, r, s, a, o, c) {
            let l = U.intoRaw(t), h = U.intoRaw(n), u = Ht.intoRaw(r), f = U.intoRaw(s), m = e.intoRaw(), w = Rr.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, l, m, h, u, f, a, o, c));
            return l.free(), h.free(), u.free(), f.free(), m.free(), w;
        }
        castCollider(t, e, n, r, s, a) {
            let o = U.intoRaw(t), c = U.intoRaw(n), l = Ws.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, o, e.handle, c, r, s, a));
            return o.free(), c.free(), l;
        }
        intersectsShape(t, e, n) {
            let r = U.intoRaw(e), s = Ht.intoRaw(n), a = t.intoRaw(), o = this.colliderSet.raw.coIntersectsShape(this.handle, a, r, s);
            return r.free(), s.free(), a.free(), o;
        }
        contactShape(t, e, n, r) {
            let s = U.intoRaw(e), a = Ht.intoRaw(n), o = t.intoRaw(), c = xr.fromRaw(this.colliderSet.raw.coContactShape(this.handle, o, s, a, r));
            return s.free(), a.free(), o.free(), c;
        }
        contactCollider(t, e) {
            return xr.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, t.handle, e));
        }
        castRay(t, e, n) {
            let r = U.intoRaw(t.origin), s = U.intoRaw(t.dir), a = this.colliderSet.raw.coCastRay(this.handle, r, s, e, n);
            return r.free(), s.free(), a;
        }
        castRayAndGetNormal(t, e, n) {
            let r = U.intoRaw(t.origin), s = U.intoRaw(t.dir), a = Gs.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, r, s, e, n));
            return r.free(), s.free(), a;
        }
    }
    var Vi;
    (function(i) {
        i[i.Density = 0] = "Density", i[i.Mass = 1] = "Mass", i[i.MassProps = 2] = "MassProps";
    })(Vi || (Vi = {}));
    Te = class {
        constructor(t){
            this.enabled = !0, this.shape = t, this.massPropsMode = Vi.Density, this.density = 1, this.friction = .5, this.restitution = 0, this.rotation = Ht.identity(), this.translation = U.zeros(), this.isSensor = !1, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = Es.Average, this.restitutionCombineRule = Es.Average, this.activeCollisionTypes = Do.DEFAULT, this.activeEvents = Po.NONE, this.activeHooks = Io.NONE, this.mass = 0, this.centerOfMass = U.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = U.zeros(), this.angularInertiaLocalFrame = Ht.identity();
        }
        static ball(t) {
            const e = new od(t);
            return new Te(e);
        }
        static capsule(t, e) {
            const n = new hd(t, e);
            return new Te(n);
        }
        static segment(t, e) {
            const n = new dd(t, e);
            return new Te(n);
        }
        static triangle(t, e, n) {
            const r = new ud(t, e, n);
            return new Te(r);
        }
        static roundTriangle(t, e, n, r) {
            const s = new fd(t, e, n, r);
            return new Te(s);
        }
        static polyline(t, e) {
            const n = new _d(t, e);
            return new Te(n);
        }
        static trimesh(t, e, n) {
            const r = new pd(t, e, n);
            return new Te(r);
        }
        static cuboid(t, e, n) {
            const r = new cd(t, e, n);
            return new Te(r);
        }
        static roundCuboid(t, e, n, r) {
            const s = new ld(t, e, n, r);
            return new Te(s);
        }
        static heightfield(t, e, n, r, s) {
            const a = new md(t, e, n, r, s);
            return new Te(a);
        }
        static cylinder(t, e) {
            const n = new gd(t, e);
            return new Te(n);
        }
        static roundCylinder(t, e, n) {
            const r = new wd(t, e, n);
            return new Te(r);
        }
        static cone(t, e) {
            const n = new bd(t, e);
            return new Te(n);
        }
        static roundCone(t, e, n) {
            const r = new vd(t, e, n);
            return new Te(r);
        }
        static convexHull(t) {
            const e = new Ao(t, null);
            return new Te(e);
        }
        static convexMesh(t, e) {
            const n = new Ao(t, e);
            return new Te(n);
        }
        static roundConvexHull(t, e) {
            const n = new Co(t, null, e);
            return new Te(n);
        }
        static roundConvexMesh(t, e, n) {
            const r = new Co(t, e, n);
            return new Te(r);
        }
        setTranslation(t, e, n) {
            if (typeof t != "number" || typeof e != "number" || typeof n != "number") throw TypeError("The translation components must be numbers.");
            return this.translation = {
                x: t,
                y: e,
                z: n
            }, this;
        }
        setRotation(t) {
            return Ht.copy(this.rotation, t), this;
        }
        setSensor(t) {
            return this.isSensor = t, this;
        }
        setEnabled(t) {
            return this.enabled = t, this;
        }
        setContactSkin(t) {
            return this.contactSkin = t, this;
        }
        setDensity(t) {
            return this.massPropsMode = Vi.Density, this.density = t, this;
        }
        setMass(t) {
            return this.massPropsMode = Vi.Mass, this.mass = t, this;
        }
        setMassProperties(t, e, n, r) {
            return this.massPropsMode = Vi.MassProps, this.mass = t, U.copy(this.centerOfMass, e), U.copy(this.principalAngularInertia, n), Ht.copy(this.angularInertiaLocalFrame, r), this;
        }
        setRestitution(t) {
            return this.restitution = t, this;
        }
        setFriction(t) {
            return this.friction = t, this;
        }
        setFrictionCombineRule(t) {
            return this.frictionCombineRule = t, this;
        }
        setRestitutionCombineRule(t) {
            return this.restitutionCombineRule = t, this;
        }
        setCollisionGroups(t) {
            return this.collisionGroups = t, this;
        }
        setSolverGroups(t) {
            return this.solverGroups = t, this;
        }
        setActiveHooks(t) {
            return this.activeHooks = t, this;
        }
        setActiveEvents(t) {
            return this.activeEvents = t, this;
        }
        setActiveCollisionTypes(t) {
            return this.activeCollisionTypes = t, this;
        }
        setContactForceEventThreshold(t) {
            return this.contactForceEventThreshold = t, this;
        }
    };
    class wA {
        free() {
            this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        constructor(t){
            this.raw = t || new we, this.map = new ks, t && t.forEachColliderHandle((e)=>{
                this.map.set(e, new uh(this, e, null));
            });
        }
        castClosure(t) {
            return (e)=>{
                if (t) return t(this.get(e));
            };
        }
        finalizeDeserialization(t) {
            this.map.forEach((e)=>e.finalizeDeserialization(t));
        }
        createCollider(t, e, n) {
            let r = n != null && n != null;
            if (r && isNaN(n)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
            let s = e.shape.intoRaw(), a = U.intoRaw(e.translation), o = Ht.intoRaw(e.rotation), c = U.intoRaw(e.centerOfMass), l = U.intoRaw(e.principalAngularInertia), h = Ht.intoRaw(e.angularInertiaLocalFrame), u = this.raw.createCollider(e.enabled, s, a, o, e.massPropsMode, e.mass, c, l, h, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, e.contactSkin, r, r ? n : 0, t.raw);
            s.free(), a.free(), o.free(), c.free(), l.free(), h.free();
            let f = r ? t.get(n) : null, m = new uh(this, u, f, e.shape);
            return this.map.set(u, m), m;
        }
        remove(t, e, n, r) {
            this.raw.remove(t, e.raw, n.raw, r), this.unmap(t);
        }
        unmap(t) {
            this.map.delete(t);
        }
        get(t) {
            return this.map.get(t);
        }
        len() {
            return this.map.len();
        }
        contains(t) {
            return this.get(t) != null;
        }
        forEach(t) {
            this.map.forEach(t);
        }
        getAll() {
            return this.map.getAll();
        }
    }
    var ps = {
        exports: {}
    }, bA = ps.exports, fh;
    YA = function() {
        return fh || (fh = 1, function(i, t) {
            (function(e, n) {
                i.exports = n();
            })(bA, function() {
                var e = function() {
                    function n(m) {
                        return a.appendChild(m.dom), m;
                    }
                    function r(m) {
                        for(var w = 0; w < a.children.length; w++)a.children[w].style.display = w === m ? "block" : "none";
                        s = m;
                    }
                    var s = 0, a = document.createElement("div");
                    a.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", a.addEventListener("click", function(m) {
                        m.preventDefault(), r(++s % a.children.length);
                    }, !1);
                    var o = (performance || Date).now(), c = o, l = 0, h = n(new e.Panel("FPS", "#0ff", "#002")), u = n(new e.Panel("MS", "#0f0", "#020"));
                    if (self.performance && self.performance.memory) var f = n(new e.Panel("MB", "#f08", "#201"));
                    return r(0), {
                        REVISION: 16,
                        dom: a,
                        addPanel: n,
                        showPanel: r,
                        begin: function() {
                            o = (performance || Date).now();
                        },
                        end: function() {
                            l++;
                            var m = (performance || Date).now();
                            if (u.update(m - o, 200), m > c + 1e3 && (h.update(1e3 * l / (m - c), 100), c = m, l = 0, f)) {
                                var w = performance.memory;
                                f.update(w.usedJSHeapSize / 1048576, w.jsHeapSizeLimit / 1048576);
                            }
                            return m;
                        },
                        update: function() {
                            o = this.end();
                        },
                        domElement: a,
                        setMode: r
                    };
                };
                return e.Panel = function(n, r, s) {
                    var a = 1 / 0, o = 0, c = Math.round, l = c(window.devicePixelRatio || 1), h = 80 * l, u = 48 * l, f = 3 * l, m = 2 * l, w = 3 * l, b = 15 * l, g = 74 * l, _ = 30 * l, R = document.createElement("canvas");
                    R.width = h, R.height = u, R.style.cssText = "width:80px;height:48px";
                    var E = R.getContext("2d");
                    return E.font = "bold " + 9 * l + "px Helvetica,Arial,sans-serif", E.textBaseline = "top", E.fillStyle = s, E.fillRect(0, 0, h, u), E.fillStyle = r, E.fillText(n, f, m), E.fillRect(w, b, g, _), E.fillStyle = s, E.globalAlpha = .9, E.fillRect(w, b, g, _), {
                        dom: R,
                        update: function(S, N) {
                            a = Math.min(a, S), o = Math.max(o, S), E.fillStyle = s, E.globalAlpha = 1, E.fillRect(0, 0, h, b), E.fillStyle = r, E.fillText(c(S) + " " + n + " (" + c(a) + "-" + c(o) + ")", f, m), E.drawImage(R, w + l, b, g - l, _, w, b, g - l, _), E.fillRect(w + g - l, b, l, _), E.fillStyle = s, E.globalAlpha = .9, E.fillRect(w + g - l, b, l, c((1 - S / N) * _));
                        }
                    };
                }, e;
            });
        }(ps)), ps.exports;
    };
})();
export { Ka as $, kA as A, mn as B, jA as C, HA as D, qA as E, FA as F, OA as G, GA as H, PA as I, AA as J, pi as K, ff as L, vA as M, Pr as N, xe as O, hi as P, tr as Q, Cs as R, WA as S, yA as T, qs as U, H as V, XA as W, ru as X, bn as Y, Ze as Z, Ya as _, $t as a, _i as a0, _f as a1, xi as a2, pf as a3, Dn as a4, Lh as a5, le as a6, CA as a7, rn as a8, Vh as a9, DA as aa, LA as ab, qr as ac, Yh as ad, kh as ae, NA as af, cf as ag, ms as ah, So as ai, zh as aj, Be as ak, xs as al, ys as am, Ds as an, te as ao, Zn as ap, Is as aq, Qn as ar, zn as as, Er as at, Wh as au, jh as av, HR as aw, EA as b, RA as c, Ke as d, Cd as e, BA as f, nc as g, In as h, Te as i, Po as j, gn as k, IA as l, xA as m, MA as n, SA as o, sn as p, Tr as q, YA as r, VA as s, UA as t, Wt as u, Ji as v, en as w, zA as x, Gt as y, Wc as z, __tla };
