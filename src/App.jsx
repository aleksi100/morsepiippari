import { useEffect } from "react";
import Prism from "prismjs";
import koodi from "/morse.ino";

function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "4rem", width: "100%" }} className="lang-ino">
          <h3>Tässä projektissa tehdään morsepiippari</h3>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fi.wikipedia.org/wiki/S%C3%A4hk%C3%B6tys"
            >
              Morsetuksessa
            </a>{" "}
            jokaista kirjainta vastaa oma koodi joka koostuu lyhyistä ja
            pitkistä viivoista joten sitä on helppo välittää esim sähköjohtoa
            pitkin tai kuunnella. Teemme{" "}
            <a
              href="https://fi.wikipedia.org/wiki/Arduino"
              target="_blank"
              rel="noopener noreferrer"
            >
              arduinolla
            </a>{" "}
            laitteen joka summeria ääntämällä lähettää meidän kirjoittaman
            viestin morseaakkosina kuulijolle.
          </p>

          <h3>Koodi</h3>
          <pre
            style={{ height: "500px" }}
            data-src={koodi}
            className="line-numbers"
          ></pre>
          <br />
          <h3>Poiminnat koodista</h3>
          <p>
            Luetaan tietokoneelta tullut viesti ja välitetään se kirjain
            kerralla <code className="lang-ino">morse()</code>
            funktioon. Välilyöntiä ei tarvitse morsetta koska se on vain tauko
            joten hyppäämme loopin seuraavalle kierrokselle{" "}
            <code>continue;</code> komennolla.
          </p>
          <pre
            data-src="/morse.ino"
            className="line-numbers"
            data-range="23,38"
          ></pre>
          <br />
          <p>
            Kaikki kirjaimet ovat oikeasti numeroita. Kirjainta vastaavat
            numerot näet ascii taulukosta. Esim A = 65 tämän jäleen tulee muut
            kirjaimet järjestyksessä eli MORSE_LOOKUP[kirjain - 65] antaa meille
            kutakin kirjainta vastaavan morsekoodin.
          </p>
          <pre
            data-src="/morse.ino"
            className="line-numbers"
            data-range="74,77"
          ></pre>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default App;
