import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {

  }

  titleList: Array<any> = [];
  firstChildItem: Array<any> = [];
  secondChildItem: Array<any> = [];
  thirdChildItem: Array<any> = [];
  forthChildItem: Array<any> = [];

  routeBreadcrumb = [
    {
      id: 1,
      title: 'داشبورد',
      path: 'dashboard',
      child: [
        {
          id: 11,
          title: '1 داشبورد',
          path: 'dashboard',
        }
      ]
    },
    {
      id: 2,
      title: 'فروشگاه',
      path: 'store'
    },
    {
      id: 3,
      title: 'پست',
      path: 'post',
      child: [
        {
          id: 31,
          title: '1 پست',
          path: 'post1'
        },
        {
          id: 32,
          title: '2 پست',
          path: 'post2'
        },
        {
          id: 33,
          title: '3 پست',
          path: 'post3',
          child: [
            {
              id: 113,
              title: '12 پست',
              path: 'post2'
            },
            {
              id: 123,
              title: '32 پست',
              path: 'post2'
            },
            {
              id: 133,
              title: '45 پست',
              path: 'post2',
              child: [
                {
                  id: 213,
                  title: '67 پست',
                  path: 'post2'
                },
                {
                  id: 223,
                  title: '56 پست',
                  path: 'post2'
                },
              ]
            },
          ]
        },
      ]
    }
  ];

  ngOnInit(): void {
    this.routeBreadcrumb.forEach((res: any) => {
      if (typeof res.child !== 'undefined') {
        res.child.forEach((firstChildList) => {
          this.firstChildItem.push(firstChildList);
          if (typeof firstChildList.child !== 'undefined') {
            firstChildList.child.forEach((secondChildList) => {
              this.secondChildItem.push(secondChildList);
              if (typeof secondChildList.child !== 'undefined') {
                secondChildList.child.forEach((thirdChildList) => {
                  this.thirdChildItem.push(thirdChildList);
                });
              }
            });
          }
        });
      }
    });
  }

}
