using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Newtonsoft.Json;

namespace LearningApp_Backend.Database.Models
{
    public class User
    {
        [JsonIgnore]
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string? UserId { get; set; }

        public string? DisplayName { get; set; }
    }
}
