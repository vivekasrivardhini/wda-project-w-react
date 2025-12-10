import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import LinkSection from '../components/LinkSection';
import { 
  officialSites, 
  movieDownloadSites, 
  movieStreamingSitesA, 
  movieStreamingSitesB,
  animeSitesA,
  animeSitesB,
  gameSitesA,
  gameSitesB
} from '../data'; 

const OfficialLinks = () => (
    <section id="officials" className="container-fluid mt-5">
        <h2 className="text-center mb-3 text-light">Official Websites (Paid)</h2>
        <p className="text-center text-muted mb-4">These are verified platforms offering premium streaming or downloads.</p>
        
        <div className="row row-cols-2 row-cols-lg-5 g-4 text-center"> 
            {officialSites.map((site, index) => (
                <div className="col" key={index}>
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <div className="card border-0 shadow-sm h-100 p-3 bg-dark"> 
                            <img src={site.logo} alt={site.name} className="img-fluid mb-2" style={{ maxHeight: '60px' }} />
                            <h6 className="fw-bold text-light">{site.name}</h6>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    </section>
);

function Home() { 
    
  useEffect(() => {
    if (window.bootstrap) {
      const offcanvasElement = document.getElementById('offcanvasNavbar');
      if (offcanvasElement) {
        new window.bootstrap.Offcanvas(offcanvasElement);
      }
    }
  }, []);
  
    return (
        <div className="d-flex w-100 min-vh-100"> 
            
            <Sidebar />

            <div className="flex-grow-1">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <div className="container-fluid">
                        
                        <button 
                            key="sidebar-toggler"
                            className="navbar-toggler me-3" 
                            type="button" 
                            data-bs-toggle="offcanvas" 
                            data-bs-target="#offcanvasNavbar" 
                            aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <a className="navbar-brand fw-bold" href="#home">Entertainment Dashboard</a>

                        <Link to="/" className="btn btn-sm btn-outline-light ms-auto d-lg-none">
                            Logout
                        </Link>

                    </div>
                </nav>
            
                <div className="container-fluid">
                    
                    <section id="home" className="mt-3">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner rounded shadow">
                                <div className="carousel-item active">
                                    <img src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5" className="d-block w-100" height="400" alt="Discover Movies" />
                                    <div className="carousel-caption bg-dark bg-opacity-50 rounded">
                                        <h5>Discover Movies & Games</h5>
                                        <p>Find all your favorite streaming, anime, and gaming websites in one dashboard.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" className="d-block w-100" height="400" alt="Entertainment Simplified" />
                                    <div className="carousel-caption bg-dark bg-opacity-50 rounded">
                                        <h5>Entertainment Simplified</h5>
                                        <p>Quick access to trusted movie and game platforms.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></button>
                        </div>
                    </section>

                    <OfficialLinks key="official-links" /> 
                    <LinkSection id="moviedownload" title="🎬 Movie Downloading Websites" sites={movieDownloadSites} />

                    <section id="moviestream" className="container-fluid mt-5">
                        <h2 className="text-center mb-4 text-light">📺 Movie Streaming Websites</h2>
                        <div className="row g-3">
                            <div className="col-lg-6"><LinkSection sites={movieStreamingSitesA} /></div>
                            <div className="col-lg-6"><LinkSection sites={movieStreamingSitesB} /></div>
                        </div>
                    </section>

                    <section id="anime" className="container-fluid mt-5">
                        <h2 className="text-center mb-4 text-light">🍥 Anime Streaming Websites</h2>
                        <div className="row g-3">
                            <div className="col-lg-6"><LinkSection sites={animeSitesA} /></div>
                            <div className="col-lg-6"><LinkSection sites={animeSitesB} /></div>
                        </div>
                    </section>

                    <section id="Games" className="container-fluid mt-5">
                        <h2 className="text-center mb-4 text-light">🎮 Game Pirating Websites</h2>
                        <div className="row g-3">
                            <div className="col-lg-6"><LinkSection sites={gameSitesA} /></div>
                            <div className="col-lg-6"><LinkSection sites={gameSitesB} /></div>
                        </div>
                    </section>
                
                </div> 
                <Footer />
            </div>
        </div>
    );
} 
export default Home; 
