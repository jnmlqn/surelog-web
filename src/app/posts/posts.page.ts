import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.page.html',
    styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

    dateFrom: string = '';
    dateTo: string = '';
    keyword: string = '';
    departments: any = [];
    departmentId: string = '';
    limit: string = '10';
    page: number = 1;
    search: any = null;
    sortBy: string = 'updated_at';
    sorting: string = 'desc';
    loader: boolean = false;
    project: any = {
        id: '',
        name: ''
    };
    posts: any = {
        data: {
            data: null
        }
    };

    constructor(
        private api: ApiService,
        private controller: ControllerService,
        private modalCtrl: ModalController,
    ) { }

    ngOnInit() {
        
    }

    ionViewWillEnter() {
        this.api.get(`hr-data`)
        .subscribe(
            (res: any) => {
                this.departments = res.data.departments;
            },
            (err: any) => {
                this.controller.showErrorAlert(err);
            }

        );
        this.postsList();
    }

    postsList() {
        this.loader = true;
        this.api.get(`posts?page=${this.page}&dateFrom=${this.dateFrom}&dateTo=${this.dateTo}&keyword=${this.keyword}&sortBy=${this.sortBy}&sorting=${this.sorting}&departmentId=${this.departmentId}&projectId=${this.project.id}&limit=${this.limit}`)
        .subscribe(
            (res: any) => {
                this.loader = false;
                this.posts = res;
            },
            (err: any) => {
                this.loader = false;
                this.controller.showErrorAlert(err);
            }
        ); 
    }

    deletePost(post) {
        let buttons = [
            {
                text: 'Yes',
                handler: () => {
                    this.controller.presentLoading('Deleting, please wait...').then((loading) => {
                        this.api.post(`posts/delete/${post.id}`, null)
                        .subscribe(
                            (res: any) => {
                                loading.dismiss();
                                this.controller.presentAlert('Success', res.message);
                                let i = this.posts.data.data.indexOf(post);
                                this.posts.data.data.splice(i, 1);
                            },
                            (err: any) => {
                                loading.dismiss();
                                this.controller.showErrorAlert(err);
                            }
                        )
                    });
                }
            }, 
            {
                text: 'no'
            }
        ];

        this.controller.presentAlert('Warning', 'Are you sure to delete this post?', buttons);
    }

    paginate(page) {
        if(page == 'pagination.previous') {
            this.page--;
        } else if(page == 'pagination.next') {
            this.page++;
        } else {
            this.page = page;
        }

        this.postsList();
    }

    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.postsList();
        }, 1000);
    }

    sortData(sortBy) {
        this.sortBy = sortBy;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.postsList();
    }

    async searchProject() {
        const modal = await this.modalCtrl.create({
            component: SearchPage,
            componentProps: {
                title: 'Search Project',
                url: 'projects?get=true&limit=20&keyword=',
                defaultLabel: 'No Project',
                defaultValue: ''

            }
        }); 

        await modal.present();

        const { data } = await modal.onWillDismiss();
        if (data !== undefined) {
            this.project = data.data;
            this.postsList();
        }
    }
}
