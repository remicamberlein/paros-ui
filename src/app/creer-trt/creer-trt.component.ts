import { Component, OnInit } from '@angular/core';
import { Traitement } from '../traitement-item';

@Component({
  selector: 'app-creer-trt',
  templateUrl: './creer-trt.component.html',
  styleUrls: ['./creer-trt.component.css']
})
export class CreerTrtComponent implements OnInit {

	nom: string;
	desc: string;
	type: number;

  list_trt : Traitement[] = [
  /*
    {nom: 'test', desc: '', type: 1, dateCreation: new Date(), dateModif: null, dateSuppr: null},
    {nom: 'test2', desc: '', type: 1, dateCreation: new Date(), dateModif: null, dateSuppr: null}*/
    {nom: 'test', desc: '', type: 1}
  ];

	/*nom: string;
	description: string;
	type: number;
	dateCreation: Date;
	dateModif: Date;
	dateSuppr: Date;*/

  constructor() {
  	/*this.new_trt.dateCreation = new Date();*/
   }

  ngOnInit() {
  }

  save() : void{
    let trt = new Traitement(this.nom);
    trt.desc = this.desc
    this.list_trt.push(trt);
  }
}
