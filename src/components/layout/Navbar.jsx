import React, {useState, useEffect} from 'react'
import { Code, Menu, X } from 'lucide-react'
import {NAV_LINKS, Personal_info} from '../../utilis/constant'
import {scrollToSection, useScrollSpy} from '../../hooks/useScrollSpy'





const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));


  useEffect(() =>{
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);
  
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false); 
  };
  
  return (
  
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/30 backdrop-blur-lg'
          : 'bg-transparent'
      }`}

      style={{ transform: 'translate3d(0, 0, 0)'}}
    >

      <div className='max-w-[1322px] mx-auto px-5'>
        <div className='flex items-center justify-between'>
          {/* Logo */}

          <div className='flex items-center gap-4'>
            <Code className='w-6 h-6 text-white' />

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="text-2xl font-bold text-white hover:text-white/80 transition"


                aria-label="home"
            >
              {Personal_info.name.trim()}
            </button>
            </div>

            {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
  {NAV_LINKS.map((link) => (
    <button
      key={link.id}
      onClick={() => handleNavClick(link.id)}
      className={`text-base font-medium transition-all duration-300 ${
        activeSection === link.id
          ? 'text-white'
          : 'text-white hover:text-white/70'
      }`}
    >
      {link.label}
    </button>
  ))}
</div>

{/* CTA Button*/}
<div className='hidden md:flex items-center gap-2'>
  <button
  onClick={() => handleNavClick('contact')}
  className='px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300'
  >
    Resume

  </button>

</div>

{/* Mobile Menu Button */}

<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden p-4 text-white hover:text-white/80 transition-colors"
  aria-label="menu"
  aria-expanded={isMenuOpen}
>
  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>



        </div>

      </div>
{/* Mobile Menu */}
<div
  className={`md:hidden transition-all duration-300 overflow-hidden ${
    isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <div className="bg-black/95 backdrop-blur-lg border-t border-white/20 px-5 py-6 space-y-6">
    {NAV_LINKS.map((link) => (
      <button
        key={link.id}
        onClick={() => handleNavClick(link.id)}
        className="block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 text-white hover:opacity-80"
      >
        {link.label}
      </button>
    ))}

    <button
      onClick={() => handleNavClick('contact')}
      className="w-full px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300 mt-2"
    >
      Resume
    </button>
  </div>
</div>



    </nav>

   

);

}

export default Navbar