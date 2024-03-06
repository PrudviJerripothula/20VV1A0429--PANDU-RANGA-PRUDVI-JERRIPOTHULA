import "./App.css"
import { Card } from "./components/card"
import Button from "./components/button";
function App() {
  return (
    <div className="App">
      <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png"
        imgAlt="Iron-Man"
        title="Iron Man"
        description="The Armoured-Hero"  
        buttonText="Show More"
        buttonLink="https://en.wikipedia.org/wiki/Iron_Man"
        />
        <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/en/b/bf/CaptainAmericaHughes.jpg"
        imgAlt="Captain-America"
        title="Captain-America"
        description="Super-Soldier"  
        buttonText="Show More"
        buttonLink="https://en.wikipedia.org/wiki/Captain_America"
        />
        <Card
        imgSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2240a005-d430-4be0-9d03-4386a474a1b8/d7w0noa-0225e811-d1e6-4676-9173-b535bdf5884b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyNDBhMDA1LWQ0MzAtNGJlMC05ZDAzLTQzODZhNDc0YTFiOFwvZDd3MG5vYS0wMjI1ZTgxMS1kMWU2LTQ2NzYtOTE3My1iNTM1YmRmNTg4NGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3QFYCXyxn8fn9YRB4CtzQVsny1cxY32PvxBUqdp7P3A"
        imgAlt="Thor"
        title="Thor Odinson"
        description="The God of Thunder"  
        buttonText="Show More"
        buttonLink="https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)"
        />
        <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png"
        imgAlt="Hulk"
        title="Hulk"
        description="The Incredible Hulk"  
        buttonText="Show More"
        buttonLink="https://en.wikipedia.org/wiki/Hulk"
        />
        <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/en/1/1b/Black_Widow_1.png"
        imgAlt="Black-Widow"
        title="Black-Widow"
        description="Spy Avenger"  
        buttonText="Show More"
        buttonLink="https://en.wikipedia.org/wiki/Black_Widow_(Natasha_Romanova)"
        />
        <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/en/9/99/Hawkeye_%28Clinton_Barton%29.png"
        imgAlt="Hawkeye"
        title="Hawkeye"
        description="Hero with Sharp-shooting Skills"  
        buttonText="Show More"
        buttonLink="https://en.wikipedia.org/wiki/Hawkeye_(Clint_Barton)"
        />
        <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
        imgAlt="Spider-Man"
        title="Spider-Man"
        description="Teenage SuperHero with Spider Powers"  
        buttonText="Show More"
        buttonLink="https://en.wikipedia.org/wiki/Spider-Man"
        />
        <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/en/3/3e/Generations_Captain_Marvel_%26_Captain_Mar-Vell.jpg"
        imgAlt="Captain-Marvel"
        title="Captain-Marvel"
        description=""  
        buttonText="Show More"
        buttonLink="https://en.wikipedia.org/wiki/Captain_Marvel_(Marvel_Comics)"
        />
        <Card
        imgSrc=""
        imgAlt="Ant-Man"
        title="Ant-Man"
        description="Hero who can change his Size."  
        buttonText="Show More"
        buttonLink="https://en.wikipedia.org/wiki/Ant-Man"
        />
          <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/en/9/97/Scarlet_Witch.jpg"
        imgAlt=""
        title="Scarlet-Witch"
        description="Witch who have reality-chanfing and mind-controlling abilities."  
        buttonText="Show More"
        buttonLink="https://en.wikipedia.org/wiki/Scarlet_Witch"
        />
        <Card
        imgSrc="https://upload.wikimedia.org/wikipedia/en/e/ea/Avengers_Vol_4_24.1.jpg"
        imgAlt="Vision"
        title=""
        description="Android created by super-villain Ultron,who later turned into a hero."  
        buttonText="Show More"
        buttonLink=""
        />
        </div>
  );
}
export default App;