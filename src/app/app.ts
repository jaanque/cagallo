import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cagallo');

  showAd() {
    const adContainer = document.getElementById('adContainer');
    if (!adContainer) return;

    adContainer.innerHTML = '';

    const ads = [
      () => {
        const script = document.createElement('script');
        script.async = true;
        script.dataset['cfasync'] = 'false';
        script.src = '//pl28007602.effectivegatecpm.com/6580bdf8007e8e5fc35951d3a4cbafed/invoke.js';
        const div = document.createElement('div');
        div.id = 'container-6580bdf8007e8e5fc35951d3a4cbafed';
        adContainer.appendChild(script);
        adContainer.appendChild(div);
      },
      () => {
        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.innerHTML = `atOptions = { 'key' : '1186b189263b24d87a8a97cbdf541045', 'format' : 'iframe', 'height' : 50, 'width' : 320, 'params' : {} };`;
        const script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = '//www.highperformanceformat.com/1186b189263b24d87a8a97cbdf541045/invoke.js';
        adContainer.appendChild(script1);
        adContainer.appendChild(script2);
      },
      () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//pl28007604.effectivegatecpm.com/89/52/31/8952314c70b8b60ca4f627f076bfebd6.js';
        adContainer.appendChild(script);
      },
      () => {
        window.open('https://www.effectivegatecpm.com/khi9uy8tzp?key=de8f2d6c70d672a45c8579475f7720bf', '_blank');
      },
      () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//pl28007585.effectivegatecpm.com/be/06/15/be061576de1067fa6021c4622e96dd76.js';
        adContainer.appendChild(script);
      },
      () => {
        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.innerHTML = `atOptions = { 'key' : '99d089a76b7dc7b907fef3be70d9f2db', 'format' : 'iframe', 'height' : 60, 'width' : 468, 'params' : {} };`;
        const script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = '//www.highperformanceformat.com/99d089a76b7dc7b907fef3be70d9f2db/invoke.js';
        adContainer.appendChild(script1);
        adContainer.appendChild(script2);
      },
      () => {
        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.innerHTML = `atOptions = { 'key' : '77490e58a46f4d9f9c824b36bc3c0e2c', 'format' : 'iframe', 'height' : 300, 'width' : 160, 'params' : {} };`;
        const script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = '//www.highperformanceformat.com/77490e58a46f4d9f9c824b36bc3c0e2c/invoke.js';
        adContainer.appendChild(script1);
        adContainer.appendChild(script2);
      },
      () => {
        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.innerHTML = `atOptions = { 'key' : '19027e3e7113442760e029991b835b33', 'format' : 'iframe', 'height' : 600, 'width' : 160, 'params' : {} };`;
        const script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = '//www.highperformanceformat.com/19027e3e7113442760e029991b835b33/invoke.js';
        adContainer.appendChild(script1);
        adContainer.appendChild(script2);
      },
      () => {
        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.innerHTML = `atOptions = { 'key' : '9d2243d125f9ac015a8573a063b57c87', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {} };`;
        const script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = '//www.highperformanceformat.com/9d2243d125f9ac015a8573a063b57c87/invoke.js';
        adContainer.appendChild(script1);
        adContainer.appendChild(script2);
      },
      () => {
        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.innerHTML = `atOptions = { 'key' : '5f0cf27b58228ec925d47ac05b37e85f', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };`;
        const script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = '//www.highperformanceformat.com/5f0cf27b58228ec925d47ac05b37e85f/invoke.js';
        adContainer.appendChild(script1);
        adContainer.appendChild(script2);
      }
    ];

    const randomIndex = Math.floor(Math.random() * ads.length);
    ads[randomIndex]();
  }
}
