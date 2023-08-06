// import Feed from "@components/Feed";
// //  ova staranica je vidliva na localhost:3000
// const Home = () => (
//   <section className='w-full flex-center flex-col'>
//     <h1 className='head_text text-center'>
//       Discover & Share
//       <br className='max-md:hidden' />
//       <span className='orange_gradient text-center'> AI-Powered Prompts</span>
//     </h1>
//     <p className='desc text-center'>
//       Promptopia is an open-source AI prompting tool for modern world to
//       discover, create and share creative prompts
//     </p>

//     <Feed />
//   </section>
// );

// export default Home;

////////////////////////////////////////////////////////////////

import Feed from "@components/Feed";
//  ova staranica je vidliva na localhost:3000
const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share your posts
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Milos Velickovic 92</span>
    </h1>
    {/* <p className='desc text-center'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p> */}

    <Feed />
  </section>
);

export default Home;
