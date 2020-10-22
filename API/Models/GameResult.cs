using System;
using RockPaperScissors_Angular.Models;

namespace RockPaperScissors_Angular.Models
{
    public class GameResult
    {
        public string PlayerChoice { get; set; }
        public string CpuChoice { get; set; }
        public string Result { get; set; }

        public GameResult()
        {
            
        }

        public GameResult(string playerChoice)
        {
            PlayerChoice = playerChoice;
            CpuChoice = createAiChoice();
            Result = calculatewinner();
        }

        string createAiChoice (){
            Random r=new Random();
            string[] AIchoice = { "Rock", "Paper", "Scissors" };
            int randomNum = r.Next(0, AIchoice.Length);
            return AIchoice[randomNum];
        }

        string calculatewinner(){
            
            if (this.CpuChoice == this.PlayerChoice)
            {
               return this.Result = "Draw";
            }
            else if ((this.PlayerChoice == "Rock" && this.CpuChoice == "Scissors") || (this.PlayerChoice == "Paper" && this.CpuChoice == "Rock") || (this.PlayerChoice == "Scissors" && this.CpuChoice == "Paper"))
            {
                return this.Result = "Win";
            }
            else 
            {
                return this.Result = "Lose";
            }
        }
    }
}