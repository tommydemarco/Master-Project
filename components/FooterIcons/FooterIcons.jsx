import styles from "./FooterIcons.module.scss"

export const FooterIcons = () => {
    return (
        <div className={styles["footer-icons"]}>
            <ul className="social-list">
                <li>
                    <a><i className="icofont-facebook"></i></a>
                </li>
                <li>
                    <a><i className="icofont-instagram"></i></a>
                </li>
                <li>
                    <a><i className="icofont-twitter"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default FooterIcons;
