using Microsoft.EntityFrameworkCore;
using MyComics.Data;
using MyComics.Interfaces;
using MyComics.Models;

namespace MyComics.Repository
{
    public class UserRepository : IUserRepository
    {

        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAll()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetByIdAsync(int Id)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Id == Id);
        }

        public bool Add(User user)
        {
            _context.Users.Add(user);
            return Save();
        }

        public bool Update(User user)
        {
            throw new NotImplementedException();
        }

        public bool Delete(User user)
        {
            _context.Users.Remove(user);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
    }
}
