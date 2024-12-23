function Menu() {
    const handleClick = (text) => {
        alert(text);
    };

    return (
        <nav>
            <ul>
                <li onClick={() => handleClick('Notes')}>Notes</li>
                <li onClick={() => handleClick('Etudiants')}>Etudiants</li>
                <li onClick={() => handleClick('Matières')}>Matières</li>
                <li onClick={() => handleClick('A propos')}>A propos</li>
            </ul>
        </nav>
    );
}

export default Menu;