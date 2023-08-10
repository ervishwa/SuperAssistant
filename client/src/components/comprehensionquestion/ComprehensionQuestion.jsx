import React, { useState } from 'react'

export function ComprehensionQuestion() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
  return (
    <div className="container-fluid mt-5" >
        <div className="row">
            <div className="col-md-12">
                <h1>Comprehension Type Questions</h1>
                <div className="row" >
                    <div className="col-md-12">
                        <p>Which sorting algorithm has an average time complexity of O(n log n) and is efficient for large datasets?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <label>
                <input
                    type="radio"
                    name="sortingAlgorithm"
                    value="A"
                    checked={selectedOption === 'A'}
                    onChange={handleOptionChange}
                />
                A Bubble Sort
            </label><br />

            <label>
                <input
                    type="radio"
                    name="sortingAlgorithm"
                    value="B"
                    checked={selectedOption === 'B'}
                    onChange={handleOptionChange}
                />
                B Insertion Sort
            </label><br />

            <label>
                <input
                    type="radio"
                    name="sortingAlgorithm"
                    value="C"
                    checked={selectedOption === 'C'}
                    onChange={handleOptionChange}
                />
                C Quick Sort
            </label><br />

            <label>
                <input
                    type="radio"
                    name="sortingAlgorithm"
                    value="D"
                    checked={selectedOption === 'D'}
                    onChange={handleOptionChange}
                />
                D Selection Sort
            </label><br />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

