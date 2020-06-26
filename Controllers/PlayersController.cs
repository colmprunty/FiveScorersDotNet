using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FiveScorersDotNet.Players;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace FiveScorersDotNet.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class PlayersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PlayersController(IMediator mediator){
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

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
            var request = new MakePlayerChoice(choices);
            return await _mediator.Send(request);
        }
    }
}