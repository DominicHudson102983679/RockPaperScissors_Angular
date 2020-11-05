using System;

namespace RockPaperScissors_Angular.Models
{
    public class User
    {
        public string Username { get; set; }
        public double Wins { get; set; }
        public double TurnsPlayed { get; set; }
        public double WinRatio { get; set; }

        public User(string username, int wins, int turnsPlayed)
        {
            this.Username = username;
            this.Wins = wins;
            this.TurnsPlayed = turnsPlayed;
            CalcWLDRatio();
        }

        public void CalcWLDRatio()
        {
            double ratio = (this.Wins / this.TurnsPlayed) * 100;
            ratio = Math.Round(ratio);
            
            this.WinRatio = ratio;
        }
    }
}