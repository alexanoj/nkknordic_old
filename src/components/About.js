// About.js
import React from "react";
import "./About.css"; // Import the CSS file for styling

const About = () => {
    return (

        <div id="about" className="about-container">
            <h1>What is NKK?</h1>
            <p>
                Nordisk Kemiteknolog Konferens (NKK) is a conference aimed at chemical engineering students, including material- and biotechnology, in the Nordic countries.
                The conference's primary goal is to foster collaboration and networking among students across these regions.
            </p>
            <p>
                NKK was founded in the 1970s, and has evolved to an annual happening arranged by students in one of the host universities, where the program typically consists
                of visits to companies in the region, discussions of relevant topics at the time being and party together. The participants usually get to
                take part in NKK for a nominal amount, thanks to the companies sponsoring NKK. In return, the companies get to get positive publicity among
                a group of young future professionals in their own trade.
            </p>
    
    
    <h2>Current member organizations</h2>

    <div class="members-container">

    <div class="column">
        <h3>Norway:</h3>
        <ul>
            <li>Høiskolens Chemikerforening, NTNU, Trondheim</li>
        </ul>
        <h3>Sweden:</h3>
        <ul>
            <li>Kemisektionen, KTH, Stockholm</li>
            <li>K-sektionen, LTH, Lund</li>
            <li>Kemiteknologsektionen, Chalmers, Göteborg</li>
        </ul>
    </div>

    <div class="column">
        <h3>Finland:</h3>
        <ul>
            <li>Kemistikilta, Aalto University, Espoo</li>
            <li>Kemistklubben, Åbo Akademi, Turku</li>
        </ul>
        <h3>Denmark:</h3>
        <ul>
            <li>KTStudents, DTU, Copenhagen</li>
        </ul>
    </div>
    </div>
    </div>
    );
};

export default About;
