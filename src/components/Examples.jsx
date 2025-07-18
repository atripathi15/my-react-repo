import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {

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
        <Section title="Examples" id="examples">
            <Tabs  buttons={
                <>
                    <TabButton isSelected={selectedConcept === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedConcept === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedConcept === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedConcept === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                </>
            } >
                {tabContent}
            </Tabs>
        </Section>
    );

}