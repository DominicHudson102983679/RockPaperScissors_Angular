using System;

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
                    return "rock";
                case 1:
                    return "paper";
                case 2:
                    return "scissors";
                default:
                    return "rCPUChoice error";
            }
        }

        public string GetResult()
        {
            // cpuChoice: Rock
            if (this.UserChoice == "paper" && this.CPUChoice == "rock"){
                return "You Win!";
            } else if (this.CPUChoice == "rock" && this.UserChoice == "rock" ){
                return "It's a Draw!";
            } else if (this.CPUChoice == "rock" && this.UserChoice == "scissors" ){
                return "You Lose!";
            }

            // cpuChoice: Paper
            else if (this.CPUChoice == "paper" && this.UserChoice == "scissors"){
                return "You Win!";
            } else if(this.CPUChoice == "paper" && this.UserChoice == "paper" ){
                return "It's a Draw!";
            }else if(this.CPUChoice == "paper" && this.UserChoice == "rock" ){
                return "You Lose!";
            }

            // cpuChoice: Scissors
            
            else if (this.CPUChoice == "scissors" && this.UserChoice == "scissors"){
                return "It's a Draw!";
            } else if(this.CPUChoice == "scissors" && this.UserChoice == "paper"){
                return "You Lost!";
            } else if (this.CPUChoice == "scissors" && this.UserChoice == "rock"){
                return "You Win!";
            }

            else {
                return "GetResult error in Round.cs";
            }
        }
    }
}