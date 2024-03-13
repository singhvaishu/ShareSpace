import "./search.scss";
// import Image from "../../assets/img.png";
// import Map from "../../assets/map.png";
// import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined"
import { Link } from "react-router-dom";
const Share = () => {

    return (
        <div className="share">
            <div className="container ">

                <div className="middle">
                    <div className="search">
                        <SearchOutlinedIcon />

                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="filter">
                        <TuneOutlinedIcon />
                        <input type=" " placeholder="Filters" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;