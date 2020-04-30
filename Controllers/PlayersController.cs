using System.Collections.Generic;
using System.Threading.Tasks;
using FiveScorersDotNet.Models;
using Microsoft.AspNetCore.Mvc;

namespace FiveScorersDotNet.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class PlayersController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<Player>> Get(){
            await Task.Delay(100);

            return new Player[] {
                new Player{ Name = "Messi"},
                new Player{ Name = "Cantona"},
                new Player{ Name = "Aguero"}
            };
        }
    }
}