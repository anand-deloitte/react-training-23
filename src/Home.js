import React from "react";
import BlogBody from "./Blog";
import BlogHeader from "./BlogHeader";
import Tags from "./Tags";
import "./Blog.css";

const blogColumnOne = {
    date: new Date(),
    title: 'TITLE HEADING HOME',
    text: 'Title Description',
    description: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    imgURL: 'https://www.w3schools.com/w3images/woods.jpg',
    link: 'Comment'
};

const blogColumnTwo = {
    date: new Date(),
    title: 'BLOG ENTRY HOME',
    text: 'Title Description',
    description: 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    imgURL: 'https://www.w3schools.com/w3images/bridge.jpg',
    link: 'Comment'
};

function Home(props) {
    return (
        <div>
            <BlogHeader name="Aamir" />
            <div className="container">
            <div className="blog-col">
                <BlogBody blogData={blogColumnOne} />
                <BlogBody blogData={blogColumnTwo} />
            </div>
            <div className="tags-col">
                <Tags tags={props.tags}></Tags>
            </div>
            </div>
        </div>
    );
}

export default Home;