function Square({ value }){

  function handleClick() {
    console.log('Clicked!')
  }


  return (
    <button 
      className="square" 
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default Square;