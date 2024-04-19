
export default function Home() {
 
  return (
    <div className='home-container'>
      {/* navbar*/}
      <nav className='navbar'>
        <h1 className='nav-heading'>Memory Game</h1>
      </nav>
      <p>Do not click on the same Pokemon twice!</p>
      {/* {gameOver ?} */}
      <div className='card-container'>
        <div className='column 1'>
          <Card title="Charmender" image="./images/img13.png" />
          <br />
          <Card title="Pikachu" image="./images/img14.png"/>
          <br />
          <Card title="Jigglypuff" image="./images/img15.png"/>
        </div>
        <div className='column 2'>
          <Card title="Mew" image="./images/img5.png"/>
          <br />
          <Card title="Balbasur" image="./images/img16.png"/>
          <br />
          <Card title="Meowth" image="./images/img7.png"/>
        </div>
         <div className='column 3'>
          <Card title="Snorlax" image="./images/img8.png"/>
          <br />
          <Card title="Eevee" image="./images/img9.png" />
          <br />
          <Card title="Pichu" image="./images/img11.png" />
        </div>
      </div>
    </div>
  )
}
