using System.Collections.Generic;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using FiveScorersDotNet.Players;

namespace FiveScorersDotNet.Data
{
    public class DynamoDbChoicesDataService : IChoicesDataService
    {
        private readonly IAmazonDynamoDB _dynamoDbClient;
        public DynamoDbChoicesDataService(IAmazonDynamoDB dynamoDBClient){
            _dynamoDbClient = dynamoDBClient;
        }
        public async Task SaveChoice(IEnumerable<Player> players)
        {
            await _dynamoDbClient.PutItemAsync("choices", players)
        }
    }
}