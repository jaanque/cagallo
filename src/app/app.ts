import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cagallo');

  showAd() {
    const adContainer = document.getElementById('adContainer');
    if (adContainer) {
      adContainer.innerHTML = '';
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.innerHTML = `atOptions = { 'key' : '9d2243d125f9ac015a8573a063b57c87', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {} };`;
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.src = '//www.highperformanceformat.com/9d2243d125f9ac015a8573a063b57c87/invoke.js';
      const script3 = document.createElement('script');
      script3.type = 'text/javascript';
      script3.src = '//pl28007585.effectivegatecpm.com/be/06/15/be061576de1067fa6021c4622e96dd76.js';
      adContainer.appendChild(script1);
      adContainer.appendChild(script2);
      adContainer.appendChild(script3);
    }
  }
}
