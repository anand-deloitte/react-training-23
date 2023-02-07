
import LeftCard from "./LeftCards.js";
import RightCards from "./RightCards";

export const blogEntry1={
        heading:'TITLE HEADING',
        description:'Title description',
        date:'December 3, 2022',
        content:'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
        commentsCount:0,
        image:"images/woods.jpg",
        button: 'Comments',
   }
const blogEntry2={
       heading:'BLOG ENTRY',
       description:'Title description',
       date:'April 2, 2014',
        content:'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
      commentsCount:2,
      image:"images/bridge.jpg",
      button: 'Comments',
      }

const profileCard = {
    name: 'Bhavik',
    image : 'images/avatar_1.jpg',
    content : 'Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.'
}


function Blog() {
    return (
    <div>
        <div className="heading">
            <h1><b>MY BLOG</b></h1>
            <p>Welcome to the blog of <span>Bhavik</span></p>
        </div>
        <div class="content">
        <div className="conntent-left">
        <LeftCard {...blogEntry1} />
        <LeftCard {...blogEntry2} />
        </div>
        <div class="content-right">
            <RightCards {...profileCard} />
        </div>
        </div>
    </div>
    )
}

export default Blog;