const Banner = () => {
  return (
    <div className="md:flex px-[8rem] py-[5rem] h-[100vh] w-[100%]">

      <div>
        <h1 className='flex flex-col'>
            <span style={{fontWeight:'800', color: 'brown'}}>Quiz</span>
            <span style={{fontWeight:'800', color: '#888160d7'}}>Connoisseur</span>
        </h1>
        <p>
          Find local coffee stores nearby
        </p>
      </div>

      <div className="flex-grow"></div>

      <div>
        <h1>Hero Image</h1>
      </div>
    
    </div>
  )
}

export default Banner