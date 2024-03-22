/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/projects_image.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  // {
  //   title: "NYUAD Chatbot",
  //   description:
  //     "A project using Microsoft AI to create a chatbot for my university using their FAQ page as a knowledge base.",
  //   url: "https://docs.google.com/presentation/d/11e30wWzuOWdREKZ4obPGe0j-pqbLeNN3Feft1yas6GE/edit",
  // },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and skills.",
    url: "https://dea-li00.github.io/Resume/", // Replace with the actual URL
  },
  {
    title: "Human Centered Data Science Project",
    description:
      "Used web scraping to gather article titles from 3 major media platforms in the US, India and China, respecitvely. Used topic analysis and sentiment analysis to determine the tone used in mass media towards these communities. The results were later compared with the public opinion drawn by a sample of 40 students representing the countries where our research was based.",
    url: "https://docs.google.com/presentation/d/11e30wWzuOWdREKZ4obPGe0j-pqbLeNN3Feft1yas6GE/edit", // Replace with the actual URL
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
