import './Banner.css';
import {BannerProps} from "./interfaces";

function Banner(props: BannerProps) {
  console.log("Banner image is ", props.image);
  return (
    <div className="Banner">
      <header className="Banner-header">
        <img src={props.image} className="Banner-todo" alt="where is my?" width={250} height={250} />
        <p>
	  My TODO list
        </p>
      </header>
    </div>
  );
}

export default Banner;
