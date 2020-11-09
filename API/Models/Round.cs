using System;
using RockPaperScissors_Angular.Models;

namespace RockPaperScissors_Angular.Models
{
    public class Round
    {
        public string UserChoice { get; set; }
        public string CPUChoice { get; set; }
        public string Result { get; set; }
        public string Username { get; set; }

        public Round(string userChoice, string username)
        {
            this.UserChoice = userChoice;
            this.CPUChoice = MakeCPUchoice();
            this.Result = GetResult();
            this.Username = username;
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
            if (this.CPUChoice == "Rock" && this.UserChoice == "Paper" || this.CPUChoice == "Paper" && this.UserChoice == "scissors" || this.CPUChoice == "Scissors" && this.UserChoice == "Rock")
            {
                return "You Win!";
            } else if (this.CPUChoice == "Rock" && this.UserChoice == "Rock" || this.CPUChoice == "Paper" && this.UserChoice == "Paper" || this.CPUChoice == "Scissors" && this.UserChoice == "Scissors")
            {
                return "Draw!";
            } else if (this.CPUChoice == "Rock" && this.UserChoice == "Scissors" || this.CPUChoice == "Paper" && this.UserChoice == "Rock" || this.CPUChoice == "Scissors" && this.UserChoice == "Paper")
            {
                return "You Lost!";
            } else
            {
                return "ERROR ERROR ERROR ERROR ERROR";
            }
        }
    }
}