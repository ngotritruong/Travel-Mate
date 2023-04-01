import React from "react";
import defaultBcg from "../../Images/room-1.jpeg";

import Banner from "../../components/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../../components/StyledHero";
import image1 from "../../Images/room-12.jpeg";
import image2 from "../../Images/details-2.jpeg";
import image3 from "../../Images/details-3.jpeg";
import EmailFeedBack from "../../components/emailFeedback/EmailFeedBack";
import Footer from "../../components/footer/Footer";
function SingleRoom() {
  return (
          <>
            <StyledHero img={image1}>
              <Banner title="Phong Cho Thue">
                <Link to="/rooms" className="btn-primary">
                  Back to Rooms
                </Link>
              </Banner>
            </StyledHero>
            <section className="single-room">
              <div className="single-room-images">
               <img src={defaultBcg} alt="detail art"/>
               <img src={image2} alt="detail art"/>
               <img src={image3} alt="detail art"/>
              </div>
              <div className="single-room-info">
                <article className="desc">
                  <h3>Details</h3>
                  <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias explicabo ex magni nesciunt. Magnam voluptatum praesentium vero neque maxime?.</p>
                  <button className="btn-primary btn_submit">Đặt phòng ngay</button>
                </article>
                <article className="info">
                  <h3>Info Room</h3>
                  <span>Price : $1000</span>
                  <span>Size : $100 Sqft</span>
                  <span> Max Capacity : 1 </span>
                  <span> "pets allowed" : "no pets allowed"</span>
                  <span> free breakfast included </span>
                </article>
               
              </div>
            </section>
            <EmailFeedBack />
            <Footer />
          </>
        );
}

export default SingleRoom

// export default class SingleRoom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       slug: this.props.slug,
//       defaultBcg,
//     };
//   }
//   // componentDidMount() {
//   //   console.log();
//   // }
//   static contextType = RoomContext;
//   render() {
//     const { getRoom } = this.context;
//     const room = getRoom(this.state.slug);

//     if (!room) {
//       return (
//         <div className="error">
//           <h3>No such room could be found</h3>
//           <Link to="/rooms" className="btn-primary">
//             Back to Rooms
//           </Link>
//         </div>
//       );
//     }
   
//     const [mainImg, ...defaultImg] = images;
//     return (
//       <>
//         <StyledHero img={mainImg}>
//           <Banner title={`${name} room`}>
//             <Link to="/rooms" className="btn-primary">
//               Back to Rooms
//             </Link>
//           </Banner>
//         </StyledHero>
//         <section className="single-room">
//           <div className="single-room-images">
//             {defaultImg.map((image, index) => {
//               return <img src={image} alt={name} key={index} />;
//             })}
//           </div>
//           <div className="single-room-info">
//             <article className="desc">
//               <h3>Details</h3>
//               <p>{description}</p>
//             </article>
//             <article className="info">
//               <h3>Info</h3>
//               <h6>Price : ${price}</h6>
//               <h6>Size : ${size} Sqft</h6>
//               <h6>
//                 Max Capacity :{" "}
//                 {capacity > 1 ? `${capacity} people` : `${capacity} person`}
//               </h6>
//               <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
//               <h6>{breakfast && "free breakfast included"}</h6>
//             </article>
//           </div>
//         </section>
//       </>
//     );
//   }
// }
