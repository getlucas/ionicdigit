import { Component } from '@angular/core';

import { BlogPage } from '../blog/blog';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BlogPage;

  constructor() {

  }
}
