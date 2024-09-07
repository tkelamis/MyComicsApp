using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyComics.Data;
using MyComics.Interfaces;
using MyComics.Mappers;
using MyComics.Models;
using MyComics.Repository;
using MyComics.ViewModels;

namespace MyComics.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IUserRepository _userRepository;

        public UserController(
            ApplicationDbContext context,
            IUserRepository userRepository
            )
        {
            _context = context;
            _userRepository = userRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            if(users == null)
            {
                return NotFound();
            }

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> PostUser([FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _userRepository.Add(user);

            return CreatedAtAction(nameof(GetUserById), new { id = user.Id }, user);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _userRepository.Delete(user);
            _userRepository.Delete(user);
            return NoContent();
        }

    }
}
