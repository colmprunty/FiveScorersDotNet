using System.Collections.Generic;
using System.Threading.Tasks;
using FiveScorersDotNet.Players;

namespace FiveScorersDotNet.Data
{
    public interface IChoicesDataService
    {
        public Task SaveChoice(IEnumerable<Player> players);
    }
}