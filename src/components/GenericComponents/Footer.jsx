export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4">
      <div className="container mx-auto py-6 md:py-8">
        <p className="text-center text-xs sm:text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Adrian Neuville. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
