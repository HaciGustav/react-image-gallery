const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer>
            <div>
                <a href="https://www.linkedin.com/in/mehmet-f-k/">
                    <i class="fa-brands fa-linkedin"></i>
                </a>{' '}
                <a href="https://github.com/HaciGustav">
                    <i class="fa-brands fa-github"></i>
                </a>{' '}
            </div>
            <p>Developed by HaciGustav {date}</p>
        </footer>
    );
};

export default Footer;
