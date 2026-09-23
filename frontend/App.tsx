import React, { useState } from 'react';
import { NavSection, UserSession } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ParentsSection } from './components/ParentsSection';
import { WolfcubsSection } from './components/WolfcubsSection';
import { PhotoAlbumsSection } from './components/PhotoAlbumsSection';
import { CalendarSection } from './components/CalendarSection';
import { MetrizaSection } from './components/MetrizaSection';
import { ContactSection } from './components/ContactSection';
import { AuthSection } from './components/AuthSection';
import { BalooAdvisorModal } from './components/BalooAdvisorModal';
import { AccountGeneratorModal } from './components/AccountGeneratorModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<NavSection>('home');
  const [isBalooModalOpen, setIsBalooModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const [session, setSession] = useState<UserSession>({
    isLoggedIn: false,
    role: 'vizitator',
    name: 'Vizitator'
  });

  const handleLogin = (role: UserSession['role'], name: string, sizaine?: string) => {
    setSession({
      isLoggedIn: true,
      role,
      name,
      sizaine
    });
  };

  const handleLogout = () => {
    setSession({
      isLoggedIn: false,
      role: 'vizitator',
      name: 'Vizitator'
    });
  };

  const handleAccountCreated = (role: UserSession['role'], name: string, sizaine?: string) => {
    handleLogin(role, name, sizaine);
    setCurrentSection('auth');
  };

  const renderActiveSection = () => {
    switch (currentSection) {
      case 'home':
        // Exactly one main screen: Hero with quote and 4 metrics, nothing else stacked underneath
        return (
          <HeroSection
            onNavigate={setCurrentSection}
            onOpenBaloo={() => setIsBalooModalOpen(true)}
          />
        );
      case 'parinti':
        return <ParentsSection />;
      case 'lupisori':
        return <WolfcubsSection />;
      case 'albume':
        return <PhotoAlbumsSection />;
      case 'calendar':
        return <CalendarSection />;
      case 'metriza':
        return <MetrizaSection />;
      case 'contact':
        return <ContactSection />;
      case 'auth':
        return (
          <AuthSection
            session={session}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />
        );
      default:
        return (
          <HeroSection
            onNavigate={setCurrentSection}
            onOpenBaloo={() => setIsBalooModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-scout-dark text-slate-200">
      <Navbar
        currentSection={currentSection}
        onNavigate={setCurrentSection}
        session={session}
        onOpenBalooModal={() => setIsBalooModalOpen(true)}
        onOpenGenerateAccountModal={() => setIsAccountModalOpen(true)}
        onLogout={handleLogout}
      />

      <main className="flex-1 flex flex-col">
        {renderActiveSection()}
      </main>

      <Footer onNavigate={setCurrentSection} />

      <BalooAdvisorModal
        isOpen={isBalooModalOpen}
        onClose={() => setIsBalooModalOpen(false)}
      />

      <AccountGeneratorModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        onAccountCreated={handleAccountCreated}
      />
    </div>
  );
};

export default App;
