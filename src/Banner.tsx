import './Banner.css';
import image from "./images/sticky-todo.jpg";

function Banner() {
  return (
    <div className="Banner">
      <header className="Banner-header">
        <img src={image} className="Banner-todo" alt="where is my?" width={250} height={250} />
        <p>
	  My TODO list
        </p>
      </header>
    </div>
  );
}

export default Banner;
