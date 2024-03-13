import "./home.scss"
import Posts from "../../components/posts/Posts"
import Search from "../../components/search/Search"


const Home = () => {
    return (
        <div className="home">

            <Search />
            <Posts />
        </div>
    )
}

export default Home
