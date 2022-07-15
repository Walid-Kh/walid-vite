import { Link } from "react-router-dom";

const GitHub: React.FC = () => {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
    </svg>
  );
};
const Twitter: React.FC = () => {
  return (
    <svg viewBox="0 0 30 30">
      <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
    </svg>
  );
};
const LinkedIn: React.FC = () => {
  return (
    <svg viewBox="0 0 50 50">
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
    </svg>
  );
};
const Intro: React.FC = () => (
  <div className="lg:w-[80%] w-[90%] mx-auto flex flex-col mt-12 text-slate-300 fill-slate-300">
    <h1 className="font-bold text-3xl text-slate-100 ">
      <Link to="/"> Walid Khamees</Link>
    </h1>
    <p className="font-semibold text-lg opacity-60">
      Computer Engineering Student{" "}
      <a
        className="underline underline-offset-4"
        href="https://eng.cu.edu.eg/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @CUFE
      </a>
      , Opportunities Seeker and Debugger.
    </p>
    <ul className="flex mt-2">
      <li className="icon">
        <a
          href="https://github.com/Walid-Kh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </li>
      <li className="icon">
        <a
          href="https://twitter.com/KhameesWalid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </li>
      <li className="icon">
        <a
          href="https://www.linkedin.com/in/walid-khamees-734bbb237/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </li>
    </ul>
  </div>
);
interface props {}
const NavBar: React.FC<props> = () => {
  return (
    <nav>
      <Intro />
    </nav>
  );
};

export default NavBar;
/* 
<a href="http://localhost:3000"><h1 className="home"> &lt;Walid/&gt;</h1></a>
  <ul className="links" data-visible="false">
    <li><a href="/contact-me" ><p className="link">Contact</p></a></li>
    <li><a href="/about" ><p className="link">About</p></a></li>
    <li className="social"><a href="https://github.com/Walid-Kh" target="_blank" rel="noreferrer"><GitHub /> </a></li>
    <li className="social"><a href="https://twitter.com/KhameesWalid" target="_blank" rel="noreferrer">  <Twitter />  </a></li>
  </ul> 
*/
