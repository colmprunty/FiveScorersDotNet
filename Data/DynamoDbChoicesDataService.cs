using System.Collections.Generic;
using System.Threading.Tasks;
using FiveScorersDotNet.Players;

namespace FiveScorersDotNet.Data
{
    public class DynamoDbChoicesDataService : IChoicesDataService
    {
        public Task SaveChoice(IEnumerable<Player> players)
        {
            throw new System.NotImplementedException();
        }
    }
}