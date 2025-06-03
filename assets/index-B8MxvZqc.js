import { C as ls, V as f, M as Me, T as be, Q as F, S as xt, a as U, R as hs, P as Ge, b as O, D as ds, H as ve, F as Ke, c as Ie, L as Q, d as De, e as us, f as at, g as Xt, B as pt, h as ye, i as Yt, j as Ue, k as le, l as G, m as ct, n as Le, o as J, p as ps, q as ms, r as lt, I as fs, s as $, t as ys, O as oe, u as Fe, v as gs, w as ws, x as $t, N as xs, y as _s, z as bs, A as Qt, E as Ce, G as vs, J as Ms, K as Ts, U as qe, W as As, X as Zt, Y as Rs, Z as ce, _ as Ss, $ as Es, a0 as C, a1 as Ps, a2 as Ls, a3 as Ds, a4 as Cs, a5 as he, a6 as He, a7 as ks, a8 as Bs, a9 as zs, aa as Fs, ab as Is, ac as Jt, ad as Os, ae as _t, af as bt, ag as vt, ah as Mt, ai as Ns, aj as Ws, ak as Gs, al as Us, am as ke, an as es, ao as mt, ap as ft, aq as js, ar as ts, as as Hs, at as Vs, au as Ks, av as qs, aw as Xs, ax as Ys, ay as $s, az as X, aA as j, aB as q, aC as V, aD as S, aE as Z, aF as ge, aG as Qs, aH as Zs, aI as de, aJ as ss, aK as ns, aL as Se, aM as Js, aN as en, aO as tn, __tla as __tla_0 } from "./vendor-C1aWI1bB.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);
        new MutationObserver((n)=>{
            for (const o of n)if (o.type === "childList") for (const i of o.addedNodes)i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function t(n) {
            const o = {};
            return n.integrity && (o.integrity = n.integrity), n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? o.credentials = "include" : n.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
        }
        function s(n) {
            if (n.ep) return;
            n.ep = !0;
            const o = t(n);
            fetch(n.href, o);
        }
    })();
    const Tt = {
        type: "change"
    }, yt = {
        type: "start"
    }, os = {
        type: "end"
    }, Oe = new hs, At = new Ge, sn = Math.cos(70 * O.DEG2RAD), W = new f, H = 2 * Math.PI, B = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6
    }, Xe = 1e-6;
    class nn extends ls {
        constructor(e, t = null){
            super(e, t), this.state = B.NONE, this.enabled = !0, this.target = new f, this.cursor = new f, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
                LEFT: "ArrowLeft",
                UP: "ArrowUp",
                RIGHT: "ArrowRight",
                BOTTOM: "ArrowDown"
            }, this.mouseButtons = {
                LEFT: Me.ROTATE,
                MIDDLE: Me.DOLLY,
                RIGHT: Me.PAN
            }, this.touches = {
                ONE: be.ROTATE,
                TWO: be.DOLLY_PAN
            }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new f, this._lastQuaternion = new F, this._lastTargetPosition = new f, this._quat = new F().setFromUnitVectors(e.up, new f(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new xt, this._sphericalDelta = new xt, this._scale = 1, this._panOffset = new f, this._rotateStart = new U, this._rotateEnd = new U, this._rotateDelta = new U, this._panStart = new U, this._panEnd = new U, this._panDelta = new U, this._dollyStart = new U, this._dollyEnd = new U, this._dollyDelta = new U, this._dollyDirection = new f, this._mouse = new U, this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = rn.bind(this), this._onPointerDown = on.bind(this), this._onPointerUp = an.bind(this), this._onContextMenu = mn.bind(this), this._onMouseWheel = hn.bind(this), this._onKeyDown = dn.bind(this), this._onTouchStart = un.bind(this), this._onTouchMove = pn.bind(this), this._onMouseDown = cn.bind(this), this._onMouseMove = ln.bind(this), this._interceptControlDown = fn.bind(this), this._interceptControlUp = yn.bind(this), this.domElement !== null && this.connect(), this.update();
        }
        connect() {
            this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, {
                passive: !1
            }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
                passive: !0,
                capture: !0
            }), this.domElement.style.touchAction = "none";
        }
        disconnect() {
            this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, {
                capture: !0
            }), this.domElement.style.touchAction = "auto";
        }
        dispose() {
            this.disconnect();
        }
        getPolarAngle() {
            return this._spherical.phi;
        }
        getAzimuthalAngle() {
            return this._spherical.theta;
        }
        getDistance() {
            return this.object.position.distanceTo(this.target);
        }
        listenToKeyEvents(e) {
            e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
        }
        stopListenToKeyEvents() {
            this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
        }
        saveState() {
            this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
        }
        reset() {
            this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Tt), this.update(), this.state = B.NONE;
        }
        update(e = null) {
            const t = this.object.position;
            W.copy(t).sub(this.target), W.applyQuaternion(this._quat), this._spherical.setFromVector3(W), this.autoRotate && this.state === B.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
            let s = this.minAzimuthAngle, n = this.maxAzimuthAngle;
            isFinite(s) && isFinite(n) && (s < -Math.PI ? s += H : s > Math.PI && (s -= H), n < -Math.PI ? n += H : n > Math.PI && (n -= H), s <= n ? this._spherical.theta = Math.max(s, Math.min(n, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + n) / 2 ? Math.max(s, this._spherical.theta) : Math.min(n, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
            let o = !1;
            if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
            else {
                const i = this._spherical.radius;
                this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), o = i != this._spherical.radius;
            }
            if (W.setFromSpherical(this._spherical), W.applyQuaternion(this._quatInverse), t.copy(this.target).add(W), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
                let i = null;
                if (this.object.isPerspectiveCamera) {
                    const a = W.length();
                    i = this._clampDistance(a * this._scale);
                    const r = a - i;
                    this.object.position.addScaledVector(this._dollyDirection, r), this.object.updateMatrixWorld(), o = !!r;
                } else if (this.object.isOrthographicCamera) {
                    const a = new f(this._mouse.x, this._mouse.y, 0);
                    a.unproject(this.object);
                    const r = this.object.zoom;
                    this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), o = r !== this.object.zoom;
                    const c = new f(this._mouse.x, this._mouse.y, 0);
                    c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), i = W.length();
                } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
                i !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(i).add(this.object.position) : (Oe.origin.copy(this.object.position), Oe.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Oe.direction)) < sn ? this.object.lookAt(this.target) : (At.setFromNormalAndCoplanarPoint(this.object.up, this.target), Oe.intersectPlane(At, this.target))));
            } else if (this.object.isOrthographicCamera) {
                const i = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), i !== this.object.zoom && (this.object.updateProjectionMatrix(), o = !0);
            }
            return this._scale = 1, this._performCursorZoom = !1, o || this._lastPosition.distanceToSquared(this.object.position) > Xe || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Xe || this._lastTargetPosition.distanceToSquared(this.target) > Xe ? (this.dispatchEvent(Tt), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
        }
        _getAutoRotationAngle(e) {
            return e !== null ? H / 60 * this.autoRotateSpeed * e : H / 60 / 60 * this.autoRotateSpeed;
        }
        _getZoomScale(e) {
            const t = Math.abs(e * .01);
            return Math.pow(.95, this.zoomSpeed * t);
        }
        _rotateLeft(e) {
            this._sphericalDelta.theta -= e;
        }
        _rotateUp(e) {
            this._sphericalDelta.phi -= e;
        }
        _panLeft(e, t) {
            W.setFromMatrixColumn(t, 0), W.multiplyScalar(-e), this._panOffset.add(W);
        }
        _panUp(e, t) {
            this.screenSpacePanning === !0 ? W.setFromMatrixColumn(t, 1) : (W.setFromMatrixColumn(t, 0), W.crossVectors(this.object.up, W)), W.multiplyScalar(e), this._panOffset.add(W);
        }
        _pan(e, t) {
            const s = this.domElement;
            if (this.object.isPerspectiveCamera) {
                const n = this.object.position;
                W.copy(n).sub(this.target);
                let o = W.length();
                o *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * o / s.clientHeight, this.object.matrix), this._panUp(2 * t * o / s.clientHeight, this.object.matrix);
            } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / s.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / s.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
        }
        _dollyOut(e) {
            this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
        }
        _dollyIn(e) {
            this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
        }
        _updateZoomParameters(e, t) {
            if (!this.zoomToCursor) return;
            this._performCursorZoom = !0;
            const s = this.domElement.getBoundingClientRect(), n = e - s.left, o = t - s.top, i = s.width, a = s.height;
            this._mouse.x = n / i * 2 - 1, this._mouse.y = -(o / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
        }
        _clampDistance(e) {
            return Math.max(this.minDistance, Math.min(this.maxDistance, e));
        }
        _handleMouseDownRotate(e) {
            this._rotateStart.set(e.clientX, e.clientY);
        }
        _handleMouseDownDolly(e) {
            this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
        }
        _handleMouseDownPan(e) {
            this._panStart.set(e.clientX, e.clientY);
        }
        _handleMouseMoveRotate(e) {
            this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
            const t = this.domElement;
            this._rotateLeft(H * this._rotateDelta.x / t.clientHeight), this._rotateUp(H * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
        }
        _handleMouseMoveDolly(e) {
            this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
        }
        _handleMouseMovePan(e) {
            this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
        }
        _handleMouseWheel(e) {
            this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
        }
        _handleKeyDown(e) {
            let t = !1;
            switch(e.code){
                case this.keys.UP:
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(H * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
                    break;
                case this.keys.BOTTOM:
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-H * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
                    break;
                case this.keys.LEFT:
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(H * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
                    break;
                case this.keys.RIGHT:
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-H * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
                    break;
            }
            t && (e.preventDefault(), this.update());
        }
        _handleTouchStartRotate(e) {
            if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
            else {
                const t = this._getSecondPointerPosition(e), s = .5 * (e.pageX + t.x), n = .5 * (e.pageY + t.y);
                this._rotateStart.set(s, n);
            }
        }
        _handleTouchStartPan(e) {
            if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
            else {
                const t = this._getSecondPointerPosition(e), s = .5 * (e.pageX + t.x), n = .5 * (e.pageY + t.y);
                this._panStart.set(s, n);
            }
        }
        _handleTouchStartDolly(e) {
            const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, n = e.pageY - t.y, o = Math.sqrt(s * s + n * n);
            this._dollyStart.set(0, o);
        }
        _handleTouchStartDollyPan(e) {
            this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
        }
        _handleTouchStartDollyRotate(e) {
            this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
        }
        _handleTouchMoveRotate(e) {
            if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
            else {
                const s = this._getSecondPointerPosition(e), n = .5 * (e.pageX + s.x), o = .5 * (e.pageY + s.y);
                this._rotateEnd.set(n, o);
            }
            this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
            const t = this.domElement;
            this._rotateLeft(H * this._rotateDelta.x / t.clientHeight), this._rotateUp(H * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
        }
        _handleTouchMovePan(e) {
            if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
            else {
                const t = this._getSecondPointerPosition(e), s = .5 * (e.pageX + t.x), n = .5 * (e.pageY + t.y);
                this._panEnd.set(s, n);
            }
            this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
        }
        _handleTouchMoveDolly(e) {
            const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, n = e.pageY - t.y, o = Math.sqrt(s * s + n * n);
            this._dollyEnd.set(0, o), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
            const i = (e.pageX + t.x) * .5, a = (e.pageY + t.y) * .5;
            this._updateZoomParameters(i, a);
        }
        _handleTouchMoveDollyPan(e) {
            this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
        }
        _handleTouchMoveDollyRotate(e) {
            this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
        }
        _addPointer(e) {
            this._pointers.push(e.pointerId);
        }
        _removePointer(e) {
            delete this._pointerPositions[e.pointerId];
            for(let t = 0; t < this._pointers.length; t++)if (this._pointers[t] == e.pointerId) {
                this._pointers.splice(t, 1);
                return;
            }
        }
        _isTrackingPointer(e) {
            for(let t = 0; t < this._pointers.length; t++)if (this._pointers[t] == e.pointerId) return !0;
            return !1;
        }
        _trackPointer(e) {
            let t = this._pointerPositions[e.pointerId];
            t === void 0 && (t = new U, this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
        }
        _getSecondPointerPosition(e) {
            const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
            return this._pointerPositions[t];
        }
        _customWheelEvent(e) {
            const t = e.deltaMode, s = {
                clientX: e.clientX,
                clientY: e.clientY,
                deltaY: e.deltaY
            };
            switch(t){
                case 1:
                    s.deltaY *= 16;
                    break;
                case 2:
                    s.deltaY *= 100;
                    break;
            }
            return e.ctrlKey && !this._controlActive && (s.deltaY *= 10), s;
        }
    }
    function on(d) {
        this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(d.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(d) && (this._addPointer(d), d.pointerType === "touch" ? this._onTouchStart(d) : this._onMouseDown(d)));
    }
    function rn(d) {
        this.enabled !== !1 && (d.pointerType === "touch" ? this._onTouchMove(d) : this._onMouseMove(d));
    }
    function an(d) {
        switch(this._removePointer(d), this._pointers.length){
            case 0:
                this.domElement.releasePointerCapture(d.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(os), this.state = B.NONE;
                break;
            case 1:
                const e = this._pointers[0], t = this._pointerPositions[e];
                this._onTouchStart({
                    pointerId: e,
                    pageX: t.x,
                    pageY: t.y
                });
                break;
        }
    }
    function cn(d) {
        let e;
        switch(d.button){
            case 0:
                e = this.mouseButtons.LEFT;
                break;
            case 1:
                e = this.mouseButtons.MIDDLE;
                break;
            case 2:
                e = this.mouseButtons.RIGHT;
                break;
            default:
                e = -1;
        }
        switch(e){
            case Me.DOLLY:
                if (this.enableZoom === !1) return;
                this._handleMouseDownDolly(d), this.state = B.DOLLY;
                break;
            case Me.ROTATE:
                if (d.ctrlKey || d.metaKey || d.shiftKey) {
                    if (this.enablePan === !1) return;
                    this._handleMouseDownPan(d), this.state = B.PAN;
                } else {
                    if (this.enableRotate === !1) return;
                    this._handleMouseDownRotate(d), this.state = B.ROTATE;
                }
                break;
            case Me.PAN:
                if (d.ctrlKey || d.metaKey || d.shiftKey) {
                    if (this.enableRotate === !1) return;
                    this._handleMouseDownRotate(d), this.state = B.ROTATE;
                } else {
                    if (this.enablePan === !1) return;
                    this._handleMouseDownPan(d), this.state = B.PAN;
                }
                break;
            default:
                this.state = B.NONE;
        }
        this.state !== B.NONE && this.dispatchEvent(yt);
    }
    function ln(d) {
        switch(this.state){
            case B.ROTATE:
                if (this.enableRotate === !1) return;
                this._handleMouseMoveRotate(d);
                break;
            case B.DOLLY:
                if (this.enableZoom === !1) return;
                this._handleMouseMoveDolly(d);
                break;
            case B.PAN:
                if (this.enablePan === !1) return;
                this._handleMouseMovePan(d);
                break;
        }
    }
    function hn(d) {
        this.enabled === !1 || this.enableZoom === !1 || this.state !== B.NONE || (d.preventDefault(), this.dispatchEvent(yt), this._handleMouseWheel(this._customWheelEvent(d)), this.dispatchEvent(os));
    }
    function dn(d) {
        this.enabled !== !1 && this._handleKeyDown(d);
    }
    function un(d) {
        switch(this._trackPointer(d), this._pointers.length){
            case 1:
                switch(this.touches.ONE){
                    case be.ROTATE:
                        if (this.enableRotate === !1) return;
                        this._handleTouchStartRotate(d), this.state = B.TOUCH_ROTATE;
                        break;
                    case be.PAN:
                        if (this.enablePan === !1) return;
                        this._handleTouchStartPan(d), this.state = B.TOUCH_PAN;
                        break;
                    default:
                        this.state = B.NONE;
                }
                break;
            case 2:
                switch(this.touches.TWO){
                    case be.DOLLY_PAN:
                        if (this.enableZoom === !1 && this.enablePan === !1) return;
                        this._handleTouchStartDollyPan(d), this.state = B.TOUCH_DOLLY_PAN;
                        break;
                    case be.DOLLY_ROTATE:
                        if (this.enableZoom === !1 && this.enableRotate === !1) return;
                        this._handleTouchStartDollyRotate(d), this.state = B.TOUCH_DOLLY_ROTATE;
                        break;
                    default:
                        this.state = B.NONE;
                }
                break;
            default:
                this.state = B.NONE;
        }
        this.state !== B.NONE && this.dispatchEvent(yt);
    }
    function pn(d) {
        switch(this._trackPointer(d), this.state){
            case B.TOUCH_ROTATE:
                if (this.enableRotate === !1) return;
                this._handleTouchMoveRotate(d), this.update();
                break;
            case B.TOUCH_PAN:
                if (this.enablePan === !1) return;
                this._handleTouchMovePan(d), this.update();
                break;
            case B.TOUCH_DOLLY_PAN:
                if (this.enableZoom === !1 && this.enablePan === !1) return;
                this._handleTouchMoveDollyPan(d), this.update();
                break;
            case B.TOUCH_DOLLY_ROTATE:
                if (this.enableZoom === !1 && this.enableRotate === !1) return;
                this._handleTouchMoveDollyRotate(d), this.update();
                break;
            default:
                this.state = B.NONE;
        }
    }
    function mn(d) {
        this.enabled !== !1 && d.preventDefault();
    }
    function fn(d) {
        d.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
            passive: !0,
            capture: !0
        }));
    }
    function yn(d) {
        d.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
            passive: !0,
            capture: !0
        }));
    }
    class gn extends ds {
        constructor(e){
            super(e), this.type = ve;
        }
        parse(e) {
            const i = function(w, M) {
                switch(w){
                    case 1:
                        throw new Error("THREE.RGBELoader: Read Error: " + (M || ""));
                    case 2:
                        throw new Error("THREE.RGBELoader: Write Error: " + (M || ""));
                    case 3:
                        throw new Error("THREE.RGBELoader: Bad File Format: " + (M || ""));
                    default:
                    case 4:
                        throw new Error("THREE.RGBELoader: Memory Error: " + (M || ""));
                }
            }, l = `
`, h = function(w, M, A) {
                M = M || 1024;
                let D = w.pos, I = -1, P = 0, N = "", k = String.fromCharCode.apply(null, new Uint16Array(w.subarray(D, D + 128)));
                for(; 0 > (I = k.indexOf(l)) && P < M && D < w.byteLength;)N += k, P += k.length, D += 128, k += String.fromCharCode.apply(null, new Uint16Array(w.subarray(D, D + 128)));
                return -1 < I ? (w.pos += P + I + 1, N + k.slice(0, I)) : !1;
            }, u = function(w) {
                const M = /^#\?(\S+)/, A = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, z = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, D = /^\s*FORMAT=(\S+)\s*$/, I = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, P = {
                    valid: 0,
                    string: "",
                    comments: "",
                    programtype: "RGBE",
                    format: "",
                    gamma: 1,
                    exposure: 1,
                    width: 0,
                    height: 0
                };
                let N, k;
                for((w.pos >= w.byteLength || !(N = h(w))) && i(1, "no header found"), (k = N.match(M)) || i(3, "bad initial token"), P.valid |= 1, P.programtype = k[1], P.string += N + `
`; N = h(w), N !== !1;){
                    if (P.string += N + `
`, N.charAt(0) === "#") {
                        P.comments += N + `
`;
                        continue;
                    }
                    if ((k = N.match(A)) && (P.gamma = parseFloat(k[1])), (k = N.match(z)) && (P.exposure = parseFloat(k[1])), (k = N.match(D)) && (P.valid |= 2, P.format = k[1]), (k = N.match(I)) && (P.valid |= 4, P.height = parseInt(k[1], 10), P.width = parseInt(k[2], 10)), P.valid & 2 && P.valid & 4) break;
                }
                return P.valid & 2 || i(3, "missing format specifier"), P.valid & 4 || i(3, "missing image size specifier"), P;
            }, p = function(w, M, A) {
                const z = M;
                if (z < 8 || z > 32767 || w[0] !== 2 || w[1] !== 2 || w[2] & 128) return new Uint8Array(w);
                z !== (w[2] << 8 | w[3]) && i(3, "wrong scanline width");
                const D = new Uint8Array(4 * M * A);
                D.length || i(4, "unable to allocate buffer space");
                let I = 0, P = 0;
                const N = 4 * z, k = new Uint8Array(4), we = new Uint8Array(N);
                let gt = A;
                for(; gt > 0 && P < w.byteLength;){
                    P + 4 > w.byteLength && i(1), k[0] = w[P++], k[1] = w[P++], k[2] = w[P++], k[3] = w[P++], (k[0] != 2 || k[1] != 2 || (k[2] << 8 | k[3]) != z) && i(3, "bad rgbe scanline format");
                    let Re = 0, ee;
                    for(; Re < N && P < w.byteLength;){
                        ee = w[P++];
                        const te = ee > 128;
                        if (te && (ee -= 128), (ee === 0 || Re + ee > N) && i(3, "bad scanline data"), te) {
                            const se = w[P++];
                            for(let wt = 0; wt < ee; wt++)we[Re++] = se;
                        } else we.set(w.subarray(P, P + ee), Re), Re += ee, P += ee;
                    }
                    const cs = z;
                    for(let te = 0; te < cs; te++){
                        let se = 0;
                        D[I] = we[te + se], se += z, D[I + 1] = we[te + se], se += z, D[I + 2] = we[te + se], se += z, D[I + 3] = we[te + se], I += 4;
                    }
                    gt--;
                }
                return D;
            }, m = function(w, M, A, z) {
                const D = w[M + 3], I = Math.pow(2, D - 128) / 255;
                A[z + 0] = w[M + 0] * I, A[z + 1] = w[M + 1] * I, A[z + 2] = w[M + 2] * I, A[z + 3] = 1;
            }, _ = function(w, M, A, z) {
                const D = w[M + 3], I = Math.pow(2, D - 128) / 255;
                A[z + 0] = Ie.toHalfFloat(Math.min(w[M + 0] * I, 65504)), A[z + 1] = Ie.toHalfFloat(Math.min(w[M + 1] * I, 65504)), A[z + 2] = Ie.toHalfFloat(Math.min(w[M + 2] * I, 65504)), A[z + 3] = Ie.toHalfFloat(1);
            }, g = new Uint8Array(e);
            g.pos = 0;
            const b = u(g), T = b.width, y = b.height, x = p(g.subarray(g.pos), T, y);
            let v, L, R;
            switch(this.type){
                case Ke:
                    R = x.length / 4;
                    const w = new Float32Array(R * 4);
                    for(let A = 0; A < R; A++)m(x, A * 4, w, A * 4);
                    v = w, L = Ke;
                    break;
                case ve:
                    R = x.length / 4;
                    const M = new Uint16Array(R * 4);
                    for(let A = 0; A < R; A++)_(x, A * 4, M, A * 4);
                    v = M, L = ve;
                    break;
                default:
                    throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
            }
            return {
                width: T,
                height: y,
                data: v,
                header: b.string,
                gamma: b.gamma,
                exposure: b.exposure,
                type: L
            };
        }
        setDataType(e) {
            return this.type = e, this;
        }
        load(e, t, s, n) {
            function o(i, a) {
                switch(i.type){
                    case Ke:
                    case ve:
                        i.colorSpace = Q, i.minFilter = De, i.magFilter = De, i.generateMipmaps = !1, i.flipY = !0;
                        break;
                }
                t && t(i, a);
            }
            return super.load(e, o, s, n);
        }
    }
    function wn(d, e = !1) {
        const t = d[0].index !== null, s = new Set(Object.keys(d[0].attributes)), n = new Set(Object.keys(d[0].morphAttributes)), o = {}, i = {}, a = d[0].morphTargetsRelative, r = new pt;
        let c = 0;
        for(let l = 0; l < d.length; ++l){
            const h = d[l];
            let u = 0;
            if (t !== (h.index !== null)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
            for(const p in h.attributes){
                if (!s.has(p)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + '. All geometries must have compatible attributes; make sure "' + p + '" attribute exists among all geometries, or in none of them.'), null;
                o[p] === void 0 && (o[p] = []), o[p].push(h.attributes[p]), u++;
            }
            if (u !== s.size) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". Make sure all geometries have the same number of attributes."), null;
            if (a !== h.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
            for(const p in h.morphAttributes){
                if (!n.has(p)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ".  .morphAttributes must be consistent throughout all geometries."), null;
                i[p] === void 0 && (i[p] = []), i[p].push(h.morphAttributes[p]);
            }
            if (e) {
                let p;
                if (t) p = h.index.count;
                else if (h.attributes.position !== void 0) p = h.attributes.position.count;
                else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". The geometry must have either an index or a position attribute"), null;
                r.addGroup(c, p, l), c += p;
            }
        }
        if (t) {
            let l = 0;
            const h = [];
            for(let u = 0; u < d.length; ++u){
                const p = d[u].index;
                for(let m = 0; m < p.count; ++m)h.push(p.getX(m) + l);
                l += d[u].attributes.position.count;
            }
            r.setIndex(h);
        }
        for(const l in o){
            const h = Rt(o[l]);
            if (!h) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + l + " attribute."), null;
            r.setAttribute(l, h);
        }
        for(const l in i){
            const h = i[l][0].length;
            if (h === 0) break;
            r.morphAttributes = r.morphAttributes || {}, r.morphAttributes[l] = [];
            for(let u = 0; u < h; ++u){
                const p = [];
                for(let _ = 0; _ < i[l].length; ++_)p.push(i[l][_][u]);
                const m = Rt(p);
                if (!m) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + l + " morphAttribute."), null;
                r.morphAttributes[l].push(m);
            }
        }
        return r;
    }
    function Rt(d) {
        let e, t, s, n = -1, o = 0;
        for(let c = 0; c < d.length; ++c){
            const l = d[c];
            if (e === void 0 && (e = l.array.constructor), e !== l.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
            if (t === void 0 && (t = l.itemSize), t !== l.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
            if (s === void 0 && (s = l.normalized), s !== l.normalized) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
            if (n === -1 && (n = l.gpuType), n !== l.gpuType) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
            o += l.count * t;
        }
        const i = new e(o), a = new ye(i, t, s);
        let r = 0;
        for(let c = 0; c < d.length; ++c){
            const l = d[c];
            if (l.isInterleavedBufferAttribute) {
                const h = r / t;
                for(let u = 0, p = l.count; u < p; u++)for(let m = 0; m < t; m++){
                    const _ = l.getComponent(u, m);
                    a.setComponent(u + h, m, _);
                }
            } else i.set(l.array, r);
            r += l.count * t;
        }
        return n !== void 0 && (a.gpuType = n), a;
    }
    function St(d, e) {
        if (e === us) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), d;
        if (e === at || e === Xt) {
            let t = d.getIndex();
            if (t === null) {
                const i = [], a = d.getAttribute("position");
                if (a !== void 0) {
                    for(let r = 0; r < a.count; r++)i.push(r);
                    d.setIndex(i), t = d.getIndex();
                } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), d;
            }
            const s = t.count - 2, n = [];
            if (e === at) for(let i = 1; i <= s; i++)n.push(t.getX(0)), n.push(t.getX(i)), n.push(t.getX(i + 1));
            else for(let i = 0; i < s; i++)i % 2 === 0 ? (n.push(t.getX(i)), n.push(t.getX(i + 1)), n.push(t.getX(i + 2))) : (n.push(t.getX(i + 2)), n.push(t.getX(i + 1)), n.push(t.getX(i)));
            n.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
            const o = d.clone();
            return o.setIndex(n), o.clearGroups(), o;
        } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), d;
    }
    const Ye = new WeakMap;
    class xn extends Yt {
        constructor(e){
            super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
                position: "POSITION",
                normal: "NORMAL",
                color: "COLOR",
                uv: "TEX_COORD"
            }, this.defaultAttributeTypes = {
                position: "Float32Array",
                normal: "Float32Array",
                color: "Float32Array",
                uv: "Float32Array"
            };
        }
        setDecoderPath(e) {
            return this.decoderPath = e, this;
        }
        setDecoderConfig(e) {
            return this.decoderConfig = e, this;
        }
        setWorkerLimit(e) {
            return this.workerLimit = e, this;
        }
        load(e, t, s, n) {
            const o = new Ue(this.manager);
            o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, (i)=>{
                this.parse(i, t, n);
            }, s, n);
        }
        parse(e, t, s = ()=>{}) {
            this.decodeDracoFile(e, t, null, null, le, s).catch(s);
        }
        decodeDracoFile(e, t, s, n, o = Q, i = ()=>{}) {
            const a = {
                attributeIDs: s || this.defaultAttributeIDs,
                attributeTypes: n || this.defaultAttributeTypes,
                useUniqueIDs: !!s,
                vertexColorSpace: o
            };
            return this.decodeGeometry(e, a).then(t).catch(i);
        }
        decodeGeometry(e, t) {
            const s = JSON.stringify(t);
            if (Ye.has(e)) {
                const r = Ye.get(e);
                if (r.key === s) return r.promise;
                if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
            }
            let n;
            const o = this.workerNextTaskID++, i = e.byteLength, a = this._getWorker(o, i).then((r)=>(n = r, new Promise((c, l)=>{
                    n._callbacks[o] = {
                        resolve: c,
                        reject: l
                    }, n.postMessage({
                        type: "decode",
                        id: o,
                        taskConfig: t,
                        buffer: e
                    }, [
                        e
                    ]);
                }))).then((r)=>this._createGeometry(r.geometry));
            return a.catch(()=>!0).then(()=>{
                n && o && this._releaseTask(n, o);
            }), Ye.set(e, {
                key: s,
                promise: a
            }), a;
        }
        _createGeometry(e) {
            const t = new pt;
            e.index && t.setIndex(new ye(e.index.array, 1));
            for(let s = 0; s < e.attributes.length; s++){
                const n = e.attributes[s], o = n.name, i = n.array, a = n.itemSize, r = new ye(i, a);
                o === "color" && (this._assignVertexColorSpace(r, n.vertexColorSpace), r.normalized = !(i instanceof Float32Array)), t.setAttribute(o, r);
            }
            return t;
        }
        _assignVertexColorSpace(e, t) {
            if (t !== le) return;
            const s = new G;
            for(let n = 0, o = e.count; n < o; n++)s.fromBufferAttribute(e, n), ct.toWorkingColorSpace(s, le), e.setXYZ(n, s.r, s.g, s.b);
        }
        _loadLibrary(e, t) {
            const s = new Ue(this.manager);
            return s.setPath(this.decoderPath), s.setResponseType(t), s.setWithCredentials(this.withCredentials), new Promise((n, o)=>{
                s.load(e, n, void 0, o);
            });
        }
        preload() {
            return this._initDecoder(), this;
        }
        _initDecoder() {
            if (this.decoderPending) return this.decoderPending;
            const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
            return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((s)=>{
                const n = s[0];
                e || (this.decoderConfig.wasmBinary = s[1]);
                const o = _n.toString(), i = [
                    "/* draco decoder */",
                    n,
                    "",
                    "/* worker */",
                    o.substring(o.indexOf("{") + 1, o.lastIndexOf("}"))
                ].join(`
`);
                this.workerSourceURL = URL.createObjectURL(new Blob([
                    i
                ]));
            }), this.decoderPending;
        }
        _getWorker(e, t) {
            return this._initDecoder().then(()=>{
                if (this.workerPool.length < this.workerLimit) {
                    const n = new Worker(this.workerSourceURL);
                    n._callbacks = {}, n._taskCosts = {}, n._taskLoad = 0, n.postMessage({
                        type: "init",
                        decoderConfig: this.decoderConfig
                    }), n.onmessage = function(o) {
                        const i = o.data;
                        switch(i.type){
                            case "decode":
                                n._callbacks[i.id].resolve(i);
                                break;
                            case "error":
                                n._callbacks[i.id].reject(i);
                                break;
                            default:
                                console.error('THREE.DRACOLoader: Unexpected message, "' + i.type + '"');
                        }
                    }, this.workerPool.push(n);
                } else this.workerPool.sort(function(n, o) {
                    return n._taskLoad > o._taskLoad ? -1 : 1;
                });
                const s = this.workerPool[this.workerPool.length - 1];
                return s._taskCosts[e] = t, s._taskLoad += t, s;
            });
        }
        _releaseTask(e, t) {
            e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
        }
        debug() {
            console.log("Task load: ", this.workerPool.map((e)=>e._taskLoad));
        }
        dispose() {
            for(let e = 0; e < this.workerPool.length; ++e)this.workerPool[e].terminate();
            return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
        }
    }
    function _n() {
        let d, e;
        onmessage = function(i) {
            const a = i.data;
            switch(a.type){
                case "init":
                    d = a.decoderConfig, e = new Promise(function(l) {
                        d.onModuleLoaded = function(h) {
                            l({
                                draco: h
                            });
                        }, DracoDecoderModule(d);
                    });
                    break;
                case "decode":
                    const r = a.buffer, c = a.taskConfig;
                    e.then((l)=>{
                        const h = l.draco, u = new h.Decoder;
                        try {
                            const p = t(h, u, new Int8Array(r), c), m = p.attributes.map((_)=>_.array.buffer);
                            p.index && m.push(p.index.array.buffer), self.postMessage({
                                type: "decode",
                                id: a.id,
                                geometry: p
                            }, m);
                        } catch (p) {
                            console.error(p), self.postMessage({
                                type: "error",
                                id: a.id,
                                error: p.message
                            });
                        } finally{
                            h.destroy(u);
                        }
                    });
                    break;
            }
        };
        function t(i, a, r, c) {
            const l = c.attributeIDs, h = c.attributeTypes;
            let u, p;
            const m = a.GetEncodedGeometryType(r);
            if (m === i.TRIANGULAR_MESH) u = new i.Mesh, p = a.DecodeArrayToMesh(r, r.byteLength, u);
            else if (m === i.POINT_CLOUD) u = new i.PointCloud, p = a.DecodeArrayToPointCloud(r, r.byteLength, u);
            else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
            if (!p.ok() || u.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + p.error_msg());
            const _ = {
                index: null,
                attributes: []
            };
            for(const g in l){
                const b = self[h[g]];
                let T, y;
                if (c.useUniqueIDs) y = l[g], T = a.GetAttributeByUniqueId(u, y);
                else {
                    if (y = a.GetAttributeId(u, i[l[g]]), y === -1) continue;
                    T = a.GetAttribute(u, y);
                }
                const x = n(i, a, u, g, b, T);
                g === "color" && (x.vertexColorSpace = c.vertexColorSpace), _.attributes.push(x);
            }
            return m === i.TRIANGULAR_MESH && (_.index = s(i, a, u)), i.destroy(u), _;
        }
        function s(i, a, r) {
            const l = r.num_faces() * 3, h = l * 4, u = i._malloc(h);
            a.GetTrianglesUInt32Array(r, h, u);
            const p = new Uint32Array(i.HEAPF32.buffer, u, l).slice();
            return i._free(u), {
                array: p,
                itemSize: 1
            };
        }
        function n(i, a, r, c, l, h) {
            const u = h.num_components(), m = r.num_points() * u, _ = m * l.BYTES_PER_ELEMENT, g = o(i, l), b = i._malloc(_);
            a.GetAttributeDataArrayForAllPoints(r, h, g, _, b);
            const T = new l(i.HEAPF32.buffer, b, m).slice();
            return i._free(b), {
                name: c,
                array: T,
                itemSize: u
            };
        }
        function o(i, a) {
            switch(a){
                case Float32Array:
                    return i.DT_FLOAT32;
                case Int8Array:
                    return i.DT_INT8;
                case Int16Array:
                    return i.DT_INT16;
                case Int32Array:
                    return i.DT_INT32;
                case Uint8Array:
                    return i.DT_UINT8;
                case Uint16Array:
                    return i.DT_UINT16;
                case Uint32Array:
                    return i.DT_UINT32;
            }
        }
    }
    class is extends Yt {
        constructor(e){
            super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
                return new An(t);
            }), this.register(function(t) {
                return new Rn(t);
            }), this.register(function(t) {
                return new zn(t);
            }), this.register(function(t) {
                return new Fn(t);
            }), this.register(function(t) {
                return new In(t);
            }), this.register(function(t) {
                return new En(t);
            }), this.register(function(t) {
                return new Pn(t);
            }), this.register(function(t) {
                return new Ln(t);
            }), this.register(function(t) {
                return new Dn(t);
            }), this.register(function(t) {
                return new Tn(t);
            }), this.register(function(t) {
                return new Cn(t);
            }), this.register(function(t) {
                return new Sn(t);
            }), this.register(function(t) {
                return new Bn(t);
            }), this.register(function(t) {
                return new kn(t);
            }), this.register(function(t) {
                return new vn(t);
            }), this.register(function(t) {
                return new On(t);
            }), this.register(function(t) {
                return new Nn(t);
            });
        }
        load(e, t, s, n) {
            const o = this;
            let i;
            if (this.resourcePath !== "") i = this.resourcePath;
            else if (this.path !== "") {
                const c = Le.extractUrlBase(e);
                i = Le.resolveURL(c, this.path);
            } else i = Le.extractUrlBase(e);
            this.manager.itemStart(e);
            const a = function(c) {
                n ? n(c) : console.error(c), o.manager.itemError(e), o.manager.itemEnd(e);
            }, r = new Ue(this.manager);
            r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, function(c) {
                try {
                    o.parse(c, i, function(l) {
                        t(l), o.manager.itemEnd(e);
                    }, a);
                } catch (l) {
                    a(l);
                }
            }, s, a);
        }
        setDRACOLoader(e) {
            return this.dracoLoader = e, this;
        }
        setKTX2Loader(e) {
            return this.ktx2Loader = e, this;
        }
        setMeshoptDecoder(e) {
            return this.meshoptDecoder = e, this;
        }
        register(e) {
            return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
        }
        unregister(e) {
            return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
        }
        parse(e, t, s, n) {
            let o;
            const i = {}, a = {}, r = new TextDecoder;
            if (typeof e == "string") o = JSON.parse(e);
            else if (e instanceof ArrayBuffer) if (r.decode(new Uint8Array(e, 0, 4)) === rs) {
                try {
                    i[E.KHR_BINARY_GLTF] = new Wn(e);
                } catch (h) {
                    n && n(h);
                    return;
                }
                o = JSON.parse(i[E.KHR_BINARY_GLTF].content);
            } else o = JSON.parse(r.decode(e));
            else o = e;
            if (o.asset === void 0 || o.asset.version[0] < 2) {
                n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                return;
            }
            const c = new Jn(o, {
                path: t || this.resourcePath || "",
                crossOrigin: this.crossOrigin,
                requestHeader: this.requestHeader,
                manager: this.manager,
                ktx2Loader: this.ktx2Loader,
                meshoptDecoder: this.meshoptDecoder
            });
            c.fileLoader.setRequestHeader(this.requestHeader);
            for(let l = 0; l < this.pluginCallbacks.length; l++){
                const h = this.pluginCallbacks[l](c);
                h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[h.name] = h, i[h.name] = !0;
            }
            if (o.extensionsUsed) for(let l = 0; l < o.extensionsUsed.length; ++l){
                const h = o.extensionsUsed[l], u = o.extensionsRequired || [];
                switch(h){
                    case E.KHR_MATERIALS_UNLIT:
                        i[h] = new Mn;
                        break;
                    case E.KHR_DRACO_MESH_COMPRESSION:
                        i[h] = new Gn(o, this.dracoLoader);
                        break;
                    case E.KHR_TEXTURE_TRANSFORM:
                        i[h] = new Un;
                        break;
                    case E.KHR_MESH_QUANTIZATION:
                        i[h] = new jn;
                        break;
                    default:
                        u.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
                }
            }
            c.setExtensions(i), c.setPlugins(a), c.parse(s, n);
        }
        parseAsync(e, t) {
            const s = this;
            return new Promise(function(n, o) {
                s.parse(e, t, n, o);
            });
        }
    }
    function bn() {
        let d = {};
        return {
            get: function(e) {
                return d[e];
            },
            add: function(e, t) {
                d[e] = t;
            },
            remove: function(e) {
                delete d[e];
            },
            removeAll: function() {
                d = {};
            }
        };
    }
    const E = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
        KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
        EXT_MATERIALS_BUMP: "EXT_materials_bump",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_TEXTURE_AVIF: "EXT_texture_avif",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
        EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
    };
    class vn {
        constructor(e){
            this.parser = e, this.name = E.KHR_LIGHTS_PUNCTUAL, this.cache = {
                refs: {},
                uses: {}
            };
        }
        _markDefs() {
            const e = this.parser, t = this.parser.json.nodes || [];
            for(let s = 0, n = t.length; s < n; s++){
                const o = t[s];
                o.extensions && o.extensions[this.name] && o.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, o.extensions[this.name].light);
            }
        }
        _loadLight(e) {
            const t = this.parser, s = "light:" + e;
            let n = t.cache.get(s);
            if (n) return n;
            const o = t.json, r = ((o.extensions && o.extensions[this.name] || {}).lights || [])[e];
            let c;
            const l = new G(16777215);
            r.color !== void 0 && l.setRGB(r.color[0], r.color[1], r.color[2], Q);
            const h = r.range !== void 0 ? r.range : 0;
            switch(r.type){
                case "directional":
                    c = new lt(l), c.target.position.set(0, 0, -1), c.add(c.target);
                    break;
                case "point":
                    c = new ms(l), c.distance = h;
                    break;
                case "spot":
                    c = new ps(l), c.distance = h, r.spot = r.spot || {}, r.spot.innerConeAngle = r.spot.innerConeAngle !== void 0 ? r.spot.innerConeAngle : 0, r.spot.outerConeAngle = r.spot.outerConeAngle !== void 0 ? r.spot.outerConeAngle : Math.PI / 4, c.angle = r.spot.outerConeAngle, c.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
                    break;
                default:
                    throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type);
            }
            return c.position.set(0, 0, 0), ne(c, r), r.intensity !== void 0 && (c.intensity = r.intensity), c.name = t.createUniqueName(r.name || "light_" + e), n = Promise.resolve(c), t.cache.add(s, n), n;
        }
        getDependency(e, t) {
            if (e === "light") return this._loadLight(t);
        }
        createNodeAttachment(e) {
            const t = this, s = this.parser, o = s.json.nodes[e], a = (o.extensions && o.extensions[this.name] || {}).light;
            return a === void 0 ? null : this._loadLight(a).then(function(r) {
                return s._getNodeRef(t.cache, a, r);
            });
        }
    }
    class Mn {
        constructor(){
            this.name = E.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
            return ce;
        }
        extendParams(e, t, s) {
            const n = [];
            e.color = new G(1, 1, 1), e.opacity = 1;
            const o = t.pbrMetallicRoughness;
            if (o) {
                if (Array.isArray(o.baseColorFactor)) {
                    const i = o.baseColorFactor;
                    e.color.setRGB(i[0], i[1], i[2], Q), e.opacity = i[3];
                }
                o.baseColorTexture !== void 0 && n.push(s.assignTexture(e, "map", o.baseColorTexture, le));
            }
            return Promise.all(n);
        }
    }
    class Tn {
        constructor(e){
            this.parser = e, this.name = E.KHR_MATERIALS_EMISSIVE_STRENGTH;
        }
        extendMaterialParams(e, t) {
            const n = this.parser.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = n.extensions[this.name].emissiveStrength;
            return o !== void 0 && (t.emissiveIntensity = o), Promise.resolve();
        }
    }
    class An {
        constructor(e){
            this.parser = e, this.name = E.KHR_MATERIALS_CLEARCOAT;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : J;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, n = s.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = [], i = n.extensions[this.name];
            if (i.clearcoatFactor !== void 0 && (t.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && o.push(s.assignTexture(t, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && o.push(s.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (o.push(s.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
                const a = i.clearcoatNormalTexture.scale;
                t.clearcoatNormalScale = new U(a, a);
            }
            return Promise.all(o);
        }
    }
    class Rn {
        constructor(e){
            this.parser = e, this.name = E.KHR_MATERIALS_DISPERSION;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : J;
        }
        extendMaterialParams(e, t) {
            const n = this.parser.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = n.extensions[this.name];
            return t.dispersion = o.dispersion !== void 0 ? o.dispersion : 0, Promise.resolve();
        }
    }
    class Sn {
        constructor(e){
            this.parser = e, this.name = E.KHR_MATERIALS_IRIDESCENCE;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : J;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, n = s.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = [], i = n.extensions[this.name];
            return i.iridescenceFactor !== void 0 && (t.iridescence = i.iridescenceFactor), i.iridescenceTexture !== void 0 && o.push(s.assignTexture(t, "iridescenceMap", i.iridescenceTexture)), i.iridescenceIor !== void 0 && (t.iridescenceIOR = i.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [
                100,
                400
            ]), i.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), i.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), i.iridescenceThicknessTexture !== void 0 && o.push(s.assignTexture(t, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(o);
        }
    }
    class En {
        constructor(e){
            this.parser = e, this.name = E.KHR_MATERIALS_SHEEN;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : J;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, n = s.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = [];
            t.sheenColor = new G(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
            const i = n.extensions[this.name];
            if (i.sheenColorFactor !== void 0) {
                const a = i.sheenColorFactor;
                t.sheenColor.setRGB(a[0], a[1], a[2], Q);
            }
            return i.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && o.push(s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, le)), i.sheenRoughnessTexture !== void 0 && o.push(s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(o);
        }
    }
    class Pn {
        constructor(e){
            this.parser = e, this.name = E.KHR_MATERIALS_TRANSMISSION;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : J;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, n = s.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = [], i = n.extensions[this.name];
            return i.transmissionFactor !== void 0 && (t.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && o.push(s.assignTexture(t, "transmissionMap", i.transmissionTexture)), Promise.all(o);
        }
    }
    class Ln {
        constructor(e){
            this.parser = e, this.name = E.KHR_MATERIALS_VOLUME;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : J;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, n = s.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = [], i = n.extensions[this.name];
            t.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && o.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)), t.attenuationDistance = i.attenuationDistance || 1 / 0;
            const a = i.attenuationColor || [
                1,
                1,
                1
            ];
            return t.attenuationColor = new G().setRGB(a[0], a[1], a[2], Q), Promise.all(o);
        }
    }
    class Dn {
        constructor(e){
            this.parser = e, this.name = E.KHR_MATERIALS_IOR;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : J;
        }
        extendMaterialParams(e, t) {
            const n = this.parser.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = n.extensions[this.name];
            return t.ior = o.ior !== void 0 ? o.ior : 1.5, Promise.resolve();
        }
    }
    class Cn {
        constructor(e){
            this.parser = e, this.name = E.KHR_MATERIALS_SPECULAR;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : J;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, n = s.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = [], i = n.extensions[this.name];
            t.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && o.push(s.assignTexture(t, "specularIntensityMap", i.specularTexture));
            const a = i.specularColorFactor || [
                1,
                1,
                1
            ];
            return t.specularColor = new G().setRGB(a[0], a[1], a[2], Q), i.specularColorTexture !== void 0 && o.push(s.assignTexture(t, "specularColorMap", i.specularColorTexture, le)), Promise.all(o);
        }
    }
    class kn {
        constructor(e){
            this.parser = e, this.name = E.EXT_MATERIALS_BUMP;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : J;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, n = s.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = [], i = n.extensions[this.name];
            return t.bumpScale = i.bumpFactor !== void 0 ? i.bumpFactor : 1, i.bumpTexture !== void 0 && o.push(s.assignTexture(t, "bumpMap", i.bumpTexture)), Promise.all(o);
        }
    }
    class Bn {
        constructor(e){
            this.parser = e, this.name = E.KHR_MATERIALS_ANISOTROPY;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : J;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, n = s.json.materials[e];
            if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
            const o = [], i = n.extensions[this.name];
            return i.anisotropyStrength !== void 0 && (t.anisotropy = i.anisotropyStrength), i.anisotropyRotation !== void 0 && (t.anisotropyRotation = i.anisotropyRotation), i.anisotropyTexture !== void 0 && o.push(s.assignTexture(t, "anisotropyMap", i.anisotropyTexture)), Promise.all(o);
        }
    }
    class zn {
        constructor(e){
            this.parser = e, this.name = E.KHR_TEXTURE_BASISU;
        }
        loadTexture(e) {
            const t = this.parser, s = t.json, n = s.textures[e];
            if (!n.extensions || !n.extensions[this.name]) return null;
            const o = n.extensions[this.name], i = t.options.ktx2Loader;
            if (!i) {
                if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
                return null;
            }
            return t.loadTextureImage(e, o.source, i);
        }
    }
    class Fn {
        constructor(e){
            this.parser = e, this.name = E.EXT_TEXTURE_WEBP, this.isSupported = null;
        }
        loadTexture(e) {
            const t = this.name, s = this.parser, n = s.json, o = n.textures[e];
            if (!o.extensions || !o.extensions[t]) return null;
            const i = o.extensions[t], a = n.images[i.source];
            let r = s.textureLoader;
            if (a.uri) {
                const c = s.options.manager.getHandler(a.uri);
                c !== null && (r = c);
            }
            return this.detectSupport().then(function(c) {
                if (c) return s.loadTextureImage(e, i.source, r);
                if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                return s.loadTexture(e);
            });
        }
        detectSupport() {
            return this.isSupported || (this.isSupported = new Promise(function(e) {
                const t = new Image;
                t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
                    e(t.height === 1);
                };
            })), this.isSupported;
        }
    }
    class In {
        constructor(e){
            this.parser = e, this.name = E.EXT_TEXTURE_AVIF, this.isSupported = null;
        }
        loadTexture(e) {
            const t = this.name, s = this.parser, n = s.json, o = n.textures[e];
            if (!o.extensions || !o.extensions[t]) return null;
            const i = o.extensions[t], a = n.images[i.source];
            let r = s.textureLoader;
            if (a.uri) {
                const c = s.options.manager.getHandler(a.uri);
                c !== null && (r = c);
            }
            return this.detectSupport().then(function(c) {
                if (c) return s.loadTextureImage(e, i.source, r);
                if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
                return s.loadTexture(e);
            });
        }
        detectSupport() {
            return this.isSupported || (this.isSupported = new Promise(function(e) {
                const t = new Image;
                t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
                    e(t.height === 1);
                };
            })), this.isSupported;
        }
    }
    class On {
        constructor(e){
            this.name = E.EXT_MESHOPT_COMPRESSION, this.parser = e;
        }
        loadBufferView(e) {
            const t = this.parser.json, s = t.bufferViews[e];
            if (s.extensions && s.extensions[this.name]) {
                const n = s.extensions[this.name], o = this.parser.getDependency("buffer", n.buffer), i = this.parser.options.meshoptDecoder;
                if (!i || !i.supported) {
                    if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                    return null;
                }
                return o.then(function(a) {
                    const r = n.byteOffset || 0, c = n.byteLength || 0, l = n.count, h = n.byteStride, u = new Uint8Array(a, r, c);
                    return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(l, h, u, n.mode, n.filter).then(function(p) {
                        return p.buffer;
                    }) : i.ready.then(function() {
                        const p = new ArrayBuffer(l * h);
                        return i.decodeGltfBuffer(new Uint8Array(p), l, h, u, n.mode, n.filter), p;
                    });
                });
            } else return null;
        }
    }
    class Nn {
        constructor(e){
            this.name = E.EXT_MESH_GPU_INSTANCING, this.parser = e;
        }
        createNodeMesh(e) {
            const t = this.parser.json, s = t.nodes[e];
            if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0) return null;
            const n = t.meshes[s.mesh];
            for (const c of n.primitives)if (c.mode !== Y.TRIANGLES && c.mode !== Y.TRIANGLE_STRIP && c.mode !== Y.TRIANGLE_FAN && c.mode !== void 0) return null;
            const i = s.extensions[this.name].attributes, a = [], r = {};
            for(const c in i)a.push(this.parser.getDependency("accessor", i[c]).then((l)=>(r[c] = l, r[c])));
            return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c)=>{
                const l = c.pop(), h = l.isGroup ? l.children : [
                    l
                ], u = c[0].count, p = [];
                for (const m of h){
                    const _ = new $, g = new f, b = new F, T = new f(1, 1, 1), y = new fs(m.geometry, m.material, u);
                    for(let x = 0; x < u; x++)r.TRANSLATION && g.fromBufferAttribute(r.TRANSLATION, x), r.ROTATION && b.fromBufferAttribute(r.ROTATION, x), r.SCALE && T.fromBufferAttribute(r.SCALE, x), y.setMatrixAt(x, _.compose(g, b, T));
                    for(const x in r)if (x === "_COLOR_0") {
                        const v = r[x];
                        y.instanceColor = new ys(v.array, v.itemSize, v.normalized);
                    } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && m.geometry.setAttribute(x, r[x]);
                    oe.prototype.copy.call(y, m), this.parser.assignFinalMaterial(y), p.push(y);
                }
                return l.isGroup ? (l.clear(), l.add(...p), l) : p[0];
            }));
        }
    }
    const rs = "glTF", Ee = 12, Et = {
        JSON: 1313821514,
        BIN: 5130562
    };
    class Wn {
        constructor(e){
            this.name = E.KHR_BINARY_GLTF, this.content = null, this.body = null;
            const t = new DataView(e, 0, Ee), s = new TextDecoder;
            if (this.header = {
                magic: s.decode(new Uint8Array(e.slice(0, 4))),
                version: t.getUint32(4, !0),
                length: t.getUint32(8, !0)
            }, this.header.magic !== rs) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
            if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
            const n = this.header.length - Ee, o = new DataView(e, Ee);
            let i = 0;
            for(; i < n;){
                const a = o.getUint32(i, !0);
                i += 4;
                const r = o.getUint32(i, !0);
                if (i += 4, r === Et.JSON) {
                    const c = new Uint8Array(e, Ee + i, a);
                    this.content = s.decode(c);
                } else if (r === Et.BIN) {
                    const c = Ee + i;
                    this.body = e.slice(c, c + a);
                }
                i += a;
            }
            if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
        }
    }
    class Gn {
        constructor(e, t){
            if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
            this.name = E.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
        }
        decodePrimitive(e, t) {
            const s = this.json, n = this.dracoLoader, o = e.extensions[this.name].bufferView, i = e.extensions[this.name].attributes, a = {}, r = {}, c = {};
            for(const l in i){
                const h = ht[l] || l.toLowerCase();
                a[h] = i[l];
            }
            for(const l in e.attributes){
                const h = ht[l] || l.toLowerCase();
                if (i[l] !== void 0) {
                    const u = s.accessors[e.attributes[l]], p = Te[u.componentType];
                    c[h] = p.name, r[h] = u.normalized === !0;
                }
            }
            return t.getDependency("bufferView", o).then(function(l) {
                return new Promise(function(h, u) {
                    n.decodeDracoFile(l, function(p) {
                        for(const m in p.attributes){
                            const _ = p.attributes[m], g = r[m];
                            g !== void 0 && (_.normalized = g);
                        }
                        h(p);
                    }, a, c, Q, u);
                });
            });
        }
    }
    class Un {
        constructor(){
            this.name = E.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(e, t) {
            return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
        }
    }
    class jn {
        constructor(){
            this.name = E.KHR_MESH_QUANTIZATION;
        }
    }
    class as extends Ws {
        constructor(e, t, s, n){
            super(e, t, s, n);
        }
        copySampleValue_(e) {
            const t = this.resultBuffer, s = this.sampleValues, n = this.valueSize, o = e * n * 3 + n;
            for(let i = 0; i !== n; i++)t[i] = s[o + i];
            return t;
        }
        interpolate_(e, t, s, n) {
            const o = this.resultBuffer, i = this.sampleValues, a = this.valueSize, r = a * 2, c = a * 3, l = n - t, h = (s - t) / l, u = h * h, p = u * h, m = e * c, _ = m - c, g = -2 * p + 3 * u, b = p - u, T = 1 - g, y = b - u + h;
            for(let x = 0; x !== a; x++){
                const v = i[_ + x + a], L = i[_ + x + r] * l, R = i[m + x + a], w = i[m + x] * l;
                o[x] = T * v + y * L + g * R + b * w;
            }
            return o;
        }
    }
    const Hn = new F;
    class Vn extends as {
        interpolate_(e, t, s, n) {
            const o = super.interpolate_(e, t, s, n);
            return Hn.fromArray(o).normalize().toArray(o), o;
        }
    }
    const Y = {
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6
    }, Te = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    }, Pt = {
        9728: Qt,
        9729: De,
        9984: bs,
        9985: _s,
        9986: xs,
        9987: $t
    }, Lt = {
        33071: Ms,
        33648: vs,
        10497: Ce
    }, $e = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    }, ht = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv1",
        TEXCOORD_2: "uv2",
        TEXCOORD_3: "uv3",
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex"
    }, ie = {
        scale: "scale",
        translation: "position",
        rotation: "quaternion",
        weights: "morphTargetInfluences"
    }, Kn = {
        CUBICSPLINE: void 0,
        LINEAR: Jt,
        STEP: Is
    }, Qe = {
        OPAQUE: "OPAQUE",
        MASK: "MASK",
        BLEND: "BLEND"
    };
    function qn(d) {
        return d.DefaultMaterial === void 0 && (d.DefaultMaterial = new Zt({
            color: 16777215,
            emissive: 0,
            metalness: 1,
            roughness: 1,
            transparent: !1,
            depthTest: !0,
            side: Ns
        })), d.DefaultMaterial;
    }
    function ue(d, e, t) {
        for(const s in t.extensions)d[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
    }
    function ne(d, e) {
        e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(d.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
    }
    function Xn(d, e, t) {
        let s = !1, n = !1, o = !1;
        for(let c = 0, l = e.length; c < l; c++){
            const h = e[c];
            if (h.POSITION !== void 0 && (s = !0), h.NORMAL !== void 0 && (n = !0), h.COLOR_0 !== void 0 && (o = !0), s && n && o) break;
        }
        if (!s && !n && !o) return Promise.resolve(d);
        const i = [], a = [], r = [];
        for(let c = 0, l = e.length; c < l; c++){
            const h = e[c];
            if (s) {
                const u = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : d.attributes.position;
                i.push(u);
            }
            if (n) {
                const u = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : d.attributes.normal;
                a.push(u);
            }
            if (o) {
                const u = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : d.attributes.color;
                r.push(u);
            }
        }
        return Promise.all([
            Promise.all(i),
            Promise.all(a),
            Promise.all(r)
        ]).then(function(c) {
            const l = c[0], h = c[1], u = c[2];
            return s && (d.morphAttributes.position = l), n && (d.morphAttributes.normal = h), o && (d.morphAttributes.color = u), d.morphTargetsRelative = !0, d;
        });
    }
    function Yn(d, e) {
        if (d.updateMorphTargets(), e.weights !== void 0) for(let t = 0, s = e.weights.length; t < s; t++)d.morphTargetInfluences[t] = e.weights[t];
        if (e.extras && Array.isArray(e.extras.targetNames)) {
            const t = e.extras.targetNames;
            if (d.morphTargetInfluences.length === t.length) {
                d.morphTargetDictionary = {};
                for(let s = 0, n = t.length; s < n; s++)d.morphTargetDictionary[t[s]] = s;
            } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
        }
    }
    function $n(d) {
        let e;
        const t = d.extensions && d.extensions[E.KHR_DRACO_MESH_COMPRESSION];
        if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ze(t.attributes) : e = d.indices + ":" + Ze(d.attributes) + ":" + d.mode, d.targets !== void 0) for(let s = 0, n = d.targets.length; s < n; s++)e += ":" + Ze(d.targets[s]);
        return e;
    }
    function Ze(d) {
        let e = "";
        const t = Object.keys(d).sort();
        for(let s = 0, n = t.length; s < n; s++)e += t[s] + ":" + d[t[s]] + ";";
        return e;
    }
    function dt(d) {
        switch(d){
            case Int8Array:
                return 1 / 127;
            case Uint8Array:
                return 1 / 255;
            case Int16Array:
                return 1 / 32767;
            case Uint16Array:
                return 1 / 65535;
            default:
                throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
        }
    }
    function Qn(d) {
        return d.search(/\.jpe?g($|\?)/i) > 0 || d.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : d.search(/\.webp($|\?)/i) > 0 || d.search(/^data\:image\/webp/) === 0 ? "image/webp" : d.search(/\.ktx2($|\?)/i) > 0 || d.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
    }
    const Zn = new $;
    class Jn {
        constructor(e = {}, t = {}){
            this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new bn, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
                refs: {},
                uses: {}
            }, this.cameraCache = {
                refs: {},
                uses: {}
            }, this.lightCache = {
                refs: {},
                uses: {}
            }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
            let s = !1, n = -1, o = !1, i = -1;
            if (typeof navigator < "u") {
                const a = navigator.userAgent;
                s = /^((?!chrome|android).)*safari/i.test(a) === !0;
                const r = a.match(/Version\/(\d+)/);
                n = s && r ? parseInt(r[1], 10) : -1, o = a.indexOf("Firefox") > -1, i = o ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
            }
            typeof createImageBitmap > "u" || s && n < 17 || o && i < 98 ? this.textureLoader = new Fe(this.options.manager) : this.textureLoader = new gs(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Ue(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(e) {
            this.extensions = e;
        }
        setPlugins(e) {
            this.plugins = e;
        }
        parse(e, t) {
            const s = this, n = this.json, o = this.extensions;
            this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(i) {
                return i._markDefs && i._markDefs();
            }), Promise.all(this._invokeAll(function(i) {
                return i.beforeRoot && i.beforeRoot();
            })).then(function() {
                return Promise.all([
                    s.getDependencies("scene"),
                    s.getDependencies("animation"),
                    s.getDependencies("camera")
                ]);
            }).then(function(i) {
                const a = {
                    scene: i[0][n.scene || 0],
                    scenes: i[0],
                    animations: i[1],
                    cameras: i[2],
                    asset: n.asset,
                    parser: s,
                    userData: {}
                };
                return ue(o, a, n), ne(a, n), Promise.all(s._invokeAll(function(r) {
                    return r.afterRoot && r.afterRoot(a);
                })).then(function() {
                    for (const r of a.scenes)r.updateMatrixWorld();
                    e(a);
                });
            }).catch(t);
        }
        _markDefs() {
            const e = this.json.nodes || [], t = this.json.skins || [], s = this.json.meshes || [];
            for(let n = 0, o = t.length; n < o; n++){
                const i = t[n].joints;
                for(let a = 0, r = i.length; a < r; a++)e[i[a]].isBone = !0;
            }
            for(let n = 0, o = e.length; n < o; n++){
                const i = e[n];
                i.mesh !== void 0 && (this._addNodeRef(this.meshCache, i.mesh), i.skin !== void 0 && (s[i.mesh].isSkinnedMesh = !0)), i.camera !== void 0 && this._addNodeRef(this.cameraCache, i.camera);
            }
        }
        _addNodeRef(e, t) {
            t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
        }
        _getNodeRef(e, t, s) {
            if (e.refs[t] <= 1) return s;
            const n = s.clone(), o = (i, a)=>{
                const r = this.associations.get(i);
                r != null && this.associations.set(a, r);
                for (const [c, l] of i.children.entries())o(l, a.children[c]);
            };
            return o(s, n), n.name += "_instance_" + e.uses[t]++, n;
        }
        _invokeOne(e) {
            const t = Object.values(this.plugins);
            t.push(this);
            for(let s = 0; s < t.length; s++){
                const n = e(t[s]);
                if (n) return n;
            }
            return null;
        }
        _invokeAll(e) {
            const t = Object.values(this.plugins);
            t.unshift(this);
            const s = [];
            for(let n = 0; n < t.length; n++){
                const o = e(t[n]);
                o && s.push(o);
            }
            return s;
        }
        getDependency(e, t) {
            const s = e + ":" + t;
            let n = this.cache.get(s);
            if (!n) {
                switch(e){
                    case "scene":
                        n = this.loadScene(t);
                        break;
                    case "node":
                        n = this._invokeOne(function(o) {
                            return o.loadNode && o.loadNode(t);
                        });
                        break;
                    case "mesh":
                        n = this._invokeOne(function(o) {
                            return o.loadMesh && o.loadMesh(t);
                        });
                        break;
                    case "accessor":
                        n = this.loadAccessor(t);
                        break;
                    case "bufferView":
                        n = this._invokeOne(function(o) {
                            return o.loadBufferView && o.loadBufferView(t);
                        });
                        break;
                    case "buffer":
                        n = this.loadBuffer(t);
                        break;
                    case "material":
                        n = this._invokeOne(function(o) {
                            return o.loadMaterial && o.loadMaterial(t);
                        });
                        break;
                    case "texture":
                        n = this._invokeOne(function(o) {
                            return o.loadTexture && o.loadTexture(t);
                        });
                        break;
                    case "skin":
                        n = this.loadSkin(t);
                        break;
                    case "animation":
                        n = this._invokeOne(function(o) {
                            return o.loadAnimation && o.loadAnimation(t);
                        });
                        break;
                    case "camera":
                        n = this.loadCamera(t);
                        break;
                    default:
                        if (n = this._invokeOne(function(o) {
                            return o != this && o.getDependency && o.getDependency(e, t);
                        }), !n) throw new Error("Unknown type: " + e);
                        break;
                }
                this.cache.add(s, n);
            }
            return n;
        }
        getDependencies(e) {
            let t = this.cache.get(e);
            if (!t) {
                const s = this, n = this.json[e + (e === "mesh" ? "es" : "s")] || [];
                t = Promise.all(n.map(function(o, i) {
                    return s.getDependency(e, i);
                })), this.cache.add(e, t);
            }
            return t;
        }
        loadBuffer(e) {
            const t = this.json.buffers[e], s = this.fileLoader;
            if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
            if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[E.KHR_BINARY_GLTF].body);
            const n = this.options;
            return new Promise(function(o, i) {
                s.load(Le.resolveURL(t.uri, n.path), o, void 0, function() {
                    i(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
                });
            });
        }
        loadBufferView(e) {
            const t = this.json.bufferViews[e];
            return this.getDependency("buffer", t.buffer).then(function(s) {
                const n = t.byteLength || 0, o = t.byteOffset || 0;
                return s.slice(o, o + n);
            });
        }
        loadAccessor(e) {
            const t = this, s = this.json, n = this.json.accessors[e];
            if (n.bufferView === void 0 && n.sparse === void 0) {
                const i = $e[n.type], a = Te[n.componentType], r = n.normalized === !0, c = new a(n.count * i);
                return Promise.resolve(new ye(c, i, r));
            }
            const o = [];
            return n.bufferView !== void 0 ? o.push(this.getDependency("bufferView", n.bufferView)) : o.push(null), n.sparse !== void 0 && (o.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(o).then(function(i) {
                const a = i[0], r = $e[n.type], c = Te[n.componentType], l = c.BYTES_PER_ELEMENT, h = l * r, u = n.byteOffset || 0, p = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, m = n.normalized === !0;
                let _, g;
                if (p && p !== h) {
                    const b = Math.floor(u / p), T = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + b + ":" + n.count;
                    let y = t.cache.get(T);
                    y || (_ = new c(a, b * p, n.count * p / l), y = new ws(_, p / l), t.cache.add(T, y)), g = new Os(y, r, u % p / l, m);
                } else a === null ? _ = new c(n.count * r) : _ = new c(a, u, n.count * r), g = new ye(_, r, m);
                if (n.sparse !== void 0) {
                    const b = $e.SCALAR, T = Te[n.sparse.indices.componentType], y = n.sparse.indices.byteOffset || 0, x = n.sparse.values.byteOffset || 0, v = new T(i[1], y, n.sparse.count * b), L = new c(i[2], x, n.sparse.count * r);
                    a !== null && (g = new ye(g.array.slice(), g.itemSize, g.normalized)), g.normalized = !1;
                    for(let R = 0, w = v.length; R < w; R++){
                        const M = v[R];
                        if (g.setX(M, L[R * r]), r >= 2 && g.setY(M, L[R * r + 1]), r >= 3 && g.setZ(M, L[R * r + 2]), r >= 4 && g.setW(M, L[R * r + 3]), r >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                    }
                    g.normalized = m;
                }
                return g;
            });
        }
        loadTexture(e) {
            const t = this.json, s = this.options, o = t.textures[e].source, i = t.images[o];
            let a = this.textureLoader;
            if (i.uri) {
                const r = s.manager.getHandler(i.uri);
                r !== null && (a = r);
            }
            return this.loadTextureImage(e, o, a);
        }
        loadTextureImage(e, t, s) {
            const n = this, o = this.json, i = o.textures[e], a = o.images[t], r = (a.uri || a.bufferView) + ":" + i.sampler;
            if (this.textureCache[r]) return this.textureCache[r];
            const c = this.loadImageSource(t, s).then(function(l) {
                l.flipY = !1, l.name = i.name || a.name || "", l.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (l.name = a.uri);
                const u = (o.samplers || {})[i.sampler] || {};
                return l.magFilter = Pt[u.magFilter] || De, l.minFilter = Pt[u.minFilter] || $t, l.wrapS = Lt[u.wrapS] || Ce, l.wrapT = Lt[u.wrapT] || Ce, l.generateMipmaps = !l.isCompressedTexture && l.minFilter !== Qt && l.minFilter !== De, n.associations.set(l, {
                    textures: e
                }), l;
            }).catch(function() {
                return null;
            });
            return this.textureCache[r] = c, c;
        }
        loadImageSource(e, t) {
            const s = this, n = this.json, o = this.options;
            if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((h)=>h.clone());
            const i = n.images[e], a = self.URL || self.webkitURL;
            let r = i.uri || "", c = !1;
            if (i.bufferView !== void 0) r = s.getDependency("bufferView", i.bufferView).then(function(h) {
                c = !0;
                const u = new Blob([
                    h
                ], {
                    type: i.mimeType
                });
                return r = a.createObjectURL(u), r;
            });
            else if (i.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
            const l = Promise.resolve(r).then(function(h) {
                return new Promise(function(u, p) {
                    let m = u;
                    t.isImageBitmapLoader === !0 && (m = function(_) {
                        const g = new _t(_);
                        g.needsUpdate = !0, u(g);
                    }), t.load(Le.resolveURL(h, o.path), m, void 0, p);
                });
            }).then(function(h) {
                return c === !0 && a.revokeObjectURL(r), ne(h, i), h.userData.mimeType = i.mimeType || Qn(i.uri), h;
            }).catch(function(h) {
                throw console.error("THREE.GLTFLoader: Couldn't load texture", r), h;
            });
            return this.sourceCache[e] = l, l;
        }
        assignTexture(e, t, s, n) {
            const o = this;
            return this.getDependency("texture", s.index).then(function(i) {
                if (!i) return null;
                if (s.texCoord !== void 0 && s.texCoord > 0 && (i = i.clone(), i.channel = s.texCoord), o.extensions[E.KHR_TEXTURE_TRANSFORM]) {
                    const a = s.extensions !== void 0 ? s.extensions[E.KHR_TEXTURE_TRANSFORM] : void 0;
                    if (a) {
                        const r = o.associations.get(i);
                        i = o.extensions[E.KHR_TEXTURE_TRANSFORM].extendTexture(i, a), o.associations.set(i, r);
                    }
                }
                return n !== void 0 && (i.colorSpace = n), e[t] = i, i;
            });
        }
        assignFinalMaterial(e) {
            const t = e.geometry;
            let s = e.material;
            const n = t.attributes.tangent === void 0, o = t.attributes.color !== void 0, i = t.attributes.normal === void 0;
            if (e.isPoints) {
                const a = "PointsMaterial:" + s.uuid;
                let r = this.cache.get(a);
                r || (r = new Ts, qe.prototype.copy.call(r, s), r.color.copy(s.color), r.map = s.map, r.sizeAttenuation = !1, this.cache.add(a, r)), s = r;
            } else if (e.isLine) {
                const a = "LineBasicMaterial:" + s.uuid;
                let r = this.cache.get(a);
                r || (r = new As, qe.prototype.copy.call(r, s), r.color.copy(s.color), r.map = s.map, this.cache.add(a, r)), s = r;
            }
            if (n || o || i) {
                let a = "ClonedMaterial:" + s.uuid + ":";
                n && (a += "derivative-tangents:"), o && (a += "vertex-colors:"), i && (a += "flat-shading:");
                let r = this.cache.get(a);
                r || (r = s.clone(), o && (r.vertexColors = !0), i && (r.flatShading = !0), n && (r.normalScale && (r.normalScale.y *= -1), r.clearcoatNormalScale && (r.clearcoatNormalScale.y *= -1)), this.cache.add(a, r), this.associations.set(r, this.associations.get(s))), s = r;
            }
            e.material = s;
        }
        getMaterialType() {
            return Zt;
        }
        loadMaterial(e) {
            const t = this, s = this.json, n = this.extensions, o = s.materials[e];
            let i;
            const a = {}, r = o.extensions || {}, c = [];
            if (r[E.KHR_MATERIALS_UNLIT]) {
                const h = n[E.KHR_MATERIALS_UNLIT];
                i = h.getMaterialType(), c.push(h.extendParams(a, o, t));
            } else {
                const h = o.pbrMetallicRoughness || {};
                if (a.color = new G(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
                    const u = h.baseColorFactor;
                    a.color.setRGB(u[0], u[1], u[2], Q), a.opacity = u[3];
                }
                h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, le)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), i = this._invokeOne(function(u) {
                    return u.getMaterialType && u.getMaterialType(e);
                }), c.push(Promise.all(this._invokeAll(function(u) {
                    return u.extendMaterialParams && u.extendMaterialParams(e, a);
                })));
            }
            o.doubleSided === !0 && (a.side = Rs);
            const l = o.alphaMode || Qe.OPAQUE;
            if (l === Qe.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, l === Qe.MASK && (a.alphaTest = o.alphaCutoff !== void 0 ? o.alphaCutoff : .5)), o.normalTexture !== void 0 && i !== ce && (c.push(t.assignTexture(a, "normalMap", o.normalTexture)), a.normalScale = new U(1, 1), o.normalTexture.scale !== void 0)) {
                const h = o.normalTexture.scale;
                a.normalScale.set(h, h);
            }
            if (o.occlusionTexture !== void 0 && i !== ce && (c.push(t.assignTexture(a, "aoMap", o.occlusionTexture)), o.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = o.occlusionTexture.strength)), o.emissiveFactor !== void 0 && i !== ce) {
                const h = o.emissiveFactor;
                a.emissive = new G().setRGB(h[0], h[1], h[2], Q);
            }
            return o.emissiveTexture !== void 0 && i !== ce && c.push(t.assignTexture(a, "emissiveMap", o.emissiveTexture, le)), Promise.all(c).then(function() {
                const h = new i(a);
                return o.name && (h.name = o.name), ne(h, o), t.associations.set(h, {
                    materials: e
                }), o.extensions && ue(n, h, o), h;
            });
        }
        createUniqueName(e) {
            const t = Ss.sanitizeNodeName(e || "");
            return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
        }
        loadGeometries(e) {
            const t = this, s = this.extensions, n = this.primitiveCache;
            function o(a) {
                return s[E.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(r) {
                    return Dt(r, a, t);
                });
            }
            const i = [];
            for(let a = 0, r = e.length; a < r; a++){
                const c = e[a], l = $n(c), h = n[l];
                if (h) i.push(h.promise);
                else {
                    let u;
                    c.extensions && c.extensions[E.KHR_DRACO_MESH_COMPRESSION] ? u = o(c) : u = Dt(new pt, c, t), n[l] = {
                        primitive: c,
                        promise: u
                    }, i.push(u);
                }
            }
            return Promise.all(i);
        }
        loadMesh(e) {
            const t = this, s = this.json, n = this.extensions, o = s.meshes[e], i = o.primitives, a = [];
            for(let r = 0, c = i.length; r < c; r++){
                const l = i[r].material === void 0 ? qn(this.cache) : this.getDependency("material", i[r].material);
                a.push(l);
            }
            return a.push(t.loadGeometries(i)), Promise.all(a).then(function(r) {
                const c = r.slice(0, r.length - 1), l = r[r.length - 1], h = [];
                for(let p = 0, m = l.length; p < m; p++){
                    const _ = l[p], g = i[p];
                    let b;
                    const T = c[p];
                    if (g.mode === Y.TRIANGLES || g.mode === Y.TRIANGLE_STRIP || g.mode === Y.TRIANGLE_FAN || g.mode === void 0) b = o.isSkinnedMesh === !0 ? new Es(_, T) : new C(_, T), b.isSkinnedMesh === !0 && b.normalizeSkinWeights(), g.mode === Y.TRIANGLE_STRIP ? b.geometry = St(b.geometry, Xt) : g.mode === Y.TRIANGLE_FAN && (b.geometry = St(b.geometry, at));
                    else if (g.mode === Y.LINES) b = new Ps(_, T);
                    else if (g.mode === Y.LINE_STRIP) b = new Ls(_, T);
                    else if (g.mode === Y.LINE_LOOP) b = new Ds(_, T);
                    else if (g.mode === Y.POINTS) b = new Cs(_, T);
                    else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
                    Object.keys(b.geometry.morphAttributes).length > 0 && Yn(b, o), b.name = t.createUniqueName(o.name || "mesh_" + e), ne(b, o), g.extensions && ue(n, b, g), t.assignFinalMaterial(b), h.push(b);
                }
                for(let p = 0, m = h.length; p < m; p++)t.associations.set(h[p], {
                    meshes: e,
                    primitives: p
                });
                if (h.length === 1) return o.extensions && ue(n, h[0], o), h[0];
                const u = new he;
                o.extensions && ue(n, u, o), t.associations.set(u, {
                    meshes: e
                });
                for(let p = 0, m = h.length; p < m; p++)u.add(h[p]);
                return u;
            });
        }
        loadCamera(e) {
            let t;
            const s = this.json.cameras[e], n = s[s.type];
            if (!n) {
                console.warn("THREE.GLTFLoader: Missing camera parameters.");
                return;
            }
            return s.type === "perspective" ? t = new He(O.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new ks(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), ne(t, s), Promise.resolve(t);
        }
        loadSkin(e) {
            const t = this.json.skins[e], s = [];
            for(let n = 0, o = t.joints.length; n < o; n++)s.push(this._loadNodeShallow(t.joints[n]));
            return t.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(n) {
                const o = n.pop(), i = n, a = [], r = [];
                for(let c = 0, l = i.length; c < l; c++){
                    const h = i[c];
                    if (h) {
                        a.push(h);
                        const u = new $;
                        o !== null && u.fromArray(o.array, c * 16), r.push(u);
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
                }
                return new Bs(a, r);
            });
        }
        loadAnimation(e) {
            const t = this.json, s = this, n = t.animations[e], o = n.name ? n.name : "animation_" + e, i = [], a = [], r = [], c = [], l = [];
            for(let h = 0, u = n.channels.length; h < u; h++){
                const p = n.channels[h], m = n.samplers[p.sampler], _ = p.target, g = _.node, b = n.parameters !== void 0 ? n.parameters[m.input] : m.input, T = n.parameters !== void 0 ? n.parameters[m.output] : m.output;
                _.node !== void 0 && (i.push(this.getDependency("node", g)), a.push(this.getDependency("accessor", b)), r.push(this.getDependency("accessor", T)), c.push(m), l.push(_));
            }
            return Promise.all([
                Promise.all(i),
                Promise.all(a),
                Promise.all(r),
                Promise.all(c),
                Promise.all(l)
            ]).then(function(h) {
                const u = h[0], p = h[1], m = h[2], _ = h[3], g = h[4], b = [];
                for(let T = 0, y = u.length; T < y; T++){
                    const x = u[T], v = p[T], L = m[T], R = _[T], w = g[T];
                    if (x === void 0) continue;
                    x.updateMatrix && x.updateMatrix();
                    const M = s._createAnimationTracks(x, v, L, R, w);
                    if (M) for(let A = 0; A < M.length; A++)b.push(M[A]);
                }
                return new zs(o, void 0, b);
            });
        }
        createNodeMesh(e) {
            const t = this.json, s = this, n = t.nodes[e];
            return n.mesh === void 0 ? null : s.getDependency("mesh", n.mesh).then(function(o) {
                const i = s._getNodeRef(s.meshCache, n.mesh, o);
                return n.weights !== void 0 && i.traverse(function(a) {
                    if (a.isMesh) for(let r = 0, c = n.weights.length; r < c; r++)a.morphTargetInfluences[r] = n.weights[r];
                }), i;
            });
        }
        loadNode(e) {
            const t = this.json, s = this, n = t.nodes[e], o = s._loadNodeShallow(e), i = [], a = n.children || [];
            for(let c = 0, l = a.length; c < l; c++)i.push(s.getDependency("node", a[c]));
            const r = n.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", n.skin);
            return Promise.all([
                o,
                Promise.all(i),
                r
            ]).then(function(c) {
                const l = c[0], h = c[1], u = c[2];
                u !== null && l.traverse(function(p) {
                    p.isSkinnedMesh && p.bind(u, Zn);
                });
                for(let p = 0, m = h.length; p < m; p++)l.add(h[p]);
                return l;
            });
        }
        _loadNodeShallow(e) {
            const t = this.json, s = this.extensions, n = this;
            if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
            const o = t.nodes[e], i = o.name ? n.createUniqueName(o.name) : "", a = [], r = n._invokeOne(function(c) {
                return c.createNodeMesh && c.createNodeMesh(e);
            });
            return r && a.push(r), o.camera !== void 0 && a.push(n.getDependency("camera", o.camera).then(function(c) {
                return n._getNodeRef(n.cameraCache, o.camera, c);
            })), n._invokeAll(function(c) {
                return c.createNodeAttachment && c.createNodeAttachment(e);
            }).forEach(function(c) {
                a.push(c);
            }), this.nodeCache[e] = Promise.all(a).then(function(c) {
                let l;
                if (o.isBone === !0 ? l = new Fs : c.length > 1 ? l = new he : c.length === 1 ? l = c[0] : l = new oe, l !== c[0]) for(let h = 0, u = c.length; h < u; h++)l.add(c[h]);
                if (o.name && (l.userData.name = o.name, l.name = i), ne(l, o), o.extensions && ue(s, l, o), o.matrix !== void 0) {
                    const h = new $;
                    h.fromArray(o.matrix), l.applyMatrix4(h);
                } else o.translation !== void 0 && l.position.fromArray(o.translation), o.rotation !== void 0 && l.quaternion.fromArray(o.rotation), o.scale !== void 0 && l.scale.fromArray(o.scale);
                return n.associations.has(l) || n.associations.set(l, {}), n.associations.get(l).nodes = e, l;
            }), this.nodeCache[e];
        }
        loadScene(e) {
            const t = this.extensions, s = this.json.scenes[e], n = this, o = new he;
            s.name && (o.name = n.createUniqueName(s.name)), ne(o, s), s.extensions && ue(t, o, s);
            const i = s.nodes || [], a = [];
            for(let r = 0, c = i.length; r < c; r++)a.push(n.getDependency("node", i[r]));
            return Promise.all(a).then(function(r) {
                for(let l = 0, h = r.length; l < h; l++)o.add(r[l]);
                const c = (l)=>{
                    const h = new Map;
                    for (const [u, p] of n.associations)(u instanceof qe || u instanceof _t) && h.set(u, p);
                    return l.traverse((u)=>{
                        const p = n.associations.get(u);
                        p != null && h.set(u, p);
                    }), h;
                };
                return n.associations = c(o), o;
            });
        }
        _createAnimationTracks(e, t, s, n, o) {
            const i = [], a = e.name ? e.name : e.uuid, r = [];
            ie[o.path] === ie.weights ? e.traverse(function(u) {
                u.morphTargetInfluences && r.push(u.name ? u.name : u.uuid);
            }) : r.push(a);
            let c;
            switch(ie[o.path]){
                case ie.weights:
                    c = vt;
                    break;
                case ie.rotation:
                    c = Mt;
                    break;
                case ie.position:
                case ie.scale:
                    c = bt;
                    break;
                default:
                    switch(s.itemSize){
                        case 1:
                            c = vt;
                            break;
                        case 2:
                        case 3:
                        default:
                            c = bt;
                            break;
                    }
                    break;
            }
            const l = n.interpolation !== void 0 ? Kn[n.interpolation] : Jt, h = this._getArrayFromAccessor(s);
            for(let u = 0, p = r.length; u < p; u++){
                const m = new c(r[u] + "." + ie[o.path], t.array, h, l);
                n.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), i.push(m);
            }
            return i;
        }
        _getArrayFromAccessor(e) {
            let t = e.array;
            if (e.normalized) {
                const s = dt(t.constructor), n = new Float32Array(t.length);
                for(let o = 0, i = t.length; o < i; o++)n[o] = t[o] * s;
                t = n;
            }
            return t;
        }
        _createCubicSplineTrackInterpolant(e) {
            e.createInterpolant = function(s) {
                const n = this instanceof Mt ? Vn : as;
                return new n(this.times, this.values, this.getValueSize() / 3, s);
            }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
        }
    }
    function eo(d, e, t) {
        const s = e.attributes, n = new Gs;
        if (s.POSITION !== void 0) {
            const a = t.json.accessors[s.POSITION], r = a.min, c = a.max;
            if (r !== void 0 && c !== void 0) {
                if (n.set(new f(r[0], r[1], r[2]), new f(c[0], c[1], c[2])), a.normalized) {
                    const l = dt(Te[a.componentType]);
                    n.min.multiplyScalar(l), n.max.multiplyScalar(l);
                }
            } else {
                console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                return;
            }
        } else return;
        const o = e.targets;
        if (o !== void 0) {
            const a = new f, r = new f;
            for(let c = 0, l = o.length; c < l; c++){
                const h = o[c];
                if (h.POSITION !== void 0) {
                    const u = t.json.accessors[h.POSITION], p = u.min, m = u.max;
                    if (p !== void 0 && m !== void 0) {
                        if (r.setX(Math.max(Math.abs(p[0]), Math.abs(m[0]))), r.setY(Math.max(Math.abs(p[1]), Math.abs(m[1]))), r.setZ(Math.max(Math.abs(p[2]), Math.abs(m[2]))), u.normalized) {
                            const _ = dt(Te[u.componentType]);
                            r.multiplyScalar(_);
                        }
                        a.max(r);
                    } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                }
            }
            n.expandByVector(a);
        }
        d.boundingBox = n;
        const i = new Us;
        n.getCenter(i.center), i.radius = n.min.distanceTo(n.max) / 2, d.boundingSphere = i;
    }
    function Dt(d, e, t) {
        const s = e.attributes, n = [];
        function o(i, a) {
            return t.getDependency("accessor", i).then(function(r) {
                d.setAttribute(a, r);
            });
        }
        for(const i in s){
            const a = ht[i] || i.toLowerCase();
            a in d.attributes || n.push(o(s[i], a));
        }
        if (e.indices !== void 0 && !d.index) {
            const i = t.getDependency("accessor", e.indices).then(function(a) {
                d.setIndex(a);
            });
            n.push(i);
        }
        return ct.workingColorSpace !== Q && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`), ne(d, e), eo(d, e, t), Promise.all(n).then(function() {
            return e.targets !== void 0 ? Xn(d, e.targets, t) : d;
        });
    }
    class Be extends C {
        constructor(e, t = {}){
            super(e), this.isReflector = !0, this.type = "Reflector", this.forceUpdate = !1, this.camera = new He;
            const s = this, n = t.color !== void 0 ? new G(t.color) : new G(8355711), o = t.textureWidth || 512, i = t.textureHeight || 512, a = t.clipBias || 0, r = t.shader || Be.ReflectorShader, c = t.multisample !== void 0 ? t.multisample : 4, l = new Ge, h = new f, u = new f, p = new f, m = new $, _ = new f(0, 0, -1), g = new ke, b = new f, T = new f, y = new ke, x = new $, v = this.camera, L = new es(o, i, {
                samples: c,
                type: ve
            }), R = new mt({
                name: r.name !== void 0 ? r.name : "unspecified",
                uniforms: ft.clone(r.uniforms),
                fragmentShader: r.fragmentShader,
                vertexShader: r.vertexShader
            });
            R.uniforms.tDiffuse.value = L.texture, R.uniforms.color.value = n, R.uniforms.textureMatrix.value = x, this.material = R, this.onBeforeRender = function(w, M, A) {
                if (u.setFromMatrixPosition(s.matrixWorld), p.setFromMatrixPosition(A.matrixWorld), m.extractRotation(s.matrixWorld), h.set(0, 0, 1), h.applyMatrix4(m), b.subVectors(u, p), b.dot(h) > 0 === !0 && this.forceUpdate === !1) return;
                b.reflect(h).negate(), b.add(u), m.extractRotation(A.matrixWorld), _.set(0, 0, -1), _.applyMatrix4(m), _.add(p), T.subVectors(u, _), T.reflect(h).negate(), T.add(u), v.position.copy(b), v.up.set(0, 1, 0), v.up.applyMatrix4(m), v.up.reflect(h), v.lookAt(T), v.far = A.far, v.updateMatrixWorld(), v.projectionMatrix.copy(A.projectionMatrix), x.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), x.multiply(v.projectionMatrix), x.multiply(v.matrixWorldInverse), x.multiply(s.matrixWorld), l.setFromNormalAndCoplanarPoint(h, u), l.applyMatrix4(v.matrixWorldInverse), g.set(l.normal.x, l.normal.y, l.normal.z, l.constant);
                const D = v.projectionMatrix;
                y.x = (Math.sign(g.x) + D.elements[8]) / D.elements[0], y.y = (Math.sign(g.y) + D.elements[9]) / D.elements[5], y.z = -1, y.w = (1 + D.elements[10]) / D.elements[14], g.multiplyScalar(2 / g.dot(y)), D.elements[2] = g.x, D.elements[6] = g.y, D.elements[10] = g.z + 1 - a, D.elements[14] = g.w, s.visible = !1;
                const I = w.getRenderTarget(), P = w.xr.enabled, N = w.shadowMap.autoUpdate;
                w.xr.enabled = !1, w.shadowMap.autoUpdate = !1, w.setRenderTarget(L), w.state.buffers.depth.setMask(!0), w.autoClear === !1 && w.clear(), w.render(M, v), w.xr.enabled = P, w.shadowMap.autoUpdate = N, w.setRenderTarget(I);
                const k = A.viewport;
                k !== void 0 && w.state.viewport(k), s.visible = !0, this.forceUpdate = !1;
            }, this.getRenderTarget = function() {
                return L;
            }, this.dispose = function() {
                L.dispose(), s.material.dispose();
            };
        }
    }
    Be.ReflectorShader = {
        name: "ReflectorShader",
        uniforms: {
            color: {
                value: null
            },
            tDiffuse: {
                value: null
            },
            textureMatrix: {
                value: null
            }
        },
        vertexShader: `
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,
        fragmentShader: `
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`
    };
    class ze extends C {
        constructor(e, t = {}){
            super(e), this.isRefractor = !0, this.type = "Refractor", this.camera = new He;
            const s = this, n = t.color !== void 0 ? new G(t.color) : new G(8355711), o = t.textureWidth || 512, i = t.textureHeight || 512, a = t.clipBias || 0, r = t.shader || ze.RefractorShader, c = t.multisample !== void 0 ? t.multisample : 4, l = this.camera;
            l.matrixAutoUpdate = !1, l.userData.refractor = !0;
            const h = new Ge, u = new $, p = new es(o, i, {
                samples: c,
                type: ve
            });
            this.material = new mt({
                name: r.name !== void 0 ? r.name : "unspecified",
                uniforms: ft.clone(r.uniforms),
                vertexShader: r.vertexShader,
                fragmentShader: r.fragmentShader,
                transparent: !0
            }), this.material.uniforms.color.value = n, this.material.uniforms.tDiffuse.value = p.texture, this.material.uniforms.textureMatrix.value = u;
            const m = function() {
                const y = new f, x = new f, v = new $, L = new f, R = new f;
                return function(M) {
                    return y.setFromMatrixPosition(s.matrixWorld), x.setFromMatrixPosition(M.matrixWorld), L.subVectors(y, x), v.extractRotation(s.matrixWorld), R.set(0, 0, 1), R.applyMatrix4(v), L.dot(R) < 0;
                };
            }(), _ = function() {
                const y = new f, x = new f, v = new F, L = new f;
                return function() {
                    s.matrixWorld.decompose(x, v, L), y.set(0, 0, 1).applyQuaternion(v).normalize(), y.negate(), h.setFromNormalAndCoplanarPoint(y, x);
                };
            }(), g = function() {
                const y = new Ge, x = new ke, v = new ke;
                return function(R) {
                    l.matrixWorld.copy(R.matrixWorld), l.matrixWorldInverse.copy(l.matrixWorld).invert(), l.projectionMatrix.copy(R.projectionMatrix), l.far = R.far, y.copy(h), y.applyMatrix4(l.matrixWorldInverse), x.set(y.normal.x, y.normal.y, y.normal.z, y.constant);
                    const w = l.projectionMatrix;
                    v.x = (Math.sign(x.x) + w.elements[8]) / w.elements[0], v.y = (Math.sign(x.y) + w.elements[9]) / w.elements[5], v.z = -1, v.w = (1 + w.elements[10]) / w.elements[14], x.multiplyScalar(2 / x.dot(v)), w.elements[2] = x.x, w.elements[6] = x.y, w.elements[10] = x.z + 1 - a, w.elements[14] = x.w;
                };
            }();
            function b(y) {
                u.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), u.multiply(y.projectionMatrix), u.multiply(y.matrixWorldInverse), u.multiply(s.matrixWorld);
            }
            function T(y, x, v) {
                s.visible = !1;
                const L = y.getRenderTarget(), R = y.xr.enabled, w = y.shadowMap.autoUpdate;
                y.xr.enabled = !1, y.shadowMap.autoUpdate = !1, y.setRenderTarget(p), y.autoClear === !1 && y.clear(), y.render(x, l), y.xr.enabled = R, y.shadowMap.autoUpdate = w, y.setRenderTarget(L);
                const M = v.viewport;
                M !== void 0 && y.state.viewport(M), s.visible = !0;
            }
            this.onBeforeRender = function(y, x, v) {
                v.userData.refractor !== !0 && m(v) && (_(), b(v), g(v), T(y, x, v));
            }, this.getRenderTarget = function() {
                return p;
            }, this.dispose = function() {
                p.dispose(), s.material.dispose();
            };
        }
    }
    ze.RefractorShader = {
        name: "RefractorShader",
        uniforms: {
            color: {
                value: null
            },
            tDiffuse: {
                value: null
            },
            textureMatrix: {
                value: null
            }
        },
        vertexShader: `

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
        fragmentShader: `

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`
    };
    class Ve extends C {
        constructor(e, t = {}){
            super(e), this.isWater = !0, this.type = "Water";
            const s = this, n = t.color !== void 0 ? new G(t.color) : new G(16777215), o = t.textureWidth !== void 0 ? t.textureWidth : 512, i = t.textureHeight !== void 0 ? t.textureHeight : 512, a = t.clipBias !== void 0 ? t.clipBias : 0, r = t.flowDirection !== void 0 ? t.flowDirection : new U(1, 0), c = t.flowSpeed !== void 0 ? t.flowSpeed : .03, l = t.reflectivity !== void 0 ? t.reflectivity : .02, h = t.scale !== void 0 ? t.scale : 1, u = t.shader !== void 0 ? t.shader : Ve.WaterShader, p = new Fe, m = t.flowMap || void 0, _ = t.normalMap0 || p.load("textures/water/Water_1_M_Normal.jpg"), g = t.normalMap1 || p.load("textures/water/Water_2_M_Normal.jpg"), b = .15, T = b * .5, y = new $, x = new ts;
            if (Be === void 0) {
                console.error("THREE.Water: Required component Reflector not found.");
                return;
            }
            if (ze === void 0) {
                console.error("THREE.Water: Required component Refractor not found.");
                return;
            }
            const v = new Be(e, {
                textureWidth: o,
                textureHeight: i,
                clipBias: a
            }), L = new ze(e, {
                textureWidth: o,
                textureHeight: i,
                clipBias: a
            });
            v.matrixAutoUpdate = !1, L.matrixAutoUpdate = !1, this.material = new mt({
                name: u.name,
                uniforms: ft.merge([
                    js.fog,
                    u.uniforms
                ]),
                vertexShader: u.vertexShader,
                fragmentShader: u.fragmentShader,
                transparent: !0,
                fog: !0
            }), m !== void 0 ? (this.material.defines.USE_FLOWMAP = "", this.material.uniforms.tFlowMap = {
                type: "t",
                value: m
            }) : this.material.uniforms.flowDirection = {
                type: "v2",
                value: r
            }, _.wrapS = _.wrapT = Ce, g.wrapS = g.wrapT = Ce, this.material.uniforms.tReflectionMap.value = v.getRenderTarget().texture, this.material.uniforms.tRefractionMap.value = L.getRenderTarget().texture, this.material.uniforms.tNormalMap0.value = _, this.material.uniforms.tNormalMap1.value = g, this.material.uniforms.color.value = n, this.material.uniforms.reflectivity.value = l, this.material.uniforms.textureMatrix.value = y, this.material.uniforms.config.value.x = 0, this.material.uniforms.config.value.y = T, this.material.uniforms.config.value.z = T, this.material.uniforms.config.value.w = h;
            function R(M) {
                y.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), y.multiply(M.projectionMatrix), y.multiply(M.matrixWorldInverse), y.multiply(s.matrixWorld);
            }
            function w() {
                const M = x.getDelta(), A = s.material.uniforms.config;
                A.value.x += c * M, A.value.y = A.value.x + T, A.value.x >= b ? (A.value.x = 0, A.value.y = T) : A.value.y >= b && (A.value.y = A.value.y - b);
            }
            this.onBeforeRender = function(M, A, z) {
                R(z), w(), s.visible = !1, v.matrixWorld.copy(s.matrixWorld), L.matrixWorld.copy(s.matrixWorld), v.onBeforeRender(M, A, z), L.onBeforeRender(M, A, z), s.visible = !0;
            };
        }
    }
    Ve.WaterShader = {
        name: "WaterShader",
        uniforms: {
            color: {
                type: "c",
                value: null
            },
            reflectivity: {
                type: "f",
                value: 0
            },
            tReflectionMap: {
                type: "t",
                value: null
            },
            tRefractionMap: {
                type: "t",
                value: null
            },
            tNormalMap0: {
                type: "t",
                value: null
            },
            tNormalMap1: {
                type: "t",
                value: null
            },
            textureMatrix: {
                type: "m4",
                value: null
            },
            config: {
                type: "v4",
                value: new ke
            }
        },
        vertexShader: `

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,
        fragmentShader: `

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>

		}`
    };
    const to = "/Simulador-de-estacionamento/hdr";
    new Fe;
    const so = new gn;
    new is;
    class no {
        constructor(){
            this.sceneGraph = new Hs, this.objects = [], this.camera = this.createCamera(), this.renderer = this.createRenderer(), this.initLights(), this.initScene(), this.controls = new nn(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .05, this._followEnabled = !0, this._followTarget = null, this._followOffset = new f(0, 7, 10), this._followLerp = .9, this.controls.addEventListener("start", ()=>{
                this._followEnabled = !1;
            });
        }
        createCamera() {
            const t = window.innerWidth / window.innerHeight, s = .1, n = 1e3, o = new He(70, t, s, n);
            return o.position.set(0, 10, 15), o.lookAt(0, 0, 0), o;
        }
        createRenderer() {
            const e = document.querySelector("canvas.webgl"), t = new Vs({
                canvas: e,
                antialias: !0
            });
            return t.shadowMap.enabled = !0, t.shadowMap.type = Ks, t.toneMapping = qs, t.outputEncoding = void 0, t.toneMappingExposure = .4, t.setPixelRatio(window.devicePixelRatio), t.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(t.domElement), t;
        }
        initScene() {
            console.log("Initializing scene...");
            const e = so.load(`${to}/kloppenheim_06_puresky_1k.hdr`);
            e.mapping = Xs, this.sceneGraph.background = e, this.sceneGraph.environment = e;
        }
        initLights() {
            const e = new Ys(16777215, .4);
            this.sceneGraph.add(e);
            const t = new lt(16777120, 2.8), s = 15;
            t.position.set(0, s, 0), t.castShadow = !0, t.shadow.camera.near = 0, t.shadow.camera.far = s * 2, t.shadow.camera.left = -200, t.shadow.camera.right = 200, t.shadow.camera.top = 200, t.shadow.camera.bottom = -200, t.shadow.mapSize.set(4096, 4096), this.sceneGraph.add(t), new lt(16777215, .3).position.set(-30, 50, -30), this.sceneGraph.fog = new $s(8900331, 0, 1e3);
        }
        addToScene(e) {
            e.isMesh && (e.castShadow = !0, e.receiveShadow = !0), e.traverse((t)=>{
                t.isMesh && (t.castShadow = !0, t.receiveShadow = !0);
            }), this.sceneGraph.add(e), e.updateMatrixWorld;
        }
        addToGround(e) {
            e.isMesh && (e.castShadow = !0, e.receiveShadow = !0), e.traverse((t)=>{
                t.isMesh && (t.castShadow = !0, t.receiveShadow = !0);
            }), this.sceneGraph.add(e), e.updateMatrixWorld;
        }
        removeFromScene(e) {
            this.sceneGraph.remove(e);
        }
        setFollowTarget(e, t = this._followOffset, s = this._followLerp) {
            this._followTarget = e, this._followOffset = t, this._followLerp = s;
        }
        enableFollow() {
            this._followEnabled = !0;
        }
        updateCamera() {
            if (!this._followEnabled || !this._followTarget) return;
            const e = this._followTarget, t = this._followOffset.clone();
            t.applyQuaternion(e.quaternion), this.controls.target.copy(this._followTarget);
            const s = e.position.clone().add(t);
            this.camera.position.lerp(s, this._followLerp), this.controls.target.copy(e.position), this.controls.update();
        }
        renderScene() {
            this.renderer.render(this.sceneGraph, this.camera);
        }
        onWindowResize() {
            const e = window.innerWidth, t = window.innerHeight;
            this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
        }
    }
    const oo = 10, io = .8, ro = 24, ao = 1e3, co = 16711680, lo = !1, ho = .9, uo = 4210752, po = !1, mo = .9, fo = new f(2, 1, 4), yo = .5, go = .4, wo = [
        {
            x: -1,
            y: 0,
            z: -1.5
        },
        {
            x: 1,
            y: 0,
            z: -1.5
        },
        {
            x: -1,
            y: 0,
            z: 1.5
        },
        {
            x: 1,
            y: 0,
            z: 1.5
        }
    ];
    class xo {
        rapierDebugRender;
        world;
        scene;
        options;
        chassisMesh;
        chassisBody;
        chassisCollider;
        controller;
        wheels;
        movement;
        constructor(e, t, s, n, o = {}, i){
            this.rapierDebugRender = i, this.movement = {
                forward: 0,
                right: 0,
                brake: 0,
                reset: !1,
                accelerateForce: {
                    value: 0,
                    min: -30,
                    max: 30,
                    step: 1
                },
                brakeForce: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: .05
                }
            }, this.scene = e, this.sceneManager = t, this.world = s, this.physicsManager = n, this.options = {
                chassisSize: fo,
                wheelRadius: yo,
                wheelWidth: go,
                ...o
            }, this.initChassis(), this.initWheels();
        }
        initChassis() {
            this.chassisMesh = new C(new X(...this.options.chassisSize.toArray()), new j({
                color: co,
                transparent: lo,
                opacity: ho
            })), this.options.chassisPosition ? (this.chassisMesh.position.copy(this.options.chassisPosition), this.spawnPos = this.options.chassisPosition.clone()) : (this.chassisMesh.position.set(0, 3, 0), this.spawnPos = new f(0, 3, 0)), this.chassisMesh.castShadow = !0, this.sceneManager.addToScene(this.chassisMesh), this.follow_target = this.chassisMesh;
            const e = q.cuboid(this.options.chassisSize.x / 2, this.options.chassisSize.y / 2, this.options.chassisSize.z / 2);
            e.setMass(oo), e.setRestitution(io);
            const t = V.dynamic();
            console.log("this.chassisMesh.position", this.chassisMesh.position), console.log("this.chassisMesh.quaternion", this.chassisMesh.quaternion), t.setTranslation(...this.chassisMesh.position.toArray()), this.chassisBody = this.world.createRigidBody(t), this.chassisBody.userData = {
                name: "chassis"
            }, this.chassisCollider = this.world.createCollider(e, this.chassisBody), this.chassisMesh.userData.physics || (this.chassisMesh.userData.physics = {}), this.chassisMesh.userData.physics.body = this.chassisBody, this.controller = this.world.createVehicleController(this.chassisBody);
        }
        initWheels() {
            this.wheels = [], wo.forEach((e, t)=>{
                this.addWheel(t, e);
            }), this.controller.setWheelSteering(0, Math.PI / 4), this.controller.setWheelSteering(1, Math.PI / 4);
        }
        addWheel(e, t) {
            const s = {
                radius: this.options.wheelRadius,
                width: this.options.wheelWidth,
                suspensionRestLength: .8,
                position: new f(t.x, t.y, t.z),
                direction: new S(...Object.values({
                    x: 0,
                    y: -1,
                    z: 0
                })),
                axle: new S(...Object.values({
                    x: -1,
                    y: 0,
                    z: 0
                }))
            };
            this.controller.addWheel(s.position, s.direction, s.axle, s.suspensionRestLength, s.radius), this.controller.setWheelSuspensionStiffness(e, ro), this.controller.setWheelFrictionSlip(e, ao), this.controller.setWheelSteering(e, t.z < 0);
            const n = new Z(s.radius, s.radius, s.width, 16);
            n.rotateZ(Math.PI * .5);
            const o = new C(n, new j({
                color: uo,
                transparent: po,
                opacity: mo
            }));
            o.castShadow = !0, o.position.copy(t), this.wheels.push(o), this.chassisMesh.add(o);
        }
        updateController(e) {
            if (this.movement = e, this.movement.reset) {
                this.chassisBody.setTranslation(this.spawnPos, !0), this.chassisBody.setRotation(new ge(0, 0, 0, 1), !0), this.chassisBody.setLinvel(new S(0, 0, 0), !0), this.chassisBody.setAngvel(new S(0, 0, 0), !0), this.movement.accelerateForce.value = 0, this.movement.brakeForce.value = 0, this.movement.reset = !1;
                return;
            }
            let t = 0;
            this.movement.forward < 0 ? (t = this.movement.accelerateForce.value - this.movement.accelerateForce.step, t < this.movement.accelerateForce.min && (t = this.movement.accelerateForce.min)) : this.movement.forward > 0 ? (t = this.movement.accelerateForce.value + this.movement.accelerateForce.step, t > this.movement.accelerateForce.max && (t = this.movement.accelerateForce.max)) : this.chassisBody.isSleeping() && this.chassisBody.wakeUp(), this.movement.accelerateForce.value = t;
            let s = 0;
            this.movement.brake > 0 && (s = this.movement.brakeForce.value + this.movement.brakeForce.step, s > this.movement.brakeForce.max && (s = this.movement.brakeForce.max)), this.movement.brakeForce.value = s;
            const n = t;
            this.controller.setWheelEngineForce(0, n), this.controller.setWheelEngineForce(1, n);
            const o = this.controller.wheelSteering(0), i = this.movement.right, a = Math.PI / 4, r = O.lerp(o, a * i, .25);
            this.controller.setWheelSteering(0, r), this.controller.setWheelSteering(1, r);
            const c = this.movement.brake * s;
            this.controller.setWheelBrake(0, c), this.controller.setWheelBrake(1, c), this.controller.setWheelBrake(2, c), this.controller.setWheelBrake(3, c);
        }
        updateWheels() {
            if (this.controller === void 0) return;
            const e = new F, t = new F, s = new f(0, 1, 0);
            this.wheels.forEach((n, o)=>{
                const i = this.controller.wheelAxleCs(o), a = this.controller.wheelChassisConnectionPointCs(o).y || 0, r = this.controller.wheelSuspensionLength(o) || 0, c = this.controller.wheelSteering(o) || 0, l = this.controller.wheelRotation(o) || 0;
                n.position.y = a - r, e.setFromAxisAngle(s, c), t.setFromAxisAngle(i, l), n.quaternion.multiplyQuaternions(e, t);
            });
        }
    }
    const _o = 60, bo = {
        x: 0,
        y: -9.81,
        z: 0
    };
    class vo {
        world;
        meshes;
        meshMap;
        movement;
        rapierDebugRender;
        constructor(){
            this.world = new Qs(bo), this.meshes = [], this.meshMap = new WeakMap, this._vector = new f, this._quaternion = new F, this._matrix = new $, this.clock = new ts, this.eventQueue = new Zs(!0);
        }
        addScene(e) {
            e.traverse(function(t) {
                t.isMesh && t.userData.physics;
            });
        }
        addFixedMesh(e, t, s) {
            e.userData || (e.userData = {}), e.userData.physics ? (e.userData.physics.body = t, e.userData.physics.collisions || (e.userData.physics.collisions = new Set)) : e.userData.physics = {
                body: t,
                collisions: new Set
            }, e.userData.name = s;
        }
        addMesh(e, t, s) {
            this.meshes.push(e), this.meshMap.set(e, t), e.userData || (e.userData = {}), e.userData.physics ? (e.userData.physics.body = t, e.userData.physics.collisions || (e.userData.physics.collisions = new Set)) : e.userData.physics = {
                body: t,
                collisions: new Set
            }, e.userData.name = s;
        }
        addGroup(e, t, s) {
            this.meshes.push(e), this.meshMap.set(e, t), e.userData || (e.userData = {}), e.userData.physics ? (e.userData.physics.body = t, e.userData.physics.collisions || (e.userData.physics.collisions = new Set)) : e.userData.physics = {
                body: t,
                collisions: new Set
            }, e.userData.name = s;
        }
        removeMesh(e) {
            const t = this.meshMap.get(e);
            if (t) {
                this.world.removeRigidBody(t), (t.colliderHandles ? t.colliderHandles() : []).forEach((o)=>this.world.removeCollider(o)), this.meshMap.delete(e);
                const n = this.meshes.indexOf(e);
                n !== -1 && this.meshes.splice(n, 1);
            } else console.warn("removeMesh: Body não encontrado para a mesh:", e);
        }
        addHeightfield(e, t, s, n, o) {
            const i = q.heightfield(t, s, n, o), a = V.fixed();
            a.setTranslation(e.position.x, e.position.y, e.position.z), a.setRotation(e.quaternion);
            const r = world.createRigidBody(a);
            return this.world.createCollider(i, r), e.userData.physics || (e.userData.physics = {}), e.userData.physics.body = r, r;
        }
        getSimpleColliderDesc(e) {
            const t = e.geometry, s = t.parameters;
            if (t.type === "BoxGeometry") {
                console.log("getSimpleColliderDesc: BoxGeometry");
                const n = s.width !== void 0 ? s.width / 2 : .5, o = s.height !== void 0 ? s.height / 2 : .5, i = s.depth !== void 0 ? s.depth / 2 : .5;
                return q.cuboid(n, o, i);
            } else if (t.type === "SphereGeometry" || t.type === "IcosahedronGeometry") {
                console.log("getSimpleColliderDesc: SphereGeometry");
                const n = s.radius !== void 0 ? s.radius : 1;
                return q.ball(n);
            } else if (t.type === "CylinderGeometry") {
                console.log("getSimpleColliderDesc: CylinderGeometry");
                const n = s.radiusBottom !== void 0 ? s.radiusBottom : .5, o = s.height !== void 0 ? s.height : .5;
                return q.cylinder(o / 2, n);
            } else if (t.type === "CapsuleGeometry") {
                console.log("getSimpleColliderDesc: CapsuleGeometry");
                const n = s.radius !== void 0 ? s.radius : .5, o = s.height !== void 0 ? s.height : .5;
                return q.capsule(o / 2, n);
            } else return console.warn("getSimpleColliderDesc: geometry não é um tipo suportado."), null;
        }
        getTrimeshColliderDesc(e) {
            const t = e.geometry;
            if (!t.isBufferGeometry) return console.warn("getTrimeshColliderDesc: mesh não é um BufferGeometry válido."), null;
            const s = [], n = new Vector3, o = t.getAttribute("position");
            for(let r = 0; r < o.count; r++)n.fromBufferAttribute(o, r), s.push(n.x, n.y, n.z);
            const i = t.getIndex() === null ? Uint32Array.from(Array(parseInt(s.length / 3)).keys()) : t.getIndex().array;
            return q.trimesh(s, i);
        }
        getConvexMeshColliderDesc(e) {
            if (!e.isMesh) return console.warn("createConvexMeshColliderDesc: mesh não é um Mesh válido."), null;
            const t = new Float32Array(e.geometry.getAttribute("position").array);
            return q.convexMesh(t);
        }
        addRoadTiles(e) {}
        createJointData(e) {
            const { type: t, anchor1: s, anchor2: n, axis: o, frame1: i, frame2: a, limits: r, stiffness: c, damping: l, length: h, axesMask: u } = e;
            let p;
            switch(t){
                case "fixed":
                    return de.fixed(new S(...s), new ge(...i), new S(...n), new ge(...a));
                case "revolute":
                    return p = de.revolute(new S(...s), new S(...n), new S(...o)), p;
                case "prismatic":
                    return p = de.prismatic(new S(...s), new S(...n), new S(...o)), p;
                case "spherical":
                    p = de.spherical(new S(...s), new S(...n));
                case "rope":
                    return p = de.rope(h, new S(...s), new S(...n)), p;
                case "spring":
                    return p = de.spring(h, c, l, new S(...s), new S(...n)), p;
                case "generic":
                    return p = de.generic(new S(...s), new S(...n), new S(...o), u), p;
                default:
                    throw new Error(`Unknown joint type: ${t}`);
            }
        }
        addJoint(e, t, s, n = !0) {
            const o = this.createJointData(s);
            return this.world.createImpulseJoint(o, e, t, n);
        }
        addConstraint(e) {}
        logWorldState() {
            console.log("=== RigidBodies no Mundo ==="), this.world.bodies.forEach((e, t)=>{
                console.log(`Body ${t}:`, e.translation(), e.colliders());
            }), console.log("=== Colliders no Mundo ==="), this.world.colliders.forEach((e, t)=>{
                console.log(`Collider ${t}:`, e.shape);
            });
        }
        step(e) {
            this.world.timestep = e, this.world.step();
            for (let t of this.meshes){
                const s = this.meshMap.get(t);
                if (s) if (t.isInstancedMesh) {
                    const n = t.instanceMatrix.array, o = s;
                    for(let i = 0; i < o.length; i++){
                        const a = o[i], r = a.translation();
                        this._quaternion.copy(a.rotation()), this._matrix.compose(r, this._quaternion, this._vector).toArray(n, i * 16);
                    }
                    t.instanceMatrix.needsUpdate = !0, t.computeBoundingSphere();
                } else t.isGroup || t.type, t.position.copy(s.translation()), t.quaternion.copy(s.rotation());
            }
        }
    }
    const Mo = 1500, To = 1500, Ao = 200, Ro = 200, So = 150, Je = "/Simulador-de-estacionamento/heightMaps", Eo = "/gen_c3.png", Ct = Eo, Po = !0;
    async function Lo(d, e) {
        console.log("Terrain");
        try {
            console.log("heightsPath", Je);
            const s = (await new Fe().loadAsync(Je + Ct)).image;
            console.log("img", s);
            const n = document.createElement("canvas");
            n.width = s.width, n.height = s.height;
            const o = n.getContext("2d");
            o.drawImage(s, 0, 0);
            const i = o.getImageData(0, 0, s.width, s.height).data, a = new ss(Mo, To, Ao, Ro);
            a.rotateX(-Math.PI / 2);
            const r = a.attributes.position, c = a.attributes.uv, l = new Float32Array(r.count * 3);
            for(let p = 0; p < r.count; p++){
                const m = c.getX(p), _ = c.getY(p), g = Math.floor(m * (s.width - 1)), T = (Math.floor((1 - _) * (s.height - 1)) * s.width + g) * 4;
                let y;
                Po && (y = i[T] / 255), r.setY(p, y * So);
                const x = new G;
                if (y < .45) x.setRGB(0, .5 + .5 * (y / .3), 0);
                else if (y < .6) {
                    const v = (y - .3) / .3;
                    x.lerpColors(new G(.1, .05, 0), new G(.4, .3, .1), v);
                } else {
                    const v = (y - .6) / .4;
                    x.lerpColors(new G(.8, .8, .8), new G(1, 1, 1), v);
                }
                l[p * 3 + 0] = x.r, l[p * 3 + 1] = x.g, l[p * 3 + 2] = x.b;
            }
            a.computeVertexNormals(), a.setAttribute("color", new ye(l, 3));
            const h = new j({
                vertexColors: !0,
                flatShading: !1,
                wireframe: !1,
                shininess: 30
            }), u = new C(a, h);
            return u.receiveShadow = !0, u.position.set(0, -46, 0), u;
        } catch (t) {
            console.error("Erro ao carregar a textura:", t), console.log("Caminho completo para a textura:", Je + Ct);
        }
    }
    const kt = "/Simulador-de-estacionamento/textures", Bt = "/Water_1_M_Flow.jpg", Do = 1500, Co = 1500, ko = 100, Bo = 100;
    async function zo(d, e) {
        const t = new ss(Do, Co, ko, Bo);
        try {
            const s = await new Fe().loadAsync(kt + Bt), n = new Ve(t, {
                scale: 4,
                textureWidth: 1024,
                textureHeight: 1024,
                flowMap: s
            });
            return n.position.y = -15, n.position.x = 0, n.rotation.x = Math.PI * -.5, n;
        } catch (s) {
            console.error("Erro ao carregar a textura:", s), console.log("Caminho completo para a textura:", kt + Bt);
        }
    }
    const Fo = 100, Io = .8, Oo = 24, No = 1e3, Wo = 65280, Go = !1, Uo = .3, jo = 4210752, Ho = !1, Vo = .3, Ko = 8421504, qo = !1, Xo = .3, Yo = new f(2.5, 2, 4), $o = .5, Qo = .4, Zo = [
        {
            x: -1.2,
            y: -.5,
            z: -1.5
        },
        {
            x: 1.2,
            y: -.5,
            z: -1.5
        },
        {
            x: -1.2,
            y: -.5,
            z: 0
        },
        {
            x: 1.2,
            y: -.5,
            z: 0
        },
        {
            x: -1.2,
            y: -.5,
            z: 1.5
        },
        {
            x: 1.2,
            y: -.5,
            z: 1.5
        }
    ], zt = 4, et = 2, Ft = 1, re = .2, xe = .2, It = .5;
    class Jo {
        rapierDebugRender;
        world;
        scene;
        options;
        chassisMesh;
        chassisBody;
        chassisCollider;
        controller;
        wheels;
        movement;
        constructor(e, t, s, n, o = {}, i){
            this.rapierDebugRender = i, this.movement = {
                forward: 0,
                right: 0,
                brake: 0,
                reset: !1,
                accelerateForce: {
                    value: 0,
                    min: -30,
                    max: 30,
                    step: 1
                },
                brakeForce: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: .05
                },
                appendixUp: 0,
                appendixRight: 0
            }, this.scene = e, this.sceneManager = t, this.world = s, this.physicsManager = n, this.options = {
                chassisSize: Yo,
                wheelRadius: $o,
                wheelWidth: Qo,
                ...o
            }, this.initChassis(), this.initWheels(), this.initChovel();
        }
        initChassis() {
            const e = new j({
                color: Wo,
                transparent: Go,
                opacity: Uo
            });
            this.chassisMesh = new C(new X(...this.options.chassisSize.toArray()), e), this.options.chassisPosition ? (this.chassisMesh.position.copy(this.options.chassisPosition), this.spawnPos = this.options.chassisPosition.clone()) : (this.chassisMesh.position.set(0, 3, 0), this.spawnPos = new f(0, 3, 0)), this.chassisMesh.castShadow = !0, this.sceneManager.addToScene(this.chassisMesh), this.follow_target = this.chassisMesh;
            const t = q.cuboid(this.options.chassisSize.x / 2, this.options.chassisSize.y / 2, this.options.chassisSize.z / 2);
            t.setMass(Fo), t.setRestitution(Io);
            const s = V.dynamic();
            console.log("this.chassisMesh.position", this.chassisMesh.position), console.log("this.chassisMesh.quaternion", this.chassisMesh.quaternion), s.setTranslation(...this.chassisMesh.position.toArray()), this.chassisBody = this.world.createRigidBody(s), this.chassisBody.userData = {
                name: "chassis"
            }, this.chassisCollider = this.world.createCollider(t, this.chassisBody);
            const n = new oe;
            n.name = "pivot", n.position.set(0, 0, -(this.options.chassisSize.z / 2)), this.chassisMesh.add(n), this.chassisMesh.userData.physics || (this.chassisMesh.userData.physics = {}), this.chassisMesh.userData.physics.body = this.chassisBody, this.controller = this.world.createVehicleController(this.chassisBody);
        }
        initChovel() {
            const e = new he, t = new j({
                color: Ko,
                transparent: qo,
                opacity: Xo
            }), s = new X(zt, et, re), n = new C(s, t), o = new X(zt, re, Ft), i = new C(o, t), a = new Z(xe, xe, Ft, 16), r = new $().makeRotationX(Math.PI / 2);
            console.log("rotMatrix", r), a.applyMatrix4(r);
            const c = new C(a, t), l = new ns(xe, 16, 16), h = new C(l, t);
            n.position.set(0, 0, 0), i.position.set(0, -2.2 / 2, -.8 / 2), c.position.set(0, 0, It + re / 2);
            const u = new F().setFromRotationMatrix(r);
            c.userData.geo = {
                quaternion: u.clone()
            }, h.position.set(0, 0, It * 2 + re + xe / 2), e.add(n), e.add(i), e.add(c), e.position.copy(this.options.chassisPosition), e.translateX(0), e.translateY(-(this.options.chassisSize.y - re - xe) / 2), e.translateZ(-((this.options.chassisSize.z + et + re) / 2 + .4)), h.translateX(this.options.chassisPosition.x), h.translateY(this.options.chassisPosition.y - (this.options.chassisSize.y - re - xe) / 2), h.translateZ(this.options.chassisPosition.z - ((this.options.chassisSize.z + et + re) / 2 + .4)), e.updateMatrixWorld(), h.updateMatrixWorld(), console.log(`
blade1_WorldPos`, n.getWorldPosition(new f), `
blade1.position`, n.position, `
blade2_WorldPos`, i.getWorldPosition(new f), `
bladeCylinder_WorldPos`, c.getWorldPosition(new f), `
bladeJoint_WorldPos`, h.getWorldPosition(new f), `
bladeGroup_WorldPos`, e.getWorldPosition(new f), `
bladeGroup.position`, e.position), this.sceneManager.addToScene(e), this.sceneManager.addToScene(h);
            const p = V.dynamic().setTranslation(...e.position).setRotation(e.quaternion);
            this.bladeBody = this.world.createRigidBody(p), console.log("this.bladeBody.position", this.bladeBody.translation()), this.bladeBody.userData = {
                name: "bladeBody"
            };
            let m;
            m = this.physicsManager.getSimpleColliderDesc(n).setTranslation(...n.position).setRotation(n.quaternion).setMass(.1), console.log("blade1-colliderDesc.translation()", n.position), this.world.createCollider(m, this.bladeBody), m = this.physicsManager.getSimpleColliderDesc(i).setTranslation(...i.position).setRotation(i.quaternion).setMass(.1), console.log("blade2-colliderDesc.translation()", i.position), this.world.createCollider(m, this.bladeBody), m = this.physicsManager.getSimpleColliderDesc(c).setTranslation(...c.position).setRotation(c.userData.geo.quaternion).setMass(.1), console.log("bladeCylinder-colliderDesc.translation()", c.position), this.world.createCollider(m, this.bladeBody);
            const _ = V.dynamic().setTranslation(...h.position).setRotation(h.quaternion);
            this.bladeJointBody = this.world.createRigidBody(_), this.bladeJointBody.userData = {
                name: "bladeJointBody"
            }, m = this.physicsManager.getSimpleColliderDesc(h).setMass(.1), console.log("bladeJointMesh-colliderDesc.translation()", h.position), this.world.createCollider(m, this.bladeJointBody);
            const g = h.getWorldPosition(new f), b = e.getWorldPosition(new f);
            let T = [
                0,
                0,
                0
            ], y = [
                g.x - b.x,
                g.y - b.y,
                g.z - b.z
            ];
            console.log("anchor", y), this.bladeJoint = this.physicsManager.addJoint(this.bladeJointBody, this.bladeBody, {
                type: "fixed",
                anchor1: T,
                frame1: [
                    0,
                    0,
                    0,
                    1
                ],
                anchor2: y,
                frame2: [
                    0,
                    0,
                    0,
                    1
                ]
            });
            const x = this.chassisMesh.getWorldPosition(new f);
            T = [
                g.x - x.x,
                g.y - x.y + .7,
                g.z - x.z
            ], y = [
                0,
                0,
                0
            ], this.chovelJoint = this.physicsManager.addJoint(this.chassisBody, this.bladeJointBody, {
                type: "revolute",
                anchor1: T,
                anchor2: y,
                axis: [
                    1,
                    0,
                    0
                ]
            }), this.chovelJoint.limitsEnabled(), this.chovelJoint.setLimits(-Math.PI / 8, Math.PI / 3), this.physicsManager.addMesh(h, this.bladeJointBody, "bladeJoint"), this.physicsManager.addGroup(e, this.bladeBody, "blade");
        }
        initWheels() {
            this.wheels = [], Zo.forEach((e, t)=>{
                this.addWheel(t, e);
            }), this.controller.setWheelSteering(0, Math.PI / 4), this.controller.setWheelSteering(1, Math.PI / 4);
        }
        addWheel(e, t) {
            const s = {
                radius: this.options.wheelRadius,
                width: this.options.wheelWidth,
                suspensionRestLength: .8,
                position: new f(t.x, t.y, t.z),
                direction: new S(...Object.values({
                    x: 0,
                    y: -1,
                    z: 0
                })),
                axle: new S(...Object.values({
                    x: -1,
                    y: 0,
                    z: 0
                }))
            };
            this.controller.addWheel(s.position, s.direction, s.axle, s.suspensionRestLength, s.radius), this.controller.setWheelSuspensionStiffness(e, Oo), this.controller.setWheelFrictionSlip(e, No), this.controller.setWheelSteering(e, t.z < 0);
            const n = new Z(s.radius, s.radius, s.width, 16);
            n.rotateZ(Math.PI * .5);
            const o = new C(n, new j({
                color: jo,
                transparent: Ho,
                opacity: Vo
            }));
            o.castShadow = !0, o.position.copy(t), this.wheels.push(o), this.chassisMesh.add(o);
        }
        updateController(e) {
            if (this.movement = e, this.movement.reset) {
                this.chassisBody.setTranslation(this.spawnPos, !0), this.chassisBody.setRotation(new ge(0, 0, 0, 1), !0), this.chassisBody.setLinvel(new S(0, 0, 0), !0), this.chassisBody.setAngvel(new S(0, 0, 0), !0), this.movement.accelerateForce.value = 0, this.movement.brakeForce.value = 0, this.movement.reset = !1;
                return;
            }
            let t = 0;
            this.movement.forward < 0 ? (t = this.movement.accelerateForce.value - this.movement.accelerateForce.step, t < this.movement.accelerateForce.min && (t = this.movement.accelerateForce.min)) : this.movement.forward > 0 ? (t = this.movement.accelerateForce.value + this.movement.accelerateForce.step, t > this.movement.accelerateForce.max && (t = this.movement.accelerateForce.max)) : this.chassisBody.isSleeping() && this.chassisBody.wakeUp(), this.movement.accelerateForce.value = t;
            let s = 0;
            this.movement.brake > 0 && (s = this.movement.brakeForce.value + this.movement.brakeForce.step, s > this.movement.brakeForce.max && (s = this.movement.brakeForce.max)), this.movement.brakeForce.value = s;
            const n = t;
            this.controller.setWheelEngineForce(0, n), this.controller.setWheelEngineForce(1, n);
            const o = this.controller.wheelSteering(0), i = this.movement.right, a = Math.PI / 4, r = O.lerp(o, a * i, .25);
            this.controller.setWheelSteering(0, r), this.controller.setWheelSteering(1, r);
            const c = this.movement.brake * s;
            this.controller.setWheelBrake(0, c), this.controller.setWheelBrake(1, c), this.controller.setWheelBrake(2, c), this.controller.setWheelBrake(3, c), this.updateChovel();
        }
        updateChovel() {
            const e = Math.PI / 4, t = 5e5, n = (this.movement.appendixUp || 0) * e;
            this.chovelJoint.configureMotorVelocity(n, t);
        }
        updateWheels() {
            if (this.controller === void 0) return;
            const e = new F, t = new F, s = new f(0, 1, 0);
            this.wheels.forEach((n, o)=>{
                const i = this.controller.wheelAxleCs(o), a = this.controller.wheelChassisConnectionPointCs(o).y || 0, r = this.controller.wheelSuspensionLength(o) || 0, c = this.controller.wheelSteering(o) || 0, l = this.controller.wheelRotation(o) || 0;
                n.position.y = a - r, e.setFromAxisAngle(s, c), t.setFromAxisAngle(i, l), n.quaternion.multiplyQuaternions(e, t);
            });
        }
    }
    const ei = 20, ti = .8, si = 24, ni = 1e3, oi = 16776960, ii = !1, ri = .9, ai = 4210752, ci = !1, li = .9, hi = new f(2.5, 3, 10), di = .5, ui = .4, pi = [
        {
            x: -1.2,
            y: -1,
            z: -3.2
        },
        {
            x: 1.2,
            y: -1,
            z: -3.2
        },
        {
            x: -1.2,
            y: -1,
            z: 3.2
        },
        {
            x: 1.2,
            y: -1,
            z: 3.2
        }
    ];
    class mi {
        rapierDebugRender;
        world;
        scene;
        options;
        chassisMesh;
        chassisBody;
        chassisCollider;
        controller;
        wheels;
        movement;
        constructor(e, t, s, n, o = {}, i){
            this.rapierDebugRender = i, this.movement = {
                forward: 0,
                right: 0,
                brake: 0,
                reset: !1,
                accelerateForce: {
                    value: 0,
                    min: -30,
                    max: 30,
                    step: 1
                },
                brakeForce: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: .05
                }
            }, this.scene = e, this.sceneManager = t, this.world = s, this.physicsManager = n, this.options = {
                chassisSize: hi,
                wheelRadius: di,
                wheelWidth: ui,
                ...o
            }, this.initChassis(), this.initWheels();
        }
        initChassis() {
            this.chassisMesh = new C(new X(...this.options.chassisSize.toArray()), new j({
                color: oi,
                transparent: ii,
                opacity: ri
            })), this.options.chassisPosition ? (this.chassisMesh.position.copy(this.options.chassisPosition), this.spawnPos = this.options.chassisPosition.clone()) : (this.chassisMesh.position.set(0, 3, 0), this.spawnPos = new f(0, 3, 0)), this.chassisMesh.castShadow = !0, this.sceneManager.addToScene(this.chassisMesh), this.follow_target = this.chassisMesh;
            const e = q.cuboid(this.options.chassisSize.x / 2, this.options.chassisSize.y / 2, this.options.chassisSize.z / 2);
            e.setMass(ei), e.setRestitution(ti);
            const t = V.dynamic();
            console.log("this.chassisMesh.position", this.chassisMesh.position), console.log("this.chassisMesh.quaternion", this.chassisMesh.quaternion), t.setTranslation(...this.chassisMesh.position.toArray()), this.chassisBody = this.world.createRigidBody(t), this.chassisBody.userData = {
                name: "chassis"
            }, this.chassisCollider = this.world.createCollider(e, this.chassisBody), this.chassisMesh.userData.physics || (this.chassisMesh.userData.physics = {}), this.chassisMesh.userData.physics.body = this.chassisBody, this.controller = this.world.createVehicleController(this.chassisBody);
        }
        initWheels() {
            this.wheels = [], pi.forEach((e, t)=>{
                this.addWheel(t, e);
            }), this.controller.setWheelSteering(0, Math.PI / 4), this.controller.setWheelSteering(1, Math.PI / 4);
        }
        addWheel(e, t) {
            const s = {
                radius: this.options.wheelRadius,
                width: this.options.wheelWidth,
                suspensionRestLength: .8,
                position: new f(t.x, t.y, t.z),
                direction: new S(...Object.values({
                    x: 0,
                    y: -1,
                    z: 0
                })),
                axle: new S(...Object.values({
                    x: -1,
                    y: 0,
                    z: 0
                }))
            };
            this.controller.addWheel(s.position, s.direction, s.axle, s.suspensionRestLength, s.radius), this.controller.setWheelSuspensionStiffness(e, si), this.controller.setWheelFrictionSlip(e, ni), this.controller.setWheelSteering(e, t.z < 0);
            const n = new Z(s.radius, s.radius, s.width, 16);
            n.rotateZ(Math.PI * .5);
            const o = new C(n, new j({
                color: ai,
                transparent: ci,
                opacity: li
            }));
            o.castShadow = !0, o.position.copy(t), this.wheels.push(o), this.chassisMesh.add(o);
        }
        updateController(e) {
            if (this.movement = e, this.movement.reset) {
                this.chassisBody.setTranslation(this.spawnPos, !0), this.chassisBody.setRotation(new ge(0, 0, 0, 1), !0), this.chassisBody.setLinvel(new S(0, 0, 0), !0), this.chassisBody.setAngvel(new S(0, 0, 0), !0), this.movement.accelerateForce.value = 0, this.movement.brakeForce.value = 0, this.movement.reset = !1;
                return;
            }
            let t = 0;
            this.movement.forward < 0 ? (t = this.movement.accelerateForce.value - this.movement.accelerateForce.step, t < this.movement.accelerateForce.min && (t = this.movement.accelerateForce.min)) : this.movement.forward > 0 ? (t = this.movement.accelerateForce.value + this.movement.accelerateForce.step, t > this.movement.accelerateForce.max && (t = this.movement.accelerateForce.max)) : this.chassisBody.isSleeping() && this.chassisBody.wakeUp(), this.movement.accelerateForce.value = t;
            let s = 0;
            this.movement.brake > 0 && (s = this.movement.brakeForce.value + this.movement.brakeForce.step, s > this.movement.brakeForce.max && (s = this.movement.brakeForce.max)), this.movement.brakeForce.value = s;
            const n = t;
            this.controller.setWheelEngineForce(0, n), this.controller.setWheelEngineForce(1, n);
            const o = this.controller.wheelSteering(0), i = this.movement.right, a = Math.PI / 4, r = O.lerp(o, a * i, .25);
            this.controller.setWheelSteering(0, r), this.controller.setWheelSteering(1, r);
            const c = this.movement.brake * s;
            this.controller.setWheelBrake(0, c), this.controller.setWheelBrake(1, c), this.controller.setWheelBrake(2, c), this.controller.setWheelBrake(3, c);
        }
        updateWheels() {
            if (this.controller === void 0) return;
            const e = new F, t = new F, s = new f(0, 1, 0);
            this.wheels.forEach((n, o)=>{
                const i = this.controller.wheelAxleCs(o), a = this.controller.wheelChassisConnectionPointCs(o).y || 0, r = this.controller.wheelSuspensionLength(o) || 0, c = this.controller.wheelSteering(o) || 0, l = this.controller.wheelRotation(o) || 0;
                n.position.y = a - r, e.setFromAxisAngle(s, c), t.setFromAxisAngle(i, l), n.quaternion.multiplyQuaternions(e, t);
            });
        }
    }
    const fi = 10, yi = .8, gi = 24, wi = 1e3, Ot = 255, Nt = !1, Wt = .9, xi = 4210752, _i = !1, bi = .9, vi = new f(3.5, 2.5, 7), Mi = .5, Ti = .4, Ai = [
        {
            x: -1.9,
            y: -.5,
            z: -2.2
        },
        {
            x: 1.9,
            y: -.5,
            z: -2.2
        },
        {
            x: -1.9,
            y: -.5,
            z: 2.2
        },
        {
            x: 1.9,
            y: -.5,
            z: 2.2
        }
    ], Gt = 2.5, Ut = .2, jt = .8, Ht = 1.2, Vt = .1, Ri = .5, Si = new j({
        color: 16776960
    }), Ei = new Z(Vt, Vt, Ri, 16), tt = 50;
    class Pi {
        rapierDebugRender;
        world;
        scene;
        options;
        chassisMesh;
        chassisBody;
        chassisCollider;
        controller;
        wheels;
        movement;
        spawnPos;
        constructor(e, t, s, n, o = {}, i, a = null){
            this.rapierDebugRender = i, this.movement = {
                forward: 0,
                right: 0,
                brake: 0,
                reset: !1,
                accelerateForce: {
                    value: 0,
                    min: -30,
                    max: 30,
                    step: 1
                },
                brakeForce: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: .05
                },
                appendixRight: 0,
                appendixUp: 0,
                shoot: 0
            }, this._hasShotThisPress = !1, this.scene = e, this.sceneManager = t, this.world = s, this.physicsManager = n, this.options = {
                chassisSize: vi,
                wheelRadius: Mi,
                wheelWidth: Ti,
                ...o
            }, this.initChassis(), this.initWheels(), this.initCanon();
        }
        initChassis() {
            const e = new j({
                color: Ot,
                transparent: Nt,
                opacity: Wt
            });
            this.chassisMesh = new C(new X(...this.options.chassisSize.toArray()), e), this.options.chassisPosition ? (this.chassisMesh.position.copy(this.options.chassisPosition), this.spawnPos = this.options.chassisPosition.clone()) : (this.chassisMesh.position.set(0, 3, 0), this.spawnPos = new f(0, 3, 0)), this.chassisMesh.castShadow = !0, this.turretPivot = new oe, this.turretPivot.position.set(0, this.options.chassisPosition.y / 2, 0), this.chassisMesh.add(this.turretPivot), this.sceneManager.addToScene(this.chassisMesh), this.follow_target = this.chassisMesh;
            const t = q.cuboid(this.options.chassisSize.x / 2, this.options.chassisSize.y / 2, this.options.chassisSize.z / 2);
            t.setMass(fi), t.setRestitution(yi);
            const s = V.dynamic();
            console.log("this.chassisMesh.position", this.chassisMesh.position), console.log("this.chassisMesh.quaternion", this.chassisMesh.quaternion), s.setTranslation(...this.chassisMesh.position.toArray()), this.chassisBody = this.world.createRigidBody(s), this.chassisBody.userData = {
                name: "chassis"
            }, this.chassisCollider = this.world.createCollider(t, this.chassisBody), this.chassisMesh.userData.physics || (this.chassisMesh.userData.physics = {}), this.chassisMesh.userData.physics.body = this.chassisBody, this.controller = this.world.createVehicleController(this.chassisBody);
        }
        initCanon() {
            this.cannonGroup = new he;
            const e = new j({
                color: Ot,
                transparent: Nt,
                opacity: Wt
            }), t = new Z(Ut, Ut, Gt, 16), s = new Z(Ht, Ht, jt, 16);
            this.cannonBaseMesh = new C(s, e), this.cannonBasePivot = new oe, this.cannonBasePivot.position.set(0, 0, -1.2), this.cannonBaseMesh.add(this.cannonBasePivot);
            const n = new C(t, e);
            this.cylinderPivot = new oe, this.cylinderPivot.position.set(0, Gt / 2, 0), n.add(this.cylinderPivot), this.shootPivot = new oe, this.shootPivot.position.set(0, -2.5 / 2, 0), n.add(this.shootPivot), [
                n,
                this.cannonBaseMesh
            ].forEach((A)=>{
                A.translateX(5), A.translateY(3.9), A.translateZ(10), this.scene.add(A);
            }), n.rotation.x = Math.PI / 2, n.translateY(-2.5), n.updateMatrixWorld(), this.options.chassisPosition ? this.options.chassisPosition.clone().add(new f(0, this.options.chassisPosition.y / 2 + jt / 2 + .2, 0)) : new f(0, 4.5, 0);
            const o = this.cannonBaseMesh.getWorldPosition(new f), i = this.cannonBaseMesh.getWorldQuaternion(new F);
            console.log("baseCWorldPos", o, `
baseCWorldQuat`, i, `
cannonBaseMesh.position`, this.cannonBaseMesh.position, `
cannonBaseMesh.quaternion`, this.cannonBaseMesh.quaternion);
            const a = V.dynamic().setTranslation(...this.cannonBaseMesh.position).setRotation(this.cannonBaseMesh.quaternion);
            let r = this.physicsManager.getSimpleColliderDesc(this.cannonBaseMesh);
            this.cannonBaseBody = this.world.createRigidBody(a), this.cannonBaseBody.userData = {
                name: "cannonBase"
            }, this.world.createCollider(r, this.cannonBaseBody);
            const c = n.getWorldPosition(new f), l = n.getWorldQuaternion(new F);
            console.log("cylWorldPos", c, `
cylWorldQuat`, l, `
cannonCylinderMesh.position`, n.position, `
cannonCylinderMesh.quaternion`, n.quaternion);
            const h = V.dynamic().setTranslation(...n.position).setRotation(n.quaternion);
            r = this.physicsManager.getSimpleColliderDesc(n), this.cannonCylinderBody = this.world.createRigidBody(h), this.cannonCylinderBody.userData = {
                name: "cannonBase"
            }, this.world.createCollider(r, this.cannonCylinderBody), console.log("cannonBaseBody.translation()", this.cannonBaseBody.translation(), `
cannonBaseBody.rotation()`, this.cannonBaseBody.rotation(), `
cannonCylinderBody.translation()`, this.cannonCylinderBody.translation(), `
cannonCylinderBody.rotation()`, this.cannonCylinderBody.rotation());
            const u = this.turretPivot.getWorldPosition(new f), p = this.chassisMesh.getWorldPosition(new f), m = this.chassisBody.translation(), _ = this.cannonBaseBody.translation();
            console.log("turretPivotWorldPos", u, `
chassisWorldPos`, p, `
chassisWorld`, m, `
baseWorld`, _), this.cannonBodyJoint = this.physicsManager.addJoint(this.chassisBody, this.cannonBaseBody, {
                type: "revolute",
                anchor1: [
                    u.x - m.x,
                    u.y - m.y,
                    u.z - m.z
                ],
                anchor2: [
                    u.x - _.x,
                    u.y - _.y,
                    u.z - _.z
                ],
                axis: [
                    0,
                    1,
                    0
                ]
            }), console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", `
this.cylinderPivot.getWorldPosition:`, this.cylinderPivot.getWorldPosition(new f), `
cylinderPivot.position:`, this.cylinderPivot.position, `
this.cylinderPivot.getWorldQuaternion:`, this.cylinderPivot.getWorldQuaternion(new F), `
this.cylinderPivot.quaternion:`, this.cylinderPivot.quaternion, `
cannonCylinderMesh.getWorldPosition:`, n.getWorldPosition(new f), `
cannonCylinderMesh.position:`, n.position, `
cannonCylinderMesh.getWorldQuaternion:`, n.getWorldQuaternion(new F), `
cannonCylinderMesh.quaternion:`, n.quaternion, `
cannonBaseMesh.getWorldPosition:`, this.cannonBaseMesh.getWorldPosition(new f), `
cannonBaseMesh.position:`, this.cannonBaseMesh.position, `
cannonBaseMesh.getWorldQuaternion:`, this.cannonBaseMesh.getWorldQuaternion(new F), "this.cannonBaseMesh.quaternion:", this.cannonBaseMesh.quaternion, `
this.cannonBaseBody.translation():`, this.cannonBaseBody.translation(), `
this.cannonCylinderBody.translation():`, this.cannonCylinderBody.translation(), `
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`), this.cannonBasePivot.getWorldPosition(new f);
            const g = this.cylinderPivot.getWorldPosition(new f), b = this.cannonBaseBody.translation(), T = this.cannonCylinderBody.translation();
            let y = new f().subVectors(g, b), x = new f().subVectors(g, T);
            y = new f(0, 0, -2.5), x = new f(0, 0, 0);
            const v = this.cylinderPivot.getWorldQuaternion(new F), L = this.cannonBaseBody.rotation(), R = this.cannonCylinderBody.rotation();
            console.log("q_pivot_world", v, `
q_base_world`, L, `
q_cyl_world`, R);
            const w = new F;
            w.copy(L).invert().multiply(v);
            const M = new F;
            M.copy(R).invert().multiply(v), console.log("frame1:", w), console.log("frame2:", M), this.cannonCylinderJoint = this.physicsManager.addJoint(this.cannonBaseBody, this.cannonCylinderBody, {
                type: "fixed",
                anchor1: [
                    y.x,
                    y.y,
                    y.z
                ],
                frame1: [
                    w.x,
                    w.y,
                    w.z,
                    w.w
                ],
                anchor2: [
                    x.x,
                    x.y,
                    x.z
                ],
                frame2: [
                    M.x,
                    M.y,
                    M.z,
                    M.w
                ]
            }), this.physicsManager.addMesh(this.cannonBaseMesh, this.cannonBaseBody, "cannonBase"), this.physicsManager.addMesh(n, this.cannonCylinderBody, "cannonCylinder");
        }
        initWheels() {
            this.wheels = [], Ai.forEach((e, t)=>{
                this.addWheel(t, e);
            }), this.controller.setWheelSteering(0, Math.PI / 4), this.controller.setWheelSteering(1, Math.PI / 4);
        }
        addWheel(e, t) {
            const s = {
                radius: this.options.wheelRadius,
                width: this.options.wheelWidth,
                suspensionRestLength: .8,
                position: new f(t.x, t.y, t.z),
                direction: new S(...Object.values({
                    x: 0,
                    y: -1,
                    z: 0
                })),
                axle: new S(...Object.values({
                    x: -1,
                    y: 0,
                    z: 0
                }))
            };
            this.controller.addWheel(s.position, s.direction, s.axle, s.suspensionRestLength, s.radius), this.controller.setWheelSuspensionStiffness(e, gi), this.controller.setWheelFrictionSlip(e, wi), this.controller.setWheelSteering(e, t.z < 0);
            const n = new Z(s.radius, s.radius, s.width, 16);
            n.rotateZ(Math.PI * .5);
            const o = new C(n, new j({
                color: xi,
                transparent: _i,
                opacity: bi
            }));
            o.castShadow = !0, o.position.copy(t), this.wheels.push(o), this.chassisMesh.add(o);
        }
        updateController(e) {
            if (this.movement = e, this.movement.reset) {
                this.chassisBody.setTranslation(this.spawnPos, !0), this.chassisBody.setRotation(new ge(0, 0, 0, 1), !0), this.chassisBody.setLinvel(new S(0, 0, 0), !0), this.chassisBody.setAngvel(new S(0, 0, 0), !0), this.movement.accelerateForce.value = 0, this.movement.brakeForce.value = 0, this.movement.reset = !1;
                return;
            }
            let t = 0;
            this.movement.forward < 0 ? (t = this.movement.accelerateForce.value - this.movement.accelerateForce.step, t < this.movement.accelerateForce.min && (t = this.movement.accelerateForce.min)) : this.movement.forward > 0 ? (t = this.movement.accelerateForce.value + this.movement.accelerateForce.step, t > this.movement.accelerateForce.max && (t = this.movement.accelerateForce.max)) : this.chassisBody.isSleeping() && this.chassisBody.wakeUp(), this.movement.accelerateForce.value = t;
            let s = 0;
            this.movement.brake > 0 && (s = this.movement.brakeForce.value + this.movement.brakeForce.step, s > this.movement.brakeForce.max && (s = this.movement.brakeForce.max)), this.movement.brakeForce.value = s;
            const n = t;
            this.controller.setWheelEngineForce(0, n), this.controller.setWheelEngineForce(1, n);
            const o = this.controller.wheelSteering(0), i = this.movement.right, a = Math.PI / 4, r = O.lerp(o, a * i, .25);
            this.controller.setWheelSteering(0, r), this.controller.setWheelSteering(1, r);
            const c = this.movement.brake * s;
            this.controller.setWheelBrake(0, c), this.controller.setWheelBrake(1, c), this.controller.setWheelBrake(2, c), this.controller.setWheelBrake(3, c), this.updateTurretMotor(), this.movement.shoot === 1 && !this._hasShotThisPress ? (this.shootProjectile(), this.follow_target = this.cannonBaseMesh, this._hasShotThisPress = !0) : this.movement.shoot === 0 && (this._hasShotThisPress = !1), (this.movement.forward !== 0 || this.movement.right !== 0 || this.movement.brake !== 0) && (this.follow_target = this.chassisMesh);
        }
        updateTurretMotor() {
            if (!this.cannonBodyJoint) {
                console.warn("cannonBodyJoint não está definido.");
                return;
            }
            const e = Math.PI / 4, t = 10, s = this.movement.appendixRight || 0, n = -s * e;
            this.cannonBodyJoint.configureMotorVelocity(n, t), s != 0 && (this.follow_target = this.cannonBaseMesh);
        }
        shootProjectile() {
            const e = new C(Ei, Si), t = this.shootPivot.getWorldPosition(new f), s = this.shootPivot.getWorldQuaternion(new F);
            e.position.copy(t).add(new f(0, 0, -.6 / 2)), e.quaternion.copy(s);
            const n = V.dynamic().setTranslation(...e.position.toArray()).setRotation(e.quaternion), o = this.world.createRigidBody(n);
            o.userData = {
                name: "projectile"
            }, console.log("this.shootPivot.parent.quaternion", this.shootPivot.parent.quaternion.clone().toArray(), "projWP", t.clone().toArray(), `
projWQ`, s.clone().toArray(), `
projMesh.position`, e.position.clone().toArray(), `
projMesh.quaternion`, e.quaternion.clone().toArray(), `
projBody.translation`, o.translation(), `
projBody.rotation`, o.rotation());
            const i = this.physicsManager.getSimpleColliderDesc(e);
            i.setRestitution(.2), i.setFriction(.5), this.world.createCollider(i, o);
            const a = new f(0, -1, 0);
            a.applyQuaternion(s).normalize();
            const r = new S(a.x * tt, a.y * tt, a.z * tt);
            o.setLinvel(r, !0), this.sceneManager.addToScene(e), this.physicsManager.addMesh(e, o, "projectile"), this.activeProjectiles || (this.activeProjectiles = []), this.activeProjectiles.push({
                mesh: e,
                body: o
            }), setTimeout(()=>{
                this.sceneManager.removeFromScene(e), this.physicsManager.removeMesh(e), this.activeProjectiles = this.activeProjectiles.filter((c)=>c.body.handle !== o.handle), console.log("Projectile removed after timeout:", e);
            }, 5e3);
        }
        updateWheels() {
            if (this.controller === void 0) return;
            const e = new F, t = new F, s = new f(0, 1, 0);
            this.wheels.forEach((n, o)=>{
                const i = this.controller.wheelAxleCs(o), a = this.controller.wheelChassisConnectionPointCs(o).y || 0, r = this.controller.wheelSuspensionLength(o) || 0, c = this.controller.wheelSteering(o) || 0, l = this.controller.wheelRotation(o) || 0;
                n.position.y = a - r, e.setFromAxisAngle(s, c), t.setFromAxisAngle(i, l), n.quaternion.multiplyQuaternions(e, t);
            });
        }
    }
    const Li = 24, Di = 1e3, Ci = .4, ki = 65535, Bi = !1, zi = .3, Fi = 4210752, Ii = !1, Oi = .3, Ni = 11468975, Wi = !1, Gi = .3, Ui = new f(2.5, 3, 15), _e = new f(2.5, 1, 15), Ne = new f(2.5, 2.5, 3), ut = .9, ji = .7, Hi = [
        {
            x: -1.2,
            y: -1,
            z: -6.3
        },
        {
            x: 1.2,
            y: -1,
            z: -6.3
        },
        {
            x: -1.2,
            y: -1,
            z: 6 - ut * 2 - .5
        },
        {
            x: 1.2,
            y: -1,
            z: 6 - ut * 2 - .5
        },
        {
            x: -1.2,
            y: -1,
            z: 6
        },
        {
            x: 1.2,
            y: -1,
            z: 6
        }
    ], K = .2, We = 2.5, st = 2.5, pe = 12, me = 1.25;
    class Vi {
        rapierDebugRender;
        world;
        scene;
        options;
        chassisMesh;
        chassisBody;
        chassisCollider;
        controller;
        wheels;
        movement;
        constructor(e, t, s, n, o = {}, i){
            this.rapierDebugRender = i, this.movement = {
                forward: 0,
                right: 0,
                brake: 0,
                reset: !1,
                accelerateForce: {
                    value: 0,
                    min: -30,
                    max: 30,
                    step: 1
                },
                brakeForce: {
                    value: 0,
                    min: 0,
                    max: 1,
                    step: .05
                },
                appendixUp: 0,
                appendixRight: 0
            }, this.scene = e, this.sceneManager = t, this.world = s, this.physicsManager = n, this.options = {
                chassisSize: Ui,
                wheelRadius: ut,
                wheelWidth: ji,
                ...o
            }, this.initChassis(), this.initWheels(), this.initBucket();
        }
        initChassis() {
            const e = new j({
                color: ki,
                transparent: Bi,
                opacity: zi
            }), t = new X(..._e.toArray());
            this.chassisMesh = new he;
            const s = new C(t, e), n = new X(...Ne.toArray()), o = new C(n, e);
            o.position.set(0, (_e.y + Ne.y) / 2, -(_e.z - Ne.z) / 2), this.chassisMesh.add(s), this.chassisMesh.add(o);
            const i = new oe;
            i.name = "pivot", i.position.set(0, _e.y / 2, _e.z / 2), this.chassisMesh.add(i), this.options.chassisPosition ? (this.chassisMesh.position.copy(this.options.chassisPosition), this.spawnPos = this.options.chassisPosition.clone()) : (this.chassisMesh.position.set(0, 3, 0), this.spawnPos = new f(0, 3, 0)), this.sceneManager.addToScene(this.chassisMesh), this.follow_target = this.chassisMesh;
            const a = V.dynamic().setTranslation(...this.chassisMesh.position).setRotation(this.chassisMesh.quaternion);
            this.chassisBody = this.world.createRigidBody(a), this.chassisBody.userData = {
                name: "chassisBody"
            };
            let r;
            r = this.physicsManager.getSimpleColliderDesc(s).setTranslation(...s.position).setRotation(s.quaternion), this.world.createCollider(r, this.chassisBody), r = this.physicsManager.getSimpleColliderDesc(o).setTranslation(...o.position).setRotation(o.quaternion), this.world.createCollider(r, this.chassisBody), this.physicsManager.addGroup(this.chassisMesh, this.chassisBody, "chassisBody"), this.chassisMesh.userData.physics || (this.chassisMesh.userData.physics = {}), this.chassisMesh.userData.physics.body = this.chassisBody, this.controller = this.world.createVehicleController(this.chassisBody);
        }
        initBucket() {
            const e = new j({
                color: Ni,
                transparent: Wi,
                opacity: Gi
            });
            this.bucketGroup = new he;
            const t = new X(st, We, K), s = new C(t, e), n = new X(st, K, pe - K - me), o = new C(n, e), i = new X(K, We - K, pe - K - me), a = new C(i, e), r = new X(K, We - K, pe - K - me), c = new C(r, e);
            this.bucketGroup.add(s), this.bucketGroup.add(o), this.bucketGroup.add(a), this.bucketGroup.add(c), s.position.set(0, 0, 0), o.position.set(0, -2.3 / 2, (pe - me) / 2), a.position.set((st - K) / 2, K / 2, (pe - me) / 2), c.position.set(-2.3 / 2, K / 2, (pe - me) / 2), this.bucketGroup.position.copy(this.chassisMesh.position), this.bucketGroup.translateX(0), this.bucketGroup.translateY((We + _e.y) / 2), this.bucketGroup.translateZ(-(pe - K - Ne.z) / 2 + me), this.sceneManager.addToScene(this.bucketGroup);
            const l = V.dynamic().setTranslation(...this.bucketGroup.position).setRotation(this.bucketGroup.quaternion);
            this.bucketBody = this.world.createRigidBody(l), this.bucketBody.userData = {
                name: "bucketBody"
            };
            let h;
            h = this.physicsManager.getSimpleColliderDesc(s).setTranslation(...s.position).setRotation(s.quaternion).setMass(.1), this.world.createCollider(h, this.bucketBody), h = this.physicsManager.getSimpleColliderDesc(o).setTranslation(...o.position).setRotation(o.quaternion).setMass(.1), this.world.createCollider(h, this.bucketBody), h = this.physicsManager.getSimpleColliderDesc(a).setTranslation(...a.position).setRotation(a.quaternion).setMass(.1), this.world.createCollider(h, this.bucketBody), h = this.physicsManager.getSimpleColliderDesc(c).setTranslation(...c.position).setRotation(c.quaternion).setMass(.1), this.world.createCollider(h, this.bucketBody);
            const u = this.chassisMesh.getObjectByName("pivot"), p = u.getWorldPosition(new f), m = this.bucketGroup.getWorldPosition(new f), _ = [
                p.x - m.x,
                p.y - m.y,
                p.z - m.z
            ], g = [
                u.position.x,
                u.position.y,
                u.position.z
            ];
            this.bucketJoint = this.physicsManager.addJoint(this.bucketBody, this.chassisBody, {
                type: "revolute",
                anchor1: _,
                anchor2: g,
                axis: [
                    1,
                    0,
                    0
                ]
            }), this.bucketJoint.limitsEnabled(), this.bucketJoint.setLimits(-Math.PI / 3, 0), this.physicsManager.addGroup(this.bucketGroup, this.bucketBody, "bucketBody");
        }
        initWheels() {
            this.wheels = [], Hi.forEach((e, t)=>{
                this.addWheel(t, e);
            }), this.controller.setWheelSteering(0, Math.PI / 4), this.controller.setWheelSteering(1, Math.PI / 4);
        }
        addWheel(e, t) {
            const s = {
                radius: this.options.wheelRadius,
                width: this.options.wheelWidth,
                suspensionRestLength: Ci,
                position: new f(t.x, t.y, t.z),
                direction: new S(...Object.values({
                    x: 0,
                    y: -1,
                    z: 0
                })),
                axle: new S(...Object.values({
                    x: -1,
                    y: 0,
                    z: 0
                }))
            };
            this.controller.addWheel(s.position, s.direction, s.axle, s.suspensionRestLength, s.radius), this.controller.setWheelSuspensionStiffness(e, Li), this.controller.setWheelFrictionSlip(e, Di), this.controller.setWheelSteering(e, t.z < 0);
            const n = new Z(s.radius, s.radius, s.width, 16);
            n.rotateZ(Math.PI * .5);
            const o = new C(n, new j({
                color: Fi,
                transparent: Ii,
                opacity: Oi
            }));
            o.castShadow = !0, o.position.copy(t), this.wheels.push(o), this.chassisMesh.add(o);
        }
        updateController(e) {
            if (this.movement = e, this.movement.reset) {
                this.chassisBody.setTranslation(this.spawnPos, !0), this.chassisBody.setRotation(new ge(0, 0, 0, 1), !0), this.chassisBody.setLinvel(new S(0, 0, 0), !0), this.chassisBody.setAngvel(new S(0, 0, 0), !0), this.movement.accelerateForce.value = 0, this.movement.brakeForce.value = 0, this.movement.reset = !1;
                return;
            }
            let t = 0;
            this.movement.forward < 0 ? (t = this.movement.accelerateForce.value - this.movement.accelerateForce.step, t < this.movement.accelerateForce.min && (t = this.movement.accelerateForce.min)) : this.movement.forward > 0 ? (t = this.movement.accelerateForce.value + this.movement.accelerateForce.step, t > this.movement.accelerateForce.max && (t = this.movement.accelerateForce.max)) : this.chassisBody.isSleeping() && this.chassisBody.wakeUp(), this.movement.accelerateForce.value = t;
            let s = 0;
            this.movement.brake > 0 && (s = this.movement.brakeForce.value + this.movement.brakeForce.step, s > this.movement.brakeForce.max && (s = this.movement.brakeForce.max)), this.movement.brakeForce.value = s;
            const n = t;
            this.controller.setWheelEngineForce(0, n), this.controller.setWheelEngineForce(1, n);
            const o = this.controller.wheelSteering(0), i = this.movement.right, a = Math.PI / 4, r = O.lerp(o, a * i, .25);
            this.controller.setWheelSteering(0, r), this.controller.setWheelSteering(1, r);
            const c = this.movement.brake * s;
            this.controller.setWheelBrake(0, c), this.controller.setWheelBrake(1, c), this.controller.setWheelBrake(2, c), this.controller.setWheelBrake(3, c), this.updateBucket();
        }
        updateBucket() {
            const e = Math.PI / 8, t = 5e5, n = -(this.movement.appendixUp || 0) * e;
            this.bucketJoint.configureMotorVelocity(n, t);
        }
        updateWheels() {
            if (this.controller === void 0) return;
            const e = new F, t = new F, s = new f(0, 1, 0);
            this.wheels.forEach((n, o)=>{
                const i = this.controller.wheelAxleCs(o), a = this.controller.wheelChassisConnectionPointCs(o).y || 0, r = this.controller.wheelSuspensionLength(o) || 0, c = this.controller.wheelSteering(o) || 0, l = this.controller.wheelRotation(o) || 0;
                n.position.y = a - r, e.setFromAxisAngle(s, c), t.setFromAxisAngle(i, l), n.quaternion.multiplyQuaternions(e, t);
            });
        }
    }
    const Kt = "/Simulador-de-estacionamento/models", nt = {
        x: 49,
        y: 2,
        z: 49
    }, Ae = {
        x: 1 / 3,
        y: 1 / 3,
        z: 1 / 3
    }, ot = {
        x: nt.x * Ae.x,
        y: nt.y * Ae.y,
        z: nt.z * Ae.z
    };
    function it(d) {
        const e = Math.round(d * 10) / 10;
        return e === 1.6 || e === -4.7 ? Math.PI / 2 : e === 3.1 || e === -3.1 ? Math.PI : e === 4.7 || e === -1.6 ? 3 * Math.PI / 2 : e === -1.6 ? -Math.PI / 2 : e === -3.1 ? -Math.PI : e === -4.7 ? -(3 * Math.PI) / 2 : d;
    }
    class Ki {
        constructor(){
            this.loader = new is, this.dracoLoader = new xn, this.modelCache = new Map, this.assets = {
                road: this._loadGLTFtiles("road/road_49/road_49.gltf"),
                road_turn_left: this._loadGLTFtiles("road/road_TL_49/road_TL_49.gltf"),
                road_turn_right: this._loadGLTFtiles("road/road_TR_49/road_TR_49.gltf"),
                road_junction_left: this._loadGLTFtiles("road/road_JL_49/road_JL_49.gltf"),
                road_junction_right: this._loadGLTFtiles("road/road_JR_49/road_JR_49.gltf"),
                road_junction_left_right: this._loadGLTFtiles("road/road_I_49/road_I_49.gltf"),
                park1: this._loadGLTFtiles("road/park1_49/park1_49.gltf")
            };
        }
        updateLevel(e, t, s) {
            this.sm = t, this.vm = s, this.pm = e;
        }
        _loadGLTFtiles(e) {
            return async (t, s, n)=>{
                if (!this.modelCache.has(e)) {
                    const a = await this.loader.loadAsync(`${Kt}/${e}`);
                    console.log("Loaded model- glb:", a);
                    const r = a.scene;
                    r.matrixAutoUpdate = !0, this.modelCache.set(e, r);
                }
                const o = this.modelCache.get(e).clone();
                o.scale.set(Ae.x, Ae.y, Ae.z), o.position.set(t * ot.x, s * ot.y, n * ot.z);
                const i = o.getObjectByName("tar");
                return i ? console.log('Mesh chamada "tar" encontrada:', i) : console.log('Nenhuma mesh chamada "tar" encontrada.'), o;
            };
        }
        _loadGLTF(e) {
            return async (t, s, n)=>{
                if (!this.modelCache.has(e)) {
                    const i = await this.loader.loadAsync(`${Kt}/${e}`);
                    console.log("Loaded model- glb:", i);
                    const a = i.scene;
                    a.matrixAutoUpdate = !0, this.modelCache.set(e, a);
                }
                const o = this.modelCache.get(e).clone();
                return o.position.set(t, s, n), o;
            };
        }
        _makePrimitive(e) {
            return async (t, s, n)=>{
                const o = e(), i = new ce({
                    color: 8421504
                }), a = new C(o, i);
                return a.position.set(t, s, n), a;
            };
        }
        async _makeTree(e, t, s) {
            const o = [
                {
                    geo: new Z(.5, .5, 2),
                    pos: new f(e, 1, t)
                },
                {
                    geo: new ns(1),
                    pos: new f(e, 3, t)
                }
            ].map(({ geo: r, pos: c })=>{
                const l = r.clone();
                return l.applyMatrix4(new $().makeTranslation(c.x, c.y, c.z)), l;
            }), i = wn(o), a = new C(i, new ce({
                color: 9127187
            }));
            return a.position.set(e, t, s), a;
        }
        async _makeTrafficLight(e, t, s) {
            const n = new X(.5, 1, .5), o = new ce({
                color: 16711680
            }), i = new C(n, o);
            return i.position.set(e, t, s), i;
        }
        async createAssetInstance(e, t, s, n, o = {
            x: 0,
            y: 0,
            z: 0
        }, i = {
            x: 1,
            y: 1,
            z: 1
        }) {
            const a = this.assets[e];
            if (!a) {
                console.error(`Asset type "${e}" not registered.`);
                return;
            }
            const r = await a(t, s, n);
            return o.x = it(o.x), o.y = it(o.y), o.z = it(o.z), r.rotation.x = o.x, r.rotation.y = o.y, r.rotation.z = o.z, console.log("instance rotation and position", r.rotation, r.position), r.userData || (r.userData = {}), r;
        }
        createCarInstance(e = {
            x: 0,
            y: 3,
            z: 0
        }, t = {
            x: 0,
            y: 0,
            z: 0
        }, s = {}) {
            const n = {
                x: O.degToRad(t.x),
                y: O.degToRad(t.y),
                z: O.degToRad(t.z)
            }, o = {
                chassisPosition: new f(e.x, e.y, e.z),
                chassisRotation: new Se(n.x, n.y, n.z, "XYZ"),
                ...s
            };
            console.log("options", o);
            const i = new xo(this.sm.sceneGraph, this.sm, this.pm.world, this.pm, o, this.pm.rapierDebugRender);
            return this.pm.addMesh(i.chassisMesh, i.chassisBody, "car"), this.vm.addVehicle(i), i;
        }
        createBulldozerInstance(e = {
            x: 0,
            y: 3,
            z: 0
        }, t = {
            x: 0,
            y: 0,
            z: 0
        }, s = {}) {
            const n = {
                x: O.degToRad(t.x),
                y: O.degToRad(t.y),
                z: O.degToRad(t.z)
            }, o = {
                chassisPosition: new f(e.x, e.y, e.z),
                chassisRotation: new Se(n.x, n.y, n.z, "XYZ"),
                ...s
            };
            console.log("options", o);
            const i = new Jo(this.sm.sceneGraph, this.sm, this.pm.world, this.pm, o, this.pm.rapierDebugRender);
            return this.pm.addMesh(i.chassisMesh, i.chassisBody, "bulldozer"), this.sm.addToScene(i.chassisMesh), this.vm.addVehicle(i), i;
        }
        createBusInstance(e = {
            x: 0,
            y: 3,
            z: 0
        }, t = {
            x: 0,
            y: 0,
            z: 0
        }, s = {}) {
            const n = {
                x: O.degToRad(t.x),
                y: O.degToRad(t.y),
                z: O.degToRad(t.z)
            }, o = {
                chassisPosition: new f(e.x, e.y, e.z),
                chassisRotation: new Se(n.x, n.y, n.z, "XYZ"),
                ...s
            };
            console.log("options", o);
            const i = new mi(this.sm.sceneGraph, this.sm, this.pm.world, this.pm, o, this.pm.rapierDebugRender);
            return this.pm.addMesh(i.chassisMesh, i.chassisBody, "bus"), this.vm.addVehicle(i), i;
        }
        createTankInstance(e = {
            x: 0,
            y: 3,
            z: 0
        }, t = {
            x: 0,
            y: 0,
            z: 0
        }, s = {}) {
            const n = {
                x: O.degToRad(t.x),
                y: O.degToRad(t.y),
                z: O.degToRad(t.z)
            }, o = {
                chassisPosition: new f(e.x, e.y, e.z),
                chassisRotation: new Se(n.x, n.y, n.z, "XYZ"),
                ...s
            };
            console.log("options", o);
            const i = new Pi(this.sm.sceneGraph, this.sm, this.pm.world, this.pm, o, this.pm.rapierDebugRender);
            return this.pm.addMesh(i.chassisMesh, i.chassisBody, "tank"), this.vm.addVehicle(i), i;
        }
        createTruckInstance(e = {
            x: 0,
            y: 3,
            z: 0
        }, t = {
            x: 0,
            y: 0,
            z: 0
        }, s = {}) {
            const n = {
                x: O.degToRad(t.x),
                y: O.degToRad(t.y),
                z: O.degToRad(t.z)
            }, o = {
                chassisPosition: new f(e.x, e.y, e.z),
                chassisRotation: new Se(n.x, n.y, n.z, "XYZ"),
                ...s
            };
            console.log("options", o);
            const i = new Vi(this.sm.sceneGraph, this.sm, this.pm.world, this.pm, o, this.pm.rapierDebugRender);
            return this.vm.addVehicle(i), i;
        }
        addGroundColliders(e) {
            const t = V.fixed();
            t.setTranslation(0, 0, 0);
            const s = this.pm.world.createRigidBody(t);
            s.userData = {
                name: "ground"
            };
            const n = q.cuboid(80, .5, 48).setActiveEvents(Js.COLLISION_EVENTS);
            this.pm.world.createCollider(n, s), this.pm.addMesh(e, s, "ground");
        }
    }
    const fe = new Ki;
    class qi {
        physicsManager;
        constructor(e, t){
            this.physicsManager = t, this.sceneManager = e, this.mapGroup = new he, this.mapGroup.name = "mapGroup";
        }
        async load(e, t, s) {
            this.mapGroup.add(await this.spawnGround(e.ground_tiles)), this.sceneManager.addToGround(this.mapGroup), await this.spawnVehicles(t);
        }
        async spawnGround(e) {
            const t = new oe;
            t.name = "ground";
            for (const o of e){
                const i = await fe.createAssetInstance(o.type, o.position.x, o.position.y, o.position.z, o.rotation);
                if (i) {
                    const a = i.getObjectByName("Node_0"), r = i.getObjectByName("Node_0001");
                    let c;
                    r ? (c = r.quaternion, r.position) : (c = a.quaternion, a.position), i.updateMatrixWorld, i.name = o.type;
                    let l = V.fixed();
                    l = l.setTranslation(...i.position), l = l.setRotation(i.quaternion);
                    const h = this.physicsManager.world.createRigidBody(l), u = 1 / 2 * 1 / 3, p = q.cuboid(49 * u, 49 * u, 1 * u);
                    p.setRotation(c), p.setTranslation(0, .25, 0), this.physicsManager.world.createCollider(p, h), h.userData = {
                        name: o.type
                    }, i.traverse((m)=>{
                        m.isMesh && (m.receiveShadow = !0, m.updateMatrixWorld);
                    }), t.add(i);
                }
            }
            const s = await Lo(this.physicsManager.world, this.sceneManager);
            s.name = "terrain", this.mapGroup.add(s), this.sceneManager.addToScene(s);
            const n = await zo(this.physicsManager.world, this.sceneManager);
            return this.sceneManager.addToScene(n), t;
        }
        async spawnVehicles(e) {
            console.log("vehiclesSpawns", e);
            for (const t of e){
                if (!t.type) {
                    console.warn("Vehicle spawn without type", t);
                    continue;
                }
                t.type === "bulldozer" ? (console.log("Creating bulldozer instance", t), await fe.createBulldozerInstance({
                    x: t.pos.x,
                    y: t.pos.y,
                    z: t.pos.z
                }, {
                    x: t.rot.x,
                    y: t.rot.y,
                    z: t.rot.z
                })) : t.type === "bus" ? (console.log("Creating bus instance", t), await fe.createBusInstance({
                    x: t.pos.x,
                    y: t.pos.y,
                    z: t.pos.z
                }, {
                    x: t.rot.x,
                    y: t.rot.y,
                    z: t.rot.z
                })) : t.type === "car" ? (console.log("Creating car instance", t), await fe.createCarInstance({
                    x: t.pos.x,
                    y: t.pos.y,
                    z: t.pos.z
                }, {
                    x: t.rot.x,
                    y: t.rot.y,
                    z: t.rot.z
                })) : t.type === "tank" ? (console.log("Creating tank instance", t), await fe.createTankInstance({
                    x: t.pos.x,
                    y: t.pos.y,
                    z: t.pos.z
                }, {
                    x: t.rot.x,
                    y: t.rot.y,
                    z: t.rot.z
                })) : t.type === "truck" ? (console.log("Creating truck instance", t), await fe.createTruckInstance({
                    x: t.pos.x,
                    y: t.pos.y,
                    z: t.pos.z
                }, {
                    x: t.rot.x,
                    y: t.rot.y,
                    z: t.rot.z
                })) : console.warn("Unknown vehicle type", t.type);
            }
        }
        createCollider(e, t) {
            const s = this.physicsManager.getConvexMeshColliderDesc(e);
            s.setTranslation(...e.position), s.setRotation(e.quaternion), this.physicsManager.world.createCollider(s, t);
        }
        unload() {}
    }
    const je = en(), rt = new f(-400, -40, -400);
    class Xi {
        vehicles;
        activeVehicleIndex;
        movement;
        activeVehicle;
        constructor(){
            this.vehicles = [], this.vehicleMeshes = [], this.activeVehicleIndex = 0, this._hasEmitted = !1;
        }
        async addVehicle(e) {
            console.log("ADICIONADO VEICULO:", e), this.vehicles.push(e), this.vehicleMeshes.push(e.chassisMesh), this.vehicles.length === 1 && this.setActiveVehicle(0);
        }
        setActiveVehicle(e) {
            if (e < 0 || e >= this.vehicles.length) {
                console.error("Índice de veículo inválido");
                return;
            }
            this.activeVehicleIndex = e, this.activeVehicle = this.vehicles[this.activeVehicleIndex], this.movement = this.activeVehicle.movement, this.activeVehicle.chassisMesh.position;
        }
        update(e) {
            this.activeVehicle && this.activeVehicle.updateController(this.movement), this.vehicles.forEach((t)=>{
                (t.chassisMesh.position.y < rt.y || t.chassisMesh.position.x < rt.x || t.chassisMesh.position.z < rt.z) && (t.movement.reset = !0, t.updateController(t.movement)), t.controller.updateVehicle(e), t.updateWheels();
            }), !this._hasEmitted && this._checkAllParked() && (this._hasEmitted = !0, je.emit("allParked", {
                total: this.vehicles.length
            }));
        }
        _checkAllParked() {
            return !1;
        }
        dispose() {
            this.vehicles.forEach((e)=>e.dispose()), this.vehicles = [];
        }
    }
    const Yi = {
        1: {
            id: 1,
            name: "Level 1 - Test Level",
            difficulty: "easy",
            description: "First level of the game.",
            mapID: "1",
            vehiclesSpawns: [
                {
                    type: "tank",
                    pos: {
                        x: 5,
                        y: 2.2,
                        z: 10
                    },
                    rot: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                },
                {
                    type: "bus",
                    pos: {
                        x: -5,
                        y: 3,
                        z: -10
                    },
                    rot: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                },
                {
                    type: "bulldozer",
                    pos: {
                        x: -5,
                        y: 3,
                        z: 10
                    },
                    rot: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                },
                {
                    type: "car",
                    pos: {
                        x: 0,
                        y: 3,
                        z: 0
                    },
                    rot: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                },
                {
                    type: "truck",
                    pos: {
                        x: 5,
                        y: 3,
                        z: -10
                    },
                    rot: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                }
            ],
            objectsSpawn: [
                {
                    type: "rock",
                    position: {
                        x: -10,
                        y: 1,
                        z: -10
                    },
                    rotation: {
                        y: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                }
            ]
        }
    }, $i = {
        1: {
            id: "1",
            description: "First map.",
            terrain: "/Hand_made_terrain_heightmap.png",
            ground_size: {
                x: 160,
                y: 1,
                z: 96
            },
            ground_middle: {
                x: 0,
                y: 0,
                z: 0
            },
            ground_tiles: [
                {
                    type: "road",
                    position: {
                        x: -1,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -2,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -3,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road_junction_left_right",
                    position: {
                        x: -4,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -4,
                        y: 0,
                        z: 2
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 4.7,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -5,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -6,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -7,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road_junction_left",
                    position: {
                        x: -8,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -8,
                        y: 0,
                        z: 2
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -8,
                        y: 0,
                        z: 3
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road_junction_right",
                    position: {
                        x: -8,
                        y: 0,
                        z: 4
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -8,
                        y: 0,
                        z: 5
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road_turn_right",
                    position: {
                        x: -8,
                        y: 0,
                        z: 6
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: -1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -9,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -9,
                        y: 0,
                        z: 6
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road_turn_left",
                    position: {
                        x: -10,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -10,
                        y: 0,
                        z: 2
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 4.7,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -10,
                        y: 0,
                        z: 3
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 4.7,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -10,
                        y: 0,
                        z: 4
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 4.7,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: -10,
                        y: 0,
                        z: 5
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 4.7,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road_turn_right",
                    position: {
                        x: -10,
                        y: 0,
                        z: 6
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 3.1,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "park1",
                    position: {
                        x: 0,
                        y: 0,
                        z: -1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road_junction_left_right",
                    position: {
                        x: 0,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road_junction_right",
                    position: {
                        x: 0,
                        y: 0,
                        z: 2
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: 0,
                        y: 0,
                        z: 3
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: 0,
                        y: 0,
                        z: 4
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: 0,
                        y: 0,
                        z: 5
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road",
                    position: {
                        x: 0,
                        y: 0,
                        z: 6
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road_turn_right",
                    position: {
                        x: 1,
                        y: 0,
                        z: 1
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                },
                {
                    type: "road_turn_right",
                    position: {
                        x: 1,
                        y: 0,
                        z: 2
                    },
                    colliderType: "cuboid",
                    rotation: {
                        x: 0,
                        y: -1.6,
                        z: 0
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    }
                }
            ]
        }
    };
    let qt, Pe, ae;
    document.querySelector("canvas.webgl");
    class Qi {
        constructor(e = [
            "1"
        ]){
            this.levelsIDs = e, this.currentLevel = null, this.currentLevelIndex = 0, this._lastTime = 0, this._accumulator = 0, this._fixedDt = 1 / _o, this._rafId = null, this.raycaster = new tn, this.pointer = new U;
        }
        async start() {
            await this._loadLevel(this.currentLevelIndex), this._lastTime = performance.now() / 1e3, this._accumulator = 0, this.setupEventListeners(), this._rafId = requestAnimationFrame(this._loop);
        }
        stop() {
            cancelAnimationFrame(this._rafId);
        }
        _loop = (e)=>{
            const t = e / 1e3;
            let s = t - this._lastTime;
            for(this._lastTime = t, s = Math.min(s, .25), this._accumulator += s; this._accumulator >= this._fixedDt;)qt.step(this._fixedDt), ae.update(this._fixedDt), this.currentLevel.rapierDebugRender, this._accumulator -= this._fixedDt;
            ae.activeVehicle && Pe.setFollowTarget(ae.activeVehicle.follow_target), Pe.updateCamera(), Pe.renderScene(), this.currentLevel.rapierDebugRender && this.currentLevel.rapierDebugRender.update(), this._rafId = requestAnimationFrame(this._loop);
        };
        async nextLevel() {
            if (this.currentLevelIndex++, this.currentLevelIndex >= this.levelsIDs.length) {
                console.log("FIM DE JOGO");
                return;
            }
            await this._loadLevel(this.currentLevelIndex);
        }
        async _loadLevel(e) {
            this.currentLevel && this.currentLevel.dispose(), this.currentLevel = new Zi(this.levelsIDs[e]), await this.currentLevel.init(), Pe = this.currentLevel.sm, qt = this.currentLevel.pm, this.currentLevel.mm, ae = this.currentLevel.vm, ae = this.currentLevel.vm, this._off && this._off(), this._off = je.on("objectiveComplete", ()=>this.nextLevel());
        }
        setupEventListeners() {
            window.addEventListener("resize", ()=>this.currentLevel.sm.onWindowResize()), document.addEventListener("keydown", (t)=>{
                const s = this.currentLevel.vm.movement;
                if (!s) {
                    console.error("movement not defined");
                    return;
                }
                this.currentLevel.sm.enableFollow(), t.key === "w" && "forward" in s && (this.currentLevel.vm.movement.forward = -1), t.key === "s" && "forward" in s && (this.currentLevel.vm.movement.forward = 1), t.key === "a" && "right" in s && (this.currentLevel.vm.movement.right = 1), t.key === "d" && "right" in s && (this.currentLevel.vm.movement.right = -1), t.key === "ArrowDown" && "appendixUp" in s && (this.currentLevel.vm.movement.appendixUp = -1), t.key === "ArrowUp" && "appendixUp" in s && (this.currentLevel.vm.movement.appendixUp = 1), t.key === "ArrowLeft" && "appendixRight" in s && (this.currentLevel.vm.movement.appendixRight = -1), t.key === "ArrowRight" && "appendixRight" in s && (this.currentLevel.vm.movement.appendixRight = 1), t.key === "f" && "shoot" in s && (this.currentLevel.vm.movement.shoot = 1), t.key === "r" && "reset" in s && (this.currentLevel.vm.movement.reset = !0), t.key === " " && "brake" in s && (this.currentLevel.vm.movement.brake = 1);
            }), document.addEventListener("keyup", (t)=>{
                const s = this.currentLevel.vm.movement;
                if (!s) {
                    console.error("movement not defined");
                    return;
                }
                this.currentLevel.sm.enableFollow(), (t.key === "w" || t.key === "s") && "forward" in s && (this.currentLevel.vm.movement.forward = 0), (t.key === "a" || t.key === "d") && "right" in s && (this.currentLevel.vm.movement.right = 0), (t.key === "ArrowUp" || t.key === "ArrowDown") && "appendixUp" in s && (this.currentLevel.vm.movement.appendixUp = 0), (t.key === "ArrowLeft" || t.key === "ArrowRight") && "appendixRight" in s && (this.currentLevel.vm.movement.appendixRight = 0), t.key === "f" && "shoot" in s && (this.currentLevel.vm.movement.shoot = 0), t.key === "r" && "reset" in s && (this.currentLevel.vm.movement.reset = !1), t.key === " " && "brake" in s && (this.currentLevel.vm.movement.brake = 0);
            }), this.currentLevel.sm.renderer.domElement.addEventListener("pointerdown", this._onPointerDown);
        }
        _onPointerDown = (e)=>{
            const t = e.target.getBoundingClientRect();
            this.pointer.x = (e.clientX - t.left) / t.width * 2 - 1, this.pointer.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.pointer, Pe.camera);
            const s = this.raycaster.intersectObjects(ae.vehicleMeshes, !0);
            if (s.length > 0) {
                const n = s[0].object, o = ae.vehicleMeshes.findIndex((i)=>i === n || i.children.includes(n));
                o !== -1 && (ae.setActiveVehicle(o), this.currentLevel.sm.enableFollow(), console.log("Veículo selecionado:", o));
            }
        };
    }
    class Zi {
        constructor(e){
            this.levelID = e, this.sm = new no, this.pm = new vo, this.mm = new qi(this.sm, this.pm), this.vm = new Xi, fe.updateLevel(this.pm, this.sm, this.vm), this.conditions = {
                allParked: !1
            }, this._offFns = [];
        }
        async init() {
            const e = Yi[this.levelID], t = $i[e.mapID], s = e.vehiclesSpawns;
            console.log("vehiclesSpawns", s);
            const n = e.objectsSpawn;
            console.log("levelData", e), await this.mm.load(t, s, n);
            this._offFns.push(je.on("allParked", ()=>this._onCondition("allParked")));
        }
        _onCondition(e) {
            this.conditions[e] = !0, this._checkComplete();
        }
        _checkComplete() {
            Object.values(this.conditions).every((e)=>e === !0) && je.emit("objectiveComplete", {
                level: this.levelName
            });
        }
        dispose() {
            this._offFns.forEach((e)=>e()), this._offFns = [], this.sm.dispose(), this.pm.dispose(), this.mm.dispose(), this.vm.dispose();
        }
    }
    const Ji = new Qi([
        "1"
    ]);
    Ji.start();
});
