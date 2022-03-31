import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
@Component({
  selector: 'app-module-components',
  templateUrl: './module-components.component.html',
  styleUrls: ['./module-components.component.less']
})
export class ModuleComponentsComponent implements OnInit {

 lineageHtml: SafeHtml
		  constructor(private sanitized: DomSanitizer) {
			this.lineageHtml = this.sanitized.bypassSecurityTrustHtml(`
		<b> angular cli install behind corporate proxy
		<p>
		---------------------------------------------------
		</p>
		</b>
		<p>step: 0:</p>
		<p>--------</p>
		By default : once installed Node Js without comparny proxy it will set npm registry.<br>
		If you want to set global npm regristry follow the step. <b><em> But for our case start from Step:1</em></b>
		<p>
		npm set registry http://registry.npmjs.org/

		</p>
		Seems it is a certificate expire issue with:
		<p>
		npm registry https://registry.npmjs.org/</p>
		in stead run:
		<p>
		delete proxy:
		-----------
		npm config rm proxy
		npm config rm https-proxy
		</p>

		<p>
		Step 1

		Open command prompt of your system (run as administrator).
		</p>
		<p>
		Step 2

		In command prompt, type the below-highlighted command and enter,

		C:\\windows\\system32>ping proxy      
		</p>
		<p>>                                                                                                                    

		Step 3

		You will find proxy URL of your work environment very similar to the below proxy URL format in the first line,

		proxy.[company name].com    or proxy.{extension}.[company name].net
		</p>
		<p>
		step:4

		<p><b><em>npm config set proxy http://proxy.company.com:8080</em></b></p>
		<p><b><em>npm config set https-proxy http://proxy.company.com:8080</em></b></p>
		<p><b><em><a href="https://kickstart.gaiacloud.jpmchase.net/docs/products/moneta-web/#node-js-installation-811x" target="_blank">
		https://kickstart.gaiacloud.jpmchase.net/docs/products/moneta-web/#node-js-installation-811x</a></em></b></p>
		</p>

			  
		`)
		  }

		  ngOnInit() {
		  }
}
