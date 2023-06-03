function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} 


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return   (
    React.createElement("div", { className: `menu-container ${props.showMenu}` },   
    React.createElement("div", { className: "overlay" }),   
    React.createElement("div", { className: "menu-items" },   
    React.createElement("ul", null,   
    React.createElement("li", null,   
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")),   



    React.createElement("li", null,   
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")),   



    React.createElement("li", null,   
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")),   



    React.createElement("li", null,   
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))),   




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return   (
    React.createElement(React.Fragment, null,   
    React.createElement("nav", { id: "navbar" },   
    React.createElement("div", { className: "nav-wrapper" },   
    React.createElement("p", { className: "brand" }, "Ashu",   

    React.createElement("strong", null, "tosh")),   

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' },   

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return   (
    React.createElement("header", { id: "welcome-section" },   
    React.createElement("div", { className: "forest" }),   
    React.createElement("div", { className: "silhouette" }),   
    React.createElement("div", { className: "moon" }),   
    React.createElement("div", { className: "container" },   
    React.createElement("h1", null,   
    React.createElement("span", { className: "line" }, "I do"),   
    React.createElement("span", { className: "line" }, "development, design"),   
    React.createElement("span", { className: "line" },   
    React.createElement("span", { className: "color" }, "&"), " code.")),   


    React.createElement("div", { className: "buttons" },   
    React.createElement("a", { href: "#projects" }, "my portfolio"),    
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch"),
    React.createElement("a", { href: "https://drive.google.com/file/d/1TWKtng4YDp-Ou9wT0oJGDgVyTNdw2LOW/view?usp=sharing", id: "resume", onClick: (e) => { e.preventDefault(); window.open(e.target.href, "_blank"); } }, "my Resume")


    
    ))));
    

};


/***********************
  About Component
 ***********************/

const About = props => {
  return   (
    React.createElement("section", { id: "about" },   
    React.createElement("div", { className: "wrapper" },   
    React.createElement("article", null,   
    React.createElement("div", { className: "title" },   
    React.createElement("h3", null, "Who's this guy?"),   
    React.createElement("p", { className: "separator" })),   

    React.createElement("div", { className: "desc full" },   
    React.createElement("h4", { className: "subtitle" }, "My name is Ashutosh."),   
    React.createElement("p", null, "I have been working as a Software Engineer at i-exceed for the past year, located in the vibrant tech hub of Koramangala, Bangalore, I have the privilege of working on a live project called Appzillon Digital Banking Platform. This cutting-edge platform leverages the power of low-code visual development, enabling both developers and business users to collaboratively build and deploy sophisticated omni-channel applications with remarkable speed and efficiency"),   



    React.createElement("p", null, "As a JavaScript Developer, I play a key role in designing and enhancing our banking application, Xac Bank. My responsibilities include UI design, JavaScript changes, code validation, debugging, and adding new features & functionality to create an exceptional user experience.")),   


    React.createElement("div", { className: "title" },   
    React.createElement("h3", null, "What does he do?"),   
    React.createElement("p", { className: "separator" })),   

    React.createElement("div", { className: "desc" },   
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."),   
    React.createElement("p", null, "For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS. I also make the web pretty by using  CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc."),   


    React.createElement("p", null, "For the back-end I also work with Javascript (NodeJS, Django, etc). But, of course, whenever the project requires PHP, I do PHP as well")),   

    
    React.createElement("div", { className: "desc" },   
    React.createElement("h4", { className: "subtitle" }, "Also a designer."),   
    React.createElement("p", null, "I specialize in web development with JavaScript, HTML, CSS, and Java, including ReactJS for dynamic interfaces. I'm passionate about UI/UX design and creating visually appealing user experiences."),   





    React.createElement("p", null, " I am adaptable and open to using different languages  when necessary to ensure project success. I thrive on creating elegant and functional web applications that merge technical excellence with aesthetic design."))))));




};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' ,
    bootstrap: 'fab fa-bootstrap',
    html: 'fab fa-html5'
  };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return   (
    React.createElement("div", { className: "project" },   
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" },   
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })),   

    React.createElement("div", { className: "project-details" },   
    React.createElement("div", { className: "project-tile" },   
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) =>   
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children,   
    React.createElement("div", { className: "buttons" },   
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ",   
    React.createElement("i", { className: "fas fa-external-link-alt" })),   

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ",   
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return   (
    React.createElement("section", { id: "projects" },   
    React.createElement("div", { className: "projects-container" },   
    React.createElement("div", { className: "heading" },   
    React.createElement("h3", { className: "title" }, "My Works"),   
    React.createElement("p", { className: "separator" }),   
  ),   





    React.createElement(Project, {
      title: "X-EDITOR",
      img: 'https://i.ibb.co/2cTchJS/image.png',
      tech: "react css  Bootstrap",
      link: "https://lil-ashu.github.io/codeEditor/",
      repo: "https://lil-ashu.github.io/codeEditor/" },   

    // React.createElement("small", null, "Built using React and CSS."),   
    React.createElement("p", null, "Our X-editor is a real-time, React-based code editor that empowers developers to write HTML, CSS, and JavaScript code while providing a built-in browser preview feature for immediate output visualization.")),

    React.createElement("div", { className: "projects-wrapper" },   
    React.createElement(Project, {
      title: "Recipe Finder",
      img: 'https://i.ibb.co/bWWbnkQ/image.png',
      tech: "js css  bootstrap",
      link: "https://codepen.io/xuski/full/GRYwgbL",
      repo: "https://codepen.io/xuski/pen/GRYwgbL" },   

    // React.createElement("small", null, "Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router."),   


    React.createElement("p", null, "Unleash your culinary cravings with our cutting-edge recipe discovery website. Find your favorite food's perfect recipe at your fingertips.")),   


    React.createElement(Project, {
      title: "My secret app",
      img: 'https://i.ibb.co/68pqwFg/image.png',
      tech: "js   css",
      link: "https://codepen.io/xuski/full/MWPLYmR",
      repo: "https://codepen.io/xuski/pen/MWPLYmR" },   

    // React.createElement("small", null, "Built using React and CSS."),   
    React.createElement("p", null, "Explore my secret app , with a bunch of random things to do.")),

    React.createElement(Project, {
      title: "cal-COOL-ator",
      img: 'https://i.ibb.co/yRWPdXv/image.png',
      tech: "js html css",
      link: "https://codepen.io/xuski/full/ZEqwzxe",
      repo: "https://codepen.io/xuski/pen/ZEqwzxe" },   

    // React.createElement("small", null, "Built using React and CSS."),   
    React.createElement("p", null, "A project on which I built a virtual calculator with its usual features.")),
    
    React.createElement(Project, {
      title: "Pomodoro Clock",
      img: 'https://i.ibb.co/Prq1yyZ/image.png',
      tech: "js html css",
      link: "https://codepen.io/xuski/full/ZEqwzVy",
      repo: "https://codepen.io/putraaryotama/pen/wgwqBB" },   

    // React.createElement("small", null, "Built using React and CSS."),   
    React.createElement("p", null, "This innovative Pomodoro clock  enhances focus, productivity, and a sense of accomplishment by breaking work into intervals.")),  

    React.createElement(Project, {
      title: "todo list",
      img: 'https://i.ibb.co/xHphLLm/image.png',
      tech: "js html vue css",
      link: "https://codepen.io/xuski/full/GRYzRZg",
      repo: "https://codepen.io/xuski/pen/GRYzRZg" },   

    // React.createElement("small", null, "Built using React and CSS."),   
    React.createElement("p", null, "Stay organized and boost productivity with our intuitive and efficient todo list project..")),

    React.createElement(Project, {
      title: "My secret app",
      img: 'https://i.ibb.co/68pqwFg/image.png',
      tech: "js html  css",
      link: "https://codepen.io/xuski/full/MWPLYmR",
      repo: "https://codepen.io/xuski/pen/MWPLYmR" },   

    // React.createElement("small", null, "Built using React and CSS."),   
    React.createElement("p", null, "Explore my secret app , with a bunch of random things to do.")),



    
))));

};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return   (
    React.createElement("section", { id: "contact" },   
    React.createElement("div", { className: "container" },   
    React.createElement("div", { className: "heading-wrapper" },   
    React.createElement("div", { className: "heading" },   
    React.createElement("p", { className: "title" }, "Want to ",   
    React.createElement("br", null), "contact me?"),   


    React.createElement("p", { className: "separator" }),   
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '',   
    React.createElement("span", { className: "mail" }, " ",   

    React.createElement("i", { className: "fas fa-at at" }), "ashutoshsoni2826@gmail  ",   

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")),   





    React.createElement(SocialLinks, null)),   

    React.createElement("form", { id: "contact-form", action: "#" },   
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }),   
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }),   
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }),   
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return   (
    React.createElement("footer", null,   
    React.createElement("div", { className: "wrapper" },   
    React.createElement("h3", null, "THANKS FOR VISITING"),   
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Ashutosh ."),   
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return   (
    React.createElement("div", { className: "social" },   
    React.createElement("a", {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
      },

    ' ',   
    React.createElement("i", { className: "fab fa-facebook" })),   

    React.createElement("a", {
      id: "profile-link",
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
       },

    ' ',   
    React.createElement("i", { className: "fab fa-instagram" })),
    
    React.createElement("a", {
      id: "profile-link",
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
     },

    ' ',   
    React.createElement("i", { className: "fa fa-envelope" })),

    React.createElement("a", {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
       },

    ' ',   
    React.createElement("i", { className: "fab fa-youtube" }))));

    



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return   (
      React.createElement(React.Fragment, null,   
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),   
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),   
      React.createElement(Header, null),   
      React.createElement(About, null),   
      React.createElement(Projects, null),   
      React.createElement(Contact, null),   
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}

 ReactDOM.render(   React.createElement(App, null), document.getElementById('app'));