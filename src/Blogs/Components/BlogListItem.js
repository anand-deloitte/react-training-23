import React from "react";

import BlogCard from "./BlogCard";

function BlogListItem() {
  const blogItems = [
    {
      id: 1,
      title: "TITLE HEADING",
      subTitle: "Title description,December 3, 2022",
      description:
        "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      imageUrl: "https://www.w3schools.com/w3images/woods.jpg",
    },
    {
      id: 2,
      title: "BLOG ENTRY",
      subTitle: "Title description,December 3, 2022",
      description:
        "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      imageUrl: "https://www.w3schools.com/w3images/bridge.jpg",
    },
  ];
  return (
    <div>
      {blogItems.map((item) => {
        return (
          <BlogCard
            key={item.id}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
            img={item.imageUrl}
          ></BlogCard>
        );
      })}
    </div>
  );
}

export default BlogListItem;
