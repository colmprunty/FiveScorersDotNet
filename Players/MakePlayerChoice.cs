using System.Collections.Generic;
using MediatR;

namespace FiveScorersDotNet.Players
{
    public class MakePlayerChoice : IRequest<string>
    {
        public MakePlayerChoice(IEnumerable<Player> players)
        {
            Players = players;
        }
        public IEnumerable<Player> Players { get; }
    }
}