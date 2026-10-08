// Spotlight effect for the homepage bento panel.
// A soft circle of light follows the cursor (eased) and drifts back to its
// resting spot when the cursor leaves.
(function () {
    var panel = document.querySelector('.center-bento');
    if (!panel) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var REST_X = 0.68, REST_Y = 0.52;

    var r0 = panel.getBoundingClientRect();
    var target = { x: r0.width * REST_X, y: r0.height * REST_Y };
    var current = { x: target.x, y: target.y };
    var running = false;

    function render() {
        panel.style.setProperty('--mx', current.x.toFixed(1) + 'px');
        panel.style.setProperty('--my', current.y.toFixed(1) + 'px');
    }

    function tick() {
        current.x += (target.x - current.x) * 0.12;
        current.y += (target.y - current.y) * 0.12;
        render();
        if (Math.abs(target.x - current.x) > 0.4 || Math.abs(target.y - current.y) > 0.4) {
            requestAnimationFrame(tick);
        } else {
            running = false;
        }
    }

    function moveTo(x, y) {
        target.x = x;
        target.y = y;
        if (reduceMotion) {
            current.x = x;
            current.y = y;
            render();
        } else if (!running) {
            running = true;
            requestAnimationFrame(tick);
        }
    }

    panel.addEventListener('pointermove', function (e) {
        var r = panel.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
    });

    panel.addEventListener('pointerleave', function () {
        var r = panel.getBoundingClientRect();
        moveTo(r.width * REST_X, r.height * REST_Y);
    });

    render();
})();
