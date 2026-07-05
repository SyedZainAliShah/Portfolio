import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zain-portfolio';
  menuOpen = false;

  navLinks = [
    { en: 'Home', de: 'Start', href: '#home' },
    { en: 'Projects', de: 'Projekte', href: '#projects' },
    { en: 'About', de: 'Über mich', href: '#about' },
    { en: 'Contact', de: 'Kontakt', href: '#contact' },
  ];

  socials = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/syedzainalishah', icon: 'fa-brands fa-linkedin' },
    { label: 'GitHub', url: 'https://github.com/SyedZainAliShah', icon: 'fa-brands fa-github' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public lang: LanguageService) {}

  toggleMenu(): void { this.setMenu(!this.menuOpen); }
  closeMenu(): void { this.setMenu(false); }

  private setMenu(open: boolean): void {
    this.menuOpen = open;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = open ? 'hidden' : '';
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen) this.closeMenu();
  }
}
