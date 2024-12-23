// src/Footer.jsx
function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>© {year} - Soufiane.Aniba, Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;