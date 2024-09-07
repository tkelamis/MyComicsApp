using Microsoft.EntityFrameworkCore;
using MyComics.Models;

namespace MyComics.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAll();

        Task<User> GetByIdAsync(int Id);

        bool Add(User user);
        bool Update(User user);
        bool Delete(User user);
        bool Save();
    }
}
