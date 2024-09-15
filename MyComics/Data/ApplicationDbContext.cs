using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MyComics.Models;

namespace MyComics.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Comic> Comics { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Comic>().HasData(
                new Comic { Id = 1, Title = "Infinite Crisis", Pages = 230 },
                new Comic { Id = 2, Title = "Green Lantern", Pages = 320 },
                new Comic { Id = 3, Title = "JLA", Pages = 420 },
                new Comic { Id = 4, Title = "Flash", Pages = 330 }
            );
        }
    }
}
