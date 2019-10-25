import Vue from "vue";

var intersectionOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

Vue.directive('scroll', {
    inserted: (el, binding) => {

        if (window.IntersectionObserver) {
            el.classList.add('animate', binding.value.class)
            const intersectionObserver = new IntersectionObserver((entries, observer) => {

                if (entries[0].intersectionRatio === undefined) {
                    el.classList.add('active')
                    return
                };


                entries.forEach((entry) => {
                    // when element's is in viewport, animate it!
                    if (entry.intersectionRatio >= 0.5) {
                        el.classList.add('active')
                    }

                    if (el.classList.contains('active')) {
                        observer.unobserve(entry.target);
                    }
                });

            }, intersectionOptions);
            intersectionObserver.observe(el)
        }

    }
});


Vue.directive('scrollCounter', {
    inserted: (el, binding) => {

        if (window.IntersectionObserver) {
            const intersectionObserver = new IntersectionObserver((entries, observer) => {
                if (entries[0].intersectionRatio === undefined) return
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= 0.5) {
                        animateValue(el, 0, binding.value.number, 2000)
                        observer.unobserve(entry.target);
                    }
                });

            }, intersectionOptions);
            intersectionObserver.observe(el)
        }

        const animateValue = (el, start, end, duration) => {
            let current = start;
            let stepTime = Math.abs(Math.floor(duration / (end - start)));
            let timer = setInterval(() => {
                current += 1;
                el.innerHTML = current;
                if (current == end) clearInterval(timer);
            }, stepTime)
        }

    }
});
