import { Component } from '@angular/core';
import { ComicService } from '../Services/comic.service';
import { Comic } from '../Shared/Models/Comic';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrl: './comic-list.component.css'
})
export class ComicListComponent {
  comics: Comic[] = [];

  constructor(private comicService: ComicService) { }

  ngOnInit(): void {
    this.getAllComicsFromAPI();
  }


  getAllComicsFromAPI(): void {
    this.comicService.getComics().subscribe((data: Comic[]) => {
      this.comics = data;
    });
  }

  deleteComic(comic: Comic) {
    if (comic && comic.id) {
      this.comicService.deleteComicFromDatabase(comic.id.toString()).subscribe(
        () => {
          console.log("Comic deleted successfully");
          this.getAllComicsFromAPI();
        },
        (error) => {
          console.error('Error deleting comic:', error);
        }
      );
    } else {
      console.error('Invalid comic or comic ID.');
    }
  }

  cancelDelete(): void {
    // Handle cancellation if needed
    console.log('Delete action was canceled');
  }
}
