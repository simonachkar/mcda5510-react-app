import "../App.css";
import img from '../canadian-flag.jpeg';

function HomePage() {
  return (
    <div className="App">
      <img src={img} alt="Canadian Flag" width="75%" />
      <h1>Welcome to the Canada App</h1>
      <p>
        Canada is a beautiful country located in North America. It is known for
        its stunning landscapes, multicultural cities, and rich history.
      </p>

      <h2>Fun facts</h2>
      <p>
        Canada is the second-largest country in the world by land area, covering
        approximately 9.98 million square kilometers. It is known for its
        breathtaking natural wonders, including the Rocky Mountains, vast
        forests, and numerous lakes. Canada is also famous for its friendly
        people and cultural diversity.
      </p>

      <h2>Provinces and Territories</h2>
      <p>Canada is divided into 10 provinces and 3 territories. They are:</p>

      <h3>Provinces</h3>
      <ul>
        <li>Alberta</li>
        <li>British Columbia</li>
        <li>Manitoba</li>
        <li>New Brunswick</li>
        <li>Newfoundland and Labrador</li>
        <li>Nova Scotia</li>
        <li>Ontario</li>
        <li>Prince Edward Island</li>
        <li>Quebec</li>
        <li>Saskatchewan</li>
      </ul>

      <h3>Territories</h3>
      <ul>
        <li>Northwest Territories</li>
        <li>Nunavut</li>
        <li>Yukon</li>
      </ul>
    </div>
  );
}

export default HomePage;
