import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Notices() {

  
    return (
      <>
        <div className="mb-5 pb-5">
          <h1>Mentions Légales</h1>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Éditeur du site
              </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">John Doe</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Hébergeur du site
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Heberger sur <a href="https://codesandbox.io/" target="_blank">CodeSandBox</a> </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Crédits
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <h3>Images, Multimédia</h3>
              <div className="accordion-body">images provenant de <a href="https://pixabay.com/fr/" target="_blank">PixBay</a></div>
            </div>
            </div>
          </div>

        </div>
        
      </>
    )
  }
  
  export default Notices