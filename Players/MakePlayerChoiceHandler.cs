using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using MediatR;
using FiveScorersDotNet.Data;
using System;

namespace FiveScorersDotNet.Players
{
    public class PlayerChoiceHandler : IRequestHandler<MakePlayerChoice, string>
    {
        private readonly IChoicesDataService _choicesDataService;

        public PlayerChoiceHandler(IChoicesDataService choicesDataService)
        {
            _choicesDataService = choicesDataService ?? throw new ArgumentNullException(nameof(choicesDataService));
        }

        public async Task<string> Handle(MakePlayerChoice request, CancellationToken cancellationToken)
        {
            var choice = new Choice { players = request.Players.ToArray(), id = 1 };
            await _choicesDataService.SaveChoice(choice);
            return "ok";
        }
    }
}