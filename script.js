const elements = document.querySelectorAll(".fadeinleft");
const elements1 = document.querySelectorAll(".fade-in");
const elements2 = document.querySelectorAll(".fadeinright");
const elements3 = document.querySelectorAll(".fadeindown");
const elements4 = document.querySelectorAll(".fadeinup");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};
const callbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-left");
    }
  });
};
const callbacks1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};
const callbacks2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-right");
    }
  });
};
const callbacks3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-down");
    }
  });
};
const callbacks4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-up");
    }
  });
};
let observer = new IntersectionObserver(callbacks, options);
let observer1 = new IntersectionObserver(callbacks1, options);
let observer2 = new IntersectionObserver(callbacks2, options);
let observer3 = new IntersectionObserver(callbacks3, options);
let observer4 = new IntersectionObserver(callbacks4, options);
elements.forEach((elements) => {
  observer.observe(elements);
});
elements1.forEach((elements1) => {
  observer1.observe(elements1);
});
elements2.forEach((elements2) => {
  observer2.observe(elements2);
});
elements3.forEach((elements3) => {
  observer3.observe(elements3);
});
elements4.forEach((elements4) => {
  observer4.observe(elements4);
});


$('.owl-carousel').owlCarousel({
    dots:false,
    loop:true,
    margin:25,
    nav:false,  
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


console.clear();

setTimeout(function(){
  document.querySelector('input[type="checkbox"]').setAttribute('checked',true);
},100);
/*

// Javascript was initially used, but wasn't really necessary. Javascript droppped, but left here for archival purposes.

var todoTemplate = function(id){ 
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 25" class="todo__icon">
    <defs>
      <mask id="myMask${id}" maskUnits="userSpaceOnUse" x="0" y="0">
        <g stroke="#FFF" fill="none">
          <path class="todo__line" d="M21 12.3h168"/>
          <path class="todo__box" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"/>
          <path class="todo__check" d="M10 13l2 2 5-5"/>
        </g>
      </mask>
    </defs>
    <rect fill="url(#todoGradient)" mask="url(#myMask${id})" width="100%" height="100%" />
    <circle class="todo__circle" cx="13.5" cy="12.5" r="10" />
  </svg>`
};

var todos = [ ...document.querySelectorAll('.todo') ].forEach(activateTodo);

function offsetPath(path, offset){
  var length = path.getTotalLength();
  path.style.transition = 'none';
  path.style.strokeDasharray = length + ' ' + length + offset;
  path.style.strokeDashoffset = length; 
  setTimeout(function(){ path.style.transition = null; },20);
  return length;
}

function togglePath(path, toggle, offset = 0){
  var length = offsetPath(path, offset);

  function updatePath(toggle){
    return path.style.strokeDashoffset = ( toggle ? -offset : length );
  }

  updatePath(toggle);
  return updatePath;
}

function activateTodo(todo, i){
  
  todo.insertAdjacentHTML('afterbegin', todoTemplate(i));
  
  var line = todo.querySelector('.todo__line'),
      updateLine = togglePath(line, false, 4);

  var box = todo.querySelector('.todo__box'),
      updateBox = togglePath(box, true);

  var check = todo.querySelector('.todo__check'),
      updateCheck = togglePath(check);

  var toggle = false;

  todo.addEventListener('click', function(){
    toggle = !toggle;
    updateLine(toggle);
    updateBox(!toggle);
    updateCheck(toggle);
    if ( todo.classList ) { todo.classList[ toggle ? 'add' : 'remove' ]('todo--checked'); }
  });
  
}

*/