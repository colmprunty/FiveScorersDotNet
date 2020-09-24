using System.Collections.Generic;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using FiveScorersDotNet.Players;

namespace FiveScorersDotNet.Data
{
    public class DynamoDbChoicesDataService : IChoicesDataService
    {
        private readonly AmazonDynamoDBClient _dynamoDBClient;
        private readonly DynamoDBContext _context;

        public DynamoDbChoicesDataService()
        {
            _dynamoDBClient = new AmazonDynamoDBClient("awsAccessKeyId", "awsSecretAccessKey",
             new AmazonDynamoDBConfig
             {
                 ServiceURL = "http://localhost:8000",
                 UseHttp = true,

             });
            _context = new DynamoDBContext(_dynamoDBClient);
        }
        public async Task SaveChoice(Choice choice)
        {
            await _context.SaveAsync<Choice>(choice);
        }
    }
}