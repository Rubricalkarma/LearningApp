using LearningApp_Backend.Accessors;
using LearningApp_Backend.Database.Models;

namespace LearningApp_Backend.Managers
{
    public class UsersManager
    {

        private readonly UsersAccessor _usersAccessor;

        public UsersManager(UsersAccessor usersAccessor)
        {
            _usersAccessor = usersAccessor;
        }

        public async Task CreateUser(User user)
        {
            await _usersAccessor.CreateAsync(user);
        }

        public async Task<User> GetUser(string userId)
        {
            return await _usersAccessor.GetAsync(userId);
        }

    }
}
