import React from 'react';

const Footer = () => {
  return (
    <>
    <footer class="footer">
        <div class="footer-header">Get in Touch</div>
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