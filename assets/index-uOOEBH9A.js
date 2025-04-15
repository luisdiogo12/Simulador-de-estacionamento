import { C as et, V as x, M as V, T as K, Q as z, S as be, a as S, R as tt, P as st, b as ve, r as nt, c as it, d as He, W as ot, e as rt, A as at, f as Be, g as ct, E as lt, h as ee, i as q, j as we, k as ht, B as re, L as ze, l as Ke, m as ut, n as fe, o as Ve, p as X, q as Xe, s as Q, F as ie, t as I, u as H, v as O, w as v, x as dt, D as pt, I as ft, y as J, z as mt, O as oe, G as gt, H as yt, J as _t, K as Ye, N as Tt, U as At, X as bt, Y as me, Z as We, _ as ge, $ as wt, a0 as Et, a1 as xt, a2 as ce, a3 as qe, a4 as Rt, a5 as F, a6 as Mt, a7 as St, a8 as ne, a9 as Lt, aa as Pt, ab as Dt, ac as $, ad as Ot, ae as It, af as Nt, ag as Ct, ah as kt, ai as Ze, aj as Gt, ak as Ee, al as xe, am as Re, an as Me, ao as ye, ap as Ut, aq as jt, ar as Ft, as as vt, at as Se, au as Ht, av as Bt, aw as te, __tla as __tla_0 } from "./vendor-TsH2vnnZ.js";
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
        for (const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);
        new MutationObserver((s)=>{
            for (const i of s)if (i.type === "childList") for (const o of i.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function t(s) {
            const i = {};
            return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
        }
        function n(s) {
            if (s.ep) return;
            s.ep = !0;
            const i = t(s);
            fetch(s.href, i);
        }
    })();
    const Le = {
        type: "change"
    }, Ae = {
        type: "start"
    }, Qe = {
        type: "end"
    }, se = new tt, Pe = new st, zt = Math.cos(70 * ve.DEG2RAD), R = new x, M = 2 * Math.PI, b = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6
    }, le = 1e-6;
    class Kt extends et {
        constructor(e, t = null){
            super(e, t), this.state = b.NONE, this.enabled = !0, this.target = new x, this.cursor = new x, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
                LEFT: "ArrowLeft",
                UP: "ArrowUp",
                RIGHT: "ArrowRight",
                BOTTOM: "ArrowDown"
            }, this.mouseButtons = {
                LEFT: V.ROTATE,
                MIDDLE: V.DOLLY,
                RIGHT: V.PAN
            }, this.touches = {
                ONE: K.ROTATE,
                TWO: K.DOLLY_PAN
            }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new x, this._lastQuaternion = new z, this._lastTargetPosition = new x, this._quat = new z().setFromUnitVectors(e.up, new x(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new be, this._sphericalDelta = new be, this._scale = 1, this._panOffset = new x, this._rotateStart = new S, this._rotateEnd = new S, this._rotateDelta = new S, this._panStart = new S, this._panEnd = new S, this._panDelta = new S, this._dollyStart = new S, this._dollyEnd = new S, this._dollyDelta = new S, this._dollyDirection = new x, this._mouse = new S, this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = Xt.bind(this), this._onPointerDown = Vt.bind(this), this._onPointerUp = Yt.bind(this), this._onContextMenu = es.bind(this), this._onMouseWheel = Zt.bind(this), this._onKeyDown = Qt.bind(this), this._onTouchStart = $t.bind(this), this._onTouchMove = Jt.bind(this), this._onMouseDown = Wt.bind(this), this._onMouseMove = qt.bind(this), this._interceptControlDown = ts.bind(this), this._interceptControlUp = ss.bind(this), this.domElement !== null && this.connect(), this.update();
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
            this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Le), this.update(), this.state = b.NONE;
        }
        update(e = null) {
            const t = this.object.position;
            R.copy(t).sub(this.target), R.applyQuaternion(this._quat), this._spherical.setFromVector3(R), this.autoRotate && this.state === b.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
            let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
            isFinite(n) && isFinite(s) && (n < -Math.PI ? n += M : n > Math.PI && (n -= M), s < -Math.PI ? s += M : s > Math.PI && (s -= M), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
            let i = !1;
            if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
            else {
                const o = this._spherical.radius;
                this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = o != this._spherical.radius;
            }
            if (R.setFromSpherical(this._spherical), R.applyQuaternion(this._quatInverse), t.copy(this.target).add(R), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
                let o = null;
                if (this.object.isPerspectiveCamera) {
                    const a = R.length();
                    o = this._clampDistance(a * this._scale);
                    const r = a - o;
                    this.object.position.addScaledVector(this._dollyDirection, r), this.object.updateMatrixWorld(), i = !!r;
                } else if (this.object.isOrthographicCamera) {
                    const a = new x(this._mouse.x, this._mouse.y, 0);
                    a.unproject(this.object);
                    const r = this.object.zoom;
                    this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = r !== this.object.zoom;
                    const l = new x(this._mouse.x, this._mouse.y, 0);
                    l.unproject(this.object), this.object.position.sub(l).add(a), this.object.updateMatrixWorld(), o = R.length();
                } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
                o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (se.origin.copy(this.object.position), se.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(se.direction)) < zt ? this.object.lookAt(this.target) : (Pe.setFromNormalAndCoplanarPoint(this.object.up, this.target), se.intersectPlane(Pe, this.target))));
            } else if (this.object.isOrthographicCamera) {
                const o = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
            }
            return this._scale = 1, this._performCursorZoom = !1, i || this._lastPosition.distanceToSquared(this.object.position) > le || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > le || this._lastTargetPosition.distanceToSquared(this.target) > le ? (this.dispatchEvent(Le), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
        }
        _getAutoRotationAngle(e) {
            return e !== null ? M / 60 * this.autoRotateSpeed * e : M / 60 / 60 * this.autoRotateSpeed;
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
            R.setFromMatrixColumn(t, 0), R.multiplyScalar(-e), this._panOffset.add(R);
        }
        _panUp(e, t) {
            this.screenSpacePanning === !0 ? R.setFromMatrixColumn(t, 1) : (R.setFromMatrixColumn(t, 0), R.crossVectors(this.object.up, R)), R.multiplyScalar(e), this._panOffset.add(R);
        }
        _pan(e, t) {
            const n = this.domElement;
            if (this.object.isPerspectiveCamera) {
                const s = this.object.position;
                R.copy(s).sub(this.target);
                let i = R.length();
                i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / n.clientHeight, this.object.matrix), this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
            } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
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
            const n = this.domElement.getBoundingClientRect(), s = e - n.left, i = t - n.top, o = n.width, a = n.height;
            this._mouse.x = s / o * 2 - 1, this._mouse.y = -(i / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
            this._rotateLeft(M * this._rotateDelta.x / t.clientHeight), this._rotateUp(M * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(M * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
                    break;
                case this.keys.BOTTOM:
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-M * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
                    break;
                case this.keys.LEFT:
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(M * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
                    break;
                case this.keys.RIGHT:
                    e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-M * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
                    break;
            }
            t && (e.preventDefault(), this.update());
        }
        _handleTouchStartRotate(e) {
            if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
            else {
                const t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), s = .5 * (e.pageY + t.y);
                this._rotateStart.set(n, s);
            }
        }
        _handleTouchStartPan(e) {
            if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
            else {
                const t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), s = .5 * (e.pageY + t.y);
                this._panStart.set(n, s);
            }
        }
        _handleTouchStartDolly(e) {
            const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, i = Math.sqrt(n * n + s * s);
            this._dollyStart.set(0, i);
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
                const n = this._getSecondPointerPosition(e), s = .5 * (e.pageX + n.x), i = .5 * (e.pageY + n.y);
                this._rotateEnd.set(s, i);
            }
            this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
            const t = this.domElement;
            this._rotateLeft(M * this._rotateDelta.x / t.clientHeight), this._rotateUp(M * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
        }
        _handleTouchMovePan(e) {
            if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
            else {
                const t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), s = .5 * (e.pageY + t.y);
                this._panEnd.set(n, s);
            }
            this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
        }
        _handleTouchMoveDolly(e) {
            const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, i = Math.sqrt(n * n + s * s);
            this._dollyEnd.set(0, i), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
            const o = (e.pageX + t.x) * .5, a = (e.pageY + t.y) * .5;
            this._updateZoomParameters(o, a);
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
            t === void 0 && (t = new S, this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
        }
        _getSecondPointerPosition(e) {
            const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
            return this._pointerPositions[t];
        }
        _customWheelEvent(e) {
            const t = e.deltaMode, n = {
                clientX: e.clientX,
                clientY: e.clientY,
                deltaY: e.deltaY
            };
            switch(t){
                case 1:
                    n.deltaY *= 16;
                    break;
                case 2:
                    n.deltaY *= 100;
                    break;
            }
            return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
        }
    }
    function Vt(c) {
        this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(c.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(c) && (this._addPointer(c), c.pointerType === "touch" ? this._onTouchStart(c) : this._onMouseDown(c)));
    }
    function Xt(c) {
        this.enabled !== !1 && (c.pointerType === "touch" ? this._onTouchMove(c) : this._onMouseMove(c));
    }
    function Yt(c) {
        switch(this._removePointer(c), this._pointers.length){
            case 0:
                this.domElement.releasePointerCapture(c.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Qe), this.state = b.NONE;
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
    function Wt(c) {
        let e;
        switch(c.button){
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
            case V.DOLLY:
                if (this.enableZoom === !1) return;
                this._handleMouseDownDolly(c), this.state = b.DOLLY;
                break;
            case V.ROTATE:
                if (c.ctrlKey || c.metaKey || c.shiftKey) {
                    if (this.enablePan === !1) return;
                    this._handleMouseDownPan(c), this.state = b.PAN;
                } else {
                    if (this.enableRotate === !1) return;
                    this._handleMouseDownRotate(c), this.state = b.ROTATE;
                }
                break;
            case V.PAN:
                if (c.ctrlKey || c.metaKey || c.shiftKey) {
                    if (this.enableRotate === !1) return;
                    this._handleMouseDownRotate(c), this.state = b.ROTATE;
                } else {
                    if (this.enablePan === !1) return;
                    this._handleMouseDownPan(c), this.state = b.PAN;
                }
                break;
            default:
                this.state = b.NONE;
        }
        this.state !== b.NONE && this.dispatchEvent(Ae);
    }
    function qt(c) {
        switch(this.state){
            case b.ROTATE:
                if (this.enableRotate === !1) return;
                this._handleMouseMoveRotate(c);
                break;
            case b.DOLLY:
                if (this.enableZoom === !1) return;
                this._handleMouseMoveDolly(c);
                break;
            case b.PAN:
                if (this.enablePan === !1) return;
                this._handleMouseMovePan(c);
                break;
        }
    }
    function Zt(c) {
        this.enabled === !1 || this.enableZoom === !1 || this.state !== b.NONE || (c.preventDefault(), this.dispatchEvent(Ae), this._handleMouseWheel(this._customWheelEvent(c)), this.dispatchEvent(Qe));
    }
    function Qt(c) {
        this.enabled !== !1 && this._handleKeyDown(c);
    }
    function $t(c) {
        switch(this._trackPointer(c), this._pointers.length){
            case 1:
                switch(this.touches.ONE){
                    case K.ROTATE:
                        if (this.enableRotate === !1) return;
                        this._handleTouchStartRotate(c), this.state = b.TOUCH_ROTATE;
                        break;
                    case K.PAN:
                        if (this.enablePan === !1) return;
                        this._handleTouchStartPan(c), this.state = b.TOUCH_PAN;
                        break;
                    default:
                        this.state = b.NONE;
                }
                break;
            case 2:
                switch(this.touches.TWO){
                    case K.DOLLY_PAN:
                        if (this.enableZoom === !1 && this.enablePan === !1) return;
                        this._handleTouchStartDollyPan(c), this.state = b.TOUCH_DOLLY_PAN;
                        break;
                    case K.DOLLY_ROTATE:
                        if (this.enableZoom === !1 && this.enableRotate === !1) return;
                        this._handleTouchStartDollyRotate(c), this.state = b.TOUCH_DOLLY_ROTATE;
                        break;
                    default:
                        this.state = b.NONE;
                }
                break;
            default:
                this.state = b.NONE;
        }
        this.state !== b.NONE && this.dispatchEvent(Ae);
    }
    function Jt(c) {
        switch(this._trackPointer(c), this.state){
            case b.TOUCH_ROTATE:
                if (this.enableRotate === !1) return;
                this._handleTouchMoveRotate(c), this.update();
                break;
            case b.TOUCH_PAN:
                if (this.enablePan === !1) return;
                this._handleTouchMovePan(c), this.update();
                break;
            case b.TOUCH_DOLLY_PAN:
                if (this.enableZoom === !1 && this.enablePan === !1) return;
                this._handleTouchMoveDollyPan(c), this.update();
                break;
            case b.TOUCH_DOLLY_ROTATE:
                if (this.enableZoom === !1 && this.enableRotate === !1) return;
                this._handleTouchMoveDollyRotate(c), this.update();
                break;
            default:
                this.state = b.NONE;
        }
    }
    function es(c) {
        this.enabled !== !1 && c.preventDefault();
    }
    function ts(c) {
        c.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
            passive: !0,
            capture: !0
        }));
    }
    function ss(c) {
        c.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
            passive: !0,
            capture: !0
        }));
    }
    nt();
    class ns {
        constructor(){
            this.sceneGraph = new it, this.objects = [], this.camera = this.createCamera(), this.renderer = this.createRenderer(), this.initLights(), this.controls = new Kt(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .05;
        }
        createCamera() {
            const t = window.innerWidth / window.innerHeight, n = .1, s = 1e3, i = new He(70, t, n, s);
            return i.position.set(0, 10, 15), i.lookAt(0, 0, 0), i;
        }
        createRenderer() {
            const e = document.querySelector("canvas.webgl"), t = new ot({
                canvas: e,
                antialias: !0,
                shadowMapEnabled: !0,
                shadowMapType: rt
            });
            return t.setPixelRatio(window.devicePixelRatio), t.setClearColor("rgb(255, 255, 150)", 1), t.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(t.domElement), t;
        }
        initLights() {
            const e = new at("rgb(255, 255, 255)", .2);
            this.sceneGraph.add(e);
            const t = new Be("rgb(255, 255, 255)", 40);
            t.position.set(-5, 8, 0), t.castShadow = !0, t.shadow.mapSize.width = 2048, t.shadow.mapSize.height = 2048, this.sceneGraph.add(t);
        }
        addToScene(e) {
            this.sceneGraph.add(e);
        }
        onWindowResize() {
            const e = window.innerWidth, t = window.innerHeight;
            this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
        }
    }
    const is = {
        x: 0,
        y: -9.81,
        z: 0
    };
    let De, Oe;
    class os {
        constructor(e){
            this.world = new ct(is), this.eventQueue = new lt(!0), this.sceneManager = e;
        }
        addGround(e, t = "fixed", n = "cuboid") {
            const s = ee.fixed();
            s.setTranslation(0, 0, 0);
            const i = this.world.createRigidBody(s), o = q.cuboid(80, .5, 48);
            o.setActiveEvents(we.COLLISION_EVENTS), this.world.createCollider(o, i), e.userData.physicsBody = i, e.userData.collisions = new Set;
        }
        addCar(e) {
            const t = new x, n = new z;
            e.getWorldPosition(t), e.getWorldQuaternion(n);
            const s = ee.dynamic();
            s.setTranslation(t.x, t.y, t.z), s.setRotation(n), s.setAdditionalMassProperties(1e3, {
                x: 0,
                y: 0,
                z: -4
            }, {
                x: 1453.3,
                y: 1666.7,
                z: 453.3
            }, {
                w: 1,
                x: 0,
                y: 0,
                z: 0
            });
            const i = this.world.createRigidBody(s), o = q.cuboid(4, 3.5, 8);
            o.setActiveEvents(we.COLLISION_EVENTS), o.setTranslation(0, 3, 0), o.setDensity(0), this.world.createCollider(o, i), e.userData.physicsBody = i, e.userData.collisions = new Set;
        }
        #e(e, t = "dynamic", n = "cuboid") {
            t === "fixed" ? ee.fixed() : ee.dynamic();
        }
        #t(e, t) {
            switch(e){
                case "sphere":
                    return q.ball(t.x);
                case "cylinder":
                    return q.cylinder(t.y, t.x);
                default:
                    return q.cuboid(t.x / 2, t.y / 2, t.z / 2);
            }
        }
        addConstraint(e) {}
        update() {
            this.world.step(this.eventQueue);
        }
        syncGraphics() {
            this.update(), this.sceneManager.sceneGraph.traverse((e)=>{
                if (e.userData.physicsBody) {
                    const t = e.userData.physicsBody;
                    if (t.bodyType() === ht.Fixed) return;
                    const n = t.translation(), s = new x(n.x, n.y, n.z);
                    e.parent.worldToLocal(s), e.position.copy(s);
                    const i = t.rotation(), o = new z(i.x, i.y, i.z, i.w), a = new z;
                    e.parent.getWorldQuaternion(a), a.invert(), e.quaternion.copy(a).multiply(o);
                }
            });
        }
        initDebugRenderer() {
            De = new re;
            const e = new ze({
                vertexColors: !0,
                linewidth: 10
            });
            Oe = new Ke(De, e), this.sceneManager.sceneGraph.add(Oe);
        }
    }
    function rs(c, e = !1) {
        const t = c[0].index !== null, n = new Set(Object.keys(c[0].attributes)), s = new Set(Object.keys(c[0].morphAttributes)), i = {}, o = {}, a = c[0].morphTargetsRelative, r = new re;
        let l = 0;
        for(let h = 0; h < c.length; ++h){
            const u = c[h];
            let d = 0;
            if (t !== (u.index !== null)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
            for(const p in u.attributes){
                if (!n.has(p)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + '. All geometries must have compatible attributes; make sure "' + p + '" attribute exists among all geometries, or in none of them.'), null;
                i[p] === void 0 && (i[p] = []), i[p].push(u.attributes[p]), d++;
            }
            if (d !== n.size) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". Make sure all geometries have the same number of attributes."), null;
            if (a !== u.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
            for(const p in u.morphAttributes){
                if (!s.has(p)) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ".  .morphAttributes must be consistent throughout all geometries."), null;
                o[p] === void 0 && (o[p] = []), o[p].push(u.morphAttributes[p]);
            }
            if (e) {
                let p;
                if (t) p = u.index.count;
                else if (u.attributes.position !== void 0) p = u.attributes.position.count;
                else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". The geometry must have either an index or a position attribute"), null;
                r.addGroup(l, p, h), l += p;
            }
        }
        if (t) {
            let h = 0;
            const u = [];
            for(let d = 0; d < c.length; ++d){
                const p = c[d].index;
                for(let f = 0; f < p.count; ++f)u.push(p.getX(f) + h);
                h += c[d].attributes.position.count;
            }
            r.setIndex(u);
        }
        for(const h in i){
            const u = Ie(i[h]);
            if (!u) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + h + " attribute."), null;
            r.setAttribute(h, u);
        }
        for(const h in o){
            const u = o[h][0].length;
            if (u === 0) break;
            r.morphAttributes = r.morphAttributes || {}, r.morphAttributes[h] = [];
            for(let d = 0; d < u; ++d){
                const p = [];
                for(let g = 0; g < o[h].length; ++g)p.push(o[h][g][d]);
                const f = Ie(p);
                if (!f) return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + h + " morphAttribute."), null;
                r.morphAttributes[h].push(f);
            }
        }
        return r;
    }
    function Ie(c) {
        let e, t, n, s = -1, i = 0;
        for(let l = 0; l < c.length; ++l){
            const h = c[l];
            if (e === void 0 && (e = h.array.constructor), e !== h.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
            if (t === void 0 && (t = h.itemSize), t !== h.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
            if (n === void 0 && (n = h.normalized), n !== h.normalized) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
            if (s === -1 && (s = h.gpuType), s !== h.gpuType) return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."), null;
            i += h.count * t;
        }
        const o = new e(i), a = new X(o, t, n);
        let r = 0;
        for(let l = 0; l < c.length; ++l){
            const h = c[l];
            if (h.isInterleavedBufferAttribute) {
                const u = r / t;
                for(let d = 0, p = h.count; d < p; d++)for(let f = 0; f < t; f++){
                    const g = h.getComponent(d, f);
                    a.setComponent(d + u, f, g);
                }
            } else o.set(h.array, r);
            r += h.count * t;
        }
        return s !== void 0 && (a.gpuType = s), a;
    }
    function Ne(c, e) {
        if (e === ut) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), c;
        if (e === fe || e === Ve) {
            let t = c.getIndex();
            if (t === null) {
                const o = [], a = c.getAttribute("position");
                if (a !== void 0) {
                    for(let r = 0; r < a.count; r++)o.push(r);
                    c.setIndex(o), t = c.getIndex();
                } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), c;
            }
            const n = t.count - 2, s = [];
            if (e === fe) for(let o = 1; o <= n; o++)s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
            else for(let o = 0; o < n; o++)o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
            s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
            const i = c.clone();
            return i.setIndex(s), i.clearGroups(), i;
        } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), c;
    }
    class as extends Xe {
        constructor(e){
            super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
                return new ds(t);
            }), this.register(function(t) {
                return new ps(t);
            }), this.register(function(t) {
                return new ws(t);
            }), this.register(function(t) {
                return new Es(t);
            }), this.register(function(t) {
                return new xs(t);
            }), this.register(function(t) {
                return new ms(t);
            }), this.register(function(t) {
                return new gs(t);
            }), this.register(function(t) {
                return new ys(t);
            }), this.register(function(t) {
                return new _s(t);
            }), this.register(function(t) {
                return new us(t);
            }), this.register(function(t) {
                return new Ts(t);
            }), this.register(function(t) {
                return new fs(t);
            }), this.register(function(t) {
                return new bs(t);
            }), this.register(function(t) {
                return new As(t);
            }), this.register(function(t) {
                return new ls(t);
            }), this.register(function(t) {
                return new Rs(t);
            }), this.register(function(t) {
                return new Ms(t);
            });
        }
        load(e, t, n, s) {
            const i = this;
            let o;
            if (this.resourcePath !== "") o = this.resourcePath;
            else if (this.path !== "") {
                const l = Q.extractUrlBase(e);
                o = Q.resolveURL(l, this.path);
            } else o = Q.extractUrlBase(e);
            this.manager.itemStart(e);
            const a = function(l) {
                s ? s(l) : console.error(l), i.manager.itemError(e), i.manager.itemEnd(e);
            }, r = new ie(this.manager);
            r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, function(l) {
                try {
                    i.parse(l, o, function(h) {
                        t(h), i.manager.itemEnd(e);
                    }, a);
                } catch (h) {
                    a(h);
                }
            }, n, a);
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
        parse(e, t, n, s) {
            let i;
            const o = {}, a = {}, r = new TextDecoder;
            if (typeof e == "string") i = JSON.parse(e);
            else if (e instanceof ArrayBuffer) if (r.decode(new Uint8Array(e, 0, 4)) === $e) {
                try {
                    o[_.KHR_BINARY_GLTF] = new Ss(e);
                } catch (u) {
                    s && s(u);
                    return;
                }
                i = JSON.parse(o[_.KHR_BINARY_GLTF].content);
            } else i = JSON.parse(r.decode(e));
            else i = e;
            if (i.asset === void 0 || i.asset.version[0] < 2) {
                s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                return;
            }
            const l = new vs(i, {
                path: t || this.resourcePath || "",
                crossOrigin: this.crossOrigin,
                requestHeader: this.requestHeader,
                manager: this.manager,
                ktx2Loader: this.ktx2Loader,
                meshoptDecoder: this.meshoptDecoder
            });
            l.fileLoader.setRequestHeader(this.requestHeader);
            for(let h = 0; h < this.pluginCallbacks.length; h++){
                const u = this.pluginCallbacks[h](l);
                u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, o[u.name] = !0;
            }
            if (i.extensionsUsed) for(let h = 0; h < i.extensionsUsed.length; ++h){
                const u = i.extensionsUsed[h], d = i.extensionsRequired || [];
                switch(u){
                    case _.KHR_MATERIALS_UNLIT:
                        o[u] = new hs;
                        break;
                    case _.KHR_DRACO_MESH_COMPRESSION:
                        o[u] = new Ls(i, this.dracoLoader);
                        break;
                    case _.KHR_TEXTURE_TRANSFORM:
                        o[u] = new Ps;
                        break;
                    case _.KHR_MESH_QUANTIZATION:
                        o[u] = new Ds;
                        break;
                    default:
                        d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
                }
            }
            l.setExtensions(o), l.setPlugins(a), l.parse(n, s);
        }
        parseAsync(e, t) {
            const n = this;
            return new Promise(function(s, i) {
                n.parse(e, t, s, i);
            });
        }
    }
    function cs() {
        let c = {};
        return {
            get: function(e) {
                return c[e];
            },
            add: function(e, t) {
                c[e] = t;
            },
            remove: function(e) {
                delete c[e];
            },
            removeAll: function() {
                c = {};
            }
        };
    }
    const _ = {
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
    class ls {
        constructor(e){
            this.parser = e, this.name = _.KHR_LIGHTS_PUNCTUAL, this.cache = {
                refs: {},
                uses: {}
            };
        }
        _markDefs() {
            const e = this.parser, t = this.parser.json.nodes || [];
            for(let n = 0, s = t.length; n < s; n++){
                const i = t[n];
                i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
            }
        }
        _loadLight(e) {
            const t = this.parser, n = "light:" + e;
            let s = t.cache.get(n);
            if (s) return s;
            const i = t.json, r = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
            let l;
            const h = new H(16777215);
            r.color !== void 0 && h.setRGB(r.color[0], r.color[1], r.color[2], O);
            const u = r.range !== void 0 ? r.range : 0;
            switch(r.type){
                case "directional":
                    l = new pt(h), l.target.position.set(0, 0, -1), l.add(l.target);
                    break;
                case "point":
                    l = new dt(h), l.distance = u;
                    break;
                case "spot":
                    l = new Be(h), l.distance = u, r.spot = r.spot || {}, r.spot.innerConeAngle = r.spot.innerConeAngle !== void 0 ? r.spot.innerConeAngle : 0, r.spot.outerConeAngle = r.spot.outerConeAngle !== void 0 ? r.spot.outerConeAngle : Math.PI / 4, l.angle = r.spot.outerConeAngle, l.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
                    break;
                default:
                    throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type);
            }
            return l.position.set(0, 0, 0), k(l, r), r.intensity !== void 0 && (l.intensity = r.intensity), l.name = t.createUniqueName(r.name || "light_" + e), s = Promise.resolve(l), t.cache.add(n, s), s;
        }
        getDependency(e, t) {
            if (e === "light") return this._loadLight(t);
        }
        createNodeAttachment(e) {
            const t = this, n = this.parser, i = n.json.nodes[e], a = (i.extensions && i.extensions[this.name] || {}).light;
            return a === void 0 ? null : this._loadLight(a).then(function(r) {
                return n._getNodeRef(t.cache, a, r);
            });
        }
    }
    class hs {
        constructor(){
            this.name = _.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
            return F;
        }
        extendParams(e, t, n) {
            const s = [];
            e.color = new H(1, 1, 1), e.opacity = 1;
            const i = t.pbrMetallicRoughness;
            if (i) {
                if (Array.isArray(i.baseColorFactor)) {
                    const o = i.baseColorFactor;
                    e.color.setRGB(o[0], o[1], o[2], O), e.opacity = o[3];
                }
                i.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", i.baseColorTexture, v));
            }
            return Promise.all(s);
        }
    }
    class us {
        constructor(e){
            this.parser = e, this.name = _.KHR_MATERIALS_EMISSIVE_STRENGTH;
        }
        extendMaterialParams(e, t) {
            const s = this.parser.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = s.extensions[this.name].emissiveStrength;
            return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
        }
    }
    class ds {
        constructor(e){
            this.parser = e, this.name = _.KHR_MATERIALS_CLEARCOAT;
        }
        getMaterialType(e) {
            const n = this.parser.json.materials[e];
            return !n.extensions || !n.extensions[this.name] ? null : I;
        }
        extendMaterialParams(e, t) {
            const n = this.parser, s = n.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = [], o = s.extensions[this.name];
            if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
                const a = o.clearcoatNormalTexture.scale;
                t.clearcoatNormalScale = new S(a, a);
            }
            return Promise.all(i);
        }
    }
    class ps {
        constructor(e){
            this.parser = e, this.name = _.KHR_MATERIALS_DISPERSION;
        }
        getMaterialType(e) {
            const n = this.parser.json.materials[e];
            return !n.extensions || !n.extensions[this.name] ? null : I;
        }
        extendMaterialParams(e, t) {
            const s = this.parser.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = s.extensions[this.name];
            return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
        }
    }
    class fs {
        constructor(e){
            this.parser = e, this.name = _.KHR_MATERIALS_IRIDESCENCE;
        }
        getMaterialType(e) {
            const n = this.parser.json.materials[e];
            return !n.extensions || !n.extensions[this.name] ? null : I;
        }
        extendMaterialParams(e, t) {
            const n = this.parser, s = n.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = [], o = s.extensions[this.name];
            return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [
                100,
                400
            ]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(i);
        }
    }
    class ms {
        constructor(e){
            this.parser = e, this.name = _.KHR_MATERIALS_SHEEN;
        }
        getMaterialType(e) {
            const n = this.parser.json.materials[e];
            return !n.extensions || !n.extensions[this.name] ? null : I;
        }
        extendMaterialParams(e, t) {
            const n = this.parser, s = n.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = [];
            t.sheenColor = new H(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
            const o = s.extensions[this.name];
            if (o.sheenColorFactor !== void 0) {
                const a = o.sheenColorFactor;
                t.sheenColor.setRGB(a[0], a[1], a[2], O);
            }
            return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, v)), o.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(i);
        }
    }
    class gs {
        constructor(e){
            this.parser = e, this.name = _.KHR_MATERIALS_TRANSMISSION;
        }
        getMaterialType(e) {
            const n = this.parser.json.materials[e];
            return !n.extensions || !n.extensions[this.name] ? null : I;
        }
        extendMaterialParams(e, t) {
            const n = this.parser, s = n.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = [], o = s.extensions[this.name];
            return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(i);
        }
    }
    class ys {
        constructor(e){
            this.parser = e, this.name = _.KHR_MATERIALS_VOLUME;
        }
        getMaterialType(e) {
            const n = this.parser.json.materials[e];
            return !n.extensions || !n.extensions[this.name] ? null : I;
        }
        extendMaterialParams(e, t) {
            const n = this.parser, s = n.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = [], o = s.extensions[this.name];
            t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
            const a = o.attenuationColor || [
                1,
                1,
                1
            ];
            return t.attenuationColor = new H().setRGB(a[0], a[1], a[2], O), Promise.all(i);
        }
    }
    class _s {
        constructor(e){
            this.parser = e, this.name = _.KHR_MATERIALS_IOR;
        }
        getMaterialType(e) {
            const n = this.parser.json.materials[e];
            return !n.extensions || !n.extensions[this.name] ? null : I;
        }
        extendMaterialParams(e, t) {
            const s = this.parser.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = s.extensions[this.name];
            return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
        }
    }
    class Ts {
        constructor(e){
            this.parser = e, this.name = _.KHR_MATERIALS_SPECULAR;
        }
        getMaterialType(e) {
            const n = this.parser.json.materials[e];
            return !n.extensions || !n.extensions[this.name] ? null : I;
        }
        extendMaterialParams(e, t) {
            const n = this.parser, s = n.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = [], o = s.extensions[this.name];
            t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
            const a = o.specularColorFactor || [
                1,
                1,
                1
            ];
            return t.specularColor = new H().setRGB(a[0], a[1], a[2], O), o.specularColorTexture !== void 0 && i.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, v)), Promise.all(i);
        }
    }
    class As {
        constructor(e){
            this.parser = e, this.name = _.EXT_MATERIALS_BUMP;
        }
        getMaterialType(e) {
            const n = this.parser.json.materials[e];
            return !n.extensions || !n.extensions[this.name] ? null : I;
        }
        extendMaterialParams(e, t) {
            const n = this.parser, s = n.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = [], o = s.extensions[this.name];
            return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && i.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(i);
        }
    }
    class bs {
        constructor(e){
            this.parser = e, this.name = _.KHR_MATERIALS_ANISOTROPY;
        }
        getMaterialType(e) {
            const n = this.parser.json.materials[e];
            return !n.extensions || !n.extensions[this.name] ? null : I;
        }
        extendMaterialParams(e, t) {
            const n = this.parser, s = n.json.materials[e];
            if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
            const i = [], o = s.extensions[this.name];
            return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && i.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(i);
        }
    }
    class ws {
        constructor(e){
            this.parser = e, this.name = _.KHR_TEXTURE_BASISU;
        }
        loadTexture(e) {
            const t = this.parser, n = t.json, s = n.textures[e];
            if (!s.extensions || !s.extensions[this.name]) return null;
            const i = s.extensions[this.name], o = t.options.ktx2Loader;
            if (!o) {
                if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
                return null;
            }
            return t.loadTextureImage(e, i.source, o);
        }
    }
    class Es {
        constructor(e){
            this.parser = e, this.name = _.EXT_TEXTURE_WEBP, this.isSupported = null;
        }
        loadTexture(e) {
            const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
            if (!i.extensions || !i.extensions[t]) return null;
            const o = i.extensions[t], a = s.images[o.source];
            let r = n.textureLoader;
            if (a.uri) {
                const l = n.options.manager.getHandler(a.uri);
                l !== null && (r = l);
            }
            return this.detectSupport().then(function(l) {
                if (l) return n.loadTextureImage(e, o.source, r);
                if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                return n.loadTexture(e);
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
    class xs {
        constructor(e){
            this.parser = e, this.name = _.EXT_TEXTURE_AVIF, this.isSupported = null;
        }
        loadTexture(e) {
            const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
            if (!i.extensions || !i.extensions[t]) return null;
            const o = i.extensions[t], a = s.images[o.source];
            let r = n.textureLoader;
            if (a.uri) {
                const l = n.options.manager.getHandler(a.uri);
                l !== null && (r = l);
            }
            return this.detectSupport().then(function(l) {
                if (l) return n.loadTextureImage(e, o.source, r);
                if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
                return n.loadTexture(e);
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
    class Rs {
        constructor(e){
            this.name = _.EXT_MESHOPT_COMPRESSION, this.parser = e;
        }
        loadBufferView(e) {
            const t = this.parser.json, n = t.bufferViews[e];
            if (n.extensions && n.extensions[this.name]) {
                const s = n.extensions[this.name], i = this.parser.getDependency("buffer", s.buffer), o = this.parser.options.meshoptDecoder;
                if (!o || !o.supported) {
                    if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                    return null;
                }
                return i.then(function(a) {
                    const r = s.byteOffset || 0, l = s.byteLength || 0, h = s.count, u = s.byteStride, d = new Uint8Array(a, r, l);
                    return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, d, s.mode, s.filter).then(function(p) {
                        return p.buffer;
                    }) : o.ready.then(function() {
                        const p = new ArrayBuffer(h * u);
                        return o.decodeGltfBuffer(new Uint8Array(p), h, u, d, s.mode, s.filter), p;
                    });
                });
            } else return null;
        }
    }
    class Ms {
        constructor(e){
            this.name = _.EXT_MESH_GPU_INSTANCING, this.parser = e;
        }
        createNodeMesh(e) {
            const t = this.parser.json, n = t.nodes[e];
            if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
            const s = t.meshes[n.mesh];
            for (const l of s.primitives)if (l.mode !== L.TRIANGLES && l.mode !== L.TRIANGLE_STRIP && l.mode !== L.TRIANGLE_FAN && l.mode !== void 0) return null;
            const o = n.extensions[this.name].attributes, a = [], r = {};
            for(const l in o)a.push(this.parser.getDependency("accessor", o[l]).then((h)=>(r[l] = h, r[l])));
            return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((l)=>{
                const h = l.pop(), u = h.isGroup ? h.children : [
                    h
                ], d = l[0].count, p = [];
                for (const f of u){
                    const g = new J, m = new x, y = new z, T = new x(1, 1, 1), E = new ft(f.geometry, f.material, d);
                    for(let A = 0; A < d; A++)r.TRANSLATION && m.fromBufferAttribute(r.TRANSLATION, A), r.ROTATION && y.fromBufferAttribute(r.ROTATION, A), r.SCALE && T.fromBufferAttribute(r.SCALE, A), E.setMatrixAt(A, g.compose(m, y, T));
                    for(const A in r)if (A === "_COLOR_0") {
                        const D = r[A];
                        E.instanceColor = new mt(D.array, D.itemSize, D.normalized);
                    } else A !== "TRANSLATION" && A !== "ROTATION" && A !== "SCALE" && f.geometry.setAttribute(A, r[A]);
                    oe.prototype.copy.call(E, f), this.parser.assignFinalMaterial(E), p.push(E);
                }
                return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
            }));
        }
    }
    const $e = "glTF", Z = 12, Ce = {
        JSON: 1313821514,
        BIN: 5130562
    };
    class Ss {
        constructor(e){
            this.name = _.KHR_BINARY_GLTF, this.content = null, this.body = null;
            const t = new DataView(e, 0, Z), n = new TextDecoder;
            if (this.header = {
                magic: n.decode(new Uint8Array(e.slice(0, 4))),
                version: t.getUint32(4, !0),
                length: t.getUint32(8, !0)
            }, this.header.magic !== $e) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
            if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
            const s = this.header.length - Z, i = new DataView(e, Z);
            let o = 0;
            for(; o < s;){
                const a = i.getUint32(o, !0);
                o += 4;
                const r = i.getUint32(o, !0);
                if (o += 4, r === Ce.JSON) {
                    const l = new Uint8Array(e, Z + o, a);
                    this.content = n.decode(l);
                } else if (r === Ce.BIN) {
                    const l = Z + o;
                    this.body = e.slice(l, l + a);
                }
                o += a;
            }
            if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
        }
    }
    class Ls {
        constructor(e, t){
            if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
            this.name = _.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
        }
        decodePrimitive(e, t) {
            const n = this.json, s = this.dracoLoader, i = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, r = {}, l = {};
            for(const h in o){
                const u = _e[h] || h.toLowerCase();
                a[u] = o[h];
            }
            for(const h in e.attributes){
                const u = _e[h] || h.toLowerCase();
                if (o[h] !== void 0) {
                    const d = n.accessors[e.attributes[h]], p = Y[d.componentType];
                    l[u] = p.name, r[u] = d.normalized === !0;
                }
            }
            return t.getDependency("bufferView", i).then(function(h) {
                return new Promise(function(u, d) {
                    s.decodeDracoFile(h, function(p) {
                        for(const f in p.attributes){
                            const g = p.attributes[f], m = r[f];
                            m !== void 0 && (g.normalized = m);
                        }
                        u(p);
                    }, a, l, O, d);
                });
            });
        }
    }
    class Ps {
        constructor(){
            this.name = _.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(e, t) {
            return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
        }
    }
    class Ds {
        constructor(){
            this.name = _.KHR_MESH_QUANTIZATION;
        }
    }
    class Je extends jt {
        constructor(e, t, n, s){
            super(e, t, n, s);
        }
        copySampleValue_(e) {
            const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, i = e * s * 3 + s;
            for(let o = 0; o !== s; o++)t[o] = n[i + o];
            return t;
        }
        interpolate_(e, t, n, s) {
            const i = this.resultBuffer, o = this.sampleValues, a = this.valueSize, r = a * 2, l = a * 3, h = s - t, u = (n - t) / h, d = u * u, p = d * u, f = e * l, g = f - l, m = -2 * p + 3 * d, y = p - d, T = 1 - m, E = y - d + u;
            for(let A = 0; A !== a; A++){
                const D = o[g + A + a], G = o[g + A + r] * h, P = o[f + A + a], W = o[f + A] * h;
                i[A] = T * D + E * G + m * P + y * W;
            }
            return i;
        }
    }
    const Os = new z;
    class Is extends Je {
        interpolate_(e, t, n, s) {
            const i = super.interpolate_(e, t, n, s);
            return Os.fromArray(i).normalize().toArray(i), i;
        }
    }
    const L = {
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6
    }, Y = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    }, ke = {
        9728: We,
        9729: me,
        9984: bt,
        9985: At,
        9986: Tt,
        9987: Ye
    }, Ge = {
        33071: Et,
        33648: wt,
        10497: ge
    }, he = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    }, _e = {
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
    }, j = {
        scale: "scale",
        translation: "position",
        rotation: "quaternion",
        weights: "morphTargetInfluences"
    }, Ns = {
        CUBICSPLINE: void 0,
        LINEAR: Ze,
        STEP: kt
    }, ue = {
        OPAQUE: "OPAQUE",
        MASK: "MASK",
        BLEND: "BLEND"
    };
    function Cs(c) {
        return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new qe({
            color: 16777215,
            emissive: 0,
            metalness: 1,
            roughness: 1,
            transparent: !1,
            depthTest: !0,
            side: Ut
        })), c.DefaultMaterial;
    }
    function B(c, e, t) {
        for(const n in t.extensions)c[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
    }
    function k(c, e) {
        e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(c.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
    }
    function ks(c, e, t) {
        let n = !1, s = !1, i = !1;
        for(let l = 0, h = e.length; l < h; l++){
            const u = e[l];
            if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (s = !0), u.COLOR_0 !== void 0 && (i = !0), n && s && i) break;
        }
        if (!n && !s && !i) return Promise.resolve(c);
        const o = [], a = [], r = [];
        for(let l = 0, h = e.length; l < h; l++){
            const u = e[l];
            if (n) {
                const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : c.attributes.position;
                o.push(d);
            }
            if (s) {
                const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : c.attributes.normal;
                a.push(d);
            }
            if (i) {
                const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : c.attributes.color;
                r.push(d);
            }
        }
        return Promise.all([
            Promise.all(o),
            Promise.all(a),
            Promise.all(r)
        ]).then(function(l) {
            const h = l[0], u = l[1], d = l[2];
            return n && (c.morphAttributes.position = h), s && (c.morphAttributes.normal = u), i && (c.morphAttributes.color = d), c.morphTargetsRelative = !0, c;
        });
    }
    function Gs(c, e) {
        if (c.updateMorphTargets(), e.weights !== void 0) for(let t = 0, n = e.weights.length; t < n; t++)c.morphTargetInfluences[t] = e.weights[t];
        if (e.extras && Array.isArray(e.extras.targetNames)) {
            const t = e.extras.targetNames;
            if (c.morphTargetInfluences.length === t.length) {
                c.morphTargetDictionary = {};
                for(let n = 0, s = t.length; n < s; n++)c.morphTargetDictionary[t[n]] = n;
            } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
        }
    }
    function Us(c) {
        let e;
        const t = c.extensions && c.extensions[_.KHR_DRACO_MESH_COMPRESSION];
        if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + de(t.attributes) : e = c.indices + ":" + de(c.attributes) + ":" + c.mode, c.targets !== void 0) for(let n = 0, s = c.targets.length; n < s; n++)e += ":" + de(c.targets[n]);
        return e;
    }
    function de(c) {
        let e = "";
        const t = Object.keys(c).sort();
        for(let n = 0, s = t.length; n < s; n++)e += t[n] + ":" + c[t[n]] + ";";
        return e;
    }
    function Te(c) {
        switch(c){
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
    function js(c) {
        return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : c.search(/\.ktx2($|\?)/i) > 0 || c.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
    }
    const Fs = new J;
    class vs {
        constructor(e = {}, t = {}){
            this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new cs, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
                refs: {},
                uses: {}
            }, this.cameraCache = {
                refs: {},
                uses: {}
            }, this.lightCache = {
                refs: {},
                uses: {}
            }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
            let n = !1, s = -1, i = !1, o = -1;
            if (typeof navigator < "u") {
                const a = navigator.userAgent;
                n = /^((?!chrome|android).)*safari/i.test(a) === !0;
                const r = a.match(/Version\/(\d+)/);
                s = n && r ? parseInt(r[1], 10) : -1, i = a.indexOf("Firefox") > -1, o = i ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
            }
            typeof createImageBitmap > "u" || n && s < 17 || i && o < 98 ? this.textureLoader = new gt(this.options.manager) : this.textureLoader = new yt(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new ie(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(e) {
            this.extensions = e;
        }
        setPlugins(e) {
            this.plugins = e;
        }
        parse(e, t) {
            const n = this, s = this.json, i = this.extensions;
            this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
                return o._markDefs && o._markDefs();
            }), Promise.all(this._invokeAll(function(o) {
                return o.beforeRoot && o.beforeRoot();
            })).then(function() {
                return Promise.all([
                    n.getDependencies("scene"),
                    n.getDependencies("animation"),
                    n.getDependencies("camera")
                ]);
            }).then(function(o) {
                const a = {
                    scene: o[0][s.scene || 0],
                    scenes: o[0],
                    animations: o[1],
                    cameras: o[2],
                    asset: s.asset,
                    parser: n,
                    userData: {}
                };
                return B(i, a, s), k(a, s), Promise.all(n._invokeAll(function(r) {
                    return r.afterRoot && r.afterRoot(a);
                })).then(function() {
                    for (const r of a.scenes)r.updateMatrixWorld();
                    e(a);
                });
            }).catch(t);
        }
        _markDefs() {
            const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
            for(let s = 0, i = t.length; s < i; s++){
                const o = t[s].joints;
                for(let a = 0, r = o.length; a < r; a++)e[o[a]].isBone = !0;
            }
            for(let s = 0, i = e.length; s < i; s++){
                const o = e[s];
                o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
            }
        }
        _addNodeRef(e, t) {
            t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
        }
        _getNodeRef(e, t, n) {
            if (e.refs[t] <= 1) return n;
            const s = n.clone(), i = (o, a)=>{
                const r = this.associations.get(o);
                r != null && this.associations.set(a, r);
                for (const [l, h] of o.children.entries())i(h, a.children[l]);
            };
            return i(n, s), s.name += "_instance_" + e.uses[t]++, s;
        }
        _invokeOne(e) {
            const t = Object.values(this.plugins);
            t.push(this);
            for(let n = 0; n < t.length; n++){
                const s = e(t[n]);
                if (s) return s;
            }
            return null;
        }
        _invokeAll(e) {
            const t = Object.values(this.plugins);
            t.unshift(this);
            const n = [];
            for(let s = 0; s < t.length; s++){
                const i = e(t[s]);
                i && n.push(i);
            }
            return n;
        }
        getDependency(e, t) {
            const n = e + ":" + t;
            let s = this.cache.get(n);
            if (!s) {
                switch(e){
                    case "scene":
                        s = this.loadScene(t);
                        break;
                    case "node":
                        s = this._invokeOne(function(i) {
                            return i.loadNode && i.loadNode(t);
                        });
                        break;
                    case "mesh":
                        s = this._invokeOne(function(i) {
                            return i.loadMesh && i.loadMesh(t);
                        });
                        break;
                    case "accessor":
                        s = this.loadAccessor(t);
                        break;
                    case "bufferView":
                        s = this._invokeOne(function(i) {
                            return i.loadBufferView && i.loadBufferView(t);
                        });
                        break;
                    case "buffer":
                        s = this.loadBuffer(t);
                        break;
                    case "material":
                        s = this._invokeOne(function(i) {
                            return i.loadMaterial && i.loadMaterial(t);
                        });
                        break;
                    case "texture":
                        s = this._invokeOne(function(i) {
                            return i.loadTexture && i.loadTexture(t);
                        });
                        break;
                    case "skin":
                        s = this.loadSkin(t);
                        break;
                    case "animation":
                        s = this._invokeOne(function(i) {
                            return i.loadAnimation && i.loadAnimation(t);
                        });
                        break;
                    case "camera":
                        s = this.loadCamera(t);
                        break;
                    default:
                        if (s = this._invokeOne(function(i) {
                            return i != this && i.getDependency && i.getDependency(e, t);
                        }), !s) throw new Error("Unknown type: " + e);
                        break;
                }
                this.cache.add(n, s);
            }
            return s;
        }
        getDependencies(e) {
            let t = this.cache.get(e);
            if (!t) {
                const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
                t = Promise.all(s.map(function(i, o) {
                    return n.getDependency(e, o);
                })), this.cache.add(e, t);
            }
            return t;
        }
        loadBuffer(e) {
            const t = this.json.buffers[e], n = this.fileLoader;
            if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
            if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[_.KHR_BINARY_GLTF].body);
            const s = this.options;
            return new Promise(function(i, o) {
                n.load(Q.resolveURL(t.uri, s.path), i, void 0, function() {
                    o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
                });
            });
        }
        loadBufferView(e) {
            const t = this.json.bufferViews[e];
            return this.getDependency("buffer", t.buffer).then(function(n) {
                const s = t.byteLength || 0, i = t.byteOffset || 0;
                return n.slice(i, i + s);
            });
        }
        loadAccessor(e) {
            const t = this, n = this.json, s = this.json.accessors[e];
            if (s.bufferView === void 0 && s.sparse === void 0) {
                const o = he[s.type], a = Y[s.componentType], r = s.normalized === !0, l = new a(s.count * o);
                return Promise.resolve(new X(l, o, r));
            }
            const i = [];
            return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(o) {
                const a = o[0], r = he[s.type], l = Y[s.componentType], h = l.BYTES_PER_ELEMENT, u = h * r, d = s.byteOffset || 0, p = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, f = s.normalized === !0;
                let g, m;
                if (p && p !== u) {
                    const y = Math.floor(d / p), T = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + y + ":" + s.count;
                    let E = t.cache.get(T);
                    E || (g = new l(a, y * p, s.count * p / h), E = new _t(g, p / h), t.cache.add(T, E)), m = new Gt(E, r, d % p / h, f);
                } else a === null ? g = new l(s.count * r) : g = new l(a, d, s.count * r), m = new X(g, r, f);
                if (s.sparse !== void 0) {
                    const y = he.SCALAR, T = Y[s.sparse.indices.componentType], E = s.sparse.indices.byteOffset || 0, A = s.sparse.values.byteOffset || 0, D = new T(o[1], E, s.sparse.count * y), G = new l(o[2], A, s.sparse.count * r);
                    a !== null && (m = new X(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
                    for(let P = 0, W = D.length; P < W; P++){
                        const U = D[P];
                        if (m.setX(U, G[P * r]), r >= 2 && m.setY(U, G[P * r + 1]), r >= 3 && m.setZ(U, G[P * r + 2]), r >= 4 && m.setW(U, G[P * r + 3]), r >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                    }
                    m.normalized = f;
                }
                return m;
            });
        }
        loadTexture(e) {
            const t = this.json, n = this.options, i = t.textures[e].source, o = t.images[i];
            let a = this.textureLoader;
            if (o.uri) {
                const r = n.manager.getHandler(o.uri);
                r !== null && (a = r);
            }
            return this.loadTextureImage(e, i, a);
        }
        loadTextureImage(e, t, n) {
            const s = this, i = this.json, o = i.textures[e], a = i.images[t], r = (a.uri || a.bufferView) + ":" + o.sampler;
            if (this.textureCache[r]) return this.textureCache[r];
            const l = this.loadImageSource(t, n).then(function(h) {
                h.flipY = !1, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (h.name = a.uri);
                const d = (i.samplers || {})[o.sampler] || {};
                return h.magFilter = ke[d.magFilter] || me, h.minFilter = ke[d.minFilter] || Ye, h.wrapS = Ge[d.wrapS] || ge, h.wrapT = Ge[d.wrapT] || ge, h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== We && h.minFilter !== me, s.associations.set(h, {
                    textures: e
                }), h;
            }).catch(function() {
                return null;
            });
            return this.textureCache[r] = l, l;
        }
        loadImageSource(e, t) {
            const n = this, s = this.json, i = this.options;
            if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((u)=>u.clone());
            const o = s.images[e], a = self.URL || self.webkitURL;
            let r = o.uri || "", l = !1;
            if (o.bufferView !== void 0) r = n.getDependency("bufferView", o.bufferView).then(function(u) {
                l = !0;
                const d = new Blob([
                    u
                ], {
                    type: o.mimeType
                });
                return r = a.createObjectURL(d), r;
            });
            else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
            const h = Promise.resolve(r).then(function(u) {
                return new Promise(function(d, p) {
                    let f = d;
                    t.isImageBitmapLoader === !0 && (f = function(g) {
                        const m = new Ee(g);
                        m.needsUpdate = !0, d(m);
                    }), t.load(Q.resolveURL(u, i.path), f, void 0, p);
                });
            }).then(function(u) {
                return l === !0 && a.revokeObjectURL(r), k(u, o), u.userData.mimeType = o.mimeType || js(o.uri), u;
            }).catch(function(u) {
                throw console.error("THREE.GLTFLoader: Couldn't load texture", r), u;
            });
            return this.sourceCache[e] = h, h;
        }
        assignTexture(e, t, n, s) {
            const i = this;
            return this.getDependency("texture", n.index).then(function(o) {
                if (!o) return null;
                if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), i.extensions[_.KHR_TEXTURE_TRANSFORM]) {
                    const a = n.extensions !== void 0 ? n.extensions[_.KHR_TEXTURE_TRANSFORM] : void 0;
                    if (a) {
                        const r = i.associations.get(o);
                        o = i.extensions[_.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), i.associations.set(o, r);
                    }
                }
                return s !== void 0 && (o.colorSpace = s), e[t] = o, o;
            });
        }
        assignFinalMaterial(e) {
            const t = e.geometry;
            let n = e.material;
            const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
            if (e.isPoints) {
                const a = "PointsMaterial:" + n.uuid;
                let r = this.cache.get(a);
                r || (r = new xt, ce.prototype.copy.call(r, n), r.color.copy(n.color), r.map = n.map, r.sizeAttenuation = !1, this.cache.add(a, r)), n = r;
            } else if (e.isLine) {
                const a = "LineBasicMaterial:" + n.uuid;
                let r = this.cache.get(a);
                r || (r = new ze, ce.prototype.copy.call(r, n), r.color.copy(n.color), r.map = n.map, this.cache.add(a, r)), n = r;
            }
            if (s || i || o) {
                let a = "ClonedMaterial:" + n.uuid + ":";
                s && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), o && (a += "flat-shading:");
                let r = this.cache.get(a);
                r || (r = n.clone(), i && (r.vertexColors = !0), o && (r.flatShading = !0), s && (r.normalScale && (r.normalScale.y *= -1), r.clearcoatNormalScale && (r.clearcoatNormalScale.y *= -1)), this.cache.add(a, r), this.associations.set(r, this.associations.get(n))), n = r;
            }
            e.material = n;
        }
        getMaterialType() {
            return qe;
        }
        loadMaterial(e) {
            const t = this, n = this.json, s = this.extensions, i = n.materials[e];
            let o;
            const a = {}, r = i.extensions || {}, l = [];
            if (r[_.KHR_MATERIALS_UNLIT]) {
                const u = s[_.KHR_MATERIALS_UNLIT];
                o = u.getMaterialType(), l.push(u.extendParams(a, i, t));
            } else {
                const u = i.pbrMetallicRoughness || {};
                if (a.color = new H(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
                    const d = u.baseColorFactor;
                    a.color.setRGB(d[0], d[1], d[2], O), a.opacity = d[3];
                }
                u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, v)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
                    return d.getMaterialType && d.getMaterialType(e);
                }), l.push(Promise.all(this._invokeAll(function(d) {
                    return d.extendMaterialParams && d.extendMaterialParams(e, a);
                })));
            }
            i.doubleSided === !0 && (a.side = Rt);
            const h = i.alphaMode || ue.OPAQUE;
            if (h === ue.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === ue.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : .5)), i.normalTexture !== void 0 && o !== F && (l.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new S(1, 1), i.normalTexture.scale !== void 0)) {
                const u = i.normalTexture.scale;
                a.normalScale.set(u, u);
            }
            if (i.occlusionTexture !== void 0 && o !== F && (l.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && o !== F) {
                const u = i.emissiveFactor;
                a.emissive = new H().setRGB(u[0], u[1], u[2], O);
            }
            return i.emissiveTexture !== void 0 && o !== F && l.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, v)), Promise.all(l).then(function() {
                const u = new o(a);
                return i.name && (u.name = i.name), k(u, i), t.associations.set(u, {
                    materials: e
                }), i.extensions && B(s, u, i), u;
            });
        }
        createUniqueName(e) {
            const t = Mt.sanitizeNodeName(e || "");
            return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
        }
        loadGeometries(e) {
            const t = this, n = this.extensions, s = this.primitiveCache;
            function i(a) {
                return n[_.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(r) {
                    return Ue(r, a, t);
                });
            }
            const o = [];
            for(let a = 0, r = e.length; a < r; a++){
                const l = e[a], h = Us(l), u = s[h];
                if (u) o.push(u.promise);
                else {
                    let d;
                    l.extensions && l.extensions[_.KHR_DRACO_MESH_COMPRESSION] ? d = i(l) : d = Ue(new re, l, t), s[h] = {
                        primitive: l,
                        promise: d
                    }, o.push(d);
                }
            }
            return Promise.all(o);
        }
        loadMesh(e) {
            const t = this, n = this.json, s = this.extensions, i = n.meshes[e], o = i.primitives, a = [];
            for(let r = 0, l = o.length; r < l; r++){
                const h = o[r].material === void 0 ? Cs(this.cache) : this.getDependency("material", o[r].material);
                a.push(h);
            }
            return a.push(t.loadGeometries(o)), Promise.all(a).then(function(r) {
                const l = r.slice(0, r.length - 1), h = r[r.length - 1], u = [];
                for(let p = 0, f = h.length; p < f; p++){
                    const g = h[p], m = o[p];
                    let y;
                    const T = l[p];
                    if (m.mode === L.TRIANGLES || m.mode === L.TRIANGLE_STRIP || m.mode === L.TRIANGLE_FAN || m.mode === void 0) y = i.isSkinnedMesh === !0 ? new St(g, T) : new ne(g, T), y.isSkinnedMesh === !0 && y.normalizeSkinWeights(), m.mode === L.TRIANGLE_STRIP ? y.geometry = Ne(y.geometry, Ve) : m.mode === L.TRIANGLE_FAN && (y.geometry = Ne(y.geometry, fe));
                    else if (m.mode === L.LINES) y = new Ke(g, T);
                    else if (m.mode === L.LINE_STRIP) y = new Lt(g, T);
                    else if (m.mode === L.LINE_LOOP) y = new Pt(g, T);
                    else if (m.mode === L.POINTS) y = new Dt(g, T);
                    else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
                    Object.keys(y.geometry.morphAttributes).length > 0 && Gs(y, i), y.name = t.createUniqueName(i.name || "mesh_" + e), k(y, i), m.extensions && B(s, y, m), t.assignFinalMaterial(y), u.push(y);
                }
                for(let p = 0, f = u.length; p < f; p++)t.associations.set(u[p], {
                    meshes: e,
                    primitives: p
                });
                if (u.length === 1) return i.extensions && B(s, u[0], i), u[0];
                const d = new $;
                i.extensions && B(s, d, i), t.associations.set(d, {
                    meshes: e
                });
                for(let p = 0, f = u.length; p < f; p++)d.add(u[p]);
                return d;
            });
        }
        loadCamera(e) {
            let t;
            const n = this.json.cameras[e], s = n[n.type];
            if (!s) {
                console.warn("THREE.GLTFLoader: Missing camera parameters.");
                return;
            }
            return n.type === "perspective" ? t = new He(ve.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (t = new Ot(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), k(t, n), Promise.resolve(t);
        }
        loadSkin(e) {
            const t = this.json.skins[e], n = [];
            for(let s = 0, i = t.joints.length; s < i; s++)n.push(this._loadNodeShallow(t.joints[s]));
            return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
                const i = s.pop(), o = s, a = [], r = [];
                for(let l = 0, h = o.length; l < h; l++){
                    const u = o[l];
                    if (u) {
                        a.push(u);
                        const d = new J;
                        i !== null && d.fromArray(i.array, l * 16), r.push(d);
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
                }
                return new It(a, r);
            });
        }
        loadAnimation(e) {
            const t = this.json, n = this, s = t.animations[e], i = s.name ? s.name : "animation_" + e, o = [], a = [], r = [], l = [], h = [];
            for(let u = 0, d = s.channels.length; u < d; u++){
                const p = s.channels[u], f = s.samplers[p.sampler], g = p.target, m = g.node, y = s.parameters !== void 0 ? s.parameters[f.input] : f.input, T = s.parameters !== void 0 ? s.parameters[f.output] : f.output;
                g.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", y)), r.push(this.getDependency("accessor", T)), l.push(f), h.push(g));
            }
            return Promise.all([
                Promise.all(o),
                Promise.all(a),
                Promise.all(r),
                Promise.all(l),
                Promise.all(h)
            ]).then(function(u) {
                const d = u[0], p = u[1], f = u[2], g = u[3], m = u[4], y = [];
                for(let T = 0, E = d.length; T < E; T++){
                    const A = d[T], D = p[T], G = f[T], P = g[T], W = m[T];
                    if (A === void 0) continue;
                    A.updateMatrix && A.updateMatrix();
                    const U = n._createAnimationTracks(A, D, G, P, W);
                    if (U) for(let ae = 0; ae < U.length; ae++)y.push(U[ae]);
                }
                return new Nt(i, void 0, y);
            });
        }
        createNodeMesh(e) {
            const t = this.json, n = this, s = t.nodes[e];
            return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(i) {
                const o = n._getNodeRef(n.meshCache, s.mesh, i);
                return s.weights !== void 0 && o.traverse(function(a) {
                    if (a.isMesh) for(let r = 0, l = s.weights.length; r < l; r++)a.morphTargetInfluences[r] = s.weights[r];
                }), o;
            });
        }
        loadNode(e) {
            const t = this.json, n = this, s = t.nodes[e], i = n._loadNodeShallow(e), o = [], a = s.children || [];
            for(let l = 0, h = a.length; l < h; l++)o.push(n.getDependency("node", a[l]));
            const r = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
            return Promise.all([
                i,
                Promise.all(o),
                r
            ]).then(function(l) {
                const h = l[0], u = l[1], d = l[2];
                d !== null && h.traverse(function(p) {
                    p.isSkinnedMesh && p.bind(d, Fs);
                });
                for(let p = 0, f = u.length; p < f; p++)h.add(u[p]);
                return h;
            });
        }
        _loadNodeShallow(e) {
            const t = this.json, n = this.extensions, s = this;
            if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
            const i = t.nodes[e], o = i.name ? s.createUniqueName(i.name) : "", a = [], r = s._invokeOne(function(l) {
                return l.createNodeMesh && l.createNodeMesh(e);
            });
            return r && a.push(r), i.camera !== void 0 && a.push(s.getDependency("camera", i.camera).then(function(l) {
                return s._getNodeRef(s.cameraCache, i.camera, l);
            })), s._invokeAll(function(l) {
                return l.createNodeAttachment && l.createNodeAttachment(e);
            }).forEach(function(l) {
                a.push(l);
            }), this.nodeCache[e] = Promise.all(a).then(function(l) {
                let h;
                if (i.isBone === !0 ? h = new Ct : l.length > 1 ? h = new $ : l.length === 1 ? h = l[0] : h = new oe, h !== l[0]) for(let u = 0, d = l.length; u < d; u++)h.add(l[u]);
                if (i.name && (h.userData.name = i.name, h.name = o), k(h, i), i.extensions && B(n, h, i), i.matrix !== void 0) {
                    const u = new J;
                    u.fromArray(i.matrix), h.applyMatrix4(u);
                } else i.translation !== void 0 && h.position.fromArray(i.translation), i.rotation !== void 0 && h.quaternion.fromArray(i.rotation), i.scale !== void 0 && h.scale.fromArray(i.scale);
                return s.associations.has(h) || s.associations.set(h, {}), s.associations.get(h).nodes = e, h;
            }), this.nodeCache[e];
        }
        loadScene(e) {
            const t = this.extensions, n = this.json.scenes[e], s = this, i = new $;
            n.name && (i.name = s.createUniqueName(n.name)), k(i, n), n.extensions && B(t, i, n);
            const o = n.nodes || [], a = [];
            for(let r = 0, l = o.length; r < l; r++)a.push(s.getDependency("node", o[r]));
            return Promise.all(a).then(function(r) {
                for(let h = 0, u = r.length; h < u; h++)i.add(r[h]);
                const l = (h)=>{
                    const u = new Map;
                    for (const [d, p] of s.associations)(d instanceof ce || d instanceof Ee) && u.set(d, p);
                    return h.traverse((d)=>{
                        const p = s.associations.get(d);
                        p != null && u.set(d, p);
                    }), u;
                };
                return s.associations = l(i), i;
            });
        }
        _createAnimationTracks(e, t, n, s, i) {
            const o = [], a = e.name ? e.name : e.uuid, r = [];
            j[i.path] === j.weights ? e.traverse(function(d) {
                d.morphTargetInfluences && r.push(d.name ? d.name : d.uuid);
            }) : r.push(a);
            let l;
            switch(j[i.path]){
                case j.weights:
                    l = Re;
                    break;
                case j.rotation:
                    l = Me;
                    break;
                case j.position:
                case j.scale:
                    l = xe;
                    break;
                default:
                    switch(n.itemSize){
                        case 1:
                            l = Re;
                            break;
                        case 2:
                        case 3:
                        default:
                            l = xe;
                            break;
                    }
                    break;
            }
            const h = s.interpolation !== void 0 ? Ns[s.interpolation] : Ze, u = this._getArrayFromAccessor(n);
            for(let d = 0, p = r.length; d < p; d++){
                const f = new l(r[d] + "." + j[i.path], t.array, u, h);
                s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(f), o.push(f);
            }
            return o;
        }
        _getArrayFromAccessor(e) {
            let t = e.array;
            if (e.normalized) {
                const n = Te(t.constructor), s = new Float32Array(t.length);
                for(let i = 0, o = t.length; i < o; i++)s[i] = t[i] * n;
                t = s;
            }
            return t;
        }
        _createCubicSplineTrackInterpolant(e) {
            e.createInterpolant = function(n) {
                const s = this instanceof Me ? Is : Je;
                return new s(this.times, this.values, this.getValueSize() / 3, n);
            }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
        }
    }
    function Hs(c, e, t) {
        const n = e.attributes, s = new Ft;
        if (n.POSITION !== void 0) {
            const a = t.json.accessors[n.POSITION], r = a.min, l = a.max;
            if (r !== void 0 && l !== void 0) {
                if (s.set(new x(r[0], r[1], r[2]), new x(l[0], l[1], l[2])), a.normalized) {
                    const h = Te(Y[a.componentType]);
                    s.min.multiplyScalar(h), s.max.multiplyScalar(h);
                }
            } else {
                console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                return;
            }
        } else return;
        const i = e.targets;
        if (i !== void 0) {
            const a = new x, r = new x;
            for(let l = 0, h = i.length; l < h; l++){
                const u = i[l];
                if (u.POSITION !== void 0) {
                    const d = t.json.accessors[u.POSITION], p = d.min, f = d.max;
                    if (p !== void 0 && f !== void 0) {
                        if (r.setX(Math.max(Math.abs(p[0]), Math.abs(f[0]))), r.setY(Math.max(Math.abs(p[1]), Math.abs(f[1]))), r.setZ(Math.max(Math.abs(p[2]), Math.abs(f[2]))), d.normalized) {
                            const g = Te(Y[d.componentType]);
                            r.multiplyScalar(g);
                        }
                        a.max(r);
                    } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                }
            }
            s.expandByVector(a);
        }
        c.boundingBox = s;
        const o = new vt;
        s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, c.boundingSphere = o;
    }
    function Ue(c, e, t) {
        const n = e.attributes, s = [];
        function i(o, a) {
            return t.getDependency("accessor", o).then(function(r) {
                c.setAttribute(a, r);
            });
        }
        for(const o in n){
            const a = _e[o] || o.toLowerCase();
            a in c.attributes || s.push(i(n[o], a));
        }
        if (e.indices !== void 0 && !c.index) {
            const o = t.getDependency("accessor", e.indices).then(function(a) {
                c.setIndex(a);
            });
            s.push(o);
        }
        return ye.workingColorSpace !== O && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ye.workingColorSpace}" not supported.`), k(c, e), Hs(c, e, t), Promise.all(s).then(function() {
            return e.targets !== void 0 ? ks(c, e.targets, t) : c;
        });
    }
    const pe = new WeakMap;
    class Bs extends Xe {
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
        load(e, t, n, s) {
            const i = new ie(this.manager);
            i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(e, (o)=>{
                this.parse(o, t, s);
            }, n, s);
        }
        parse(e, t, n = ()=>{}) {
            this.decodeDracoFile(e, t, null, null, v, n).catch(n);
        }
        decodeDracoFile(e, t, n, s, i = O, o = ()=>{}) {
            const a = {
                attributeIDs: n || this.defaultAttributeIDs,
                attributeTypes: s || this.defaultAttributeTypes,
                useUniqueIDs: !!n,
                vertexColorSpace: i
            };
            return this.decodeGeometry(e, a).then(t).catch(o);
        }
        decodeGeometry(e, t) {
            const n = JSON.stringify(t);
            if (pe.has(e)) {
                const r = pe.get(e);
                if (r.key === n) return r.promise;
                if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
            }
            let s;
            const i = this.workerNextTaskID++, o = e.byteLength, a = this._getWorker(i, o).then((r)=>(s = r, new Promise((l, h)=>{
                    s._callbacks[i] = {
                        resolve: l,
                        reject: h
                    }, s.postMessage({
                        type: "decode",
                        id: i,
                        taskConfig: t,
                        buffer: e
                    }, [
                        e
                    ]);
                }))).then((r)=>this._createGeometry(r.geometry));
            return a.catch(()=>!0).then(()=>{
                s && i && this._releaseTask(s, i);
            }), pe.set(e, {
                key: n,
                promise: a
            }), a;
        }
        _createGeometry(e) {
            const t = new re;
            e.index && t.setIndex(new X(e.index.array, 1));
            for(let n = 0; n < e.attributes.length; n++){
                const s = e.attributes[n], i = s.name, o = s.array, a = s.itemSize, r = new X(o, a);
                i === "color" && (this._assignVertexColorSpace(r, s.vertexColorSpace), r.normalized = !(o instanceof Float32Array)), t.setAttribute(i, r);
            }
            return t;
        }
        _assignVertexColorSpace(e, t) {
            if (t !== v) return;
            const n = new H;
            for(let s = 0, i = e.count; s < i; s++)n.fromBufferAttribute(e, s), ye.toWorkingColorSpace(n, v), e.setXYZ(s, n.r, n.g, n.b);
        }
        _loadLibrary(e, t) {
            const n = new ie(this.manager);
            return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((s, i)=>{
                n.load(e, s, void 0, i);
            });
        }
        preload() {
            return this._initDecoder(), this;
        }
        _initDecoder() {
            if (this.decoderPending) return this.decoderPending;
            const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
            return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n)=>{
                const s = n[0];
                e || (this.decoderConfig.wasmBinary = n[1]);
                const i = zs.toString(), o = [
                    "/* draco decoder */",
                    s,
                    "",
                    "/* worker */",
                    i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))
                ].join(`
`);
                this.workerSourceURL = URL.createObjectURL(new Blob([
                    o
                ]));
            }), this.decoderPending;
        }
        _getWorker(e, t) {
            return this._initDecoder().then(()=>{
                if (this.workerPool.length < this.workerLimit) {
                    const s = new Worker(this.workerSourceURL);
                    s._callbacks = {}, s._taskCosts = {}, s._taskLoad = 0, s.postMessage({
                        type: "init",
                        decoderConfig: this.decoderConfig
                    }), s.onmessage = function(i) {
                        const o = i.data;
                        switch(o.type){
                            case "decode":
                                s._callbacks[o.id].resolve(o);
                                break;
                            case "error":
                                s._callbacks[o.id].reject(o);
                                break;
                            default:
                                console.error('THREE.DRACOLoader: Unexpected message, "' + o.type + '"');
                        }
                    }, this.workerPool.push(s);
                } else this.workerPool.sort(function(s, i) {
                    return s._taskLoad > i._taskLoad ? -1 : 1;
                });
                const n = this.workerPool[this.workerPool.length - 1];
                return n._taskCosts[e] = t, n._taskLoad += t, n;
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
    function zs() {
        let c, e;
        onmessage = function(o) {
            const a = o.data;
            switch(a.type){
                case "init":
                    c = a.decoderConfig, e = new Promise(function(h) {
                        c.onModuleLoaded = function(u) {
                            h({
                                draco: u
                            });
                        }, DracoDecoderModule(c);
                    });
                    break;
                case "decode":
                    const r = a.buffer, l = a.taskConfig;
                    e.then((h)=>{
                        const u = h.draco, d = new u.Decoder;
                        try {
                            const p = t(u, d, new Int8Array(r), l), f = p.attributes.map((g)=>g.array.buffer);
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
                            u.destroy(d);
                        }
                    });
                    break;
            }
        };
        function t(o, a, r, l) {
            const h = l.attributeIDs, u = l.attributeTypes;
            let d, p;
            const f = a.GetEncodedGeometryType(r);
            if (f === o.TRIANGULAR_MESH) d = new o.Mesh, p = a.DecodeArrayToMesh(r, r.byteLength, d);
            else if (f === o.POINT_CLOUD) d = new o.PointCloud, p = a.DecodeArrayToPointCloud(r, r.byteLength, d);
            else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
            if (!p.ok() || d.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + p.error_msg());
            const g = {
                index: null,
                attributes: []
            };
            for(const m in h){
                const y = self[u[m]];
                let T, E;
                if (l.useUniqueIDs) E = h[m], T = a.GetAttributeByUniqueId(d, E);
                else {
                    if (E = a.GetAttributeId(d, o[h[m]]), E === -1) continue;
                    T = a.GetAttribute(d, E);
                }
                const A = s(o, a, d, m, y, T);
                m === "color" && (A.vertexColorSpace = l.vertexColorSpace), g.attributes.push(A);
            }
            return f === o.TRIANGULAR_MESH && (g.index = n(o, a, d)), o.destroy(d), g;
        }
        function n(o, a, r) {
            const h = r.num_faces() * 3, u = h * 4, d = o._malloc(u);
            a.GetTrianglesUInt32Array(r, u, d);
            const p = new Uint32Array(o.HEAPF32.buffer, d, h).slice();
            return o._free(d), {
                array: p,
                itemSize: 1
            };
        }
        function s(o, a, r, l, h, u) {
            const d = u.num_components(), f = r.num_points() * d, g = f * h.BYTES_PER_ELEMENT, m = i(o, h), y = o._malloc(g);
            a.GetAttributeDataArrayForAllPoints(r, u, m, g, y);
            const T = new h(o.HEAPF32.buffer, y, f).slice();
            return o._free(y), {
                name: l,
                array: T,
                itemSize: d
            };
        }
        function i(o, a) {
            switch(a){
                case Float32Array:
                    return o.DT_FLOAT32;
                case Int8Array:
                    return o.DT_INT8;
                case Int16Array:
                    return o.DT_INT16;
                case Int32Array:
                    return o.DT_INT32;
                case Uint8Array:
                    return o.DT_UINT8;
                case Uint16Array:
                    return o.DT_UINT16;
                case Uint32Array:
                    return o.DT_UINT32;
            }
        }
    }
    const N = new as;
    new Bs;
    const C = "/models", w = new Map, je = {
        car: async (c, e, t)=>{
            if (!w.has("car")) {
                const i = (await N.loadAsync(`${C}/SUV.glb`)).scene;
                i.matrixAutoUpdate = !0, w.set("car", i);
            }
            const n = w.get("car").clone();
            return n.position.set(c, e, t), n.scale.set(.5, .5, .5), n.userData.physics = {
                type: "dynamic",
                collider: "cuboid"
            }, n;
        },
        road: async (c, e, t)=>{
            if (!w.has("road")) {
                const i = (await N.loadAsync(`${C}/road.gltf`)).scene;
                i.matrixAutoUpdate = !0, w.set("road", i);
            }
            const n = w.get("road").clone();
            return n.position.set(c, e, t), n;
        },
        road2: async (c, e, t)=>{
            if (!w.has("road2")) {
                const i = (await N.loadAsync(`${C}/road2.gltf`)).scene;
                i.matrixAutoUpdate = !0, w.set("road2", i);
            }
            const n = w.get("road2").clone();
            return n.position.set(c, e, t), n;
        },
        road_turn_left: async (c, e, t)=>{
            if (!w.has("road_turn_left")) {
                const i = (await N.loadAsync(`${C}/road_clean.gltf`)).scene;
                i.matrixAutoUpdate = !0, w.set("road_turn_left", i);
            }
            const n = w.get("road_turn_left").clone();
            return n.position.set(c, e, t), n;
        },
        road_turn_right: async (c, e, t)=>{
            if (!w.has("road_turn_right")) {
                const i = (await N.loadAsync(`${C}/road_clean.gltf`)).scene;
                i.matrixAutoUpdate = !0, w.set("road_turn_right", i);
            }
            const n = w.get("road_turn_right").clone();
            return n.position.set(c, e, t), n;
        },
        road_junction_left: async (c, e, t)=>{
            if (!w.has("road_junction_left")) {
                const i = (await N.loadAsync(`${C}/road_clean.gltf`)).scene;
                i.matrixAutoUpdate = !0, w.set("road_junction_left", i);
            }
            const n = w.get("road_junction_left").clone();
            return n.position.set(c, e, t), n;
        },
        road_junction_right: async (c, e, t)=>{
            if (!w.has("road_junction_right")) {
                const i = (await N.loadAsync(`${C}/road_clean.gltf`)).scene;
                i.matrixAutoUpdate = !0, w.set("road_junction_right", i);
            }
            const n = w.get("road_junction_right").clone();
            return n.position.set(c, e, t), n;
        },
        road_junction_left_right: async (c, e, t)=>{
            if (!w.has("road_junction_left_right")) {
                const i = (await N.loadAsync(`${C}/road_clean.gltf`)).scene;
                i.matrixAutoUpdate = !0, w.set("road_junction_left_right", i);
            }
            const n = w.get("road_junction_left_right").clone();
            return n.position.set(c, e, t), n;
        },
        grass: async (c, e, t)=>{
            if (!w.has("grass")) {
                const i = (await N.loadAsync(`${C}/erva.gltf`)).scene;
                i.matrixAutoUpdate = !0, w.set("grass", i);
            }
            const n = w.get("grass").clone();
            return n.position.set(c, e, t), n;
        },
        rock: (c, e, t)=>{
            const n = new Se(1, 1, 1), s = new F({
                color: 8421504
            }), i = new ne(n, s);
            return i.position.set(c, e, t), i.userData.physics = {
                type: "fixed",
                collider: "sphere"
            }, i;
        },
        tree: (c, e, t)=>{
            const n = (r, l)=>({
                    geo: r,
                    pos: l
                }), i = [
                n(new Ht(.5, .5, 2), new x(c, 1, e)),
                n(new Bt(1), new x(c, 3, e))
            ].map((r)=>{
                const l = r.geo.clone();
                return l.applyMatrix4(new J().makeTranslation(r.pos.x, r.pos.y, r.pos.z)), l;
            }), o = rs(i), a = new ne(o, new F({
                color: 9127187
            }));
            return a.position.set(c, e, t), a;
        },
        trafic_light: (c, e, t)=>{
            const n = new Se(.5, 1, .5), s = new F({
                color: 16711680
            }), i = new ne(n, s);
            return i.position.set(c, e, t), i;
        }
    };
    async function Fe(c, e, t, n, s = {
        y: 0
    }, i = {
        x: 1,
        y: 1,
        z: 1
    }) {
        if (c in je) {
            const o = await je[c](e, t, n);
            return o.rotation.y = s.y, o.scale.set(i.x, i.y, i.z), o;
        } else {
            console.error(`Asset type "${c}" not found.`);
            return;
        }
    }
    const Ks = [
        {
            type: "grass",
            position: {
                x: -64,
                y: 0,
                z: -32
            },
            colliderType: "cuboid",
            rotation: {
                y: 1.5708
            },
            scale: {
                x: 1,
                y: 1,
                z: 1
            }
        },
        {
            type: "grass",
            position: {
                x: -32,
                y: 0,
                z: -32
            },
            colliderType: "cuboid",
            rotation: {
                y: 1.5708
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
                z: -32
            },
            colliderType: "cuboid",
            rotation: {
                y: 1.5708
            },
            scale: {
                x: 1,
                y: 1,
                z: 1
            }
        },
        {
            type: "grass",
            position: {
                x: 32,
                y: 0,
                z: -32
            },
            colliderType: "cuboid",
            rotation: {
                y: 1.5708
            },
            scale: {
                x: 1,
                y: 1,
                z: 1
            }
        },
        {
            type: "grass",
            position: {
                x: 64,
                y: 0,
                z: -32
            },
            colliderType: "cuboid",
            rotation: {
                y: 1.5708
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
                x: -64,
                y: 0,
                z: 0
            },
            colliderType: "cuboid",
            rotation: {
                y: 0
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
                x: -32,
                y: 0,
                z: 0
            },
            colliderType: "cuboid",
            rotation: {
                y: 0
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
                y: 0
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
                x: 32,
                y: 0,
                z: 0
            },
            colliderType: "cuboid",
            rotation: {
                y: 0
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
                x: 64,
                y: 0,
                z: 0
            },
            colliderType: "cuboid",
            rotation: {
                y: 0
            },
            scale: {
                x: 1,
                y: 1,
                z: 1
            }
        },
        {
            type: "grass",
            position: {
                x: -64,
                y: 0,
                z: 32
            },
            colliderType: "cuboid",
            rotation: {
                y: 1.5708
            },
            scale: {
                x: 1,
                y: 1,
                z: 1
            }
        },
        {
            type: "grass",
            position: {
                x: -32,
                y: 0,
                z: 32
            },
            colliderType: "cuboid",
            rotation: {
                y: 1.5708
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
                z: 32
            },
            colliderType: "cuboid",
            rotation: {
                y: 1.5708
            },
            scale: {
                x: 1,
                y: 1,
                z: 1
            }
        },
        {
            type: "grass",
            position: {
                x: 32,
                y: 0,
                z: 32
            },
            colliderType: "cuboid",
            rotation: {
                y: 1.5708
            },
            scale: {
                x: 1,
                y: 1,
                z: 1
            }
        },
        {
            type: "grass",
            position: {
                x: 64,
                y: 0,
                z: 32
            },
            colliderType: "cuboid",
            rotation: {
                y: 1.5708
            },
            scale: {
                x: 1,
                y: 1,
                z: 1
            }
        }
    ], Vs = {
        ground_tiles: Ks
    }, Xs = [
        {
            type: "car",
            position: {
                x: 0,
                y: 5,
                z: 0
            },
            rotation: {
                y: 0
            },
            scale: {
                x: 4,
                y: 4,
                z: 4
            },
            colliderType: "cuboid"
        }
    ], Ys = {
        vehicles: Xs
    };
    class Ws {
        constructor(e, t){
            this.sceneManager = e, this.physicsManager = t, this.mapGroup = new $, this.vehiclesGroup = new $, this.vehiclesGroup.name = "vehicles", this.physicsBodies = [];
        }
        async load() {
            this.mapGroup.add(await this.spawnGround()), this.sceneManager.addToScene(this.mapGroup), this.vehiclesGroup.add(await this.spawnVehicles()), this.sceneManager.addToScene(this.vehiclesGroup);
        }
        async spawnGround() {
            const e = new oe;
            e.name = "ground";
            for (const t of Vs.ground_tiles){
                const n = await Fe(t.type, t.position.x, t.position.y, t.position.z, t.rotation);
                n && (n.name = t.type, e.add(n));
            }
            return this.physicsManager.addGround(e), e;
        }
        async spawnVehicles() {
            const e = new oe;
            e.name = "vehicles";
            for (const t of Ys.vehicles){
                const n = await Fe(t.type, t.position.x, t.position.y, t.position.z, t.rotation, t.scale);
                n && (n.name = t.type, e.add(n), this.physicsManager.addCar(n));
            }
            return e;
        }
        unload() {}
    }
    class qs {
        constructor(){
            this.sceneManager = new ns, this.physicsManager = new os(this.sceneManager), this.mapManager = new Ws(this.sceneManager, this.physicsManager), this.init();
        }
        async init() {
            await this.initScene(), this.setupEventListeners(), this.animate();
        }
        async initScene() {
            await this.mapManager.load();
        }
        setupEventListeners() {
            window.addEventListener("resize", ()=>this.sceneManager.onWindowResize()), document.addEventListener("keydown", (e)=>{
                const t = this.sceneManager.sceneGraph.getObjectByName("car");
                if (!t || !t.userData.physicsBody) {
                    console.log("car not found");
                    return;
                }
                const n = t.userData.physicsBody;
                let s = new te(0, 0, 0), i = new te(0, 0, 0);
                const o = 500, a = 500, r = new x(0, 0, 1);
                switch(r.applyQuaternion(t.quaternion), r.normalize(), console.log("forward:", r), e.code){
                    case "KeyW":
                        s.x = r.x * o, s.y = r.y * o, s.z = r.z * o;
                        break;
                    case "KeyS":
                        s.x = -r.x * o, s.y = -r.y * o, s.z = -r.z * o;
                        break;
                    case "KeyA":
                        i.y = a;
                        break;
                    case "KeyD":
                        i.y = -500;
                        break;
                    case "Space":
                        n.setLinvel(new te(0, 0, 0), !0), n.setAngvel(new te(0, 0, 0), !0), n.resetForces(!0), n.resetTorques(!0);
                        break;
                }
                (s.x !== 0 || s.y !== 0 || s.z !== 0) && n.addForce(s, !0), (i.x !== 0 || i.y !== 0 || i.z !== 0) && n.addTorque(i, !0);
            });
        }
        animate() {
            requestAnimationFrame(()=>this.animate()), this.physicsManager.syncGraphics(), this.sceneManager.renderer.render(this.sceneManager.sceneGraph, this.sceneManager.camera);
        }
    }
    new qs;
});
