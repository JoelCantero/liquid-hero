const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["./1lRpxsaJ.js", "./_slug_.BPIJkU3I.css", "./BKHG8VJz.js", "./a2xVnk0y.js"]))) => i.map(i => d[i]);
var xy = Object.defineProperty;
var Pl = e => {
    throw TypeError(e)
}
;
var Ay = (e, t, n) => t in e ? xy(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var te = (e, t, n) => Ay(e, typeof t != "symbol" ? t + "" : t, n)
  , Hi = (e, t, n) => t.has(e) || Pl("Cannot " + n);
var R = (e, t, n) => (Hi(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , le = (e, t, n) => t.has(e) ? Pl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , re = (e, t, n, r) => (Hi(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , un = (e, t, n) => (Hi(e, t, "access private method"),
n);
/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function hi(e, t) {
    const n = new Set(e.split(","));
    return r => n.has(r)
}
const ve = {}
  , Or = []
  , ht = () => {}
  , Ry = () => !1
  , Zo = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , pc = e => e.startsWith("onUpdate:")
  , Le = Object.assign
  , gc = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Oy = Object.prototype.hasOwnProperty
  , be = (e, t) => Oy.call(e, t)
  , Q = Array.isArray
  , Pr = e => Xr(e) === "[object Map]"
  , yr = e => Xr(e) === "[object Set]"
  , $l = e => Xr(e) === "[object Date]"
  , Py = e => Xr(e) === "[object RegExp]"
  , ie = e => typeof e == "function"
  , Me = e => typeof e == "string"
  , Wt = e => typeof e == "symbol"
  , ke = e => e !== null && typeof e == "object"
  , mc = e => (ke(e) || ie(e)) && ie(e.then) && ie(e.catch)
  , id = Object.prototype.toString
  , Xr = e => id.call(e)
  , $y = e => Xr(e).slice(8, -1)
  , ad = e => Xr(e) === "[object Object]"
  , yc = e => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , $r = hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , pi = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , My = /-(\w)/g
  , nt = pi(e => e.replace(My, (t, n) => n ? n.toUpperCase() : ""))
  , Iy = /\B([A-Z])/g
  , dt = pi(e => e.replace(Iy, "-$1").toLowerCase())
  , Yo = pi(e => e.charAt(0).toUpperCase() + e.slice(1))
  , mo = pi(e => e ? `on${Yo(e)}` : "")
  , lt = (e, t) => !Object.is(e, t)
  , Mr = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , cd = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
  , js = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Ns = e => {
    const t = Me(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Ml;
const ld = () => Ml || (Ml = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {})
  , Ly = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error"
  , By = hi(Ly);
function Qo(e) {
    if (Q(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , o = Me(r) ? Fy(r) : Qo(r);
            if (o)
                for (const s in o)
                    t[s] = o[s]
        }
        return t
    } else if (Me(e) || ke(e))
        return e
}
const jy = /;(?![^(]*\))/g
  , Ny = /:([^]+)/
  , Dy = /\/\*[^]*?\*\//g;
function Fy(e) {
    const t = {};
    return e.replace(Dy, "").split(jy).forEach(n => {
        if (n) {
            const r = n.split(Ny);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function rn(e) {
    let t = "";
    if (Me(e))
        t = e;
    else if (Q(e))
        for (let n = 0; n < e.length; n++) {
            const r = rn(e[n]);
            r && (t += r + " ")
        }
    else if (ke(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function Hy(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !Me(t) && (e.class = rn(t)),
    n && (e.style = Qo(n)),
    e
}
const Uy = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Vy = hi(Uy);
function ud(e) {
    return !!e || e === ""
}
function zy(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = In(e[r], t[r]);
    return n
}
function In(e, t) {
    if (e === t)
        return !0;
    let n = $l(e)
      , r = $l(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = Wt(e),
    r = Wt(t),
    n || r)
        return e === t;
    if (n = Q(e),
    r = Q(t),
    n || r)
        return n && r ? zy(e, t) : !1;
    if (n = ke(e),
    r = ke(t),
    n || r) {
        if (!n || !r)
            return !1;
        const o = Object.keys(e).length
          , s = Object.keys(t).length;
        if (o !== s)
            return !1;
        for (const i in e) {
            const a = e.hasOwnProperty(i)
              , c = t.hasOwnProperty(i);
            if (a && !c || !a && c || !In(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
function gi(e, t) {
    return e.findIndex(n => In(n, t))
}
const fd = e => !!(e && e.__v_isRef === !0)
  , xt = e => Me(e) ? e : e == null ? "" : Q(e) || ke(e) && (e.toString === id || !ie(e.toString)) ? fd(e) ? xt(e.value) : JSON.stringify(e, dd, 2) : String(e)
  , dd = (e, t) => fd(t) ? dd(e, t.value) : Pr(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [r,o], s) => (n[Ui(r, s) + " =>"] = o,
    n), {})
} : yr(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Ui(n))
} : Wt(t) ? Ui(t) : ke(t) && !Q(t) && !ad(t) ? String(t) : t
  , Ui = (e, t="") => {
    var n;
    return Wt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bt;
class bc {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = bt,
        !t && bt && (this.index = (bt.scopes || (bt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = bt;
            try {
                return bt = this,
                t()
            } finally {
                bt = n
            }
        }
    }
    on() {
        bt = this
    }
    off() {
        bt = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o,
                o.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function hd(e) {
    return new bc(e)
}
function pd(e, t=bt) {
    t && t.active && t.effects.push(e)
}
function mi() {
    return bt
}
function lr(e) {
    bt && bt.cleanups.push(e)
}
let er;
class qr {
    constructor(t, n, r, o) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = r,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        pd(this, o)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            Dn();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Ky(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            Fn()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = On
          , n = er;
        try {
            return On = !0,
            er = this,
            this._runnings++,
            Il(this),
            this.fn()
        } finally {
            Ll(this),
            this._runnings--,
            er = n,
            On = t
        }
    }
    stop() {
        this.active && (Il(this),
        Ll(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function Ky(e) {
    return e.value
}
function Il(e) {
    e._trackId++,
    e._depsLength = 0
}
function Ll(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            gd(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function gd(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
function qy(e, t) {
    e.effect instanceof qr && (e = e.effect.fn);
    const n = new qr(e,ht, () => {
        n.dirty && n.run()
    }
    );
    t && (Le(n, t),
    t.scope && pd(n, t.scope)),
    (!t || !t.lazy) && n.run();
    const r = n.run.bind(n);
    return r.effect = n,
    r
}
function Wy(e) {
    e.effect.stop()
}
let On = !0
  , ga = 0;
const md = [];
function Dn() {
    md.push(On),
    On = !1
}
function Fn() {
    const e = md.pop();
    On = e === void 0 ? !0 : e
}
function vc() {
    ga++
}
function _c() {
    for (ga--; !ga && ma.length; )
        ma.shift()()
}
function yd(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && gd(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const ma = [];
function bd(e, t, n) {
    vc();
    for (const r of e.keys()) {
        let o;
        r._dirtyLevel < t && (o ?? (o = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (o ?? (o = e.get(r) === r._trackId)) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && ma.push(r.scheduler)))
    }
    _c()
}
const vd = (e, t) => {
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , Ds = new WeakMap
  , tr = Symbol("")
  , ya = Symbol("");
function gt(e, t, n) {
    if (On && er) {
        let r = Ds.get(e);
        r || Ds.set(e, r = new Map);
        let o = r.get(n);
        o || r.set(n, o = vd( () => r.delete(n))),
        yd(er, o)
    }
}
function on(e, t, n, r, o, s) {
    const i = Ds.get(e);
    if (!i)
        return;
    let a = [];
    if (t === "clear")
        a = [...i.values()];
    else if (n === "length" && Q(e)) {
        const c = Number(r);
        i.forEach( (l, u) => {
            (u === "length" || !Wt(u) && u >= c) && a.push(l)
        }
        )
    } else
        switch (n !== void 0 && a.push(i.get(n)),
        t) {
        case "add":
            Q(e) ? yc(n) && a.push(i.get("length")) : (a.push(i.get(tr)),
            Pr(e) && a.push(i.get(ya)));
            break;
        case "delete":
            Q(e) || (a.push(i.get(tr)),
            Pr(e) && a.push(i.get(ya)));
            break;
        case "set":
            Pr(e) && a.push(i.get(tr));
            break
        }
    vc();
    for (const c of a)
        c && bd(c, 4);
    _c()
}
function Gy(e, t) {
    const n = Ds.get(e);
    return n && n.get(t)
}
const Jy = hi("__proto__,__v_isRef,__isVue")
  , _d = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Wt))
  , Bl = Zy();
function Zy() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = me(this);
            for (let s = 0, i = this.length; s < i; s++)
                gt(r, "get", s + "");
            const o = r[t](...n);
            return o === -1 || o === !1 ? r[t](...n.map(me)) : o
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            Dn(),
            vc();
            const r = me(this)[t].apply(this, n);
            return _c(),
            Fn(),
            r
        }
    }
    ),
    e
}
function Yy(e) {
    Wt(e) || (e = String(e));
    const t = me(this);
    return gt(t, "has", e),
    t.hasOwnProperty(e)
}
class wd {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        const o = this._isReadonly
          , s = this._isShallow;
        if (n === "__v_isReactive")
            return !o;
        if (n === "__v_isReadonly")
            return o;
        if (n === "__v_isShallow")
            return s;
        if (n === "__v_raw")
            return r === (o ? s ? xd : Td : s ? kd : Ed).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const i = Q(t);
        if (!o) {
            if (i && be(Bl, n))
                return Reflect.get(Bl, n, r);
            if (n === "hasOwnProperty")
                return Yy
        }
        const a = Reflect.get(t, n, r);
        return (Wt(n) ? _d.has(n) : Jy(n)) || (o || gt(t, "get", n),
        s) ? a : Ye(a) ? i && yc(n) ? a : a.value : ke(a) ? o ? Cc(a) : wt(a) : a
    }
}
class Cd extends wd {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, o) {
        let s = t[n];
        if (!this._isShallow) {
            const c = an(s);
            if (!ur(r) && !an(r) && (s = me(s),
            r = me(r)),
            !Q(t) && Ye(s) && !Ye(r))
                return c ? !1 : (s.value = r,
                !0)
        }
        const i = Q(t) && yc(n) ? Number(n) < t.length : be(t, n)
          , a = Reflect.set(t, n, r, o);
        return t === me(o) && (i ? lt(r, s) && on(t, "set", n, r) : on(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = be(t, n);
        t[n];
        const o = Reflect.deleteProperty(t, n);
        return o && r && on(t, "delete", n, void 0),
        o
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Wt(n) || !_d.has(n)) && gt(t, "has", n),
        r
    }
    ownKeys(t) {
        return gt(t, "iterate", Q(t) ? "length" : tr),
        Reflect.ownKeys(t)
    }
}
class Sd extends wd {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Qy = new Cd
  , Xy = new Sd
  , e0 = new Cd(!0)
  , t0 = new Sd(!0)
  , wc = e => e
  , yi = e => Reflect.getPrototypeOf(e);
function fs(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const o = me(e)
      , s = me(t);
    n || (lt(t, s) && gt(o, "get", t),
    gt(o, "get", s));
    const {has: i} = yi(o)
      , a = r ? wc : n ? Ec : To;
    if (i.call(o, t))
        return a(e.get(t));
    if (i.call(o, s))
        return a(e.get(s));
    e !== o && e.get(t)
}
function ds(e, t=!1) {
    const n = this.__v_raw
      , r = me(n)
      , o = me(e);
    return t || (lt(e, o) && gt(r, "has", e),
    gt(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
}
function hs(e, t=!1) {
    return e = e.__v_raw,
    !t && gt(me(e), "iterate", tr),
    Reflect.get(e, "size", e)
}
function jl(e, t=!1) {
    !t && !ur(e) && !an(e) && (e = me(e));
    const n = me(this);
    return yi(n).has.call(n, e) || (n.add(e),
    on(n, "add", e, e)),
    this
}
function Nl(e, t, n=!1) {
    !n && !ur(t) && !an(t) && (t = me(t));
    const r = me(this)
      , {has: o, get: s} = yi(r);
    let i = o.call(r, e);
    i || (e = me(e),
    i = o.call(r, e));
    const a = s.call(r, e);
    return r.set(e, t),
    i ? lt(t, a) && on(r, "set", e, t) : on(r, "add", e, t),
    this
}
function Dl(e) {
    const t = me(this)
      , {has: n, get: r} = yi(t);
    let o = n.call(t, e);
    o || (e = me(e),
    o = n.call(t, e)),
    r && r.call(t, e);
    const s = t.delete(e);
    return o && on(t, "delete", e, void 0),
    s
}
function Fl() {
    const e = me(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && on(e, "clear", void 0, void 0),
    n
}
function ps(e, t) {
    return function(r, o) {
        const s = this
          , i = s.__v_raw
          , a = me(i)
          , c = t ? wc : e ? Ec : To;
        return !e && gt(a, "iterate", tr),
        i.forEach( (l, u) => r.call(o, c(l), c(u), s))
    }
}
function gs(e, t, n) {
    return function(...r) {
        const o = this.__v_raw
          , s = me(o)
          , i = Pr(s)
          , a = e === "entries" || e === Symbol.iterator && i
          , c = e === "keys" && i
          , l = o[e](...r)
          , u = n ? wc : t ? Ec : To;
        return !t && gt(s, "iterate", c ? ya : tr),
        {
            next() {
                const {value: f, done: d} = l.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [u(f[0]), u(f[1])] : u(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function fn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function n0() {
    const e = {
        get(s) {
            return fs(this, s)
        },
        get size() {
            return hs(this)
        },
        has: ds,
        add: jl,
        set: Nl,
        delete: Dl,
        clear: Fl,
        forEach: ps(!1, !1)
    }
      , t = {
        get(s) {
            return fs(this, s, !1, !0)
        },
        get size() {
            return hs(this)
        },
        has: ds,
        add(s) {
            return jl.call(this, s, !0)
        },
        set(s, i) {
            return Nl.call(this, s, i, !0)
        },
        delete: Dl,
        clear: Fl,
        forEach: ps(!1, !0)
    }
      , n = {
        get(s) {
            return fs(this, s, !0)
        },
        get size() {
            return hs(this, !0)
        },
        has(s) {
            return ds.call(this, s, !0)
        },
        add: fn("add"),
        set: fn("set"),
        delete: fn("delete"),
        clear: fn("clear"),
        forEach: ps(!0, !1)
    }
      , r = {
        get(s) {
            return fs(this, s, !0, !0)
        },
        get size() {
            return hs(this, !0)
        },
        has(s) {
            return ds.call(this, s, !0)
        },
        add: fn("add"),
        set: fn("set"),
        delete: fn("delete"),
        clear: fn("clear"),
        forEach: ps(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        e[s] = gs(s, !1, !1),
        n[s] = gs(s, !0, !1),
        t[s] = gs(s, !1, !0),
        r[s] = gs(s, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [r0,o0,s0,i0] = n0();
function bi(e, t) {
    const n = t ? e ? i0 : s0 : e ? o0 : r0;
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(be(n, o) && o in r ? n : r, o, s)
}
const a0 = {
    get: bi(!1, !1)
}
  , c0 = {
    get: bi(!1, !0)
}
  , l0 = {
    get: bi(!0, !1)
}
  , u0 = {
    get: bi(!0, !0)
}
  , Ed = new WeakMap
  , kd = new WeakMap
  , Td = new WeakMap
  , xd = new WeakMap;
function f0(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function d0(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : f0($y(e))
}
function wt(e) {
    return an(e) ? e : vi(e, !1, Qy, a0, Ed)
}
function qt(e) {
    return vi(e, !1, e0, c0, kd)
}
function Cc(e) {
    return vi(e, !0, Xy, l0, Td)
}
function h0(e) {
    return vi(e, !0, t0, u0, xd)
}
function vi(e, t, n, r, o) {
    if (!ke(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const s = o.get(e);
    if (s)
        return s;
    const i = d0(e);
    if (i === 0)
        return e;
    const a = new Proxy(e,i === 2 ? r : n);
    return o.set(e, a),
    a
}
function nr(e) {
    return an(e) ? nr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function an(e) {
    return !!(e && e.__v_isReadonly)
}
function ur(e) {
    return !!(e && e.__v_isShallow)
}
function Sc(e) {
    return e ? !!e.__v_raw : !1
}
function me(e) {
    const t = e && e.__v_raw;
    return t ? me(t) : e
}
function Ad(e) {
    return Object.isExtensible(e) && cd(e, "__v_skip", !0),
    e
}
const To = e => ke(e) ? wt(e) : e
  , Ec = e => ke(e) ? Cc(e) : e;
class Rd {
    constructor(t, n, r, o) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new qr( () => t(this._value), () => Ir(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !o,
        this.__v_isReadonly = r
    }
    get value() {
        const t = me(this);
        return (!t._cacheable || t.effect.dirty) && lt(t._value, t._value = t.effect.run()) && Ir(t, 4),
        kc(t),
        t.effect._dirtyLevel >= 2 && Ir(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function p0(e, t, n=!1) {
    let r, o;
    const s = ie(e);
    return s ? (r = e,
    o = ht) : (r = e.get,
    o = e.set),
    new Rd(r,o,s || !o,n)
}
function kc(e) {
    var t;
    On && er && (e = me(e),
    yd(er, (t = e.dep) != null ? t : e.dep = vd( () => e.dep = void 0, e instanceof Rd ? e : void 0)))
}
function Ir(e, t=4, n, r) {
    e = me(e);
    const o = e.dep;
    o && bd(o, t)
}
function Ye(e) {
    return !!(e && e.__v_isRef === !0)
}
function $e(e) {
    return Od(e, !1)
}
function fr(e) {
    return Od(e, !0)
}
function Od(e, t) {
    return Ye(e) ? e : new g0(e,t)
}
class g0 {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : me(t),
        this._value = n ? t : To(t)
    }
    get value() {
        return kc(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || ur(t) || an(t);
        t = n ? t : me(t),
        lt(t, this._rawValue) && (this._rawValue,
        this._rawValue = t,
        this._value = n ? t : To(t),
        Ir(this, 4))
    }
}
function m0(e) {
    Ir(e, 4)
}
function ce(e) {
    return Ye(e) ? e.value : e
}
function _n(e) {
    return ie(e) ? e() : ce(e)
}
const y0 = {
    get: (e, t, n) => ce(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const o = e[t];
        return Ye(o) && !Ye(n) ? (o.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Tc(e) {
    return nr(e) ? e : new Proxy(e,y0)
}
class b0 {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t( () => kc(this), () => Ir(this));
        this._get = n,
        this._set = r
    }
    get value() {
        return this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function Pd(e) {
    return new b0(e)
}
function v0(e) {
    const t = Q(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = $d(e, n);
    return t
}
class _0 {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Gy(me(this._object), this._key)
    }
}
class w0 {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function _i(e, t, n) {
    return Ye(e) ? e : ie(e) ? new w0(e) : ke(e) && arguments.length > 1 ? $d(e, t, n) : $e(e)
}
function $d(e, t, n) {
    const r = e[t];
    return Ye(r) ? r : new _0(e,t,n)
}
const C0 = {
    GET: "get",
    HAS: "has",
    ITERATE: "iterate"
}
  , S0 = {
    SET: "set",
    ADD: "add",
    DELETE: "delete",
    CLEAR: "clear"
};
/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function E0(e, t) {}
const k0 = {
    SETUP_FUNCTION: 0,
    0: "SETUP_FUNCTION",
    RENDER_FUNCTION: 1,
    1: "RENDER_FUNCTION",
    WATCH_GETTER: 2,
    2: "WATCH_GETTER",
    WATCH_CALLBACK: 3,
    3: "WATCH_CALLBACK",
    WATCH_CLEANUP: 4,
    4: "WATCH_CLEANUP",
    NATIVE_EVENT_HANDLER: 5,
    5: "NATIVE_EVENT_HANDLER",
    COMPONENT_EVENT_HANDLER: 6,
    6: "COMPONENT_EVENT_HANDLER",
    VNODE_HOOK: 7,
    7: "VNODE_HOOK",
    DIRECTIVE_HOOK: 8,
    8: "DIRECTIVE_HOOK",
    TRANSITION_HOOK: 9,
    9: "TRANSITION_HOOK",
    APP_ERROR_HANDLER: 10,
    10: "APP_ERROR_HANDLER",
    APP_WARN_HANDLER: 11,
    11: "APP_WARN_HANDLER",
    FUNCTION_REF: 12,
    12: "FUNCTION_REF",
    ASYNC_COMPONENT_LOADER: 13,
    13: "ASYNC_COMPONENT_LOADER",
    SCHEDULER: 14,
    14: "SCHEDULER",
    COMPONENT_UPDATE: 15,
    15: "COMPONENT_UPDATE"
}
  , T0 = {
    sp: "serverPrefetch hook",
    bc: "beforeCreate hook",
    c: "created hook",
    bm: "beforeMount hook",
    m: "mounted hook",
    bu: "beforeUpdate hook",
    u: "updated",
    bum: "beforeUnmount hook",
    um: "unmounted hook",
    a: "activated hook",
    da: "deactivated hook",
    ec: "errorCaptured hook",
    rtc: "renderTracked hook",
    rtg: "renderTriggered hook",
    0: "setup function",
    1: "render function",
    2: "watcher getter",
    3: "watcher callback",
    4: "watcher cleanup function",
    5: "native event handler",
    6: "component event handler",
    7: "vnode hook",
    8: "directive hook",
    9: "transition hook",
    10: "app errorHandler",
    11: "app warnHandler",
    12: "ref function",
    13: "async component loader",
    14: "scheduler flush",
    15: "component update"
};
function sn(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (o) {
        br(o, t, n)
    }
}
function _t(e, t, n, r) {
    if (ie(e)) {
        const o = sn(e, t, n, r);
        return o && mc(o) && o.catch(s => {
            br(s, t, n)
        }
        ),
        o
    }
    if (Q(e)) {
        const o = [];
        for (let s = 0; s < e.length; s++)
            o.push(_t(e[s], t, n, r));
        return o
    }
}
function br(e, t, n, r=!0) {
    const o = t ? t.vnode : null;
    if (t) {
        let s = t.parent;
        const i = t.proxy
          , a = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; s; ) {
            const l = s.ec;
            if (l) {
                for (let u = 0; u < l.length; u++)
                    if (l[u](e, i, a) === !1)
                        return
            }
            s = s.parent
        }
        const c = t.appContext.config.errorHandler;
        if (c) {
            Dn(),
            sn(c, null, 10, [e, i, a]),
            Fn();
            return
        }
    }
    x0(e, n, o, r)
}
function x0(e, t, n, r=!0) {
    console.error(e)
}
let xo = !1
  , ba = !1;
const et = [];
let Kt = 0;
const Lr = [];
let pn = null
  , Gn = 0;
const Md = Promise.resolve();
let xc = null;
function Hn(e) {
    const t = xc || Md;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function A0(e) {
    let t = Kt + 1
      , n = et.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , o = et[r]
          , s = Ao(o);
        s < e || s === e && o.pre ? t = r + 1 : n = r
    }
    return t
}
function wi(e) {
    (!et.length || !et.includes(e, xo && e.allowRecurse ? Kt + 1 : Kt)) && (e.id == null ? et.push(e) : et.splice(A0(e.id), 0, e),
    Id())
}
function Id() {
    !xo && !ba && (ba = !0,
    xc = Md.then(Ld))
}
function R0(e) {
    const t = et.indexOf(e);
    t > Kt && et.splice(t, 1)
}
function Fs(e) {
    Q(e) ? Lr.push(...e) : (!pn || !pn.includes(e, e.allowRecurse ? Gn + 1 : Gn)) && Lr.push(e),
    Id()
}
function Hl(e, t, n=xo ? Kt + 1 : 0) {
    for (; n < et.length; n++) {
        const r = et[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid)
                continue;
            et.splice(n, 1),
            n--,
            r()
        }
    }
}
function Hs(e) {
    if (Lr.length) {
        const t = [...new Set(Lr)].sort( (n, r) => Ao(n) - Ao(r));
        if (Lr.length = 0,
        pn) {
            pn.push(...t);
            return
        }
        for (pn = t,
        Gn = 0; Gn < pn.length; Gn++) {
            const n = pn[Gn];
            n.active !== !1 && n()
        }
        pn = null,
        Gn = 0
    }
}
const Ao = e => e.id == null ? 1 / 0 : e.id
  , O0 = (e, t) => {
    const n = Ao(e) - Ao(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Ld(e) {
    ba = !1,
    xo = !0,
    et.sort(O0);
    try {
        for (Kt = 0; Kt < et.length; Kt++) {
            const t = et[Kt];
            t && t.active !== !1 && sn(t, t.i, t.i ? 15 : 14)
        }
    } finally {
        Kt = 0,
        et.length = 0,
        Hs(),
        xo = !1,
        xc = null,
        (et.length || Lr.length) && Ld()
    }
}
let Er, ms = [];
function Bd(e, t) {
    var n, r;
    Er = e,
    Er ? (Er.enabled = !0,
    ms.forEach( ({event: o, args: s}) => Er.emit(o, ...s)),
    ms = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(s => {
        Bd(s, t)
    }
    ),
    setTimeout( () => {
        Er || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null,
        ms = [])
    }
    , 3e3)) : ms = []
}
let We = null
  , Ci = null;
function Ro(e) {
    const t = We;
    return We = e,
    Ci = e && e.type.__scopeId || null,
    t
}
function jd(e) {
    Ci = e
}
function Nd() {
    Ci = null
}
const P0 = e => Ln;
function Ln(e, t=We, n) {
    if (!t || e._n)
        return e;
    const r = (...o) => {
        r._d && Aa(-1);
        const s = Ro(t);
        let i;
        try {
            i = e(...o)
        } finally {
            Ro(s),
            r._d && Aa(1)
        }
        return i
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function $0(e, t) {
    if (We === null)
        return e;
    const n = rs(We)
      , r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let[s,i,a,c=ve] = t[o];
        s && (ie(s) && (s = {
            mounted: s,
            updated: s
        }),
        s.deep && wn(i),
        r.push({
            dir: s,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: a,
            modifiers: c
        }))
    }
    return e
}
function Vt(e, t, n, r) {
    const o = e.dirs
      , s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
        const a = o[i];
        s && (a.oldValue = s[i].value);
        let c = a.dir[r];
        c && (Dn(),
        _t(c, n, 8, [e.el, a, e, t]),
        Fn())
    }
}
const gn = Symbol("_leaveCb")
  , ys = Symbol("_enterCb");
function Ac() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Un( () => {
        e.isMounted = !0
    }
    ),
    vr( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const St = [Function, Array]
  , Rc = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: St,
    onEnter: St,
    onAfterEnter: St,
    onEnterCancelled: St,
    onBeforeLeave: St,
    onLeave: St,
    onAfterLeave: St,
    onLeaveCancelled: St,
    onBeforeAppear: St,
    onAppear: St,
    onAfterAppear: St,
    onAppearCancelled: St
}
  , Dd = e => {
    const t = e.subTree;
    return t.component ? Dd(t.component) : t
}
  , M0 = {
    name: "BaseTransition",
    props: Rc,
    setup(e, {slots: t}) {
        const n = mt()
          , r = Ac();
        return () => {
            const o = t.default && Si(t.default(), !0);
            if (!o || !o.length)
                return;
            let s = o[0];
            if (o.length > 1) {
                for (const d of o)
                    if (d.type !== ze) {
                        s = d;
                        break
                    }
            }
            const i = me(e)
              , {mode: a} = i;
            if (r.isLeaving)
                return Vi(s);
            const c = Ul(s);
            if (!c)
                return Vi(s);
            let l = Wr(c, i, r, n, d => l = d);
            Bn(c, l);
            const u = n.subTree
              , f = u && Ul(u);
            if (f && f.type !== ze && !It(c, f) && Dd(n).type !== ze) {
                const d = Wr(f, i, r, n);
                if (Bn(f, d),
                a === "out-in" && c.type !== ze)
                    return r.isLeaving = !0,
                    d.afterLeave = () => {
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Vi(s);
                a === "in-out" && c.type !== ze && (d.delayLeave = (h, m, p) => {
                    const S = Hd(r, f);
                    S[String(f.key)] = f,
                    h[gn] = () => {
                        m(),
                        h[gn] = void 0,
                        delete l.delayedLeave
                    }
                    ,
                    l.delayedLeave = p
                }
                )
            }
            return s
        }
    }
}
  , Fd = M0;
function Hd(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function Wr(e, t, n, r, o) {
    const {appear: s, mode: i, persisted: a=!1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: f, onBeforeLeave: d, onLeave: h, onAfterLeave: m, onLeaveCancelled: p, onBeforeAppear: S, onAppear: k, onAfterAppear: y, onAppearCancelled: g} = t
      , w = String(e.key)
      , T = Hd(n, e)
      , A = (I, C) => {
        I && _t(I, r, 9, C)
    }
      , $ = (I, C) => {
        const v = C[1];
        A(I, C),
        Q(I) ? I.every(_ => _.length <= 1) && v() : I.length <= 1 && v()
    }
      , N = {
        mode: i,
        persisted: a,
        beforeEnter(I) {
            let C = c;
            if (!n.isMounted)
                if (s)
                    C = S || c;
                else
                    return;
            I[gn] && I[gn](!0);
            const v = T[w];
            v && It(e, v) && v.el[gn] && v.el[gn](),
            A(C, [I])
        },
        enter(I) {
            let C = l
              , v = u
              , _ = f;
            if (!n.isMounted)
                if (s)
                    C = k || l,
                    v = y || u,
                    _ = g || f;
                else
                    return;
            let x = !1;
            const O = I[ys] = L => {
                x || (x = !0,
                L ? A(_, [I]) : A(v, [I]),
                N.delayedLeave && N.delayedLeave(),
                I[ys] = void 0)
            }
            ;
            C ? $(C, [I, O]) : O()
        },
        leave(I, C) {
            const v = String(e.key);
            if (I[ys] && I[ys](!0),
            n.isUnmounting)
                return C();
            A(d, [I]);
            let _ = !1;
            const x = I[gn] = O => {
                _ || (_ = !0,
                C(),
                O ? A(p, [I]) : A(m, [I]),
                I[gn] = void 0,
                T[v] === e && delete T[v])
            }
            ;
            T[v] = e,
            h ? $(h, [I, x]) : x()
        },
        clone(I) {
            const C = Wr(I, t, n, r, o);
            return o && o(C),
            C
        }
    };
    return N
}
function Vi(e) {
    if (Xo(e))
        return e = Gt(e),
        e.children = null,
        e
}
function Ul(e) {
    if (!Xo(e))
        return e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && ie(n.default))
            return n.default()
    }
}
function Bn(e, t) {
    e.shapeFlag & 6 && e.component ? Bn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Si(e, t=!1, n) {
    let r = []
      , o = 0;
    for (let s = 0; s < e.length; s++) {
        let i = e[s];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
        i.type === He ? (i.patchFlag & 128 && o++,
        r = r.concat(Si(i.children, t, a))) : (t || i.type !== ze) && r.push(a != null ? Gt(i, {
            key: a
        }) : i)
    }
    if (o > 1)
        for (let s = 0; s < r.length; s++)
            r[s].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function Ct(e, t) {
    return ie(e) ? Le({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const rr = e => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
function Ee(e) {
    ie(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: n, errorComponent: r, delay: o=200, timeout: s, suspensible: i=!0, onError: a} = e;
    let c = null, l, u = 0;
    const f = () => (u++,
    c = null,
    d())
      , d = () => {
        let h;
        return c || (h = c = t().catch(m => {
            if (m = m instanceof Error ? m : new Error(String(m)),
            a)
                return new Promise( (p, S) => {
                    a(m, () => p(f()), () => S(m), u + 1)
                }
                );
            throw m
        }
        ).then(m => h !== c && c ? c : (m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default),
        l = m,
        m)))
    }
    ;
    return Ct({
        name: "AsyncComponentWrapper",
        __asyncLoader: d,
        get __asyncResolved() {
            return l
        },
        setup() {
            const h = qe;
            if (l)
                return () => zi(l, h);
            const m = y => {
                c = null,
                br(y, h, 13, !r)
            }
            ;
            if (i && h.suspense || ns)
                return d().then(y => () => zi(y, h)).catch(y => (m(y),
                () => r ? fe(r, {
                    error: y
                }) : null));
            const p = $e(!1)
              , S = $e()
              , k = $e(!!o);
            return o && setTimeout( () => {
                k.value = !1
            }
            , o),
            s != null && setTimeout( () => {
                if (!p.value && !S.value) {
                    const y = new Error(`Async component timed out after ${s}ms.`);
                    m(y),
                    S.value = y
                }
            }
            , s),
            d().then( () => {
                p.value = !0,
                h.parent && Xo(h.parent.vnode) && (h.parent.effect.dirty = !0,
                wi(h.parent.update))
            }
            ).catch(y => {
                m(y),
                S.value = y
            }
            ),
            () => {
                if (p.value && l)
                    return zi(l, h);
                if (S.value && r)
                    return fe(r, {
                        error: S.value
                    });
                if (n && !k.value)
                    return fe(n)
            }
        }
    })
}
function zi(e, t) {
    const {ref: n, props: r, children: o, ce: s} = t.vnode
      , i = fe(e, r, o);
    return i.ref = n,
    i.ce = s,
    delete t.vnode.ce,
    i
}
const Xo = e => e.type.__isKeepAlive
  , I0 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = mt()
          , r = n.ctx;
        if (!r.renderer)
            return () => {
                const y = t.default && t.default();
                return y && y.length === 1 ? y[0] : y
            }
            ;
        const o = new Map
          , s = new Set;
        let i = null;
        const a = n.suspense
          , {renderer: {p: c, m: l, um: u, o: {createElement: f}}} = r
          , d = f("div");
        r.activate = (y, g, w, T, A) => {
            const $ = y.component;
            l(y, g, w, 0, a),
            c($.vnode, y, g, w, $, a, T, y.slotScopeIds, A),
            Ze( () => {
                $.isDeactivated = !1,
                $.a && Mr($.a);
                const N = y.props && y.props.onVnodeMounted;
                N && ut(N, $.parent, y)
            }
            , a)
        }
        ,
        r.deactivate = y => {
            const g = y.component;
            zs(g.m),
            zs(g.a),
            l(y, d, null, 1, a),
            Ze( () => {
                g.da && Mr(g.da);
                const w = y.props && y.props.onVnodeUnmounted;
                w && ut(w, g.parent, y),
                g.isDeactivated = !0
            }
            , a)
        }
        ;
        function h(y) {
            Ki(y),
            u(y, n, a, !0)
        }
        function m(y) {
            o.forEach( (g, w) => {
                const T = Ma(g.type);
                T && (!y || !y(T)) && p(w)
            }
            )
        }
        function p(y) {
            const g = o.get(y);
            g && (!i || !It(g, i)) ? h(g) : i && Ki(i),
            o.delete(y),
            s.delete(y)
        }
        Lt( () => [e.include, e.exclude], ([y,g]) => {
            y && m(w => co(y, w)),
            g && m(w => !co(g, w))
        }
        , {
            flush: "post",
            deep: !0
        });
        let S = null;
        const k = () => {
            S != null && (Ta(n.subTree.type) ? Ze( () => {
                o.set(S, bs(n.subTree))
            }
            , n.subTree.suspense) : o.set(S, bs(n.subTree)))
        }
        ;
        return Un(k),
        Ai(k),
        vr( () => {
            o.forEach(y => {
                const {subTree: g, suspense: w} = n
                  , T = bs(g);
                if (y.type === T.type && y.key === T.key) {
                    Ki(T);
                    const A = T.component.da;
                    A && Ze(A, w);
                    return
                }
                h(y)
            }
            )
        }
        ),
        () => {
            if (S = null,
            !t.default)
                return null;
            const y = t.default()
              , g = y[0];
            if (y.length > 1)
                return i = null,
                y;
            if (!jn(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
                return i = null,
                g;
            let w = bs(g);
            if (w.type === ze)
                return i = null,
                w;
            const T = w.type
              , A = Ma(rr(w) ? w.type.__asyncResolved || {} : T)
              , {include: $, exclude: N, max: I} = e;
            if ($ && (!A || !co($, A)) || N && A && co(N, A))
                return i = w,
                g;
            const C = w.key == null ? T : w.key
              , v = o.get(C);
            return w.el && (w = Gt(w),
            g.shapeFlag & 128 && (g.ssContent = w)),
            S = C,
            v ? (w.el = v.el,
            w.component = v.component,
            w.transition && Bn(w, w.transition),
            w.shapeFlag |= 512,
            s.delete(C),
            s.add(C)) : (s.add(C),
            I && s.size > parseInt(I, 10) && p(s.values().next().value)),
            w.shapeFlag |= 256,
            i = w,
            Ta(g.type) ? g : w
        }
    }
}
  , Ud = I0;
function co(e, t) {
    return Q(e) ? e.some(n => co(n, t)) : Me(e) ? e.split(",").includes(t) : Py(e) ? e.test(t) : !1
}
function Ei(e, t) {
    Vd(e, "a", t)
}
function ki(e, t) {
    Vd(e, "da", t)
}
function Vd(e, t, n=qe) {
    const r = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent
        }
        return e()
    }
    );
    if (Ti(t, r, n),
    n) {
        let o = n.parent;
        for (; o && o.parent; )
            Xo(o.parent.vnode) && L0(r, t, n, o),
            o = o.parent
    }
}
function L0(e, t, n, r) {
    const o = Ti(t, e, r, !0);
    es( () => {
        gc(r[t], o)
    }
    , n)
}
function Ki(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function bs(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function Ti(e, t, n=qe, r=!1) {
    if (n) {
        const o = n[e] || (n[e] = [])
          , s = t.__weh || (t.__weh = (...i) => {
            Dn();
            const a = hr(n)
              , c = _t(t, n, e, i);
            return a(),
            Fn(),
            c
        }
        );
        return r ? o.unshift(s) : o.push(s),
        s
    }
}
const ln = e => (t, n=qe) => {
    (!ns || e === "sp") && Ti(e, (...r) => t(...r), n)
}
  , xi = ln("bm")
  , Un = ln("m")
  , zd = ln("bu")
  , Ai = ln("u")
  , vr = ln("bum")
  , es = ln("um")
  , Kd = ln("sp")
  , qd = ln("rtg")
  , Wd = ln("rtc");
function Oc(e, t=qe) {
    Ti("ec", e, t)
}
const Pc = "components"
  , B0 = "directives";
function $c(e, t) {
    return Mc(Pc, e, !0, t) || e
}
const Gd = Symbol.for("v-ndc");
function Ri(e) {
    return Me(e) ? Mc(Pc, e, !1) || e : e || Gd
}
function j0(e) {
    return Mc(B0, e)
}
function Mc(e, t, n=!0, r=!1) {
    const o = We || qe;
    if (o) {
        const s = o.type;
        if (e === Pc) {
            const a = Ma(s, !1);
            if (a && (a === t || a === nt(t) || a === Yo(nt(t))))
                return s
        }
        const i = Vl(o[e] || s[e], t) || Vl(o.appContext[e], t);
        return !i && r ? s : i
    }
}
function Vl(e, t) {
    return e && (e[t] || e[nt(t)] || e[Yo(nt(t))])
}
function va(e, t, n, r) {
    let o;
    const s = n && n[r];
    if (Q(e) || Me(e)) {
        o = new Array(e.length);
        for (let i = 0, a = e.length; i < a; i++)
            o[i] = t(e[i], i, void 0, s && s[i])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let i = 0; i < e; i++)
            o[i] = t(i + 1, i, void 0, s && s[i])
    } else if (ke(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (i, a) => t(i, a, void 0, s && s[a]));
        else {
            const i = Object.keys(e);
            o = new Array(i.length);
            for (let a = 0, c = i.length; a < c; a++) {
                const l = i[a];
                o[a] = t(e[l], l, a, s && s[a])
            }
        }
    else
        o = [];
    return n && (n[r] = o),
    o
}
function N0(e, t) {
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (Q(r))
            for (let o = 0; o < r.length; o++)
                e[r[o].name] = r[o].fn;
        else
            r && (e[r.name] = r.key ? (...o) => {
                const s = r.fn(...o);
                return s && (s.key = r.key),
                s
            }
            : r.fn)
    }
    return e
}
function D0(e, t, n={}, r, o) {
    if (We.isCE || We.parent && rr(We.parent) && We.parent.isCE)
        return t !== "default" && (n.name = t),
        fe("slot", n, r && r());
    let s = e[t];
    s && s._c && (s._d = !1),
    G();
    const i = s && Ic(s(n))
      , a = Ke(He, {
        key: (n.key || i && i.key || `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    a
}
function Ic(e) {
    return e.some(t => jn(t) ? !(t.type === ze || t.type === He && !Ic(t.children)) : !0) ? e : null
}
function F0(e, t) {
    const n = {};
    for (const r in e)
        n[t && /[A-Z]/.test(r) ? `on:${r}` : mo(r)] = e[r];
    return n
}
const _a = e => e ? Oh(e) ? rs(e) : _a(e.parent) : null
  , yo = Le(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => _a(e.parent),
    $root: e => _a(e.root),
    $emit: e => e.emit,
    $options: e => Lc(e),
    $forceUpdate: e => e.f || (e.f = () => {
        e.effect.dirty = !0,
        wi(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = Hn.bind(e.proxy)),
    $watch: e => C1.bind(e)
})
  , qi = (e, t) => e !== ve && !e.__isScriptSetup && be(e, t)
  , wa = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: c} = e;
        let l;
        if (t[0] !== "$") {
            const h = i[t];
            if (h !== void 0)
                switch (h) {
                case 1:
                    return r[t];
                case 2:
                    return o[t];
                case 4:
                    return n[t];
                case 3:
                    return s[t]
                }
            else {
                if (qi(r, t))
                    return i[t] = 1,
                    r[t];
                if (o !== ve && be(o, t))
                    return i[t] = 2,
                    o[t];
                if ((l = e.propsOptions[0]) && be(l, t))
                    return i[t] = 3,
                    s[t];
                if (n !== ve && be(n, t))
                    return i[t] = 4,
                    n[t];
                Ca && (i[t] = 0)
            }
        }
        const u = yo[t];
        let f, d;
        if (u)
            return t === "$attrs" && gt(e.attrs, "get", ""),
            u(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== ve && be(n, t))
            return i[t] = 4,
            n[t];
        if (d = c.config.globalProperties,
        be(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: o, ctx: s} = e;
        return qi(o, t) ? (o[t] = n,
        !0) : r !== ve && be(r, t) ? (r[t] = n,
        !0) : be(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (s[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s}}, i) {
        let a;
        return !!n[i] || e !== ve && be(e, i) || qi(t, i) || (a = s[0]) && be(a, i) || be(r, i) || be(yo, i) || be(o.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : be(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
}
  , H0 = Le({}, wa, {
    get(e, t) {
        if (t !== Symbol.unscopables)
            return wa.get(e, t, e)
    },
    has(e, t) {
        return t[0] !== "_" && !By(t)
    }
});
function U0() {
    return null
}
function V0() {
    return null
}
function z0(e) {}
function K0(e) {}
function q0() {
    return null
}
function W0() {}
function G0(e, t) {
    return null
}
function J0() {
    return Jd().slots
}
function Z0() {
    return Jd().attrs
}
function Jd() {
    const e = mt();
    return e.setupContext || (e.setupContext = Mh(e))
}
function Oo(e) {
    return Q(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
function Y0(e, t) {
    const n = Oo(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let o = n[r];
        o ? Q(o) || ie(o) ? o = n[r] = {
            type: o,
            default: t[r]
        } : o.default = t[r] : o === null && (o = n[r] = {
            default: t[r]
        }),
        o && t[`__skip_${r}`] && (o.skipFactory = !0)
    }
    return n
}
function Q0(e, t) {
    return !e || !t ? e || t : Q(e) && Q(t) ? e.concat(t) : Le({}, Oo(e), Oo(t))
}
function X0(e, t) {
    const n = {};
    for (const r in e)
        t.includes(r) || Object.defineProperty(n, r, {
            enumerable: !0,
            get: () => e[r]
        });
    return n
}
function e1(e) {
    const t = mt();
    let n = e();
    return Oa(),
    mc(n) && (n = n.catch(r => {
        throw hr(t),
        r
    }
    )),
    [n, () => hr(t)]
}
let Ca = !0;
function t1(e) {
    const t = Lc(e)
      , n = e.proxy
      , r = e.ctx;
    Ca = !1,
    t.beforeCreate && zl(t.beforeCreate, e, "bc");
    const {data: o, computed: s, methods: i, watch: a, provide: c, inject: l, created: u, beforeMount: f, mounted: d, beforeUpdate: h, updated: m, activated: p, deactivated: S, beforeDestroy: k, beforeUnmount: y, destroyed: g, unmounted: w, render: T, renderTracked: A, renderTriggered: $, errorCaptured: N, serverPrefetch: I, expose: C, inheritAttrs: v, components: _, directives: x, filters: O} = t;
    if (l && n1(l, r, null),
    i)
        for (const H in i) {
            const F = i[H];
            ie(F) && (r[H] = F.bind(n))
        }
    if (o) {
        const H = o.call(n, n);
        ke(H) && (e.data = wt(H))
    }
    if (Ca = !0,
    s)
        for (const H in s) {
            const F = s[H]
              , oe = ie(F) ? F.bind(n, n) : ie(F.get) ? F.get.bind(n, n) : ht
              , he = !ie(F) && ie(F.set) ? F.set.bind(n) : ht
              , ae = vt({
                get: oe,
                set: he
            });
            Object.defineProperty(r, H, {
                enumerable: !0,
                configurable: !0,
                get: () => ae.value,
                set: de => ae.value = de
            })
        }
    if (a)
        for (const H in a)
            Zd(a[H], r, n, H);
    if (c) {
        const H = ie(c) ? c.call(n) : c;
        Reflect.ownKeys(H).forEach(F => {
            sr(F, H[F])
        }
        )
    }
    u && zl(u, e, "c");
    function P(H, F) {
        Q(F) ? F.forEach(oe => H(oe.bind(n))) : F && H(F.bind(n))
    }
    if (P(xi, f),
    P(Un, d),
    P(zd, h),
    P(Ai, m),
    P(Ei, p),
    P(ki, S),
    P(Oc, N),
    P(Wd, A),
    P(qd, $),
    P(vr, y),
    P(es, w),
    P(Kd, I),
    Q(C))
        if (C.length) {
            const H = e.exposed || (e.exposed = {});
            C.forEach(F => {
                Object.defineProperty(H, F, {
                    get: () => n[F],
                    set: oe => n[F] = oe
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    T && e.render === ht && (e.render = T),
    v != null && (e.inheritAttrs = v),
    _ && (e.components = _),
    x && (e.directives = x)
}
function n1(e, t, n=ht) {
    Q(e) && (e = Sa(e));
    for (const r in e) {
        const o = e[r];
        let s;
        ke(o) ? "default"in o ? s = rt(o.from || r, o.default, !0) : s = rt(o.from || r) : s = rt(o),
        Ye(s) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: i => s.value = i
        }) : t[r] = s
    }
}
function zl(e, t, n) {
    _t(Q(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Zd(e, t, n, r) {
    const o = r.includes(".") ? vh(n, r) : () => n[r];
    if (Me(e)) {
        const s = t[e];
        ie(s) && Lt(o, s)
    } else if (ie(e))
        Lt(o, e.bind(n));
    else if (ke(e))
        if (Q(e))
            e.forEach(s => Zd(s, t, n, r));
        else {
            const s = ie(e.handler) ? e.handler.bind(n) : t[e.handler];
            ie(s) && Lt(o, s, e)
        }
}
function Lc(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: o, optionsCache: s, config: {optionMergeStrategies: i}} = e.appContext
      , a = s.get(t);
    let c;
    return a ? c = a : !o.length && !n && !r ? c = t : (c = {},
    o.length && o.forEach(l => Us(c, l, i, !0)),
    Us(c, t, i)),
    ke(t) && s.set(t, c),
    c
}
function Us(e, t, n, r=!1) {
    const {mixins: o, extends: s} = t;
    s && Us(e, s, n, !0),
    o && o.forEach(i => Us(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const a = r1[i] || n && n[i];
            e[i] = a ? a(e[i], t[i]) : t[i]
        }
    return e
}
const r1 = {
    data: Kl,
    props: ql,
    emits: ql,
    methods: lo,
    computed: lo,
    beforeCreate: at,
    created: at,
    beforeMount: at,
    mounted: at,
    beforeUpdate: at,
    updated: at,
    beforeDestroy: at,
    beforeUnmount: at,
    destroyed: at,
    unmounted: at,
    activated: at,
    deactivated: at,
    errorCaptured: at,
    serverPrefetch: at,
    components: lo,
    directives: lo,
    watch: s1,
    provide: Kl,
    inject: o1
};
function Kl(e, t) {
    return t ? e ? function() {
        return Le(ie(e) ? e.call(this, this) : e, ie(t) ? t.call(this, this) : t)
    }
    : t : e
}
function o1(e, t) {
    return lo(Sa(e), Sa(t))
}
function Sa(e) {
    if (Q(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function at(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function lo(e, t) {
    return e ? Le(Object.create(null), e, t) : t
}
function ql(e, t) {
    return e ? Q(e) && Q(t) ? [...new Set([...e, ...t])] : Le(Object.create(null), Oo(e), Oo(t ?? {})) : t
}
function s1(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = Le(Object.create(null), e);
    for (const r in t)
        n[r] = at(e[r], t[r]);
    return n
}
function Yd() {
    return {
        app: null,
        config: {
            isNativeTag: Ry,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let i1 = 0;
function a1(e, t) {
    return function(r, o=null) {
        ie(r) || (r = Le({}, r)),
        o != null && !ke(o) && (o = null);
        const s = Yd()
          , i = new WeakSet;
        let a = !1;
        const c = s.app = {
            _uid: i1++,
            _component: r,
            _props: o,
            _container: null,
            _context: s,
            _instance: null,
            version: zc,
            get config() {
                return s.config
            },
            set config(l) {},
            use(l, ...u) {
                return i.has(l) || (l && ie(l.install) ? (i.add(l),
                l.install(c, ...u)) : ie(l) && (i.add(l),
                l(c, ...u))),
                c
            },
            mixin(l) {
                return s.mixins.includes(l) || s.mixins.push(l),
                c
            },
            component(l, u) {
                return u ? (s.components[l] = u,
                c) : s.components[l]
            },
            directive(l, u) {
                return u ? (s.directives[l] = u,
                c) : s.directives[l]
            },
            mount(l, u, f) {
                if (!a) {
                    const d = fe(r, o);
                    return d.appContext = s,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    u && t ? t(d, l) : e(d, l, f),
                    a = !0,
                    c._container = l,
                    l.__vue_app__ = c,
                    rs(d.component)
                }
            },
            unmount() {
                a && (e(null, c._container),
                delete c._container.__vue_app__)
            },
            provide(l, u) {
                return s.provides[l] = u,
                c
            },
            runWithContext(l) {
                const u = or;
                or = c;
                try {
                    return l()
                } finally {
                    or = u
                }
            }
        };
        return c
    }
}
let or = null;
function sr(e, t) {
    if (qe) {
        let n = qe.provides;
        const r = qe.parent && qe.parent.provides;
        r === n && (n = qe.provides = Object.create(r)),
        n[e] = t
    }
}
function rt(e, t, n=!1) {
    const r = qe || We;
    if (r || or) {
        const o = or ? or._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return n && ie(t) ? t.call(r && r.proxy) : t
    }
}
function Bc() {
    return !!(qe || We || or)
}
const Qd = {}
  , Xd = () => Object.create(Qd)
  , eh = e => Object.getPrototypeOf(e) === Qd;
function c1(e, t, n, r=!1) {
    const o = {}
      , s = Xd();
    e.propsDefaults = Object.create(null),
    th(e, t, o, s);
    for (const i in e.propsOptions[0])
        i in o || (o[i] = void 0);
    n ? e.props = r ? o : qt(o) : e.type.props ? e.props = o : e.props = s,
    e.attrs = s
}
function l1(e, t, n, r) {
    const {props: o, attrs: s, vnode: {patchFlag: i}} = e
      , a = me(o)
      , [c] = e.propsOptions;
    let l = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let d = u[f];
                if (Oi(e.emitsOptions, d))
                    continue;
                const h = t[d];
                if (c)
                    if (be(s, d))
                        h !== s[d] && (s[d] = h,
                        l = !0);
                    else {
                        const m = nt(d);
                        o[m] = Ea(c, a, m, h, e, !1)
                    }
                else
                    h !== s[d] && (s[d] = h,
                    l = !0)
            }
        }
    } else {
        th(e, t, o, s) && (l = !0);
        let u;
        for (const f in a)
            (!t || !be(t, f) && ((u = dt(f)) === f || !be(t, u))) && (c ? n && (n[f] !== void 0 || n[u] !== void 0) && (o[f] = Ea(c, a, f, void 0, e, !0)) : delete o[f]);
        if (s !== a)
            for (const f in s)
                (!t || !be(t, f)) && (delete s[f],
                l = !0)
    }
    l && on(e.attrs, "set", "")
}
function th(e, t, n, r) {
    const [o,s] = e.propsOptions;
    let i = !1, a;
    if (t)
        for (let c in t) {
            if ($r(c))
                continue;
            const l = t[c];
            let u;
            o && be(o, u = nt(c)) ? !s || !s.includes(u) ? n[u] = l : (a || (a = {}))[u] = l : Oi(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l,
            i = !0)
        }
    if (s) {
        const c = me(n)
          , l = a || ve;
        for (let u = 0; u < s.length; u++) {
            const f = s[u];
            n[f] = Ea(o, c, f, l[f], e, !be(l, f))
        }
    }
    return i
}
function Ea(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
        const a = be(i, "default");
        if (a && r === void 0) {
            const c = i.default;
            if (i.type !== Function && !i.skipFactory && ie(c)) {
                const {propsDefaults: l} = o;
                if (n in l)
                    r = l[n];
                else {
                    const u = hr(o);
                    r = l[n] = c.call(null, t),
                    u()
                }
            } else
                r = c
        }
        i[0] && (s && !a ? r = !1 : i[1] && (r === "" || r === dt(n)) && (r = !0))
    }
    return r
}
const u1 = new WeakMap;
function nh(e, t, n=!1) {
    const r = n ? u1 : t.propsCache
      , o = r.get(e);
    if (o)
        return o;
    const s = e.props
      , i = {}
      , a = [];
    let c = !1;
    if (!ie(e)) {
        const u = f => {
            c = !0;
            const [d,h] = nh(f, t, !0);
            Le(i, d),
            h && a.push(...h)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!s && !c)
        return ke(e) && r.set(e, Or),
        Or;
    if (Q(s))
        for (let u = 0; u < s.length; u++) {
            const f = nt(s[u]);
            Wl(f) && (i[f] = ve)
        }
    else if (s)
        for (const u in s) {
            const f = nt(u);
            if (Wl(f)) {
                const d = s[u]
                  , h = i[f] = Q(d) || ie(d) ? {
                    type: d
                } : Le({}, d)
                  , m = h.type;
                let p = !1
                  , S = !0;
                if (Q(m))
                    for (let k = 0; k < m.length; ++k) {
                        const y = m[k]
                          , g = ie(y) && y.name;
                        if (g === "Boolean") {
                            p = !0;
                            break
                        } else
                            g === "String" && (S = !1)
                    }
                else
                    p = ie(m) && m.name === "Boolean";
                h[0] = p,
                h[1] = S,
                (p || be(h, "default")) && a.push(f)
            }
        }
    const l = [i, a];
    return ke(e) && r.set(e, l),
    l
}
function Wl(e) {
    return e[0] !== "$" && !$r(e)
}
const rh = e => e[0] === "_" || e === "$stable"
  , jc = e => Q(e) ? e.map(ft) : [ft(e)]
  , f1 = (e, t, n) => {
    if (t._n)
        return t;
    const r = Ln( (...o) => jc(t(...o)), n);
    return r._c = !1,
    r
}
  , oh = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
        if (rh(o))
            continue;
        const s = e[o];
        if (ie(s))
            t[o] = f1(o, s, r);
        else if (s != null) {
            const i = jc(s);
            t[o] = () => i
        }
    }
}
  , sh = (e, t) => {
    const n = jc(t);
    e.slots.default = () => n
}
  , ih = (e, t, n) => {
    for (const r in t)
        (n || r !== "_") && (e[r] = t[r])
}
  , d1 = (e, t, n) => {
    const r = e.slots = Xd();
    if (e.vnode.shapeFlag & 32) {
        const o = t._;
        o ? (ih(r, t, n),
        n && cd(r, "_", o, !0)) : oh(t, r)
    } else
        t && sh(e, t)
}
  , h1 = (e, t, n) => {
    const {vnode: r, slots: o} = e;
    let s = !0
      , i = ve;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? s = !1 : ih(o, t, n) : (s = !t.$stable,
        oh(t, o)),
        i = t
    } else
        t && (sh(e, t),
        i = {
            default: 1
        });
    if (s)
        for (const a in o)
            !rh(a) && i[a] == null && delete o[a]
}
;
function Vs(e, t, n, r, o=!1) {
    if (Q(e)) {
        e.forEach( (d, h) => Vs(d, t && (Q(t) ? t[h] : t), n, r, o));
        return
    }
    if (rr(r) && !o)
        return;
    const s = r.shapeFlag & 4 ? rs(r.component) : r.el
      , i = o ? null : s
      , {i: a, r: c} = e
      , l = t && t.r
      , u = a.refs === ve ? a.refs = {} : a.refs
      , f = a.setupState;
    if (l != null && l !== c && (Me(l) ? (u[l] = null,
    be(f, l) && (f[l] = null)) : Ye(l) && (l.value = null)),
    ie(c))
        sn(c, a, 12, [i, u]);
    else {
        const d = Me(c)
          , h = Ye(c);
        if (d || h) {
            const m = () => {
                if (e.f) {
                    const p = d ? be(f, c) ? f[c] : u[c] : c.value;
                    o ? Q(p) && gc(p, s) : Q(p) ? p.includes(s) || p.push(s) : d ? (u[c] = [s],
                    be(f, c) && (f[c] = u[c])) : (c.value = [s],
                    e.k && (u[e.k] = c.value))
                } else
                    d ? (u[c] = i,
                    be(f, c) && (f[c] = i)) : h && (c.value = i,
                    e.k && (u[e.k] = i))
            }
            ;
            i ? (m.id = -1,
            Ze(m, n)) : m()
        }
    }
}
const ah = Symbol("_vte")
  , p1 = e => e.__isTeleport
  , bo = e => e && (e.disabled || e.disabled === "")
  , Gl = e => typeof SVGElement < "u" && e instanceof SVGElement
  , Jl = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , ka = (e, t) => {
    const n = e && e.to;
    return Me(n) ? t ? t(n) : null : n
}
  , g1 = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, o, s, i, a, c, l) {
        const {mc: u, pc: f, pbc: d, o: {insert: h, querySelector: m, createText: p, createComment: S}} = l
          , k = bo(t.props);
        let {shapeFlag: y, children: g, dynamicChildren: w} = t;
        if (e == null) {
            const T = t.el = p("")
              , A = t.anchor = p("");
            h(T, n, r),
            h(A, n, r);
            const $ = t.target = ka(t.props, m)
              , N = lh($, t, p, h);
            $ && (i === "svg" || Gl($) ? i = "svg" : (i === "mathml" || Jl($)) && (i = "mathml"));
            const I = (C, v) => {
                y & 16 && u(g, C, v, o, s, i, a, c)
            }
            ;
            k ? I(n, A) : $ && I($, N)
        } else {
            t.el = e.el,
            t.targetStart = e.targetStart;
            const T = t.anchor = e.anchor
              , A = t.target = e.target
              , $ = t.targetAnchor = e.targetAnchor
              , N = bo(e.props)
              , I = N ? n : A
              , C = N ? T : $;
            if (i === "svg" || Gl(A) ? i = "svg" : (i === "mathml" || Jl(A)) && (i = "mathml"),
            w ? (d(e.dynamicChildren, w, I, o, s, i, a),
            Nc(e, t, !0)) : c || f(e, t, I, C, o, s, i, a, !1),
            k)
                N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : vs(t, n, T, l, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const v = t.target = ka(t.props, m);
                v && vs(t, v, null, l, 0)
            } else
                N && vs(t, A, $, l, 1)
        }
        ch(t)
    },
    remove(e, t, n, {um: r, o: {remove: o}}, s) {
        const {shapeFlag: i, children: a, anchor: c, targetStart: l, targetAnchor: u, target: f, props: d} = e;
        if (f && (o(l),
        o(u)),
        s && o(c),
        i & 16) {
            const h = s || !bo(d);
            for (let m = 0; m < a.length; m++) {
                const p = a[m];
                r(p, t, n, h, !!p.dynamicChildren)
            }
        }
    },
    move: vs,
    hydrate: m1
};
function vs(e, t, n, {o: {insert: r}, m: o}, s=2) {
    s === 0 && r(e.targetAnchor, t, n);
    const {el: i, anchor: a, shapeFlag: c, children: l, props: u} = e
      , f = s === 2;
    if (f && r(i, t, n),
    (!f || bo(u)) && c & 16)
        for (let d = 0; d < l.length; d++)
            o(l[d], t, n, 2);
    f && r(a, t, n)
}
function m1(e, t, n, r, o, s, {o: {nextSibling: i, parentNode: a, querySelector: c, insert: l, createText: u}}, f) {
    const d = t.target = ka(t.props, c);
    if (d) {
        const h = d._lpa || d.firstChild;
        if (t.shapeFlag & 16)
            if (bo(t.props))
                t.anchor = f(i(e), t, a(e), n, r, o, s),
                t.targetStart = h,
                t.targetAnchor = h && i(h);
            else {
                t.anchor = i(e);
                let m = h;
                for (; m; ) {
                    if (m && m.nodeType === 8) {
                        if (m.data === "teleport start anchor")
                            t.targetStart = m;
                        else if (m.data === "teleport anchor") {
                            t.targetAnchor = m,
                            d._lpa = t.targetAnchor && i(t.targetAnchor);
                            break
                        }
                    }
                    m = i(m)
                }
                t.targetAnchor || lh(d, t, u, l),
                f(h && i(h), t, d, n, r, o, s)
            }
        ch(t)
    }
    return t.anchor && i(t.anchor)
}
const y1 = g1;
function ch(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
function lh(e, t, n, r) {
    const o = t.targetStart = n("")
      , s = t.targetAnchor = n("");
    return o[ah] = s,
    e && (r(o, e),
    r(s, e)),
    s
}
let Zl = !1;
const Sr = () => {
    Zl || (console.error("Hydration completed but contains mismatches."),
    Zl = !0)
}
  , b1 = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , v1 = e => e.namespaceURI.includes("MathML")
  , _s = e => {
    if (b1(e))
        return "svg";
    if (v1(e))
        return "mathml"
}
  , ws = e => e.nodeType === 8;
function _1(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: o, nextSibling: s, parentNode: i, remove: a, insert: c, createComment: l}} = e
      , u = (g, w) => {
        if (!w.hasChildNodes()) {
            n(null, g, w),
            Hs(),
            w._vnode = g;
            return
        }
        f(w.firstChild, g, null, null, null),
        Hs(),
        w._vnode = g
    }
      , f = (g, w, T, A, $, N=!1) => {
        N = N || !!w.dynamicChildren;
        const I = ws(g) && g.data === "["
          , C = () => p(g, w, T, A, $, I)
          , {type: v, ref: _, shapeFlag: x, patchFlag: O} = w;
        let L = g.nodeType;
        w.el = g,
        O === -2 && (N = !1,
        w.dynamicChildren = null);
        let P = null;
        switch (v) {
        case Pn:
            L !== 3 ? w.children === "" ? (c(w.el = o(""), i(g), g),
            P = g) : P = C() : (g.data !== w.children && (Sr(),
            g.data = w.children),
            P = s(g));
            break;
        case ze:
            y(g) ? (P = s(g),
            k(w.el = g.content.firstChild, g, T)) : L !== 8 || I ? P = C() : P = s(g);
            break;
        case ir:
            if (I && (g = s(g),
            L = g.nodeType),
            L === 1 || L === 3) {
                P = g;
                const H = !w.children.length;
                for (let F = 0; F < w.staticCount; F++)
                    H && (w.children += P.nodeType === 1 ? P.outerHTML : P.data),
                    F === w.staticCount - 1 && (w.anchor = P),
                    P = s(P);
                return I ? s(P) : P
            } else
                C();
            break;
        case He:
            I ? P = m(g, w, T, A, $, N) : P = C();
            break;
        default:
            if (x & 1)
                (L !== 1 || w.type.toLowerCase() !== g.tagName.toLowerCase()) && !y(g) ? P = C() : P = d(g, w, T, A, $, N);
            else if (x & 6) {
                w.slotScopeIds = $;
                const H = i(g);
                if (I ? P = S(g) : ws(g) && g.data === "teleport start" ? P = S(g, g.data, "teleport end") : P = s(g),
                t(w, H, null, T, A, _s(H), N),
                rr(w)) {
                    let F;
                    I ? (F = fe(He),
                    F.anchor = P ? P.previousSibling : H.lastChild) : F = g.nodeType === 3 ? Uc("") : fe("div"),
                    F.el = g,
                    w.component.subTree = F
                }
            } else
                x & 64 ? L !== 8 ? P = C() : P = w.type.hydrate(g, w, T, A, $, N, e, h) : x & 128 && (P = w.type.hydrate(g, w, T, A, _s(i(g)), $, N, e, f))
        }
        return _ != null && Vs(_, null, A, w),
        P
    }
      , d = (g, w, T, A, $, N) => {
        N = N || !!w.dynamicChildren;
        const {type: I, props: C, patchFlag: v, shapeFlag: _, dirs: x, transition: O} = w
          , L = I === "input" || I === "option";
        if (L || v !== -1) {
            x && Vt(w, null, T, "created");
            let P = !1;
            if (y(g)) {
                P = hh(A, O) && T && T.vnode.props && T.vnode.props.appear;
                const F = g.content.firstChild;
                P && O.beforeEnter(F),
                k(F, g, T),
                w.el = g = F
            }
            if (_ & 16 && !(C && (C.innerHTML || C.textContent))) {
                let F = h(g.firstChild, w, g, T, A, $, N);
                for (; F; ) {
                    Sr();
                    const oe = F;
                    F = F.nextSibling,
                    a(oe)
                }
            } else
                _ & 8 && g.textContent !== w.children && (Sr(),
                g.textContent = w.children);
            if (C) {
                if (L || !N || v & 48) {
                    const F = g.tagName.includes("-");
                    for (const oe in C)
                        (L && (oe.endsWith("value") || oe === "indeterminate") || Zo(oe) && !$r(oe) || oe[0] === "." || F) && r(g, oe, null, C[oe], void 0, T)
                } else if (C.onClick)
                    r(g, "onClick", null, C.onClick, void 0, T);
                else if (v & 4 && nr(C.style))
                    for (const F in C.style)
                        C.style[F]
            }
            let H;
            (H = C && C.onVnodeBeforeMount) && ut(H, T, w),
            x && Vt(w, null, T, "beforeMount"),
            ((H = C && C.onVnodeMounted) || x || P) && Sh( () => {
                H && ut(H, T, w),
                P && O.enter(g),
                x && Vt(w, null, T, "mounted")
            }
            , A)
        }
        return g.nextSibling
    }
      , h = (g, w, T, A, $, N, I) => {
        I = I || !!w.dynamicChildren;
        const C = w.children
          , v = C.length;
        for (let _ = 0; _ < v; _++) {
            const x = I ? C[_] : C[_] = ft(C[_])
              , O = x.type === Pn;
            if (g) {
                if (O && !I) {
                    let L = C[_ + 1];
                    L && (L = ft(L)).type === Pn && (c(o(g.data.slice(x.children.length)), T, s(g)),
                    g.data = x.children)
                }
                g = f(g, x, A, $, N, I)
            } else
                O && !x.children ? c(x.el = o(""), T) : (Sr(),
                n(null, x, T, null, A, $, _s(T), N))
        }
        return g
    }
      , m = (g, w, T, A, $, N) => {
        const {slotScopeIds: I} = w;
        I && ($ = $ ? $.concat(I) : I);
        const C = i(g)
          , v = h(s(g), w, C, T, A, $, N);
        return v && ws(v) && v.data === "]" ? s(w.anchor = v) : (Sr(),
        c(w.anchor = l("]"), C, v),
        v)
    }
      , p = (g, w, T, A, $, N) => {
        if (Sr(),
        w.el = null,
        N) {
            const v = S(g);
            for (; ; ) {
                const _ = s(g);
                if (_ && _ !== v)
                    a(_);
                else
                    break
            }
        }
        const I = s(g)
          , C = i(g);
        return a(g),
        n(null, w, C, I, T, A, _s(C), $),
        I
    }
      , S = (g, w="[", T="]") => {
        let A = 0;
        for (; g; )
            if (g = s(g),
            g && ws(g) && (g.data === w && A++,
            g.data === T)) {
                if (A === 0)
                    return s(g);
                A--
            }
        return g
    }
      , k = (g, w, T) => {
        const A = w.parentNode;
        A && A.replaceChild(g, w);
        let $ = T;
        for (; $; )
            $.vnode.el === w && ($.vnode.el = $.subTree.el = g),
            $ = $.parent
    }
      , y = g => g.nodeType === 1 && g.tagName.toLowerCase() === "template";
    return [u, f]
}
const Ze = Sh;
function uh(e) {
    return dh(e)
}
function fh(e) {
    return dh(e, _1)
}
function dh(e, t) {
    const n = ld();
    n.__VUE__ = !0;
    const {insert: r, remove: o, patchProp: s, createElement: i, createText: a, createComment: c, setText: l, setElementText: u, parentNode: f, nextSibling: d, setScopeId: h=ht, insertStaticContent: m} = e
      , p = (b, E, M, D=null, j=null, V=null, W=void 0, K=null, q=!!E.dynamicChildren) => {
        if (b === E)
            return;
        b && !It(b, E) && (D = B(b),
        de(b, j, V, !0),
        b = null),
        E.patchFlag === -2 && (q = !1,
        E.dynamicChildren = null);
        const {type: U, ref: Z, shapeFlag: ne} = E;
        switch (U) {
        case Pn:
            S(b, E, M, D);
            break;
        case ze:
            k(b, E, M, D);
            break;
        case ir:
            b == null && y(E, M, D, W);
            break;
        case He:
            _(b, E, M, D, j, V, W, K, q);
            break;
        default:
            ne & 1 ? T(b, E, M, D, j, V, W, K, q) : ne & 6 ? x(b, E, M, D, j, V, W, K, q) : (ne & 64 || ne & 128) && U.process(b, E, M, D, j, V, W, K, q, X)
        }
        Z != null && j && Vs(Z, b && b.ref, V, E || b, !E)
    }
      , S = (b, E, M, D) => {
        if (b == null)
            r(E.el = a(E.children), M, D);
        else {
            const j = E.el = b.el;
            E.children !== b.children && l(j, E.children)
        }
    }
      , k = (b, E, M, D) => {
        b == null ? r(E.el = c(E.children || ""), M, D) : E.el = b.el
    }
      , y = (b, E, M, D) => {
        [b.el,b.anchor] = m(b.children, E, M, D, b.el, b.anchor)
    }
      , g = ({el: b, anchor: E}, M, D) => {
        let j;
        for (; b && b !== E; )
            j = d(b),
            r(b, M, D),
            b = j;
        r(E, M, D)
    }
      , w = ({el: b, anchor: E}) => {
        let M;
        for (; b && b !== E; )
            M = d(b),
            o(b),
            b = M;
        o(E)
    }
      , T = (b, E, M, D, j, V, W, K, q) => {
        E.type === "svg" ? W = "svg" : E.type === "math" && (W = "mathml"),
        b == null ? A(E, M, D, j, V, W, K, q) : I(b, E, j, V, W, K, q)
    }
      , A = (b, E, M, D, j, V, W, K) => {
        let q, U;
        const {props: Z, shapeFlag: ne, transition: ee, dirs: ue} = b;
        if (q = b.el = i(b.type, V, Z && Z.is, Z),
        ne & 8 ? u(q, b.children) : ne & 16 && N(b.children, q, null, D, j, Wi(b, V), W, K),
        ue && Vt(b, null, D, "created"),
        $(q, b, b.scopeId, W, D),
        Z) {
            for (const Ae in Z)
                Ae !== "value" && !$r(Ae) && s(q, Ae, null, Z[Ae], V, D);
            "value"in Z && s(q, "value", null, Z.value, V),
            (U = Z.onVnodeBeforeMount) && ut(U, D, b)
        }
        ue && Vt(b, null, D, "beforeMount");
        const ge = hh(j, ee);
        ge && ee.beforeEnter(q),
        r(q, E, M),
        ((U = Z && Z.onVnodeMounted) || ge || ue) && Ze( () => {
            U && ut(U, D, b),
            ge && ee.enter(q),
            ue && Vt(b, null, D, "mounted")
        }
        , j)
    }
      , $ = (b, E, M, D, j) => {
        if (M && h(b, M),
        D)
            for (let V = 0; V < D.length; V++)
                h(b, D[V]);
        if (j) {
            let V = j.subTree;
            if (E === V) {
                const W = j.vnode;
                $(b, W, W.scopeId, W.slotScopeIds, j.parent)
            }
        }
    }
      , N = (b, E, M, D, j, V, W, K, q=0) => {
        for (let U = q; U < b.length; U++) {
            const Z = b[U] = K ? mn(b[U]) : ft(b[U]);
            p(null, Z, E, M, D, j, V, W, K)
        }
    }
      , I = (b, E, M, D, j, V, W) => {
        const K = E.el = b.el;
        let {patchFlag: q, dynamicChildren: U, dirs: Z} = E;
        q |= b.patchFlag & 16;
        const ne = b.props || ve
          , ee = E.props || ve;
        let ue;
        if (M && Vn(M, !1),
        (ue = ee.onVnodeBeforeUpdate) && ut(ue, M, E, b),
        Z && Vt(E, b, M, "beforeUpdate"),
        M && Vn(M, !0),
        (ne.innerHTML && ee.innerHTML == null || ne.textContent && ee.textContent == null) && u(K, ""),
        U ? C(b.dynamicChildren, U, K, M, D, Wi(E, j), V) : W || F(b, E, K, null, M, D, Wi(E, j), V, !1),
        q > 0) {
            if (q & 16)
                v(K, ne, ee, M, j);
            else if (q & 2 && ne.class !== ee.class && s(K, "class", null, ee.class, j),
            q & 4 && s(K, "style", ne.style, ee.style, j),
            q & 8) {
                const ge = E.dynamicProps;
                for (let Ae = 0; Ae < ge.length; Ae++) {
                    const Ce = ge[Ae]
                      , Ge = ne[Ce]
                      , Pt = ee[Ce];
                    (Pt !== Ge || Ce === "value") && s(K, Ce, Ge, Pt, j, M)
                }
            }
            q & 1 && b.children !== E.children && u(K, E.children)
        } else
            !W && U == null && v(K, ne, ee, M, j);
        ((ue = ee.onVnodeUpdated) || Z) && Ze( () => {
            ue && ut(ue, M, E, b),
            Z && Vt(E, b, M, "updated")
        }
        , D)
    }
      , C = (b, E, M, D, j, V, W) => {
        for (let K = 0; K < E.length; K++) {
            const q = b[K]
              , U = E[K]
              , Z = q.el && (q.type === He || !It(q, U) || q.shapeFlag & 70) ? f(q.el) : M;
            p(q, U, Z, null, D, j, V, W, !0)
        }
    }
      , v = (b, E, M, D, j) => {
        if (E !== M) {
            if (E !== ve)
                for (const V in E)
                    !$r(V) && !(V in M) && s(b, V, E[V], null, j, D);
            for (const V in M) {
                if ($r(V))
                    continue;
                const W = M[V]
                  , K = E[V];
                W !== K && V !== "value" && s(b, V, K, W, j, D)
            }
            "value"in M && s(b, "value", E.value, M.value, j)
        }
    }
      , _ = (b, E, M, D, j, V, W, K, q) => {
        const U = E.el = b ? b.el : a("")
          , Z = E.anchor = b ? b.anchor : a("");
        let {patchFlag: ne, dynamicChildren: ee, slotScopeIds: ue} = E;
        ue && (K = K ? K.concat(ue) : ue),
        b == null ? (r(U, M, D),
        r(Z, M, D),
        N(E.children || [], M, Z, j, V, W, K, q)) : ne > 0 && ne & 64 && ee && b.dynamicChildren ? (C(b.dynamicChildren, ee, M, j, V, W, K),
        (E.key != null || j && E === j.subTree) && Nc(b, E, !0)) : F(b, E, M, Z, j, V, W, K, q)
    }
      , x = (b, E, M, D, j, V, W, K, q) => {
        E.slotScopeIds = K,
        b == null ? E.shapeFlag & 512 ? j.ctx.activate(E, M, D, W, q) : O(E, M, D, j, V, W, q) : L(b, E, q)
    }
      , O = (b, E, M, D, j, V, W) => {
        const K = b.component = Rh(b, D, j);
        if (Xo(b) && (K.ctx.renderer = X),
        Ph(K, !1, W),
        K.asyncDep) {
            if (j && j.registerDep(K, P, W),
            !b.el) {
                const q = K.subTree = fe(ze);
                k(null, q, E, M)
            }
        } else
            P(K, b, E, M, j, V, W)
    }
      , L = (b, E, M) => {
        const D = E.component = b.component;
        if (A1(b, E, M))
            if (D.asyncDep && !D.asyncResolved) {
                H(D, E, M);
                return
            } else
                D.next = E,
                R0(D.update),
                D.effect.dirty = !0,
                D.update();
        else
            E.el = b.el,
            D.vnode = E
    }
      , P = (b, E, M, D, j, V, W) => {
        const K = () => {
            if (b.isMounted) {
                let {next: Z, bu: ne, u: ee, parent: ue, vnode: ge} = b;
                {
                    const Cr = ph(b);
                    if (Cr) {
                        Z && (Z.el = ge.el,
                        H(b, Z, W)),
                        Cr.asyncDep.then( () => {
                            b.isUnmounted || K()
                        }
                        );
                        return
                    }
                }
                let Ae = Z, Ce;
                Vn(b, !1),
                Z ? (Z.el = ge.el,
                H(b, Z, W)) : Z = ge,
                ne && Mr(ne),
                (Ce = Z.props && Z.props.onVnodeBeforeUpdate) && ut(Ce, ue, Z, ge),
                Vn(b, !0);
                const Ge = Os(b)
                  , Pt = b.subTree;
                b.subTree = Ge,
                p(Pt, Ge, f(Pt.el), B(Pt), b, j, V),
                Z.el = Ge.el,
                Ae === null && Fc(b, Ge.el),
                ee && Ze(ee, j),
                (Ce = Z.props && Z.props.onVnodeUpdated) && Ze( () => ut(Ce, ue, Z, ge), j)
            } else {
                let Z;
                const {el: ne, props: ee} = E
                  , {bm: ue, m: ge, parent: Ae} = b
                  , Ce = rr(E);
                if (Vn(b, !1),
                ue && Mr(ue),
                !Ce && (Z = ee && ee.onVnodeBeforeMount) && ut(Z, Ae, E),
                Vn(b, !0),
                ne && Oe) {
                    const Ge = () => {
                        b.subTree = Os(b),
                        Oe(ne, b.subTree, b, j, null)
                    }
                    ;
                    Ce ? E.type.__asyncLoader().then( () => !b.isUnmounted && Ge()) : Ge()
                } else {
                    const Ge = b.subTree = Os(b);
                    p(null, Ge, M, D, b, j, V),
                    E.el = Ge.el
                }
                if (ge && Ze(ge, j),
                !Ce && (Z = ee && ee.onVnodeMounted)) {
                    const Ge = E;
                    Ze( () => ut(Z, Ae, Ge), j)
                }
                (E.shapeFlag & 256 || Ae && rr(Ae.vnode) && Ae.vnode.shapeFlag & 256) && b.a && Ze(b.a, j),
                b.isMounted = !0,
                E = M = D = null
            }
        }
          , q = b.effect = new qr(K,ht, () => wi(U),b.scope)
          , U = b.update = () => {
            q.dirty && q.run()
        }
        ;
        U.i = b,
        U.id = b.uid,
        Vn(b, !0),
        U()
    }
      , H = (b, E, M) => {
        E.component = b;
        const D = b.vnode.props;
        b.vnode = E,
        b.next = null,
        l1(b, E.props, D, M),
        h1(b, E.children, M),
        Dn(),
        Hl(b),
        Fn()
    }
      , F = (b, E, M, D, j, V, W, K, q=!1) => {
        const U = b && b.children
          , Z = b ? b.shapeFlag : 0
          , ne = E.children
          , {patchFlag: ee, shapeFlag: ue} = E;
        if (ee > 0) {
            if (ee & 128) {
                he(U, ne, M, D, j, V, W, K, q);
                return
            } else if (ee & 256) {
                oe(U, ne, M, D, j, V, W, K, q);
                return
            }
        }
        ue & 8 ? (Z & 16 && xe(U, j, V),
        ne !== U && u(M, ne)) : Z & 16 ? ue & 16 ? he(U, ne, M, D, j, V, W, K, q) : xe(U, j, V, !0) : (Z & 8 && u(M, ""),
        ue & 16 && N(ne, M, D, j, V, W, K, q))
    }
      , oe = (b, E, M, D, j, V, W, K, q) => {
        b = b || Or,
        E = E || Or;
        const U = b.length
          , Z = E.length
          , ne = Math.min(U, Z);
        let ee;
        for (ee = 0; ee < ne; ee++) {
            const ue = E[ee] = q ? mn(E[ee]) : ft(E[ee]);
            p(b[ee], ue, M, null, j, V, W, K, q)
        }
        U > Z ? xe(b, j, V, !0, !1, ne) : N(E, M, D, j, V, W, K, q, ne)
    }
      , he = (b, E, M, D, j, V, W, K, q) => {
        let U = 0;
        const Z = E.length;
        let ne = b.length - 1
          , ee = Z - 1;
        for (; U <= ne && U <= ee; ) {
            const ue = b[U]
              , ge = E[U] = q ? mn(E[U]) : ft(E[U]);
            if (It(ue, ge))
                p(ue, ge, M, null, j, V, W, K, q);
            else
                break;
            U++
        }
        for (; U <= ne && U <= ee; ) {
            const ue = b[ne]
              , ge = E[ee] = q ? mn(E[ee]) : ft(E[ee]);
            if (It(ue, ge))
                p(ue, ge, M, null, j, V, W, K, q);
            else
                break;
            ne--,
            ee--
        }
        if (U > ne) {
            if (U <= ee) {
                const ue = ee + 1
                  , ge = ue < Z ? E[ue].el : D;
                for (; U <= ee; )
                    p(null, E[U] = q ? mn(E[U]) : ft(E[U]), M, ge, j, V, W, K, q),
                    U++
            }
        } else if (U > ee)
            for (; U <= ne; )
                de(b[U], j, V, !0),
                U++;
        else {
            const ue = U
              , ge = U
              , Ae = new Map;
            for (U = ge; U <= ee; U++) {
                const yt = E[U] = q ? mn(E[U]) : ft(E[U]);
                yt.key != null && Ae.set(yt.key, U)
            }
            let Ce, Ge = 0;
            const Pt = ee - ge + 1;
            let Cr = !1
              , Al = 0;
            const no = new Array(Pt);
            for (U = 0; U < Pt; U++)
                no[U] = 0;
            for (U = ue; U <= ne; U++) {
                const yt = b[U];
                if (Ge >= Pt) {
                    de(yt, j, V, !0);
                    continue
                }
                let Ft;
                if (yt.key != null)
                    Ft = Ae.get(yt.key);
                else
                    for (Ce = ge; Ce <= ee; Ce++)
                        if (no[Ce - ge] === 0 && It(yt, E[Ce])) {
                            Ft = Ce;
                            break
                        }
                Ft === void 0 ? de(yt, j, V, !0) : (no[Ft - ge] = U + 1,
                Ft >= Al ? Al = Ft : Cr = !0,
                p(yt, E[Ft], M, null, j, V, W, K, q),
                Ge++)
            }
            const Rl = Cr ? w1(no) : Or;
            for (Ce = Rl.length - 1,
            U = Pt - 1; U >= 0; U--) {
                const yt = ge + U
                  , Ft = E[yt]
                  , Ol = yt + 1 < Z ? E[yt + 1].el : D;
                no[U] === 0 ? p(null, Ft, M, Ol, j, V, W, K, q) : Cr && (Ce < 0 || U !== Rl[Ce] ? ae(Ft, M, Ol, 2) : Ce--)
            }
        }
    }
      , ae = (b, E, M, D, j=null) => {
        const {el: V, type: W, transition: K, children: q, shapeFlag: U} = b;
        if (U & 6) {
            ae(b.component.subTree, E, M, D);
            return
        }
        if (U & 128) {
            b.suspense.move(E, M, D);
            return
        }
        if (U & 64) {
            W.move(b, E, M, X);
            return
        }
        if (W === He) {
            r(V, E, M);
            for (let ne = 0; ne < q.length; ne++)
                ae(q[ne], E, M, D);
            r(b.anchor, E, M);
            return
        }
        if (W === ir) {
            g(b, E, M);
            return
        }
        if (D !== 2 && U & 1 && K)
            if (D === 0)
                K.beforeEnter(V),
                r(V, E, M),
                Ze( () => K.enter(V), j);
            else {
                const {leave: ne, delayLeave: ee, afterLeave: ue} = K
                  , ge = () => r(V, E, M)
                  , Ae = () => {
                    ne(V, () => {
                        ge(),
                        ue && ue()
                    }
                    )
                }
                ;
                ee ? ee(V, ge, Ae) : Ae()
            }
        else
            r(V, E, M)
    }
      , de = (b, E, M, D=!1, j=!1) => {
        const {type: V, props: W, ref: K, children: q, dynamicChildren: U, shapeFlag: Z, patchFlag: ne, dirs: ee, cacheIndex: ue} = b;
        if (ne === -2 && (j = !1),
        K != null && Vs(K, null, M, b, !0),
        ue != null && (E.renderCache[ue] = void 0),
        Z & 256) {
            E.ctx.deactivate(b);
            return
        }
        const ge = Z & 1 && ee
          , Ae = !rr(b);
        let Ce;
        if (Ae && (Ce = W && W.onVnodeBeforeUnmount) && ut(Ce, E, b),
        Z & 6)
            Ie(b.component, M, D);
        else {
            if (Z & 128) {
                b.suspense.unmount(M, D);
                return
            }
            ge && Vt(b, null, E, "beforeUnmount"),
            Z & 64 ? b.type.remove(b, E, M, X, D) : U && !U.hasOnce && (V !== He || ne > 0 && ne & 64) ? xe(U, E, M, !1, !0) : (V === He && ne & 384 || !j && Z & 16) && xe(q, E, M),
            D && Re(b)
        }
        (Ae && (Ce = W && W.onVnodeUnmounted) || ge) && Ze( () => {
            Ce && ut(Ce, E, b),
            ge && Vt(b, null, E, "unmounted")
        }
        , M)
    }
      , Re = b => {
        const {type: E, el: M, anchor: D, transition: j} = b;
        if (E === He) {
            _e(M, D);
            return
        }
        if (E === ir) {
            w(b);
            return
        }
        const V = () => {
            o(M),
            j && !j.persisted && j.afterLeave && j.afterLeave()
        }
        ;
        if (b.shapeFlag & 1 && j && !j.persisted) {
            const {leave: W, delayLeave: K} = j
              , q = () => W(M, V);
            K ? K(b.el, V, q) : q()
        } else
            V()
    }
      , _e = (b, E) => {
        let M;
        for (; b !== E; )
            M = d(b),
            o(b),
            b = M;
        o(E)
    }
      , Ie = (b, E, M) => {
        const {bum: D, scope: j, update: V, subTree: W, um: K, m: q, a: U} = b;
        zs(q),
        zs(U),
        D && Mr(D),
        j.stop(),
        V && (V.active = !1,
        de(W, b, E, M)),
        K && Ze(K, E),
        Ze( () => {
            b.isUnmounted = !0
        }
        , E),
        E && E.pendingBranch && !E.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === E.pendingId && (E.deps--,
        E.deps === 0 && E.resolve())
    }
      , xe = (b, E, M, D=!1, j=!1, V=0) => {
        for (let W = V; W < b.length; W++)
            de(b[W], E, M, D, j)
    }
      , B = b => {
        if (b.shapeFlag & 6)
            return B(b.component.subTree);
        if (b.shapeFlag & 128)
            return b.suspense.next();
        const E = d(b.anchor || b.el)
          , M = E && E[ah];
        return M ? d(M) : E
    }
    ;
    let J = !1;
    const z = (b, E, M) => {
        b == null ? E._vnode && de(E._vnode, null, null, !0) : p(E._vnode || null, b, E, null, null, null, M),
        E._vnode = b,
        J || (J = !0,
        Hl(),
        Hs(),
        J = !1)
    }
      , X = {
        p,
        um: de,
        m: ae,
        r: Re,
        mt: O,
        mc: N,
        pc: F,
        pbc: C,
        n: B,
        o: e
    };
    let we, Oe;
    return t && ([we,Oe] = t(X)),
    {
        render: z,
        hydrate: we,
        createApp: a1(z, we)
    }
}
function Wi({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Vn({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function hh(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Nc(e, t, n=!1) {
    const r = e.children
      , o = t.children;
    if (Q(r) && Q(o))
        for (let s = 0; s < r.length; s++) {
            const i = r[s];
            let a = o[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = mn(o[s]),
            a.el = i.el),
            !n && a.patchFlag !== -2 && Nc(i, a)),
            a.type === Pn && (a.el = i.el)
        }
}
function w1(e) {
    const t = e.slice()
      , n = [0];
    let r, o, s, i, a;
    const c = e.length;
    for (r = 0; r < c; r++) {
        const l = e[r];
        if (l !== 0) {
            if (o = n[n.length - 1],
            e[o] < l) {
                t[r] = o,
                n.push(r);
                continue
            }
            for (s = 0,
            i = n.length - 1; s < i; )
                a = s + i >> 1,
                e[n[a]] < l ? s = a + 1 : i = a;
            l < e[n[s]] && (s > 0 && (t[r] = n[s - 1]),
            n[s] = r)
        }
    }
    for (s = n.length,
    i = n[s - 1]; s-- > 0; )
        n[s] = i,
        i = t[i];
    return n
}
function ph(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : ph(t)
}
function zs(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].active = !1
}
const gh = Symbol.for("v-scx")
  , mh = () => rt(gh);
function Dc(e, t) {
    return ts(e, null, t)
}
function yh(e, t) {
    return ts(e, null, {
        flush: "post"
    })
}
function bh(e, t) {
    return ts(e, null, {
        flush: "sync"
    })
}
const Cs = {};
function Lt(e, t, n) {
    return ts(e, t, n)
}
function ts(e, t, {immediate: n, deep: r, flush: o, once: s, onTrack: i, onTrigger: a}=ve) {
    if (t && s) {
        const A = t;
        t = (...$) => {
            A(...$),
            T()
        }
    }
    const c = qe
      , l = A => r === !0 ? A : wn(A, r === !1 ? 1 : void 0);
    let u, f = !1, d = !1;
    if (Ye(e) ? (u = () => e.value,
    f = ur(e)) : nr(e) ? (u = () => l(e),
    f = !0) : Q(e) ? (d = !0,
    f = e.some(A => nr(A) || ur(A)),
    u = () => e.map(A => {
        if (Ye(A))
            return A.value;
        if (nr(A))
            return l(A);
        if (ie(A))
            return sn(A, c, 2)
    }
    )) : ie(e) ? t ? u = () => sn(e, c, 2) : u = () => (h && h(),
    _t(e, c, 3, [m])) : u = ht,
    t && r) {
        const A = u;
        u = () => wn(A())
    }
    let h, m = A => {
        h = g.onStop = () => {
            sn(A, c, 4),
            h = g.onStop = void 0
        }
    }
    , p;
    if (ns)
        if (m = ht,
        t ? n && _t(t, c, 3, [u(), d ? [] : void 0, m]) : u(),
        o === "sync") {
            const A = mh();
            p = A.__watcherHandles || (A.__watcherHandles = [])
        } else
            return ht;
    let S = d ? new Array(e.length).fill(Cs) : Cs;
    const k = () => {
        if (!(!g.active || !g.dirty))
            if (t) {
                const A = g.run();
                (r || f || (d ? A.some( ($, N) => lt($, S[N])) : lt(A, S))) && (h && h(),
                _t(t, c, 3, [A, S === Cs ? void 0 : d && S[0] === Cs ? [] : S, m]),
                S = A)
            } else
                g.run()
    }
    ;
    k.allowRecurse = !!t;
    let y;
    o === "sync" ? y = k : o === "post" ? y = () => Ze(k, c && c.suspense) : (k.pre = !0,
    c && (k.id = c.uid),
    y = () => wi(k));
    const g = new qr(u,ht,y)
      , w = mi()
      , T = () => {
        g.stop(),
        w && gc(w.effects, g)
    }
    ;
    return t ? n ? k() : S = g.run() : o === "post" ? Ze(g.run.bind(g), c && c.suspense) : g.run(),
    p && p.push(T),
    T
}
function C1(e, t, n) {
    const r = this.proxy
      , o = Me(e) ? e.includes(".") ? vh(r, e) : () => r[e] : e.bind(r, r);
    let s;
    ie(t) ? s = t : (s = t.handler,
    n = t);
    const i = hr(this)
      , a = ts(o, s.bind(r), n);
    return i(),
    a
}
function vh(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let o = 0; o < n.length && r; o++)
            r = r[n[o]];
        return r
    }
}
function wn(e, t=1 / 0, n) {
    if (t <= 0 || !ke(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    Ye(e))
        wn(e.value, t, n);
    else if (Q(e))
        for (let r = 0; r < e.length; r++)
            wn(e[r], t, n);
    else if (yr(e) || Pr(e))
        e.forEach(r => {
            wn(r, t, n)
        }
        );
    else if (ad(e)) {
        for (const r in e)
            wn(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && wn(e[r], t, n)
    }
    return e
}
function S1(e, t, n=ve) {
    const r = mt()
      , o = nt(t)
      , s = dt(t)
      , i = _h(e, t)
      , a = Pd( (c, l) => {
        let u, f = ve, d;
        return bh( () => {
            const h = e[t];
            lt(u, h) && (u = h,
            l())
        }
        ),
        {
            get() {
                return c(),
                n.get ? n.get(u) : u
            },
            set(h) {
                const m = n.set ? n.set(h) : h;
                if (!lt(m, u) && !(f !== ve && lt(h, f)))
                    return;
                const p = r.vnode.props;
                p && (t in p || o in p || s in p) && (`onUpdate:${t}`in p || `onUpdate:${o}`in p || `onUpdate:${s}`in p) || (u = h,
                l()),
                r.emit(`update:${t}`, m),
                lt(h, m) && lt(h, f) && !lt(m, d) && l(),
                f = h,
                d = m
            }
        }
    }
    );
    return a[Symbol.iterator] = () => {
        let c = 0;
        return {
            next() {
                return c < 2 ? {
                    value: c++ ? i || ve : a,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }
    ,
    a
}
const _h = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${nt(t)}Modifiers`] || e[`${dt(t)}Modifiers`];
function E1(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || ve;
    let o = n;
    const s = t.startsWith("update:")
      , i = s && _h(r, t.slice(7));
    i && (i.trim && (o = n.map(u => Me(u) ? u.trim() : u)),
    i.number && (o = n.map(js)));
    let a, c = r[a = mo(t)] || r[a = mo(nt(t))];
    !c && s && (c = r[a = mo(dt(t))]),
    c && _t(c, e, 6, o);
    const l = r[a + "Once"];
    if (l) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        _t(l, e, 6, o)
    }
}
function wh(e, t, n=!1) {
    const r = t.emitsCache
      , o = r.get(e);
    if (o !== void 0)
        return o;
    const s = e.emits;
    let i = {}
      , a = !1;
    if (!ie(e)) {
        const c = l => {
            const u = wh(l, t, !0);
            u && (a = !0,
            Le(i, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    return !s && !a ? (ke(e) && r.set(e, null),
    null) : (Q(s) ? s.forEach(c => i[c] = null) : Le(i, s),
    ke(e) && r.set(e, i),
    i)
}
function Oi(e, t) {
    return !e || !Zo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    be(e, t[0].toLowerCase() + t.slice(1)) || be(e, dt(t)) || be(e, t))
}
function Os(e) {
    const {type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [s], slots: i, attrs: a, emit: c, render: l, renderCache: u, props: f, data: d, setupState: h, ctx: m, inheritAttrs: p} = e
      , S = Ro(e);
    let k, y;
    try {
        if (n.shapeFlag & 4) {
            const w = o || r
              , T = w;
            k = ft(l.call(T, w, u, f, h, d, m)),
            y = a
        } else {
            const w = t;
            k = ft(w.length > 1 ? w(f, {
                attrs: a,
                slots: i,
                emit: c
            }) : w(f, null)),
            y = t.props ? a : T1(a)
        }
    } catch (w) {
        vo.length = 0,
        br(w, e, 1),
        k = fe(ze)
    }
    let g = k;
    if (y && p !== !1) {
        const w = Object.keys(y)
          , {shapeFlag: T} = g;
        w.length && T & 7 && (s && w.some(pc) && (y = x1(y, s)),
        g = Gt(g, y, !1, !0))
    }
    return n.dirs && (g = Gt(g, null, !1, !0),
    g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs),
    n.transition && (g.transition = n.transition),
    k = g,
    Ro(S),
    k
}
function k1(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        if (jn(o)) {
            if (o.type !== ze || o.children === "v-if") {
                if (n)
                    return;
                n = o
            }
        } else
            return
    }
    return n
}
const T1 = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Zo(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , x1 = (e, t) => {
    const n = {};
    for (const r in e)
        (!pc(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function A1(e, t, n) {
    const {props: r, children: o, component: s} = e
      , {props: i, children: a, patchFlag: c} = t
      , l = s.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return r ? Yl(r, i, l) : !!i;
        if (c & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                if (i[d] !== r[d] && !Oi(l, d))
                    return !0
            }
        }
    } else
        return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Yl(r, i, l) : !0 : !!i;
    return !1
}
function Yl(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < r.length; o++) {
        const s = r[o];
        if (t[s] !== e[s] && !Oi(n, s))
            return !0
    }
    return !1
}
function Fc({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Ta = e => e.__isSuspense;
let xa = 0;
const R1 = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, o, s, i, a, c, l) {
        if (e == null)
            O1(t, n, r, o, s, i, a, c, l);
        else {
            if (s && s.deps > 0 && !e.suspense.isInFallback) {
                t.suspense = e.suspense,
                t.suspense.vnode = t,
                t.el = e.el;
                return
            }
            P1(e, t, n, r, o, i, a, c, l)
        }
    },
    hydrate: $1,
    normalize: M1
}
  , Hc = R1;
function Po(e, t) {
    const n = e.props && e.props[t];
    ie(n) && n()
}
function O1(e, t, n, r, o, s, i, a, c) {
    const {p: l, o: {createElement: u}} = c
      , f = u("div")
      , d = e.suspense = Ch(e, o, r, t, f, n, s, i, a, c);
    l(null, d.pendingBranch = e.ssContent, f, null, r, d, s, i),
    d.deps > 0 ? (Po(e, "onPending"),
    Po(e, "onFallback"),
    l(null, e.ssFallback, t, n, r, null, s, i),
    Br(d, e.ssFallback)) : d.resolve(!1, !0)
}
function P1(e, t, n, r, o, s, i, a, {p: c, um: l, o: {createElement: u}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , h = t.ssFallback
      , {activeBranch: m, pendingBranch: p, isInFallback: S, isHydrating: k} = f;
    if (p)
        f.pendingBranch = d,
        It(d, p) ? (c(p, d, f.hiddenContainer, null, o, f, s, i, a),
        f.deps <= 0 ? f.resolve() : S && (k || (c(m, h, n, r, o, null, s, i, a),
        Br(f, h)))) : (f.pendingId = xa++,
        k ? (f.isHydrating = !1,
        f.activeBranch = p) : l(p, o, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = u("div"),
        S ? (c(null, d, f.hiddenContainer, null, o, f, s, i, a),
        f.deps <= 0 ? f.resolve() : (c(m, h, n, r, o, null, s, i, a),
        Br(f, h))) : m && It(d, m) ? (c(m, d, n, r, o, f, s, i, a),
        f.resolve(!0)) : (c(null, d, f.hiddenContainer, null, o, f, s, i, a),
        f.deps <= 0 && f.resolve()));
    else if (m && It(d, m))
        c(m, d, n, r, o, f, s, i, a),
        Br(f, d);
    else if (Po(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = xa++,
    c(null, d, f.hiddenContainer, null, o, f, s, i, a),
    f.deps <= 0)
        f.resolve();
    else {
        const {timeout: y, pendingId: g} = f;
        y > 0 ? setTimeout( () => {
            f.pendingId === g && f.fallback(h)
        }
        , y) : y === 0 && f.fallback(h)
    }
}
function Ch(e, t, n, r, o, s, i, a, c, l, u=!1) {
    const {p: f, m: d, um: h, n: m, o: {parentNode: p, remove: S}} = l;
    let k;
    const y = I1(e);
    y && t && t.pendingBranch && (k = t.pendingId,
    t.deps++);
    const g = e.props ? Ns(e.props.timeout) : void 0
      , w = s
      , T = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: i,
        container: r,
        hiddenContainer: o,
        deps: 0,
        pendingId: xa++,
        timeout: typeof g == "number" ? g : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !u,
        isHydrating: u,
        isUnmounted: !1,
        effects: [],
        resolve(A=!1, $=!1) {
            const {vnode: N, activeBranch: I, pendingBranch: C, pendingId: v, effects: _, parentComponent: x, container: O} = T;
            let L = !1;
            T.isHydrating ? T.isHydrating = !1 : A || (L = I && C.transition && C.transition.mode === "out-in",
            L && (I.transition.afterLeave = () => {
                v === T.pendingId && (d(C, O, s === w ? m(I) : s, 0),
                Fs(_))
            }
            ),
            I && (p(I.el) !== T.hiddenContainer && (s = m(I)),
            h(I, x, T, !0)),
            L || d(C, O, s, 0)),
            Br(T, C),
            T.pendingBranch = null,
            T.isInFallback = !1;
            let P = T.parent
              , H = !1;
            for (; P; ) {
                if (P.pendingBranch) {
                    P.effects.push(..._),
                    H = !0;
                    break
                }
                P = P.parent
            }
            !H && !L && Fs(_),
            T.effects = [],
            y && t && t.pendingBranch && k === t.pendingId && (t.deps--,
            t.deps === 0 && !$ && t.resolve()),
            Po(N, "onResolve")
        },
        fallback(A) {
            if (!T.pendingBranch)
                return;
            const {vnode: $, activeBranch: N, parentComponent: I, container: C, namespace: v} = T;
            Po($, "onFallback");
            const _ = m(N)
              , x = () => {
                T.isInFallback && (f(null, A, C, _, I, null, v, a, c),
                Br(T, A))
            }
              , O = A.transition && A.transition.mode === "out-in";
            O && (N.transition.afterLeave = x),
            T.isInFallback = !0,
            h(N, I, null, !0),
            O || x()
        },
        move(A, $, N) {
            T.activeBranch && d(T.activeBranch, A, $, N),
            T.container = A
        },
        next() {
            return T.activeBranch && m(T.activeBranch)
        },
        registerDep(A, $, N) {
            const I = !!T.pendingBranch;
            I && T.deps++;
            const C = A.vnode.el;
            A.asyncDep.catch(v => {
                br(v, A, 0)
            }
            ).then(v => {
                if (A.isUnmounted || T.isUnmounted || T.pendingId !== A.suspenseId)
                    return;
                A.asyncResolved = !0;
                const {vnode: _} = A;
                Pa(A, v, !1),
                C && (_.el = C);
                const x = !C && A.subTree.el;
                $(A, _, p(C || A.subTree.el), C ? null : m(A.subTree), T, i, N),
                x && S(x),
                Fc(A, _.el),
                I && --T.deps === 0 && T.resolve()
            }
            )
        },
        unmount(A, $) {
            T.isUnmounted = !0,
            T.activeBranch && h(T.activeBranch, n, A, $),
            T.pendingBranch && h(T.pendingBranch, n, A, $)
        }
    };
    return T
}
function $1(e, t, n, r, o, s, i, a, c) {
    const l = t.suspense = Ch(t, r, n, e.parentNode, document.createElement("div"), null, o, s, i, a, !0)
      , u = c(e, l.pendingBranch = t.ssContent, n, l, s, i);
    return l.deps === 0 && l.resolve(!1, !0),
    u
}
function M1(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = Ql(r ? n.default : n),
    e.ssFallback = r ? Ql(n.fallback) : fe(ze)
}
function Ql(e) {
    let t;
    if (ie(e)) {
        const n = dr && e._c;
        n && (e._d = !1,
        G()),
        e = e(),
        n && (e._d = !0,
        t = tt,
        Eh())
    }
    return Q(e) && (e = k1(e)),
    e = ft(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)),
    e
}
function Sh(e, t) {
    t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Fs(e)
}
function Br(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let o = t.el;
    for (; !o && t.component; )
        t = t.component.subTree,
        o = t.el;
    n.el = o,
    r && r.subTree === n && (r.vnode.el = o,
    Fc(r, o))
}
function I1(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
const He = Symbol.for("v-fgt")
  , Pn = Symbol.for("v-txt")
  , ze = Symbol.for("v-cmt")
  , ir = Symbol.for("v-stc")
  , vo = [];
let tt = null;
function G(e=!1) {
    vo.push(tt = e ? null : [])
}
function Eh() {
    vo.pop(),
    tt = vo[vo.length - 1] || null
}
let dr = 1;
function Aa(e) {
    dr += e,
    e < 0 && tt && (tt.hasOnce = !0)
}
function kh(e) {
    return e.dynamicChildren = dr > 0 ? tt || Or : null,
    Eh(),
    dr > 0 && tt && tt.push(e),
    e
}
function se(e, t, n, r, o, s) {
    return kh(Y(e, t, n, r, o, s, !0))
}
function Ke(e, t, n, r, o) {
    return kh(fe(e, t, n, r, o, !0))
}
function jn(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function It(e, t) {
    return e.type === t.type && e.key === t.key
}
function L1(e) {}
const Th = ({key: e}) => e ?? null
  , Ps = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? Me(e) || Ye(e) || ie(e) ? {
    i: We,
    r: e,
    k: t,
    f: !!n
} : e : null);
function Y(e, t=null, n=null, r=0, o=null, s=e === He ? 0 : 1, i=!1, a=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Th(t),
        ref: t && Ps(t),
        scopeId: Ci,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: We
    };
    return a ? (Vc(c, n),
    s & 128 && e.normalize(c)) : n && (c.shapeFlag |= Me(n) ? 8 : 16),
    dr > 0 && !i && tt && (c.patchFlag > 0 || s & 6) && c.patchFlag !== 32 && tt.push(c),
    c
}
const fe = B1;
function B1(e, t=null, n=null, r=0, o=null, s=!1) {
    if ((!e || e === Gd) && (e = ze),
    jn(e)) {
        const a = Gt(e, t, !0);
        return n && Vc(a, n),
        dr > 0 && !s && tt && (a.shapeFlag & 6 ? tt[tt.indexOf(e)] = a : tt.push(a)),
        a.patchFlag = -2,
        a
    }
    if (z1(e) && (e = e.__vccOpts),
    t) {
        t = xh(t);
        let {class: a, style: c} = t;
        a && !Me(a) && (t.class = rn(a)),
        ke(c) && (Sc(c) && !Q(c) && (c = Le({}, c)),
        t.style = Qo(c))
    }
    const i = Me(e) ? 1 : Ta(e) ? 128 : p1(e) ? 64 : ke(e) ? 4 : ie(e) ? 2 : 0;
    return Y(e, t, n, r, o, i, s, !0)
}
function xh(e) {
    return e ? Sc(e) || eh(e) ? Le({}, e) : e : null
}
function Gt(e, t, n=!1, r=!1) {
    const {props: o, ref: s, patchFlag: i, children: a, transition: c} = e
      , l = t ? Ah(o || {}, t) : o
      , u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && Th(l),
        ref: t && t.ref ? n && s ? Q(s) ? s.concat(Ps(t)) : [s, Ps(t)] : Ps(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== He ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Gt(e.ssContent),
        ssFallback: e.ssFallback && Gt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && r && Bn(u, c.clone(u)),
    u
}
function Uc(e=" ", t=0) {
    return fe(Pn, null, e, t)
}
function j1(e, t) {
    const n = fe(ir, null, e);
    return n.staticCount = t,
    n
}
function pt(e="", t=!1) {
    return t ? (G(),
    Ke(ze, null, e)) : fe(ze, null, e)
}
function ft(e) {
    return e == null || typeof e == "boolean" ? fe(ze) : Q(e) ? fe(He, null, e.slice()) : typeof e == "object" ? mn(e) : fe(Pn, null, String(e))
}
function mn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gt(e)
}
function Vc(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (Q(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            Vc(e, o()),
            o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !eh(t) ? t._ctx = We : o === 3 && We && (We.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        ie(t) ? (t = {
            default: t,
            _ctx: We
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Uc(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Ah(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class")
                t.class !== r.class && (t.class = rn([t.class, r.class]));
            else if (o === "style")
                t.style = Qo([t.style, r.style]);
            else if (Zo(o)) {
                const s = t[o]
                  , i = r[o];
                i && s !== i && !(Q(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i)
            } else
                o !== "" && (t[o] = r[o])
    }
    return t
}
function ut(e, t, n, r=null) {
    _t(e, t, 7, [n, r])
}
const N1 = Yd();
let D1 = 0;
function Rh(e, t, n) {
    const r = e.type
      , o = (t ? t.appContext : e.appContext) || N1
      , s = {
        uid: D1++,
        vnode: e,
        type: r,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new bc(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: nh(r, o),
        emitsOptions: wh(r, o),
        emit: null,
        emitted: null,
        propsDefaults: ve,
        inheritAttrs: r.inheritAttrs,
        ctx: ve,
        data: ve,
        props: ve,
        attrs: ve,
        slots: ve,
        refs: ve,
        setupState: ve,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return s.ctx = {
        _: s
    },
    s.root = t ? t.root : s,
    s.emit = E1.bind(null, s),
    e.ce && e.ce(s),
    s
}
let qe = null;
const mt = () => qe || We;
let Ks, Ra;
{
    const e = ld()
      , t = (n, r) => {
        let o;
        return (o = e[n]) || (o = e[n] = []),
        o.push(r),
        s => {
            o.length > 1 ? o.forEach(i => i(s)) : o[0](s)
        }
    }
    ;
    Ks = t("__VUE_INSTANCE_SETTERS__", n => qe = n),
    Ra = t("__VUE_SSR_SETTERS__", n => ns = n)
}
const hr = e => {
    const t = qe;
    return Ks(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Ks(t)
    }
}
  , Oa = () => {
    qe && qe.scope.off(),
    Ks(null)
}
;
function Oh(e) {
    return e.vnode.shapeFlag & 4
}
let ns = !1;
function Ph(e, t=!1, n=!1) {
    t && Ra(t);
    const {props: r, children: o} = e.vnode
      , s = Oh(e);
    c1(e, r, s, t),
    d1(e, o, n);
    const i = s ? F1(e, t) : void 0;
    return t && Ra(!1),
    i
}
function F1(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,wa);
    const {setup: r} = n;
    if (r) {
        const o = e.setupContext = r.length > 1 ? Mh(e) : null
          , s = hr(e);
        Dn();
        const i = sn(r, e, 0, [e.props, o]);
        if (Fn(),
        s(),
        mc(i)) {
            if (i.then(Oa, Oa),
            t)
                return i.then(a => {
                    Pa(e, a, t)
                }
                ).catch(a => {
                    br(a, e, 0)
                }
                );
            e.asyncDep = i
        } else
            Pa(e, i, t)
    } else
        $h(e, t)
}
function Pa(e, t, n) {
    ie(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ke(t) && (e.setupState = Tc(t)),
    $h(e, n)
}
let qs, $a;
function H1(e) {
    qs = e,
    $a = t => {
        t.render._rc && (t.withProxy = new Proxy(t.ctx,H0))
    }
}
const U1 = () => !qs;
function $h(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && qs && !r.render) {
            const o = r.template || Lc(e).template;
            if (o) {
                const {isCustomElement: s, compilerOptions: i} = e.appContext.config
                  , {delimiters: a, compilerOptions: c} = r
                  , l = Le(Le({
                    isCustomElement: s,
                    delimiters: a
                }, i), c);
                r.render = qs(o, l)
            }
        }
        e.render = r.render || ht,
        $a && $a(e)
    }
    {
        const o = hr(e);
        Dn();
        try {
            t1(e)
        } finally {
            Fn(),
            o()
        }
    }
}
const V1 = {
    get(e, t) {
        return gt(e, "get", ""),
        e[t]
    }
};
function Mh(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,V1),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function rs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Tc(Ad(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in yo)
                return yo[n](e)
        },
        has(t, n) {
            return n in t || n in yo
        }
    })) : e.proxy
}
function Ma(e, t=!0) {
    return ie(e) ? e.displayName || e.name : e.name || t && e.__name
}
function z1(e) {
    return ie(e) && "__vccOpts"in e
}
const vt = (e, t) => p0(e, t, ns);
function pe(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ke(t) && !Q(t) ? jn(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && jn(n) && (n = [n]),
    fe(e, t, n))
}
function K1() {}
function q1(e, t, n, r) {
    const o = n[r];
    if (o && Ih(o, e))
        return o;
    const s = t();
    return s.memo = e.slice(),
    s.cacheIndex = r,
    n[r] = s
}
function Ih(e, t) {
    const n = e.memo;
    if (n.length != t.length)
        return !1;
    for (let r = 0; r < n.length; r++)
        if (lt(n[r], t[r]))
            return !1;
    return dr > 0 && tt && tt.push(e),
    !0
}
const zc = "3.4.38"
  , W1 = ht
  , G1 = T0
  , J1 = Er
  , Z1 = Bd
  , Y1 = {
    createComponentInstance: Rh,
    setupComponent: Ph,
    renderComponentRoot: Os,
    setCurrentRenderingInstance: Ro,
    isVNode: jn,
    normalizeVNode: ft,
    getComponentPublicInstance: rs,
    ensureValidVNode: Ic
}
  , Q1 = Y1
  , X1 = null
  , eb = null
  , tb = null;
/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const nb = "http://www.w3.org/2000/svg"
  , rb = "http://www.w3.org/1998/Math/MathML"
  , Zt = typeof document < "u" ? document : null
  , Xl = Zt && Zt.createElement("template")
  , ob = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const o = t === "svg" ? Zt.createElementNS(nb, e) : t === "mathml" ? Zt.createElementNS(rb, e) : n ? Zt.createElement(e, {
            is: n
        }) : Zt.createElement(e);
        return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple),
        o
    }
    ,
    createText: e => Zt.createTextNode(e),
    createComment: e => Zt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Zt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, o, s) {
        const i = n ? n.previousSibling : t.lastChild;
        if (o && (o === s || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling)); )
                ;
        else {
            Xl.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const a = Xl.content;
            if (r === "svg" || r === "mathml") {
                const c = a.firstChild;
                for (; c.firstChild; )
                    a.appendChild(c.firstChild);
                a.removeChild(c)
            }
            t.insertBefore(a, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , dn = "transition"
  , ro = "animation"
  , Gr = Symbol("_vtc")
  , os = (e, {slots: t}) => pe(Fd, Bh(e), t);
os.displayName = "Transition";
const Lh = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , sb = os.props = Le({}, Rc, Lh)
  , zn = (e, t=[]) => {
    Q(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , eu = e => e ? Q(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function Bh(e) {
    const t = {};
    for (const _ in e)
        _ in Lh || (t[_] = e[_]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: o, enterFromClass: s=`${n}-enter-from`, enterActiveClass: i=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: c=s, appearActiveClass: l=i, appearToClass: u=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: h=`${n}-leave-to`} = e
      , m = ib(o)
      , p = m && m[0]
      , S = m && m[1]
      , {onBeforeEnter: k, onEnter: y, onEnterCancelled: g, onLeave: w, onLeaveCancelled: T, onBeforeAppear: A=k, onAppear: $=y, onAppearCancelled: N=g} = t
      , I = (_, x, O) => {
        hn(_, x ? u : a),
        hn(_, x ? l : i),
        O && O()
    }
      , C = (_, x) => {
        _._isLeaving = !1,
        hn(_, f),
        hn(_, h),
        hn(_, d),
        x && x()
    }
      , v = _ => (x, O) => {
        const L = _ ? $ : y
          , P = () => I(x, _, O);
        zn(L, [x, P]),
        tu( () => {
            hn(x, _ ? c : s),
            Jt(x, _ ? u : a),
            eu(L) || nu(x, r, p, P)
        }
        )
    }
    ;
    return Le(t, {
        onBeforeEnter(_) {
            zn(k, [_]),
            Jt(_, s),
            Jt(_, i)
        },
        onBeforeAppear(_) {
            zn(A, [_]),
            Jt(_, c),
            Jt(_, l)
        },
        onEnter: v(!1),
        onAppear: v(!0),
        onLeave(_, x) {
            _._isLeaving = !0;
            const O = () => C(_, x);
            Jt(_, f),
            Jt(_, d),
            Nh(),
            tu( () => {
                _._isLeaving && (hn(_, f),
                Jt(_, h),
                eu(w) || nu(_, r, S, O))
            }
            ),
            zn(w, [_, O])
        },
        onEnterCancelled(_) {
            I(_, !1),
            zn(g, [_])
        },
        onAppearCancelled(_) {
            I(_, !0),
            zn(N, [_])
        },
        onLeaveCancelled(_) {
            C(_),
            zn(T, [_])
        }
    })
}
function ib(e) {
    if (e == null)
        return null;
    if (ke(e))
        return [Gi(e.enter), Gi(e.leave)];
    {
        const t = Gi(e);
        return [t, t]
    }
}
function Gi(e) {
    return Ns(e)
}
function Jt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[Gr] || (e[Gr] = new Set)).add(t)
}
function hn(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Gr];
    n && (n.delete(t),
    n.size || (e[Gr] = void 0))
}
function tu(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let ab = 0;
function nu(e, t, n, r) {
    const o = e._endId = ++ab
      , s = () => {
        o === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(s, n);
    const {type: i, timeout: a, propCount: c} = jh(e, t);
    if (!i)
        return r();
    const l = i + "end";
    let u = 0;
    const f = () => {
        e.removeEventListener(l, d),
        s()
    }
      , d = h => {
        h.target === e && ++u >= c && f()
    }
    ;
    setTimeout( () => {
        u < c && f()
    }
    , a + 1),
    e.addEventListener(l, d)
}
function jh(e, t) {
    const n = window.getComputedStyle(e)
      , r = m => (n[m] || "").split(", ")
      , o = r(`${dn}Delay`)
      , s = r(`${dn}Duration`)
      , i = ru(o, s)
      , a = r(`${ro}Delay`)
      , c = r(`${ro}Duration`)
      , l = ru(a, c);
    let u = null
      , f = 0
      , d = 0;
    t === dn ? i > 0 && (u = dn,
    f = i,
    d = s.length) : t === ro ? l > 0 && (u = ro,
    f = l,
    d = c.length) : (f = Math.max(i, l),
    u = f > 0 ? i > l ? dn : ro : null,
    d = u ? u === dn ? s.length : c.length : 0);
    const h = u === dn && /\b(transform|all)(,|$)/.test(r(`${dn}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: d,
        hasTransform: h
    }
}
function ru(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, r) => ou(n) + ou(e[r])))
}
function ou(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Nh() {
    return document.body.offsetHeight
}
function cb(e, t, n) {
    const r = e[Gr];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Ws = Symbol("_vod")
  , Dh = Symbol("_vsh")
  , Fh = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Ws] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : oo(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        oo(e, !0),
        r.enter(e)) : r.leave(e, () => {
            oo(e, !1)
        }
        ) : oo(e, t))
    },
    beforeUnmount(e, {value: t}) {
        oo(e, t)
    }
};
function oo(e, t) {
    e.style.display = t ? e[Ws] : "none",
    e[Dh] = !t
}
function lb() {
    Fh.getSSRProps = ({value: e}) => {
        if (!e)
            return {
                style: {
                    display: "none"
                }
            }
    }
}
const Hh = Symbol("");
function ub(e) {
    const t = mt();
    if (!t)
        return;
    const n = t.ut = (o=e(t.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(s => La(s, o))
    }
      , r = () => {
        const o = e(t.proxy);
        Ia(t.subTree, o),
        n(o)
    }
    ;
    xi( () => {
        yh(r)
    }
    ),
    Un( () => {
        const o = new MutationObserver(r);
        o.observe(t.subTree.el.parentNode, {
            childList: !0
        }),
        es( () => o.disconnect())
    }
    )
}
function Ia(e, t) {
    if (e.shapeFlag & 128) {
        const n = e.suspense;
        e = n.activeBranch,
        n.pendingBranch && !n.isHydrating && n.effects.push( () => {
            Ia(n.activeBranch, t)
        }
        )
    }
    for (; e.component; )
        e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el)
        La(e.el, t);
    else if (e.type === He)
        e.children.forEach(n => Ia(n, t));
    else if (e.type === ir) {
        let {el: n, anchor: r} = e;
        for (; n && (La(n, t),
        n !== r); )
            n = n.nextSibling
    }
}
function La(e, t) {
    if (e.nodeType === 1) {
        const n = e.style;
        let r = "";
        for (const o in t)
            n.setProperty(`--${o}`, t[o]),
            r += `--${o}: ${t[o]};`;
        n[Hh] = r
    }
}
const fb = /(^|;)\s*display\s*:/;
function db(e, t, n) {
    const r = e.style
      , o = Me(n);
    let s = !1;
    if (n && !o) {
        if (t)
            if (Me(t))
                for (const i of t.split(";")) {
                    const a = i.slice(0, i.indexOf(":")).trim();
                    n[a] == null && $s(r, a, "")
                }
            else
                for (const i in t)
                    n[i] == null && $s(r, i, "");
        for (const i in n)
            i === "display" && (s = !0),
            $s(r, i, n[i])
    } else if (o) {
        if (t !== n) {
            const i = r[Hh];
            i && (n += ";" + i),
            r.cssText = n,
            s = fb.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Ws in e && (e[Ws] = s ? r.display : "",
    e[Dh] && (r.display = "none"))
}
const su = /\s*!important$/;
function $s(e, t, n) {
    if (Q(n))
        n.forEach(r => $s(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = hb(e, t);
        su.test(n) ? e.setProperty(dt(r), n.replace(su, ""), "important") : e[r] = n
    }
}
const iu = ["Webkit", "Moz", "ms"]
  , Ji = {};
function hb(e, t) {
    const n = Ji[t];
    if (n)
        return n;
    let r = nt(t);
    if (r !== "filter" && r in e)
        return Ji[t] = r;
    r = Yo(r);
    for (let o = 0; o < iu.length; o++) {
        const s = iu[o] + r;
        if (s in e)
            return Ji[t] = s
    }
    return t
}
const au = "http://www.w3.org/1999/xlink";
function cu(e, t, n, r, o, s=Vy(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(au, t.slice(6, t.length)) : e.setAttributeNS(au, t, n) : n == null || s && !ud(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : Wt(n) ? String(n) : n)
}
function pb(e, t, n, r) {
    if (t === "innerHTML" || t === "textContent") {
        if (n == null)
            return;
        e[t] = n;
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const i = o === "OPTION" ? e.getAttribute("value") || "" : e.value
          , a = n == null ? "" : String(n);
        (i !== a || !("_value"in e)) && (e.value = a),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let s = !1;
    if (n === "" || n == null) {
        const i = typeof e[t];
        i === "boolean" ? n = ud(n) : n == null && i === "string" ? (n = "",
        s = !0) : i === "number" && (n = 0,
        s = !0)
    }
    try {
        e[t] = n
    } catch {}
    s && e.removeAttribute(t)
}
function tn(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function gb(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const lu = Symbol("_vei");
function mb(e, t, n, r, o=null) {
    const s = e[lu] || (e[lu] = {})
      , i = s[t];
    if (r && i)
        i.value = r;
    else {
        const [a,c] = yb(t);
        if (r) {
            const l = s[t] = _b(r, o);
            tn(e, a, l, c)
        } else
            i && (gb(e, a, i, c),
            s[t] = void 0)
    }
}
const uu = /(?:Once|Passive|Capture)$/;
function yb(e) {
    let t;
    if (uu.test(e)) {
        t = {};
        let r;
        for (; r = e.match(uu); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : dt(e.slice(2)), t]
}
let Zi = 0;
const bb = Promise.resolve()
  , vb = () => Zi || (bb.then( () => Zi = 0),
Zi = Date.now());
function _b(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        _t(wb(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = vb(),
    n
}
function wb(e, t) {
    if (Q(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => o => !o._stopped && r && r(o))
    } else
        return t
}
const fu = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Cb = (e, t, n, r, o, s) => {
    const i = o === "svg";
    t === "class" ? cb(e, r, i) : t === "style" ? db(e, n, r) : Zo(t) ? pc(t) || mb(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Sb(e, t, r, i)) ? (pb(e, t, r),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && cu(e, t, r, i, s, t !== "value")) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    cu(e, t, r, i))
}
;
function Sb(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && fu(t) && ie(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const o = e.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
            return !1
    }
    return fu(t) && Me(n) ? !1 : t in e
}
/*! #__NO_SIDE_EFFECTS__ */
function Uh(e, t, n) {
    const r = Ct(e, t);
    class o extends Pi {
        constructor(i) {
            super(r, i, n)
        }
    }
    return o.def = r,
    o
}
/*! #__NO_SIDE_EFFECTS__ */
const Eb = (e, t) => Uh(e, t, Xh)
  , kb = typeof HTMLElement < "u" ? HTMLElement : class {
}
;
class Pi extends kb {
    constructor(t, n={}, r) {
        super(),
        this._def = t,
        this._props = n,
        this._instance = null,
        this._connected = !1,
        this._resolved = !1,
        this._numberProps = null,
        this._ob = null,
        this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({
            mode: "open"
        }),
        this._def.__asyncLoader || this._resolveProps(this._def))
    }
    connectedCallback() {
        this._connected = !0,
        this._instance || (this._resolved ? this._update() : this._resolveDef())
    }
    disconnectedCallback() {
        this._connected = !1,
        Hn( () => {
            this._connected || (this._ob && (this._ob.disconnect(),
            this._ob = null),
            Ba(null, this.shadowRoot),
            this._instance = null)
        }
        )
    }
    _resolveDef() {
        this._resolved = !0;
        for (let r = 0; r < this.attributes.length; r++)
            this._setAttr(this.attributes[r].name);
        this._ob = new MutationObserver(r => {
            for (const o of r)
                this._setAttr(o.attributeName)
        }
        ),
        this._ob.observe(this, {
            attributes: !0
        });
        const t = (r, o=!1) => {
            const {props: s, styles: i} = r;
            let a;
            if (s && !Q(s))
                for (const c in s) {
                    const l = s[c];
                    (l === Number || l && l.type === Number) && (c in this._props && (this._props[c] = Ns(this._props[c])),
                    (a || (a = Object.create(null)))[nt(c)] = !0)
                }
            this._numberProps = a,
            o && this._resolveProps(r),
            this._applyStyles(i),
            this._update()
        }
          , n = this._def.__asyncLoader;
        n ? n().then(r => t(r, !0)) : t(this._def)
    }
    _resolveProps(t) {
        const {props: n} = t
          , r = Q(n) ? n : Object.keys(n || {});
        for (const o of Object.keys(this))
            o[0] !== "_" && r.includes(o) && this._setProp(o, this[o], !0, !1);
        for (const o of r.map(nt))
            Object.defineProperty(this, o, {
                get() {
                    return this._getProp(o)
                },
                set(s) {
                    this._setProp(o, s)
                }
            })
    }
    _setAttr(t) {
        let n = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
        const r = nt(t);
        this._numberProps && this._numberProps[r] && (n = Ns(n)),
        this._setProp(r, n, !1)
    }
    _getProp(t) {
        return this._props[t]
    }
    _setProp(t, n, r=!0, o=!0) {
        n !== this._props[t] && (this._props[t] = n,
        o && this._instance && this._update(),
        r && (n === !0 ? this.setAttribute(dt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(dt(t), n + "") : n || this.removeAttribute(dt(t))))
    }
    _update() {
        Ba(this._createVNode(), this.shadowRoot)
    }
    _createVNode() {
        const t = fe(this._def, Le({}, this._props));
        return this._instance || (t.ce = n => {
            this._instance = n,
            n.isCE = !0;
            const r = (s, i) => {
                this.dispatchEvent(new CustomEvent(s,{
                    detail: i
                }))
            }
            ;
            n.emit = (s, ...i) => {
                r(s, i),
                dt(s) !== s && r(dt(s), i)
            }
            ;
            let o = this;
            for (; o = o && (o.parentNode || o.host); )
                if (o instanceof Pi) {
                    n.parent = o._instance,
                    n.provides = o._instance.provides;
                    break
                }
        }
        ),
        t
    }
    _applyStyles(t) {
        t && t.forEach(n => {
            const r = document.createElement("style");
            r.textContent = n,
            this.shadowRoot.appendChild(r)
        }
        )
    }
}
function Tb(e="$style") {
    {
        const t = mt();
        if (!t)
            return ve;
        const n = t.type.__cssModules;
        if (!n)
            return ve;
        const r = n[e];
        return r || ve
    }
}
const Vh = new WeakMap
  , zh = new WeakMap
  , Gs = Symbol("_moveCb")
  , du = Symbol("_enterCb")
  , Kh = {
    name: "TransitionGroup",
    props: Le({}, sb, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const n = mt()
          , r = Ac();
        let o, s;
        return Ai( () => {
            if (!o.length)
                return;
            const i = e.moveClass || `${e.name || "v"}-move`;
            if (!$b(o[0].el, n.vnode.el, i))
                return;
            o.forEach(Rb),
            o.forEach(Ob);
            const a = o.filter(Pb);
            Nh(),
            a.forEach(c => {
                const l = c.el
                  , u = l.style;
                Jt(l, i),
                u.transform = u.webkitTransform = u.transitionDuration = "";
                const f = l[Gs] = d => {
                    d && d.target !== l || (!d || /transform$/.test(d.propertyName)) && (l.removeEventListener("transitionend", f),
                    l[Gs] = null,
                    hn(l, i))
                }
                ;
                l.addEventListener("transitionend", f)
            }
            )
        }
        ),
        () => {
            const i = me(e)
              , a = Bh(i);
            let c = i.tag || He;
            if (o = [],
            s)
                for (let l = 0; l < s.length; l++) {
                    const u = s[l];
                    u.el && u.el instanceof Element && (o.push(u),
                    Bn(u, Wr(u, a, r, n)),
                    Vh.set(u, u.el.getBoundingClientRect()))
                }
            s = t.default ? Si(t.default()) : [];
            for (let l = 0; l < s.length; l++) {
                const u = s[l];
                u.key != null && Bn(u, Wr(u, a, r, n))
            }
            return fe(c, null, s)
        }
    }
}
  , xb = e => delete e.mode;
Kh.props;
const Ab = Kh;
function Rb(e) {
    const t = e.el;
    t[Gs] && t[Gs](),
    t[du] && t[du]()
}
function Ob(e) {
    zh.set(e, e.el.getBoundingClientRect())
}
function Pb(e) {
    const t = Vh.get(e)
      , n = zh.get(e)
      , r = t.left - n.left
      , o = t.top - n.top;
    if (r || o) {
        const s = e.el.style;
        return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`,
        s.transitionDuration = "0s",
        e
    }
}
function $b(e, t, n) {
    const r = e.cloneNode()
      , o = e[Gr];
    o && o.forEach(a => {
        a.split(/\s+/).forEach(c => c && r.classList.remove(c))
    }
    ),
    n.split(/\s+/).forEach(a => a && r.classList.add(a)),
    r.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(r);
    const {hasTransform: i} = jh(r);
    return s.removeChild(r),
    i
}
const Nn = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return Q(t) ? n => Mr(t, n) : t
}
;
function Mb(e) {
    e.target.composing = !0
}
function hu(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const At = Symbol("_assign")
  , Js = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, o) {
        e[At] = Nn(o);
        const s = r || o.props && o.props.type === "number";
        tn(e, t ? "change" : "input", i => {
            if (i.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            s && (a = js(a)),
            e[At](a)
        }
        ),
        n && tn(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (tn(e, "compositionstart", Mb),
        tn(e, "compositionend", hu),
        tn(e, "change", hu))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: o, number: s}}, i) {
        if (e[At] = Nn(i),
        e.composing)
            return;
        const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? js(e.value) : e.value
          , c = t ?? "";
        a !== c && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === c) || (e.value = c))
    }
}
  , Kc = {
    deep: !0,
    created(e, t, n) {
        e[At] = Nn(n),
        tn(e, "change", () => {
            const r = e._modelValue
              , o = Jr(e)
              , s = e.checked
              , i = e[At];
            if (Q(r)) {
                const a = gi(r, o)
                  , c = a !== -1;
                if (s && !c)
                    i(r.concat(o));
                else if (!s && c) {
                    const l = [...r];
                    l.splice(a, 1),
                    i(l)
                }
            } else if (yr(r)) {
                const a = new Set(r);
                s ? a.add(o) : a.delete(o),
                i(a)
            } else
                i(Wh(e, s))
        }
        )
    },
    mounted: pu,
    beforeUpdate(e, t, n) {
        e[At] = Nn(n),
        pu(e, t, n)
    }
};
function pu(e, {value: t, oldValue: n}, r) {
    e._modelValue = t,
    Q(t) ? e.checked = gi(t, r.props.value) > -1 : yr(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = In(t, Wh(e, !0)))
}
const qc = {
    created(e, {value: t}, n) {
        e.checked = In(t, n.props.value),
        e[At] = Nn(n),
        tn(e, "change", () => {
            e[At](Jr(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: n}, r) {
        e[At] = Nn(r),
        t !== n && (e.checked = In(t, r.props.value))
    }
}
  , qh = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, r) {
        const o = yr(t);
        tn(e, "change", () => {
            const s = Array.prototype.filter.call(e.options, i => i.selected).map(i => n ? js(Jr(i)) : Jr(i));
            e[At](e.multiple ? o ? new Set(s) : s : s[0]),
            e._assigning = !0,
            Hn( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[At] = Nn(r)
    },
    mounted(e, {value: t, modifiers: {number: n}}) {
        gu(e, t)
    },
    beforeUpdate(e, t, n) {
        e[At] = Nn(n)
    },
    updated(e, {value: t, modifiers: {number: n}}) {
        e._assigning || gu(e, t)
    }
};
function gu(e, t, n) {
    const r = e.multiple
      , o = Q(t);
    if (!(r && !o && !yr(t))) {
        for (let s = 0, i = e.options.length; s < i; s++) {
            const a = e.options[s]
              , c = Jr(a);
            if (r)
                if (o) {
                    const l = typeof c;
                    l === "string" || l === "number" ? a.selected = t.some(u => String(u) === String(c)) : a.selected = gi(t, c) > -1
                } else
                    a.selected = t.has(c);
            else if (In(Jr(a), t)) {
                e.selectedIndex !== s && (e.selectedIndex = s);
                return
            }
        }
        !r && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function Jr(e) {
    return "_value"in e ? e._value : e.value
}
function Wh(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const Gh = {
    created(e, t, n) {
        Ss(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        Ss(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        Ss(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        Ss(e, t, n, r, "updated")
    }
};
function Jh(e, t) {
    switch (e) {
    case "SELECT":
        return qh;
    case "TEXTAREA":
        return Js;
    default:
        switch (t) {
        case "checkbox":
            return Kc;
        case "radio":
            return qc;
        default:
            return Js
        }
    }
}
function Ss(e, t, n, r, o) {
    const i = Jh(e.tagName, n.props && n.props.type)[o];
    i && i(e, t, n, r)
}
function Ib() {
    Js.getSSRProps = ({value: e}) => ({
        value: e
    }),
    qc.getSSRProps = ({value: e}, t) => {
        if (t.props && In(t.props.value, e))
            return {
                checked: !0
            }
    }
    ,
    Kc.getSSRProps = ({value: e}, t) => {
        if (Q(e)) {
            if (t.props && gi(e, t.props.value) > -1)
                return {
                    checked: !0
                }
        } else if (yr(e)) {
            if (t.props && e.has(t.props.value))
                return {
                    checked: !0
                }
        } else if (e)
            return {
                checked: !0
            }
    }
    ,
    Gh.getSSRProps = (e, t) => {
        if (typeof t.type != "string")
            return;
        const n = Jh(t.type.toUpperCase(), t.props && t.props.type);
        if (n.getSSRProps)
            return n.getSSRProps(e, t)
    }
}
const Lb = ["ctrl", "shift", "alt", "meta"]
  , Bb = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => Lb.some(n => e[`${n}Key`] && !t.includes(n))
}
  , jb = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (o, ...s) => {
        for (let i = 0; i < t.length; i++) {
            const a = Bb[t[i]];
            if (a && a(o, t))
                return
        }
        return e(o, ...s)
    }
    )
}
  , Nb = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , Db = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = o => {
        if (!("key"in o))
            return;
        const s = dt(o.key);
        if (t.some(i => i === s || Nb[i] === s))
            return e(o)
    }
    )
}
  , Zh = Le({
    patchProp: Cb
}, ob);
let _o, mu = !1;
function Yh() {
    return _o || (_o = uh(Zh))
}
function Qh() {
    return _o = mu ? _o : fh(Zh),
    mu = !0,
    _o
}
const Ba = (...e) => {
    Yh().render(...e)
}
  , Xh = (...e) => {
    Qh().hydrate(...e)
}
  , ep = (...e) => {
    const t = Yh().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const o = rp(r);
        if (!o)
            return;
        const s = t._component;
        !ie(s) && !s.render && !s.template && (s.template = o.innerHTML),
        o.innerHTML = "";
        const i = n(o, !1, np(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
  , tp = (...e) => {
    const t = Qh().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const o = rp(r);
        if (o)
            return n(o, !0, np(o))
    }
    ,
    t
}
;
function np(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function rp(e) {
    return Me(e) ? document.querySelector(e) : e
}
let yu = !1;
const Fb = () => {
    yu || (yu = !0,
    Ib(),
    lb())
}
;
/**
* vue v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Hb = () => {}
  , Ub = Object.freeze(Object.defineProperty({
    __proto__: null,
    BaseTransition: Fd,
    BaseTransitionPropsValidators: Rc,
    Comment: ze,
    DeprecationTypes: tb,
    EffectScope: bc,
    ErrorCodes: k0,
    ErrorTypeStrings: G1,
    Fragment: He,
    KeepAlive: Ud,
    ReactiveEffect: qr,
    Static: ir,
    Suspense: Hc,
    Teleport: y1,
    Text: Pn,
    TrackOpTypes: C0,
    Transition: os,
    TransitionGroup: Ab,
    TriggerOpTypes: S0,
    VueElement: Pi,
    assertNumber: E0,
    callWithAsyncErrorHandling: _t,
    callWithErrorHandling: sn,
    camelize: nt,
    capitalize: Yo,
    cloneVNode: Gt,
    compatUtils: eb,
    compile: Hb,
    computed: vt,
    createApp: ep,
    createBlock: Ke,
    createCommentVNode: pt,
    createElementBlock: se,
    createElementVNode: Y,
    createHydrationRenderer: fh,
    createPropsRestProxy: X0,
    createRenderer: uh,
    createSSRApp: tp,
    createSlots: N0,
    createStaticVNode: j1,
    createTextVNode: Uc,
    createVNode: fe,
    customRef: Pd,
    defineAsyncComponent: Ee,
    defineComponent: Ct,
    defineCustomElement: Uh,
    defineEmits: V0,
    defineExpose: z0,
    defineModel: W0,
    defineOptions: K0,
    defineProps: U0,
    defineSSRCustomElement: Eb,
    defineSlots: q0,
    devtools: J1,
    effect: qy,
    effectScope: hd,
    getCurrentInstance: mt,
    getCurrentScope: mi,
    getTransitionRawChildren: Si,
    guardReactiveProps: xh,
    h: pe,
    handleError: br,
    hasInjectionContext: Bc,
    hydrate: Xh,
    initCustomFormatter: K1,
    initDirectivesForSSR: Fb,
    inject: rt,
    isMemoSame: Ih,
    isProxy: Sc,
    isReactive: nr,
    isReadonly: an,
    isRef: Ye,
    isRuntimeOnly: U1,
    isShallow: ur,
    isVNode: jn,
    markRaw: Ad,
    mergeDefaults: Y0,
    mergeModels: Q0,
    mergeProps: Ah,
    nextTick: Hn,
    normalizeClass: rn,
    normalizeProps: Hy,
    normalizeStyle: Qo,
    onActivated: Ei,
    onBeforeMount: xi,
    onBeforeUnmount: vr,
    onBeforeUpdate: zd,
    onDeactivated: ki,
    onErrorCaptured: Oc,
    onMounted: Un,
    onRenderTracked: Wd,
    onRenderTriggered: qd,
    onScopeDispose: lr,
    onServerPrefetch: Kd,
    onUnmounted: es,
    onUpdated: Ai,
    openBlock: G,
    popScopeId: Nd,
    provide: sr,
    proxyRefs: Tc,
    pushScopeId: jd,
    queuePostFlushCb: Fs,
    reactive: wt,
    readonly: Cc,
    ref: $e,
    registerRuntimeCompiler: H1,
    render: Ba,
    renderList: va,
    renderSlot: D0,
    resolveComponent: $c,
    resolveDirective: j0,
    resolveDynamicComponent: Ri,
    resolveFilter: X1,
    resolveTransitionHooks: Wr,
    setBlockTracking: Aa,
    setDevtoolsHook: Z1,
    setTransitionHooks: Bn,
    shallowReactive: qt,
    shallowReadonly: h0,
    shallowRef: fr,
    ssrContextKey: gh,
    ssrUtils: Q1,
    stop: Wy,
    toDisplayString: xt,
    toHandlerKey: mo,
    toHandlers: F0,
    toRaw: me,
    toRef: _i,
    toRefs: v0,
    toValue: _n,
    transformVNodeArgs: L1,
    triggerRef: m0,
    unref: ce,
    useAttrs: Z0,
    useCssModule: Tb,
    useCssVars: ub,
    useModel: S1,
    useSSRContext: mh,
    useSlots: J0,
    useTransitionState: Ac,
    vModelCheckbox: Kc,
    vModelDynamic: Gh,
    vModelRadio: qc,
    vModelSelect: qh,
    vModelText: Js,
    vShow: Fh,
    version: zc,
    warn: W1,
    watch: Lt,
    watchEffect: Dc,
    watchPostEffect: yh,
    watchSyncEffect: bh,
    withAsyncContext: e1,
    withCtx: Ln,
    withDefaults: G0,
    withDirectives: $0,
    withKeys: Db,
    withMemo: q1,
    withModifiers: jb,
    withScopeId: P0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Vb = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , zb = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Kb = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function qb(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        Wb(e);
        return
    }
    return t
}
function Wb(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function Zs(e, t={}) {
    if (typeof e != "string")
        return e;
    const n = e.trim();
    if (e[0] === '"' && e.endsWith('"') && !e.includes("\\"))
        return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true")
            return !0;
        if (r === "false")
            return !1;
        if (r === "undefined")
            return;
        if (r === "null")
            return null;
        if (r === "nan")
            return Number.NaN;
        if (r === "infinity")
            return Number.POSITIVE_INFINITY;
        if (r === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!Kb.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Vb.test(e) || zb.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, qb)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
const Gb = /#/g
  , Jb = /&/g
  , Zb = /\//g
  , Yb = /=/g
  , Wc = /\+/g
  , Qb = /%5e/gi
  , Xb = /%60/gi
  , ev = /%7c/gi
  , tv = /%20/gi;
function nv(e) {
    return encodeURI("" + e).replace(ev, "|")
}
function ja(e) {
    return nv(typeof e == "string" ? e : JSON.stringify(e)).replace(Wc, "%2B").replace(tv, "+").replace(Gb, "%23").replace(Jb, "%26").replace(Xb, "`").replace(Qb, "^").replace(Zb, "%2F")
}
function Yi(e) {
    return ja(e).replace(Yb, "%3D")
}
function Ys(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function rv(e) {
    return Ys(e.replace(Wc, " "))
}
function ov(e) {
    return Ys(e.replace(Wc, " "))
}
function sv(e="") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const o = rv(r[1]);
        if (o === "__proto__" || o === "constructor")
            continue;
        const s = ov(r[2] || "");
        t[o] === void 0 ? t[o] = s : Array.isArray(t[o]) ? t[o].push(s) : t[o] = [t[o], s]
    }
    return t
}
function iv(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n => `${Yi(e)}=${ja(n)}`).join("&") : `${Yi(e)}=${ja(t)}` : Yi(e)
}
function av(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => iv(t, e[t])).filter(Boolean).join("&")
}
const cv = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , lv = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , uv = /^([/\\]\s*){2,}[^/\\]/
  , fv = /^\.?\//;
function eo(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? cv.test(e) : lv.test(e) || (t.acceptRelative ? uv.test(e) : !1)
}
function dv(e="", t) {
    return e.endsWith("/")
}
function Gc(e="", t) {
    return (dv(e) ? e.slice(0, -1) : e) || "/"
}
function Na(e="", t) {
    return e.endsWith("/") ? e : e + "/"
}
function hv(e="") {
    return e.startsWith("/")
}
function bu(e="") {
    return hv(e) ? e : "/" + e
}
function pv(e, t) {
    if (sp(t) || eo(e))
        return e;
    const n = Gc(t);
    return e.startsWith(n) ? e : Jc(n, e)
}
function vu(e, t) {
    if (sp(t))
        return e;
    const n = Gc(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function op(e, t) {
    const n = yv(e)
      , r = {
        ...sv(n.search),
        ...t
    };
    return n.search = av(r),
    bv(n)
}
function sp(e) {
    return !e || e === "/"
}
function gv(e) {
    return e && e !== "/"
}
function Jc(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o => gv(o)))
        if (n) {
            const o = r.replace(fv, "");
            n = Na(n) + o
        } else
            n = r;
    return n
}
function ip(...e) {
    var i, a, c, l;
    const t = /\/(?!\/)/
      , n = e.filter(Boolean)
      , r = [];
    let o = 0;
    for (const u of n)
        if (!(!u || u === "/")) {
            for (const [f,d] of u.split(t).entries())
                if (!(!d || d === ".")) {
                    if (d === "..") {
                        if (r.length === 1 && eo(r[0]))
                            continue;
                        r.pop(),
                        o--;
                        continue
                    }
                    if (f === 1 && ((i = r[r.length - 1]) != null && i.endsWith(":/"))) {
                        r[r.length - 1] += "/" + d;
                        continue
                    }
                    r.push(d),
                    o++
                }
        }
    let s = r.join("/");
    return o >= 0 ? (a = n[0]) != null && a.startsWith("/") && !s.startsWith("/") ? s = "/" + s : (c = n[0]) != null && c.startsWith("./") && !s.startsWith("./") && (s = "./" + s) : s = "../".repeat(-1 * o) + s,
    (l = n[n.length - 1]) != null && l.endsWith("/") && !s.endsWith("/") && (s += "/"),
    s
}
function mv(e, t, n={}) {
    return n.trailingSlash || (e = Na(e),
    t = Na(t)),
    n.leadingSlash || (e = bu(e),
    t = bu(t)),
    n.encoding || (e = Ys(e),
    t = Ys(t)),
    e === t
}
const ap = Symbol.for("ufo:protocolRelative");
function yv(e="", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [,f,d=""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!eo(e, {
        acceptRelative: !0
    }))
        return _u(e);
    const [,r="",o,s=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let[,i="",a=""] = s.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const {pathname: c, search: l, hash: u} = _u(a);
    return {
        protocol: r.toLowerCase(),
        auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
        host: i,
        pathname: c,
        search: l,
        hash: u,
        [ap]: !r
    }
}
function _u(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function bv(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , o = e.auth ? e.auth + "@" : ""
      , s = e.host || "";
    return (e.protocol || e[ap] ? (e.protocol || "") + "//" : "") + o + s + t + n + r
}
class vv extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function _v(e) {
    var c, l, u, f, d;
    const t = ((c = e.error) == null ? void 0 : c.message) || ((l = e.error) == null ? void 0 : l.toString()) || ""
      , n = ((u = e.request) == null ? void 0 : u.method) || ((f = e.options) == null ? void 0 : f.method) || "GET"
      , r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/"
      , o = `[${n}] ${JSON.stringify(r)}`
      , s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , i = `${o}: ${s}${t ? ` ${t}` : ""}`
      , a = new vv(i,e.error ? {
        cause: e.error
    } : void 0);
    for (const h of ["request", "options", "response"])
        Object.defineProperty(a, h, {
            get() {
                return e[h]
            }
        });
    for (const [h,m] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(a, h, {
            get() {
                return e.response && e.response[m]
            }
        });
    return a
}
const wv = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function wu(e="GET") {
    return wv.has(e.toUpperCase())
}
function Cv(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const Sv = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , Ev = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function kv(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return Ev.test(t) ? "json" : Sv.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function Tv(e, t, n, r) {
    const o = xv((t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers), n == null ? void 0 : n.headers, r);
    let s;
    return (n != null && n.query || n != null && n.params || t != null && t.params || t != null && t.query) && (s = {
        ...n == null ? void 0 : n.params,
        ...n == null ? void 0 : n.query,
        ...t == null ? void 0 : t.params,
        ...t == null ? void 0 : t.query
    }),
    {
        ...n,
        ...t,
        query: s,
        params: s,
        headers: o
    }
}
function xv(e, t, n) {
    if (!t)
        return new n(e);
    const r = new n(t);
    if (e)
        for (const [o,s] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e))
            r.set(o, s);
    return r
}
async function Es(e, t) {
    if (t)
        if (Array.isArray(t))
            for (const n of t)
                await n(e);
        else
            await t(e)
}
const Av = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , Rv = new Set([101, 204, 205, 304]);
function cp(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function o(a) {
        const c = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !c) {
            let u;
            typeof a.options.retry == "number" ? u = a.options.retry : u = wu(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (u > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : Av.has(f))) {
                const d = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
                return d > 0 && await new Promise(h => setTimeout(h, d)),
                s(a.request, {
                    ...a.options,
                    retry: u - 1
                })
            }
        }
        const l = _v(a);
        throw Error.captureStackTrace && Error.captureStackTrace(l, s),
        l
    }
    const s = async function(c, l={}) {
        const u = {
            request: c,
            options: Tv(c, l, e.defaults, n),
            response: void 0,
            error: void 0
        };
        u.options.method && (u.options.method = u.options.method.toUpperCase()),
        u.options.onRequest && await Es(u, u.options.onRequest),
        typeof u.request == "string" && (u.options.baseURL && (u.request = pv(u.request, u.options.baseURL)),
        u.options.query && (u.request = op(u.request, u.options.query),
        delete u.options.query),
        "query"in u.options && delete u.options.query,
        "params"in u.options && delete u.options.params),
        u.options.body && wu(u.options.method) && (Cv(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body),
        u.options.headers = new n(u.options.headers || {}),
        u.options.headers.has("content-type") || u.options.headers.set("content-type", "application/json"),
        u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")) : ("pipeTo"in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex"in u.options || (u.options.duplex = "half")));
        let f;
        if (!u.options.signal && u.options.timeout) {
            const h = new r;
            f = setTimeout( () => {
                const m = new Error("[TimeoutError]: The operation was aborted due to timeout");
                m.name = "TimeoutError",
                m.code = 23,
                h.abort(m)
            }
            , u.options.timeout),
            u.options.signal = h.signal
        }
        try {
            u.response = await t(u.request, u.options)
        } catch (h) {
            return u.error = h,
            u.options.onRequestError && await Es(u, u.options.onRequestError),
            await o(u)
        } finally {
            f && clearTimeout(f)
        }
        if ((u.response.body || u.response._bodyInit) && !Rv.has(u.response.status) && u.options.method !== "HEAD") {
            const h = (u.options.parseResponse ? "json" : u.options.responseType) || kv(u.response.headers.get("content-type") || "");
            switch (h) {
            case "json":
                {
                    const m = await u.response.text()
                      , p = u.options.parseResponse || Zs;
                    u.response._data = p(m);
                    break
                }
            case "stream":
                {
                    u.response._data = u.response.body || u.response._bodyInit;
                    break
                }
            default:
                u.response._data = await u.response[h]()
            }
        }
        return u.options.onResponse && await Es(u, u.options.onResponse),
        !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await Es(u, u.options.onResponseError),
        await o(u)) : u.response
    }
      , i = async function(c, l) {
        return (await s(c, l))._data
    };
    return i.raw = s,
    i.native = (...a) => t(...a),
    i.create = (a={}, c={}) => cp({
        ...e,
        ...c,
        defaults: {
            ...e.defaults,
            ...c.defaults,
            ...a
        }
    }),
    i
}
const Qs = function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}()
  , Ov = Qs.fetch ? (...e) => Qs.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))
  , Pv = Qs.Headers
  , $v = Qs.AbortController
  , Mv = cp({
    fetch: Ov,
    Headers: Pv,
    AbortController: $v
})
  , Iv = Mv
  , Lv = () => {
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
}
  , Xs = Lv().app
  , Bv = () => Xs.baseURL
  , jv = () => Xs.buildAssetsDir
  , Zc = (...e) => ip(Yc(), jv(), ...e)
  , Yc = (...e) => {
    const t = Xs.cdnURL || Xs.baseURL;
    return e.length ? ip(t, ...e) : t
}
;
globalThis.__buildAssetsURL = Zc,
globalThis.__publicAssetsURL = Yc;
globalThis.$fetch || (globalThis.$fetch = Iv.create({
    baseURL: Bv()
}));
function Da(e, t={}, n) {
    for (const r in e) {
        const o = e[r]
          , s = n ? `${n}:${r}` : r;
        typeof o == "object" && o !== null ? Da(o, t, s) : typeof o == "function" && (t[s] = o)
    }
    return t
}
const Nv = {
    run: e => e()
}
  , Dv = () => Nv
  , lp = typeof console.createTask < "u" ? console.createTask : Dv;
function Fv(e, t) {
    const n = t.shift()
      , r = lp(n);
    return e.reduce( (o, s) => o.then( () => r.run( () => s(...t))), Promise.resolve())
}
function Hv(e, t) {
    const n = t.shift()
      , r = lp(n);
    return Promise.all(e.map(o => r.run( () => o(...t))))
}
function Qi(e, t) {
    for (const n of [...e])
        n(t)
}
class Uv {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r={}) {
        if (!t || typeof n != "function")
            return () => {}
            ;
        const o = t;
        let s;
        for (; this._deprecatedHooks[t]; )
            s = this._deprecatedHooks[t],
            t = s.to;
        if (s && !r.allowDeprecated) {
            let i = s.message;
            i || (i = `${o} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(i) || (console.warn(i),
            this._deprecatedMessages.add(i))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[t] = this._hooks[t] || [],
        this._hooks[t].push(n),
        () => {
            n && (this.removeHook(t, n),
            n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, o = (...s) => (typeof r == "function" && r(),
        r = void 0,
        o = void 0,
        n(...s));
        return r = this.hook(t, o),
        r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1),
            this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const o of r)
            this.hook(t, o)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t)
            this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = Da(t)
          , r = Object.keys(n).map(o => this.hook(o, n[o]));
        return () => {
            for (const o of r.splice(0, r.length))
                o()
        }
    }
    removeHooks(t) {
        const n = Da(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Fv, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Hv, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const o = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Qi(this._before, o);
        const s = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return s instanceof Promise ? s.finally( () => {
            this._after && o && Qi(this._after, o)
        }
        ) : (this._after && o && Qi(this._after, o),
        s)
    }
    beforeEach(t) {
        return this._before = this._before || [],
        this._before.push(t),
        () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [],
        this._after.push(t),
        () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
function up() {
    return new Uv
}
function Vv(e={}) {
    let t, n = !1;
    const r = i => {
        if (t && t !== i)
            throw new Error("Context conflict")
    }
    ;
    let o;
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i ? o = new i : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const s = () => {
        if (o && t === void 0) {
            const i = o.getStore();
            if (i !== void 0)
                return i
        }
        return t
    }
    ;
    return {
        use: () => {
            const i = s();
            if (i === void 0)
                throw new Error("Context is not available");
            return i
        }
        ,
        tryUse: () => s(),
        set: (i, a) => {
            a || r(i),
            t = i,
            n = !0
        }
        ,
        unset: () => {
            t = void 0,
            n = !1
        }
        ,
        call: (i, a) => {
            r(i),
            t = i;
            try {
                return o ? o.run(i, a) : a()
            } finally {
                n || (t = void 0)
            }
        }
        ,
        async callAsync(i, a) {
            t = i;
            const c = () => {
                t = i
            }
              , l = () => t === i ? c : void 0;
            Fa.add(l);
            try {
                const u = o ? o.run(i, a) : a();
                return n || (t = void 0),
                await u
            } finally {
                Fa.delete(l)
            }
        }
    }
}
function zv(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = Vv({
                ...e,
                ...r
            })),
            t[n],
            t[n]
        }
    }
}
const ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Cu = "__unctx__"
  , Kv = ei[Cu] || (ei[Cu] = zv())
  , qv = (e, t={}) => Kv.get(e, t)
  , Su = "__unctx_async_handlers__"
  , Fa = ei[Su] || (ei[Su] = new Set);
function jr(e) {
    const t = [];
    for (const o of Fa) {
        const s = o();
        s && t.push(s)
    }
    const n = () => {
        for (const o of t)
            o()
    }
    ;
    let r = e();
    return r && typeof r == "object" && "catch"in r && (r = r.catch(o => {
        throw n(),
        o
    }
    )),
    [r, n]
}
const Ha = {
    name: "page",
    mode: "out-in"
}
  , Wv = !1
  , Tr = {
    value: null,
    errorValue: null,
    deep: !0
}
  , Gv = null
  , Jv = {}
  , Zv = "#__nuxt"
  , fp = "nuxt-app"
  , Eu = 36e5;
function dp(e=fp) {
    return qv(e, {
        asyncContext: !1
    })
}
const Yv = "__nuxt_plugin";
function Qv(e) {
    let t = 0;
    const n = {
        _id: e.id || fp || "nuxt-app",
        _scope: hd(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.13.0"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: qt({
            data: qt({}),
            state: wt({}),
            once: new Set,
            _errors: qt({})
        }),
        static: {
            data: {}
        },
        runWithContext(o) {
            return n._scope.active && !mi() ? n._scope.run( () => ku(n, o)) : ku(n, o)
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return () => {}
                ;
            t++;
            let o = !1;
            return () => {
                if (!o && (o = !0,
                t--,
                t === 0))
                    return n.isHydrating = !1,
                    n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: qt({}),
        _payloadRevivers: {},
        ...e
    };
    {
        const o = window.__NUXT__;
        if (o)
            for (const s in o)
                switch (s) {
                case "data":
                case "state":
                case "_errors":
                    Object.assign(n.payload[s], o[s]);
                    break;
                default:
                    n.payload[s] = o[s]
                }
    }
    n.hooks = up(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (o, s) => {
        const i = "$" + o;
        ks(n, i, s),
        ks(n.vueApp.config.globalProperties, i, s)
    }
    ,
    ks(n.vueApp, "$nuxt", n),
    ks(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener("nuxt.preloadError", s => {
            n.callHook("app:chunkError", {
                error: s.payload
            })
        }
        ),
        window.useNuxtApp = window.useNuxtApp || Be;
        const o = n.hook("app:error", (...s) => {
            console.error("[nuxt] error caught during app initialization", ...s)
        }
        );
        n.hook("app:mounted", o)
    }
    const r = n.payload.config;
    return n.provide("config", r),
    n
}
function Xv(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks)
}
async function e_(e, t) {
    if (typeof t == "function") {
        const {provide: n} = await e.runWithContext( () => t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function t_(e, t) {
    const n = []
      , r = []
      , o = []
      , s = [];
    let i = 0;
    async function a(c) {
        var u;
        const l = ((u = c.dependsOn) == null ? void 0 : u.filter(f => t.some(d => d._name === f) && !n.includes(f))) ?? [];
        if (l.length > 0)
            r.push([new Set(l), c]);
        else {
            const f = e_(e, c).then(async () => {
                c._name && (n.push(c._name),
                await Promise.all(r.map(async ([d,h]) => {
                    d.has(c._name) && (d.delete(c._name),
                    d.size === 0 && (i++,
                    await a(h)))
                }
                )))
            }
            );
            c.parallel ? o.push(f.catch(d => s.push(d))) : await f
        }
    }
    for (const c of t)
        Xv(e, c);
    for (const c of t)
        await a(c);
    if (await Promise.all(o),
    i)
        for (let c = 0; c < i; c++)
            await Promise.all(o);
    if (s.length)
        throw s[0]
}
function st(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || ( () => {}
    ), e, {
        [Yv]: !0,
        _name: t
    })
}
function ku(e, t, n) {
    const r = () => t();
    return dp(e._id).set(e),
    e.vueApp.runWithContext(r)
}
function n_(e) {
    var n;
    let t;
    return Bc() && (t = (n = mt()) == null ? void 0 : n.appContext.app.$nuxt),
    t = t || dp(e).tryUse(),
    t || null
}
function Be(e) {
    const t = n_(e);
    if (!t)
        throw new Error("[nuxt] instance unavailable");
    return t
}
function Ot(e) {
    return Be().$config
}
function ks(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}
const Tu = Object.freeze({
    ignoreUnknown: !1,
    respectType: !1,
    respectFunctionNames: !1,
    respectFunctionProperties: !1,
    unorderedObjects: !0,
    unorderedArrays: !1,
    unorderedSets: !1,
    excludeKeys: void 0,
    excludeValues: void 0,
    replacer: void 0
});
function r_(e, t) {
    t ? t = {
        ...Tu,
        ...t
    } : t = Tu;
    const n = hp(t);
    return n.dispatch(e),
    n.toString()
}
const o_ = Object.freeze(["prototype", "__proto__", "constructor"]);
function hp(e) {
    let t = ""
      , n = new Map;
    const r = o => {
        t += o
    }
    ;
    return {
        toString() {
            return t
        },
        getContext() {
            return n
        },
        dispatch(o) {
            return e.replacer && (o = e.replacer(o)),
            this[o === null ? "null" : typeof o](o)
        },
        object(o) {
            if (o && typeof o.toJSON == "function")
                return this.object(o.toJSON());
            const s = Object.prototype.toString.call(o);
            let i = "";
            const a = s.length;
            a < 10 ? i = "unknown:[" + s + "]" : i = s.slice(8, a - 1),
            i = i.toLowerCase();
            let c = null;
            if ((c = n.get(o)) === void 0)
                n.set(o, n.size);
            else
                return this.dispatch("[CIRCULAR:" + c + "]");
            if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(o))
                return r("buffer:"),
                r(o.toString("utf8"));
            if (i !== "object" && i !== "function" && i !== "asyncfunction")
                this[i] ? this[i](o) : e.ignoreUnknown || this.unkown(o, i);
            else {
                let l = Object.keys(o);
                e.unorderedObjects && (l = l.sort());
                let u = [];
                e.respectType !== !1 && !xu(o) && (u = o_),
                e.excludeKeys && (l = l.filter(d => !e.excludeKeys(d)),
                u = u.filter(d => !e.excludeKeys(d))),
                r("object:" + (l.length + u.length) + ":");
                const f = d => {
                    this.dispatch(d),
                    r(":"),
                    e.excludeValues || this.dispatch(o[d]),
                    r(",")
                }
                ;
                for (const d of l)
                    f(d);
                for (const d of u)
                    f(d)
            }
        },
        array(o, s) {
            if (s = s === void 0 ? e.unorderedArrays !== !1 : s,
            r("array:" + o.length + ":"),
            !s || o.length <= 1) {
                for (const c of o)
                    this.dispatch(c);
                return
            }
            const i = new Map
              , a = o.map(c => {
                const l = hp(e);
                l.dispatch(c);
                for (const [u,f] of l.getContext())
                    i.set(u, f);
                return l.toString()
            }
            );
            return n = i,
            a.sort(),
            this.array(a, !1)
        },
        date(o) {
            return r("date:" + o.toJSON())
        },
        symbol(o) {
            return r("symbol:" + o.toString())
        },
        unkown(o, s) {
            if (r(s),
            !!o && (r(":"),
            o && typeof o.entries == "function"))
                return this.array(Array.from(o.entries()), !0)
        },
        error(o) {
            return r("error:" + o.toString())
        },
        boolean(o) {
            return r("bool:" + o)
        },
        string(o) {
            r("string:" + o.length + ":"),
            r(o)
        },
        function(o) {
            r("fn:"),
            xu(o) ? this.dispatch("[native]") : this.dispatch(o.toString()),
            e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(o.name)),
            e.respectFunctionProperties && this.object(o)
        },
        number(o) {
            return r("number:" + o)
        },
        xml(o) {
            return r("xml:" + o.toString())
        },
        null() {
            return r("Null")
        },
        undefined() {
            return r("Undefined")
        },
        regexp(o) {
            return r("regex:" + o.toString())
        },
        uint8array(o) {
            return r("uint8array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        uint8clampedarray(o) {
            return r("uint8clampedarray:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        int8array(o) {
            return r("int8array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        uint16array(o) {
            return r("uint16array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        int16array(o) {
            return r("int16array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        uint32array(o) {
            return r("uint32array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        int32array(o) {
            return r("int32array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        float32array(o) {
            return r("float32array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        float64array(o) {
            return r("float64array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        arraybuffer(o) {
            return r("arraybuffer:"),
            this.dispatch(new Uint8Array(o))
        },
        url(o) {
            return r("url:" + o.toString())
        },
        map(o) {
            r("map:");
            const s = [...o];
            return this.array(s, e.unorderedSets !== !1)
        },
        set(o) {
            r("set:");
            const s = [...o];
            return this.array(s, e.unorderedSets !== !1)
        },
        file(o) {
            return r("file:"),
            this.dispatch([o.name, o.size, o.type, o.lastModfied])
        },
        blob() {
            if (e.ignoreUnknown)
                return r("[blob]");
            throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
        },
        domwindow() {
            return r("domwindow")
        },
        bigint(o) {
            return r("bigint:" + o.toString())
        },
        process() {
            return r("process")
        },
        timer() {
            return r("timer")
        },
        pipe() {
            return r("pipe")
        },
        tcp() {
            return r("tcp")
        },
        udp() {
            return r("udp")
        },
        tty() {
            return r("tty")
        },
        statwatcher() {
            return r("statwatcher")
        },
        securecontext() {
            return r("securecontext")
        },
        connection() {
            return r("connection")
        },
        zlib() {
            return r("zlib")
        },
        context() {
            return r("context")
        },
        nodescript() {
            return r("nodescript")
        },
        httpparser() {
            return r("httpparser")
        },
        dataview() {
            return r("dataview")
        },
        signal() {
            return r("signal")
        },
        fsevent() {
            return r("fsevent")
        },
        tlswrap() {
            return r("tlswrap")
        }
    }
}
const pp = "[native code] }"
  , s_ = pp.length;
function xu(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-s_) === pp
}
var i_ = Object.defineProperty
  , a_ = (e, t, n) => t in e ? i_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , xr = (e, t, n) => (a_(e, typeof t != "symbol" ? t + "" : t, n),
n);
class $n {
    constructor(t, n) {
        xr(this, "words"),
        xr(this, "sigBytes"),
        t = this.words = t || [],
        this.sigBytes = n === void 0 ? t.length * 4 : n
    }
    toString(t) {
        return (t || c_).stringify(this)
    }
    concat(t) {
        if (this.clamp(),
        this.sigBytes % 4)
            for (let n = 0; n < t.sigBytes; n++) {
                const r = t.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                this.words[this.sigBytes + n >>> 2] |= r << 24 - (this.sigBytes + n) % 4 * 8
            }
        else
            for (let n = 0; n < t.sigBytes; n += 4)
                this.words[this.sigBytes + n >>> 2] = t.words[n >>> 2];
        return this.sigBytes += t.sigBytes,
        this
    }
    clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8,
        this.words.length = Math.ceil(this.sigBytes / 4)
    }
    clone() {
        return new $n([...this.words])
    }
}
const c_ = {
    stringify(e) {
        const t = [];
        for (let n = 0; n < e.sigBytes; n++) {
            const r = e.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            t.push((r >>> 4).toString(16), (r & 15).toString(16))
        }
        return t.join("")
    }
}
  , l_ = {
    stringify(e) {
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
          , n = [];
        for (let r = 0; r < e.sigBytes; r += 3) {
            const o = e.words[r >>> 2] >>> 24 - r % 4 * 8 & 255
              , s = e.words[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255
              , i = e.words[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255
              , a = o << 16 | s << 8 | i;
            for (let c = 0; c < 4 && r * 8 + c * 6 < e.sigBytes * 8; c++)
                n.push(t.charAt(a >>> 6 * (3 - c) & 63))
        }
        return n.join("")
    }
}
  , u_ = {
    parse(e) {
        const t = e.length
          , n = [];
        for (let r = 0; r < t; r++)
            n[r >>> 2] |= (e.charCodeAt(r) & 255) << 24 - r % 4 * 8;
        return new $n(n,t)
    }
}
  , f_ = {
    parse(e) {
        return u_.parse(unescape(encodeURIComponent(e)))
    }
};
class d_ {
    constructor() {
        xr(this, "_data", new $n),
        xr(this, "_nDataBytes", 0),
        xr(this, "_minBufferSize", 0),
        xr(this, "blockSize", 512 / 32)
    }
    reset() {
        this._data = new $n,
        this._nDataBytes = 0
    }
    _append(t) {
        typeof t == "string" && (t = f_.parse(t)),
        this._data.concat(t),
        this._nDataBytes += t.sigBytes
    }
    _doProcessBlock(t, n) {}
    _process(t) {
        let n, r = this._data.sigBytes / (this.blockSize * 4);
        t ? r = Math.ceil(r) : r = Math.max((r | 0) - this._minBufferSize, 0);
        const o = r * this.blockSize
          , s = Math.min(o * 4, this._data.sigBytes);
        if (o) {
            for (let i = 0; i < o; i += this.blockSize)
                this._doProcessBlock(this._data.words, i);
            n = this._data.words.splice(0, o),
            this._data.sigBytes -= s
        }
        return new $n(n,s)
    }
}
class h_ extends d_ {
    update(t) {
        return this._append(t),
        this._process(),
        this
    }
    finalize(t) {
        t && this._append(t)
    }
}
var p_ = Object.defineProperty
  , g_ = (e, t, n) => t in e ? p_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , m_ = (e, t, n) => (g_(e, t + "", n),
n);
const Au = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]
  , y_ = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]
  , Kn = [];
class b_ extends h_ {
    constructor() {
        super(...arguments),
        m_(this, "_hash", new $n([...Au]))
    }
    reset() {
        super.reset(),
        this._hash = new $n([...Au])
    }
    _doProcessBlock(t, n) {
        const r = this._hash.words;
        let o = r[0]
          , s = r[1]
          , i = r[2]
          , a = r[3]
          , c = r[4]
          , l = r[5]
          , u = r[6]
          , f = r[7];
        for (let d = 0; d < 64; d++) {
            if (d < 16)
                Kn[d] = t[n + d] | 0;
            else {
                const g = Kn[d - 15]
                  , w = (g << 25 | g >>> 7) ^ (g << 14 | g >>> 18) ^ g >>> 3
                  , T = Kn[d - 2]
                  , A = (T << 15 | T >>> 17) ^ (T << 13 | T >>> 19) ^ T >>> 10;
                Kn[d] = w + Kn[d - 7] + A + Kn[d - 16]
            }
            const h = c & l ^ ~c & u
              , m = o & s ^ o & i ^ s & i
              , p = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22)
              , S = (c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)
              , k = f + S + h + y_[d] + Kn[d]
              , y = p + m;
            f = u,
            u = l,
            l = c,
            c = a + k | 0,
            a = i,
            i = s,
            s = o,
            o = k + y | 0
        }
        r[0] = r[0] + o | 0,
        r[1] = r[1] + s | 0,
        r[2] = r[2] + i | 0,
        r[3] = r[3] + a | 0,
        r[4] = r[4] + c | 0,
        r[5] = r[5] + l | 0,
        r[6] = r[6] + u | 0,
        r[7] = r[7] + f | 0
    }
    finalize(t) {
        super.finalize(t);
        const n = this._nDataBytes * 8
          , r = this._data.sigBytes * 8;
        return this._data.words[r >>> 5] |= 128 << 24 - r % 32,
        this._data.words[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296),
        this._data.words[(r + 64 >>> 9 << 4) + 15] = n,
        this._data.sigBytes = this._data.words.length * 4,
        this._process(),
        this._hash
    }
}
function v_(e) {
    return new b_().finalize(e).toString(l_)
}
function __(e, t={}) {
    const n = typeof e == "string" ? e : r_(e, t);
    return v_(n).slice(0, 10)
}
function w_(e, t) {
    return {
        ctx: {
            table: e
        },
        matchAll: n => mp(n, e)
    }
}
function gp(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map( ([r,o]) => [r, gp(o)])) : new Map(Object.entries(e[n]));
    return t
}
function C_(e) {
    return w_(gp(e))
}
function mp(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [s,i] of Ru(t.wildcard))
        (e === s || e.startsWith(s + "/")) && r.push(i);
    for (const [s,i] of Ru(t.dynamic))
        if (e.startsWith(s + "/")) {
            const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
            r.push(...mp(a, i))
        }
    const o = t.static.get(e);
    return o && r.push(o),
    r.filter(Boolean)
}
function Ru(e) {
    return [...e.entries()].sort( (t, n) => t[0].length - n[0].length)
}
function Xi(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function Ua(e, t, n=".", r) {
    if (!Xi(t))
        return Ua(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
        if (s === "__proto__" || s === "constructor")
            continue;
        const i = e[s];
        i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [...i, ...o[s]] : Xi(i) && Xi(o[s]) ? o[s] = Ua(i, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = i))
    }
    return o
}
function S_(e) {
    return (...t) => t.reduce( (n, r) => Ua(n, r, "", e), {})
}
const ss = S_();
function E_(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var k_ = Object.defineProperty
  , T_ = (e, t, n) => t in e ? k_(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Wn = (e, t, n) => (T_(e, typeof t != "symbol" ? t + "" : t, n),
n);
class Va extends Error {
    constructor(t, n={}) {
        super(t, n),
        Wn(this, "statusCode", 500),
        Wn(this, "fatal", !1),
        Wn(this, "unhandled", !1),
        Wn(this, "statusMessage"),
        Wn(this, "data"),
        Wn(this, "cause"),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: Ka(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = yp(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
Wn(Va, "__h3_error__", !0);
function za(e) {
    if (typeof e == "string")
        return new Va(e);
    if (x_(e))
        return e;
    const t = new Va(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (E_(e, "stack"))
        try {
            Object.defineProperty(t, "stack", {
                get() {
                    return e.stack
                }
            })
        } catch {
            try {
                t.stack = e.stack
            } catch {}
        }
    if (e.data && (t.data = e.data),
    e.statusCode ? t.statusCode = Ka(e.statusCode, t.statusCode) : e.status && (t.statusCode = Ka(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        yp(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function x_(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const A_ = /[^\u0009\u0020-\u007E]/g;
function yp(e="") {
    return e.replace(A_, "")
}
function Ka(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const R_ = Symbol("layout-meta")
  , $i = Symbol("route")
  , Dt = () => {
    var e;
    return (e = Be()) == null ? void 0 : e.$router
}
  , Mi = () => Bc() ? rt($i, Be()._route) : Be()._route;
const bp = "__nuxt_error"
  , Ii = () => _i(Be().payload, "error")
  , Ar = e => {
    const t = is(e);
    try {
        const n = Be()
          , r = Ii();
        n.hooks.callHook("app:error", t),
        r.value = r.value || t
    } catch {
        throw t
    }
    return t
}
  , O_ = async (e={}) => {
    const t = Be()
      , n = Ii();
    t.callHook("app:error:cleared", e),
    e.redirect && await Dt().replace(e.redirect),
    n.value = Gv
}
  , P_ = e => !!e && typeof e == "object" && bp in e
  , is = e => {
    const t = za(e);
    return Object.defineProperty(t, bp, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
  , $_ = -1
  , M_ = -2
  , I_ = -3
  , L_ = -4
  , B_ = -5
  , j_ = -6;
function N_(e, t) {
    return D_(JSON.parse(e), t)
}
function D_(e, t) {
    if (typeof e == "number")
        return o(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function o(s, i=!1) {
        if (s === $_)
            return;
        if (s === I_)
            return NaN;
        if (s === L_)
            return 1 / 0;
        if (s === B_)
            return -1 / 0;
        if (s === j_)
            return -0;
        if (i)
            throw new Error("Invalid input");
        if (s in r)
            return r[s];
        const a = n[s];
        if (!a || typeof a != "object")
            r[s] = a;
        else if (Array.isArray(a))
            if (typeof a[0] == "string") {
                const c = a[0]
                  , l = t == null ? void 0 : t[c];
                if (l)
                    return r[s] = l(o(a[1]));
                switch (c) {
                case "Date":
                    r[s] = new Date(a[1]);
                    break;
                case "Set":
                    const u = new Set;
                    r[s] = u;
                    for (let h = 1; h < a.length; h += 1)
                        u.add(o(a[h]));
                    break;
                case "Map":
                    const f = new Map;
                    r[s] = f;
                    for (let h = 1; h < a.length; h += 2)
                        f.set(o(a[h]), o(a[h + 1]));
                    break;
                case "RegExp":
                    r[s] = new RegExp(a[1],a[2]);
                    break;
                case "Object":
                    r[s] = Object(a[1]);
                    break;
                case "BigInt":
                    r[s] = BigInt(a[1]);
                    break;
                case "null":
                    const d = Object.create(null);
                    r[s] = d;
                    for (let h = 1; h < a.length; h += 2)
                        d[a[h]] = o(a[h + 1]);
                    break;
                default:
                    throw new Error(`Unknown type ${c}`)
                }
            } else {
                const c = new Array(a.length);
                r[s] = c;
                for (let l = 0; l < a.length; l += 1) {
                    const u = a[l];
                    u !== M_ && (c[l] = o(u))
                }
            }
        else {
            const c = {};
            r[s] = c;
            for (const l in a) {
                const u = a[l];
                c[l] = o(u)
            }
        }
        return r[s]
    }
    return o(0)
}
const F_ = new Set(["title", "titleTemplate", "script", "style", "noscript"])
  , Ms = new Set(["base", "meta", "link", "style", "script", "noscript"])
  , H_ = new Set(["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"])
  , U_ = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"])
  , vp = new Set(["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"])
  , V_ = typeof window < "u";
function ti(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Ou(e) {
    if (e._h)
        return e._h;
    if (e._d)
        return ti(e._d);
    let t = `${e.tag}:${e.textContent || e.innerHTML || ""}:`;
    for (const n in e.props)
        t += `${n}:${e.props[n]},`;
    return ti(t)
}
const z_ = ["name", "property", "http-equiv"];
function _p(e) {
    const {props: t, tag: n} = e;
    if (U_.has(n))
        return n;
    if (n === "link" && t.rel === "canonical")
        return "canonical";
    if (t.charset)
        return "charset";
    if (t.id)
        return `${n}:id:${t.id}`;
    for (const r of z_)
        if (t[r] !== void 0)
            return `${n}:${r}:${t[r]}`;
    return !1
}
function Pu(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
function wp(e, t) {
    const n = []
      , r = t.resolveKeyData || (s => s.key)
      , o = t.resolveValueData || (s => s.value);
    for (const [s,i] of Object.entries(e))
        n.push(...(Array.isArray(i) ? i : [i]).map(a => {
            const c = {
                key: s,
                value: a
            }
              , l = o(c);
            return typeof l == "object" ? wp(l, t) : Array.isArray(l) ? l : {
                [typeof t.key == "function" ? t.key(c) : t.key]: r(c),
                [typeof t.value == "function" ? t.value(c) : t.value]: l
            }
        }
        ).flat());
    return n
}
function Cp(e, t) {
    return Object.entries(e).map( ([n,r]) => {
        if (typeof r == "object" && (r = Cp(r, t)),
        t.resolve) {
            const o = t.resolve({
                key: n,
                value: r
            });
            if (typeof o < "u")
                return o
        }
        return typeof r == "number" && (r = r.toString()),
        typeof r == "string" && t.wrapValue && (r = r.replace(new RegExp(t.wrapValue,"g"), `\\${t.wrapValue}`),
        r = `${t.wrapValue}${r}${t.wrapValue}`),
        `${n}${t.keyValueSeparator || ""}${r}`
    }
    ).join(t.entrySeparator || "")
}
const it = e => ({
    keyValue: e,
    metaKey: "property"
})
  , ea = e => ({
    keyValue: e
})
  , Qc = {
    appleItunesApp: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return `${nn(e)}=${t}`
            }
        }
    },
    articleExpirationTime: it("article:expiration_time"),
    articleModifiedTime: it("article:modified_time"),
    articlePublishedTime: it("article:published_time"),
    bookReleaseDate: it("book:release_date"),
    charset: {
        metaKey: "charset"
    },
    contentSecurityPolicy: {
        unpack: {
            entrySeparator: "; ",
            resolve({key: e, value: t}) {
                return `${nn(e)} ${t}`
            }
        },
        metaKey: "http-equiv"
    },
    contentType: {
        metaKey: "http-equiv"
    },
    defaultStyle: {
        metaKey: "http-equiv"
    },
    fbAppId: it("fb:app_id"),
    msapplicationConfig: ea("msapplication-Config"),
    msapplicationTileColor: ea("msapplication-TileColor"),
    msapplicationTileImage: ea("msapplication-TileImage"),
    ogAudioSecureUrl: it("og:audio:secure_url"),
    ogAudioUrl: it("og:audio"),
    ogImageSecureUrl: it("og:image:secure_url"),
    ogImageUrl: it("og:image"),
    ogSiteName: it("og:site_name"),
    ogVideoSecureUrl: it("og:video:secure_url"),
    ogVideoUrl: it("og:video"),
    profileFirstName: it("profile:first_name"),
    profileLastName: it("profile:last_name"),
    profileUsername: it("profile:username"),
    refresh: {
        metaKey: "http-equiv",
        unpack: {
            entrySeparator: ";",
            resolve({key: e, value: t}) {
                if (e === "seconds")
                    return `${t}`
            }
        }
    },
    robots: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return typeof t == "boolean" ? `${nn(e)}` : `${nn(e)}:${t}`
            }
        }
    },
    xUaCompatible: {
        metaKey: "http-equiv"
    }
}
  , Sp = new Set(["og", "book", "article", "profile"]);
function Ep(e) {
    var r;
    const t = nn(e)
      , n = t.indexOf(":");
    return Sp.has(t.substring(0, n)) ? "property" : ((r = Qc[e]) == null ? void 0 : r.metaKey) || "name"
}
function K_(e) {
    var t;
    return ((t = Qc[e]) == null ? void 0 : t.keyValue) || nn(e)
}
function nn(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase()
      , n = t.indexOf("-")
      , r = t.substring(0, n);
    return r === "twitter" || Sp.has(r) ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}
function qa(e) {
    if (Array.isArray(e))
        return e.map(n => qa(n));
    if (typeof e != "object" || Array.isArray(e))
        return e;
    const t = {};
    for (const n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[nn(n)] = qa(e[n]));
    return t
}
function q_(e, t) {
    const n = Qc[t];
    return t === "refresh" ? `${e.seconds};url=${e.url}` : Cp(qa(e), {
        keyValueSeparator: "=",
        entrySeparator: ", ",
        resolve({value: r, key: o}) {
            if (r === null)
                return "";
            if (typeof r == "boolean")
                return `${o}`
        },
        ...n == null ? void 0 : n.unpack
    })
}
const kp = new Set(["og:image", "og:video", "og:audio", "twitter:image"]);
function Tp(e) {
    const t = {};
    for (const n in e) {
        if (!Object.prototype.hasOwnProperty.call(e, n))
            continue;
        const r = e[n];
        String(r) !== "false" && n && (t[n] = r)
    }
    return t
}
function $u(e, t) {
    const n = Tp(t)
      , r = nn(e)
      , o = Ep(r);
    if (kp.has(r)) {
        const s = {};
        for (const i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (s[`${e}${i === "url" ? "" : `${i[0].toUpperCase()}${i.slice(1)}`}`] = n[i]);
        return Xc(s).sort( (i, a) => {
            var c, l;
            return (((c = i[o]) == null ? void 0 : c.length) || 0) - (((l = a[o]) == null ? void 0 : l.length) || 0)
        }
        )
    }
    return [{
        [o]: r,
        ...n
    }]
}
function Xc(e) {
    const t = []
      , n = {};
    for (const o in e) {
        if (!Object.prototype.hasOwnProperty.call(e, o))
            continue;
        const s = e[o];
        if (!Array.isArray(s)) {
            if (typeof s == "object" && s) {
                if (kp.has(nn(o))) {
                    t.push(...$u(o, s));
                    continue
                }
                n[o] = Tp(s)
            } else
                n[o] = s;
            continue
        }
        for (const i of s)
            t.push(...typeof i == "string" ? Xc({
                [o]: i
            }) : $u(o, i))
    }
    const r = wp(n, {
        key({key: o}) {
            return Ep(o)
        },
        value({key: o}) {
            return o === "charset" ? "charset" : "content"
        },
        resolveKeyData({key: o}) {
            return K_(o)
        },
        resolveValueData({value: o, key: s}) {
            return o === null ? "_null" : typeof o == "object" ? q_(o, s) : typeof o == "number" ? o.toString() : o
        }
    });
    return [...t, ...r].map(o => (o.content === "_null" && (o.content = null),
    o))
}
function W_(e, t) {
    return e instanceof Promise ? e.then(t) : t(e)
}
function Wa(e, t, n, r) {
    const o = r || Ap(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? {
        ...t
    } : {
        [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }, e === "templateParams" || e === "titleTemplate");
    if (o instanceof Promise)
        return o.then(i => Wa(e, t, n, i));
    const s = {
        tag: e,
        props: o
    };
    for (const i of vp) {
        const a = s.props[i] !== void 0 ? s.props[i] : n[i];
        a !== void 0 && ((!(i === "innerHTML" || i === "textContent" || i === "children") || F_.has(s.tag)) && (s[i === "children" ? "innerHTML" : i] = a),
        delete s.props[i])
    }
    return s.props.body && (s.tagPosition = "bodyClose",
    delete s.props.body),
    s.tag === "script" && typeof s.innerHTML == "object" && (s.innerHTML = JSON.stringify(s.innerHTML),
    s.props.type = s.props.type || "application/json"),
    Array.isArray(s.props.content) ? s.props.content.map(i => ({
        ...s,
        props: {
            ...s.props,
            content: i
        }
    })) : s
}
function G_(e, t) {
    var r;
    const n = e === "class" ? " " : ";";
    return typeof t == "object" && !Array.isArray(t) && (t = Object.entries(t).filter( ([,o]) => o).map( ([o,s]) => e === "style" ? `${o}:${s}` : o)),
    (r = String(Array.isArray(t) ? t.join(n) : t)) == null ? void 0 : r.split(n).filter(o => !!o.trim()).join(n)
}
function xp(e, t, n, r) {
    for (let o = r; o < n.length; o += 1) {
        const s = n[o];
        if (s === "class" || s === "style") {
            e[s] = G_(s, e[s]);
            continue
        }
        if (e[s]instanceof Promise)
            return e[s].then(i => (e[s] = i,
            xp(e, t, n, o)));
        if (!t && !vp.has(s)) {
            const i = String(e[s])
              , a = s.startsWith("data-");
            i === "true" || i === "" ? e[s] = a ? "true" : !0 : e[s] || (a && i === "false" ? e[s] = "false" : delete e[s])
        }
    }
}
function Ap(e, t=!1) {
    const n = xp(e, t, Object.keys(e), 0);
    return n instanceof Promise ? n.then( () => e) : e
}
const J_ = 10;
function Rp(e, t, n) {
    for (let r = n; r < t.length; r += 1) {
        const o = t[r];
        if (o instanceof Promise)
            return o.then(s => (t[r] = s,
            Rp(e, t, r)));
        Array.isArray(o) ? e.push(...o) : e.push(o)
    }
}
function Z_(e) {
    const t = []
      , n = e.resolvedInput;
    for (const o in n) {
        if (!Object.prototype.hasOwnProperty.call(n, o))
            continue;
        const s = n[o];
        if (!(s === void 0 || !H_.has(o))) {
            if (Array.isArray(s)) {
                for (const i of s)
                    t.push(Wa(o, i, e));
                continue
            }
            t.push(Wa(o, s, e))
        }
    }
    if (t.length === 0)
        return [];
    const r = [];
    return W_(Rp(r, t, 0), () => r.map( (o, s) => (o._e = e._i,
    e.mode && (o._m = e.mode),
    o._p = (e._i << J_) + s,
    o)))
}
const Mu = {
    base: -10,
    title: 10
}
  , Iu = {
    critical: -80,
    high: -10,
    low: 20
};
function ni(e) {
    const t = e.tagPriority;
    if (typeof t == "number")
        return t;
    let n = 100;
    return e.tag === "meta" ? e.props["http-equiv"] === "content-security-policy" ? n = -30 : e.props.charset ? n = -20 : e.props.name === "viewport" && (n = -15) : e.tag === "link" && e.props.rel === "preconnect" ? n = 20 : e.tag in Mu && (n = Mu[e.tag]),
    t && t in Iu ? n + Iu[t] : n
}
const Y_ = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Lu = new Set(["onload", "onerror", "onabort", "onprogress", "onloadstart"])
  , yn = "%separator";
function Q_(e, t) {
    var r;
    let n;
    if (t === "s" || t === "pageTitle")
        n = e.pageTitle;
    else if (t.includes(".")) {
        const o = t.indexOf(".");
        n = (r = e[t.substring(0, o)]) == null ? void 0 : r[t.substring(o + 1)]
    } else
        n = e[t];
    return n !== void 0 ? (n || "").replace(/"/g, '\\"') : void 0
}
const X_ = new RegExp(`${yn}(?:\\s*${yn})*`,"g");
function ta(e, t, n) {
    if (typeof e != "string" || !e.includes("%"))
        return e;
    let r = e;
    try {
        r = decodeURI(e)
    } catch {}
    const o = r.match(/%\w+(?:\.\w+)?/g);
    if (!o)
        return e;
    const s = e.includes(yn);
    return e = e.replace(/%\w+(?:\.\w+)?/g, i => {
        if (i === yn || !o.includes(i))
            return i;
        const a = Q_(t, i.slice(1));
        return a !== void 0 ? a : i
    }
    ).trim(),
    s && (e.endsWith(yn) && (e = e.slice(0, -yn.length)),
    e.startsWith(yn) && (e = e.slice(yn.length)),
    e = e.replace(X_, n).trim()),
    e
}
async function Op(e, t={}) {
    var u;
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty)
        return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r),
    !r.shouldRender)
        return;
    const o = (await e.resolveTags()).map(f => ({
        tag: f,
        id: Ms.has(f.tag) ? Ou(f) : f.tag,
        shouldRender: !0
    }));
    let s = e._dom;
    if (!s) {
        s = {
            elMap: {
                htmlAttrs: n.documentElement,
                bodyAttrs: n.body
            }
        };
        const f = new Set;
        for (const d of ["body", "head"]) {
            const h = (u = n[d]) == null ? void 0 : u.children;
            for (const m of h) {
                const p = m.tagName.toLowerCase();
                if (!Ms.has(p))
                    continue;
                const S = {
                    tag: p,
                    props: await Ap(m.getAttributeNames().reduce( (w, T) => ({
                        ...w,
                        [T]: m.getAttribute(T)
                    }), {})),
                    innerHTML: m.innerHTML
                }
                  , k = _p(S);
                let y = k
                  , g = 1;
                for (; y && f.has(y); )
                    y = `${k}:${g++}`;
                y && (S._d = y,
                f.add(y)),
                s.elMap[m.getAttribute("data-hid") || Ou(S)] = m
            }
        }
    }
    s.pendingSideEffects = {
        ...s.sideEffects
    },
    s.sideEffects = {};
    function i(f, d, h) {
        const m = `${f}:${d}`;
        s.sideEffects[m] = h,
        delete s.pendingSideEffects[m]
    }
    function a({id: f, $el: d, tag: h}) {
        const m = h.tag.endsWith("Attrs");
        if (s.elMap[f] = d,
        m || (h.textContent && h.textContent !== d.textContent && (d.textContent = h.textContent),
        h.innerHTML && h.innerHTML !== d.innerHTML && (d.innerHTML = h.innerHTML),
        i(f, "el", () => {
            var p;
            (p = s.elMap[f]) == null || p.remove(),
            delete s.elMap[f]
        }
        )),
        h._eventHandlers)
            for (const p in h._eventHandlers)
                Object.prototype.hasOwnProperty.call(h._eventHandlers, p) && d.getAttribute(`data-${p}`) !== "" && ((h.tag === "bodyAttrs" ? n.defaultView : d).addEventListener(p.substring(2), h._eventHandlers[p].bind(d)),
                d.setAttribute(`data-${p}`, ""));
        for (const p in h.props) {
            if (!Object.prototype.hasOwnProperty.call(h.props, p))
                continue;
            const S = h.props[p]
              , k = `attr:${p}`;
            if (p === "class") {
                if (!S)
                    continue;
                for (const y of S.split(" "))
                    m && i(f, `${k}:${y}`, () => d.classList.remove(y)),
                    !d.classList.contains(y) && d.classList.add(y)
            } else if (p === "style") {
                if (!S)
                    continue;
                for (const y of S.split(";")) {
                    const g = y.indexOf(":")
                      , w = y.substring(0, g).trim()
                      , T = y.substring(g + 1).trim();
                    i(f, `${k}:${w}`, () => {
                        d.style.removeProperty(w)
                    }
                    ),
                    d.style.setProperty(w, T)
                }
            } else
                d.getAttribute(p) !== S && d.setAttribute(p, S === !0 ? "" : String(S)),
                m && i(f, k, () => d.removeAttribute(p))
        }
    }
    const c = []
      , l = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
    };
    for (const f of o) {
        const {tag: d, shouldRender: h, id: m} = f;
        if (h) {
            if (d.tag === "title") {
                n.title = d.textContent;
                continue
            }
            f.$el = f.$el || s.elMap[m],
            f.$el ? a(f) : Ms.has(d.tag) && c.push(f)
        }
    }
    for (const f of c) {
        const d = f.tag.tagPosition || "head";
        f.$el = n.createElement(f.tag.tag),
        a(f),
        l[d] = l[d] || n.createDocumentFragment(),
        l[d].appendChild(f.$el)
    }
    for (const f of o)
        await e.hooks.callHook("dom:renderTag", f, n, i);
    l.head && n.head.appendChild(l.head),
    l.bodyOpen && n.body.insertBefore(l.bodyOpen, n.body.firstChild),
    l.bodyClose && n.body.appendChild(l.bodyClose);
    for (const f in s.pendingSideEffects)
        s.pendingSideEffects[f]();
    e._dom = s,
    e.dirty = !1,
    await e.hooks.callHook("dom:rendered", {
        renders: o
    })
}
function ew(e, t={}) {
    const n = t.delayFn || (r => setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r => n( () => Op(e, t).then( () => {
        delete e._domUpdatePromise,
        r()
    }
    )))
}
function tw(e) {
    return t => {
        var r, o;
        const n = ((o = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : o.innerHTML) || !1;
        return n && t.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": s => {
                    ew(s, e)
                }
            }
        }
    }
}
const nw = new Set(["templateParams", "htmlAttrs", "bodyAttrs"])
  , rw = {
    hooks: {
        "tag:normalise": ({tag: e}) => {
            e.props.hid && (e.key = e.props.hid,
            delete e.props.hid),
            e.props.vmid && (e.key = e.props.vmid,
            delete e.props.vmid),
            e.props.key && (e.key = e.props.key,
            delete e.props.key);
            const n = _p(e) || (e.key ? `${e.tag}:${e.key}` : !1);
            n && (e._d = n)
        }
        ,
        "tags:resolve": e => {
            const t = Object.create(null);
            for (const r of e.tags) {
                const o = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p
                  , s = t[o];
                if (s) {
                    let a = r == null ? void 0 : r.tagDuplicateStrategy;
                    if (!a && nw.has(r.tag) && (a = "merge"),
                    a === "merge") {
                        const c = s.props;
                        c.style && r.props.style && (c.style[c.style.length - 1] !== ";" && (c.style += ";"),
                        r.props.style = `${c.style} ${r.props.style}`),
                        c.class && r.props.class ? r.props.class = `${c.class} ${r.props.class}` : c.class && (r.props.class = c.class),
                        t[o].props = {
                            ...c,
                            ...r.props
                        };
                        continue
                    } else if (r._e === s._e) {
                        s._duped = s._duped || [],
                        r._d = `${s._d}:${s._duped.length + 1}`,
                        s._duped.push(r);
                        continue
                    } else if (ni(r) > ni(s))
                        continue
                }
                if (!(r.innerHTML || r.textContent || Object.keys(r.props).length !== 0) && Ms.has(r.tag)) {
                    delete t[o];
                    continue
                }
                t[o] = r
            }
            const n = [];
            for (const r in t) {
                const o = t[r]
                  , s = o._duped;
                n.push(o),
                s && (delete o._duped,
                n.push(...s))
            }
            e.tags = n,
            e.tags = e.tags.filter(r => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
        }
    }
}
  , ow = {
    mode: "server",
    hooks: {
        "tags:resolve": e => {
            const t = {};
            let n = !1;
            for (const r of e.tags)
                r._m !== "server" || r.tag !== "titleTemplate" && r.tag !== "templateParams" && r.tag !== "title" || (t[r.tag] = r.tag === "title" || r.tag === "titleTemplate" ? r.textContent : r.props,
                n = !0);
            n && e.tags.push({
                tag: "script",
                innerHTML: JSON.stringify(t),
                props: {
                    id: "unhead:payload",
                    type: "application/json"
                }
            })
        }
    }
}
  , sw = new Set(["script", "link", "bodyAttrs"])
  , iw = e => ({
    hooks: {
        "tags:resolve": t => {
            for (const n of t.tags) {
                if (!sw.has(n.tag))
                    continue;
                const r = n.props;
                for (const o in r) {
                    if (o[0] !== "o" || o[1] !== "n" || !Object.prototype.hasOwnProperty.call(r, o))
                        continue;
                    const s = r[o];
                    typeof s == "function" && (e.ssr && Lu.has(o) ? r[o] = `this.dataset.${o}fired = true` : delete r[o],
                    n._eventHandlers = n._eventHandlers || {},
                    n._eventHandlers[o] = s)
                }
                e.ssr && n._eventHandlers && (n.props.src || n.props.href) && (n.key = n.key || ti(n.props.src || n.props.href))
            }
        }
        ,
        "dom:renderTag": ({$el: t, tag: n}) => {
            var o, s;
            const r = t == null ? void 0 : t.dataset;
            if (r)
                for (const i in r) {
                    if (!i.endsWith("fired"))
                        continue;
                    const a = i.slice(0, -5);
                    Lu.has(a) && ((s = (o = n._eventHandlers) == null ? void 0 : o[a]) == null || s.call(t, new Event(a.substring(2))))
                }
        }
    }
})
  , aw = new Set(["link", "style", "script", "noscript"])
  , cw = {
    hooks: {
        "tag:normalise": ({tag: e}) => {
            e.key && aw.has(e.tag) && (e.props["data-hid"] = e._h = ti(e.key))
        }
    }
}
  , lw = {
    hooks: {
        "tags:resolve": e => {
            var t;
            for (const n of e.tags)
                if (typeof n.tagPriority == "string")
                    for (const {prefix: r, offset: o} of Y_) {
                        if (!n.tagPriority.startsWith(r))
                            continue;
                        const s = n.tagPriority.substring(r.length)
                          , i = (t = e.tags.find(a => a._d === s)) == null ? void 0 : t._p;
                        if (i !== void 0) {
                            n._p = i + o;
                            break
                        }
                    }
            e.tags.sort( (n, r) => {
                const o = ni(n)
                  , s = ni(r);
                return o < s ? -1 : o > s ? 1 : n._p - r._p
            }
            )
        }
    }
}
  , uw = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , fw = ["innerHTML", "textContent"]
  , dw = e => ({
    hooks: {
        "tags:resolve": t => {
            var i;
            const {tags: n} = t;
            let r;
            for (let a = 0; a < n.length; a += 1)
                n[a].tag === "templateParams" && (r = t.tags.splice(a, 1)[0].props,
                a -= 1);
            const o = r || {}
              , s = o.separator || "|";
            delete o.separator,
            o.pageTitle = ta(o.pageTitle || ((i = n.find(a => a.tag === "title")) == null ? void 0 : i.textContent) || "", o, s);
            for (const a of n) {
                if (a.processTemplateParams === !1)
                    continue;
                const c = uw[a.tag];
                if (c && typeof a.props[c] == "string")
                    a.props[c] = ta(a.props[c], o, s);
                else if (a.processTemplateParams || a.tag === "titleTemplate" || a.tag === "title")
                    for (const l of fw)
                        typeof a[l] == "string" && (a[l] = ta(a[l], o, s))
            }
            e._templateParams = o,
            e._separator = s
        }
    }
})
  , hw = {
    hooks: {
        "tags:resolve": e => {
            const {tags: t} = e;
            let n, r;
            for (let o = 0; o < t.length; o += 1) {
                const s = t[o];
                s.tag === "title" ? n = s : s.tag === "titleTemplate" && (r = s)
            }
            if (r && n) {
                const o = Pu(r.textContent, n.textContent);
                o !== null ? n.textContent = o || n.textContent : e.tags.splice(e.tags.indexOf(n), 1)
            } else if (r) {
                const o = Pu(r.textContent);
                o !== null && (r.textContent = o,
                r.tag = "title",
                r = void 0)
            }
            r && e.tags.splice(e.tags.indexOf(r), 1)
        }
    }
}
  , pw = {
    hooks: {
        "tags:afterResolve": e => {
            for (const t of e.tags)
                typeof t.innerHTML == "string" && (t.innerHTML && (t.props.type === "application/ld+json" || t.props.type === "application/json") ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"), `<\\/${t.tag}`))
        }
    }
};
let Pp;
function gw(e={}) {
    const t = mw(e);
    return t.use(tw()),
    Pp = t
}
function Bu(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}
function mw(e={}) {
    const t = up();
    t.addHooks(e.hooks || {}),
    e.document = e.document || (V_ ? document : void 0);
    const n = !e.document
      , r = () => {
        a.dirty = !0,
        t.callHook("entries:updated", a)
    }
    ;
    let o = 0
      , s = [];
    const i = []
      , a = {
        plugins: i,
        dirty: !1,
        resolvedOptions: e,
        hooks: t,
        headEntries() {
            return s
        },
        use(c) {
            const l = typeof c == "function" ? c(a) : c;
            (!l.key || !i.some(u => u.key === l.key)) && (i.push(l),
            Bu(l.mode, n) && t.addHooks(l.hooks || {}))
        },
        push(c, l) {
            l == null || delete l.head;
            const u = {
                _i: o++,
                input: c,
                ...l
            };
            return Bu(u.mode, n) && (s.push(u),
            r()),
            {
                dispose() {
                    s = s.filter(f => f._i !== u._i),
                    t.callHook("entries:updated", a),
                    r()
                },
                patch(f) {
                    for (const d of s)
                        d._i === u._i && (d.input = u.input = f);
                    r()
                }
            }
        },
        async resolveTags() {
            const c = {
                tags: [],
                entries: [...s]
            };
            await t.callHook("entries:resolve", c);
            for (const l of c.entries) {
                const u = l.resolvedInput || l.input;
                if (l.resolvedInput = await (l.transform ? l.transform(u) : u),
                l.resolvedInput)
                    for (const f of await Z_(l)) {
                        const d = {
                            tag: f,
                            entry: l,
                            resolvedOptions: a.resolvedOptions
                        };
                        await t.callHook("tag:normalise", d),
                        c.tags.push(d.tag)
                    }
            }
            return await t.callHook("tags:beforeResolve", c),
            await t.callHook("tags:resolve", c),
            await t.callHook("tags:afterResolve", c),
            c.tags
        },
        ssr: n
    };
    return [rw, ow, iw, cw, lw, dw, hw, pw, ...(e == null ? void 0 : e.plugins) || []].forEach(c => a.use(c)),
    a.hooks.callHook("init", a),
    a
}
function yw() {
    return Pp
}
const bw = zc[0] === "3";
function vw(e) {
    return typeof e == "function" ? e() : ce(e)
}
function ri(e) {
    if (e instanceof Promise)
        return e;
    const t = vw(e);
    if (!e || !t)
        return t;
    if (Array.isArray(t))
        return t.map(n => ri(n));
    if (typeof t == "object") {
        const n = {};
        for (const r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
                if (r === "titleTemplate" || r[0] === "o" && r[1] === "n") {
                    n[r] = ce(t[r]);
                    continue
                }
                n[r] = ri(t[r])
            }
        return n
    }
    return t
}
const _w = {
    hooks: {
        "entries:resolve": e => {
            for (const t of e.entries)
                t.resolvedInput = ri(t.input)
        }
    }
}
  , $p = "usehead";
function ww(e) {
    return {
        install(n) {
            bw && (n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide($p, e))
        }
    }.install
}
function Cw(e={}) {
    e.domDelayFn = e.domDelayFn || (n => Hn( () => setTimeout( () => n(), 0)));
    const t = gw(e);
    return t.use(_w),
    t.install = ww(t),
    t
}
const Ga = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Ja = "__unhead_injection_handler__";
function Sw(e) {
    Ga[Ja] = e
}
function Ew() {
    if (Ja in Ga)
        return Ga[Ja]();
    const e = rt($p);
    return e || yw()
}
function el(e, t={}) {
    const n = t.head || Ew();
    if (n)
        return n.ssr ? n.push(e, t) : kw(n, e, t)
}
function kw(e, t, n={}) {
    const r = $e(!1)
      , o = $e({});
    Dc( () => {
        o.value = r.value ? {} : ri(t)
    }
    );
    const s = e.push(o.value, n);
    return Lt(o, a => {
        s.patch(a)
    }
    ),
    mt() && (vr( () => {
        s.dispose()
    }
    ),
    ki( () => {
        r.value = !0
    }
    ),
    Ei( () => {
        r.value = !1
    }
    )),
    s
}
function Tw(e, t) {
    const {title: n, titleTemplate: r, ...o} = e;
    return el({
        title: n,
        titleTemplate: r,
        _flatMeta: o
    }, {
        ...t,
        transform(s) {
            const i = Xc({
                ...s._flatMeta
            });
            return delete s._flatMeta,
            {
                ...s,
                meta: i
            }
        }
    })
}
let Is, Ls;
function xw() {
    return Is = $fetch(Zc(`builds/meta/${Ot().app.buildId}.json`), {
        responseType: "json"
    }),
    Is.then(e => {
        Ls = C_(e.matcher)
    }
    ).catch(e => {
        console.error("[nuxt] Error fetching app manifest.", e)
    }
    ),
    Is
}
function Li() {
    return Is || xw()
}
async function tl(e) {
    if (await Li(),
    !Ls)
        return console.error("[nuxt] Error creating app manifest matcher.", Ls),
        {};
    try {
        return ss({}, ...Ls.matchAll(e).reverse())
    } catch (t) {
        return console.error("[nuxt] Error matching route rules.", t),
        {}
    }
}
async function ju(e, t={}) {
    const n = await Rw(e, t)
      , r = Be()
      , o = r._payloadCache = r._payloadCache || {};
    return n in o || (o[n] = Ip(e).then(s => s ? Mp(n).then(i => i || (delete o[n],
    null)) : (o[n] = null,
    null))),
    o[n]
}
const Aw = "_payload.json";
async function Rw(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || eo(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = Ot()
      , o = t.hash || (t.fresh ? Date.now() : r.app.buildId)
      , s = r.app.cdnURL
      , i = s && await Ip(e) ? s : r.app.baseURL;
    return Jc(i, n.pathname, Aw + (o ? `?${o}` : ""))
}
async function Mp(e) {
    const t = fetch(e).then(n => n.text().then(Lp));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function Ip(e=Mi().path) {
    if (e = Gc(e),
    (await Li()).prerendered.includes(e))
        return !0;
    const n = await tl(e);
    return !!n.prerender && !n.redirect
}
let qn = null;
async function Ow() {
    var r;
    if (qn)
        return qn;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await Lp(e.textContent || "")
      , n = e.dataset.src ? await Mp(e.dataset.src) : void 0;
    return qn = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    (r = qn.config) != null && r.public && (qn.config.public = wt(qn.config.public)),
    qn
}
async function Lp(e) {
    return await N_(e, Be()._payloadRevivers)
}
function Pw(e, t) {
    Be()._payloadRevivers[e] = t
}
const Nu = {
    NuxtError: e => is(e),
    EmptyShallowRef: e => fr(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Zs(e)),
    EmptyRef: e => $e(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Zs(e)),
    ShallowRef: e => fr(e),
    ShallowReactive: e => qt(e),
    Ref: e => $e(e),
    Reactive: e => wt(e)
}
  , $w = st({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const r in Nu)
            Pw(r, Nu[r]);
        Object.assign(e.payload, ([t,n] = jr( () => e.runWithContext(Ow)),
        t = await t,
        n(),
        t)),
        window.__NUXT__ = e.payload
    }
})
  , Mw = []
  , Iw = st({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = Cw({
            plugins: Mw
        });
        Sw( () => Be().vueApp._context.provides.usehead),
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async () => {
                n = !1,
                await Op(t)
            }
            ;
            t.hooks.hook("dom:beforeRender", o => {
                o.shouldRender = !n
            }
            ),
            e.hooks.hook("page:start", () => {
                n = !0
            }
            ),
            e.hooks.hook("page:finish", () => {
                e.isHydrating || r()
            }
            ),
            e.hooks.hook("app:error", r),
            e.hooks.hook("app:suspense:resolve", r)
        }
    }
});
/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const kr = typeof document < "u";
function Lw(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Se = Object.assign;
function na(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = Bt(o) ? o.map(e) : e(o)
    }
    return n
}
const wo = () => {}
  , Bt = Array.isArray
  , Bp = /#/g
  , Bw = /&/g
  , jw = /\//g
  , Nw = /=/g
  , Dw = /\?/g
  , jp = /\+/g
  , Fw = /%5B/g
  , Hw = /%5D/g
  , Np = /%5E/g
  , Uw = /%60/g
  , Dp = /%7B/g
  , Vw = /%7C/g
  , Fp = /%7D/g
  , zw = /%20/g;
function nl(e) {
    return encodeURI("" + e).replace(Vw, "|").replace(Fw, "[").replace(Hw, "]")
}
function Kw(e) {
    return nl(e).replace(Dp, "{").replace(Fp, "}").replace(Np, "^")
}
function Za(e) {
    return nl(e).replace(jp, "%2B").replace(zw, "+").replace(Bp, "%23").replace(Bw, "%26").replace(Uw, "`").replace(Dp, "{").replace(Fp, "}").replace(Np, "^")
}
function qw(e) {
    return Za(e).replace(Nw, "%3D")
}
function Ww(e) {
    return nl(e).replace(Bp, "%23").replace(Dw, "%3F")
}
function Gw(e) {
    return e == null ? "" : Ww(e).replace(jw, "%2F")
}
function $o(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const Jw = /\/$/
  , Zw = e => e.replace(Jw, "");
function ra(e, t, n="/") {
    let r, o = {}, s = "", i = "";
    const a = t.indexOf("#");
    let c = t.indexOf("?");
    return a < c && a >= 0 && (c = -1),
    c > -1 && (r = t.slice(0, c),
    s = t.slice(c + 1, a > -1 ? a : t.length),
    o = e(s)),
    a > -1 && (r = r || t.slice(0, a),
    i = t.slice(a, t.length)),
    r = e2(r ?? t, n),
    {
        fullPath: r + (s && "?") + s + i,
        path: r,
        query: o,
        hash: $o(i)
    }
}
function Yw(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Du(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function Qw(e, t, n) {
    const r = t.matched.length - 1
      , o = n.matched.length - 1;
    return r > -1 && r === o && Zr(t.matched[r], n.matched[o]) && Hp(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Zr(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Hp(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!Xw(e[n], t[n]))
            return !1;
    return !0
}
function Xw(e, t) {
    return Bt(e) ? Fu(e, t) : Bt(t) ? Fu(t, e) : e === t
}
function Fu(e, t) {
    return Bt(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function e2(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1, i, a;
    for (i = 0; i < r.length; i++)
        if (a = r[i],
        a !== ".")
            if (a === "..")
                s > 1 && s--;
            else
                break;
    return n.slice(0, s).join("/") + "/" + r.slice(i).join("/")
}
const Mt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var Mo;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(Mo || (Mo = {}));
var Co;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Co || (Co = {}));
function t2(e) {
    if (!e)
        if (kr) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    Zw(e)
}
const n2 = /^[^#]+#/;
function r2(e, t) {
    return e.replace(n2, "#") + t
}
function o2(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const Bi = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function s2(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o)
            return;
        t = o2(o, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Hu(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Ya = new Map;
function i2(e, t) {
    Ya.set(e, t)
}
function a2(e) {
    const t = Ya.get(e);
    return Ya.delete(e),
    t
}
let c2 = () => location.protocol + "//" + location.host;
function Up(e, t) {
    const {pathname: n, search: r, hash: o} = t
      , s = e.indexOf("#");
    if (s > -1) {
        let a = o.includes(e.slice(s)) ? e.slice(s).length : 1
          , c = o.slice(a);
        return c[0] !== "/" && (c = "/" + c),
        Du(c, "")
    }
    return Du(n, e) + r + o
}
function l2(e, t, n, r) {
    let o = []
      , s = []
      , i = null;
    const a = ({state: d}) => {
        const h = Up(e, location)
          , m = n.value
          , p = t.value;
        let S = 0;
        if (d) {
            if (n.value = h,
            t.value = d,
            i && i === m) {
                i = null;
                return
            }
            S = p ? d.position - p.position : 0
        } else
            r(h);
        o.forEach(k => {
            k(n.value, m, {
                delta: S,
                type: Mo.pop,
                direction: S ? S > 0 ? Co.forward : Co.back : Co.unknown
            })
        }
        )
    }
    ;
    function c() {
        i = n.value
    }
    function l(d) {
        o.push(d);
        const h = () => {
            const m = o.indexOf(d);
            m > -1 && o.splice(m, 1)
        }
        ;
        return s.push(h),
        h
    }
    function u() {
        const {history: d} = window;
        d.state && d.replaceState(Se({}, d.state, {
            scroll: Bi()
        }), "")
    }
    function f() {
        for (const d of s)
            d();
        s = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, {
        passive: !0
    }),
    {
        pauseListeners: c,
        listen: l,
        destroy: f
    }
}
function Uu(e, t, n, r=!1, o=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? Bi() : null
    }
}
function u2(e) {
    const {history: t, location: n} = window
      , r = {
        value: Up(e, n)
    }
      , o = {
        value: t.state
    };
    o.value || s(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function s(c, l, u) {
        const f = e.indexOf("#")
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c : c2() + e + c;
        try {
            t[u ? "replaceState" : "pushState"](l, "", d),
            o.value = l
        } catch (h) {
            console.error(h),
            n[u ? "replace" : "assign"](d)
        }
    }
    function i(c, l) {
        const u = Se({}, t.state, Uu(o.value.back, c, o.value.forward, !0), l, {
            position: o.value.position
        });
        s(c, u, !0),
        r.value = c
    }
    function a(c, l) {
        const u = Se({}, o.value, t.state, {
            forward: c,
            scroll: Bi()
        });
        s(u.current, u, !0);
        const f = Se({}, Uu(r.value, c, null), {
            position: u.position + 1
        }, l);
        s(c, f, !1),
        r.value = c
    }
    return {
        location: r,
        state: o,
        push: a,
        replace: i
    }
}
function Vp(e) {
    e = t2(e);
    const t = u2(e)
      , n = l2(e, t.state, t.location, t.replace);
    function r(s, i=!0) {
        i || n.pauseListeners(),
        history.go(s)
    }
    const o = Se({
        location: "",
        base: e,
        go: r,
        createHref: r2.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    o
}
function f2(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    Vp(e)
}
function d2(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function zp(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Kp = Symbol("");
var Vu;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(Vu || (Vu = {}));
function Yr(e, t) {
    return Se(new Error, {
        type: e,
        [Kp]: !0
    }, t)
}
function Ht(e, t) {
    return e instanceof Error && Kp in e && (t == null || !!(e.type & t))
}
const zu = "[^/]+?"
  , h2 = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , p2 = /[.+*?^${}()[\]/\\]/g;
function g2(e, t) {
    const n = Se({}, h2, t)
      , r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const l of e) {
        const u = l.length ? [] : [90];
        n.strict && !l.length && (o += "/");
        for (let f = 0; f < l.length; f++) {
            const d = l[f];
            let h = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (o += "/"),
                o += d.value.replace(p2, "\\$&"),
                h += 40;
            else if (d.type === 1) {
                const {value: m, repeatable: p, optional: S, regexp: k} = d;
                s.push({
                    name: m,
                    repeatable: p,
                    optional: S
                });
                const y = k || zu;
                if (y !== zu) {
                    h += 10;
                    try {
                        new RegExp(`(${y})`)
                    } catch (w) {
                        throw new Error(`Invalid custom RegExp for param "${m}" (${y}): ` + w.message)
                    }
                }
                let g = p ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
                f || (g = S && l.length < 2 ? `(?:/${g})` : "/" + g),
                S && (g += "?"),
                o += g,
                h += 20,
                S && (h += -8),
                p && (h += -20),
                y === ".*" && (h += -50)
            }
            u.push(h)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const l = r.length - 1;
        r[l][r[l].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"),
    n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const i = new RegExp(o,n.sensitive ? "" : "i");
    function a(l) {
        const u = l.match(i)
          , f = {};
        if (!u)
            return null;
        for (let d = 1; d < u.length; d++) {
            const h = u[d] || ""
              , m = s[d - 1];
            f[m.name] = h && m.repeatable ? h.split("/") : h
        }
        return f
    }
    function c(l) {
        let u = ""
          , f = !1;
        for (const d of e) {
            (!f || !u.endsWith("/")) && (u += "/"),
            f = !1;
            for (const h of d)
                if (h.type === 0)
                    u += h.value;
                else if (h.type === 1) {
                    const {value: m, repeatable: p, optional: S} = h
                      , k = m in l ? l[m] : "";
                    if (Bt(k) && !p)
                        throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
                    const y = Bt(k) ? k.join("/") : k;
                    if (!y)
                        if (S)
                            d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${m}"`);
                    u += y
                }
        }
        return u || "/"
    }
    return {
        re: i,
        score: r,
        keys: s,
        parse: a,
        stringify: c
    }
}
function m2(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function qp(e, t) {
    let n = 0;
    const r = e.score
      , o = t.score;
    for (; n < r.length && n < o.length; ) {
        const s = m2(r[n], o[n]);
        if (s)
            return s;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (Ku(r))
            return 1;
        if (Ku(o))
            return -1
    }
    return o.length - r.length
}
function Ku(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const y2 = {
    type: 0,
    value: ""
}
  , b2 = /[a-zA-Z0-9_]/;
function v2(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[y2]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(h) {
        throw new Error(`ERR (${n})/"${l}": ${h}`)
    }
    let n = 0
      , r = n;
    const o = [];
    let s;
    function i() {
        s && o.push(s),
        s = []
    }
    let a = 0, c, l = "", u = "";
    function f() {
        l && (n === 0 ? s.push({
            type: 0,
            value: l
        }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),
        s.push({
            type: 1,
            value: l,
            regexp: u,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"),
        l = "")
    }
    function d() {
        l += c
    }
    for (; a < e.length; ) {
        if (c = e[a++],
        c === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            c === "/" ? (l && f(),
            i()) : c === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            c === "(" ? n = 2 : b2.test(c) ? d() : (f(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && a--);
            break;
        case 2:
            c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
            break;
        case 3:
            f(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && a--,
            u = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${l}"`),
    f(),
    i(),
    o
}
function _2(e, t, n) {
    const r = g2(v2(e.path), n)
      , o = Se(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o),
    o
}
function w2(e, t) {
    const n = []
      , r = new Map;
    t = Gu({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function o(f) {
        return r.get(f)
    }
    function s(f, d, h) {
        const m = !h
          , p = C2(f);
        p.aliasOf = h && h.record;
        const S = Gu(t, f)
          , k = [p];
        if ("alias"in f) {
            const w = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const T of w)
                k.push(Se({}, p, {
                    components: h ? h.record.components : p.components,
                    path: T,
                    aliasOf: h ? h.record : p
                }))
        }
        let y, g;
        for (const w of k) {
            const {path: T} = w;
            if (d && T[0] !== "/") {
                const A = d.record.path
                  , $ = A[A.length - 1] === "/" ? "" : "/";
                w.path = d.record.path + (T && $ + T)
            }
            if (y = _2(w, d, S),
            h ? h.alias.push(y) : (g = g || y,
            g !== y && g.alias.push(y),
            m && f.name && !Wu(y) && i(f.name)),
            Wp(y) && c(y),
            p.children) {
                const A = p.children;
                for (let $ = 0; $ < A.length; $++)
                    s(A[$], y, h && h.children[$])
            }
            h = h || y
        }
        return g ? () => {
            i(g)
        }
        : wo
    }
    function i(f) {
        if (zp(f)) {
            const d = r.get(f);
            d && (r.delete(f),
            n.splice(n.indexOf(d), 1),
            d.children.forEach(i),
            d.alias.forEach(i))
        } else {
            const d = n.indexOf(f);
            d > -1 && (n.splice(d, 1),
            f.record.name && r.delete(f.record.name),
            f.children.forEach(i),
            f.alias.forEach(i))
        }
    }
    function a() {
        return n
    }
    function c(f) {
        const d = k2(f, n);
        n.splice(d, 0, f),
        f.record.name && !Wu(f) && r.set(f.record.name, f)
    }
    function l(f, d) {
        let h, m = {}, p, S;
        if ("name"in f && f.name) {
            if (h = r.get(f.name),
            !h)
                throw Yr(1, {
                    location: f
                });
            S = h.record.name,
            m = Se(qu(d.params, h.keys.filter(g => !g.optional).concat(h.parent ? h.parent.keys.filter(g => g.optional) : []).map(g => g.name)), f.params && qu(f.params, h.keys.map(g => g.name))),
            p = h.stringify(m)
        } else if (f.path != null)
            p = f.path,
            h = n.find(g => g.re.test(p)),
            h && (m = h.parse(p),
            S = h.record.name);
        else {
            if (h = d.name ? r.get(d.name) : n.find(g => g.re.test(d.path)),
            !h)
                throw Yr(1, {
                    location: f,
                    currentLocation: d
                });
            S = h.record.name,
            m = Se({}, d.params, f.params),
            p = h.stringify(m)
        }
        const k = [];
        let y = h;
        for (; y; )
            k.unshift(y.record),
            y = y.parent;
        return {
            name: S,
            path: p,
            params: m,
            matched: k,
            meta: E2(k)
        }
    }
    e.forEach(f => s(f));
    function u() {
        n.length = 0,
        r.clear()
    }
    return {
        addRoute: s,
        resolve: l,
        removeRoute: i,
        clearRoutes: u,
        getRoutes: a,
        getRecordMatcher: o
    }
}
function qu(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function C2(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: S2(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function S2(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function Wu(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function E2(e) {
    return e.reduce( (t, n) => Se(t, n.meta), {})
}
function Gu(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function k2(e, t) {
    let n = 0
      , r = t.length;
    for (; n !== r; ) {
        const s = n + r >> 1;
        qp(e, t[s]) < 0 ? r = s : n = s + 1
    }
    const o = T2(e);
    return o && (r = t.lastIndexOf(o, r - 1)),
    r
}
function T2(e) {
    let t = e;
    for (; t = t.parent; )
        if (Wp(t) && qp(e, t) === 0)
            return t
}
function Wp({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function x2(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const s = r[o].replace(jp, " ")
          , i = s.indexOf("=")
          , a = $o(i < 0 ? s : s.slice(0, i))
          , c = i < 0 ? null : $o(s.slice(i + 1));
        if (a in t) {
            let l = t[a];
            Bt(l) || (l = t[a] = [l]),
            l.push(c)
        } else
            t[a] = c
    }
    return t
}
function Ju(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = qw(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Bt(r) ? r.map(s => s && Za(s)) : [r && Za(r)]).forEach(s => {
            s !== void 0 && (t += (t.length ? "&" : "") + n,
            s != null && (t += "=" + s))
        }
        )
    }
    return t
}
function A2(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = Bt(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const R2 = Symbol("")
  , Zu = Symbol("")
  , rl = Symbol("")
  , ol = Symbol("")
  , Qa = Symbol("");
function so() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function bn(e, t, n, r, o, s=i => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise( (a, c) => {
        const l = d => {
            d === !1 ? c(Yr(4, {
                from: n,
                to: t
            })) : d instanceof Error ? c(d) : d2(d) ? c(Yr(2, {
                from: t,
                to: d
            })) : (i && r.enterCallbacks[o] === i && typeof d == "function" && i.push(d),
            a())
        }
          , u = s( () => e.call(r && r.instances[o], t, n, l));
        let f = Promise.resolve(u);
        e.length < 3 && (f = f.then(l)),
        f.catch(d => c(d))
    }
    )
}
function oa(e, t, n, r, o=s => s()) {
    const s = [];
    for (const i of e)
        for (const a in i.components) {
            let c = i.components[a];
            if (!(t !== "beforeRouteEnter" && !i.instances[a]))
                if (O2(c)) {
                    const u = (c.__vccOpts || c)[t];
                    u && s.push(bn(u, n, r, i, a, o))
                } else {
                    let l = c();
                    s.push( () => l.then(u => {
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));
                        const f = Lw(u) ? u.default : u;
                        i.components[a] = f;
                        const h = (f.__vccOpts || f)[t];
                        return h && bn(h, n, r, i, a, o)()
                    }
                    ))
                }
        }
    return s
}
function O2(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function Yu(e) {
    const t = rt(rl)
      , n = rt(ol)
      , r = vt( () => {
        const c = ce(e.to);
        return t.resolve(c)
    }
    )
      , o = vt( () => {
        const {matched: c} = r.value
          , {length: l} = c
          , u = c[l - 1]
          , f = n.matched;
        if (!u || !f.length)
            return -1;
        const d = f.findIndex(Zr.bind(null, u));
        if (d > -1)
            return d;
        const h = Qu(c[l - 2]);
        return l > 1 && Qu(u) === h && f[f.length - 1].path !== h ? f.findIndex(Zr.bind(null, c[l - 2])) : d
    }
    )
      , s = vt( () => o.value > -1 && I2(n.params, r.value.params))
      , i = vt( () => o.value > -1 && o.value === n.matched.length - 1 && Hp(n.params, r.value.params));
    function a(c={}) {
        return M2(c) ? t[ce(e.replace) ? "replace" : "push"](ce(e.to)).catch(wo) : Promise.resolve()
    }
    return {
        route: r,
        href: vt( () => r.value.href),
        isActive: s,
        isExactActive: i,
        navigate: a
    }
}
const P2 = Ct({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Yu,
    setup(e, {slots: t}) {
        const n = wt(Yu(e))
          , {options: r} = rt(rl)
          , o = vt( () => ({
            [Xu(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [Xu(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const s = t.default && t.default(n);
            return e.custom ? s : pe("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
            }, s)
        }
    }
})
  , $2 = P2;
function M2(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function I2(e, t) {
    for (const n in t) {
        const r = t[n]
          , o = e[n];
        if (typeof r == "string") {
            if (r !== o)
                return !1
        } else if (!Bt(o) || o.length !== r.length || r.some( (s, i) => s !== o[i]))
            return !1
    }
    return !0
}
function Qu(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Xu = (e, t, n) => e ?? t ?? n
  , L2 = Ct({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = rt(Qa)
          , o = vt( () => e.route || r.value)
          , s = rt(Zu, 0)
          , i = vt( () => {
            let l = ce(s);
            const {matched: u} = o.value;
            let f;
            for (; (f = u[l]) && !f.components; )
                l++;
            return l
        }
        )
          , a = vt( () => o.value.matched[i.value]);
        sr(Zu, vt( () => i.value + 1)),
        sr(R2, a),
        sr(Qa, o);
        const c = $e();
        return Lt( () => [c.value, a.value, e.name], ([l,u,f], [d,h,m]) => {
            u && (u.instances[f] = l,
            h && h !== u && l && l === d && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards),
            u.updateGuards.size || (u.updateGuards = h.updateGuards))),
            l && u && (!h || !Zr(u, h) || !d) && (u.enterCallbacks[f] || []).forEach(p => p(l))
        }
        , {
            flush: "post"
        }),
        () => {
            const l = o.value
              , u = e.name
              , f = a.value
              , d = f && f.components[u];
            if (!d)
                return ef(n.default, {
                    Component: d,
                    route: l
                });
            const h = f.props[u]
              , m = h ? h === !0 ? l.params : typeof h == "function" ? h(l) : h : null
              , S = pe(d, Se({}, m, t, {
                onVnodeUnmounted: k => {
                    k.component.isUnmounted && (f.instances[u] = null)
                }
                ,
                ref: c
            }));
            return ef(n.default, {
                Component: S,
                route: l
            }) || S
        }
    }
});
function ef(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Gp = L2;
function B2(e) {
    const t = w2(e.routes, e)
      , n = e.parseQuery || x2
      , r = e.stringifyQuery || Ju
      , o = e.history
      , s = so()
      , i = so()
      , a = so()
      , c = fr(Mt);
    let l = Mt;
    kr && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = na.bind(null, B => "" + B)
      , f = na.bind(null, Gw)
      , d = na.bind(null, $o);
    function h(B, J) {
        let z, X;
        return zp(B) ? (z = t.getRecordMatcher(B),
        X = J) : X = B,
        t.addRoute(X, z)
    }
    function m(B) {
        const J = t.getRecordMatcher(B);
        J && t.removeRoute(J)
    }
    function p() {
        return t.getRoutes().map(B => B.record)
    }
    function S(B) {
        return !!t.getRecordMatcher(B)
    }
    function k(B, J) {
        if (J = Se({}, J || c.value),
        typeof B == "string") {
            const E = ra(n, B, J.path)
              , M = t.resolve({
                path: E.path
            }, J)
              , D = o.createHref(E.fullPath);
            return Se(E, M, {
                params: d(M.params),
                hash: $o(E.hash),
                redirectedFrom: void 0,
                href: D
            })
        }
        let z;
        if (B.path != null)
            z = Se({}, B, {
                path: ra(n, B.path, J.path).path
            });
        else {
            const E = Se({}, B.params);
            for (const M in E)
                E[M] == null && delete E[M];
            z = Se({}, B, {
                params: f(E)
            }),
            J.params = f(J.params)
        }
        const X = t.resolve(z, J)
          , we = B.hash || "";
        X.params = u(d(X.params));
        const Oe = Yw(r, Se({}, B, {
            hash: Kw(we),
            path: X.path
        }))
          , b = o.createHref(Oe);
        return Se({
            fullPath: Oe,
            hash: we,
            query: r === Ju ? A2(B.query) : B.query || {}
        }, X, {
            redirectedFrom: void 0,
            href: b
        })
    }
    function y(B) {
        return typeof B == "string" ? ra(n, B, c.value.path) : Se({}, B)
    }
    function g(B, J) {
        if (l !== B)
            return Yr(8, {
                from: J,
                to: B
            })
    }
    function w(B) {
        return $(B)
    }
    function T(B) {
        return w(Se(y(B), {
            replace: !0
        }))
    }
    function A(B) {
        const J = B.matched[B.matched.length - 1];
        if (J && J.redirect) {
            const {redirect: z} = J;
            let X = typeof z == "function" ? z(B) : z;
            return typeof X == "string" && (X = X.includes("?") || X.includes("#") ? X = y(X) : {
                path: X
            },
            X.params = {}),
            Se({
                query: B.query,
                hash: B.hash,
                params: X.path != null ? {} : B.params
            }, X)
        }
    }
    function $(B, J) {
        const z = l = k(B)
          , X = c.value
          , we = B.state
          , Oe = B.force
          , b = B.replace === !0
          , E = A(z);
        if (E)
            return $(Se(y(E), {
                state: typeof E == "object" ? Se({}, we, E.state) : we,
                force: Oe,
                replace: b
            }), J || z);
        const M = z;
        M.redirectedFrom = J;
        let D;
        return !Oe && Qw(r, X, z) && (D = Yr(16, {
            to: M,
            from: X
        }),
        ae(X, X, !0, !1)),
        (D ? Promise.resolve(D) : C(M, X)).catch(j => Ht(j) ? Ht(j, 2) ? j : he(j) : F(j, M, X)).then(j => {
            if (j) {
                if (Ht(j, 2))
                    return $(Se({
                        replace: b
                    }, y(j.to), {
                        state: typeof j.to == "object" ? Se({}, we, j.to.state) : we,
                        force: Oe
                    }), J || M)
            } else
                j = _(M, X, !0, b, we);
            return v(M, X, j),
            j
        }
        )
    }
    function N(B, J) {
        const z = g(B, J);
        return z ? Promise.reject(z) : Promise.resolve()
    }
    function I(B) {
        const J = _e.values().next().value;
        return J && typeof J.runWithContext == "function" ? J.runWithContext(B) : B()
    }
    function C(B, J) {
        let z;
        const [X,we,Oe] = j2(B, J);
        z = oa(X.reverse(), "beforeRouteLeave", B, J);
        for (const E of X)
            E.leaveGuards.forEach(M => {
                z.push(bn(M, B, J))
            }
            );
        const b = N.bind(null, B, J);
        return z.push(b),
        xe(z).then( () => {
            z = [];
            for (const E of s.list())
                z.push(bn(E, B, J));
            return z.push(b),
            xe(z)
        }
        ).then( () => {
            z = oa(we, "beforeRouteUpdate", B, J);
            for (const E of we)
                E.updateGuards.forEach(M => {
                    z.push(bn(M, B, J))
                }
                );
            return z.push(b),
            xe(z)
        }
        ).then( () => {
            z = [];
            for (const E of Oe)
                if (E.beforeEnter)
                    if (Bt(E.beforeEnter))
                        for (const M of E.beforeEnter)
                            z.push(bn(M, B, J));
                    else
                        z.push(bn(E.beforeEnter, B, J));
            return z.push(b),
            xe(z)
        }
        ).then( () => (B.matched.forEach(E => E.enterCallbacks = {}),
        z = oa(Oe, "beforeRouteEnter", B, J, I),
        z.push(b),
        xe(z))).then( () => {
            z = [];
            for (const E of i.list())
                z.push(bn(E, B, J));
            return z.push(b),
            xe(z)
        }
        ).catch(E => Ht(E, 8) ? E : Promise.reject(E))
    }
    function v(B, J, z) {
        a.list().forEach(X => I( () => X(B, J, z)))
    }
    function _(B, J, z, X, we) {
        const Oe = g(B, J);
        if (Oe)
            return Oe;
        const b = J === Mt
          , E = kr ? history.state : {};
        z && (X || b ? o.replace(B.fullPath, Se({
            scroll: b && E && E.scroll
        }, we)) : o.push(B.fullPath, we)),
        c.value = B,
        ae(B, J, z, b),
        he()
    }
    let x;
    function O() {
        x || (x = o.listen( (B, J, z) => {
            if (!Ie.listening)
                return;
            const X = k(B)
              , we = A(X);
            if (we) {
                $(Se(we, {
                    replace: !0
                }), X).catch(wo);
                return
            }
            l = X;
            const Oe = c.value;
            kr && i2(Hu(Oe.fullPath, z.delta), Bi()),
            C(X, Oe).catch(b => Ht(b, 12) ? b : Ht(b, 2) ? ($(b.to, X).then(E => {
                Ht(E, 20) && !z.delta && z.type === Mo.pop && o.go(-1, !1)
            }
            ).catch(wo),
            Promise.reject()) : (z.delta && o.go(-z.delta, !1),
            F(b, X, Oe))).then(b => {
                b = b || _(X, Oe, !1),
                b && (z.delta && !Ht(b, 8) ? o.go(-z.delta, !1) : z.type === Mo.pop && Ht(b, 20) && o.go(-1, !1)),
                v(X, Oe, b)
            }
            ).catch(wo)
        }
        ))
    }
    let L = so(), P = so(), H;
    function F(B, J, z) {
        he(B);
        const X = P.list();
        return X.length ? X.forEach(we => we(B, J, z)) : console.error(B),
        Promise.reject(B)
    }
    function oe() {
        return H && c.value !== Mt ? Promise.resolve() : new Promise( (B, J) => {
            L.add([B, J])
        }
        )
    }
    function he(B) {
        return H || (H = !B,
        O(),
        L.list().forEach( ([J,z]) => B ? z(B) : J()),
        L.reset()),
        B
    }
    function ae(B, J, z, X) {
        const {scrollBehavior: we} = e;
        if (!kr || !we)
            return Promise.resolve();
        const Oe = !z && a2(Hu(B.fullPath, 0)) || (X || !z) && history.state && history.state.scroll || null;
        return Hn().then( () => we(B, J, Oe)).then(b => b && s2(b)).catch(b => F(b, B, J))
    }
    const de = B => o.go(B);
    let Re;
    const _e = new Set
      , Ie = {
        currentRoute: c,
        listening: !0,
        addRoute: h,
        removeRoute: m,
        clearRoutes: t.clearRoutes,
        hasRoute: S,
        getRoutes: p,
        resolve: k,
        options: e,
        push: w,
        replace: T,
        go: de,
        back: () => de(-1),
        forward: () => de(1),
        beforeEach: s.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: P.add,
        isReady: oe,
        install(B) {
            const J = this;
            B.component("RouterLink", $2),
            B.component("RouterView", Gp),
            B.config.globalProperties.$router = J,
            Object.defineProperty(B.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => ce(c)
            }),
            kr && !Re && c.value === Mt && (Re = !0,
            w(o.location).catch(we => {}
            ));
            const z = {};
            for (const we in Mt)
                Object.defineProperty(z, we, {
                    get: () => c.value[we],
                    enumerable: !0
                });
            B.provide(rl, J),
            B.provide(ol, qt(z)),
            B.provide(Qa, c);
            const X = B.unmount;
            _e.add(B),
            B.unmount = function() {
                _e.delete(B),
                _e.size < 1 && (l = Mt,
                x && x(),
                x = null,
                c.value = Mt,
                Re = !1,
                H = !1),
                X()
            }
        }
    };
    function xe(B) {
        return B.reduce( (J, z) => J.then( () => I(z)), Promise.resolve())
    }
    return Ie
}
function j2(e, t) {
    const n = []
      , r = []
      , o = []
      , s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
        const a = t.matched[i];
        a && (e.matched.find(l => Zr(l, a)) ? r.push(a) : n.push(a));
        const c = e.matched[i];
        c && (t.matched.find(l => Zr(l, c)) || o.push(c))
    }
    return [n, r, o]
}
function PR(e) {
    return rt(ol)
}
const N2 = (e, t) => t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
    var r;
    return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , Xa = (e, t) => {
    const n = e.route.matched.find(o => {
        var s;
        return ((s = o.components) == null ? void 0 : s.default) === e.Component.type
    }
    )
      , r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && N2(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , D2 = (e, t) => ({
    default: () => e ? pe(Ud, e === !0 ? {} : e, t) : t
});
function sl(e) {
    return Array.isArray(e) ? e : [e]
}
const F2 = "modulepreload"
  , H2 = function(e, t) {
    return new URL(e,t).href
}
  , tf = {}
  , U2 = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        const s = document.getElementsByTagName("link")
          , i = document.querySelector("meta[property=csp-nonce]")
          , a = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
        o = Promise.all(n.map(c => {
            if (c = H2(c, r),
            c in tf)
                return;
            tf[c] = !0;
            const l = c.endsWith(".css")
              , u = l ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let h = s.length - 1; h >= 0; h--) {
                    const m = s[h];
                    if (m.href === c && (!l || m.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${c}"]${u}`))
                return;
            const d = document.createElement("link");
            if (d.rel = l ? "stylesheet" : F2,
            l || (d.as = "script",
            d.crossOrigin = ""),
            d.href = c,
            a && d.setAttribute("nonce", a),
            document.head.appendChild(d),
            l)
                return new Promise( (h, m) => {
                    d.addEventListener("load", h),
                    d.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${c}`)))
                }
                )
        }
        ))
    }
    return o.then( () => t()).catch(s => {
        const i = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (i.payload = s,
        window.dispatchEvent(i),
        !i.defaultPrevented)
            throw s
    }
    )
}
  , ye = (...e) => U2(...e).catch(t => {
    const n = new Event("nuxt.preloadError");
    throw n.payload = t,
    window.dispatchEvent(n),
    t
}
)
  , sa = [{
    name: "slug",
    path: "/:slug?",
    component: () => ye( () => import("./1lRpxsaJ.js"), __vite__mapDeps([0, 1]), import.meta.url).then(e => e.default || e)
}]
  , V2 = (e, t, n) => (t = t === !0 ? {} : t,
{
    default: () => {
        var r;
        return t ? pe(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
});
function nf(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof t == "function" ? t(e) : t
}
function z2(e, t) {
    return e === t || t === Mt ? !1 : nf(e) !== nf(t) ? !0 : !e.matched.every( (r, o) => {
        var s, i;
        return r.components && r.components.default === ((i = (s = t.matched[o]) == null ? void 0 : s.components) == null ? void 0 : i.default)
    }
    )
}
const K2 = {
    scrollBehavior(e, t, n) {
        var l;
        const r = Be()
          , o = ((l = Dt().options) == null ? void 0 : l.scrollBehaviorType) ?? "auto";
        let s = n || void 0;
        const i = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!s && t && e && i !== !1 && z2(e, t) && (s = {
            left: 0,
            top: 0
        }),
        e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: rf(e.hash),
                behavior: o
            } : !1;
        const a = u => !!(u.meta.pageTransition ?? Ha)
          , c = a(t) && a(e) ? "page:transition:finish" : "page:finish";
        return new Promise(u => {
            r.hooks.hookOnce(c, async () => {
                await new Promise(f => setTimeout(f, 0)),
                e.hash && (s = {
                    el: e.hash,
                    top: rf(e.hash),
                    behavior: o
                }),
                u(s)
            }
            )
        }
        )
    }
};
function rf(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
    } catch {}
    return 0
}
const q2 = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , Et = {
    ...q2,
    ...K2
}
  , W2 = async e => {
    var c;
    let t, n;
    if (!((c = e.meta) != null && c.validate))
        return;
    const r = Be()
      , o = Dt()
      , s = ([t,n] = jr( () => Promise.resolve(e.meta.validate(e))),
    t = await t,
    n(),
    t);
    if (s === !0)
        return;
    const i = is({
        statusCode: s && s.statusCode || 404,
        statusMessage: s && s.statusMessage || `Page Not Found: ${e.fullPath}`,
        data: {
            path: e.fullPath
        }
    })
      , a = o.beforeResolve(l => {
        if (a(),
        l === e) {
            const u = o.afterEach(async () => {
                u(),
                await r.runWithContext( () => Ar(i)),
                window == null || window.history.pushState({}, "", e.fullPath)
            }
            );
            return !1
        }
    }
    )
}
  , G2 = async e => {
    let t, n;
    const r = ([t,n] = jr( () => tl(e.path)),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return eo(r.redirect, {
            acceptRelative: !0
        }) ? (window.location.href = r.redirect,
        !1) : r.redirect
}
  , J2 = [W2, G2]
  , So = {};
function Z2(e, t, n) {
    const {pathname: r, search: o, hash: s} = t
      , i = e.indexOf("#");
    if (i > -1) {
        const l = s.includes(e.slice(i)) ? e.slice(i).length : 1;
        let u = s.slice(l);
        return u[0] !== "/" && (u = "/" + u),
        vu(u, "")
    }
    const a = vu(r, e)
      , c = !n || mv(a, n, {
        trailingSlash: !0
    }) ? a : n;
    return c + (c.includes("?") ? "" : o) + s
}
const Y2 = st({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var S;
        let t, n, r = Ot().app.baseURL;
        Et.hashMode && !r.includes("#") && (r += "#");
        const o = ((S = Et.history) == null ? void 0 : S.call(Et, r)) ?? (Et.hashMode ? f2(r) : Vp(r))
          , s = Et.routes ? ([t,n] = jr( () => Et.routes(sa)),
        t = await t,
        n(),
        t ?? sa) : sa;
        let i;
        const a = B2({
            ...Et,
            scrollBehavior: (k, y, g) => {
                if (y === Mt) {
                    i = g;
                    return
                }
                if (Et.scrollBehavior) {
                    if (a.options.scrollBehavior = Et.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const w = a.beforeEach( () => {
                            w(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return Et.scrollBehavior(k, Mt, i || g)
                }
            }
            ,
            history: o,
            routes: s
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(a);
        const c = fr(a.currentRoute.value);
        a.afterEach( (k, y) => {
            c.value = y
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: () => c.value
        });
        const l = Z2(r, window.location, e.payload.path)
          , u = fr(a.currentRoute.value)
          , f = () => {
            u.value = a.currentRoute.value
        }
        ;
        e.hook("page:finish", f),
        a.afterEach( (k, y) => {
            var g, w, T, A;
            ((w = (g = k.matched[0]) == null ? void 0 : g.components) == null ? void 0 : w.default) === ((A = (T = y.matched[0]) == null ? void 0 : T.components) == null ? void 0 : A.default) && f()
        }
        );
        const d = {};
        for (const k in u.value)
            Object.defineProperty(d, k, {
                get: () => u.value[k]
            });
        e._route = qt(d),
        e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        const h = Ii();
        a.afterEach(async (k, y, g) => {
            delete e._processingMiddleware,
            !e.isHydrating && h.value && await e.runWithContext(O_),
            g && await e.callHook("page:loading:end"),
            k.matched.length === 0 && await e.runWithContext( () => Ar(za({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${k.fullPath}`,
                data: {
                    path: k.fullPath
                }
            })))
        }
        );
        try {
            [t,n] = jr( () => a.isReady()),
            await t,
            n()
        } catch (k) {
            [t,n] = jr( () => e.runWithContext( () => Ar(k))),
            await t,
            n()
        }
        const m = l !== a.currentRoute.value.fullPath ? a.resolve(l) : a.currentRoute.value;
        f();
        const p = e.payload.state._layout;
        return a.beforeEach(async (k, y) => {
            var g;
            await e.callHook("page:loading:start"),
            k.meta = wt(k.meta),
            e.isHydrating && p && !an(k.meta.layout) && (k.meta.layout = p),
            e._processingMiddleware = !0;
            {
                const w = new Set([...J2, ...e._middleware.global]);
                for (const T of k.matched) {
                    const A = T.meta.middleware;
                    if (A)
                        for (const $ of sl(A))
                            w.add($)
                }
                {
                    const T = await e.runWithContext( () => tl(k.path));
                    if (T.appMiddleware)
                        for (const A in T.appMiddleware)
                            T.appMiddleware[A] ? w.add(A) : w.delete(A)
                }
                for (const T of w) {
                    const A = typeof T == "string" ? e._middleware.named[T] || await ((g = So[T]) == null ? void 0 : g.call(So).then(N => N.default || N)) : T;
                    if (!A)
                        throw new Error(`Unknown route middleware: '${T}'.`);
                    const $ = await e.runWithContext( () => A(k, y));
                    if (!e.payload.serverRendered && e.isHydrating && ($ === !1 || $ instanceof Error)) {
                        const N = $ || za({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${l}`
                        });
                        return await e.runWithContext( () => Ar(N)),
                        !1
                    }
                    if ($ !== !0 && ($ || $ === !1))
                        return $
                }
            }
        }
        ),
        a.onError(async () => {
            delete e._processingMiddleware,
            await e.callHook("page:loading:end")
        }
        ),
        e.hooks.hookOnce("app:created", async () => {
            try {
                "name"in m && (m.name = void 0),
                await a.replace({
                    ...m,
                    force: !0
                }),
                a.options.scrollBehavior = Et.scrollBehavior
            } catch (k) {
                await e.runWithContext( () => Ar(k))
            }
        }
        ),
        {
            provide: {
                router: a
            }
        }
    }
})
  , of = globalThis.requestIdleCallback || (e => {
    const t = Date.now()
      , n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout( () => {
        e(n)
    }
    , 1)
}
)
  , ji = e => {
    const t = Be();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
        of( () => e())
    }
    ) : of( () => e())
}
  , Q2 = e => e === "defer" || e === !1;
function X2(...e) {
    var p;
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    let[n,r,o={}] = e;
    if (typeof n != "string")
        throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof r != "function")
        throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    const s = Be()
      , i = r
      , a = () => Tr.value
      , c = () => s.isHydrating ? s.payload.data[n] : s.static.data[n];
    o.server = o.server ?? !0,
    o.default = o.default ?? a,
    o.getCachedData = o.getCachedData ?? c,
    o.lazy = o.lazy ?? !1,
    o.immediate = o.immediate ?? !0,
    o.deep = o.deep ?? Tr.deep,
    o.dedupe = o.dedupe ?? "cancel";
    const l = o.getCachedData(n, s)
      , u = l != null;
    if (!s._asyncData[n] || !o.immediate) {
        (p = s.payload._errors)[n] ?? (p[n] = Tr.errorValue);
        const S = o.deep ? $e : fr;
        s._asyncData[n] = {
            data: S(u ? l : o.default()),
            pending: $e(!u),
            error: _i(s.payload._errors, n),
            status: $e("idle"),
            _default: o.default
        }
    }
    const f = {
        ...s._asyncData[n]
    };
    delete f._default,
    f.refresh = f.execute = (S={}) => {
        if (s._asyncDataPromises[n]) {
            if (Q2(S.dedupe ?? o.dedupe))
                return s._asyncDataPromises[n];
            s._asyncDataPromises[n].cancelled = !0
        }
        if (S._initial || s.isHydrating && S._initial !== !1) {
            const y = S._initial ? l : o.getCachedData(n, s);
            if (y != null)
                return Promise.resolve(y)
        }
        f.pending.value = !0,
        f.status.value = "pending";
        const k = new Promise( (y, g) => {
            try {
                y(i(s))
            } catch (w) {
                g(w)
            }
        }
        ).then(async y => {
            if (k.cancelled)
                return s._asyncDataPromises[n];
            let g = y;
            o.transform && (g = await o.transform(y)),
            o.pick && (g = tC(g, o.pick)),
            s.payload.data[n] = g,
            f.data.value = g,
            f.error.value = Tr.errorValue,
            f.status.value = "success"
        }
        ).catch(y => {
            if (k.cancelled)
                return s._asyncDataPromises[n];
            f.error.value = is(y),
            f.data.value = ce(o.default()),
            f.status.value = "error"
        }
        ).finally( () => {
            k.cancelled || (f.pending.value = !1,
            delete s._asyncDataPromises[n])
        }
        );
        return s._asyncDataPromises[n] = k,
        s._asyncDataPromises[n]
    }
    ,
    f.clear = () => eC(s, n);
    const d = () => f.refresh({
        _initial: !0
    })
      , h = o.server !== !1 && s.payload.serverRendered;
    {
        const S = mt();
        if (S && !S._nuxtOnBeforeMountCbs) {
            S._nuxtOnBeforeMountCbs = [];
            const g = S._nuxtOnBeforeMountCbs;
            xi( () => {
                g.forEach(w => {
                    w()
                }
                ),
                g.splice(0, g.length)
            }
            ),
            es( () => g.splice(0, g.length))
        }
        h && s.isHydrating && (f.error.value || l != null) ? (f.pending.value = !1,
        f.status.value = f.error.value ? "error" : "success") : S && (s.payload.serverRendered && s.isHydrating || o.lazy) && o.immediate ? S._nuxtOnBeforeMountCbs.push(d) : o.immediate && d();
        const k = mi();
        if (o.watch) {
            const g = Lt(o.watch, () => f.refresh());
            k && lr(g)
        }
        const y = s.hook("app:data:refresh", async g => {
            (!g || g.includes(n)) && await f.refresh()
        }
        );
        k && lr(y)
    }
    const m = Promise.resolve(s._asyncDataPromises[n]).then( () => f);
    return Object.assign(m, f),
    m
}
function eC(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0),
    t in e.payload._errors && (e.payload._errors[t] = Tr.errorValue),
    e._asyncData[t] && (e._asyncData[t].data.value = void 0,
    e._asyncData[t].error.value = Tr.errorValue,
    e._asyncData[t].pending.value = !1,
    e._asyncData[t].status.value = "idle"),
    t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = !0),
    e._asyncDataPromises[t] = void 0)
}
function tC(e, t) {
    const n = {};
    for (const r of t)
        n[r] = e[r];
    return n
}
const nC = "$s";
function oi(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n,r] = e;
    if (!n || typeof n != "string")
        throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function")
        throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = nC + n
      , s = Be()
      , i = _i(s.payload.state, o);
    if (i.value === void 0 && r) {
        const a = r();
        if (Ye(a))
            return s.payload.state[o] = a,
            a;
        i.value = a
    }
    return i
}
function Jp(e, t, n) {
    const [r={},o] = typeof t == "string" ? [{}, t] : [t, n]
      , s = vt( () => _n(e))
      , i = r.key || __([o, typeof s.value == "string" ? s.value : "", ...rC(r)]);
    if (!i || typeof i != "string")
        throw new TypeError("[nuxt] [useFetch] key must be a string: " + i);
    if (!e)
        throw new Error("[nuxt] [useFetch] request is missing.");
    const a = i === o ? "$f" + i : i;
    if (!r.baseURL && typeof s.value == "string" && s.value[0] === "/" && s.value[1] === "/")
        throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
    const {server: c, lazy: l, default: u, transform: f, pick: d, watch: h, immediate: m, getCachedData: p, deep: S, dedupe: k, ...y} = r
      , g = wt({
        ...Jv,
        ...y,
        cache: typeof r.cache == "boolean" ? void 0 : r.cache
    })
      , w = {
        server: c,
        lazy: l,
        default: u,
        transform: f,
        pick: d,
        immediate: m,
        getCachedData: p,
        deep: S,
        dedupe: k,
        watch: h === !1 ? [] : [g, s, ...h || []]
    };
    let T;
    return X2(a, () => {
        var C;
        (C = T == null ? void 0 : T.abort) == null || C.call(T, "Request aborted as another request to the same endpoint was initiated."),
        T = typeof AbortController < "u" ? new AbortController : {};
        const $ = _n(r.timeout);
        let N;
        return $ && (N = setTimeout( () => T.abort("Request aborted due to timeout."), $),
        T.signal.onabort = () => clearTimeout(N)),
        (r.$fetch || globalThis.$fetch)(s.value, {
            signal: T.signal,
            ...g
        }).finally( () => {
            clearTimeout(N)
        }
        )
    }
    , w)
}
function rC(e) {
    var n;
    const t = [((n = _n(e.method)) == null ? void 0 : n.toUpperCase()) || "GET", _n(e.baseURL)];
    for (const r of [e.params || e.query]) {
        const o = _n(r);
        if (!o)
            continue;
        const s = {};
        for (const [i,a] of Object.entries(o))
            s[_n(i)] = _n(a);
        t.push(s)
    }
    return t
}
function Zp(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = Zs(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ?? 1e4)
            }))
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: Be().payload.state
                }))
            } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const oC = st({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(e) {
        const t = oi("site-config");
        let n = {};
        return n = t.value || window.__NUXT_SITE_CONFIG__,
        {
            provide: {
                nuxtSiteConfig: n
            }
        }
    }
})
  , sC = st({
    name: "nuxt:payload",
    setup(e) {
        Dt().beforeResolve(async (t, n) => {
            if (t.path === n.path)
                return;
            const r = await ju(t.path);
            r && Object.assign(e.static.data, r.data)
        }
        ),
        ji( () => {
            var t;
            e.hooks.hook("link:prefetch", async n => {
                const {hostname: r} = new URL(n,window.location.href);
                r === window.location.hostname && await ju(n)
            }
            ),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(Li, 1e3)
        }
        )
    }
})
  , iC = st( () => {
    const e = Dt();
    ji( () => {
        e.beforeResolve(async () => {
            await new Promise(t => {
                setTimeout(t, 100),
                requestAnimationFrame( () => {
                    setTimeout(t, 0)
                }
                )
            }
            )
        }
        )
    }
    )
}
)
  , aC = st(e => {
    let t;
    async function n() {
        const r = await Li();
        t && clearTimeout(t),
        t = setTimeout(n, Eu);
        try {
            const o = await $fetch(Zc("builds/latest.json") + `?${Date.now()}`);
            o.id !== r.id && e.hooks.callHook("app:manifest:update", o)
        } catch {}
    }
    ji( () => {
        t = setTimeout(n, Eu)
    }
    )
}
)
  , cC = st({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = Dt()
          , n = Ot()
          , r = new Set;
        t.beforeEach( () => {
            r.clear()
        }
        ),
        e.hook("app:chunkError", ({error: s}) => {
            r.add(s)
        }
        );
        function o(s) {
            const a = "href"in s && s.href[0] === "#" ? n.app.baseURL + s.href : Jc(n.app.baseURL, s.fullPath);
            Zp({
                path: a,
                persistState: !0
            })
        }
        e.hook("app:manifest:update", () => {
            t.beforeResolve(o)
        }
        ),
        t.onError( (s, i) => {
            r.has(s) && o(i)
        }
        )
    }
});
function lC(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
const uC = new Set(["onload", "onerror"]);
let fC;
function Yp() {
    return fC
}
const Qp = Symbol("ScriptProxyTarget");
function Xp() {}
Xp[Qp] = !0;
function eg(e) {
    return e.key || lC(e.src || (typeof e.innerHTML == "string" ? e.innerHTML : ""))
}
function dC(e, t) {
    var p, S, k;
    const n = typeof e == "string" ? {
        src: e
    } : e
      , r = t || {}
      , o = r.head || Yp();
    if (!o)
        throw new Error("Missing Unhead context.");
    const s = eg(n)
      , i = (p = o._scripts) == null ? void 0 : p[s];
    if (i)
        return i.setupTriggerHandler(r.trigger),
        i;
    (S = r.beforeInit) == null || S.call(r);
    const a = y => {
        f.status = y,
        o.hooks.callHook("script:updated", d)
    }
    ;
    uC.forEach(y => {
        const g = typeof n[y] == "function" ? n[y].bind(r.eventContext) : null;
        n[y] = w => {
            a(y === "onload" ? "loaded" : y === "onerror" ? "error" : "loading"),
            g == null || g(w)
        }
    }
    );
    const c = {
        loaded: [],
        error: []
    }
      , l = (y, g) => {
        if (c[y]) {
            const w = c[y].push(g);
            return () => {
                var T;
                return (T = c[y]) == null ? void 0 : T.splice(w - 1, 1)
            }
        }
        return g(f.instance),
        () => {}
    }
      , u = new Promise( (y, g) => {
        if (o.ssr)
            return;
        const w = A => requestAnimationFrame( () => y(A))
          , T = o.hooks.hook("script:updated", ({script: A}) => {
            const $ = A.status;
            if (A.id === s && ($ === "loaded" || $ === "error")) {
                if ($ === "loaded")
                    if (typeof r.use == "function") {
                        const N = r.use();
                        N && w(N)
                    } else
                        w({});
                else
                    $ === "error" && g(new Error(`Failed to load script: ${n.src}`));
                T()
            }
        }
        )
    }
    )
      , f = Object.assign(u, {
        instance: !o.ssr && ((k = r == null ? void 0 : r.use) == null ? void 0 : k.call(r)) || null,
        proxy: null,
        id: s,
        status: "awaitingLoad",
        remove() {
            var y;
            return f.entry ? (f.entry.dispose(),
            a("removed"),
            (y = o._scripts) == null || delete y[s],
            !0) : !1
        },
        load(y) {
            var g;
            if ((g = f._triggerAbortController) == null || g.abort(),
            f._triggerPromises = [],
            !f.entry) {
                a("loading");
                const w = {
                    defer: !0,
                    fetchpriority: "low"
                };
                n.src && (n.src.startsWith("http") || n.src.startsWith("//")) && (w.crossorigin = "anonymous",
                w.referrerpolicy = "no-referrer"),
                f.entry = o.push({
                    script: [{
                        ...w,
                        ...n,
                        key: `script.${s}`
                    }]
                }, r)
            }
            return y && l("loaded", y),
            u
        },
        onLoaded(y) {
            return l("loaded", y)
        },
        onError(y) {
            return l("error", y)
        },
        setupTriggerHandler(y) {
            f.status === "awaitingLoad" && ((typeof y > "u" || y === "client") && !o.ssr || y === "server" ? f.load() : y instanceof Promise ? (f._triggerAbortController = f._triggerAbortController || new AbortController,
            f._triggerPromises = f._triggerPromises || [],
            f._triggerPromises.push(Promise.race([y.then( () => f.load), new Promise(g => {
                f._triggerAbortController.signal.addEventListener("abort", () => g())
            }
            )]).then(g => {
                g == null || g()
            }
            ))) : typeof y == "function" && y(f.load))
        },
        _cbs: c
    });
    u.then(y => {
        f.instance = y,
        c.loaded && c.loaded.forEach(g => g(y)),
        c.loaded = null
    }
    ).catch(y => {
        c.error && c.error.forEach(g => g(y)),
        c.error = null
    }
    );
    const d = {
        script: f
    };
    f.setupTriggerHandler(r.trigger),
    f.$script = f;
    const h = (y, g, w) => new Proxy((g ? y == null ? void 0 : y[g] : y) || Xp,{
        get(T, A, $) {
            var N;
            if (o.hooks.callHook("script:instance-fn", {
                script: f,
                fn: A,
                exists: A in T
            }),
            !g) {
                const I = (N = r.stub) == null ? void 0 : N.call(r, {
                    script: f,
                    fn: A
                });
                if (I)
                    return I
            }
            return T && A in T && typeof T[A] < "u" ? Reflect.get(T, A, $) : A === Symbol.iterator ? [][Symbol.iterator] : h(g ? y == null ? void 0 : y[g] : y, A, w || [A])
        },
        async apply(T, A, $) {
            if (o.ssr && T[Qp])
                return;
            let N;
            const I = v => {
                N = v || N;
                for (let _ = 0; _ < (w || []).length; _++) {
                    const x = (w || [])[_];
                    v = v == null ? void 0 : v[x]
                }
                return v
            }
              , C = I(f.instance) || I(await u);
            return typeof C == "function" ? Reflect.apply(C, N, $) : C
        }
    });
    f.proxy = h(f.instance);
    const m = new Proxy(f,{
        get(y, g) {
            const w = g in f || String(g)[0] === "_" ? f : f.proxy;
            return g === "then" || g === "catch" ? f[g].bind(f) : Reflect.get(w, g, w)
        }
    });
    return o._scripts = Object.assign(o._scripts || {}, {
        [s]: m
    }),
    m
}
function hC(e) {
    return typeof e == "function" ? e() : ce(e)
}
function ec(e) {
    if (e instanceof Promise || e instanceof Date || e instanceof RegExp)
        return e;
    const t = hC(e);
    if (!e || !t)
        return t;
    if (Array.isArray(t))
        return t.map(n => ec(n));
    if (typeof t == "object") {
        const n = {};
        for (const r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
                if (r === "titleTemplate" || r[0] === "o" && r[1] === "n") {
                    n[r] = ce(t[r]);
                    continue
                }
                n[r] = ec(t[r])
            }
        return Object.keys(n) ? n : t
    }
    return t
}
const pC = "usehead"
  , sf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , af = "__unhead_injection_handler__";
function tg() {
    if (af in sf)
        return sf[af]();
    const e = rt(pC);
    return e || Yp()
}
function gC(e, t={}) {
    const n = t.head || tg();
    if (n)
        return n.ssr ? n.push(e, t) : mC(n, e, t)
}
function mC(e, t, n={}) {
    const r = $e(!1)
      , o = $e({});
    Dc( () => {
        o.value = r.value ? {} : ec(t)
    }
    );
    const s = e.push(o.value, n);
    return Lt(o, a => {
        s.patch(a)
    }
    ),
    mt() && (vr( () => {
        s.dispose()
    }
    ),
    ki( () => {
        r.value = !0
    }
    ),
    Ei( () => {
        r.value = !1
    }
    )),
    s
}
function yC(e, t) {
    if (!t)
        return;
    const n = (r, o) => {
        if (!e._cbs[r])
            return o(e.instance),
            () => {}
            ;
        let s = e._cbs[r].push(o);
        const i = () => {
            var a;
            s && ((a = e._cbs[r]) == null || a.splice(s - 1, 1),
            s = null)
        }
        ;
        return lr(i),
        i
    }
    ;
    lr( () => {
        var r;
        (r = e._triggerAbortController) == null || r.abort()
    }
    ),
    e.onLoaded = r => n("loaded", r),
    e.onError = r => n("error", r)
}
function bC(e, t) {
    const n = typeof e == "string" ? {
        src: e
    } : e
      , r = t || {}
      , o = (r == null ? void 0 : r.head) || tg();
    r.head = o;
    const s = mt();
    r.eventContext = s,
    s && typeof r.trigger > "u" && (r.trigger = Un),
    o._scriptStatusWatcher = o._scriptStatusWatcher || o.hooks.hook("script:updated", ({script: a}) => {
        a._statusRef.value = a.status
    }
    );
    const i = dC(n, r);
    return i._statusRef = i._statusRef || $e(i.status),
    yC(i, s),
    new Proxy(i,{
        get(a, c, l) {
            return Reflect.get(a, c === "status" ? "_statusRef" : c, l)
        }
    })
}
function vC() {
    return Ot().public["nuxt-scripts"]
}
function _C(e, t) {
    var c, l, u;
    e = typeof e == "string" ? {
        src: e
    } : e,
    t = ss(t, (c = vC()) == null ? void 0 : c.defaultScriptOptions);
    const n = t.trigger === "onNuxtReady" ? "preload" : "preconnect"
      , r = e.src && !e.src.startsWith("/")
      , o = eg(e);
    e.src && t.trigger !== "server" && (n === "preload" || r) && gC({
        link: [{
            rel: n,
            as: n === "preload" ? "script" : void 0,
            href: e.src,
            crossorigin: r ? typeof e.crossorigin < "u" ? e.crossorigin : "anonymous" : void 0,
            key: `nuxt-script-${o}`,
            tagPriority: n === "preload" ? "high" : 0,
            fetchpriority: "low"
        }]
    }),
    t.trigger === "onNuxtReady" && (t.trigger = ji);
    const s = Be();
    s.$scripts = s.$scripts || wt({}),
    !!((l = s.$scripts) != null && l[o]) || (u = performance == null ? void 0 : performance.mark) == null || u.call(performance, "mark_feature_usage", {
        detail: {
            feature: t.performanceMarkFeature ?? `nuxt-scripts:${o}`
        }
    });
    const a = bC(e, t);
    return s.$scripts[o] = a,
    a
}
const il = Object.assign( () => {}
, {
    __unenv__: !0
})
  , wC = il
  , cf = il
  , CC = il;
function SC(e) {
    return (Ot().public.scripts || {})[e]
}
function EC(e, t, n) {
    const r = SC(e)
      , o = Object.assign(n || {}, typeof r == "object" ? r : {})
      , s = t(o)
      , i = ss(o.scriptInput, s.scriptInput, {
        key: e
    })
      , a = Object.assign((o == null ? void 0 : o.scriptOptions) || {}, s.scriptOptions || {})
      , c = a.beforeInit;
    return a.beforeInit = () => {
        var l;
        c == null || c(),
        (l = s.clientInit) == null || l.call(s)
    }
    ,
    _C(i, a)
}
wC({
    id: cf(),
    l: CC(cf())
});
function kC(e) {
    const t = function(...n) {
        window["gtag-" + (e.l ?? "dataLayer")](...n)
    };
    return {
        dataLayer: window[e.l ?? "dataLayer"],
        gtag: t
    }
}
function TC(e) {
    return EC((e == null ? void 0 : e.key) || "googleAnalytics", t => ({
        scriptInput: {
            src: op("https://www.googletagmanager.com/gtag/js", {
                id: t == null ? void 0 : t.id,
                l: t == null ? void 0 : t.l
            })
        },
        schema: void 0,
        scriptOptions: {
            use: () => kC(t),
            stub: void 0,
            performanceMarkFeature: "nuxt-third-parties-ga",
            tagPriority: 1
        },
        clientInit: () => {
            window[(t == null ? void 0 : t.l) ?? "dataLayer"] = window[(t == null ? void 0 : t.l) ?? "dataLayer"] || [],
            window["gtag-" + ((t == null ? void 0 : t.l) ?? "dataLayer")] = function() {
                window[(t == null ? void 0 : t.l) ?? "dataLayer"].push(arguments)
            }
            ,
            window["gtag-" + ((t == null ? void 0 : t.l) ?? "dataLayer")]("js", new Date),
            window["gtag-" + ((t == null ? void 0 : t.l) ?? "dataLayer")]("config", t == null ? void 0 : t.id)
        }
    }), e)
}
const xC = st({
    name: "scripts:init",
    env: {
        islands: !1
    },
    parallel: !0,
    setup() {
        return {
            provide: {
                $scripts: {
                    googleAnalytics: TC({
                        id: "G-S9WWVRL16L"
                    })
                }
            }
        }
    }
})
  , AC = Ee( () => ye( () => Promise.resolve().then( () => bA), void 0, import.meta.url).then(e => e.default || e.default || e))
  , RC = Ee( () => ye( () => Promise.resolve().then( () => gx), void 0, import.meta.url).then(e => e.default || e.default || e))
  , OC = Ee( () => ye( () => Promise.resolve().then( () => vx), void 0, import.meta.url).then(e => e.default || e.default || e))
  , PC = Ee( () => ye( () => Promise.resolve().then( () => ix), void 0, import.meta.url).then(e => e.default || e.default || e))
  , $C = Ee( () => ye( () => Promise.resolve().then( () => CA), void 0, import.meta.url).then(e => e.default || e.default || e))
  , MC = Ee( () => ye( () => Promise.resolve().then( () => TA), void 0, import.meta.url).then(e => e.default || e.default || e))
  , IC = Ee( () => ye( () => Promise.resolve().then( () => ex), void 0, import.meta.url).then(e => e.default || e.default || e))
  , LC = Ee( () => ye( () => Promise.resolve().then( () => Sx), void 0, import.meta.url).then(e => e.default || e.default || e))
  , BC = Ee( () => ye( () => Promise.resolve().then( () => ZT), void 0, import.meta.url).then(e => e.default || e.default || e))
  , jC = Ee( () => ye( () => Promise.resolve().then( () => OT), void 0, import.meta.url).then(e => e.default || e.default || e))
  , NC = Ee( () => ye( () => Promise.resolve().then( () => Wx), void 0, import.meta.url).then(e => e.default || e.default || e))
  , DC = Ee( () => ye( () => Promise.resolve().then( () => Yx), void 0, import.meta.url).then(e => e.default || e.default || e))
  , FC = Ee( () => ye( () => Promise.resolve().then( () => uA), void 0, import.meta.url).then(e => e.default || e.default || e))
  , HC = Ee( () => ye( () => Promise.resolve().then( () => iA), void 0, import.meta.url).then(e => e.default || e.default || e))
  , UC = Ee( () => ye( () => Promise.resolve().then( () => NT), void 0, import.meta.url).then(e => e.default || e.default || e))
  , VC = Ee( () => ye( () => Promise.resolve().then( () => Px), void 0, import.meta.url).then(e => e.default || e.default || e))
  , zC = Ee( () => ye( () => Promise.resolve().then( () => xx), void 0, import.meta.url).then(e => e.default || e.default || e))
  , KC = Ee( () => ye( () => Promise.resolve().then( () => $A), void 0, import.meta.url).then(e => e.default || e.default || e))
  , qC = Ee( () => ye( () => Promise.resolve().then( () => tA), void 0, import.meta.url).then(e => e.default || e.default || e))
  , WC = Ee( () => ye( () => Promise.resolve().then( () => Vx), void 0, import.meta.url).then(e => e.default || e.default || e))
  , GC = Ee( () => ye( () => Promise.resolve().then( () => Dx), void 0, import.meta.url).then(e => e.default || e.default || e))
  , JC = Ee( () => ye( () => Promise.resolve().then( () => Lx), void 0, import.meta.url).then(e => e.default || e.default || e))
  , ZC = Ee( () => ye( () => Promise.resolve().then( () => fx), void 0, import.meta.url).then(e => e.default || e.default || e))
  , YC = Ee( () => ye( () => Promise.resolve().then( () => pA), void 0, import.meta.url).then(e => e.default || e.default || e))
  , QC = Ee( () => ye( () => Promise.resolve().then( () => qT), void 0, import.meta.url).then(e => e.default || e.default || e))
  , XC = Ee( () => ye( () => Promise.resolve().then( () => IT), void 0, import.meta.url).then(e => e.default || e.default || e))
  , eS = Ee( () => ye( () => Promise.resolve().then( () => jA), void 0, import.meta.url).then(e => e.default || e.default || e))
  , tS = Ee( () => ye( () => Promise.resolve().then( () => UT), void 0, import.meta.url).then(e => e.default || e.default || e))
  , nS = [["SvgoAppleMusic", AC], ["SvgoArrowLeft", RC], ["SvgoArrowRight", OC], ["SvgoBars", PC], ["SvgoCheckboxCheck", $C], ["SvgoChevron", MC], ["SvgoClose", IC], ["SvgoCopyrightBackground", LC], ["SvgoDiscord", BC], ["SvgoFacebook", jC], ["SvgoFooterBackground", NC], ["SvgoFooterBottomRightCorner", DC], ["SvgoHeaderLogoInverse", FC], ["SvgoHeaderLogo", HC], ["SvgoInstagram", UC], ["SvgoLegalBackground", VC], ["SvgoLogoBackground", zC], ["SvgoMenuClose", KC], ["SvgoMobileMenuToggleBackground", qC], ["SvgoNavBackgroundEnd", WC], ["SvgoNavBackgroundStart", GC], ["SvgoNavBackground", JC], ["SvgoPlay", ZC], ["SvgoSpotify", YC], ["SvgoTiktok", QC], ["SvgoTwitter", XC], ["SvgoWarning", eS], ["SvgoYoutube", tS]]
  , rS = st({
    name: "nuxt:global-components",
    setup(e) {
        for (const [t,n] of nS)
            e.vueApp.component(t, n),
            e.vueApp.component("Lazy" + t, n)
    }
})
  , Ts = {}
  , oS = st({
    name: "nuxt:prefetch",
    setup(e) {
        const t = Dt();
        e.hooks.hook("app:mounted", () => {
            t.beforeEach(async n => {
                var o;
                const r = (o = n == null ? void 0 : n.meta) == null ? void 0 : o.layout;
                r && typeof Ts[r] == "function" && await Ts[r]()
            }
            )
        }
        ),
        e.hooks.hook("link:prefetch", n => {
            if (eo(n))
                return;
            const r = t.resolve(n);
            if (!r)
                return;
            const o = r.meta.layout;
            let s = sl(r.meta.middleware);
            s = s.filter(i => typeof i == "string");
            for (const i of s)
                typeof So[i] == "function" && So[i]();
            o && typeof Ts[o] == "function" && Ts[o]()
        }
        )
    }
})
  , sS = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/)
  , iS = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
  , aS = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
  , cS = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
  , lS = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function uS(e) {
    return iS.test(e) || aS.test(e.slice(0, 4))
}
function fS(e) {
    return cS.test(e) || lS.test(e.slice(0, 4))
}
function dS(e) {
    return /iPad|iPhone|iPod/.test(e)
}
function hS(e) {
    return /android/i.test(e)
}
function pS(e) {
    return /Windows/.test(e)
}
function gS(e) {
    return /Mac OS X/.test(e)
}
const mS = [{
    name: "Samsung",
    regex: /SamsungBrowser/i
}, {
    name: "Edge",
    regex: /edg(?:[ea]|ios)?\//i
}, {
    name: "Firefox",
    regex: /firefox|iceweasel|fxios/i
}, {
    name: "Chrome",
    regex: /chrome|crios|crmo/i
}, {
    name: "Safari",
    regex: /safari|applewebkit/i
}];
function yS(e) {
    for (const t of mS)
        if (t.regex.test(e))
            return t.name;
    return ""
}
function lf(e, t={}) {
    let n = !1
      , r = !1
      , o = !1
      , s = !1;
    if (e === "Amazon CloudFront")
        t["cloudfront-is-mobile-viewer"] === "true" && (n = !0,
        r = !0),
        t["cloudfront-is-tablet-viewer"] === "true" && (n = !1,
        r = !0),
        t["cloudfront-is-desktop-viewer"] === "true" && (n = !1,
        r = !1),
        t["cloudfront-is-ios-viewer"] === "true" && (o = !0),
        t["cloudfront-is-android-viewer"] === "true" && (s = !0);
    else if (t && t["cf-device-type"])
        switch (t["cf-device-type"]) {
        case "mobile":
            n = !0,
            r = !0;
            break;
        case "tablet":
            n = !1,
            r = !0;
            break;
        case "desktop":
            n = !1,
            r = !1;
            break
        }
    else
        n = uS(e),
        r = fS(e),
        o = dS(e),
        s = hS(e);
    const i = pS(e)
      , a = gS(e)
      , c = yS(e)
      , l = c === "Safari"
      , u = c === "Firefox"
      , f = c === "Edge"
      , d = c === "Chrome"
      , h = c === "Samsung"
      , m = sS.test(e);
    return {
        userAgent: e,
        isMobile: n,
        isMobileOrTablet: r,
        isTablet: !n && r,
        isDesktop: !r,
        isIos: o,
        isAndroid: s,
        isWindows: i,
        isMacOS: a,
        isApple: a || o,
        isDesktopOrTablet: !n,
        isSafari: l,
        isFirefox: u,
        isEdge: f,
        isChrome: d,
        isSamsung: h,
        isCrawler: m
    }
}
const bS = st( () => {
    const e = Ot()
      , t = e.public.device.defaultUserAgent;
    let n;
    {
        const r = navigator.userAgent || t;
        n = wt(lf(r)),
        e.public.device.refreshOnResize && window.addEventListener("resize", () => {
            setTimeout( () => {
                const o = lf(navigator.userAgent || r);
                Object.entries(o).forEach( ([s,i]) => {
                    n[s] = i
                }
                )
            }
            , 50)
        }
        )
    }
    return {
        provide: {
            device: n
        }
    }
}
);
function vS(e, t, n, r, o, s, i) {
    return e.fbq ? e.fbq : (o = e.fbq = function() {
        o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments)
    }
    ,
    e._fbq || (e._fbq = o),
    o.push = o,
    o.loaded = !0,
    o.version = "2.0",
    o.queue = [],
    s = t.createElement(n),
    s.async = !0,
    s.src = r,
    i = t.getElementsByTagName(n)[0],
    i.parentNode.insertBefore(s, i),
    o)
}
function _S() {
    return vS(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
}
function tc(e=_S()) {
    function t(r, o=!0) {
        return e("set", "autoConfig", o, r),
        e("init", r),
        tc(e)
    }
    function n(r) {
        return r === void 0 ? e("track", "PageView") : e("trackSingle", r, "PageView"),
        tc(e)
    }
    return {
        $fbq: e,
        init: t,
        pageView: n
    }
}
var jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ng(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function wS(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var CS = rg;
function rg(e, t, n) {
    e instanceof RegExp && (e = uf(e, n)),
    t instanceof RegExp && (t = uf(t, n));
    var r = og(e, t, n);
    return r && {
        start: r[0],
        end: r[1],
        pre: n.slice(0, r[0]),
        body: n.slice(r[0] + e.length, r[1]),
        post: n.slice(r[1] + t.length)
    }
}
function uf(e, t) {
    var n = t.match(e);
    return n ? n[0] : null
}
rg.range = og;
function og(e, t, n) {
    var r, o, s, i, a, c = n.indexOf(e), l = n.indexOf(t, c + 1), u = c;
    if (c >= 0 && l > 0) {
        if (e === t)
            return [c, l];
        for (r = [],
        s = n.length; u >= 0 && !a; )
            u == c ? (r.push(u),
            c = n.indexOf(e, u + 1)) : r.length == 1 ? a = [r.pop(), l] : (o = r.pop(),
            o < s && (s = o,
            i = l),
            l = n.indexOf(t, u + 1)),
            u = c < l && c >= 0 ? c : l;
        r.length && (a = [s, i])
    }
    return a
}
var sg = CS
  , SS = TS
  , ig = "\0SLASH" + Math.random() + "\0"
  , ag = "\0OPEN" + Math.random() + "\0"
  , al = "\0CLOSE" + Math.random() + "\0"
  , cg = "\0COMMA" + Math.random() + "\0"
  , lg = "\0PERIOD" + Math.random() + "\0";
function ia(e) {
    return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0)
}
function ES(e) {
    return e.split("\\\\").join(ig).split("\\{").join(ag).split("\\}").join(al).split("\\,").join(cg).split("\\.").join(lg)
}
function kS(e) {
    return e.split(ig).join("\\").split(ag).join("{").split(al).join("}").split(cg).join(",").split(lg).join(".")
}
function ug(e) {
    if (!e)
        return [""];
    var t = []
      , n = sg("{", "}", e);
    if (!n)
        return e.split(",");
    var r = n.pre
      , o = n.body
      , s = n.post
      , i = r.split(",");
    i[i.length - 1] += "{" + o + "}";
    var a = ug(s);
    return s.length && (i[i.length - 1] += a.shift(),
    i.push.apply(i, a)),
    t.push.apply(t, i),
    t
}
function TS(e) {
    return e ? (e.substr(0, 2) === "{}" && (e = "\\{\\}" + e.substr(2)),
    uo(ES(e), !0).map(kS)) : []
}
function xS(e) {
    return "{" + e + "}"
}
function AS(e) {
    return /^-?0\d/.test(e)
}
function RS(e, t) {
    return e <= t
}
function OS(e, t) {
    return e >= t
}
function uo(e, t) {
    var n = []
      , r = sg("{", "}", e);
    if (!r)
        return [e];
    var o = r.pre
      , s = r.post.length ? uo(r.post, !1) : [""];
    if (/\$$/.test(r.pre))
        for (var i = 0; i < s.length; i++) {
            var a = o + "{" + r.body + "}" + s[i];
            n.push(a)
        }
    else {
        var c = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(r.body)
          , l = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(r.body)
          , u = c || l
          , f = r.body.indexOf(",") >= 0;
        if (!u && !f)
            return r.post.match(/,.*\}/) ? (e = r.pre + "{" + r.body + al + r.post,
            uo(e)) : [e];
        var d;
        if (u)
            d = r.body.split(/\.\./);
        else if (d = ug(r.body),
        d.length === 1 && (d = uo(d[0], !1).map(xS),
        d.length === 1))
            return s.map(function(C) {
                return r.pre + d[0] + C
            });
        var h;
        if (u) {
            var m = ia(d[0])
              , p = ia(d[1])
              , S = Math.max(d[0].length, d[1].length)
              , k = d.length == 3 ? Math.abs(ia(d[2])) : 1
              , y = RS
              , g = p < m;
            g && (k *= -1,
            y = OS);
            var w = d.some(AS);
            h = [];
            for (var T = m; y(T, p); T += k) {
                var A;
                if (l)
                    A = String.fromCharCode(T),
                    A === "\\" && (A = "");
                else if (A = String(T),
                w) {
                    var $ = S - A.length;
                    if ($ > 0) {
                        var N = new Array($ + 1).join("0");
                        T < 0 ? A = "-" + N + A.slice(1) : A = N + A
                    }
                }
                h.push(A)
            }
        } else {
            h = [];
            for (var I = 0; I < d.length; I++)
                h.push.apply(h, uo(d[I], !1))
        }
        for (var I = 0; I < h.length; I++)
            for (var i = 0; i < s.length; i++) {
                var a = o + h[I] + s[i];
                (!t || u || a) && n.push(a)
            }
    }
    return n
}
const PS = ng(SS)
  , $S = 1024 * 64
  , si = e => {
    if (typeof e != "string")
        throw new TypeError("invalid pattern");
    if (e.length > $S)
        throw new TypeError("pattern is too long")
}
  , MS = {
    "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0],
    "[:alpha:]": ["\\p{L}\\p{Nl}", !0],
    "[:ascii:]": ["\\x00-\\x7f", !1],
    "[:blank:]": ["\\p{Zs}\\t", !0],
    "[:cntrl:]": ["\\p{Cc}", !0],
    "[:digit:]": ["\\p{Nd}", !0],
    "[:graph:]": ["\\p{Z}\\p{C}", !0, !0],
    "[:lower:]": ["\\p{Ll}", !0],
    "[:print:]": ["\\p{C}", !0],
    "[:punct:]": ["\\p{P}", !0],
    "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0],
    "[:upper:]": ["\\p{Lu}", !0],
    "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0],
    "[:xdigit:]": ["A-Fa-f0-9", !1]
}
  , io = e => e.replace(/[[\]\\-]/g, "\\$&")
  , IS = e => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  , ff = e => e.join("")
  , LS = (e, t) => {
    const n = t;
    if (e.charAt(n) !== "[")
        throw new Error("not in a brace expression");
    const r = []
      , o = [];
    let s = n + 1
      , i = !1
      , a = !1
      , c = !1
      , l = !1
      , u = n
      , f = "";
    e: for (; s < e.length; ) {
        const p = e.charAt(s);
        if ((p === "!" || p === "^") && s === n + 1) {
            l = !0,
            s++;
            continue
        }
        if (p === "]" && i && !c) {
            u = s + 1;
            break
        }
        if (i = !0,
        p === "\\" && !c) {
            c = !0,
            s++;
            continue
        }
        if (p === "[" && !c) {
            for (const [S,[k,y,g]] of Object.entries(MS))
                if (e.startsWith(S, s)) {
                    if (f)
                        return ["$.", !1, e.length - n, !0];
                    s += S.length,
                    g ? o.push(k) : r.push(k),
                    a = a || y;
                    continue e
                }
        }
        if (c = !1,
        f) {
            p > f ? r.push(io(f) + "-" + io(p)) : p === f && r.push(io(p)),
            f = "",
            s++;
            continue
        }
        if (e.startsWith("-]", s + 1)) {
            r.push(io(p + "-")),
            s += 2;
            continue
        }
        if (e.startsWith("-", s + 1)) {
            f = p,
            s += 2;
            continue
        }
        r.push(io(p)),
        s++
    }
    if (u < s)
        return ["", !1, 0, !1];
    if (!r.length && !o.length)
        return ["$.", !1, e.length - n, !0];
    if (o.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !l) {
        const p = r[0].length === 2 ? r[0].slice(-1) : r[0];
        return [IS(p), !1, u - n, !1]
    }
    const d = "[" + (l ? "^" : "") + ff(r) + "]"
      , h = "[" + (l ? "" : "^") + ff(o) + "]";
    return [r.length && o.length ? "(" + d + "|" + h + ")" : r.length ? d : h, a, u - n, !0]
}
  , fo = (e, {windowsPathsNoEscape: t=!1}={}) => t ? e.replace(/\[([^\/\\])\]/g, "$1") : e.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1")
  , BS = new Set(["!", "?", "+", "*", "@"])
  , df = e => BS.has(e)
  , jS = "(?!(?:^|/)\\.\\.?(?:$|/))"
  , xs = "(?!\\.)"
  , NS = new Set(["[", "."])
  , DS = new Set(["..", "."])
  , FS = new Set("().*{}+?[]^$\\!")
  , HS = e => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  , cl = "[^/]"
  , hf = cl + "*?"
  , pf = cl + "+?";
var Ue, Je, Yt, Pe, De, Cn, Jn, Sn, zt, Zn, Bo, mr, fg, Mn, Bs, nc, dg;
const ct = class ct {
    constructor(t, n, r={}) {
        le(this, mr);
        te(this, "type");
        le(this, Ue);
        le(this, Je);
        le(this, Yt, !1);
        le(this, Pe, []);
        le(this, De);
        le(this, Cn);
        le(this, Jn);
        le(this, Sn, !1);
        le(this, zt);
        le(this, Zn);
        le(this, Bo, !1);
        this.type = t,
        t && re(this, Je, !0),
        re(this, De, n),
        re(this, Ue, R(this, De) ? R(R(this, De), Ue) : this),
        re(this, zt, R(this, Ue) === this ? r : R(R(this, Ue), zt)),
        re(this, Jn, R(this, Ue) === this ? [] : R(R(this, Ue), Jn)),
        t === "!" && !R(R(this, Ue), Sn) && R(this, Jn).push(this),
        re(this, Cn, R(this, De) ? R(R(this, De), Pe).length : 0)
    }
    get hasMagic() {
        if (R(this, Je) !== void 0)
            return R(this, Je);
        for (const t of R(this, Pe))
            if (typeof t != "string" && (t.type || t.hasMagic))
                return re(this, Je, !0);
        return R(this, Je)
    }
    toString() {
        return R(this, Zn) !== void 0 ? R(this, Zn) : this.type ? re(this, Zn, this.type + "(" + R(this, Pe).map(t => String(t)).join("|") + ")") : re(this, Zn, R(this, Pe).map(t => String(t)).join(""))
    }
    push(...t) {
        for (const n of t)
            if (n !== "") {
                if (typeof n != "string" && !(n instanceof ct && R(n, De) === this))
                    throw new Error("invalid part: " + n);
                R(this, Pe).push(n)
            }
    }
    toJSON() {
        var n;
        const t = this.type === null ? R(this, Pe).slice().map(r => typeof r == "string" ? r : r.toJSON()) : [this.type, ...R(this, Pe).map(r => r.toJSON())];
        return this.isStart() && !this.type && t.unshift([]),
        this.isEnd() && (this === R(this, Ue) || R(R(this, Ue), Sn) && ((n = R(this, De)) == null ? void 0 : n.type) === "!") && t.push({}),
        t
    }
    isStart() {
        var n;
        if (R(this, Ue) === this)
            return !0;
        if (!((n = R(this, De)) != null && n.isStart()))
            return !1;
        if (R(this, Cn) === 0)
            return !0;
        const t = R(this, De);
        for (let r = 0; r < R(this, Cn); r++) {
            const o = R(t, Pe)[r];
            if (!(o instanceof ct && o.type === "!"))
                return !1
        }
        return !0
    }
    isEnd() {
        var n, r, o;
        if (R(this, Ue) === this || ((n = R(this, De)) == null ? void 0 : n.type) === "!")
            return !0;
        if (!((r = R(this, De)) != null && r.isEnd()))
            return !1;
        if (!this.type)
            return (o = R(this, De)) == null ? void 0 : o.isEnd();
        const t = R(this, De) ? R(R(this, De), Pe).length : 0;
        return R(this, Cn) === t - 1
    }
    copyIn(t) {
        typeof t == "string" ? this.push(t) : this.push(t.clone(this))
    }
    clone(t) {
        const n = new ct(this.type,t);
        for (const r of R(this, Pe))
            n.copyIn(r);
        return n
    }
    static fromGlob(t, n={}) {
        var o;
        const r = new ct(null,void 0,n);
        return un(o = ct, Mn, Bs).call(o, t, r, 0, n),
        r
    }
    toMMPattern() {
        if (this !== R(this, Ue))
            return R(this, Ue).toMMPattern();
        const t = this.toString()
          , [n,r,o,s] = this.toRegExpSource();
        if (!(o || R(this, Je) || R(this, zt).nocase && !R(this, zt).nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase()))
            return r;
        const a = (R(this, zt).nocase ? "i" : "") + (s ? "u" : "");
        return Object.assign(new RegExp(`^${n}$`,a), {
            _src: n,
            _glob: t
        })
    }
    get options() {
        return R(this, zt)
    }
    toRegExpSource(t) {
        var c;
        const n = t ?? !!R(this, zt).dot;
        if (R(this, Ue) === this && un(this, mr, fg).call(this),
        !this.type) {
            const l = this.isStart() && this.isEnd()
              , u = R(this, Pe).map(m => {
                var g;
                const [p,S,k,y] = typeof m == "string" ? un(g = ct, Mn, dg).call(g, m, R(this, Je), l) : m.toRegExpSource(t);
                return re(this, Je, R(this, Je) || k),
                re(this, Yt, R(this, Yt) || y),
                p
            }
            ).join("");
            let f = "";
            if (this.isStart() && typeof R(this, Pe)[0] == "string" && !(R(this, Pe).length === 1 && DS.has(R(this, Pe)[0]))) {
                const p = NS
                  , S = n && p.has(u.charAt(0)) || u.startsWith("\\.") && p.has(u.charAt(2)) || u.startsWith("\\.\\.") && p.has(u.charAt(4))
                  , k = !n && !t && p.has(u.charAt(0));
                f = S ? jS : k ? xs : ""
            }
            let d = "";
            return this.isEnd() && R(R(this, Ue), Sn) && ((c = R(this, De)) == null ? void 0 : c.type) === "!" && (d = "(?:$|\\/)"),
            [f + u + d, fo(u), re(this, Je, !!R(this, Je)), R(this, Yt)]
        }
        const r = this.type === "*" || this.type === "+"
          , o = this.type === "!" ? "(?:(?!(?:" : "(?:";
        let s = un(this, mr, nc).call(this, n);
        if (this.isStart() && this.isEnd() && !s && this.type !== "!") {
            const l = this.toString();
            return re(this, Pe, [l]),
            this.type = null,
            re(this, Je, void 0),
            [l, fo(this.toString()), !1, !1]
        }
        let i = !r || t || n || !xs ? "" : un(this, mr, nc).call(this, !0);
        i === s && (i = ""),
        i && (s = `(?:${s})(?:${i})*?`);
        let a = "";
        if (this.type === "!" && R(this, Bo))
            a = (this.isStart() && !n ? xs : "") + pf;
        else {
            const l = this.type === "!" ? "))" + (this.isStart() && !n && !t ? xs : "") + hf + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && i ? ")" : this.type === "*" && i ? ")?" : `)${this.type}`;
            a = o + s + l
        }
        return [a, fo(s), re(this, Je, !!R(this, Je)), R(this, Yt)]
    }
}
;
Ue = new WeakMap,
Je = new WeakMap,
Yt = new WeakMap,
Pe = new WeakMap,
De = new WeakMap,
Cn = new WeakMap,
Jn = new WeakMap,
Sn = new WeakMap,
zt = new WeakMap,
Zn = new WeakMap,
Bo = new WeakMap,
mr = new WeakSet,
fg = function() {
    if (this !== R(this, Ue))
        throw new Error("should only call on root");
    if (R(this, Sn))
        return this;
    this.toString(),
    re(this, Sn, !0);
    let t;
    for (; t = R(this, Jn).pop(); ) {
        if (t.type !== "!")
            continue;
        let n = t
          , r = R(n, De);
        for (; r; ) {
            for (let o = R(n, Cn) + 1; !r.type && o < R(r, Pe).length; o++)
                for (const s of R(t, Pe)) {
                    if (typeof s == "string")
                        throw new Error("string part in extglob AST??");
                    s.copyIn(R(r, Pe)[o])
                }
            n = r,
            r = R(n, De)
        }
    }
    return this
}
,
Mn = new WeakSet,
Bs = function(t, n, r, o) {
    var h, m;
    let s = !1
      , i = !1
      , a = -1
      , c = !1;
    if (n.type === null) {
        let p = r
          , S = "";
        for (; p < t.length; ) {
            const k = t.charAt(p++);
            if (s || k === "\\") {
                s = !s,
                S += k;
                continue
            }
            if (i) {
                p === a + 1 ? (k === "^" || k === "!") && (c = !0) : k === "]" && !(p === a + 2 && c) && (i = !1),
                S += k;
                continue
            } else if (k === "[") {
                i = !0,
                a = p,
                c = !1,
                S += k;
                continue
            }
            if (!o.noext && df(k) && t.charAt(p) === "(") {
                n.push(S),
                S = "";
                const y = new ct(k,n);
                p = un(h = ct, Mn, Bs).call(h, t, y, p, o),
                n.push(y);
                continue
            }
            S += k
        }
        return n.push(S),
        p
    }
    let l = r + 1
      , u = new ct(null,n);
    const f = [];
    let d = "";
    for (; l < t.length; ) {
        const p = t.charAt(l++);
        if (s || p === "\\") {
            s = !s,
            d += p;
            continue
        }
        if (i) {
            l === a + 1 ? (p === "^" || p === "!") && (c = !0) : p === "]" && !(l === a + 2 && c) && (i = !1),
            d += p;
            continue
        } else if (p === "[") {
            i = !0,
            a = l,
            c = !1,
            d += p;
            continue
        }
        if (df(p) && t.charAt(l) === "(") {
            u.push(d),
            d = "";
            const S = new ct(p,u);
            u.push(S),
            l = un(m = ct, Mn, Bs).call(m, t, S, l, o);
            continue
        }
        if (p === "|") {
            u.push(d),
            d = "",
            f.push(u),
            u = new ct(null,n);
            continue
        }
        if (p === ")")
            return d === "" && R(n, Pe).length === 0 && re(n, Bo, !0),
            u.push(d),
            d = "",
            n.push(...f, u),
            l;
        d += p
    }
    return n.type = null,
    re(n, Je, void 0),
    re(n, Pe, [t.substring(r - 1)]),
    l
}
,
nc = function(t) {
    return R(this, Pe).map(n => {
        if (typeof n == "string")
            throw new Error("string type in extglob ast??");
        const [r,o,s,i] = n.toRegExpSource(t);
        return re(this, Yt, R(this, Yt) || i),
        r
    }
    ).filter(n => !(this.isStart() && this.isEnd()) || !!n).join("|")
}
,
dg = function(t, n, r=!1) {
    let o = !1
      , s = ""
      , i = !1;
    for (let a = 0; a < t.length; a++) {
        const c = t.charAt(a);
        if (o) {
            o = !1,
            s += (FS.has(c) ? "\\" : "") + c;
            continue
        }
        if (c === "\\") {
            a === t.length - 1 ? s += "\\\\" : o = !0;
            continue
        }
        if (c === "[") {
            const [l,u,f,d] = LS(t, a);
            if (f) {
                s += l,
                i = i || u,
                a += f - 1,
                n = n || d;
                continue
            }
        }
        if (c === "*") {
            r && t === "*" ? s += pf : s += hf,
            n = !0;
            continue
        }
        if (c === "?") {
            s += cl,
            n = !0;
            continue
        }
        s += HS(c)
    }
    return [s, fo(t), !!n, i]
}
,
le(ct, Mn);
let ii = ct;
const US = (e, {windowsPathsNoEscape: t=!1}={}) => t ? e.replace(/[?*()[\]]/g, "[$&]") : e.replace(/[?*()[\]\\]/g, "\\$&");
var aa = {};
const ot = (e, t, n={}) => (si(t),
!n.nocomment && t.charAt(0) === "#" ? !1 : new Ni(t,n).match(e))
  , VS = /^\*+([^+@!?\*\[\(]*)$/
  , zS = e => t => !t.startsWith(".") && t.endsWith(e)
  , KS = e => t => t.endsWith(e)
  , qS = e => (e = e.toLowerCase(),
t => !t.startsWith(".") && t.toLowerCase().endsWith(e))
  , WS = e => (e = e.toLowerCase(),
t => t.toLowerCase().endsWith(e))
  , GS = /^\*+\.\*+$/
  , JS = e => !e.startsWith(".") && e.includes(".")
  , ZS = e => e !== "." && e !== ".." && e.includes(".")
  , YS = /^\.\*+$/
  , QS = e => e !== "." && e !== ".." && e.startsWith(".")
  , XS = /^\*+$/
  , eE = e => e.length !== 0 && !e.startsWith(".")
  , tE = e => e.length !== 0 && e !== "." && e !== ".."
  , nE = /^\?+([^+@!?\*\[\(]*)?$/
  , rE = ([e,t=""]) => {
    const n = hg([e]);
    return t ? (t = t.toLowerCase(),
    r => n(r) && r.toLowerCase().endsWith(t)) : n
}
  , oE = ([e,t=""]) => {
    const n = pg([e]);
    return t ? (t = t.toLowerCase(),
    r => n(r) && r.toLowerCase().endsWith(t)) : n
}
  , sE = ([e,t=""]) => {
    const n = pg([e]);
    return t ? r => n(r) && r.endsWith(t) : n
}
  , iE = ([e,t=""]) => {
    const n = hg([e]);
    return t ? r => n(r) && r.endsWith(t) : n
}
  , hg = ([e]) => {
    const t = e.length;
    return n => n.length === t && !n.startsWith(".")
}
  , pg = ([e]) => {
    const t = e.length;
    return n => n.length === t && n !== "." && n !== ".."
}
  , gg = typeof process == "object" && process ? typeof aa == "object" && aa && aa.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix"
  , gf = {
    win32: {
        sep: "\\"
    },
    posix: {
        sep: "/"
    }
}
  , aE = gg === "win32" ? gf.win32.sep : gf.posix.sep;
ot.sep = aE;
const Tt = Symbol("globstar **");
ot.GLOBSTAR = Tt;
const cE = "[^/]"
  , lE = cE + "*?"
  , uE = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?"
  , fE = "(?:(?!(?:\\/|^)\\.).)*?"
  , dE = (e, t={}) => n => ot(n, e, t);
ot.filter = dE;
const kt = (e, t={}) => Object.assign({}, e, t)
  , hE = e => {
    if (!e || typeof e != "object" || !Object.keys(e).length)
        return ot;
    const t = ot;
    return Object.assign( (r, o, s={}) => t(r, o, kt(e, s)), {
        Minimatch: class extends t.Minimatch {
            constructor(o, s={}) {
                super(o, kt(e, s))
            }
            static defaults(o) {
                return t.defaults(kt(e, o)).Minimatch
            }
        }
        ,
        AST: class extends t.AST {
            constructor(o, s, i={}) {
                super(o, s, kt(e, i))
            }
            static fromGlob(o, s={}) {
                return t.AST.fromGlob(o, kt(e, s))
            }
        }
        ,
        unescape: (r, o={}) => t.unescape(r, kt(e, o)),
        escape: (r, o={}) => t.escape(r, kt(e, o)),
        filter: (r, o={}) => t.filter(r, kt(e, o)),
        defaults: r => t.defaults(kt(e, r)),
        makeRe: (r, o={}) => t.makeRe(r, kt(e, o)),
        braceExpand: (r, o={}) => t.braceExpand(r, kt(e, o)),
        match: (r, o, s={}) => t.match(r, o, kt(e, s)),
        sep: t.sep,
        GLOBSTAR: Tt
    })
}
;
ot.defaults = hE;
const mg = (e, t={}) => (si(e),
t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : PS(e));
ot.braceExpand = mg;
const pE = (e, t={}) => new Ni(e,t).makeRe();
ot.makeRe = pE;
const gE = (e, t, n={}) => {
    const r = new Ni(t,n);
    return e = e.filter(o => r.match(o)),
    r.options.nonull && !e.length && e.push(t),
    e
}
;
ot.match = gE;
const mf = /[?*]|[+@!]\(.*?\)|\[|\]/
  , mE = e => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class Ni {
    constructor(t, n={}) {
        te(this, "options");
        te(this, "set");
        te(this, "pattern");
        te(this, "windowsPathsNoEscape");
        te(this, "nonegate");
        te(this, "negate");
        te(this, "comment");
        te(this, "empty");
        te(this, "preserveMultipleSlashes");
        te(this, "partial");
        te(this, "globSet");
        te(this, "globParts");
        te(this, "nocase");
        te(this, "isWindows");
        te(this, "platform");
        te(this, "windowsNoMagicRoot");
        te(this, "regexp");
        si(t),
        n = n || {},
        this.options = n,
        this.pattern = t,
        this.platform = n.platform || gg,
        this.isWindows = this.platform === "win32",
        this.windowsPathsNoEscape = !!n.windowsPathsNoEscape || n.allowWindowsEscape === !1,
        this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")),
        this.preserveMultipleSlashes = !!n.preserveMultipleSlashes,
        this.regexp = null,
        this.negate = !1,
        this.nonegate = !!n.nonegate,
        this.comment = !1,
        this.empty = !1,
        this.partial = !!n.partial,
        this.nocase = !!this.options.nocase,
        this.windowsNoMagicRoot = n.windowsNoMagicRoot !== void 0 ? n.windowsNoMagicRoot : !!(this.isWindows && this.nocase),
        this.globSet = [],
        this.globParts = [],
        this.set = [],
        this.make()
    }
    hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1)
            return !0;
        for (const t of this.set)
            for (const n of t)
                if (typeof n != "string")
                    return !0;
        return !1
    }
    debug(...t) {}
    make() {
        const t = this.pattern
          , n = this.options;
        if (!n.nocomment && t.charAt(0) === "#") {
            this.comment = !0;
            return
        }
        if (!t) {
            this.empty = !0;
            return
        }
        this.parseNegate(),
        this.globSet = [...new Set(this.braceExpand())],
        n.debug && (this.debug = (...s) => console.error(...s)),
        this.debug(this.pattern, this.globSet);
        const r = this.globSet.map(s => this.slashSplit(s));
        this.globParts = this.preprocess(r),
        this.debug(this.pattern, this.globParts);
        let o = this.globParts.map( (s, i, a) => {
            if (this.isWindows && this.windowsNoMagicRoot) {
                const c = s[0] === "" && s[1] === "" && (s[2] === "?" || !mf.test(s[2])) && !mf.test(s[3])
                  , l = /^[a-z]:/i.test(s[0]);
                if (c)
                    return [...s.slice(0, 4), ...s.slice(4).map(u => this.parse(u))];
                if (l)
                    return [s[0], ...s.slice(1).map(u => this.parse(u))]
            }
            return s.map(c => this.parse(c))
        }
        );
        if (this.debug(this.pattern, o),
        this.set = o.filter(s => s.indexOf(!1) === -1),
        this.isWindows)
            for (let s = 0; s < this.set.length; s++) {
                const i = this.set[s];
                i[0] === "" && i[1] === "" && this.globParts[s][2] === "?" && typeof i[3] == "string" && /^[a-z]:$/i.test(i[3]) && (i[2] = "?")
            }
        this.debug(this.pattern, this.set)
    }
    preprocess(t) {
        if (this.options.noglobstar)
            for (let r = 0; r < t.length; r++)
                for (let o = 0; o < t[r].length; o++)
                    t[r][o] === "**" && (t[r][o] = "*");
        const {optimizationLevel: n=1} = this.options;
        return n >= 2 ? (t = this.firstPhasePreProcess(t),
        t = this.secondPhasePreProcess(t)) : n >= 1 ? t = this.levelOneOptimize(t) : t = this.adjascentGlobstarOptimize(t),
        t
    }
    adjascentGlobstarOptimize(t) {
        return t.map(n => {
            let r = -1;
            for (; (r = n.indexOf("**", r + 1)) !== -1; ) {
                let o = r;
                for (; n[o + 1] === "**"; )
                    o++;
                o !== r && n.splice(r, o - r)
            }
            return n
        }
        )
    }
    levelOneOptimize(t) {
        return t.map(n => (n = n.reduce( (r, o) => {
            const s = r[r.length - 1];
            return o === "**" && s === "**" ? r : o === ".." && s && s !== ".." && s !== "." && s !== "**" ? (r.pop(),
            r) : (r.push(o),
            r)
        }
        , []),
        n.length === 0 ? [""] : n))
    }
    levelTwoFileOptimize(t) {
        Array.isArray(t) || (t = this.slashSplit(t));
        let n = !1;
        do {
            if (n = !1,
            !this.preserveMultipleSlashes) {
                for (let o = 1; o < t.length - 1; o++) {
                    const s = t[o];
                    o === 1 && s === "" && t[0] === "" || (s === "." || s === "") && (n = !0,
                    t.splice(o, 1),
                    o--)
                }
                t[0] === "." && t.length === 2 && (t[1] === "." || t[1] === "") && (n = !0,
                t.pop())
            }
            let r = 0;
            for (; (r = t.indexOf("..", r + 1)) !== -1; ) {
                const o = t[r - 1];
                o && o !== "." && o !== ".." && o !== "**" && (n = !0,
                t.splice(r - 1, 2),
                r -= 2)
            }
        } while (n);
        return t.length === 0 ? [""] : t
    }
    firstPhasePreProcess(t) {
        let n = !1;
        do {
            n = !1;
            for (let r of t) {
                let o = -1;
                for (; (o = r.indexOf("**", o + 1)) !== -1; ) {
                    let i = o;
                    for (; r[i + 1] === "**"; )
                        i++;
                    i > o && r.splice(o + 1, i - o);
                    let a = r[o + 1];
                    const c = r[o + 2]
                      , l = r[o + 3];
                    if (a !== ".." || !c || c === "." || c === ".." || !l || l === "." || l === "..")
                        continue;
                    n = !0,
                    r.splice(o, 1);
                    const u = r.slice(0);
                    u[o] = "**",
                    t.push(u),
                    o--
                }
                if (!this.preserveMultipleSlashes) {
                    for (let i = 1; i < r.length - 1; i++) {
                        const a = r[i];
                        i === 1 && a === "" && r[0] === "" || (a === "." || a === "") && (n = !0,
                        r.splice(i, 1),
                        i--)
                    }
                    r[0] === "." && r.length === 2 && (r[1] === "." || r[1] === "") && (n = !0,
                    r.pop())
                }
                let s = 0;
                for (; (s = r.indexOf("..", s + 1)) !== -1; ) {
                    const i = r[s - 1];
                    if (i && i !== "." && i !== ".." && i !== "**") {
                        n = !0;
                        const c = s === 1 && r[s + 1] === "**" ? ["."] : [];
                        r.splice(s - 1, 2, ...c),
                        r.length === 0 && r.push(""),
                        s -= 2
                    }
                }
            }
        } while (n);
        return t
    }
    secondPhasePreProcess(t) {
        for (let n = 0; n < t.length - 1; n++)
            for (let r = n + 1; r < t.length; r++) {
                const o = this.partsMatch(t[n], t[r], !this.preserveMultipleSlashes);
                if (o) {
                    t[n] = [],
                    t[r] = o;
                    break
                }
            }
        return t.filter(n => n.length)
    }
    partsMatch(t, n, r=!1) {
        let o = 0
          , s = 0
          , i = []
          , a = "";
        for (; o < t.length && s < n.length; )
            if (t[o] === n[s])
                i.push(a === "b" ? n[s] : t[o]),
                o++,
                s++;
            else if (r && t[o] === "**" && n[s] === t[o + 1])
                i.push(t[o]),
                o++;
            else if (r && n[s] === "**" && t[o] === n[s + 1])
                i.push(n[s]),
                s++;
            else if (t[o] === "*" && n[s] && (this.options.dot || !n[s].startsWith(".")) && n[s] !== "**") {
                if (a === "b")
                    return !1;
                a = "a",
                i.push(t[o]),
                o++,
                s++
            } else if (n[s] === "*" && t[o] && (this.options.dot || !t[o].startsWith(".")) && t[o] !== "**") {
                if (a === "a")
                    return !1;
                a = "b",
                i.push(n[s]),
                o++,
                s++
            } else
                return !1;
        return t.length === n.length && i
    }
    parseNegate() {
        if (this.nonegate)
            return;
        const t = this.pattern;
        let n = !1
          , r = 0;
        for (let o = 0; o < t.length && t.charAt(o) === "!"; o++)
            n = !n,
            r++;
        r && (this.pattern = t.slice(r)),
        this.negate = n
    }
    matchOne(t, n, r=!1) {
        const o = this.options;
        if (this.isWindows) {
            const p = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0])
              , S = !p && t[0] === "" && t[1] === "" && t[2] === "?" && /^[a-z]:$/i.test(t[3])
              , k = typeof n[0] == "string" && /^[a-z]:$/i.test(n[0])
              , y = !k && n[0] === "" && n[1] === "" && n[2] === "?" && typeof n[3] == "string" && /^[a-z]:$/i.test(n[3])
              , g = S ? 3 : p ? 0 : void 0
              , w = y ? 3 : k ? 0 : void 0;
            if (typeof g == "number" && typeof w == "number") {
                const [T,A] = [t[g], n[w]];
                T.toLowerCase() === A.toLowerCase() && (n[w] = T,
                w > g ? n = n.slice(w) : g > w && (t = t.slice(g)))
            }
        }
        const {optimizationLevel: s=1} = this.options;
        s >= 2 && (t = this.levelTwoFileOptimize(t)),
        this.debug("matchOne", this, {
            file: t,
            pattern: n
        }),
        this.debug("matchOne", t.length, n.length);
        for (var i = 0, a = 0, c = t.length, l = n.length; i < c && a < l; i++,
        a++) {
            this.debug("matchOne loop");
            var u = n[a]
              , f = t[i];
            if (this.debug(n, u, f),
            u === !1)
                return !1;
            if (u === Tt) {
                this.debug("GLOBSTAR", [n, u, f]);
                var d = i
                  , h = a + 1;
                if (h === l) {
                    for (this.debug("** at the end"); i < c; i++)
                        if (t[i] === "." || t[i] === ".." || !o.dot && t[i].charAt(0) === ".")
                            return !1;
                    return !0
                }
                for (; d < c; ) {
                    var m = t[d];
                    if (this.debug(`
globstar while`, t, d, n, h, m),
                    this.matchOne(t.slice(d), n.slice(h), r))
                        return this.debug("globstar found match!", d, c, m),
                        !0;
                    if (m === "." || m === ".." || !o.dot && m.charAt(0) === ".") {
                        this.debug("dot detected!", t, d, n, h);
                        break
                    }
                    this.debug("globstar swallow a segment, and continue"),
                    d++
                }
                return !!(r && (this.debug(`
>>> no match, partial?`, t, d, n, h),
                d === c))
            }
            let p;
            if (typeof u == "string" ? (p = f === u,
            this.debug("string match", u, f, p)) : (p = u.test(f),
            this.debug("pattern match", u, f, p)),
            !p)
                return !1
        }
        if (i === c && a === l)
            return !0;
        if (i === c)
            return r;
        if (a === l)
            return i === c - 1 && t[i] === "";
        throw new Error("wtf?")
    }
    braceExpand() {
        return mg(this.pattern, this.options)
    }
    parse(t) {
        si(t);
        const n = this.options;
        if (t === "**")
            return Tt;
        if (t === "")
            return "";
        let r, o = null;
        (r = t.match(XS)) ? o = n.dot ? tE : eE : (r = t.match(VS)) ? o = (n.nocase ? n.dot ? WS : qS : n.dot ? KS : zS)(r[1]) : (r = t.match(nE)) ? o = (n.nocase ? n.dot ? oE : rE : n.dot ? sE : iE)(r) : (r = t.match(GS)) ? o = n.dot ? ZS : JS : (r = t.match(YS)) && (o = QS);
        const s = ii.fromGlob(t, this.options).toMMPattern();
        return o && typeof s == "object" && Reflect.defineProperty(s, "test", {
            value: o
        }),
        s
    }
    makeRe() {
        if (this.regexp || this.regexp === !1)
            return this.regexp;
        const t = this.set;
        if (!t.length)
            return this.regexp = !1,
            this.regexp;
        const n = this.options
          , r = n.noglobstar ? lE : n.dot ? uE : fE
          , o = new Set(n.nocase ? ["i"] : []);
        let s = t.map(c => {
            const l = c.map(u => {
                if (u instanceof RegExp)
                    for (const f of u.flags.split(""))
                        o.add(f);
                return typeof u == "string" ? mE(u) : u === Tt ? Tt : u._src
            }
            );
            return l.forEach( (u, f) => {
                const d = l[f + 1]
                  , h = l[f - 1];
                u !== Tt || h === Tt || (h === void 0 ? d !== void 0 && d !== Tt ? l[f + 1] = "(?:\\/|" + r + "\\/)?" + d : l[f] = r : d === void 0 ? l[f - 1] = h + "(?:\\/|" + r + ")?" : d !== Tt && (l[f - 1] = h + "(?:\\/|\\/" + r + "\\/)" + d,
                l[f + 1] = Tt))
            }
            ),
            l.filter(u => u !== Tt).join("/")
        }
        ).join("|");
        const [i,a] = t.length > 1 ? ["(?:", ")"] : ["", ""];
        s = "^" + i + s + a + "$",
        this.negate && (s = "^(?!" + s + ").+$");
        try {
            this.regexp = new RegExp(s,[...o].join(""))
        } catch {
            this.regexp = !1
        }
        return this.regexp
    }
    slashSplit(t) {
        return this.preserveMultipleSlashes ? t.split("/") : this.isWindows && /^\/\/[^\/]+/.test(t) ? ["", ...t.split(/\/+/)] : t.split(/\/+/)
    }
    match(t, n=this.partial) {
        if (this.debug("match", t, this.pattern),
        this.comment)
            return !1;
        if (this.empty)
            return t === "";
        if (t === "/" && n)
            return !0;
        const r = this.options;
        this.isWindows && (t = t.split("\\").join("/"));
        const o = this.slashSplit(t);
        this.debug(this.pattern, "split", o);
        const s = this.set;
        this.debug(this.pattern, "set", s);
        let i = o[o.length - 1];
        if (!i)
            for (let a = o.length - 2; !i && a >= 0; a--)
                i = o[a];
        for (let a = 0; a < s.length; a++) {
            const c = s[a];
            let l = o;
            if (r.matchBase && c.length === 1 && (l = [i]),
            this.matchOne(l, c, n))
                return r.flipNegate ? !0 : !this.negate
        }
        return r.flipNegate ? !1 : this.negate
    }
    static defaults(t) {
        return ot.defaults(t).Minimatch
    }
}
ot.AST = ii;
ot.Minimatch = Ni;
ot.escape = US;
ot.unescape = fo;
const yE = st( () => {
    const t = Ot().public.metapixel
      , {$fbq: n, init: r, pageView: o} = tc();
    n.disablePushState = !0;
    for (const i in t) {
        const a = t[i];
        r(a.id.toString(), a.autoconfig)
    }
    return Dt().afterEach( (i, a, c) => {
        if (!Ht(c))
            for (const l in t) {
                const u = t[l];
                ot(i.path, u.pageView ?? "**") && o(u.id.toString())
            }
    }
    ),
    {
        provide: {
            fbq: n
        }
    }
}
)
  , yg = !(typeof navigator > "u") && navigator.product === "ReactNative"
  , bg = {
    timeout: yg ? 6e4 : 12e4
}
  , bE = function(e) {
    const t = {
        ...bg,
        ...typeof e == "string" ? {
            url: e
        } : e
    };
    if (t.timeout = vg(t.timeout),
    t.query) {
        const {url: n, searchParams: r} = function(o) {
            const s = o.indexOf("?");
            if (s === -1)
                return {
                    url: o,
                    searchParams: new URLSearchParams
                };
            const i = o.slice(0, s)
              , a = o.slice(s + 1);
            if (!yg)
                return {
                    url: i,
                    searchParams: new URLSearchParams(a)
                };
            if (typeof decodeURIComponent != "function")
                throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
            const c = new URLSearchParams;
            for (const l of a.split("&")) {
                const [u,f] = l.split("=");
                u && c.append(yf(u), yf(f || ""))
            }
            return {
                url: i,
                searchParams: c
            }
        }(t.url);
        for (const [o,s] of Object.entries(t.query)) {
            if (s !== void 0)
                if (Array.isArray(s))
                    for (const a of s)
                        r.append(o, a);
                else
                    r.append(o, s);
            const i = r.toString();
            i && (t.url = `${n}?${i}`)
        }
    }
    return t.method = t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase(),
    t
};
function yf(e) {
    return decodeURIComponent(e.replace(/\+/g, " "))
}
function vg(e) {
    if (e === !1 || e === 0)
        return !1;
    if (e.connect || e.socket)
        return e;
    const t = Number(e);
    return isNaN(t) ? vg(bg.timeout) : {
        connect: t,
        socket: t
    }
}
const vE = /^https?:\/\//i
  , _E = function(e) {
    if (!vE.test(e.url))
        throw new Error(`"${e.url}" is not a valid URL`)
};
function _g(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
const wE = ["request", "response", "progress", "error", "abort"]
  , bf = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
function wg(e, t) {
    const n = []
      , r = bf.reduce( (s, i) => (s[i] = s[i] || [],
    s), {
        processOptions: [bE],
        validateOptions: [_E]
    });
    function o(s) {
        const i = wE.reduce( (h, m) => (h[m] = function() {
            const p = Object.create(null);
            let S = 0;
            return {
                publish: function(k) {
                    for (const y in p)
                        p[y](k)
                },
                subscribe: function(k) {
                    const y = S++;
                    return p[y] = k,
                    function() {
                        delete p[y]
                    }
                }
            }
        }(),
        h), {})
          , a = (h => function(m, p, ...S) {
            const k = m === "onError";
            let y = p;
            for (let g = 0; g < h[m].length && (y = (0,
            h[m][g])(y, ...S),
            !k || y); g++)
                ;
            return y
        }
        )(r)
          , c = a("processOptions", s);
        a("validateOptions", c);
        const l = {
            options: c,
            channels: i,
            applyMiddleware: a
        };
        let u;
        const f = i.request.subscribe(h => {
            u = t(h, (m, p) => ( (S, k, y) => {
                let g = S
                  , w = k;
                if (!g)
                    try {
                        w = a("onResponse", k, y)
                    } catch (T) {
                        w = null,
                        g = T
                    }
                g = g && a("onError", g, y),
                g ? i.error.publish(g) : w && i.response.publish(w)
            }
            )(m, p, h))
        }
        );
        i.abort.subscribe( () => {
            f(),
            u && u.abort()
        }
        );
        const d = a("onReturn", i, l);
        return d === i && i.request.publish(l),
        d
    }
    return o.use = function(s) {
        if (!s)
            throw new Error("Tried to add middleware that resolved to falsey value");
        if (typeof s == "function")
            throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        if (s.onReturn && r.onReturn.length > 0)
            throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        return bf.forEach(i => {
            s[i] && r[i].push(s[i])
        }
        ),
        n.push(s),
        o
    }
    ,
    o.clone = () => wg(n, t),
    e.forEach(o.use),
    o
}
var ca = function(e) {
    return e.replace(/^\s+|\s+$/g, "")
}, CE = _g(function(e) {
    if (!e)
        return {};
    for (var t = {}, n = ca(e).split(`
`), r = 0; r < n.length; r++) {
        var o = n[r]
          , s = o.indexOf(":")
          , i = ca(o.slice(0, s)).toLowerCase()
          , a = ca(o.slice(s + 1));
        typeof t[i] > "u" ? t[i] = a : (c = t[i],
        Object.prototype.toString.call(c) === "[object Array]" ? t[i].push(a) : t[i] = [t[i], a])
    }
    var c;
    return t
}), jo, No, Hr, Do, Qt, Fo, Ho, sd;
let rc = (sd = class {
    constructor() {
        te(this, "onabort");
        te(this, "onerror");
        te(this, "onreadystatechange");
        te(this, "ontimeout");
        te(this, "readyState", 0);
        te(this, "response");
        te(this, "responseText", "");
        te(this, "responseType", "");
        te(this, "status");
        te(this, "statusText");
        te(this, "withCredentials");
        le(this, jo);
        le(this, No);
        le(this, Hr);
        le(this, Do, {});
        le(this, Qt);
        le(this, Fo, {});
        le(this, Ho)
    }
    open(t, n, r) {
        var o;
        re(this, jo, t),
        re(this, No, n),
        re(this, Hr, ""),
        this.readyState = 1,
        (o = this.onreadystatechange) == null || o.call(this),
        re(this, Qt, void 0)
    }
    abort() {
        R(this, Qt) && R(this, Qt).abort()
    }
    getAllResponseHeaders() {
        return R(this, Hr)
    }
    setRequestHeader(t, n) {
        R(this, Do)[t] = n
    }
    setInit(t, n=!0) {
        re(this, Fo, t),
        re(this, Ho, n)
    }
    send(t) {
        const n = this.responseType !== "arraybuffer"
          , r = {
            ...R(this, Fo),
            method: R(this, jo),
            headers: R(this, Do),
            body: t
        };
        typeof AbortController == "function" && R(this, Ho) && (re(this, Qt, new AbortController),
        typeof EventTarget < "u" && R(this, Qt).signal instanceof EventTarget && (r.signal = R(this, Qt).signal)),
        typeof document < "u" && (r.credentials = this.withCredentials ? "include" : "omit"),
        fetch(R(this, No), r).then(o => {
            var s;
            return o.headers.forEach( (i, a) => {
                re(this, Hr, R(this, Hr) + `${a}: ${i}\r
`)
            }
            ),
            this.status = o.status,
            this.statusText = o.statusText,
            this.readyState = 3,
            (s = this.onreadystatechange) == null || s.call(this),
            n ? o.text() : o.arrayBuffer()
        }
        ).then(o => {
            var s;
            typeof o == "string" ? this.responseText = o : this.response = o,
            this.readyState = 4,
            (s = this.onreadystatechange) == null || s.call(this)
        }
        ).catch(o => {
            var s, i;
            o.name !== "AbortError" ? (s = this.onerror) == null || s.call(this, o) : (i = this.onabort) == null || i.call(this)
        }
        )
    }
}
,
jo = new WeakMap,
No = new WeakMap,
Hr = new WeakMap,
Do = new WeakMap,
Qt = new WeakMap,
Fo = new WeakMap,
Ho = new WeakMap,
sd);
const oc = typeof XMLHttpRequest == "function" ? "xhr" : "fetch"
  , SE = oc === "xhr" ? XMLHttpRequest : rc
  , EE = (e, t) => {
    const n = e.options
      , r = e.applyMiddleware("finalizeOptions", n)
      , o = {}
      , s = e.applyMiddleware("interceptRequest", void 0, {
        adapter: oc,
        context: e
    });
    if (s) {
        const p = setTimeout(t, 0, null, s);
        return {
            abort: () => clearTimeout(p)
        }
    }
    let i = new SE;
    i instanceof rc && typeof r.fetch == "object" && i.setInit(r.fetch, r.useAbortSignal ?? !0);
    const a = r.headers
      , c = r.timeout;
    let l = !1
      , u = !1
      , f = !1;
    if (i.onerror = p => {
        m(i instanceof rc ? p instanceof Error ? p : new Error(`Request error while attempting to reach is ${r.url}`,{
            cause: p
        }) : new Error(`Request error while attempting to reach is ${r.url}${p.lengthComputable ? `(${p.loaded} of ${p.total} bytes transferred)` : ""}`))
    }
    ,
    i.ontimeout = p => {
        m(new Error(`Request timeout while attempting to reach ${r.url}${p.lengthComputable ? `(${p.loaded} of ${p.total} bytes transferred)` : ""}`))
    }
    ,
    i.onabort = () => {
        h(!0),
        l = !0
    }
    ,
    i.onreadystatechange = () => {
        c && (h(),
        o.socket = setTimeout( () => d("ESOCKETTIMEDOUT"), c.socket)),
        !l && i.readyState === 4 && i.status !== 0 && function() {
            if (!(l || u || f)) {
                if (i.status === 0)
                    return void m(new Error("Unknown XHR error"));
                h(),
                u = !0,
                t(null, {
                    body: i.response || (i.responseType === "" || i.responseType === "text" ? i.responseText : ""),
                    url: r.url,
                    method: r.method,
                    headers: CE(i.getAllResponseHeaders()),
                    statusCode: i.status,
                    statusMessage: i.statusText
                })
            }
        }()
    }
    ,
    i.open(r.method, r.url, !0),
    i.withCredentials = !!r.withCredentials,
    a && i.setRequestHeader)
        for (const p in a)
            a.hasOwnProperty(p) && i.setRequestHeader(p, a[p]);
    return r.rawBody && (i.responseType = "arraybuffer"),
    e.applyMiddleware("onRequest", {
        options: r,
        adapter: oc,
        request: i,
        context: e
    }),
    i.send(r.body || null),
    c && (o.connect = setTimeout( () => d("ETIMEDOUT"), c.connect)),
    {
        abort: function() {
            l = !0,
            i && i.abort()
        }
    };
    function d(p) {
        f = !0,
        i.abort();
        const S = new Error(p === "ESOCKETTIMEDOUT" ? `Socket timed out on request to ${r.url}` : `Connection timed out on request to ${r.url}`);
        S.code = p,
        e.channels.error.publish(S)
    }
    function h(p) {
        (p || l || i.readyState >= 2 && o.connect) && clearTimeout(o.connect),
        o.socket && clearTimeout(o.socket)
    }
    function m(p) {
        if (u)
            return;
        h(!0),
        u = !0,
        i = null;
        const S = p || new Error(`Network error while attempting to reach ${r.url}`);
        S.isNetworkError = !0,
        S.request = r,
        t(S)
    }
}
  , kE = (e=[], t=EE) => wg(e, t);
var TE = {}, vf, _f, sc = {
    exports: {}
};
function xE() {
    if (_f)
        return vf;
    _f = 1;
    var e = 1e3
      , t = 60 * e
      , n = 60 * t
      , r = 24 * n
      , o = 7 * r
      , s = 365.25 * r;
    function i(a, c, l, u) {
        var f = c >= 1.5 * l;
        return Math.round(a / l) + " " + u + (f ? "s" : "")
    }
    return vf = function(a, c) {
        c = c || {};
        var l, u, f = typeof a;
        if (f === "string" && a.length > 0)
            return function(d) {
                if (!((d = String(d)).length > 100)) {
                    var h = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(d);
                    if (h) {
                        var m = parseFloat(h[1]);
                        switch ((h[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return m * s;
                        case "weeks":
                        case "week":
                        case "w":
                            return m * o;
                        case "days":
                        case "day":
                        case "d":
                            return m * r;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return m * n;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return m * t;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return m * e;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return m;
                        default:
                            return
                        }
                    }
                }
            }(a);
        if (f === "number" && isFinite(a))
            return c.long ? (l = a,
            (u = Math.abs(l)) >= r ? i(l, u, r, "day") : u >= n ? i(l, u, n, "hour") : u >= t ? i(l, u, t, "minute") : u >= e ? i(l, u, e, "second") : l + " ms") : function(d) {
                var h = Math.abs(d);
                return h >= r ? Math.round(d / r) + "d" : h >= n ? Math.round(d / n) + "h" : h >= t ? Math.round(d / t) + "m" : h >= e ? Math.round(d / e) + "s" : d + "ms"
            }(a);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a))
    }
}
var AE = function(e) {
    function t(o) {
        let s, i, a, c = null;
        function l(...u) {
            if (!l.enabled)
                return;
            const f = l
              , d = Number(new Date)
              , h = d - (s || d);
            f.diff = h,
            f.prev = s,
            f.curr = d,
            s = d,
            u[0] = t.coerce(u[0]),
            typeof u[0] != "string" && u.unshift("%O");
            let m = 0;
            u[0] = u[0].replace(/%([a-zA-Z%])/g, (p, S) => {
                if (p === "%%")
                    return "%";
                m++;
                const k = t.formatters[S];
                if (typeof k == "function") {
                    const y = u[m];
                    p = k.call(f, y),
                    u.splice(m, 1),
                    m--
                }
                return p
            }
            ),
            t.formatArgs.call(f, u),
            (f.log || t.log).apply(f, u)
        }
        return l.namespace = o,
        l.useColors = t.useColors(),
        l.color = t.selectColor(o),
        l.extend = n,
        l.destroy = t.destroy,
        Object.defineProperty(l, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: () => c !== null ? c : (i !== t.namespaces && (i = t.namespaces,
            a = t.enabled(o)),
            a),
            set: u => {
                c = u
            }
        }),
        typeof t.init == "function" && t.init(l),
        l
    }
    function n(o, s) {
        const i = t(this.namespace + (typeof s > "u" ? ":" : s) + o);
        return i.log = this.log,
        i
    }
    function r(o) {
        return o.toString().substring(2, o.toString().length - 2).replace(/\.\*\?$/, "*")
    }
    return t.debug = t,
    t.default = t,
    t.coerce = function(o) {
        return o instanceof Error ? o.stack || o.message : o
    }
    ,
    t.disable = function() {
        const o = [...t.names.map(r), ...t.skips.map(r).map(s => "-" + s)].join(",");
        return t.enable(""),
        o
    }
    ,
    t.enable = function(o) {
        let s;
        t.save(o),
        t.namespaces = o,
        t.names = [],
        t.skips = [];
        const i = (typeof o == "string" ? o : "").split(/[\s,]+/)
          , a = i.length;
        for (s = 0; s < a; s++)
            i[s] && ((o = i[s].replace(/\*/g, ".*?"))[0] === "-" ? t.skips.push(new RegExp("^" + o.slice(1) + "$")) : t.names.push(new RegExp("^" + o + "$")))
    }
    ,
    t.enabled = function(o) {
        if (o[o.length - 1] === "*")
            return !0;
        let s, i;
        for (s = 0,
        i = t.skips.length; s < i; s++)
            if (t.skips[s].test(o))
                return !1;
        for (s = 0,
        i = t.names.length; s < i; s++)
            if (t.names[s].test(o))
                return !0;
        return !1
    }
    ,
    t.humanize = xE(),
    t.destroy = function() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
    }
    ,
    Object.keys(e).forEach(o => {
        t[o] = e[o]
    }
    ),
    t.names = [],
    t.skips = [],
    t.formatters = {},
    t.selectColor = function(o) {
        let s = 0;
        for (let i = 0; i < o.length; i++)
            s = (s << 5) - s + o.charCodeAt(i),
            s |= 0;
        return t.colors[Math.abs(s) % t.colors.length]
    }
    ,
    t.enable(t.load()),
    t
};
(function(e, t) {
    t.formatArgs = function(r) {
        if (r[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + r[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
        !this.useColors)
            return;
        const o = "color: " + this.color;
        r.splice(1, 0, o, "color: inherit");
        let s = 0
          , i = 0;
        r[0].replace(/%[a-zA-Z%]/g, a => {
            a !== "%%" && (s++,
            a === "%c" && (i = s))
        }
        ),
        r.splice(i, 0, o)
    }
    ,
    t.save = function(r) {
        try {
            r ? t.storage.setItem("debug", r) : t.storage.removeItem("debug")
        } catch {}
    }
    ,
    t.load = function() {
        let r;
        try {
            r = t.storage.getItem("debug")
        } catch {}
        return !r && typeof process < "u" && "env"in process && (r = TE.DEBUG),
        r
    }
    ,
    t.useColors = function() {
        return !(!(typeof window < "u" && window.process) || window.process.type !== "renderer" && !window.process.__nwjs) || !(typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && (typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    }
    ,
    t.storage = function() {
        try {
            return localStorage
        } catch {}
    }(),
    t.destroy = ( () => {
        let r = !1;
        return () => {
            r || (r = !0,
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    }
    )(),
    t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
    t.log = console.debug || console.log || ( () => {}
    ),
    e.exports = AE(t);
    const {formatters: n} = e.exports;
    n.j = function(r) {
        try {
            return JSON.stringify(r)
        } catch (o) {
            return "[UnexpectedJSONParseError]: " + o.message
        }
    }
}
)(sc, sc.exports);
_g(sc.exports);
const RE = typeof Buffer > "u" ? () => !1 : e => Buffer.isBuffer(e);
function wf(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function OE(e) {
    if (wf(e) === !1)
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(wf(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)
}
const PE = ["boolean", "string", "number"];
function $E() {
    return {
        processOptions: e => {
            const t = e.body;
            return !t || typeof t.pipe == "function" || RE(t) || PE.indexOf(typeof t) === -1 && !Array.isArray(t) && !OE(t) ? e : Object.assign({}, e, {
                body: JSON.stringify(e.body),
                headers: Object.assign({}, e.headers, {
                    "Content-Type": "application/json"
                })
            })
        }
    }
}
function ME(e) {
    return {
        onResponse: n => {
            const r = n.headers["content-type"] || ""
              , o = r.indexOf("application/json") !== -1;
            return n.body && r && o ? Object.assign({}, n, {
                body: t(n.body)
            }) : n
        }
        ,
        processOptions: n => Object.assign({}, n, {
            headers: Object.assign({
                Accept: "application/json"
            }, n.headers)
        })
    };
    function t(n) {
        try {
            return JSON.parse(n)
        } catch (r) {
            throw r.message = `Failed to parsed response body as JSON: ${r.message}`,
            r
        }
    }
}
let ho = {};
typeof globalThis < "u" ? ho = globalThis : typeof window < "u" ? ho = window : typeof global < "u" ? ho = global : typeof self < "u" && (ho = self);
var IE = ho;
function LE(e={}) {
    const t = e.implementation || IE.Observable;
    if (!t)
        throw new Error("`Observable` is not available in global scope, and no implementation was passed");
    return {
        onReturn: (n, r) => new t(o => (n.error.subscribe(s => o.error(s)),
        n.progress.subscribe(s => o.next(Object.assign({
            type: "progress"
        }, s))),
        n.response.subscribe(s => {
            o.next(Object.assign({
                type: "response"
            }, s)),
            o.complete()
        }
        ),
        n.request.publish(r),
        () => n.abort.publish()))
    }
}
function BE() {
    return {
        onRequest: e => {
            if (e.adapter !== "xhr")
                return;
            const t = e.request
              , n = e.context;
            function r(o) {
                return s => {
                    const i = s.lengthComputable ? s.loaded / s.total * 100 : -1;
                    n.channels.progress.publish({
                        stage: o,
                        percent: i,
                        total: s.total,
                        loaded: s.loaded,
                        lengthComputable: s.lengthComputable
                    })
                }
            }
            "upload"in t && "onprogress"in t.upload && (t.upload.onprogress = r("upload")),
            "onprogress"in t && (t.onprogress = r("download"))
        }
    }
}
var Cg = (e, t, n) => (n.method === "GET" || n.method === "HEAD") && (e.isNetworkError || !1);
function jE(e) {
    return 100 * Math.pow(2, e) + 100 * Math.random()
}
const ll = (e={}) => (t => {
    const n = t.maxRetries || 5
      , r = t.retryDelay || jE
      , o = t.shouldRetry;
    return {
        onError: (s, i) => {
            const a = i.options
              , c = a.maxRetries || n
              , l = a.retryDelay || r
              , u = a.shouldRetry || o
              , f = a.attemptNumber || 0;
            if ((d = a.body) !== null && typeof d == "object" && typeof d.pipe == "function" || !u(s, f, a) || f >= c)
                return s;
            var d;
            const h = Object.assign({}, i, {
                options: Object.assign({}, a, {
                    attemptNumber: f + 1
                })
            });
            return setTimeout( () => i.channels.request.publish(h), l(f)),
            null
        }
    }
}
)({
    shouldRetry: Cg,
    ...e
});
ll.shouldRetry = Cg;
var ic = function(e, t) {
    return ic = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(n, r) {
        n.__proto__ = r
    }
    || function(n, r) {
        for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
    }
    ,
    ic(e, t)
};
function ul(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    ic(e, t);
    function n() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype,
    new n)
}
function NE(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(u) {
            try {
                l(r.next(u))
            } catch (f) {
                i(f)
            }
        }
        function c(u) {
            try {
                l(r.throw(u))
            } catch (f) {
                i(f)
            }
        }
        function l(u) {
            u.done ? s(u.value) : o(u.value).then(a, c)
        }
        l((r = r.apply(e, t || [])).next())
    }
    )
}
function Sg(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (s[0] & 1)
                throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    }, r, o, s, i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return i.next = a(0),
    i.throw = a(1),
    i.return = a(2),
    typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }
    ),
    i;
    function a(l) {
        return function(u) {
            return c([l, u])
        }
    }
    function c(l) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; i && (i = 0,
        l[0] && (n = 0)),
        n; )
            try {
                if (r = 1,
                o && (s = l[0] & 2 ? o.return : l[0] ? o.throw || ((s = o.return) && s.call(o),
                0) : o.next) && !(s = s.call(o, l[1])).done)
                    return s;
                switch (o = 0,
                s && (l = [l[0] & 2, s.value]),
                l[0]) {
                case 0:
                case 1:
                    s = l;
                    break;
                case 4:
                    return n.label++,
                    {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    n.label++,
                    o = l[1],
                    l = [0];
                    continue;
                case 7:
                    l = n.ops.pop(),
                    n.trys.pop();
                    continue;
                default:
                    if (s = n.trys,
                    !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
                        n.label = l[1];
                        break
                    }
                    if (l[0] === 6 && n.label < s[1]) {
                        n.label = s[1],
                        s = l;
                        break
                    }
                    if (s && n.label < s[2]) {
                        n.label = s[2],
                        n.ops.push(l);
                        break
                    }
                    s[2] && n.ops.pop(),
                    n.trys.pop();
                    continue
                }
                l = t.call(e, n)
            } catch (u) {
                l = [6, u],
                o = 0
            } finally {
                r = s = 0
            }
        if (l[0] & 5)
            throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}
function Io(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , n = t && e[t]
      , r = 0;
    if (n)
        return n.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function() {
                return e && r >= e.length && (e = void 0),
                {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function pr(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n)
        return e;
    var r = n.call(e), o, s = [], i;
    try {
        for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
            s.push(o.value)
    } catch (a) {
        i = {
            error: a
        }
    } finally {
        try {
            o && !o.done && (n = r.return) && n.call(r)
        } finally {
            if (i)
                throw i.error
        }
    }
    return s
}
function gr(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
function Nr(e) {
    return this instanceof Nr ? (this.v = e,
    this) : new Nr(e)
}
function DE(e, t, n) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []), o, s = [];
    return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype),
    a("next"),
    a("throw"),
    a("return", i),
    o[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    o;
    function i(h) {
        return function(m) {
            return Promise.resolve(m).then(h, f)
        }
    }
    function a(h, m) {
        r[h] && (o[h] = function(p) {
            return new Promise(function(S, k) {
                s.push([h, p, S, k]) > 1 || c(h, p)
            }
            )
        }
        ,
        m && (o[h] = m(o[h])))
    }
    function c(h, m) {
        try {
            l(r[h](m))
        } catch (p) {
            d(s[0][3], p)
        }
    }
    function l(h) {
        h.value instanceof Nr ? Promise.resolve(h.value.v).then(u, f) : d(s[0][2], h)
    }
    function u(h) {
        c("next", h)
    }
    function f(h) {
        c("throw", h)
    }
    function d(h, m) {
        h(m),
        s.shift(),
        s.length && c(s[0][0], s[0][1])
    }
}
function FE(e) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof Io == "function" ? Io(e) : e[Symbol.iterator](),
    n = {},
    r("next"),
    r("throw"),
    r("return"),
    n[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    n);
    function r(s) {
        n[s] = e[s] && function(i) {
            return new Promise(function(a, c) {
                i = e[s](i),
                o(a, c, i.done, i.value)
            }
            )
        }
    }
    function o(s, i, a, c) {
        Promise.resolve(c).then(function(l) {
            s({
                value: l,
                done: a
            })
        }, i)
    }
}
function Xe(e) {
    return typeof e == "function"
}
function Eg(e) {
    var t = function(r) {
        Error.call(r),
        r.stack = new Error().stack
    }
      , n = e(t);
    return n.prototype = Object.create(Error.prototype),
    n.prototype.constructor = n,
    n
}
var la = Eg(function(e) {
    return function(n) {
        e(this),
        this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, o) {
            return o + 1 + ") " + r.toString()
        }).join(`
  `) : "",
        this.name = "UnsubscriptionError",
        this.errors = n
    }
});
function Cf(e, t) {
    if (e) {
        var n = e.indexOf(t);
        0 <= n && e.splice(n, 1)
    }
}
var fl = function() {
    function e(t) {
        this.initialTeardown = t,
        this.closed = !1,
        this._parentage = null,
        this._finalizers = null
    }
    return e.prototype.unsubscribe = function() {
        var t, n, r, o, s;
        if (!this.closed) {
            this.closed = !0;
            var i = this._parentage;
            if (i)
                if (this._parentage = null,
                Array.isArray(i))
                    try {
                        for (var a = Io(i), c = a.next(); !c.done; c = a.next()) {
                            var l = c.value;
                            l.remove(this)
                        }
                    } catch (p) {
                        t = {
                            error: p
                        }
                    } finally {
                        try {
                            c && !c.done && (n = a.return) && n.call(a)
                        } finally {
                            if (t)
                                throw t.error
                        }
                    }
                else
                    i.remove(this);
            var u = this.initialTeardown;
            if (Xe(u))
                try {
                    u()
                } catch (p) {
                    s = p instanceof la ? p.errors : [p]
                }
            var f = this._finalizers;
            if (f) {
                this._finalizers = null;
                try {
                    for (var d = Io(f), h = d.next(); !h.done; h = d.next()) {
                        var m = h.value;
                        try {
                            Sf(m)
                        } catch (p) {
                            s = s ?? [],
                            p instanceof la ? s = gr(gr([], pr(s)), pr(p.errors)) : s.push(p)
                        }
                    }
                } catch (p) {
                    r = {
                        error: p
                    }
                } finally {
                    try {
                        h && !h.done && (o = d.return) && o.call(d)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
            }
            if (s)
                throw new la(s)
        }
    }
    ,
    e.prototype.add = function(t) {
        var n;
        if (t && t !== this)
            if (this.closed)
                Sf(t);
            else {
                if (t instanceof e) {
                    if (t.closed || t._hasParent(this))
                        return;
                    t._addParent(this)
                }
                (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t)
            }
    }
    ,
    e.prototype._hasParent = function(t) {
        var n = this._parentage;
        return n === t || Array.isArray(n) && n.includes(t)
    }
    ,
    e.prototype._addParent = function(t) {
        var n = this._parentage;
        this._parentage = Array.isArray(n) ? (n.push(t),
        n) : n ? [n, t] : t
    }
    ,
    e.prototype._removeParent = function(t) {
        var n = this._parentage;
        n === t ? this._parentage = null : Array.isArray(n) && Cf(n, t)
    }
    ,
    e.prototype.remove = function(t) {
        var n = this._finalizers;
        n && Cf(n, t),
        t instanceof e && t._removeParent(this)
    }
    ,
    e.EMPTY = function() {
        var t = new e;
        return t.closed = !0,
        t
    }(),
    e
}();
fl.EMPTY;
function kg(e) {
    return e instanceof fl || e && "closed"in e && Xe(e.remove) && Xe(e.add) && Xe(e.unsubscribe)
}
function Sf(e) {
    Xe(e) ? e() : e.unsubscribe()
}
var Tg = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
}
  , xg = {
    setTimeout: function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
        return setTimeout.apply(void 0, gr([e, t], pr(n)))
    },
    clearTimeout: function(e) {
        var t = xg.delegate;
        return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e)
    },
    delegate: void 0
};
function Ag(e) {
    xg.setTimeout(function() {
        throw e
    })
}
function Ef() {}
function HE(e) {
    e()
}
var dl = function(e) {
    ul(t, e);
    function t(n) {
        var r = e.call(this) || this;
        return r.isStopped = !1,
        n ? (r.destination = n,
        kg(n) && n.add(r)) : r.destination = KE,
        r
    }
    return t.create = function(n, r, o) {
        return new ac(n,r,o)
    }
    ,
    t.prototype.next = function(n) {
        this.isStopped || this._next(n)
    }
    ,
    t.prototype.error = function(n) {
        this.isStopped || (this.isStopped = !0,
        this._error(n))
    }
    ,
    t.prototype.complete = function() {
        this.isStopped || (this.isStopped = !0,
        this._complete())
    }
    ,
    t.prototype.unsubscribe = function() {
        this.closed || (this.isStopped = !0,
        e.prototype.unsubscribe.call(this),
        this.destination = null)
    }
    ,
    t.prototype._next = function(n) {
        this.destination.next(n)
    }
    ,
    t.prototype._error = function(n) {
        try {
            this.destination.error(n)
        } finally {
            this.unsubscribe()
        }
    }
    ,
    t.prototype._complete = function() {
        try {
            this.destination.complete()
        } finally {
            this.unsubscribe()
        }
    }
    ,
    t
}(fl)
  , UE = Function.prototype.bind;
function ua(e, t) {
    return UE.call(e, t)
}
var VE = function() {
    function e(t) {
        this.partialObserver = t
    }
    return e.prototype.next = function(t) {
        var n = this.partialObserver;
        if (n.next)
            try {
                n.next(t)
            } catch (r) {
                As(r)
            }
    }
    ,
    e.prototype.error = function(t) {
        var n = this.partialObserver;
        if (n.error)
            try {
                n.error(t)
            } catch (r) {
                As(r)
            }
        else
            As(t)
    }
    ,
    e.prototype.complete = function() {
        var t = this.partialObserver;
        if (t.complete)
            try {
                t.complete()
            } catch (n) {
                As(n)
            }
    }
    ,
    e
}()
  , ac = function(e) {
    ul(t, e);
    function t(n, r, o) {
        var s = e.call(this) || this, i;
        if (Xe(n) || !n)
            i = {
                next: n ?? void 0,
                error: r ?? void 0,
                complete: o ?? void 0
            };
        else {
            var a;
            s && Tg.useDeprecatedNextContext ? (a = Object.create(n),
            a.unsubscribe = function() {
                return s.unsubscribe()
            }
            ,
            i = {
                next: n.next && ua(n.next, a),
                error: n.error && ua(n.error, a),
                complete: n.complete && ua(n.complete, a)
            }) : i = n
        }
        return s.destination = new VE(i),
        s
    }
    return t
}(dl);
function As(e) {
    Ag(e)
}
function zE(e) {
    throw e
}
var KE = {
    closed: !0,
    next: Ef,
    error: zE,
    complete: Ef
}
  , hl = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}();
function Rg(e) {
    return e
}
function qE() {
    for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
    return Og(e)
}
function Og(e) {
    return e.length === 0 ? Rg : e.length === 1 ? e[0] : function(n) {
        return e.reduce(function(r, o) {
            return o(r)
        }, n)
    }
}
var Rt = function() {
    function e(t) {
        t && (this._subscribe = t)
    }
    return e.prototype.lift = function(t) {
        var n = new e;
        return n.source = this,
        n.operator = t,
        n
    }
    ,
    e.prototype.subscribe = function(t, n, r) {
        var o = this
          , s = GE(t) ? t : new ac(t,n,r);
        return HE(function() {
            var i = o
              , a = i.operator
              , c = i.source;
            s.add(a ? a.call(s, c) : c ? o._subscribe(s) : o._trySubscribe(s))
        }),
        s
    }
    ,
    e.prototype._trySubscribe = function(t) {
        try {
            return this._subscribe(t)
        } catch (n) {
            t.error(n)
        }
    }
    ,
    e.prototype.forEach = function(t, n) {
        var r = this;
        return n = kf(n),
        new n(function(o, s) {
            var i = new ac({
                next: function(a) {
                    try {
                        t(a)
                    } catch (c) {
                        s(c),
                        i.unsubscribe()
                    }
                },
                error: s,
                complete: o
            });
            r.subscribe(i)
        }
        )
    }
    ,
    e.prototype._subscribe = function(t) {
        var n;
        return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)
    }
    ,
    e.prototype[hl] = function() {
        return this
    }
    ,
    e.prototype.pipe = function() {
        for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
        return Og(t)(this)
    }
    ,
    e.prototype.toPromise = function(t) {
        var n = this;
        return t = kf(t),
        new t(function(r, o) {
            var s;
            n.subscribe(function(i) {
                return s = i
            }, function(i) {
                return o(i)
            }, function() {
                return r(s)
            })
        }
        )
    }
    ,
    e.create = function(t) {
        return new e(t)
    }
    ,
    e
}();
function kf(e) {
    var t;
    return (t = e ?? Tg.Promise) !== null && t !== void 0 ? t : Promise
}
function WE(e) {
    return e && Xe(e.next) && Xe(e.error) && Xe(e.complete)
}
function GE(e) {
    return e && e instanceof dl || WE(e) && kg(e)
}
function JE(e) {
    return Xe(e == null ? void 0 : e.lift)
}
function pl(e) {
    return function(t) {
        if (JE(t))
            return t.lift(function(n) {
                try {
                    return e(n, this)
                } catch (r) {
                    this.error(r)
                }
            });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}
function gl(e, t, n, r, o) {
    return new ZE(e,t,n,r,o)
}
var ZE = function(e) {
    ul(t, e);
    function t(n, r, o, s, i, a) {
        var c = e.call(this, n) || this;
        return c.onFinalize = i,
        c.shouldUnsubscribe = a,
        c._next = r ? function(l) {
            try {
                r(l)
            } catch (u) {
                n.error(u)
            }
        }
        : e.prototype._next,
        c._error = s ? function(l) {
            try {
                s(l)
            } catch (u) {
                n.error(u)
            } finally {
                this.unsubscribe()
            }
        }
        : e.prototype._error,
        c._complete = o ? function() {
            try {
                o()
            } catch (l) {
                n.error(l)
            } finally {
                this.unsubscribe()
            }
        }
        : e.prototype._complete,
        c
    }
    return t.prototype.unsubscribe = function() {
        var n;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var r = this.closed;
            e.prototype.unsubscribe.call(this),
            !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this))
        }
    }
    ,
    t
}(dl);
function YE(e) {
    return e[e.length - 1]
}
function QE(e) {
    return Xe(YE(e)) ? e.pop() : void 0
}
var XE = function(e) {
    return e && typeof e.length == "number" && typeof e != "function"
};
function e4(e) {
    return Xe(e == null ? void 0 : e.then)
}
function t4(e) {
    return Xe(e[hl])
}
function n4(e) {
    return Symbol.asyncIterator && Xe(e == null ? void 0 : e[Symbol.asyncIterator])
}
function r4(e) {
    return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
}
function o4() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var s4 = o4();
function i4(e) {
    return Xe(e == null ? void 0 : e[s4])
}
function a4(e) {
    return DE(this, arguments, function() {
        var n, r, o, s;
        return Sg(this, function(i) {
            switch (i.label) {
            case 0:
                n = e.getReader(),
                i.label = 1;
            case 1:
                i.trys.push([1, , 9, 10]),
                i.label = 2;
            case 2:
                return [4, Nr(n.read())];
            case 3:
                return r = i.sent(),
                o = r.value,
                s = r.done,
                s ? [4, Nr(void 0)] : [3, 5];
            case 4:
                return [2, i.sent()];
            case 5:
                return [4, Nr(o)];
            case 6:
                return [4, i.sent()];
            case 7:
                return i.sent(),
                [3, 2];
            case 8:
                return [3, 10];
            case 9:
                return n.releaseLock(),
                [7];
            case 10:
                return [2]
            }
        })
    })
}
function c4(e) {
    return Xe(e == null ? void 0 : e.getReader)
}
function l4(e) {
    if (e instanceof Rt)
        return e;
    if (e != null) {
        if (t4(e))
            return u4(e);
        if (XE(e))
            return f4(e);
        if (e4(e))
            return d4(e);
        if (n4(e))
            return Pg(e);
        if (i4(e))
            return h4(e);
        if (c4(e))
            return p4(e)
    }
    throw r4(e)
}
function u4(e) {
    return new Rt(function(t) {
        var n = e[hl]();
        if (Xe(n.subscribe))
            return n.subscribe(t);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    }
    )
}
function f4(e) {
    return new Rt(function(t) {
        for (var n = 0; n < e.length && !t.closed; n++)
            t.next(e[n]);
        t.complete()
    }
    )
}
function d4(e) {
    return new Rt(function(t) {
        e.then(function(n) {
            t.closed || (t.next(n),
            t.complete())
        }, function(n) {
            return t.error(n)
        }).then(null, Ag)
    }
    )
}
function h4(e) {
    return new Rt(function(t) {
        var n, r;
        try {
            for (var o = Io(e), s = o.next(); !s.done; s = o.next()) {
                var i = s.value;
                if (t.next(i),
                t.closed)
                    return
            }
        } catch (a) {
            n = {
                error: a
            }
        } finally {
            try {
                s && !s.done && (r = o.return) && r.call(o)
            } finally {
                if (n)
                    throw n.error
            }
        }
        t.complete()
    }
    )
}
function Pg(e) {
    return new Rt(function(t) {
        g4(e, t).catch(function(n) {
            return t.error(n)
        })
    }
    )
}
function p4(e) {
    return Pg(a4(e))
}
function g4(e, t) {
    var n, r, o, s;
    return NE(this, void 0, void 0, function() {
        var i, a;
        return Sg(this, function(c) {
            switch (c.label) {
            case 0:
                c.trys.push([0, 5, 6, 11]),
                n = FE(e),
                c.label = 1;
            case 1:
                return [4, n.next()];
            case 2:
                if (r = c.sent(),
                !!r.done)
                    return [3, 4];
                if (i = r.value,
                t.next(i),
                t.closed)
                    return [2];
                c.label = 3;
            case 3:
                return [3, 1];
            case 4:
                return [3, 11];
            case 5:
                return a = c.sent(),
                o = {
                    error: a
                },
                [3, 11];
            case 6:
                return c.trys.push([6, , 9, 10]),
                r && !r.done && (s = n.return) ? [4, s.call(n)] : [3, 8];
            case 7:
                c.sent(),
                c.label = 8;
            case 8:
                return [3, 10];
            case 9:
                if (o)
                    throw o.error;
                return [7];
            case 10:
                return [7];
            case 11:
                return t.complete(),
                [2]
            }
        })
    })
}
function $g(e, t) {
    return l4(e)
}
var m4 = Eg(function(e) {
    return function() {
        e(this),
        this.name = "EmptyError",
        this.message = "no elements in sequence"
    }
});
function Ve(e, t) {
    return new Promise(function(n, r) {
        var o = !1, s;
        e.subscribe({
            next: function(i) {
                s = i,
                o = !0
            },
            error: r,
            complete: function() {
                o ? n(s) : r(new m4)
            }
        })
    }
    )
}
function cn(e, t) {
    return pl(function(n, r) {
        var o = 0;
        n.subscribe(gl(r, function(s) {
            r.next(e.call(t, s, o++))
        }))
    })
}
var y4 = Array.isArray;
function b4(e, t) {
    return y4(t) ? e.apply(void 0, gr([], pr(t))) : e(t)
}
function v4(e) {
    return cn(function(t) {
        return b4(e, t)
    })
}
function _4(e, t, n) {
    return n === void 0 && (n = Rg),
    function(r) {
        Tf(t, function() {
            for (var o = e.length, s = new Array(o), i = o, a = o, c = function(u) {
                Tf(t, function() {
                    var f = $g(e[u])
                      , d = !1;
                    f.subscribe(gl(r, function(h) {
                        s[u] = h,
                        d || (d = !0,
                        a--),
                        a || r.next(n(s.slice()))
                    }, function() {
                        --i || r.complete()
                    }))
                }, r)
            }, l = 0; l < o; l++)
                c(l)
        })
    }
}
function Tf(e, t, n) {
    t()
}
var w4 = Array.isArray;
function C4(e) {
    return e.length === 1 && w4(e[0]) ? e[0] : e
}
function as(e, t) {
    return pl(function(n, r) {
        var o = 0;
        n.subscribe(gl(r, function(s) {
            return e.call(t, s, o++) && r.next(s)
        }))
    })
}
function Mg() {
    for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
    var n = QE(e);
    return n ? qE(Mg.apply(void 0, gr([], pr(e))), v4(n)) : pl(function(r, o) {
        _4(gr([r], pr(C4(e))))(o)
    })
}
function S4() {
    for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
    return Mg.apply(void 0, gr([], pr(e)))
}
var Ig = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 8290,
    4: 8291,
    5: 8288,
    6: 65279,
    7: 8289,
    8: 119155,
    9: 119156,
    a: 119157,
    b: 119158,
    c: 119159,
    d: 119160,
    e: 119161,
    f: 119162
}
  , ml = {
    0: 8203,
    1: 8204,
    2: 8205,
    3: 65279
}
  , E4 = new Array(4).fill(String.fromCodePoint(ml[0])).join("");
function k4(e) {
    let t = JSON.stringify(e);
    return `${E4}${Array.from(t).map(n => {
        let r = n.charCodeAt(0);
        if (r > 255)
            throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${t} on character ${n} (${r})`);
        return Array.from(r.toString(4).padStart(4, "0")).map(o => String.fromCodePoint(ml[o])).join("")
    }
    ).join("")}`
}
function T4(e) {
    return !Number.isNaN(Number(e)) || /[a-z]/i.test(e) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e) ? !1 : !!Date.parse(e)
}
function x4(e) {
    try {
        new URL(e,e.startsWith("/") ? "https://acme.com" : void 0)
    } catch {
        return !1
    }
    return !0
}
function LR(e, t, n="auto") {
    return n === !0 || n === "auto" && (T4(e) || x4(e)) ? e : `${e}${k4(t)}`
}
Object.fromEntries(Object.entries(ml).map(e => e.reverse()));
Object.fromEntries(Object.entries(Ig).map(e => e.reverse()));
var A4 = `${Object.values(Ig).map(e => `\\u{${e.toString(16)}}`).join("")}`
  , xf = new RegExp(`[${A4}]{4,}`,"gu");
function R4(e) {
    var t;
    return {
        cleaned: e.replace(xf, ""),
        encoded: ((t = e.match(xf)) == null ? void 0 : t[0]) || ""
    }
}
function O4(e) {
    return e && JSON.parse(R4(JSON.stringify(e)).cleaned)
}
function P4(e) {
    return O4(e)
}
class $4 extends Error {
    constructor(n) {
        const r = Lg(n);
        super(r.message);
        te(this, "response");
        te(this, "statusCode", 400);
        te(this, "responseBody");
        te(this, "details");
        Object.assign(this, r)
    }
}
class M4 extends Error {
    constructor(n) {
        const r = Lg(n);
        super(r.message);
        te(this, "response");
        te(this, "statusCode", 500);
        te(this, "responseBody");
        te(this, "details");
        Object.assign(this, r)
    }
}
function Lg(e) {
    const t = e.body
      , n = {
        response: e,
        statusCode: e.statusCode,
        responseBody: j4(t, e),
        message: "",
        details: void 0
    };
    if (t.error && t.message)
        return n.message = `${t.error} - ${t.message}`,
        n;
    if (I4(t) || L4(t)) {
        const r = t.error.items || []
          , o = r.slice(0, 5).map(i => {
            var a;
            return (a = i.error) == null ? void 0 : a.description
        }
        ).filter(Boolean);
        let s = o.length ? `:
- ${o.join(`
- `)}` : "";
        return r.length > 5 && (s += `
...and ${r.length - 5} more`),
        n.message = `${t.error.description}${s}`,
        n.details = t.error,
        n
    }
    return t.error && t.error.description ? (n.message = t.error.description,
    n.details = t.error,
    n) : (n.message = t.error || t.message || B4(e),
    n)
}
function I4(e) {
    return ai(e) && ai(e.error) && e.error.type === "mutationError" && typeof e.error.description == "string"
}
function L4(e) {
    return ai(e) && ai(e.error) && e.error.type === "actionError" && typeof e.error.description == "string"
}
function ai(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e)
}
function B4(e) {
    const t = e.statusMessage ? ` ${e.statusMessage}` : "";
    return `${e.method}-request to ${e.url} resulted in HTTP ${e.statusCode}${t}`
}
function j4(e, t) {
    return (t.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(e, null, 2) : e
}
const N4 = {
    onResponse: e => {
        if (e.statusCode >= 500)
            throw new M4(e);
        if (e.statusCode >= 400)
            throw new $4(e);
        return e
    }
}
  , D4 = {
    onResponse: e => {
        const t = e.headers["x-sanity-warning"];
        return (Array.isArray(t) ? t : [t]).filter(Boolean).forEach(n => console.warn(n)),
        e
    }
};
function F4(e) {
    return kE([ll({
        shouldRetry: H4
    }), ...e, D4, $E(), ME(), BE(), N4, LE({
        implementation: Rt
    })])
}
function H4(e, t, n) {
    if (n.maxRetries === 0)
        return !1;
    const r = n.method === "GET" || n.method === "HEAD"
      , o = (n.uri || n.url).startsWith("/data/query")
      , s = e.response && (e.response.statusCode === 429 || e.response.statusCode === 502 || e.response.statusCode === 503);
    return (r || o) && s ? !0 : ll.shouldRetry(e, t, n)
}
function Bg(e) {
    if (typeof e == "string")
        return {
            id: e
        };
    if (Array.isArray(e))
        return {
            query: "*[_id in $ids]",
            params: {
                ids: e
            }
        };
    if (typeof e == "object" && e !== null && "query"in e && typeof e.query == "string")
        return "params"in e && typeof e.params == "object" && e.params !== null ? {
            query: e.query,
            params: e.params
        } : {
            query: e.query
        };
    const t = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join(`
`);
    throw new Error(`Unknown selection - must be one of:

${t}`)
}
const Af = ["image", "file"]
  , Rf = ["before", "after", "replace"]
  , jg = e => {
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e))
        throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")
}
  , U4 = e => {
    if (!/^[-a-z0-9]+$/i.test(e))
        throw new Error("`projectId` can only contain only a-z, 0-9 and dashes")
}
  , V4 = e => {
    if (Af.indexOf(e) === -1)
        throw new Error(`Invalid asset type: ${e}. Must be one of ${Af.join(", ")}`)
}
  , Eo = (e, t) => {
    if (t === null || typeof t != "object" || Array.isArray(t))
        throw new Error(`${e}() takes an object of properties`)
}
  , Ng = (e, t) => {
    if (typeof t != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) || t.includes(".."))
        throw new Error(`${e}(): "${t}" is not a valid document ID`)
}
  , ci = (e, t) => {
    if (!t._id)
        throw new Error(`${e}() requires that the document contains an ID ("_id" property)`);
    Ng(e, t._id)
}
  , z4 = (e, t, n) => {
    const r = "insert(at, selector, items)";
    if (Rf.indexOf(e) === -1) {
        const o = Rf.map(s => `"${s}"`).join(", ");
        throw new Error(`${r} takes an "at"-argument which is one of: ${o}`)
    }
    if (typeof t != "string")
        throw new Error(`${r} takes a "selector"-argument which must be a string`);
    if (!Array.isArray(n))
        throw new Error(`${r} takes an "items"-argument which must be an array`)
}
  , Dg = e => {
    if (!e.dataset)
        throw new Error("`dataset` must be provided to perform queries");
    return e.dataset || ""
}
  , Fg = e => {
    if (typeof e != "string" || !/^[a-z0-9._-]{1,75}$/i.test(e))
        throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
    return e
}
;
class Hg {
    constructor(t, n={}) {
        te(this, "selection");
        te(this, "operations");
        this.selection = t,
        this.operations = n
    }
    set(t) {
        return this._assign("set", t)
    }
    setIfMissing(t) {
        return this._assign("setIfMissing", t)
    }
    diffMatchPatch(t) {
        return Eo("diffMatchPatch", t),
        this._assign("diffMatchPatch", t)
    }
    unset(t) {
        if (!Array.isArray(t))
            throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        return this.operations = Object.assign({}, this.operations, {
            unset: t
        }),
        this
    }
    inc(t) {
        return this._assign("inc", t)
    }
    dec(t) {
        return this._assign("dec", t)
    }
    insert(t, n, r) {
        return z4(t, n, r),
        this._assign("insert", {
            [t]: n,
            items: r
        })
    }
    append(t, n) {
        return this.insert("after", `${t}[-1]`, n)
    }
    prepend(t, n) {
        return this.insert("before", `${t}[0]`, n)
    }
    splice(t, n, r, o) {
        const s = typeof r > "u" || r === -1
          , i = n < 0 ? n - 1 : n
          , a = s ? -1 : Math.max(0, n + r)
          , c = i < 0 && a >= 0 ? "" : a
          , l = `${t}[${i}:${c}]`;
        return this.insert("replace", l, o || [])
    }
    ifRevisionId(t) {
        return this.operations.ifRevisionID = t,
        this
    }
    serialize() {
        return {
            ...Bg(this.selection),
            ...this.operations
        }
    }
    toJSON() {
        return this.serialize()
    }
    reset() {
        return this.operations = {},
        this
    }
    _assign(t, n, r=!0) {
        return Eo(t, n),
        this.operations = Object.assign({}, this.operations, {
            [t]: Object.assign({}, r && this.operations[t] || {}, n)
        }),
        this
    }
    _set(t, n) {
        return this._assign(t, n, !1)
    }
}
var Yn;
const El = class El extends Hg {
    constructor(n, r, o) {
        super(n, r);
        le(this, Yn);
        re(this, Yn, o)
    }
    clone() {
        return new El(this.selection,{
            ...this.operations
        },R(this, Yn))
    }
    commit(n) {
        if (!R(this, Yn))
            throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        const r = typeof this.selection == "string"
          , o = Object.assign({
            returnFirst: r,
            returnDocuments: !0
        }, n);
        return R(this, Yn).mutate({
            patch: this.serialize()
        }, o)
    }
}
;
Yn = new WeakMap;
let ar = El;
var Qn;
const kl = class kl extends Hg {
    constructor(n, r, o) {
        super(n, r);
        le(this, Qn);
        re(this, Qn, o)
    }
    clone() {
        return new kl(this.selection,{
            ...this.operations
        },R(this, Qn))
    }
    commit(n) {
        if (!R(this, Qn))
            throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        const r = typeof this.selection == "string"
          , o = Object.assign({
            returnFirst: r,
            returnDocuments: !0
        }, n);
        return R(this, Qn).mutate({
            patch: this.serialize()
        }, o)
    }
}
;
Qn = new WeakMap;
let cr = kl;
const Ug = {
    returnDocuments: !1
};
class Vg {
    constructor(t=[], n) {
        te(this, "operations");
        te(this, "trxId");
        this.operations = t,
        this.trxId = n
    }
    create(t) {
        return Eo("create", t),
        this._add({
            create: t
        })
    }
    createIfNotExists(t) {
        const n = "createIfNotExists";
        return Eo(n, t),
        ci(n, t),
        this._add({
            [n]: t
        })
    }
    createOrReplace(t) {
        const n = "createOrReplace";
        return Eo(n, t),
        ci(n, t),
        this._add({
            [n]: t
        })
    }
    delete(t) {
        return Ng("delete", t),
        this._add({
            delete: {
                id: t
            }
        })
    }
    transactionId(t) {
        return t ? (this.trxId = t,
        this) : this.trxId
    }
    serialize() {
        return [...this.operations]
    }
    toJSON() {
        return this.serialize()
    }
    reset() {
        return this.operations = [],
        this
    }
    _add(t) {
        return this.operations.push(t),
        this
    }
}
var En;
const Tl = class Tl extends Vg {
    constructor(n, r, o) {
        super(n, o);
        le(this, En);
        re(this, En, r)
    }
    clone() {
        return new Tl([...this.operations],R(this, En),this.trxId)
    }
    commit(n) {
        if (!R(this, En))
            throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        return R(this, En).mutate(this.serialize(), Object.assign({
            transactionId: this.trxId
        }, Ug, n || {}))
    }
    patch(n, r) {
        const o = typeof r == "function";
        if (typeof n != "string" && n instanceof cr)
            return this._add({
                patch: n.serialize()
            });
        if (o) {
            const s = r(new cr(n,{},R(this, En)));
            if (!(s instanceof cr))
                throw new Error("function passed to `patch()` must return the patch");
            return this._add({
                patch: s.serialize()
            })
        }
        return this._add({
            patch: {
                id: n,
                ...r
            }
        })
    }
}
;
En = new WeakMap;
let li = Tl;
var kn;
const xl = class xl extends Vg {
    constructor(n, r, o) {
        super(n, o);
        le(this, kn);
        re(this, kn, r)
    }
    clone() {
        return new xl([...this.operations],R(this, kn),this.trxId)
    }
    commit(n) {
        if (!R(this, kn))
            throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        return R(this, kn).mutate(this.serialize(), Object.assign({
            transactionId: this.trxId
        }, Ug, n || {}))
    }
    patch(n, r) {
        const o = typeof r == "function";
        if (typeof n != "string" && n instanceof ar)
            return this._add({
                patch: n.serialize()
            });
        if (o) {
            const s = r(new ar(n,{},R(this, kn)));
            if (!(s instanceof ar))
                throw new Error("function passed to `patch()` must return the patch");
            return this._add({
                patch: s.serialize()
            })
        }
        return this._add({
            patch: {
                id: n,
                ...r
            }
        })
    }
}
;
kn = new WeakMap;
let ui = xl;
const K4 = "https://www.sanity.io/help/";
function yl(e) {
    return K4 + e
}
function q4(e) {
    let t = !1, n;
    return (...r) => (t || (n = e(...r),
    t = !0),
    n)
}
const cs = e => q4( (...t) => console.warn(e.join(" "), ...t))
  , W4 = cs(["Because you set `withCredentials` to true, we will override your `useCdn`", "setting to be false since (cookie-based) credentials are never set on the CDN"])
  , G4 = cs(["Since you haven't set a value for `useCdn`, we will deliver content using our", "global, edge-cached API-CDN. If you wish to have content delivered faster, set", "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."])
  , J4 = cs(["The Sanity client is configured with the `perspective` set to `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."])
  , Z4 = cs(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${yl("js-client-browser-token")} for more information and how to hide this warning.`])
  , Y4 = cs(["Using the Sanity client without specifying an API version is deprecated.", `See ${yl("js-client-api-version")}`])
  , Q4 = "apicdn.sanity.io"
  , ko = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: !0,
    stega: {
        enabled: !1
    }
}
  , X4 = ["localhost", "127.0.0.1", "0.0.0.0"]
  , ek = e => X4.indexOf(e) !== -1;
function tk(e) {
    if (e === "1" || e === "X")
        return;
    const t = new Date(e);
    if (!(/^\d{4}-\d{2}-\d{2}$/.test(e) && t instanceof Date && t.getTime() > 0))
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")
}
const zg = function(e) {
    switch (e) {
    case "previewDrafts":
    case "published":
    case "raw":
        return;
    default:
        throw new TypeError("Invalid API perspective string, expected `published`, `previewDrafts` or `raw`")
    }
}
  , Kg = (e, t) => {
    const n = {
        ...t,
        ...e,
        stega: {
            ...typeof t.stega == "boolean" ? {
                enabled: t.stega
            } : t.stega || ko.stega,
            ...typeof e.stega == "boolean" ? {
                enabled: e.stega
            } : e.stega || {}
        }
    };
    n.apiVersion || Y4();
    const r = {
        ...ko,
        ...n
    }
      , o = r.useProjectHostname;
    if (typeof Promise > "u") {
        const f = yl("js-client-promise-polyfill");
        throw new Error(`No native Promise-implementation found, polyfill needed - see ${f}`)
    }
    if (o && !r.projectId)
        throw new Error("Configuration must contain `projectId`");
    if (typeof r.perspective == "string" && zg(r.perspective),
    "encodeSourceMap"in r)
        throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
    if ("encodeSourceMapAtPath"in r)
        throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
    if (typeof r.stega.enabled != "boolean")
        throw new Error(`stega.enabled must be a boolean, received ${r.stega.enabled}`);
    if (r.stega.enabled && r.stega.studioUrl === void 0)
        throw new Error("stega.studioUrl must be defined when stega.enabled is true");
    if (r.stega.enabled && typeof r.stega.studioUrl != "string" && typeof r.stega.studioUrl != "function")
        throw new Error(`stega.studioUrl must be a string or a function, received ${r.stega.studioUrl}`);
    const s = typeof window < "u" && window.location && window.location.hostname
      , i = s && ek(window.location.hostname);
    s && i && r.token && r.ignoreBrowserTokenWarning !== !0 ? Z4() : typeof r.useCdn > "u" && G4(),
    o && U4(r.projectId),
    r.dataset && jg(r.dataset),
    "requestTagPrefix"in r && (r.requestTagPrefix = r.requestTagPrefix ? Fg(r.requestTagPrefix).replace(/\.+$/, "") : void 0),
    r.apiVersion = `${r.apiVersion}`.replace(/^v/, ""),
    r.isDefaultApi = r.apiHost === ko.apiHost,
    r.useCdn === !0 && r.withCredentials && W4(),
    r.useCdn = r.useCdn !== !1 && !r.withCredentials,
    tk(r.apiVersion);
    const a = r.apiHost.split("://", 2)
      , c = a[0]
      , l = a[1]
      , u = r.isDefaultApi ? Q4 : l;
    return r.useProjectHostname ? (r.url = `${c}://${r.projectId}.${l}/v${r.apiVersion}`,
    r.cdnUrl = `${c}://${r.projectId}.${u}/v${r.apiVersion}`) : (r.url = `${r.apiHost}/v${r.apiVersion}`,
    r.cdnUrl = r.url),
    r
}
  , nk = "X-Sanity-Project-ID";
function rk(e, t={}) {
    const n = {}
      , r = t.token || e.token;
    r && (n.Authorization = `Bearer ${r}`),
    !t.useGlobalApi && !e.useProjectHostname && e.projectId && (n[nk] = e.projectId);
    const o = !!(typeof t.withCredentials > "u" ? e.token || e.withCredentials : t.withCredentials)
      , s = typeof t.timeout > "u" ? e.timeout : t.timeout;
    return Object.assign({}, t, {
        headers: Object.assign({}, n, t.headers || {}),
        timeout: typeof s > "u" ? 5 * 60 * 1e3 : s,
        proxy: t.proxy || e.proxy,
        json: !0,
        withCredentials: o,
        fetch: typeof t.fetch == "object" && typeof e.fetch == "object" ? {
            ...e.fetch,
            ...t.fetch
        } : t.fetch || e.fetch
    })
}
const qg = ({query: e, params: t={}, options: n={}}) => {
    const r = new URLSearchParams
      , {tag: o, includeMutations: s, returnQuery: i, ...a} = n;
    o && r.append("tag", o),
    r.append("query", e);
    for (const [c,l] of Object.entries(t))
        r.append(`$${c}`, JSON.stringify(l));
    for (const [c,l] of Object.entries(a))
        l && r.append(c, `${l}`);
    return i === !1 && r.append("returnQuery", "false"),
    s === !1 && r.append("includeMutations", "false"),
    `?${r}`
}
  , ok = (e, t) => e === !1 ? void 0 : typeof e > "u" ? t : e
  , sk = (e={}) => ({
    dryRun: e.dryRun,
    returnIds: !0,
    returnDocuments: ok(e.returnDocuments, !0),
    visibility: e.visibility || "sync",
    autoGenerateArrayKeys: e.autoGenerateArrayKeys,
    skipCrossDatasetReferenceValidation: e.skipCrossDatasetReferenceValidation
})
  , bl = e => e.type === "response"
  , ik = e => e.body
  , ak = (e, t) => e.reduce( (n, r) => (n[t(r)] = r,
n), Object.create(null))
  , ck = 11264;
function Wg(e, t, n, r, o={}, s={}) {
    const i = "stega"in s ? {
        ...n || {},
        ...typeof s.stega == "boolean" ? {
            enabled: s.stega
        } : s.stega || {}
    } : n
      , a = i.enabled ? P4(o) : o
      , c = s.filterResponse === !1 ? m => m : m => m.result
      , {cache: l, next: u, ...f} = {
        useAbortSignal: typeof s.signal < "u",
        resultSourceMap: i.enabled ? "withKeyArraySelector" : s.resultSourceMap,
        ...s,
        returnQuery: s.filterResponse === !1 && s.returnQuery !== !1
    }
      , d = typeof l < "u" || typeof u < "u" ? {
        ...f,
        fetch: {
            cache: l,
            next: u
        }
    } : f
      , h = to(e, t, "query", {
        query: r,
        params: a
    }, d);
    return i.enabled ? h.pipe(S4($g(ye( () => import("./a2xVnk0y.js"), [], import.meta.url).then(function(m) {
        return m.stegaEncodeSourceMap$1
    }).then( ({stegaEncodeSourceMap: m}) => m))), cn( ([m,p]) => {
        const S = p(m.result, m.resultSourceMap, i);
        return c({
            ...m,
            result: S
        })
    }
    )) : h.pipe(cn(c))
}
function Gg(e, t, n, r={}) {
    const o = {
        uri: _r(e, "doc", n),
        json: !0,
        tag: r.tag,
        signal: r.signal
    };
    return ls(e, t, o).pipe(as(bl), cn(s => s.body.documents && s.body.documents[0]))
}
function Jg(e, t, n, r={}) {
    const o = {
        uri: _r(e, "doc", n.join(",")),
        json: !0,
        tag: r.tag,
        signal: r.signal
    };
    return ls(e, t, o).pipe(as(bl), cn(s => {
        const i = ak(s.body.documents || [], a => a._id);
        return n.map(a => i[a] || null)
    }
    ))
}
function Zg(e, t, n, r) {
    return ci("createIfNotExists", n),
    Di(e, t, n, "createIfNotExists", r)
}
function Yg(e, t, n, r) {
    return ci("createOrReplace", n),
    Di(e, t, n, "createOrReplace", r)
}
function Qg(e, t, n, r) {
    return to(e, t, "mutate", {
        mutations: [{
            delete: Bg(n)
        }]
    }, r)
}
function Xg(e, t, n, r) {
    let o;
    n instanceof cr || n instanceof ar ? o = {
        patch: n.serialize()
    } : n instanceof li || n instanceof ui ? o = n.serialize() : o = n;
    const s = Array.isArray(o) ? o : [o]
      , i = r && r.transactionId || void 0;
    return to(e, t, "mutate", {
        mutations: s,
        transactionId: i
    }, r)
}
function em(e, t, n, r) {
    const o = Array.isArray(n) ? n : [n]
      , s = r && r.transactionId || void 0
      , i = r && r.skipCrossDatasetReferenceValidation || void 0
      , a = r && r.dryRun || void 0;
    return to(e, t, "actions", {
        actions: o,
        transactionId: s,
        skipCrossDatasetReferenceValidation: i,
        dryRun: a
    }, r)
}
function to(e, t, n, r, o={}) {
    const s = n === "mutate"
      , i = n === "actions"
      , a = n === "query"
      , c = s || i ? "" : qg(r)
      , l = !s && !i && c.length < ck
      , u = l ? c : ""
      , f = o.returnFirst
      , {timeout: d, token: h, tag: m, headers: p, returnQuery: S, lastLiveEventId: k} = o
      , y = _r(e, n, u)
      , g = {
        method: l ? "GET" : "POST",
        uri: y,
        json: !0,
        body: l ? void 0 : r,
        query: s && sk(o),
        timeout: d,
        headers: p,
        token: h,
        tag: m,
        returnQuery: S,
        perspective: o.perspective,
        resultSourceMap: o.resultSourceMap,
        lastLiveEventId: Array.isArray(k) ? k[0] : k,
        canUseCdn: a,
        signal: o.signal,
        fetch: o.fetch,
        useAbortSignal: o.useAbortSignal,
        useCdn: o.useCdn
    };
    return ls(e, t, g).pipe(as(bl), cn(ik), cn(w => {
        if (!s)
            return w;
        const T = w.results || [];
        if (o.returnDocuments)
            return f ? T[0] && T[0].document : T.map(N => N.document);
        const A = f ? "documentId" : "documentIds"
          , $ = f ? T[0] && T[0].id : T.map(N => N.id);
        return {
            transactionId: w.transactionId,
            results: T,
            [A]: $
        }
    }
    ))
}
function Di(e, t, n, r, o={}) {
    const s = {
        [r]: n
    }
      , i = Object.assign({
        returnFirst: !0,
        returnDocuments: !0
    }, o);
    return to(e, t, "mutate", {
        mutations: [s]
    }, i)
}
function ls(e, t, n) {
    const r = n.url || n.uri
      , o = e.config()
      , s = typeof n.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(n.method || "GET") >= 0 && r.indexOf("/data/") === 0 : n.canUseCdn;
    let i = (n.useCdn ?? o.useCdn) && s;
    const a = n.tag && o.requestTagPrefix ? [o.requestTagPrefix, n.tag].join(".") : n.tag || o.requestTagPrefix;
    if (a && n.tag !== null && (n.query = {
        tag: Fg(a),
        ...n.query
    }),
    ["GET", "HEAD", "POST"].indexOf(n.method || "GET") >= 0 && r.indexOf("/data/query/") === 0) {
        const u = n.resultSourceMap ?? o.resultSourceMap;
        u !== void 0 && u !== !1 && (n.query = {
            resultSourceMap: u,
            ...n.query
        });
        const f = n.perspective || o.perspective;
        typeof f == "string" && f !== "raw" && (zg(f),
        n.query = {
            perspective: f,
            ...n.query
        },
        f === "previewDrafts" && i && (i = !1,
        J4())),
        n.lastLiveEventId && (n.query = {
            ...n.query,
            lastLiveEventId: n.lastLiveEventId
        }),
        n.returnQuery === !1 && (n.query = {
            returnQuery: "false",
            ...n.query
        })
    }
    const c = rk(o, Object.assign({}, n, {
        url: vl(e, r, i)
    }))
      , l = new Rt(u => t(c, o.requester).subscribe(u));
    return n.signal ? l.pipe(lk(n.signal)) : l
}
function Nt(e, t, n) {
    return ls(e, t, n).pipe(as(r => r.type === "response"), cn(r => r.body))
}
function _r(e, t, n) {
    const r = e.config()
      , o = Dg(r)
      , s = `/${t}/${o}`;
    return `/data${n ? `${s}/${n}` : s}`.replace(/\/($|\?)/, "$1")
}
function vl(e, t, n=!1) {
    const {url: r, cdnUrl: o} = e.config();
    return `${n ? o : r}/${t.replace(/^\//, "")}`
}
function lk(e) {
    return t => new Rt(n => {
        const r = () => n.error(fk(e));
        if (e && e.aborted) {
            r();
            return
        }
        const o = t.subscribe(n);
        return e.addEventListener("abort", r),
        () => {
            e.removeEventListener("abort", r),
            o.unsubscribe()
        }
    }
    )
}
const uk = !!globalThis.DOMException;
function fk(e) {
    if (uk)
        return new DOMException((e == null ? void 0 : e.reason) ?? "The operation was aborted.","AbortError");
    const t = new Error((e == null ? void 0 : e.reason) ?? "The operation was aborted.");
    return t.name = "AbortError",
    t
}
var Uo, Vo;
class dk {
    constructor(t, n) {
        le(this, Uo);
        le(this, Vo);
        re(this, Uo, t),
        re(this, Vo, n)
    }
    upload(t, n, r) {
        return tm(R(this, Uo), R(this, Vo), t, n, r)
    }
}
Uo = new WeakMap,
Vo = new WeakMap;
var zo, Ko;
class hk {
    constructor(t, n) {
        le(this, zo);
        le(this, Ko);
        re(this, zo, t),
        re(this, Ko, n)
    }
    upload(t, n, r) {
        const o = tm(R(this, zo), R(this, Ko), t, n, r);
        return Ve(o.pipe(as(s => s.type === "response"), cn(s => s.body.document)))
    }
}
zo = new WeakMap,
Ko = new WeakMap;
function tm(e, t, n, r, o={}) {
    V4(n);
    let s = o.extract || void 0;
    s && !s.length && (s = ["none"]);
    const i = Dg(e.config())
      , a = n === "image" ? "images" : "files"
      , c = pk(o, r)
      , {tag: l, label: u, title: f, description: d, creditLine: h, filename: m, source: p} = c
      , S = {
        label: u,
        title: f,
        description: d,
        filename: m,
        meta: s,
        creditLine: h
    };
    return p && (S.sourceId = p.id,
    S.sourceName = p.name,
    S.sourceUrl = p.url),
    ls(e, t, {
        tag: l,
        method: "POST",
        timeout: c.timeout || 0,
        uri: `/assets/${a}/${i}`,
        headers: c.contentType ? {
            "Content-Type": c.contentType
        } : {},
        query: S,
        body: r
    })
}
function pk(e, t) {
    return typeof File > "u" || !(t instanceof File) ? e : Object.assign({
        filename: e.preserveFilename === !1 ? void 0 : t.name,
        contentType: t.type
    }, e)
}
var gk = (e, t) => Object.keys(t).concat(Object.keys(e)).reduce( (n, r) => (n[r] = typeof e[r] > "u" ? t[r] : e[r],
n), {});
const mk = (e, t) => t.reduce( (n, r) => (typeof e[r] > "u" || (n[r] = e[r]),
n), {})
  , yk = 14800
  , bk = ["includePreviousRevision", "includeResult", "includeMutations", "visibility", "effectFormat", "tag"]
  , vk = {
    includeResult: !0
};
function nm(e, t, n={}) {
    const {url: r, token: o, withCredentials: s, requestTagPrefix: i} = this.config()
      , a = n.tag && i ? [i, n.tag].join(".") : n.tag
      , c = {
        ...gk(n, vk),
        tag: a
    }
      , l = mk(c, bk)
      , u = qg({
        query: e,
        params: t,
        options: {
            tag: a,
            ...l
        }
    })
      , f = `${r}${_r(this, "listen", u)}`;
    if (f.length > yk)
        return new Rt(p => p.error(new Error("Query too large for listener")));
    const d = c.events ? c.events : ["mutation"]
      , h = d.indexOf("reconnect") !== -1
      , m = {};
    return (o || s) && (m.withCredentials = !0),
    o && (m.headers = {
        Authorization: `Bearer ${o}`
    }),
    new Rt(p => {
        let S, k, y = !1, g = !1;
        v();
        function w() {
            y || (I(),
            !y && S.readyState === S.CLOSED && (N(),
            clearTimeout(k),
            k = setTimeout(v, 100)))
        }
        function T(x) {
            p.error(_k(x))
        }
        function A(x) {
            const O = rm(x);
            return O instanceof Error ? p.error(O) : p.next(O)
        }
        function $() {
            y = !0,
            N(),
            p.complete()
        }
        function N() {
            S && (S.removeEventListener("error", w),
            S.removeEventListener("channelError", T),
            S.removeEventListener("disconnect", $),
            d.forEach(x => S.removeEventListener(x, A)),
            S.close())
        }
        function I() {
            h && p.next({
                type: "reconnect"
            })
        }
        async function C() {
            const {default: x} = await ye(async () => {
                const {default: L} = await import("./CCu6toOJ.js").then(P => P.b);
                return {
                    default: L
                }
            }
            , [], import.meta.url);
            if (g)
                return;
            const O = new x(f,m);
            return O.addEventListener("error", w),
            O.addEventListener("channelError", T),
            O.addEventListener("disconnect", $),
            d.forEach(L => O.addEventListener(L, A)),
            O
        }
        function v() {
            C().then(x => {
                x && (S = x,
                g && N())
            }
            ).catch(x => {
                p.error(x),
                _()
            }
            )
        }
        function _() {
            y = !0,
            N(),
            g = !0
        }
        return _
    }
    )
}
function rm(e) {
    try {
        const t = e.data && JSON.parse(e.data) || {};
        return Object.assign({
            type: e.type
        }, t)
    } catch (t) {
        return t
    }
}
function _k(e) {
    if (e instanceof Error)
        return e;
    const t = rm(e);
    return t instanceof Error ? t : new Error(wk(t))
}
function wk(e) {
    return e.error ? e.error.description ? e.error.description : typeof e.error == "string" ? e.error : JSON.stringify(e.error, null, 2) : e.message || "Unknown listener error"
}
const Of = "2021-03-26";
var Xn;
class om {
    constructor(t) {
        le(this, Xn);
        re(this, Xn, t)
    }
    events() {
        const t = R(this, Xn).config().apiVersion.replace(/^v/, "");
        if (t !== "X" && t < Of)
            throw new Error(`The live events API requires API version ${Of} or later. The current API version is ${t}. Please update your API version to use this feature.`);
        const n = _r(R(this, Xn), "live/events")
          , r = new URL(R(this, Xn).getUrl(n, !1))
          , o = ["restart", "message"];
        return new Rt(s => {
            let i, a, c = !1, l = !1;
            m();
            function u(S) {
                if (!c) {
                    if ("data"in S) {
                        const k = Pf(S);
                        s.error(new Error(k.message,{
                            cause: k
                        }))
                    }
                    i.readyState === i.CLOSED && (d(),
                    clearTimeout(a),
                    a = setTimeout(m, 100))
                }
            }
            function f(S) {
                const k = Pf(S);
                return k instanceof Error ? s.error(k) : s.next(k)
            }
            function d() {
                if (i) {
                    i.removeEventListener("error", u);
                    for (const S of o)
                        i.removeEventListener(S, f);
                    i.close()
                }
            }
            async function h() {
                const S = typeof EventSource > "u" ? (await ye(async () => {
                    const {default: y} = await import("./CCu6toOJ.js").then(g => g.b);
                    return {
                        default: y
                    }
                }
                , [], import.meta.url)).default : EventSource;
                if (l)
                    return;
                const k = new S(r.toString());
                k.addEventListener("error", u);
                for (const y of o)
                    k.addEventListener(y, f);
                return k
            }
            function m() {
                h().then(S => {
                    S && (i = S,
                    l && d())
                }
                ).catch(S => {
                    s.error(S),
                    p()
                }
                )
            }
            function p() {
                c = !0,
                d(),
                l = !0
            }
            return p
        }
        )
    }
}
Xn = new WeakMap;
function Pf(e) {
    try {
        const t = e.data && JSON.parse(e.data) || {};
        return {
            type: e.type,
            id: e.lastEventId,
            ...t
        }
    } catch (t) {
        return t
    }
}
var Tn, xn;
class Ck {
    constructor(t, n) {
        le(this, Tn);
        le(this, xn);
        re(this, Tn, t),
        re(this, xn, n)
    }
    create(t, n) {
        return Dr(R(this, Tn), R(this, xn), "PUT", t, n)
    }
    edit(t, n) {
        return Dr(R(this, Tn), R(this, xn), "PATCH", t, n)
    }
    delete(t) {
        return Dr(R(this, Tn), R(this, xn), "DELETE", t)
    }
    list() {
        return Nt(R(this, Tn), R(this, xn), {
            uri: "/datasets",
            tag: null
        })
    }
}
Tn = new WeakMap,
xn = new WeakMap;
var An, Rn;
class Sk {
    constructor(t, n) {
        le(this, An);
        le(this, Rn);
        re(this, An, t),
        re(this, Rn, n)
    }
    create(t, n) {
        return Ve(Dr(R(this, An), R(this, Rn), "PUT", t, n))
    }
    edit(t, n) {
        return Ve(Dr(R(this, An), R(this, Rn), "PATCH", t, n))
    }
    delete(t) {
        return Ve(Dr(R(this, An), R(this, Rn), "DELETE", t))
    }
    list() {
        return Ve(Nt(R(this, An), R(this, Rn), {
            uri: "/datasets",
            tag: null
        }))
    }
}
An = new WeakMap,
Rn = new WeakMap;
function Dr(e, t, n, r, o) {
    return jg(r),
    Nt(e, t, {
        method: n,
        uri: `/datasets/${r}`,
        body: o,
        tag: null
    })
}
var Ur, Vr;
class Ek {
    constructor(t, n) {
        le(this, Ur);
        le(this, Vr);
        re(this, Ur, t),
        re(this, Vr, n)
    }
    list(t) {
        const n = (t == null ? void 0 : t.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
        return Nt(R(this, Ur), R(this, Vr), {
            uri: n
        })
    }
    getById(t) {
        return Nt(R(this, Ur), R(this, Vr), {
            uri: `/projects/${t}`
        })
    }
}
Ur = new WeakMap,
Vr = new WeakMap;
var zr, Kr;
class kk {
    constructor(t, n) {
        le(this, zr);
        le(this, Kr);
        re(this, zr, t),
        re(this, Kr, n)
    }
    list(t) {
        const n = (t == null ? void 0 : t.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
        return Ve(Nt(R(this, zr), R(this, Kr), {
            uri: n
        }))
    }
    getById(t) {
        return Ve(Nt(R(this, zr), R(this, Kr), {
            uri: `/projects/${t}`
        }))
    }
}
zr = new WeakMap,
Kr = new WeakMap;
var qo, Wo;
class Tk {
    constructor(t, n) {
        le(this, qo);
        le(this, Wo);
        re(this, qo, t),
        re(this, Wo, n)
    }
    getById(t) {
        return Nt(R(this, qo), R(this, Wo), {
            uri: `/users/${t}`
        })
    }
}
qo = new WeakMap,
Wo = new WeakMap;
var Go, Jo;
class xk {
    constructor(t, n) {
        le(this, Go);
        le(this, Jo);
        re(this, Go, t),
        re(this, Jo, n)
    }
    getById(t) {
        return Ve(Nt(R(this, Go), R(this, Jo), {
            uri: `/users/${t}`
        }))
    }
}
Go = new WeakMap,
Jo = new WeakMap;
var Xt, Fe;
const fi = class fi {
    constructor(t, n=ko) {
        te(this, "assets");
        te(this, "datasets");
        te(this, "live");
        te(this, "projects");
        te(this, "users");
        le(this, Xt);
        le(this, Fe);
        te(this, "listen", nm);
        this.config(n),
        re(this, Fe, t),
        this.assets = new dk(this,R(this, Fe)),
        this.datasets = new Ck(this,R(this, Fe)),
        this.live = new om(this),
        this.projects = new Ek(this,R(this, Fe)),
        this.users = new Tk(this,R(this, Fe))
    }
    clone() {
        return new fi(R(this, Fe),this.config())
    }
    config(t) {
        if (t === void 0)
            return {
                ...R(this, Xt)
            };
        if (R(this, Xt) && R(this, Xt).allowReconfigure === !1)
            throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        return re(this, Xt, Kg(t, R(this, Xt) || {})),
        this
    }
    withConfig(t) {
        const n = this.config();
        return new fi(R(this, Fe),{
            ...n,
            ...t,
            stega: {
                ...n.stega || {},
                ...typeof (t == null ? void 0 : t.stega) == "boolean" ? {
                    enabled: t.stega
                } : (t == null ? void 0 : t.stega) || {}
            }
        })
    }
    fetch(t, n, r) {
        return Wg(this, R(this, Fe), R(this, Xt).stega, t, n, r)
    }
    getDocument(t, n) {
        return Gg(this, R(this, Fe), t, n)
    }
    getDocuments(t, n) {
        return Jg(this, R(this, Fe), t, n)
    }
    create(t, n) {
        return Di(this, R(this, Fe), t, "create", n)
    }
    createIfNotExists(t, n) {
        return Zg(this, R(this, Fe), t, n)
    }
    createOrReplace(t, n) {
        return Yg(this, R(this, Fe), t, n)
    }
    delete(t, n) {
        return Qg(this, R(this, Fe), t, n)
    }
    mutate(t, n) {
        return Xg(this, R(this, Fe), t, n)
    }
    patch(t, n) {
        return new ar(t,n,this)
    }
    transaction(t) {
        return new ui(t,this)
    }
    action(t, n) {
        return em(this, R(this, Fe), t, n)
    }
    request(t) {
        return Nt(this, R(this, Fe), t)
    }
    getUrl(t, n) {
        return vl(this, t, n)
    }
    getDataUrl(t, n) {
        return _r(this, t, n)
    }
}
;
Xt = new WeakMap,
Fe = new WeakMap;
let cc = fi;
var en, je;
const di = class di {
    constructor(t, n=ko) {
        te(this, "assets");
        te(this, "datasets");
        te(this, "live");
        te(this, "projects");
        te(this, "users");
        te(this, "observable");
        le(this, en);
        le(this, je);
        te(this, "listen", nm);
        this.config(n),
        re(this, je, t),
        this.assets = new hk(this,R(this, je)),
        this.datasets = new Sk(this,R(this, je)),
        this.live = new om(this),
        this.projects = new kk(this,R(this, je)),
        this.users = new xk(this,R(this, je)),
        this.observable = new cc(t,n)
    }
    clone() {
        return new di(R(this, je),this.config())
    }
    config(t) {
        if (t === void 0)
            return {
                ...R(this, en)
            };
        if (R(this, en) && R(this, en).allowReconfigure === !1)
            throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        return this.observable && this.observable.config(t),
        re(this, en, Kg(t, R(this, en) || {})),
        this
    }
    withConfig(t) {
        const n = this.config();
        return new di(R(this, je),{
            ...n,
            ...t,
            stega: {
                ...n.stega || {},
                ...typeof (t == null ? void 0 : t.stega) == "boolean" ? {
                    enabled: t.stega
                } : (t == null ? void 0 : t.stega) || {}
            }
        })
    }
    fetch(t, n, r) {
        return Ve(Wg(this, R(this, je), R(this, en).stega, t, n, r))
    }
    getDocument(t, n) {
        return Ve(Gg(this, R(this, je), t, n))
    }
    getDocuments(t, n) {
        return Ve(Jg(this, R(this, je), t, n))
    }
    create(t, n) {
        return Ve(Di(this, R(this, je), t, "create", n))
    }
    createIfNotExists(t, n) {
        return Ve(Zg(this, R(this, je), t, n))
    }
    createOrReplace(t, n) {
        return Ve(Yg(this, R(this, je), t, n))
    }
    delete(t, n) {
        return Ve(Qg(this, R(this, je), t, n))
    }
    mutate(t, n) {
        return Ve(Xg(this, R(this, je), t, n))
    }
    patch(t, n) {
        return new cr(t,n,this)
    }
    transaction(t) {
        return new li(t,this)
    }
    action(t, n) {
        return Ve(em(this, R(this, je), t, n))
    }
    request(t) {
        return Ve(Nt(this, R(this, je), t))
    }
    dataRequest(t, n, r) {
        return Ve(to(this, R(this, je), t, n, r))
    }
    getUrl(t, n) {
        return vl(this, t, n)
    }
    getDataUrl(t, n) {
        return _r(this, t, n)
    }
}
;
en = new WeakMap,
je = new WeakMap;
let lc = di;
function Ak(e, t) {
    const n = F4(e);
    return {
        requester: n,
        createClient: r => new t( (o, s) => (s || n)({
            maxRedirects: 0,
            maxRetries: r.maxRetries,
            retryDelay: r.retryDelay,
            ...o
        }),r)
    }
}
var Rk = [];
const Ok = Ak(Rk, lc)
  , $f = Ok.createClient;
var sm = {}
  , Pk = {
    kValues: Symbol("values"),
    kStorage: Symbol("kStorage"),
    kStorages: Symbol("kStorages"),
    kTransfromer: Symbol("kTransformer"),
    kTTL: Symbol("kTTL"),
    kOnDedupe: Symbol("kOnDedupe"),
    kOnError: Symbol("kOnError"),
    kOnHit: Symbol("kOnHit"),
    kOnMiss: Symbol("kOnMiss"),
    kStale: Symbol("kStale")
}
  , uc = {
    exports: {}
};
(function(e, t) {
    const {hasOwnProperty: n} = Object.prototype
      , r = h();
    r.configure = h,
    r.stringify = r,
    r.default = r,
    t.stringify = r,
    t.configure = h,
    e.exports = r;
    const o = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;
    function s(m) {
        return m.length < 5e3 && !o.test(m) ? `"${m}"` : JSON.stringify(m)
    }
    function i(m) {
        if (m.length > 200)
            return m.sort();
        for (let p = 1; p < m.length; p++) {
            const S = m[p];
            let k = p;
            for (; k !== 0 && m[k - 1] > S; )
                m[k] = m[k - 1],
                k--;
            m[k] = S
        }
        return m
    }
    const a = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)), Symbol.toStringTag).get;
    function c(m) {
        return a.call(m) !== void 0 && m.length !== 0
    }
    function l(m, p, S) {
        m.length < S && (S = m.length);
        const k = p === "," ? "" : " ";
        let y = `"0":${k}${m[0]}`;
        for (let g = 1; g < S; g++)
            y += `${p}"${g}":${k}${m[g]}`;
        return y
    }
    function u(m, p) {
        let S;
        if (n.call(m, p) && (S = m[p],
        typeof S != "boolean"))
            throw new TypeError(`The "${p}" argument must be of type boolean`);
        return S === void 0 || S
    }
    function f(m, p) {
        let S;
        if (n.call(m, p)) {
            if (S = m[p],
            typeof S != "number")
                throw new TypeError(`The "${p}" argument must be of type number`);
            if (!Number.isInteger(S))
                throw new TypeError(`The "${p}" argument must be an integer`);
            if (S < 1)
                throw new RangeError(`The "${p}" argument must be >= 1`)
        }
        return S === void 0 ? 1 / 0 : S
    }
    function d(m) {
        return m === 1 ? "1 item" : `${m} items`
    }
    function h(m) {
        const p = function(I) {
            if (n.call(I, "strict")) {
                const C = I.strict;
                if (typeof C != "boolean")
                    throw new TypeError('The "strict" argument must be of type boolean');
                if (C)
                    return v => {
                        let _ = "Object can not safely be stringified. Received type " + typeof v;
                        throw typeof v != "function" && (_ += ` (${v.toString()})`),
                        new Error(_)
                    }
            }
        }(m = {
            ...m
        });
        p && (m.bigint === void 0 && (m.bigint = !1),
        "circularValue"in m || (m.circularValue = Error));
        const S = function(I) {
            if (n.call(I, "circularValue")) {
                const C = I.circularValue;
                if (typeof C == "string")
                    return `"${C}"`;
                if (C == null)
                    return C;
                if (C === Error || C === TypeError)
                    return {
                        toString() {
                            throw new TypeError("Converting circular structure to JSON")
                        }
                    };
                throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')
            }
            return '"[Circular]"'
        }(m)
          , k = u(m, "bigint")
          , y = u(m, "deterministic")
          , g = f(m, "maximumDepth")
          , w = f(m, "maximumBreadth");
        function T(I, C, v, _, x, O) {
            let L = C[I];
            switch (typeof L == "object" && L !== null && typeof L.toJSON == "function" && (L = L.toJSON(I)),
            L = _.call(C, I, L),
            typeof L) {
            case "string":
                return s(L);
            case "object":
                {
                    if (L === null)
                        return "null";
                    if (v.indexOf(L) !== -1)
                        return S;
                    let P = ""
                      , H = ",";
                    const F = O;
                    if (Array.isArray(L)) {
                        if (L.length === 0)
                            return "[]";
                        if (g < v.length + 1)
                            return '"[Array]"';
                        v.push(L),
                        x !== "" && (P += `
${O += x}`,
                        H = `,
${O}`);
                        const _e = Math.min(L.length, w);
                        let Ie = 0;
                        for (; Ie < _e - 1; Ie++) {
                            const B = T(String(Ie), L, v, _, x, O);
                            P += B !== void 0 ? B : "null",
                            P += H
                        }
                        const xe = T(String(Ie), L, v, _, x, O);
                        return P += xe !== void 0 ? xe : "null",
                        L.length - 1 > w && (P += `${H}"... ${d(L.length - w - 1)} not stringified"`),
                        x !== "" && (P += `
${F}`),
                        v.pop(),
                        `[${P}]`
                    }
                    let oe = Object.keys(L);
                    const he = oe.length;
                    if (he === 0)
                        return "{}";
                    if (g < v.length + 1)
                        return '"[Object]"';
                    let ae = ""
                      , de = "";
                    x !== "" && (H = `,
${O += x}`,
                    ae = " ");
                    const Re = Math.min(he, w);
                    y && !c(L) && (oe = i(oe)),
                    v.push(L);
                    for (let _e = 0; _e < Re; _e++) {
                        const Ie = oe[_e]
                          , xe = T(Ie, L, v, _, x, O);
                        xe !== void 0 && (P += `${de}${s(Ie)}:${ae}${xe}`,
                        de = H)
                    }
                    return he > w && (P += `${de}"...":${ae}"${d(he - w)} not stringified"`,
                    de = H),
                    x !== "" && de.length > 1 && (P = `
${O}${P}
${F}`),
                    v.pop(),
                    `{${P}}`
                }
            case "number":
                return isFinite(L) ? String(L) : p ? p(L) : "null";
            case "boolean":
                return L === !0 ? "true" : "false";
            case "undefined":
                return;
            case "bigint":
                if (k)
                    return String(L);
            default:
                return p ? p(L) : void 0
            }
        }
        function A(I, C, v, _, x, O) {
            switch (typeof C == "object" && C !== null && typeof C.toJSON == "function" && (C = C.toJSON(I)),
            typeof C) {
            case "string":
                return s(C);
            case "object":
                {
                    if (C === null)
                        return "null";
                    if (v.indexOf(C) !== -1)
                        return S;
                    const L = O;
                    let P = ""
                      , H = ",";
                    if (Array.isArray(C)) {
                        if (C.length === 0)
                            return "[]";
                        if (g < v.length + 1)
                            return '"[Array]"';
                        v.push(C),
                        x !== "" && (P += `
${O += x}`,
                        H = `,
${O}`);
                        const he = Math.min(C.length, w);
                        let ae = 0;
                        for (; ae < he - 1; ae++) {
                            const Re = A(String(ae), C[ae], v, _, x, O);
                            P += Re !== void 0 ? Re : "null",
                            P += H
                        }
                        const de = A(String(ae), C[ae], v, _, x, O);
                        return P += de !== void 0 ? de : "null",
                        C.length - 1 > w && (P += `${H}"... ${d(C.length - w - 1)} not stringified"`),
                        x !== "" && (P += `
${L}`),
                        v.pop(),
                        `[${P}]`
                    }
                    v.push(C);
                    let F = "";
                    x !== "" && (H = `,
${O += x}`,
                    F = " ");
                    let oe = "";
                    for (const he of _) {
                        const ae = A(he, C[he], v, _, x, O);
                        ae !== void 0 && (P += `${oe}${s(he)}:${F}${ae}`,
                        oe = H)
                    }
                    return x !== "" && oe.length > 1 && (P = `
${O}${P}
${L}`),
                    v.pop(),
                    `{${P}}`
                }
            case "number":
                return isFinite(C) ? String(C) : p ? p(C) : "null";
            case "boolean":
                return C === !0 ? "true" : "false";
            case "undefined":
                return;
            case "bigint":
                if (k)
                    return String(C);
            default:
                return p ? p(C) : void 0
            }
        }
        function $(I, C, v, _, x) {
            switch (typeof C) {
            case "string":
                return s(C);
            case "object":
                {
                    if (C === null)
                        return "null";
                    if (typeof C.toJSON == "function") {
                        if (typeof (C = C.toJSON(I)) != "object")
                            return $(I, C, v, _, x);
                        if (C === null)
                            return "null"
                    }
                    if (v.indexOf(C) !== -1)
                        return S;
                    const O = x;
                    if (Array.isArray(C)) {
                        if (C.length === 0)
                            return "[]";
                        if (g < v.length + 1)
                            return '"[Array]"';
                        v.push(C);
                        let ae = `
${x += _}`;
                        const de = `,
${x}`
                          , Re = Math.min(C.length, w);
                        let _e = 0;
                        for (; _e < Re - 1; _e++) {
                            const xe = $(String(_e), C[_e], v, _, x);
                            ae += xe !== void 0 ? xe : "null",
                            ae += de
                        }
                        const Ie = $(String(_e), C[_e], v, _, x);
                        return ae += Ie !== void 0 ? Ie : "null",
                        C.length - 1 > w && (ae += `${de}"... ${d(C.length - w - 1)} not stringified"`),
                        ae += `
${O}`,
                        v.pop(),
                        `[${ae}]`
                    }
                    let L = Object.keys(C);
                    const P = L.length;
                    if (P === 0)
                        return "{}";
                    if (g < v.length + 1)
                        return '"[Object]"';
                    const H = `,
${x += _}`;
                    let F = ""
                      , oe = ""
                      , he = Math.min(P, w);
                    c(C) && (F += l(C, H, w),
                    L = L.slice(C.length),
                    he -= C.length,
                    oe = H),
                    y && (L = i(L)),
                    v.push(C);
                    for (let ae = 0; ae < he; ae++) {
                        const de = L[ae]
                          , Re = $(de, C[de], v, _, x);
                        Re !== void 0 && (F += `${oe}${s(de)}: ${Re}`,
                        oe = H)
                    }
                    return P > w && (F += `${oe}"...": "${d(P - w)} not stringified"`,
                    oe = H),
                    oe !== "" && (F = `
${x}${F}
${O}`),
                    v.pop(),
                    `{${F}}`
                }
            case "number":
                return isFinite(C) ? String(C) : p ? p(C) : "null";
            case "boolean":
                return C === !0 ? "true" : "false";
            case "undefined":
                return;
            case "bigint":
                if (k)
                    return String(C);
            default:
                return p ? p(C) : void 0
            }
        }
        function N(I, C, v) {
            switch (typeof C) {
            case "string":
                return s(C);
            case "object":
                {
                    if (C === null)
                        return "null";
                    if (typeof C.toJSON == "function") {
                        if (typeof (C = C.toJSON(I)) != "object")
                            return N(I, C, v);
                        if (C === null)
                            return "null"
                    }
                    if (v.indexOf(C) !== -1)
                        return S;
                    let _ = "";
                    if (Array.isArray(C)) {
                        if (C.length === 0)
                            return "[]";
                        if (g < v.length + 1)
                            return '"[Array]"';
                        v.push(C);
                        const H = Math.min(C.length, w);
                        let F = 0;
                        for (; F < H - 1; F++) {
                            const he = N(String(F), C[F], v);
                            _ += he !== void 0 ? he : "null",
                            _ += ","
                        }
                        const oe = N(String(F), C[F], v);
                        return _ += oe !== void 0 ? oe : "null",
                        C.length - 1 > w && (_ += `,"... ${d(C.length - w - 1)} not stringified"`),
                        v.pop(),
                        `[${_}]`
                    }
                    let x = Object.keys(C);
                    const O = x.length;
                    if (O === 0)
                        return "{}";
                    if (g < v.length + 1)
                        return '"[Object]"';
                    let L = ""
                      , P = Math.min(O, w);
                    c(C) && (_ += l(C, ",", w),
                    x = x.slice(C.length),
                    P -= C.length,
                    L = ","),
                    y && (x = i(x)),
                    v.push(C);
                    for (let H = 0; H < P; H++) {
                        const F = x[H]
                          , oe = N(F, C[F], v);
                        oe !== void 0 && (_ += `${L}${s(F)}:${oe}`,
                        L = ",")
                    }
                    return O > w && (_ += `${L}"...":"${d(O - w)} not stringified"`),
                    v.pop(),
                    `{${_}}`
                }
            case "number":
                return isFinite(C) ? String(C) : p ? p(C) : "null";
            case "boolean":
                return C === !0 ? "true" : "false";
            case "undefined":
                return;
            case "bigint":
                if (k)
                    return String(C);
            default:
                return p ? p(C) : void 0
            }
        }
        return function(I, C, v) {
            if (arguments.length > 1) {
                let _ = "";
                if (typeof v == "number" ? _ = " ".repeat(Math.min(v, 10)) : typeof v == "string" && (_ = v.slice(0, 10)),
                C != null) {
                    if (typeof C == "function")
                        return T("", {
                            "": I
                        }, [], C, _, "");
                    if (Array.isArray(C))
                        return A("", I, [], function(x) {
                            const O = new Set;
                            for (const L of x)
                                (typeof L == "string" || typeof L == "number") && O.add(String(L));
                            return O
                        }(C), _, "")
                }
                if (_.length !== 0)
                    return $("", I, [], _, "")
            }
            return N("", I, [])
        }
    }
}
)(uc, uc.exports);
var im = uc.exports;
function Mf(e) {
    return e * Math.random() | 0
}
var Fi = {
    findNotMatching: function(e, t) {
        const n = [];
        let r = 0;
        for (let o = 0; o < e.length; o++)
            for (let s = r; s < t.length; s++)
                e[o] !== t[s] && (n.push(t[s]),
                r = s + 1);
        return n
    },
    findMatchingIndexes: function(e, t) {
        const n = [];
        let r = 0;
        for (let o = 0; o < e.length; o++)
            for (let s = r; s < t.length; s++)
                e[o] === t[s] && (n.push(s),
                r = s + 1);
        return n
    },
    bsearchIndex: function(e, t) {
        let n = 0
          , r = e.length - 1;
        for (; n <= r; ) {
            const o = (n + r) / 2 | 0;
            if (e[o] === t)
                return o;
            e[o] < t ? n = o + 1 : r = o - 1
        }
        return -1
    },
    wildcardMatch: function(e, t) {
        if (e === "*" || e.length === t.length && e === t)
            return !0;
        let n = 0
          , r = 0;
        for (; n < e.length && r < t.length; )
            if (e[n] !== t[r]) {
                if (e[n] !== "*")
                    return !1;
                if (e[n + 1] === t[r]) {
                    n++;
                    continue
                }
                r++
            } else
                n++,
                r++;
        return n >= e.length - 1
    },
    randomSubset: function(e, t) {
        if (e.length < 1 || t < 1)
            return [];
        const n = Math.min(e.length, t)
          , r = (s = 1,
        i = n,
        (s = Math.floor(s)) + Mf(1 + (i = Math.floor(i)) - s))
          , o = new Set;
        var s, i;
        for (let c = 0; c < r; c++)
            o.add(Mf(e.length));
        const a = [];
        for (const c of o)
            a.push(e[c]);
        return a
    },
    abstractLogging: function() {
        const e = () => {}
        ;
        return {
            fatal: e,
            error: e,
            warn: e,
            info: e,
            debug: e,
            trace: e
        }
    },
    isServerSide: typeof window > "u"
}, If, Lf, am = class {
    constructor(e) {
        this.options = e
    }
    async get(e) {
        throw new Error("storage get method not implemented")
    }
    async set(e, t, n, r) {
        throw new Error("storage set method not implemented")
    }
    async remove(e) {
        throw new Error("storage remove method not implemented")
    }
    async invalidate(e) {
        throw new Error("storage invalidate method not implemented")
    }
    async clear(e) {
        throw new Error("storage clear method not implemented")
    }
    async refresh() {
        throw new Error("storage refresh method not implemented")
    }
}
;
function Ut(e) {
    if (typeof e != "function")
        throw new Error("obliterator/iterator: expecting a function!");
    this.next = e
}
typeof Symbol < "u" && (Ut.prototype[Symbol.iterator] = function() {
    return this
}
),
Ut.of = function() {
    var e = arguments
      , t = e.length
      , n = 0;
    return new Ut(function() {
        return n >= t ? {
            done: !0
        } : {
            done: !1,
            value: e[n++]
        }
    }
    )
}
,
Ut.empty = function() {
    return new Ut(function() {
        return {
            done: !0
        }
    }
    )
}
,
Ut.fromSequence = function(e) {
    var t = 0
      , n = e.length;
    return new Ut(function() {
        return t >= n ? {
            done: !0
        } : {
            done: !1,
            value: e[t++]
        }
    }
    )
}
,
Ut.is = function(e) {
    return e instanceof Ut || typeof e == "object" && e !== null && typeof e.next == "function"
}
;
var $k = Ut
  , fc = {};
fc.ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer < "u",
fc.SYMBOL_SUPPORT = typeof Symbol < "u";
var cm = fc
  , Mk = cm.ARRAY_BUFFER_SUPPORT
  , Ik = cm.SYMBOL_SUPPORT
  , lm = function(e, t) {
    var n, r, o, s, i;
    if (!e)
        throw new Error("obliterator/forEach: invalid iterable.");
    if (typeof t != "function")
        throw new Error("obliterator/forEach: expecting a callback.");
    if (Array.isArray(e) || Mk && ArrayBuffer.isView(e) || typeof e == "string" || e.toString() === "[object Arguments]")
        for (o = 0,
        s = e.length; o < s; o++)
            t(e[o], o);
    else if (typeof e.forEach != "function")
        if (Ik && Symbol.iterator in e && typeof e.next != "function" && (e = e[Symbol.iterator]()),
        typeof e.next != "function")
            for (r in e)
                e.hasOwnProperty(r) && t(e[r], r);
        else
            for (n = e,
            o = 0; (i = n.next()).done !== !0; )
                t(i.value, o),
                o++;
    else
        e.forEach(t)
}
  , _l = {};
(function(e) {
    var t = Math.pow(2, 8) - 1
      , n = Math.pow(2, 16) - 1
      , r = Math.pow(2, 32) - 1
      , o = Math.pow(2, 7) - 1
      , s = Math.pow(2, 15) - 1
      , i = Math.pow(2, 31) - 1;
    e.getPointerArray = function(c) {
        var l = c - 1;
        if (l <= t)
            return Uint8Array;
        if (l <= n)
            return Uint16Array;
        if (l <= r)
            return Uint32Array;
        throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")
    }
    ,
    e.getSignedPointerArray = function(c) {
        var l = c - 1;
        return l <= o ? Int8Array : l <= s ? Int16Array : l <= i ? Int32Array : Float64Array
    }
    ,
    e.getNumberType = function(c) {
        return c === (0 | c) ? Math.sign(c) === -1 ? c <= 127 && c >= -128 ? Int8Array : c <= 32767 && c >= -32768 ? Int16Array : Int32Array : c <= 255 ? Uint8Array : c <= 65535 ? Uint16Array : Uint32Array : Float64Array
    }
    ;
    var a = {
        Uint8Array: 1,
        Int8Array: 2,
        Uint16Array: 3,
        Int16Array: 4,
        Uint32Array: 5,
        Int32Array: 6,
        Float32Array: 7,
        Float64Array: 8
    };
    e.getMinimalRepresentation = function(c, l) {
        var u, f, d, h, m, p = null, S = 0;
        for (h = 0,
        m = c.length; h < m; h++)
            d = l ? l(c[h]) : c[h],
            f = e.getNumberType(d),
            (u = a[f.name]) > S && (S = u,
            p = f);
        return p
    }
    ,
    e.isTypedArray = function(c) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView(c)
    }
    ,
    e.concat = function() {
        var c, l, u, f = 0;
        for (c = 0,
        u = arguments.length; c < u; c++)
            f += arguments[c].length;
        var d = new arguments[0].constructor(f);
        for (c = 0,
        l = 0; c < u; c++)
            d.set(arguments[c], l),
            l += arguments[c].length;
        return d
    }
    ,
    e.indices = function(c) {
        for (var l = new (e.getPointerArray(c))(c), u = 0; u < c; u++)
            l[u] = u;
        return l
    }
}
)(_l);
var po = {}
  , Bf = lm
  , jf = _l;
function fa(e) {
    return typeof e.length == "number" ? e.length : typeof e.size == "number" ? e.size : void 0
}
po.isArrayLike = function(e) {
    return Array.isArray(e) || jf.isTypedArray(e)
}
,
po.guessLength = fa,
po.toArray = function(e) {
    var t = fa(e)
      , n = typeof t == "number" ? new Array(t) : []
      , r = 0;
    return Bf(e, function(o) {
        n[r++] = o
    }),
    n
}
,
po.toArrayWithIndices = function(e) {
    var t = fa(e)
      , n = typeof t == "number" ? jf.getPointerArray(t) : Array
      , r = typeof t == "number" ? new Array(t) : []
      , o = typeof t == "number" ? new n(t) : []
      , s = 0;
    return Bf(e, function(i) {
        r[s] = i,
        o[s] = s++
    }),
    [r, o]
}
;
var da = $k
  , Lk = lm
  , Bk = _l
  , jk = po;
function Ne(e, t, n) {
    if (arguments.length < 2 && (n = e,
    e = null,
    t = null),
    this.capacity = n,
    typeof this.capacity != "number" || this.capacity <= 0)
        throw new Error("mnemonist/lru-cache: capacity should be positive number.");
    if (!isFinite(this.capacity) || Math.floor(this.capacity) !== this.capacity)
        throw new Error("mnemonist/lru-cache: capacity should be a finite positive integer.");
    var r = Bk.getPointerArray(n);
    this.forward = new r(n),
    this.backward = new r(n),
    this.K = typeof e == "function" ? new e(n) : new Array(n),
    this.V = typeof t == "function" ? new t(n) : new Array(n),
    this.size = 0,
    this.head = 0,
    this.tail = 0,
    this.items = {}
}
Ne.prototype.clear = function() {
    this.size = 0,
    this.head = 0,
    this.tail = 0,
    this.items = {}
}
,
Ne.prototype.splayOnTop = function(e) {
    var t = this.head;
    if (this.head === e)
        return this;
    var n = this.backward[e]
      , r = this.forward[e];
    return this.tail === e ? this.tail = n : this.backward[r] = n,
    this.forward[n] = r,
    this.backward[t] = e,
    this.head = e,
    this.forward[e] = t,
    this
}
,
Ne.prototype.set = function(e, t) {
    var n = this.items[e];
    if (typeof n < "u")
        return this.splayOnTop(n),
        void (this.V[n] = t);
    this.size < this.capacity ? n = this.size++ : (n = this.tail,
    this.tail = this.backward[n],
    delete this.items[this.K[n]]),
    this.items[e] = n,
    this.K[n] = e,
    this.V[n] = t,
    this.forward[n] = this.head,
    this.backward[this.head] = n,
    this.head = n
}
,
Ne.prototype.setpop = function(e, t) {
    var n = null
      , r = null
      , o = this.items[e];
    return typeof o < "u" ? (this.splayOnTop(o),
    n = this.V[o],
    this.V[o] = t,
    {
        evicted: !1,
        key: e,
        value: n
    }) : (this.size < this.capacity ? o = this.size++ : (o = this.tail,
    this.tail = this.backward[o],
    n = this.V[o],
    r = this.K[o],
    delete this.items[r]),
    this.items[e] = o,
    this.K[o] = e,
    this.V[o] = t,
    this.forward[o] = this.head,
    this.backward[this.head] = o,
    this.head = o,
    r ? {
        evicted: !0,
        key: r,
        value: n
    } : null)
}
,
Ne.prototype.has = function(e) {
    return e in this.items
}
,
Ne.prototype.get = function(e) {
    var t = this.items[e];
    if (!(typeof t > "u"))
        return this.splayOnTop(t),
        this.V[t]
}
,
Ne.prototype.peek = function(e) {
    var t = this.items[e];
    if (!(typeof t > "u"))
        return this.V[t]
}
,
Ne.prototype.forEach = function(e, t) {
    t = arguments.length > 1 ? t : this;
    for (var n = 0, r = this.size, o = this.head, s = this.K, i = this.V, a = this.forward; n < r; )
        e.call(t, i[o], s[o], this),
        o = a[o],
        n++
}
,
Ne.prototype.keys = function() {
    var e = 0
      , t = this.size
      , n = this.head
      , r = this.K
      , o = this.forward;
    return new da(function() {
        if (e >= t)
            return {
                done: !0
            };
        var s = r[n];
        return ++e < t && (n = o[n]),
        {
            done: !1,
            value: s
        }
    }
    )
}
,
Ne.prototype.values = function() {
    var e = 0
      , t = this.size
      , n = this.head
      , r = this.V
      , o = this.forward;
    return new da(function() {
        if (e >= t)
            return {
                done: !0
            };
        var s = r[n];
        return ++e < t && (n = o[n]),
        {
            done: !1,
            value: s
        }
    }
    )
}
,
Ne.prototype.entries = function() {
    var e = 0
      , t = this.size
      , n = this.head
      , r = this.K
      , o = this.V
      , s = this.forward;
    return new da(function() {
        if (e >= t)
            return {
                done: !0
            };
        var i = r[n]
          , a = o[n];
        return ++e < t && (n = s[n]),
        {
            done: !1,
            value: [i, a]
        }
    }
    )
}
,
typeof Symbol < "u" && (Ne.prototype[Symbol.iterator] = Ne.prototype.entries),
Ne.prototype.inspect = function() {
    for (var e, t = new Map, n = this.entries(); !(e = n.next()).done; )
        t.set(e.value[0], e.value[1]);
    return Object.defineProperty(t, "constructor", {
        value: Ne,
        enumerable: !1
    }),
    t
}
,
typeof Symbol < "u" && (Ne.prototype[Symbol.for("nodejs.util.inspect.custom")] = Ne.prototype.inspect),
Ne.from = function(e, t, n, r) {
    if (arguments.length < 2) {
        if (typeof (r = jk.guessLength(e)) != "number")
            throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")
    } else
        arguments.length === 2 && (r = t,
        t = null,
        n = null);
    var o = new Ne(t,n,r);
    return Lk(e, function(s, i) {
        o.set(i, s)
    }),
    o
}
;
const Nk = Ne
  , {abstractLogging: Dk} = Fi
  , Fk = am
  , {findMatchingIndexes: Hk, findNotMatching: Nf, bsearchIndex: Uk, wildcardMatch: Vk} = Fi
  , zk = typeof globalThis.setImmediate < "u" ? globalThis.setImmediate : (e, ...t) => setTimeout(e, 0, ...t);
let go;
function Rs() {
    if (go !== void 0)
        return go;
    go = Math.floor(Date.now() / 1e3);
    const e = setTimeout(Kk, 1e3);
    return typeof e.unref == "function" && e.unref(),
    go
}
function Kk() {
    go = void 0
}
var qk = class extends Fk {
    constructor(e={}) {
        if (e.size && (typeof e.size != "number" || e.size < 1))
            throw new Error("size must be a positive integer greater than 0");
        super(e),
        this.size = e.size || 1024,
        this.log = e.log || Dk(),
        this.invalidation = e.invalidation || !1,
        this.init()
    }
    init() {
        this.store = new Nk(this.size),
        this.invalidation && (this.keysReferences = new Map,
        this.referencesKeys = new Map)
    }
    get(e) {
        this.log.debug({
            msg: "acd/storage/memory.get",
            key: e
        });
        const t = this.store.get(e);
        if (t) {
            if (this.log.debug({
                msg: "acd/storage/memory.get, entry",
                entry: t,
                now: Rs()
            }),
            t.start + t.ttl > Rs())
                return this.log.debug({
                    msg: "acd/storage/memory.get, key is NOT expired",
                    key: e,
                    entry: t
                }),
                t.value;
            this.log.debug({
                msg: "acd/storage/memory.get, key is EXPIRED",
                key: e,
                entry: t
            }),
            zk( () => this.remove(e))
        }
    }
    getTTL(e) {
        this.log.debug({
            msg: "acd/storage/memory.getTTL",
            key: e
        });
        const t = this.store.peek(e);
        let n = 0;
        return t && (n = t.start + t.ttl - Rs(),
        n < 0 && (n = 0)),
        n
    }
    set(e, t, n, r) {
        if (this.log.debug({
            msg: "acd/storage/memory.set",
            key: e,
            value: t,
            ttl: n,
            references: r
        }),
        !(n = Number(n)) || n < 0)
            return;
        const o = this.store.has(e)
          , s = this.store.setpop(e, {
            value: t,
            ttl: n,
            start: Rs()
        });
        if (this.log.debug({
            msg: "acd/storage/memory.set, evicted",
            removed: s
        }),
        s && s.evicted && (this.log.debug({
            msg: "acd/storage/memory.set, remove evicted key",
            key: s.key
        }),
        this._removeReferences([s.key])),
        !r || r.length < 1)
            return;
        if (!this.invalidation)
            return void this.log.warn({
                msg: "acd/storage/memory.set, invalidation is disabled, references are useless"
            });
        let i;
        if (r = [...new Set(r)],
        o && (i = this.keysReferences.get(e),
        this.log.debug({
            msg: "acd/storage/memory.set, current keys-references",
            key: e,
            references: i
        }),
        i)) {
            i.sort(),
            r.sort();
            const c = Nf(r, i);
            for (const l of c) {
                const u = this.referencesKeys.get(l);
                if (!u)
                    continue;
                const f = Uk(u, e);
                if (!(f < 0)) {
                    if (u.splice(f, 1),
                    u.length < 1) {
                        this.referencesKeys.delete(l);
                        continue
                    }
                    this.referencesKeys.set(l, u)
                }
            }
        }
        const a = i ? Nf(i, r) : r;
        for (let c = 0; c < a.length; c++) {
            const l = a[c];
            let u = this.referencesKeys.get(l);
            u ? (this.log.debug({
                msg: "acd/storage/memory.set, add reference-key",
                key: e,
                reference: l
            }),
            u.push(e)) : u = [e],
            this.log.debug({
                msg: "acd/storage/memory.set, set reference-keys",
                keys: u,
                reference: l
            }),
            this.referencesKeys.set(l, u)
        }
        this.keysReferences.set(e, r)
    }
    remove(e) {
        this.log.debug({
            msg: "acd/storage/memory.remove",
            key: e
        });
        const t = this._removeKey(e);
        return this._removeReferences([e]),
        t
    }
    _removeKey(e) {
        return this.log.debug({
            msg: "acd/storage/memory._removeKey",
            key: e
        }),
        !!this.store.has(e) && (this.store.set(e, void 0),
        !0)
    }
    _removeReferences(e) {
        if (!this.invalidation)
            return;
        this.log.debug({
            msg: "acd/storage/memory._removeReferences",
            keys: e
        });
        const t = new Set;
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , o = this.keysReferences.get(r);
            if (o) {
                for (let s = 0; s < o.length; s++)
                    t.add(o[s]);
                this.log.debug({
                    msg: "acd/storage/memory._removeReferences, delete key-references",
                    key: r
                }),
                this.keysReferences.delete(r)
            }
        }
        this._removeReferencesKeys([...t], e)
    }
    _removeReferencesKeys(e, t) {
        t.sort(),
        this.log.debug({
            msg: "acd/storage/memory._removeReferencesKeys",
            references: e,
            keys: t
        });
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , o = this.referencesKeys.get(r);
            if (this.log.debug({
                msg: "acd/storage/memory._removeReferencesKeys, get reference-key",
                reference: r,
                keys: t,
                referencesKeys: o
            }),
            !o)
                continue;
            const s = Hk(t, o);
            if (this.log.debug({
                msg: "acd/storage/memory._removeReferencesKeys, removing",
                reference: r,
                referencesToRemove: s,
                referencesKeys: o
            }),
            s.length !== o.length)
                for (let i = s.length - 1; i >= 0; i--)
                    this.log.debug({
                        msg: "acd/storage/memory._removeReferencesKeys, remove",
                        reference: r,
                        referencesKeys: o,
                        at: s[i]
                    }),
                    o.splice(s[i], 1);
            else
                this.log.debug({
                    msg: "acd/storage/memory._removeReferencesKeys, delete",
                    reference: r
                }),
                this.referencesKeys.delete(r)
        }
    }
    invalidate(e) {
        return this.invalidation ? (this.log.debug({
            msg: "acd/storage/memory.invalidate",
            references: e
        }),
        Array.isArray(e) ? this._invalidateReferences(e) : this._invalidateReference(e)) : (this.log.warn({
            msg: "acd/storage/memory.invalidate, exit due invalidation is disabled"
        }),
        [])
    }
    _invalidateReferences(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , o = this.referencesKeys.get(r);
            if (this.log.debug({
                msg: "acd/storage/memory._invalidateReferences, remove keys on reference",
                reference: r,
                keys: o
            }),
            o) {
                for (let s = 0; s < o.length; s++) {
                    const i = o[s];
                    this.log.debug({
                        msg: "acd/storage/memory._invalidateReferences, remove key on reference",
                        reference: r,
                        key: i
                    }),
                    this._removeKey(i) && t.push(i)
                }
                this.log.debug({
                    msg: "acd/storage/memory._invalidateReferences, remove references of",
                    reference: r,
                    keys: o
                }),
                this._removeReferences([...o])
            }
        }
        return t
    }
    _invalidateReference(e) {
        if (e.includes("*")) {
            const r = [];
            for (const o of this.referencesKeys.keys())
                Vk(e, o) && r.push(o);
            return this._invalidateReferences(r)
        }
        const t = this.referencesKeys.get(e)
          , n = [];
        if (this.log.debug({
            msg: "acd/storage/memory._invalidateReference, remove keys on reference",
            reference: e,
            keys: t
        }),
        !t)
            return n;
        for (let r = 0; r < t.length; r++) {
            const o = t[r];
            this.log.debug({
                msg: "acd/storage/memory._invalidateReference, remove key on reference",
                reference: e,
                key: o
            }),
            this._removeKey(o) && n.push(o)
        }
        return this.log.debug({
            msg: "acd/storage/memory._invalidateReference, remove references of",
            reference: e,
            keys: t
        }),
        this._removeReferences([...t]),
        n
    }
    clear(e) {
        if (this.log.debug({
            msg: "acd/storage/memory.clear",
            name: e
        }),
        !e)
            return this.store.clear(),
            this.invalidation ? (this.referencesKeys.clear(),
            void this.keysReferences.clear()) : void 0;
        const t = [];
        this.store.forEach( (r, o) => {
            this.log.debug({
                msg: "acd/storage/memory.clear, iterate key",
                key: o
            }),
            o.indexOf(e) === 0 && (this.log.debug({
                msg: "acd/storage/memory.clear, remove key",
                key: o
            }),
            t.push(o))
        }
        );
        const n = [];
        for (let r = 0; r < t.length; r++)
            this._removeKey(t[r]) && n.push(t[r]);
        return this._removeReferences(n),
        n
    }
    refresh() {
        this.log.debug({
            msg: "acd/storage/memory.refresh"
        }),
        this.init()
    }
}
;
const {isServerSide: um} = Fi;
let fm;
um && (fm = function() {
    if (Lf)
        return If;
    Lf = 1;
    const e = im
      , t = am
      , {findNotMatching: n, randomSubset: r, abstractLogging: o} = Fi;
    return If = class extends t {
        constructor(s={}) {
            if (!s.client || typeof s.client != "object")
                throw new Error("Redis client is required");
            if (super(s),
            s.invalidation && s.invalidation.referencesTTL && (typeof s.invalidation.referencesTTL != "number" || s.invalidation.referencesTTL < 1))
                throw new Error("invalidation.referencesTTL must be a positive integer greater than 1");
            this.log = s.log || o(),
            this.store = s.client,
            this.invalidation = !!s.invalidation,
            this.referencesTTL = s.invalidation && s.invalidation.referencesTTL || 60
        }
        getReferenceKeyLabel(s) {
            return `r:${s}`
        }
        getKeyReferenceLabel(s) {
            return `k:${s}`
        }
        async get(s) {
            this.log.debug({
                msg: "acd/storage/redis.get",
                key: s
            });
            try {
                const i = await this.store.get(s);
                return i ? JSON.parse(i) : this.invalidation ? void this.clearReferences(s) : void 0
            } catch (i) {
                this.log.error({
                    msg: "acd/storage/redis.get error",
                    err: i,
                    key: s
                })
            }
        }
        async getTTL(s) {
            this.log.debug({
                msg: "acd/storage/memory.getTTL",
                key: s
            });
            let i = await this.store.pttl(s);
            return i < 0 ? 0 : (i = Math.ceil(i / 1e3),
            i)
        }
        async set(s, i, a, c) {
            if (this.log.debug({
                msg: "acd/storage/redis.set key",
                key: s,
                value: i,
                ttl: a,
                references: c
            }),
            (a = Number(a)) && !(a < 0))
                try {
                    if (await this.store.set(s, e(i), "EX", a),
                    !c || c.length < 1)
                        return;
                    if (!this.invalidation)
                        return void this.log.warn({
                            msg: "acd/storage/redis.set, invalidation is disabled, references are useless",
                            key: s,
                            references: c
                        });
                    const l = []
                      , u = await this.store.smembers(this.getKeyReferenceLabel(s));
                    if (this.log.debug({
                        msg: "acd/storage/redis.set current references",
                        key: s,
                        currentReferences: u
                    }),
                    u.length > 1) {
                        u.sort(),
                        c.sort();
                        const h = n(c, u);
                        for (const m of h)
                            l.push(["srem", this.getReferenceKeyLabel(m), s]);
                        l.push(["del", this.getKeyReferenceLabel(s)])
                    }
                    const f = u.length > 1 ? n(u, c) : c;
                    this.log.debug({
                        msg: "acd/storage/redis.set references to add",
                        key: s,
                        referencesToAdd: f
                    });
                    for (let h = 0; h < f.length; h++) {
                        const m = f[h]
                          , p = this.getReferenceKeyLabel(m);
                        l.push(["sadd", p, s]),
                        l.push(["expire", p, this.referencesTTL])
                    }
                    const d = this.getKeyReferenceLabel(s);
                    l.push(["sadd", d, c]),
                    l.push(["expire", d, a]),
                    this.log.debug({
                        msg: "acd/storage/redis.set references writes",
                        writes: l
                    }),
                    await this.store.pipeline(l).exec()
                } catch (l) {
                    this.log.error({
                        msg: "acd/storage/redis.set error",
                        err: l,
                        key: s,
                        ttl: a,
                        references: c
                    })
                }
        }
        async remove(s) {
            this.log.debug({
                msg: "acd/storage/redis.remove",
                key: s
            });
            try {
                const i = await this.store.del(s) > 0;
                return i && this.invalidation && await this.clearReferences(s),
                i
            } catch (i) {
                this.log.error({
                    msg: "acd/storage/redis.remove error",
                    err: i,
                    key: s
                })
            }
        }
        async invalidate(s) {
            if (!this.invalidation)
                return this.log.warn({
                    msg: "acd/storage/redis.invalidate, exit due invalidation is disabled"
                }),
                [];
            this.log.debug({
                msg: "acd/storage/redis.invalidate",
                references: s
            });
            try {
                return Array.isArray(s) ? await this._invalidateReferences(s) : await this._invalidateReference(s)
            } catch (i) {
                return this.log.error({
                    msg: "acd/storage/redis.invalidate error",
                    err: i,
                    references: s
                }),
                []
            }
        }
        async _invalidateReferences(s, i=!0) {
            const a = s.map(f => ["smembers", i ? this.getReferenceKeyLabel(f) : f])
              , c = await this.store.pipeline(a).exec();
            this.log.debug({
                msg: "acd/storage/redis._invalidateReferences keys",
                keys: c
            });
            const l = []
              , u = [];
            for (let f = 0; f < c.length; f++) {
                const d = c[f][1];
                if (d) {
                    this.log.debug({
                        msg: "acd/storage/redis._invalidateReferences got keys to be invalidated",
                        keys: d
                    });
                    for (let h = 0; h < d.length; h++) {
                        const m = d[h];
                        this.log.debug({
                            msg: "acd/storage/redis._invalidateReferences del key" + m
                        }),
                        u.push(m),
                        l.push(["del", m])
                    }
                }
            }
            return await this.store.pipeline(l).exec(),
            await this.clearReferences(u),
            u
        }
        async _invalidateReference(s) {
            let i;
            if (s.includes("*")) {
                const l = await this.store.keys(this.getReferenceKeyLabel(s));
                return this._invalidateReferences(l, !1)
            }
            i = await this.store.smembers(this.getReferenceKeyLabel(s)),
            this.log.debug({
                msg: "acd/storage/redis._invalidateReference keys",
                keys: i
            });
            const a = []
              , c = [];
            for (let l = 0; l < i.length; l++) {
                const u = i[l];
                this.log.debug({
                    msg: "acd/storage/redis._invalidateReference del key" + u
                }),
                c.push(u),
                a.push(["del", u])
            }
            return await this.store.pipeline(a).exec(),
            await this.clearReferences(c),
            c
        }
        async clear(s) {
            this.log.debug({
                msg: "acd/storage/redis.clear",
                name: s
            });
            try {
                if (!s)
                    return void await this.store.flushall();
                const i = await this.store.keys(`${s}*`);
                this.log.debug({
                    msg: "acd/storage/redis.clear keys",
                    keys: i
                });
                const a = i.map(c => ["del", c]);
                if (await this.store.pipeline(a).exec(),
                !this.invalidation)
                    return;
                await this.clearReferences(i)
            } catch (i) {
                this.log.error({
                    msg: "acd/storage/redis.clear error",
                    err: i,
                    name: s
                })
            }
        }
        async refresh() {
            try {
                await this.store.flushall()
            } catch (s) {
                this.log.error({
                    msg: "acd/storage/redis.refresh error",
                    err: s
                })
            }
        }
        async clearReferences(s) {
            try {
                if (!s)
                    return void this.log.warn({
                        msg: "acd/storage/redis.clearReferences invalid call due to empty key"
                    });
                Array.isArray(s) || (s = [s]);
                const i = s.map(l => ["smembers", this.getKeyReferenceLabel(l)])
                  , a = await this.store.pipeline(i).exec();
                this.log.debug({
                    msg: "acd/storage/redis.clearReferences references",
                    keys: s,
                    referencesKeys: a
                });
                const c = {};
                for (let l = 0; l < s.length; l++) {
                    for (let f = 0; f < a[l][1].length; f++) {
                        const d = this.getReferenceKeyLabel(a[l][1][f]);
                        c[d] || (c[d] = ["srem", d, s])
                    }
                    const u = this.getKeyReferenceLabel(s[l]);
                    c[u] = ["del", u]
                }
                this.log.debug({
                    msg: "acd/storage/redis.clearReferences writes pipeline",
                    writes: c
                }),
                await this.store.pipeline(Object.values(c)).exec()
            } catch (i) {
                this.log.error({
                    msg: "acd/storage/redis.clearReferences error",
                    err: i
                })
            }
        }
        async gc(s="lazy", i={}) {
            if (this.log.debug({
                msg: "acd/storage/redis.gc",
                mode: s,
                options: i
            }),
            !this.invalidation)
                return void this.log.warn({
                    msg: "acd/storage/redis.gc does not run due to invalidation is disabled"
                });
            s !== "strict" && s !== "lazy" && (s = "lazy");
            const a = {
                references: {
                    scanned: [],
                    removed: []
                },
                keys: {
                    scanned: new Set,
                    removed: new Set
                },
                loops: 0,
                cursor: 0,
                error: null
            };
            try {
                let c = 0
                  , l = 64;
                if (i.chunk && (typeof i.chunk != "number" || i.chunk < 1))
                    return a.error = new Error("chunk must be a positive integer greater than 1"),
                    a;
                if (i.lazy) {
                    if (i.lazy.chunk) {
                        if (typeof i.lazy.chunk != "number" || i.lazy.chunk < 1)
                            return a.error = new Error("lazy.chunk must be a positive integer greater than 1"),
                            a;
                        l = i.lazy.chunk
                    }
                    if (i.lazy.cursor) {
                        if (typeof i.lazy.cursor != "number" || i.lazy.cursor < 0)
                            return a.error = new Error("lazy.cursor must be a positive integer greater than 0"),
                            a;
                        c = i.lazy.cursor
                    }
                }
                const u = i.chunk || 64
                  , f = Math.min(l, u)
                  , d = c;
                let h = -1
                  , m = -1;
                do {
                    a.loops++;
                    const p = await this.store.scan(c, "match", "r:*", "count", f);
                    c = Number(p[0]),
                    h = p[1].length;
                    const S = s === "lazy" ? r(p[1], l) : p[1];
                    a.references.scanned = a.references.scanned.concat(S);
                    let k = [];
                    for (let C = 0; C < S.length; C++) {
                        const v = S[C];
                        k.push(["smembers", v])
                    }
                    const y = await this.store.pipeline(k).exec()
                      , g = {}
                      , w = {};
                    for (let C = 0; C < y.length; C++) {
                        const v = y[C]
                          , _ = S[C];
                        w[_] = v[1];
                        for (let x = 0; x < v[1].length; x++) {
                            const O = v[1][x];
                            g[O] ? g[O].push(_) : g[O] = [_],
                            a.keys.scanned.add(O)
                        }
                    }
                    const T = Object.keys(g);
                    k = T.map(C => ["exists", C]);
                    const A = await this.store.pipeline(k).exec()
                      , $ = {};
                    for (let C = 0; C < T.length; C++) {
                        const v = T[C];
                        if (A[C][1] !== 1)
                            for (let _ = 0; _ < g[v].length; _++) {
                                const x = g[v][_];
                                $[x] ? $[x].push(v) : $[x] = [v],
                                a.keys.removed.add(v)
                            }
                    }
                    const N = Object.keys($)
                      , I = [];
                    for (let C = 0; C < N.length; C++) {
                        const v = N[C];
                        w[v].length === $[v].length ? (I.push(["del", v]),
                        a.references.removed.push(v)) : I.push(["srem", v, $[v]])
                    }
                    if (await this.store.pipeline(I).exec(),
                    m = I.length,
                    s === "lazy" && a.references.scanned.length >= l)
                        break
                } while (d !== c && h > 0 && m > 0);
                a.cursor = c,
                a.keys.scanned = Array.from(a.keys.scanned),
                a.keys.removed = Array.from(a.keys.removed)
            } catch (c) {
                this.log.error({
                    msg: "acd/storage/redis.gc error",
                    err: c
                }),
                a.error = c
            }
            return a
        }
    }
}());
const Wk = qk
  , Df = "redis";
var dm = function(e, t) {
    if (!um && e === Df)
        throw new Error("Redis storage is not supported in the browser");
    return e === Df ? new fm(t) : new Wk(t)
};
const {kValues: $t, kStorage: Ff, kStorages: ao, kTransfromer: Hf, kTTL: Uf, kOnDedupe: Vf, kOnError: zf, kOnHit: Kf, kOnMiss: qf, kStale: Wf} = Pk
  , Gk = im
  , Jk = dm;
class Zk {
    constructor(t, n, r, o, s, i, a, c, l, u, f, d) {
        this.dedupes = new Map,
        this.func = t,
        this.name = n,
        this.serialize = r,
        this.references = o,
        this.storage = s,
        this.transformer = i,
        this.ttl = a,
        this.onDedupe = c,
        this.onError = l,
        this.onHit = u,
        this.onMiss = f,
        this.stale = d
    }
    getKey(t) {
        const n = this.serialize ? this.serialize(t) : t;
        return typeof n == "string" ? n : Gk(n)
    }
    getStorageKey(t) {
        return `${this.name}~${t}`
    }
    getStorageName() {
        return `${this.name}~`
    }
    add(t) {
        try {
            const n = this.getKey(t);
            let r = this.dedupes.get(n);
            return r ? this.onDedupe(n) : (r = new Yk,
            this.buildPromise(r, t, n),
            this.dedupes.set(n, r)),
            r.promise
        } catch (n) {
            this.onError(n)
        }
    }
    async wrapFunction(t, n) {
        const r = this.getStorageKey(n);
        if (this.ttl > 0 || typeof this.ttl == "function") {
            const o = await this.get(r);
            if (o !== void 0) {
                this.onHit(n);
                const s = typeof this.stale == "function" ? this.stale(o) : this.stale;
                return s > 0 && await this.storage.getTTL(r) <= s && this._wrapFunction(r, t, n).catch(Rr),
                o
            }
            this.onMiss(n)
        }
        return this._wrapFunction(r, t, n)
    }
    async _wrapFunction(t, n, r) {
        const o = await this.func(n, r)
          , s = typeof this.stale == "function" ? this.stale(o) : this.stale;
        let i = typeof this.ttl == "function" ? this.ttl(o) : this.ttl;
        if (i == null || typeof i != "number" || !Number.isInteger(i))
            return this.onError(new Error("ttl must be an integer")),
            o;
        if (i += s,
        i < 1)
            return o;
        if (!this.references)
            return await this.set(t, o, i),
            o;
        try {
            let a = this.references(n, r, o)
              , c = o;
            a && typeof a.then == "function" && (a = await a),
            this.transformer && (c = this.transformer.serialize(o)),
            await this.storage.set(t, c, i, a)
        } catch (a) {
            this.onError(a)
        }
        return o
    }
    buildPromise(t, n, r) {
        t.promise = this.wrapFunction(n, r),
        t.promise.then(o => (this.dedupes.delete(r),
        o)).catch(o => {
            this.onError(o),
            this.dedupes.delete(r);
            const s = this.storage.remove(this.getStorageKey(r));
            s && typeof s.catch == "function" && s.catch(Rr)
        }
        )
    }
    async clear(t) {
        if (t) {
            const n = this.getKey(t);
            return this.dedupes.delete(n),
            void await this.storage.remove(this.getStorageKey(n))
        }
        await this.storage.clear(this.getStorageName()),
        this.dedupes.clear()
    }
    async get(t) {
        const n = await this.storage.get(t);
        return this.transformer && n ? await this.transformer.deserialize(n) : n
    }
    async set(t, n, r, o) {
        return this.transformer && (n = this.transformer.serialize(n)),
        this.storage.set(t, n, r, o)
    }
    async invalidate(t) {
        return this.storage.invalidate(t)
    }
}
class Yk {
    constructor() {
        this.promise = null
    }
}
function Rr() {}
sm.Cache = class {
    constructor(e={}) {
        if (!e.storage)
            throw new Error("storage is required");
        if (e.ttl && typeof e.ttl == "number" && (e.ttl < 0 || !Number.isInteger(e.ttl)))
            throw new Error("ttl must be a positive integer greater than 0");
        if (e.onDedupe && typeof e.onDedupe != "function")
            throw new Error("onDedupe must be a function");
        if (e.onError && typeof e.onError != "function")
            throw new Error("onError must be a function");
        if (e.onHit && typeof e.onHit != "function")
            throw new Error("onHit must be a function");
        if (e.onMiss && typeof e.onMiss != "function")
            throw new Error("onMiss must be a function");
        if (typeof e.stale == "number" && !(Math.floor(e.stale) === e.stale && e.stale >= 0))
            throw new Error("stale must be an integer greater or equal to 0");
        this[$t] = {},
        this[Ff] = e.storage,
        this[ao] = new Map,
        this[ao].set("_default", e.storage),
        this[Hf] = e.transformer,
        this[Uf] = e.ttl || 0,
        this[Vf] = e.onDedupe || Rr,
        this[zf] = e.onError || Rr,
        this[Kf] = e.onHit || Rr,
        this[qf] = e.onMiss || Rr,
        this[Wf] = e.stale || 0
    }
    define(e, t, n) {
        if (typeof t == "function" && (n = t,
        t = {}),
        e && this[e])
            throw new Error(`${e} is already defined in the cache or it is a forbidden name`);
        if (t = t || {},
        typeof n != "function")
            throw new TypeError(`Missing the function parameter for '${e}'`);
        const r = t.serialize;
        if (r && typeof r != "function")
            throw new TypeError("serialize must be a function");
        const o = t.references;
        if (o && typeof o != "function")
            throw new TypeError("references must be a function");
        if (typeof t.ttl != "function" && t.ttl && (typeof t.ttl != "number" || t.ttl < 0 || !Number.isInteger(t.ttl)))
            throw new Error("ttl must be a positive integer greater than 0");
        let s;
        t.storage ? (s = Jk(t.storage.type, t.storage.options),
        this[ao].set(e, s)) : s = this[Ff];
        const i = t.ttl !== void 0 ? t.ttl : this[Uf]
          , a = t.stale !== void 0 ? t.stale : this[Wf]
          , c = t.onDedupe || this[Vf]
          , l = t.onError || this[zf]
          , u = t.onHit || this[Kf]
          , f = t.onMiss || this[qf]
          , d = t.transformer || this[Hf]
          , h = new Zk(n,e,r,o,s,d,i,c,l,u,f,a);
        return this[$t][e] = h,
        this[e] = h.add.bind(h),
        this
    }
    async clear(e, t) {
        if (e) {
            if (!this[$t][e])
                throw new Error(`${e} is not defined in the cache`);
            return void await this[$t][e].clear(t)
        }
        const n = [];
        for (const r of Object.values(this[$t]))
            n.push(r.clear());
        await Promise.all(n)
    }
    async get(e, t) {
        if (!this[$t][e])
            throw new Error(`${e} is not defined in the cache`);
        return this[$t][e].get(t)
    }
    async set(e, t, n, r, o) {
        if (!this[$t][e])
            throw new Error(`${e} is not defined in the cache`);
        return this[$t][e].set(t, n, r, o)
    }
    async invalidate(e, t) {
        if (!this[$t][e])
            throw new Error(`${e} is not defined in the cache`);
        return this[$t][e].invalidate(t)
    }
    async invalidateAll(e, t="_default") {
        if (!this[ao].has(t))
            throw new Error(`${t} storage is not defined in the cache`);
        await this[ao].get(t).invalidate(e)
    }
}
;
const {Cache: Gf} = sm
  , Jf = dm;
var Qk = {
    Cache: Gf,
    createCache: function(e) {
        e ? e.storage || (e.storage = {
            type: "memory"
        }) : e = {
            storage: {
                type: "memory"
            }
        };
        const t = Jf(e.storage.type, e.storage.options);
        return new Gf({
            ...e,
            storage: t
        })
    },
    createStorage: Jf
};
let ha = 0
  , Zf = []
  , Qe = []
  , Yf = (e, t) => {
    let n = []
      , r = {
        get: () => (r.lc || r.listen( () => {}
        )(),
        r.value),
        l: t || 0,
        lc: 0,
        listen: (o, s) => (r.lc = n.push(o, s || r.l) / 2,
        () => {
            let i = n.indexOf(o);
            ~i && (n.splice(i, 2),
            --r.lc || r.off())
        }
        ),
        notify(o, s) {
            let i = !Qe.length;
            for (let a = 0; a < n.length; a += 2)
                Qe.push(n[a], n[a + 1], r.value, o, s);
            if (i) {
                for (let a = 0; a < Qe.length; a += 5) {
                    let c;
                    for (let l = a + 1; !c && (l += 5) < Qe.length; )
                        Qe[l] < Qe[a + 1] && (c = Qe.push(Qe[a], Qe[a + 1], Qe[a + 2], Qe[a + 3], Qe[a + 4]));
                    c || Qe[a](Qe[a + 2], Qe[a + 3], Qe[a + 4])
                }
                Qe.length = 0
            }
        },
        off() {},
        set(o) {
            let s = r.value;
            s !== o && (r.value = o,
            r.notify(s))
        },
        subscribe(o, s) {
            let i = r.listen(o, s);
            return o(r.value),
            i
        },
        value: e
    };
    return r
}
;
const pa = typeof document > "u" ? "server" : "browser";
function Qf(e) {
    return e.withConfig({
        allowReconfigure: !1
    })
}
const Xk = e => {
    const {ssr: t=!1, tag: n="core-loader"} = e;
    if (t && e.client)
        throw new TypeError("`client` option is not allowed when `ssr: true`, use `setServerClient` from your server entry point instead");
    if (!t && e.client === !1)
        throw new TypeError("You must set `ssr: true` when `client: false` is used");
    if (!t && !e.client)
        throw new TypeError("`client` is required");
    let r = t ? void 0 : Qf(e.client);
    function o(u) {
        return Qk.createCache().define("fetch", async f => {
            if (!u)
                throw new Error("You have to set the Sanity client with `setServerClient` before any data fetching is done");
            const {query: d, params: h={}, perspective: m, useCdn: p} = JSON.parse(f)
              , {result: S, resultSourceMap: k} = await u.fetch(d, h, {
                tag: n,
                filterResponse: !1,
                perspective: m,
                useCdn: p
            });
            return {
                result: S,
                resultSourceMap: k
            }
        }
        )
    }
    function s() {
        const u = (r == null ? void 0 : r.config().perspective) || "published";
        return i.instance = o(r),
        {
            hydrate: (f, d, h) => ({
                loading: (h == null ? void 0 : h.data) === void 0 || (h == null ? void 0 : h.sourceMap) === void 0,
                error: void 0,
                data: h == null ? void 0 : h.data,
                sourceMap: h == null ? void 0 : h.sourceMap,
                perspective: u
            }),
            fetch: (f, d, h, m) => {
                if (m.signal.aborted)
                    return;
                const p = (ha += 1,
                () => {
                    if (ha -= 1,
                    ha === 0) {
                        let S = Zf;
                        Zf = [];
                        for (let k of S)
                            k()
                    }
                }
                );
                h.setKey("loading", !0),
                h.setKey("error", void 0),
                i.instance.fetch(JSON.stringify({
                    query: f,
                    params: d
                })).then(S => {
                    m.signal.aborted || (h.setKey("data", S.result),
                    h.setKey("sourceMap", S.resultSourceMap),
                    h.setKey("perspective", u))
                }
                ).catch(S => {
                    h.setKey("error", S)
                }
                ).finally( () => {
                    h.setKey("loading", !1),
                    p()
                }
                )
            }
        }
    }
    const i = {
        instance: o(r)
    }
      , a = Yf(r ? s() : void 0)
      , c = (u => {
        const {ssr: f, setFetcher: d} = u;
        return h => {
            if (pa === "server")
                throw new Error("Live mode is not supported in server environments");
            if (f && !h.client)
                throw new Error("The `client` option in `enableLiveMode` is required");
            const m = h.client || u.client || void 0
              , p = new AbortController;
            let S;
            return ye(async () => {
                const {enableLiveMode: k} = await import("./BKHG8VJz.js");
                return {
                    enableLiveMode: k
                }
            }
            , __vite__mapDeps([2, 3]), import.meta.url).then( ({enableLiveMode: k}) => {
                p.signal.aborted || (S = k({
                    ...h,
                    client: m,
                    setFetcher: d,
                    ssr: f
                }))
            }
            ),
            () => {
                p.abort(),
                S == null || S()
            }
        }
    }
    )({
        client: r || void 0,
        ssr: t,
        setFetcher: u => {
            const f = a.get();
            return a.set(u),
            () => a.set(f)
        }
    })
      , l = {
        instance: void 0,
        canPreviewDrafts: !1
    };
    return {
        createFetcherStore: (u, f={}, d) => {
            const h = a.get()
              , m = ( (T={}) => {
                let A = Yf(T);
                return A.setKey = function($, N) {
                    let I = A.value;
                    typeof N > "u" && $ in A.value ? (A.value = {
                        ...A.value
                    },
                    delete A.value[$],
                    A.notify(I, $)) : A.value[$] !== N && (A.value = {
                        ...A.value,
                        [$]: N
                    },
                    A.notify(I, $))
                }
                ,
                A
            }
            )(h ? h.hydrate(u, f, d) : {
                loading: !1,
                error: typeof (d == null ? void 0 : d.data) > "u" ? new Error("The `initial` option is required when `ssr: true`") : void 0,
                data: d == null ? void 0 : d.data,
                sourceMap: d == null ? void 0 : d.sourceMap,
                perspective: d == null ? void 0 : d.perspective
            });
            return S = () => {
                let T = new AbortController;
                const A = a.subscribe($ => {
                    !$ || T.signal.aborted || (T.abort(),
                    T = new AbortController,
                    $.fetch(u, f, m, T))
                }
                );
                return () => {
                    T.abort(),
                    A()
                }
            }
            ,
            y = T => {
                let A = S(T);
                A && p.events[6].push(A)
            }
            ,
            g = 5,
            w = T => {
                let A = p.listen;
                p.listen = (...N) => (!p.lc && !p.active && (p.active = !0,
                T()),
                A(...N));
                let $ = p.off;
                return p.events[6] = [],
                p.off = () => {
                    $(),
                    setTimeout( () => {
                        if (p.active && !p.lc) {
                            p.active = !1;
                            for (let N of p.events[6])
                                N();
                            p.events[6] = []
                        }
                    }
                    , 1e3)
                }
                ,
                () => {
                    p.listen = A,
                    p.off = $
                }
            }
            ,
            (k = p = m).events = k.events || {},
            k.events[g + 10] || (k.events[g + 10] = w(T => {
                k.events[g].reduceRight( (A, $) => ($(A),
                A), {
                    shared: {},
                    ...T
                })
            }
            )),
            k.events[g] = k.events[g] || [],
            k.events[g].push(y),
            m;
            var p, S, k, y, g, w
        }
        ,
        enableLiveMode: c,
        setServerClient: u => {
            if (pa !== "server")
                throw new Error("`setServerClient` can only be called in server environments, detected: " + JSON.stringify(pa));
            if (!t)
                throw new Error("`setServerClient` can only be called when `ssr: true`");
            l.instance = r = Qf(u),
            l.canPreviewDrafts = !!r.config().token,
            a.set(s())
        }
        ,
        unstable__cache: i,
        unstable__serverClient: l
    }
}
;
function eT(e={}) {
    const t = new AbortController;
    return ye( () => import("./DWcewO4q.js"), [], import.meta.url).then( ({renderVisualEditing: n}) => {
        const {signal: r} = t;
        r.aborted || n(r, e)
    }
    ),
    () => {
        t.abort()
    }
}
const Xf = (e, t, n) => Xk({
    tag: "nuxt-loader",
    client: !1,
    ssr: !0
})
  , ed = e => {
    const t = {
        ...e
    }
      , {visualEditing: n, ...r} = t
      , o = wl()
      , s = n && (!n.previewMode || o.enabled);
    r.stega = s && r.stega;
    let i = $f(r)
      , a = s ? Xf() : void 0;
    return {
        client: i,
        config: t,
        fetch: (...c) => i.fetch(...c),
        queryStore: a,
        setToken(c) {
            t.token = c,
            i = $f(r),
            a && n && (a = Xf())
        }
    }
}
  , wl = () => {
    const e = oi("_sanity_visualEditing", () => !1);
    return wt({
        enabled: e,
        inFrame: tT()
    })
}
  , tT = () => !!(window.self !== window.top || window.opener)
  , Cl = (e="default") => {
    var i;
    const t = Be();
    if ((i = t._sanity) != null && i[e])
        return t._sanity[e];
    t._sanity = t._sanity || {};
    const n = Ot()
      , {additionalClients: r={}, visualEditing: o, ...s} = n.public.sanity;
    return e === "default" ? (t._sanity.default = ed({
        ...s,
        visualEditing: o || void 0
    }),
    t._sanity.default) : (t._sanity[e] = ed(ss(r[e], s)),
    t._sanity[e])
}
;
function nT(e) {
    const {client: t="default"} = {};
    let n = () => {}
    ;
    {
        const r = Cl(t);
        r.queryStore && (n = r.queryStore.enableLiveMode({
            client: r.client
        }))
    }
    return lr(n),
    n
}
function rT(e={}) {
    const {zIndex: t, refresh: n} = e;
    let r = () => {}
    ;
    {
        const o = Dt();
        r = eT({
            zIndex: t,
            refresh: s => {
                function i() {
                    return s.source === "mutation" && s.livePreviewEnabled ? !1 : new Promise(a => {
                        Zp({
                            ttl: 1e3
                        }),
                        a()
                    }
                    )
                }
                return n ? n(s, i) : i()
            }
            ,
            history: {
                subscribe: s => (o.isReady().then( () => {
                    s({
                        type: "replace",
                        url: o.currentRoute.value.fullPath
                    })
                }
                ),
                o.afterEach(i => {
                    s({
                        type: "push",
                        url: i.fullPath
                    })
                }
                )),
                update: s => {
                    s.type === "push" || s.type === "replace" ? o[s.type](s.url) : s.type === "pop" && o.back()
                }
            }
        })
    }
    return lr(r),
    r
}
const oT = st( () => {
    if (!wl().enabled)
        return;
    const e = Ot()
      , {visualEditing: t} = e.public.sanity;
    ((t == null ? void 0 : t.mode) === "live-visual-editing" || (t == null ? void 0 : t.mode) === "visual-editing") && rT({
        refresh: t == null ? void 0 : t.refresh,
        zIndex: t == null ? void 0 : t.zIndex
    }),
    (t == null ? void 0 : t.mode) === "live-visual-editing" && nT()
}
);
var Lo = {}
  , hm = {}
  , Qr = {}
  , us = {}
  , sT = jt && jt.__awaiter || function(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(u) {
            try {
                l(r.next(u))
            } catch (f) {
                i(f)
            }
        }
        function c(u) {
            try {
                l(r.throw(u))
            } catch (f) {
                i(f)
            }
        }
        function l(u) {
            u.done ? s(u.value) : o(u.value).then(a, c)
        }
        l((r = r.apply(e, t || [])).next())
    }
    )
}
  , iT = jt && jt.__generator || function(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (s[0] & 1)
                throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    }, r, o, s, i;
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }
    ),
    i;
    function a(l) {
        return function(u) {
            return c([l, u])
        }
    }
    function c(l) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; i && (i = 0,
        l[0] && (n = 0)),
        n; )
            try {
                if (r = 1,
                o && (s = l[0] & 2 ? o.return : l[0] ? o.throw || ((s = o.return) && s.call(o),
                0) : o.next) && !(s = s.call(o, l[1])).done)
                    return s;
                switch (o = 0,
                s && (l = [l[0] & 2, s.value]),
                l[0]) {
                case 0:
                case 1:
                    s = l;
                    break;
                case 4:
                    return n.label++,
                    {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    n.label++,
                    o = l[1],
                    l = [0];
                    continue;
                case 7:
                    l = n.ops.pop(),
                    n.trys.pop();
                    continue;
                default:
                    if (s = n.trys,
                    !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
                        n.label = l[1];
                        break
                    }
                    if (l[0] === 6 && n.label < s[1]) {
                        n.label = s[1],
                        s = l;
                        break
                    }
                    if (s && n.label < s[2]) {
                        n.label = s[2],
                        n.ops.push(l);
                        break
                    }
                    s[2] && n.ops.pop(),
                    n.trys.pop();
                    continue
                }
                l = t.call(e, n)
            } catch (u) {
                l = [6, u],
                o = 0
            } finally {
                r = s = 0
            }
        if (l[0] & 5)
            throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}
;
Object.defineProperty(us, "__esModule", {
    value: !0
});
us.ReCaptchaInstance = void 0;
var aT = function() {
    function e(t, n, r) {
        this.siteKey = t,
        this.recaptchaID = n,
        this.recaptcha = r,
        this.styleContainer = null
    }
    return e.prototype.execute = function(t) {
        return sT(this, void 0, void 0, function() {
            var n;
            return iT(this, function(r) {
                switch (r.label) {
                case 0:
                    return this.recaptcha.enterprise ? [4, this.recaptcha.enterprise.execute(this.recaptchaID, {
                        action: t
                    })] : [3, 2];
                case 1:
                    return n = r.sent(),
                    [3, 4];
                case 2:
                    return [4, this.recaptcha.execute(this.recaptchaID, {
                        action: t
                    })];
                case 3:
                    n = r.sent(),
                    r.label = 4;
                case 4:
                    return [2, n]
                }
            })
        })
    }
    ,
    e.prototype.getSiteKey = function() {
        return this.siteKey
    }
    ,
    e.prototype.hideBadge = function() {
        this.styleContainer === null && (this.styleContainer = document.createElement("style"),
        this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}",
        document.head.appendChild(this.styleContainer))
    }
    ,
    e.prototype.showBadge = function() {
        this.styleContainer !== null && (document.head.removeChild(this.styleContainer),
        this.styleContainer = null)
    }
    ,
    e
}();
us.ReCaptchaInstance = aT;
var dc = jt && jt.__assign || function() {
    return dc = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
    ,
    dc.apply(this, arguments)
}
;
Object.defineProperty(Qr, "__esModule", {
    value: !0
});
Qr.getInstance = Qr.load = void 0;
var cT = us, vn;
(function(e) {
    e[e.NOT_LOADED = 0] = "NOT_LOADED",
    e[e.LOADING = 1] = "LOADING",
    e[e.LOADED = 2] = "LOADED"
}
)(vn || (vn = {}));
var pm = function() {
    function e() {}
    return e.load = function(t, n) {
        if (n === void 0 && (n = {}),
        typeof document > "u")
            return Promise.reject(new Error("This is a library for the browser!"));
        if (e.getLoadingState() === vn.LOADED)
            return e.instance.getSiteKey() === t ? Promise.resolve(e.instance) : Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
        if (e.getLoadingState() === vn.LOADING)
            return t !== e.instanceSiteKey ? Promise.reject(new Error("reCAPTCHA already loaded with different site key!")) : new Promise(function(o, s) {
                e.successfulLoadingConsumers.push(function(i) {
                    return o(i)
                }),
                e.errorLoadingRunnable.push(function(i) {
                    return s(i)
                })
            }
            );
        e.instanceSiteKey = t,
        e.setLoadingState(vn.LOADING);
        var r = new e;
        return new Promise(function(o, s) {
            r.loadScript(t, n.useRecaptchaNet || !1, n.useEnterprise || !1, n.renderParameters ? n.renderParameters : {}, n.customUrl).then(function() {
                e.setLoadingState(vn.LOADED);
                var i = r.doExplicitRender(grecaptcha, t, n.explicitRenderParameters ? n.explicitRenderParameters : {}, n.useEnterprise || !1)
                  , a = new cT.ReCaptchaInstance(t,i,grecaptcha);
                e.successfulLoadingConsumers.forEach(function(c) {
                    return c(a)
                }),
                e.successfulLoadingConsumers = [],
                n.autoHideBadge && a.hideBadge(),
                e.instance = a,
                o(a)
            }).catch(function(i) {
                e.errorLoadingRunnable.forEach(function(a) {
                    return a(i)
                }),
                e.errorLoadingRunnable = [],
                s(i)
            })
        }
        )
    }
    ,
    e.getInstance = function() {
        return e.instance
    }
    ,
    e.setLoadingState = function(t) {
        e.loadingState = t
    }
    ,
    e.getLoadingState = function() {
        return e.loadingState === null ? vn.NOT_LOADED : e.loadingState
    }
    ,
    e.prototype.loadScript = function(t, n, r, o, s) {
        var i = this;
        n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        o === void 0 && (o = {}),
        s === void 0 && (s = "");
        var a = document.createElement("script");
        a.setAttribute("recaptcha-v3-script", ""),
        a.setAttribute("async", ""),
        a.setAttribute("defer", "");
        var c = "https://www.google.com/recaptcha/api.js";
        n ? r ? c = "https://recaptcha.net/recaptcha/enterprise.js" : c = "https://recaptcha.net/recaptcha/api.js" : r && (c = "https://www.google.com/recaptcha/enterprise.js"),
        s && (c = s),
        o.render && (o.render = void 0);
        var l = this.buildQueryString(o);
        return a.src = c + "?render=explicit" + l,
        new Promise(function(u, f) {
            a.addEventListener("load", i.waitForScriptToLoad(function() {
                u(a)
            }, r), !1),
            a.onerror = function(d) {
                e.setLoadingState(vn.NOT_LOADED),
                f(d)
            }
            ,
            document.head.appendChild(a)
        }
        )
    }
    ,
    e.prototype.buildQueryString = function(t) {
        var n = Object.keys(t);
        return n.length < 1 ? "" : "&" + Object.keys(t).filter(function(r) {
            return !!t[r]
        }).map(function(r) {
            return r + "=" + t[r]
        }).join("&")
    }
    ,
    e.prototype.waitForScriptToLoad = function(t, n) {
        var r = this;
        return function() {
            window.grecaptcha === void 0 ? setTimeout(function() {
                r.waitForScriptToLoad(t, n)
            }, e.SCRIPT_LOAD_DELAY) : n ? window.grecaptcha.enterprise.ready(function() {
                t()
            }) : window.grecaptcha.ready(function() {
                t()
            })
        }
    }
    ,
    e.prototype.doExplicitRender = function(t, n, r, o) {
        var s = dc({
            sitekey: n
        }, r);
        return r.container ? o ? t.enterprise.render(r.container, s) : t.render(r.container, s) : o ? t.enterprise.render(s) : t.render(s)
    }
    ,
    e.loadingState = null,
    e.instance = null,
    e.instanceSiteKey = null,
    e.successfulLoadingConsumers = [],
    e.errorLoadingRunnable = [],
    e.SCRIPT_LOAD_DELAY = 25,
    e
}();
Qr.load = pm.load;
Qr.getInstance = pm.getInstance;
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.ReCaptchaInstance = e.getInstance = e.load = void 0;
    var t = Qr;
    Object.defineProperty(e, "load", {
        enumerable: !0,
        get: function() {
            return t.load
        }
    }),
    Object.defineProperty(e, "getInstance", {
        enumerable: !0,
        get: function() {
            return t.getInstance
        }
    });
    var n = us;
    Object.defineProperty(e, "ReCaptchaInstance", {
        enumerable: !0,
        get: function() {
            return n.ReCaptchaInstance
        }
    })
}
)(hm);
const lT = wS(Ub);
var gm = jt && jt.__awaiter || function(e, t, n, r) {
    function o(s) {
        return s instanceof n ? s : new n(function(i) {
            i(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, i) {
        function a(u) {
            try {
                l(r.next(u))
            } catch (f) {
                i(f)
            }
        }
        function c(u) {
            try {
                l(r.throw(u))
            } catch (f) {
                i(f)
            }
        }
        function l(u) {
            u.done ? s(u.value) : o(u.value).then(a, c)
        }
        l((r = r.apply(e, t || [])).next())
    }
    )
}
  , mm = jt && jt.__generator || function(e, t) {
    var n = {
        label: 0,
        sent: function() {
            if (s[0] & 1)
                throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    }, r, o, s, i;
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }
    ),
    i;
    function a(l) {
        return function(u) {
            return c([l, u])
        }
    }
    function c(l) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; n; )
            try {
                if (r = 1,
                o && (s = l[0] & 2 ? o.return : l[0] ? o.throw || ((s = o.return) && s.call(o),
                0) : o.next) && !(s = s.call(o, l[1])).done)
                    return s;
                switch (o = 0,
                s && (l = [l[0] & 2, s.value]),
                l[0]) {
                case 0:
                case 1:
                    s = l;
                    break;
                case 4:
                    return n.label++,
                    {
                        value: l[1],
                        done: !1
                    };
                case 5:
                    n.label++,
                    o = l[1],
                    l = [0];
                    continue;
                case 7:
                    l = n.ops.pop(),
                    n.trys.pop();
                    continue;
                default:
                    if (s = n.trys,
                    !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
                        n.label = l[1];
                        break
                    }
                    if (l[0] === 6 && n.label < s[1]) {
                        n.label = s[1],
                        s = l;
                        break
                    }
                    if (s && n.label < s[2]) {
                        n.label = s[2],
                        n.ops.push(l);
                        break
                    }
                    s[2] && n.ops.pop(),
                    n.trys.pop();
                    continue
                }
                l = t.call(e, n)
            } catch (u) {
                l = [6, u],
                o = 0
            } finally {
                r = s = 0
            }
        if (l[0] & 5)
            throw l[1];
        return {
            value: l[0] ? l[1] : void 0,
            done: !0
        }
    }
}
;
Object.defineProperty(Lo, "__esModule", {
    value: !0
});
var uT = Lo.useReCaptcha = bm = Lo.VueReCaptcha = void 0
  , fT = hm
  , hc = lT
  , ym = Symbol("VueReCaptchaInjectKey")
  , Fr = {
    loadedWaiters: [],
    error: null
}
  , bm = Lo.VueReCaptcha = {
    install: function(e, t) {
        var n = hc.ref(!1)
          , r = hc.ref(void 0);
        e.config.globalProperties.$recaptchaLoaded = td(n),
        hT(t).then(function(o) {
            n.value = !0,
            r.value = o,
            e.config.globalProperties.$recaptcha = nd(r),
            e.config.globalProperties.$recaptchaInstance = r,
            Fr.loadedWaiters.forEach(function(s) {
                return s.resolve(!0)
            })
        }).catch(function(o) {
            Fr.error = o,
            Fr.loadedWaiters.forEach(function(s) {
                return s.reject(o)
            })
        }),
        e.provide(ym, {
            instance: r,
            isLoaded: n,
            executeRecaptcha: nd(r),
            recaptchaLoaded: td(n)
        })
    }
};
function dT() {
    return hc.inject(ym)
}
uT = Lo.useReCaptcha = dT;
function hT(e) {
    return gm(this, void 0, void 0, function() {
        return mm(this, function(t) {
            switch (t.label) {
            case 0:
                return [4, fT.load(e.siteKey, e.loaderOptions)];
            case 1:
                return [2, t.sent()]
            }
        })
    })
}
function td(e) {
    return function() {
        return new Promise(function(t, n) {
            if (Fr.error !== null)
                return n(Fr.error);
            if (e.value)
                return t(!0);
            Fr.loadedWaiters.push({
                resolve: t,
                reject: n
            })
        }
        )
    }
}
function nd(e) {
    var t = this;
    return function(n) {
        return gm(t, void 0, void 0, function() {
            var r;
            return mm(this, function(o) {
                switch (o.label) {
                case 0:
                    return [4, (r = e.value) === null || r === void 0 ? void 0 : r.execute(n)];
                case 1:
                    return [2, o.sent()]
                }
            })
        })
    }
}
const pT = st(e => {
    const n = {
        siteKey: Ot().public.recaptchaSiteKey,
        loaderOptions: {
            autoHideBadge: !0,
            useRecaptchaNet: !0,
            renderParameters: {
                hl: "id"
            }
        }
    };
    e.vueApp.use(bm, n)
}
);
var vm = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(jt, function() {
        function n() {
            return n = Object.assign || function(v) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var x = arguments[_];
                    for (var O in x)
                        Object.prototype.hasOwnProperty.call(x, O) && (v[O] = x[O])
                }
                return v
            }
            ,
            n.apply(this, arguments)
        }
        function r(v, _) {
            if (v) {
                if (typeof v == "string")
                    return o(v, _);
                var x = Object.prototype.toString.call(v).slice(8, -1);
                if (x === "Object" && v.constructor && (x = v.constructor.name),
                x === "Map" || x === "Set")
                    return Array.from(v);
                if (x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))
                    return o(v, _)
            }
        }
        function o(v, _) {
            (_ == null || _ > v.length) && (_ = v.length);
            for (var x = 0, O = new Array(_); x < _; x++)
                O[x] = v[x];
            return O
        }
        function s(v, _) {
            var x = typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
            if (x)
                return (x = x.call(v)).next.bind(x);
            if (Array.isArray(v) || (x = r(v)) || _) {
                x && (v = x);
                var O = 0;
                return function() {
                    return O >= v.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: v[O++]
                    }
                }
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
        }
        var i = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
        function a(v) {
            var _ = v.split("-")
              , x = _[1]
              , O = _[2]
              , L = _[3];
            if (!x || !O || !L)
                throw new Error("Malformed asset _ref '" + v + `'. Expected an id like "` + i + '".');
            var P = O.split("x")
              , H = P[0]
              , F = P[1]
              , oe = +H
              , he = +F
              , ae = isFinite(oe) && isFinite(he);
            if (!ae)
                throw new Error("Malformed asset _ref '" + v + `'. Expected an id like "` + i + '".');
            return {
                id: x,
                width: oe,
                height: he,
                format: L
            }
        }
        var c = function(_) {
            var x = _;
            return x ? typeof x._ref == "string" : !1
        }
          , l = function(_) {
            var x = _;
            return x ? typeof x._id == "string" : !1
        }
          , u = function(_) {
            var x = _;
            return x && x.asset ? typeof x.asset.url == "string" : !1
        };
        function f(v) {
            if (!v)
                return null;
            var _;
            if (typeof v == "string" && d(v))
                _ = {
                    asset: {
                        _ref: h(v)
                    }
                };
            else if (typeof v == "string")
                _ = {
                    asset: {
                        _ref: v
                    }
                };
            else if (c(v))
                _ = {
                    asset: v
                };
            else if (l(v))
                _ = {
                    asset: {
                        _ref: v._id || ""
                    }
                };
            else if (u(v))
                _ = {
                    asset: {
                        _ref: h(v.asset.url)
                    }
                };
            else if (typeof v.asset == "object")
                _ = n({}, v);
            else
                return null;
            var x = v;
            return x.crop && (_.crop = x.crop),
            x.hotspot && (_.hotspot = x.hotspot),
            m(_)
        }
        function d(v) {
            return /^https?:\/\//.test("" + v)
        }
        function h(v) {
            var _ = v.split("/").slice(-1);
            return ("image-" + _[0]).replace(/\.([a-z]+)$/, "-$1")
        }
        function m(v) {
            if (v.crop && v.hotspot)
                return v;
            var _ = n({}, v);
            return _.crop || (_.crop = {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            }),
            _.hotspot || (_.hotspot = {
                x: .5,
                y: .5,
                height: 1,
                width: 1
            }),
            _
        }
        var p = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"]];
        function S(v) {
            var _ = n({}, v || {})
              , x = _.source;
            delete _.source;
            var O = f(x);
            if (!O)
                throw new Error("Unable to resolve image URL from source (" + JSON.stringify(x) + ")");
            var L = O.asset._ref || O.asset._id || ""
              , P = a(L)
              , H = Math.round(O.crop.left * P.width)
              , F = Math.round(O.crop.top * P.height)
              , oe = {
                left: H,
                top: F,
                width: Math.round(P.width - O.crop.right * P.width - H),
                height: Math.round(P.height - O.crop.bottom * P.height - F)
            }
              , he = O.hotspot.height * P.height / 2
              , ae = O.hotspot.width * P.width / 2
              , de = O.hotspot.x * P.width
              , Re = O.hotspot.y * P.height
              , _e = {
                left: de - ae,
                top: Re - he,
                right: de + ae,
                bottom: Re + he
            };
            return _.rect || _.focalPoint || _.ignoreImageParams || _.crop || (_ = n({}, _, y({
                crop: oe,
                hotspot: _e
            }, _))),
            k(n({}, _, {
                asset: P
            }))
        }
        function k(v) {
            var _ = (v.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, "")
              , x = v.asset.id + "-" + v.asset.width + "x" + v.asset.height + "." + v.asset.format
              , O = _ + "/images/" + v.projectId + "/" + v.dataset + "/" + x
              , L = [];
            if (v.rect) {
                var P = v.rect
                  , H = P.left
                  , F = P.top
                  , oe = P.width
                  , he = P.height
                  , ae = H !== 0 || F !== 0 || he !== v.asset.height || oe !== v.asset.width;
                ae && L.push("rect=" + H + "," + F + "," + oe + "," + he)
            }
            v.bg && L.push("bg=" + v.bg),
            v.focalPoint && (L.push("fp-x=" + v.focalPoint.x),
            L.push("fp-y=" + v.focalPoint.y));
            var de = [v.flipHorizontal && "h", v.flipVertical && "v"].filter(Boolean).join("");
            return de && L.push("flip=" + de),
            p.forEach(function(Re) {
                var _e = Re[0]
                  , Ie = Re[1];
                typeof v[_e] < "u" ? L.push(Ie + "=" + encodeURIComponent(v[_e])) : typeof v[Ie] < "u" && L.push(Ie + "=" + encodeURIComponent(v[Ie]))
            }),
            L.length === 0 ? O : O + "?" + L.join("&")
        }
        function y(v, _) {
            var x, O = _.width, L = _.height;
            if (!(O && L))
                return {
                    width: O,
                    height: L,
                    rect: v.crop
                };
            var P = v.crop
              , H = v.hotspot
              , F = O / L
              , oe = P.width / P.height;
            if (oe > F) {
                var he = Math.round(P.height)
                  , ae = Math.round(he * F)
                  , de = Math.max(0, Math.round(P.top))
                  , Re = Math.round((H.right - H.left) / 2 + H.left)
                  , _e = Math.max(0, Math.round(Re - ae / 2));
                _e < P.left ? _e = P.left : _e + ae > P.left + P.width && (_e = P.left + P.width - ae),
                x = {
                    left: _e,
                    top: de,
                    width: ae,
                    height: he
                }
            } else {
                var Ie = P.width
                  , xe = Math.round(Ie / F)
                  , B = Math.max(0, Math.round(P.left))
                  , J = Math.round((H.bottom - H.top) / 2 + H.top)
                  , z = Math.max(0, Math.round(J - xe / 2));
                z < P.top ? z = P.top : z + xe > P.top + P.height && (z = P.top + P.height - xe),
                x = {
                    left: B,
                    top: z,
                    width: Ie,
                    height: xe
                }
            }
            return {
                width: O,
                height: L,
                rect: x
            }
        }
        var g = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"]
          , w = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"]
          , T = ["format"];
        function A(v) {
            return v && "config"in v ? typeof v.config == "function" : !1
        }
        function $(v) {
            return v && "clientConfig"in v ? typeof v.clientConfig == "object" : !1
        }
        function N(v) {
            for (var _ = p, x = s(_), O; !(O = x()).done; ) {
                var L = O.value
                  , P = L[0]
                  , H = L[1];
                if (v === P || v === H)
                    return P
            }
            return v
        }
        function I(v) {
            if (A(v)) {
                var _ = v.config()
                  , x = _.apiHost
                  , O = _.projectId
                  , L = _.dataset
                  , P = x || "https://api.sanity.io";
                return new C(null,{
                    baseUrl: P.replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: O,
                    dataset: L
                })
            }
            var H = v;
            if ($(H)) {
                var F = H.clientConfig
                  , oe = F.apiHost
                  , he = F.projectId
                  , ae = F.dataset
                  , de = oe || "https://api.sanity.io";
                return new C(null,{
                    baseUrl: de.replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: he,
                    dataset: ae
                })
            }
            return new C(null,v)
        }
        var C = function() {
            function v(x, O) {
                this.options = void 0,
                this.options = x ? n({}, x.options || {}, O || {}) : n({}, O || {})
            }
            var _ = v.prototype;
            return _.withOptions = function(O) {
                var L = O.baseUrl || this.options.baseUrl
                  , P = {
                    baseUrl: L
                };
                for (var H in O)
                    if (O.hasOwnProperty(H)) {
                        var F = N(H);
                        P[F] = O[H]
                    }
                return new v(this,n({
                    baseUrl: L
                }, P))
            }
            ,
            _.image = function(O) {
                return this.withOptions({
                    source: O
                })
            }
            ,
            _.dataset = function(O) {
                return this.withOptions({
                    dataset: O
                })
            }
            ,
            _.projectId = function(O) {
                return this.withOptions({
                    projectId: O
                })
            }
            ,
            _.bg = function(O) {
                return this.withOptions({
                    bg: O
                })
            }
            ,
            _.dpr = function(O) {
                return this.withOptions(O && O !== 1 ? {
                    dpr: O
                } : {})
            }
            ,
            _.width = function(O) {
                return this.withOptions({
                    width: O
                })
            }
            ,
            _.height = function(O) {
                return this.withOptions({
                    height: O
                })
            }
            ,
            _.focalPoint = function(O, L) {
                return this.withOptions({
                    focalPoint: {
                        x: O,
                        y: L
                    }
                })
            }
            ,
            _.maxWidth = function(O) {
                return this.withOptions({
                    maxWidth: O
                })
            }
            ,
            _.minWidth = function(O) {
                return this.withOptions({
                    minWidth: O
                })
            }
            ,
            _.maxHeight = function(O) {
                return this.withOptions({
                    maxHeight: O
                })
            }
            ,
            _.minHeight = function(O) {
                return this.withOptions({
                    minHeight: O
                })
            }
            ,
            _.size = function(O, L) {
                return this.withOptions({
                    width: O,
                    height: L
                })
            }
            ,
            _.blur = function(O) {
                return this.withOptions({
                    blur: O
                })
            }
            ,
            _.sharpen = function(O) {
                return this.withOptions({
                    sharpen: O
                })
            }
            ,
            _.rect = function(O, L, P, H) {
                return this.withOptions({
                    rect: {
                        left: O,
                        top: L,
                        width: P,
                        height: H
                    }
                })
            }
            ,
            _.format = function(O) {
                return this.withOptions({
                    format: O
                })
            }
            ,
            _.invert = function(O) {
                return this.withOptions({
                    invert: O
                })
            }
            ,
            _.orientation = function(O) {
                return this.withOptions({
                    orientation: O
                })
            }
            ,
            _.quality = function(O) {
                return this.withOptions({
                    quality: O
                })
            }
            ,
            _.forceDownload = function(O) {
                return this.withOptions({
                    download: O
                })
            }
            ,
            _.flipHorizontal = function() {
                return this.withOptions({
                    flipHorizontal: !0
                })
            }
            ,
            _.flipVertical = function() {
                return this.withOptions({
                    flipVertical: !0
                })
            }
            ,
            _.ignoreImageParams = function() {
                return this.withOptions({
                    ignoreImageParams: !0
                })
            }
            ,
            _.fit = function(O) {
                if (g.indexOf(O) === -1)
                    throw new Error('Invalid fit mode "' + O + '"');
                return this.withOptions({
                    fit: O
                })
            }
            ,
            _.crop = function(O) {
                if (w.indexOf(O) === -1)
                    throw new Error('Invalid crop mode "' + O + '"');
                return this.withOptions({
                    crop: O
                })
            }
            ,
            _.saturation = function(O) {
                return this.withOptions({
                    saturation: O
                })
            }
            ,
            _.auto = function(O) {
                if (T.indexOf(O) === -1)
                    throw new Error('Invalid auto mode "' + O + '"');
                return this.withOptions({
                    auto: O
                })
            }
            ,
            _.pad = function(O) {
                return this.withOptions({
                    pad: O
                })
            }
            ,
            _.url = function() {
                return S(this.options)
            }
            ,
            _.toString = function() {
                return this.url()
            }
            ,
            v
        }();
        return I
    })
}
)(vm);
var gT = vm.exports;
const _m = ng(gT)
  , mT = st( () => {
    const e = Cl()
      , t = _m(e.client);
    function n(r) {
        return t.image(r)
    }
    return {
        provide: {
            urlFor: n
        }
    }
}
)
  , yT = [$w, Iw, Y2, oC, sC, iC, aC, cC, xC, rS, oS, bS, yE, oT, pT, mT]
  , bT = Yc("/logo-spinner.gif")
  , wr = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r,o] of t)
        n[r] = o;
    return n
}
  , vT = e => (jd("data-v-97e47816"),
e = e(),
Nd(),
e)
  , _T = {
    class: "mobile-spinner"
}
  , wT = vT( () => Y("img", {
    src: bT,
    alt: "Linkin Park Logos"
}, null, -1))
  , CT = [wT]
  , ST = {
    __name: "LogoSpinner",
    setup(e) {
        return Un( () => {
            document.body.style.overflow = "hidden"
        }
        ),
        vr( () => {
            document.body.style.overflow = "auto"
        }
        ),
        (t, n) => (G(),
        se("div", _T, CT))
    }
}
  , ET = wr(ST, [["__scopeId", "data-v-97e47816"]])
  , kT = {
    props: {
        filled: {
            type: Boolean,
            required: !1,
            default: !1
        },
        fontControlled: {
            type: Boolean,
            required: !1,
            default: !0
        },
        icon: {
            type: Object,
            required: !0
        },
        name: {
            type: String,
            required: !1
        }
    }
};
function TT(e, t, n, r, o, s) {
    return G(),
    Ke(Ri(n.icon), {
        class: rn({
            "nuxt-icon": n.fontControlled,
            "nuxt-icon--fill": !n.filled
        })
    }, null, 8, ["class"])
}
const Te = wr(kT, [["render", TT]])
  , xT = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
}
  , AT = Y("path", {
    d: "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256z"
}, null, -1)
  , RT = [AT];
function wm(e, t) {
    return G(),
    se("svg", xT, [...RT])
}
const Cm = {
    render() {
        return pe(Te, {
            icon: {
                render: wm
            },
            name: "facebook"
        })
    }
}
  , OT = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Cm,
    render: wm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , PT = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
}
  , $T = Y("path", {
    d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"
}, null, -1)
  , MT = [$T];
function Sm(e, t) {
    return G(),
    se("svg", PT, [...MT])
}
const Em = {
    render() {
        return pe(Te, {
            icon: {
                render: Sm
            },
            name: "twitter"
        })
    }
}
  , IT = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Em,
    render: Sm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , LT = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
}
  , BT = Y("path", {
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
}, null, -1)
  , jT = [BT];
function km(e, t) {
    return G(),
    se("svg", LT, [...jT])
}
const Tm = {
    render() {
        return pe(Te, {
            icon: {
                render: km
            },
            name: "instagram"
        })
    }
}
  , NT = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Tm,
    render: km
}, Symbol.toStringTag, {
    value: "Module"
}))
  , DT = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
}
  , FT = Y("path", {
    d: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6C14.9 167 14.9 256.4 14.9 256.4s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6V175.2l142.7 81.2-142.7 81.2z"
}, null, -1)
  , HT = [FT];
function xm(e, t) {
    return G(),
    se("svg", DT, [...HT])
}
const Am = {
    render() {
        return pe(Te, {
            icon: {
                render: xm
            },
            name: "youtube"
        })
    }
}
  , UT = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Am,
    render: xm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , VT = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
}
  , zT = Y("path", {
    d: "M448 209.9a210.1 210.1 0 0 1-122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3v89.9a74.6 74.6 0 1 0 52.2 71.2V0h88a121.2 121.2 0 0 0 1.9 22.2 122.2 122.2 0 0 0 53.9 80.2 121.4 121.4 0 0 0 67 20.1z"
}, null, -1)
  , KT = [zT];
function Rm(e, t) {
    return G(),
    se("svg", VT, [...KT])
}
const Om = {
    render() {
        return pe(Te, {
            icon: {
                render: Rm
            },
            name: "tiktok"
        })
    }
}
  , qT = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Om,
    render: Rm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , WT = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
}
  , GT = Y("path", {
    d: "M524.5 69.8a1.5 1.5 0 0 0-.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0-1.9.9 337.5 337.5 0 0 0-14.9 30.6 447.8 447.8 0 0 0-134.4 0 309.5 309.5 0 0 0-15.1-30.6 1.9 1.9 0 0 0-1.9-.9 483.7 483.7 0 0 0-119.8 37.1 1.7 1.7 0 0 0-.8.7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7 348.2 348.2 0 0 0 30-48.8 1.9 1.9 0 0 0-1-2.6 321.2 321.2 0 0 1-45.9-21.9 1.9 1.9 0 0 1-.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9.2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1-.2 3.1 301.4 301.4 0 0 1-45.9 21.8 1.9 1.9 0 0 0-1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1.7 486 486 0 0 0 147.2-74.1 1.9 1.9 0 0 0 .8-1.4c12.2-126.7-20.6-236.8-87-334.5zm-302 267.8c-29 0-52.8-26.6-52.8-59.2s23.4-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.3-52.8 59.3zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.3-59.3 52.8-59.3c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.3-52.8 59.3z"
}, null, -1)
  , JT = [GT];
function Pm(e, t) {
    return G(),
    se("svg", WT, [...JT])
}
const $m = {
    render() {
        return pe(Te, {
            icon: {
                render: Pm
            },
            name: "discord"
        })
    }
}
  , ZT = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: $m,
    render: Pm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , YT = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 14"
}
  , QT = Y("path", {
    fill: "currentColor",
    d: "M8.41 7 14 12.59 12.59 14 7 8.41 1.41 14 0 12.59 5.59 7 0 1.41 1.41 0 7 5.59 12.59 0 14 1.41 8.41 7Z"
}, null, -1)
  , XT = [QT];
function Mm(e, t) {
    return G(),
    se("svg", YT, [...XT])
}
const Im = {
    render() {
        return pe(Te, {
            icon: {
                render: Mm
            },
            name: "close"
        })
    }
}
  , ex = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Im,
    render: Mm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , tx = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 40 32"
}
  , nx = Y("rect", {
    width: "40",
    height: "32",
    fill: "#242628",
    rx: "16"
}, null, -1)
  , rx = Y("rect", {
    width: "32",
    height: "24",
    x: "4",
    y: "4",
    stroke: "#FAFCFE",
    "stroke-width": "2",
    rx: "12"
}, null, -1)
  , ox = Y("path", {
    fill: "#FAFCFE",
    d: "M28 11a1 1 0 0 0-1-1H13a1 1 0 1 0 0 2h14a1 1 0 0 0 1-1ZM28 21a1 1 0 0 0-1-1H13a1 1 0 1 0 0 2h14a1 1 0 0 0 1-1ZM28 16a1 1 0 0 0-1-1H13a1 1 0 1 0 0 2h14a1 1 0 0 0 1-1Z"
}, null, -1)
  , sx = [nx, rx, ox];
function Lm(e, t) {
    return G(),
    se("svg", tx, [...sx])
}
const Bm = {
    render() {
        return pe(Te, {
            icon: {
                render: Lm
            },
            name: "bars"
        })
    }
}
  , ix = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Bm,
    render: Lm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ax = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 72 72"
}
  , cx = Y("rect", {
    width: "66",
    height: "66",
    x: "3",
    y: "3",
    stroke: "#FAFCFE",
    "stroke-width": "6",
    rx: "33"
}, null, -1)
  , lx = Y("path", {
    fill: "#FAFCFE",
    "fill-rule": "evenodd",
    d: "M54.394 40.759c4.141-1.961 4.141-7.557 0-9.518L27.63 18.57c-3.735-1.77-8.13.803-8.13 4.758v25.346c0 3.955 4.395 6.527 8.13 4.758L54.394 40.76Zm-15.068-.651a4.603 4.603 0 0 0 0-8.216l-8.342-4.339c-3.177-1.652-7.013.595-7.013 4.108v8.677c0 3.514 3.836 5.761 7.013 4.108l8.342-4.338Z",
    "clip-rule": "evenodd"
}, null, -1)
  , ux = [cx, lx];
function jm(e, t) {
    return G(),
    se("svg", ax, [...ux])
}
const Nm = {
    render() {
        return pe(Te, {
            icon: {
                render: jm
            },
            name: "play"
        })
    }
}
  , fx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Nm,
    render: jm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , dx = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
}
  , hx = Y("path", {
    d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
}, null, -1)
  , px = [hx];
function Dm(e, t) {
    return G(),
    se("svg", dx, [...px])
}
const Fm = {
    render() {
        return pe(Te, {
            icon: {
                render: Dm
            },
            name: "arrow-left"
        })
    }
}
  , gx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Fm,
    render: Dm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , mx = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
}
  , yx = Y("path", {
    d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
}, null, -1)
  , bx = [yx];
function Hm(e, t) {
    return G(),
    se("svg", mx, [...bx])
}
const Um = {
    render() {
        return pe(Te, {
            icon: {
                render: Hm
            },
            name: "arrow-right"
        })
    }
}
  , vx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Um,
    render: Hm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , _x = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 168 56"
}
  , wx = Y("path", {
    fill: "#242628",
    d: "M0 0c0 13.255 10.745 24 24 24h101.714C135.813 24 144 32.187 144 42.286 144 49.86 150.14 56 157.714 56H168 0z"
}, null, -1)
  , Cx = [wx];
function Vm(e, t) {
    return G(),
    se("svg", _x, [...Cx])
}
const zm = {
    render() {
        return pe(Te, {
            icon: {
                render: Vm
            },
            name: "copyright-background"
        })
    }
}
  , Sx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: zm,
    render: Vm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ex = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 96 96"
}
  , kx = Y("path", {
    fill: "#FAFCFE",
    d: "M0 0h96C82.745 0 72 10.745 72 24v16c0 17.673-14.327 32-32 32H24C10.745 72 0 82.745 0 96V0Z"
}, null, -1)
  , Tx = [kx];
function Km(e, t) {
    return G(),
    se("svg", Ex, [...Tx])
}
const qm = {
    render() {
        return pe(Te, {
            icon: {
                render: Km
            },
            name: "logo-background"
        })
    }
}
  , xx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: qm,
    render: Km
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ax = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 448 56"
}
  , Rx = Y("path", {
    fill: "#242628",
    d: "M448 0c0 13.255-10.745 24-24 24H42.286C32.186 24 24 32.187 24 42.286 24 49.86 17.86 56 10.286 56H0h448V0Z"
}, null, -1)
  , Ox = [Rx];
function Wm(e, t) {
    return G(),
    se("svg", Ax, [...Ox])
}
const Gm = {
    render() {
        return pe(Te, {
            icon: {
                render: Wm
            },
            name: "legal-background"
        })
    }
}
  , Px = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Gm,
    render: Wm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , $x = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 464 96"
}
  , Mx = Y("path", {
    fill: "#242628",
    d: "M0 0h464v96c0-13.255-10.745-24-24-24H64c-17.673 0-32-14.327-32-32V24C32 10.745 21.255 0 8 0H0Z"
}, null, -1)
  , Ix = [Mx];
function Jm(e, t) {
    return G(),
    se("svg", $x, [...Ix])
}
const Zm = {
    render() {
        return pe(Te, {
            icon: {
                render: Jm
            },
            name: "nav-background"
        })
    }
}
  , Lx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Zm,
    render: Jm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Bx = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 70 72"
}
  , jx = Y("path", {
    fill: "#242628",
    d: "M-.001 0H70v72h-6.001c-17.673 0-32-14.327-32-32V24c0-13.255-10.745-24-24-24h-8Z"
}, null, -1)
  , Nx = [jx];
function Ym(e, t) {
    return G(),
    se("svg", Bx, [...Nx])
}
const Qm = {
    render() {
        return pe(Te, {
            icon: {
                render: Ym
            },
            name: "nav-background-start"
        })
    }
}
  , Dx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Qm,
    render: Ym
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Fx = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
}
  , Hx = Y("path", {
    fill: "#242628",
    d: "M24 24C24 10.745 13.255 0 0 0h24v24Z"
}, null, -1)
  , Ux = [Hx];
function Xm(e, t) {
    return G(),
    se("svg", Fx, [...Ux])
}
const ey = {
    render() {
        return pe(Te, {
            icon: {
                render: Xm
            },
            name: "nav-background-end"
        })
    }
}
  , Vx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ey,
    render: Xm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , zx = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 288 64"
}
  , Kx = Y("path", {
    fill: "#242628",
    d: "M0 0c0 13.255 10.745 24 24 24h217.143C253.767 24 264 34.233 264 46.857 264 56.325 271.675 64 281.143 64H288 0V0Z"
}, null, -1)
  , qx = [Kx];
function ty(e, t) {
    return G(),
    se("svg", zx, [...qx])
}
const ny = {
    render() {
        return pe(Te, {
            icon: {
                render: ty
            },
            name: "footer-background"
        })
    }
}
  , Wx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ny,
    render: ty
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Gx = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 240 32"
}
  , Jx = Y("path", {
    fill: "#242628",
    d: "M240 0c0 13.255-10.745 24-24 24H0v8h240V0Z"
}, null, -1)
  , Zx = [Jx];
function ry(e, t) {
    return G(),
    se("svg", Gx, [...Zx])
}
const oy = {
    render() {
        return pe(Te, {
            icon: {
                render: ry
            },
            name: "footer-bottom-right-corner"
        })
    }
}
  , Yx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: oy,
    render: ry
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Qx = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 76 68"
}
  , Xx = Y("path", {
    fill: "#242628",
    d: "M76 0H0h5.143C15.557 0 24 8.443 24 18.857 24 32.743 35.257 44 49.143 44h4.571C66.022 44 76 53.978 76 66.286V68 0Z"
}, null, -1)
  , eA = [Xx];
function sy(e, t) {
    return G(),
    se("svg", Qx, [...eA])
}
const iy = {
    render() {
        return pe(Te, {
            icon: {
                render: sy
            },
            name: "mobile-menu-toggle-background"
        })
    }
}
  , tA = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: iy,
    render: sy
}, Symbol.toStringTag, {
    value: "Module"
}))
  , nA = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 56 56"
}
  , rA = Y("circle", {
    cx: "28",
    cy: "28",
    r: "28",
    fill: "#FAFCFE"
}, null, -1)
  , oA = Y("path", {
    fill: "#242628",
    d: "M29.405 4.008 29.25 4h-1.57c-.499 0-.761 0-1.331.02l-.412.038c-5.684.48-11.03 3.01-15.056 7.122C6.442 15.7 4 21.668 4 27.985c0 9.374 5.51 17.95 14.065 21.859l.37.177a.37.37 0 0 1 .142.02l.326.134c.794.368 1.031.378 1.808.696l.26.079A23.951 23.951 0 0 0 27.997 52c6.29 0 12.239-2.429 16.755-6.84C49.427 40.593 52 34.495 52 27.982c0-12.707-9.932-23.24-22.595-23.974ZM42.728 42.44c-.113.116-.227.23-.343.341C38.503 46.56 33.394 48.64 28 48.64a20.67 20.67 0 0 1-5.084-.637 2.603 2.603 0 0 1-1.695-3.666l2.366-4.84a2.607 2.607 0 0 1 2.334-1.459l14.69-.015c.036 0 .071 0 .107-.002a2.602 2.602 0 0 1 2.008 4.418l.002.002ZM11.11 36.945h-.017a2.602 2.602 0 0 1-2.417-1.686 20.588 20.588 0 0 1-1.32-7.274c0-5.41 2.09-10.528 5.879-14.414a20.679 20.679 0 0 1 9.044-5.436 2.603 2.603 0 0 1 3.045 3.674L13.604 35.122c-.446 1.047-1.296 1.823-2.495 1.823Zm8.333 4.035a2.964 2.964 0 0 1-2.961 2.964 2.964 2.964 0 0 1 0-5.928 2.964 2.964 0 0 1 2.961 2.964Zm8.308-9.988 2.014-4.11a2.602 2.602 0 0 1 2.32-1.457h.016a2.6 2.6 0 0 1 2.32 1.429l2.08 4.12a2.603 2.603 0 0 1-2.324 3.777l-4.097-.01a2.595 2.595 0 0 1-2.203-1.23 2.598 2.598 0 0 1-.126-2.52Zm14.716 4.32a2.458 2.458 0 0 0-.083-.187L33.83 18.26a1.988 1.988 0 0 0-1.778-1.094c-.235 0-.462.038-.676.114a2.594 2.594 0 0 1-2.823-.735 2.6 2.6 0 0 1-.369-2.895l2.16-4.277a2.601 2.601 0 0 1 3-1.338c8.862 2.393 15.295 10.783 15.295 19.945 0 2.514-.444 4.966-1.321 7.289a2.606 2.606 0 0 1-2.412 1.684h-.02a2.601 2.601 0 0 1-2.42-1.647v.006Z"
}, null, -1)
  , sA = [rA, oA];
function ay(e, t) {
    return G(),
    se("svg", nA, [...sA])
}
const cy = {
    render() {
        return pe(Te, {
            icon: {
                render: ay
            },
            name: "header-logo"
        })
    }
}
  , iA = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: cy,
    render: ay
}, Symbol.toStringTag, {
    value: "Module"
}))
  , aA = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 40 40"
}
  , cA = Y("path", {
    fill: "#fafcfe",
    d: "m19.76 22.654 1.95-4.039a2.515 2.515 0 0 1 2.249-1.433h.015c.95 0 1.822.543 2.249 1.406l2.015 4.049c.396.793.357 1.74-.105 2.497a2.509 2.509 0 0 1-2.144 1.214l-3.972-.01c-.87 0-1.675-.458-2.134-1.207a2.588 2.588 0 0 1-.122-2.477zM8.842 35.386c-1.585 0-2.87-1.304-2.87-2.913 0-1.61 1.285-2.914 2.87-2.914 1.585 0 2.87 1.304 2.87 2.914 0 1.609-1.285 2.913-2.87 2.913zm-2.784-8.673a2.071 2.071 0 0 0-.073.168 2.521 2.521 0 0 1-2.347 1.624h-.018a2.525 2.525 0 0 1-2.342-1.658A20.515 20.515 0 0 1 0 19.699 20.338 20.338 0 0 1 5.698 5.532 19.932 19.932 0 0 1 14.46.186a2.502 2.502 0 0 1 2.638.826c.64.783.762 1.874.312 2.784zm28.216 7.195c-.11.114-.22.226-.332.335C30.18 37.954 25.229 40 20.002 40c-1.66 0-3.319-.21-4.926-.625a2.53 2.53 0 0 1-1.665-1.406c-.32-.699-.31-1.507.024-2.199l2.293-4.758a2.512 2.512 0 0 1 2.262-1.433l14.236-.015c.034 0 .069 0 .103-.002a2.517 2.517 0 0 1 2.44 1.495 2.59 2.59 0 0 1-.494 2.851zm2.11-5.39h-.02A2.522 2.522 0 0 1 34.02 26.9a2.44 2.44 0 0 0-.08-.183L25.651 10.14a1.922 1.922 0 0 0-2.377-.962 2.505 2.505 0 0 1-2.735-.721 2.592 2.592 0 0 1-.36-2.847l2.094-4.205A2.517 2.517 0 0 1 24.524 0c.217 0 .439.03.656.09C33.767 2.441 40 10.688 40 19.695c0 2.472-.43 4.882-1.28 7.166a2.52 2.52 0 0 1-2.337 1.654z"
}, null, -1)
  , lA = [cA];
function ly(e, t) {
    return G(),
    se("svg", aA, [...lA])
}
const uy = {
    render() {
        return pe(Te, {
            icon: {
                render: ly
            },
            name: "header-logo-inverse"
        })
    }
}
  , uA = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: uy,
    render: ly
}, Symbol.toStringTag, {
    value: "Module"
}))
  , fA = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 21 20"
}
  , dA = Y("path", {
    fill: "currentColor",
    d: "M10.5 0C5 0 .5 4.5.5 10s4.5 10 10 10 10-4.5 10-10-4.45-10-10-10Zm4.6 14.45c-.2.3-.55.4-.85.2-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85Zm1.2-2.75c-.25.35-.7.5-1.05.25-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95C8.5 8.25 13 8.8 16.1 10.7c.3.15.45.65.2 1Zm.1-2.8C13.2 7 7.85 6.8 4.8 7.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25Z"
}, null, -1)
  , hA = [dA];
function fy(e, t) {
    return G(),
    se("svg", fA, [...hA])
}
const dy = {
    render() {
        return pe(Te, {
            icon: {
                render: fy
            },
            name: "spotify"
        })
    }
}
  , pA = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dy,
    render: fy
}, Symbol.toStringTag, {
    value: "Module"
}))
  , gA = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 18 18"
}
  , mA = Y("path", {
    fill: "currentColor",
    d: "M17.995 4.591a6.92 6.92 0 0 0-.18-1.642c-.237-.982-.796-1.732-1.635-2.282a3.767 3.767 0 0 0-1.407-.545A7.874 7.874 0 0 0 13.6.01c-.03-.003-.063-.008-.093-.01H4.489l-.34.02c-.561.032-1.118.092-1.646.3C1.501.717.778 1.409.355 2.404a4.216 4.216 0 0 0-.272 1.057 7.957 7.957 0 0 0-.075.885c0 .024-.006.046-.008.07v9.166l.02.318c.038.612.116 1.218.373 1.78.487 1.065 1.303 1.765 2.425 2.101.316.095.643.14.97.171.417.04.833.045 1.25.045h8.273c.394 0 .787-.025 1.178-.075.616-.08 1.196-.262 1.72-.608a3.786 3.786 0 0 0 1.41-1.655c.14-.315.22-.652.278-.993a9.177 9.177 0 0 0 .103-1.53c-.002-2.85 0-5.696-.002-8.544h-.003Zm-4.817 2.993v4.284c0 .313-.043.62-.183.905-.217.442-.57.721-1.04.854a3.46 3.46 0 0 1-.803.13 1.4 1.4 0 0 1-1.323-2.041 1.41 1.41 0 0 1 .644-.627 3.2 3.2 0 0 1 .763-.243c.284-.062.569-.115.851-.18.206-.048.343-.173.383-.387a.678.678 0 0 0 .014-.145l-.001-4.082a.542.542 0 0 0-.02-.139c-.03-.112-.112-.182-.227-.176-.12.008-.239.027-.357.05-.57.112-1.14.227-1.71.342l-1.744.353-1.03.208c-.012.002-.024.007-.036.01-.208.058-.283.152-.293.367v.098c-.001 1.951 0 3.903-.002 5.853 0 .316-.035.627-.161.92-.208.48-.577.78-1.075.925-.263.075-.533.12-.807.13a1.38 1.38 0 0 1-1.44-1.159 1.4 1.4 0 0 1 .866-1.556c.268-.112.547-.174.83-.232.216-.045.432-.087.646-.133.287-.062.437-.242.45-.536v-.112l.001-6.662c0-.092.01-.187.032-.277.052-.214.205-.336.41-.388.19-.05.386-.085.58-.124.55-.113 1.1-.222 1.65-.333l1.702-.345c.503-.1 1.005-.203 1.508-.303.165-.032.331-.066.497-.079.232-.019.392.127.415.361.007.055.01.111.01.168v4.301Z"
}, null, -1)
  , yA = [mA];
function hy(e, t) {
    return G(),
    se("svg", gA, [...yA])
}
const py = {
    render() {
        return pe(Te, {
            icon: {
                render: hy
            },
            name: "apple-music"
        })
    }
}
  , bA = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: py,
    render: hy
}, Symbol.toStringTag, {
    value: "Module"
}))
  , vA = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 14 10"
}
  , _A = Y("path", {
    fill: "#242628",
    d: "M4.996 10 .333 5.26 1.5 4.075 4.996 7.63 12.5 0l1.166 1.185L4.996 10Z"
}, null, -1)
  , wA = [_A];
function gy(e, t) {
    return G(),
    se("svg", vA, [...wA])
}
const my = {
    render() {
        return pe(Te, {
            icon: {
                render: gy
            },
            name: "checkbox-check"
        })
    }
}
  , CA = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: my,
    render: gy
}, Symbol.toStringTag, {
    value: "Module"
}))
  , SA = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 12 8"
}
  , EA = Y("path", {
    fill: "#242628",
    d: "m6 7.4-6-6L1.4 0 6 4.6 10.6 0 12 1.4z"
}, null, -1)
  , kA = [EA];
function yy(e, t) {
    return G(),
    se("svg", SA, [...kA])
}
const by = {
    render() {
        return pe(Te, {
            icon: {
                render: yy
            },
            name: "chevron"
        })
    }
}
  , TA = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: by,
    render: yy
}, Symbol.toStringTag, {
    value: "Module"
}))
  , xA = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 40 32"
}
  , AA = Y("rect", {
    width: "40",
    height: "32",
    fill: "#FAFCFE",
    rx: "16"
}, null, -1)
  , RA = Y("rect", {
    width: "34",
    height: "26",
    x: "3",
    y: "3",
    fill: "#242628",
    rx: "13"
}, null, -1)
  , OA = Y("path", {
    fill: "#FAFCFE",
    d: "m21.41 16 4.885 4.885a.997.997 0 1 1-1.41 1.41L20 17.41l-4.885 4.885a.997.997 0 1 1-1.41-1.41L18.59 16l-4.885-4.885a.997.997 0 1 1 1.41-1.41L20 14.59l4.885-4.885a.997.997 0 0 1 1.41 1.41L21.41 16Z"
}, null, -1)
  , PA = [AA, RA, OA];
function vy(e, t) {
    return G(),
    se("svg", xA, [...PA])
}
const _y = {
    render() {
        return pe(Te, {
            icon: {
                render: vy
            },
            name: "menu-close"
        })
    }
}
  , $A = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: _y,
    render: vy
}, Symbol.toStringTag, {
    value: "Module"
}))
  , MA = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20"
}
  , IA = Y("circle", {
    cx: "10",
    cy: "10",
    r: "9",
    fill: "#FAFCFE"
}, null, -1)
  , LA = Y("path", {
    fill: "red",
    d: "M10 15c.283 0 .52-.096.713-.287A.968.968 0 0 0 11 14a.968.968 0 0 0-.287-.713A.968.968 0 0 0 10 13a.967.967 0 0 0-.713.287A.968.968 0 0 0 9 14c0 .283.096.52.287.713.192.191.43.287.713.287Zm-1-4h2V5H9v6Zm1 9a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 0 10c0-1.383.263-2.683.787-3.9a10.099 10.099 0 0 1 2.138-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 10 0c1.383 0 2.683.263 3.9.787a10.098 10.098 0 0 1 3.175 2.138c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 20 10a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 10 20Z"
}, null, -1)
  , BA = [IA, LA];
function wy(e, t) {
    return G(),
    se("svg", MA, [...BA])
}
const Cy = {
    render() {
        return pe(Te, {
            icon: {
                render: wy
            },
            name: "warning"
        })
    }
}
  , jA = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Cy,
    render: wy
}, Symbol.toStringTag, {
    value: "Module"
}))
  , NA = {
    class: "icon"
}
  , DA = {
    key: 1
}
  , FA = Ct({
    __name: "Icon",
    props: {
        name: String
    },
    setup(e) {
        const t = {
            facebook: Cm,
            twitter: Em,
            instagram: Tm,
            youtube: Am,
            tiktok: Om,
            discord: $m,
            close: Im,
            bars: Bm,
            play: Nm,
            arrowLeft: Fm,
            arrowRight: Um,
            copyrightBackground: zm,
            logoBackground: qm,
            legalBackground: Gm,
            navBackground: Zm,
            navBackgroundStart: Qm,
            navBackgroundEnd: ey,
            footerBackground: ny,
            footerBottomRightCorner: oy,
            mobileMenuToggleBackground: iy,
            headerLogo: cy,
            headerLogoInverse: uy,
            spotify: dy,
            "apple-music": py,
            checkboxCheck: my,
            chevron: by,
            menuClose: _y,
            warning: Cy
        };
        return (n, r) => (G(),
        se("div", NA, [t[e.name] ? (G(),
        Ke(Ri(t[e.name]), {
            key: 0
        })) : (G(),
        se("div", DA, "Icon not found"))]))
    }
})
  , Sl = wr(FA, [["__scopeId", "data-v-9c8a4edd"]])
  , HA = {
    class: "menu"
}
  , UA = ["onClick"]
  , VA = ["href"]
  , zA = ["href"]
  , KA = {
    key: 0
}
  , qA = {
    key: 0
}
  , WA = Ct({
    __name: "Menu",
    props: {
        menu: Array,
        clickToReveal: Boolean,
        showChevron: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = $e(null)
          , n = r => {
            t.value === r ? t.value = null : t.value = r
        }
        ;
        return (r, o) => {
            const s = Sl
              , i = $c("router-link");
            return G(),
            se("ul", HA, [(G(!0),
            se(He, null, va(e.menu, (a, c) => {
                var l, u;
                return G(),
                se("li", {
                    class: rn({
                        [a.customClass]: a.customClass,
                        "mobile-only": a.hideOnDesktop
                    })
                }, [((l = a.subMenu) == null ? void 0 : l.length) > 0 || a.url == "#" || !a.url ? (G(),
                se("span", {
                    key: 0,
                    onClick: () => n(c)
                }, [Y("span", null, xt(a.label), 1), e.showChevron ? (G(),
                se("div", {
                    key: 0,
                    class: rn([{
                        chevron: !0,
                        open: ce(t) === c
                    }])
                }, [fe(s, {
                    name: "chevron"
                })], 2)) : pt("", !0)], 8, UA)) : a.openInNewTab ? (G(),
                se("a", {
                    key: 1,
                    href: a.url,
                    target: "_blank"
                }, [Y("span", null, xt(a.label), 1)], 8, VA)) : (G(),
                Ke(i, {
                    key: 2,
                    to: a.url
                }, {
                    default: Ln( () => [Y("span", null, xt(a.label), 1)]),
                    _: 2
                }, 1032, ["to"])), ((u = a.subMenu) == null ? void 0 : u.length) > 0 ? (G(),
                se("ul", {
                    key: 3,
                    class: rn({
                        visible: e.clickToReveal ? ce(t) === c : !0,
                        "sub-menu": !0
                    })
                }, [(G(!0),
                se(He, null, va(a.subMenu, (f, d) => (G(),
                se("li", null, [f.openInNewTab ? (G(),
                se("a", {
                    key: 0,
                    href: f.url,
                    target: "_blank"
                }, [Y("span", null, xt(f.label), 1), f.additionalText ? (G(),
                se("span", KA, xt(f.additionalText), 1)) : pt("", !0)], 8, zA)) : (G(),
                Ke(i, {
                    key: 1,
                    to: f.url
                }, {
                    default: Ln( () => [Y("span", null, xt(f.label), 1), f.additionalText ? (G(),
                    se("span", qA, xt(f.additionalText), 1)) : pt("", !0)]),
                    _: 2
                }, 1032, ["to"]))]))), 256))], 2)) : pt("", !0)], 2)
            }
            ), 256))])
        }
    }
})
  , Sy = wr(WA, [["__scopeId", "data-v-d093f34f"]])
  , GA = ["data-open"]
  , JA = {
    class: "logo"
}
  , ZA = {
    class: "desktop-menu"
}
  , YA = {
    class: "navBackground"
}
  , QA = {
    class: "ic"
}
  , XA = {
    class: "toggle-bg"
}
  , eR = {
    key: 0,
    class: "mobile-menu"
}
  , Ey = Ct({
    __name: "SiteHeader",
    props: {
        menu: Array,
        title: String,
        logo: Object,
        socialLinks: Array
    },
    setup(e) {
        const t = $e(!1)
          , n = Mi()
          , r = () => {
            t.value ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden",
            t.value = !t.value
        }
        ;
        return Lt( () => n.path, () => {
            t.value = !1
        }
        ),
        $e(null),
        (o, s) => {
            const i = Sl
              , a = $c("router-link")
              , c = Sy;
            return G(),
            se("header", {
                class: "header",
                "data-open": t.value
            }, [Y("nav", null, [Y("div", JA, [fe(a, {
                to: "/",
                "aria-label": "Linkin Park Logo"
            }, {
                default: Ln( () => [fe(i, {
                    name: "headerLogo"
                }), fe(i, {
                    name: "headerLogoInverse"
                })]),
                _: 1
            }), fe(i, {
                name: "logoBackground"
            })]), Y("div", ZA, [fe(c, {
                menu: e.menu
            }, null, 8, ["menu"]), Y("div", YA, [fe(i, {
                name: "navBackgroundStart"
            }), fe(i, {
                name: "navBackgroundEnd"
            })])]), Y("button", {
                class: "menu-toggle",
                onClick: r,
                "aria-label": "Menu Toggle"
            }, [Y("div", QA, [fe(i, {
                name: `${t.value ? "menuClose" : "bars"}`
            }, null, 8, ["name"])]), Y("div", XA, [fe(i, {
                name: "mobileMenuToggleBackground"
            })])])]), fe(os, {
                name: "slide-top"
            }, {
                default: Ln( () => [t.value ? (G(),
                se("div", eR, [Y("div", null, [fe(c, {
                    menu: e.menu,
                    "click-to-reveal": !0,
                    "show-chevron": !0
                }, null, 8, ["menu"])])])) : pt("", !0)]),
                _: 1
            })], 8, GA)
        }
    }
})
  , tR = Ct({
    props: {
        vnode: {
            type: Object,
            required: !0
        },
        route: {
            type: Object,
            required: !0
        },
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean
    },
    setup(e) {
        const t = e.renderKey
          , n = e.route
          , r = {};
        for (const o in e.route)
            Object.defineProperty(r, o, {
                get: () => t === e.renderKey ? e.route[o] : n[o]
            });
        return sr($i, qt(r)),
        () => pe(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , nR = Ct({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        const o = Be()
          , s = $e()
          , i = rt($i, null);
        let a;
        r({
            pageRef: s
        });
        const c = rt(R_, null);
        let l;
        const u = o.deferHydration();
        if (o.isHydrating) {
            const f = o.hooks.hookOnce("app:error", u);
            Dt().beforeEach(f)
        }
        return e.pageKey && Lt( () => e.pageKey, (f, d) => {
            f !== d && o.callHook("page:loading:start")
        }
        ),
        () => pe(Gp, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: f => {
                const d = oR(i, f.route, f.Component)
                  , h = i && i.matched.length === f.route.matched.length;
                if (!f.Component) {
                    if (l && !h)
                        return l;
                    u();
                    return
                }
                if (l && c && !c.isCurrent(f.route))
                    return l;
                if (d && i && (!c || c != null && c.isCurrent(i)))
                    return h ? l : null;
                const m = Xa(f, e.pageKey);
                !o.isHydrating && !sR(i, f.route, f.Component) && a === m && o.callHook("page:loading:end"),
                a = m;
                const p = !!(e.transition ?? f.route.meta.pageTransition ?? Ha)
                  , S = p && rR([e.transition, f.route.meta.pageTransition, Ha, {
                    onAfterLeave: () => {
                        o.callHook("page:transition:finish", f.Component)
                    }
                }].filter(Boolean))
                  , k = e.keepalive ?? f.route.meta.keepalive ?? Wv;
                return l = V2(os, p && S, D2(k, pe(Hc, {
                    suspensible: !0,
                    onPending: () => o.callHook("page:start", f.Component),
                    onResolve: () => {
                        Hn( () => o.callHook("page:finish", f.Component).then( () => o.callHook("page:loading:end")).finally(u))
                    }
                }, {
                    default: () => {
                        const y = pe(tR, {
                            key: m || void 0,
                            vnode: n.default ? pe(He, void 0, n.default(f)) : f.Component,
                            route: f.route,
                            renderKey: m || void 0,
                            trackRootNodes: p,
                            vnodeRef: s
                        });
                        return k && (y.type.name = f.Component.type.name || f.Component.type.__name || "RouteProvider"),
                        y
                    }
                }))).default(),
                l
            }
        })
    }
});
function rR(e) {
    const t = e.map(n => ({
        ...n,
        onAfterLeave: n.onAfterLeave ? sl(n.onAfterLeave) : void 0
    }));
    return ss(...t)
}
function oR(e, t, n) {
    if (!e)
        return !1;
    const r = t.matched.findIndex(o => {
        var s;
        return ((s = o.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
    }
    );
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some( (o, s) => {
        var i, a, c;
        return ((i = o.components) == null ? void 0 : i.default) !== ((c = (a = e.matched[s]) == null ? void 0 : a.components) == null ? void 0 : c.default)
    }
    ) || n && Xa({
        route: t,
        Component: n
    }) !== Xa({
        route: e,
        Component: n
    })
}
function sR(e, t, n) {
    return e ? t.matched.findIndex(o => {
        var s;
        return ((s = o.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
const iR = {
    class: "inner"
}
  , aR = {
    class: "copyright"
}
  , cR = {
    class: "legal"
}
  , lR = {
    class: "mobile-bg"
}
  , uR = {
    class: "left"
}
  , fR = {
    class: "right"
}
  , dR = Ct({
    __name: "SiteFooter",
    props: {
        menu: Array,
        copyrightText: String,
        logo: Object,
        socialLinks: Array
    },
    setup(e) {
        var r;
        const n = (r = e.copyrightText) == null ? void 0 : r.replace("{year}", new Date().getFullYear());
        return (o, s) => {
            const i = Sl
              , a = Sy;
            return G(),
            se("footer", null, [Y("div", iR, [Y("div", aR, [Y("span", null, "© " + xt(ce(n)), 1), fe(i, {
                name: "copyrightBackground"
            })]), Y("div", cR, [fe(a, {
                menu: [{
                    hideOnDesktop: !0,
                    label: `© ${ce(n)}`
                }, ...e.menu]
            }, null, 8, ["menu"]), fe(i, {
                name: "legalBackground"
            })]), Y("div", lR, [Y("div", uR, [fe(i, {
                name: "footerBackground"
            })]), Y("div", fR, [fe(i, {
                name: "footerBottomRightCorner"
            })])])])])
        }
    }
})
  , ky = wr(dR, [["__scopeId", "data-v-c230bb04"]])
  , hR = {}
  , pR = {
    class: "frame"
};
function gR(e, t) {
    return G(),
    se("div", pR)
}
const Ty = wr(hR, [["render", gR], ["__scopeId", "data-v-34d53c0f"]])
  , mR = String.raw || ( (e, ...t) => {
    const n = e.length - 1;
    return e.slice(0, n).reduce( (r, o, s) => r + o + t[s], "") + e[n]
}
)
  , BR = e => {
    let t = 0;
    return e.forEach(n => {
        t += n.tracks.length
    }
    ),
    t
}
  , jR = e => {
    let t = e.duration;
    if (e != null && e.duration)
        return e.duration.startsWith("00:") && (t = e.duration.slice(3, e.duration.length)),
        t.length === 2 && (t = `00:${t}`),
        t
}
  , NR = e => {
    let t = 0;
    e.forEach(o => {
        o.tracks.forEach(s => {
            var a;
            const i = (a = s.duration) == null ? void 0 : a.split(":");
            if (i) {
                if (i.length === 1) {
                    t += parseInt(i[0]);
                    return
                }
                if (i.length === 2) {
                    t += parseInt(i[0]) * 60 + parseInt(i[1]);
                    return
                }
                t += parseInt(i[1]) * 60 + parseInt(i[2])
            }
        }
        )
    }
    );
    const n = Math.floor(t / 3600)
      , r = Math.floor(t % 3600 / 60);
    return n === 0 ? `${r} MIN` : `${n} HR ${r} MIN`
}
  , DR = e => e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase()
  , FR = e => {
    var t;
    return (t = Object.entries(e).find( ([n,r]) => r === !0)[0]) == null ? void 0 : t.replace("And", " &").replace(/([A-Z])/g, " $1").replace(/^./, n => n.toUpperCase())
}
  , HR = (e, t=!0) => {
    const [n,r,o] = e.split("-");
    return `${o} ${(i => {
        switch (i) {
        case "01":
            return "Jan";
        case "02":
            return "Feb";
        case "03":
            return "Mar";
        case "04":
            return "Apr";
        case "05":
            return "May";
        case "06":
            return "Jun";
        case "07":
            return "Jul";
        case "08":
            return "Aug";
        case "09":
            return "Sep";
        case "10":
            return "Oct";
        case "11":
            return "Nov";
        case "12":
            return "Dec"
        }
    }
    )(r)} ${n}`
}
;
function yR(e) {
    const t = Cl();
    return _m(t.client).image(e)
}
const UR = [{
    name: "United States of America",
    telCode: "+1",
    code: "US"
}, {
    name: "Afghanistan",
    telCode: "+93",
    code: "AF"
}, {
    name: "Albania",
    telCode: "+355",
    code: "AL"
}, {
    name: "Algeria",
    telCode: "+213",
    code: "DZ"
}, {
    name: "American Samoa",
    telCode: "+1684",
    code: "AS"
}, {
    name: "Andorra",
    telCode: "+376",
    code: "AD"
}, {
    name: "Angola",
    telCode: "+244",
    code: "AO"
}, {
    name: "Anguilla",
    telCode: "+1264",
    code: "AI"
}, {
    name: "Antarctica",
    telCode: "+672",
    code: "AQ"
}, {
    name: "Antigua & Barbuda",
    telCode: "+1268",
    code: "AG"
}, {
    name: "Argentina",
    telCode: "+54",
    code: "AR"
}, {
    name: "Armenia",
    telCode: "+374",
    code: "AM"
}, {
    name: "Aruba",
    telCode: "+297",
    code: "AW"
}, {
    name: "Australia",
    telCode: "+61",
    code: "AU"
}, {
    name: "Austria",
    telCode: "+43",
    code: "AT"
}, {
    name: "Azerbaijan",
    telCode: "+994",
    code: "AZ"
}, {
    name: "Bahamas",
    telCode: "+1242",
    code: "BS"
}, {
    name: "Bahrain",
    telCode: "+973",
    code: "BH"
}, {
    name: "Bangladesh",
    telCode: "+880",
    code: "BD"
}, {
    name: "Barbados",
    telCode: "+1246",
    code: "BB"
}, {
    name: "Belarus",
    telCode: "+375",
    code: "BY"
}, {
    name: "Belgium",
    telCode: "+32",
    code: "BE"
}, {
    name: "Belize",
    telCode: "+501",
    code: "BZ"
}, {
    name: "Benin",
    telCode: "+229",
    code: "BJ"
}, {
    name: "Bermuda",
    telCode: "+1441",
    code: "BM"
}, {
    name: "Bhutan",
    telCode: "+975",
    code: "BT"
}, {
    name: "Bolivia",
    telCode: "+591",
    code: "BO"
}, {
    name: "Bosnia & Herzegovina",
    telCode: "+387",
    code: "BA"
}, {
    name: "Botswana",
    telCode: "+267",
    code: "BW"
}, {
    name: "Brazil",
    telCode: "+55",
    code: "BR"
}, {
    name: "British Indian Ocean Territory",
    telCode: "+246",
    code: "IO"
}, {
    name: "Brunei",
    telCode: "+673",
    code: "BN"
}, {
    name: "Bulgaria",
    telCode: "+359",
    code: "BG"
}, {
    name: "Burkina Faso",
    telCode: "+226",
    code: "BF"
}, {
    name: "Burundi",
    telCode: "+257",
    code: "BI"
}, {
    name: "Cambodia",
    telCode: "+855",
    code: "KH"
}, {
    name: "Cameroon",
    telCode: "+237",
    code: "CM"
}, {
    name: "Canada",
    telCode: "+1",
    code: "CA"
}, {
    name: "Cape Verde",
    telCode: "+238",
    code: "CV"
}, {
    name: "Cayman Islands",
    telCode: "+ 345",
    code: "KY"
}, {
    name: "Central African Republic",
    telCode: "+236",
    code: "CF"
}, {
    name: "Chad",
    telCode: "+235",
    code: "TD"
}, {
    name: "Chile",
    telCode: "+56",
    code: "CL"
}, {
    name: "China",
    telCode: "+86",
    code: "CN"
}, {
    name: "Christmas Island",
    telCode: "+61",
    code: "CX"
}, {
    name: "Cocos Island",
    telCode: "+61",
    code: "CC"
}, {
    name: "Colombia",
    telCode: "+57",
    code: "CO"
}, {
    name: "Comoros",
    telCode: "+269",
    code: "KM"
}, {
    name: "Congo",
    telCode: "+242",
    code: "CG"
}, {
    name: "Congo Democratic Rep",
    telCode: "+243",
    code: "CD"
}, {
    name: "Cook Islands",
    telCode: "+682",
    code: "CK"
}, {
    name: "Costa Rica",
    telCode: "+506",
    code: "CR"
}, {
    name: "Cote D'Ivoire",
    telCode: "+225",
    code: "CI"
}, {
    name: "Croatia",
    telCode: "+385",
    code: "HR"
}, {
    name: "Cuba",
    telCode: "+53",
    code: "CU"
}, {
    name: "Cyprus",
    telCode: "+357",
    code: "CY"
}, {
    name: "Czech Republic",
    telCode: "+420",
    code: "CZ"
}, {
    name: "Denmark",
    telCode: "+45",
    code: "DK"
}, {
    name: "Djibouti",
    telCode: "+253",
    code: "DJ"
}, {
    name: "Dominica",
    telCode: "+1767",
    code: "DM"
}, {
    name: "Dominican Republic",
    telCode: "+1849",
    code: "DO"
}, {
    name: "Ecuador",
    telCode: "+593",
    code: "EC"
}, {
    name: "Egypt",
    telCode: "+20",
    code: "EG"
}, {
    name: "El Salvador",
    telCode: "+503",
    code: "SV"
}, {
    name: "Equatorial Guinea",
    telCode: "+240",
    code: "GQ"
}, {
    name: "Eritrea",
    telCode: "+291",
    code: "ER"
}, {
    name: "Estonia",
    telCode: "+372",
    code: "EE"
}, {
    name: "Ethiopia",
    telCode: "+251",
    code: "ET"
}, {
    name: "Falkland Islands",
    telCode: "+500",
    code: "FK"
}, {
    name: "Faroe Islands",
    telCode: "+298",
    code: "FO"
}, {
    name: "Fiji",
    telCode: "+679",
    code: "FJ"
}, {
    name: "Finland",
    telCode: "+358",
    code: "FI"
}, {
    name: "France",
    telCode: "+33",
    code: "FR"
}, {
    name: "French Guiana",
    telCode: "+594",
    code: "GF"
}, {
    name: "French Polynesia",
    telCode: "+689",
    code: "PF"
}, {
    name: "Gabon",
    telCode: "+241",
    code: "GA"
}, {
    name: "Gambia",
    telCode: "+220",
    code: "GM"
}, {
    name: "Georgia",
    telCode: "+995",
    code: "GE"
}, {
    name: "Germany",
    telCode: "+49",
    code: "DE"
}, {
    name: "Ghana",
    telCode: "+233",
    code: "GH"
}, {
    name: "Gibraltar",
    telCode: "+350",
    code: "GI"
}, {
    name: "Greece",
    telCode: "+30",
    code: "GR"
}, {
    name: "Greenland",
    telCode: "+299",
    code: "GL"
}, {
    name: "Grenada",
    telCode: "+1473",
    code: "GD"
}, {
    name: "Guadeloupe",
    telCode: "+590",
    code: "GP"
}, {
    name: "Guam",
    telCode: "+1671",
    code: "GU"
}, {
    name: "Guatemala",
    telCode: "+502",
    code: "GT"
}, {
    name: "Guernsey",
    telCode: "+44",
    code: "GG"
}, {
    name: "Guinea",
    telCode: "+224",
    code: "GN"
}, {
    name: "Guinea-Bissau",
    telCode: "+245",
    code: "GW"
}, {
    name: "Guyana",
    telCode: "+595",
    code: "GY"
}, {
    name: "Haiti",
    telCode: "+509",
    code: "HT"
}, {
    name: "Honduras",
    telCode: "+504",
    code: "HN"
}, {
    name: "Hong Kong",
    telCode: "+852",
    code: "HK"
}, {
    name: "Hungary",
    telCode: "+36",
    code: "HU"
}, {
    name: "Iceland",
    telCode: "+354",
    code: "IS"
}, {
    name: "India",
    telCode: "+91",
    code: "IN"
}, {
    name: "Indonesia",
    telCode: "+62",
    code: "ID"
}, {
    name: "Iran",
    telCode: "+98",
    code: "IR"
}, {
    name: "Iraq",
    telCode: "+964",
    code: "IQ"
}, {
    name: "Ireland",
    telCode: "+353",
    code: "IE"
}, {
    name: "Isle of Man",
    telCode: "+44",
    code: "IM"
}, {
    name: "Israel",
    telCode: "+972",
    code: "IL"
}, {
    name: "Italy",
    telCode: "+39",
    code: "IT"
}, {
    name: "Jamaica",
    telCode: "+1876",
    code: "JM"
}, {
    name: "Japan",
    telCode: "+81",
    code: "JP"
}, {
    name: "Jersey",
    telCode: "+44",
    code: "JE"
}, {
    name: "Jordan",
    telCode: "+962",
    code: "JO"
}, {
    name: "Kazakhstan",
    telCode: "+77",
    code: "KZ"
}, {
    name: "Kenya",
    telCode: "+254",
    code: "KE"
}, {
    name: "Kiribati",
    telCode: "+686",
    code: "KI"
}, {
    name: "Korea, Democratic People's Republic of Korea",
    telCode: "+850",
    code: "KP"
}, {
    name: "Korea, Republic of South Korea",
    telCode: "+82",
    code: "KR"
}, {
    name: "Kuwait",
    telCode: "+965",
    code: "KW"
}, {
    name: "Kyrgyzstan",
    telCode: "+996",
    code: "KG"
}, {
    name: "Laos",
    telCode: "+856",
    code: "LA"
}, {
    name: "Latvia",
    telCode: "+371",
    code: "LV"
}, {
    name: "Lebanon",
    telCode: "+961",
    code: "LB"
}, {
    name: "Lesotho",
    telCode: "+266",
    code: "LS"
}, {
    name: "Liberia",
    telCode: "+231",
    code: "LR"
}, {
    name: "Libya",
    telCode: "+218",
    code: "LY"
}, {
    name: "Liechtenstein",
    telCode: "+423",
    code: "LI"
}, {
    name: "Lithuania",
    telCode: "+370",
    code: "LT"
}, {
    name: "Luxembourg",
    telCode: "+352",
    code: "LU"
}, {
    name: "Macao",
    telCode: "+853",
    code: "MO"
}, {
    name: "Macedonia",
    telCode: "+389",
    code: "MK"
}, {
    name: "Madagascar",
    telCode: "+261",
    code: "MG"
}, {
    name: "Malawi",
    telCode: "+265",
    code: "MW"
}, {
    name: "Malaysia",
    telCode: "+60",
    code: "MY"
}, {
    name: "Maldives",
    telCode: "+960",
    code: "MV"
}, {
    name: "Mali",
    telCode: "+223",
    code: "ML"
}, {
    name: "Malta",
    telCode: "+356",
    code: "MT"
}, {
    name: "Marshall Islands",
    telCode: "+692",
    code: "MH"
}, {
    name: "Martinique",
    telCode: "+596",
    code: "MQ"
}, {
    name: "Mauritania",
    telCode: "+222",
    code: "MR"
}, {
    name: "Mauritius",
    telCode: "+230",
    code: "MU"
}, {
    name: "Mayotte",
    telCode: "+262",
    code: "YT"
}, {
    name: "Mexico",
    telCode: "+52",
    code: "MX"
}, {
    name: "Micronesia, Federated States of Micronesia",
    telCode: "+691",
    code: "FM"
}, {
    name: "Moldova",
    telCode: "+373",
    code: "MD"
}, {
    name: "Monaco",
    telCode: "+377",
    code: "MC"
}, {
    name: "Mongolia",
    telCode: "+976",
    code: "MN"
}, {
    name: "Montenegro",
    telCode: "+382",
    code: "ME"
}, {
    name: "Montserrat",
    telCode: "+1664",
    code: "MS"
}, {
    name: "Morocco",
    telCode: "+212",
    code: "MA"
}, {
    name: "Mozambique",
    telCode: "+258",
    code: "MZ"
}, {
    name: "Myanmar",
    telCode: "+95",
    code: "MM"
}, {
    name: "Namibia",
    telCode: "+264",
    code: "NA"
}, {
    name: "Nauru",
    telCode: "+674",
    code: "NR"
}, {
    name: "Nepal",
    telCode: "+977",
    code: "NP"
}, {
    name: "Netherlands",
    telCode: "+31",
    code: "NL"
}, {
    name: "Netherlands Antilles",
    telCode: "+599",
    code: "AN"
}, {
    name: "New Caledonia",
    telCode: "+687",
    code: "NC"
}, {
    name: "New Zealand",
    telCode: "+64",
    code: "NZ"
}, {
    name: "Nicaragua",
    telCode: "+505",
    code: "NI"
}, {
    name: "Niger",
    telCode: "+227",
    code: "NE"
}, {
    name: "Nigeria",
    telCode: "+234",
    code: "NG"
}, {
    name: "Niue",
    telCode: "+683",
    code: "NU"
}, {
    name: "Norfolk Island",
    telCode: "+672",
    code: "NF"
}, {
    name: "Northern Mariana Islands",
    telCode: "+1670",
    code: "MP"
}, {
    name: "Norway",
    telCode: "+47",
    code: "NO"
}, {
    name: "Oman",
    telCode: "+968",
    code: "OM"
}, {
    name: "Pakistan",
    telCode: "+92",
    code: "PK"
}, {
    name: "Palau Island",
    telCode: "+680",
    code: "PW"
}, {
    name: "Palestinian",
    telCode: "+970",
    code: "PS"
}, {
    name: "Panama",
    telCode: "+507",
    code: "PA"
}, {
    name: "Papua New Guinea",
    telCode: "+675",
    code: "PG"
}, {
    name: "Paraguay",
    telCode: "+595",
    code: "PY"
}, {
    name: "Peru",
    telCode: "+51",
    code: "PE"
}, {
    name: "Philippines",
    telCode: "+63",
    code: "PH"
}, {
    name: "Pitcairn Island",
    telCode: "+872",
    code: "PN"
}, {
    name: "Poland",
    telCode: "+48",
    code: "PL"
}, {
    name: "Portugal",
    telCode: "+351",
    code: "PT"
}, {
    name: "Puerto Rico",
    telCode: "+1939",
    code: "PR"
}, {
    name: "Qatar",
    telCode: "+974",
    code: "QA"
}, {
    name: "Romania",
    telCode: "+40",
    code: "RO"
}, {
    name: "Russia",
    telCode: "+7",
    code: "RU"
}, {
    name: "Rwanda",
    telCode: "+250",
    code: "RW"
}, {
    name: "Reunion",
    telCode: "+262",
    code: "RE"
}, {
    name: "St Barthelemy",
    telCode: "+590",
    code: "BL"
}, {
    name: "St Helena",
    telCode: "+290",
    code: "SH"
}, {
    name: "St Kitts and Nevis",
    telCode: "+1869",
    code: "KN"
}, {
    name: "St Lucia",
    telCode: "+1758",
    code: "LC"
}, {
    name: "St Martin",
    telCode: "+590",
    code: "MF"
}, {
    name: "St Pierre and Miquelon",
    telCode: "+508",
    code: "PM"
}, {
    name: "St Vincent and the Grenadines",
    telCode: "+1784",
    code: "VC"
}, {
    name: "Samoa",
    telCode: "+685",
    code: "WS"
}, {
    name: "San Marino",
    telCode: "+378",
    code: "SM"
}, {
    name: "Sao Tome and Principe",
    telCode: "+239",
    code: "ST"
}, {
    name: "Saudi Arabia",
    telCode: "+966",
    code: "SA"
}, {
    name: "Senegal",
    telCode: "+221",
    code: "SN"
}, {
    name: "Serbia",
    telCode: "+381",
    code: "RS"
}, {
    name: "Seychelles",
    telCode: "+248",
    code: "SC"
}, {
    name: "Sierra Leone",
    telCode: "+232",
    code: "SL"
}, {
    name: "Singapore",
    telCode: "+65",
    code: "SG"
}, {
    name: "Slovakia",
    telCode: "+421",
    code: "SK"
}, {
    name: "Slovenia",
    telCode: "+386",
    code: "SI"
}, {
    name: "Solomon Islands",
    telCode: "+677",
    code: "SB"
}, {
    name: "Somalia",
    telCode: "+252",
    code: "SO"
}, {
    name: "South Africa",
    telCode: "+27",
    code: "ZA"
}, {
    name: "South Sudan",
    telCode: "+211",
    code: "SS"
}, {
    name: "South Georgia and the South Sandwich Islands",
    telCode: "+500",
    code: "GS"
}, {
    name: "Spain",
    telCode: "+34",
    code: "ES"
}, {
    name: "Sri Lanka",
    telCode: "+94",
    code: "LK"
}, {
    name: "Sudan",
    telCode: "+249",
    code: "SD"
}, {
    name: "Suriname",
    telCode: "+597",
    code: "SR"
}, {
    name: "Svalbard",
    telCode: "+47",
    code: "SJ"
}, {
    name: "Swaziland",
    telCode: "+268",
    code: "SZ"
}, {
    name: "Sweden",
    telCode: "+46",
    code: "SE"
}, {
    name: "Switzerland",
    telCode: "+41",
    code: "CH"
}, {
    name: "Syria",
    telCode: "+963",
    code: "SY"
}, {
    name: "Taiwan",
    telCode: "+886",
    code: "TW"
}, {
    name: "Tajikistan",
    telCode: "+992",
    code: "TJ"
}, {
    name: "Tanzania, United Republic of Tanzania",
    telCode: "+255",
    code: "TZ"
}, {
    name: "Thailand",
    telCode: "+66",
    code: "TH"
}, {
    name: "Timor-Leste",
    telCode: "+670",
    code: "TL"
}, {
    name: "Togo",
    telCode: "+228",
    code: "TG"
}, {
    name: "Tokelau",
    telCode: "+690",
    code: "TK"
}, {
    name: "Tonga",
    telCode: "+676",
    code: "TO"
}, {
    name: "Trinidad & Tobago",
    telCode: "+1868",
    code: "TT"
}, {
    name: "Tunisia",
    telCode: "+216",
    code: "TN"
}, {
    name: "Turkey",
    telCode: "+90",
    code: "TR"
}, {
    name: "Turkmenistan",
    telCode: "+993",
    code: "TM"
}, {
    name: "Turks & Caicos Is",
    telCode: "+1649",
    code: "TC"
}, {
    name: "Tuvalu",
    telCode: "+688",
    code: "TV"
}, {
    name: "Uganda",
    telCode: "+256",
    code: "UG"
}, {
    name: "Ukraine",
    telCode: "+380",
    code: "UA"
}, {
    name: "United Arab Emirates",
    telCode: "+971",
    code: "AE"
}, {
    name: "United Kingdom",
    telCode: "+44",
    code: "GB"
}, {
    name: "Uruguay",
    telCode: "+598",
    code: "UY"
}, {
    name: "Uzbekistan",
    telCode: "+998",
    code: "UZ"
}, {
    name: "Vanuatu",
    telCode: "+678",
    code: "VU"
}, {
    name: "Vatican City State",
    telCode: "+379",
    code: "VA"
}, {
    name: "Venezuela",
    telCode: "+58",
    code: "VE"
}, {
    name: "Vietnam",
    telCode: "+84",
    code: "VN"
}, {
    name: "Virgin Islands (British)",
    telCode: "+1284",
    code: "VG"
}, {
    name: "Virgin Islands (USA)",
    telCode: "+1340",
    code: "VI"
}, {
    name: "Wallis & Futuna Is",
    telCode: "+681",
    code: "WF"
}, {
    name: "Yemen",
    telCode: "+967",
    code: "YE"
}, {
    name: "Zambia",
    telCode: "+260",
    code: "ZM"
}, {
    name: "Zimbabwe",
    telCode: "+263",
    code: "ZW"
}]
  , bR = {
    class: "app"
}
  , vR = {
    class: "main"
}
  , _R = Y("span", {
    class: "scroll-indicator"
}, null, -1)
  , wR = Ct({
    __name: "app",
    setup(e) {
        var u, f, d, h, m, p, S, k, y, g, w;
        mR`*[ _type == "siteSettings"][0]`;
        const {data: t, status: n, error: r} = Jp("/api/content/site", "$siNM9WAguS");
        Mi(),
        wl();
        const o = Ot()
          , s = $e(!((u = o == null ? void 0 : o.public) != null && u.bypassCache));
        oi("site", () => t);
        const i = oi("activeModal", () => null)
          , a = $e(((d = (f = t == null ? void 0 : t.value) == null ? void 0 : f.seoContent) == null ? void 0 : d.seoTitle) || ((h = t == null ? void 0 : t.value) == null ? void 0 : h.title))
          , c = $e(((p = (m = t == null ? void 0 : t.value) == null ? void 0 : m.seoContent) == null ? void 0 : p.seoDescription) || ((S = t == null ? void 0 : t.value) == null ? void 0 : S.description))
          , l = $e(((y = (k = t == null ? void 0 : t.value) == null ? void 0 : k.seoContent) == null ? void 0 : y.shareCard) && yR((w = (g = t == null ? void 0 : t.value) == null ? void 0 : g.seoContent) == null ? void 0 : w.shareCard).url());
        return Tw({
            title: () => a.value,
            ogTitle: () => a.value,
            description: () => c.value,
            ogDescription: () => c.value,
            ogImage: () => l == null ? void 0 : l.value,
            twitterImage: () => l == null ? void 0 : l.value,
            twitterCard: "summary_large_image"
        }),
        Un( () => {
            console.clear(),
            console.groupCollapsed("%c Modern English 0️⃣", "color: white; background: #000000; padding: 4px; font-size: 12px; font-weight: bold;"),
            console.log("%c for Linkin Park", "color: white; background: #000000; padding: 4px; font-size: 12px;"),
            console.log("%c modernenglish.co.uk ", "color: white; background: #000000; padding: 4px; font-size: 12px;"),
            console.groupEnd(),
            setTimeout( () => {
                s.value = !1
            }
            , 3e3)
        }
        ),
        el({
            script: [{
                innerHTML: `
        window.TERMLY_CUSTOM_BLOCKING_MAP = {
          "cdn.sanity.io": "essential",
        }
      `
            }, {
                src: "https://app.termly.io/resource-blocker/b841fbac-9b8b-4936-848a-e566f44036af?autoBlock=on",
                defer: !0
            }]
        }),
        (T, A) => {
            var _, x, O, L, P, H, F;
            const $ = ET
              , N = Ey
              , I = nR
              , C = ky
              , v = Ty;
            return G(),
            se("div", bR, [s.value ? (G(),
            Ke($, {
                key: 0
            })) : pt("", !0), ce(t) && !ce(i) ? (G(),
            Ke(N, {
                key: 1,
                logo: (_ = ce(t)) == null ? void 0 : _.headerLogo,
                menu: (x = ce(t)) == null ? void 0 : x.mainMenu,
                "social-links": (O = ce(t)) == null ? void 0 : O.socialLinks
            }, null, 8, ["logo", "menu", "social-links"])) : pt("", !0), Y("main", vR, [fe(I), _R]), ce(i) ? pt("", !0) : (G(),
            Ke(C, {
                key: 2,
                menu: (L = ce(t)) == null ? void 0 : L.footerMenu,
                "copyright-text": (P = ce(t)) == null ? void 0 : P.copyrightText,
                logo: (H = ce(t)) == null ? void 0 : H.footerLogo,
                "social-links": (F = ce(t)) == null ? void 0 : F.socialLinks
            }, null, 8, ["menu", "copyright-text", "logo", "social-links"])), ce(i) ? pt("", !0) : (G(),
            Ke(v, {
                key: 3
            }))])
        }
    }
})
  , CR = {
    class: "app"
}
  , SR = {
    class: "main"
}
  , ER = {
    class: "error-page"
}
  , kR = {
    class: "inner"
}
  , TR = {
    key: 0
}
  , xR = Ct({
    __name: "error",
    props: {
        error: Object
    },
    setup(e) {
        const {data: t, status: n} = Jp("/api/content/site", "$mar46U4SiV");
        return el({
            title: e.error.statusMessage,
            meta: [{
                name: "robots",
                content: "noindex"
            }]
        }),
        (o, s) => {
            var l, u, f, d, h, m, p;
            const i = Ey
              , a = ky
              , c = Ty;
            return G(),
            se("div", CR, [ce(t) ? (G(),
            Ke(i, {
                key: 0,
                logo: (l = ce(t)) == null ? void 0 : l.headerLogo,
                menu: (u = ce(t)) == null ? void 0 : u.mainMenu,
                "social-links": (f = ce(t)) == null ? void 0 : f.socialLinks
            }, null, 8, ["logo", "menu", "social-links"])) : pt("", !0), Y("main", SR, [Y("div", ER, [Y("div", kR, [Y("div", null, [Y("h1", null, xt(e.error.statusCode), 1), e.error.message ? (G(),
            se("p", TR, xt(e.error.message), 1)) : pt("", !0)])])])]), ce(t) ? (G(),
            Ke(a, {
                key: 1,
                menu: (d = ce(t)) == null ? void 0 : d.footerMenu,
                "copyright-text": (h = ce(t)) == null ? void 0 : h.copyrightText,
                logo: (m = ce(t)) == null ? void 0 : m.footerLogo,
                "social-links": (p = ce(t)) == null ? void 0 : p.socialLinks
            }, null, 8, ["menu", "copyright-text", "logo", "social-links"])) : pt("", !0), ce(t) ? (G(),
            Ke(c, {
                key: 2
            })) : pt("", !0)])
        }
    }
})
  , AR = wr(xR, [["__scopeId", "data-v-d9106387"]])
  , RR = {
    key: 0
}
  , rd = {
    __name: "nuxt-root",
    setup(e) {
        const t = () => null
          , n = Be()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const c = n.hooks.hookOnce("app:error", r);
            Dt().beforeEach(c)
        }
        const o = !1;
        sr($i, Mi()),
        n.hooks.callHookWith(c => c.map(l => l()), "vue:setup");
        const s = Ii()
          , i = !1;
        Oc( (c, l, u) => {
            if (n.hooks.callHook("vue:error", c, l, u).catch(f => console.error("[nuxt] Error in `vue:error` hook", f)),
            P_(c) && (c.fatal || c.unhandled))
                return n.runWithContext( () => Ar(c)),
                !1
        }
        );
        const a = !1;
        return (c, l) => (G(),
        Ke(Hc, {
            onResolve: ce(r)
        }, {
            default: Ln( () => [ce(i) ? (G(),
            se("div", RR)) : ce(s) ? (G(),
            Ke(ce(AR), {
                key: 1,
                error: ce(s)
            }, null, 8, ["error"])) : ce(a) ? (G(),
            Ke(ce(t), {
                key: 2,
                context: ce(a)
            }, null, 8, ["context"])) : ce(o) ? (G(),
            Ke(Ri(ce(o)), {
                key: 3
            })) : (G(),
            Ke(ce(wR), {
                key: 4
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let od;
{
    let e;
    od = async function() {
        var i, a;
        if (e)
            return e;
        const r = !!(((i = window.__NUXT__) == null ? void 0 : i.serverRendered) ?? ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? tp(rd) : ep(rd)
          , o = Qv({
            vueApp: r
        });
        async function s(c) {
            await o.callHook("app:error", c),
            o.payload.error = o.payload.error || is(c)
        }
        r.config.errorHandler = s;
        try {
            await t_(o, yT)
        } catch (c) {
            s(c)
        }
        try {
            await o.hooks.callHook("app:created", r),
            await o.hooks.callHook("app:beforeMount", r),
            r.mount(Zv),
            await o.hooks.callHook("app:mounted", r),
            await Hn()
        } catch (c) {
            s(c)
        }
        return r.config.errorHandler === s && (r.config.errorHandler = void 0),
        r
    }
    ,
    e = od().catch(t => {
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {gC as $, Hn as A, Cc as B, Dc as C, rt as D, mt as E, fr as F, oi as G, UR as H, uT as I, xt as J, fe as K, Uc as L, He as M, va as N, Qo as O, Ah as P, Sl as Q, ub as R, y1 as S, os as T, Ab as U, HR as V, FR as W, mi as X, lr as Y, EC as Z, wr as _, G as a, ss as a0, Hy as a1, xh as a2, X2 as a3, $0 as a4, Fh as a5, Jp as a6, BR as a7, NR as a8, jR as a9, e1 as aa, Yc as ab, P4 as ac, DR as ad, PR as ae, Mi as af, is as ag, Tw as ah, jt as ai, ng as aj, LR as ak, lc as al, Yf as am, ce as b, se as c, Ct as d, pt as e, Ke as f, jd as g, Nd as h, Y as i, Be as j, D0 as k, Ri as l, wt as m, rn as n, Un as o, sr as p, vr as q, $e as r, vt as s, _i as t, yR as u, pe as v, Ln as w, _n as x, Ye as y, Lt as z};
