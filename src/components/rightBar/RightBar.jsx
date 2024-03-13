// import "./rightBar.scss";

// const RightBar = () => {
//     return (
//         <div className="rightBar">
//             <div className="container">
//                 <div className="item">
//                     <span>Suggestions For You</span>



//                     <div className="item">
//                         <span>Latest Activities</span>
//                         <div className="user">
//                             <div className="userInfo">
//                                 <img
//                                     src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                                     alt=""
//                                 />
//                                 <p>
//                                     <span>Jane Doe</span> changed their cover picture
//                                 </p>
//                             </div>
//                             <span>1 min ago</span>
//                         </div>
//                         <div className="user">
//                             <div className="userInfo">
//                                 <img
//                                     src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                                     alt=""
//                                 />
//                                 <p>
//                                     <span>Jane Doe</span> changed their cover picture
//                                 </p>
//                             </div>
//                             <span>1 min ago</span>
//                         </div>
//                         <div className="user">
//                             <div className="userInfo">
//                                 <img
//                                     src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                                     alt=""
//                                 />
//                                 <p>
//                                     <span>Jane Doe</span> changed their cover picture
//                                 </p>
//                             </div>
//                             <span>1 min ago</span>
//                         </div>
//                         <div className="user">
//                             <div className="userInfo">
//                                 <img
//                                     src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                                     alt=""
//                                 />
//                                 <p>
//                                     <span>Jane Doe</span> changed their cover picture
//                                 </p>
//                             </div>
//                             <span>1 min ago</span>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//             );
// };
//   export default RightBar;

// import "./rightBar.scss";

// const RightBar = () => {
//     return (
//         <div className="rightBar">
//             <div className="container">
//                 <div className="item">
//                     <span>Suggestions For You</span>
//                 </div>
//                 <div className="item">
//                     <span>Artist & Photographer</span>
//                     {/* Content for Artist and Photographer combined section */}
//                 </div>
//                 <div className="item">
//                     <span>Image Cards</span>
//                     {/* Image card section with 5 cards */}
//                     <div className="imageCard">

//                         <img src="image-url-1" alt="Image 1" />
//                     </div>
//                 </div>
//                 <div className="item">
//                     <span>Image Cards</span>
//                     <div className="imageCard">
//                         <img src="image-url-2" alt="Image 2" />
//                     </div>
//                 </div> <div className="item">
//                     <span>Image Cards</span>
//                     <div className="imageCard">
//                         <img src="image-url-2" alt="Image 2" />
//                     </div>
//                 </div> <div className="item">
//                     <span>Image Cards</span>
//                     <div className="imageCard">
//                         <img src="image-url-2" alt="Image 2" />
//                     </div>
//                 </div> <div className="item">
//                     <span>Image Cards</span>
//                     <div className="imageCard">
//                         <img src="image-url-2" alt="Image 2" />
//                     </div>
//                 </div> <div className="item">
//                     <span>Image Cards</span>
//                     <div className="imageCard">
//                         <img src="image-url-2" alt="Image 2" />
//                     </div>
//                 </div>

//             </div>
//         </div>

//     );
// };

// export default RightBar; 
import "./rightBar.scss";
import image1 from "../../assets/user1.png";
import image2 from "../../assets/user2.png";
import image3 from "../../assets/user3.png";
import image4 from "../../assets/user4.png";
import image5 from "../../assets/user5.png";


const RightBar = () => {
    const imageCards = [
        {
            userImage: image1, // User image URL
            userName: "User 1",
            socialHandle: "@user1",
            backgroundImage: "url('https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",  // Add background image URL
        },
        {
            userImage: image2, // User image URL
            userName: "User 2",
            socialHandle: "@user2",
            backgroundImage: "url('https://images.pexels.com/photos/763210/pexels-photo-763210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", // Add background image URL
        },
        {
            userImage: image3, // User image URL
            userName: "User 3",
            socialHandle: "@user3",
            backgroundImage: "url('https://images.pexels.com/photos/1039083/pexels-photo-1039083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", // Add background image URL
        }, {
            userImage: image4, // User image URL
            userName: "User 4",
            socialHandle: "@user4",
            backgroundImage: "url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS31uBvVu-eLwgE1fUiav2TVQ-JSezjpODgHbvW7l0i0WrSlA1G')", // Add background image URL
        }, {
            userImage: image5, // User image URL
            userName: "User 5",
            socialHandle: "@user5",
            backgroundImage: "url('https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", // Add background image URL
        },
    ];

    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                </div>

                <div className="item">
                    <span className="artistText">Artist</span>
                    <span className="photographerText">Photographer</span>
                    <div className="imageCardContainer">
                        {imageCards.map((card, index) => (
                            <div className="imageCard" key={index} style={{ backgroundImage: card.backgroundImage }}>
                                <div className="userInfo">
                                    <div className="imageSquare">
                                        <img src={card.userImage} alt={card.userName} />
                                    </div>
                                    <div>
                                        <span>{card.userName}</span>
                                        <span>{card.socialHandle}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar;
