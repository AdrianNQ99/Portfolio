export default function Footer() {
  return (
    <footer className="footer-section ">
      <div className="container mx-auto py-4">
        <div className="footer-content">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Adrian Neuville 
          </p>
        </div>
      </div>
    </footer>
  );
}
