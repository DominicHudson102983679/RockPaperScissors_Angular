using System;
using RockPaperScissors_Angular.Models;

namespace RockPaperScissors_Angular.Models
{
    public class Round
    {
        public string UserChoice { get; set; }
        public string CPUChoice { get; set; }
        public string Result { get; set; }

        public Round(string userChoice)
        {
            this.UserChoice = userChoice;
            this.CPUChoice = MakeCPUchoice();
            this.Result = GetResult();
        }

        public string MakeCPUchoice()
        {
            Random r = new Random();
            int rCPUChoice = r.Next(3);

            switch (rCPUChoice)
            {
                case 0:
                    return "Rock";
                case 1:
                    return "Paper";
                case 2:
                    return "Scissors";
                default:
                    return "ERROR ERROR ERROR ERROR ERROR";
            }
        }

        public string GetResult()
        {

            // case "rock"
            if (this.CPUChoice == "Rock" && this.UserChoice == "Rock")
            {
                return "Draw!";
            }
            else if (this.CPUChoice == "Rock" && this.UserChoice == "Scissors")
            {
                return "You Lost!";
            }
            else if (this.CPUChoice == "Rock" && this.UserChoice == "Paper")
            {
                return "You Win!";
            }

            // case "paper"
            else if (this.CPUChoice == "Paper" && this.UserChoice == "Rock")
            {
                return "You Lost!";
            }
            else if (this.CPUChoice == "Paper" && this.UserChoice == "Paper")
            {
                return "Draw!";
            }
            else if (this.CPUChoice == "Paper" && this.UserChoice == "scissors")
            {
                return "You Win!";
            }

            // case "scissors"
            else if (this.CPUChoice == "Scissors" && this.UserChoice == "Rock")
            {
                return "You Win!";
            }
            else if (this.CPUChoice == "Scissors" && this.UserChoice == "Paper")
            {
                return "You Lost!";
            }
            else if (this.CPUChoice == "Scissors" && this.UserChoice == "Scissors")
            {
                return "Draw!";
            }

            else
            {
                return "ERROR ERROR ERROR ERROR ERROR";
            }
        }
        /*
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

        */
    }
}