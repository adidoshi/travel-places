import { useState } from "react";
import "./styles.css";

const allPlaces = {
  North: [
    {
      Title: "Shimla, Himachal Pradesh",
      Description:
        "It is located at the foothills of the Himalayas and offers a unique travel experience with its snow-capped mountains.",
      Image:
        "https://images.unsplash.com/photo-1626621336908-b40b17f9807d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hpbWxhfHx8fHx8MTYyNzM5Nzc3MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
      Visit: "Season- March to June."
    },
    {
      Title: "Agra, Uttar Pradesh",
      Description:
        "Agra, home to the famous Taj Mahal, counts among the top places to visit in North India.",
      Image:
        "https://images.unsplash.com/photo-1523979934836-981ca2ded72f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YWdyYXx8fHx8fDE2MjczOTgyODI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
      Visit: "Season- October to March"
    },
    {
      Title: "Dehradun, Uttarakhand",
      Description:
        "The tree-covered hills and valleys of Dehradun and Mussoorie have attracted families. The Queen of Hill Stations.",
      Image:
        "https://images.unsplash.com/photo-1589738611537-4c1b6a28158a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVocmFkdW58fHx8fHwxNjI3Mzk5MTQ0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
      Visit: "March to June."
    }
  ],
  East: [
    {
      Title: "Darjeeling,  West Bengal",
      Description:
        "Mesmerising sunrises, the untouched beauty of the hills, the old-world charm of the past, and the welcoming smiles of the local people all add up to make Darjeeling one of the most beautiful hill stations",
      Image: "https://www.holidify.com/images/bgImages/DARJEELING.jpg",
      Visit: "Season- April to June"
    },
    {
      Title: "Shillong, Meghalaya ",
      Description:
        "A beautiful city encircled by pine trees,Shillong provides a relief from the heat across the country. Home to numerous waterfalls.",
      Image: "https://www.holidify.com/images/bgImages/SHILLONG.jpg",
      Visit: "Season- All seasons"
    },
    {
      Title: "Konark,  Orissa",
      Description:
        "It is renowned world over for the Sun Temple which is also a UNESCO World Heritage Site, the Annual dance festival and its beautiful sandy beaches.",
      Image:
        "https://images.unsplash.com/photo-1589738611537-4c1b6a28158a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVocmFkdW58fHx8fHwxNjI3Mzk5MTQ0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
      Visit: "March to June."
    }
  ],
  West: [
    {
      Title: "Goa",
      Description:
        "Lying on the western coast, Goa is smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture.",
      Image: "https://www.holidify.com/images/bgImages/GOA.jpg",
      Visit: "Season- March to June."
    },
    {
      Title: "Jaipur, Rajasthan",
      Description:
        '"The Pink City", Jaipur forms the Golden Triangle and hails as one of the most famous tourist circuits of the country.',
      Image: "https://www.holidify.com/images/bgImages/JAIPUR.jpg",
      Visit: "Season- October to March"
    },
    {
      Title: "Kutch, Gujrat",
      Description:
        "Virtually an island that resembles the shape of a tortoise, Kutch is an erstwhile princely state of India holding onto its grandeur nature ",
      Image:
        "https://images.unsplash.com/photo-1589738611537-4c1b6a28158a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVocmFkdW58fHx8fHwxNjI3Mzk5MTQ0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
      Visit: "Winter season"
    }
  ],
  South: [
    {
      Title: "Hampi,  Karnataka ",
      Description:
        "Hampi, the city of ruins, is a UNESCO World Heritage Site. Situated in the shadowed depth of hills and valleys, this place is a historical delight for travellers.",
      Image:
        "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_389541127_20190701121145.jpg",
      Visit: "Winter season"
    },
    {
      Title: "Pondicherry, Union Territory",
      Description:
        "The streets of the French Quarter of Pondicherry, also known as White Town, are dotted with charming mustard-yellow colonial structures.",
      Image:
        "https://static.toiimg.com/photo/msid-81717021,width-96,height-65.cms",
      Visit: "Season- October to March"
    },
    {
      Title: "Munnar,  Kerala",
      Description:
        "Munnar is a popular hill station of Kerala, Munnar is aptly known as the 'Kashmir of South India'.",
      Image:
        "https://www.holidify.com/images/cmsuploads/compressed/Munnar_hillstation_kerala_20190207123437jpg",
      Visit: "December to February"
    }
  ]
};

const title = Object.keys(allPlaces);

export default function App() {
  const [placesList, setPlacesList] = useState(allPlaces.North);

  function directionClickHandler(direction) {
    const places = allPlaces[direction];
    setPlacesList(places);
  }

  function getPlaces(places) {
    const title = places.Title;
    const image = places.Image;
    const description = places.Description;
    const season = places.Visit;
    const list = (
      <li key={image}>
        <img src={image} alt="not found" />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p style={{ fontWeight: "bold" }}>{season}</p>
        </div>
      </li>
    );
    return list;
  }
  return (
    <div className="App">
      <h1 className="heading">Best places to travel</h1>
      <p className="heading">
        Checkout amazing places to travel around India by cardinal directions
      </p>
      <div>
        {title.map((direction) => {
          return (
            <button
              key={direction}
              className="btn"
              onClick={() => directionClickHandler(direction)}
            >
              {direction}
            </button>
          );
        })}
      </div>

      <hr />
      <ul>
        {placesList.map((places) => {
          return getPlaces(places);
        })}
      </ul>
    </div>
  );
}
