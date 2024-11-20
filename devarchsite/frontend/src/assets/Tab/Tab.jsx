import React, { startTransition } from 'react'
import './Tab.css'
import { assets, tabDataService } from '../../assets/assets'
import { useState, useTransition } from 'react'

function Tab() {
    const tabs = document.querySelectorAll('.tabs');
    const content = document.querySelectorAll('.content');
    let index = 0;
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('active')) {
                return;
            } else {
                tab.classList.add('active');
            }

            index = tab.getAttribute('data-index');

            for (i = 0; i < tabs.length; i++) {
                if (tabs[i].getAttribute('data-index')
                    != index) {
                    tabs[i].classList.remove('active');
                }
            }

            for (j = 0; j < content.length; j++) {
                if (content[j].getAttribute('data-index') == index) {
                    content[j].classList.add('activeContent');
                } else {
                    content[j].classList.remove('activeContent');
                }
            }

        })
    })

    return (
        <div className='container'>
            <div className="tab-container">
                <div className="tabs active" data-index='1'> SITE INTERNET </div>
                <div className="tabs" data-index='2'> APPLICATION WEB</div>
                <div className="tabs" data-index='3'>REFERENCEMENT SEO</div>
                <div className="tabs" data-index='4'>REFERENCEMENT SEA</div>
                <div className="tabs" data-index='5'>MAINTENANCE</div>
            </div>
            <div className="content activeContent" data-index='1'>
                <h3> Création de site internet</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>
            </div>
            <div className="content " data-index='2'>
                <h3> Créations d'applications web et mobile</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>
            </div>
            <div className="content " data-index='3'>
                <h3> Référencements Naturels</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>
            </div>
            <div className="content" data-index='4'>
                <h3> Référencements payants</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>
            </div>
            <div className="content" data-index='5'>
                <h3> Maintenance de site internet</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, praesentium, dolores quo dignissimos veniam possimus odit
                    facere distinctio sapiente cumque unde aut provident, consequatur labore ipsam recusandae minima itaque nobis? </p>
            </div>
        </div>
    )
}

export default Tab;
