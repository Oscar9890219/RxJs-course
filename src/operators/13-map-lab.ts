import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis diam a cursus fermentum. Proin commodo blandit viverra. Donec a dictum dui. Nam placerat consectetur viverra. Donec vulputate convallis lacus, et varius nisl facilisis non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin feugiat, urna vitae efficitur gravida, felis justo accumsan mauris, at eleifend neque augue nec massa.
<br/><br/>
Integer maximus sed lectus nec maximus. Phasellus rutrum turpis pharetra est finibus elementum. Donec ante augue, rutrum eget feugiat sit amet, varius faucibus augue. Integer quis facilisis nunc, et tempor lacus. Pellentesque in nisl risus. Morbi finibus vitae justo eu faucibus. Nunc interdum sit amet ipsum et ullamcorper. Cras ultrices ac ex eget posuere. Nam eget mi id nunc dapibus volutpat. Aenean vestibulum dui erat, eget dapibus erat molestie at. Nullam nibh purus, varius a erat et, pharetra faucibus massa. Cras at gravida massa, porttitor placerat ligula. Cras sed neque sit amet lacus gravida congue nec id justo.
<br/><br/>
Donec eget tempus diam, quis porttitor est. Pellentesque sagittis sem eget risus condimentum, non congue nunc sagittis. Sed vulputate porttitor orci, ac blandit nisl feugiat eget. Phasellus varius semper diam. Quisque non purus ac ipsum sagittis finibus. Vivamus a condimentum tellus, nec suscipit eros. Cras sagittis ornare augue, ac pretium tortor gravida in. Vestibulum leo odio, tempus quis venenatis commodo, aliquet vel arcu. Proin tincidunt placerat ultrices. Nam vehicula nec dui eget mollis. Cras ac cursus sem. Donec ac tincidunt dui, at volutpat est. In hendrerit quam at purus rhoncus, et ornare lacus blandit. Duis feugiat vestibulum rhoncus.
<br/><br/>
Morbi scelerisque quis eros eget lacinia. Curabitur vitae nunc a turpis bibendum faucibus suscipit in libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse mattis leo ut arcu ultricies rutrum. Quisque tristique egestas mi, quis tristique elit. Nunc quis purus commodo, efficitur libero ut, pellentesque augue. Etiam vel aliquet tellus. Donec tempus sagittis dictum. Aliquam ultrices arcu ex, in blandit sapien varius vitae. Proin blandit quis mi eget condimentum. Suspendisse potenti.
<br/><br/>
Nunc ut aliquam sapien. Etiam et consectetur eros. In ut facilisis sem. Sed ac maximus massa. In et volutpat magna. In augue eros, convallis consequat metus id, convallis feugiat quam. Sed facilisis felis vel venenatis consequat.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis diam a cursus fermentum. Proin commodo blandit viverra. Donec a dictum dui. Nam placerat consectetur viverra. Donec vulputate convallis lacus, et varius nisl facilisis non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin feugiat, urna vitae efficitur gravida, felis justo accumsan mauris, at eleifend neque augue nec massa.
<br/><br/>
Integer maximus sed lectus nec maximus. Phasellus rutrum turpis pharetra est finibus elementum. Donec ante augue, rutrum eget feugiat sit amet, varius faucibus augue. Integer quis facilisis nunc, et tempor lacus. Pellentesque in nisl risus. Morbi finibus vitae justo eu faucibus. Nunc interdum sit amet ipsum et ullamcorper. Cras ultrices ac ex eget posuere. Nam eget mi id nunc dapibus volutpat. Aenean vestibulum dui erat, eget dapibus erat molestie at. Nullam nibh purus, varius a erat et, pharetra faucibus massa. Cras at gravida massa, porttitor placerat ligula. Cras sed neque sit amet lacus gravida congue nec id justo.
<br/><br/>
Donec eget tempus diam, quis porttitor est. Pellentesque sagittis sem eget risus condimentum, non congue nunc sagittis. Sed vulputate porttitor orci, ac blandit nisl feugiat eget. Phasellus varius semper diam. Quisque non purus ac ipsum sagittis finibus. Vivamus a condimentum tellus, nec suscipit eros. Cras sagittis ornare augue, ac pretium tortor gravida in. Vestibulum leo odio, tempus quis venenatis commodo, aliquet vel arcu. Proin tincidunt placerat ultrices. Nam vehicula nec dui eget mollis. Cras ac cursus sem. Donec ac tincidunt dui, at volutpat est. In hendrerit quam at purus rhoncus, et ornare lacus blandit. Duis feugiat vestibulum rhoncus.
<br/><br/>
Morbi scelerisque quis eros eget lacinia. Curabitur vitae nunc a turpis bibendum faucibus suscipit in libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse mattis leo ut arcu ultricies rutrum. Quisque tristique egestas mi, quis tristique elit. Nunc quis purus commodo, efficitur libero ut, pellentesque augue. Etiam vel aliquet tellus. Donec tempus sagittis dictum. Aliquam ultrices arcu ex, in blandit sapien varius vitae. Proin blandit quis mi eget condimentum. Suspendisse potenti.
<br/><br/>
Nunc ut aliquam sapien. Etiam et consectetur eros. In ut facilisis sem. Sed ac maximus massa. In et volutpat magna. In augue eros, convallis consequat metus id, convallis feugiat quam. Sed facilisis felis vel venenatis consequat.

`;


const body = document.querySelector('body');

body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar')

body.append(progressBar);


// funcion que haga el calculo

const calcularPorcentajeScroll = (event) => {

    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;

}

// Streams

const scroll$ = fromEvent(document, 'scroll');


scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(

    map(calcularPorcentajeScroll),
    tap( console.log  )

);

progress$.subscribe(porcentaje => {

    progressBar.style.width = `${porcentaje}%`

});