import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Dashboards } from "@/components/Dashboards";
import { AnalyticsProcess } from "@/components/AnalyticsProcess";
import { Services } from "@/components/Services";
import { Learning } from "@/components/Learning";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Section */}
      <About />

      {/* 4. Skills Section */}
      <Skills />

      {/* 5. Experience Section */}
      <Experience />

      {/* 6. Projects Section */}
      <Projects />

      {/* 7. Dashboards Section */}
      <Dashboards />

      {/* 8. Analytics Process Section */}
      <AnalyticsProcess />

      {/* 9. Services Section */}
      <Services />

      {/* 10. Learning Section */}
      <Learning />

      {/* 11. Contact Section */}
      <Contact />

      {/* 12. Footer */}
      <Footer />
    </main>
  );
}
