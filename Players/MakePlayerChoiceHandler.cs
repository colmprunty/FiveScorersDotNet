using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using MediatR;

namespace FiveScorersDotNet.Players
{
    public class PlayerChoiceHandler : IRequestHandler<MakePlayerChoice, string>
    {
        public Task<string> Handle(MakePlayerChoice request, CancellationToken cancellationToken)
        {
            return Task.FromResult(string.Concat(request.Players.Select(x => x.Name)));
        }
    }
}