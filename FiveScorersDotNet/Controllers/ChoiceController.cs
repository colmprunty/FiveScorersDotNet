using FiveScorersDotNet.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FiveScorersDotNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChoiceController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Player> GetAllPlayers()
        {
            return new List<Player>
            {
                new Player
                {
                    Name="Cantona"
                },
                new Player
                {
                    Name="Messi"
                }
            };
        }
    }
}