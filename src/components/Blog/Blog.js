import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className="blog">
                <h3>Blog</h3>
            </div>
            <div>
            <img className="w-75  mt-5" src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/blog-post-img-1.jpg" alt="" />
            <div className="accordion" id="accordionExample">
            <div className="accordion-item w-75 mt-4 m-auto">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Bali,Indonesia
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>Famous for its volcanic mountains</strong>, iconic beaches and coral reefs, Indonesia's resort island of Bali has topped TripAdvisor's best destination list for 2017. Famous for its volcanic mountains, iconic beaches and coral reefs, Indonesia's resort island of Bali has topped TripAdvisor's best destination list for 2017.When you are looking to honeymoon in a place that is breathtaking and exotic, you can't select a more beautiful place to visit than Bali. The one thing that made Bali famous in the first place is its natural beauty and the colorful culture of Bali. ... Bali's rice-fields terraces are legendary and amust-see for everyone.
                </div>
                </div>
            </div>
            </div>
            </div>
            <div>
            <img className="w-75  mt-5" src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/blog-post-img-3.jpg" alt="" />
            <div className="accordion" id="accordionExample">
            <div className="accordion-item w-75 mt-4 m-auto">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Nepal
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>It is mainly situated in the Himalayas,</strong> but also includes parts of the Indo-Gangetic Plain, bordering Tibet of China to the north, and India in the south, east, and west, while it is narrowly separated from Bangladesh by the Siliguri Corridor, and from Bhutan by the Indian state of Sikkim. Nepal has a diverse geography, including fertile plains, subalpine forested hills, and eight of the world's ten tallest mountains, including Mount Everest, the highest point on Earth. Nepal is a multi-ethnic, multi-lingual, multi-religious and multi-cultural state, with Nepali as the official language. Kathmandu is the nation's capital and the largest city.
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;