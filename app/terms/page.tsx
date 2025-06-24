import Footer from "@/components/Footer";
import Header from "@/components/header";
import TermsContent from "@/components/TermsContent";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-gray-50 scroll-smooth">
        <Header/>
        <TermsContent />
        <Footer/>
        </main>
    );
}