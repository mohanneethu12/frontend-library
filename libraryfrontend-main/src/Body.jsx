import NewRelease from "./NewRelease"
import PopularAuthor from "./PopularAuthor"
function Body() {
    return (
    <>
    <main>
    <section id="home">
        <div className="avatarDiv">
            <img
            src="./banner.jpg"
            alt="girl with laptop"
            id="bookBanner"
            />
        </div>
    </section>

    <section id="secondSection">
        <div className="container bookShelf">
            <h2>New Releases</h2>
            <p>These releases, among others, ensure a rich and varied selection for book enthusiasts this month, each offering unique narratives and compelling characters.</p>
        </div>
    </section>
    <section>
      <div className="container">
        <ul className="books">
          <NewRelease/>
        </ul>
      </div>
    </section>
    <section>
      <div className="container project">
        <h2>Popular Authors</h2>
        <ul id="projectList">
          <PopularAuthor/>
        </ul>
      </div>
    </section>
  </main>
 
</>
    )
}

export default Body 