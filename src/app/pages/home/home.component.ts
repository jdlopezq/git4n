import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';
import { GithubService } from 'src/app/services/github.service';
import { CookieService } from 'ngx-cookie-service';
declare let particlesJS: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public toggleWelcome = 'welcome'

  constructor(private _cookiesService: CookieService) { }

  ngOnInit(): void {
    this.invokeParticles();
  this._cookiesService.deleteAll()
  }
  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () { });
  }

  showLoginCard(e: string) {
    this.toggleWelcome = e
  }

}
