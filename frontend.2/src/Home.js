import useFetch from "./usefetch";
import BlogList from "./BlogList";


const Home = () => {
    const { data: blogs, IsPending, error} = useFetch('http://127.0.0.1:8000/api/blog');
   

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
          { IsPending && <div>Loading...</div> }
          {blogs && <BlogList blogs={blogs} title = "All Blogs!" />}
        </div>
     );
}
 
export default Home;

  