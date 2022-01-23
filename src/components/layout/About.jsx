import React from "react";

function About() {
  return (
    <div class="flex items-center">
    <div class="card glass card-bordered backdrop-blur-lg">
      <figure>
        {/* <img src="/assets/butterfly-sm.jpg" alt="myself" class="max-w-prose"/> */}
        <img
          sizes="(max-width: 1200px) 100vw, 1200px"
          srcset="
          /assets/my-pic_uvhz3c_c_scale,w_200.png 200w,
          /assets/my-pic_uvhz3c_c_scale,w_546.png 546w,
          /assets/my-pic_uvhz3c_c_scale,w_829.png 829w,
          /assets/my-pic_uvhz3c_c_scale,w_1028.png 1028w,
          /assets/my-pic_uvhz3c_c_scale,w_1200.png 1200w"
          src="/assets/my-pic_uvhz3c_c_scale,w_1200.png"
          alt="my-pic">
        </img>
      </figure>
      <div class="card-body">
        <h2 class="card-title">Mitra Soltani</h2>
        <p>
          The beginning of my artistic career goes back to my early childhood. As a kid, I was always fascinated with the beauty and aesthetics of the world around me. My artworks were always praised by my family and teachers which invoked my passion for creating art and lead me to pursue a career as an artist. 
        </p>
        <p>
          I graduated with a BA in graphic design back home and launched my career as a graphic designer and continued painting as hobby.
        </p>
        <p> 
          Over the years my passion for painting grew, and the painting as hobby turned into a full-time career. Today, I have devoted all my time to discover and learn new techniques and working with different mediums. Experience and the love for my work inspire me to create reflections of nature and the people around me in realistic portraits and exotic and sometimes soft landscapes.
        </p>
        <p>
          I am now living in Michigan, US with my family. Their support and appreciation for my work allow me to enjoy and continue painting that has brought me inexpressible joy.
        </p>
      </div>
    </div>
    </div> 
  );
}

export default About;
