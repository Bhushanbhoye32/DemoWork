import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Input() c:any

isDark=false;
ChangeMode()
{
if(this.isDark)
this.isDark=false;
else
this.isDark=true;
}
}
