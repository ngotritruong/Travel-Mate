import "./propertyList.css";

function PropertyList() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://media.istockphoto.com/photos/interior-of-a-hotel-bedroom-picture-id533338000?b=1&k=20&m=533338000&s=170667a&w=0&h=RjCA3fQ0K9zvbRnjMwfwAR06CAruyvfJ8m9I8ce0QJU="
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h2>Hotels</h2>
          <h3>223 hotels</h3>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h2>Apartments</h2>
          <h3>223 Apartments</h3>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h2>Resorts</h2>
          <h3>223 Resorts</h3>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h2>Villas</h2>
          <h3>223 Villas</h3>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="pListImg"
        />
        <div className="pListTitle">
          <h2>Cabins</h2>
          <h3>223 Cabins</h3>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
