import { C as Ts, V as m, M as ve, T as Te, Q as F, S as Et, a as j, R as Ms, P as Ue, b as G, D as vs, H as Me, F as Xe, c as Oe, L as J, d as ge, e as As, f as ht, g as rs, B as _t, h as ye, i as as, j as He, k as he, l as N, m as dt, n as Ce, o as ee, p as cs, q as Rs, r as Ss, I as bt, s as K, t as Es, O as ie, u as Fe, v as Ps, w as Ds, x as ls, N as Ls, y as Cs, z as zs, A as hs, E as ze, G as ks, J as Bs, K as Is, U as Ye, W as Fs, X as Ae, Y as Os, Z as le, _ as Ns, $ as Gs, a0 as k, a1 as Ws, a2 as js, a3 as Us, a4 as Hs, a5 as Q, a6 as Ke, a7 as Vs, a8 as Ks, a9 as qs, aa as Xs, ab as Ys, ac as ds, ad as $s, ae as Pt, af as Dt, ag as Lt, ah as Ct, ai as Zs, aj as Qs, ak as Js, al as eo, am as ke, an as us, ao as Tt, ap as Mt, aq as to, ar as ps, as as so, at as oo, au as no, av as io, aw as ro, ax as ao, ay as co, az as lo, aA as ho, aB as uo, aC as X, aD as U, aE as de, aF as D, aG as we, aH as ms, aI as H, aJ as Y, aK as $, aL as vt, aM as Pe, aN as po, aO as fs, aP as ys, aQ as mo, __tla as __tla_0 } from "./vendor-CfRIp_Kv.js";
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
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);
        new MutationObserver((o)=>{
            for (const n of o)if (n.type === "childList") for (const i of n.addedNodes)i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function t(o) {
            const n = {};
            return o.integrity && (n.integrity = o.integrity), o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? n.credentials = "include" : o.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n;
        }
        function s(o) {
            if (o.ep) return;
            o.ep = !0;
            const n = t(o);
            fetch(o.href, n);
        }
    })();
    const zt = {
        type: "change"
    }, At = {
        type: "start"
    }, gs = {
        type: "end"
    }, Ne = new Ms, kt = new Ue, fo = Math.cos(70 * G.DEG2RAD), W = new m, V = 2 * Math.PI, O = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6
    }, $e = 1e-6;
    class yo extends Ts {
        constructor(e, t = null){
            super(e, t), this.state = O.NONE, this.enabled = !0, this.target = new m, this.cursor = new m, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
                LEFT: "ArrowLeft",
                UP: "ArrowUp",
                RIGHT: "ArrowRight",
                BOTTOM: "ArrowDown"
            }, this.mouseButtons = {
                LEFT: ve.ROTATE,
                MIDDLE: ve.DOLLY,
                RIGHT: ve.PAN
            }, this.touches = {
                ONE: Te.ROTATE,
                TWO: Te.DOLLY_PAN
            }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new m, this._lastQuaternion = new F, this._lastTargetPosition = new m, this._quat = new F().setFromUnitVectors(e.up, new m(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Et, this._sphericalDelta = new Et, this._scale = 1, this._panOffset = new m, this._rotateStart = new j, this._rotateEnd = new j, this._rotateDelta = new j, this._panStart = new j, this._panEnd = new j, this._panDelta = new j, this._dollyStart = new j, this._dollyEnd = new j, this._dollyDelta = new j, this._dollyDirection = new m, this._mouse = new j, this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = wo.bind(this), this._onPointerDown = go.bind(this), this._onPointerUp = xo.bind(this), this._onContextMenu = Ro.bind(this), this._onMouseWheel = To.bind(this), this._onKeyDown = Mo.bind(this), this._onTouchStart = vo.bind(this), this._onTouchMove = Ao.bind(this), this._onMouseDown = _o.bind(this), this._onMouseMove = bo.bind(this), this._interceptControlDown = So.bind(this), this._interceptControlUp = Eo.bind(this), this.domElement !== null && this.connect(), this.update();
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
            this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(zt), this.update(), this.state = O.NONE;
        }
        update(e = null) {
            const t = this.object.position;
            W.copy(t).sub(this.target), W.applyQuaternion(this._quat), this._spherical.setFromVector3(W), this.autoRotate && this.state === O.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
            let s = this.minAzimuthAngle, o = this.maxAzimuthAngle;
            isFinite(s) && isFinite(o) && (s < -Math.PI ? s += V : s > Math.PI && (s -= V), o < -Math.PI ? o += V : o > Math.PI && (o -= V), s <= o ? this._spherical.theta = Math.max(s, Math.min(o, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + o) / 2 ? Math.max(s, this._spherical.theta) : Math.min(o, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
            let n = !1;
            if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
            else {
                const i = this._spherical.radius;
                this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), n = i != this._spherical.radius;
            }
            if (W.setFromSpherical(this._spherical), W.applyQuaternion(this._quatInverse), t.copy(this.target).add(W), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
                let i = null;
                if (this.object.isPerspectiveCamera) {
                    const a = W.length();
                    i = this._clampDistance(a * this._scale);
                    const r = a - i;
                    this.object.position.addScaledVector(this._dollyDirection, r), this.object.updateMatrixWorld(), n = !!r;
                } else if (this.object.isOrthographicCamera) {
                    const a = new m(this._mouse.x, this._mouse.y, 0);
                    a.unproject(this.object);
                    const r = this.object.zoom;
                    this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), n = r !== this.object.zoom;
                    const c = new m(this._mouse.x, this._mouse.y, 0);
                    c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), i = W.length();
                } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
                i !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(i).add(this.object.position) : (Ne.origin.copy(this.object.position), Ne.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Ne.direction)) < fo ? this.object.lookAt(this.target) : (kt.setFromNormalAndCoplanarPoint(this.object.up, this.target), Ne.intersectPlane(kt, this.target))));
            } else if (this.object.isOrthographicCamera) {
                const i = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), i !== this.object.zoom && (this.object.updateProjectionMatrix(), n = !0);
            }
            return this._scale = 1, this._performCursorZoom = !1, n || this._lastPosition.distanceToSquared(this.object.position) > $e || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > $e || this._lastTargetPosition.distanceToSquared(this.target) > $e ? (this.dispatchEvent(zt), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
        }
        _getAutoRotationAngle(e) {
            return e !== null ? V / 60 * this.autoRotateSpeed * e : V / 60 / 60 * this.autoRotateSpeed;
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
                const o = this.object.position;
                W.copy(o).sub(this.target);
                let n = W.length();
                n *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * n / s.clientHeight, this.object.matrix), this._panUp(2 * t * n / s.clientHeight, this.object.matrix);
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
            const s = this.domElement.getBoundingClientRect(), o = e - s.left, n = t - s.top, i = s.width, a = s.height;
            this._mouse.x = o / i * 2 - 1, this._mouse.y = -(n / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
            this._rotateLeft(V * this._rotateDelta.x / t.clientHeight), this._rotateUp(V * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(V * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
                    break;
                case this.keys.BOTTOM:
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-V * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
                    break;
                case this.keys.LEFT:
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(V * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
                    break;
                case this.keys.RIGHT:
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-V * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
                    break;
            }
            t && (e.preventDefault(), this.update());
        }
        _handleTouchStartRotate(e) {
            if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
            else {
                const t = this._getSecondPointerPosition(e), s = .5 * (e.pageX + t.x), o = .5 * (e.pageY + t.y);
                this._rotateStart.set(s, o);
            }
        }
        _handleTouchStartPan(e) {
            if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
            else {
                const t = this._getSecondPointerPosition(e), s = .5 * (e.pageX + t.x), o = .5 * (e.pageY + t.y);
                this._panStart.set(s, o);
            }
        }
        _handleTouchStartDolly(e) {
            const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, o = e.pageY - t.y, n = Math.sqrt(s * s + o * o);
            this._dollyStart.set(0, n);
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
                const s = this._getSecondPointerPosition(e), o = .5 * (e.pageX + s.x), n = .5 * (e.pageY + s.y);
                this._rotateEnd.set(o, n);
            }
            this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
            const t = this.domElement;
            this._rotateLeft(V * this._rotateDelta.x / t.clientHeight), this._rotateUp(V * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
        }
        _handleTouchMovePan(e) {
            if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
            else {
                const t = this._getSecondPointerPosition(e), s = .5 * (e.pageX + t.x), o = .5 * (e.pageY + t.y);
                this._panEnd.set(s, o);
            }
            this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
        }
        _handleTouchMoveDolly(e) {
            const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, o = e.pageY - t.y, n = Math.sqrt(s * s + o * o);
            this._dollyEnd.set(0, n), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
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
            t === void 0 && (t = new j, this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
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
    function go(d) {
        this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(d.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(d) && (this._addPointer(d), d.pointerType === "touch" ? this._onTouchStart(d) : this._onMouseDown(d)));
    }
    function wo(d) {
        this.enabled !== !1 && (d.pointerType === "touch" ? this._onTouchMove(d) : this._onMouseMove(d));
    }
    function xo(d) {
        switch(this._removePointer(d), this._pointers.length){
            case 0:
                this.domElement.releasePointerCapture(d.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(gs), this.state = O.NONE;
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
    function _o(d) {
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
            case ve.DOLLY:
                if (this.enableZoom === !1) return;
                this._handleMouseDownDolly(d), this.state = O.DOLLY;
                break;
            case ve.ROTATE:
                if (d.ctrlKey || d.metaKey || d.shiftKey) {
                    if (this.enablePan === !1) return;
                    this._handleMouseDownPan(d), this.state = O.PAN;
                } else {
                    if (this.enableRotate === !1) return;
                    this._handleMouseDownRotate(d), this.state = O.ROTATE;
                }
                break;
            case ve.PAN:
                if (d.ctrlKey || d.metaKey || d.shiftKey) {
                    if (this.enableRotate === !1) return;
                    this._handleMouseDownRotate(d), this.state = O.ROTATE;
                } else {
                    if (this.enablePan === !1) return;
                    this._handleMouseDownPan(d), this.state = O.PAN;
                }
                break;
            default:
                this.state = O.NONE;
        }
        this.state !== O.NONE && this.dispatchEvent(At);
    }
    function bo(d) {
        switch(this.state){
            case O.ROTATE:
                if (this.enableRotate === !1) return;
                this._handleMouseMoveRotate(d);
                break;
            case O.DOLLY:
                if (this.enableZoom === !1) return;
                this._handleMouseMoveDolly(d);
                break;
            case O.PAN:
                if (this.enablePan === !1) return;
                this._handleMouseMovePan(d);
                break;
        }
    }
    function To(d) {
        this.enabled === !1 || this.enableZoom === !1 || this.state !== O.NONE || (d.preventDefault(), this.dispatchEvent(At), this._handleMouseWheel(this._customWheelEvent(d)), this.dispatchEvent(gs));
    }
    function Mo(d) {
        this.enabled !== !1 && this._handleKeyDown(d);
    }
    function vo(d) {
        switch(this._trackPointer(d), this._pointers.length){
            case 1:
                switch(this.touches.ONE){
                    case Te.ROTATE:
                        if (this.enableRotate === !1) return;
                        this._handleTouchStartRotate(d), this.state = O.TOUCH_ROTATE;
                        break;
                    case Te.PAN:
                        if (this.enablePan === !1) return;
                        this._handleTouchStartPan(d), this.state = O.TOUCH_PAN;
                        break;
                    default:
                        this.state = O.NONE;
                }
                break;
            case 2:
                switch(this.touches.TWO){
                    case Te.DOLLY_PAN:
                        if (this.enableZoom === !1 && this.enablePan === !1) return;
                        this._handleTouchStartDollyPan(d), this.state = O.TOUCH_DOLLY_PAN;
                        break;
                    case Te.DOLLY_ROTATE:
                        if (this.enableZoom === !1 && this.enableRotate === !1) return;
                        this._handleTouchStartDollyRotate(d), this.state = O.TOUCH_DOLLY_ROTATE;
                        break;
                    default:
                        this.state = O.NONE;
                }
                break;
            default:
                this.state = O.NONE;
        }
        this.state !== O.NONE && this.dispatchEvent(At);
    }
    function Ao(d) {
        switch(this._trackPointer(d), this.state){
            case O.TOUCH_ROTATE:
                if (this.enableRotate === !1) return;
                this._handleTouchMoveRotate(d), this.update();
                break;
            case O.TOUCH_PAN:
                if (this.enablePan === !1) return;
                this._handleTouchMovePan(d), this.update();
                break;
            case O.TOUCH_DOLLY_PAN:
                if (this.enableZoom === !1 && this.enablePan === !1) return;
                this._handleTouchMoveDollyPan(d), this.update();
                break;
            case O.TOUCH_DOLLY_ROTATE:
                if (this.enableZoom === !1 && this.enableRotate === !1) return;
                this._handleTouchMoveDollyRotate(d), this.update();
                break;
            default:
                this.state = O.NONE;
        }
    }
    function Ro(d) {
        this.enabled !== !1 && d.preventDefault();
    }
    function So(d) {
        d.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
            passive: !0,
            capture: !0
        }));
    }
    function Eo(d) {
        d.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
            passive: !0,
            capture: !0
        }));
    }
    class Po extends vs {
        constructor(e){
            super(e), this.type = Me;
        }
        parse(e) {
            const i = function(y, M) {
                switch(y){
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
`, h = function(y, M, A) {
                M = M || 1024;
                let C = y.pos, z = -1, S = 0, I = "", B = String.fromCharCode.apply(null, new Uint16Array(y.subarray(C, C + 128)));
                for(; 0 > (z = B.indexOf(l)) && S < M && C < y.byteLength;)I += B, S += B.length, C += 128, B += String.fromCharCode.apply(null, new Uint16Array(y.subarray(C, C + 128)));
                return -1 < z ? (y.pos += S + z + 1, I + B.slice(0, z)) : !1;
            }, u = function(y) {
                const M = /^#\?(\S+)/, A = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, P = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, C = /^\s*FORMAT=(\S+)\s*$/, z = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, S = {
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
                let I, B;
                for((y.pos >= y.byteLength || !(I = h(y))) && i(1, "no header found"), (B = I.match(M)) || i(3, "bad initial token"), S.valid |= 1, S.programtype = B[1], S.string += I + `
`; I = h(y), I !== !1;){
                    if (S.string += I + `
`, I.charAt(0) === "#") {
                        S.comments += I + `
`;
                        continue;
                    }
                    if ((B = I.match(A)) && (S.gamma = parseFloat(B[1])), (B = I.match(P)) && (S.exposure = parseFloat(B[1])), (B = I.match(C)) && (S.valid |= 2, S.format = B[1]), (B = I.match(z)) && (S.valid |= 4, S.height = parseInt(B[1], 10), S.width = parseInt(B[2], 10)), S.valid & 2 && S.valid & 4) break;
                }
                return S.valid & 2 || i(3, "missing format specifier"), S.valid & 4 || i(3, "missing image size specifier"), S;
            }, p = function(y, M, A) {
                const P = M;
                if (P < 8 || P > 32767 || y[0] !== 2 || y[1] !== 2 || y[2] & 128) return new Uint8Array(y);
                P !== (y[2] << 8 | y[3]) && i(3, "wrong scanline width");
                const C = new Uint8Array(4 * M * A);
                C.length || i(4, "unable to allocate buffer space");
                let z = 0, S = 0;
                const I = 4 * P, B = new Uint8Array(4), xe = new Uint8Array(I);
                let Rt = A;
                for(; Rt > 0 && S < y.byteLength;){
                    S + 4 > y.byteLength && i(1), B[0] = y[S++], B[1] = y[S++], B[2] = y[S++], B[3] = y[S++], (B[0] != 2 || B[1] != 2 || (B[2] << 8 | B[3]) != P) && i(3, "bad rgbe scanline format");
                    let Ee = 0, te;
                    for(; Ee < I && S < y.byteLength;){
                        te = y[S++];
                        const se = te > 128;
                        if (se && (te -= 128), (te === 0 || Ee + te > I) && i(3, "bad scanline data"), se) {
                            const oe = y[S++];
                            for(let St = 0; St < te; St++)xe[Ee++] = oe;
                        } else xe.set(y.subarray(S, S + te), Ee), Ee += te, S += te;
                    }
                    const bs = P;
                    for(let se = 0; se < bs; se++){
                        let oe = 0;
                        C[z] = xe[se + oe], oe += P, C[z + 1] = xe[se + oe], oe += P, C[z + 2] = xe[se + oe], oe += P, C[z + 3] = xe[se + oe], z += 4;
                    }
                    Rt--;
                }
                return C;
            }, f = function(y, M, A, P) {
                const C = y[M + 3], z = Math.pow(2, C - 128) / 255;
                A[P + 0] = y[M + 0] * z, A[P + 1] = y[M + 1] * z, A[P + 2] = y[M + 2] * z, A[P + 3] = 1;
            }, _ = function(y, M, A, P) {
                const C = y[M + 3], z = Math.pow(2, C - 128) / 255;
                A[P + 0] = Oe.toHalfFloat(Math.min(y[M + 0] * z, 65504)), A[P + 1] = Oe.toHalfFloat(Math.min(y[M + 1] * z, 65504)), A[P + 2] = Oe.toHalfFloat(Math.min(y[M + 2] * z, 65504)), A[P + 3] = Oe.toHalfFloat(1);
            }, g = new Uint8Array(e);
            g.pos = 0;
            const T = u(g), v = T.width, w = T.height, x = p(g.subarray(g.pos), v, w);
            let b, E, R;
            switch(this.type){
                case Xe:
                    R = x.length / 4;
                    const y = new Float32Array(R * 4);
                    for(let A = 0; A < R; A++)f(x, A * 4, y, A * 4);
                    b = y, E = Xe;
                    break;
                case Me:
                    R = x.length / 4;
                    const M = new Uint16Array(R * 4);
                    for(let A = 0; A < R; A++)_(x, A * 4, M, A * 4);
                    b = M, E = Me;
                    break;
                default:
                    throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
            }
            return {
                width: v,
                height: w,
                data: b,
                header: T.string,
                gamma: T.gamma,
                exposure: T.exposure,
                type: E
            };
        }
        setDataType(e) {
            return this.type = e, this;
        }
        load(e, t, s, o) {
            function n(i, a) {
                switch(i.type){
                    case Xe:
                    case Me:
                        i.colorSpace = J, i.minFilter = ge, i.magFilter = ge, i.generateMipmaps = !1, i.flipY = !0;
                        break;
                }
                t && t(i, a);
            }
            return super.load(e, n, s, o);
        }
    }
    function Do(d, e = !1) {
        const t = d[0].index !== null, s = new Set(Object.keys(d[0].attributes)), o = new Set(Object.keys(d[0].morphAttributes)), n = {}, i = {}, a = d[0].morphTargetsRelative, r = new _t;
        let c = 0;
        for(let l = 0; l < d.length; ++l){
            const h = d[l];
            let u = 0;
            if (t !== (h.index !== null)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
            for(const p in h.attributes){
                if (!s.has(p)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + '. All geometries must have compatible attributes; make sure "' + p + '" attribute exists among all geometries, or in none of them.'), null;
                n[p] === void 0 && (n[p] = []), n[p].push(h.attributes[p]), u++;
            }
            if (u !== s.size) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". Make sure all geometries have the same number of attributes."), null;
            if (a !== h.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
            for(const p in h.morphAttributes){
                if (!o.has(p)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + l + ".  .morphAttributes must be consistent throughout all geometries."), null;
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
                for(let f = 0; f < p.count; ++f)h.push(p.getX(f) + l);
                l += d[u].attributes.position.count;
            }
            r.setIndex(h);
        }
        for(const l in n){
            const h = Bt(n[l]);
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
                const f = Bt(p);
                if (!f) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + l + " morphAttribute."), null;
                r.morphAttributes[l].push(f);
            }
        }
        return r;
    }
    function Bt(d) {
        let e, t, s, o = -1, n = 0;
        for(let c = 0; c < d.length; ++c){
            const l = d[c];
            if (e === void 0 && (e = l.array.constructor), e !== l.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
            if (t === void 0 && (t = l.itemSize), t !== l.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
            if (s === void 0 && (s = l.normalized), s !== l.normalized) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
            if (o === -1 && (o = l.gpuType), o !== l.gpuType) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
            n += l.count * t;
        }
        const i = new e(n), a = new ye(i, t, s);
        let r = 0;
        for(let c = 0; c < d.length; ++c){
            const l = d[c];
            if (l.isInterleavedBufferAttribute) {
                const h = r / t;
                for(let u = 0, p = l.count; u < p; u++)for(let f = 0; f < t; f++){
                    const _ = l.getComponent(u, f);
                    a.setComponent(u + h, f, _);
                }
            } else i.set(l.array, r);
            r += l.count * t;
        }
        return o !== void 0 && (a.gpuType = o), a;
    }
    function It(d, e) {
        if (e === As) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), d;
        if (e === ht || e === rs) {
            let t = d.getIndex();
            if (t === null) {
                const i = [], a = d.getAttribute("position");
                if (a !== void 0) {
                    for(let r = 0; r < a.count; r++)i.push(r);
                    d.setIndex(i), t = d.getIndex();
                } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), d;
            }
            const s = t.count - 2, o = [];
            if (e === ht) for(let i = 1; i <= s; i++)o.push(t.getX(0)), o.push(t.getX(i)), o.push(t.getX(i + 1));
            else for(let i = 0; i < s; i++)i % 2 === 0 ? (o.push(t.getX(i)), o.push(t.getX(i + 1)), o.push(t.getX(i + 2))) : (o.push(t.getX(i + 2)), o.push(t.getX(i + 1)), o.push(t.getX(i)));
            o.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
            const n = d.clone();
            return n.setIndex(o), n.clearGroups(), n;
        } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), d;
    }
    const Ze = new WeakMap;
    class Lo extends as {
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
        load(e, t, s, o) {
            const n = new He(this.manager);
            n.setPath(this.path), n.setResponseType("arraybuffer"), n.setRequestHeader(this.requestHeader), n.setWithCredentials(this.withCredentials), n.load(e, (i)=>{
                this.parse(i, t, o);
            }, s, o);
        }
        parse(e, t, s = ()=>{}) {
            this.decodeDracoFile(e, t, null, null, he, s).catch(s);
        }
        decodeDracoFile(e, t, s, o, n = J, i = ()=>{}) {
            const a = {
                attributeIDs: s || this.defaultAttributeIDs,
                attributeTypes: o || this.defaultAttributeTypes,
                useUniqueIDs: !!s,
                vertexColorSpace: n
            };
            return this.decodeGeometry(e, a).then(t).catch(i);
        }
        decodeGeometry(e, t) {
            const s = JSON.stringify(t);
            if (Ze.has(e)) {
                const r = Ze.get(e);
                if (r.key === s) return r.promise;
                if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
            }
            let o;
            const n = this.workerNextTaskID++, i = e.byteLength, a = this._getWorker(n, i).then((r)=>(o = r, new Promise((c, l)=>{
                    o._callbacks[n] = {
                        resolve: c,
                        reject: l
                    }, o.postMessage({
                        type: "decode",
                        id: n,
                        taskConfig: t,
                        buffer: e
                    }, [
                        e
                    ]);
                }))).then((r)=>this._createGeometry(r.geometry));
            return a.catch(()=>!0).then(()=>{
                o && n && this._releaseTask(o, n);
            }), Ze.set(e, {
                key: s,
                promise: a
            }), a;
        }
        _createGeometry(e) {
            const t = new _t;
            e.index && t.setIndex(new ye(e.index.array, 1));
            for(let s = 0; s < e.attributes.length; s++){
                const o = e.attributes[s], n = o.name, i = o.array, a = o.itemSize, r = new ye(i, a);
                n === "color" && (this._assignVertexColorSpace(r, o.vertexColorSpace), r.normalized = !(i instanceof Float32Array)), t.setAttribute(n, r);
            }
            return t;
        }
        _assignVertexColorSpace(e, t) {
            if (t !== he) return;
            const s = new N;
            for(let o = 0, n = e.count; o < n; o++)s.fromBufferAttribute(e, o), dt.toWorkingColorSpace(s, he), e.setXYZ(o, s.r, s.g, s.b);
        }
        _loadLibrary(e, t) {
            const s = new He(this.manager);
            return s.setPath(this.decoderPath), s.setResponseType(t), s.setWithCredentials(this.withCredentials), new Promise((o, n)=>{
                s.load(e, o, void 0, n);
            });
        }
        preload() {
            return this._initDecoder(), this;
        }
        _initDecoder() {
            if (this.decoderPending) return this.decoderPending;
            const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
            return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((s)=>{
                const o = s[0];
                e || (this.decoderConfig.wasmBinary = s[1]);
                const n = Co.toString(), i = [
                    "/* draco decoder */",
                    o,
                    "",
                    "/* worker */",
                    n.substring(n.indexOf("{") + 1, n.lastIndexOf("}"))
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
                    const o = new Worker(this.workerSourceURL);
                    o._callbacks = {}, o._taskCosts = {}, o._taskLoad = 0, o.postMessage({
                        type: "init",
                        decoderConfig: this.decoderConfig
                    }), o.onmessage = function(n) {
                        const i = n.data;
                        switch(i.type){
                            case "decode":
                                o._callbacks[i.id].resolve(i);
                                break;
                            case "error":
                                o._callbacks[i.id].reject(i);
                                break;
                            default:
                                console.error('THREE.DRACOLoader: Unexpected message, "' + i.type + '"');
                        }
                    }, this.workerPool.push(o);
                } else this.workerPool.sort(function(o, n) {
                    return o._taskLoad > n._taskLoad ? -1 : 1;
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
    function Co() {
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
                            const p = t(h, u, new Int8Array(r), c), f = p.attributes.map((_)=>_.array.buffer);
                            p.index && f.push(p.index.array.buffer), self.postMessage({
                                type: "decode",
                                id: a.id,
                                geometry: p
                            }, f);
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
            const f = a.GetEncodedGeometryType(r);
            if (f === i.TRIANGULAR_MESH) u = new i.Mesh, p = a.DecodeArrayToMesh(r, r.byteLength, u);
            else if (f === i.POINT_CLOUD) u = new i.PointCloud, p = a.DecodeArrayToPointCloud(r, r.byteLength, u);
            else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
            if (!p.ok() || u.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + p.error_msg());
            const _ = {
                index: null,
                attributes: []
            };
            for(const g in l){
                const T = self[h[g]];
                let v, w;
                if (c.useUniqueIDs) w = l[g], v = a.GetAttributeByUniqueId(u, w);
                else {
                    if (w = a.GetAttributeId(u, i[l[g]]), w === -1) continue;
                    v = a.GetAttribute(u, w);
                }
                const x = o(i, a, u, g, T, v);
                g === "color" && (x.vertexColorSpace = c.vertexColorSpace), _.attributes.push(x);
            }
            return f === i.TRIANGULAR_MESH && (_.index = s(i, a, u)), i.destroy(u), _;
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
        function o(i, a, r, c, l, h) {
            const u = h.num_components(), f = r.num_points() * u, _ = f * l.BYTES_PER_ELEMENT, g = n(i, l), T = i._malloc(_);
            a.GetAttributeDataArrayForAllPoints(r, h, g, _, T);
            const v = new l(i.HEAPF32.buffer, T, f).slice();
            return i._free(T), {
                name: c,
                array: v,
                itemSize: u
            };
        }
        function n(i, a) {
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
    class ws extends as {
        constructor(e){
            super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
                return new Fo(t);
            }), this.register(function(t) {
                return new Oo(t);
            }), this.register(function(t) {
                return new qo(t);
            }), this.register(function(t) {
                return new Xo(t);
            }), this.register(function(t) {
                return new Yo(t);
            }), this.register(function(t) {
                return new Go(t);
            }), this.register(function(t) {
                return new Wo(t);
            }), this.register(function(t) {
                return new jo(t);
            }), this.register(function(t) {
                return new Uo(t);
            }), this.register(function(t) {
                return new Io(t);
            }), this.register(function(t) {
                return new Ho(t);
            }), this.register(function(t) {
                return new No(t);
            }), this.register(function(t) {
                return new Ko(t);
            }), this.register(function(t) {
                return new Vo(t);
            }), this.register(function(t) {
                return new ko(t);
            }), this.register(function(t) {
                return new $o(t);
            }), this.register(function(t) {
                return new Zo(t);
            });
        }
        load(e, t, s, o) {
            const n = this;
            let i;
            if (this.resourcePath !== "") i = this.resourcePath;
            else if (this.path !== "") {
                const c = Ce.extractUrlBase(e);
                i = Ce.resolveURL(c, this.path);
            } else i = Ce.extractUrlBase(e);
            this.manager.itemStart(e);
            const a = function(c) {
                o ? o(c) : console.error(c), n.manager.itemError(e), n.manager.itemEnd(e);
            }, r = new He(this.manager);
            r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, function(c) {
                try {
                    n.parse(c, i, function(l) {
                        t(l), n.manager.itemEnd(e);
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
        parse(e, t, s, o) {
            let n;
            const i = {}, a = {}, r = new TextDecoder;
            if (typeof e == "string") n = JSON.parse(e);
            else if (e instanceof ArrayBuffer) if (r.decode(new Uint8Array(e, 0, 4)) === xs) {
                try {
                    i[L.KHR_BINARY_GLTF] = new Qo(e);
                } catch (h) {
                    o && o(h);
                    return;
                }
                n = JSON.parse(i[L.KHR_BINARY_GLTF].content);
            } else n = JSON.parse(r.decode(e));
            else n = e;
            if (n.asset === void 0 || n.asset.version[0] < 2) {
                o && o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                return;
            }
            const c = new un(n, {
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
            if (n.extensionsUsed) for(let l = 0; l < n.extensionsUsed.length; ++l){
                const h = n.extensionsUsed[l], u = n.extensionsRequired || [];
                switch(h){
                    case L.KHR_MATERIALS_UNLIT:
                        i[h] = new Bo;
                        break;
                    case L.KHR_DRACO_MESH_COMPRESSION:
                        i[h] = new Jo(n, this.dracoLoader);
                        break;
                    case L.KHR_TEXTURE_TRANSFORM:
                        i[h] = new en;
                        break;
                    case L.KHR_MESH_QUANTIZATION:
                        i[h] = new tn;
                        break;
                    default:
                        u.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
                }
            }
            c.setExtensions(i), c.setPlugins(a), c.parse(s, o);
        }
        parseAsync(e, t) {
            const s = this;
            return new Promise(function(o, n) {
                s.parse(e, t, o, n);
            });
        }
    }
    function zo() {
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
    const L = {
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
    class ko {
        constructor(e){
            this.parser = e, this.name = L.KHR_LIGHTS_PUNCTUAL, this.cache = {
                refs: {},
                uses: {}
            };
        }
        _markDefs() {
            const e = this.parser, t = this.parser.json.nodes || [];
            for(let s = 0, o = t.length; s < o; s++){
                const n = t[s];
                n.extensions && n.extensions[this.name] && n.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, n.extensions[this.name].light);
            }
        }
        _loadLight(e) {
            const t = this.parser, s = "light:" + e;
            let o = t.cache.get(s);
            if (o) return o;
            const n = t.json, r = ((n.extensions && n.extensions[this.name] || {}).lights || [])[e];
            let c;
            const l = new N(16777215);
            r.color !== void 0 && l.setRGB(r.color[0], r.color[1], r.color[2], J);
            const h = r.range !== void 0 ? r.range : 0;
            switch(r.type){
                case "directional":
                    c = new Ss(l), c.target.position.set(0, 0, -1), c.add(c.target);
                    break;
                case "point":
                    c = new Rs(l), c.distance = h;
                    break;
                case "spot":
                    c = new cs(l), c.distance = h, r.spot = r.spot || {}, r.spot.innerConeAngle = r.spot.innerConeAngle !== void 0 ? r.spot.innerConeAngle : 0, r.spot.outerConeAngle = r.spot.outerConeAngle !== void 0 ? r.spot.outerConeAngle : Math.PI / 4, c.angle = r.spot.outerConeAngle, c.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
                    break;
                default:
                    throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type);
            }
            return c.position.set(0, 0, 0), ne(c, r), r.intensity !== void 0 && (c.intensity = r.intensity), c.name = t.createUniqueName(r.name || "light_" + e), o = Promise.resolve(c), t.cache.add(s, o), o;
        }
        getDependency(e, t) {
            if (e === "light") return this._loadLight(t);
        }
        createNodeAttachment(e) {
            const t = this, s = this.parser, n = s.json.nodes[e], a = (n.extensions && n.extensions[this.name] || {}).light;
            return a === void 0 ? null : this._loadLight(a).then(function(r) {
                return s._getNodeRef(t.cache, a, r);
            });
        }
    }
    class Bo {
        constructor(){
            this.name = L.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
            return le;
        }
        extendParams(e, t, s) {
            const o = [];
            e.color = new N(1, 1, 1), e.opacity = 1;
            const n = t.pbrMetallicRoughness;
            if (n) {
                if (Array.isArray(n.baseColorFactor)) {
                    const i = n.baseColorFactor;
                    e.color.setRGB(i[0], i[1], i[2], J), e.opacity = i[3];
                }
                n.baseColorTexture !== void 0 && o.push(s.assignTexture(e, "map", n.baseColorTexture, he));
            }
            return Promise.all(o);
        }
    }
    class Io {
        constructor(e){
            this.parser = e, this.name = L.KHR_MATERIALS_EMISSIVE_STRENGTH;
        }
        extendMaterialParams(e, t) {
            const o = this.parser.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = o.extensions[this.name].emissiveStrength;
            return n !== void 0 && (t.emissiveIntensity = n), Promise.resolve();
        }
    }
    class Fo {
        constructor(e){
            this.parser = e, this.name = L.KHR_MATERIALS_CLEARCOAT;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : ee;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, o = s.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = [], i = o.extensions[this.name];
            if (i.clearcoatFactor !== void 0 && (t.clearcoat = i.clearcoatFactor), i.clearcoatTexture !== void 0 && n.push(s.assignTexture(t, "clearcoatMap", i.clearcoatTexture)), i.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = i.clearcoatRoughnessFactor), i.clearcoatRoughnessTexture !== void 0 && n.push(s.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), i.clearcoatNormalTexture !== void 0 && (n.push(s.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)), i.clearcoatNormalTexture.scale !== void 0)) {
                const a = i.clearcoatNormalTexture.scale;
                t.clearcoatNormalScale = new j(a, a);
            }
            return Promise.all(n);
        }
    }
    class Oo {
        constructor(e){
            this.parser = e, this.name = L.KHR_MATERIALS_DISPERSION;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : ee;
        }
        extendMaterialParams(e, t) {
            const o = this.parser.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = o.extensions[this.name];
            return t.dispersion = n.dispersion !== void 0 ? n.dispersion : 0, Promise.resolve();
        }
    }
    class No {
        constructor(e){
            this.parser = e, this.name = L.KHR_MATERIALS_IRIDESCENCE;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : ee;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, o = s.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = [], i = o.extensions[this.name];
            return i.iridescenceFactor !== void 0 && (t.iridescence = i.iridescenceFactor), i.iridescenceTexture !== void 0 && n.push(s.assignTexture(t, "iridescenceMap", i.iridescenceTexture)), i.iridescenceIor !== void 0 && (t.iridescenceIOR = i.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [
                100,
                400
            ]), i.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), i.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), i.iridescenceThicknessTexture !== void 0 && n.push(s.assignTexture(t, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(n);
        }
    }
    class Go {
        constructor(e){
            this.parser = e, this.name = L.KHR_MATERIALS_SHEEN;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : ee;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, o = s.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = [];
            t.sheenColor = new N(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
            const i = o.extensions[this.name];
            if (i.sheenColorFactor !== void 0) {
                const a = i.sheenColorFactor;
                t.sheenColor.setRGB(a[0], a[1], a[2], J);
            }
            return i.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = i.sheenRoughnessFactor), i.sheenColorTexture !== void 0 && n.push(s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, he)), i.sheenRoughnessTexture !== void 0 && n.push(s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(n);
        }
    }
    class Wo {
        constructor(e){
            this.parser = e, this.name = L.KHR_MATERIALS_TRANSMISSION;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : ee;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, o = s.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = [], i = o.extensions[this.name];
            return i.transmissionFactor !== void 0 && (t.transmission = i.transmissionFactor), i.transmissionTexture !== void 0 && n.push(s.assignTexture(t, "transmissionMap", i.transmissionTexture)), Promise.all(n);
        }
    }
    class jo {
        constructor(e){
            this.parser = e, this.name = L.KHR_MATERIALS_VOLUME;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : ee;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, o = s.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = [], i = o.extensions[this.name];
            t.thickness = i.thicknessFactor !== void 0 ? i.thicknessFactor : 0, i.thicknessTexture !== void 0 && n.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)), t.attenuationDistance = i.attenuationDistance || 1 / 0;
            const a = i.attenuationColor || [
                1,
                1,
                1
            ];
            return t.attenuationColor = new N().setRGB(a[0], a[1], a[2], J), Promise.all(n);
        }
    }
    class Uo {
        constructor(e){
            this.parser = e, this.name = L.KHR_MATERIALS_IOR;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : ee;
        }
        extendMaterialParams(e, t) {
            const o = this.parser.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = o.extensions[this.name];
            return t.ior = n.ior !== void 0 ? n.ior : 1.5, Promise.resolve();
        }
    }
    class Ho {
        constructor(e){
            this.parser = e, this.name = L.KHR_MATERIALS_SPECULAR;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : ee;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, o = s.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = [], i = o.extensions[this.name];
            t.specularIntensity = i.specularFactor !== void 0 ? i.specularFactor : 1, i.specularTexture !== void 0 && n.push(s.assignTexture(t, "specularIntensityMap", i.specularTexture));
            const a = i.specularColorFactor || [
                1,
                1,
                1
            ];
            return t.specularColor = new N().setRGB(a[0], a[1], a[2], J), i.specularColorTexture !== void 0 && n.push(s.assignTexture(t, "specularColorMap", i.specularColorTexture, he)), Promise.all(n);
        }
    }
    class Vo {
        constructor(e){
            this.parser = e, this.name = L.EXT_MATERIALS_BUMP;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : ee;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, o = s.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = [], i = o.extensions[this.name];
            return t.bumpScale = i.bumpFactor !== void 0 ? i.bumpFactor : 1, i.bumpTexture !== void 0 && n.push(s.assignTexture(t, "bumpMap", i.bumpTexture)), Promise.all(n);
        }
    }
    class Ko {
        constructor(e){
            this.parser = e, this.name = L.KHR_MATERIALS_ANISOTROPY;
        }
        getMaterialType(e) {
            const s = this.parser.json.materials[e];
            return !s.extensions || !s.extensions[this.name] ? null : ee;
        }
        extendMaterialParams(e, t) {
            const s = this.parser, o = s.json.materials[e];
            if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
            const n = [], i = o.extensions[this.name];
            return i.anisotropyStrength !== void 0 && (t.anisotropy = i.anisotropyStrength), i.anisotropyRotation !== void 0 && (t.anisotropyRotation = i.anisotropyRotation), i.anisotropyTexture !== void 0 && n.push(s.assignTexture(t, "anisotropyMap", i.anisotropyTexture)), Promise.all(n);
        }
    }
    class qo {
        constructor(e){
            this.parser = e, this.name = L.KHR_TEXTURE_BASISU;
        }
        loadTexture(e) {
            const t = this.parser, s = t.json, o = s.textures[e];
            if (!o.extensions || !o.extensions[this.name]) return null;
            const n = o.extensions[this.name], i = t.options.ktx2Loader;
            if (!i) {
                if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
                return null;
            }
            return t.loadTextureImage(e, n.source, i);
        }
    }
    class Xo {
        constructor(e){
            this.parser = e, this.name = L.EXT_TEXTURE_WEBP, this.isSupported = null;
        }
        loadTexture(e) {
            const t = this.name, s = this.parser, o = s.json, n = o.textures[e];
            if (!n.extensions || !n.extensions[t]) return null;
            const i = n.extensions[t], a = o.images[i.source];
            let r = s.textureLoader;
            if (a.uri) {
                const c = s.options.manager.getHandler(a.uri);
                c !== null && (r = c);
            }
            return this.detectSupport().then(function(c) {
                if (c) return s.loadTextureImage(e, i.source, r);
                if (o.extensionsRequired && o.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
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
    class Yo {
        constructor(e){
            this.parser = e, this.name = L.EXT_TEXTURE_AVIF, this.isSupported = null;
        }
        loadTexture(e) {
            const t = this.name, s = this.parser, o = s.json, n = o.textures[e];
            if (!n.extensions || !n.extensions[t]) return null;
            const i = n.extensions[t], a = o.images[i.source];
            let r = s.textureLoader;
            if (a.uri) {
                const c = s.options.manager.getHandler(a.uri);
                c !== null && (r = c);
            }
            return this.detectSupport().then(function(c) {
                if (c) return s.loadTextureImage(e, i.source, r);
                if (o.extensionsRequired && o.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
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
    class $o {
        constructor(e){
            this.name = L.EXT_MESHOPT_COMPRESSION, this.parser = e;
        }
        loadBufferView(e) {
            const t = this.parser.json, s = t.bufferViews[e];
            if (s.extensions && s.extensions[this.name]) {
                const o = s.extensions[this.name], n = this.parser.getDependency("buffer", o.buffer), i = this.parser.options.meshoptDecoder;
                if (!i || !i.supported) {
                    if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                    return null;
                }
                return n.then(function(a) {
                    const r = o.byteOffset || 0, c = o.byteLength || 0, l = o.count, h = o.byteStride, u = new Uint8Array(a, r, c);
                    return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(l, h, u, o.mode, o.filter).then(function(p) {
                        return p.buffer;
                    }) : i.ready.then(function() {
                        const p = new ArrayBuffer(l * h);
                        return i.decodeGltfBuffer(new Uint8Array(p), l, h, u, o.mode, o.filter), p;
                    });
                });
            } else return null;
        }
    }
    class Zo {
        constructor(e){
            this.name = L.EXT_MESH_GPU_INSTANCING, this.parser = e;
        }
        createNodeMesh(e) {
            const t = this.parser.json, s = t.nodes[e];
            if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0) return null;
            const o = t.meshes[s.mesh];
            for (const c of o.primitives)if (c.mode !== Z.TRIANGLES && c.mode !== Z.TRIANGLE_STRIP && c.mode !== Z.TRIANGLE_FAN && c.mode !== void 0) return null;
            const i = s.extensions[this.name].attributes, a = [], r = {};
            for(const c in i)a.push(this.parser.getDependency("accessor", i[c]).then((l)=>(r[c] = l, r[c])));
            return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c)=>{
                const l = c.pop(), h = l.isGroup ? l.children : [
                    l
                ], u = c[0].count, p = [];
                for (const f of h){
                    const _ = new K, g = new m, T = new F, v = new m(1, 1, 1), w = new bt(f.geometry, f.material, u);
                    for(let x = 0; x < u; x++)r.TRANSLATION && g.fromBufferAttribute(r.TRANSLATION, x), r.ROTATION && T.fromBufferAttribute(r.ROTATION, x), r.SCALE && v.fromBufferAttribute(r.SCALE, x), w.setMatrixAt(x, _.compose(g, T, v));
                    for(const x in r)if (x === "_COLOR_0") {
                        const b = r[x];
                        w.instanceColor = new Es(b.array, b.itemSize, b.normalized);
                    } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && f.geometry.setAttribute(x, r[x]);
                    ie.prototype.copy.call(w, f), this.parser.assignFinalMaterial(w), p.push(w);
                }
                return l.isGroup ? (l.clear(), l.add(...p), l) : p[0];
            }));
        }
    }
    const xs = "glTF", De = 12, Ft = {
        JSON: 1313821514,
        BIN: 5130562
    };
    class Qo {
        constructor(e){
            this.name = L.KHR_BINARY_GLTF, this.content = null, this.body = null;
            const t = new DataView(e, 0, De), s = new TextDecoder;
            if (this.header = {
                magic: s.decode(new Uint8Array(e.slice(0, 4))),
                version: t.getUint32(4, !0),
                length: t.getUint32(8, !0)
            }, this.header.magic !== xs) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
            if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
            const o = this.header.length - De, n = new DataView(e, De);
            let i = 0;
            for(; i < o;){
                const a = n.getUint32(i, !0);
                i += 4;
                const r = n.getUint32(i, !0);
                if (i += 4, r === Ft.JSON) {
                    const c = new Uint8Array(e, De + i, a);
                    this.content = s.decode(c);
                } else if (r === Ft.BIN) {
                    const c = De + i;
                    this.body = e.slice(c, c + a);
                }
                i += a;
            }
            if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
        }
    }
    class Jo {
        constructor(e, t){
            if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
            this.name = L.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
        }
        decodePrimitive(e, t) {
            const s = this.json, o = this.dracoLoader, n = e.extensions[this.name].bufferView, i = e.extensions[this.name].attributes, a = {}, r = {}, c = {};
            for(const l in i){
                const h = ut[l] || l.toLowerCase();
                a[h] = i[l];
            }
            for(const l in e.attributes){
                const h = ut[l] || l.toLowerCase();
                if (i[l] !== void 0) {
                    const u = s.accessors[e.attributes[l]], p = Re[u.componentType];
                    c[h] = p.name, r[h] = u.normalized === !0;
                }
            }
            return t.getDependency("bufferView", n).then(function(l) {
                return new Promise(function(h, u) {
                    o.decodeDracoFile(l, function(p) {
                        for(const f in p.attributes){
                            const _ = p.attributes[f], g = r[f];
                            g !== void 0 && (_.normalized = g);
                        }
                        h(p);
                    }, a, c, J, u);
                });
            });
        }
    }
    class en {
        constructor(){
            this.name = L.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(e, t) {
            return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
        }
    }
    class tn {
        constructor(){
            this.name = L.KHR_MESH_QUANTIZATION;
        }
    }
    class _s extends Qs {
        constructor(e, t, s, o){
            super(e, t, s, o);
        }
        copySampleValue_(e) {
            const t = this.resultBuffer, s = this.sampleValues, o = this.valueSize, n = e * o * 3 + o;
            for(let i = 0; i !== o; i++)t[i] = s[n + i];
            return t;
        }
        interpolate_(e, t, s, o) {
            const n = this.resultBuffer, i = this.sampleValues, a = this.valueSize, r = a * 2, c = a * 3, l = o - t, h = (s - t) / l, u = h * h, p = u * h, f = e * c, _ = f - c, g = -2 * p + 3 * u, T = p - u, v = 1 - g, w = T - u + h;
            for(let x = 0; x !== a; x++){
                const b = i[_ + x + a], E = i[_ + x + r] * l, R = i[f + x + a], y = i[f + x] * l;
                n[x] = v * b + w * E + g * R + T * y;
            }
            return n;
        }
    }
    const sn = new F;
    class on extends _s {
        interpolate_(e, t, s, o) {
            const n = super.interpolate_(e, t, s, o);
            return sn.fromArray(n).normalize().toArray(n), n;
        }
    }
    const Z = {
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6
    }, Re = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    }, Ot = {
        9728: hs,
        9729: ge,
        9984: zs,
        9985: Cs,
        9986: Ls,
        9987: ls
    }, Nt = {
        33071: Bs,
        33648: ks,
        10497: ze
    }, Qe = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    }, ut = {
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
    }, re = {
        scale: "scale",
        translation: "position",
        rotation: "quaternion",
        weights: "morphTargetInfluences"
    }, nn = {
        CUBICSPLINE: void 0,
        LINEAR: ds,
        STEP: Ys
    }, Je = {
        OPAQUE: "OPAQUE",
        MASK: "MASK",
        BLEND: "BLEND"
    };
    function rn(d) {
        return d.DefaultMaterial === void 0 && (d.DefaultMaterial = new Ae({
            color: 16777215,
            emissive: 0,
            metalness: 1,
            roughness: 1,
            transparent: !1,
            depthTest: !0,
            side: Zs
        })), d.DefaultMaterial;
    }
    function ue(d, e, t) {
        for(const s in t.extensions)d[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
    }
    function ne(d, e) {
        e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(d.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
    }
    function an(d, e, t) {
        let s = !1, o = !1, n = !1;
        for(let c = 0, l = e.length; c < l; c++){
            const h = e[c];
            if (h.POSITION !== void 0 && (s = !0), h.NORMAL !== void 0 && (o = !0), h.COLOR_0 !== void 0 && (n = !0), s && o && n) break;
        }
        if (!s && !o && !n) return Promise.resolve(d);
        const i = [], a = [], r = [];
        for(let c = 0, l = e.length; c < l; c++){
            const h = e[c];
            if (s) {
                const u = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : d.attributes.position;
                i.push(u);
            }
            if (o) {
                const u = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : d.attributes.normal;
                a.push(u);
            }
            if (n) {
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
            return s && (d.morphAttributes.position = l), o && (d.morphAttributes.normal = h), n && (d.morphAttributes.color = u), d.morphTargetsRelative = !0, d;
        });
    }
    function cn(d, e) {
        if (d.updateMorphTargets(), e.weights !== void 0) for(let t = 0, s = e.weights.length; t < s; t++)d.morphTargetInfluences[t] = e.weights[t];
        if (e.extras && Array.isArray(e.extras.targetNames)) {
            const t = e.extras.targetNames;
            if (d.morphTargetInfluences.length === t.length) {
                d.morphTargetDictionary = {};
                for(let s = 0, o = t.length; s < o; s++)d.morphTargetDictionary[t[s]] = s;
            } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
        }
    }
    function ln(d) {
        let e;
        const t = d.extensions && d.extensions[L.KHR_DRACO_MESH_COMPRESSION];
        if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + et(t.attributes) : e = d.indices + ":" + et(d.attributes) + ":" + d.mode, d.targets !== void 0) for(let s = 0, o = d.targets.length; s < o; s++)e += ":" + et(d.targets[s]);
        return e;
    }
    function et(d) {
        let e = "";
        const t = Object.keys(d).sort();
        for(let s = 0, o = t.length; s < o; s++)e += t[s] + ":" + d[t[s]] + ";";
        return e;
    }
    function pt(d) {
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
    function hn(d) {
        return d.search(/\.jpe?g($|\?)/i) > 0 || d.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : d.search(/\.webp($|\?)/i) > 0 || d.search(/^data\:image\/webp/) === 0 ? "image/webp" : d.search(/\.ktx2($|\?)/i) > 0 || d.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
    }
    const dn = new K;
    class un {
        constructor(e = {}, t = {}){
            this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new zo, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
                refs: {},
                uses: {}
            }, this.cameraCache = {
                refs: {},
                uses: {}
            }, this.lightCache = {
                refs: {},
                uses: {}
            }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
            let s = !1, o = -1, n = !1, i = -1;
            if (typeof navigator < "u") {
                const a = navigator.userAgent;
                s = /^((?!chrome|android).)*safari/i.test(a) === !0;
                const r = a.match(/Version\/(\d+)/);
                o = s && r ? parseInt(r[1], 10) : -1, n = a.indexOf("Firefox") > -1, i = n ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
            }
            typeof createImageBitmap > "u" || s && o < 17 || n && i < 98 ? this.textureLoader = new Fe(this.options.manager) : this.textureLoader = new Ps(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new He(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(e) {
            this.extensions = e;
        }
        setPlugins(e) {
            this.plugins = e;
        }
        parse(e, t) {
            const s = this, o = this.json, n = this.extensions;
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
                    scene: i[0][o.scene || 0],
                    scenes: i[0],
                    animations: i[1],
                    cameras: i[2],
                    asset: o.asset,
                    parser: s,
                    userData: {}
                };
                return ue(n, a, o), ne(a, o), Promise.all(s._invokeAll(function(r) {
                    return r.afterRoot && r.afterRoot(a);
                })).then(function() {
                    for (const r of a.scenes)r.updateMatrixWorld();
                    e(a);
                });
            }).catch(t);
        }
        _markDefs() {
            const e = this.json.nodes || [], t = this.json.skins || [], s = this.json.meshes || [];
            for(let o = 0, n = t.length; o < n; o++){
                const i = t[o].joints;
                for(let a = 0, r = i.length; a < r; a++)e[i[a]].isBone = !0;
            }
            for(let o = 0, n = e.length; o < n; o++){
                const i = e[o];
                i.mesh !== void 0 && (this._addNodeRef(this.meshCache, i.mesh), i.skin !== void 0 && (s[i.mesh].isSkinnedMesh = !0)), i.camera !== void 0 && this._addNodeRef(this.cameraCache, i.camera);
            }
        }
        _addNodeRef(e, t) {
            t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
        }
        _getNodeRef(e, t, s) {
            if (e.refs[t] <= 1) return s;
            const o = s.clone(), n = (i, a)=>{
                const r = this.associations.get(i);
                r != null && this.associations.set(a, r);
                for (const [c, l] of i.children.entries())n(l, a.children[c]);
            };
            return n(s, o), o.name += "_instance_" + e.uses[t]++, o;
        }
        _invokeOne(e) {
            const t = Object.values(this.plugins);
            t.push(this);
            for(let s = 0; s < t.length; s++){
                const o = e(t[s]);
                if (o) return o;
            }
            return null;
        }
        _invokeAll(e) {
            const t = Object.values(this.plugins);
            t.unshift(this);
            const s = [];
            for(let o = 0; o < t.length; o++){
                const n = e(t[o]);
                n && s.push(n);
            }
            return s;
        }
        getDependency(e, t) {
            const s = e + ":" + t;
            let o = this.cache.get(s);
            if (!o) {
                switch(e){
                    case "scene":
                        o = this.loadScene(t);
                        break;
                    case "node":
                        o = this._invokeOne(function(n) {
                            return n.loadNode && n.loadNode(t);
                        });
                        break;
                    case "mesh":
                        o = this._invokeOne(function(n) {
                            return n.loadMesh && n.loadMesh(t);
                        });
                        break;
                    case "accessor":
                        o = this.loadAccessor(t);
                        break;
                    case "bufferView":
                        o = this._invokeOne(function(n) {
                            return n.loadBufferView && n.loadBufferView(t);
                        });
                        break;
                    case "buffer":
                        o = this.loadBuffer(t);
                        break;
                    case "material":
                        o = this._invokeOne(function(n) {
                            return n.loadMaterial && n.loadMaterial(t);
                        });
                        break;
                    case "texture":
                        o = this._invokeOne(function(n) {
                            return n.loadTexture && n.loadTexture(t);
                        });
                        break;
                    case "skin":
                        o = this.loadSkin(t);
                        break;
                    case "animation":
                        o = this._invokeOne(function(n) {
                            return n.loadAnimation && n.loadAnimation(t);
                        });
                        break;
                    case "camera":
                        o = this.loadCamera(t);
                        break;
                    default:
                        if (o = this._invokeOne(function(n) {
                            return n != this && n.getDependency && n.getDependency(e, t);
                        }), !o) throw new Error("Unknown type: " + e);
                        break;
                }
                this.cache.add(s, o);
            }
            return o;
        }
        getDependencies(e) {
            let t = this.cache.get(e);
            if (!t) {
                const s = this, o = this.json[e + (e === "mesh" ? "es" : "s")] || [];
                t = Promise.all(o.map(function(n, i) {
                    return s.getDependency(e, i);
                })), this.cache.add(e, t);
            }
            return t;
        }
        loadBuffer(e) {
            const t = this.json.buffers[e], s = this.fileLoader;
            if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
            if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[L.KHR_BINARY_GLTF].body);
            const o = this.options;
            return new Promise(function(n, i) {
                s.load(Ce.resolveURL(t.uri, o.path), n, void 0, function() {
                    i(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
                });
            });
        }
        loadBufferView(e) {
            const t = this.json.bufferViews[e];
            return this.getDependency("buffer", t.buffer).then(function(s) {
                const o = t.byteLength || 0, n = t.byteOffset || 0;
                return s.slice(n, n + o);
            });
        }
        loadAccessor(e) {
            const t = this, s = this.json, o = this.json.accessors[e];
            if (o.bufferView === void 0 && o.sparse === void 0) {
                const i = Qe[o.type], a = Re[o.componentType], r = o.normalized === !0, c = new a(o.count * i);
                return Promise.resolve(new ye(c, i, r));
            }
            const n = [];
            return o.bufferView !== void 0 ? n.push(this.getDependency("bufferView", o.bufferView)) : n.push(null), o.sparse !== void 0 && (n.push(this.getDependency("bufferView", o.sparse.indices.bufferView)), n.push(this.getDependency("bufferView", o.sparse.values.bufferView))), Promise.all(n).then(function(i) {
                const a = i[0], r = Qe[o.type], c = Re[o.componentType], l = c.BYTES_PER_ELEMENT, h = l * r, u = o.byteOffset || 0, p = o.bufferView !== void 0 ? s.bufferViews[o.bufferView].byteStride : void 0, f = o.normalized === !0;
                let _, g;
                if (p && p !== h) {
                    const T = Math.floor(u / p), v = "InterleavedBuffer:" + o.bufferView + ":" + o.componentType + ":" + T + ":" + o.count;
                    let w = t.cache.get(v);
                    w || (_ = new c(a, T * p, o.count * p / l), w = new Ds(_, p / l), t.cache.add(v, w)), g = new $s(w, r, u % p / l, f);
                } else a === null ? _ = new c(o.count * r) : _ = new c(a, u, o.count * r), g = new ye(_, r, f);
                if (o.sparse !== void 0) {
                    const T = Qe.SCALAR, v = Re[o.sparse.indices.componentType], w = o.sparse.indices.byteOffset || 0, x = o.sparse.values.byteOffset || 0, b = new v(i[1], w, o.sparse.count * T), E = new c(i[2], x, o.sparse.count * r);
                    a !== null && (g = new ye(g.array.slice(), g.itemSize, g.normalized)), g.normalized = !1;
                    for(let R = 0, y = b.length; R < y; R++){
                        const M = b[R];
                        if (g.setX(M, E[R * r]), r >= 2 && g.setY(M, E[R * r + 1]), r >= 3 && g.setZ(M, E[R * r + 2]), r >= 4 && g.setW(M, E[R * r + 3]), r >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                    }
                    g.normalized = f;
                }
                return g;
            });
        }
        loadTexture(e) {
            const t = this.json, s = this.options, n = t.textures[e].source, i = t.images[n];
            let a = this.textureLoader;
            if (i.uri) {
                const r = s.manager.getHandler(i.uri);
                r !== null && (a = r);
            }
            return this.loadTextureImage(e, n, a);
        }
        loadTextureImage(e, t, s) {
            const o = this, n = this.json, i = n.textures[e], a = n.images[t], r = (a.uri || a.bufferView) + ":" + i.sampler;
            if (this.textureCache[r]) return this.textureCache[r];
            const c = this.loadImageSource(t, s).then(function(l) {
                l.flipY = !1, l.name = i.name || a.name || "", l.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (l.name = a.uri);
                const u = (n.samplers || {})[i.sampler] || {};
                return l.magFilter = Ot[u.magFilter] || ge, l.minFilter = Ot[u.minFilter] || ls, l.wrapS = Nt[u.wrapS] || ze, l.wrapT = Nt[u.wrapT] || ze, l.generateMipmaps = !l.isCompressedTexture && l.minFilter !== hs && l.minFilter !== ge, o.associations.set(l, {
                    textures: e
                }), l;
            }).catch(function() {
                return null;
            });
            return this.textureCache[r] = c, c;
        }
        loadImageSource(e, t) {
            const s = this, o = this.json, n = this.options;
            if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((h)=>h.clone());
            const i = o.images[e], a = self.URL || self.webkitURL;
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
                    let f = u;
                    t.isImageBitmapLoader === !0 && (f = function(_) {
                        const g = new Pt(_);
                        g.needsUpdate = !0, u(g);
                    }), t.load(Ce.resolveURL(h, n.path), f, void 0, p);
                });
            }).then(function(h) {
                return c === !0 && a.revokeObjectURL(r), ne(h, i), h.userData.mimeType = i.mimeType || hn(i.uri), h;
            }).catch(function(h) {
                throw console.error("THREE.GLTFLoader: Couldn't load texture", r), h;
            });
            return this.sourceCache[e] = l, l;
        }
        assignTexture(e, t, s, o) {
            const n = this;
            return this.getDependency("texture", s.index).then(function(i) {
                if (!i) return null;
                if (s.texCoord !== void 0 && s.texCoord > 0 && (i = i.clone(), i.channel = s.texCoord), n.extensions[L.KHR_TEXTURE_TRANSFORM]) {
                    const a = s.extensions !== void 0 ? s.extensions[L.KHR_TEXTURE_TRANSFORM] : void 0;
                    if (a) {
                        const r = n.associations.get(i);
                        i = n.extensions[L.KHR_TEXTURE_TRANSFORM].extendTexture(i, a), n.associations.set(i, r);
                    }
                }
                return o !== void 0 && (i.colorSpace = o), e[t] = i, i;
            });
        }
        assignFinalMaterial(e) {
            const t = e.geometry;
            let s = e.material;
            const o = t.attributes.tangent === void 0, n = t.attributes.color !== void 0, i = t.attributes.normal === void 0;
            if (e.isPoints) {
                const a = "PointsMaterial:" + s.uuid;
                let r = this.cache.get(a);
                r || (r = new Is, Ye.prototype.copy.call(r, s), r.color.copy(s.color), r.map = s.map, r.sizeAttenuation = !1, this.cache.add(a, r)), s = r;
            } else if (e.isLine) {
                const a = "LineBasicMaterial:" + s.uuid;
                let r = this.cache.get(a);
                r || (r = new Fs, Ye.prototype.copy.call(r, s), r.color.copy(s.color), r.map = s.map, this.cache.add(a, r)), s = r;
            }
            if (o || n || i) {
                let a = "ClonedMaterial:" + s.uuid + ":";
                o && (a += "derivative-tangents:"), n && (a += "vertex-colors:"), i && (a += "flat-shading:");
                let r = this.cache.get(a);
                r || (r = s.clone(), n && (r.vertexColors = !0), i && (r.flatShading = !0), o && (r.normalScale && (r.normalScale.y *= -1), r.clearcoatNormalScale && (r.clearcoatNormalScale.y *= -1)), this.cache.add(a, r), this.associations.set(r, this.associations.get(s))), s = r;
            }
            e.material = s;
        }
        getMaterialType() {
            return Ae;
        }
        loadMaterial(e) {
            const t = this, s = this.json, o = this.extensions, n = s.materials[e];
            let i;
            const a = {}, r = n.extensions || {}, c = [];
            if (r[L.KHR_MATERIALS_UNLIT]) {
                const h = o[L.KHR_MATERIALS_UNLIT];
                i = h.getMaterialType(), c.push(h.extendParams(a, n, t));
            } else {
                const h = n.pbrMetallicRoughness || {};
                if (a.color = new N(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
                    const u = h.baseColorFactor;
                    a.color.setRGB(u[0], u[1], u[2], J), a.opacity = u[3];
                }
                h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, he)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), i = this._invokeOne(function(u) {
                    return u.getMaterialType && u.getMaterialType(e);
                }), c.push(Promise.all(this._invokeAll(function(u) {
                    return u.extendMaterialParams && u.extendMaterialParams(e, a);
                })));
            }
            n.doubleSided === !0 && (a.side = Os);
            const l = n.alphaMode || Je.OPAQUE;
            if (l === Je.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, l === Je.MASK && (a.alphaTest = n.alphaCutoff !== void 0 ? n.alphaCutoff : .5)), n.normalTexture !== void 0 && i !== le && (c.push(t.assignTexture(a, "normalMap", n.normalTexture)), a.normalScale = new j(1, 1), n.normalTexture.scale !== void 0)) {
                const h = n.normalTexture.scale;
                a.normalScale.set(h, h);
            }
            if (n.occlusionTexture !== void 0 && i !== le && (c.push(t.assignTexture(a, "aoMap", n.occlusionTexture)), n.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = n.occlusionTexture.strength)), n.emissiveFactor !== void 0 && i !== le) {
                const h = n.emissiveFactor;
                a.emissive = new N().setRGB(h[0], h[1], h[2], J);
            }
            return n.emissiveTexture !== void 0 && i !== le && c.push(t.assignTexture(a, "emissiveMap", n.emissiveTexture, he)), Promise.all(c).then(function() {
                const h = new i(a);
                return n.name && (h.name = n.name), ne(h, n), t.associations.set(h, {
                    materials: e
                }), n.extensions && ue(o, h, n), h;
            });
        }
        createUniqueName(e) {
            const t = Ns.sanitizeNodeName(e || "");
            return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
        }
        loadGeometries(e) {
            const t = this, s = this.extensions, o = this.primitiveCache;
            function n(a) {
                return s[L.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(r) {
                    return Gt(r, a, t);
                });
            }
            const i = [];
            for(let a = 0, r = e.length; a < r; a++){
                const c = e[a], l = ln(c), h = o[l];
                if (h) i.push(h.promise);
                else {
                    let u;
                    c.extensions && c.extensions[L.KHR_DRACO_MESH_COMPRESSION] ? u = n(c) : u = Gt(new _t, c, t), o[l] = {
                        primitive: c,
                        promise: u
                    }, i.push(u);
                }
            }
            return Promise.all(i);
        }
        loadMesh(e) {
            const t = this, s = this.json, o = this.extensions, n = s.meshes[e], i = n.primitives, a = [];
            for(let r = 0, c = i.length; r < c; r++){
                const l = i[r].material === void 0 ? rn(this.cache) : this.getDependency("material", i[r].material);
                a.push(l);
            }
            return a.push(t.loadGeometries(i)), Promise.all(a).then(function(r) {
                const c = r.slice(0, r.length - 1), l = r[r.length - 1], h = [];
                for(let p = 0, f = l.length; p < f; p++){
                    const _ = l[p], g = i[p];
                    let T;
                    const v = c[p];
                    if (g.mode === Z.TRIANGLES || g.mode === Z.TRIANGLE_STRIP || g.mode === Z.TRIANGLE_FAN || g.mode === void 0) T = n.isSkinnedMesh === !0 ? new Gs(_, v) : new k(_, v), T.isSkinnedMesh === !0 && T.normalizeSkinWeights(), g.mode === Z.TRIANGLE_STRIP ? T.geometry = It(T.geometry, rs) : g.mode === Z.TRIANGLE_FAN && (T.geometry = It(T.geometry, ht));
                    else if (g.mode === Z.LINES) T = new Ws(_, v);
                    else if (g.mode === Z.LINE_STRIP) T = new js(_, v);
                    else if (g.mode === Z.LINE_LOOP) T = new Us(_, v);
                    else if (g.mode === Z.POINTS) T = new Hs(_, v);
                    else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
                    Object.keys(T.geometry.morphAttributes).length > 0 && cn(T, n), T.name = t.createUniqueName(n.name || "mesh_" + e), ne(T, n), g.extensions && ue(o, T, g), t.assignFinalMaterial(T), h.push(T);
                }
                for(let p = 0, f = h.length; p < f; p++)t.associations.set(h[p], {
                    meshes: e,
                    primitives: p
                });
                if (h.length === 1) return n.extensions && ue(o, h[0], n), h[0];
                const u = new Q;
                n.extensions && ue(o, u, n), t.associations.set(u, {
                    meshes: e
                });
                for(let p = 0, f = h.length; p < f; p++)u.add(h[p]);
                return u;
            });
        }
        loadCamera(e) {
            let t;
            const s = this.json.cameras[e], o = s[s.type];
            if (!o) {
                console.warn("THREE.GLTFLoader: Missing camera parameters.");
                return;
            }
            return s.type === "perspective" ? t = new Ke(G.radToDeg(o.yfov), o.aspectRatio || 1, o.znear || 1, o.zfar || 2e6) : s.type === "orthographic" && (t = new Vs(-o.xmag, o.xmag, o.ymag, -o.ymag, o.znear, o.zfar)), s.name && (t.name = this.createUniqueName(s.name)), ne(t, s), Promise.resolve(t);
        }
        loadSkin(e) {
            const t = this.json.skins[e], s = [];
            for(let o = 0, n = t.joints.length; o < n; o++)s.push(this._loadNodeShallow(t.joints[o]));
            return t.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(o) {
                const n = o.pop(), i = o, a = [], r = [];
                for(let c = 0, l = i.length; c < l; c++){
                    const h = i[c];
                    if (h) {
                        a.push(h);
                        const u = new K;
                        n !== null && u.fromArray(n.array, c * 16), r.push(u);
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
                }
                return new Ks(a, r);
            });
        }
        loadAnimation(e) {
            const t = this.json, s = this, o = t.animations[e], n = o.name ? o.name : "animation_" + e, i = [], a = [], r = [], c = [], l = [];
            for(let h = 0, u = o.channels.length; h < u; h++){
                const p = o.channels[h], f = o.samplers[p.sampler], _ = p.target, g = _.node, T = o.parameters !== void 0 ? o.parameters[f.input] : f.input, v = o.parameters !== void 0 ? o.parameters[f.output] : f.output;
                _.node !== void 0 && (i.push(this.getDependency("node", g)), a.push(this.getDependency("accessor", T)), r.push(this.getDependency("accessor", v)), c.push(f), l.push(_));
            }
            return Promise.all([
                Promise.all(i),
                Promise.all(a),
                Promise.all(r),
                Promise.all(c),
                Promise.all(l)
            ]).then(function(h) {
                const u = h[0], p = h[1], f = h[2], _ = h[3], g = h[4], T = [];
                for(let v = 0, w = u.length; v < w; v++){
                    const x = u[v], b = p[v], E = f[v], R = _[v], y = g[v];
                    if (x === void 0) continue;
                    x.updateMatrix && x.updateMatrix();
                    const M = s._createAnimationTracks(x, b, E, R, y);
                    if (M) for(let A = 0; A < M.length; A++)T.push(M[A]);
                }
                return new qs(n, void 0, T);
            });
        }
        createNodeMesh(e) {
            const t = this.json, s = this, o = t.nodes[e];
            return o.mesh === void 0 ? null : s.getDependency("mesh", o.mesh).then(function(n) {
                const i = s._getNodeRef(s.meshCache, o.mesh, n);
                return o.weights !== void 0 && i.traverse(function(a) {
                    if (a.isMesh) for(let r = 0, c = o.weights.length; r < c; r++)a.morphTargetInfluences[r] = o.weights[r];
                }), i;
            });
        }
        loadNode(e) {
            const t = this.json, s = this, o = t.nodes[e], n = s._loadNodeShallow(e), i = [], a = o.children || [];
            for(let c = 0, l = a.length; c < l; c++)i.push(s.getDependency("node", a[c]));
            const r = o.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", o.skin);
            return Promise.all([
                n,
                Promise.all(i),
                r
            ]).then(function(c) {
                const l = c[0], h = c[1], u = c[2];
                u !== null && l.traverse(function(p) {
                    p.isSkinnedMesh && p.bind(u, dn);
                });
                for(let p = 0, f = h.length; p < f; p++)l.add(h[p]);
                return l;
            });
        }
        _loadNodeShallow(e) {
            const t = this.json, s = this.extensions, o = this;
            if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
            const n = t.nodes[e], i = n.name ? o.createUniqueName(n.name) : "", a = [], r = o._invokeOne(function(c) {
                return c.createNodeMesh && c.createNodeMesh(e);
            });
            return r && a.push(r), n.camera !== void 0 && a.push(o.getDependency("camera", n.camera).then(function(c) {
                return o._getNodeRef(o.cameraCache, n.camera, c);
            })), o._invokeAll(function(c) {
                return c.createNodeAttachment && c.createNodeAttachment(e);
            }).forEach(function(c) {
                a.push(c);
            }), this.nodeCache[e] = Promise.all(a).then(function(c) {
                let l;
                if (n.isBone === !0 ? l = new Xs : c.length > 1 ? l = new Q : c.length === 1 ? l = c[0] : l = new ie, l !== c[0]) for(let h = 0, u = c.length; h < u; h++)l.add(c[h]);
                if (n.name && (l.userData.name = n.name, l.name = i), ne(l, n), n.extensions && ue(s, l, n), n.matrix !== void 0) {
                    const h = new K;
                    h.fromArray(n.matrix), l.applyMatrix4(h);
                } else n.translation !== void 0 && l.position.fromArray(n.translation), n.rotation !== void 0 && l.quaternion.fromArray(n.rotation), n.scale !== void 0 && l.scale.fromArray(n.scale);
                return o.associations.has(l) || o.associations.set(l, {}), o.associations.get(l).nodes = e, l;
            }), this.nodeCache[e];
        }
        loadScene(e) {
            const t = this.extensions, s = this.json.scenes[e], o = this, n = new Q;
            s.name && (n.name = o.createUniqueName(s.name)), ne(n, s), s.extensions && ue(t, n, s);
            const i = s.nodes || [], a = [];
            for(let r = 0, c = i.length; r < c; r++)a.push(o.getDependency("node", i[r]));
            return Promise.all(a).then(function(r) {
                for(let l = 0, h = r.length; l < h; l++)n.add(r[l]);
                const c = (l)=>{
                    const h = new Map;
                    for (const [u, p] of o.associations)(u instanceof Ye || u instanceof Pt) && h.set(u, p);
                    return l.traverse((u)=>{
                        const p = o.associations.get(u);
                        p != null && h.set(u, p);
                    }), h;
                };
                return o.associations = c(n), n;
            });
        }
        _createAnimationTracks(e, t, s, o, n) {
            const i = [], a = e.name ? e.name : e.uuid, r = [];
            re[n.path] === re.weights ? e.traverse(function(u) {
                u.morphTargetInfluences && r.push(u.name ? u.name : u.uuid);
            }) : r.push(a);
            let c;
            switch(re[n.path]){
                case re.weights:
                    c = Lt;
                    break;
                case re.rotation:
                    c = Ct;
                    break;
                case re.position:
                case re.scale:
                    c = Dt;
                    break;
                default:
                    switch(s.itemSize){
                        case 1:
                            c = Lt;
                            break;
                        case 2:
                        case 3:
                        default:
                            c = Dt;
                            break;
                    }
                    break;
            }
            const l = o.interpolation !== void 0 ? nn[o.interpolation] : ds, h = this._getArrayFromAccessor(s);
            for(let u = 0, p = r.length; u < p; u++){
                const f = new c(r[u] + "." + re[n.path], t.array, h, l);
                o.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(f), i.push(f);
            }
            return i;
        }
        _getArrayFromAccessor(e) {
            let t = e.array;
            if (e.normalized) {
                const s = pt(t.constructor), o = new Float32Array(t.length);
                for(let n = 0, i = t.length; n < i; n++)o[n] = t[n] * s;
                t = o;
            }
            return t;
        }
        _createCubicSplineTrackInterpolant(e) {
            e.createInterpolant = function(s) {
                const o = this instanceof Ct ? on : _s;
                return new o(this.times, this.values, this.getValueSize() / 3, s);
            }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
        }
    }
    function pn(d, e, t) {
        const s = e.attributes, o = new Js;
        if (s.POSITION !== void 0) {
            const a = t.json.accessors[s.POSITION], r = a.min, c = a.max;
            if (r !== void 0 && c !== void 0) {
                if (o.set(new m(r[0], r[1], r[2]), new m(c[0], c[1], c[2])), a.normalized) {
                    const l = pt(Re[a.componentType]);
                    o.min.multiplyScalar(l), o.max.multiplyScalar(l);
                }
            } else {
                console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                return;
            }
        } else return;
        const n = e.targets;
        if (n !== void 0) {
            const a = new m, r = new m;
            for(let c = 0, l = n.length; c < l; c++){
                const h = n[c];
                if (h.POSITION !== void 0) {
                    const u = t.json.accessors[h.POSITION], p = u.min, f = u.max;
                    if (p !== void 0 && f !== void 0) {
                        if (r.setX(Math.max(Math.abs(p[0]), Math.abs(f[0]))), r.setY(Math.max(Math.abs(p[1]), Math.abs(f[1]))), r.setZ(Math.max(Math.abs(p[2]), Math.abs(f[2]))), u.normalized) {
                            const _ = pt(Re[u.componentType]);
                            r.multiplyScalar(_);
                        }
                        a.max(r);
                    } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                }
            }
            o.expandByVector(a);
        }
        d.boundingBox = o;
        const i = new eo;
        o.getCenter(i.center), i.radius = o.min.distanceTo(o.max) / 2, d.boundingSphere = i;
    }
    function Gt(d, e, t) {
        const s = e.attributes, o = [];
        function n(i, a) {
            return t.getDependency("accessor", i).then(function(r) {
                d.setAttribute(a, r);
            });
        }
        for(const i in s){
            const a = ut[i] || i.toLowerCase();
            a in d.attributes || o.push(n(s[i], a));
        }
        if (e.indices !== void 0 && !d.index) {
            const i = t.getDependency("accessor", e.indices).then(function(a) {
                d.setIndex(a);
            });
            o.push(i);
        }
        return dt.workingColorSpace !== J && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`), ne(d, e), pn(d, e, t), Promise.all(o).then(function() {
            return e.targets !== void 0 ? an(d, e.targets, t) : d;
        });
    }
    class Be extends k {
        constructor(e, t = {}){
            super(e), this.isReflector = !0, this.type = "Reflector", this.forceUpdate = !1, this.camera = new Ke;
            const s = this, o = t.color !== void 0 ? new N(t.color) : new N(8355711), n = t.textureWidth || 512, i = t.textureHeight || 512, a = t.clipBias || 0, r = t.shader || Be.ReflectorShader, c = t.multisample !== void 0 ? t.multisample : 4, l = new Ue, h = new m, u = new m, p = new m, f = new K, _ = new m(0, 0, -1), g = new ke, T = new m, v = new m, w = new ke, x = new K, b = this.camera, E = new us(n, i, {
                samples: c,
                type: Me
            }), R = new Tt({
                name: r.name !== void 0 ? r.name : "unspecified",
                uniforms: Mt.clone(r.uniforms),
                fragmentShader: r.fragmentShader,
                vertexShader: r.vertexShader
            });
            R.uniforms.tDiffuse.value = E.texture, R.uniforms.color.value = o, R.uniforms.textureMatrix.value = x, this.material = R, this.onBeforeRender = function(y, M, A) {
                if (u.setFromMatrixPosition(s.matrixWorld), p.setFromMatrixPosition(A.matrixWorld), f.extractRotation(s.matrixWorld), h.set(0, 0, 1), h.applyMatrix4(f), T.subVectors(u, p), T.dot(h) > 0 === !0 && this.forceUpdate === !1) return;
                T.reflect(h).negate(), T.add(u), f.extractRotation(A.matrixWorld), _.set(0, 0, -1), _.applyMatrix4(f), _.add(p), v.subVectors(u, _), v.reflect(h).negate(), v.add(u), b.position.copy(T), b.up.set(0, 1, 0), b.up.applyMatrix4(f), b.up.reflect(h), b.lookAt(v), b.far = A.far, b.updateMatrixWorld(), b.projectionMatrix.copy(A.projectionMatrix), x.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), x.multiply(b.projectionMatrix), x.multiply(b.matrixWorldInverse), x.multiply(s.matrixWorld), l.setFromNormalAndCoplanarPoint(h, u), l.applyMatrix4(b.matrixWorldInverse), g.set(l.normal.x, l.normal.y, l.normal.z, l.constant);
                const C = b.projectionMatrix;
                w.x = (Math.sign(g.x) + C.elements[8]) / C.elements[0], w.y = (Math.sign(g.y) + C.elements[9]) / C.elements[5], w.z = -1, w.w = (1 + C.elements[10]) / C.elements[14], g.multiplyScalar(2 / g.dot(w)), C.elements[2] = g.x, C.elements[6] = g.y, C.elements[10] = g.z + 1 - a, C.elements[14] = g.w, s.visible = !1;
                const z = y.getRenderTarget(), S = y.xr.enabled, I = y.shadowMap.autoUpdate;
                y.xr.enabled = !1, y.shadowMap.autoUpdate = !1, y.setRenderTarget(E), y.state.buffers.depth.setMask(!0), y.autoClear === !1 && y.clear(), y.render(M, b), y.xr.enabled = S, y.shadowMap.autoUpdate = I, y.setRenderTarget(z);
                const B = A.viewport;
                B !== void 0 && y.state.viewport(B), s.visible = !0, this.forceUpdate = !1;
            }, this.getRenderTarget = function() {
                return E;
            }, this.dispose = function() {
                E.dispose(), s.material.dispose();
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
    class Ie extends k {
        constructor(e, t = {}){
            super(e), this.isRefractor = !0, this.type = "Refractor", this.camera = new Ke;
            const s = this, o = t.color !== void 0 ? new N(t.color) : new N(8355711), n = t.textureWidth || 512, i = t.textureHeight || 512, a = t.clipBias || 0, r = t.shader || Ie.RefractorShader, c = t.multisample !== void 0 ? t.multisample : 4, l = this.camera;
            l.matrixAutoUpdate = !1, l.userData.refractor = !0;
            const h = new Ue, u = new K, p = new us(n, i, {
                samples: c,
                type: Me
            });
            this.material = new Tt({
                name: r.name !== void 0 ? r.name : "unspecified",
                uniforms: Mt.clone(r.uniforms),
                vertexShader: r.vertexShader,
                fragmentShader: r.fragmentShader,
                transparent: !0
            }), this.material.uniforms.color.value = o, this.material.uniforms.tDiffuse.value = p.texture, this.material.uniforms.textureMatrix.value = u;
            const f = function() {
                const w = new m, x = new m, b = new K, E = new m, R = new m;
                return function(M) {
                    return w.setFromMatrixPosition(s.matrixWorld), x.setFromMatrixPosition(M.matrixWorld), E.subVectors(w, x), b.extractRotation(s.matrixWorld), R.set(0, 0, 1), R.applyMatrix4(b), E.dot(R) < 0;
                };
            }(), _ = function() {
                const w = new m, x = new m, b = new F, E = new m;
                return function() {
                    s.matrixWorld.decompose(x, b, E), w.set(0, 0, 1).applyQuaternion(b).normalize(), w.negate(), h.setFromNormalAndCoplanarPoint(w, x);
                };
            }(), g = function() {
                const w = new Ue, x = new ke, b = new ke;
                return function(R) {
                    l.matrixWorld.copy(R.matrixWorld), l.matrixWorldInverse.copy(l.matrixWorld).invert(), l.projectionMatrix.copy(R.projectionMatrix), l.far = R.far, w.copy(h), w.applyMatrix4(l.matrixWorldInverse), x.set(w.normal.x, w.normal.y, w.normal.z, w.constant);
                    const y = l.projectionMatrix;
                    b.x = (Math.sign(x.x) + y.elements[8]) / y.elements[0], b.y = (Math.sign(x.y) + y.elements[9]) / y.elements[5], b.z = -1, b.w = (1 + y.elements[10]) / y.elements[14], x.multiplyScalar(2 / x.dot(b)), y.elements[2] = x.x, y.elements[6] = x.y, y.elements[10] = x.z + 1 - a, y.elements[14] = x.w;
                };
            }();
            function T(w) {
                u.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), u.multiply(w.projectionMatrix), u.multiply(w.matrixWorldInverse), u.multiply(s.matrixWorld);
            }
            function v(w, x, b) {
                s.visible = !1;
                const E = w.getRenderTarget(), R = w.xr.enabled, y = w.shadowMap.autoUpdate;
                w.xr.enabled = !1, w.shadowMap.autoUpdate = !1, w.setRenderTarget(p), w.autoClear === !1 && w.clear(), w.render(x, l), w.xr.enabled = R, w.shadowMap.autoUpdate = y, w.setRenderTarget(E);
                const M = b.viewport;
                M !== void 0 && w.state.viewport(M), s.visible = !0;
            }
            this.onBeforeRender = function(w, x, b) {
                b.userData.refractor !== !0 && f(b) && (_(), T(b), g(b), v(w, x, b));
            }, this.getRenderTarget = function() {
                return p;
            }, this.dispose = function() {
                p.dispose(), s.material.dispose();
            };
        }
    }
    Ie.RefractorShader = {
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
    class qe extends k {
        constructor(e, t = {}){
            super(e), this.isWater = !0, this.type = "Water";
            const s = this, o = t.color !== void 0 ? new N(t.color) : new N(16777215), n = t.textureWidth !== void 0 ? t.textureWidth : 512, i = t.textureHeight !== void 0 ? t.textureHeight : 512, a = t.clipBias !== void 0 ? t.clipBias : 0, r = t.flowDirection !== void 0 ? t.flowDirection : new j(1, 0), c = t.flowSpeed !== void 0 ? t.flowSpeed : .03, l = t.reflectivity !== void 0 ? t.reflectivity : .02, h = t.scale !== void 0 ? t.scale : 1, u = t.shader !== void 0 ? t.shader : qe.WaterShader, p = new Fe, f = t.flowMap || void 0, _ = t.normalMap0 || p.load("textures/water/Water_1_M_Normal.jpg"), g = t.normalMap1 || p.load("textures/water/Water_2_M_Normal.jpg"), T = .15, v = T * .5, w = new K, x = new ps;
            if (Be === void 0) {
                console.error("THREE.Water: Required component Reflector not found.");
                return;
            }
            if (Ie === void 0) {
                console.error("THREE.Water: Required component Refractor not found.");
                return;
            }
            const b = new Be(e, {
                textureWidth: n,
                textureHeight: i,
                clipBias: a
            }), E = new Ie(e, {
                textureWidth: n,
                textureHeight: i,
                clipBias: a
            });
            b.matrixAutoUpdate = !1, E.matrixAutoUpdate = !1, this.material = new Tt({
                name: u.name,
                uniforms: Mt.merge([
                    to.fog,
                    u.uniforms
                ]),
                vertexShader: u.vertexShader,
                fragmentShader: u.fragmentShader,
                transparent: !0,
                fog: !0
            }), f !== void 0 ? (this.material.defines.USE_FLOWMAP = "", this.material.uniforms.tFlowMap = {
                type: "t",
                value: f
            }) : this.material.uniforms.flowDirection = {
                type: "v2",
                value: r
            }, _.wrapS = _.wrapT = ze, g.wrapS = g.wrapT = ze, this.material.uniforms.tReflectionMap.value = b.getRenderTarget().texture, this.material.uniforms.tRefractionMap.value = E.getRenderTarget().texture, this.material.uniforms.tNormalMap0.value = _, this.material.uniforms.tNormalMap1.value = g, this.material.uniforms.color.value = o, this.material.uniforms.reflectivity.value = l, this.material.uniforms.textureMatrix.value = w, this.material.uniforms.config.value.x = 0, this.material.uniforms.config.value.y = v, this.material.uniforms.config.value.z = v, this.material.uniforms.config.value.w = h;
            function R(M) {
                w.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), w.multiply(M.projectionMatrix), w.multiply(M.matrixWorldInverse), w.multiply(s.matrixWorld);
            }
            function y() {
                const M = x.getDelta(), A = s.material.uniforms.config;
                A.value.x += c * M, A.value.y = A.value.x + v, A.value.x >= T ? (A.value.x = 0, A.value.y = v) : A.value.y >= T && (A.value.y = A.value.y - T);
            }
            this.onBeforeRender = function(M, A, P) {
                R(P), y(), s.visible = !1, b.matrixWorld.copy(s.matrixWorld), E.matrixWorld.copy(s.matrixWorld), b.onBeforeRender(M, A, P), E.onBeforeRender(M, A, P), s.visible = !0;
            };
        }
    }
    qe.WaterShader = {
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
    const mn = "/Simulador-de-estacionamento/hdr";
    new Fe;
    const fn = new Po;
    new ws;
    class yn {
        constructor(){
            this.sceneGraph = new so, this.objects = [], this.camera = this.createCamera(), this.renderer = this.createRenderer(), this.initLights(), this.initScene(), this.controls = new yo(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .05, this._followEnabled = !0, this._followTarget = null, this._followOffset = new m(0, 7, 10), this._followLerp = .9, this.controls.addEventListener("start", ()=>{
                this._followEnabled = !1;
            });
        }
        createCamera() {
            const t = window.innerWidth / window.innerHeight, s = .1, o = 1e3, n = new Ke(70, t, s, o);
            return n.position.set(0, 10, 15), n.lookAt(0, 0, 0), n;
        }
        createRenderer() {
            const e = document.querySelector("canvas.webgl"), t = new oo({
                canvas: e,
                antialias: !0
            });
            return t.shadowMap.enabled = !0, t.shadowMap.type = no, t.toneMapping = io, t.outputEncoding = void 0, t.toneMappingExposure = .4, t.setPixelRatio(window.devicePixelRatio), t.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(t.domElement), t;
        }
        initScene() {
            console.log("Initializing scene...");
            const e = fn.load(`${mn}/kloppenheim_06_puresky_1k.hdr`);
            e.mapping = ro, new ao(this.renderer).compileEquirectangularShader(), e.minFilter = ge, e.magFilter = ge, e.generateMipmaps = !0, e.needsUpdate = !0, this.sceneGraph.background = e, this.sceneGraph.environment = e;
        }
        initLights() {
            const e = new co(16777215, .8);
            this.sceneGraph.add(e);
            const t = new m(1500, 200, 1200), s = new m(0, 0, 0), o = t.distanceTo(s) * 2, n = new cs(16777120, 40.5, o, Math.PI / 6, .1, 0);
            n.position.copy(t), n.rotation.set(0, 1, 0), n.castShadow = !0, n.shadow.mapSize.width = 4096, n.shadow.mapSize.height = 4096, n.shadow.camera.near = 500, n.shadow.camera.far = 4e3, n.shadow.camera.fov = 30, n.target.position.copy(s), this.sceneGraph.add(n), this.sceneGraph.fog = new lo(8900331, 0, 1e3);
        }
        addToScene(e) {
            e.isMesh && (e.castShadow = !0, e.receiveShadow = !0), e.traverse((t)=>{
                t.isMesh && (t.castShadow = !0, t.receiveShadow = !0);
            }), this.sceneGraph.add(e), e.updateMatrixWorld(), console.log("Object:", e);
        }
        addToGround(e) {
            e.isMesh && (e.castShadow = !0, e.receiveShadow = !0), e.traverse((t)=>{
                t.isMesh && (t.castShadow = !0, t.receiveShadow = !0);
            }), this.sceneGraph.add(e), e.updateMatrixWorld();
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
        updateLights() {}
        renderScene() {
            this.renderer.render(this.sceneGraph, this.camera);
        }
        onWindowResize() {
            const e = window.innerWidth, t = window.innerHeight;
            this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
        }
    }
    const gn = 60, wn = {
        x: 0,
        y: -9.81,
        z: 0
    };
    class xn {
        world;
        meshes;
        meshMap;
        movement;
        rapierDebugRender;
        constructor(){
            this.world = new ho(wn), this.meshes = [], this.meshMap = new WeakMap, this.instancedMeshes = [], this.instancedMeshMap = new WeakMap, this._vector = new m, this._quaternion = new F, this._matrix = new K, this._scale = new m(1, 1, 1), this.clock = new ps, this.eventQueue = new uo(!0);
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
        addInstancedMesh(e, t) {
            this.meshes.push(e), this.meshMap.set(e, t), e.userData || (e.userData = {}), e.userData.physics || (e.userData.physics = {
                bodies: t,
                collisions: new Set
            }), e.userData.physics.bodies = t, e.userData.name = e.name;
        }
        removeMesh(e) {
            const t = this.meshMap.get(e);
            if (t) {
                this.world.removeRigidBody(t), (t.colliderHandles ? t.colliderHandles() : []).forEach((n)=>this.world.removeCollider(n)), this.meshMap.delete(e);
                const o = this.meshes.indexOf(e);
                o !== -1 && this.meshes.splice(o, 1);
            } else console.warn("removeMesh: Body não encontrado para a mesh:", e);
        }
        addHeightfield(e, t, s, o, n) {
            const i = X.heightfield(t, s, o, n);
            console.log("SHAPE HEIGHTFIELD:", i);
            const a = U.fixed();
            a.setTranslation(e.position.x, e.position.y, e.position.z), a.setRotation(e.quaternion);
            const r = this.world.createRigidBody(a);
            return console.log("BODY HEIGHTFIELD:", r), this.world.createCollider(i, r), e.userData.physics || (e.userData.physics = {}), e.userData.physics.body = r, r;
        }
        getSimpleColliderDesc(e) {
            const t = e.geometry, s = t.parameters;
            if (t.type === "BoxGeometry") {
                console.log("getSimpleColliderDesc: BoxGeometry");
                const o = s.width !== void 0 ? s.width / 2 : .5, n = s.height !== void 0 ? s.height / 2 : .5, i = s.depth !== void 0 ? s.depth / 2 : .5;
                return X.cuboid(o, n, i);
            } else if (t.type === "SphereGeometry" || t.type === "IcosahedronGeometry") {
                console.log("getSimpleColliderDesc: SphereGeometry");
                const o = s.radius !== void 0 ? s.radius : 1;
                return X.ball(o);
            } else if (t.type === "CylinderGeometry") {
                console.log("getSimpleColliderDesc: CylinderGeometry");
                const o = s.radiusBottom !== void 0 ? s.radiusBottom : .5, n = s.height !== void 0 ? s.height : .5;
                return X.cylinder(n / 2, o);
            } else if (t.type === "CapsuleGeometry") {
                console.log("getSimpleColliderDesc: CapsuleGeometry");
                const o = s.radius !== void 0 ? s.radius : .5, n = s.height !== void 0 ? s.height : .5;
                return X.capsule(n / 2, o);
            } else return console.warn("getSimpleColliderDesc: geometry não é um tipo suportado."), null;
        }
        getTrimeshColliderDesc(e) {
            const t = e.geometry;
            if (!t.isBufferGeometry) return console.warn("getTrimeshColliderDesc: mesh não é um BufferGeometry válido."), null;
            const s = [], o = new Vector3, n = t.getAttribute("position");
            for(let r = 0; r < n.count; r++)o.fromBufferAttribute(n, r), s.push(o.x, o.y, o.z);
            const i = t.getIndex() === null ? Uint32Array.from(Array(parseInt(s.length / 3)).keys()) : t.getIndex().array;
            return X.trimesh(s, i);
        }
        getConvexMeshColliderDesc(e) {
            if (!e.isMesh) return console.warn("createConvexMeshColliderDesc: mesh não é um Mesh válido."), null;
            const t = new Float32Array(e.geometry.getAttribute("position").array);
            return X.convexMesh(t);
        }
        addRoadTiles(e) {}
        createJointData(e) {
            const { type: t, anchor1: s, anchor2: o, axis: n, frame1: i, frame2: a, limits: r, stiffness: c, damping: l, length: h, axesMask: u } = e;
            let p;
            switch(t){
                case "fixed":
                    return de.fixed(new D(...s), new we(...i), new D(...o), new we(...a));
                case "revolute":
                    return p = de.revolute(new D(...s), new D(...o), new D(...n)), p;
                case "prismatic":
                    return p = de.prismatic(new D(...s), new D(...o), new D(...n)), p;
                case "spherical":
                    p = de.spherical(new D(...s), new D(...o));
                case "rope":
                    return p = de.rope(h, new D(...s), new D(...o)), p;
                case "spring":
                    return p = de.spring(h, c, l, new D(...s), new D(...o)), p;
                case "generic":
                    return p = de.generic(new D(...s), new D(...o), new D(...n), u), p;
                default:
                    throw new Error(`Unknown joint type: ${t}`);
            }
        }
        addJoint(e, t, s, o = !0) {
            const n = this.createJointData(s);
            return this.world.createImpulseJoint(n, e, t, o);
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
                    const o = s;
                    for(let n = 0; n < o.length; n++){
                        const i = o[n], a = i.translation(), r = i.rotation();
                        this._vector.set(a.x, a.y, a.z), this._quaternion.set(r.x, r.y, r.z, r.w), this._matrix.compose(this._vector, this._quaternion, this._scale), t.setMatrixAt(n, this._matrix);
                    }
                    t.instanceMatrix.needsUpdate = !0, t.computeBoundingSphere();
                } else t.isGroup || t.type, t.position.copy(s.translation()), t.quaternion.copy(s.rotation());
            }
        }
    }
    let mt, ft, yt, gt, wt, _n = !0;
    mt = 1500, ft = 1500, yt = 100, gt = 100, wt = 150;
    const tt = "/Simulador-de-estacionamento/heightMaps", bn = "/gen_c4.png", Wt = bn, jt = !0;
    function Tn(d, e, t) {
        const s = (Math.random() - .5) * .1;
        return (d - e) / (t - e) + s;
    }
    function Ge(d, e, t, s, o) {
        d.lerpColors(t[o - 1][0], t[o - 1][1], Tn(s, e[o - 1], e[o]));
    }
    async function Mn(d, e) {
        console.log("Terrain");
        try {
            console.log("heightsPath", tt);
            const s = (await new Fe().loadAsync(tt + Wt)).image;
            console.log("img", s);
            const o = document.createElement("canvas");
            o.width = s.width, o.height = s.height;
            const n = o.getContext("2d");
            n.drawImage(s, 0, 0);
            const i = n.getImageData(0, 0, s.width, s.height).data, a = yt, r = gt, c = new Float32Array(a * r), l = -Math.PI / 2, h = Math.cos(l), u = Math.sin(l), p = (a - 1) / 2, f = (r - 1) / 2;
            for(let b = 0; b < r; b++)for(let E = 0; E < a; E++){
                const R = E - p, y = b - f, M = R * h - y * u, A = R * u + y * h, P = Math.floor((M + p) / (a - 1) * (s.width - 1)), z = (Math.floor((f - A) / (r - 1) * (s.height - 1)) * s.width + P) * 4;
                let S;
                jt && (S = i[z] / 255);
                const I = S * wt;
                c[b * a + E] = I;
            }
            const _ = new ms(mt, ft, yt - 1, gt - 1);
            _.rotateX(-Math.PI / 2);
            const g = _.attributes.position, T = _.attributes.uv, v = new Float32Array(g.count * 3);
            for(let b = 0; b < g.count; b++){
                const E = T.getX(b), R = T.getY(b), y = Math.floor(E * (s.width - 1)), A = (Math.floor((1 - R) * (s.height - 1)) * s.width + y) * 4;
                let P;
                jt && (P = i[A] / 255);
                const C = P * wt;
                g.setY(b, C);
                const z = new N, S = [
                    0,
                    .3,
                    .4,
                    .5,
                    .8,
                    .85,
                    1
                ], I = [
                    [
                        new N(.34, .36, .22),
                        new N(0, .38, .18)
                    ],
                    [
                        new N(0, .38, .18),
                        new N(0, 1, .2)
                    ],
                    [
                        new N(0, 1, .2),
                        new N(.1, .05, 0)
                    ],
                    [
                        new N(.1, .05, 0),
                        new N(.4, .3, .1)
                    ],
                    [
                        new N(.4, .3, .1),
                        new N(.8, .8, .8)
                    ],
                    [
                        new N(.8, .8, .8),
                        new N(1, 1, 1)
                    ]
                ];
                switch(!0){
                    case P < S[1]:
                        Ge(z, S, I, P, 1);
                        break;
                    case P < S[2]:
                        Ge(z, S, I, P, 2);
                        break;
                    case P < S[3]:
                        Ge(z, S, I, P, 3);
                        break;
                    default:
                        Ge(z, S, I, P, S.length - 1);
                        break;
                }
                v[b * 3 + 0] = z.r, v[b * 3 + 1] = z.g, v[b * 3 + 2] = z.b;
            }
            _.computeVertexNormals(), _.setAttribute("color", new ye(v, 3));
            const w = new H({
                vertexColors: !0,
                flatShading: !1,
                wireframe: !1,
                shininess: 30
            }), x = new k(_, w);
            return x.name = "terrain", x.receiveShadow = !0, x.position.set(0, -46, 0), _n && d.addHeightfield(x, a - 1, r - 1, c, {
                x: mt,
                y: 1,
                z: ft
            }), x;
        } catch (t) {
            console.error("Erro ao carregar a textura:", t), console.log("Caminho completo para a textura:", tt + Wt);
        }
    }
    const Ut = "/Simulador-de-estacionamento/textures", Ht = "/Water_1_M_Flow.jpg", vn = 1500, An = 1500, Rn = 50, Sn = 50;
    async function En(d, e) {
        const t = new ms(vn, An, Rn, Sn);
        try {
            const s = await new Fe().loadAsync(Ut + Ht), o = new qe(t, {
                color: 16777215,
                scale: 4,
                textureWidth: 1024,
                textureHeight: 1024,
                flowDirection: new j(1, 0),
                flowSpeed: .5
            });
            return o.position.y = -12, o.position.x = 0, o.rotation.x = Math.PI * -.5, o;
        } catch (s) {
            console.error("Erro ao carregar a textura:", s), console.log("Caminho completo para a textura:", Ut + Ht);
        }
    }
    const Pn = 100, Dn = .8, Ln = 24, Cn = 1e3, zn = 65280, kn = !1, Bn = .3, In = 4210752, Fn = !1, On = .3, Nn = 8421504, Gn = !1, Wn = .3, jn = new m(2.5, 2, 4), Un = .5, Hn = .4, Vn = [
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
    ], Vt = 4, st = 2, Kt = 1, ae = .2, _e = .2, qt = .5;
    class Kn {
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
        constructor(e, t, s, o, n = {}, i){
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
                appendixRight: 0,
                lightsOn: 0
            }, this.scene = e, this.sceneManager = t, this.world = s, this.physicsManager = o, this.options = {
                chassisSize: jn,
                wheelRadius: Un,
                wheelWidth: Hn,
                ...n
            }, this.initChassis(), this.initWheels(), this.initChovel();
        }
        initChassis() {
            const e = new H({
                color: zn,
                transparent: kn,
                opacity: Bn
            });
            this.chassisMesh = new k(new Y(...this.options.chassisSize.toArray()), e), this.options.chassisPosition ? (this.chassisMesh.position.copy(this.options.chassisPosition), this.spawnPos = this.options.chassisPosition.clone()) : (this.chassisMesh.position.set(0, 3, 0), this.spawnPos = new m(0, 3, 0)), this.chassisMesh.castShadow = !0, this.sceneManager.addToScene(this.chassisMesh), this.follow_target = this.chassisMesh;
            const t = X.cuboid(this.options.chassisSize.x / 2, this.options.chassisSize.y / 2, this.options.chassisSize.z / 2);
            t.setMass(Pn), t.setRestitution(Dn);
            const s = U.dynamic();
            console.log("this.chassisMesh.position", this.chassisMesh.position), console.log("this.chassisMesh.quaternion", this.chassisMesh.quaternion), s.setTranslation(...this.chassisMesh.position.toArray()), this.chassisBody = this.world.createRigidBody(s), this.chassisBody.userData = {
                name: "chassis"
            }, this.chassisCollider = this.world.createCollider(t, this.chassisBody);
            const o = new ie;
            o.name = "pivot", o.position.set(0, 0, -(this.options.chassisSize.z / 2)), this.chassisMesh.add(o), this.chassisMesh.userData.physics || (this.chassisMesh.userData.physics = {}), this.chassisMesh.userData.physics.body = this.chassisBody, this.controller = this.world.createVehicleController(this.chassisBody);
        }
        initChovel() {
            const e = new Q, t = new H({
                color: Nn,
                transparent: Gn,
                opacity: Wn
            }), s = new Y(Vt, st, ae), o = new k(s, t), n = new Y(Vt, ae, Kt), i = new k(n, t), a = new $(_e, _e, Kt, 16), r = new K().makeRotationX(Math.PI / 2);
            console.log("rotMatrix", r), a.applyMatrix4(r);
            const c = new k(a, t), l = new vt(_e, 16, 16), h = new k(l, t);
            o.position.set(0, 0, 0), i.position.set(0, -2.2 / 2, -.8 / 2), c.position.set(0, 0, qt + ae / 2);
            const u = new F().setFromRotationMatrix(r);
            c.userData.geo = {
                quaternion: u.clone()
            }, h.position.set(0, 0, qt * 2 + ae + _e / 2), e.add(o), e.add(i), e.add(c), e.position.copy(this.options.chassisPosition), e.translateX(0), e.translateY(-(this.options.chassisSize.y - ae - _e) / 2), e.translateZ(-((this.options.chassisSize.z + st + ae) / 2 + .4)), h.translateX(this.options.chassisPosition.x), h.translateY(this.options.chassisPosition.y - (this.options.chassisSize.y - ae - _e) / 2), h.translateZ(this.options.chassisPosition.z - ((this.options.chassisSize.z + st + ae) / 2 + .4)), e.updateMatrixWorld(), h.updateMatrixWorld(), console.log(`
blade1_WorldPos`, o.getWorldPosition(new m), `
blade1.position`, o.position, `
blade2_WorldPos`, i.getWorldPosition(new m), `
bladeCylinder_WorldPos`, c.getWorldPosition(new m), `
bladeJoint_WorldPos`, h.getWorldPosition(new m), `
bladeGroup_WorldPos`, e.getWorldPosition(new m), `
bladeGroup.position`, e.position), this.sceneManager.addToScene(e), this.sceneManager.addToScene(h);
            const p = U.dynamic().setTranslation(...e.position).setRotation(e.quaternion);
            this.bladeBody = this.world.createRigidBody(p), console.log("this.bladeBody.position", this.bladeBody.translation()), this.bladeBody.userData = {
                name: "bladeBody"
            };
            let f;
            f = this.physicsManager.getSimpleColliderDesc(o).setTranslation(...o.position).setRotation(o.quaternion).setMass(.1), console.log("blade1-colliderDesc.translation()", o.position), this.world.createCollider(f, this.bladeBody), f = this.physicsManager.getSimpleColliderDesc(i).setTranslation(...i.position).setRotation(i.quaternion).setMass(.1), console.log("blade2-colliderDesc.translation()", i.position), this.world.createCollider(f, this.bladeBody), f = this.physicsManager.getSimpleColliderDesc(c).setTranslation(...c.position).setRotation(c.userData.geo.quaternion).setMass(.1), console.log("bladeCylinder-colliderDesc.translation()", c.position), this.world.createCollider(f, this.bladeBody);
            const _ = U.dynamic().setTranslation(...h.position).setRotation(h.quaternion);
            this.bladeJointBody = this.world.createRigidBody(_), this.bladeJointBody.userData = {
                name: "bladeJointBody"
            }, f = this.physicsManager.getSimpleColliderDesc(h).setMass(.1), console.log("bladeJointMesh-colliderDesc.translation()", h.position), this.world.createCollider(f, this.bladeJointBody);
            const g = h.getWorldPosition(new m), T = e.getWorldPosition(new m);
            let v = [
                0,
                0,
                0
            ], w = [
                g.x - T.x,
                g.y - T.y,
                g.z - T.z
            ];
            console.log("anchor", w), this.bladeJoint = this.physicsManager.addJoint(this.bladeJointBody, this.bladeBody, {
                type: "fixed",
                anchor1: v,
                frame1: [
                    0,
                    0,
                    0,
                    1
                ],
                anchor2: w,
                frame2: [
                    0,
                    0,
                    0,
                    1
                ]
            });
            const x = this.chassisMesh.getWorldPosition(new m);
            v = [
                g.x - x.x,
                g.y - x.y + .7,
                g.z - x.z
            ], w = [
                0,
                0,
                0
            ], this.chovelJoint = this.physicsManager.addJoint(this.chassisBody, this.bladeJointBody, {
                type: "revolute",
                anchor1: v,
                anchor2: w,
                axis: [
                    1,
                    0,
                    0
                ]
            }), this.chovelJoint.limitsEnabled(), this.chovelJoint.setLimits(-Math.PI / 8, Math.PI / 3), this.physicsManager.addMesh(h, this.bladeJointBody, "bladeJoint"), this.physicsManager.addGroup(e, this.bladeBody, "blade");
        }
        initWheels() {
            this.wheels = [], Vn.forEach((e, t)=>{
                this.addWheel(t, e);
            }), this.controller.setWheelSteering(0, Math.PI / 4), this.controller.setWheelSteering(1, Math.PI / 4);
        }
        addWheel(e, t) {
            const s = {
                radius: this.options.wheelRadius,
                width: this.options.wheelWidth,
                suspensionRestLength: .8,
                position: new m(t.x, t.y, t.z),
                direction: new D(...Object.values({
                    x: 0,
                    y: -1,
                    z: 0
                })),
                axle: new D(...Object.values({
                    x: -1,
                    y: 0,
                    z: 0
                }))
            };
            this.controller.addWheel(s.position, s.direction, s.axle, s.suspensionRestLength, s.radius), this.controller.setWheelSuspensionStiffness(e, Ln), this.controller.setWheelFrictionSlip(e, Cn), this.controller.setWheelSteering(e, t.z < 0);
            const o = new $(s.radius, s.radius, s.width, 16);
            o.rotateZ(Math.PI * .5);
            const n = new k(o, new H({
                color: In,
                transparent: Fn,
                opacity: On
            }));
            n.castShadow = !0, n.position.copy(t), this.wheels.push(n), this.chassisMesh.add(n);
        }
        updateController(e) {
            if (this.movement = e, this.movement.reset) {
                this.chassisBody.setTranslation(this.spawnPos, !0), this.chassisBody.setRotation(new we(0, 0, 0, 1), !0), this.chassisBody.setLinvel(new D(0, 0, 0), !0), this.chassisBody.setAngvel(new D(0, 0, 0), !0), this.movement.accelerateForce.value = 0, this.movement.brakeForce.value = 0, this.movement.reset = !1;
                return;
            }
            let t = 0;
            this.movement.forward < 0 ? (t = this.movement.accelerateForce.value - this.movement.accelerateForce.step, t < this.movement.accelerateForce.min && (t = this.movement.accelerateForce.min)) : this.movement.forward > 0 ? (t = this.movement.accelerateForce.value + this.movement.accelerateForce.step, t > this.movement.accelerateForce.max && (t = this.movement.accelerateForce.max)) : this.chassisBody.isSleeping() && this.chassisBody.wakeUp(), this.movement.accelerateForce.value = t;
            let s = 0;
            this.movement.brake > 0 && (s = this.movement.brakeForce.value + this.movement.brakeForce.step, s > this.movement.brakeForce.max && (s = this.movement.brakeForce.max)), this.movement.brakeForce.value = s;
            const o = t;
            this.controller.setWheelEngineForce(0, o), this.controller.setWheelEngineForce(1, o);
            const n = this.controller.wheelSteering(0), i = this.movement.right, a = Math.PI / 4, r = G.lerp(n, a * i, .25);
            this.controller.setWheelSteering(0, r), this.controller.setWheelSteering(1, r);
            const c = this.movement.brake * s;
            this.controller.setWheelBrake(0, c), this.controller.setWheelBrake(1, c), this.controller.setWheelBrake(2, c), this.controller.setWheelBrake(3, c), this.updateChovel();
        }
        updateChovel() {
            const e = Math.PI / 4, t = 5e5, o = (this.movement.appendixUp || 0) * e;
            this.chovelJoint.configureMotorVelocity(o, t);
        }
        updateWheels() {
            if (this.controller === void 0) return;
            const e = new F, t = new F, s = new m(0, 1, 0);
            this.wheels.forEach((o, n)=>{
                const i = this.controller.wheelAxleCs(n), a = this.controller.wheelChassisConnectionPointCs(n).y || 0, r = this.controller.wheelSuspensionLength(n) || 0, c = this.controller.wheelSteering(n) || 0, l = this.controller.wheelRotation(n) || 0;
                o.position.y = a - r, e.setFromAxisAngle(s, c), t.setFromAxisAngle(i, l), o.quaternion.multiplyQuaternions(e, t);
            });
        }
    }
    const qn = 20, Xn = .8, Yn = 24, $n = 1e3, Zn = 16776960, Qn = !1, Jn = .9, ei = 4210752, ti = !1, si = .9, oi = new m(2.5, 3, 10), ni = .5, ii = .4, ri = [
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
    class ai {
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
        constructor(e, t, s, o, n = {}, i){
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
                lightsOn: 0
            }, this.scene = e, this.sceneManager = t, this.world = s, this.physicsManager = o, this.options = {
                chassisSize: oi,
                wheelRadius: ni,
                wheelWidth: ii,
                ...n
            }, this.initChassis(), this.initWheels();
        }
        initChassis() {
            this.chassisMesh = new k(new Y(...this.options.chassisSize.toArray()), new H({
                color: Zn,
                transparent: Qn,
                opacity: Jn
            })), this.options.chassisPosition ? (this.chassisMesh.position.copy(this.options.chassisPosition), this.spawnPos = this.options.chassisPosition.clone()) : (this.chassisMesh.position.set(0, 3, 0), this.spawnPos = new m(0, 3, 0)), this.chassisMesh.castShadow = !0, this.sceneManager.addToScene(this.chassisMesh), this.follow_target = this.chassisMesh;
            const e = X.cuboid(this.options.chassisSize.x / 2, this.options.chassisSize.y / 2, this.options.chassisSize.z / 2);
            e.setMass(qn), e.setRestitution(Xn);
            const t = U.dynamic();
            console.log("this.chassisMesh.position", this.chassisMesh.position), console.log("this.chassisMesh.quaternion", this.chassisMesh.quaternion), t.setTranslation(...this.chassisMesh.position.toArray()), this.chassisBody = this.world.createRigidBody(t), this.chassisBody.userData = {
                name: "chassis"
            }, this.chassisCollider = this.world.createCollider(e, this.chassisBody), this.chassisMesh.userData.physics || (this.chassisMesh.userData.physics = {}), this.chassisMesh.userData.physics.body = this.chassisBody, this.controller = this.world.createVehicleController(this.chassisBody);
        }
        initWheels() {
            this.wheels = [], ri.forEach((e, t)=>{
                this.addWheel(t, e);
            }), this.controller.setWheelSteering(0, Math.PI / 4), this.controller.setWheelSteering(1, Math.PI / 4);
        }
        addWheel(e, t) {
            const s = {
                radius: this.options.wheelRadius,
                width: this.options.wheelWidth,
                suspensionRestLength: .8,
                position: new m(t.x, t.y, t.z),
                direction: new D(...Object.values({
                    x: 0,
                    y: -1,
                    z: 0
                })),
                axle: new D(...Object.values({
                    x: -1,
                    y: 0,
                    z: 0
                }))
            };
            this.controller.addWheel(s.position, s.direction, s.axle, s.suspensionRestLength, s.radius), this.controller.setWheelSuspensionStiffness(e, Yn), this.controller.setWheelFrictionSlip(e, $n), this.controller.setWheelSteering(e, t.z < 0);
            const o = new $(s.radius, s.radius, s.width, 16);
            o.rotateZ(Math.PI * .5);
            const n = new k(o, new H({
                color: ei,
                transparent: ti,
                opacity: si
            }));
            n.castShadow = !0, n.position.copy(t), this.wheels.push(n), this.chassisMesh.add(n);
        }
        updateController(e) {
            if (this.movement = e, this.movement.reset) {
                this.chassisBody.setTranslation(this.spawnPos, !0), this.chassisBody.setRotation(new we(0, 0, 0, 1), !0), this.chassisBody.setLinvel(new D(0, 0, 0), !0), this.chassisBody.setAngvel(new D(0, 0, 0), !0), this.movement.accelerateForce.value = 0, this.movement.brakeForce.value = 0, this.movement.reset = !1;
                return;
            }
            let t = 0;
            this.movement.forward < 0 ? (t = this.movement.accelerateForce.value - this.movement.accelerateForce.step, t < this.movement.accelerateForce.min && (t = this.movement.accelerateForce.min)) : this.movement.forward > 0 ? (t = this.movement.accelerateForce.value + this.movement.accelerateForce.step, t > this.movement.accelerateForce.max && (t = this.movement.accelerateForce.max)) : this.chassisBody.isSleeping() && this.chassisBody.wakeUp(), this.movement.accelerateForce.value = t;
            let s = 0;
            this.movement.brake > 0 && (s = this.movement.brakeForce.value + this.movement.brakeForce.step, s > this.movement.brakeForce.max && (s = this.movement.brakeForce.max)), this.movement.brakeForce.value = s;
            const o = t;
            this.controller.setWheelEngineForce(0, o), this.controller.setWheelEngineForce(1, o);
            const n = this.controller.wheelSteering(0), i = this.movement.right, a = Math.PI / 4, r = G.lerp(n, a * i, .25);
            this.controller.setWheelSteering(0, r), this.controller.setWheelSteering(1, r);
            const c = this.movement.brake * s;
            this.controller.setWheelBrake(0, c), this.controller.setWheelBrake(1, c), this.controller.setWheelBrake(2, c), this.controller.setWheelBrake(3, c);
        }
        updateWheels() {
            if (this.controller === void 0) return;
            const e = new F, t = new F, s = new m(0, 1, 0);
            this.wheels.forEach((o, n)=>{
                const i = this.controller.wheelAxleCs(n), a = this.controller.wheelChassisConnectionPointCs(n).y || 0, r = this.controller.wheelSuspensionLength(n) || 0, c = this.controller.wheelSteering(n) || 0, l = this.controller.wheelRotation(n) || 0;
                o.position.y = a - r, e.setFromAxisAngle(s, c), t.setFromAxisAngle(i, l), o.quaternion.multiplyQuaternions(e, t);
            });
        }
    }
    const ci = 10, li = .8, hi = 24, di = 1e3, ui = 16711680, pi = !1, mi = .9, fi = 4210752, yi = !1, gi = .9, wi = new m(2, 1, 4), xi = .5, _i = .4, bi = [
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
    class Ti {
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
        constructor(e, t, s, o, n = {}, i){
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
                lightsOn: 0
            }, this.scene = e, this.sceneManager = t, this.world = s, this.physicsManager = o, this.options = {
                chassisSize: wi,
                wheelRadius: xi,
                wheelWidth: _i,
                ...n
            }, this.initChassis(), this.initWheels();
        }
        initChassis() {
            this.chassisMesh = new k(new Y(...this.options.chassisSize.toArray()), new H({
                color: ui,
                transparent: pi,
                opacity: mi
            })), this.options.chassisPosition ? (this.chassisMesh.position.copy(this.options.chassisPosition), this.spawnPos = this.options.chassisPosition.clone()) : (this.chassisMesh.position.set(0, 3, 0), this.spawnPos = new m(0, 3, 0)), this.chassisMesh.castShadow = !0, this.sceneManager.addToScene(this.chassisMesh), this.follow_target = this.chassisMesh;
            const e = X.cuboid(this.options.chassisSize.x / 2, this.options.chassisSize.y / 2, this.options.chassisSize.z / 2);
            e.setMass(ci), e.setRestitution(li);
            const t = U.dynamic();
            console.log("this.chassisMesh.position", this.chassisMesh.position), console.log("this.chassisMesh.quaternion", this.chassisMesh.quaternion), t.setTranslation(...this.chassisMesh.position.toArray()), this.chassisBody = this.world.createRigidBody(t), this.chassisBody.userData = {
                name: "chassis"
            }, this.chassisCollider = this.world.createCollider(e, this.chassisBody), this.chassisMesh.userData.physics || (this.chassisMesh.userData.physics = {}), this.chassisMesh.userData.physics.body = this.chassisBody, this.controller = this.world.createVehicleController(this.chassisBody);
        }
        initWheels() {
            this.wheels = [], bi.forEach((e, t)=>{
                this.addWheel(t, e);
            }), this.controller.setWheelSteering(0, Math.PI / 4), this.controller.setWheelSteering(1, Math.PI / 4);
        }
        addWheel(e, t) {
            const s = {
                radius: this.options.wheelRadius,
                width: this.options.wheelWidth,
                suspensionRestLength: .8,
                position: new m(t.x, t.y, t.z),
                direction: new D(...Object.values({
                    x: 0,
                    y: -1,
                    z: 0
                })),
                axle: new D(...Object.values({
                    x: -1,
                    y: 0,
                    z: 0
                }))
            };
            this.controller.addWheel(s.position, s.direction, s.axle, s.suspensionRestLength, s.radius), this.controller.setWheelSuspensionStiffness(e, hi), this.controller.setWheelFrictionSlip(e, di), this.controller.setWheelSteering(e, t.z < 0);
            const o = new $(s.radius, s.radius, s.width, 16);
            o.rotateZ(Math.PI * .5);
            const n = new k(o, new H({
                color: fi,
                transparent: yi,
                opacity: gi
            }));
            n.castShadow = !0, n.position.copy(t), this.wheels.push(n), this.chassisMesh.add(n);
        }
        updateController(e) {
            if (this.movement = e, this.movement.reset) {
                this.chassisBody.setTranslation(this.spawnPos, !0), this.chassisBody.setRotation(new we(0, 0, 0, 1), !0), this.chassisBody.setLinvel(new D(0, 0, 0), !0), this.chassisBody.setAngvel(new D(0, 0, 0), !0), this.movement.accelerateForce.value = 0, this.movement.brakeForce.value = 0, this.movement.reset = !1;
                return;
            }
            let t = 0;
            this.movement.forward < 0 ? (t = this.movement.accelerateForce.value - this.movement.accelerateForce.step, t < this.movement.accelerateForce.min && (t = this.movement.accelerateForce.min)) : this.movement.forward > 0 ? (t = this.movement.accelerateForce.value + this.movement.accelerateForce.step, t > this.movement.accelerateForce.max && (t = this.movement.accelerateForce.max)) : this.chassisBody.isSleeping() && this.chassisBody.wakeUp(), this.movement.accelerateForce.value = t;
            let s = 0;
            this.movement.brake > 0 && (s = this.movement.brakeForce.value + this.movement.brakeForce.step, s > this.movement.brakeForce.max && (s = this.movement.brakeForce.max)), this.movement.brakeForce.value = s;
            const o = t;
            this.controller.setWheelEngineForce(0, o), this.controller.setWheelEngineForce(1, o);
            const n = this.controller.wheelSteering(0), i = this.movement.right, a = Math.PI / 4, r = G.lerp(n, a * i, .25);
            this.controller.setWheelSteering(0, r), this.controller.setWheelSteering(1, r);
            const c = this.movement.brake * s;
            this.controller.setWheelBrake(0, c), this.controller.setWheelBrake(1, c), this.controller.setWheelBrake(2, c), this.controller.setWheelBrake(3, c);
        }
        updateWheels() {
            if (this.controller === void 0) return;
            const e = new F, t = new F, s = new m(0, 1, 0);
            this.wheels.forEach((o, n)=>{
                const i = this.controller.wheelAxleCs(n), a = this.controller.wheelChassisConnectionPointCs(n).y || 0, r = this.controller.wheelSuspensionLength(n) || 0, c = this.controller.wheelSteering(n) || 0, l = this.controller.wheelRotation(n) || 0;
                o.position.y = a - r, e.setFromAxisAngle(s, c), t.setFromAxisAngle(i, l), o.quaternion.multiplyQuaternions(e, t);
            });
        }
    }
    const Mi = 10, vi = .8, Ai = 24, Ri = 1e3, Xt = 255, Yt = !1, $t = .9, Si = 4210752, Ei = !1, Pi = .9, Di = new m(3.5, 2.5, 7), Li = .5, Ci = .4, zi = [
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
    ], Zt = 2.5, Qt = .2, Jt = .8, es = 1.2, ts = .1, ki = .5, Bi = new H({
        color: 16776960
    }), Ii = new $(ts, ts, ki, 16), ot = 50;
    class Fi {
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
        constructor(e, t, s, o, n = {}, i, a = null){
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
                shoot: 0,
                lightsOn: 0
            }, this._hasShotThisPress = !1, this.scene = e, this.sceneManager = t, this.world = s, this.physicsManager = o, this.options = {
                chassisSize: Di,
                wheelRadius: Li,
                wheelWidth: Ci,
                ...n
            }, this.initChassis(), this.initWheels(), this.initCanon();
        }
        initChassis() {
            const e = new H({
                color: Xt,
                transparent: Yt,
                opacity: $t
            });
            this.chassisMesh = new k(new Y(...this.options.chassisSize.toArray()), e), this.options.chassisPosition ? (this.chassisMesh.position.copy(this.options.chassisPosition), this.spawnPos = this.options.chassisPosition.clone()) : (this.chassisMesh.position.set(0, 3, 0), this.spawnPos = new m(0, 3, 0)), this.chassisMesh.castShadow = !0, this.turretPivot = new ie, this.turretPivot.position.set(0, this.options.chassisPosition.y / 2, 0), this.chassisMesh.add(this.turretPivot), this.sceneManager.addToScene(this.chassisMesh), this.follow_target = this.chassisMesh;
            const t = X.cuboid(this.options.chassisSize.x / 2, this.options.chassisSize.y / 2, this.options.chassisSize.z / 2);
            t.setMass(Mi), t.setRestitution(vi);
            const s = U.dynamic();
            console.log("this.chassisMesh.position", this.chassisMesh.position), console.log("this.chassisMesh.quaternion", this.chassisMesh.quaternion), s.setTranslation(...this.chassisMesh.position.toArray()), this.chassisBody = this.world.createRigidBody(s), this.chassisBody.userData = {
                name: "chassis"
            }, this.chassisCollider = this.world.createCollider(t, this.chassisBody), this.chassisMesh.userData.physics || (this.chassisMesh.userData.physics = {}), this.chassisMesh.userData.physics.body = this.chassisBody, this.controller = this.world.createVehicleController(this.chassisBody);
        }
        initCanon() {
            this.cannonGroup = new Q;
            const e = new H({
                color: Xt,
                transparent: Yt,
                opacity: $t
            }), t = new $(Qt, Qt, Zt, 16), s = new $(es, es, Jt, 16);
            this.cannonBaseMesh = new k(s, e), this.cannonBasePivot = new ie, this.cannonBasePivot.position.set(0, 0, -1.2), this.cannonBaseMesh.add(this.cannonBasePivot);
            const o = new k(t, e);
            this.cylinderPivot = new ie, this.cylinderPivot.position.set(0, Zt / 2, 0), o.add(this.cylinderPivot), this.shootPivot = new ie, this.shootPivot.position.set(0, -2.5 / 2, 0), o.add(this.shootPivot), [
                o,
                this.cannonBaseMesh
            ].forEach((A)=>{
                A.translateX(5), A.translateY(3.9), A.translateZ(10), this.scene.add(A);
            }), o.rotation.x = Math.PI / 2, o.translateY(-2.5), o.updateMatrixWorld(), this.options.chassisPosition ? this.options.chassisPosition.clone().add(new m(0, this.options.chassisPosition.y / 2 + Jt / 2 + .2, 0)) : new m(0, 4.5, 0);
            const n = this.cannonBaseMesh.getWorldPosition(new m), i = this.cannonBaseMesh.getWorldQuaternion(new F);
            console.log("baseCWorldPos", n, `
baseCWorldQuat`, i, `
cannonBaseMesh.position`, this.cannonBaseMesh.position, `
cannonBaseMesh.quaternion`, this.cannonBaseMesh.quaternion);
            const a = U.dynamic().setTranslation(...this.cannonBaseMesh.position).setRotation(this.cannonBaseMesh.quaternion);
            let r = this.physicsManager.getSimpleColliderDesc(this.cannonBaseMesh);
            this.cannonBaseBody = this.world.createRigidBody(a), this.cannonBaseBody.userData = {
                name: "cannonBase"
            }, this.world.createCollider(r, this.cannonBaseBody);
            const c = o.getWorldPosition(new m), l = o.getWorldQuaternion(new F);
            console.log("cylWorldPos", c, `
cylWorldQuat`, l, `
cannonCylinderMesh.position`, o.position, `
cannonCylinderMesh.quaternion`, o.quaternion);
            const h = U.dynamic().setTranslation(...o.position).setRotation(o.quaternion);
            r = this.physicsManager.getSimpleColliderDesc(o), this.cannonCylinderBody = this.world.createRigidBody(h), this.cannonCylinderBody.userData = {
                name: "cannonBase"
            }, this.world.createCollider(r, this.cannonCylinderBody), console.log("cannonBaseBody.translation()", this.cannonBaseBody.translation(), `
cannonBaseBody.rotation()`, this.cannonBaseBody.rotation(), `
cannonCylinderBody.translation()`, this.cannonCylinderBody.translation(), `
cannonCylinderBody.rotation()`, this.cannonCylinderBody.rotation());
            const u = this.turretPivot.getWorldPosition(new m), p = this.chassisMesh.getWorldPosition(new m), f = this.chassisBody.translation(), _ = this.cannonBaseBody.translation();
            console.log("turretPivotWorldPos", u, `
chassisWorldPos`, p, `
chassisWorld`, f, `
baseWorld`, _), this.cannonBodyJoint = this.physicsManager.addJoint(this.chassisBody, this.cannonBaseBody, {
                type: "revolute",
                anchor1: [
                    u.x - f.x,
                    u.y - f.y,
                    u.z - f.z
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
this.cylinderPivot.getWorldPosition:`, this.cylinderPivot.getWorldPosition(new m), `
cylinderPivot.position:`, this.cylinderPivot.position, `
this.cylinderPivot.getWorldQuaternion:`, this.cylinderPivot.getWorldQuaternion(new F), `
this.cylinderPivot.quaternion:`, this.cylinderPivot.quaternion, `
cannonCylinderMesh.getWorldPosition:`, o.getWorldPosition(new m), `
cannonCylinderMesh.position:`, o.position, `
cannonCylinderMesh.getWorldQuaternion:`, o.getWorldQuaternion(new F), `
cannonCylinderMesh.quaternion:`, o.quaternion, `
cannonBaseMesh.getWorldPosition:`, this.cannonBaseMesh.getWorldPosition(new m), `
cannonBaseMesh.position:`, this.cannonBaseMesh.position, `
cannonBaseMesh.getWorldQuaternion:`, this.cannonBaseMesh.getWorldQuaternion(new F), "this.cannonBaseMesh.quaternion:", this.cannonBaseMesh.quaternion, `
this.cannonBaseBody.translation():`, this.cannonBaseBody.translation(), `
this.cannonCylinderBody.translation():`, this.cannonCylinderBody.translation(), `
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`), this.cannonBasePivot.getWorldPosition(new m);
            const g = this.cylinderPivot.getWorldPosition(new m), T = this.cannonBaseBody.translation(), v = this.cannonCylinderBody.translation();
            let w = new m().subVectors(g, T), x = new m().subVectors(g, v);
            w = new m(0, 0, -2.5), x = new m(0, 0, 0);
            const b = this.cylinderPivot.getWorldQuaternion(new F), E = this.cannonBaseBody.rotation(), R = this.cannonCylinderBody.rotation();
            console.log("q_pivot_world", b, `
q_base_world`, E, `
q_cyl_world`, R);
            const y = new F;
            y.copy(E).invert().multiply(b);
            const M = new F;
            M.copy(R).invert().multiply(b), console.log("frame1:", y), console.log("frame2:", M), this.cannonCylinderJoint = this.physicsManager.addJoint(this.cannonBaseBody, this.cannonCylinderBody, {
                type: "fixed",
                anchor1: [
                    w.x,
                    w.y,
                    w.z
                ],
                frame1: [
                    y.x,
                    y.y,
                    y.z,
                    y.w
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
            }), this.physicsManager.addMesh(this.cannonBaseMesh, this.cannonBaseBody, "cannonBase"), this.physicsManager.addMesh(o, this.cannonCylinderBody, "cannonCylinder");
        }
        initWheels() {
            this.wheels = [], zi.forEach((e, t)=>{
                this.addWheel(t, e);
            }), this.controller.setWheelSteering(0, Math.PI / 4), this.controller.setWheelSteering(1, Math.PI / 4);
        }
        addWheel(e, t) {
            const s = {
                radius: this.options.wheelRadius,
                width: this.options.wheelWidth,
                suspensionRestLength: .8,
                position: new m(t.x, t.y, t.z),
                direction: new D(...Object.values({
                    x: 0,
                    y: -1,
                    z: 0
                })),
                axle: new D(...Object.values({
                    x: -1,
                    y: 0,
                    z: 0
                }))
            };
            this.controller.addWheel(s.position, s.direction, s.axle, s.suspensionRestLength, s.radius), this.controller.setWheelSuspensionStiffness(e, Ai), this.controller.setWheelFrictionSlip(e, Ri), this.controller.setWheelSteering(e, t.z < 0);
            const o = new $(s.radius, s.radius, s.width, 16);
            o.rotateZ(Math.PI * .5);
            const n = new k(o, new H({
                color: Si,
                transparent: Ei,
                opacity: Pi
            }));
            n.castShadow = !0, n.position.copy(t), this.wheels.push(n), this.chassisMesh.add(n);
        }
        updateController(e) {
            if (this.movement = e, this.movement.reset) {
                this.chassisBody.setTranslation(this.spawnPos, !0), this.chassisBody.setRotation(new we(0, 0, 0, 1), !0), this.chassisBody.setLinvel(new D(0, 0, 0), !0), this.chassisBody.setAngvel(new D(0, 0, 0), !0), this.movement.accelerateForce.value = 0, this.movement.brakeForce.value = 0, this.movement.reset = !1;
                return;
            }
            let t = 0;
            this.movement.forward < 0 ? (t = this.movement.accelerateForce.value - this.movement.accelerateForce.step, t < this.movement.accelerateForce.min && (t = this.movement.accelerateForce.min)) : this.movement.forward > 0 ? (t = this.movement.accelerateForce.value + this.movement.accelerateForce.step, t > this.movement.accelerateForce.max && (t = this.movement.accelerateForce.max)) : this.chassisBody.isSleeping() && this.chassisBody.wakeUp(), this.movement.accelerateForce.value = t;
            let s = 0;
            this.movement.brake > 0 && (s = this.movement.brakeForce.value + this.movement.brakeForce.step, s > this.movement.brakeForce.max && (s = this.movement.brakeForce.max)), this.movement.brakeForce.value = s;
            const o = t;
            this.controller.setWheelEngineForce(0, o), this.controller.setWheelEngineForce(1, o);
            const n = this.controller.wheelSteering(0), i = this.movement.right, a = Math.PI / 4, r = G.lerp(n, a * i, .25);
            this.controller.setWheelSteering(0, r), this.controller.setWheelSteering(1, r);
            const c = this.movement.brake * s;
            this.controller.setWheelBrake(0, c), this.controller.setWheelBrake(1, c), this.controller.setWheelBrake(2, c), this.controller.setWheelBrake(3, c), this.updateTurretMotor(), this.movement.shoot === 1 && !this._hasShotThisPress ? (this.shootProjectile(), this.follow_target = this.cannonBaseMesh, this._hasShotThisPress = !0) : this.movement.shoot === 0 && (this._hasShotThisPress = !1), (this.movement.forward !== 0 || this.movement.right !== 0 || this.movement.brake !== 0) && (this.follow_target = this.chassisMesh);
        }
        updateTurretMotor() {
            if (!this.cannonBodyJoint) {
                console.warn("cannonBodyJoint não está definido.");
                return;
            }
            const e = Math.PI / 4, t = 10, s = this.movement.appendixRight || 0, o = -s * e;
            this.cannonBodyJoint.configureMotorVelocity(o, t), s != 0 && (this.follow_target = this.cannonBaseMesh);
        }
        shootProjectile() {
            const e = new k(Ii, Bi), t = this.shootPivot.getWorldPosition(new m), s = this.shootPivot.getWorldQuaternion(new F);
            e.position.copy(t).add(new m(0, 0, -.6 / 2)), e.quaternion.copy(s);
            const o = U.dynamic().setTranslation(...e.position.toArray()).setRotation(e.quaternion), n = this.world.createRigidBody(o);
            n.userData = {
                name: "projectile"
            }, console.log("this.shootPivot.parent.quaternion", this.shootPivot.parent.quaternion.clone().toArray(), "projWP", t.clone().toArray(), `
projWQ`, s.clone().toArray(), `
projMesh.position`, e.position.clone().toArray(), `
projMesh.quaternion`, e.quaternion.clone().toArray(), `
projBody.translation`, n.translation(), `
projBody.rotation`, n.rotation());
            const i = this.physicsManager.getSimpleColliderDesc(e);
            i.setRestitution(.2), i.setFriction(.5), this.world.createCollider(i, n);
            const a = new m(0, -1, 0);
            a.applyQuaternion(s).normalize();
            const r = new D(a.x * ot, a.y * ot, a.z * ot);
            n.setLinvel(r, !0), this.sceneManager.addToScene(e), this.physicsManager.addMesh(e, n, "projectile"), this.activeProjectiles || (this.activeProjectiles = []), this.activeProjectiles.push({
                mesh: e,
                body: n
            }), setTimeout(()=>{
                this.sceneManager.removeFromScene(e), this.physicsManager.removeMesh(e), this.activeProjectiles = this.activeProjectiles.filter((c)=>c.body.handle !== n.handle), console.log("Projectile removed after timeout:", e);
            }, 5e3);
        }
        updateWheels() {
            if (this.controller === void 0) return;
            const e = new F, t = new F, s = new m(0, 1, 0);
            this.wheels.forEach((o, n)=>{
                const i = this.controller.wheelAxleCs(n), a = this.controller.wheelChassisConnectionPointCs(n).y || 0, r = this.controller.wheelSuspensionLength(n) || 0, c = this.controller.wheelSteering(n) || 0, l = this.controller.wheelRotation(n) || 0;
                o.position.y = a - r, e.setFromAxisAngle(s, c), t.setFromAxisAngle(i, l), o.quaternion.multiplyQuaternions(e, t);
            });
        }
    }
    const Oi = 24, Ni = 1e3, Gi = .4, Wi = 65535, ji = !1, Ui = .3, Hi = 4210752, Vi = !1, Ki = .3, qi = 11468975, Xi = !1, Yi = .3, $i = new m(2.5, 3, 15), be = new m(2.5, 1, 15), We = new m(2.5, 2.5, 3), xt = .9, Zi = .7, Qi = [
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
            z: 6 - xt * 2 - .5
        },
        {
            x: 1.2,
            y: -1,
            z: 6 - xt * 2 - .5
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
    ], q = .2, je = 2.5, nt = 2.5, pe = 12, me = 1.25;
    class Ji {
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
        constructor(e, t, s, o, n = {}, i){
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
                appendixRight: 0,
                lightsOn: 0
            }, this.scene = e, this.sceneManager = t, this.world = s, this.physicsManager = o, this.options = {
                chassisSize: $i,
                wheelRadius: xt,
                wheelWidth: Zi,
                ...n
            }, this.initChassis(), this.initWheels(), this.initBucket();
        }
        initChassis() {
            const e = new H({
                color: Wi,
                transparent: ji,
                opacity: Ui
            }), t = new Y(...be.toArray());
            this.chassisMesh = new Q;
            const s = new k(t, e), o = new Y(...We.toArray()), n = new k(o, e);
            n.position.set(0, (be.y + We.y) / 2, -(be.z - We.z) / 2), this.chassisMesh.add(s), this.chassisMesh.add(n);
            const i = new ie;
            i.name = "pivot", i.position.set(0, be.y / 2, be.z / 2), this.chassisMesh.add(i), this.options.chassisPosition ? (this.chassisMesh.position.copy(this.options.chassisPosition), this.spawnPos = this.options.chassisPosition.clone()) : (this.chassisMesh.position.set(0, 3, 0), this.spawnPos = new m(0, 3, 0)), this.sceneManager.addToScene(this.chassisMesh), this.follow_target = this.chassisMesh;
            const a = U.dynamic().setTranslation(...this.chassisMesh.position).setRotation(this.chassisMesh.quaternion);
            this.chassisBody = this.world.createRigidBody(a), this.chassisBody.userData = {
                name: "chassisBody"
            };
            let r;
            r = this.physicsManager.getSimpleColliderDesc(s).setTranslation(...s.position).setRotation(s.quaternion), this.world.createCollider(r, this.chassisBody), r = this.physicsManager.getSimpleColliderDesc(n).setTranslation(...n.position).setRotation(n.quaternion), this.world.createCollider(r, this.chassisBody), this.physicsManager.addGroup(this.chassisMesh, this.chassisBody, "chassisBody"), this.chassisMesh.userData.physics || (this.chassisMesh.userData.physics = {}), this.chassisMesh.userData.physics.body = this.chassisBody, this.controller = this.world.createVehicleController(this.chassisBody);
        }
        initBucket() {
            const e = new H({
                color: qi,
                transparent: Xi,
                opacity: Yi
            });
            this.bucketGroup = new Q;
            const t = new Y(nt, je, q), s = new k(t, e), o = new Y(nt, q, pe - q - me), n = new k(o, e), i = new Y(q, je - q, pe - q - me), a = new k(i, e), r = new Y(q, je - q, pe - q - me), c = new k(r, e);
            this.bucketGroup.add(s), this.bucketGroup.add(n), this.bucketGroup.add(a), this.bucketGroup.add(c), s.position.set(0, 0, 0), n.position.set(0, -2.3 / 2, (pe - me) / 2), a.position.set((nt - q) / 2, q / 2, (pe - me) / 2), c.position.set(-2.3 / 2, q / 2, (pe - me) / 2), this.bucketGroup.position.copy(this.chassisMesh.position), this.bucketGroup.translateX(0), this.bucketGroup.translateY((je + be.y) / 2), this.bucketGroup.translateZ(-(pe - q - We.z) / 2 + me), this.sceneManager.addToScene(this.bucketGroup);
            const l = U.dynamic().setTranslation(...this.bucketGroup.position).setRotation(this.bucketGroup.quaternion);
            this.bucketBody = this.world.createRigidBody(l), this.bucketBody.userData = {
                name: "bucketBody"
            };
            let h;
            h = this.physicsManager.getSimpleColliderDesc(s).setTranslation(...s.position).setRotation(s.quaternion).setMass(.1), this.world.createCollider(h, this.bucketBody), h = this.physicsManager.getSimpleColliderDesc(n).setTranslation(...n.position).setRotation(n.quaternion).setMass(.1), this.world.createCollider(h, this.bucketBody), h = this.physicsManager.getSimpleColliderDesc(a).setTranslation(...a.position).setRotation(a.quaternion).setMass(.1), this.world.createCollider(h, this.bucketBody), h = this.physicsManager.getSimpleColliderDesc(c).setTranslation(...c.position).setRotation(c.quaternion).setMass(.1), this.world.createCollider(h, this.bucketBody);
            const u = this.chassisMesh.getObjectByName("pivot"), p = u.getWorldPosition(new m), f = this.bucketGroup.getWorldPosition(new m), _ = [
                p.x - f.x,
                p.y - f.y,
                p.z - f.z
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
            this.wheels = [], Qi.forEach((e, t)=>{
                this.addWheel(t, e);
            }), this.controller.setWheelSteering(0, Math.PI / 4), this.controller.setWheelSteering(1, Math.PI / 4);
        }
        addWheel(e, t) {
            const s = {
                radius: this.options.wheelRadius,
                width: this.options.wheelWidth,
                suspensionRestLength: Gi,
                position: new m(t.x, t.y, t.z),
                direction: new D(...Object.values({
                    x: 0,
                    y: -1,
                    z: 0
                })),
                axle: new D(...Object.values({
                    x: -1,
                    y: 0,
                    z: 0
                }))
            };
            this.controller.addWheel(s.position, s.direction, s.axle, s.suspensionRestLength, s.radius), this.controller.setWheelSuspensionStiffness(e, Oi), this.controller.setWheelFrictionSlip(e, Ni), this.controller.setWheelSteering(e, t.z < 0);
            const o = new $(s.radius, s.radius, s.width, 16);
            o.rotateZ(Math.PI * .5);
            const n = new k(o, new H({
                color: Hi,
                transparent: Vi,
                opacity: Ki
            }));
            n.castShadow = !0, n.position.copy(t), this.wheels.push(n), this.chassisMesh.add(n);
        }
        updateController(e) {
            if (this.movement = e, this.movement.reset) {
                this.chassisBody.setTranslation(this.spawnPos, !0), this.chassisBody.setRotation(new we(0, 0, 0, 1), !0), this.chassisBody.setLinvel(new D(0, 0, 0), !0), this.chassisBody.setAngvel(new D(0, 0, 0), !0), this.movement.accelerateForce.value = 0, this.movement.brakeForce.value = 0, this.movement.reset = !1;
                return;
            }
            let t = 0;
            this.movement.forward < 0 ? (t = this.movement.accelerateForce.value - this.movement.accelerateForce.step, t < this.movement.accelerateForce.min && (t = this.movement.accelerateForce.min)) : this.movement.forward > 0 ? (t = this.movement.accelerateForce.value + this.movement.accelerateForce.step, t > this.movement.accelerateForce.max && (t = this.movement.accelerateForce.max)) : this.chassisBody.isSleeping() && this.chassisBody.wakeUp(), this.movement.accelerateForce.value = t;
            let s = 0;
            this.movement.brake > 0 && (s = this.movement.brakeForce.value + this.movement.brakeForce.step, s > this.movement.brakeForce.max && (s = this.movement.brakeForce.max)), this.movement.brakeForce.value = s;
            const o = t;
            this.controller.setWheelEngineForce(0, o), this.controller.setWheelEngineForce(1, o);
            const n = this.controller.wheelSteering(0), i = this.movement.right, a = Math.PI / 4, r = G.lerp(n, a * i, .25);
            this.controller.setWheelSteering(0, r), this.controller.setWheelSteering(1, r);
            const c = this.movement.brake * s;
            this.controller.setWheelBrake(0, c), this.controller.setWheelBrake(1, c), this.controller.setWheelBrake(2, c), this.controller.setWheelBrake(3, c), this.updateBucket();
        }
        updateBucket() {
            const e = Math.PI / 8, t = 5e5, o = -(this.movement.appendixUp || 0) * e;
            this.bucketJoint.configureMotorVelocity(o, t);
        }
        updateWheels() {
            if (this.controller === void 0) return;
            const e = new F, t = new F, s = new m(0, 1, 0);
            this.wheels.forEach((o, n)=>{
                const i = this.controller.wheelAxleCs(n), a = this.controller.wheelChassisConnectionPointCs(n).y || 0, r = this.controller.wheelSuspensionLength(n) || 0, c = this.controller.wheelSteering(n) || 0, l = this.controller.wheelRotation(n) || 0;
                o.position.y = a - r, e.setFromAxisAngle(s, c), t.setFromAxisAngle(i, l), o.quaternion.multiplyQuaternions(e, t);
            });
        }
    }
    const ss = "/Simulador-de-estacionamento/models", it = {
        x: 49,
        y: 2,
        z: 49
    }, Se = {
        x: 1 / 3,
        y: 1 / 3,
        z: 1 / 3
    }, rt = {
        x: it.x * Se.x,
        y: it.y * Se.y,
        z: it.z * Se.z
    };
    function at(d) {
        const e = Math.round(d * 10) / 10;
        return e === 1.6 || e === -4.7 ? Math.PI / 2 : e === 3.1 || e === -3.1 ? Math.PI : e === 4.7 || e === -1.6 ? 3 * Math.PI / 2 : e === -1.6 ? -Math.PI / 2 : e === -3.1 ? -Math.PI : e === -4.7 ? -(3 * Math.PI) / 2 : d;
    }
    class er {
        constructor(){
            this.loader = new ws, this.dracoLoader = new Lo, this.modelCache = new Map, this.assets = {
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
            return async (t, s, o)=>{
                if (!this.modelCache.has(e)) {
                    const a = await this.loader.loadAsync(`${ss}/${e}`);
                    console.log("Loaded model- glb:", a);
                    const r = a.scene;
                    r.matrixAutoUpdate = !0, this.modelCache.set(e, r);
                }
                const n = this.modelCache.get(e).clone();
                n.scale.set(Se.x, Se.y, Se.z), n.position.set(t * rt.x, s * rt.y, o * rt.z);
                const i = n.getObjectByName("tar");
                return i ? console.log('Mesh chamada "tar" encontrada:', i) : console.log('Nenhuma mesh chamada "tar" encontrada.'), n;
            };
        }
        _loadGLTF(e) {
            return async (t, s, o)=>{
                if (!this.modelCache.has(e)) {
                    const i = await this.loader.loadAsync(`${ss}/${e}`);
                    console.log("Loaded model- glb:", i);
                    const a = i.scene;
                    a.matrixAutoUpdate = !0, this.modelCache.set(e, a);
                }
                const n = this.modelCache.get(e).clone();
                return n.position.set(t, s, o), n;
            };
        }
        _makePrimitive(e) {
            return async (t, s, o)=>{
                const n = e(), i = new le({
                    color: 8421504
                }), a = new k(n, i);
                return a.position.set(t, s, o), a;
            };
        }
        async _makeTree(e, t, s) {
            const n = [
                {
                    geo: new $(.5, .5, 2),
                    pos: new m(e, 1, t)
                },
                {
                    geo: new vt(1),
                    pos: new m(e, 3, t)
                }
            ].map(({ geo: r, pos: c })=>{
                const l = r.clone();
                return l.applyMatrix4(new K().makeTranslation(c.x, c.y, c.z)), l;
            }), i = Do(n), a = new k(i, new le({
                color: 9127187
            }));
            return a.position.set(e, t, s), a;
        }
        async _makeTrafficLight(e, t, s) {
            const o = new Y(.5, 1, .5), n = new le({
                color: 16711680
            }), i = new k(o, n);
            return i.position.set(e, t, s), i;
        }
        async createAssetInstance(e, t, s, o, n = {
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
            const r = await a(t, s, o);
            return n.x = at(n.x), n.y = at(n.y), n.z = at(n.z), r.rotation.x = n.x, r.rotation.y = n.y, r.rotation.z = n.z, console.log("instance rotation and position", r.rotation, r.position), r.userData || (r.userData = {}), r;
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
            const o = {
                x: G.degToRad(t.x),
                y: G.degToRad(t.y),
                z: G.degToRad(t.z)
            }, n = {
                chassisPosition: new m(e.x, e.y, e.z),
                chassisRotation: new Pe(o.x, o.y, o.z, "XYZ"),
                ...s
            };
            console.log("options", n);
            const i = new Ti(this.sm.sceneGraph, this.sm, this.pm.world, this.pm, n, this.pm.rapierDebugRender);
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
            const o = {
                x: G.degToRad(t.x),
                y: G.degToRad(t.y),
                z: G.degToRad(t.z)
            }, n = {
                chassisPosition: new m(e.x, e.y, e.z),
                chassisRotation: new Pe(o.x, o.y, o.z, "XYZ"),
                ...s
            };
            console.log("options", n);
            const i = new Kn(this.sm.sceneGraph, this.sm, this.pm.world, this.pm, n, this.pm.rapierDebugRender);
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
            const o = {
                x: G.degToRad(t.x),
                y: G.degToRad(t.y),
                z: G.degToRad(t.z)
            }, n = {
                chassisPosition: new m(e.x, e.y, e.z),
                chassisRotation: new Pe(o.x, o.y, o.z, "XYZ"),
                ...s
            };
            console.log("options", n);
            const i = new ai(this.sm.sceneGraph, this.sm, this.pm.world, this.pm, n, this.pm.rapierDebugRender);
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
            const o = {
                x: G.degToRad(t.x),
                y: G.degToRad(t.y),
                z: G.degToRad(t.z)
            }, n = {
                chassisPosition: new m(e.x, e.y, e.z),
                chassisRotation: new Pe(o.x, o.y, o.z, "XYZ"),
                ...s
            };
            console.log("options", n);
            const i = new Fi(this.sm.sceneGraph, this.sm, this.pm.world, this.pm, n, this.pm.rapierDebugRender);
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
            const o = {
                x: G.degToRad(t.x),
                y: G.degToRad(t.y),
                z: G.degToRad(t.z)
            }, n = {
                chassisPosition: new m(e.x, e.y, e.z),
                chassisRotation: new Pe(o.x, o.y, o.z, "XYZ"),
                ...s
            };
            console.log("options", n);
            const i = new Ji(this.sm.sceneGraph, this.sm, this.pm.world, this.pm, n, this.pm.rapierDebugRender);
            return this.vm.addVehicle(i), i;
        }
        addGroundColliders(e) {
            const t = U.fixed();
            t.setTranslation(0, 0, 0);
            const s = this.pm.world.createRigidBody(t);
            s.userData = {
                name: "ground"
            };
            const o = X.cuboid(80, .5, 48).setActiveEvents(po.COLLISION_EVENTS);
            this.pm.world.createCollider(o, s), this.pm.addMesh(e, s, "ground");
        }
    }
    const fe = new er;
    function ct(d, e, t, s, o, n, i, a, r) {
        let c, l = [];
        const h = new K, u = new m, p = new F, f = new m(1, 1, 1), _ = new vt(n, 3, 4), g = new Ae({
            color: 7556401
        }), T = new k(_, g);
        c = new bt(_, g, o), c.castShadow = !0, c.receiveShadow = !0, c.instanceMatrix.setUsage(fs), d.addToScene(c);
        for(let v = 0; v < o; v++){
            const w = t.x + (Math.random() - .5) * s.x, x = t.y + (Math.random() - .5) * s.y, b = t.z + (Math.random() - .5) * s.z, E = U.dynamic().setTranslation(w, x, b), R = e.world.createRigidBody(E), y = e.getConvexMeshColliderDesc(T);
            y.setRestitution(a), y.setMass(i), y.setFriction(r), e.world.createCollider(y, R), l.push(R);
            const M = R.translation(), A = R.rotation();
            u.set(M.x, M.y, M.z), p.set(A.x, A.y, A.z, A.w), h.compose(u, p, f), c.setMatrixAt(v, h);
        }
        return e.addInstancedMesh(c, l), c;
    }
    const os = new ys, tr = new m(0, -1, 0);
    function sr(d, e, t, s, o = !1) {
        const n = new m(d, t, e);
        os.set(n, tr);
        const i = [];
        s.traverse((u)=>{
            u.isMesh && (o || u.visible) && i.push(u);
        });
        const a = os.intersectObjects(i, !0);
        if (a.length === 0) return null;
        const r = a[0], c = r.object, l = r.point.y, h = typeof r.instanceId == "number" ? r.instanceId : null;
        return {
            mesh: c,
            instanceId: h,
            height: l
        };
    }
    function or(d, e) {
        return new m(d.x + (Math.random() - .5) * e.x, d.y + (Math.random() - .5) * e.y, d.z + (Math.random() - .5) * e.z);
    }
    async function ns(d, e, t, s, o, n) {
        let i, a, r;
        switch(n){
            case "1":
                r = 30, i = new $(.2, 5, r, 8), a = new Ae({
                    color: 1749088
                });
                break;
            case "2":
                r = 15, i = new $(.3, 3, r, 8), a = new Ae({
                    color: 716928
                });
                break;
            default:
                i = new $(.4, .4, 1, 8), a = new Ae({
                    color: 2789472
                });
                break;
        }
        const c = new k(i, a), l = new bt(i, a, o);
        l.name = n + "_trees", l.castShadow = !0, l.receiveShadow = !0, l.instanceMatrix.setUsage(fs), d.addToScene(l);
        for(let h = 0; h < o; h++){
            let u, p = !1;
            for(; !p;){
                u = or(t, s);
                const b = sr(u.x, u.z, 30, d.sceneGraph);
                b && b.mesh.name === "terrain" && (console.log("before r_position", u), u.y = b.height + r / 2, p = !0, console.log("after r_position", u));
            }
            const f = U.fixed().setTranslation(u.x, u.y, u.z), _ = e.world.createRigidBody(f), g = e.getConvexMeshColliderDesc(c);
            e.world.createCollider(g, _);
            const T = new m(u.x, u.y, u.z), v = new F(0, 0, 0, 1), w = new m(1, 1, 1), x = new K;
            x.compose(T, v, w), l.setMatrixAt(h, x);
        }
        return l;
    }
    class nr {
        physicsManager;
        constructor(e, t){
            this.physicsManager = t, this.sceneManager = e, this.mapGroup = new Q, this.mapGroup.name = "mapGroup", this.terrainGroup = new Q, this.terrainGroup.name = "terrainGroup", this.roadGroup = new Q, this.roadGroup.name = "roadGroup", this.objectsGroup = new Q, this.objectsGroup.name = "objectsGroup", this.obstaclesGroup = new Q, this.obstaclesGroup.name = "obstaclesGroup";
        }
        async load(e, t, s) {
            this.mapGroup.add(await this.spawnGround(e.ground_tiles)), this.sceneManager.addToGround(this.mapGroup), await this.spawnObjects(), await this.spawnObtacles(), await this.spawnVehicles(t);
        }
        async spawnGround(e) {
            const t = new ie;
            t.name = "ground";
            for (const n of e){
                const i = await fe.createAssetInstance(n.type, n.position.x, n.position.y, n.position.z, n.rotation);
                if (i) {
                    const a = i.getObjectByName("Node_0"), r = i.getObjectByName("Node_0001");
                    let c;
                    r ? (c = r.quaternion, r.position) : (c = a.quaternion, a.position), i.updateMatrixWorld, i.name = n.type;
                    let l = U.fixed();
                    l = l.setTranslation(...i.position), l = l.setRotation(i.quaternion);
                    const h = this.physicsManager.world.createRigidBody(l), u = 1 / 2 * 1 / 3, p = X.cuboid(49 * u, 49 * u, 1 * u);
                    p.setRotation(c), p.setTranslation(0, .25, 0), this.physicsManager.world.createCollider(p, h), h.userData = {
                        name: n.type
                    }, i.traverse((f)=>{
                        f.isMesh && (f.receiveShadow = !0, f.updateMatrixWorld);
                    }), t.add(i);
                }
            }
            const s = await Mn(this.physicsManager, this.sceneManager);
            s.name = "terrain", this.mapGroup.add(s), this.sceneManager.addToScene(s);
            const o = await En(this.physicsManager.world, this.sceneManager);
            return this.sceneManager.addToScene(o), t;
        }
        async spawnObjects(e) {
            ns(this.sceneManager, this.physicsManager, new m(0, 0, 0), new m(1300, 0, 1300), 40, "1"), ns(this.sceneManager, this.physicsManager, new m(0, 0, 0), new m(1300, 0, 1300), 40, "2");
        }
        async spawnObtacles(e) {
            ct(this.sceneManager, this.physicsManager, new m(5, 5, -7), new m(.5, .5, 2), 10, .5, .1, 0, .5), ct(this.sceneManager, this.physicsManager, new m(5, 5, -7), new m(.5, .5, 2), 20, .4, .1, 0, .5), ct(this.sceneManager, this.physicsManager, new m(5, 5, -7), new m(.5, .5, 2), 30, .3, .1, 0, .5);
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
    const Ve = mo(), lt = new m(-400, -12, -400);
    class ir {
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
                (t.chassisMesh.position.y < lt.y || t.chassisMesh.position.x < lt.x || t.chassisMesh.position.z < lt.z) && (t.movement.reset = !0, t.updateController(t.movement)), t.controller.updateVehicle(e), t.updateWheels();
            }), !this._hasEmitted && this._checkAllParked() && (this._hasEmitted = !0, Ve.emit("allParked", {
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
    const rr = {
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
    }, ar = {
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
                    type: "road_turn_left",
                    position: {
                        x: 5,
                        y: 0,
                        z: 5
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
                    type: "road",
                    position: {
                        x: 5,
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
                        x: 5,
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
                        x: 5,
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
                        x: 5,
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
                    type: "road_junction_left",
                    position: {
                        x: 5,
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
                    type: "road",
                    position: {
                        x: 5,
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
                        x: 5,
                        y: 0,
                        z: -2
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
                        x: 5,
                        y: 0,
                        z: -3
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
                        x: 5,
                        y: 0,
                        z: -4
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
                        x: 5,
                        y: 0,
                        z: -5
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
                    type: "road",
                    position: {
                        x: 4,
                        y: 0,
                        z: 5
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
                        x: 4,
                        y: 0,
                        z: 0
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
                        x: 4,
                        y: 0,
                        z: -5
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
                        x: 3,
                        y: 0,
                        z: 5
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
                        x: 3,
                        y: 0,
                        z: 1
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
                    type: "road_junction_left",
                    position: {
                        x: 3,
                        y: 0,
                        z: 0
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
                        x: 3,
                        y: 0,
                        z: -5
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
                        x: 2,
                        y: 0,
                        z: 5
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
                        x: 2,
                        y: 0,
                        z: 0
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
                        x: 2,
                        y: 0,
                        z: -5
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
                        x: 1,
                        y: 0,
                        z: 5
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
                        x: 1,
                        y: 0,
                        z: 0
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
                        x: 1,
                        y: 0,
                        z: -3
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
                    type: "road",
                    position: {
                        x: 1,
                        y: 0,
                        z: -5
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
                    type: "road_junction_right",
                    position: {
                        x: 0,
                        y: 0,
                        z: 5
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
                    type: "road_junction_left",
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
                    type: "road_junction_left_right",
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
                    type: "road",
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
                        z: -2
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
                        z: -3
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
                        z: -4
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
                        z: -5
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
                    type: "road",
                    position: {
                        x: -1,
                        y: 0,
                        z: 5
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
                        x: -1,
                        y: 0,
                        z: 0
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
                        x: -1,
                        y: 0,
                        z: -5
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
                        z: 5
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
                        z: 0
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
                        z: -5
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
                        z: 5
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
                    type: "road_junction_right",
                    position: {
                        x: -3,
                        y: 0,
                        z: 0
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
                        x: -3,
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
                        x: -3,
                        y: 0,
                        z: -5
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
                        z: 5
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
                        z: 0
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
                        z: -5
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
                    type: "road_turn_right",
                    position: {
                        x: -5,
                        y: 0,
                        z: 5
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
                        x: -5,
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
                        x: -5,
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
                        x: -5,
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
                        x: -5,
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
                        x: -5,
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
                    type: "road",
                    position: {
                        x: -5,
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
                        x: -5,
                        y: 0,
                        z: -2
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
                        x: -5,
                        y: 0,
                        z: -3
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
                        x: -5,
                        y: 0,
                        z: -4
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
                        x: -5,
                        y: 0,
                        z: -5
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
                }
            ]
        }
    };
    let is, Le, ce;
    document.querySelector("canvas.webgl");
    class cr {
        constructor(e = [
            "1"
        ]){
            this.levelsIDs = e, this.currentLevel = null, this.currentLevelIndex = 0, this._lastTime = 0, this._accumulator = 0, this._fixedDt = 1 / gn, this._rafId = null, this.raycaster = new ys, this.pointer = new j;
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
            for(this._lastTime = t, s = Math.min(s, .25), this._accumulator += s; this._accumulator >= this._fixedDt;)is.step(this._fixedDt), ce.update(this._fixedDt), this.currentLevel.rapierDebugRender, this._accumulator -= this._fixedDt;
            ce.activeVehicle && Le.setFollowTarget(ce.activeVehicle.follow_target), Le.updateCamera(), Le.renderScene(), this.currentLevel.rapierDebugRender && this.currentLevel.rapierDebugRender.update(), this._rafId = requestAnimationFrame(this._loop);
        };
        async nextLevel() {
            if (this.currentLevelIndex++, this.currentLevelIndex >= this.levelsIDs.length) {
                console.log("FIM DE JOGO");
                return;
            }
            await this._loadLevel(this.currentLevelIndex);
        }
        async _loadLevel(e) {
            this.currentLevel && this.currentLevel.dispose(), this.currentLevel = new lr(this.levelsIDs[e]), await this.currentLevel.init(), Le = this.currentLevel.sm, is = this.currentLevel.pm, this.currentLevel.mm, ce = this.currentLevel.vm, ce = this.currentLevel.vm, this._off && this._off(), this._off = Ve.on("objectiveComplete", ()=>this.nextLevel());
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
            this.pointer.x = (e.clientX - t.left) / t.width * 2 - 1, this.pointer.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.pointer, Le.camera);
            const s = this.raycaster.intersectObjects(ce.vehicleMeshes, !0);
            if (s.length > 0) {
                const o = s[0].object, n = ce.vehicleMeshes.findIndex((i)=>i === o || i.children.includes(o));
                n !== -1 && (ce.setActiveVehicle(n), this.currentLevel.sm.enableFollow(), console.log("Veículo selecionado:", n));
            }
        };
    }
    class lr {
        constructor(e){
            this.levelID = e, this.sm = new yn, this.pm = new xn, this.mm = new nr(this.sm, this.pm), this.vm = new ir, fe.updateLevel(this.pm, this.sm, this.vm), this.conditions = {
                allParked: !1
            }, this._offFns = [];
        }
        async init() {
            const e = rr[this.levelID], t = ar[e.mapID], s = e.vehiclesSpawns;
            console.log("vehiclesSpawns", s);
            const o = e.objectsSpawn;
            console.log("levelData", e), await this.mm.load(t, s, o);
            this._offFns.push(Ve.on("allParked", ()=>this._onCondition("allParked")));
        }
        _onCondition(e) {
            this.conditions[e] = !0, this._checkComplete();
        }
        _checkComplete() {
            Object.values(this.conditions).every((e)=>e === !0) && Ve.emit("objectiveComplete", {
                level: this.levelName
            });
        }
        dispose() {
            this._offFns.forEach((e)=>e()), this._offFns = [], this.sm.dispose(), this.pm.dispose(), this.mm.dispose(), this.vm.dispose();
        }
    }
    const hr = new cr([
        "1"
    ]);
    hr.start();
});
