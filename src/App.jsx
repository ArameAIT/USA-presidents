import './App.css'
import Contact from './Components'

const Arr =[
  {
    id : 1,
    userName : "George Washington",
    wikiUrl : "https://en.wikipedia.org/wiki/George_Washington",
    years: "1789-1797"
  },
  {
    id : 2,
    userName : "John Adams",
    wikiUrl : "https://en.wikipedia.org/wiki/John_Adams",
    years: "1797-1801"
  },
  {
    id : 3,
    userName : "Thomas Jefferson",
    wikiUrl : "https://en.wikipedia.org/wiki/Thomas_Jefferson",
    years: "1801-1809"
  },
  {
    id : 4,
    userName : "James Madison",
    wikiUrl : "https://en.wikipedia.org/wiki/James_Madison",
    years: "1809-1817"
  },
  {
    id : 5,
    userName : "James Monroe",
    wikiUrl : "https://en.wikipedia.org/wiki/James_Monroe",
    years: "1817-1825"
  },
  {
    id : 6,
    userName : "John Quincy Adams",
    wikiUrl : "https://en.wikipedia.org/wiki/John_Quincy_Adams",
    years: "1825-1829"
  },
  {
    id : 7,
    userName : "Andrew Jackson",
    wikiUrl : "https://en.wikipedia.org/wiki/Andrew_Jackson",
    years: "1829-1837"
  },
  {
    id : 8,
    userName : "Martin Van Buren",
    wikiUrl : "https://en.wikipedia.org/wiki/Martin_Van_Buren",
    years: "1837-1841"
  },
  {
    id : 9,
    userName : "William Henry Harrison",
    wikiUrl : "https://en.wikipedia.org/wiki/William_Henry_Harrison",
    years: "1841"
  },
  {
    id : 10,
    userName : "John Tyler",
    wikiUrl : "https://en.wikipedia.org/wiki/John_Tyler",
    years: "1841-1845"
  },
  {
    id : 11,
    userName : "James K. Polk",
    wikiUrl : "https://en.wikipedia.org/wiki/James_K._Polk",
    years: "1845-1849"
  },
  {
    id : 12,
    userName : "Zachary Taylor",
    wikiUrl : "https://en.wikipedia.org/wiki/Zachary_Taylor",
    years: "1845-1850"
  },
  {
    id : 13,
    userName : "Millard Filmor",
    wikiUrl : "https://en.wikipedia.org/wiki/Millard_Fillmore",
    years: "1850-1853"
  },
  {
    id : 14,
    userName : "Franklin Pierce",
    wikiUrl : "https://en.wikipedia.org/wiki/Franklin_Pierce",
    years: "1853-1857"
  },
  {
    id : 15,
    userName : "James Buchanan",
    wikiUrl : "https://en.wikipedia.org/wiki/James_Buchanan",
    years: "1857-1861"
  },
  {
    id : 16,
    userName : "Abraham Lincoln",
    wikiUrl : "https://en.wikipedia.org/wiki/Abraham_Lincoln",
    years: "1861-1865"
  },
  {
    id : 17,
    userName : "Andrew Johnson",
    wikiUrl : "https://en.wikipedia.org/wiki/Andrew_Johnson",
    years: "1865-1869"
  },
  {
    id : 18,
    userName : "Ulysses S.Grant",
    wikiUrl : "https://en.wikipedia.org/wiki/Ulysses_S._Grant",
    years: "1869-1877"
  },
  {
    id : 19,
    userName : "Rutherford B.Hayes",
    wikiUrl : "https://en.wikipedia.org/wiki/Rutherford_B._Hayes",
    years: "1877-1881"
  },
  {
    id : 20,
    userName : "James A.Garfield",
    wikiUrl : "https://en.wikipedia.org/wiki/James_A._Garfield",
    years: "1881"
  },
  {
    id : 21,
    userName : "Chester A.Arthur",
    wikiUrl : "https://en.wikipedia.org/wiki/Chester_A._Arthur",
    years: "1881-1885"
  },
  {
    id : 22,
    userName : "Grover Cleveland",
    wikiUrl : "https://en.wikipedia.org/wiki/Grover_Cleveland",
    years: "1885-1889"
  },
  {
    id : 23,
    userName : "Benjamin Harrison",
    wikiUrl : "https://en.wikipedia.org/wiki/Benjamin_Harrison",
    years: "1889-1893"
  },
  {
    id : 24,
    userName : "Grover Cleveland",
    wikiUrl : "https://en.wikipedia.org/wiki/Grover_Cleveland",
    years: "1893-1897"
  },
  {
    id : 25,
    userName : "William McKinley",
    wikiUrl : "https://en.wikipedia.org/wiki/William_McKinley",
    years: "1897-1901"
  },
  {
    id : 26,
    userName : "Theodore Roosevelt",
    wikiUrl : "https://en.wikipedia.org/wiki/Theodore_Roosevelt",
    years: "1901-1909"
  },
  {
    id : 27,
    userName : "William Howard Taft",
    wikiUrl : "https://en.wikipedia.org/wiki/William_Howard_Taft",
    years: "1909-1913"
  },
  {
    id : 28,
    userName : "Woodrow Wilson",
    wikiUrl : "https://en.wikipedia.org/wiki/Woodrow_Wilson",
    years: "1913-1921"
  },
  {
    id : 29,
    userName : "Warren G.Harding",
    wikiUrl : "https://en.wikipedia.org/wiki/Warren_G._Harding",
    years: "1921-1923"
  },
  {
    id : 30,
    userName : "Calvin Coolidge",
    wikiUrl : "https://en.wikipedia.org/wiki/Calvin_Coolidge",
    years: "1923-1929"
  },
  {
    id : 31,
    userName : "Herbert Hoover",
    wikiUrl : "https://en.wikipedia.org/wiki/Herbert_Hoover",
    years: "1929-1933"
  },
  {
    id : 32,
    userName : "Franklin Roosvelt",
    wikiUrl : "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt",
    years: "1933-1945"
  },
  {
    id : 33,
    userName : "Harry S.Truman",
    wikiUrl : "https://en.wikipedia.org/wiki/Harry_S._Truman",
    years: "1945-1953"
  },
  {
    id : 34,
    userName : "Dwinght D.Eisenhower",
    wikiUrl : "https://en.wikipedia.org/wiki/Dwight_D._Eisenhower",
    years: "1953-1961"
  },
  {
    id : 35,
    userName : "John F.Kennedy",
    wikiUrl : "https://en.wikipedia.org/wiki/John_F._Kennedy",
    years: "1961-1963"
  },
  {
    id : 36,
    userName : "Lyndon B.Johnson",
    wikiUrl : "https://en.wikipedia.org/wiki/Lyndon_B._Johnson",
    years: "1963-1969"
  },
  {
    id : 37,
    userName : "Richard Nixon",
    wikiUrl : "https://en.wikipedia.org/wiki/Lyndon_B._Johnson",
    years: "1969-1974"
  },
  {
    id : 38,
    userName : "Gerald Ford",
    wikiUrl : "https://en.wikipedia.org/wiki/Gerald_Ford",
    years: "1974-1977"
  },
  {
    id : 39,
    userName : "Jimmy Carter",
    wikiUrl : "https://en.wikipedia.org/wiki/Jimmy_Carter",
    years: "1977-1981"
  },
  {
    id : 40,
    userName : "Ronald Reagan",
    wikiUrl : "https://en.wikipedia.org/wiki/Ronald_Reagan",
    years: "1981-1989"
  },
  {
    id : 41,
    userName : "George H.W.Bush",
    wikiUrl : "https://en.wikipedia.org/wiki/George_H._W._Bush",
    years: "1989-1993"
  },
  {
    id : 42,
    userName : "Bill Clinton",
    wikiUrl : "https://en.wikipedia.org/wiki/Bill_Clinton",
    years: "1993-2001"
  },
  {
    id : 43,
    userName : "George W.Bush",
    wikiUrl : "https://en.wikipedia.org/wiki/George_W._Bush",
    years: "2001-2009"
  },
  {
    id : 44,
    userName : "Barack Obama",
    wikiUrl : "https://en.wikipedia.org/wiki/Barack_Obama",
    years: "2009-2017"
  },
  {
    id : 45,
    userName : "Donald Trump",
    wikiUrl : "https://en.wikipedia.org/wiki/Donald_Trump",
    years: "2017-2021"
  },
  {
    id : 46,
    userName : "Joe Biden",
    wikiUrl : "https://en.wikipedia.org/wiki/Joe_Biden",
    years: "2017-Incumbent"
  },



  
  



]
function App() {
  return (
    Arr.map((el)=>{
      return <Contact key={el.id} userName={el.userName} wikiUrl={el.wikiUrl} rulesYears={el.years}/>
    })  
  )
}

export default App
