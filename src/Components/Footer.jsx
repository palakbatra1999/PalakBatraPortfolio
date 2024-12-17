import React from 'react';
import '../style/style.css';

const Footer = () => {
  return (
    <>
    <footer class="footer">
    <p>© 2024 Palak Batra. All Rights Reserved.</p>
        <ul class="social-links ">
            <li class="list-item-inline">
                <a class="link" href="https://github.com/palakbatra1999">
                    <img alt="github" class="footer-icons" src="../img/Octicons-mark-github.svg" />
                </a>
            </li>
            <li class="list-item-inline">
                <a class="link" href="https://www.linkedin.com/in/palak-batra-424971147/">
                    <img alt="linkedin" class="footer-icons" src="../img/linkedin.svg" />
                </a>
            </li>
            <li class="list-item-inline">
                <a class="link" href="https://leetcode.com/palakbatra1999/">
                    <img alt="leetcode" class="footer-icons" src="../img/LeetCode.svg" />
                </a>
            </li>
        </ul>
    </footer></>
  )
}

export default Footer