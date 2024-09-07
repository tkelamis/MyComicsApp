using MyComics.Models;
using MyComics.ViewModels;

namespace MyComics.Mappers
{
    public class ComicMapper
    {
        public ComicViewModel MapToViewModel(Comic comic)
        {
            return new ComicViewModel
            {
                Id = comic.Id,
                Title = comic.Title,
                Pages = comic.Pages
            };
        }

        public IEnumerable<ComicViewModel> MapListToViewModel(IEnumerable<Comic> comics)
        {
            List<ComicViewModel> viewModels = new List<ComicViewModel>();

            foreach (var comic in comics)
            {
                viewModels.Add(MapToViewModel(comic));
            }

            return viewModels;
        }
    }
}
