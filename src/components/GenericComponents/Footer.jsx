export default function Footer() {
  return (
    <footer className="footer-section px-4">
      <div className="container mx-auto py-4 md:py-6">
        <div className="footer-content">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Adrian Neuville. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
