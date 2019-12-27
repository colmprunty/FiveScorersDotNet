using FiveScorersDotNet.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FiveScorersDotNet.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class ChoiceController : Controller
    {
        private readonly List<Player> _selectedPlayers = new List<Player>();

        [HttpGet]
        public IEnumerable<Player> Get()
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

        [HttpPost("[action]")]
        public void RemoveChoice(Player selectedPlayer)
        {
            _selectedPlayers.Remove(selectedPlayer);
        }
    }
}