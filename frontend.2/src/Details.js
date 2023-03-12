import { useParams } from "react-router-dom";
import useFetch from "./usefetch";

const Details = () => {
    const { id } = useParams();
    const { data: blogs, IsPending, error} = useFetch(url + id);

    return (
        <div className="Details">
             { error && <div>{ error }</div> }
          { IsPending && <div>Loading...</div> }
          { blogs && (
            <article>
                <h2>{ blogs.title }</h2>
                <p>written by { blogs.author }</p>
                <div>{blogs.body}</div>
            </article>
          )}
        </div>
    )
}

export default Details;