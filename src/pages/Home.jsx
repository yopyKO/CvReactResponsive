import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css";


function Home() {

  
    return (
        <div className="accueil min-vh-100">
            <h1>CV de John Doe</h1>
            <h2>Mes réalisations</h2>
              
            <a href="/aboutme">
              <button>En savoir plus</button>
            </a>
        </div>    
    )
  }
  
  export default Home