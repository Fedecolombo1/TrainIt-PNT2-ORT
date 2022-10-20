import "./Home.css";
import "../../Components/NavBar/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../Components/NavBar/NavBar"


function Home() {

  return (
    /*<Page>*/
    <>
      <div className="contariner-fluid">
        <div className="row align">
          <NavBar/>
          <h1 >Train It</h1>
        </div>
      </div>
    </>
    /*</Page>*/
  );
}

export default Home;
