//  Q.Using React Create this structure   <div>
//       <div>
//         <h1>Hello Jui</h1>
//       </div>
//     </div>

const heading = React.createElement(
  "div",
  {
    id: "heading",
  },
  React.createElement("div", {}, React.createElement("h1", {}, "Hello jui"))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// Q.Using React Create this structure   <div>
//       <div>
//         <h1>Hello Jui</h1>
//         <h2>Hello Nona</h2>

//       </div>
//     </div>

// const heading2 = React.createElement(
//   "div",
//   {
//     id: "heading",
//   },
//   React.createElement("div", {id:'child'}, [
//     React.createElement("h1", {}, "Hello jui"),
//     React.createElement("h2", {}, "Hello Nona"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2);
