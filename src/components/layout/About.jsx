import React from "react";

function About() {
  return (
    <div class="card card-bordered">
      <figure>
        <img src="https://picsum.photos/id/1005/400/250" alt="myself"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">Mitra Soltani</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          neque eos veritatis modi possimus maiores temporibus nostrum beatae
          atque tenetur eaque molestiae sed consequatur quis. In quam iusto
          aliquid ipsum.
        </p>
        <div class="justify-end card-actions">
          <button class="btn btn-secondary">More info</button>
        </div>
      </div>
    </div>
  );
}

export default About;
