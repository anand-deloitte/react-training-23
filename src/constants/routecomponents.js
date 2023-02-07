export const routecomponents = [
    {
        'path':'/',
        'displayMessage':'Home',
        'component':'<App />'
    },
    {
        'path':'introduction',
        'displayMessage':'Your Introduction',
        'component':'<IntroductionComponent userName="Shalini Dutta" userImage= "./avatar_g.jpg" userIntroduction="Dummy Data1"/>'
    },
    {
        'path':'newsletter',
        'displayMessage':'Newsletter',
        'component':'<NewsletterComponent blogName1="Desserts" blogImgUrl1="./woods.jpg" blogDescAndDate1="Into The Woods, June 2, 2014" blogContent1="Dummy Data2"/>',
    },
    {
        'path':'popularpost',
        'displayMessage':'PopularPostsComponent',
        'component':'<PopularPostsComponent />'
    },
    {
        'path':'*',
        'displayMessage':'',
        'component':'<App />'
    }
];