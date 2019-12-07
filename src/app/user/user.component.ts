import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {

    // input for passing parameters (objects) in this component from another component
    @Input() user;
    
    isMarked: boolean = false;

    onClick() {
        this.isMarked=true;
        console.log(this.user.name);
    }

}