import Post from "../post/Post";
import "./posts.scss";
import image1 from "../../assets/i4.png";
import image2 from "../../assets/i10.png";
import profilePic1 from "../../assets/user5.png";
import profilePic2 from "../../assets/user2.png";
const Posts = () => {
    //     //TEMPORARY
    const posts = [
        {
            //             id: 1,
            //             name: "John Doe",
            //             userId: 1,
            //             profilePic:
            //                 "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgMguPVwTlrYLr7zl3jjwV76SVZth4Gn_DBl0tKmYvOKcxPuy1",
            //             desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            //             img: "https://t2.gstatic.com/images?q=tbn:ANd9GcSBmLl5NDRYzSmiUdjn3bSRDiri75RihtIE8N3YrXuZsNZHi-W9",
            //         },
            //         {
            //             id: 2,
            //             name: "Jane Doe",
            //             userId: 2,
            //             profilePic:
            //                 "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            //             desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
            //         },
            //     ];
            // const posts = [
            //     {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic: profilePic1, // Use the imported profile picture variable
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More",
            img: image1, // Use the imported image variable
        },
        {
            id: 2,
            name: "Jane Doe",
            userId: 2,
            profilePic: profilePic2, // Use the imported profile picture variable
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More.",
            img: image2, // Use the imported image variable
        },
    ];


    return <div className="posts">
        {posts.map(post => (
            <Post post={post} key={post.id} />
        ))}
    </div>;
};

export default Posts;