import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./img"

// function Greeting(){
//  return(
//     <h1>Hello World</h1>
//  )
// }

// or Arrow function

// const Greeting = () => {
//     return(
//         <h1>Hello World, My first App</h1>
//     )
// }

// or creating the elements

// const Greeting = () => {
//     return(
//         React.createElement('h2', {}, 'Hello World')
//     )
// }

// const Greeting = () => {
//     return(
//         // If you dont want to use sections, we can use
//         // React.Fragments
//         <React.Fragment>

//         <div className="navigate">

//         <nav className='title'>
//             <ul className="">
//                 <li><a href="Home">Home</a></li>
//                 <li><a href="Service">Service</a></li>
//                 <li><a href="Gallery">Gallery</a></li>
//                 <li><a href="Contact">Contact</a></li>

//             </ul>
//         </nav>
//         </div>
//         </React.Fragment>
//     )
// }

// or which will some how be more complex
// const Greeting = () => {
//     return(
//         React.createElement('div', {}, React.createElement('h2', {}, 'Hello World of React'))
//     )
// }

// Nest Components
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }
// const Person = () => {
//   return <h1>Hello World</h1>;
// };
// const Message = () => {
//   return <p>This is my first React Tutor</p>;
// };

const firstBook = {
    author: 'Britney Spears',
    title: 'The Woman in Me',
    img: './img/book2.jpg'
};
const secondBook = {
    author: 'Jeff Kinney',
    title: 'Wimpy Kid',
    img: './img/book3.jpg'
};
const thirdBook = {
    author: 'James McBride',
    title: 'The Heaven and Earth',
    img: './img/book4.jpg'
};

const author = 'Rebecca Yarros';
const title = "Fourth Wing";
const img = "./img/book1.jpg"

// // putting params
// const smallFunction = (params1, params2) =>{
//     console.log(params1, params2);
// }
// // invocking
// smallFunction('New', 'Job')

function BookList() {
  return (
    <section className="book-list">
      <Book author={author} title={title} img={img}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <button>Click me</button>
      </Book>
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}number={10}>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <button>Click me</button>
      </Book>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} number={11}>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <button>Click me</button>
      </Book>
      <Book author={thirdBook.author} title={thirdBook.title} img={thirdBook.img} number={8}/>
    
    </section>
  );
}


// We add props here since we want to create other books
// such that they copy the structure of the first book

const Book = (props) =>{
  // destructuring
  // We use children to call the elements in between
  //  the open and closed tags of the component
  const {img, title, author, children} = props
  console.log(props);
  return (
    <article className="book">
      <img
      src={img}
      alt={title}
    />
     <h2>{title}</h2> 
     <h4>{author}</h4>
     {children}
     {/* <p>{6 + 6}</p> */}

    </article>
  );
}
// const Image = () => {
//   return (
//     <img
//     src="./img/book1.jpg"
//     alt=""
//   />
//   );
// };
// const Title = () => {
//   return(
//     <h2>Fourth Wing</h2> 
   
//   ) 
// };
// const Autor = () => {
//   return (
//     // inline style
//     <h4>Rebecca Yarros</h4>
   

//   )
// };

// or inline style with a variable
// const Autor = () => {
//     const inlineHeadingStyle = {
//         color: 'gray',
//         fontSize: '0.7rem',
//         marginTop: '0.5rem'
//     }
//   return (
//     <h4 style={inlineHeadingStyle}>Rebecca Yarros</h4>

//   )
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
export default BookList;
