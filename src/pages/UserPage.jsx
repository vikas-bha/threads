import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
const UserPage = () => {
  return (
    <>
    <UserHeader/>
    <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle = "Let's talk about threads" />
    <UserPost likes={1100} replies={480} postImg="/post2.png" postTitle = "Nice thread" />

    <UserPost likes={1300} replies={482} postImg="/post3.png" postTitle = "nice image" />
    <UserPost likes={1400} replies={489}  postTitle = "abc" />


    </>
  )
}

export default UserPage