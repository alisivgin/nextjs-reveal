import React, { useEffect } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

export default function Presentation() {
    useEffect(() => {
        let deck = new Reveal();
        deck.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,
            loop: true,
        });
    });
    return (
        <div className="reveal">
            <div className="slides">
                <section>Slide 1</section>
                <section>Slide 2</section>
                <section>Slide 3</section>
            </div>
        </div>
    );
}
