import React from 'react'
import '../style/style.css';

const ProjectsBody = () => {
  return (
    <>

<header class="headers">
        <img alt="" class="img" src="/img/code.svg" />
        <img alt="" class="img" src="/img/static_assets_rpm6.svg" />
    </header>

<section class=" section container ow container-center">
        <h1>Expense Manager</h1>
          <div class="icon">
            <b>Tech Stack :</b>
            <img alt="React" src="https://img.icons8.com/ios-glyphs/30/000000/react.png" />
            <img alt="TypeScript" src="https://img.icons8.com/material-rounded/24/typescript.png" />
              <img alt="HTML" src="https://img.icons8.com/ios-glyphs/30/000000/html.png" />
              <img alt="Javascript" src="https://img.icons8.com/ios-glyphs/30/000000/javascript" />
               <img alt="CSS" src="https://img.icons8.com/metro/26/css.png" />
            </div>
        <p>To help track and manage their financial transactions.</p>

        <div class="buttons">
            <a class=" link link-primary" target="_blank"
                href="https://expense-manager-two-azure.vercel.app/">Ease Expense
            </a>
        </div>
    </section>
    
    <section class=" section container container-center">
        <h1>Tic-Tac-Toe</h1>
          <div class="icon">
            <b>Tech Stack :</b>
            <img alt="Android" src="https://img.icons8.com/ios-glyphs/30/000000/react.png" />
              <img alt="Android" src="https://img.icons8.com/ios-glyphs/30/000000/html.png" />
              <img alt="Android" src="https://img.icons8.com/ios-glyphs/30/000000/javascript" />
               <img alt="Android" src="https://img.icons8.com/metro/26/css.png" />
            </div>
        <p>Play a fun refreshing game!</p>

        <div class="buttons">
            <a class=" link link-primary" target="_blank"
                href="https://palakbatra1999.github.io/TicTacToe/">Dare to win?
            </a>
        </div>
    </section>

    <section class="section container ow container-center">
        <h1>TODO App</h1>
         <div class="icon">
            <b>Tech Stack :</b>
            <img alt="Android" src="https://img.icons8.com/ios-glyphs/30/000000/react.png" />
              <img alt="Android" src="https://img.icons8.com/ios-glyphs/30/000000/html.png" />
              <img alt="Android" src="https://img.icons8.com/ios-glyphs/30/000000/javascript" />
               <img alt="Android" src="https://img.icons8.com/metro/26/css.png" />
            </div>
        <p>Make sure you don't forget anything important on your list with this App.</p>
    
        <div class="buttons">
            <a class="link link-primary" target="_blank" href="https://palakbatra1999.github.io/todoapp/">Todo App
            </a>
        </div>
    </section>

     <section class=" section  container container-center">
         <h1>Spotcheck Fund Factsheet</h1>
          <div>
            <b> Tech Stack </b>: <span style={{ fontStyle: "italic" }}>This tool was made using Django, Python, Selenium tool, API, HTML, CSS.</span>
          </div>

        <p>Took complete ownership of building a tool that fetches the data from <b>exposed APIs</b> of Fidelity and its
            competitor companies and compares it on the basis of favorable attributes provided by the business.
            Highlights the discrepancies upon discovery. <b>Reduced the Manual work by 90%.</b>
             <b> Tech Stack </b>: <span style={{ fontStyle: "italic" }}>This tool was made using Django, Python, Selenium tool, API, HTML, CSS.</span>
             
         </p>
      
    </section>

    <section class="section ow container container-center">
        <h1>Track It</h1>
        <div class="icon">
             <b> Tech Stack </b>:
            <img alt="Python" src="https://img.icons8.com/ios-glyphs/30/000000/python.png" />
            <img alt="Pycharm" src="https://img.icons8.com/windows/30/000000/pycharm.png" />
        </div>
        <p>
            Coronavirus (COVID-19) Tracker App Using REST API & Volley Library.
        </p>
        <div class="buttons">
            <a class="link link-primary" target="_blank" href="https://github.com/palakbatra1999/Covid19Tracker">Source Code</a>
        </div>
    </section>
    
    </>
  )
}

export default ProjectsBody