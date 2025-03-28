
import './App.css';
import Footer from './components/footer';
import Nav from './components/nav';
import PopulaBootcamp from './components/popula-bootcamp';
import PopulaInvestment from './components/popula-investment';
import PopulaTech from './components/popula-tech';
import WelcomeText from './components/welcome-text';



function App() {
  return (
    <main className="app-container">
      {/* HEADER SECTION */}
      <header className='header'>
         <Nav />
      </header>

      {/* WELCOME TEXT SECTION */}
      <WelcomeText />

      {/* OUR SERVICES SECTION */}

      {/* POPULA TECH SECTION */}
      <PopulaTech />

      {/* POPULA INVESTMENT SECTION */}
      <PopulaInvestment />

      {/* POPULA BOOTCAMP SECTION */}
      <PopulaBootcamp />

      <footer className='main-footer'>
        <Footer />
      </footer>
      
    </main>
  );
}

export default App;
