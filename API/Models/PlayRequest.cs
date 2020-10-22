namespace RockPaperScissors_Angular.Models
{
    public class PlayRequest
    {

        public string PlayerChoice { get; set; }

        public PlayRequest()
        {
            
        }
        public PlayRequest(string angularHttpRequest)
        {
            this.PlayerChoice = angularHttpRequest;
        }
    }

}