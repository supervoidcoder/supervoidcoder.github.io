import React from "react";
import "./styles.css";
import Card from "./Card";

export default function App() {
    return (
        <div className="container">
            <h1 className="start">supervoidcoder</h1>
            <div className="main">
                <p>Who am I?</p>
            </div>
            <p className="zoom yap">
                Hi! I am <a href="https://github.com/supervoidcoder/">supervoidcoder</a>, known as <a href="https://youtube.com/@greencuby">Green Cube</a> and <a href="https://scratch.mit.edu/users/scratchcode1_2_3">scratchcode1_2_3</a> on other platforms. I love programming, making games (and playing them too, heh), making animations, writing stories, and other fun tech stuff! I like to do both software and hardware-related things, though I have much more experience with software. I know my fair share of programming languages—from Scratch, Python, JavaScript, to quite a bit of C++! I’ve also dabbled in C# and Kotlin.
            </p>
            <p className="zoom yap">
                On the hardware side of things, I’ve used Raspberry Pi quite a bit. I own 3 Raspberry Pi’s: one 4B and two Zero 2W models. I’ve used them for projects like a plane, a mini server, and a retro console with Batocera. I’ve also experimented with micro:bit (meh) and even fixed my laptop once!
            </p>
            <p className="zoom yap">
                This site is more like my central hub. My first and main website is <a href="https://greencuby.com">https://greencuby.com</a>, where I post most of my tools, games, and helpful stuff. Check out all my websites and socials below!
            </p>
            <p className="zoom yap">
                If you want to contact me, the fastest way is through Scratch. I check it almost every day, so I will probably respond quickly. You can also contact me through GitHub or YouTube, but I might not respond as fast.
            </p>
            <h1 className="start">My Socials</h1>
            <div className="cards-grid">
                <Card
                    title="GitHub"
                    link="https://github.com/supervoidcoder"
                    image="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    description="My GitHub profile! Here I post most of my code-related things. "
                />
                <Card
                    title="YouTube"
                    link="https://youtube.com/@greencuby"
                    image="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                    description="My YouTube channel! I make silly animations, cool programming tutorials, and even math and science videos!"
                />
                <Card
                    title="Scratch"
                    link="https://scratch.mit.edu/users/scratchcode1_2_3"
                    image="https://cdn2.scratch.mit.edu/get_image/user/67594247_60x60.png"
                    description="My Scratch profile! Check out the stuff I have made there! I'm still active! (probably the fastest way to contact me)"
                />
            </div>
            <h1 className="start">My Websites</h1>
            <br />
            <div className="cards-grid">
                <Card
                    title="Green Cube"
                    link="https://greencuby.com"
                    image="https://greencuby.com/Green%20cube%20logo.png"
                    description="My main website. This is where I put my tools, some games, and other cool stuff."
                />
                <Card
                    title="OmniBlocks"
                    link="https://omniblocks.github.io"
                    image="https://omniblocks.github.io/images/apple-touch-icon.png"
                    description="OmniBlocks is an open-source, cross-platform, and free tech-related website. Unlike the Green Cube website, which aims to make useful tools for the average user, OmniBlocks is more focused on programming and development-related things. It's main attraction at the moment (and the most worked on feature) is the OmniBlocks IDE, a multilanguage IDE. Learn more on the website itself." />
            </div>
        </div>
    );
}
