using FirebaseAdmin;
using FirebaseAdmin.Auth;
using LearningApp_Backend.Managers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LearningApp_Backend.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {

        private readonly FirebaseAuth _firebaseAuth;
        private readonly UsersManager _usersManager;

        public AuthenticationController(FirebaseApp firebaseApp, UsersManager usersManager)
        {
            _firebaseAuth = FirebaseAuth.GetAuth(firebaseApp);
            _usersManager = usersManager;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("/createNewUser")]
        public async Task<IActionResult> CreateAccount([FromBody] NewUser newUser)
        {
            try
            {

                var addedUser = await _firebaseAuth.CreateUserAsync(new UserRecordArgs
                {
                    Email = newUser.Email,
                    Password = newUser.Password,
                    DisplayName = newUser.DisplayName,
                });

                await _usersManager.CreateUser(new Database.Models.User
                {
                    UserId = addedUser.Uid,
                    DisplayName = addedUser.DisplayName
                });

                var loginToken = _firebaseAuth.CreateCustomTokenAsync(addedUser.Uid);

                return new OkObjectResult(loginToken);

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        public class NewUser
        {
            public string Email { get; set; }
            public string Password { get; set; }

            public string DisplayName { get; set; }
        }
    }
}
