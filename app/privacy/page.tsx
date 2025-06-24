import Footer from "@/components/Footer";
import Header from "@/components/header";
import Privacy from "@/components/Privacy";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-gray-50 scroll-smooth">
        <Header/>
        <Privacy />
        <Footer/>
        </main>
    );
}