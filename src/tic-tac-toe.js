class TicTacToe {
constructor() {
	  
	  this._kletki = [];
	  for (var i = 0; i < 3; i++)
	  {
          this._kletki[i] = [];
          for (var j = 0; j < 3; j++)
		   {this._kletki[i][j] = null}
      }
      
      this._xORo = 'x';

      this._Turns = 0;
      this._xORoWIN = null;
	  this._GameOver = false;
    }
	//this._winComb = null;
	
//--------------------

getCurrentPlayerSymbol() 
{
		if (this._Turns == 0)
		{return 'x';}
		else {return this._xORo;}
}

    nextTurn(rowIndex, columnIndex) {
      if (this._kletki[rowIndex][columnIndex] != null)
	                {return}
	  
      this._kletki[rowIndex][columnIndex] = this._xORo;


       // 
       var i = 0;
	   var l = this._kletki.length;
      for (i; i < l; i++){
        if ((this._kletki[i][0] == this._xORo) && (this._kletki[i][1] == this._xORo) && (this._kletki[i][2] == this._xORo)){
          
          this._xORoWIN = this._xORo;
		  this._GameOver = true;
        }
		else if((this._kletki[2][2] == this._xORo) 
		&& (this._kletki[1][1] ==this._xORo) 
		&& (this._kletki[0][0] == this._xORo)){
          this._xORoWIN = this._xORo;
		  this._GameOver = true;        }
		else if((this._kletki[2][0] == this._xORo) 
		&& (this._kletki[1][1] ==this._xORo) 
		&& (this._kletki[0][2] == this._xORo)){
          this._xORoWIN = this._xORo;
		  this._GameOver = true; }
		  
		else if((this._kletki[0][i] == this._xORo) 
		&& (this._kletki[1][i] == this._xORo) 
		&& (this._kletki[2][i] == this._xORo)){
          this._xORoWIN = this._xORo;
		  this._GameOver = true;      }
		  
      }
      this._Turns = this._Turns + 1;
      if ((this._Turns  == 2) |(this._Turns  == 4) | (this._Turns  == 6) | (this._Turns  == 8))
	  {
        this._xORo = 'x';
      }else{
        this._xORo = 'o';
      }
	  
	  // Game Over Condition 2
      if(this._Turns == 9)
	  {this._GameOver = true}
    }

    isFinished() {
      return this._GameOver;
    }

    getWinner() {
		//this._winComb = xORo;
      return this._xORoWIN;
    }

    noMoreTurns() {
      if (this._Turns != 9)
	  {
        return false;
      }
	  else {
        return true;
      }
    }

    isDraw() {
      if((this._xORoWIN == null) && (this._GameOver == true))
	  { 
	  return true
	  }
	  else {
		  return false
		  }
    }

    getFieldValue(rowIndex, colIndex) {
      return this._kletki[rowIndex][colIndex];
    }


   

}

module.exports = TicTacToe;
