import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogArticlePage } from './blog-article';

@NgModule({
  declarations: [
    BlogArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(BlogArticlePage),
  ],
})
export class BlogArticlePageModule {}
