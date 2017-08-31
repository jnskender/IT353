document.addEventListener('DOMContentLoaded', function() {
    render_header();
}, false);



function render_header() {
    document.getElementById("render_head").innerHTML=`
    <header class="main_head">
          <h1>John Skender</h1>
          <nav class="main_nav">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="assignments.html">Assignments</a></li>
              <li><a href="#">Resume</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>`;
}
