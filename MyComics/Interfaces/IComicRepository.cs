using Microsoft.EntityFrameworkCore;
using MyComics.Models;

namespace MyComics.Interfaces
{
    public interface IComicRepository
    {
        Task<IEnumerable<Comic>> GetAll();

        Task<Comic> GetByIdAsync(int Id);

        bool Add(Comic comic);
        bool Update(Comic comic);
        bool Delete(Comic comic);
        bool Save();
    }
}
