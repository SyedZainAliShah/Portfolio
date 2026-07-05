import { Injectable, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'en' | 'de';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('en');
  private browser = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.browser = isPlatformBrowser(platformId);
    if (this.browser) {
      const saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'de') this.lang.set(saved);
      document.documentElement.lang = this.lang();
    }
  }

  toggle(): void {
    this.set(this.lang() === 'en' ? 'de' : 'en');
  }

  set(l: Lang): void {
    this.lang.set(l);
    if (this.browser) {
      localStorage.setItem('lang', l);
      document.documentElement.lang = l;
    }
  }

  t(en: string, de: string): string {
    return this.lang() === 'de' ? de : en;
  }

  pick<T>(en: T, de: T): T {
    return this.lang() === 'de' ? de : en;
  }
}
