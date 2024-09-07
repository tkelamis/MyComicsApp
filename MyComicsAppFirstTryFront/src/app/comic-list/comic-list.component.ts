import { Component, Input } from '@angular/core';
import { ComicService } from '../Services/comic.service';
import { Comic } from '../Shared/Models/Comic';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrl: './comic-list.component.css'
})
export class ComicListComponent {
  comics: Comic[] = [];

  constructor(private comicService: ComicService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllComicsFromAPI();
  }


  getAllComicsFromAPI(): void {
    this.comicService.getComics().subscribe((data: Comic[]) => {
      this.comics = data;
    });
  }

  onRefreshRequestedAfterDelete(event: { flag?: boolean, comic?: Comic }) {
    if (event.flag) {
      this.snackBarMessageDeletionSuccess(event.comic?.title);
      this.getAllComicsFromAPI();
    }
    else {
      this.snackBarMessageDeletionFailed(event.comic?.title);
    }
  }



  snackBarMessageDeletionSuccess(textToAdd: any): void {
    const title = String(textToAdd);
    this.snackBar.open(`Comic "${title}" deleted successfully!`, undefined, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  snackBarMessageDeletionFailed(textToAdd: any): void {
    const title = String(textToAdd);
    this.snackBar.open(`Comic "${title}" deletion failed!`, undefined, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }



}
