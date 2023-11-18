const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-909208346.jpg?w=1390&crop=1"
          alt="postImage"
        />
      </div>
      <div className="texts">
        <h2>
          Cybersecurity investor Ballistic Ventures seeks $300M for new fund
        </h2>
        <p className="info">
          <a href="#" className="author">
            Veysel Kartalmis
          </a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          Ballistic Ventures, a venture capital firm dedicated to funding and
          incubating cybersecurity startups, is looking to raise as much as $300
          million for a new fund, according to a regulatory filing.
        </p>
      </div>
    </div>
  );
};

export default Post;
