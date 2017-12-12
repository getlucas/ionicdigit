import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogProvider {

	constructor(public http: HttpClient) {
		console.log('Hello BlogProvider Provider');
	}

	getPosts(){
		return this.http.get('http://doubledigit.org.uk/wp-json/wp/v2/posts');
	}

	getArticle(postid){
		return this.http.get('http://doubledigit.org.uk/wp-json/wp/v2/posts/'+postid);
	}

	getFeaturedImage(mediaid){
		return this.http.get('http://www.doubledigit.org.uk/wp-json/wp/v2/media/'+mediaid);
	}

}