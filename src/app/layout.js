import "./globals.css";
import Footer from "../components/Footer";
import FloatingNav from "../components/FloatingNav";

export const metadata = {
  title: "Portfólio Pessoal",
  description: "Site simples em Next.js com páginas de início, sobre, projetos e stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site-shell">
          <main className="site-main">{children}</main>
          <FloatingNav />
          <Footer />
        </div>
      </body>
    </html>
  );
}
