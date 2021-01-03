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
            <div className="Existing-approach-problems">
                The status quo: <span>Pick your poison.</span>
            </div>
            {/* Present below status-quo-options side-by-side as unordered lists */}
            {/*  Option 1: leetcode and hackerrank:
                    - Weak evaluation which must be manually redone later
                    - Fails to measure things that are really important:
                      Working collaboratively on larger code-bases over time
                    - Only used to thin out the recruitment pipeline, which it does badly
                    - Causes negative candidate experiences
            */}
            {/*  Option 2: manual verification all the way
                    - Expensive
                    - Bias-prone
                    - Variability in quality and results
            */}
        </div>
    );
}

export default App;
