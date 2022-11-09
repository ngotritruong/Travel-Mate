import "./singleBlog.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
function SingleBlog() {
  return (
    <div className="singleBlog">
      <Sidebar />
      <div className="singleBlogContainer">
        <Navbar />
        <div className="singlePost">
          <div className="singlePostWrapper">
            <img
              className="singlePostImg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <h1 className="singlePostTitle">
              Lorem ipsum dolor
              <div className="singlePostEdit">
                <EditIcon className="singlePostIcon far fa-edit" />
                <DeleteIcon className="singlePostIcon far fa-trash-alt" />
              </div>
            </h1>
            <div className="singlePostInfo">
              <span>
                Author:
                <b className="singlePostAuthor">
                  <Link className="link" to="/posts?username=Safak">
                    Safak
                  </Link>
                </b>
              </span>
              <span>1 day ago</span>
            </div>
            <p className="singlePostDesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore
              ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
              voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
              eos, dolore ea iusto impedit! Voluptatum necessitatibus eum
              beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Iste error quibusdam ipsa quis
              quidem doloribus eos, dolore ea iusto impedit! Voluptatum
              necessitatibus eum beatae, adipisci voluptas a odit modi eos!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore
              ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
              voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
              eos, dolore ea iusto impedit! Voluptatum necessitatibus eum
              beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
              amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
