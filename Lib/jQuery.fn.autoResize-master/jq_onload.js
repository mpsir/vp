//<div class="vp-onload" onload="$(this).text('Hello1');"></div>
//<div class="vp-onload" onload="hello()"></div>

function hello() {
    alert('Hello world! in func hello');
}
$(function() {
    $('.vp-onload[onload]').trigger('onload');
});