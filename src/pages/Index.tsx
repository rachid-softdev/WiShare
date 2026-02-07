import QRCodeGenerator from "@/components/QRCodeGenerator";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <QRCodeGenerator />
      <Footer />
    </div>
  );
};

export default Index;