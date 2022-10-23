import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/footer.module.css';
import SiteLogo from '../../public/storefront_logo.png'
import portfolioImage from '../../public/logofilled.png'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn, FaDiscord } from 'react-icons/fa'

const Footer = () => {
    const portfolioLink = "https://sushantgangwar.netlify.app/";
    const githubLink = "https://github.com/sushantgwr87";
    const linkedinLink = "https://www.linkedin.com/in/sushant-gangwar/";
    const discordLink = "https://discordapp.com/users/1026288306838851615";

    const [modalShow, setModalShow] = useState(false);

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_Logo}>
                <Image src={SiteLogo} width="70%" height="70%" alt="logo" />
            </div>
            <div className={styles.footer_outLinks}>
                <Link href={portfolioLink}>
                    <a target="_blank" rel="noopener noreferrer">
                        <Image src={portfolioImage} width="40%" height="40%" alt="logo" />
                    </a>
                </Link>
                <Link href={githubLink}>
                    <a target="_blank" rel="noopener noreferrer">
                        <BsGithub className={styles.icon_links} />
                    </a>
                </Link>
                <Link href={linkedinLink}>
                    <a target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className={styles.icon_links} />
                    </a>
                </Link>
                <Link href={discordLink}>
                    <a target="_blank" rel="noopener noreferrer">
                        <FaDiscord className={styles.icon_links} />
                    </a>
                </Link>
            </div>
            <ul className={styles.footer_navbar}>
                <li>
                    <a href="https://medusajs.com" target="_blank" rel="noopener noreferrer">
                        Medusa
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/medusajs" target="_blank" rel="noopener noreferrer">
                        Medusa Twitter
                    </a>
                </li>
                <li>
                    <a href="https://discord.com/invite/medusajs" target="_blank" rel="noopener noreferrer">
                        Medusa Discord
                    </a>
                </li>
                <li>
                    <a href="https://docs.medusajs.com/tutorial/set-up-your-development-environment/" target="_blank" rel="noopener noreferrer">
                        Medusa Tutorial
                    </a>
                </li>
            </ul>
            <a href="https://github.com/sushantgwr87/medusa-storefront" target="_blank" className={styles.footer_modal___btn} rel="noopener noreferrer">
                <span>Repo Link</span>
            </a>
            <div className={styles.footer_copyright}>
                <h3>Copyright 2022. All Rights Reserved.</h3>
            </div>
        </footer >
    );
};

export default Footer;