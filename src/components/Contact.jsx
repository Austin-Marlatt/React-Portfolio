export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="jumbotron">
      <form className="lead">
        <div className="form-group row my-3">
          <label htmlFor="InputName" className="col-sm-2 col-form-label mainText">Name</label>
          <div className="col-sm-10">
          <input
            type="name"
            className="form-control"
            id="InputName"
            placeholder="Your Name Here"
            required
          ></input>
          </div>
        </div>
        <div className="form-group row my-3">
          <label htmlFor="InputEmail" className="col-sm-2 col-form-label mainText">Email</label>
          <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailInput"
            placeholder="Enter Email"
            required
          ></input>
          </div>
          <small className="form-text text-muted subText">
            I will respond to inquiries as soon as I can.
          </small>
        </div>
        <div className="form-group row my-3">
          <label htmlFor="messageTextArea" className="col-sm-2 col-form-label mainText">Message</label>
          <div className="col-sm-10">
          <textarea
            className="form-control"
            id="messageTextArea"
            rows="4"
            required
          ></textarea>
          </div>
        </div>
        <hr className="my-4"></hr>
        <div className="form-group row my-3">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-contact">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
