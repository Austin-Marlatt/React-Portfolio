export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return(
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="name">Enter your Name: </label>
              <input
                type="text"
                name="name"
                className="name"
                required
                ></input>
          </li>
          <li>
            <label htmlFor="email">Enter your Email:</label>
              <input
                type="email"
                name="email"
                className="email"
                required
                ></input>
          </li>
          <li>
            <label htmlFor="message">Message:</label>
              <input
                type="text"
                name="message"
                className="message"
                ></input>
          </li>
          <input type="submit" value="submit"></input>

        </ul>
      </form>
    </div>
  );
}