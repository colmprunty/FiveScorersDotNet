using FiveScorersDotNet.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FiveScorersDotNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChoiceController : Controller
    {
        private readonly List<Player> _selectedPlayers = new List<Player>();

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

        [HttpPost("[action]")]
        public void AddChoice(Player selectedPlayer)
        {
            _selectedPlayers.Add(selectedPlayer);
        }

        [HttpGet("[action]")]
        public IEnumerable<Player> GetSelectedPlayers()
        {
            return _selectedPlayers;
        }
    }
}