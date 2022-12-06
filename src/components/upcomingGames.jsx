import Carousel from 'react-bootstrap/Carousel';

function upcomingGames() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.indianexpress.com/2022/07/God-of-war-ragnarok-trailer-launch-preorder-collectors-edition-jotnar-edition.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='font-weight-bold'>GOD OF WAR RAGNAROK</h2>
          <p>His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://cdn.ndtv.com/tech/gadgets/uc_4_thiefs_end.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>UNCHARTED 4</h3>
          <p>Play as Nathan Drake and Chloe Frazer in their own standalone adventures as they confront their pasts and forge their own legacies. This game includes the critically acclaimed single-player stories from both UNCHARTED 4: A Thief’s End and UNCHARTED: The Lost Legacy.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.mobygames.com/images/covers/l/663244-valorant-windows-front-cover.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Valorant</h3>
          <p>
          A 5v5 character-based tactical shooter.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default upcomingGames;