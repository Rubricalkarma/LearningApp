using LearningApp_Backend.Database.Models;
using LearningApp_Backend.Managers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LearningApp_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {

        private readonly UsersManager _usersManager;

        public UsersController(UsersManager usersManager)
        {
            _usersManager = usersManager;
        }

        [Route("/getUser")]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetUserPublic(string userId)
        {
            User? user = null;
            try
            {
                user = await _usersManager.GetUser(userId);
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            if(user == null)
                return NotFound();

            return Ok(user);
        }

        [Route("/addUser")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            try
            {
                await _usersManager.CreateUser(user);
            } catch (Exception ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }

            return new OkResult();
        }

        [Route("/test")]
        [HttpGet]
        public IActionResult Test()
        {
            return Ok("Working!");
        }
    }
}
