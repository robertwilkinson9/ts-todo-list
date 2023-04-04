import './Banner.css';

function Banner() {
  return (
    <div className="Banner">
      <header className="Banner-header">
	  {/*
        <img src={todo} className="Banner-todo" alt="where is my photo?" width={250} height={250} />
	*/ }
        <img src="./sticky-todo.jpg" className="Banner-todo" alt="where is my?" width={250} height={250} />
        <p>
	  My TODO list
        </p>
      </header>
    </div>
  );
}

export default Banner;
