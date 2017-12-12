import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BlogProvider } from '../../providers/blog/blog';

@IonicPage()
@Component({
  selector: 'page-blog-article',
  templateUrl: 'blog-article.html',
})
export class BlogArticlePage {

	post:any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public blog: BlogProvider) {
		this.post = navParams.get('post');
		
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BlogArticlePage');
	}

}
