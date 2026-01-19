import React from 'react'

const Cards = () => {
    return (
        <section className="cards-section">
            <h2 className="cards-title">What I Do</h2>

            <div className="cards-container">
                <div className="card frontend">
                    <h3>Frontend Development</h3>
                    <p>
                        Building responsive and interactive user interfaces using React,
                        modern JavaScript, and clean UI principles.
                    </p>
                </div>

                <div className="card backend">
                    <h3>Backend & APIs</h3>
                    <p>
                        Designing scalable REST APIs, handling databases, and integrating
                        backend services with frontend applications.
                    </p>
                </div>

                <div className="card problem">
                    <h3>Problem Solving</h3>
                    <p>
                        Solving real-world problems using data structures, algorithms, and
                        efficient logic.
                    </p>
                </div>
            </div>
        </section>


    )
}

export default Cards
