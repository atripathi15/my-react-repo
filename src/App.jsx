import { useState } from "react";
import componentImg from "./assets/investment-calculator-logo.png"
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";


function App() {

  const [selectedConcept, setSelectedConcept] = useState()

  let tabContent = <p>Please select a Concept</p>;
  if (selectedConcept) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedConcept].title}</h3>
      <p>{EXAMPLES[selectedConcept].description}</p>
      <pre>
        {EXAMPLES[selectedConcept].code}
      </pre>
    </div>)
  }


  function handleSelect(selectedButton) {
    setSelectedConcept(selectedButton);
    //console.log(selectedConcept + " clicked");

  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts" >
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map((concept) => (<CoreConcepts key={concept.title} {...concept} />))
            }

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedConcept === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedConcept === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedConcept === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedConcept === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>

      </main>
    </div>
  );
}

export default App;