import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const Home = () => {
  const [customer, setCustomer] = useState(0);
  const [bill, setBill] = useState();
  const [reservation , setReservation] = useState();
  useEffect(() => {
    const getReservation = async () => {
      try {
        const allReservation = await axios.get("/phieudat/all");
        setReservation(allReservation.data.map(datum => datum.id).reduce((a, b) => a + 1));
      } catch (err) {
        console.log(err);
      }
    };
    getReservation();
  }, []);
  useEffect(() => {
    const getBill = async () => {
      try {
        const allBill = await axios.get("/hoadon/all");
        setBill(allBill.data.map(datum => datum.tong_tien).reduce((a, b) => a + b))
      } catch (err) {
        console.log(err);
      }
    };
    getBill();
  }, []);

  useEffect(() => {
    const getPins = async () => {
      try {
        const allCustomer = await axios.get("/khachhang/all");
        setCustomer(allCustomer.data.map(datum => datum.id).reduce((a, b) => a + 1));
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);
  console.log(customer)
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" valueSum={customer} />
          <Widget type="order" valueSum={reservation}/>
          <Widget type="earning" valueSum={bill}/>
        </div>
        <div className="charts">
          <Featured valueSum={bill}/>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          {/* <Table /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
