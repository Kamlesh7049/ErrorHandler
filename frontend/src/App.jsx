// import { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const handleSubmit=async()=>{
//     let api="http://localhost:8080/home";
//     axios.get(api).then((res)=>{
//       console.log(res.data);
//     })
//   }
//   const handleSubmit1=async()=>{
//     let api="http://localhost:8080/about";
//     axios.get(api).then((res)=>{
//       console.log(res.data)
//     })
//   }
//   const handleSubmit2=async()=>{
//     let api="http://localhost:8080/join";
//     axios.get(api).then((res)=>{
//       console.log(res.data)
//     })
//   }
//   const handleSubmit3=async()=>{
//     let api="http://localhost:8080/service";
//     axios.get(api).then((res)=>{
//       console.log(res.data)
//     })
//   }
//  const handleSubmit4=async()=>{
//   let api="http://localhost:8080/contact";
//   axios.get(api).then((res)=>{
//     console.log(res.data)
//   })
//  }
//   return (
//     <>
//       <center>
//         <h1>Welcome Ro Error Handeling!!</h1>
//         <br />
//         <button onClick={handleSubmit}>Home!</button>
//         <button onClick={handleSubmit1}>About!</button>
//         <button onClick={handleSubmit2}>Join!</button>
//         <button onClick={handleSubmit3}>Service!</button>
//         <button onClick={handleSubmit4}>Contact!</button>
//       </center>
//     </>
//   );

// };

// export default App;


// ------------------------------------------------------------------

import { useState } from "react";
import axios from "axios";

const App = () => {
  // const handleSubmit=async()=>{
  //   let api="http://localhost:8080";
  //   axios.get(api).then((res)=>{
  //     console.log(res.data);
  //   })
  // }
//   const handleSubmit=async()=>{
//     let api="http://localhost:8080/about";
//     axios.get(api).then((res)=>{
//       console.log(res.data)
//     })
//   }
//   const handleSubmit=async()=>{
//     let api="http://localhost:8080/join";
//     axios.get(api).then((res)=>{
//       console.log(res.data)
//     })
//   }
//   const handleSubmit=async()=>{
//     let api="http://localhost:8080/service";
//     axios.get(api).then((res)=>{
//       console.log(res.data)
//     })
//   }
//  const handleSubmit4=async()=>{
//   let api="http://localhost:8080/contact";
//   axios.get(api).then((res)=>{
//     console.log(res.data)
//   })
//  }
  return (
    <>
      <center>
        <h1>Welcome to Error Handeling!!</h1>
        <br />
        {/* <button onClick={handleSubmit}>Home!</button>
        <button onClick={handleSubmit}>About!</button>
        <button onClick={handleSubmit}>Join!</button>
        <button onClick={handleSubmit}>Service!</button>
        <button onClick={handleSubmit}>Contact!</button> */}
      </center>
    </>
  );

};

export default App;
