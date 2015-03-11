interact('.slider')                   // target the matches of that selector
  .origin('self')                     // (0, 0) will be the element's top-left
  .restrict({drag: 'self'})           // keep the drag within the element
  .inertia(true)                      // start inertial movement if thrown
  .draggable({                        // make the element fire drag events
    max: Infinity                     // allow drags on multiple elements
  })
  .on('dragmove', function (event) {  // call this function on every move
    var sliderWidth = interact.getElementRect(event.target.parentNode).width,
        value = event.pageX / sliderWidth;

    event.target.style.paddingLeft = (value * 100) + '%';
    event.target.setAttribute('data-value', value.toFixed(2));
  });

interact.maxInteractions(Infinity);   // Allow multiple interactions