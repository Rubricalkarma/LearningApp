using LearningApp_Backend.Database.Configs;
using LearningApp_Backend.Database.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LearningApp_Backend.Accessors
{
    public class UsersAccessor
    {

        private readonly IMongoCollection<User> _usersCollection;

        public UsersAccessor(IOptions<UsersConfigs> usersConfig)
        {
            var mongoClient = new MongoClient(usersConfig.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(usersConfig.Value.DatabaseName);

            _usersCollection = mongoDatabase.GetCollection<User>(usersConfig.Value.CollectionName);
        }

        public async Task<User> GetAsync(string userId)
        {
            return await _usersCollection.Find(user => user.UserId == userId).FirstOrDefaultAsync();
        }

        public async Task CreateAsync(User user)
        {
            await _usersCollection.InsertOneAsync(user);
        }

    }
}
