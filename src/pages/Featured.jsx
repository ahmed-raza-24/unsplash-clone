const Featured = () => {
  return (
    <div className="Featured">

      <div className="unsplashContainer">
        <h2>Unsplash</h2>
        <p>The internet’s source for visuals powered by creators.</p>

        <input
          type="search"
          placeholder="Search photos and illustrations"
        />
      </div>

      <div className="images">
        {Array.from({ length: 12 }).map((_, i) => (
          <img
            key={i}
            src={`https://source.unsplash.com/random/400x300?sig=${i}`}
            alt=""
          />
        ))}
      </div>

    </div>
  )
}

export default Featured