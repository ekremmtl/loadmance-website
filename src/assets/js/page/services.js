import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

$(function () {
    // Animation
    let defaultEase = "circ.inOut";

    function loadAnimation() {
        setTimeout(() => {
            // List Item
            batch(".services-list-container .list-body .list-item", {
                interval: 0.1,
                batchMax: 3,
                onEnter: batch => gsap.to(batch, {
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: defaultEase,
                    overwrite: true
                }),
            });

            function batch(targets, vars) {
                let varsCopy = {},
                    interval = vars.interval || 0.1,
                    proxyCallback = (type, callback) => {
                        let batch = [],
                            delay = gsap.delayedCall(interval, () => { callback(batch); batch.length = 0; }).pause();
                        return self => {
                            batch.length || delay.restart(true);
                            batch.push(self.trigger);
                            vars.batchMax && vars.batchMax <= batch.length && delay.progress(1);
                        };
                    },
                    p;

                for (p in vars) {
                    varsCopy[p] = (~p.indexOf("Enter") || ~p.indexOf("Leave")) ? proxyCallback(p, vars[p]) : vars[p];
                }

                gsap.utils.toArray(targets).forEach(target => {
                    let config = {};
                    for (p in varsCopy) {
                        config[p] = varsCopy[p];
                    }
                    config.trigger = target;
                    ScrollTrigger.create(config);
                });
            }
        }, 800);
    }

    if ($(window).width() >= 1200) {
        loadAnimation();
    }

    $(window).resize(function () {
        if ($(window).width() >= 1200) {
            loadAnimation();
        }
    });
})