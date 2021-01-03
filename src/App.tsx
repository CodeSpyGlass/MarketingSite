import React from 'react';
import './App.css';

function App() {
    return (
        <div className="Website">
            <header className="Website-header">
                <div className="Site-header-solution-name">CodeSpyGlass</div>
                <div className="Site-header-tagline">Tech recruitment isn't working.</div>
                <div className="Why-we-are-here">
                    We're here to focus on a specific problem in the tech hiring value chain
                    - <span>skills evaluation.</span>
                </div>
            </header>
            <div className="Existing-approach-pick-your-poison">
                The status quo: <span>Pick your poison.</span>
            </div>
            <span className="Existing-approach-poison-lists">
                <span className="Existing-approach-poison-list-container">
                    <ul className="Existing-approach-poison">
                        <span>Leetcode, Hackerrank etc.</span>
                        <li>Fails to measure the things that are really important: Working collaboratively<br/>on larger code-bases over time</li>
                        <li>Weak evaluation which must be manually re-done later</li>
                        <li>Only useful to thin out the recruitment pipeline, which it does badly</li>
                        <li>Major source of negative candidate experiences</li>
                    </ul>
                </span>
                <span className="Existing-approach-poison-list-container">
                    <ul className="Existing-approach-poison">
                        <span>Manual everything</span>
                        <li>Expensive</li>
                        <li>Bias-prone</li>
                        <li>Variability in quality and results</li>
                    </ul>
                </span>
            </span>
        </div>
    );
}

export default App;
