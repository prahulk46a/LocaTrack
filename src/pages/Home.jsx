import Navbar from "../components/navbar/Navbar";
import UserCard from "../components/card/Card";
import Footer from "../components/footer/Footer";

const Home = () => {
  let handleDelete = () => {};

  let handleUpdate = () => {};
  return (
    <div>
      <Navbar />
      <UserCard
        image={
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
        }
        age={24}
        name={"John"}
        description={
          "A  can be described as a close-knit circle of individuals who share a strong bond of mutual trust, support, and enjoyment, spending time together, celebrating successes, and relying on each other through life's ups and downs, often connected by shared interests and experiences. "
        }
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
      <Footer />
    </div>
  );
};

export default Home;
