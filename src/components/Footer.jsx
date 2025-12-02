// Footer component
export default function Footer() {
  return (
    <footer aria-label="Pie de página" className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Adrian Neuville</p>
        <nav aria-label="Redes sociales" className="socials">
          <ul>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
