using Amazon.DynamoDBv2.DataModel;

namespace FiveScorersDotNet.Players
{
    [DynamoDBTable("choice")]
    public class Choice
    {
        [DynamoDBHashKey]
        public int id { get; set; }
        public Player[] players { get; set; }
    }
}