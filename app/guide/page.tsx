import Footer from "@/components/Footer";
import Header from "@/components/header";
import Guide from "@/components/appguide";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-gray-50 scroll-smooth">
        <Header/>
        <Guide />
        <Footer/>
        </main>
    );
}