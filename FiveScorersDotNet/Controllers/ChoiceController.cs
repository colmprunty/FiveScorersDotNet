using System.Collections.Generic;
using FiveScorersDotNet.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FiveScorersDotNet.Controllers
{
    [ApiController]
    public class ChoiceController : Controller
    {
        private readonly List<Player> _selectedPlayers = new List<Player>();

        [AllowAnonymous]
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
                },
                new Player
                {
                    Name="Salah"
                }
            };
        }
    }
}