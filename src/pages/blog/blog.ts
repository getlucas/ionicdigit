import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BlogProvider } from '../../providers/blog/blog';

import { BlogArticlePage } from '../blog-article/blog-article';

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

	postlist: any = [];
	posts: any = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public blog: BlogProvider) {

		blog.getPosts().subscribe(response => {
			response.forEach(item => { 
				this.postlist.push({
					media: item.featured_media,
					postid: item.id,
					content: item.content.rendered,
					title: item.title.rendered
				});				

				this.postlist.forEach(x => {
					if(x.media){
						console.log('fetching meadia');
						blog.getFeaturedImage(x.media).subscribe(data => {
							x.featured_image = data.media_details.sizes.medium.source_url;
						});
					}
				})
			})
			console.log(this.postlist);
		}, e => {
			console.log('Error ',e);
		});

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BlogPage');
	}

	openArticle(post){
		console.log(post)
		this.navCtrl.push(BlogArticlePage, {
			post: post
		});
	}

}
