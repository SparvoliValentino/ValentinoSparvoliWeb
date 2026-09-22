import { I18nProvider } from './i18n';
import { Navbar } from './sections/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { Metrics } from './sections/Metrics/Metrics';
import { Experience } from './sections/Experience/Experience';
import { Projects } from './sections/Projects/Projects';
import { Stack } from './sections/Stack/Stack';
import { Education } from './sections/Education/Education';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './sections/Footer/Footer';

function App() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}

export default App;
