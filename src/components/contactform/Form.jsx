import "./Form.css";
import { AiFillMessage } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
const Form = () => {
  const callBtn = () => {
    console.log("Call Btn Clicked");
  };

  const chatBtn = () => {
    console.log("Chat Btn Clicked");
  };

  const emailBtn = () => {
    console.log("email Btn Clicked");
  };

  return (
    <>
      <section className="btn">
        <div className="container-btn">
          <button onClick={chatBtn}>
            <AiFillMessage /> VIA SUPPORT CHAT
          </button>
          <button onClick={callBtn}>
            <BsTelephoneFill /> VIA CALL
          </button>
        </div>
      </section>

      <div className="main-container">
        <section className="form">
          <button onClick={emailBtn} className="long-btn">
            ## VIA EMAIL FORM
          </button>

          <label className="name-lable" htmlFor="">
            Name
          </label>
          <input type="name" placeholder="" />
          <label className="email-lable" htmlFor="">
            Email
          </label>
          <input type="email" className="email" />
          <label className="text-lable" htmlFor="">
            Text
          </label>
          <textarea type="text" rows={8} />

          <button className="submit-btn">Submit</button>
        </section>

        <section className="img">
          <img src="/6029674.jpg" alt="" />
        </section>
      </div>
    </>
  );
};

export default Form;
