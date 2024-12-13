import React from 'react';
import '../style/style.css';

const Navigation=()=> {
  return (
    <nav class="navigation container">

        <div id="nav-name">
            <a class="link" href="/">Palak Batra</a>
        </div>

        <ul class="nav-items">
            <li class="list-item-inline">
                <a class="link" id="link-active" href="/">Home</a>
            </li>
            <li class="list-item-inline">
                <a class="link " href="/src/projects.html">Projects</a>
            </li>
            <li class="list-item-inline">
                <a class="link " href="/src/blog.html">Blogs</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation