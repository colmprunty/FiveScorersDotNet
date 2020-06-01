using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FiveScorersDotNet.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FiveScorersDotNet.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class PlayersController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<Player>> Get()
        {
            await Task.Delay(100);

            return new Player[] {
                new Player{ Name = "Messi"},
                new Player{ Name = "Cantona"},
                new Player{ Name = "Aguero"}
            };
        }

        [HttpPost]
        [Route("makechoice")]
        public async Task<string> MakeChoice(IEnumerable<Player> choices)
        {
            return string.Concat(choices.Select(x => x.Name)); 
        }
    }
}