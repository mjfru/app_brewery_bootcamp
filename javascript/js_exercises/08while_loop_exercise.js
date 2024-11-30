//! 99 Bottles of Beer...

const singBeerSong = () => {
  let beerAmount = 99;
  while (beerAmount >= 0) {
    if (beerAmount > 1) {
      console.log(`${beerAmount} bottles of beer on the wall, ${beerAmount} bootles of beer.
        Take one down and pass it around, ${beerAmount} bottles of beer on the wall.`);
    } else if (beerAmount === 1) {
      console.log(`${beerAmount} bottle of beer on the wall, ${beerAmount} bootle of beer.
        Take it down and pass it around, ${beerAmount} bottle of beer on the wall.`);
    } else {
      console.log(
        "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
      );
    }
    beerAmount--;
  }
};

singBeerSong();