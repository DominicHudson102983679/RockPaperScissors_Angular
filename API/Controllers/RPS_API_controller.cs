using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using RockPaperScissors_Angular.Models;
using System.Web.HttpPost;
using System.Web.HttpGet;

namespace RockPaperScissors_Angular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class rpsController : ControllerBase
    {
        public static List<User> Positions = new List<User>();

        public rpsController()
        {

        }

        [HttpPost]
        public Round PlayRequest([FromBody] PlayRequest request)
        {
            Round r = new Round(request.Username, request.UserChoice);

            User user = null;
            User found = Positions.Find(u => u.Username == request.Username);

            if (found == null)
            {
                user = new User(request.Username, 0, 1);
                Positions.Add(user);
            }
            else
            {
                user = found;
                user.TurnsPlayed++;
            }

            if (r.Result == "You win")
            {
                user.Wins++;
            }

            user.CalcWLDRatio();

            return r;
            
        }

        [HttpGet("Leaderboard")]
        public List<User> ViewLeaderBoard()
        {
            List<User> LeaderboardView = Positions.OrderByDescending(u => u.WinRatio).ToList();

            return LeaderboardView;
        }
        
    }
    
}
