using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RockPaperScissors_Angular.Models;

namespace RockPaperScissors_Angular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class rpsController : ControllerBase
    {
        

        [HttpPost]
        public Round PlayRequest([FromBody] PlayRequest UserChoice)
        {
            string choice = UserChoice.UserChoice;

            Round r = new Round(choice);

            return r;
        }
        
    }
    
}
