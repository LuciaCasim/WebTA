import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';

const observer = new IntersectionObserver(handleIntersection, { threshold: [1] });
let annotations;


document.addEventListener('DOMContentLoaded', function () {
  annotations = Array.from(document.querySelectorAll('*[data-annotate]'))
    .map((element, i) => {
      const id = i.toString();
      const annotation = annotate(element, {
        type: 'highlight', color: '#FCE39F',
        animationDuration: 3000,
        stroke: 1
      });
      element.dataset.annotateId = id;
      observer.observe(element);
      return { id, annotation };
    });
});


function handleIntersection(entries, observer) {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      const element = entry.target;
      const annotation = annotations
        .filter(({ id }) => id === element.dataset.annotateId)[0].annotation;
        setTimeout(annotation.show(), 10000);
    });
}
  