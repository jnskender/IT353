document.addEventListener('DOMContentLoaded', function() {
    render_header();
}, false);



function render_header() {
    document.getElementById("render_head").innerHTML=`
    <header class="main_head">
          <h1>John Skender</h1>
          <nav class="main_nav">
            <ul>
              <li><a href="../index.html">Home</a></li> <span class="seperator">|</span>
              <li><a href="assignments/assignments.html">Assignments</a></li><span class="seperator">|</span>
              <li><a href="#">Resume</a></li><span class="seperator">|</span>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>`;
}
